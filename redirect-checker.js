const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// A smaller subset of URLs to test redirects
const urlsToCheck = [
  '/shop/retail-uniforms/related-product-1/',
  '/shop/industrial-uniforms/related-product-2/',
  '/shop/medical-scrubs/product-3/',
  '/ar/shop/retail-uniforms/related-product-4/',
  '/ar/shop/healthcare-accessories/product-5/'
];

async function checkRedirects() {
  const baseUrl = 'https://uneom.com';
  
  console.log('Checking redirects for product placeholder pages...');
  console.log('=================================================');
  
  for (const url of urlsToCheck) {
    const fullUrl = `${baseUrl}${url}`;
    
    try {
      // Use manual redirect mode to see original redirect
      const response = await fetch(fullUrl, {
        redirect: 'manual',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      
      const status = response.status;
      const location = response.headers.get('location');
      
      const expectedRedirectUrl = url.includes('/ar/') 
        ? baseUrl + url.substring(0, url.indexOf('/product') !== -1 ? url.indexOf('/product') : url.indexOf('/related-product')) + '/'
        : baseUrl + url.substring(0, url.indexOf('/product') !== -1 ? url.indexOf('/product') : url.indexOf('/related-product')) + '/';
      
      if (status === 301 && location) {
        if (location === expectedRedirectUrl) {
          console.log(`✅ ${url} -> ${location} (OK)`);
        } else {
          console.log(`⚠️ ${url} -> ${location} (Redirected, but not to expected URL: ${expectedRedirectUrl})`);
        }
      } else if (status === 200) {
        console.log(`❌ ${url} returned status 200 - No redirect in place yet`);
      } else {
        console.log(`❓ ${url} returned unexpected status ${status}`);
      }
    } catch (error) {
      console.error(`Error checking ${url}: ${error.message}`);
    }
    
    // Add a small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\nTIP: If you still see 200 status codes, you may need to:');
  console.log('1. Make sure you\'ve deployed the updated netlify.toml file');
  console.log('2. Clear your browser cache or use incognito mode');
  console.log('3. Wait for the Netlify CDN to refresh its cache');
}

checkRedirects(); 