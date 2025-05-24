#!/usr/bin/env node

/**
 * This script separates files with both "use client" and metadata exports
 * into client components and server components
 * Usage: node scripts/fix-client-metadata-conflicts.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');

/**
 * Analyzes a file to check if it's a client component with metadata
 */
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a client component
    const hasUseClient = content.includes("'use client'") || content.includes('"use client"');
    
    if (!hasUseClient) {
      return null;
    }
    
    // Check if it has exported metadata
    const hasMetadata = content.includes('export const metadata') || 
                        content.includes('export async function generateMetadata');
    
    if (hasMetadata) {
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
 * Creates a client component from a file with both "use client" and metadata
 */
function createClientComponent(fileInfo) {
  try {
    const { path: filePath, content } = fileInfo;
    const dirName = path.dirname(filePath);
    const clientFilePath = path.join(dirName, 'client.tsx');
    
    console.log(`Creating client component: ${clientFilePath}`);
    
    // Extract the component but remove any metadata exports
    let clientContent = content;
    
    // Remove metadata exports
    clientContent = clientContent.replace(/export\s+const\s+metadata\s*=\s*{[\s\S]*?};/g, '');
    clientContent = clientContent.replace(/export\s+(async\s+)?function\s+generateMetadata[\s\S]*?}(\s*\n){1,2}/g, '');
    
    // Write the client component file
    fs.writeFileSync(clientFilePath, clientContent, 'utf8');
    console.log(`  ✅ Created client component at ${clientFilePath}`);
    
    return clientFilePath;
  } catch (error) {
    console.error(`  ❌ Error creating client component from ${fileInfo.path}:`, error.message);
    return null;
  }
}

/**
 * Updates or creates a server component file that uses the client component
 */
function updateServerComponent(fileInfo, clientPath) {
  try {
    const { path: filePath, content } = fileInfo;
    
    console.log(`Updating server component: ${filePath}`);
    
    // Extract the component name from the file
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    // Add 'Page' to the component name if it doesn't already end with it
    const formattedComponentName = componentName.endsWith('Page')
      ? componentName
      : `${componentName}Page`;
      
    // Extract the client component name
    const clientComponentName = formattedComponentName.endsWith('Page')
      ? formattedComponentName.replace(/Page$/, 'ClientPage')
      : `${formattedComponentName}Client`;
    
    // Extract metadata from the original file
    let metadataBlock = '';
    const metadataMatches = content.match(/export\s+const\s+metadata\s*=\s*{[\s\S]*?};/);
    if (metadataMatches) {
      metadataBlock = metadataMatches[0];
    }
    
    const generateMetadataMatches = content.match(/export\s+(async\s+)?function\s+generateMetadata[\s\S]*?}(\s*\n){1,2}/);
    if (generateMetadataMatches) {
      metadataBlock = generateMetadataMatches[0];
    }
    
    // Check if metadata exists, if not create a basic one
    if (!metadataBlock) {
      const pagePath = filePath.replace(APP_DIR, '').replace(/\\/g, '/').replace('page.tsx', '');
      const pageTitle = pagePath
        .split('/')
        .filter(Boolean)
        .map(part => {
          if (part.startsWith('[') && part.endsWith(']')) {
            return 'Details';
          }
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join(' | ');
      
      metadataBlock = `export const metadata = {
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
    locale: '${pagePath.includes('/ar/') ? 'ar' : 'en_US'}'
  }
};`;
    }
    
    // Create relative path to client component
    const relativeClientPath = path.basename(clientPath);
    
    // Create server component content
    const serverContent = `import { Metadata } from 'next';
import { ${clientComponentName} } from './${relativeClientPath.replace('.tsx', '')}';

${metadataBlock}

export default function ${formattedComponentName}() {
  return <${clientComponentName} />;
}
`;
    
    // Write the server component file
    fs.writeFileSync(filePath, serverContent, 'utf8');
    console.log(`  ✅ Updated server component at ${filePath}`);
    
    // Now we need to make sure client component imports correctly
    const clientContent = fs.readFileSync(clientPath, 'utf8');
    const hasNamedExport = clientContent.includes(`export function ${clientComponentName}`) || 
                          clientContent.includes(`export const ${clientComponentName}`);
    
    if (!hasNamedExport) {
      // Extract the component name from the client file
      const defaultExportMatches = clientContent.match(/export\s+default\s+function\s+(\w+)/);
      let defaultComponentName = null;
      
      if (defaultExportMatches && defaultExportMatches.length > 1) {
        defaultComponentName = defaultExportMatches[1];
      }
      
      if (defaultComponentName) {
        // Rename the default export to match the expected name and make it a named export
        const updatedClientContent = clientContent
          .replace(
            `export default function ${defaultComponentName}`,
            `export function ${clientComponentName}`
          )
          .replace(
            `export default function`,
            `export function ${clientComponentName}`
          );
        
        fs.writeFileSync(clientPath, updatedClientContent, 'utf8');
        console.log(`  ✅ Updated client component to use named export: ${clientComponentName}`);
      }
    }
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error updating server component ${fileInfo.path}:`, error.message);
    return false;
  }
}

/**
 * Main function to find and fix client components with metadata exports
 */
async function fixClientMetadataConflicts() {
  console.log('🔍 Scanning for client components with metadata exports...');
  
  // Find all page.tsx files
  const pageFiles = glob.sync('**/page.tsx', { 
    cwd: APP_DIR, 
    absolute: true 
  });
  
  // Analyze each file
  const problemFiles = [];
  
  pageFiles.forEach(filePath => {
    const analysis = analyzeFile(filePath);
    if (analysis) {
      problemFiles.push(analysis);
    }
  });
  
  console.log(`Found ${problemFiles.length} client components with metadata exports.`);
  
  // Fix each problem file
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of problemFiles) {
    try {
      console.log(`\nFixing ${path.relative(process.cwd(), file.path)}...`);
      
      // Create client component
      const clientPath = createClientComponent(file);
      
      if (clientPath) {
        // Update server component
        const success = updateServerComponent(file, clientPath);
        
        if (success) {
          fixedCount++;
        } else {
          errorCount++;
        }
      } else {
        errorCount++;
      }
    } catch (error) {
      console.error(`  ❌ Error fixing ${file.path}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`  • Found ${problemFiles.length} client components with metadata exports`);
  console.log(`  • Successfully fixed ${fixedCount} components`);
  console.log(`  • Failed to fix ${errorCount} components`);
  
  if (errorCount > 0) {
    console.log('\n⚠️ Some files could not be automatically fixed. Please review them manually.');
    return false;
  } else if (fixedCount > 0) {
    console.log('\n🎉 All client components with metadata exports have been fixed!');
    return true;
  } else {
    console.log('\nℹ️ No changes needed. All components are correctly structured!');
    return true;
  }
}

// Run the script
fixClientMetadataConflicts().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
}); 