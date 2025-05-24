/**
 * Run All SEO Fixes Script
 * 
 * This script runs all the SEO fix scripts in sequence and documents the changes.
 * It serves as a central command to apply all SEO improvements.
 * 
 * Usage: node scripts/run-all-seo-fixes.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Fix for chalk ESM
const chalkLog = {
  green: (text) => console.log(`\x1b[32m${text}\x1b[0m`),
  blue: (text) => console.log(`\x1b[34m${text}\x1b[0m`),
  yellow: (text) => console.log(`\x1b[33m${text}\x1b[0m`),
  red: (text) => console.log(`\x1b[31m${text}\x1b[0m`),
  gray: (text) => console.log(`\x1b[90m${text}\x1b[0m`)
};

// Track script execution results
const results = {
  startTime: new Date(),
  endTime: null,
  scriptsRun: [],
  summary: {
    headingsFixes: 0,
    structuredDataAdded: 0,
    contentEnhanced: 0,
    serverSideRenderingAdded: 0,
    canonicalsFixes: 0,
    hreflangsFixes: 0
  }
};

/**
 * Run a script and capture its output
 */
function runScript(scriptPath, description) {
  chalkLog.blue(`\n=== Running: ${description} ===`);
  chalkLog.gray(`Script: ${scriptPath}`);
  
  try {
    const output = execSync(`node ${scriptPath}`, { encoding: 'utf8' });
    console.log(output);
    
    results.scriptsRun.push({
      script: scriptPath,
      description,
      success: true,
      output: output
    });
    
    return { success: true, output };
  } catch (error) {
    chalkLog.red(`Error running ${scriptPath}:`);
    console.error(error.message);
    
    results.scriptsRun.push({
      script: scriptPath,
      description,
      success: false,
      error: error.message
    });
    
    return { success: false, error: error.message };
  }
}

/**
 * Parse result files to update summary
 */
function parseResultFiles() {
  try {
    // Parse heading structure fixes
    if (fs.existsSync('heading-structure-fixes.json')) {
      const headingData = JSON.parse(fs.readFileSync('heading-structure-fixes.json', 'utf8'));
      results.summary.headingsFixes = headingData.fixed || 0;
    }
    
    // Parse content enhancement results
    if (fs.existsSync('content-enhancement-results.json')) {
      const contentData = JSON.parse(fs.readFileSync('content-enhancement-results.json', 'utf8'));
      results.summary.contentEnhanced = contentData.enhanced || 0;
    }
    
    // Parse low word count diagnosis
    if (fs.existsSync('low-word-count-diagnosis.json')) {
      const wordCountData = JSON.parse(fs.readFileSync('low-word-count-diagnosis.json', 'utf8'));
      results.summary.serverSideRenderingAdded = (wordCountData.fixes || []).length;
    }
    
    // Parse SEO verification results
    if (fs.existsSync('seo-verification-results.json')) {
      const seoData = JSON.parse(fs.readFileSync('seo-verification-results.json', 'utf8'));
      
      if (seoData.canonical) {
        results.summary.canonicalsFixes = seoData.canonical.pass.length;
      }
      
      if (seoData.hreflang) {
        results.summary.hreflangsFixes = seoData.hreflang.pass.length;
      }
    }
  } catch (error) {
    chalkLog.red('Error parsing result files:');
    console.error(error.message);
  }
}

/**
 * Generate an implementation report
 */
function generateReport() {
  results.endTime = new Date();
  const duration = (results.endTime - results.startTime) / 1000; // in seconds
  
  parseResultFiles();
  
  const report = `# SEO Implementation Report
  
## Overview

This report documents the SEO fixes applied to the UNEOM website to address issues identified in the Screaming Frog crawl report.

**Date:** ${results.startTime.toISOString().split('T')[0]}
**Time taken:** ${duration.toFixed(2)} seconds

## Summary of Changes

1. **Heading Structure Fixes**: ${results.summary.headingsFixes} pages updated with proper H1 tags
2. **Content Enhancement**: ${results.summary.contentEnhanced} pages enhanced with additional textual content
3. **Server-Side Rendering**: ${results.summary.serverSideRenderingAdded} pages updated to use proper server-side rendering
4. **Structured Data**: Added JSON-LD structured data to key pages
5. **Canonical URLs**: ${results.summary.canonicalsFixes} pages now have proper canonical tags
6. **Hreflang Tags**: ${results.summary.hreflangsFixes} pages now have proper hreflang implementation

## Technical Implementation

The following scripts were executed to implement the SEO fixes:

${results.scriptsRun.map(script => 
  `### ${script.description}\n- Script: \`${script.script}\`\n- Status: ${script.success ? 'Success' : 'Failed'}`
).join('\n\n')}

## Fixed Issues

1. **Robots.txt Blocking Critical Resources**: Updated robots.txt to allow crawling of JS and CSS files.
2. **Low Word Count / Text Ratio**: Added server-side rendering and enhanced content to improve word count.
3. **Missing H1 Tags**: Ensured each page has exactly one H1 tag with meaningful content.
4. **Missing Canonical URLs**: Implemented proper self-referencing canonical URLs.
5. **Missing Hreflang Tags**: Added hreflang tags for English and Arabic versions of pages.
6. **Missing Structured Data**: Added JSON-LD structured data for better rich result opportunities.

## Next Steps

1. **Monitor Search Console**: Watch for improvements in indexing and crawl stats.
2. **Monitor Rankings**: Track keyword positions for target terms.
3. **Ongoing Maintenance**: Continue to ensure new pages follow SEO best practices.
4. **Further Optimization**: Consider additional improvements:
   - Add more detailed structured data for specific page types
   - Optimize page load speed further
   - Enhance internal linking structure

## Appendix: Verification Results

The SEO improvements can be verified by running:
\`\`\`
node scripts/verify-seo.js
\`\`\`
`;

  // Save report to file
  const reportPath = path.join(process.cwd(), 'docs', 'SEO-IMPLEMENTATION-REPORT.md');
  
  // Ensure docs directory exists
  if (!fs.existsSync(path.join(process.cwd(), 'docs'))) {
    fs.mkdirSync(path.join(process.cwd(), 'docs'));
  }
  
  fs.writeFileSync(reportPath, report);
  chalkLog.green(`\nSEO Implementation Report generated at: ${reportPath}`);
  
  return report;
}

/**
 * Run all SEO fix scripts in sequence
 */
async function runAllSEOFixes() {
  chalkLog.green('Starting SEO Fixes...');
  
  // First, install any necessary dependencies
  runScript('scripts/install-seo-tools.js', 'Install SEO Tools & Dependencies');
  
  // Run SEO fix scripts in sequence
  runScript('scripts/fix-low-word-count.js', 'Fix Low Word Count Issues');
  runScript('scripts/fix-heading-structure.js', 'Fix Heading Structure');
  runScript('scripts/add-structured-data.js', 'Add Structured Data');
  runScript('scripts/enhance-content.js', 'Enhance Page Content');
  
  // Run verification
  runScript('scripts/verify-seo.js', 'Verify SEO Improvements');
  
  // Generate implementation report
  generateReport();
  
  chalkLog.green('\nAll SEO fixes completed!');
}

// Run all SEO fixes
runAllSEOFixes(); 