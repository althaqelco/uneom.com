/**
 * URL Checker for Uneom
 * This script checks all URLs in the sitemap and generates a detailed report
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const xml2js = require('xml2js');

// Constants
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const REPORT_PATH = path.join(__dirname, 'url-report.json');
const CONCURRENCY_LIMIT = 5; // Number of concurrent requests
const TIMEOUT = 10000; // Timeout for each request in ms

// Helper function to parse XML
async function parseSitemap(sitemapPath) {
  try {
    const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(sitemapXml);
    
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

// Helper function to check a single URL
async function checkUrl(url) {
  try {
    console.log(`Checking: ${url}`);
    const startTime = Date.now();
    const response = await axios.get(url, { 
      timeout: TIMEOUT,
      maxRedirects: 5,
      validateStatus: status => true // Don't throw on any status code
    });
    const responseTime = Date.now() - startTime;
    
    return {
      url,
      status: response.status,
      redirectUrl: response.request.res.responseUrl !== url ? response.request.res.responseUrl : null,
      responseTime,
      contentType: response.headers['content-type'],
      contentLength: response.headers['content-length'] || 
                    (response.data ? Buffer.byteLength(response.data, 'utf8') : 0),
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

// Process URLs in batches to avoid hammering the server
async function processBatch(urls, batchSize) {
  const results = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchPromises = batch.map(url => checkUrl(url));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    console.log(`Processed ${Math.min(i + batchSize, urls.length)} of ${urls.length} URLs`);
    
    // Small delay between batches to be nice to the server
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
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
  
  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalUrls: results.length,
      statusCounts,
      avgResponseTime: Math.round(avgResponseTime),
      redirectCount: redirects.length,
      errorCount: errors.length
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
    allResults: results
  };
}

// Main function
async function main() {
  try {
    // Check if we have the required packages
    try {
      require.resolve('axios');
      require.resolve('xml2js');
    } catch (e) {
      console.error('Required packages not found. Installing...');
      console.log('Run: npm install axios xml2js');
      process.exit(1);
    }

    console.log('Starting URL check...');
    
    // Parse sitemap to get URLs
    const urls = await parseSitemap(SITEMAP_PATH);
    console.log(`Found ${urls.length} URLs in sitemap`);
    
    if (!urls.length) {
      console.error('No URLs found in sitemap. Exiting.');
      process.exit(1);
    }
    
    // Check all URLs
    const results = await processBatch(urls, CONCURRENCY_LIMIT);
    
    // Generate report
    const report = generateReport(results);
    
    // Write to file
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\nURL Check Complete!');
    console.log('====================');
    console.log(`Total URLs checked: ${report.summary.totalUrls}`);
    console.log('Status code distribution:');
    Object.entries(report.summary.statusCounts).forEach(([status, count]) => {
      console.log(`  ${status}: ${count}`);
    });
    console.log(`Average response time: ${report.summary.avgResponseTime}ms`);
    console.log(`Redirects found: ${report.summary.redirectCount}`);
    console.log(`Errors found: ${report.summary.errorCount}`);
    console.log(`\nDetailed report saved to: ${REPORT_PATH}`);
    
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main(); 