/**
 * تقرير صفحات 404 الشامل
 * 
 * هذا السكريبت يقوم بفحص مجموعة كبيرة من الروابط في موقع Uneom
 * ويحدد جميع الروابط التي ترجع رمز الحالة 404 (صفحة غير موجودة)
 * ويولد تقريراً مفصلاً بها
 */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// إعدادات الفحص
const BASE_URL = 'https://uneom.com';
const TIMEOUT_MS = 10000; // مهلة 10 ثوانٍ للطلبات
const USER_AGENT = 'Mozilla/5.0 (compatible; Uneom404Scanner/1.0; +http://uneom.com)';
const DELAY_BETWEEN_REQUESTS = 100; // تأخير بين الطلبات لتجنب الضغط على الخادم

// صناعة قائمة المسارات الشائعة للفحص
function generateCommonPaths() {
  const commonPaths = [
    // الصفحات الرئيسية
    '/',
    '/about',
    '/contact',
    '/ar',
    '/ar/about',
    '/ar/contact',
    
    // صفحات غير موجودة للتحقق
    '/this-page-does-not-exist',
    '/page-not-found-test',
    '/404-test-page',
    '/blog/non-existent-blog-post',
    '/shop/non-existent-product',
    '/industries/non-existent-industry',
    '/services/non-existent-service',
    '/authors/non-existent-author',
    '/case-studies/non-existent-case-study',
    
    // صفحات معروفة بأنها 404
    '/services-page',
    '/contactus',
    '/book-a-demo',
    '/careers',
    '/sitemap',
    
    // صفحات المنتجات الوهمية
    '/shop/industrial-uniforms/product-12345',
    '/shop/retail-uniforms/product-67890',
    
    // المسارات الأساسية في الموقع
    '/blog',
    '/shop',
    '/industries',
    '/services',
    '/resources',
    '/locations',
    '/privacy-policy',
    '/terms-of-service',
    
    // الإصدار العربي من المسارات الأساسية
    '/ar/blog',
    '/ar/shop',
    '/ar/industries',
    '/ar/services',
    '/ar/resources',
    '/ar/locations',
    '/ar/privacy-policy',
    '/ar/terms-of-service',
    
    // أقسام الصناعات
    '/industries/healthcare',
    '/industries/corporate',
    '/industries/hospitality',
    '/industries/aviation',
    '/industries/education',
    '/industries/manufacturing',
    '/industries/security',
    '/industries/factory-industry',
    '/industries/retail-shops',
    '/industries/supply-manufacturing',
    
    // أقسام الخدمات
    '/services/program-management',
    '/services/custom-design',
    '/services/bulk-ordering',
    '/services/measurement-services',
    '/services/uniform-policies',
    
    // المواقع
    '/locations/riyadh',
    '/locations/jeddah',
    '/locations/dammam',
    '/locations/mecca',
    '/locations/medina',
    
    // مسارات قديمة قد تكون موجودة في محركات البحث
    '/who-we-are',
    '/contact-us',
    '/request-a-quote',
    '/faqs',
    '/about-us',
    '/sectors',
    
    // أقسام الصناعات - العربية
    '/ar/industries/healthcare',
    '/ar/industries/corporate',
    '/ar/industries/hospitality',
    '/ar/industries/aviation',
    '/ar/industries/education',
    '/ar/industries/manufacturing',
    '/ar/industries/security',
    '/ar/industries/factory-industry',
    '/ar/industries/retail-shops',
    '/ar/industries/supply-manufacturing',
    
    // أقسام الخدمات - العربية
    '/ar/services/program-management',
    '/ar/services/custom-design',
    '/ar/services/bulk-ordering',
    '/ar/services/measurement-services',
    '/ar/services/uniform-policies',
    
    // المواقع - العربية
    '/ar/locations/riyadh',
    '/ar/locations/jeddah',
    '/ar/locations/dammam',
    '/ar/locations/mecca',
    '/ar/locations/medina',
    
    // مسارات أخرى محتملة
    '/quote',
    '/ar/quote',
    '/faq',
    '/ar/faq',
    '/categories',
    '/ar/categories',
    '/authors',
    '/ar/authors',
    '/tags',
    '/ar/tags',
    '/search',
    '/ar/search',
  ];
  
  return commonPaths;
}

// التحقق من حالة URL وتصنيفها
async function checkUrl(url) {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: { 'User-Agent': USER_AGENT },
      timeout: TIMEOUT_MS,
      redirect: 'follow' // تتبع التحويلات
    });
    
    return {
      url: url,
      fullUrl: fullUrl,
      statusCode: response.status,
      isRedirect: response.redirected,
      redirectUrl: response.redirected ? response.url : null,
      finalStatusCode: response.redirected ? (await fetch(response.url, {
        method: 'HEAD',
        headers: { 'User-Agent': USER_AGENT },
        timeout: TIMEOUT_MS
      })).status : response.status
    };
  } catch (error) {
    return {
      url: url,
      fullUrl: `${BASE_URL}${url}`,
      statusCode: 'ERROR',
      error: error.message
    };
  }
}

// فحص مجموعة من المسارات وتجميع النتائج
async function scanUrls(urls) {
  console.log(`🔍 بدء فحص ${urls.length} رابط في ${BASE_URL}...`);
  
  const results = {
    status200: [],
    status404: [],
    status301: [],
    status302: [],
    otherStatuses: [],
    errors: []
  };
  
  let processedCount = 0;
  
  // تقسيم المسارات إلى مجموعات للمعالجة المتوازية
  const BATCH_SIZE = 5; // عدد الطلبات المتزامنة
  const BATCH_DELAY = 1000; // التأخير بين كل مجموعة (1 ثانية)
  
  // تقسيم المسارات إلى مجموعات
  const batches = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }
  
  // معالجة كل مجموعة
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    
    // عرض التقدم لكل مجموعة
    console.log(`معالجة المجموعة ${i+1}/${batches.length} (المسارات ${processedCount+1}-${processedCount+batch.length} من ${urls.length})`);
    
    // معالجة جميع المسارات في المجموعة بالتوازي
    const batchResults = await Promise.all(batch.map(url => checkUrl(url)));
    
    // تصنيف النتائج
    for (const result of batchResults) {
      if (result.statusCode === 'ERROR') {
        results.errors.push(result);
      } else if (result.statusCode === 200) {
        results.status200.push(result);
      } else if (result.statusCode === 404) {
        results.status404.push(result);
      } else if (result.statusCode === 301) {
        results.status301.push(result);
      } else if (result.statusCode === 302) {
        results.status302.push(result);
      } else {
        results.otherStatuses.push(result);
      }
    }
    
    processedCount += batch.length;
    
    // انتظار قبل معالجة المجموعة التالية
    if (i < batches.length - 1) {
      console.log(`انتظار ${BATCH_DELAY/1000} ثانية قبل المجموعة التالية...`);
      await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
    }
  }
  
  return results;
}

// إنشاء التقرير وحفظه
function generateReport(results) {
  // ملخص إحصائي
  const summary = {
    totalUrlsChecked: Object.values(results).flat().length,
    status200Count: results.status200.length,
    status404Count: results.status404.length,
    status301Count: results.status301.length,
    status302Count: results.status302.length,
    otherStatusesCount: results.otherStatuses.length,
    errorsCount: results.errors.length
  };
  
  // عرض ملخص النتائج في وحدة التحكم
  console.log('\n===== ملخص تقرير صفحات 404 =====');
  console.log(`إجمالي الروابط التي تم فحصها: ${summary.totalUrlsChecked}`);
  console.log(`عدد صفحات 200 (OK): ${summary.status200Count}`);
  console.log(`عدد صفحات 404 (Not Found): ${summary.status404Count}`);
  console.log(`عدد صفحات 301 (Moved Permanently): ${summary.status301Count}`);
  console.log(`عدد صفحات 302 (Found/Redirect): ${summary.status302Count}`);
  console.log(`حالات أخرى: ${summary.otherStatusesCount}`);
  console.log(`أخطاء: ${summary.errorsCount}`);
  
  // عرض قائمة صفحات 404
  console.log('\n===== قائمة صفحات 404 (Not Found) =====');
  results.status404.forEach((item, index) => {
    console.log(`${index + 1}. ${item.fullUrl}`);
  });
  
  // حفظ التقرير المفصل كملف JSON
  const fullReport = {
    summary: summary,
    timestamp: new Date().toISOString(),
    results: results
  };
  
  fs.writeFileSync('404-full-report.json', JSON.stringify(fullReport, null, 2));
  console.log('\nتم حفظ التقرير المفصل في ملف: 404-full-report.json');
  
  // إنشاء تقرير مختصر للعرض (قائمة الروابط 404 فقط)
  const simpleReport = {
    status404: results.status404.map(item => item.fullUrl),
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync('404-links-report.txt', simpleReport.status404.join('\n'));
  console.log('تم حفظ قائمة روابط 404 في ملف: 404-links-report.txt');
}

// الوظيفة الرئيسية
async function main() {
  console.log('جاري تجميع قائمة المسارات للفحص...');
  
  // تجميع المسارات من مصادر مختلفة
  const commonPaths = generateCommonPaths();
  
  // استخدام قائمة محددة بدلاً من استخراج كل المسارات من ملف _redirects
  console.log(`تم تجميع ${commonPaths.length} مسار للفحص`);
  
  // فحص المسارات
  const results = await scanUrls(commonPaths);
  
  // إنشاء التقرير
  generateReport(results);
}

// التأكد من وجود التبعيات المطلوبة
function ensureDependencies() {
  try {
    require.resolve('node-fetch');
    return true;
  } catch (e) {
    console.log('جاري تثبيت التبعيات المطلوبة...');
    try {
      execSync('npm install node-fetch@2', { stdio: 'inherit' });
      return true;
    } catch (error) {
      console.error(`فشل تثبيت التبعيات: ${error.message}`);
      console.log('\nالرجاء تشغيل: npm install node-fetch@2');
      return false;
    }
  }
}

// تشغيل السكريبت إذا كانت التبعيات متوفرة
if (ensureDependencies()) {
  main().catch(error => {
    console.error(`حدث خطأ أثناء التنفيذ: ${error.message}`);
    process.exit(1);
  });
} 