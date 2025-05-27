#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping of placeholder images to appropriate replacements
const imageReplacements = {
  '/images/default-placeholder.jpg': {
    // Context-based replacements
    'medical': '/images/healthcare/medical_hijab_uniform.jpg',
    'healthcare': '/images/healthcare/nurce_uniform.jpg',
    'aviation': '/images/aviation/aviation_uniform_main.jpg',
    'hospitality': '/images/hospitality/hospitality_uniform_formal.jpg',
    'corporate': '/images/products/corporate-suit-executive.jpg',
    'industrial': '/images/products/industrial-coverall.jpg',
    'education': '/images/education/uniform_school_product-2.jpg',
    'security': '/images/security/security_uniform_professional.jpg',
    'chef': '/images/products/chef-uniform.jpg',
    'business': '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    'tailor': '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
    'fabric': '/images/services/defaults/default-placeholder.jpg'
  }
};

// Function to determine context from file path and content
function getImageContext(filePath, content) {
  const pathLower = filePath.toLowerCase();
  const contentLower = content.toLowerCase();
  
  if (pathLower.includes('medical') || pathLower.includes('healthcare') || contentLower.includes('medical') || contentLower.includes('healthcare')) {
    return 'medical';
  }
  if (pathLower.includes('aviation') || pathLower.includes('airline') || contentLower.includes('aviation') || contentLower.includes('airline')) {
    return 'aviation';
  }
  if (pathLower.includes('hospitality') || pathLower.includes('hotel') || contentLower.includes('hospitality') || contentLower.includes('hotel')) {
    return 'hospitality';
  }
  if (pathLower.includes('corporate') || pathLower.includes('business') || contentLower.includes('corporate') || contentLower.includes('business')) {
    return 'corporate';
  }
  if (pathLower.includes('industrial') || pathLower.includes('manufacturing') || contentLower.includes('industrial') || contentLower.includes('manufacturing')) {
    return 'industrial';
  }
  if (pathLower.includes('education') || pathLower.includes('school') || contentLower.includes('education') || contentLower.includes('school')) {
    return 'education';
  }
  if (pathLower.includes('security') || contentLower.includes('security')) {
    return 'security';
  }
  if (pathLower.includes('chef') || pathLower.includes('culinary') || contentLower.includes('chef') || contentLower.includes('culinary')) {
    return 'chef';
  }
  if (pathLower.includes('fabric') || contentLower.includes('fabric')) {
    return 'fabric';
  }
  if (pathLower.includes('tailor') || contentLower.includes('tailor')) {
    return 'tailor';
  }
  if (contentLower.includes('meeting') || contentLower.includes('business')) {
    return 'business';
  }
  
  return 'default';
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let newContent = content;
    
    // Find all instances of default-placeholder.jpg
    const matches = content.match(/['"`]\/images\/default-placeholder\.jpg['"`]/g);
    
    if (matches && matches.length > 0) {
      console.log(`Processing ${filePath} - Found ${matches.length} placeholder(s)`);
      
      const context = getImageContext(filePath, content);
      const replacement = imageReplacements['/images/default-placeholder.jpg'][context];
      
      // Replace all instances
      newContent = newContent.replace(/(['"`])\/images\/default-placeholder\.jpg(['"`])/g, `$1${replacement}$2`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Updated ${filePath} with context: ${context}`);
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
console.log('🔍 Starting placeholder image replacement...\n');

const srcPath = path.join(process.cwd(), 'src');
const processed = processDirectory(srcPath);

console.log(`\n✨ Completed! Processed ${processed} files with placeholder replacements.`);

// Generate summary report
console.log('\n📊 Replacement Summary:');
Object.entries(imageReplacements['/images/default-placeholder.jpg']).forEach(([context, replacement]) => {
  console.log(`  ${context}: ${replacement}`);
});