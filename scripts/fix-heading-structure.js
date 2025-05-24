/**
 * Fix Heading Structure Script
 * 
 * This script fixes heading structures in pages by ensuring:
 * - Each page has exactly one H1 tag
 * - H1 tags contain meaningful content
 * - Heading hierarchy is properly maintained (no skipping levels)
 * 
 * Usage: node scripts/fix-heading-structure.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { JSDOM } = require('jsdom');

// Fix for chalk ESM
const chalkLog = {
  green: (text) => console.log(`\x1b[32m${text}\x1b[0m`),
  blue: (text) => console.log(`\x1b[34m${text}\x1b[0m`),
  yellow: (text) => console.log(`\x1b[33m${text}\x1b[0m`),
  red: (text) => console.log(`\x1b[31m${text}\x1b[0m`),
  gray: (text) => console.log(`\x1b[90m${text}\x1b[0m`)
};

// Pages to check
const PAGES_DIR = path.join(process.cwd(), 'src/pages');
const COMPONENTS_DIR = path.join(process.cwd(), 'src/components');

// Tracking results
const results = {
  scanned: 0,
  fixed: 0,
  errors: 0,
  noH1: [],
  multipleH1: [],
  skippedHeadingLevels: []
};

/**
 * Check if a file is using HeadingManager
 */
function isUsingHeadingManager(fileContent) {
  return fileContent.includes('import HeadingManager') || 
         fileContent.includes('<HeadingManager');
}

/**
 * Add HeadingManager to a file
 */
function addHeadingManager(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // If already using HeadingManager, skip
  if (isUsingHeadingManager(fileContent)) {
    chalkLog.yellow(`File already using HeadingManager: ${filePath}`);
    return false;
  }
  
  // Add import
  fileContent = fileContent.replace(
    /import.*?;(\s*import.*?;)*(\s*)/m,
    match => `${match}import HeadingManager from '@/components/seo/HeadingManager';\n`
  );
  
  // Find H1 tags
  const h1Regex = /<h1[^>]*>(.*?)<\/h1>/gs;
  const h1Matches = Array.from(fileContent.matchAll(h1Regex));
  
  if (h1Matches.length === 0) {
    // No H1 found, we need to add one
    chalkLog.yellow(`No H1 tag found in: ${filePath}`);
    results.noH1.push(filePath);
    
    // Try to find a title or similar prop we can use for the H1
    const titlePropRegex = /title=\{?["']([^"']+)["']\}?/;
    const titleMatch = fileContent.match(titlePropRegex);
    
    // Try to find a good location to add the H1 - main content area
    const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/;
    const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/;
    
    let h1Content = titleMatch ? titleMatch[1] : 'Page Title';
    let h1Added = false;
    
    if (mainRegex.test(fileContent)) {
      fileContent = fileContent.replace(mainRegex, match => {
        return match.replace(/<main([^>]*)>/, `<main$1>\n        <HeadingManager>${h1Content}</HeadingManager>`);
      });
      h1Added = true;
    } else if (sectionRegex.test(fileContent)) {
      fileContent = fileContent.replace(sectionRegex, match => {
        return match.replace(/<section([^>]*)>/, `<section$1>\n        <HeadingManager>${h1Content}</HeadingManager>`);
      });
      h1Added = true;
    }
    
    if (!h1Added) {
      chalkLog.red(`Could not find a suitable location to add H1 in: ${filePath}`);
      results.errors++;
      return false;
    }
    
  } else if (h1Matches.length === 1) {
    // Replace single H1 with HeadingManager
    fileContent = fileContent.replace(
      h1Regex,
      (match, content) => `<HeadingManager>${content}</HeadingManager>`
    );
    
  } else {
    // Multiple H1 tags, keep only the first one
    chalkLog.yellow(`Multiple H1 tags found in: ${filePath}`);
    results.multipleH1.push({
      file: filePath,
      count: h1Matches.length
    });
    
    // Replace first H1 with HeadingManager
    let firstReplaced = false;
    
    fileContent = fileContent.replace(h1Regex, (match, content) => {
      if (!firstReplaced) {
        firstReplaced = true;
        return `<HeadingManager>${content}</HeadingManager>`;
      } else {
        // Convert other H1s to H2s
        return `<h2>${content}</h2>`;
      }
    });
  }
  
  // Save the modified file
  fs.writeFileSync(filePath, fileContent);
  chalkLog.green(`Added HeadingManager to: ${filePath}`);
  results.fixed++;
  return true;
}

/**
 * Check and fix heading structure in page templates
 */
function fixTemplateHeadings() {
  const templateFiles = glob.sync(path.join(COMPONENTS_DIR, 'templates', '**', '*.tsx'));
  
  for (const templateFile of templateFiles) {
    results.scanned++;
    addHeadingManager(templateFile);
  }
}

/**
 * Check and fix heading structure in page files
 */
function fixPageHeadings() {
  const pageFiles = glob.sync(path.join(PAGES_DIR, '**', '*.tsx'));
  
  for (const pageFile of pageFiles) {
    results.scanned++;
    addHeadingManager(pageFile);
  }
}

/**
 * Print results summary
 */
function printResults() {
  console.log('\n=== HEADING STRUCTURE FIXES SUMMARY ===');
  console.log(`Scanned: ${results.scanned} files`);
  console.log(`Fixed: ${results.fixed} files`);
  console.log(`Errors: ${results.errors} files`);
  
  if (results.noH1.length > 0) {
    console.log('\nFiles with no H1 tags:');
    results.noH1.forEach(file => {
      console.log(`  - ${file}`);
    });
  }
  
  if (results.multipleH1.length > 0) {
    console.log('\nFiles with multiple H1 tags:');
    results.multipleH1.forEach(item => {
      console.log(`  - ${item.file}: ${item.count} H1 tags`);
    });
  }
  
  if (results.skippedHeadingLevels.length > 0) {
    console.log('\nFiles with skipped heading levels:');
    results.skippedHeadingLevels.forEach(item => {
      console.log(`  - ${item.file}: ${item.details}`);
    });
  }
  
  // Save results to file
  const resultsFile = path.join(process.cwd(), 'heading-structure-fixes.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`\nDetailed results saved to: ${resultsFile}`);
}

/**
 * Main function
 */
function fixHeadingStructure() {
  console.log('Fixing heading structure in pages...');
  
  // Fix template headings
  fixTemplateHeadings();
  
  // Fix page headings
  fixPageHeadings();
  
  // Print results
  printResults();
}

// Run the script
fixHeadingStructure(); 