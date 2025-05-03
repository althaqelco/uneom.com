const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Base URL of the website
const baseUrl = 'https://uneom.com';

// Categories to check
const categories = [
  '/shop/retail-uniforms',
  '/shop/industrial-uniforms',
  '/shop/medical-scrubs',
  '/shop/healthcare-accessories',
  '/shop/aviation-uniforms',
  '/shop/hospitality-uniforms',
  '/shop/corporate-uniforms',
  '/shop/security-uniforms',
  '/shop/education-uniforms',
  '/shop/manufacturing-uniforms',
  '/shop/factory-uniforms'
];

// Patterns to check for each category
const patterns = [
  '/related-product-1',
  '/related-product-2', 
  '/related-product-3',
  '/related-product-4',
  '/related-product-5',
  '/product-1',
  '/product-2',
  '/product-3',
  '/product-4',
  '/product-5'
];

// Arabic versions
const arCategories = categories.map(cat => `/ar${cat}`);
const allCategories = [...categories, ...arCategories];

async function checkURL(url) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'manual'
    });
    
    // For debugging - log actual HTML content for some URLs
    if (Math.random() < 0.1) { // Check ~10% of URLs for actual content
      const contentResponse = await fetch(url);
      const text = await contentResponse.text();
      const hasNotFoundMessage = text.includes('404') && 
                                 text.includes('Page Not Found');
      console.log(`${url}: Status ${response.status}, Has 404 content: ${hasNotFoundMessage}`);
    } else {
      console.log(`${url}: Status ${response.status}`);
    }
    
    return {
      url,
      status: response.status,
      isOk: response.ok
    };
  } catch (error) {
    console.error(`Error checking ${url}: ${error.message}`);
    return {
      url,
      status: 'Error',
      isOk: false,
      error: error.message
    };
  }
}

async function checkAllLinks() {
  console.log('Checking for problematic shop links...');
  console.log('==================================');
  
  const results = {
    ok: [],
    notFound: []
  };
  
  for (const category of allCategories) {
    for (const pattern of patterns) {
      const url = `${baseUrl}${category}${pattern}/`;
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const result = await checkURL(url);
      
      if (result.isOk) {
        results.ok.push(result.url);
      } else {
        results.notFound.push(result.url);
      }
    }
  }
  
  // Print summary
  console.log('\n==================================');
  console.log('Results Summary:');
  console.log(`Total links checked: ${results.ok.length + results.notFound.length}`);
  console.log(`Links returning 200 OK: ${results.ok.length}`);
  console.log(`Links with errors/not found: ${results.notFound.length}`);
  
  // Check if these URLs contain actual content or show 404 page
  if (results.ok.length > 0) {
    console.log('\nWARNING: The following URLs return 200 OK but may display 404 content:');
    results.ok.forEach(url => console.log(` - ${url}`));
  }
}

checkAllLinks(); 