/**
 * سكريبت فحص جميع روابط الموقع بشكل شامل وصارم
 * 
 * هذا السكريبت يقوم بالزحف على موقع Uneom بشكل كامل
 * ويستخرج جميع الروابط الداخلية والخارجية
 * ويفحص حالة كل رابط ويولد تقريراً تفصيلياً بجميع الروابط التي ترجع 404
 */

const fetch = require('node-fetch');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const { execSync } = require('child_process');

// إعدادات الفحص
const BASE_URL = 'https://uneom.com';
const TIMEOUT_MS = 15000; // زيادة المهلة إلى 15 ثانية
const USER_AGENT = 'Mozilla/5.0 (compatible; UneomSiteScanner/1.0; +http://uneom.com)';
const DELAY_BETWEEN_REQUESTS = 300; // تقليل التأخير بين الطلبات
const MAX_PAGES_TO_CRAWL = 2000; // زيادة الحد الأقصى للصفحات

// اضافة المسارات المذكورة في الملاحظات والمزيد
const ADDITIONAL_URLS = [
  '/shop/retail-uniforms/related-product-2/',
  '/shop/industrial-uniforms/related-product-2/',
  '/shop/retail-uniforms/related-product-1/',
  '/shop/industrial-uniforms/related-product-1/',
  '/shop/retail-uniforms/related-product-3/',
  '/shop/industrial-uniforms/related-product-3/',
  '/ar/shop/retail-uniforms/related-product-2/',
  '/ar/shop/industrial-uniforms/related-product-2/',
  '/ar/shop/retail-uniforms/related-product-1/',
  '/ar/shop/industrial-uniforms/related-product-1/',
  '/ar/shop/retail-uniforms/related-product-3/',
  '/ar/shop/industrial-uniforms/related-product-3/',
];

// الروابط الأساسية للبدء بالفحص (تم توسيعها)
const SEED_URLS = [
  // الصفحات الرئيسية
  '/',
  '/about',
  '/contact',
  '/ar',
  '/ar/about',
  '/ar/contact',
  '/quote',
  '/ar/quote',
  
  // إضافة المسارات الجديدة
  ...ADDITIONAL_URLS,
  
  // صفحات غير موجودة من القائمة السابقة
  '/this-page-does-not-exist',
  '/page-not-found-test',
  '/404-test-page',
  '/blog/non-existent-blog-post',
  '/shop/non-existent-product',
  '/industries/non-existent-industry',
  '/services/non-existent-service',
  '/authors/non-existent-author',
  '/case-studies/non-existent-case-study',
  '/services-page',
  '/contactus',
  '/book-a-demo',
  '/careers',
  '/sitemap',
  '/shop/industrial-uniforms/product-12345',
  '/shop/retail-uniforms/product-67890',
  '/locations',
  '/ar/locations',
  '/locations/riyadh',
  '/locations/jeddah',
  '/locations/dammam',
  '/locations/mecca',
  '/locations/medina',
  '/contact-us',
  '/request-a-quote',
  '/faqs',
  '/about-us',
  '/ar/locations/riyadh',
  '/ar/locations/jeddah',
  '/ar/locations/dammam',
  '/ar/locations/mecca',
  '/ar/locations/medina',
  '/faq',
  '/ar/faq',
  '/categories',
  '/ar/categories',
  '/tags',
  '/ar/tags',
  '/search',
  '/ar/search',
  
  // صفحات إضافية للتحقق
  '/blog',
  '/shop',
  '/industries',
  '/services',
  '/resources',
  '/ar/blog',
  '/ar/shop',
  '/ar/industries',
  '/ar/services',
  '/ar/resources',
  
  // مسارات محتملة أخرى
  '/privacy-policy',
  '/terms-of-service',
  '/ar/privacy-policy',
  '/ar/terms-of-service',
  
  // أقسام المتجر
  '/shop/healthcare-uniforms/',
  '/shop/aviation-uniforms/',
  '/shop/hospitality-uniforms/',
  '/shop/corporate-uniforms/',
  '/shop/education-uniforms/',
  '/shop/manufacturing-uniforms/',
  '/shop/security-uniforms/',
  '/ar/shop/healthcare-uniforms/',
  '/ar/shop/aviation-uniforms/',
  '/ar/shop/hospitality-uniforms/',
  '/ar/shop/corporate-uniforms/',
  '/ar/shop/education-uniforms/',
  '/ar/shop/manufacturing-uniforms/',
  '/ar/shop/security-uniforms/',
  
  // إضافة صفحات المنتجات المحتملة
  '/shop/healthcare-uniforms/product-1/',
  '/shop/aviation-uniforms/product-1/',
  '/shop/healthcare-uniforms/product-2/',
  '/shop/aviation-uniforms/product-2/',
];

// القوائم التي سنستخدمها للتتبع
let discoveredUrls = new Set(); // جميع الروابط المكتشفة
let crawledUrls = new Set(); // الروابط التي تم فحصها
let pendingUrls = new Set(); // الروابط في انتظار الفحص
let externalUrls = new Set(); // الروابط الخارجية
let urlStatuses = {}; // حالة كل رابط تم فحصه

// توليد مجموعة مسارات منتجات إضافية
function generateProductPaths() {
  const industries = [
    'healthcare', 'aviation', 'hospitality', 'corporate', 'education', 
    'manufacturing', 'security', 'retail', 'industrial'
  ];
  
  const productPaths = [];
  
  // توليد أنماط مسارات المنتجات
  industries.forEach(industry => {
    for (let i = 1; i <= 5; i++) {
      productPaths.push(`/shop/${industry}-uniforms/product-${i}/`);
      productPaths.push(`/ar/shop/${industry}-uniforms/product-${i}/`);
      productPaths.push(`/shop/${industry}-uniforms/related-product-${i}/`);
      productPaths.push(`/ar/shop/${industry}-uniforms/related-product-${i}/`);
    }
  });
  
  return productPaths;
}

// إضافة روابط البداية إلى قائمة الانتظار
function initCrawl() {
  // إضافة الروابط الأساسية
  SEED_URLS.forEach(url => {
    pendingUrls.add(url);
    discoveredUrls.add(url);
  });
  
  // إضافة مسارات منتجات محتملة
  const productPaths = generateProductPaths();
  productPaths.forEach(url => {
    pendingUrls.add(url);
    discoveredUrls.add(url);
  });
  
  console.log(`تمت إضافة ${pendingUrls.size} رابط للفحص`);
}

// استخراج الروابط من صفحة HTML
function extractLinks(html, baseUrl) {
  const dom = new JSDOM(html);
  const links = dom.window.document.querySelectorAll('a');
  const extractedLinks = new Set();

  links.forEach(link => {
    let href = link.href;
    if (!href) return;

    try {
      // تحويل الروابط النسبية إلى روابط مطلقة
      const url = new URL(href, baseUrl);
      
      // نتعامل فقط مع روابط HTTP وHTTPS
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
      
      // التحقق ما إذا كان الرابط داخلي أم خارجي
      if (url.hostname === new URL(BASE_URL).hostname) {
        // تنظيف الرابط الداخلي (إزالة البارامترات والهاش)
        let internalPath = url.pathname;
        
        // إضافة / في نهاية المسار إذا لم تكن موجودة وإذا كان المسار لا يحتوي على نقطة (ليس ملفاً)
        if (!internalPath.includes('.') && !internalPath.endsWith('/')) {
          internalPath = `${internalPath}/`;
        }
        
        extractedLinks.add(internalPath);
      } else {
        // إضافة الرابط الخارجي كاملاً
        externalUrls.add(url.href);
      }
    } catch (error) {
      console.error(`خطأ في معالجة الرابط: ${href}`, error.message);
    }
  });
  
  // استخراج روابط إضافية من عناصر القوائم، مثل المنتجات ذات الصلة
  try {
    // استخراج الروابط من عناصر القائمة
    const menuItems = dom.window.document.querySelectorAll('.menu-item, .nav-item, .product-item, .related-product');
    menuItems.forEach(item => {
      const links = item.querySelectorAll('a');
      links.forEach(link => {
        try {
          if (link.href) {
            const url = new URL(link.href, baseUrl);
            if (url.hostname === new URL(BASE_URL).hostname) {
              let internalPath = url.pathname;
              if (!internalPath.includes('.') && !internalPath.endsWith('/')) {
                internalPath = `${internalPath}/`;
              }
              extractedLinks.add(internalPath);
            }
          }
        } catch (e) {
          // تجاهل الأخطاء في هذه المرحلة
        }
      });
    });
  } catch (e) {
    // تجاهل الأخطاء في هذه المرحلة
  }

  return extractedLinks;
}

// فحص رابط واحد واستخراج الروابط منه إذا كان داخلياً
async function crawlUrl(url) {
  try {
    console.log(`فحص: ${url}`);
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
    
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: { 
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Cache-Control': 'no-cache'
      },
      timeout: TIMEOUT_MS,
      redirect: 'follow'
    });
    
    // تخزين حالة الرابط
    urlStatuses[url] = {
      url: url,
      fullUrl: fullUrl,
      statusCode: response.status,
      isRedirect: response.redirected,
      redirectUrl: response.redirected ? response.url : null,
      contentType: response.headers.get('content-type')
    };
    
    // إذا كان الرابط داخلياً وتم العثور على المحتوى، نستخرج الروابط منه
    if (
      response.status === 200 && 
      url.startsWith('/') && 
      response.headers.get('content-type')?.includes('text/html')
    ) {
      const html = await response.text();
      const links = extractLinks(html, fullUrl);
      
      // إضافة الروابط الجديدة إلى قائمة الانتظار
      links.forEach(link => {
        if (!discoveredUrls.has(link) && !link.includes('#')) {
          discoveredUrls.add(link);
          pendingUrls.add(link);
        }
      });
    }
    
    return urlStatuses[url];
  } catch (error) {
    console.error(`خطأ في فحص الرابط ${url}:`, error.message);
    
    urlStatuses[url] = {
      url: url,
      fullUrl: url.startsWith('http') ? url : `${BASE_URL}${url}`,
      statusCode: 'ERROR',
      error: error.message
    };
    
    return urlStatuses[url];
  }
}

// فحص مجموعة من الروابط بشكل متوازي
async function processUrlBatch(batch) {
  return await Promise.all(batch.map(url => crawlUrl(url)));
}

// الزحف على الموقع بأكمله
async function crawlSite() {
  console.log(`🕸️ بدء الزحف الصارم والشامل على موقع ${BASE_URL}`);
  console.log(`الحد الأقصى للصفحات: ${MAX_PAGES_TO_CRAWL}`);
  
  initCrawl();
  let totalProcessed = 0;
  
  while (pendingUrls.size > 0 && totalProcessed < MAX_PAGES_TO_CRAWL) {
    // الحصول على دفعة من الروابط (5 كحد أقصى)
    const batchSize = Math.min(5, pendingUrls.size);
    const batch = Array.from(pendingUrls).slice(0, batchSize);
    
    // إزالة الروابط المعالجة من قائمة الانتظار
    batch.forEach(url => {
      pendingUrls.delete(url);
      crawledUrls.add(url);
    });
    
    // معالجة الدفعة
    console.log(`معالجة الدفعة ${++totalProcessed} (${batch.length} روابط)`);
    await processUrlBatch(batch);
    
    // طباعة الإحصاءات
    console.log(`الإحصاءات: تمت معالجة ${crawledUrls.size}، متبقي ${pendingUrls.size}، إجمالي مكتشف ${discoveredUrls.size}`);
    
    // الانتظار قبل الدفعة التالية
    await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
  }
  
  // فحص جميع المسارات المذكورة صراحة
  await forcedCheckAdditionalUrls();
  
  console.log(`🏁 اكتمل الزحف الشامل على الموقع: تم فحص ${crawledUrls.size} صفحة`);
}

// التحقق بشكل خاص من الروابط المذكورة صراحة
async function forcedCheckAdditionalUrls() {
  console.log('\n===== التحقق من المسارات المذكورة صراحة =====');
  
  // جمع جميع المسارات التي يجب فحصها بالتأكيد
  const forcedUrls = [...ADDITIONAL_URLS, ...generateProductPaths()];
  
  // تجميع القائمة التي لم يتم فحصها بعد
  const uncheckedUrls = forcedUrls.filter(url => !crawledUrls.has(url));
  
  if (uncheckedUrls.length === 0) {
    console.log('تم فحص جميع المسارات المذكورة صراحة بالفعل.');
    return;
  }
  
  console.log(`فحص ${uncheckedUrls.length} مسار إضافي بشكل صارم...`);
  
  // تقسيم الروابط إلى مجموعات
  const BATCH_SIZE = 5;
  for (let i = 0; i < uncheckedUrls.length; i += BATCH_SIZE) {
    const batch = uncheckedUrls.slice(i, i + BATCH_SIZE);
    
    // معالجة الدفعة
    await processUrlBatch(batch);
    
    // إضافة الروابط إلى قائمة التي تم فحصها
    batch.forEach(url => {
      crawledUrls.add(url);
      // إضافة الرابط إلى قائمة المكتشفة أيضًا إذا لم يكن موجودًا
      if (!discoveredUrls.has(url)) {
        discoveredUrls.add(url);
      }
    });
    
    // طباعة التقدم
    console.log(`تم فحص ${Math.min(i + BATCH_SIZE, uncheckedUrls.length)} من ${uncheckedUrls.length}`);
    
    // الانتظار قبل الدفعة التالية
    await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
  }
  
  console.log('اكتمل فحص المسارات الإضافية');
}

// تحليل نتائج الزحف وإنشاء التقارير
function analyzeResults() {
  // تصنيف الروابط حسب الحالة
  const categorizedUrls = {
    status200: [],
    status404: [],
    status301: [],
    status302: [],
    otherStatuses: [],
    errors: [],
    externalUrls: Array.from(externalUrls)
  };
  
  // تصنيف الروابط الداخلية
  for (const url in urlStatuses) {
    const status = urlStatuses[url];
    
    if (status.statusCode === 'ERROR') {
      categorizedUrls.errors.push(status);
    } else if (status.statusCode === 200) {
      categorizedUrls.status200.push(status);
    } else if (status.statusCode === 404) {
      categorizedUrls.status404.push(status);
    } else if (status.statusCode === 301) {
      categorizedUrls.status301.push(status);
    } else if (status.statusCode === 302) {
      categorizedUrls.status302.push(status);
    } else {
      categorizedUrls.otherStatuses.push(status);
    }
  }
  
  // فرز حالات 404 أبجديًا للتنظيم
  categorizedUrls.status404.sort((a, b) => a.fullUrl.localeCompare(b.fullUrl));
  
  return categorizedUrls;
}

// تصنيف روابط 404 إلى فئات
function categorize404Links(links404) {
  const categories = {
    testPages: [],           // صفحات اختبار متوقعة
    productPages: [],        // صفحات منتجات
    redirectCandidates: [],  // صفحات يمكن إعادة توجيهها
    locationPages: [],       // صفحات المواقع
    additionalPages: []      // صفحات إضافية
  };
  
  links404.forEach(link => {
    const url = link.url;
    
    // تصنيف الصفحات بناءً على المسار
    if (url.includes('non-existent') || url.includes('product-12345') || 
        url.includes('product-67890') || url.includes('this-page-does-not-exist') ||
        url.includes('404-test-page') || url.includes('page-not-found-test')) {
      categories.testPages.push(link);
    } else if (url.includes('/shop/') && (url.includes('/product-') || url.includes('/related-product-'))) {
      categories.productPages.push(link);
    } else if (url.includes('/location') || url.includes('/riyadh') || url.includes('/jeddah') || 
               url.includes('/dammam') || url.includes('/mecca') || url.includes('/medina')) {
      categories.locationPages.push(link);
    } else if (url === '/contactus' || url === '/contact-us' || url === '/about-us' || 
               url === '/book-a-demo' || url === '/request-a-quote' || url === '/services-page' || 
               url === '/faqs' || url === '/careers' || url === '/sitemap') {
      categories.redirectCandidates.push(link);
    } else {
      categories.additionalPages.push(link);
    }
  });
  
  return categories;
}

// إنشاء وحفظ التقارير
function generateReports(categorizedUrls) {
  // ملخص إحصائي
  const summary = {
    totalDiscoveredUrls: discoveredUrls.size,
    totalCrawledUrls: crawledUrls.size,
    totalExternalUrls: externalUrls.size,
    status200Count: categorizedUrls.status200.length,
    status404Count: categorizedUrls.status404.length,
    status301Count: categorizedUrls.status301.length,
    status302Count: categorizedUrls.status302.length,
    otherStatusesCount: categorizedUrls.otherStatuses.length,
    errorsCount: categorizedUrls.errors.length
  };
  
  // تصنيف روابط 404
  const categorized404 = categorize404Links(categorizedUrls.status404);
  
  // عرض ملخص النتائج في وحدة التحكم
  console.log('\n===== ملخص تقرير فحص الموقع الشامل =====');
  console.log(`إجمالي الروابط المكتشفة: ${summary.totalDiscoveredUrls}`);
  console.log(`إجمالي الروابط التي تم فحصها: ${summary.totalCrawledUrls}`);
  console.log(`إجمالي الروابط الخارجية: ${summary.totalExternalUrls}`);
  console.log(`عدد صفحات 200 (OK): ${summary.status200Count}`);
  console.log(`عدد صفحات 404 (Not Found): ${summary.status404Count}`);
  console.log(`عدد صفحات 301 (Moved Permanently): ${summary.status301Count}`);
  console.log(`عدد صفحات 302 (Found/Redirect): ${summary.status302Count}`);
  console.log(`حالات أخرى: ${summary.otherStatusesCount}`);
  console.log(`أخطاء: ${summary.errorsCount}`);
  
  if (categorizedUrls.status404.length > 0) {
    console.log('\n===== قائمة صفحات 404 (Not Found) =====');
    categorizedUrls.status404.forEach((item, index) => {
      console.log(`${index + 1}. ${item.fullUrl}`);
    });
  }
  
  // حفظ التقرير المفصل كملف JSON
  const fullReport = {
    summary: summary,
    timestamp: new Date().toISOString(),
    results: categorizedUrls,
    categorized404: categorized404
  };
  
  fs.writeFileSync('full-site-report-v2.json', JSON.stringify(fullReport, null, 2));
  console.log('\nتم حفظ التقرير المفصل في ملف: full-site-report-v2.json');
  
  // حفظ تقرير صفحات 404 المصنفة
  let completeReport404 = "# قائمة جميع روابط 404 في موقع Uneom - تقرير شامل\n";
  completeReport404 += `# تم تحديثها بتاريخ: ${new Date().toLocaleDateString('ar-SA')}\n\n`;
  
  // إضافة عدد الروابط لكل فئة
  completeReport404 += `تم فحص **${summary.totalCrawledUrls}** رابط وتم اكتشاف **${summary.status404Count}** رابط يرجع حالة 404 (غير موجود).\n\n`;
  
  // إضافة صفحات الاختبار المتوقعة
  if (categorized404.testPages.length > 0) {
    completeReport404 += "## روابط 404 المتوقعة (روابط اختبار)\n";
    categorized404.testPages.forEach((item, index) => {
      completeReport404 += `${index + 1}. ${item.fullUrl}\n`;
    });
    completeReport404 += "\n";
  }
  
  // إضافة صفحات المنتجات
  if (categorized404.productPages.length > 0) {
    completeReport404 += "## صفحات المنتجات غير الموجودة\n";
    categorized404.productPages.forEach((item, index) => {
      completeReport404 += `${index + 1}. ${item.fullUrl}\n`;
    });
    completeReport404 += "\n";
  }
  
  // إضافة مرشحات إعادة التوجيه
  if (categorized404.redirectCandidates.length > 0) {
    completeReport404 += "## روابط قد تحتاج إعادة توجيه\n";
    categorized404.redirectCandidates.forEach((item, index) => {
      completeReport404 += `${index + 1}. ${item.fullUrl}\n`;
    });
    completeReport404 += "\n";
  }
  
  // إضافة صفحات المواقع
  if (categorized404.locationPages.length > 0) {
    completeReport404 += "## صفحات المواقع\n";
    categorized404.locationPages.forEach((item, index) => {
      completeReport404 += `${index + 1}. ${item.fullUrl}\n`;
    });
    completeReport404 += "\n";
  }
  
  // إضافة الصفحات الإضافية
  if (categorized404.additionalPages.length > 0) {
    completeReport404 += "## صفحات إضافية ترجع 404\n";
    categorized404.additionalPages.forEach((item, index) => {
      completeReport404 += `${index + 1}. ${item.fullUrl}\n`;
    });
    completeReport404 += "\n";
  }
  
  // إضافة قائمة كاملة بجميع روابط 404
  completeReport404 += "## القائمة الكاملة لجميع روابط 404\n";
  categorizedUrls.status404.forEach((item, index) => {
    completeReport404 += `${index + 1}. ${item.fullUrl}\n`;
  });
  
  fs.writeFileSync('404-comprehensive-report.md', completeReport404);
  console.log('تم حفظ تقرير شامل لصفحات 404 في ملف: 404-comprehensive-report.md');
  
  // حفظ قائمة جميع الروابط
  fs.writeFileSync('all-site-links-v2.txt', 
    Array.from(discoveredUrls).map(url => `${BASE_URL}${url}`).join('\n')
  );
  console.log('تم حفظ قائمة جميع الروابط في ملف: all-site-links-v2.txt');
  
  // حفظ قائمة بسيطة بروابط 404 فقط
  fs.writeFileSync('all-404-links-v2.txt', 
    categorizedUrls.status404.map(item => item.fullUrl).join('\n')
  );
  console.log('تم حفظ قائمة روابط 404 في ملف: all-404-links-v2.txt');
}

// التأكد من وجود التبعيات المطلوبة
function ensureDependencies() {
  try {
    require.resolve('node-fetch');
    require.resolve('jsdom');
    return true;
  } catch (e) {
    console.log('جاري تثبيت التبعيات المطلوبة...');
    try {
      execSync('npm install node-fetch@2 jsdom', { stdio: 'inherit' });
      return true;
    } catch (error) {
      console.error(`فشل تثبيت التبعيات: ${error.message}`);
      console.log('\nالرجاء تشغيل: npm install node-fetch@2 jsdom');
      return false;
    }
  }
}

// الوظيفة الرئيسية
async function main() {
  console.log('🔍 بدء الفحص الشامل والصارم لكل صفحات موقع Uneom');
  console.log('🌐 سيتم فحص النسخة العربية والإنجليزية بشكل كامل');
  
  // فحص الموقع بالكامل
  await crawlSite();
  
  // تحليل النتائج
  const categorizedUrls = analyzeResults();
  
  // إنشاء التقارير
  generateReports(categorizedUrls);
  
  console.log('✅ تم الانتهاء من الفحص الشامل والصارم لكل صفحات الموقع');
}

// تشغيل السكريبت
if (ensureDependencies()) {
  main().catch(error => {
    console.error(`حدث خطأ أثناء التنفيذ: ${error.message}`);
    process.exit(1);
  });
} 