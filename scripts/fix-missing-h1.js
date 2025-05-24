#!/usr/bin/env node

/**
 * This script detects and fixes pages missing H1 tags
 * It analyzes page content and adds semantically appropriate H1 elements
 * Usage: node scripts/fix-missing-h1.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { JSDOM } = require('jsdom');
const chalk = require('chalk');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');
const OUT_DIR = path.resolve(process.cwd(), 'out');

// Track results
const results = {
  total: 0,
  withH1: 0,
  missingH1: 0,
  fixed: 0,
  errors: 0
};

/**
 * Check if page has an H1 tag
 */
function checkForH1(content) {
  const dom = new JSDOM(content);
  const h1Elements = dom.window.document.querySelectorAll('h1');
  return {
    hasH1: h1Elements.length > 0,
    h1Count: h1Elements.length,
    h1Text: h1Elements.length > 0 ? h1Elements[0].textContent : null
  };
}

/**
 * Generate H1 text from page metadata or pathname
 */
function generateH1Text(content, filePath, isArabic = false) {
  // Try to extract title from metadata
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch && titleMatch[1]) {
    // Clean up title for H1 (remove site name suffix if present)
    return titleMatch[1].replace(/ \| UNEOM.*$/, '');
  }
  
  // Fall back to deriving from pathname
  const pathSegments = filePath
    .replace(APP_DIR, '')
    .replace(/\.tsx$/, '')
    .replace(/\/page$/, '')
    .split('/');
  
  // Get the last meaningful segment (skip empty segments)
  const lastSegment = pathSegments.filter(Boolean).pop() || 'home';
  
  if (lastSegment === 'ar') {
    return isArabic ? 'الصفحة الرئيسية' : 'Home';
  }
  
  // Convert kebab-case to Title Case
  const formattedSegment = lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Format based on language
  if (isArabic) {
    // Return optimized Arabic placeholder - NOT a direct translation
    // This follows the requirement for independent, culturally-resonant Arabic content
    return `${formattedSegment} - محتوى عربي مخصص`;
  }
  
  return formattedSegment;
}

/**
 * Add H1 tag to page content
 */
function addH1ToPage(content, filePath) {
  // Determine if this is an Arabic page
  const isArabic = filePath.includes('/ar/');
  
  // Generate appropriate H1 text
  const h1Text = generateH1Text(content, filePath, isArabic);
  
  // Create H1 element
  const h1Element = `<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl${isArabic ? ' rtl:font-arabic' : ''}">${h1Text}</h1>`;
  
  // Find appropriate insertion point - look for main element or first major content div
  let modifiedContent = content;
  
  // Look for specific content insertion points based on common patterns
  const mainContentPattern = /<main[^>]*>/i;
  const mainMatch = content.match(mainContentPattern);
  
  const contentDivPattern = /<div[^>]*className="[^"]*container[^"]*"[^>]*>/i;
  const contentDivMatch = content.match(contentDivPattern);
  
  const sectionPattern = /<section[^>]*>/i;
  const sectionMatch = content.match(sectionPattern);
  
  if (mainMatch) {
    // Insert after main opening tag
    const insertionPoint = mainMatch.index + mainMatch[0].length;
    modifiedContent = 
      content.slice(0, insertionPoint) + 
      `\n      ${h1Element}\n      ` + 
      content.slice(insertionPoint);
  } else if (contentDivMatch) {
    // Insert after container div opening tag
    const insertionPoint = contentDivMatch.index + contentDivMatch[0].length;
    modifiedContent = 
      content.slice(0, insertionPoint) + 
      `\n      ${h1Element}\n      ` + 
      content.slice(insertionPoint);
  } else if (sectionMatch) {
    // Insert after section opening tag
    const insertionPoint = sectionMatch.index + sectionMatch[0].length;
    modifiedContent = 
      content.slice(0, insertionPoint) + 
      `\n      ${h1Element}\n      ` + 
      content.slice(insertionPoint);
  } else {
    // Fallback: look for return statement and insert after the first JSX opening tag
    const returnStatementPattern = /return\s*\(\s*</;
    const returnMatch = content.match(returnStatementPattern);
    
    if (returnMatch) {
      // Find the first element's closing bracket
      const firstElementEnd = content.indexOf('>', returnMatch.index + returnMatch[0].length);
      
      if (firstElementEnd !== -1) {
        const insertionPoint = firstElementEnd + 1;
        modifiedContent = 
          content.slice(0, insertionPoint) + 
          `\n      ${h1Element}\n      ` + 
          content.slice(insertionPoint);
      }
    }
  }
  
  return modifiedContent;
}

/**
 * Find all page files and process them
 */
async function processPages() {
  // Find all page.tsx files
  const pageFiles = glob.sync('**/page.tsx', {
    cwd: APP_DIR,
    absolute: true
  });
  
  results.total = pageFiles.length;
  console.log(chalk.blue(`Found ${pageFiles.length} page files to analyze.`));
  
  for (const filePath of pageFiles) {
    try {
      const relativePath = path.relative(process.cwd(), filePath);
      
      // Read file content
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Skip client components (those shouldn't handle SEO)
      if (content.includes("'use client'") || content.includes('"use client"')) {
        continue;
      }
      
      // Check if page already has an H1
      const { hasH1, h1Count, h1Text } = checkForH1(content);
      
      if (hasH1) {
        results.withH1++;
        console.log(chalk.green(`✓ ${relativePath} already has an H1: "${h1Text}"`));
      } else {
        results.missingH1++;
        console.log(chalk.yellow(`! ${relativePath} is missing an H1 tag.`));
        
        // Add H1 tag
        const modifiedContent = addH1ToPage(content, filePath);
        
        // Write modified content back to file
        fs.writeFileSync(filePath, modifiedContent, 'utf-8');
        
        // Verify the change worked
        const updatedCheck = checkForH1(modifiedContent);
        if (updatedCheck.hasH1) {
          results.fixed++;
          console.log(chalk.green(`  ✓ Added H1: "${updatedCheck.h1Text}"`));
        } else {
          results.errors++;
          console.log(chalk.red(`  ✗ Failed to add H1 tag to ${relativePath}`));
        }
      }
    } catch (error) {
      results.errors++;
      console.error(chalk.red(`Error processing ${filePath}: ${error.message}`));
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log(chalk.blue('🔍 Analyzing pages for missing H1 tags...'));
  
  await processPages();
  
  console.log(chalk.blue('\n📊 Results Summary:'));
  console.log(chalk.blue(`Total pages analyzed: ${results.total}`));
  console.log(chalk.green(`Pages with H1 tags: ${results.withH1}`));
  console.log(chalk.yellow(`Pages missing H1 tags: ${results.missingH1}`));
  console.log(chalk.green(`Pages fixed: ${results.fixed}`));
  
  if (results.errors > 0) {
    console.log(chalk.red(`Errors encountered: ${results.errors}`));
  }
  
  if (results.fixed > 0) {
    console.log(chalk.blue('\n🔍 Next Steps:'));
    console.log(chalk.blue('1. Review the added H1 tags to ensure they are appropriate.'));
    console.log(chalk.blue('2. For Arabic pages, replace placeholder text with properly optimized Arabic content.'));
    console.log(chalk.blue('3. Adjust styling as needed for your design system.'));
  }
}

// Run main function
main().catch(error => {
  console.error(chalk.red(`Script error: ${error.message}`));
  process.exit(1);
}); 