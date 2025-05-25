#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Contextual image replacements
const contextualReplacements = [
  // Medical/Healthcare context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['medical', 'healthcare', 'scrubs', 'doctor', 'nurse', 'hospital'],
    replacement: '/images/healthcare/medical_hijab_uniform.jpg'
  },
  // Aviation context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['aviation', 'airline', 'pilot', 'flight', 'crew'],
    replacement: '/images/aviation/aviation_uniform_main.jpg'
  },
  // Hospitality context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['hospitality', 'hotel', 'restaurant', 'concierge', 'luxury'],
    replacement: '/images/hospitality/hospitality_uniform_formal.jpg'
  },
  // Corporate context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['corporate', 'business', 'executive', 'office', 'suit'],
    replacement: '/images/products/corporate-suit-executive.jpg'
  },
  // Industrial context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['industrial', 'manufacturing', 'coverall', 'safety', 'worker'],
    replacement: '/images/products/industrial-coverall.jpg'
  },
  // Education context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['education', 'school', 'student', 'uniform', 'premium'],
    replacement: '/images/education/uniform_school_product-2.jpg'
  },
  // Security context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['security', 'officer', 'tactical', 'protection'],
    replacement: '/images/security/security_uniform_professional.jpg'
  },
  // Chef/Culinary context
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['chef', 'culinary', 'kitchen', 'cook', 'restaurant'],
    replacement: '/images/products/chef-uniform.jpg'
  }
];

// Icon replacements for service features
const iconReplacements = [
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['icon', 'service', 'feature', 'benefit'],
    replacement: '/images/icons/premium-quality.svg'
  }
];

// Business/meeting context
const businessReplacements = [
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['meeting', 'consultation', 'business', 'professional'],
    replacement: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg'
  }
];

// Fabric/material context
const fabricReplacements = [
  {
    pattern: /\/images\/defaults\/default-placeholder\.jpg/g,
    contexts: ['fabric', 'material', 'textile', 'cotton'],
    replacement: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg'
  }
];

// Function to determine context and get appropriate replacement
function getContextualReplacement(filePath, content) {
  const pathLower = filePath.toLowerCase();
  const contentLower = content.toLowerCase();
  
  // Check all replacement categories
  const allReplacements = [
    ...contextualReplacements,
    ...iconReplacements,
    ...businessReplacements,
    ...fabricReplacements
  ];
  
  for (const replacement of allReplacements) {
    for (const context of replacement.contexts) {
      if (pathLower.includes(context) || contentLower.includes(context)) {
        return replacement.replacement;
      }
    }
  }
  
  // Default fallback
  return '/images/defaults/default-placeholder.jpg';
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let modified = false;
    
    // Find all instances of default placeholder
    const matches = content.match(/\/images\/defaults\/default-placeholder\.jpg/g);
    
    if (matches && matches.length > 0) {
      const replacement = getContextualReplacement(filePath, content);
      
      // Only replace if we have a better contextual image
      if (replacement !== '/images/defaults/default-placeholder.jpg') {
        newContent = content.replace(/\/images\/defaults\/default-placeholder\.jpg/g, replacement);
        modified = true;
        console.log(`✅ Updated ${filePath} with ${replacement}`);
      }
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
console.log('🔍 Starting contextual image replacement...\n');

const srcPath = path.join(process.cwd(), 'src');
const processed = processDirectory(srcPath);

console.log(`\n✨ Completed! Updated ${processed} files with contextual images.`);