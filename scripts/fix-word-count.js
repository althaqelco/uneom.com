#!/usr/bin/env node

/**
 * This script diagnoses and helps fix low word count issues
 * Usage: node scripts/fix-word-count.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');
const WORD_COUNT_MIN = 200;

/**
 * Counts words in a JSX/TSX file by extracting text from JSX elements
 * This is a simplified approach and might not catch all text
 */
function countWords(content) {
  try {
    // Remove import statements
    let cleanedContent = content.replace(/import.*?from.*?;/g, '');
    
    // Remove JSX tags
    cleanedContent = cleanedContent.replace(/<[^>]*>/g, ' ');
    
    // Remove JSX expressions like {variable}
    cleanedContent = cleanedContent.replace(/{[^}]*}/g, ' ');
    
    // Remove JavaScript code (this is imperfect but helps)
    cleanedContent = cleanedContent.replace(/export\s+default.*?{/gs, ' ');
    cleanedContent = cleanedContent.replace(/function\s+\w+\s*\([^)]*\)\s*{/g, ' ');
    cleanedContent = cleanedContent.replace(/const\s+\w+\s*=\s*(?:\([^)]*\)|)\s*=>/g, ' ');
    cleanedContent = cleanedContent.replace(/if\s*\([^)]*\)\s*{/g, ' ');
    
    // Remove comments
    cleanedContent = cleanedContent.replace(/\/\*[\s\S]*?\*\//g, ' ');
    cleanedContent = cleanedContent.replace(/\/\/.*/g, ' ');
    
    // Count words by splitting on whitespace
    const words = cleanedContent.split(/\s+/).filter(Boolean);
    return words.length;
  } catch (error) {
    console.error(`Error counting words: ${error.message}`);
    return 0;
  }
}

/**
 * Counts the string literals in a JSX file
 * This is a more targeted approach to find actual text content
 */
function countStringLiterals(content) {
  try {
    // Find all string literals in JSX (text between quotes within JSX tags)
    const jsxStringMatches = content.match(/<[^>]*>[^<>]*<\/[^>]*>/g) || [];
    
    let wordCount = 0;
    
    // Extract text from each JSX element and count words
    for (const match of jsxStringMatches) {
      const textMatch = match.match(/>([^<]+)</);
      if (textMatch && textMatch[1]) {
        const text = textMatch[1].trim();
        if (text) {
          const words = text.split(/\s+/).filter(Boolean);
          wordCount += words.length;
        }
      }
    }
    
    // Also find text in string literals assigned to variables
    const stringLiteralMatches = content.match(/['"]([^'"]*?[a-zA-Z][^'"]*?)['"](?!\s*:)/g) || [];
    
    for (const match of stringLiteralMatches) {
      const text = match.slice(1, -1).trim();
      if (text && text.length > 5) { // Ignore very short strings which are likely not content
        const words = text.split(/\s+/).filter(Boolean);
        wordCount += words.length;
      }
    }
    
    return wordCount;
  } catch (error) {
    console.error(`Error counting string literals: ${error.message}`);
    return 0;
  }
}

/**
 * Checks if a file might be a data file rather than a component
 */
function isDataFile(content) {
  // Data files usually don't have JSX or have minimal JSX
  const jsxCount = (content.match(/<[a-zA-Z][a-zA-Z0-9]*[^>]*>/g) || []).length;
  
  // Data files often have array or object declarations
  const hasDataStructures = content.includes('const data =') || 
                           content.includes('export const') ||
                           (content.match(/\[\s*{/g) || []).length > 0;
  
  return jsxCount < 5 && hasDataStructures;
}

/**
 * Identifies placeholder sections in a file that could use more content
 */
function identifyPlaceholderSections(filePath, content) {
  const fileName = path.basename(filePath);
  const dirName = path.basename(path.dirname(filePath));
  
  const placeholders = [];
  
  // Check for sections with likely placeholder content
  const sections = content.match(/<(section|div|main)[^>]*>([\s\S]*?)<\/(section|div|main)>/g) || [];
  
  for (const section of sections) {
    // Estimate the word count in this section
    const sectionWordCount = countStringLiterals(section);
    
    if (sectionWordCount < 30 && section.includes('<h2') && !section.includes('<ul') && !section.includes('<ol')) {
      placeholders.push({
        type: 'section-with-heading',
        wordCount: sectionWordCount,
        suggestion: 'Add more descriptive content after the heading'
      });
    }
  }
  
  // Check page type and make category-specific suggestions
  if (dirName === 'shop' || fileName.includes('product')) {
    placeholders.push({
      type: 'product-page',
      suggestion: 'Add detailed product descriptions, features, specifications, and usage instructions'
    });
  } else if (dirName === 'industries' || content.includes('industry')) {
    placeholders.push({
      type: 'industry-page',
      suggestion: 'Add industry-specific challenges, solutions, case studies, and testimonials'
    });
  } else if (dirName === 'services' || content.includes('service')) {
    placeholders.push({
      type: 'service-page',
      suggestion: 'Add detailed service descriptions, process explanations, benefits, and FAQs'
    });
  } else if (dirName === 'blog' || fileName.includes('blog')) {
    placeholders.push({
      type: 'blog-page',
      suggestion: 'Add comprehensive article content with introduction, main points, and conclusion'
    });
  }
  
  return placeholders;
}

/**
 * Adds placeholder content to a page with low word count
 */
function addPlaceholderContent(filePath, content, pagePath, isArabic) {
  try {
    // Generate appropriate placeholder content
    const placeholderContent = generatePlaceholderContent(pagePath, isArabic);
    
    // Find a suitable place to insert the content
    const componentMatch = content.match(/export\s+default\s+function\s+\w+\([^)]*\)\s*{/);
    
    if (!componentMatch) {
      console.log(`  ⚠️ Couldn't find component definition in ${filePath}`);
      return false;
    }
    
    // Find the first main, div, or section tag after the return statement
    const returnMatch = content.substring(componentMatch.index).match(/return\s*\(/);
    
    if (!returnMatch) {
      console.log(`  ⚠️ Couldn't find return statement in ${filePath}`);
      return false;
    }
    
    const startIndex = componentMatch.index + returnMatch.index + returnMatch[0].length;
    const mainTagMatch = content.substring(startIndex).match(/<(main|div|section)[^>]*>/);
    
    if (!mainTagMatch) {
      console.log(`  ⚠️ Couldn't find a suitable container in ${filePath}`);
      return false;
    }
    
    const insertIndex = startIndex + mainTagMatch.index + mainTagMatch[0].length;
    
    // Insert the placeholder content
    const updatedContent = 
      content.substring(0, insertIndex) + 
      '\n      {/* START: Added placeholder content to improve word count */}\n      ' + 
      placeholderContent + 
      '\n      {/* END: Added placeholder content */}\n      ' + 
      content.substring(insertIndex);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`  ✅ Added placeholder content to ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error adding placeholder content to ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Generates appropriate placeholder content based on the page path
 */
function generatePlaceholderContent(pagePath, isArabic) {
  // Extract page type from path
  const pathParts = pagePath.split('/').filter(Boolean);
  const pageCategory = pathParts[0] === 'ar' ? pathParts[1] : pathParts[0];
  const pageSubcategory = pathParts[0] === 'ar' ? pathParts[2] : pathParts[1];
  
  let content = '';
  
  if (isArabic) {
    // Arabic placeholder
    content = `<section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 rtl:text-right">لماذا تختار يونيوم؟</h2>
        <p className="mb-4 rtl:text-right">
          تعد يونيوم الشركة الرائدة في توفير الأزياء الموحدة عالية الجودة في المملكة العربية السعودية. 
          نحن نفخر بتقديم حلول مخصصة تلبي احتياجات مختلف القطاعات والصناعات.
        </p>
        <p className="mb-4 rtl:text-right">
          مع أكثر من 10 سنوات من الخبرة، نحن نجمع بين المعايير العالمية والفهم المحلي لتوفير منتجات تتميز بالجودة والأناقة والراحة.
          تستخدم جميع منتجاتنا أقمشة متينة ومريحة مناسبة للمناخ السعودي.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 rtl:text-right">مزايانا الرئيسية</h2>
        <ul className="list-disc pl-6 mb-4 rtl:pr-6 rtl:pl-0">
          <li className="mb-2 rtl:text-right">تصميم مخصص يعكس هوية علامتك التجارية</li>
          <li className="mb-2 rtl:text-right">أقمشة عالية الجودة تدوم طويلاً</li>
          <li className="mb-2 rtl:text-right">راحة فائقة مناسبة لساعات العمل الطويلة</li>
          <li className="mb-2 rtl:text-right">خيارات متنوعة من الألوان والأنماط</li>
          <li className="mb-2 rtl:text-right">خدمة عملاء استثنائية ودعم مستمر</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 rtl:text-right">نهجنا</h2>
        <p className="mb-4 rtl:text-right">
          نتبع نهجًا شاملاً في تطوير منتجاتنا. بدءًا من اختيار المواد وحتى التسليم النهائي، 
          نحرص على الالتزام بأعلى معايير الجودة. نعمل بشكل وثيق مع عملائنا لفهم احتياجاتهم المحددة وتقديم حلول تلبي توقعاتهم.
        </p>
        <p className="mb-4 rtl:text-right">
          نؤمن بأن الأزياء الموحدة تلعب دورًا مهمًا في تعزيز الهوية المؤسسية وتحسين تجربة الموظفين.
          لذلك، نصمم منتجاتنا لتكون وظيفية وأنيقة في آن واحد.
        </p>
      </section>`;
  } else {
    // English placeholder
    content = `<section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose UNEOM?</h2>
        <p className="mb-4">
          UNEOM is the leading provider of high-quality uniforms in Saudi Arabia. 
          We pride ourselves on delivering customized solutions that meet the needs of various sectors and industries.
        </p>
        <p className="mb-4">
          With over 10 years of experience, we combine international standards with local understanding to provide products that 
          excel in quality, elegance, and comfort. All our products use durable, comfortable fabrics suitable for the Saudi climate.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Key Advantages</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Custom designs that reflect your brand identity</li>
          <li className="mb-2">High-quality fabrics that stand the test of time</li>
          <li className="mb-2">Superior comfort for long working hours</li>
          <li className="mb-2">Wide range of color and pattern options</li>
          <li className="mb-2">Exceptional customer service and ongoing support</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="mb-4">
          We take a comprehensive approach to developing our products. From material selection to final delivery, 
          we ensure adherence to the highest quality standards. We work closely with our clients to understand their specific needs 
          and deliver solutions that meet their expectations.
        </p>
        <p className="mb-4">
          We believe that uniforms play an important role in enhancing corporate identity and improving employee experience. 
          Therefore, we design our products to be both functional and elegant.
        </p>
      </section>`;
  }
  
  // Customize further based on page category if needed
  if (pageCategory === 'shop' || pageCategory === 'industries' || pageCategory === 'services') {
    // Add category-specific content
    const categoryName = pageSubcategory || pageCategory;
    
    if (isArabic) {
      content += `\n      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 rtl:text-right">حلولنا لـ ${categoryName}</h2>
        <p className="mb-4 rtl:text-right">
          نتفهم التحديات الفريدة التي تواجه قطاع ${categoryName}. من خلال خبرتنا الواسعة، 
          طورنا حلولًا مخصصة تلبي المتطلبات المحددة لهذا القطاع.
        </p>
        <p className="mb-4 rtl:text-right">
          سواء كنت تبحث عن أزياء موحدة للموظفين أو ملابس متخصصة، يمكننا توفير الحل المثالي الذي 
          يجمع بين الأناقة والوظائف العملية والمتانة.
        </p>
      </section>`;
    } else {
      content += `\n      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Solutions for ${categoryName}</h2>
        <p className="mb-4">
          We understand the unique challenges faced by the ${categoryName} sector. Through our extensive experience, 
          we have developed customized solutions that address the specific requirements of this industry.
        </p>
        <p className="mb-4">
          Whether you're looking for staff uniforms or specialized clothing, we can provide the perfect solution that 
          combines elegance, functionality, and durability.
        </p>
      </section>`;
    }
  }
  
  return content;
}

/**
 * Analyzes a file for word count issues
 */
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip client components (these are imported by server components)
    if (content.includes("'use client'") || content.includes('"use client"')) {
      return { isClientComponent: true };
    }
    
    // Calculate word counts using different methods
    const totalWordCount = countWords(content);
    const stringLiteralCount = countStringLiterals(content);
    
    // Detect if it's likely a data file
    const possibleDataFile = isDataFile(content);
    
    // Get page path for context
    const pagePath = filePath.replace(APP_DIR, '').replace(/\\/g, '/').replace('page.tsx', '');
    const isArabic = pagePath.includes('/ar/');
    
    // Find potential placeholder sections
    const placeholders = identifyPlaceholderSections(filePath, content);
    
    return {
      isClientComponent: false,
      filePath,
      pagePath,
      isArabic,
      totalWordCount,
      stringLiteralCount,
      possibleDataFile,
      placeholders,
      content
    };
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error.message);
    return { error: true, filePath };
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Scanning for pages with low word count...');
  
  // Find all page.tsx files
  const pageFiles = glob.sync('**/page.tsx', { 
    cwd: APP_DIR, 
    absolute: true 
  });
  
  console.log(`Found ${pageFiles.length} pages to analyze.`);
  
  // Analyze each file
  const results = [];
  
  for (const filePath of pageFiles) {
    const result = analyzeFile(filePath);
    if (!result.isClientComponent && !result.error) {
      results.push(result);
    }
  }
  
  // Sort by word count
  results.sort((a, b) => a.stringLiteralCount - b.stringLiteralCount);
  
  // Identify pages with low word count
  const lowWordCountPages = results.filter(r => r.stringLiteralCount < WORD_COUNT_MIN && !r.possibleDataFile);
  
  console.log(`Found ${lowWordCountPages.length} pages with low word count (< ${WORD_COUNT_MIN} words).`);
  
  if (lowWordCountPages.length === 0) {
    console.log('✅ All pages have sufficient content!');
    return true;
  }
  
  // Report low word count pages
  console.log('\n📝 Pages with low word count:');
  lowWordCountPages.forEach((page, index) => {
    console.log(`${index + 1}. ${page.pagePath} - ${page.stringLiteralCount} words`);
    
    if (page.placeholders.length > 0) {
      console.log('   Suggestions:');
      page.placeholders.forEach(p => {
        console.log(`   - ${p.suggestion}`);
      });
    }
  });
  
  // Ask if user wants to add placeholder content
  console.log('\nWould you like to add placeholder content to these pages? (y/n)');
  process.stdout.write('> ');
  
  process.stdin.once('data', (data) => {
    const answer = data.toString().trim().toLowerCase();
    
    if (answer === 'y' || answer === 'yes') {
      console.log('\n🛠️ Adding placeholder content to low word count pages...');
      
      let fixedCount = 0;
      
      for (const page of lowWordCountPages) {
        console.log(`\nAddressing ${page.pagePath}...`);
        const fixed = addPlaceholderContent(page.filePath, page.content, page.pagePath, page.isArabic);
        
        if (fixed) {
          fixedCount++;
        }
      }
      
      console.log('\n📊 Summary:');
      console.log(`  • Found ${lowWordCountPages.length} pages with low word count`);
      console.log(`  • Added placeholder content to ${fixedCount} pages`);
      
      if (fixedCount === lowWordCountPages.length) {
        console.log('\n🎉 All pages with low word count have been fixed!');
      } else {
        console.log('\n⚠️ Some pages could not be fixed automatically. Please review them manually.');
      }
    } else {
      console.log('\n📋 No changes made. Consider adding content to these pages manually.');
    }
    
    process.exit(0);
  });
}

// Run the script
main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
}); 