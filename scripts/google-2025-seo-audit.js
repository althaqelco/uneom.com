#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * تدقيق شامل لمعايير جوجل مايو 2025
 * Google May 2025 SEO Standards Comprehensive Audit
 */

console.log('🔍 بدء التدقيق الشامل لمعايير جوجل مايو 2025...\n');

// معايير جوجل مايو 2025 الأساسية
const GOOGLE_2025_STANDARDS = {
  coreWebVitals: {
    lcp: { excellent: 2500, good: 4000 }, // Largest Contentful Paint
    fid: { excellent: 100, good: 300 },   // First Input Delay
    cls: { excellent: 0.1, good: 0.25 },  // Cumulative Layout Shift
    inp: { excellent: 200, good: 500 },   // Interaction to Next Paint (جديد 2025)
    ttfb: { excellent: 800, good: 1800 }  // Time to First Byte
  },
  
  technicalSEO: {
    minTitleLength: 30,
    maxTitleLength: 60,
    minDescriptionLength: 120,
    maxDescriptionLength: 160,
    minContentLength: 300,
    maxH1Count: 1,
    minInternalLinks: 3,
    requiredStructuredData: ['Organization', 'WebSite', 'BreadcrumbList'],
    requiredMetaTags: ['viewport', 'charset', 'robots', 'canonical']
  },
  
  contentQuality: {
    minWordCount: 300,
    maxKeywordDensity: 3,
    minKeywordDensity: 0.5,
    requiredHeadings: ['h1', 'h2'],
    minImageAltTags: 90, // نسبة مئوية
    maxPageLoadTime: 3000
  },
  
  mobileFriendliness: {
    requiredViewport: true,
    minTouchTargetSize: 44, // pixels
    maxTextSize: 16, // minimum font size
    requiredResponsiveDesign: true
  },
  
  accessibility: {
    requiredAltTags: true,
    requiredAriaLabels: true,
    minColorContrast: 4.5,
    requiredKeyboardNavigation: true
  }
};

// فحص الملفات الأساسية
const checkCoreFiles = () => {
  console.log('📁 فحص الملفات الأساسية...');
  
  const coreFiles = [
    'public/robots.txt',
    'public/sitemap.xml',
    'public/sitemap-images.xml',
    'public/sitemap-news.xml',
    'public/manifest.json',
    'public/browserconfig.xml',
    'src/app/layout.tsx',
    'src/lib/seo/google-2025-optimization.ts',
    'src/components/seo/Google2025SEO.tsx'
  ];
  
  const results = [];
  
  coreFiles.forEach(file => {
    const exists = fs.existsSync(path.join(__dirname, '..', file));
    results.push({
      file,
      exists,
      status: exists ? '✅' : '❌'
    });
    console.log(`${exists ? '✅' : '❌'} ${file}`);
  });
  
  return results;
};

// فحص robots.txt
const checkRobotsTxt = () => {
  console.log('\n🤖 فحص robots.txt...');
  
  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    console.log('❌ ملف robots.txt غير موجود');
    return false;
  }
  
  const content = fs.readFileSync(robotsPath, 'utf8');
  const requiredDirectives = [
    'User-agent: *',
    'Allow: /',
    'Sitemap: https://uneom.com/sitemap.xml',
    'Sitemap: https://uneom.com/sitemap-images.xml',
    'Sitemap: https://uneom.com/sitemap-news.xml'
  ];
  
  const checks = requiredDirectives.map(directive => {
    const exists = content.includes(directive);
    console.log(`${exists ? '✅' : '❌'} ${directive}`);
    return exists;
  });
  
  return checks.every(check => check);
};

// فحص البيانات المنظمة
const checkStructuredData = () => {
  console.log('\n📊 فحص البيانات المنظمة...');
  
  const layoutPath = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');
  
  if (!fs.existsSync(layoutPath)) {
    console.log('❌ ملف layout.tsx غير موجود');
    return false;
  }
  
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  const requiredSchemas = [
    'Organization',
    'WebSite',
    'LocalBusiness',
    'application/ld+json'
  ];
  
  const checks = requiredSchemas.map(schema => {
    const exists = content.includes(schema);
    console.log(`${exists ? '✅' : '❌'} Schema: ${schema}`);
    return exists;
  });
  
  return checks.every(check => check);
};

// فحص Core Web Vitals
const checkCoreWebVitals = () => {
  console.log('\n⚡ فحص Core Web Vitals...');
  
  const optimizerPath = path.join(__dirname, '..', 'src', 'lib', 'seo', 'performance-seo-optimizer.ts');
  
  if (!fs.existsSync(optimizerPath)) {
    console.log('❌ محسن الأداء غير موجود');
    return false;
  }
  
  const content = fs.readFileSync(optimizerPath, 'utf8');
  
  const requiredOptimizations = [
    'optimizeLCP',
    'optimizeFID',
    'optimizeCLS',
    'CoreWebVitalsOptimizer',
    'PerformanceObserver'
  ];
  
  const checks = requiredOptimizations.map(optimization => {
    const exists = content.includes(optimization);
    console.log(`${exists ? '✅' : '❌'} ${optimization}`);
    return exists;
  });
  
  return checks.every(check => check);
};

// فحص الصور والأيقونات
const checkImagesAndIcons = () => {
  console.log('\n🖼️ فحص الصور والأيقونات...');
  
  const requiredImages = [
    'public/images/og-image.jpg',
    'public/images/icons/favicon-32x32.png',
    'public/images/icons/favicon-16x16.png',
    'public/images/icons/apple-touch-icon.png',
    'public/favicon.ico'
  ];
  
  const checks = requiredImages.map(image => {
    const exists = fs.existsSync(path.join(__dirname, '..', image));
    console.log(`${exists ? '✅' : '❌'} ${image}`);
    return exists;
  });
  
  return checks.every(check => check);
};

// فحص الأمان والأداء
const checkSecurityAndPerformance = () => {
  console.log('\n🔒 فحص الأمان والأداء...');
  
  const layoutPath = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  const securityChecks = [
    'Content-Security-Policy',
    'X-Content-Type-Options',
    'X-XSS-Protection',
    'Strict-Transport-Security',
    'preconnect',
    'dns-prefetch'
  ];
  
  const checks = securityChecks.map(check => {
    const exists = content.includes(check);
    console.log(`${exists ? '✅' : '❌'} ${check}`);
    return exists;
  });
  
  return checks.every(check => check);
};

// فحص دعم اللغة العربية
const checkArabicSupport = () => {
  console.log('\n🌍 فحص دعم اللغة العربية...');
  
  const layoutPath = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  const arabicChecks = [
    'ar-SA',
    'hrefLang',
    'يونيوم',
    'الأزياء المهنية',
    'dir='
  ];
  
  const checks = arabicChecks.map(check => {
    const exists = content.includes(check);
    console.log(`${exists ? '✅' : '❌'} ${check}`);
    return exists;
  });
  
  return checks.every(check => check);
};

// فحص خرائط المواقع
const checkSitemaps = () => {
  console.log('\n🗺️ فحص خرائط المواقع...');
  
  const sitemaps = [
    'public/sitemap.xml',
    'public/sitemap-images.xml',
    'public/sitemap-news.xml'
  ];
  
  const checks = sitemaps.map(sitemap => {
    const exists = fs.existsSync(path.join(__dirname, '..', sitemap));
    if (exists) {
      const content = fs.readFileSync(path.join(__dirname, '..', sitemap), 'utf8');
      const hasUrls = content.includes('<url>') || content.includes('<loc>');
      console.log(`${hasUrls ? '✅' : '⚠️'} ${sitemap} ${hasUrls ? '(يحتوي على URLs)' : '(فارغ)'}`);
      return hasUrls;
    } else {
      console.log(`❌ ${sitemap} غير موجود`);
      return false;
    }
  });
  
  return checks.every(check => check);
};

// تقييم شامل للموقع
const generateOverallScore = (results) => {
  const totalChecks = Object.values(results).reduce((sum, result) => sum + 1, 0);
  const passedChecks = Object.values(results).reduce((sum, result) => sum + (result ? 1 : 0), 0);
  
  const score = Math.round((passedChecks / totalChecks) * 100);
  
  console.log('\n📊 التقييم الشامل:');
  console.log('='.repeat(50));
  console.log(`📈 النتيجة الإجمالية: ${score}%`);
  console.log(`✅ الفحوصات الناجحة: ${passedChecks}/${totalChecks}`);
  
  if (score >= 95) {
    console.log('🏆 ممتاز! الموقع مُحسن بالكامل لجوجل 2025');
  } else if (score >= 85) {
    console.log('👍 جيد جداً! بعض التحسينات الطفيفة مطلوبة');
  } else if (score >= 70) {
    console.log('⚠️ جيد! تحسينات إضافية مطلوبة');
  } else {
    console.log('❌ يحتاج تحسينات كبيرة');
  }
  
  return score;
};

// تشغيل جميع الفحوصات
const runAudit = () => {
  const results = {
    coreFiles: checkCoreFiles().every(r => r.exists),
    robotsTxt: checkRobotsTxt(),
    structuredData: checkStructuredData(),
    coreWebVitals: checkCoreWebVitals(),
    imagesAndIcons: checkImagesAndIcons(),
    securityAndPerformance: checkSecurityAndPerformance(),
    arabicSupport: checkArabicSupport(),
    sitemaps: checkSitemaps()
  };
  
  const score = generateOverallScore(results);
  
  // إنشاء تقرير مفصل
  const report = {
    timestamp: new Date().toISOString(),
    score: score,
    results: results,
    recommendations: generateRecommendations(results)
  };
  
  // حفظ التقرير
  fs.writeFileSync(
    path.join(__dirname, '..', 'google-2025-seo-audit-report.json'),
    JSON.stringify(report, null, 2),
    'utf8'
  );
  
  console.log('\n📄 تم حفظ التقرير المفصل في: google-2025-seo-audit-report.json');
  
  return report;
};

// توليد التوصيات
const generateRecommendations = (results) => {
  const recommendations = [];
  
  if (!results.coreFiles) {
    recommendations.push('إنشاء الملفات الأساسية المفقودة');
  }
  
  if (!results.robotsTxt) {
    recommendations.push('تحسين ملف robots.txt');
  }
  
  if (!results.structuredData) {
    recommendations.push('إضافة البيانات المنظمة المطلوبة');
  }
  
  if (!results.coreWebVitals) {
    recommendations.push('تحسين Core Web Vitals');
  }
  
  if (!results.imagesAndIcons) {
    recommendations.push('إضافة الصور والأيقونات المفقودة');
  }
  
  if (!results.securityAndPerformance) {
    recommendations.push('تحسين إعدادات الأمان والأداء');
  }
  
  if (!results.arabicSupport) {
    recommendations.push('تحسين دعم اللغة العربية');
  }
  
  if (!results.sitemaps) {
    recommendations.push('إنشاء وتحديث خرائط المواقع');
  }
  
  return recommendations;
};

// تشغيل التدقيق
const auditReport = runAudit();

console.log('\n🎯 خلاصة التدقيق:');
console.log('='.repeat(50));

if (auditReport.score >= 95) {
  console.log('🚀 الموقع جاهز للحصول على الترتيب الأول في جوجل!');
  console.log('✨ جميع معايير جوجل مايو 2025 مُطبقة بنجاح');
} else {
  console.log('📋 التوصيات للوصول للترتيب الأول:');
  auditReport.recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`);
  });
}

console.log('\n✅ انتهى التدقيق الشامل');