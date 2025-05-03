const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio');

// Base URL of the website
const baseUrl = 'https://uneom.com';

// Patterns to look for in internal links
const problematicPatterns = [
  '/shop/*/related-product-*',
  '/shop/*/product-*',
  '/ar/shop/*/related-product-*',
  '/ar/shop/*/product-*'
];

// Main pages to check
const pagesToCheck = [
  '/',
  '/shop',
  '/industries',
  '/services',
  '/about',
  '/contact',
  '/blog',
  '/ar',
  '/ar/shop',
  '/ar/industries',
  '/ar/services',
  '/ar/about',
  '/ar/contact',
  '/ar/blog'
];

// Convert glob patterns to regex
function globToRegex(pattern) {
  return new RegExp('^' + pattern.replace(/\*/g, '[^/]+') + '$');
}

const patternRegexes = problematicPatterns.map(globToRegex);

// Check if a URL matches any of our problematic patterns
function isProblematicUrl(url) {
  const path = url.replace(baseUrl, '');
  
  for (const regex of patternRegexes) {
    if (regex.test(path)) {
      return true;
    }
  }
  
  return false;
}

// Extract all links from a page
async function extractLinks(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const links = [];

    $('a').each((i, element) => {
      const href = $(element).attr('href');
      if (href && href.startsWith('/')) {
        const fullUrl = baseUrl + href;
        links.push({
          url: fullUrl,
          text: $(element).text().trim() || '[no text]',
          source: url
        });
      }
    });

    return links;
  } catch (error) {
    console.error(`Error extracting links from ${url}: ${error.message}`);
    return [];
  }
}

// Main function to check all pages for problematic links
async function checkInternalLinks() {
  console.log('Checking for internal links to problematic product pages...');
  console.log('========================================================');
  
  let problematicLinks = [];
  let checkedPages = new Set();
  
  // Start with the main pages
  for (const page of pagesToCheck) {
    const pageUrl = baseUrl + page;
    
    if (checkedPages.has(pageUrl)) {
      continue;
    }
    
    console.log(`Checking page: ${pageUrl}`);
    checkedPages.add(pageUrl);
    
    const links = await extractLinks(pageUrl);
    console.log(`  Found ${links.length} internal links`);
    
    // Check if any links are problematic
    const badLinks = links.filter(link => isProblematicUrl(link.url));
    if (badLinks.length > 0) {
      console.log(`  ❌ Found ${badLinks.length} problematic links`);
      problematicLinks = problematicLinks.concat(badLinks);
    }
    
    // Add a delay to avoid being rate-limited
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Print summary
  console.log('\n========================================================');
  
  if (problematicLinks.length > 0) {
    console.log(`Found ${problematicLinks.length} problematic internal links:`);
    problematicLinks.forEach(link => {
      console.log(`  - ${link.url}`);
      console.log(`    Text: "${link.text}"`);
      console.log(`    Source: ${link.source}`);
    });
    
    console.log('\nThese links should be updated or removed to avoid directing users to 404 pages.');
  } else {
    console.log('✅ No problematic internal links found pointing to placeholder product pages.');
  }
}

// Install cheerio if not already installed
async function installDependencies() {
  try {
    require.resolve('cheerio');
    console.log('Cheerio is already installed, proceeding with check...');
    await checkInternalLinks();
  } catch (e) {
    console.log('Installing required dependencies...');
    const { execSync } = require('child_process');
    try {
      execSync('npm install cheerio');
      console.log('Cheerio installed successfully, proceeding with check...');
      await checkInternalLinks();
    } catch (error) {
      console.error(`Failed to install dependencies: ${error.message}`);
      console.log('Please run "npm install cheerio" manually before running this script.');
    }
  }
}

installDependencies(); 