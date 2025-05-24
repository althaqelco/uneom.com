#!/usr/bin/env node

/**
 * This script runs all SEO fix scripts in the correct order
 * It coordinates fixes for various SEO issues discovered by site crawls
 * Usage: node scripts/fix-all-seo.js
 */

const { execSync } = require('child_process');
const chalk = require('chalk');

console.log(chalk.blue('🔍 Running comprehensive SEO fixes for UNEOM website...\n'));

const scripts = [
  {
    name: 'Fix Client/Metadata Conflicts',
    command: 'npm run fix:client-metadata-conflicts',
    description: 'Resolves conflicts between client components and metadata exports'
  },
  {
    name: 'Add Missing Metadata',
    command: 'npm run add:missing-metadata',
    description: 'Adds proper metadata to pages missing complete SEO information'
  },
  {
    name: 'Fix Duplicate Titles',
    command: 'npm run fix:duplicate-titles',
    description: 'Ensures each page has a unique, descriptive title'
  },
  {
    name: 'Fix Missing H1 Tags',
    command: 'npm run fix:missing-h1',
    description: 'Adds semantically correct H1 tags to pages missing them'
  },
  {
    name: 'Fix Low Word Count',
    command: 'npm run fix:word-count',
    description: 'Enhances content on pages with insufficient text'
  },
  {
    name: 'Fix Robots.txt',
    command: 'npm run fix:robots-txt',
    description: 'Updates robots.txt to ensure proper crawling directives'
  },
  {
    name: 'Fix Meta Tags',
    command: 'npm run fix:meta-tags',
    description: 'Adds canonical and hreflang tags for improved indexing'
  },
  {
    name: 'Fix Trailing Slashes',
    command: 'npm run fix:trailing-slashes',
    description: 'Ensures consistent URL trailing slash patterns'
  }
];

// Run each script in sequence
for (let i = 0; i < scripts.length; i++) {
  const script = scripts[i];
  
  console.log(chalk.blue(`\n[${i + 1}/${scripts.length}] ${script.name}`));
  console.log(chalk.gray(`Description: ${script.description}`));
  console.log(chalk.gray(`Running: ${script.command}`));
  
  try {
    console.log(chalk.gray('-------------- Script Output --------------'));
    execSync(script.command, { stdio: 'inherit' });
    console.log(chalk.gray('-------------------------------------------'));
    console.log(chalk.green(`✓ Completed: ${script.name}`));
  } catch (error) {
    console.log(chalk.gray('-------------------------------------------'));
    console.log(chalk.red(`✗ Error running ${script.name}: ${error.message}`));
    console.log(chalk.yellow('Continuing with next script...'));
  }
}

console.log(chalk.blue('\n🎉 SEO fix process completed!'));
console.log(chalk.blue('Next steps:'));
console.log(chalk.blue('1. Run a fresh crawl to verify fixes'));
console.log(chalk.blue('2. Check for any remaining SEO issues with npm run check:seo'));
console.log(chalk.blue('3. Review content changes, especially on Arabic pages'));
console.log(chalk.blue('4. Look for any warnings in script outputs that may need manual attention'));