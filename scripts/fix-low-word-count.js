/**
 * Low Word Count Diagnostic and Fix Script
 * 
 * This script identifies and fixes the "2 Word Count / Low Text Ratio" issue ([TASK SF_FIX_002])
 * by checking for proper server-side rendering implementation across key pages.
 * 
 * It checks:
 * 1. If pages are using getStaticProps or getServerSideProps properly
 * 2. If ClientOnly wrappers are used on critical content
 * 3. If data fetching happens client-side that should be server-side
 * 4. If content is properly defined in the component
 * 
 * Usage: node scripts/fix-low-word-count.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const chalk = require('chalk');
const glob = require('glob');

// Key directories to check
const directoriesToCheck = [
  'src/pages',
  'src/components'
];

// Patterns that might indicate client-side only rendering of important content
const clientSidePatterns = [
  { pattern: /<ClientOnly>|<ClientOnly /g, severity: 'high', description: 'ClientOnly wrapper around content' },
  { pattern: /useEffect\(\s*\(\)\s*=>\s*{\s*fetch\(/g, severity: 'high', description: 'useEffect with empty dependency array for data fetching' },
  { pattern: /useEffect\(\s*\(\)\s*=>\s*{\s*axios\(/g, severity: 'high', description: 'useEffect with empty dependency array for axios data fetching' },
  { pattern: /useState\(\[\]\)/g, severity: 'medium', description: 'useState with empty array that might be populated client-side only' },
  { pattern: /dangerouslySetInnerHTML/g, severity: 'medium', description: 'Using dangerouslySetInnerHTML which might be empty on server render' },
  { pattern: /document\./g, severity: 'medium', description: 'Direct document manipulation which only works client-side' },
  { pattern: /window\./g, severity: 'medium', description: 'Direct window manipulation which only works client-side' }
];

// Check for proper server-side data fetching
const missingServerSidePatterns = [
  { pattern: /export\s+default\s+function\s+\w+/, severity: 'high', description: 'Page component without getStaticProps or getServerSideProps' },
  { pattern: /export\s+const\s+getStaticProps/g, positive: true, description: 'Using getStaticProps (good)' },
  { pattern: /export\s+const\s+getServerSideProps/g, positive: true, description: 'Using getServerSideProps (good)' },
  { pattern: /export\s+async\s+function\s+getStaticProps/g, positive: true, description: 'Using async getStaticProps (good)' },
  { pattern: /export\s+async\s+function\s+getServerSideProps/g, positive: true, description: 'Using async getServerSideProps (good)' }
];

// Results storage
const results = {
  clientSide: [],
  serverSide: [],
  fixes: []
};

/**
 * Check a file for client-side rendering patterns
 */
function checkFileForClientSideRendering(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const relativePath = filePath.replace(process.cwd(), '');
  const issues = [];
  
  // Check for client-side patterns
  clientSidePatterns.forEach(({ pattern, severity, description }) => {
    const matches = content.match(pattern);
    if (matches && matches.length > 0) {
      issues.push({
        pattern: pattern.toString(),
        matches: matches.length,
        severity,
        description
      });
    }
  });
  
  if (issues.length > 0) {
    results.clientSide.push({
      file: relativePath,
      issues
    });
    return true;
  }
  
  return false;
}

/**
 * Check if a page file has proper server-side data fetching
 */
function checkFileForServerSideDataFetching(filePath) {
  if (!filePath.includes('/pages/')) {
    return false; // Only check page components
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const relativePath = filePath.replace(process.cwd(), '');
  
  // Check if the file is a page component (has default export)
  if (!content.match(/export\s+default\s+function\s+\w+/) && 
      !content.match(/export\s+default\s+class\s+\w+/) &&
      !content.match(/export\s+default\s+\w+/)) {
    return false; // Not a page component
  }
  
  // Check for server-side data fetching patterns
  const goodPatterns = missingServerSidePatterns.filter(p => p.positive);
  const hasServerSideDataFetching = goodPatterns.some(({ pattern }) => {
    return content.match(pattern);
  });
  
  if (!hasServerSideDataFetching) {
    results.serverSide.push({
      file: relativePath,
      issue: 'Missing server-side data fetching (getStaticProps or getServerSideProps)'
    });
    return true;
  }
  
  return false;
}

/**
 * Generate a fix for a file with server-side data fetching issues
 */
function generateServerSideDataFetchingFix(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = filePath.replace(process.cwd(), '');
  
  // Check if file already has exports at the end
  const hasExportsAtEnd = content.match(/export\s+\w+\s+\w+/g);
  
  // Simple template for getStaticProps
  const getStaticPropsTemplate = `
// Export for proper server-side rendering - fixes "2 Word Count / Low Text Ratio" issue
export const getStaticProps = async ({ locale }) => {
  // This ensures content is rendered server-side
  // Additional data fetching could be done here if needed
  return {
    props: {
      // Any props needed for the page
    }
  };
};
`;
  
  // Add getStaticProps after the component
  const newContent = hasExportsAtEnd 
    ? content.replace(/export\s+default\s+\w+.*;/, match => `${match}\n\n${getStaticPropsTemplate}`)
    : `${content}\n\n${getStaticPropsTemplate}`;
  
  results.fixes.push({
    file: relativePath,
    fix: 'Added getStaticProps for server-side rendering'
  });
  
  return newContent;
}

/**
 * Scan files for issues
 */
function scanFiles() {
  console.log('Scanning files for low word count / content rendering issues...');
  
  directoriesToCheck.forEach(dir => {
    const pattern = path.join(process.cwd(), dir, '**/*.{js,jsx,ts,tsx}');
    const files = glob.sync(pattern);
    
    console.log(`Scanning ${files.length} files in ${dir}...`);
    
    files.forEach(file => {
      checkFileForClientSideRendering(file);
      checkFileForServerSideDataFetching(file);
    });
  });
  
  printResults();
}

/**
 * Apply fixes to files with issues
 */
function applyFixes() {
  console.log('\nApplying fixes...');
  
  // Fix server-side data fetching issues
  results.serverSide.forEach(issue => {
    const filePath = path.join(process.cwd(), issue.file);
    
    // Only fix files in the pages directory
    if (issue.file.includes('/pages/')) {
      console.log(`Fixing server-side data fetching in ${issue.file}...`);
      
      const newContent = generateServerSideDataFetchingFix(filePath);
      fs.writeFileSync(filePath, newContent);
    }
  });
  
  console.log(`\nApplied ${results.fixes.length} fixes.`);
}

/**
 * Print results in a readable format
 */
function printResults() {
  console.log('\n=== LOW WORD COUNT DIAGNOSIS RESULTS ===');
  
  // Print client-side rendering issues
  console.log('\n=== Client-Side Rendering Issues ===');
  if (results.clientSide.length === 0) {
    console.log('No client-side rendering issues found!');
  } else {
    console.log(`Found ${results.clientSide.length} files with client-side rendering issues:`);
    
    results.clientSide.forEach(file => {
      console.log(`\n${file.file}:`);
      
      const highSeverityIssues = file.issues.filter(i => i.severity === 'high');
      const mediumSeverityIssues = file.issues.filter(i => i.severity === 'medium');
      
      if (highSeverityIssues.length > 0) {
        console.log('  High Severity Issues:');
        highSeverityIssues.forEach(issue => {
          console.log(`    - ${issue.description} (${issue.matches} matches)`);
        });
      }
      
      if (mediumSeverityIssues.length > 0) {
        console.log('  Medium Severity Issues:');
        mediumSeverityIssues.forEach(issue => {
          console.log(`    - ${issue.description} (${issue.matches} matches)`);
        });
      }
    });
  }
  
  // Print server-side data fetching issues
  console.log('\n=== Server-Side Data Fetching Issues ===');
  if (results.serverSide.length === 0) {
    console.log('No server-side data fetching issues found!');
  } else {
    console.log(`Found ${results.serverSide.length} page files without proper server-side data fetching:`);
    
    results.serverSide.forEach(file => {
      console.log(`  - ${file.file}: ${file.issue}`);
    });
  }
  
  // Write detailed results to a file
  const resultsFile = path.join(__dirname, '../low-word-count-diagnosis.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`\nDetailed results saved to ${resultsFile}`);
  
  // Ask if fixes should be applied
  if (results.serverSide.length > 0) {
    console.log('\nWould you like to apply fixes for missing server-side data fetching? (y/n)');
    process.stdin.once('data', input => {
      const answer = input.toString().trim().toLowerCase();
      if (answer === 'y' || answer === 'yes') {
        applyFixes();
      } else {
        console.log('No fixes applied.');
      }
      process.exit(0);
    });
  }
}

// Run the scan
scanFiles(); 