/**
 * SEO H1 Check Script
 * Run this script with node src/scripts/check-seo-h1.js
 * 
 * This script crawls the website and checks each page for:
 * - Missing H1 tags (ERROR)
 * - Multiple H1 tags (ERROR)
 * - H1 content that is too short or generic (WARNING)
 * - Pages with no keyword-optimized H1 (WARNING)
 * 
 * You can specify pages to check by passing URLs as arguments:
 * node src/scripts/check-seo-h1.js https://uneom.com/ https://uneom.com/about/
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const config = {
  // Base URLs to check (English and Arabic versions)
  baseUrls: ['https://uneom.com', 'https://uneom.com/ar'],
  
  // Page paths to check (will be appended to each base URL)
  // Add more paths as needed
  defaultPaths: [
    '/',
    '/about/',
    '/contact/',
    '/industries/',
    '/industries/healthcare/',
    '/industries/corporate/',
    '/industries/hospitality/',
    '/industries/education/',
    '/industries/security/',
    '/industries/retail-shops/',
    '/industries/manufacturing/',
    '/services/',
    // Add more paths as needed
  ],
  
  // Minimum H1 length in characters
  minH1Length: 20,
  
  // Keywords to check for in H1 tags (basic check)
  keywords: [
    'uniform', 'uniforms', 'scrubs', 'uneom', 'يونيوم', 'الزي الموحد', 'يونيفورم',
    'healthcare', 'corporate', 'hospitality', 'education', 'security', 'retail',
    'رعاية صحية', 'شركات', 'ضيافة', 'تعليم', 'أمن', 'تجزئة'
  ],
  
  // Output file path
  outputFile: 'seo-h1-check-report.json',
};

/**
 * Main function
 */
async function main() {
  console.log('🔍 Starting SEO H1 check...');
  
  // Get URLs from command line args or use default
  const urlsToCheck = process.argv.length > 2 
    ? process.argv.slice(2) 
    : generateUrlsFromPaths();
  
  console.log(`📋 Checking ${urlsToCheck.length} URLs for H1 issues`);
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1280, height: 800 }
  });
  
  const results = [];
  
  // Process each URL
  for (const url of urlsToCheck) {
    const result = await checkPageH1(browser, url);
    results.push(result);
    
    // Log immediate feedback
    if (result.h1Count === 0) {
      console.error(`❌ ERROR: No H1 tag found on ${url}`);
    } else if (result.h1Count > 1) {
      console.error(`❌ ERROR: ${result.h1Count} H1 tags found on ${url}`);
    } else if (result.h1TooShort) {
      console.warn(`⚠️ WARNING: H1 too short on ${url}: "${result.h1Content}"`);
    } else if (!result.hasKeywords) {
      console.warn(`⚠️ WARNING: No target keywords in H1 on ${url}: "${result.h1Content}"`);
    } else {
      console.log(`✅ GOOD: ${url} has proper H1: "${result.h1Content}"`);
    }
  }
  
  // Write results to file
  await fs.writeFile(
    config.outputFile,
    JSON.stringify({
      totalChecked: results.length,
      timestamp: new Date().toISOString(),
      summary: {
        pagesWithNoH1: results.filter(r => r.h1Count === 0).length,
        pagesWithMultipleH1s: results.filter(r => r.h1Count > 1).length,
        pagesWithShortH1: results.filter(r => r.h1TooShort).length,
        pagesWithNoKeywords: results.filter(r => !r.hasKeywords && !r.h1TooShort && r.h1Count === 1).length,
        pagesWithGoodH1: results.filter(r => !r.h1TooShort && r.hasKeywords && r.h1Count === 1).length,
      },
      results
    }, null, 2)
  );
  
  console.log(`\n📊 Summary:`);
  console.log(`   - Total pages checked: ${results.length}`);
  console.log(`   - Pages with no H1: ${results.filter(r => r.h1Count === 0).length}`);
  console.log(`   - Pages with multiple H1s: ${results.filter(r => r.h1Count > 1).length}`);
  console.log(`   - Pages with short H1: ${results.filter(r => r.h1TooShort).length}`);
  console.log(`   - Pages with no keywords in H1: ${results.filter(r => !r.hasKeywords && !r.h1TooShort && r.h1Count === 1).length}`);
  console.log(`   - Pages with good H1: ${results.filter(r => !r.h1TooShort && r.hasKeywords && r.h1Count === 1).length}`);
  console.log(`\n💾 Full report saved to ${config.outputFile}`);
  
  await browser.close();
}

/**
 * Generate URLs from base URLs and paths
 */
function generateUrlsFromPaths() {
  const urls = [];
  
  for (const baseUrl of config.baseUrls) {
    for (const path of config.defaultPaths) {
      urls.push(`${baseUrl}${path}`);
    }
  }
  
  return urls;
}

/**
 * Check H1 tags on a page
 */
async function checkPageH1(browser, url) {
  const result = {
    url,
    h1Count: 0,
    h1Content: '',
    h1Elements: [],
    h1TooShort: false,
    hasKeywords: false,
    status: 'unknown',
    error: null
  };
  
  const page = await browser.newPage();
  
  try {
    // Navigate to page
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Extract H1 information
    const h1Data = await page.evaluate(() => {
      const h1Elements = Array.from(document.querySelectorAll('h1'));
      return {
        count: h1Elements.length,
        contents: h1Elements.map(el => el.textContent.trim()),
        innerHtml: h1Elements.map(el => el.innerHTML)
      };
    });
    
    // Process results
    result.h1Count = h1Data.count;
    result.h1Elements = h1Data.innerHtml;
    
    if (h1Data.count === 1) {
      result.h1Content = h1Data.contents[0];
      result.h1TooShort = result.h1Content.length < config.minH1Length;
      
      // Check for keywords
      const lowerContent = result.h1Content.toLowerCase();
      result.hasKeywords = config.keywords.some(keyword => 
        lowerContent.includes(keyword.toLowerCase())
      );
      
      if (!result.h1TooShort && result.hasKeywords) {
        result.status = 'good';
      } else if (result.h1TooShort) {
        result.status = 'warning_short';
      } else {
        result.status = 'warning_no_keywords';
      }
    } else if (h1Data.count === 0) {
      result.status = 'error_no_h1';
    } else {
      result.status = 'error_multiple_h1';
      result.h1Content = h1Data.contents.join(' | ');
    }
    
  } catch (error) {
    result.status = 'error_loading';
    result.error = error.message;
    console.error(`Error checking ${url}:`, error);
  } finally {
    await page.close();
  }
  
  return result;
}

// Run the script
main().catch(console.error); 