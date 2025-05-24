/**
 * سكريبت لتحليل أنماط صفحات 404 وتصنيفها بشكل أكثر تفصيلاً
 */

const fs = require('fs');

// قراءة ملف التقرير الكامل
const data = JSON.parse(fs.readFileSync('full-site-report-v2.json', 'utf8'));
const status404 = data.results.status404;

// وظيفة لاستخراج أنماط عناوين URL الفريدة
function getUniquePatterns(urls) {
  const patterns = {};
  urls.forEach(item => {
    const url = item.url;
    // استخراج أنماط مختلفة
    if (url.includes('/shop/') && url.includes('/product-')) {
      const category = url.split('/shop/')[1].split('/')[0];
      const pattern = `/shop/${category}/product-X/`;
      patterns[pattern] = (patterns[pattern] || 0) + 1;
    } else if (url.includes('/shop/') && url.includes('/related-product-')) {
      const category = url.split('/shop/')[1].split('/')[0];
      const pattern = `/shop/${category}/related-product-X/`;
      patterns[pattern] = (patterns[pattern] || 0) + 1;
    } else if (url.startsWith('/ar/shop/') && url.includes('/product-')) {
      const category = url.split('/ar/shop/')[1].split('/')[0];
      const pattern = `/ar/shop/${category}/product-X/`;
      patterns[pattern] = (patterns[pattern] || 0) + 1;
    } else if (url.startsWith('/ar/shop/') && url.includes('/related-product-')) {
      const category = url.split('/ar/shop/')[1].split('/')[0];
      const pattern = `/ar/shop/${category}/related-product-X/`;
      patterns[pattern] = (patterns[pattern] || 0) + 1;
    } else if (url.includes('/locations/')) {
      const location = url.split('/locations/')[1];
      const pattern = url.startsWith('/ar') ? '/ar/locations/X' : '/locations/X';
      patterns[pattern] = (patterns[pattern] || 0) + 1;
    } else {
      // تخزين المسار كاملاً للمسارات الفريدة الأخرى
      patterns[url] = (patterns[url] || 0) + 1;
    }
  });
  return patterns;
}

// تصنيف صفحات 404 إلى مجموعات تفصيلية
function categorize404Pages(pages) {
  return {
    // صفحات المتجر والمنتجات
    shopCategoryPages: pages.filter(item => 
      (item.url.includes('/shop/') || item.url.includes('/ar/shop/')) && 
      !item.url.includes('/product-') && 
      !item.url.includes('/related-product-')
    ),
    productPages: pages.filter(item => 
      item.url.includes('/product-') && 
      !item.url.includes('non-existent') && 
      !item.url.includes('12345') && 
      !item.url.includes('67890')
    ),
    relatedProductPages: pages.filter(item => 
      item.url.includes('/related-product-')
    ),
    
    // صفحات المواقع
    locationPages: pages.filter(item => 
      item.url.includes('/locations/')
    ),
    
    // صفحات الاختبار والصفحات غير الموجودة المتوقعة
    testPages: pages.filter(item => 
      item.url.includes('non-existent') || 
      item.url.includes('test') || 
      item.url.includes('does-not-exist') ||
      item.url.includes('12345') ||
      item.url.includes('67890')
    ),
    
    // صفحات يمكن إعادة توجيهها
    redirectCandidates: pages.filter(item => 
      item.url === '/services-page' ||
      item.url === '/contactus' ||
      item.url === '/book-a-demo' ||
      item.url === '/careers' ||
      item.url === '/sitemap' ||
      item.url === '/contact-us' ||
      item.url === '/request-a-quote' ||
      item.url === '/faqs' ||
      item.url === '/about-us' ||
      item.url === '/faq' ||
      item.url === '/ar/faq'
    ),
    
    // صفحات الوظائف الإضافية
    featurePages: pages.filter(item => 
      item.url === '/categories' ||
      item.url === '/ar/categories' ||
      item.url === '/tags' ||
      item.url === '/ar/tags' ||
      item.url === '/search' ||
      item.url === '/ar/search'
    ),
    
    // صفحات أخرى
    otherPages: pages.filter(item => {
      // استبعاد كل الصفحات المصنفة سابقًا
      return !(
        (item.url.includes('/shop/') || item.url.includes('/ar/shop/')) ||
        item.url.includes('/product-') ||
        item.url.includes('/related-product-') ||
        item.url.includes('/locations/') ||
        item.url.includes('non-existent') ||
        item.url.includes('test') ||
        item.url.includes('does-not-exist') ||
        item.url.includes('12345') ||
        item.url.includes('67890') ||
        // صفحات إعادة التوجيه
        item.url === '/services-page' ||
        item.url === '/contactus' ||
        item.url === '/book-a-demo' ||
        item.url === '/careers' ||
        item.url === '/sitemap' ||
        item.url === '/contact-us' ||
        item.url === '/request-a-quote' ||
        item.url === '/faqs' ||
        item.url === '/about-us' ||
        item.url === '/faq' ||
        item.url === '/ar/faq' ||
        // صفحات الوظائف الإضافية
        item.url === '/categories' ||
        item.url === '/ar/categories' ||
        item.url === '/tags' ||
        item.url === '/ar/tags' ||
        item.url === '/search' ||
        item.url === '/ar/search'
      );
    })
  };
}

// تحليل أنماط عناوين URL
console.log('تحليل أنماط عناوين URL التي ترجع 404:');
const patterns = getUniquePatterns(status404);
Object.keys(patterns).sort().forEach(pattern => {
  console.log(`${pattern}: ${patterns[pattern]} مرة`);
});

// تصنيف الصفحات
const categories = categorize404Pages(status404);

// طباعة النتائج
console.log('\n--- صفحات الفئات والأقسام في المتجر ---');
categories.shopCategoryPages.forEach(item => console.log(item.url));

console.log('\n--- صفحات المنتجات ---');
console.log(`إجمالي عدد صفحات المنتجات: ${categories.productPages.length}`);
console.log(categories.productPages.slice(0, 10).map(item => item.url).join('\n') + (categories.productPages.length > 10 ? '\n... المزيد' : ''));

console.log('\n--- صفحات المنتجات ذات الصلة ---');
console.log(`إجمالي عدد صفحات المنتجات ذات الصلة: ${categories.relatedProductPages.length}`);
console.log(categories.relatedProductPages.slice(0, 10).map(item => item.url).join('\n') + (categories.relatedProductPages.length > 10 ? '\n... المزيد' : ''));

console.log('\n--- صفحات المواقع ---');
categories.locationPages.forEach(item => console.log(item.url));

console.log('\n--- صفحات يمكن إعادة توجيهها ---');
categories.redirectCandidates.forEach(item => console.log(item.url));

console.log('\n--- صفحات الوظائف الإضافية ---');
categories.featurePages.forEach(item => console.log(item.url));

console.log('\n--- صفحات الاختبار ---');
categories.testPages.forEach(item => console.log(item.url));

console.log('\n--- صفحات أخرى ---');
categories.otherPages.forEach(item => console.log(item.url));

console.log('\n--- ملخص إجمالي ---');
console.log(`إجمالي صفحات 404: ${status404.length}`);
console.log(`صفحات الفئات والأقسام في المتجر: ${categories.shopCategoryPages.length}`);
console.log(`صفحات المنتجات: ${categories.productPages.length}`);
console.log(`صفحات المنتجات ذات الصلة: ${categories.relatedProductPages.length}`);
console.log(`صفحات المواقع: ${categories.locationPages.length}`);
console.log(`صفحات يمكن إعادة توجيهها: ${categories.redirectCandidates.length}`);
console.log(`صفحات الوظائف الإضافية: ${categories.featurePages.length}`);
console.log(`صفحات الاختبار: ${categories.testPages.length}`);
console.log(`صفحات أخرى: ${categories.otherPages.length}`);

// إنشاء تقرير مفصل وحفظه كملف نصي
function generateDetailedReport(categories) {
  let report = `# تقرير مفصل لصفحات 404 في موقع Uneom\n`;
  report += `تاريخ التقرير: ${new Date().toLocaleDateString('ar-SA')}\n\n`;
  
  report += `## ملخص إجمالي\n`;
  report += `- إجمالي صفحات 404: ${status404.length}\n`;
  report += `- صفحات الفئات والأقسام في المتجر: ${categories.shopCategoryPages.length}\n`;
  report += `- صفحات المنتجات: ${categories.productPages.length}\n`;
  report += `- صفحات المنتجات ذات الصلة: ${categories.relatedProductPages.length}\n`;
  report += `- صفحات المواقع: ${categories.locationPages.length}\n`;
  report += `- صفحات يمكن إعادة توجيهها: ${categories.redirectCandidates.length}\n`;
  report += `- صفحات الوظائف الإضافية: ${categories.featurePages.length}\n`;
  report += `- صفحات الاختبار: ${categories.testPages.length}\n`;
  report += `- صفحات أخرى: ${categories.otherPages.length}\n\n`;

  // صفحات الفئات والأقسام في المتجر
  report += `## صفحات الفئات والأقسام في المتجر\n`;
  categories.shopCategoryPages.forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات المنتجات
  report += `## صفحات المنتجات (${categories.productPages.length} صفحة)\n`;
  report += `هذه قائمة جزئية تعرض أول 30 منتج فقط:\n`;
  categories.productPages.slice(0, 30).forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات المنتجات ذات الصلة
  report += `## صفحات المنتجات ذات الصلة (${categories.relatedProductPages.length} صفحة)\n`;
  report += `هذه قائمة جزئية تعرض أول 30 منتج ذي صلة فقط:\n`;
  categories.relatedProductPages.slice(0, 30).forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات المواقع
  report += `## صفحات المواقع\n`;
  categories.locationPages.forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات يمكن إعادة توجيهها
  report += `## صفحات يمكن إعادة توجيهها\n`;
  categories.redirectCandidates.forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات الوظائف الإضافية
  report += `## صفحات الوظائف الإضافية\n`;
  categories.featurePages.forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات الاختبار
  report += `## صفحات الاختبار\n`;
  categories.testPages.forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  // صفحات أخرى
  report += `## صفحات أخرى\n`;
  categories.otherPages.forEach((item, index) => {
    report += `${index + 1}. ${item.fullUrl}\n`;
  });
  report += '\n';

  return report;
}

// إنشاء التقرير وحفظه
const detailedReport = generateDetailedReport(categories);
fs.writeFileSync('detailed-404-report.md', detailedReport);
console.log('\nتم حفظ التقرير المفصل في ملف: detailed-404-report.md'); 