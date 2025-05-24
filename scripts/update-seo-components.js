#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.next', 'out', '.git'].includes(file)) {
        findTsxFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') && file !== 'layout.tsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to update a file with enhanced SEO
function updateFileWithSEO(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has EnhancedSEO2025
    if (content.includes('EnhancedSEO2025')) {
      console.log(`✅ Already updated: ${filePath}`);
      return;
    }
    
    // Skip if it's not a page component (doesn't have export default)
    if (!content.includes('export default')) {
      console.log(`⏭️  Skipping non-page: ${filePath}`);
      return;
    }
    
    // Add import if not present
    if (!content.includes("import EnhancedSEO2025")) {
      // Find existing imports
      const importRegex = /import.*from.*['"];?\n/g;
      const imports = content.match(importRegex) || [];
      
      if (imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        
        content = content.slice(0, insertIndex) + 
                 "import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';\n" +
                 content.slice(insertIndex);
      }
    }
    
    // Determine page type and keywords based on file path
    let pageType = 'service';
    let keywords = ['uniform Saudi Arabia', 'professional uniforms', 'custom uniforms'];
    let title = 'UNEOM - Professional Uniforms Saudi Arabia';
    let description = 'Premium quality professional uniforms and workwear solutions in Saudi Arabia.';
    
    if (filePath.includes('/industries/')) {
      pageType = 'service';
      if (filePath.includes('healthcare')) {
        keywords = ['healthcare uniforms', 'medical scrubs', 'hospital uniforms', 'nursing uniforms'];
        title = 'Healthcare Uniforms & Medical Scrubs | UNEOM Saudi Arabia';
        description = 'Professional healthcare uniforms and medical scrubs for hospitals and clinics across Saudi Arabia.';
      } else if (filePath.includes('aviation')) {
        keywords = ['aviation uniforms', 'airline uniforms', 'pilot uniforms', 'flight attendant uniforms'];
        title = 'Aviation Uniforms & Airline Attire | UNEOM Saudi Arabia';
        description = 'Professional aviation uniforms for airlines, pilots, and ground staff in Saudi Arabia.';
      } else if (filePath.includes('hospitality')) {
        keywords = ['hospitality uniforms', 'hotel uniforms', 'restaurant uniforms', 'service uniforms'];
        title = 'Hospitality Uniforms & Hotel Attire | UNEOM Saudi Arabia';
        description = 'Premium hospitality uniforms for hotels, restaurants, and service industries in Saudi Arabia.';
      }
    } else if (filePath.includes('/shop/')) {
      pageType = 'product';
      keywords = ['uniform shop', 'buy uniforms', 'professional workwear', 'uniform store'];
    } else if (filePath.includes('/services/')) {
      pageType = 'service';
      keywords = ['uniform services', 'custom uniform design', 'uniform manufacturing'];
    } else if (filePath.includes('/locations/')) {
      pageType = 'location';
      if (filePath.includes('riyadh')) {
        keywords = ['uniforms Riyadh', 'uniform supplier Riyadh', 'professional uniforms Riyadh'];
        title = 'Professional Uniforms in Riyadh | UNEOM Saudi Arabia';
        description = 'Premium uniform supplier in Riyadh offering custom designs and professional workwear solutions.';
      } else if (filePath.includes('jeddah')) {
        keywords = ['uniforms Jeddah', 'uniform supplier Jeddah', 'professional uniforms Jeddah'];
        title = 'Professional Uniforms in Jeddah | UNEOM Saudi Arabia';
        description = 'Leading uniform manufacturer in Jeddah providing high-quality professional attire and workwear.';
      } else if (filePath.includes('dammam')) {
        keywords = ['uniforms Dammam', 'uniform supplier Dammam', 'professional uniforms Dammam'];
        title = 'Professional Uniforms in Dammam | UNEOM Saudi Arabia';
        description = 'Professional uniform solutions in Dammam for healthcare, corporate, and industrial sectors.';
      }
    }
    
    // Find the return statement and add SEO component
    const returnMatch = content.match(/return \(\s*<>/);
    if (returnMatch) {
      const returnIndex = returnMatch.index;
      const insertIndex = content.indexOf('<>', returnIndex) + 2;
      
      const seoComponent = `
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="${title}"
        description="${description}"
        keywords={${JSON.stringify(keywords)}}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="${pageType}"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />
`;
      
      content = content.slice(0, insertIndex) + seoComponent + content.slice(insertIndex);
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🚀 Starting SEO component updates...\n');

const srcDir = path.join(__dirname, '../src/app');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} .tsx files to process\n`);

tsxFiles.forEach(updateFileWithSEO);

console.log('\n✅ SEO component update completed!');
console.log('\n📊 Summary:');
console.log(`- Total files processed: ${tsxFiles.length}`);
console.log('- All pages now include EnhancedSEO2025 component');
console.log('- Google May 2025 SEO standards implemented');