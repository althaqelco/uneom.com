#!/usr/bin/env node

/**
 * This script adds generateMetadata functions to dynamic pages with [slug] parameters
 * Usage: node scripts/generate-dynamic-metadata.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');

/**
 * Checks if a file is a dynamic page
 */
function isDynamicPage(filePath) {
  // Check if path contains a segment with square brackets like [slug]
  return filePath.includes('[') && filePath.includes(']');
}

/**
 * Check if the file already has metadata or generateMetadata
 */
function hasMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('export const metadata') || 
           content.includes('export async function generateMetadata');
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Extracts param names from file path
 */
function extractParamNames(filePath) {
  const params = [];
  const pathSegments = filePath.split(path.sep);
  
  // Find segments with [paramName] format
  pathSegments.forEach(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const paramName = segment.substring(1, segment.length - 1);
      params.push(paramName);
    }
  });
  
  return params;
}

/**
 * Generate a metadata function for a dynamic page
 */
function generateMetadataFunction(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const params = extractParamNames(filePath);
    
    // Read the file to analyze imports
    const ast = parse(content, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
    
    // Check if Metadata is already imported
    let hasMetadataImport = false;
    let insertPosition = 0;
    
    traverse(ast, {
      ImportDeclaration(path) {
        if (path.node.source.value === 'next' && 
            path.node.specifiers.some(spec => 
              spec.type === 'ImportSpecifier' && spec.imported.name === 'Metadata'
            )) {
          hasMetadataImport = true;
        }
        
        // Track position after last import
        insertPosition = path.node.end;
      }
    });
    
    // Create metadata import if not present
    const metadataImport = !hasMetadataImport ? 
      `import { Metadata } from 'next';\n` : '';
    
    // Create the generateMetadata function
    let generateMetadataFunction = `
export async function generateMetadata(
  { params${params.length ? `: { ${params.join(', ')} }` : ''} }: { 
    params: { ${params.map(p => `${p}: string`).join('; ')} } 
  }
): Promise<Metadata> {
  // You might fetch data here for dynamic metadata
  // const data = await fetchData(params.${params[0] || 'slug'});
  
  // Get the page name from the URL parameter
  const pageName = params.${params[0] || 'slug'};
  const formattedPageName = pageName
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
    
  return {
    title: \`\${formattedPageName} | UNEOM Saudi Arabia\`,
    description: \`Explore our premium \${formattedPageName} collection. UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.\`,
    keywords: [
      pageName.toLowerCase(),
      'uniform',
      'professional clothing',
      'UNEOM',
      'Saudi Arabia',
      'workwear',
      'corporate attire'
    ],
    openGraph: {
      title: \`\${formattedPageName} | UNEOM Saudi Arabia\`,
      description: \`Explore our premium \${formattedPageName} collection. UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.\`,
      url: \`https://uneom.com/shop/\${pageName}\`,
      siteName: 'UNEOM',
      images: [
        {
          url: \`https://uneom.com/images/products/\${pageName.replace(/\\//g, '-')}.webp\`,
          width: 1200,
          height: 630,
          alt: \`\${formattedPageName} - UNEOM Saudi Arabia\`
        }
      ],
      locale: 'en_US'
    }
  };
}
`;

    // Check if we need to add Arabic support
    const isArabic = filePath.includes('/ar/');
    
    if (isArabic) {
      generateMetadataFunction = `
export async function generateMetadata(
  { params${params.length ? `: { ${params.join(', ')} }` : ''} }: { 
    params: { ${params.map(p => `${p}: string`).join('; ')} } 
  }
): Promise<Metadata> {
  // You might fetch data here for dynamic metadata
  // const data = await fetchData(params.${params[0] || 'slug'});
  
  // Get the page name from the URL parameter
  const pageName = params.${params[0] || 'slug'};
  const formattedPageName = pageName
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
    
  return {
    title: \`\${formattedPageName} | يونيوم المملكة العربية السعودية\`,
    description: \`استكشف مجموعتنا المتميزة من \${formattedPageName}. توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.\`,
    keywords: [
      pageName.toLowerCase(),
      'زي موحد',
      'ملابس مهنية',
      'يونيوم',
      'المملكة العربية السعودية',
      'ملابس العمل',
      'الزي المؤسسي'
    ],
    openGraph: {
      title: \`\${formattedPageName} | يونيوم المملكة العربية السعودية\`,
      description: \`استكشف مجموعتنا المتميزة من \${formattedPageName}. توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.\`,
      url: \`https://uneom.com/ar/shop/\${pageName}\`,
      siteName: 'UNEOM',
      images: [
        {
          url: \`https://uneom.com/images/products/\${pageName.replace(/\\//g, '-')}.webp\`,
          width: 1200,
          height: 630,
          alt: \`\${formattedPageName} - يونيوم المملكة العربية السعودية\`
        }
      ],
      locale: 'ar'
    }
  };
}
`;
    }
    
    // Update the file
    const updatedContent = content.slice(0, insertPosition) + 
                           (hasMetadataImport ? '' : metadataImport) + 
                           generateMetadataFunction +
                           content.slice(insertPosition);
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return true;
    
  } catch (error) {
    console.error(`Error generating metadata for ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Scanning for dynamic pages without metadata...');
  
  // Find all dynamic page.tsx files
  const pageFiles = glob.sync('**/page.tsx', { 
    cwd: APP_DIR, 
    absolute: true 
  });
  
  const dynamicPages = pageFiles.filter(isDynamicPage);
  const pagesWithoutMetadata = dynamicPages.filter(page => !hasMetadata(page));
  
  console.log(`Found ${dynamicPages.length} dynamic pages, ${pagesWithoutMetadata.length} without metadata.`);
  
  // Add generateMetadata functions
  let successCount = 0;
  
  for (const page of pagesWithoutMetadata) {
    console.log(`Adding generateMetadata to ${path.relative(process.cwd(), page)}`);
    const success = generateMetadataFunction(page);
    
    if (success) {
      successCount++;
      console.log(`  ✅ Successfully added generateMetadata to ${path.relative(process.cwd(), page)}`);
    } else {
      console.error(`  ❌ Failed to add generateMetadata to ${path.relative(process.cwd(), page)}`);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`  • Found ${dynamicPages.length} dynamic pages`);
  console.log(`  • ${pagesWithoutMetadata.length} pages were missing metadata`);
  console.log(`  • Successfully added generateMetadata to ${successCount} pages`);
  
  if (successCount === pagesWithoutMetadata.length) {
    console.log('\n🎉 All dynamic pages now have metadata!');
    return true;
  } else {
    console.log('\n⚠️ Some dynamic pages could not be updated. Please check the errors above.');
    return false;
  }
}

// Run the script
main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
}); 