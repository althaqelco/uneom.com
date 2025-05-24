/**
 * fix-robots-txt.js
 * 
 * This script fixes common robots.txt issues:
 * 1. Ensures search engines can access essential JS/CSS resources
 * 2. Adds specific Allow rules for necessary Next.js static files
 * 3. Verifies sitemap entries
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Path to robots.txt
const ROBOTS_PATH = path.join(process.cwd(), 'public', 'robots.txt');

// Next.js static paths that should be allowed
const ESSENTIAL_STATIC_PATHS = [
  '/_next/static/css/',
  '/_next/static/chunks/',
  '/_next/static/media/',
  '/_next/static/images/',
  '/_next/image',
];

// Read robots.txt
function readRobotsTxt() {
  try {
    return fs.readFileSync(ROBOTS_PATH, 'utf8');
  } catch (error) {
    console.error(chalk.red(`Error reading robots.txt: ${error.message}`));
    return null;
  }
}

// Parse robots.txt into blocks
function parseRobotsTxt(content) {
  // Split by blank lines to separate user-agent blocks
  const blocks = content.split(/\n\s*\n/).filter(Boolean);
  
  // Parse each block
  return blocks.map(block => {
    const lines = block.split('\n').filter(Boolean);
    const directives = [];
    let userAgent = '';
    
    lines.forEach(line => {
      const parts = line.split(':').map(part => part.trim());
      if (parts.length >= 2) {
        const directive = parts[0].toLowerCase();
        const value = parts.slice(1).join(':').trim();
        
        if (directive === 'user-agent') {
          userAgent = value;
        } else {
          directives.push({ directive, value });
        }
      }
    });
    
    return { userAgent, directives };
  });
}

// Check if a block contains a directive
function hasDirective(block, directiveName, directiveValue) {
  return block.directives.some(d => 
    d.directive.toLowerCase() === directiveName.toLowerCase() && 
    (directiveValue ? d.value === directiveValue : true)
  );
}

// Fix robots.txt issues
function fixRobotsTxt(robotsTxt) {
  let blocks = parseRobotsTxt(robotsTxt);
  let hasChanges = false;
  let hasAllUserAgent = false;
  
  // Find or create the * user-agent block
  let allUserAgentBlock = blocks.find(block => block.userAgent === '*');
  
  if (!allUserAgentBlock) {
    // Create a new block for all user agents
    allUserAgentBlock = { userAgent: '*', directives: [] };
    blocks.push(allUserAgentBlock);
    hasChanges = true;
    console.log(chalk.green(`Added 'User-agent: *' block`));
  } else {
    hasAllUserAgent = true;
  }
  
  // Check for overly restrictive static disallow rule
  const hasOverlyRestrictiveStaticRule = allUserAgentBlock.directives.some(d => 
    d.directive === 'disallow' && (d.value === '/_next/' || d.value === '/_next')
  );
  
  // Remove overly restrictive /_next/ disallow if it exists
  if (hasOverlyRestrictiveStaticRule) {
    allUserAgentBlock.directives = allUserAgentBlock.directives.filter(d => 
      !(d.directive === 'disallow' && (d.value === '/_next/' || d.value === '/_next'))
    );
    hasChanges = true;
    console.log(chalk.yellow(`Removed overly restrictive 'Disallow: /_next/' rule`));
  }
  
  // Add specific allow rules for essential Next.js static files
  ESSENTIAL_STATIC_PATHS.forEach(path => {
    if (!hasDirective(allUserAgentBlock, 'allow', path)) {
      allUserAgentBlock.directives.push({
        directive: 'allow',
        value: path
      });
      hasChanges = true;
      console.log(chalk.green(`Added 'Allow: ${path}'`));
    }
  });
  
  // Check if sitemap is referenced
  const hasSitemap = blocks.some(block => 
    block.directives.some(d => d.directive === 'sitemap')
  );
  
  if (!hasSitemap) {
    // Add sitemap directive to the end
    blocks.push({
      userAgent: '',
      directives: [{
        directive: 'sitemap',
        value: 'https://uneom.sa/sitemap.xml'
      }]
    });
    hasChanges = true;
    console.log(chalk.green(`Added 'Sitemap: https://uneom.sa/sitemap.xml'`));
  }
  
  return { blocks, hasChanges };
}

// Generate robots.txt content from blocks
function generateRobotsTxt(blocks) {
  return blocks.map(block => {
    const lines = [];
    
    // Add user-agent line if it exists
    if (block.userAgent) {
      lines.push(`User-agent: ${block.userAgent}`);
    }
    
    // Add all directives
    block.directives.forEach(d => {
      lines.push(`${d.directive.charAt(0).toUpperCase() + d.directive.slice(1)}: ${d.value}`);
    });
    
    return lines.join('\n');
  }).join('\n\n');
}

// Save robots.txt
function saveRobotsTxt(content) {
  try {
    fs.writeFileSync(ROBOTS_PATH, content, 'utf8');
    return true;
  } catch (error) {
    console.error(chalk.red(`Error saving robots.txt: ${error.message}`));
    return false;
  }
}

// Main function
function main() {
  console.log(chalk.blue('🤖 Fixing robots.txt issues...'));
  
  // Read robots.txt
  const robotsTxt = readRobotsTxt();
  if (!robotsTxt) {
    console.error(chalk.red('Could not read robots.txt, aborting.'));
    process.exit(1);
  }
  
  // Fix robots.txt
  const { blocks, hasChanges } = fixRobotsTxt(robotsTxt);
  
  if (!hasChanges) {
    console.log(chalk.green('✅ No issues found in robots.txt'));
    return;
  }
  
  // Generate new robots.txt content
  const newRobotsTxt = generateRobotsTxt(blocks);
  
  // Save robots.txt
  if (saveRobotsTxt(newRobotsTxt)) {
    console.log(chalk.green('✅ Successfully fixed robots.txt'));
  } else {
    console.error(chalk.red('❌ Failed to save robots.txt'));
    process.exit(1);
  }
}

// Run main function
main();