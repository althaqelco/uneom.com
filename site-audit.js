/**
 * Comprehensive Site Audit for Uneom
 * This script combines both sitemap checking and site crawling
 * to provide a complete report on the website's URL health
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const xml2js = require('xml2js');
const { URL } = require('url');

// Constants
const BASE_URL = 'https://uneom.com';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;
const REPORT_PATH = path.join(__dirname, 'site-audit-report.json');
const CONCURRENCY_LIMIT = 5; // Number of concurrent requests
const TIMEOUT = 15000; // Timeout for each request in ms
const MAX_CRAWL_URLS = 1000; // Maximum number of URLs to crawl (for safety)

// URL tracking
const checkedUrls = new Set();
const urlResults = new Map();
const crawlQueue = new Set();

// Print progress information
let totalUrlsChecked = 0;
let lastProgressUpdate = Date.now();

// Set up interval for status updates
const progressInterval = setInterval(() => {
  console.log(`Progress: ${totalUrlsChecked} URLs checked, ${crawlQueue.size} in queue`);
}, 5000);

// Helper function to parse XML sitemap
async function parseSitemap(url) {
  try {
    console.log(`Fetching sitemap from: ${url}`);
    const response = await axios.get(url, { timeout: TIMEOUT });
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(response.data);
    
    if (!result.urlset || !result.urlset.url) {
      throw new Error('Invalid sitemap format');
    }
    
    // Normalize to array
    const urls = Array.isArray(result.urlset.url) ? result.urlset.url : [result.urlset.url];
    
    // Extract URL strings
    return urls.map(item => {
      // If it's a string, return as is, otherwise extract the loc property
      return typeof item === 'string' ? item : item.loc;
    });
  } catch (error) {
    console.error('Error parsing sitemap:', error.message);
    return [];
  }
}

// Helper function to normalize URLs
function normalizeUrl(url, baseUrl) {
  try {
    // Strip hash fragments
    url = url.split('#')[0];
    
    // Handle relative URLs
    if (!url.startsWith('http')) {
      // Handle relative paths
      if (url.startsWith('/')) {
        return new URL(url, BASE_URL).href;
      } else {
        return new URL(url, baseUrl).href;
      }
    }
    
    // Return absolute URLs as-is if they belong to our domain
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname === new URL(BASE_URL).hostname) {
      return url;
    }
    
    return null; // External URL
  } catch (e) {
    console.error(`Error normalizing URL: ${url}`, e.message);
    return null;
  }
}

// Extract links from HTML content
function extractLinks(html, baseUrl) {
  const links = new Set();
  try {
    const $ = cheerio.load(html);
    
    // Find all a tags and extract href attributes
    $('a').each((_, element) => {
      const href = $(element).attr('href');
      if (href && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        const normalized = normalizeUrl(href, baseUrl);
        if (normalized) {
          links.add(normalized);
        }
      }
    });
  } catch (error) {
    console.error(`Error extracting links from ${baseUrl}:`, error.message);
  }
  
  return Array.from(links);
}

// Helper function to check a single URL
async function checkUrl(url, referrer = null) {
  try {
    const normalizedUrl = url.split('#')[0]; // Remove hash fragments
    
    // Skip if already checked
    if (checkedUrls.has(normalizedUrl)) {
      return urlResults.get(normalizedUrl);
    }
    
    // Mark as checked to avoid duplicate checks
    checkedUrls.add(normalizedUrl);
    
    // Update progress counter
    totalUrlsChecked++;
    if (Date.now() - lastProgressUpdate > 5000) {
      lastProgressUpdate = Date.now();
      console.log(`Checking: ${normalizedUrl} (${totalUrlsChecked} total)`);
    }
    
    const startTime = Date.now();
    const response = await axios.get(normalizedUrl, { 
      timeout: TIMEOUT,
      maxRedirects: 5,
      validateStatus: status => true, // Don't throw on any status code
      headers: {
        'User-Agent': 'Mozilla/5.0 UneomSiteAudit/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Referer': referrer || BASE_URL
      }
    });
    
    const responseTime = Date.now() - startTime;
    let links = [];
    
    // Only extract links from HTML content
    if (response.headers['content-type'] && 
        response.headers['content-type'].includes('text/html') && 
        response.status === 200) {
      links = extractLinks(response.data, normalizedUrl);
      
      // Add new links to crawl queue if not already checked
      links.forEach(link => {
        if (!checkedUrls.has(link) && !crawlQueue.has(link)) {
          crawlQueue.add(link);
        }
      });
    }
    
    const result = {
      url: normalizedUrl,
      status: response.status,
      redirectUrl: response.request.res.responseUrl !== normalizedUrl ? response.request.res.responseUrl : null,
      responseTime,
      contentType: response.headers['content-type'],
      contentLength: response.headers['content-length'] || 
                    (response.data ? Buffer.byteLength(JSON.stringify(response.data)) : 0),
      referrer,
      links,
      discoveredBy: referrer ? 'crawl' : 'sitemap',
      timestamp: new Date().toISOString()
    };
    
    // Store result for later reference
    urlResults.set(normalizedUrl, result);
    
    return result;
  } catch (error) {
    const result = {
      url,
      status: 'ERROR',
      error: error.message,
      referrer,
      discoveredBy: referrer ? 'crawl' : 'sitemap',
      timestamp: new Date().toISOString()
    };
    
    // Store result for later reference
    urlResults.set(url, result);
    
    return result;
  }
}

// Process batch of URLs concurrently
async function processBatch(urls, referrer = null) {
  const results = [];
  const batchSize = CONCURRENCY_LIMIT;
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchPromises = batch.map(url => checkUrl(url, referrer));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    // Small delay between batches to be nice to the server
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return results;
}

// Analyze the page types based on URL patterns
function analyzePageTypes(results) {
  const pageTypes = {
    home: 0,
    blog: 0,
    industries: 0,
    services: 0,
    resources: 0,
    shop: 0,
    contact: 0,
    about: 0,
    locations: 0,
    other: 0
  };
  
  results.forEach(result => {
    const url = result.url.toLowerCase();
    
    if (url === BASE_URL || url === `${BASE_URL}/` || url === `${BASE_URL}/ar` || url === `${BASE_URL}/ar/`) {
      pageTypes.home++;
    } else if (url.includes('/blog')) {
      pageTypes.blog++;
    } else if (url.includes('/industries')) {
      pageTypes.industries++;
    } else if (url.includes('/services')) {
      pageTypes.services++;
    } else if (url.includes('/resources')) {
      pageTypes.resources++;
    } else if (url.includes('/shop')) {
      pageTypes.shop++;
    } else if (url.includes('/contact')) {
      pageTypes.contact++;
    } else if (url.includes('/about')) {
      pageTypes.about++;
    } else if (url.includes('/locations')) {
      pageTypes.locations++;
    } else {
      pageTypes.other++;
    }
  });
  
  return pageTypes;
}

// Analyze language distribution (EN vs AR)
function analyzeLanguages(results) {
  const languages = {
    english: 0,
    arabic: 0,
    unknown: 0
  };
  
  results.forEach(result => {
    const url = result.url.toLowerCase();
    if (url.includes('/ar/')) {
      languages.arabic++;
    } else if (url.includes(BASE_URL.toLowerCase())) {
      languages.english++;
    } else {
      languages.unknown++;
    }
  });
  
  return languages;
}

// Generate comprehensive audit report
function generateReport(results) {
  // Count by status code
  const statusCounts = results.reduce((acc, result) => {
    const status = result.status.toString();
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
  
  // Calculate average response time for successful requests
  const successfulRequests = results.filter(r => r.status >= 200 && r.status < 400 && r.responseTime);
  const avgResponseTime = successfulRequests.length > 0 ?
    successfulRequests.reduce((sum, r) => sum + r.responseTime, 0) / successfulRequests.length :
    0;
  
  // Identify redirects
  const redirects = results.filter(r => r.status >= 300 && r.status < 400 && r.redirectUrl);
  
  // Identify errors
  const errors = results.filter(r => r.status >= 400 || r.status === 'ERROR');
  
  // Analyze content types
  const contentTypes = results.reduce((acc, result) => {
    if (result.contentType) {
      const type = result.contentType.split(';')[0].trim();
      acc[type] = (acc[type] || 0) + 1;
    }
    return acc;
  }, {});
  
  // Find most linked pages (pages with most incoming links)
  const incomingLinks = {};
  results.forEach(result => {
    if (result.links) {
      result.links.forEach(link => {
        incomingLinks[link] = (incomingLinks[link] || 0) + 1;
      });
    }
  });
  
  const popularPages = Object.entries(incomingLinks)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([url, count]) => ({ url, incomingLinks: count }));
  
  // Analyze discovery method
  const discoveryMethods = results.reduce((acc, result) => {
    const method = result.discoveredBy || 'unknown';
    acc[method] = (acc[method] || 0) + 1;
    return acc;
  }, {});
  
  // Get page type distribution
  const pageTypes = analyzePageTypes(results);
  
  // Get language distribution
  const languages = analyzeLanguages(results);
  
  // Find pages with unusually long or short response times
  const responseTimes = successfulRequests.map(r => r.responseTime).sort((a, b) => a - b);
  const medianResponseTime = responseTimes[Math.floor(responseTimes.length / 2)];
  
  const slowPages = successfulRequests
    .filter(r => r.responseTime > medianResponseTime * 2)
    .sort((a, b) => b.responseTime - a.responseTime)
    .slice(0, 10)
    .map(r => ({ url: r.url, responseTime: r.responseTime }));
  
  return {
    timestamp: new Date().toISOString(),
    siteUrl: BASE_URL,
    summary: {
      totalUrls: results.length,
      statusCounts,
      avgResponseTime: Math.round(avgResponseTime),
      medianResponseTime,
      redirectCount: redirects.length,
      errorCount: errors.length,
      contentTypes,
      discoveryMethods,
      pageTypes,
      languages
    },
    analysis: {
      popularPages: popularPages.slice(0, 10),
      slowPages,
      redirects: redirects.map(r => ({
        url: r.url,
        status: r.status,
        redirectUrl: r.redirectUrl
      })),
      errors: errors.map(e => ({
        url: e.url,
        status: e.status,
        error: e.error
      }))
    },
    allResults: results.map(r => ({
      url: r.url,
      status: r.status,
      responseTime: r.responseTime,
      contentType: r.contentType,
      redirectUrl: r.redirectUrl,
      referrer: r.referrer,
      discoveredBy: r.discoveredBy,
      linkCount: r.links ? r.links.length : 0
    }))
  };
}

// Main function
async function main() {
  try {
    // Check if we have the required packages
    try {
      require.resolve('axios');
      require.resolve('cheerio');
      require.resolve('xml2js');
    } catch (e) {
      console.error('Required packages not found. Installing...');
      console.log('Run: npm install axios cheerio xml2js');
      process.exit(1);
    }

    console.log('Starting comprehensive site audit...');
    console.log(`Base URL: ${BASE_URL}`);
    
    // Step 1: Parse sitemap to get initial URLs
    const sitemapUrls = await parseSitemap(SITEMAP_URL);
    console.log(`Found ${sitemapUrls.length} URLs in sitemap`);
    
    if (!sitemapUrls.length) {
      console.error('No URLs found in sitemap. Switching to crawler-only mode.');
      crawlQueue.add(BASE_URL);
    } else {
      // Step 2: Process sitemap URLs
      await processBatch(sitemapUrls);
    }
    
    // Step 3: Crawl additional URLs discovered during sitemap check
    console.log(`Starting crawl phase with ${crawlQueue.size} URLs in queue`);
    let crawlCount = 0;
    
    while (crawlQueue.size > 0 && crawlCount < MAX_CRAWL_URLS) {
      // Get next URL from queue
      const nextUrl = Array.from(crawlQueue)[0];
      crawlQueue.delete(nextUrl);
      
      // Skip if already checked
      if (checkedUrls.has(nextUrl)) continue;
      
      // Check URL
      await checkUrl(nextUrl, 'crawl');
      crawlCount++;
      
      // Periodic status update
      if (crawlCount % 10 === 0) {
        console.log(`Crawled ${crawlCount} URLs, ${crawlQueue.size} remaining in queue`);
      }
    }
    
    // Step 4: Generate report
    const allResults = Array.from(urlResults.values());
    const report = generateReport(allResults);
    
    // Step 5: Write report to file
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    
    // Stop progress updates
    clearInterval(progressInterval);
    
    // Print summary
    console.log('\nSite Audit Complete!');
    console.log('=====================');
    console.log(`Total URLs checked: ${report.summary.totalUrls}`);
    console.log('Status code distribution:');
    Object.entries(report.summary.statusCounts).forEach(([status, count]) => {
      console.log(`  ${status}: ${count}`);
    });
    console.log(`Average response time: ${report.summary.avgResponseTime}ms`);
    console.log(`Median response time: ${report.summary.medianResponseTime}ms`);
    
    console.log('\nContent type distribution:');
    Object.entries(report.summary.contentTypes).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    
    console.log('\nPage type distribution:');
    Object.entries(report.summary.pageTypes).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    
    console.log('\nLanguage distribution:');
    Object.entries(report.summary.languages).forEach(([language, count]) => {
      console.log(`  ${language}: ${count}`);
    });
    
    console.log('\nTop 5 most linked pages:');
    report.analysis.popularPages.slice(0, 5).forEach((page, i) => {
      console.log(`  ${i+1}. ${page.url} (${page.incomingLinks} links)`);
    });
    
    console.log('\nRedirects found:', report.summary.redirectCount);
    console.log('Errors found:', report.summary.errorCount);
    
    console.log(`\nDetailed report saved to: ${REPORT_PATH}`);
    
  } catch (error) {
    console.error('An error occurred:', error);
    // Stop progress updates
    clearInterval(progressInterval);
  }
}

// Run the audit
main(); 