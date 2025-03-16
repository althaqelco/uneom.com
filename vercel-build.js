const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking environment before build...');

// Check if we're on Vercel
const isVercel = process.env.VERCEL === '1';
console.log(`🌐 Building on Vercel: ${isVercel ? 'Yes' : 'No'}`);

// Check Node.js version
console.log(`📊 Node.js version: ${process.version}`);

// Fix SWC binary issues on Vercel
if (isVercel) {
  console.log('🔧 Applying SWC binary fix for Vercel...');
  
  // Set environment variables to help with SWC binary issues
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  process.env.NEXT_IGNORE_MISSING_SWC = '1'; // Ignore missing SWC binary
  
  // Create .npmrc file to force native builds
  const npmrcPath = path.join(__dirname, '.npmrc');
  fs.writeFileSync(npmrcPath, 'node-linker=hoisted\nlegacy-peer-deps=true\n');
  
  // Force reinstall of SWC binaries
  try {
    console.log('🔄 Reinstalling SWC binaries...');
    execSync('npm install @next/swc-linux-x64-gnu @next/swc-linux-x64-musl --no-save', { stdio: 'inherit' });
  } catch (error) {
    console.warn('⚠️ SWC binary reinstall failed, but continuing build:', error.message);
  }
}

// Ensure fallback images exist
try {
  const ensureFallbacksPath = path.resolve(__dirname, 'scripts', 'ensure-fallbacks.js');
  
  if (fs.existsSync(ensureFallbacksPath)) {
    console.log('🖼️ Ensuring fallback images exist...');
    execSync(`node "${ensureFallbacksPath}"`, { stdio: 'inherit' });
  } else {
    console.log('⚠️ ensure-fallbacks.js script not found, creating fallbacks directly');
    
    // Create fallback images directory
    const publicDir = path.resolve(__dirname, 'public');
    const imagesDir = path.resolve(publicDir, 'images');
    
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    // Create a simple fallback image
    const fallbackPath = path.resolve(imagesDir, 'default-placeholder.jpg');
    if (!fs.existsSync(fallbackPath)) {
      // Create a simple text file as fallback
      fs.writeFileSync(fallbackPath, 'Fallback Image');
    }
    
    // Create avatar and banner placeholders
    const avatarPath = path.resolve(imagesDir, 'avatar-placeholder.jpg');
    if (!fs.existsSync(avatarPath)) {
      fs.writeFileSync(avatarPath, 'Avatar Image');
    }
    
    const bannerPath = path.resolve(imagesDir, 'banner-placeholder.jpg');
    if (!fs.existsSync(bannerPath)) {
      fs.writeFileSync(bannerPath, 'Banner Image');
    }
    
    // Create next static directory and copy files
    const nextStaticDir = path.resolve(__dirname, '.next/static/images');
    if (!fs.existsSync(nextStaticDir)) {
      fs.mkdirSync(nextStaticDir, { recursive: true });
    }
    
    // Copy fallback to next static directory
    fs.copyFileSync(fallbackPath, path.resolve(nextStaticDir, 'default-placeholder.jpg'));
  }
} catch (error) {
  console.error('❌ Error ensuring fallback images:', error);
}

// Check for SWC binary
try {
  const nodeModulesPath = path.resolve(__dirname, 'node_modules');
  const swcPaths = [
    path.join(nodeModulesPath, '@next', 'swc-darwin-arm64'),
    path.join(nodeModulesPath, '@next', 'swc-darwin-x64'),
    path.join(nodeModulesPath, '@next', 'swc-linux-arm64-gnu'),
    path.join(nodeModulesPath, '@next', 'swc-linux-arm64-musl'),
    path.join(nodeModulesPath, '@next', 'swc-linux-x64-gnu'),
    path.join(nodeModulesPath, '@next', 'swc-linux-x64-musl'),
    path.join(nodeModulesPath, '@next', 'swc-win32-arm64-msvc'),
    path.join(nodeModulesPath, '@next', 'swc-win32-ia32-msvc'),
    path.join(nodeModulesPath, '@next', 'swc-win32-x64-msvc'),
  ];

  let swcFound = false;
  for (const swcPath of swcPaths) {
    if (fs.existsSync(swcPath)) {
      console.log(`✅ SWC binary found at: ${swcPath}`);
      swcFound = true;
      break;
    }
  }

  if (!swcFound) {
    console.log('⚠️ No SWC binary found. Installing dependencies again...');
    execSync('npm install --force', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('❌ Error checking SWC binary:', error);
}

// Check for Next.js config
try {
  const nextConfigPath = path.resolve(__dirname, 'next.config.mjs');
  if (fs.existsSync(nextConfigPath)) {
    console.log('✅ next.config.mjs found');
  } else {
    console.log('⚠️ next.config.mjs not found');
  }
} catch (error) {
  console.error('❌ Error checking Next.js config:', error);
}

// Run the build command with proper environment variables
console.log('🚀 Starting Next.js build...');
try {
  // Set environment variables for the build
  const buildEnv = {
    ...process.env,
    NEXT_TELEMETRY_DISABLED: '1',
    NEXT_IGNORE_MISSING_SWC: '1',
    NODE_OPTIONS: '--max_old_space_size=4096'
  };
  
  execSync('next build', { stdio: 'inherit', env: buildEnv });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
