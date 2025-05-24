#!/usr/bin/env node

/**
 * Script to find pages with both 'use client' and metadata exports
 * These pages violate Next.js App Router conventions and need to be separated
 * into client and server components
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '../../');
const REPORT_PATH = path.join(ROOT_DIR, 'seo-fixes-report.md');

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
};

console.log(`${colors.blue}=== UNEOM SEO Fix Tool: Finding conflicting 'use client' + metadata pages ===${colors.reset}`);
console.log(`${colors.blue}Scanning for pages that need migration...${colors.reset}\n`);

try {
  // Find pages with both 'use client' and metadata exports
  const cmd = `find src/app -name "*.tsx" -type f -exec grep -l "use client" {} \\; | xargs grep -l "export const metadata"`;
  const result = execSync(cmd, { encoding: 'utf8' });
  
  // Parse the output into an array of file paths
  const problematicFiles = result.trim().split('\n').filter(Boolean);
  
  if (problematicFiles.length === 0) {
    console.log(`${colors.green}Great news! No pages found with both 'use client' and metadata exports.${colors.reset}`);
    process.exit(0);
  }
  
  console.log(`${colors.yellow}Found ${problematicFiles.length} pages with both 'use client' and metadata exports:${colors.reset}`);
  
  // Group files by directory
  const filesByDir = {};
  problematicFiles.forEach(file => {
    const dir = path.dirname(file);
    if (!filesByDir[dir]) {
      filesByDir[dir] = [];
    }
    filesByDir[dir].push(file);
  });
  
  // Generate report
  let report = `# SEO Fixes Required: Pages with 'use client' and metadata\n\nThese pages violate Next.js App Router conventions and need to be fixed.\n\n`;
  report += `*Generated on: ${new Date().toISOString()}*\n\n`;
  report += `## Migration Steps\n\n`;
  report += `For each page listed below:\n\n`;
  report += `1. Create a \`client.tsx\` file in the same directory with:\n`;
  report += `   - The 'use client' directive\n`;
  report += `   - All UI components and interactivity\n`;
  report += `   - SchemaMarkup for structured data\n\n`;
  report += `2. Update the \`page.tsx\` file to:\n`;
  report += `   - Remove the 'use client' directive\n`;
  report += `   - Keep/convert metadata using the ServerSEO component\n`;
  report += `   - Import and render the client component\n\n`;
  report += `## Files to Fix\n\n`;
  
  // Process each directory
  Object.keys(filesByDir).sort().forEach(dir => {
    const relativePath = path.relative(ROOT_DIR, dir);
    report += `### ${relativePath}\n\n`;
    
    filesByDir[dir].forEach(file => {
      const fileName = path.basename(file);
      const relativeFile = path.relative(ROOT_DIR, file);
      console.log(`${colors.yellow}- ${relativeFile}${colors.reset}`);
      report += `- \`${relativeFile}\`\n`;
    });
    
    report += '\n';
  });
  
  // Count files by language section
  const enCount = problematicFiles.filter(file => !file.includes('/ar/')).length;
  const arCount = problematicFiles.filter(file => file.includes('/ar/')).length;
  
  report += `## Summary\n\n`;
  report += `- Total pages to fix: ${problematicFiles.length}\n`;
  report += `- English pages: ${enCount}\n`;
  report += `- Arabic pages: ${arCount}\n\n`;
  report += `## Next Steps\n\n`;
  report += `Run the \`update-metadata.js\` script to automate the migration process:  
  \`\`\`bash  
  node src/scripts/update-metadata.js  
  \`\`\`\n`;
  
  // Write report to file
  fs.writeFileSync(REPORT_PATH, report);
  
  console.log(`\n${colors.green}Report generated at ${REPORT_PATH}${colors.reset}`);
  console.log(`${colors.yellow}To fix these files, run:${colors.reset} node src/scripts/update-metadata.js`);
  
} catch (error) {
  console.error(`${colors.red}Error:${colors.reset}`, error);
  process.exit(1);
} 