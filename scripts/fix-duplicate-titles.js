#!/usr/bin/env node

/**
 * This script fixes duplicate titles between pages
 * Usage: node scripts/fix-duplicate-titles.js
 */

const fs = require('fs');
const path = require('path');

// Files to fix
const files = {
  industrial: path.resolve(process.cwd(), 'src/app/ar/shop/industrial-uniforms/industrial-safety-vest/page.tsx'),
  highVis: path.resolve(process.cwd(), 'src/app/ar/shop/high-visibility-clothing/industrial-safety-vest/page.tsx')
};

function updateTitle(filePath, newTitle) {
  console.log(`Updating title in ${filePath}...`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for the title in the metadata
    const titleRegex = /(title:\s*['"])([^'"]+)(['"])/;
    const match = content.match(titleRegex);
    
    if (match) {
      // Replace the title
      const updatedContent = content.replace(titleRegex, `$1${newTitle}$3`);
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Successfully updated title in ${filePath}`);
      return true;
    } else {
      console.error(`❌ Could not find title in ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}: ${error.message}`);
    return false;
  }
}

function fixDuplicateTitles() {
  console.log('🔧 Fixing duplicate titles...');
  
  // Update the industrial safety vest title to be more specific
  const industrialTitle = "سترات السلامة الصناعية المتينة | مقاومة للحرارة ومتوافقة مع معيار ANSI/ISEA 107 | يونيوم";
  const highVisTitle = "سترات السلامة عالية الرؤية | متوافقة مع معيار ANSI/ISEA 107 Class 2 | يونيوم المملكة العربية السعودية";
  
  const industrialSuccess = updateTitle(files.industrial, industrialTitle);
  const highVisSuccess = updateTitle(files.highVis, highVisTitle);
  
  if (industrialSuccess && highVisSuccess) {
    console.log('\n🎉 Successfully fixed duplicate titles!');
  } else {
    console.log('\n⚠️ Some titles could not be updated. Please check the errors above.');
  }
}

// Run the script
fixDuplicateTitles(); 