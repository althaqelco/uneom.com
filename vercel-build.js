const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking environment before build...');

// Check if we're on Vercel
const isVercel = process.env.VERCEL === '1';
console.log(`🌐 Building on Vercel: ${isVercel ? 'Yes' : 'No'}`);

// Check Node.js version
console.log(`📊 Node.js version: ${process.version}`);

// Fix SWC binary issues
try {
  if (isVercel) {
    // On Vercel, use the WASM fallback
    const fixVercelSwcPath = path.resolve(__dirname, 'scripts', 'fix-vercel-swc.js');
    
    if (fs.existsSync(fixVercelSwcPath)) {
      console.log('🔧 Running Vercel SWC binary fix...');
      execSync(`node "${fixVercelSwcPath}"`, { stdio: 'inherit' });
    }
  } else {
    // On local machine, check for native SWC binary
    const fixSwcPath = path.resolve(__dirname, 'scripts', 'fix-swc.js');
    
    if (fs.existsSync(fixSwcPath)) {
      console.log('🔧 Running SWC binary fix...');
      try {
        execSync(`node "${fixSwcPath}"`, { stdio: 'inherit' });
        console.log('✅ SWC binary fix completed successfully');
      } catch (error) {
        console.error('❌ Error running SWC binary fix:', error.message);
        // Continue with the build even if SWC fix fails
      }
    } else {
      console.log('⚠️ fix-swc.js script not found, checking SWC binary directly');
      
      // Check for SWC binary
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
    }
  }
} catch (error) {
  console.error('❌ Error fixing SWC binary:', error);
  // Continue with the build even if SWC fix fails
}

// Ensure fallback images exist
try {
  const ensureFallbacksPath = path.resolve(__dirname, 'scripts', 'ensure-fallbacks.js');
  
  if (fs.existsSync(ensureFallbacksPath)) {
    console.log('🖼️ Ensuring fallback images exist...');
    try {
      execSync(`node "${ensureFallbacksPath}"`, { stdio: 'inherit' });
      console.log('✅ Fallback images created successfully');
    } catch (error) {
      console.error('❌ Error running ensure-fallbacks script:', error.message);
      // Continue with the build even if fallback creation fails
    }
  } else {
    console.log('⚠️ ensure-fallbacks.js script not found, creating fallbacks directly');
    
    // Create fallback images directory
    const publicDir = path.join(__dirname, 'public');
    const imagesDir = path.join(publicDir, 'images');
    const cssDir = path.join(publicDir, 'css');
    
    // Create directories if they don't exist
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir, { recursive: true });
    }
    
    // Create a simple fallback image
    const fallbackPath = path.join(imagesDir, 'default-placeholder.jpg');
    if (!fs.existsSync(fallbackPath)) {
      // Create a simple text file as fallback
      fs.writeFileSync(fallbackPath, 'Fallback Image');
      console.log(`✅ Created fallback image at ${fallbackPath}`);
    }
    
    // Create the image-fixes.css file
    const cssPath = path.join(cssDir, 'image-fixes.css');
    if (!fs.existsSync(cssPath)) {
      const cssContent = `
/* Image fixes for Vercel deployment */
.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  max-width: 100%;
  height: auto;
  display: block;
}

.image-fallback {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
}
`;
      fs.writeFileSync(cssPath, cssContent);
      console.log(`✅ Created CSS file at ${cssPath}`);
    }
  }
} catch (error) {
  console.error('❌ Error ensuring fallback images:', error);
  // Continue with the build even if fallback creation fails
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

// Set environment variables for Vercel
if (isVercel) {
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  process.env.SKIP_TYPE_CHECK = 'true';
  process.env.NPM_CONFIG_PRODUCTION = 'false';
}

// Run the build command
console.log('🚀 Starting Next.js build...');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
