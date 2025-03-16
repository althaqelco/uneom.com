// Script to check for missing pages based on the navigation structure
const fs = require('fs');
const path = require('path');

// Define the base paths for English and Arabic versions
const APP_DIR = path.join(__dirname, 'src', 'app');
const ENGLISH_BASE = APP_DIR;
const ARABIC_BASE = path.join(APP_DIR, 'ar');

// List of all expected paths based on the navigation
const expectedPaths = [
  // Industries
  { path: '/industries', arabicPath: '/ar/industries' },
  { path: '/industries/healthcare', arabicPath: '/ar/industries/healthcare' },
  { path: '/industries/aviation', arabicPath: '/ar/industries/aviation' },
  { path: '/industries/hospitality', arabicPath: '/ar/industries/hospitality' },
  { path: '/industries/corporate', arabicPath: '/ar/industries/corporate' },
  { path: '/industries/education', arabicPath: '/ar/industries/education' },
  { path: '/industries/manufacturing', arabicPath: '/ar/industries/manufacturing' },
  { path: '/industries/security', arabicPath: '/ar/industries/security' },
  { path: '/industries/factory-industry', arabicPath: '/ar/industries/factory-industry' },
  { path: '/industries/retail-shops', arabicPath: '/ar/industries/retail-shops' },
  { path: '/industries/supply-manufacturing', arabicPath: '/ar/industries/supply-manufacturing' },
  
  // Services
  { path: '/services', arabicPath: '/ar/services' },
  { path: '/services/program-management', arabicPath: '/ar/services/program-management' },
  { path: '/services/custom-design', arabicPath: '/ar/services/custom-design' },
  { path: '/services/bulk-ordering', arabicPath: '/ar/services/bulk-ordering' },
  { path: '/services/measurement-services', arabicPath: '/ar/services/measurement-services' },
  { path: '/services/uniform-policies', arabicPath: '/ar/services/uniform-policies' },
  
  // Resources
  { path: '/resources', arabicPath: '/ar/resources' },
  { path: '/resources/fabric-guide', arabicPath: '/ar/resources/fabric-guide' },
  { path: '/resources/size-guide', arabicPath: '/ar/resources/size-guide' },
  { path: '/resources/procurement-guide', arabicPath: '/ar/resources/procurement-guide' },
  { path: '/resources/policy-templates', arabicPath: '/ar/resources/policy-templates' },
  { path: '/blog', arabicPath: '/ar/blog' },
  
  // Main pages
  { path: '/about', arabicPath: '/ar/about' },
  { path: '/contact', arabicPath: '/ar/contact' },
  { path: '/shop', arabicPath: '/ar/shop' },
  { path: '/quote', arabicPath: '/ar/quote' },
  
  // Shop categories
  { path: '/shop/medical-scrubs', arabicPath: '/ar/shop/medical-scrubs' },
  { path: '/shop/industrial-uniforms', arabicPath: '/ar/shop/industrial-uniforms' },
  { path: '/shop/aviation-uniforms', arabicPath: '/ar/shop/aviation-uniforms' },
  { path: '/shop/healthcare-accessories', arabicPath: '/ar/shop/healthcare-accessories' },
  { path: '/shop/hospitality-attire', arabicPath: '/ar/shop/hospitality-attire' },
  { path: '/shop/corporate', arabicPath: '/ar/shop/corporate' },
  { path: '/shop/healthcare', arabicPath: '/ar/shop/healthcare' },
  { path: '/shop/manufacturing-attire', arabicPath: '/ar/shop/manufacturing-attire' },
  { path: '/shop/education-uniforms', arabicPath: '/ar/shop/education-uniforms' },
  { path: '/shop/security-uniforms', arabicPath: '/ar/shop/security-uniforms' },
  { path: '/shop/workplace-uniforms', arabicPath: '/ar/shop/workplace-uniforms' },
  { path: '/shop/corporate-workwear', arabicPath: '/ar/shop/corporate-workwear' },
  { path: '/shop/culinary-uniforms', arabicPath: '/ar/shop/culinary-uniforms' }
];

// Function to check if a page exists
function pageExists(pagePath) {
  // Convert URL path to file system path
  const normalizedPath = pagePath === '/' ? '' : pagePath;
  const filePath = path.join(APP_DIR, normalizedPath, 'page.tsx');
  return fs.existsSync(filePath);
}

// Function to check if a directory exists
function directoryExists(dirPath) {
  // Convert URL path to file system path
  const normalizedPath = dirPath === '/' ? '' : dirPath;
  const dirFullPath = path.join(APP_DIR, normalizedPath);
  return fs.existsSync(dirFullPath) && fs.statSync(dirFullPath).isDirectory();
}

// Check for missing pages
const missingPages = [];

expectedPaths.forEach(({ path: englishPath, arabicPath }) => {
  // Check English path
  if (!pageExists(englishPath) && directoryExists(englishPath)) {
    missingPages.push({ path: englishPath, language: 'English' });
  }
  
  // Check Arabic path
  // Remove the '/ar' prefix for file system path
  const arabicFsPath = arabicPath.replace('/ar', '/ar');
  if (!pageExists(arabicFsPath) && directoryExists(arabicFsPath)) {
    missingPages.push({ path: arabicPath, language: 'Arabic' });
  }
});

// Print results
console.log('Missing Pages Check Results:');
console.log('===========================');

if (missingPages.length === 0) {
  console.log('No missing pages found. All expected pages exist.');
} else {
  console.log(`Found ${missingPages.length} missing pages:`);
  missingPages.forEach(({ path, language }) => {
    console.log(`- [${language}] ${path}`);
  });
} 