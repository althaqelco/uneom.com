#!/usr/bin/env node

/**
 * SEO Checker Script
 * This script scans the codebase for common SEO issues:
 * 1. Pages with 'use client' and metadata exports
 * 2. Missing H1 tags
 * 3. Duplicate/Missing metadata
 * 4. Word count issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '../../');
const PAGE_DIRS = ['src/app'];
const IGNORE_DIRS = ['node_modules', '.next', 'public'];
const MIN_WORD_COUNT = 300;

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
};

// Issue counters
let issues = {
  clientWithMetadata: 0,
  missingH1: 0,
  missingMetadata: 0,
  duplicateMetadata: 0,
  lowWordCount: 0,
};

// Store metadata to check for duplicates
const metadataTitles = new Map();
const metadataDescriptions = new Map();

// Helper: Check if file contains specific text
function fileContains(filePath, searchText) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes(searchText);
  } catch (error) {
    console.error(`${colors.red}Error reading file ${filePath}:${colors.reset}`, error);
    return false;
  }
}

// Helper: Count words in HTML/JSX content
function countWords(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove JSX/HTML tags, scripts, and styles
    const textOnly = content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    return textOnly.split(/\s+/).length;
  } catch (error) {
    console.error(`${colors.red}Error counting words in ${filePath}:${colors.reset}`, error);
    return 0;
  }
}

// Helper: Extract metadata from file
function extractMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title and description from metadata
    const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
    
    return {
      title: titleMatch ? titleMatch[1] : null,
      description: descMatch ? descMatch[1] : null,
    };
  } catch (error) {
    console.error(`${colors.red}Error extracting metadata from ${filePath}:${colors.reset}`, error);
    return { title: null, description: null };
  }
}

// Helper: Check if file has H1 tag
function hasH1Tag(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for various H1 patterns in JSX/TSX
    const h1Patterns = [
      /<h1[^>]*>/i,                    // HTML: <h1>
      /<Heading[^>]*as=["']h1["'][^>]*>/i,  // Chakra UI: <Heading as="h1">
      /<Typography[^>]*variant=["']h1["'][^>]*>/i, // MUI: <Typography variant="h1">
    ];
    
    return h1Patterns.some(pattern => pattern.test(content));
  } catch (error) {
    console.error(`${colors.red}Error checking for H1 in ${filePath}:${colors.reset}`, error);
    return false;
  }
}

// Main function to process a page file
function processPageFile(filePath) {
  const relativePath = path.relative(ROOT_DIR, filePath);
  
  // Check for 'use client' with metadata exports
  const hasUseClient = fileContains(filePath, "'use client'") || fileContains(filePath, '"use client"');
  const hasMetadataExport = fileContains(filePath, 'export const metadata');
  
  if (hasUseClient && hasMetadataExport) {
    console.log(`${colors.red}ERROR:${colors.reset} 'use client' with metadata export in ${colors.yellow}${relativePath}${colors.reset}`);
    issues.clientWithMetadata++;
  }
  
  // Check for H1 tags in client components
  if (hasUseClient && !hasH1Tag(filePath)) {
    console.log(`${colors.yellow}WARNING:${colors.reset} Missing H1 tag in ${colors.yellow}${relativePath}${colors.reset}`);
    issues.missingH1++;
  }
  
  // Check for metadata in server components
  if (!hasUseClient) {
    const { title, description } = extractMetadata(filePath);
    
    if (!title || !description) {
      console.log(`${colors.yellow}WARNING:${colors.reset} Missing metadata in ${colors.yellow}${relativePath}${colors.reset}`);
      issues.missingMetadata++;
    } else {
      // Check for duplicate metadata
      if (metadataTitles.has(title)) {
        console.log(`${colors.yellow}WARNING:${colors.reset} Duplicate title in ${colors.yellow}${relativePath}${colors.reset} and ${colors.yellow}${metadataTitles.get(title)}${colors.reset}`);
        issues.duplicateMetadata++;
      } else {
        metadataTitles.set(title, relativePath);
      }
      
      if (metadataDescriptions.has(description)) {
        console.log(`${colors.yellow}WARNING:${colors.reset} Duplicate description in ${colors.yellow}${relativePath}${colors.reset} and ${colors.yellow}${metadataDescriptions.get(description)}${colors.reset}`);
        issues.duplicateMetadata++;
      } else {
        metadataDescriptions.set(description, relativePath);
      }
    }
  }
  
  // Check word count in client components (likely containing the main content)
  if (hasUseClient) {
    const wordCount = countWords(filePath);
    if (wordCount < MIN_WORD_COUNT) {
      console.log(`${colors.yellow}WARNING:${colors.reset} Low word count (${wordCount}) in ${colors.yellow}${relativePath}${colors.reset}`);
      issues.lowWordCount++;
    }
  }
}

// Recursive directory walker
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip ignored directories
    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(file)) {
        walkDir(filePath);
      }
      return;
    }
    
    // Process page files
    if ((file.endsWith('.tsx') || file.endsWith('.jsx')) && 
        (file === 'page.tsx' || file === 'page.jsx' || file === 'client.tsx' || file === 'client.jsx')) {
      processPageFile(filePath);
    }
  });
}

// Main execution
console.log(`${colors.blue}=== UNEOM SEO Checker ===${colors.reset}`);
console.log(`Scanning for SEO issues in ${ROOT_DIR}...\n`);

PAGE_DIRS.forEach(dir => {
  walkDir(path.join(ROOT_DIR, dir));
});

// Print summary
console.log(`\n${colors.blue}=== Results ===${colors.reset}`);
console.log(`${issues.clientWithMetadata} files with 'use client' AND metadata exports`);
console.log(`${issues.missingH1} client components without H1 tags`);
console.log(`${issues.missingMetadata} server components without proper metadata`);
console.log(`${issues.duplicateMetadata} instances of duplicate metadata`);
console.log(`${issues.lowWordCount} pages with low word count (below ${MIN_WORD_COUNT} words)`);

// Exit with error code if critical issues found
if (issues.clientWithMetadata > 0) {
  console.log(`\n${colors.red}Critical issues found. Please fix them before deployment.${colors.reset}`);
  process.exit(1);
}

console.log(`\n${colors.green}SEO check completed.${colors.reset}`); 