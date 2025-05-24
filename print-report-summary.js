/**
 * Print summary of the site audit report
 */

const fs = require('fs');
const path = require('path');

// Read the report file
const reportPath = path.join(__dirname, 'site-audit-report.json');
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

// Print summary
console.log('\nSite Audit Summary Report');
console.log('========================\n');

console.log(`Base URL: ${report.siteUrl}`);
console.log(`Report generated: ${new Date(report.timestamp).toLocaleString()}`);
console.log(`Total URLs checked: ${report.summary.totalUrls}`);

console.log('\nStatus Code Distribution:');
Object.entries(report.summary.statusCounts).forEach(([status, count]) => {
  console.log(`  ${status}: ${count}`);
});

console.log('\nPerformance:');
console.log(`  Average response time: ${report.summary.avgResponseTime}ms`);
console.log(`  Median response time: ${report.summary.medianResponseTime}ms`);

console.log('\nContent Type Distribution:');
Object.entries(report.summary.contentTypes || {}).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

console.log('\nPage Type Distribution:');
Object.entries(report.summary.pageTypes || {}).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

console.log('\nLanguage Distribution:');
Object.entries(report.summary.languages || {}).forEach(([language, count]) => {
  console.log(`  ${language}: ${count}`);
});

console.log('\nTop 10 Most Linked Pages:');
if (report.analysis.popularPages) {
  report.analysis.popularPages.slice(0, 10).forEach((page, i) => {
    console.log(`  ${i+1}. ${page.url} (${page.incomingLinks} links)`);
  });
}

console.log('\nErrors Found:');
if (report.analysis.errors && report.analysis.errors.length > 0) {
  report.analysis.errors.forEach((error, i) => {
    console.log(`  ${i+1}. ${error.url} - ${error.status}: ${error.error || 'Unknown error'}`);
  });
} else {
  console.log('  No errors found.');
}

console.log('\nSlow Pages:');
if (report.analysis.slowPages && report.analysis.slowPages.length > 0) {
  report.analysis.slowPages.slice(0, 5).forEach((page, i) => {
    console.log(`  ${i+1}. ${page.url} - ${page.responseTime}ms`);
  });
} else {
  console.log('  No unusually slow pages found.');
}

console.log('\nRedirects:');
if (report.analysis.redirects && report.analysis.redirects.length > 0) {
  report.analysis.redirects.slice(0, 10).forEach((redirect, i) => {
    console.log(`  ${i+1}. ${redirect.url} -> ${redirect.redirectUrl} (${redirect.status})`);
  });
} else {
  console.log('  No redirects found.');
}

console.log('\n--- End of Report ---\n'); 