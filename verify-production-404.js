/**
 * Production 404 Status Verification
 * 
 * This script verifies that the 404 implementation is working correctly in production.
 * It checks:
 * 1. HTTP status codes (should be 404 for non-existent pages)
 * 2. Presence of noindex meta tag
 * 3. Content matches expected 404 page
 * 
 * Usage: node verify-production-404.js
 */

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { execSync } = require('child_process');

// Configure these settings
const SITE_URL = 'https://uneom.com';
const TIMEOUT_MS = 10000; // 10 seconds timeout for requests
const USER_AGENT = 'Mozilla/5.0 (compatible; UneomVerificationBot/1.0; +http://uneom.com)';

// URLs to test
const TEST_URLS = [
  // These should return 404
  '/this-page-should-not-exist-19283746',
  '/blog/non-existent-article-82738',
  '/shop/non-existent-product-37465',
  '/industries/fake-industry-38475',
  '/services/fake-service-12345',
  
  // Special cases
  '/shop/industrial-uniforms/product-12345', // Should be 301 redirect or 404
  
  // These should return 200
  '/',
  '/about',
  '/contact'
];

async function verifyUrl(url) {
  console.log(`Checking: ${SITE_URL}${url}`);
  
  try {
    // Send request
    const response = await fetch(`${SITE_URL}${url}`, {
      method: 'GET',
      headers: { 'User-Agent': USER_AGENT },
      timeout: TIMEOUT_MS,
      redirect: 'manual' // Don't automatically follow redirects
    });
    
    const statusCode = response.status;
    let result = {
      url: url,
      statusCode: statusCode,
      isRedirect: statusCode >= 300 && statusCode < 400,
      redirectLocation: response.headers.get('location'),
      expectedStatusCode: url === '/' || url === '/about' || url === '/contact' ? 200 : 404,
      passed: false,
      details: []
    };
    
    // Check for redirect
    if (result.isRedirect) {
      result.details.push(`Redirects to: ${result.redirectLocation}`);
      
      // Consider it a success if:
      // 1. It's a product placeholder redirect
      // 2. Or it's a main page that redirects to the same URL with trailing slash
      if (url.includes('/product-')) {
        result.passed = true;
      } else if ((url === '/about' && result.redirectLocation === `${SITE_URL}/about/`) || 
                (url === '/contact' && result.redirectLocation === `${SITE_URL}/contact/`) ||
                (url === '/' && result.redirectLocation === `${SITE_URL}/`)) {
        result.passed = true;
        result.details.push('(This redirect is acceptable - just adding trailing slash)');
      }
      return result;
    }
    
    // Check status code
    if (statusCode === result.expectedStatusCode) {
      result.details.push(`✅ Status code is correct: ${statusCode}`);
      result.passed = true;
    } else {
      result.details.push(`❌ Wrong status code: ${statusCode} (expected ${result.expectedStatusCode})`);
      result.passed = false;
      return result; // Stop here if status code is wrong
    }
    
    // For 404 pages, check content
    if (statusCode === 404) {
      // Get content
      const body = await response.text();
      const $ = cheerio.load(body);
      
      // Check for noindex meta tag
      const hasNoIndex = $('meta[name="robots"]').attr('content')?.includes('noindex') || false;
      if (hasNoIndex) {
        result.details.push('✅ Has noindex meta tag');
      } else {
        result.details.push('❌ Missing noindex meta tag');
        result.passed = false;
      }
      
      // Check for 404 in title
      const hasProperTitle = $('title').text().includes('404') || $('title').text().includes('Not Found');
      if (hasProperTitle) {
        result.details.push('✅ Title contains 404 reference');
      } else {
        result.details.push('❌ Title does not indicate 404 error');
        result.passed = false;
      }
      
      // Check basic content
      const has404Text = body.includes('404') && 
                         (body.includes('not found') || 
                          body.includes('does not exist') || 
                          body.includes('صفحة غير موجودة'));
      
      if (has404Text) {
        result.details.push('✅ Content contains proper 404 messaging');
      } else {
        result.details.push('❌ Content does not indicate 404 error');
        result.passed = false;
      }
    }
    
    return result;
  } catch (error) {
    return {
      url: url,
      statusCode: 'ERROR',
      passed: false,
      details: [`❌ Error: ${error.message}`]
    };
  }
}

async function runVerification() {
  console.log(`🔍 Verifying 404 implementation on ${SITE_URL}`);
  console.log(`📋 Testing ${TEST_URLS.length} URLs\n`);
  
  const results = {
    passed: 0,
    failed: 0,
    tested: 0,
    details: []
  };
  
  for (const url of TEST_URLS) {
    const result = await verifyUrl(url);
    results.details.push(result);
    results.tested++;
    
    if (result.passed) {
      results.passed++;
      console.log(`  ✅ ${url} - PASSED`);
      if (result.details.length > 0 && result.isRedirect) {
        // Show redirect info even for passing cases
        console.log(`     - ${result.details[0]}`);
        if (result.details.length > 1) {
          console.log(`     - ${result.details[1]}`);
        }
      }
    } else {
      results.failed++;
      console.log(`  ❌ ${url} - FAILED`);
      for (const detail of result.details) {
        console.log(`     - ${detail}`);
      }
    }
    console.log(''); // Add empty line for readability
  }
  
  // Print summary
  console.log('\n==== VERIFICATION SUMMARY ====');
  console.log(`Total URLs tested: ${results.tested}`);
  console.log(`Passed: ${results.passed}`);
  console.log(`Failed: ${results.failed}`);
  
  if (results.failed === 0) {
    console.log('\n✅ SUCCESS: All 404 checks passed! The implementation is working correctly.');
  } else {
    console.log(`\n❌ FAILED: ${results.failed} URL(s) did not pass verification.`);
    console.log('Please check the issues listed above and fix them.');
  }
  
  return results;
}

// Ensure necessary dependencies are installed
function ensureDependencies() {
  try {
    require.resolve('node-fetch');
    require.resolve('cheerio');
    return true;
  } catch (e) {
    console.log('Installing required dependencies...');
    try {
      execSync('npm install node-fetch@2 cheerio', { stdio: 'inherit' });
      return true;
    } catch (error) {
      console.error(`Failed to install dependencies: ${error.message}`);
      console.log('\nPlease run: npm install node-fetch@2 cheerio');
      return false;
    }
  }
}

// Run the verification if dependencies are installed
if (ensureDependencies()) {
  runVerification().catch(error => {
    console.error(`Error during verification: ${error.message}`);
  });
} 