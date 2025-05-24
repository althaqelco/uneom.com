#!/usr/bin/env node

/**
 * This script adds metadata to files that don't have it
 * Usage: node scripts/add-missing-metadata.js [file-path]
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');

/**
 * Checks if a file has metadata
 */
function hasMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has exported metadata
    return content.includes('export const metadata') || 
           content.includes('export async function generateMetadata');
  } catch (error) {
    console.error(`Error checking metadata in ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Checks if a file is a client component
 */
function isClientComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes("'use client'") || content.includes('"use client"');
  } catch (error) {
    console.error(`Error checking if ${filePath} is a client component:`, error.message);
    return false;
  }
}

/**
 * Adds metadata to a file
 */
function addMetadata(filePath) {
  try {
    // Skip client components
    if (isClientComponent(filePath)) {
      console.log(`  ⚠️ Skipping client component: ${filePath}`);
      return false;
    }
    
    console.log(`Adding metadata to: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract page path to generate metadata
    const pagePath = filePath.replace(APP_DIR, '').replace(/\\/g, '/').replace('page.tsx', '');
    const pageTitle = pagePath
      .split('/')
      .filter(Boolean)
      .map(part => {
        if (part.startsWith('[') && part.endsWith(']')) {
          return 'Details';
        }
        return part.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      })
      .join(' | ');
    
    // Check if it already imports Metadata
    const hasMetadataImport = content.includes('import { Metadata }') || 
                              content.includes('import type { Metadata }');
    
    const metadataImport = hasMetadataImport ? '' : 'import { Metadata } from \'next\';\n\n';
    
    // Generate appropriate metadata
    const isArabic = pagePath.includes('/ar/');
    let metadataBlock;
    
    if (isArabic) {
      metadataBlock = `export const metadata: Metadata = {
  title: '${pageTitle} | يونيوم المملكة العربية السعودية',
  description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
  keywords: ['زي موحد', 'ملابس مهنية', 'يونيوم', 'المملكة العربية السعودية', '${pageTitle.toLowerCase()}'],
  openGraph: {
    title: '${pageTitle} | يونيوم المملكة العربية السعودية',
    description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
    url: 'https://uneom.com${pagePath}',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: '${pageTitle} - يونيوم المملكة العربية السعودية'
      }
    ],
    locale: 'ar'
  }
};

`;
    } else {
      metadataBlock = `export const metadata: Metadata = {
  title: '${pageTitle} | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', '${pageTitle.toLowerCase()}'],
  openGraph: {
    title: '${pageTitle} | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com${pagePath}',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: '${pageTitle} - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};

`;
    }
    
    // Find the best position to insert the metadata
    let updatedContent;
    const importEndMatch = content.match(/import [^;]+;(?:\r?\n|$)/g);
    
    if (importEndMatch && importEndMatch.length > 0) {
      // Find the last import
      let lastImportIndex = 0;
      for (const match of importEndMatch) {
        const index = content.indexOf(match, lastImportIndex);
        if (index !== -1) {
          lastImportIndex = index + match.length;
        }
      }
      
      // Insert after the last import
      updatedContent = content.slice(0, lastImportIndex) + 
                      (hasMetadataImport ? '' : '\n') + 
                      metadataBlock + 
                      content.slice(lastImportIndex);
    } else {
      // No imports found, insert at the beginning
      updatedContent = metadataImport + metadataBlock + content;
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`  ✅ Successfully added metadata to ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error adding metadata to ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  // Check if a specific file path was provided
  const specificFile = process.argv[2];
  
  if (specificFile) {
    const filePath = path.resolve(process.cwd(), specificFile);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }
    
    if (hasMetadata(filePath)) {
      console.log(`✓ File already has metadata: ${filePath}`);
      return true;
    }
    
    const success = addMetadata(filePath);
    if (success) {
      console.log(`🎉 Successfully added metadata to ${filePath}!`);
      return true;
    } else {
      console.error(`❌ Failed to add metadata to ${filePath}.`);
      return false;
    }
  } else {
    // No specific file provided, scan for all page.tsx files without metadata
    console.log('🔍 Scanning for pages without metadata...');
    
    // Find all page.tsx files
    const pageFiles = glob.sync('**/page.tsx', { 
      cwd: APP_DIR, 
      absolute: true 
    });
    
    const pagesWithoutMetadata = pageFiles.filter(file => !hasMetadata(file) && !isClientComponent(file));
    
    console.log(`Found ${pagesWithoutMetadata.length} pages without metadata out of ${pageFiles.length} total pages.`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const file of pagesWithoutMetadata) {
      const success = addMetadata(file);
      if (success) {
        successCount++;
      } else {
        errorCount++;
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`  • Found ${pagesWithoutMetadata.length} pages without metadata`);
    console.log(`  • Successfully added metadata to ${successCount} pages`);
    console.log(`  • Failed to add metadata to ${errorCount} pages`);
    
    if (errorCount > 0) {
      console.log('\n⚠️ Some pages could not be updated. Please review the errors above.');
      return false;
    } else if (successCount > 0) {
      console.log('\n🎉 All pages now have metadata!');
      return true;
    } else {
      console.log('\nℹ️ No changes needed. All pages have metadata!');
      return true;
    }
  }
}

// Run the script
main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
});