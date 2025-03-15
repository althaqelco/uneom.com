/**
 * Custom build script for Vercel deployment
 * This script:
 * 1. Checks if we're in a Vercel environment
 * 2. Fixes SWC binary issues if needed
 * 3. Ensures fallback images and CSS files exist
 * 4. Installs image optimization dependencies if needed
 * 5. Optimizes large images for better performance
 * 6. Runs the Next.js build
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

// Check if install-image-deps.js exists
const imageDepPath = path.join(__dirname, 'install-image-deps.js');
const hasImageDeps = fs.existsSync(imageDepPath);
log(`Image dependencies script exists: ${hasImageDeps ? 'Yes' : 'No'}`);

// Check if optimize-images.js exists
const optimizeImagesPath = path.join(__dirname, 'optimize-images.js');
const hasOptimizer = fs.existsSync(optimizeImagesPath);
log(`Image optimizer script exists: ${hasOptimizer ? 'Yes' : 'No'}`);

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

  // Step 3: Install image optimization dependencies if needed
  if (hasImageDeps) {
    log('Installing image optimization dependencies...');
    try {
      execSync('node scripts/install-image-deps.js', { stdio: 'inherit' });
      log('Image optimization dependencies installed successfully');
    } catch (error) {
      log(`Warning: Failed to install image optimization dependencies: ${error.message}`);
      // Continue with the build even if this step fails
    }
  }

  // Step 4: Optimize large images for better performance
  if (hasOptimizer) {
    log('Optimizing large images...');
    try {
      execSync('node scripts/optimize-images.js', { stdio: 'inherit' });
      log('Images optimized successfully');
    } catch (error) {
      log(`Warning: Failed to optimize images: ${error.message}`);
      // Continue with the build even if this step fails
    }
  }

  // Step 5: Run the Next.js build
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