const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// عناوين للاختبار
const urlsToTest = [
  // صفحات غير موجودة
  'https://uneom.com/non-existent-page',
  'https://uneom.com/this-page-does-not-exist',
  'https://uneom.com/blog/non-existent-post',
  'https://uneom.com/shop/non-existent-product',
  'https://uneom.com/services/not-a-real-service',
  'https://uneom.com/ar/non-existent-page',
  
  // صفحات يجب أن تكون موجودة
  'https://uneom.com/',
  'https://uneom.com/industries/healthcare/'
];

// فحص حالة 404
async function check404Status() {
  console.log('التحقق من حالة 404 للروابط غير الموجودة...');
  console.log('===========================================');
  
  const results = {
    correct404: [], // روابط تعيد رمز حالة 404 بشكل صحيح
    fake404: [],    // روابط تعيد رمز حالة 200 مع محتوى 404
    working: [],    // روابط تعمل بشكل صحيح (200)
    others: []      // روابط أخرى
  };
  
  for (const url of urlsToTest) {
    try {
      console.log(`فحص: ${url}`);
      
      // إرسال طلب HEAD أولاً للتحقق من رمز الحالة بسرعة
      const headResponse = await fetch(url, {
        method: 'HEAD',
        redirect: 'manual', // عدم اتباع إعادة التوجيه تلقائيًا
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
        }
      });
      
      const status = headResponse.status;
      console.log(`  رمز الحالة: ${status}`);
      
      // إرسال طلب GET للتحقق من المحتوى
      const getResponse = await fetch(url, {
        method: 'GET',
        redirect: 'manual',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
        }
      });
      
      // تحديد ما إذا كان المحتوى يشير إلى صفحة 404
      let is404Content = false;
      const contentType = getResponse.headers.get('content-type') || '';
      
      if (contentType.includes('text/html')) {
        const html = await getResponse.text();
        is404Content = html.includes('404') || 
                      html.includes('page not found') || 
                      html.includes('صفحة غير موجودة');
      }
      
      // تصنيف النتائج
      if (status === 404) {
        results.correct404.push({url, status});
        console.log('  ✓ صحيح: رمز حالة 404');
      } 
      else if (status === 200 && is404Content) {
        results.fake404.push({url, status});
        console.log('  ✗ خطأ: رمز حالة 200 مع محتوى 404');
      }
      else if (status === 200 && !is404Content) {
        results.working.push({url, status});
        console.log('  ✓ صفحة تعمل: رمز حالة 200');
      }
      else {
        results.others.push({url, status});
        console.log(`  ! آخر: رمز حالة ${status}`);
      }
      
      console.log('---');
      
    } catch (error) {
      console.error(`  خطأ عند فحص ${url}: ${error.message}`);
      console.log('---');
    }
  }
  
  // طباعة ملخص النتائج
  console.log('\nملخص النتائج:');
  console.log(`إجمالي الروابط المفحوصة: ${urlsToTest.length}`);
  console.log(`الروابط التي تعيد 404 بشكل صحيح: ${results.correct404.length}`);
  console.log(`الروابط التي تعيد 200 مع محتوى 404: ${results.fake404.length}`);
  console.log(`الروابط التي تعمل بشكل صحيح: ${results.working.length}`);
  console.log(`روابط أخرى: ${results.others.length}`);
  
  if (results.correct404.length > 0) {
    console.log('\nروابط تعيد 404 بشكل صحيح:');
    results.correct404.forEach(item => console.log(`- ${item.url}`));
  }
  
  if (results.fake404.length > 0) {
    console.log('\nروابط تعيد 200 مع محتوى 404:');
    results.fake404.forEach(item => console.log(`- ${item.url}`));
  }
}

// تشغيل الفحص
check404Status(); 