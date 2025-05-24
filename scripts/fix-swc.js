// scripts/fix-swc.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('🔧 Fixing SWC binary issues...');

// Determine platform and architecture
const platform = os.platform();
const arch = os.arch();

console.log(`Platform: ${platform}, Architecture: ${arch}`);

// Map platform and architecture to SWC package
const getSWCPackage = () => {
  if (platform === 'linux') {
    if (arch === 'x64') {
      return ['@next/swc-linux-x64-gnu', '@next/swc-linux-x64-musl'];
    } else if (arch === 'arm64') {
      return ['@next/swc-linux-arm64-gnu', '@next/swc-linux-arm64-musl'];
    }
  } else if (platform === 'darwin') {
    if (arch === 'x64') {
      return ['@next/swc-darwin-x64'];
    } else if (arch === 'arm64') {
      return ['@next/swc-darwin-arm64'];
    }
  } else if (platform === 'win32') {
    if (arch === 'x64') {
      return ['@next/swc-win32-x64-msvc'];
    } else if (arch === 'ia32') {
      return ['@next/swc-win32-ia32-msvc'];
    } else if (arch === 'arm64') {
      return ['@next/swc-win32-arm64-msvc'];
    }
  }
  
  return [];
};

// Get appropriate SWC packages
const swcPackages = getSWCPackage();

if (swcPackages.length === 0) {
  console.warn('⚠️ Could not determine appropriate SWC package for your platform');
} else {
  console.log(`🔍 Installing SWC packages for your platform: ${swcPackages.join(', ')}`);
  
  try {
    // Create .npmrc file to force native builds
    const npmrcPath = path.join(process.cwd(), '.npmrc');
    fs.writeFileSync(npmrcPath, 'node-linker=hoisted\nlegacy-peer-deps=true\n');
    
    // Install SWC packages
    execSync(`npm install ${swcPackages.join(' ')} --no-save`, { stdio: 'inherit' });
    
    console.log('✅ SWC packages installed successfully');
  } catch (error) {
    console.error('❌ Error installing SWC packages:', error.message);
  }
}

// Check if SWC binaries are installed
const nodeModulesPath = path.resolve(process.cwd(), 'node_modules');
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
  }
}

if (!swcFound) {
  console.warn('⚠️ No SWC binaries found after installation');
  
  // Create a flag file to indicate we should use Babel instead
  const flagPath = path.join(process.cwd(), '.use-babel');
  fs.writeFileSync(flagPath, 'true');
  
  console.log('✅ Created flag to use Babel instead of SWC');
} else {
  // Remove the flag file if it exists
  const flagPath = path.join(process.cwd(), '.use-babel');
  if (fs.existsSync(flagPath)) {
    fs.unlinkSync(flagPath);
  }
} 