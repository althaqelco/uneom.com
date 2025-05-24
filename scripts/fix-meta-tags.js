#!/usr/bin/env node

/**
 * This script checks and fixes canonical and hreflang tags across the site
 * It ensures proper SEO for bilingual (EN/AR) content
 * Usage: node scripts/fix-meta-tags.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = path.resolve(process.cwd(), 'src');
const APP_DIR = path.resolve(SRC_DIR, 'app');
const COMPONENTS_DIR = path.resolve(SRC_DIR, 'components');

/**
 * Checks if a file contains a Metadata component or SEO component
 */
function findSeoComponent(content) {
  // Check for import of SEO component
  const seoImport = content.match(/import\s+(?:{\s*)?([A-Za-z0-9]+)(?:\s*})?\s+from\s+['"].*?(?:SEO|seo|meta).*?['"]/);
  
  // Check for usage of SEO component
  const seoUsage = seoImport ? new RegExp(`<${seoImport[1]}[^>]*>`, 'g').test(content) : false;
  
  // Check for metadata export
  const hasMetadata = /export\s+const\s+metadata\s*=/.test(content) || 
                     /export\s+async\s+function\s+generateMetadata/.test(content);
  
  return {
    hasSeoComponent: seoUsage,
    seoComponentName: seoImport ? seoImport[1] : null,
    hasMetadata: hasMetadata
  };
}

/**
 * Locates and analyzes the SEO component in the project
 */
async function findMainSeoComponent() {
  // Common locations for SEO components
  const potentialLocations = [
    'components/SEO.tsx',
    'components/SEO.jsx',
    'components/seo.tsx',
    'components/seo.jsx',
    'components/Seo.tsx',
    'components/Seo.jsx',
    'components/Meta.tsx',
    'components/Meta.jsx',
    'components/meta/index.tsx',
    'components/seo/index.tsx',
    'components/common/SEO.tsx',
    'components/common/Seo.tsx',
    'lib/meta.tsx',
    'lib/seo.tsx'
  ];
  
  // Search for files in SRC_DIR
  let seoFiles = [];
  for (const location of potentialLocations) {
    const fullPath = path.resolve(SRC_DIR, location);
    if (fs.existsSync(fullPath)) {
      seoFiles.push(fullPath);
    }
  }
  
  // If no files found in predefined locations, search for files with likely SEO component names
  if (seoFiles.length === 0) {
    const allComponentFiles = glob.sync('**/*.(tsx|jsx)', { 
      cwd: COMPONENTS_DIR, 
      absolute: true 
    });
    
    for (const file of allComponentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('canonical') && (content.includes('hreflang') || content.includes('alternate'))) {
        seoFiles.push(file);
      }
    }
  }
  
  return seoFiles;
}

/**
 * Analyzes the SEO component to check how canonical and hreflang tags are implemented
 */
function analyzeSeoComponent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const issues = [];
  
  // Check for canonical implementation
  const hasCanonical = content.includes('rel="canonical"');
  if (!hasCanonical) {
    issues.push({
      type: 'missing-canonical',
      description: 'SEO component doesn\'t implement canonical tags',
      fix: 'Add canonical tag implementation to the SEO component'
    });
  }
  
  // Check for hreflang implementation
  const hasHreflang = content.includes('hreflang');
  if (!hasHreflang) {
    issues.push({
      type: 'missing-hreflang',
      description: 'SEO component doesn\'t implement hreflang tags',
      fix: 'Add hreflang tag implementation for EN/AR versions to the SEO component'
    });
  }
  
  // Check if the component uses absolute URLs
  const usesAbsoluteUrls = content.includes('https://') || content.includes('http://');
  if (!usesAbsoluteUrls) {
    issues.push({
      type: 'relative-urls',
      description: 'SEO component may be using relative URLs instead of absolute URLs',
      fix: 'Ensure canonical and hreflang tags use absolute URLs (https://uneom.com/)'
    });
  }
  
  // Check for x-default implementation
  const hasXDefault = content.includes('hreflang="x-default"');
  if (!hasXDefault && hasHreflang) {
    issues.push({
      type: 'missing-x-default',
      description: 'SEO component implements hreflang but doesn\'t include x-default tag',
      fix: 'Add hreflang="x-default" tag pointing to the English version'
    });
  }
  
  return {
    filePath,
    hasCanonical,
    hasHreflang,
    hasXDefault,
    usesAbsoluteUrls,
    issues
  };
}

/**
 * Fixes the SEO component to implement proper canonical and hreflang tags
 */
function fixSeoComponent(filePath, analysis) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // If there are no issues, no need to fix
  if (analysis.issues.length === 0) {
    return {
      modified: false,
      content
    };
  }
  
  console.log(`Fixing SEO component at ${filePath}...`);
  
  // Create backup
  const backupPath = `${filePath}.backup`;
  fs.writeFileSync(backupPath, content, 'utf8');
  console.log(`Created backup at ${backupPath}`);
  
  let updatedContent = content;
  
  // Check where to insert the fixes
  const headOpenPos = updatedContent.indexOf('<head');
  const headClosePos = updatedContent.indexOf('</head>');
  const nextHeadOpenPos = updatedContent.indexOf('<Head');
  const nextHeadClosePos = updatedContent.indexOf('</Head>');
  
  // Determine where to add the tags
  let insertPos;
  
  if (headOpenPos !== -1 && headClosePos !== -1) {
    insertPos = headClosePos;
  } else if (nextHeadOpenPos !== -1 && nextHeadClosePos !== -1) {
    insertPos = nextHeadClosePos;
  } else {
    // No Head component found, look for return statement
    const returnMatch = updatedContent.match(/return\s*\(/);
    if (returnMatch) {
      // Find closing parenthesis or jsx tag
      const returnStartPos = returnMatch.index + returnMatch[0].length;
      const firstTagMatch = updatedContent.substring(returnStartPos).match(/>\s*</);
      
      if (firstTagMatch) {
        insertPos = returnStartPos + firstTagMatch.index + 1;
      } else {
        console.log(`⚠️ Could not determine insertion point in ${filePath}`);
        return {
          modified: false,
          content
        };
      }
    } else {
      console.log(`⚠️ Could not find return statement in ${filePath}`);
      return {
        modified: false,
        content
      };
    }
  }
  
  // Prepare the fix based on the component structure
  const canonicalAndHreflangImplementation = `
  {/* Canonical Tag */}
  <link 
    rel="canonical" 
    href={\`https://uneom.com\${locale === 'ar' ? '/ar' : ''}\${path}/\`} 
  />
  
  {/* Hreflang Tags */}
  <link 
    rel="alternate" 
    hreflang="en-SA" 
    href={\`https://uneom.com\${path}/\`} 
  />
  <link 
    rel="alternate" 
    hreflang="ar-SA" 
    href={\`https://uneom.com/ar\${path}/\`} 
  />
  <link 
    rel="alternate" 
    hreflang="x-default" 
    href={\`https://uneom.com\${path}/\`} 
  />
`;

  // Insert the implementation
  updatedContent = 
    updatedContent.substring(0, insertPos) + 
    canonicalAndHreflangImplementation + 
    updatedContent.substring(insertPos);
  
  // Check for locale and path props
  if (!updatedContent.includes('locale') || !updatedContent.includes('path')) {
    // Add locale and path props if needed
    const componentMatch = updatedContent.match(/function\s+([A-Za-z0-9_]+)\s*\(\s*(\{[^}]*\}|\w+)/);
    
    if (componentMatch) {
      const componentName = componentMatch[1];
      const propsPattern = componentMatch[2];
      
      if (propsPattern.startsWith('{')) {
        // Add to existing destructured props
        const updatedProps = propsPattern.replace('}', ', locale = "en", path = "" }');
        updatedContent = updatedContent.replace(
          new RegExp(`function\\s+${componentName}\\s*\\(\\s*\\{[^}]*\\}`),
          `function ${componentName}({ locale = "en", path = "", }`
        );
      } else {
        // Replace non-destructured props with destructured version
        updatedContent = updatedContent.replace(
          new RegExp(`function\\s+${componentName}\\s*\\(\\s*${propsPattern}`),
          `function ${componentName}({ locale = "en", path = "", ...props }`
        );
        
        // Also replace usage of the props variable
        updatedContent = updatedContent.replace(
          new RegExp(propsPattern, 'g'),
          'props'
        );
      }
    } else {
      console.log(`⚠️ Could not find component definition in ${filePath}`);
    }
  }
  
  return {
    modified: true,
    content: updatedContent
  };
}

/**
 * Checks for hreflang and canonical implementation in page files
 */
async function checkPageFiles() {
  const pageFiles = glob.sync('**/page.tsx', { 
    cwd: APP_DIR, 
    absolute: true 
  });
  
  console.log(`Found ${pageFiles.length} page files to analyze.`);
  
  const results = {
    total: pageFiles.length,
    withSeoComponent: 0,
    withCanonical: 0,
    withHreflang: 0,
    withoutSeo: [],
  };
  
  for (const filePath of pageFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip client components (those shouldn't handle SEO)
    if (content.includes("'use client'") || content.includes('"use client"')) {
      continue;
    }
    
    const seoAnalysis = findSeoComponent(content);
    
    if (seoAnalysis.hasSeoComponent || seoAnalysis.hasMetadata) {
      results.withSeoComponent++;
      
      // Check for canonical and hreflang
      if (content.includes('rel="canonical"') || content.includes('canonical')) {
        results.withCanonical++;
      }
      
      if (content.includes('hreflang') || content.includes('alternate')) {
        results.withHreflang++;
      }
    } else {
      // Page has no SEO component or metadata
      results.withoutSeo.push(filePath);
    }
  }
  
  return results;
}

/**
 * Adds a metadata object with canonicals and hreflangs to page files that need it
 */
function addMetadataToPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has metadata or client directive
  if (content.includes('export const metadata') || 
      content.includes('export async function generateMetadata') ||
      content.includes("'use client'") || 
      content.includes('"use client"')) {
    return {
      modified: false,
      content
    };
  }
  
  console.log(`Adding metadata to ${filePath}...`);
  
  // Parse the page path from the file path
  const relativePath = filePath.replace(APP_DIR, '').replace(/\\/g, '/').replace('/page.tsx', '');
  const isArabic = relativePath.startsWith('/ar');
  const pagePath = isArabic ? relativePath.replace('/ar', '') : relativePath;
  
  // Determine a title from the path
  const pageTitle = pagePath
    .split('/')
    .filter(Boolean)
    .map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        return 'Details';
      }
      return segment.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    })
    .join(' | ');
  
  // Prepare the metadata object with canonicals and hreflangs
  const metadataObject = `
export const metadata = {
  title: '${pageTitle} | UNEOM Saudi Arabia',
  description: 'Professional ${pageTitle} solutions for businesses in Saudi Arabia. High-quality, customizable options from UNEOM, the leading provider of uniforms and workwear.',
  alternates: {
    canonical: 'https://uneom.com${isArabic ? '/ar' : ''}${pagePath}/',
    languages: {
      'en-SA': 'https://uneom.com${pagePath}/',
      'ar-SA': 'https://uneom.com/ar${pagePath}/',
    }
  },
  openGraph: {
    url: 'https://uneom.com${isArabic ? '/ar' : ''}${pagePath}/',
    locale: '${isArabic ? 'ar_SA' : 'en_US'}',
    alternateLocale: '${isArabic ? 'en_US' : 'ar_SA'}',
  }
};
`;
  
  // Find a good place to insert the metadata
  const importEndPos = content.lastIndexOf('import');
  let insertPos = 0;
  
  if (importEndPos !== -1) {
    // Find the end of the last import statement
    const importEnd = content.indexOf('\n', importEndPos);
    if (importEnd !== -1) {
      insertPos = importEnd + 1;
    }
  }
  
  // Insert the metadata object
  const updatedContent = 
    content.substring(0, insertPos) + 
    metadataObject + 
    content.substring(insertPos);
  
  return {
    modified: true,
    content: updatedContent
  };
}

/**
 * Creates a global helper for next.js 13 metadata with canonical and hreflang
 */
function createMetadataHelper() {
  const helperDir = path.resolve(SRC_DIR, 'lib');
  const helperPath = path.resolve(helperDir, 'metadata-helper.js');
  
  // Ensure the directory exists
  if (!fs.existsSync(helperDir)) {
    fs.mkdirSync(helperDir, { recursive: true });
  }
  
  // Check if the helper already exists
  if (fs.existsSync(helperPath)) {
    console.log(`Metadata helper already exists at ${helperPath}`);
    return false;
  }
  
  console.log(`Creating metadata helper at ${helperPath}...`);
  
  const helperContent = `/**
 * Metadata helper for Next.js app router
 * Handles canonical URLs and hreflang tags
 */

/**
 * Creates proper metadata with canonical and hreflang tags
 * 
 * @param {Object} options - Metadata options
 * @param {string} options.path - The page path without locale (e.g., /about)
 * @param {string} options.locale - The current locale (en or ar)
 * @param {string} options.title - The page title
 * @param {string} options.description - The page description
 * @param {string[]} options.keywords - Keywords for the page
 * @param {Object} options.openGraph - Additional Open Graph properties
 * @returns {Object} Metadata object with canonical and hreflang
 */
export function createMetadata({
  path,
  locale = 'en',
  title,
  description,
  keywords = [],
  openGraph = {},
}) {
  // Ensure path starts with / and doesn't end with / (we'll add it)
  const normalizedPath = path.startsWith('/') ? path : \`/\${path}\`;
  const cleanPath = normalizedPath.endsWith('/') 
    ? normalizedPath.slice(0, -1) 
    : normalizedPath;

  // Base URL
  const baseUrl = 'https://uneom.com';
  
  // Current page URL based on locale
  const currentUrl = locale === 'ar'
    ? \`\${baseUrl}/ar\${cleanPath}/\`
    : \`\${baseUrl}\${cleanPath}/\`;
    
  // Alternate language URL
  const alternateUrl = locale === 'ar'
    ? \`\${baseUrl}\${cleanPath}/\`
    : \`\${baseUrl}/ar\${cleanPath}/\`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-SA': \`\${baseUrl}\${cleanPath}/\`,
        'ar-SA': \`\${baseUrl}/ar\${cleanPath}/\`,
      }
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
      ...openGraph,
    },
  };
}

/**
 * Generates dynamic metadata for pages with URL parameters
 * 
 * @param {Object} options - Metadata options
 * @param {Object} options.params - URL parameters from Next.js
 * @param {string} options.locale - The current locale (en or ar)
 * @param {Function} options.getTitle - Function to generate title based on params
 * @param {Function} options.getDescription - Function to generate description based on params
 * @param {Function} options.getPath - Function to generate the path for canonical URL
 * @returns {Object} Metadata object with canonical and hreflang
 */
export async function generateDynamicMetadata({
  params,
  locale = 'en',
  getTitle,
  getDescription,
  getPath,
  getKeywords = () => [],
  getOpenGraph = () => ({}),
}) {
  const title = await getTitle(params, locale);
  const description = await getDescription(params, locale);
  const path = await getPath(params);
  const keywords = await getKeywords(params, locale);
  const openGraph = await getOpenGraph(params, locale);

  return createMetadata({
    path,
    locale,
    title,
    description,
    keywords,
    openGraph,
  });
}
`;
  
  // Write the helper file
  fs.writeFileSync(helperPath, helperContent, 'utf8');
  console.log(`✅ Created metadata helper at ${helperPath}`);
  
  return true;
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Checking for SEO components in the project...');
  
  // Create the metadata helper
  const helperCreated = createMetadataHelper();
  if (helperCreated) {
    console.log('✅ Created metadata helper for Next.js app router');
  }
  
  // Find and analyze the main SEO component
  const seoFiles = await findMainSeoComponent();
  
  if (seoFiles.length === 0) {
    console.log('⚠️ No SEO component found in the project.');
    console.log('Will focus on adding metadata to page files directly.');
  } else {
    console.log(`Found ${seoFiles.length} potential SEO component files:`);
    
    for (const filePath of seoFiles) {
      console.log(`- ${filePath}`);
      const analysis = analyzeSeoComponent(filePath);
      
      if (analysis.issues.length > 0) {
        console.log(`  ⚠️ Found ${analysis.issues.length} issues in this SEO component:`);
        analysis.issues.forEach((issue, i) => {
          console.log(`    ${i + 1}. ${issue.description}`);
          console.log(`       Fix: ${issue.fix}`);
        });
        
        // Fix the SEO component
        const result = fixSeoComponent(filePath, analysis);
        if (result.modified) {
          fs.writeFileSync(filePath, result.content, 'utf8');
          console.log(`  ✅ Fixed SEO component at ${filePath}`);
        }
      } else {
        console.log(`  ✅ No issues found in this SEO component`);
      }
    }
  }
  
  // Check all page files for SEO implementation
  console.log('\n🔍 Analyzing page files for SEO implementation...');
  const pageResults = await checkPageFiles();
  
  console.log('\n📊 Page Analysis Results:');
  console.log(`  • Total pages analyzed: ${pageResults.total}`);
  console.log(`  • Pages with SEO component or metadata: ${pageResults.withSeoComponent}`);
  console.log(`  • Pages with canonical tag: ${pageResults.withCanonical}`);
  console.log(`  • Pages with hreflang tags: ${pageResults.withHreflang}`);
  console.log(`  • Pages without SEO: ${pageResults.withoutSeo.length}`);
  
  // Fix pages without SEO
  if (pageResults.withoutSeo.length > 0) {
    console.log('\n🛠️ Adding metadata to pages without SEO...');
    
    let fixedCount = 0;
    
    for (const filePath of pageResults.withoutSeo) {
      const result = addMetadataToPage(filePath);
      
      if (result.modified) {
        fs.writeFileSync(filePath, result.content, 'utf8');
        console.log(`  ✅ Added metadata to ${filePath}`);
        fixedCount++;
      }
    }
    
    console.log(`\n✅ Added metadata to ${fixedCount} pages`);
  }
  
  console.log('\n📋 Next steps:');
  console.log('1. Import and use the metadata helper in your page files:');
  console.log('   ```');
  console.log('   import { createMetadata } from "@/lib/metadata-helper";');
  console.log('   ');
  console.log('   export const metadata = createMetadata({');
  console.log('     path: "/about",');
  console.log('     locale: "en", // or "ar"');
  console.log('     title: "About Us | UNEOM Saudi Arabia",');
  console.log('     description: "Learn about UNEOM, the leading...",');
  console.log('     keywords: ["uniforms", "Saudi Arabia", "workwear"],');
  console.log('   });');
  console.log('   ```');
  console.log('2. For dynamic pages, use generateDynamicMetadata function');
  console.log('3. Test canonical and hreflang implementation with browser devtools');
  
  return true;
}

// Run the script
main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
}); 