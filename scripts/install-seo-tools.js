/**
 * Install SEO Tools Script
 * 
 * This script installs all necessary dependencies for the SEO fix scripts.
 * It ensures that required packages are available before running the scripts.
 * 
 * Usage: node scripts/install-seo-tools.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fix for chalk ESM
const chalkLog = {
  green: (text) => console.log(`\x1b[32m${text}\x1b[0m`),
  blue: (text) => console.log(`\x1b[34m${text}\x1b[0m`),
  yellow: (text) => console.log(`\x1b[33m${text}\x1b[0m`),
  red: (text) => console.log(`\x1b[31m${text}\x1b[0m`),
  gray: (text) => console.log(`\x1b[90m${text}\x1b[0m`)
};

// Define required packages
const requiredPackages = [
  'jsdom',
  'glob',
  'axios'
];

// Check if a package is installed
function isPackageInstalled(packageName) {
  try {
    // Try to require the package
    require.resolve(packageName);
    return true;
  } catch (e) {
    return false;
  }
}

// Install missing packages
function installMissingPackages() {
  chalkLog.blue('Checking for required packages...');
  
  const missingPackages = [];
  
  for (const pkg of requiredPackages) {
    if (!isPackageInstalled(pkg)) {
      missingPackages.push(pkg);
    }
  }
  
  if (missingPackages.length === 0) {
    chalkLog.green('All required packages are already installed.');
    return;
  }
  
  chalkLog.yellow(`Installing missing packages: ${missingPackages.join(', ')}`);
  
  try {
    execSync(`npm install --save-dev ${missingPackages.join(' ')}`, { stdio: 'inherit' });
    chalkLog.green('Packages installed successfully!');
  } catch (error) {
    chalkLog.red('Error installing packages:');
    console.error(error.message);
    chalkLog.yellow('You may need to install these packages manually:');
    console.log(`npm install --save-dev ${missingPackages.join(' ')}`);
    process.exit(1);
  }
}

// Update package.json with SEO scripts
function updatePackageJson() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    chalkLog.red('package.json not found.');
    return;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add scripts if they don't exist
    packageJson.scripts = packageJson.scripts || {};
    
    const seoScripts = {
      'seo:verify': 'node scripts/verify-seo.js',
      'seo:fix': 'node scripts/run-all-seo-fixes.js',
      'seo:headings': 'node scripts/fix-heading-structure.js',
      'seo:content': 'node scripts/enhance-content.js',
      'seo:structured-data': 'node scripts/add-structured-data.js',
      'seo:word-count': 'node scripts/fix-low-word-count.js'
    };
    
    let scriptsAdded = 0;
    
    for (const [key, value] of Object.entries(seoScripts)) {
      if (!packageJson.scripts[key]) {
        packageJson.scripts[key] = value;
        scriptsAdded++;
      }
    }
    
    if (scriptsAdded > 0) {
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      chalkLog.green(`Added ${scriptsAdded} SEO scripts to package.json.`);
    } else {
      chalkLog.blue('All SEO scripts already exist in package.json.');
    }
  } catch (error) {
    chalkLog.red('Error updating package.json:');
    console.error(error.message);
  }
}

// Create docs directory if it doesn't exist
function ensureDocsDirectory() {
  const docsDir = path.join(process.cwd(), 'docs');
  
  if (!fs.existsSync(docsDir)) {
    chalkLog.blue('Creating docs directory...');
    fs.mkdirSync(docsDir);
  }
}

// Create an EnhancedContent component if it doesn't exist
function createEnhancedContentComponent() {
  const componentDir = path.join(process.cwd(), 'src/components/seo');
  const componentPath = path.join(componentDir, 'EnhancedContent.tsx');
  
  if (!fs.existsSync(componentDir)) {
    chalkLog.blue('Creating SEO components directory...');
    fs.mkdirSync(componentDir, { recursive: true });
  }
  
  if (fs.existsSync(componentPath)) {
    chalkLog.blue('EnhancedContent component already exists.');
    return;
  }
  
  const componentContent = `/**
 * Enhanced Content Component
 * 
 * This component renders rich, semantic HTML content with proper heading structure
 * to improve SEO and content readability. It addresses the "Low Word Count / Text Ratio"
 * issue identified in the Screaming Frog report.
 */

import React from 'react';

interface EnhancedContentProps {
  /**
   * Main heading for the content section
   */
  heading?: string;
  
  /**
   * Text content or JSX element for the content
   */
  content: React.ReactNode;
  
  /**
   * Optional ID for the section
   */
  id?: string;
  
  /**
   * Optional className for styling
   */
  className?: string;
}

/**
 * EnhancedContent component for improving page content and SEO
 */
const EnhancedContent: React.FC<EnhancedContentProps> = ({
  heading,
  content,
  id,
  className = ''
}) => {
  return (
    <div className={\`enhanced-content \${className}\`} id={id}>
      {heading && <h2 className="text-2xl font-bold mb-4">{heading}</h2>}
      
      <div className="content prose prose-lg">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default EnhancedContent;
`;
  
  fs.writeFileSync(componentPath, componentContent);
  chalkLog.green('Created EnhancedContent component.');
}

// Main installation function
function installSEOTools() {
  chalkLog.green('Installing SEO tools and dependencies...');
  
  // Check for required Node version
  const nodeVersion = process.version;
  chalkLog.blue(`Node version: ${nodeVersion}`);
  
  // Install missing packages
  installMissingPackages();
  
  // Update package.json
  updatePackageJson();
  
  // Ensure docs directory exists
  ensureDocsDirectory();
  
  // Create enhanced content component
  createEnhancedContentComponent();
  
  chalkLog.green('\nSEO tools and dependencies installed successfully!');
  chalkLog.blue('You can now run the SEO scripts:');
  chalkLog.gray('  npm run seo:verify - Verify SEO implementation');
  chalkLog.gray('  npm run seo:fix - Run all SEO fixes');
}

// Run the installation
installSEOTools(); 