/**
 * Custom build script for Vercel deployment
 * This script:
 * 1. Checks if we're in a Vercel environment
 * 2. Fixes SWC binary issues if needed
 * 3. Ensures fallback images and CSS files exist
 * 4. Runs the Next.js build
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Log with timestamp
const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
};

// Check if we're in a Vercel environment
const isVercel = process.env.VERCEL === '1';
log(`Running in Vercel environment: ${isVercel ? 'Yes' : 'No'}`);

// Log Node.js version
log(`Node.js version: ${process.version}`);

// Check if fix-vercel-swc.js exists
const fixSwcPath = path.join(__dirname, 'fix-vercel-swc.js');
const hasFixer = fs.existsSync(fixSwcPath);
log(`SWC fixer script exists: ${hasFixer ? 'Yes' : 'No'}`);

// Check if ensure-fallbacks.js exists
const fallbacksPath = path.join(__dirname, 'ensure-fallbacks.js');
const hasFallbacks = fs.existsSync(fallbacksPath);
log(`Fallbacks script exists: ${hasFallbacks ? 'Yes' : 'No'}`);

// Check if next.config.mjs exists
const nextConfigPath = path.join(process.cwd(), 'next.config.mjs');
const hasNextConfig = fs.existsSync(nextConfigPath);
log(`Next.js config exists: ${hasNextConfig ? 'Yes' : 'No'}`);

try {
  // Step 1: Fix SWC binary issues if we're in Vercel
  if (isVercel && hasFixer) {
    log('Fixing SWC binary issues for Vercel deployment...');
    execSync('node scripts/fix-vercel-swc.js', { stdio: 'inherit' });
    log('SWC binary fix completed');
  }

  // Step 2: Ensure fallback images and CSS files exist
  if (hasFallbacks) {
    log('Creating fallback images and CSS files...');
    execSync('node scripts/ensure-fallbacks.js', { stdio: 'inherit' });
    log('Fallback assets created successfully');
  }

  // Step 3: Run the Next.js build
  log('Starting Next.js build...');
  execSync('next build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: '1'
    }
  });
  log('Next.js build completed successfully');

} catch (error) {
  log(`Error during build process: ${error.message}`);
  process.exit(1);
}

log('Build process completed successfully'); 