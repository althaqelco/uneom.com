const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('🔍 Checking Next.js SWC binary compatibility...');

// Get system information
const platform = os.platform();
const arch = os.arch();
console.log(`Platform: ${platform}, Architecture: ${arch}`);

// Map platform and architecture to expected SWC package
const getExpectedSWCPackage = () => {
  if (platform === 'darwin') {
    return arch === 'arm64' ? 'swc-darwin-arm64' : 'swc-darwin-x64';
  } else if (platform === 'linux') {
    if (arch === 'arm64') {
      // Check for musl vs glibc
      try {
        const isMusl = fs.readFileSync('/etc/os-release', 'utf8').includes('alpine');
        return isMusl ? 'swc-linux-arm64-musl' : 'swc-linux-arm64-gnu';
      } catch (e) {
        return 'swc-linux-arm64-gnu'; // Default to gnu
      }
    } else {
      // Check for musl vs glibc
      try {
        const isMusl = fs.readFileSync('/etc/os-release', 'utf8').includes('alpine');
        return isMusl ? 'swc-linux-x64-musl' : 'swc-linux-x64-gnu';
      } catch (e) {
        return 'swc-linux-x64-gnu'; // Default to gnu
      }
    }
  } else if (platform === 'win32') {
    if (arch === 'arm64') {
      return 'swc-win32-arm64-msvc';
    } else if (arch === 'ia32') {
      return 'swc-win32-ia32-msvc';
    } else {
      return 'swc-win32-x64-msvc';
    }
  }
  
  return null;
};

const expectedPackage = getExpectedSWCPackage();
console.log(`Expected SWC package: @next/${expectedPackage}`);

// Check if the expected package exists
const nodeModulesPath = path.resolve(process.cwd(), 'node_modules');
const expectedPackagePath = path.join(nodeModulesPath, '@next', expectedPackage);

if (fs.existsSync(expectedPackagePath)) {
  console.log(`✅ Expected SWC package found at: ${expectedPackagePath}`);
  
  // Check for the actual binary
  const files = fs.readdirSync(expectedPackagePath);
  const binaryFiles = files.filter(file => 
    file.endsWith('.node') || 
    file.endsWith('.dll') || 
    file.endsWith('.so') || 
    file.endsWith('.dylib')
  );
  
  if (binaryFiles.length > 0) {
    console.log(`✅ SWC binary files found: ${binaryFiles.join(', ')}`);
  } else {
    console.error('❌ No SWC binary files found in the package directory');
  }
} else {
  console.error(`❌ Expected SWC package not found at: ${expectedPackagePath}`);
  
  // Check if any SWC package exists
  const nextDir = path.join(nodeModulesPath, '@next');
  if (fs.existsSync(nextDir)) {
    const swcPackages = fs.readdirSync(nextDir).filter(dir => dir.startsWith('swc-'));
    
    if (swcPackages.length > 0) {
      console.log(`Found other SWC packages: ${swcPackages.join(', ')}`);
    } else {
      console.error('No SWC packages found at all');
    }
  } else {
    console.error('@next directory not found');
  }
}

// Check Next.js version
try {
  const nextPackageJsonPath = path.join(nodeModulesPath, 'next', 'package.json');
  if (fs.existsSync(nextPackageJsonPath)) {
    const nextPackageJson = JSON.parse(fs.readFileSync(nextPackageJsonPath, 'utf8'));
    console.log(`Next.js version: ${nextPackageJson.version}`);
  } else {
    console.error('Next.js package.json not found');
  }
} catch (error) {
  console.error('Error checking Next.js version:', error);
}

console.log('✅ SWC binary check completed'); 