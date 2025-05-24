#!/usr/bin/env node

/**
 * This script detects and fixes client components that incorrectly contain metadata
 * Usage: node scripts/fix-metadata-in-client.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');

/**
 * Analyzes a file to check if it's a client component that contains metadata
 */
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a client component
    const hasUseClient = content.includes("'use client'") || content.includes('"use client"');
    
    if (!hasUseClient) {
      return null;
    }
    
    // Check for metadata objects in the file (even if not exported)
    const hasMetadataObject = content.includes('locale:') && 
                              content.includes('alternates:') && 
                              content.includes('robots:');
    
    if (hasMetadataObject) {
      return {
        path: filePath,
        content
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Removes metadata object from client component
 */
function fixClientComponent(fileInfo) {
  try {
    const { path: filePath, content } = fileInfo;
    console.log(`Fixing client component: ${filePath}`);
    
    // Find and remove metadata object
    let updatedContent = content;
    
    // Look for patterns like: alternates: { ... }, or robots: { ... },
    const metadataPatterns = [
      /alternates:\s*{[^}]*},/g,
      /robots:\s*{[^{]*{[^}]*}[^}]*},/g,
      /locale:\s*['"][\w_]+['"],/g,
      /type:\s*['"][\w_]+['"],/g
    ];
    
    metadataPatterns.forEach(pattern => {
      updatedContent = updatedContent.replace(pattern, '');
    });
    
    // Clean up any leftover empty objects or trailing commas
    updatedContent = updatedContent.replace(/,\s*}/g, '}');
    updatedContent = updatedContent.replace(/{\s*}/g, '{}');
    
    // Check if anything was changed
    if (updatedContent === content) {
      console.log(`  ⚠️ No changes made to ${filePath}`);
      return false;
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`  ✅ Successfully cleaned metadata from ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error fixing ${fileInfo.path}:`, error.message);
    return false;
  }
}

/**
 * Main function to find and fix client components with metadata
 */
async function fixMetadataInClientComponents() {
  console.log('🔍 Scanning for client components with metadata...');
  
  // Find all client components
  const clientFiles = glob.sync('**/*.tsx', { 
    cwd: APP_DIR, 
    absolute: true,
    ignore: ['**/node_modules/**']
  });
  
  // Analyze each file
  const problemFiles = [];
  
  clientFiles.forEach(filePath => {
    const analysis = analyzeFile(filePath);
    if (analysis) {
      problemFiles.push(analysis);
    }
  });
  
  console.log(`Found ${problemFiles.length} client components with metadata.`);
  
  // Fix each problem file
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of problemFiles) {
    try {
      const success = fixClientComponent(file);
      if (success) {
        fixedCount++;
      } else {
        errorCount++;
      }
    } catch (error) {
      console.error(`  ❌ Error fixing ${file.path}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`  • Found ${problemFiles.length} client components with metadata`);
  console.log(`  • Successfully fixed ${fixedCount} components`);
  console.log(`  • Failed to fix ${errorCount} components`);
  
  if (errorCount > 0) {
    console.log('\n⚠️  Some files could not be automatically fixed. Please review them manually.');
    return false;
  } else if (fixedCount > 0) {
    console.log('\n🎉 All client components with metadata have been fixed!');
    return true;
  } else {
    console.log('\nℹ️  No changes needed. All client components look good!');
    return true;
  }
}

// Run the script
fixMetadataInClientComponents().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
}); 