/**
 * SEO Verification Script
 * 
 * This script checks critical SEO elements across key pages to ensure proper implementation.
 * It verifies:
 * - Canonical URLs
 * - Hreflang tags
 * - Content rendering (word count)
 * - H1 tags
 * - Meta tags
 * - Structured data
 *
 * Usage: node scripts/verify-seo.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { JSDOM } = require('jsdom');
const chalk = require('chalk');

// Key pages to check (focused on those mentioned in scramefrog.md)
const pagesToCheck = [
  { url: '/', name: 'Home', hasArVersion: true },
  { url: '/about/', name: 'About', hasArVersion: true },
  { url: '/contact/', name: 'Contact', hasArVersion: true },
  { url: '/industries/healthcare/', name: 'Healthcare Industry', hasArVersion: true },
  { url: '/industries/corporate/', name: 'Corporate Industry', hasArVersion: true },
  { url: '/services/', name: 'Services', hasArVersion: true },
];

// Base URL for the site
const baseUrl = 'https://uneom.com';

// Results storage
const results = {
  canonical: { pass: [], fail: [] },
  hreflang: { pass: [], fail: [] },
  h1: { pass: [], fail: [] },
  wordCount: { pass: [], fail: [] },
  metaTags: { pass: [], fail: [] },
  structuredData: { pass: [], fail: [] },
};

/**
 * Fetch a URL and return the HTML content
 */
async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Check if a URL has proper canonical tag
 */
async function checkCanonical(pageUrl, fullUrl) {
  try {
    const html = await fetchUrl(fullUrl);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      results.canonical.fail.push({
        page: pageUrl,
        reason: 'No canonical tag found'
      });
      return false;
    }
    
    const canonicalUrl = canonicalTag.getAttribute('href');
    const expectedCanonical = fullUrl;
    
    if (canonicalUrl === expectedCanonical) {
      results.canonical.pass.push({
        page: pageUrl,
        canonical: canonicalUrl
      });
      return true;
    } else {
      results.canonical.fail.push({
        page: pageUrl,
        expected: expectedCanonical,
        found: canonicalUrl
      });
      return false;
    }
  } catch (error) {
    results.canonical.fail.push({
      page: pageUrl,
      reason: `Error: ${error.message}`
    });
    return false;
  }
}

/**
 * Check if a URL has proper hreflang tags
 */
async function checkHreflang(pageUrl, fullUrl, isArabic = false) {
  try {
    const html = await fetchUrl(fullUrl);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const hreflangTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    if (hreflangTags.length === 0) {
      results.hreflang.fail.push({
        page: pageUrl,
        reason: 'No hreflang tags found'
      });
      return false;
    }
    
    // For English pages
    const expectedTags = isArabic ? [
      { lang: 'ar-SA', url: fullUrl },
      { lang: 'en-SA', url: fullUrl.replace('/ar', '') },
      { lang: 'x-default', url: fullUrl.replace('/ar', '') }
    ] : [
      { lang: 'en-SA', url: fullUrl },
      { lang: 'ar-SA', url: fullUrl.replace(baseUrl, `${baseUrl}/ar`) },
      { lang: 'x-default', url: fullUrl }
    ];
    
    let missingTags = [];
    let incorrectTags = [];
    
    // Check if all expected tags are present
    expectedTags.forEach(expected => {
      let found = false;
      
      hreflangTags.forEach(tag => {
        const lang = tag.getAttribute('hreflang');
        const href = tag.getAttribute('href');
        
        if (lang === expected.lang) {
          found = true;
          
          if (href !== expected.url) {
            incorrectTags.push({
              lang,
              expected: expected.url,
              found: href
            });
          }
        }
      });
      
      if (!found) {
        missingTags.push(expected.lang);
      }
    });
    
    if (missingTags.length === 0 && incorrectTags.length === 0) {
      results.hreflang.pass.push({
        page: pageUrl,
        tags: Array.from(hreflangTags).map(tag => ({
          lang: tag.getAttribute('hreflang'),
          href: tag.getAttribute('href')
        }))
      });
      return true;
    } else {
      results.hreflang.fail.push({
        page: pageUrl,
        missingTags,
        incorrectTags
      });
      return false;
    }
  } catch (error) {
    results.hreflang.fail.push({
      page: pageUrl,
      reason: `Error: ${error.message}`
    });
    return false;
  }
}

/**
 * Check if a URL has H1 tags
 */
async function checkH1(pageUrl, fullUrl) {
  try {
    const html = await fetchUrl(fullUrl);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const h1Tags = document.querySelectorAll('h1');
    
    if (h1Tags.length === 0) {
      results.h1.fail.push({
        page: pageUrl,
        reason: 'No H1 tag found'
      });
      return false;
    }
    
    if (h1Tags.length > 1) {
      results.h1.fail.push({
        page: pageUrl,
        reason: `Multiple H1 tags found (${h1Tags.length})`
      });
      return false;
    }
    
    const h1Content = h1Tags[0].textContent.trim();
    
    if (h1Content.length < 5) {
      results.h1.fail.push({
        page: pageUrl,
        reason: 'H1 content too short',
        content: h1Content
      });
      return false;
    }
    
    results.h1.pass.push({
      page: pageUrl,
      content: h1Content
    });
    return true;
  } catch (error) {
    results.h1.fail.push({
      page: pageUrl,
      reason: `Error: ${error.message}`
    });
    return false;
  }
}

/**
 * Check word count for a page
 */
async function checkWordCount(pageUrl, fullUrl) {
  try {
    const html = await fetchUrl(fullUrl);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Get text content from the body, excluding scripts and styles
    const bodyText = document.body.textContent.replace(/\\s+/g, ' ').trim();
    const wordCount = bodyText.split(/\\s+/).length;
    
    if (wordCount < 100) {
      results.wordCount.fail.push({
        page: pageUrl,
        wordCount,
        reason: 'Word count too low'
      });
      return false;
    }
    
    results.wordCount.pass.push({
      page: pageUrl,
      wordCount
    });
    return true;
  } catch (error) {
    results.wordCount.fail.push({
      page: pageUrl,
      reason: `Error: ${error.message}`
    });
    return false;
  }
}

/**
 * Check meta tags
 */
async function checkMetaTags(pageUrl, fullUrl) {
  try {
    const html = await fetchUrl(fullUrl);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const title = document.querySelector('title');
    const description = document.querySelector('meta[name="description"]');
    
    if (!title) {
      results.metaTags.fail.push({
        page: pageUrl,
        reason: 'No title tag found'
      });
      return false;
    }
    
    if (!description) {
      results.metaTags.fail.push({
        page: pageUrl,
        reason: 'No meta description found'
      });
      return false;
    }
    
    const titleContent = title.textContent.trim();
    const descriptionContent = description.getAttribute('content');
    
    if (titleContent.length < 10) {
      results.metaTags.fail.push({
        page: pageUrl,
        reason: 'Title too short',
        title: titleContent
      });
      return false;
    }
    
    if (descriptionContent.length < 50) {
      results.metaTags.fail.push({
        page: pageUrl,
        reason: 'Description too short',
        description: descriptionContent
      });
      return false;
    }
    
    results.metaTags.pass.push({
      page: pageUrl,
      title: titleContent,
      description: descriptionContent
    });
    return true;
  } catch (error) {
    results.metaTags.fail.push({
      page: pageUrl,
      reason: `Error: ${error.message}`
    });
    return false;
  }
}

/**
 * Check structured data
 */
async function checkStructuredData(pageUrl, fullUrl) {
  try {
    const html = await fetchUrl(fullUrl);
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const ldJsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (ldJsonScripts.length === 0) {
      results.structuredData.fail.push({
        page: pageUrl,
        reason: 'No structured data found'
      });
      return false;
    }
    
    // Parse JSON from all ld+json scripts
    const parsedData = [];
    let hasError = false;
    
    for (const script of ldJsonScripts) {
      try {
        const json = JSON.parse(script.textContent);
        parsedData.push(json);
      } catch (e) {
        hasError = true;
        results.structuredData.fail.push({
          page: pageUrl,
          reason: `Invalid JSON in structured data: ${e.message}`
        });
        return false;
      }
    }
    
    if (!hasError) {
      results.structuredData.pass.push({
        page: pageUrl,
        schemaCount: parsedData.length,
        schemas: parsedData.map(data => data['@type'])
      });
      return true;
    }
  } catch (error) {
    results.structuredData.fail.push({
      page: pageUrl,
      reason: `Error: ${error.message}`
    });
    return false;
  }
}

/**
 * Run all checks for a page
 */
async function runChecks() {
  console.log('Starting SEO verification...');
  
  for (const page of pagesToCheck) {
    const fullUrl = `${baseUrl}${page.url}`;
    console.log(`Checking ${page.name} (${fullUrl})...`);
    
    await checkCanonical(page.url, fullUrl);
    await checkHreflang(page.url, fullUrl);
    await checkH1(page.url, fullUrl);
    await checkWordCount(page.url, fullUrl);
    await checkMetaTags(page.url, fullUrl);
    await checkStructuredData(page.url, fullUrl);
    
    // Check Arabic version if it exists
    if (page.hasArVersion) {
      const arUrl = `/ar${page.url}`;
      const fullArUrl = `${baseUrl}${arUrl}`;
      console.log(`Checking Arabic version: ${fullArUrl}...`);
      
      await checkCanonical(arUrl, fullArUrl);
      await checkHreflang(arUrl, fullArUrl, true);
      await checkH1(arUrl, fullArUrl);
      await checkWordCount(arUrl, fullArUrl);
      await checkMetaTags(arUrl, fullArUrl);
      await checkStructuredData(arUrl, fullArUrl);
    }
  }
  
  // Print results
  printResults();
}

/**
 * Print results in a readable format
 */
function printResults() {
  console.log('\n=== SEO VERIFICATION RESULTS ===');
  
  const sections = [
    { name: 'Canonical URLs', key: 'canonical' },
    { name: 'Hreflang Tags', key: 'hreflang' },
    { name: 'H1 Tags', key: 'h1' },
    { name: 'Word Count', key: 'wordCount' },
    { name: 'Meta Tags', key: 'metaTags' },
    { name: 'Structured Data', key: 'structuredData' }
  ];
  
  for (const section of sections) {
    console.log(`\n=== ${section.name} ===`);
    
    const passCount = results[section.key].pass.length;
    const failCount = results[section.key].fail.length;
    const totalCount = passCount + failCount;
    
    console.log(`PASS: ${passCount}/${totalCount} (${Math.round(passCount/totalCount*100)}%)`);
    
    if (failCount > 0) {
      console.log(`FAIL: ${failCount}/${totalCount}`);
      console.log('Failed pages:');
      
      results[section.key].fail.forEach(fail => {
        console.log(`  - ${fail.page}: ${fail.reason || JSON.stringify(fail)}`);
      });
    }
  }
  
  // Write detailed results to a file
  const resultsFile = path.join(__dirname, '../seo-verification-results.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`\nDetailed results saved to ${resultsFile}`);
}

// Run the checks
runChecks(); 