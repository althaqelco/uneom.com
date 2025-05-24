const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// List of paths to check
const paths = [
  // Test non-existent pages
  '/this-page-does-not-exist',
  '/ar/this-page-does-not-exist',
  '/blog/non-existent-blog-post',
  '/ar/blog/non-existent-blog-post',
  '/shop/non-existent-product',
  '/ar/shop/non-existent-product',
  
  // Test specific industries
  '/industries/non-existent-industry',
  '/ar/industries/non-existent-industry',
  
  // Test specific services
  '/services/non-existent-service',
  '/ar/services/non-existent-service',
  
  // Test specific authors
  '/authors/non-existent-author',
  '/ar/authors/non-existent-author',
  
  // Test specific case studies
  '/case-studies/non-existent-case-study',
  '/ar/case-studies/non-existent-case-study',
  
  // Test specific deep paths
  '/shop/medical-scrubs/non-existent-product',
  '/ar/shop/medical-scrubs/non-existent-product',
  
  // Test incorrect URL formats
  '/services-page',
  '/ar/services-page',
  '/contactus',
  '/ar/contactus',
  
  // Additional paths that might be problematic
  '/book-a-demo',
  '/ar/book-a-demo',
  '/careers',
  '/ar/careers',
  '/sitemap',
  '/ar/sitemap',
];

async function checkPaths() {
  const baseUrl = 'https://uneom.com';
  
  console.log('Checking for 404 errors...');
  console.log('===========================');
  
  const results = {
    ok: [],
    notFound: [],
    redirects: [],
    errors: []
  };
  
  for (const path of paths) {
    const url = `${baseUrl}${path}`;
    try {
      const response = await fetch(url, {
        redirect: 'manual'
      });
      
      const status = response.status;
      
      if (status === 404) {
        results.notFound.push({ url, status });
        console.log(`❌ 404: ${url}`);
      } else if (status >= 300 && status < 400) {
        const location = response.headers.get('location');
        results.redirects.push({ url, status, location });
        console.log(`↪️ ${status}: ${url} → ${location}`);
      } else if (status >= 200 && status < 300) {
        results.ok.push({ url, status });
        console.log(`✅ ${status}: ${url}`);
      } else {
        results.errors.push({ url, status });
        console.log(`⚠️ ${status}: ${url}`);
      }
    } catch (error) {
      results.errors.push({ url, error: error.message });
      console.log(`⚠️ Error: ${url} - ${error.message}`);
    }
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log('\nSummary:');
  console.log(`OK: ${results.ok.length}`);
  console.log(`Not Found (404): ${results.notFound.length}`);
  console.log(`Redirects: ${results.redirects.length}`);
  console.log(`Errors: ${results.errors.length}`);
  
  if (results.notFound.length > 0) {
    console.log('\n404 Pages:');
    results.notFound.forEach(item => console.log(`- ${item.url}`));
  }
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach(item => console.log(`- ${item.url}: ${item.error || item.status}`));
  }
}

checkPaths(); 