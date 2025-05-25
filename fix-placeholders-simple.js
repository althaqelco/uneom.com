#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple replacement mapping
const replacements = {
  '/images/default-placeholder.jpg': '/images/defaults/default-placeholder.jpg'
};

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let modified = false;
    
    // Replace all instances of default-placeholder.jpg with defaults/default-placeholder.jpg
    if (content.includes('/images/default-placeholder.jpg')) {
      newContent = content.replace(/\/images\/default-placeholder\.jpg/g, '/images/defaults/default-placeholder.jpg');
      modified = true;
      console.log(`✅ Updated ${filePath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let totalProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Process TypeScript, JavaScript, and JSX files
        if (/\.(tsx?|jsx?|ts|js)$/.test(item)) {
          if (processFile(fullPath)) {
            totalProcessed++;
          }
        }
      }
    }
  }
  
  walkDir(dirPath);
  return totalProcessed;
}

// Main execution
console.log('🔍 Starting simple placeholder image replacement...\n');

const srcPath = path.join(process.cwd(), 'src');
const processed = processDirectory(srcPath);

console.log(`\n✨ Completed! Updated ${processed} files.`);