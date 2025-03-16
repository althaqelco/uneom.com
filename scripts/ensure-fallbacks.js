const fs = require('fs');
const path = require('path');

console.log('🔍 Ensuring fallback images exist...');

// Create fallback SVG image if it doesn't exist
const createFallbackImages = () => {
  // Use process.cwd() without joining with anything else
  const publicDir = path.resolve(process.cwd(), 'public');
  const imagesDir = path.resolve(publicDir, 'images');
  const defaultsDir = path.resolve(imagesDir, 'defaults');
  const sourcePlaceholder = path.resolve(defaultsDir, 'default-placeholder.jpg');
  const fallbackJpgPath = path.resolve(imagesDir, 'default-placeholder.jpg');
  const avatarJpgPath = path.resolve(imagesDir, 'avatar-placeholder.jpg');
  const bannerJpgPath = path.resolve(imagesDir, 'banner-placeholder.jpg');
  
  console.log(`Working directory: ${process.cwd()}`);
  console.log(`Images directory: ${imagesDir}`);
  console.log(`Source placeholder: ${sourcePlaceholder}`);
  console.log(`Destination placeholder: ${fallbackJpgPath}`);
  
  if (!fs.existsSync(sourcePlaceholder)) {
    console.error(`Source placeholder not found: ${sourcePlaceholder}`);
    return;
  }
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    console.log('📁 Creating images directory');
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Create JPG placeholders by copying from existing file
  try {
    console.log('🖼️ Creating default placeholder in root images directory');
    fs.copyFileSync(sourcePlaceholder, fallbackJpgPath);
  } catch (error) {
    console.error(`Error copying default placeholder: ${error.message}`);
  }
  
  try {
    console.log('🖼️ Creating avatar placeholder');
    fs.copyFileSync(sourcePlaceholder, avatarJpgPath);
  } catch (error) {
    console.error(`Error creating avatar placeholder: ${error.message}`);
  }
  
  try {
    console.log('🖼️ Creating banner placeholder');
    fs.copyFileSync(sourcePlaceholder, bannerJpgPath);
  } catch (error) {
    console.error(`Error creating banner placeholder: ${error.message}`);
  }
  
  // Also copy to next static directory if it exists
  const nextStaticDir = path.resolve(process.cwd(), '.next/static/images');
  if (!fs.existsSync(nextStaticDir)) {
    console.log('📁 Creating Next.js static images directory');
    fs.mkdirSync(nextStaticDir, { recursive: true });
  }
  
  try {
    console.log('🖼️ Copying placeholder to Next.js static directory');
    fs.copyFileSync(sourcePlaceholder, path.resolve(nextStaticDir, 'default-placeholder.jpg'));
  } catch (error) {
    console.error(`Error copying to Next.js static directory: ${error.message}`);
  }
};

// Main function
const main = async () => {
  try {
    // Create fallback images
    createFallbackImages();
    console.log('✅ Fallback images created successfully');
  } catch (error) {
    console.error('❌ Error creating fallback images:', error);
    process.exit(1);
  }
};

// Run main function
main(); 