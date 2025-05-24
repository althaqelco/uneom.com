/**
 * URL Crawler for Uneom
 * This script crawls the entire website starting from the homepage
 * and generates a detailed report of all URLs found
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

// Constants
const BASE_URL = 'https://uneom.com';
const START_URL = `${BASE_URL}/`;
const REPORT_PATH = path.join(__dirname, 'crawl-report.json');
const CONCURRENCY_LIMIT = 5; // Number of concurrent requests
const TIMEOUT = 10000; // Timeout for each request in ms
const MAX_URLS = 1000; // Maximum number of URLs to crawl (for safety)

// Queue to manage URLs to crawl
class UrlQueue {
  constructor() {
    this.queue = new Set();
    this.visited = new Set();
    this.results = [];
  }

  add(url) {
    // Normalize URL (remove hash and trailing slash variations)
    const normalizedUrl = this.normalizeUrl(url);
    
    if (!this.visited.has(normalizedUrl) && !this.queue.has(normalizedUrl)) {
      this.queue.add(normalizedUrl);
      return true;
    }
    return false;
  }

  hasNext() {
    return this.queue.size > 0;
  }

  getNext() {
    if (!this.hasNext()) return null;
    
    const url = Array.from(this.queue)[0];
    this.queue.delete(url);
    this.visited.add(url);
    
    return url;
  }

  markVisited(url) {
    const normalizedUrl = this.normalizeUrl(url);
    this.visited.add(normalizedUrl);
  }

  addResult(result) {
    this.results.push(result);
  }

  getVisitedCount() {
    return this.visited.size;
  }

  getQueuedCount() {
    return this.queue.size;
  }

  normalizeUrl(url) {
    // Remove trailing slash
    let normalizedUrl = url.replace(/\/$/, '');
    // Remove fragment identifier
    normalizedUrl = normalizedUrl.replace(/#.*$/, '');
    return normalizedUrl;
  }
}

// Helper function to check if URL belongs to our domain
function isInternalUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname === new URL(BASE_URL).hostname;
  } catch (e) {
    // Handle relative URLs
    return !url.startsWith('http');
  }
}

// Helper function to normalize URLs
function normalizeUrl(url, baseUrl) {
  try {
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
      if (href) {
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

// Fetch and process a URL
async function fetchUrl(url) {
  try {
    console.log(`Fetching: ${url}`);
    const startTime = Date.now();
    
    const response = await axios.get(url, {
      timeout: TIMEOUT,
      maxRedirects: 5,
      validateStatus: status => true, // Don't throw on any status code
      headers: {
        'User-Agent': 'Mozilla/5.0 UneomSiteChecker/1.0',
        'Accept': 'text/html,application/xhtml+xml'
      }
    });
    
    const responseTime = Date.now() - startTime;
    let links = [];
    
    // Only extract links from HTML content
    if (response.headers['content-type'] && 
        response.headers['content-type'].includes('text/html') && 
        response.status === 200) {
      links = extractLinks(response.data, url);
    }
    
    return {
      url,
      status: response.status,
      redirectUrl: response.request.res.responseUrl !== url ? response.request.res.responseUrl : null,
      responseTime,
      contentType: response.headers['content-type'],
      contentLength: response.headers['content-length'] || 
                    (response.data ? Buffer.byteLength(JSON.stringify(response.data)) : 0),
      links,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      error: error.message,
      links: [],
      timestamp: new Date().toISOString()
    };
  }
}

// Process URLs in the queue concurrently
async function crawlConcurrently(urlQueue, concurrency) {
  const active = new Set();
  const results = [];
  
  async function processUrl(url) {
    active.add(url);
    try {
      const result = await fetchUrl(url);
      urlQueue.addResult(result);
      
      // Add new URLs to the queue
      if (result.links) {
        for (const link of result.links) {
          if (urlQueue.getVisitedCount() + urlQueue.getQueuedCount() < MAX_URLS) {
            urlQueue.add(link);
          }
        }
      }
    } catch (error) {
      console.error(`Error processing ${url}:`, error.message);
    } finally {
      active.delete(url);
    }
  }
  
  while (urlQueue.hasNext() || active.size > 0) {
    // Fill up to concurrency limit
    while (active.size < concurrency && urlQueue.hasNext() && 
           urlQueue.getVisitedCount() < MAX_URLS) {
      const nextUrl = urlQueue.getNext();
      processUrl(nextUrl);
    }
    
    // Wait a bit before checking again
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Log progress
    console.log(`Processed: ${urlQueue.getVisitedCount()}, Queued: ${urlQueue.getQueuedCount()}, Active: ${active.size}`);
  }
  
  return urlQueue.results;
}

// Generate report
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
    .slice(0, 10)
    .map(([url, count]) => ({ url, incomingLinks: count }));
  
  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalUrls: results.length,
      statusCounts,
      avgResponseTime: Math.round(avgResponseTime),
      redirectCount: redirects.length,
      errorCount: errors.length,
      contentTypes
    },
    redirects: redirects.map(r => ({
      url: r.url,
      status: r.status,
      redirectUrl: r.redirectUrl
    })),
    errors: errors.map(e => ({
      url: e.url,
      status: e.status,
      error: e.error
    })),
    popularPages,
    allResults: results.map(r => ({
      url: r.url,
      status: r.status,
      responseTime: r.responseTime,
      contentType: r.contentType,
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
    } catch (e) {
      console.error('Required packages not found. Installing...');
      console.log('Run: npm install axios cheerio');
      process.exit(1);
    }

    console.log('Starting URL crawler...');
    console.log(`Base URL: ${BASE_URL}`);
    console.log(`Maximum URLs to crawl: ${MAX_URLS}`);
    
    // Initialize URL queue and add start URL
    const urlQueue = new UrlQueue();
    urlQueue.add(START_URL);
    
    // Crawl website
    await crawlConcurrently(urlQueue, CONCURRENCY_LIMIT);
    
    // Generate report
    const report = generateReport(urlQueue.results);
    
    // Write to file
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\nURL Crawl Complete!');
    console.log('====================');
    console.log(`Total URLs crawled: ${report.summary.totalUrls}`);
    console.log('Status code distribution:');
    Object.entries(report.summary.statusCounts).forEach(([status, count]) => {
      console.log(`  ${status}: ${count}`);
    });
    console.log(`Average response time: ${report.summary.avgResponseTime}ms`);
    console.log(`Redirects found: ${report.summary.redirectCount}`);
    console.log(`Errors found: ${report.summary.errorCount}`);
    console.log('\nContent type distribution:');
    Object.entries(report.summary.contentTypes).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    console.log('\nTop 5 pages by incoming links:');
    report.popularPages.slice(0, 5).forEach((page, i) => {
      console.log(`  ${i+1}. ${page.url} (${page.incomingLinks} links)`);
    });
    console.log(`\nDetailed report saved to: ${REPORT_PATH}`);
    
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main(); 