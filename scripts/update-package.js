/**
 * Update package.json with SEO verification scripts
 * 
 * This script adds npm scripts for running the SEO verification tools.
 * 
 * Usage: node scripts/update-package.js
 */

const fs = require('fs');
const path = require('path');

// Path to package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');

// Scripts to add
const scriptsToAdd = {
  "verify-seo": "node scripts/verify-seo.js",
  "fix-word-count": "node scripts/fix-low-word-count.js",
  "install-seo-tools": "node scripts/install-seo-tools.js"
};

try {
  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Initialize scripts object if it doesn't exist
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  
  // Add scripts
  let scriptsAdded = 0;
  for (const [name, command] of Object.entries(scriptsToAdd)) {
    if (!packageJson.scripts[name]) {
      packageJson.scripts[name] = command;
      scriptsAdded++;
    }
  }
  
  if (scriptsAdded > 0) {
    // Write updated package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Added ${scriptsAdded} scripts to package.json`);
    console.log('You can now run the following commands:');
    console.log('- npm run install-seo-tools - to install dependencies');
    console.log('- npm run verify-seo - to check SEO implementation');
    console.log('- npm run fix-word-count - to diagnose and fix low word count issues');
  } else {
    console.log('All scripts already exist in package.json');
  }
} catch (error) {
  console.error('Error updating package.json:', error.message);
  process.exit(1);
} 