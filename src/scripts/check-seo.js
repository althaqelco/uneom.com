#!/usr/bin/env node

/**
 * SEO Checker Script
 * 
 * Analyzes pages for:
 * - Missing metadata
 * - Duplicate titles and descriptions
 * - Low word count
 * - Missing heading structure
 * - Schema validation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '../../');
const REPORT_PATH = path.join(ROOT_DIR, 'seo-report.md');

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
};

console.log(`${colors.blue}=== UNEOM SEO Checker Tool ===${colors.reset}`);
console.log(`${colors.blue}Scanning pages for SEO issues...${colors.reset}\n`);

// Collector objects
const titles = {};
const descriptions = {};
const metadataIssues = [];
const headingIssues = [];
const schemaIssues = [];
const wordCountIssues = [];

// Utility function to count words in a string
function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Analyze metadata in a file
function analyzeMetadataFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(ROOT_DIR, filePath);
    
    // Check if metadata exists
    if (!content.includes('export const metadata')) {
      metadataIssues.push({
        file: relativePath,
        issue: 'Missing metadata export',
        severity: 'high'
      });
      return;
    }
    
    // Extract title
    const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    if (!titleMatch) {
      metadataIssues.push({
        file: relativePath,
        issue: 'Missing title in metadata',
        severity: 'high'
      });
    } else {
      const title = titleMatch[1];
      
      // Check title length
      if (title.length < 30 || title.length > 60) {
        metadataIssues.push({
          file: relativePath,
          issue: `Title length issue (${title.length} chars): "${title}"`,
          severity: title.length < 20 || title.length > 70 ? 'high' : 'medium'
        });
      }
      
      // Check for duplicate titles
      if (!titles[title]) {
        titles[title] = [relativePath];
      } else {
        titles[title].push(relativePath);
      }
    }
    
    // Extract description
    const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
    if (!descMatch) {
      metadataIssues.push({
        file: relativePath,
        issue: 'Missing description in metadata',
        severity: 'high'
      });
    } else {
      const description = descMatch[1];
      
      // Check description length
      if (description.length < 50 || description.length > 160) {
        metadataIssues.push({
          file: relativePath,
          issue: `Description length issue (${description.length} chars)`,
          severity: description.length < 30 || description.length > 200 ? 'high' : 'medium'
        });
      }
      
      // Check for duplicate descriptions
      if (!descriptions[description]) {
        descriptions[description] = [relativePath];
      } else {
        descriptions[description].push(relativePath);
      }
    }
    
    // Check for keywords
    if (!content.includes('keywords:')) {
      metadataIssues.push({
        file: relativePath,
        issue: 'Missing keywords in metadata',
        severity: 'medium'
      });
    }
    
    // Check for OpenGraph data
    if (!content.includes('openGraph:')) {
      metadataIssues.push({
        file: relativePath,
        issue: 'Missing OpenGraph metadata',
        severity: 'medium'
      });
    }
    
    // Check for Schema.org structured data in client component
    const clientFilePath = path.join(path.dirname(filePath), 'client.tsx');
    if (fs.existsSync(clientFilePath)) {
      const clientContent = fs.readFileSync(clientFilePath, 'utf8');
      if (!clientContent.includes('application/ld+json') && !clientContent.includes('SchemaMarkup')) {
        schemaIssues.push({
          file: path.relative(ROOT_DIR, clientFilePath),
          issue: 'Missing Schema.org structured data',
          severity: 'medium'
        });
      }
    }
    
  } catch (error) {
    console.error(`${colors.red}Error analyzing ${filePath}:${colors.reset}`, error);
  }
}

// Find all page.tsx files in the app directory
function findPageFiles() {
  try {
    const cmd = `find src/app -name "page.tsx" -type f`;
    const result = execSync(cmd, { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error(`${colors.red}Error finding page files:${colors.reset}`, error);
    return [];
  }
}

// Check for heading structure in client files
function checkHeadingStructure() {
  try {
    // Find client files
    const clientFilesCmd = `find src/app -name "client.tsx" -type f`;
    const clientFiles = execSync(clientFilesCmd, { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    
    for (const file of clientFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(ROOT_DIR, file);
      
      // Check for h1 tag
      if (!content.includes('<h1') && !content.includes('<H1') && 
          !content.includes('variant="h1"') && !content.includes('as="h1"')) {
        headingIssues.push({
          file: relativePath,
          issue: 'Missing H1 heading',
          severity: 'high'
        });
      }
      
      // Check word count in visible text
      // This is a simplistic approach - a real implementation would need
      // to parse the JSX and extract visible text
      const strippedContent = content
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ');
      
      const wordCount = countWords(strippedContent);
      
      if (wordCount < 300) {
        wordCountIssues.push({
          file: relativePath,
          issue: `Low word count (${wordCount} words)`,
          severity: wordCount < 200 ? 'high' : 'medium'
        });
      }
    }
  } catch (error) {
    console.error(`${colors.red}Error checking heading structure:${colors.reset}`, error);
  }
}

// Main execution function
function main() {
  console.log(`${colors.blue}Scanning for page files...${colors.reset}`);
  const pageFiles = findPageFiles();
  console.log(`${colors.green}Found ${pageFiles.length} page files.${colors.reset}\n`);
  
  // Analyze metadata in all pages
  console.log(`${colors.blue}Analyzing metadata...${colors.reset}`);
  let count = 0;
  for (const file of pageFiles) {
    analyzeMetadataFile(file);
    count++;
    if (count % 20 === 0) {
      process.stdout.write(`${colors.blue}Processed ${count}/${pageFiles.length} files${colors.reset}\r`);
    }
  }
  console.log(`${colors.green}Metadata analysis complete.${colors.reset}\n`);
  
  // Check heading structure
  console.log(`${colors.blue}Checking heading structure and content...${colors.reset}`);
  checkHeadingStructure();
  console.log(`${colors.green}Heading structure check complete.${colors.reset}\n`);
  
  // Find duplicate titles
  const duplicateTitles = Object.entries(titles)
    .filter(([_, files]) => files.length > 1)
    .map(([title, files]) => ({ title, files }));
  
  // Find duplicate descriptions
  const duplicateDescriptions = Object.entries(descriptions)
    .filter(([_, files]) => files.length > 1)
    .map(([desc, files]) => ({ desc, files }));
  
  // Generate report
  let report = `# SEO Audit Report\n\n`;
  report += `*Generated on: ${new Date().toISOString()}*\n\n`;
  
  // Executive summary
  report += `## Executive Summary\n\n`;
  report += `- **Pages Scanned**: ${pageFiles.length}\n`;
  report += `- **Pages with Metadata Issues**: ${metadataIssues.length}\n`;
  report += `- **Pages with Heading Issues**: ${headingIssues.length}\n`;
  report += `- **Pages with Schema Issues**: ${schemaIssues.length}\n`;
  report += `- **Pages with Low Word Count**: ${wordCountIssues.length}\n`;
  report += `- **Duplicate Titles**: ${duplicateTitles.length}\n`;
  report += `- **Duplicate Descriptions**: ${duplicateDescriptions.length}\n\n`;
  
  // Metadata issues section
  if (metadataIssues.length > 0) {
    report += `## Metadata Issues\n\n`;
    
    // Sort by severity
    metadataIssues.sort((a, b) => {
      if (a.severity === 'high' && b.severity !== 'high') return -1;
      if (a.severity !== 'high' && b.severity === 'high') return 1;
      return 0;
    });
    
    report += `| File | Issue | Severity |\n`;
    report += `| ---- | ----- | -------- |\n`;
    metadataIssues.forEach(issue => {
      report += `| \`${issue.file}\` | ${issue.issue} | ${issue.severity} |\n`;
    });
    report += '\n';
  }
  
  // Heading issues section
  if (headingIssues.length > 0) {
    report += `## Heading Structure Issues\n\n`;
    report += `| File | Issue | Severity |\n`;
    report += `| ---- | ----- | -------- |\n`;
    headingIssues.forEach(issue => {
      report += `| \`${issue.file}\` | ${issue.issue} | ${issue.severity} |\n`;
    });
    report += '\n';
  }
  
  // Schema issues section
  if (schemaIssues.length > 0) {
    report += `## Schema.org Structured Data Issues\n\n`;
    report += `| File | Issue | Severity |\n`;
    report += `| ---- | ----- | -------- |\n`;
    schemaIssues.forEach(issue => {
      report += `| \`${issue.file}\` | ${issue.issue} | ${issue.severity} |\n`;
    });
    report += '\n';
  }
  
  // Word count issues section
  if (wordCountIssues.length > 0) {
    report += `## Content Word Count Issues\n\n`;
    report += `| File | Issue | Severity |\n`;
    report += `| ---- | ----- | -------- |\n`;
    wordCountIssues.forEach(issue => {
      report += `| \`${issue.file}\` | ${issue.issue} | ${issue.severity} |\n`;
    });
    report += '\n';
  }
  
  // Duplicate titles section
  if (duplicateTitles.length > 0) {
    report += `## Duplicate Titles\n\n`;
    duplicateTitles.forEach(({ title, files }) => {
      report += `### "${title}"\n\n`;
      files.forEach(file => {
        report += `- \`${file}\`\n`;
      });
      report += '\n';
    });
  }
  
  // Duplicate descriptions section
  if (duplicateDescriptions.length > 0) {
    report += `## Duplicate Descriptions\n\n`;
    duplicateDescriptions.forEach(({ desc, files }) => {
      if (desc.length > 100) {
        desc = desc.substring(0, 100) + '...';
      }
      report += `### "${desc}"\n\n`;
      files.forEach(file => {
        report += `- \`${file}\`\n`;
      });
      report += '\n';
    });
  }
  
  // Recommendations
  report += `## Recommendations\n\n`;
  report += `1. **Fix Metadata Issues**: Ensure all pages have complete metadata including titles, descriptions, and keywords.\n`;
  report += `2. **Fix Duplicate Content**: Make titles and descriptions unique for each page.\n`;
  report += `3. **Add Schema Markup**: Implement structured data for all relevant pages.\n`;
  report += `4. **Improve Heading Structure**: Ensure each page has a single H1 tag and proper heading hierarchy.\n`;
  report += `5. **Increase Content**: Add more content to pages with low word count.\n\n`;
  
  report += `## Next Steps\n\n`;
  report += `Run the migration scripts to fix the identified issues:\n\n`;
  report += `\`\`\`bash\n`;
  report += `# Fix client/server component issues\n`;
  report += `node src/scripts/update-metadata.js\n\n`;
  report += `# Generate a new report after fixes\n`;
  report += `node src/scripts/check-seo.js\n`;
  report += `\`\`\`\n`;
  
  // Write report to file
  fs.writeFileSync(REPORT_PATH, report);
  
  // Print summary to console
  console.log(`${colors.blue}=== SEO Audit Results ===${colors.reset}\n`);
  console.log(`- ${colors.yellow}Metadata Issues:${colors.reset} ${metadataIssues.length}`);
  console.log(`- ${colors.yellow}Heading Issues:${colors.reset} ${headingIssues.length}`);
  console.log(`- ${colors.yellow}Schema Issues:${colors.reset} ${schemaIssues.length}`);
  console.log(`- ${colors.yellow}Low Word Count:${colors.reset} ${wordCountIssues.length}`);
  console.log(`- ${colors.yellow}Duplicate Titles:${colors.reset} ${duplicateTitles.length}`);
  console.log(`- ${colors.yellow}Duplicate Descriptions:${colors.reset} ${duplicateDescriptions.length}\n`);
  
  console.log(`${colors.green}Report generated at ${path.relative(ROOT_DIR, REPORT_PATH)}${colors.reset}`);
}

// Run main function
try {
  main();
} catch (error) {
  console.error(`${colors.red}Unhandled error:${colors.reset}`, error);
  process.exit(1);
} 