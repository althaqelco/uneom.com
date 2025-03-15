/**
 * Script to ensure fallback images and CSS files exist
 */
const fs = require('fs');
const path = require('path');

console.log('🖼️ Ensuring fallback images and CSS files exist...');

// Get the root directory
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(publicDir, 'images');
const cssDir = path.join(publicDir, 'css');

// Create directories if they don't exist
if (!fs.existsSync(imagesDir)) {
  console.log(`📁 Creating images directory: ${imagesDir}`);
  fs.mkdirSync(imagesDir, { recursive: true });
}

if (!fs.existsSync(cssDir)) {
  console.log(`📁 Creating CSS directory: ${cssDir}`);
  fs.mkdirSync(cssDir, { recursive: true });
}

// Create fallback images
const fallbackImages = [
  { name: 'default-placeholder.jpg', width: 800, height: 600 },
  { name: 'product-placeholder.jpg', width: 600, height: 600 },
  { name: 'avatar-placeholder.jpg', width: 200, height: 200 },
  { name: 'banner-placeholder.jpg', width: 1200, height: 400 }
];

fallbackImages.forEach(image => {
  const imagePath = path.join(imagesDir, image.name);
  if (!fs.existsSync(imagePath)) {
    console.log(`🖼️ Creating fallback image: ${image.name}`);
    
    // Create a simple SVG as a fallback
    const svgContent = `<svg width="${image.width}" height="${image.height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666" text-anchor="middle" dominant-baseline="middle">
        Image Placeholder
      </text>
    </svg>`;
    
    fs.writeFileSync(imagePath, svgContent);
    console.log(`✅ Created fallback image at ${imagePath}`);
  }
});

// Create the image-fixes.css file
const cssPath = path.join(cssDir, 'image-fixes.css');
if (!fs.existsSync(cssPath)) {
  console.log(`📝 Creating CSS file: image-fixes.css`);
  
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

/* Fix for Next.js Image component */
.next-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Ensure images don't break layout */
img {
  max-width: 100%;
  height: auto;
}

/* Fallback for broken images */
img:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}

img:after {
  content: attr(alt) ' Image Not Available';
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  color: #666;
  font-size: 14px;
  text-align: center;
}
`;
  
  fs.writeFileSync(cssPath, cssContent);
  console.log(`✅ Created CSS file at ${cssPath}`);
}

console.log('✅ All fallback assets have been created successfully!'); 