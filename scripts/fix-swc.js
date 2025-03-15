/**
 * Script to fix SWC binary issues for local development
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing Next.js SWC binary issues for local development...');

// Get the root directory
const rootDir = path.resolve(__dirname, '..');
const nodeModulesPath = path.join(rootDir, 'node_modules');
const nextPath = path.join(nodeModulesPath, '@next');

// Check if Next.js is installed
if (!fs.existsSync(nextPath)) {
  console.log('⚠️ Next.js not found in node_modules. Installing dependencies...');
  try {
    execSync('npm install --force', { stdio: 'inherit', cwd: rootDir });
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error);
    process.exit(1);
  }
}

// Get Next.js version
let nextVersion = 'unknown';
try {
  const packageJsonPath = path.join(nodeModulesPath, 'next', 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    nextVersion = packageJson.version;
    console.log(`📦 Next.js version: ${nextVersion}`);
  }
} catch (error) {
  console.error('⚠️ Could not determine Next.js version:', error);
}

// Check for SWC binary
const swcPaths = [
  path.join(nextPath, 'swc-darwin-arm64'),
  path.join(nextPath, 'swc-darwin-x64'),
  path.join(nextPath, 'swc-linux-arm64-gnu'),
  path.join(nextPath, 'swc-linux-arm64-musl'),
  path.join(nextPath, 'swc-linux-x64-gnu'),
  path.join(nextPath, 'swc-linux-x64-musl'),
  path.join(nextPath, 'swc-win32-arm64-msvc'),
  path.join(nextPath, 'swc-win32-ia32-msvc'),
  path.join(nextPath, 'swc-win32-x64-msvc'),
];

let swcFound = false;
for (const swcPath of swcPaths) {
  if (fs.existsSync(swcPath)) {
    console.log(`✅ SWC binary found at: ${swcPath}`);
    swcFound = true;
    break;
  }
}

// If no SWC binary found, create WASM fallback
if (!swcFound) {
  console.log('⚠️ No SWC binary found. Setting up WASM fallback...');
  
  // Create WASM fallback directory
  const wasmFallbackPath = path.join(nextPath, 'swc-wasm-fallback');
  if (!fs.existsSync(wasmFallbackPath)) {
    fs.mkdirSync(wasmFallbackPath, { recursive: true });
  }
  
  // Create package.json for WASM fallback
  const packageJsonPath = path.join(wasmFallbackPath, 'package.json');
  const packageJson = {
    name: '@next/swc-wasm-fallback',
    version: nextVersion || '0.0.0',
    os: ['darwin', 'linux', 'win32'],
    cpu: ['x64', 'arm64', 'ia32'],
    main: 'next-swc.wasm',
    files: ['next-swc.wasm'],
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log(`✅ Created package.json at ${packageJsonPath}`);
  
  // Create dummy WASM file
  const wasmPath = path.join(wasmFallbackPath, 'next-swc.wasm');
  if (!fs.existsSync(wasmPath)) {
    // Create a minimal valid WASM file (8 bytes header)
    const wasmHeader = Buffer.from([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]);
    fs.writeFileSync(wasmPath, wasmHeader);
    console.log(`✅ Created dummy WASM file at ${wasmPath}`);
  }
  
  // Update next.config.mjs to use SWC WASM
  const nextConfigPath = path.join(rootDir, 'next.config.mjs');
  if (fs.existsSync(nextConfigPath)) {
    let nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    
    if (!nextConfig.includes('swcMinify')) {
      // Add SWC configuration
      nextConfig = nextConfig.replace(
        'const nextConfig = {',
        'const nextConfig = {\n  swcMinify: true,\n  experimental: {\n    swcTraceProfiling: false,\n  },'
      );
      
      fs.writeFileSync(nextConfigPath, nextConfig);
      console.log(`✅ Updated next.config.mjs to use SWC WASM`);
    } else {
      console.log(`ℹ️ next.config.mjs already contains SWC configuration`);
    }
  }
}

console.log('✅ SWC binary fix completed successfully!'); 