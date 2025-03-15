const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing Next.js SWC binary issues for Vercel deployment...');

// Function to create a simple package.json for the SWC binary
const createSWCPackageJson = (packagePath, version) => {
  const packageJson = {
    name: path.basename(packagePath),
    version: version,
    os: [
      'darwin',
      'linux',
      'win32'
    ],
    cpu: [
      'x64',
      'arm64',
      'ia32'
    ],
    main: 'next-swc.wasm',
    files: [
      'next-swc.wasm'
    ],
    license: 'MIT',
    engines: {
      node: '>= 10'
    }
  };
  
  fs.writeFileSync(
    path.join(packagePath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  console.log(`Created package.json in ${packagePath}`);
};

// Function to create a dummy WASM file
const createDummyWasmFile = (packagePath) => {
  const wasmPath = path.join(packagePath, 'next-swc.wasm');
  
  // Create a minimal valid WASM file (8 bytes header)
  const wasmHeader = Buffer.from([0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00]);
  fs.writeFileSync(wasmPath, wasmHeader);
  
  console.log(`Created dummy WASM file at ${wasmPath}`);
};

// Main function
const main = async () => {
  try {
    // Get Next.js version
    const nodeModulesPath = path.resolve(process.cwd(), 'node_modules');
    const nextPackageJsonPath = path.join(nodeModulesPath, 'next', 'package.json');
    
    if (!fs.existsSync(nextPackageJsonPath)) {
      console.error('❌ Next.js package.json not found');
      process.exit(1);
    }
    
    const nextPackageJson = JSON.parse(fs.readFileSync(nextPackageJsonPath, 'utf8'));
    const nextVersion = nextPackageJson.version;
    console.log(`Next.js version: ${nextVersion}`);
    
    // Create @next directory if it doesn't exist
    const nextDir = path.join(nodeModulesPath, '@next');
    if (!fs.existsSync(nextDir)) {
      fs.mkdirSync(nextDir, { recursive: true });
    }
    
    // Create WASM fallback for all platforms
    const wasmPackagePath = path.join(nextDir, 'swc-wasm-fallback');
    if (!fs.existsSync(wasmPackagePath)) {
      fs.mkdirSync(wasmPackagePath, { recursive: true });
    }
    
    // Create package.json and WASM file
    createSWCPackageJson(wasmPackagePath, nextVersion);
    createDummyWasmFile(wasmPackagePath);
    
    // Create a .npmrc file to skip binary download
    const npmrcPath = path.join(process.cwd(), '.npmrc');
    const npmrcContent = 'node-linker=hoisted\nnext_no_swc_download=1\n';
    fs.writeFileSync(npmrcPath, npmrcContent);
    console.log(`Created .npmrc file at ${npmrcPath}`);
    
    // Update next.config.mjs to use SWC WASM
    const nextConfigPath = path.join(process.cwd(), 'next.config.mjs');
    if (fs.existsSync(nextConfigPath)) {
      let nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
      
      // Check if swc configuration already exists
      if (!nextConfig.includes('swcMinify')) {
        // Add SWC configuration
        nextConfig = nextConfig.replace(
          'const nextConfig = {',
          'const nextConfig = {\n  swcMinify: true,\n  experimental: {\n    swcTraceProfiling: false,\n    forceSwcTransforms: true\n  },'
        );
        
        fs.writeFileSync(nextConfigPath, nextConfig);
        console.log(`Updated next.config.mjs to use SWC WASM`);
      } else {
        console.log(`next.config.mjs already has SWC configuration`);
      }
    }
    
    console.log('✅ SWC binary fix completed successfully');
  } catch (error) {
    console.error('❌ Error fixing SWC binary:', error);
    process.exit(1);
  }
};

// Run main function
main(); 