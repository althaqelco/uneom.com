/**
 * Check 404 SEO Implementation
 * 
 * This script performs comprehensive SEO checks for 404 pages, verifying:
 * - HTTP status codes (should be 404 for non-existent pages)
 * - Meta tags (noindex directives for 404 pages)
 * - Page content (proper error messaging)
 * - Semantic correctness (404 pages have proper title, description)
 */

// Import fetch correctly for Node.js environment
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const { execSync } = require('child_process');

// Base URL to test
const baseUrl = 'https://uneom.com';

// URLs to test - mix of non-existent pages and valid pages
const urlsToTest = [
  // Non-existent pages that should return 404
  '/this-page-does-not-exist',
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

  // Product placeholder pages
  '/shop/industrial-uniforms/product-12345',
  '/shop/retail-uniforms/product-67890',
  
  // Valid pages for comparison
  '/',
  '/about',
  '/contact',
  '/ar'
];

// Valid pages that should return 200
const validPages = ['/', '/about', '/contact', '/ar', '/about/', '/contact/', '/ar/'];

// Function to evaluate a page for SEO factors
async function evaluatePage(url, response) {
  const result = {
    url: url,
    statusCode: response.status,
    redirectUrl: response.url !== baseUrl + url ? response.url : null,
    seoIssues: [],
    seoScore: 100 // Start with perfect score and deduct for issues
  };
  
  // Add detailed information about the response headers
  result.headers = {};
  response.headers.forEach((value, name) => {
    result.headers[name] = value;
  });
  
  try {
    const body = await response.text();
    const $ = cheerio.load(body);
    
    // Check if page should be a 404
    const shouldBe404 = !validPages.includes(url);
    
    // Check if page has a "noindex" robots tag (good for 404 pages)
    const hasNoIndexTag = $('meta[name="robots"]').attr('content')?.includes('noindex') || false;
    
    // Check for proper meta title and description
    const hasProperTitle = $('title').text().includes('404') || $('title').text().includes('Not Found');
    const hasProperDescription = $('meta[name="description"]').attr('content')?.includes('not found') || 
                                 $('meta[name="description"]').attr('content')?.includes('does not exist') || false;
    
    // More precise check for proper 404 content - requires specific formats
    const has404Title = $('title').text().includes('404') || $('title').text().includes('Not Found');
    const hasVisibleError = $('.text-6xl.font-bold.text-primary.mb-6').text().includes('404') ||
                           $('h1:contains("404")').length > 0;
    const hasErrorMessage = $('h2:contains("Page Not Found")').length > 0 || 
                           $('p:contains("We couldn\'t find the page")').length > 0;
    
    // More flexible content check for 404 detection (for actual 404 pages)
    const contentIndicates404 = body.includes('page not found') || 
                              body.includes('404') ||
                              body.includes('does not exist') ||
                              body.includes('صفحة غير موجودة') || // Arabic "page not found"
                              has404Title || 
                              hasVisibleError; 
    
    // Better content detection for 404 pages in valid pages (more strict to avoid false positives)
    const is404Page = (hasVisibleError && hasErrorMessage) || 
                     (has404Title && (hasVisibleError || hasErrorMessage));
    
    // Log X-Robots-Tag header if present
    const xRobotsTag = response.headers.get('x-robots-tag');
    if (xRobotsTag) {
      console.log(`  📋 X-Robots-Tag header: ${xRobotsTag}`);
      if (xRobotsTag.includes('noindex')) {
        console.log(`  ✅ X-Robots-Tag contains noindex directive`);
      }
    }
    
    // Evaluate SEO factors based on page type
    if (shouldBe404) {
      // This should be a 404 page
      if (result.statusCode !== 404) {
        result.seoIssues.push(`Incorrect status code: ${result.statusCode} (should be 404)`);
        result.seoScore -= 30;
      }
      
      if (!hasNoIndexTag && !xRobotsTag?.includes('noindex')) {
        result.seoIssues.push('Missing noindex directive in robots meta tag or header');
        result.seoScore -= 20;
      }
      
      if (!hasProperTitle) {
        result.seoIssues.push('Title does not indicate 404 error');
        result.seoScore -= 15;
      }
      
      if (!hasProperDescription) {
        result.seoIssues.push('Meta description does not indicate 404 error');
        result.seoScore -= 10;
      }
      
      if (!contentIndicates404) {
        result.seoIssues.push('Page content does not clearly indicate 404 error');
        result.seoScore -= 25;
      }
    } else {
      // This should be a valid page
      if (result.statusCode !== 200) {
        result.seoIssues.push(`Incorrect status code: ${result.statusCode} (should be 200)`);
        result.seoScore -= 30;
      }
      
      if (hasNoIndexTag && !url.includes('/ar')) { // Exception for Arabic pages if they should be indexed
        result.seoIssues.push('Valid page has noindex directive');
        result.seoScore -= 20;
      }
      
      if (is404Page) {
        result.seoIssues.push('Valid page contains 404 error content');
        result.seoScore -= 40;
      }
    }
    
    // Cap score at 0 (no negative scores)
    result.seoScore = Math.max(0, result.seoScore);
    
    return result;
  } catch (error) {
    result.seoIssues.push(`Error evaluating page: ${error.message}`);
    result.seoScore = 0;
    return result;
  }
}

// Function to check all pages
async function checkPages() {
  console.log(`🔍 Checking 404 SEO implementation for ${baseUrl}...\n`);
  
  const results = {
    correct404s: [],
    fake404s: [],
    workingPages: [],
    redirects: [],
    errors: [],
    overallScore: 0
  };
  
  let totalScore = 0;
  let pagesChecked = 0;
  
  for (const path of urlsToTest) {
    try {
      console.log(`Checking ${baseUrl}${path}...`);
      const response = await fetch(`${baseUrl}${path}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SEOCheckBot/1.0; +http://example.com/bot)'
        },
        redirect: 'follow'
      });
      
      const evaluation = await evaluatePage(path, response);
      pagesChecked++;
      totalScore += evaluation.seoScore;
      
      // Categorize result
      if (evaluation.statusCode === 404) {
        results.correct404s.push(evaluation);
      } else if (evaluation.statusCode === 200 && evaluation.seoIssues.some(issue => issue.includes('404 error content'))) {
        results.fake404s.push(evaluation);
      } else if (evaluation.redirectUrl) {
        results.redirects.push(evaluation);
      } else if (evaluation.statusCode === 200) {
        results.workingPages.push(evaluation);
      } else {
        results.errors.push(evaluation);
      }
      
      // Log issues for this URL if any
      if (evaluation.seoIssues.length > 0) {
        console.log(`  ⚠️ Issues found for ${path}:`);
        evaluation.seoIssues.forEach(issue => console.log(`    - ${issue}`));
        console.log(`  🏆 SEO Score: ${evaluation.seoScore}/100\n`);
      } else {
        console.log(`  ✅ No issues found for ${path} (Score: ${evaluation.seoScore}/100)\n`);
      }
      
    } catch (error) {
      console.error(`  ❌ Error checking ${path}: ${error.message}\n`);
      results.errors.push({
        url: path,
        error: error.message,
        seoScore: 0
      });
      pagesChecked++;
    }
  }
  
  // Calculate overall score
  results.overallScore = pagesChecked > 0 ? Math.round(totalScore / pagesChecked) : 0;
  
  // Print summary
  console.log('\n===== 404 SEO CHECK SUMMARY =====');
  console.log(`✅ Properly implemented 404 pages: ${results.correct404s.length}`);
  console.log(`⚠️ Pages returning 200 but showing 404 content: ${results.fake404s.length}`);
  console.log(`🔄 Redirects: ${results.redirects.length}`);
  console.log(`🟢 Working pages correctly identified: ${results.workingPages.length}`);
  console.log(`❌ Errors encountered: ${results.errors.length}`);
  console.log(`🏆 Overall SEO Score: ${results.overallScore}/100`);
  
  if (results.overallScore < 80) {
    console.log('\n⚠️ The 404 implementation needs improvement!');
  } else if (results.overallScore < 95) {
    console.log('\n⚠️ The 404 implementation is good but has some issues.');
  } else {
    console.log('\n✅ The 404 implementation is excellent!');
  }
  
  // Save results to file
  fs.writeFileSync('404-seo-report.json', JSON.stringify(results, null, 2));
  console.log('\nDetailed report saved to 404-seo-report.json');
}

// Check if node-fetch is installed, if not install it
function ensureDependencies() {
  try {
    require.resolve('cheerio');
    require.resolve('node-fetch');
    return true;
  } catch (e) {
    console.log('Installing required dependencies...');
    try {
      execSync('npm install cheerio node-fetch@2', { stdio: 'inherit' });
      return true;
    } catch (error) {
      console.error('Failed to install dependencies:', error.message);
      return false;
    }
  }
}

// Run the check if dependencies are available
if (ensureDependencies()) {
  checkPages().catch(error => {
    console.error('Error running checks:', error);
  });
} else {
  console.error('Cannot run checks without required dependencies.');
} 