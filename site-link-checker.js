const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio');
const fs = require('fs');

// العنوان الأساسي للموقع
const baseUrl = 'https://uneom.com';

// قائمة الصفحات التي تم فحصها
const checkedPages = new Set();
const checkedUrls = new Set();

// قائمة الروابط التي تحتاج فحص
const pagesToCheck = [
  // صفحات الموقع الأساسية
  '/',
  '/industries/healthcare/',
  '/industries/aviation/',
  '/industries/hospitality/',
  '/industries/corporate/',
  '/industries/education/',
  '/industries/manufacturing/',
  '/industries/security/',
  '/industries/factory-industry/',
  '/industries/retail-shops/',
  '/industries/supply-manufacturing/',
  '/services/program-management/',
  '/services/custom-design/',
  '/services/bulk-ordering/',
  '/services/measurement-services/',
  '/services/uniform-policies/',
  '/resources/fabric-guide/',
  '/resources/size-guide/',
  '/resources/procurement-guide/',
  '/resources/policy-templates/',
  '/blog/',
  '/about/',
  '/contact/',
  '/shop/',
  '/quote/',

  // صفحات باللغة العربية
  '/ar/',
  '/ar/industries/healthcare/',
  '/ar/services/program-management/',
  '/ar/about/',
  '/ar/contact/',

  // صفحات غير موجودة للفحص
  '/non-existent-page/',
  '/this-page-does-not-exist/',
  '/blog/non-existent-post/',
  '/shop/non-existent-product/',
  '/services/not-a-real-service/',
  '/ar/non-existent-page/'
];

// نتائج الفحص
const results = {
  ok: [],           // روابط تعمل بشكل صحيح
  broken: [],       // روابط مكسورة (404، 500، إلخ)
  redirect: [],     // روابط يتم إعادة توجيهها
  external: [],     // روابط خارجية
  unknown: [],      // روابط لم يتم فحصها بسبب خطأ
  fake404: []       // روابط تعرض محتوى 404 مع حالة 200
};

// أنماط الملفات التي نرغب في تجاهلها
const ignorePatterns = [
  '.pdf',
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.svg',
  '.ico',
  '.css',
  '.js',
  'mailto:',
  'tel:',
  'javascript:',
  'void'
];

// كلمات تشير إلى صفحة 404
const notFoundPhrases = [
  'page not found',
  '404',
  'not found',
  'صفحة غير موجودة',
  'الصفحة غير موجودة',
  'لم يتم العثور على الصفحة'
];

// فحص رابط واحد
async function checkUrl(url, source = '') {
  try {
    // تنظيف العنوان وإزالة علامة الاستفهام والمعاملات
    let cleanUrl = url.trim();
    
    // تجاهل الروابط الفارغة أو التي تبدأ بعلامة #
    if (!cleanUrl || cleanUrl === '#' || cleanUrl.startsWith('javascript:') || cleanUrl.includes('void')) {
      return null;
    }
    
    if (cleanUrl.includes('?')) {
      cleanUrl = cleanUrl.split('?')[0];
    }
    if (cleanUrl.includes('#')) {
      cleanUrl = cleanUrl.split('#')[0];
    }

    // تأكد من أن العنوان مكتمل
    const fullUrl = cleanUrl.startsWith('http') ? cleanUrl : (cleanUrl.startsWith('/') ? baseUrl + cleanUrl : baseUrl + '/' + cleanUrl);
    
    // تجاهل الروابط التي تم فحصها بالفعل
    if (checkedUrls.has(fullUrl)) {
      return null;
    }
    checkedUrls.add(fullUrl);
    
    // تجاهل أنماط الملفات المحددة
    for (const pattern of ignorePatterns) {
      if (fullUrl.toLowerCase().includes(pattern)) {
        return null;
      }
    }
    
    // تجاهل الروابط الخارجية في الفحص المتعمق
    const isExternal = fullUrl.startsWith('http') && !fullUrl.includes(baseUrl);
    if (isExternal) {
      // نحتفظ بالروابط الخارجية للإحصائية فقط
      results.external.push({ url: fullUrl, source });
      return { type: 'external', url: fullUrl };
    }
    
    // فحص حالة الرابط
    console.log(`  فحص الرابط: ${fullUrl}`);
    const response = await fetch(fullUrl, {
      method: 'GET',  // استخدام GET لتحميل محتوى الصفحة
      redirect: 'follow', // اتباع إعادة التوجيه تلقائيًا
      timeout: 15000,    // المهلة القصوى 15 ثواني
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    // تحديد النتيجة حسب رمز الحالة
    const status = response.status;
    const lastUrl = response.url; // عنوان URL النهائي بعد التحويلات
    
    // أيضاً نتحقق من محتوى الصفحة للبحث عن دلائل على صفحة 404
    const contentType = response.headers.get('content-type') || '';
    
    // نتحقق فقط من محتوى الصفحة إذا كانت HTML
    let hasNotFoundContent = false;
    
    if (contentType.includes('text/html')) {
      const html = await response.text();
      
      // البحث عن دلائل صفحة 404 في محتوى الصفحة
      hasNotFoundContent = notFoundPhrases.some(phrase => 
        html.toLowerCase().includes(phrase.toLowerCase())
      );
      
      // تحقق إضافي من عنوان الصفحة إذا كان يحتوي على 404
      const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : '';
      if (title && notFoundPhrases.some(phrase => 
        title.toLowerCase().includes(phrase.toLowerCase())
      )) {
        hasNotFoundContent = true;
      }
    }
    
    // التحقق من إعادة التوجيه
    const isRedirect = lastUrl !== fullUrl;
    
    if (status >= 200 && status < 300) {
      if (hasNotFoundContent) {
        // صفحة بحالة 200 ولكن تحتوي على محتوى 404
        console.log(`  تنبيه: الحالة ${status} ولكن يبدو أنها صفحة 404 (محتوى صفحة غير موجودة)`);
        results.fake404.push({ 
          url: fullUrl, 
          status, 
          source,
          issue: 'محتوى 404 مع حالة 200' 
        });
        return { status, type: 'fake404', url: fullUrl, issue: 'محتوى 404 مع حالة 200' };
      } else if (isRedirect) {
        // تم إعادة التوجيه مع حالة 200 في النهاية
        results.redirect.push({ 
          url: fullUrl, 
          status, 
          location: lastUrl, 
          source
        });
        return { status, type: 'redirect', location: lastUrl, url: fullUrl };
      } else {
        // صفحة تعمل بشكل صحيح
        results.ok.push({ url: fullUrl, status, source });
        return { status, type: 'ok', url: fullUrl };
      }
    } 
    else if (status >= 300 && status < 400) {
      // إعادة توجيه
      const location = response.headers.get('location') || lastUrl;
      results.redirect.push({ url: fullUrl, status, location, source });
      return { status, type: 'redirect', location, url: fullUrl };
    } 
    else {
      // صفحة معطوبة
      results.broken.push({ url: fullUrl, status, source });
      return { status, type: 'broken', url: fullUrl };
    }
  } catch (error) {
    // خطأ غير معروف
    console.error(`  خطأ: ${error.message}`);
    results.unknown.push({ url, error: error.message, source });
    return { error: error.message, type: 'error', url };
  }
}

// استخراج جميع الروابط من صفحة
async function extractLinks(url) {
  try {
    if (!url.startsWith('http')) {
      url = baseUrl + (url.startsWith('/') ? url : '/' + url);
    }
    
    // الحصول على محتوى الصفحة
    console.log(`استخراج الروابط من: ${url}`);
    const response = await fetch(url, {
      redirect: 'follow', // اتباع إعادة التوجيه تلقائيًا
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      console.error(`خطأ في تحميل الصفحة: ${url} - الحالة: ${response.status}`);
      return [];
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    const links = new Set();

    // استخراج جميع الروابط
    $('a').each((i, element) => {
      const href = $(element).attr('href');
      
      if (href) {
        // تنظيف الرابط
        let cleanHref = href.trim();
        
        // تجاهل الروابط غير المرغوبة
        let shouldIgnore = false;
        for (const pattern of ignorePatterns) {
          if (cleanHref.toLowerCase().includes(pattern)) {
            shouldIgnore = true;
            break;
          }
        }
        
        if (!shouldIgnore) {
          links.add(cleanHref);
        }
      }
    });

    return Array.from(links);
  } catch (error) {
    console.error(`خطأ في استخراج الروابط من ${url}: ${error.message}`);
    return [];
  }
}

// الفحص الشامل للموقع
async function checkAllLinks() {
  console.log('بدء فحص جميع روابط الموقع...');
  console.log('==================================');
  
  // نمر على جميع الصفحات الأساسية أولاً
  const startTime = Date.now();
  
  // عدد الروابط المسموح بفحصها (للتحكم في الفحص)
  const maxLinksToCheck = 50; // نقلل العدد لتسريع الفحص
  let checkedCount = 0;
  
  // فحص الروابط بشكل متكرر حتى عدم وجود روابط جديدة للفحص أو الوصول للحد الأقصى
  while (pagesToCheck.length > 0 && checkedCount < maxLinksToCheck) {
    // الحصول على الصفحة التالية للفحص
    const currentPage = pagesToCheck.shift();
    
    // تجاهل الصفحات التي تم فحصها بالفعل
    if (checkedPages.has(currentPage)) {
      continue;
    }
    
    checkedCount++;
    
    // تحديد العنوان الكامل للصفحة
    const fullUrl = currentPage.startsWith('http') ? currentPage : baseUrl + currentPage;
    
    console.log(`\nفحص الصفحة ${checkedCount}/${maxLinksToCheck}: ${fullUrl}`);
    checkedPages.add(currentPage);
    
    // فحص حالة الصفحة الحالية
    const pageStatus = await checkUrl(fullUrl);
    
    // استمرار فقط إذا كانت الصفحة تعمل بشكل صحيح وليست صفحة 404 مزيفة
    if (pageStatus && pageStatus.type === 'ok') {      
      // استخراج جميع الروابط من الصفحة
      const links = await extractLinks(fullUrl);
      console.log(`  تم العثور على ${links.length} رابط في الصفحة`);
      
      // إضافة روابط داخلية جديدة إلى قائمة الانتظار
      for (const link of links) {
        if (link && typeof link === 'string') {
          // تجاهل الروابط المطلقة الخارجية
          if (link.startsWith('http') && !link.includes(baseUrl)) {
            // فحص الروابط الخارجية أيضًا ولكن بدون تتبعها
            await checkUrl(link, fullUrl);
            continue;
          }
          
          // تحويل الرابط النسبي إلى مسار
          let path = link;
          if (link.startsWith('http')) {
            try {
              const url = new URL(link);
              path = url.pathname;
            } catch (e) {
              continue;
            }
          }
          
          // إضافة المسار إلى قائمة الانتظار إذا لم يتم فحصه من قبل
          if (!checkedPages.has(path) && !pagesToCheck.includes(path)) {
            pagesToCheck.push(path);
          }
        }
      }
    }
    
    // تأخير قصير لتجنب التحميل الزائد على الخادم
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // عرض التقدم
    if (checkedCount % 10 === 0 || pagesToCheck.length === 0 || checkedCount >= maxLinksToCheck) {
      const timeElapsed = Math.round((Date.now() - startTime) / 1000);
      console.log(`  الصفحات المفحوصة: ${checkedCount}, قائمة الانتظار: ${pagesToCheck.length}, الوقت المنقضي: ${timeElapsed} ثانية`);
    }
  }
  
  // طباعة ملخص النتائج
  const timeElapsed = Math.round((Date.now() - startTime) / 1000);
  console.log('\n==================================');
  console.log(`اكتمل الفحص في ${timeElapsed} ثانية`);
  console.log('ملخص نتائج فحص الروابط:');
  
  const totalChecked = results.ok.length + results.broken.length + 
                    results.redirect.length + results.external.length + 
                    results.unknown.length + results.fake404.length;
  
  console.log(`إجمالي الروابط المفحوصة: ${totalChecked}`);
  console.log(`الروابط الصحيحة: ${results.ok.length}`);
  console.log(`الروابط المكسورة (404، 500، إلخ): ${results.broken.length}`);
  console.log(`الروابط المُعاد توجيهها: ${results.redirect.length}`);
  console.log(`روابط تعرض محتوى 404 مع حالة 200: ${results.fake404.length}`);
  console.log(`الروابط الخارجية: ${results.external.length}`);
  console.log(`روابط غير معروفة/خطأ: ${results.unknown.length}`);
  
  // عرض قائمة الروابط المكسورة الحقيقية
  if (results.broken.length > 0) {
    console.log('\nقائمة الروابط المكسورة:');
    results.broken.forEach((link, index) => {
      console.log(`${index + 1}. ${link.url} (${link.status || 'غير معروف'})`);
      if (link.source) {
        console.log(`   موجود في: ${link.source}`);
      }
    });
  }
  
  // عرض قائمة الروابط المكسورة المزيفة (200 مع محتوى 404)
  if (results.fake404.length > 0) {
    console.log('\nقائمة الروابط التي تعرض محتوى 404 مع حالة 200:');
    results.fake404.forEach((link, index) => {
      console.log(`${index + 1}. ${link.url} (${link.status})`);
      if (link.issue) {
        console.log(`   المشكلة: ${link.issue}`);
      }
      if (link.source) {
        console.log(`   موجود في: ${link.source}`);
      }
    });
  }
  
  // حفظ التقرير في ملف JSON
  fs.writeFileSync('site-links-report.json', JSON.stringify(results, null, 2));
  console.log('\nتم حفظ التقرير الكامل في ملف: site-links-report.json');
}

// التحقق من تثبيت المكتبات المطلوبة
async function installDependencies() {
  try {
    require.resolve('cheerio');
    console.log('تم تثبيت cheerio بالفعل، جاري بدء الفحص...');
    await checkAllLinks();
  } catch (e) {
    console.log('جاري تثبيت المكتبات المطلوبة...');
    const { execSync } = require('child_process');
    try {
      execSync('npm install cheerio');
      console.log('تم تثبيت cheerio بنجاح، جاري بدء الفحص...');
      await checkAllLinks();
    } catch (error) {
      console.error(`فشل في تثبيت المكتبات: ${error.message}`);
      console.log('يرجى تشغيل "npm install cheerio" يدويًا قبل تشغيل هذا البرنامج.');
    }
  }
}

// تشغيل البرنامج
installDependencies(); 