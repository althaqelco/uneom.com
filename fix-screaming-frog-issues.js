const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

class ScreeningFrogSEOFixer {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.appDir = path.join(process.cwd(), 'src', 'app');
    this.baseUrl = 'https://uneom.com';
    this.requiredWordCount = 300;
  }

  // Main execution function
  async run() {
    console.log('🔍 Starting Screaming Frog SEO Issue Analysis...\n');
    
    await this.scanPages();
    await this.generateReport();
    await this.applyFixes();
    
    console.log('\n✅ SEO Analysis Complete!');
  }

  // Scan all page files for SEO issues
  async scanPages() {
    const pageFiles = this.getAllPageFiles(this.appDir);
    
    for (const filePath of pageFiles) {
      await this.analyzePage(filePath);
    }
  }

  // Get all page.tsx files recursively
  getAllPageFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      if (item.startsWith('_') || item === 'api') continue;
      
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.getAllPageFiles(fullPath, files);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  // Analyze individual page for SEO issues
  async analyzePage(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(this.appDir, filePath);
    const urlPath = this.getUrlFromPath(relativePath);
    
    const analysis = {
      file: relativePath,
      url: urlPath,
      isArabic: urlPath.includes('/ar/'),
      issues: [],
      content: content
    };

    // Check for missing H1 tags
    await this.checkH1Tags(analysis);
    
    // Check for content length issues
    await this.checkContentLength(analysis);
    
    // Check for metadata issues
    await this.checkMetadata(analysis);
    
    // Check for proper React structure
    await this.checkReactStructure(analysis);
    
    if (analysis.issues.length > 0) {
      this.issues.push(analysis);
    }
  }

  // Convert file path to URL path
  getUrlFromPath(relativePath) {
    let urlPath = relativePath
      .replace('page.tsx', '')
      .replace(/\\/g, '/')
      .replace(/\/$/, '');
    
    if (urlPath === '') urlPath = '/';
    else if (!urlPath.endsWith('/')) urlPath += '/';
    
    return urlPath;
  }

  // Check for H1 tag issues
  async checkH1Tags(analysis) {
    const { content, isArabic } = analysis;
    
    // Check if H1 is present in JSX
    const h1Patterns = [
      /<h1[^>]*>/gi,
      /{.*h1.*}/gi,
      /className.*h1/gi
    ];
    
    const hasH1 = h1Patterns.some(pattern => pattern.test(content));
    
    if (!hasH1) {
      analysis.issues.push({
        type: 'MISSING_H1',
        severity: 'CRITICAL',
        message: isArabic 
          ? 'صفحة تفتقر إلى علامة H1 (عنوان رئيسي)'
          : 'Page missing H1 tag (main heading)',
        fix: this.generateH1Fix(analysis)
      });
    }
  }

  // Check for content length issues
  async checkContentLength(analysis) {
    const { content, isArabic } = analysis;
    
    // Extract text content from JSX
    const textContent = this.extractTextFromJSX(content);
    const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
    
    if (wordCount < this.requiredWordCount) {
      analysis.issues.push({
        type: 'LOW_WORD_COUNT',
        severity: 'CRITICAL',
        message: isArabic
          ? `محتوى قليل: ${wordCount} كلمة (الحد الأدنى: ${this.requiredWordCount})`
          : `Low word count: ${wordCount} words (minimum: ${this.requiredWordCount})`,
        wordCount,
        fix: this.generateContentFix(analysis)
      });
    }
  }

  // Check for metadata issues
  async checkMetadata(analysis) {
    const { content, isArabic } = analysis;
    
    // Check for SEO component usage
    const hasSEOComponent = content.includes('import SEO') || content.includes('<SEO');
    const hasMetadata = content.includes('export const metadata') || content.includes('export { metadata }');
    
    if (!hasSEOComponent && !hasMetadata) {
      analysis.issues.push({
        type: 'MISSING_METADATA',
        severity: 'HIGH',
        message: isArabic
          ? 'مفقود: مكون SEO أو بيانات وصفية'
          : 'Missing SEO component or metadata export',
        fix: this.generateMetadataFix(analysis)
      });
    }

    // Check for unique title and description
    if (content.includes('title="') || content.includes("title: '")) {
      const titleMatch = content.match(/title[=:][\s]*['"](.*?)['"]/);
      if (titleMatch && titleMatch[1].length < 30) {
        analysis.issues.push({
          type: 'SHORT_TITLE',
          severity: 'MEDIUM',
          message: isArabic
            ? 'عنوان قصير جداً (أقل من 30 حرف)'
            : 'Title too short (less than 30 characters)',
          fix: this.generateTitleFix(analysis, titleMatch[1])
        });
      }
    }
  }

  // Check React structure issues
  async checkReactStructure(analysis) {
    const { content } = analysis;
    
    // Check for 'use client' with metadata export (conflicting pattern)
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      analysis.issues.push({
        type: 'CLIENT_METADATA_CONFLICT',
        severity: 'HIGH',
        message: 'Client component with metadata export (Next.js conflict)',
        fix: this.generateStructureFix(analysis)
      });
    }

    // Check for missing semantic HTML structure
    const hasSemanticStructure = ['<main', '<section', '<article', '<aside'].some(tag => 
      content.includes(tag)
    );
    
    if (!hasSemanticStructure) {
      analysis.issues.push({
        type: 'MISSING_SEMANTIC_HTML',
        severity: 'MEDIUM',
        message: 'Missing semantic HTML structure (main, section, article)',
        fix: this.generateSemanticFix(analysis)
      });
    }
  }

  // Extract readable text from JSX content
  extractTextFromJSX(content) {
    // Remove imports, exports, and function declarations
    let textContent = content
      .replace(/import.*?from.*?;/g, '')
      .replace(/export.*?;/g, '')
      .replace(/function.*?{/g, '')
      .replace(/const.*?=/g, '')
      .replace(/interface.*?{.*?}/gs, '')
      .replace(/\/\*.*?\*\//gs, '')
      .replace(/\/\/.*$/gm, '');

    // Extract text from JSX strings
    const stringMatches = textContent.match(/['"`](.*?)['"`]/g) || [];
    const extractedText = stringMatches
      .map(match => match.slice(1, -1))
      .filter(text => text.length > 5)
      .join(' ');

    return extractedText;
  }

  // Generate H1 fix suggestions
  generateH1Fix(analysis) {
    const { url, isArabic } = analysis;
    
    const h1Suggestions = {
      '/': isArabic 
        ? 'يونيوم - الشركة الرائدة في تصنيع اليونيفورم بالمملكة العربية السعودية'
        : 'UNEOM - Leading Uniform Manufacturer in Saudi Arabia',
      '/about/': isArabic
        ? 'عن يونيوم - رحلتنا في تصنيع اليونيفورم المهني'
        : 'About UNEOM - Our Journey in Professional Uniform Manufacturing',
      '/services/': isArabic
        ? 'خدماتنا الشاملة لحلول اليونيفورم المهني'
        : 'Our Comprehensive Professional Uniform Solutions',
      '/contact/': isArabic
        ? 'تواصل معنا - احصل على استشارة مجانية لاحتياجات اليونيفورم'
        : 'Contact Us - Get Free Consultation for Your Uniform Needs'
    };

    // Generate industry-specific H1s
    if (url.includes('/industries/')) {
      const industry = url.split('/industries/')[1].replace('/', '');
      const industryH1s = {
        healthcare: isArabic 
          ? 'يونيفورم الرعاية الصحية المتطور للمهنيين الطبيين في السعودية'
          : 'Advanced Healthcare Uniforms for Medical Professionals in Saudi Arabia',
        corporate: isArabic
          ? 'الزي الموحد للشركات - حلول احترافية للهوية المؤسسية'
          : 'Corporate Uniforms - Professional Solutions for Business Identity',
        hospitality: isArabic
          ? 'يونيفورم الضيافة الراقي للفنادق والمطاعم السعودية'
          : 'Premium Hospitality Uniforms for Saudi Hotels and Restaurants',
        aviation: isArabic
          ? 'يونيفورم الطيران المتميز لشركات الطيران السعودية'
          : 'Distinguished Aviation Uniforms for Saudi Airlines',
        industrial: isArabic
          ? 'ملابس العمل الصناعية المتينة للسلامة والراحة'
          : 'Durable Industrial Workwear for Safety and Comfort'
      };
      
      return industryH1s[industry] || (isArabic 
        ? `يونيفورم ${industry} عالي الجودة من يونيوم`
        : `High-Quality ${industry} Uniforms by UNEOM`);
    }

    return h1Suggestions[url] || (isArabic 
      ? 'يونيوم - حلول اليونيفورم المهني'
      : 'UNEOM - Professional Uniform Solutions');
  }

  // Generate content enhancement suggestions
  generateContentFix(analysis) {
    const { url, isArabic, wordCount } = analysis;
    
    const contentTemplates = {
      '/': {
        en: `<section className="py-16">
          <Container>
            <h2 className="text-3xl font-bold mb-8">Why Choose UNEOM for Your Uniform Needs?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Saudi Quality Standards</h3>
                <p>All our uniforms meet the highest Saudi quality standards and are designed specifically for the Kingdom's climate and professional requirements.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Local Manufacturing</h3>
                <p>Proudly manufactured in Saudi Arabia, supporting local economy while ensuring quick delivery and competitive pricing for all regions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                <p>With decades of experience serving healthcare, corporate, hospitality, and industrial sectors across Riyadh, Jeddah, and Dammam.</p>
              </div>
            </div>
          </Container>
        </section>`,
        ar: `<section className="py-16">
          <Container>
            <h2 className="text-3xl font-bold mb-8">لماذا تختار يونيوم لاحتياجات اليونيفورم؟</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">معايير الجودة السعودية</h3>
                <p>جميع منتجاتنا تلبي أعلى معايير الجودة السعودية ومصممة خصيصاً لمناخ المملكة والمتطلبات المهنية.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">التصنيع المحلي</h3>
                <p>نفخر بالتصنيع في المملكة العربية السعودية، ندعم الاقتصاد المحلي مع ضمان التسليم السريع والأسعار التنافسية.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">الخبرة القطاعية</h3>
                <p>مع عقود من الخبرة في خدمة قطاعات الرعاية الصحية والشركات والضيافة والصناعة في الرياض وجدة والدمام.</p>
              </div>
            </div>
          </Container>
        </section>`
      }
    };

    return {
      type: 'content_enhancement',
      wordsNeeded: this.requiredWordCount - wordCount,
      template: contentTemplates[url] || contentTemplates['/'],
      instruction: isArabic
        ? `أضف المحتوى التالي لزيادة عدد الكلمات وتحسين SEO`
        : `Add the following content to increase word count and improve SEO`
    };
  }

  // Generate title fix suggestions
  generateTitleFix(analysis, currentTitle) {
    const { url, isArabic } = analysis;
    const newTitle = this.generateTitle(url, isArabic);
    
    return {
      type: 'title_improvement',
      currentTitle,
      suggestedTitle: newTitle,
      instruction: isArabic
        ? `استبدل العنوان الحالي "${currentTitle}" بالعنوان المحسن "${newTitle}"`
        : `Replace current title "${currentTitle}" with improved title "${newTitle}"`
    };
  }

  // Generate metadata fix suggestions
  generateMetadataFix(analysis) {
    const { url, isArabic } = analysis;
    
    return {
      type: 'metadata_addition',
      code: `import SEO from '@/components/SEO';

// Add to your component's return statement
<SEO
  title="${this.generateTitle(url, isArabic)}"
  description="${this.generateDescription(url, isArabic)}"
  canonicalUrl="${this.baseUrl}${url}"
  ogImage="/images/og-default.jpg"
/>`
    };
  }

  // Generate appropriate titles
  generateTitle(url, isArabic) {
    const titleTemplates = {
      '/': isArabic 
        ? 'يونيوم | الشركة الرائدة في تصنيع اليونيفورم بالمملكة العربية السعودية'
        : 'UNEOM | Leading Uniform Manufacturer in Saudi Arabia',
      '/about/': isArabic
        ? 'عن يونيوم | رحلتنا في صناعة اليونيفورم المهني في السعودية'
        : 'About UNEOM | Our Journey in Professional Uniform Industry in Saudi Arabia',
      '/services/': isArabic
        ? 'خدماتنا | حلول شاملة لليونيفورم المهني في المملكة'
        : 'Our Services | Comprehensive Professional Uniform Solutions in Kingdom'
    };

    return titleTemplates[url] || `UNEOM - Professional Uniforms${isArabic ? ' | يونيوم' : ''}`;
  }

  // Generate appropriate descriptions
  generateDescription(url, isArabic) {
    const descTemplates = {
      '/': isArabic
        ? 'يونيوم الشركة الرائدة في تصنيع وتوريد اليونيفورم المهني في السعودية. نقدم حلول متكاملة للزي الموحد للرعاية الصحية والشركات والضيافة والصناعة في الرياض وجدة والدمام.'
        : 'UNEOM is the leading manufacturer and supplier of professional uniforms in Saudi Arabia. We provide integrated uniform solutions for healthcare, corporate, hospitality, and industrial sectors in Riyadh, Jeddah, and Dammam.',
      '/about/': isArabic
        ? 'تعرف على قصة يونيوم ورحلتنا في أن نصبح الشركة الرائدة في صناعة اليونيفورم المهني في المملكة العربية السعودية.'
        : 'Learn about UNEOM\'s story and our journey to become the leading professional uniform manufacturer in Saudi Arabia.'
    };

    return descTemplates[url] || `Professional uniform solutions by UNEOM${isArabic ? ' | حلول اليونيفورم المهني من يونيوم' : ''}`;
  }

  // Generate structure fix for client/metadata conflicts
  generateStructureFix(analysis) {
    return {
      type: 'structure_fix',
      instruction: `Split into server and client components:
      
1. Create ${analysis.file.replace('.tsx', '-client.tsx')} with 'use client' directive
2. Move interactive elements to client component
3. Keep metadata export in server component (${analysis.file})
4. Import and render client component in server component`
    };
  }

  // Generate semantic HTML fix
  generateSemanticFix(analysis) {
    return {
      type: 'semantic_html',
      template: `return (
  <main>
    <section className="hero-section">
      {/* Hero content */}
    </section>
    
    <section className="main-content">
      {/* Main page content */}
    </section>
    
    <section className="cta-section">
      {/* Call to action */}
    </section>
  </main>
);`
    };
  }

  // Generate comprehensive report
  async generateReport() {
    console.log('📊 SEO Issues Report\n');
    console.log('='.repeat(50));
    
    if (this.issues.length === 0) {
      console.log('✅ No critical SEO issues found!');
      return;
    }

    const severityCounts = {
      CRITICAL: 0,
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0
    };

    this.issues.forEach(page => {
      console.log(`\n📄 ${page.file} (${page.url})`);
      console.log('-'.repeat(30));
      
      page.issues.forEach(issue => {
        severityCounts[issue.severity]++;
        const emoji = this.getSeverityEmoji(issue.severity);
        console.log(`${emoji} ${issue.severity}: ${issue.message}`);
      });
    });

    console.log('\n📈 Summary:');
    console.log(`🔴 Critical: ${severityCounts.CRITICAL}`);
    console.log(`🟠 High: ${severityCounts.HIGH}`);
    console.log(`🟡 Medium: ${severityCounts.MEDIUM}`);
    console.log(`🟢 Low: ${severityCounts.LOW}`);
    
    // Save detailed report to file
    await this.saveDetailedReport();
  }

  // Get emoji for severity level
  getSeverityEmoji(severity) {
    const emojiMap = {
      CRITICAL: '🔴',
      HIGH: '🟠',
      MEDIUM: '🟡',
      LOW: '🟢'
    };
    return emojiMap[severity] || '⚪';
  }

  // Save detailed report to file
  async saveDetailedReport() {
    const reportData = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPages: this.issues.length,
        totalIssues: this.issues.reduce((sum, page) => sum + page.issues.length, 0)
      },
      issues: this.issues
    };

    const reportPath = path.join(process.cwd(), 'seo-issues-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    console.log(`\n💾 Detailed report saved to: ${reportPath}`);
  }

  // Apply automated fixes where possible
  async applyFixes() {
    console.log('\n🔧 Applying Automated Fixes...\n');
    
    let fixesApplied = 0;
    
    for (const page of this.issues) {
      for (const issue of page.issues) {
        if (this.canAutoFix(issue.type)) {
          await this.applyFix(page, issue);
          fixesApplied++;
        }
      }
    }
    
    console.log(`✅ Applied ${fixesApplied} automated fixes`);
    
    // Generate manual fix instructions
    await this.generateManualFixInstructions();
  }

  // Check if issue can be automatically fixed
  canAutoFix(issueType) {
    const autoFixable = [
      'MISSING_SEMANTIC_HTML',
      'SHORT_TITLE'
    ];
    return autoFixable.includes(issueType);
  }

  // Apply specific fix to a page
  async applyFix(page, issue) {
    const filePath = path.join(this.appDir, page.file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    switch (issue.type) {
      case 'MISSING_SEMANTIC_HTML':
        content = this.addSemanticHTML(content);
        break;
        
      case 'SHORT_TITLE':
        content = this.improveTitle(content, page);
        break;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${issue.type} in ${page.file}`);
  }

  // Add semantic HTML structure
  addSemanticHTML(content) {
    // Simple regex-based replacement for basic semantic structure
    if (!content.includes('<main') && content.includes('return (')) {
      content = content.replace(
        /return\s*\(\s*<>/,
        'return (\n    <main>'
      ).replace(
        /<\/>\s*\);/,
        '    </main>\n  );'
      );
    }
    return content;
  }

  // Improve page titles
  improveTitle(content, page) {
    const newTitle = this.generateTitle(page.url, page.isArabic);
    
    // Replace short titles with improved ones
    content = content.replace(
      /title[=:]\s*['"](.*?)['"]/, 
      `title="${newTitle}"`
    );
    
    return content;
  }

  // Generate manual fix instructions
  async generateManualFixInstructions() {
    const manualFixes = this.issues
      .flatMap(page => page.issues.filter(issue => !this.canAutoFix(issue.type)))
      .filter(issue => issue.fix);

    if (manualFixes.length === 0) return;

    console.log('\n📋 Manual Fixes Required:\n');
    
    const instructionsPath = path.join(process.cwd(), 'seo-manual-fixes.md');
    let instructions = '# Manual SEO Fixes Required\n\n';
    
    manualFixes.forEach((issue, index) => {
      instructions += `## ${index + 1}. ${issue.type}\n\n`;
      instructions += `**Issue:** ${issue.message}\n\n`;
      
      if (typeof issue.fix === 'object') {
        instructions += `**Fix:** ${issue.fix.instruction || issue.fix.type}\n\n`;
        if (issue.fix.code) {
          instructions += '```jsx\n' + issue.fix.code + '\n```\n\n';
        }
        if (issue.fix.template) {
          instructions += '```jsx\n' + issue.fix.template + '\n```\n\n';
        }
      } else {
        instructions += `**Fix:** ${issue.fix}\n\n`;
      }
      
      instructions += '---\n\n';
    });
    
    fs.writeFileSync(instructionsPath, instructions);
    console.log(`📝 Manual fix instructions saved to: ${instructionsPath}`);
  }
}

// Execute the SEO fixer
if (require.main === module) {
  const fixer = new ScreeningFrogSEOFixer();
  fixer.run().catch(console.error);
}

module.exports = ScreeningFrogSEOFixer;