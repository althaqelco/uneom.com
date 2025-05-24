#!/usr/bin/env node

/**
 * Script to automate migration of pages with both 'use client' and metadata exports
 * Separates pages into client.tsx and server page.tsx components following Next.js best practices
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '../../');
const PROGRESS_LOG = path.join(ROOT_DIR, 'migration-progress.log');

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to log progress
const logProgress = (message) => {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(PROGRESS_LOG, `[${timestamp}] ${message}\n`);
};

// Helper function for async prompts
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main function
async function main() {
  console.log(`${colors.blue}=== UNEOM SEO Fix Tool: Migrating 'use client' + metadata pages ===${colors.reset}`);
  console.log(`${colors.blue}This script will help migrate pages to the proper Next.js App Router pattern${colors.reset}\n`);
  
  try {
    // Find pages with both 'use client' and metadata exports
    const cmd = `find src/app -name "*.tsx" -type f -exec grep -l "use client" {} \\; | xargs grep -l "export const metadata"`;
    const result = execSync(cmd, { encoding: 'utf8' });
    
    // Parse the output into an array of file paths
    const problematicFiles = result.trim().split('\n').filter(Boolean);
    
    if (problematicFiles.length === 0) {
      console.log(`${colors.green}Great news! No pages found with both 'use client' and metadata exports.${colors.reset}`);
      rl.close();
      return;
    }
    
    console.log(`${colors.yellow}Found ${problematicFiles.length} pages with both 'use client' and metadata exports.${colors.reset}\n`);
    
    // Initialize progress log
    if (!fs.existsSync(PROGRESS_LOG)) {
      fs.writeFileSync(PROGRESS_LOG, `# Migration Progress Log\nStarted: ${new Date().toISOString()}\n\n`);
    }
    
    // Process each file
    for (let i = 0; i < problematicFiles.length; i++) {
      const filePath = problematicFiles[i];
      const relativePath = path.relative(ROOT_DIR, filePath);
      const dirPath = path.dirname(filePath);
      const clientFilePath = path.join(dirPath, 'client.tsx');
      
      console.log(`\n${colors.cyan}Processing ${i+1}/${problematicFiles.length}: ${relativePath}${colors.reset}`);
      
      // Check if client.tsx already exists
      if (fs.existsSync(clientFilePath)) {
        console.log(`${colors.yellow}Warning: client.tsx already exists at ${path.relative(ROOT_DIR, clientFilePath)}${colors.reset}`);
        const skipFile = await prompt(`Skip this file? (Y/n): `);
        if (skipFile.toLowerCase() !== 'n') {
          logProgress(`Skipped: ${relativePath} - client.tsx already exists`);
          continue;
        }
      }
      
      // Read the original file content
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract metadata section
      const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?})(?=;|\n\s*export|\n\s*function|\n\s*const|\n\s*$)/);
      const hasMetadata = !!metadataMatch;
      
      if (!hasMetadata) {
        console.log(`${colors.red}Error: Could not extract metadata from ${relativePath}${colors.reset}`);
        logProgress(`Failed: ${relativePath} - Could not extract metadata`);
        continue;
      }
      
      const metadataString = metadataMatch[1];
      const componentNameMatch = content.match(/export\s+(?:default\s+)?(?:async\s+)?function\s+(\w+)/);
      const componentName = componentNameMatch ? componentNameMatch[1] : 'PageComponent';
      
      // Generate client component
      const isArabic = filePath.includes('/ar/');
      const clientComponentName = `${componentName.replace('Page', '')}ClientPage`;
      
      // Create client.tsx content by:
      // 1. Keeping the 'use client' directive
      // 2. Keeping all imports
      // 3. Removing metadata export
      // 4. Renaming the component
      let clientContent = content
        .replace(/export\s+const\s+metadata\s*=\s*{[\s\S]*?};?\s*/g, '')
        .replace(new RegExp(`export\\s+(?:default\\s+)?(?:async\\s+)?function\\s+${componentName}`), 
                 `export default function ${clientComponentName}`);
      
      // Create updated page.tsx content
      const pageContent = `import { Metadata } from 'next';
import ${clientComponentName} from './client';

export const metadata: Metadata = ${metadataString};

export default function ${componentName}() {
  return <${clientComponentName} />;
}
`;
      
      // Preview the changes
      console.log(`\n${colors.blue}=== Preview of changes ===${colors.reset}`);
      console.log(`\n${colors.yellow}New client.tsx:${colors.reset}`);
      console.log(`${colors.cyan}-------------------------${colors.reset}`);
      console.log(clientContent.slice(0, 500) + (clientContent.length > 500 ? '...' : ''));
      console.log(`${colors.cyan}-------------------------${colors.reset}`);
      
      console.log(`\n${colors.yellow}Updated page.tsx:${colors.reset}`);
      console.log(`${colors.cyan}-------------------------${colors.reset}`);
      console.log(pageContent);
      console.log(`${colors.cyan}-------------------------${colors.reset}`);
      
      // Confirm with the user
      const proceed = await prompt(`\nProceed with these changes? (y/N): `);
      
      if (proceed.toLowerCase() === 'y') {
        // Backup the original file
        const backupPath = `${filePath}.bak`;
        fs.copyFileSync(filePath, backupPath);
        
        // Write the new files
        fs.writeFileSync(clientFilePath, clientContent);
        fs.writeFileSync(filePath, pageContent);
        
        console.log(`${colors.green}✓ Successfully migrated ${relativePath}${colors.reset}`);
        console.log(`${colors.green}✓ Created ${path.relative(ROOT_DIR, clientFilePath)}${colors.reset}`);
        console.log(`${colors.green}✓ Original file backed up to ${path.relative(ROOT_DIR, backupPath)}${colors.reset}`);
        
        logProgress(`Success: Migrated ${relativePath}`);
      } else {
        console.log(`${colors.yellow}Skipped ${relativePath}${colors.reset}`);
        logProgress(`Skipped: ${relativePath} - User chose not to proceed`);
      }
      
      // Ask if user wants to continue to the next file
      if (i < problematicFiles.length - 1) {
        const continuePrompt = await prompt(`\nContinue to next file? (Y/n): `);
        if (continuePrompt.toLowerCase() === 'n') {
          console.log(`${colors.yellow}Stopping migration process. Progress has been saved.${colors.reset}`);
          break;
        }
      }
    }
    
    console.log(`\n${colors.green}Migration process completed.${colors.reset}`);
    console.log(`${colors.blue}Progress log saved to: ${path.relative(ROOT_DIR, PROGRESS_LOG)}${colors.reset}`);
    
  } catch (error) {
    console.error(`${colors.red}Error:${colors.reset}`, error);
  } finally {
    rl.close();
  }
}

// Run the main function
main().catch(error => {
  console.error(`${colors.red}Unhandled error:${colors.reset}`, error);
  process.exit(1);
}); 