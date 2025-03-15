/**
 * This script ensures that all fallback assets are created
 * It creates:
 * - Fallback images for products, avatars, and banners
 * - CSS file for image fixes
 */

const fs = require('fs');
const path = require('path');

// Paths
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const CSS_DIR = path.join(PUBLIC_DIR, 'css');

// Ensure directories exist
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  console.log(`Created directory: ${PUBLIC_DIR}`);
}

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  console.log(`Created directory: ${IMAGES_DIR}`);
}

if (!fs.existsSync(CSS_DIR)) {
  fs.mkdirSync(CSS_DIR, { recursive: true });
  console.log(`Created directory: ${CSS_DIR}`);
}

// Create fallback images
const createFallbackImage = (filename, type) => {
  const jpgPath = path.join(IMAGES_DIR, `${filename}.jpg`);
  const svgPath = path.join(IMAGES_DIR, `${filename}.svg`);
  
  // Create SVG fallback
  const svgContent = generateSVG(type);
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created SVG fallback: ${svgPath}`);
  
  // Create JPG fallback (simple 1x1 pixel JPEG)
  const jpgContent = Buffer.from([
    0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x01, 0x00, 0x48, 
    0x00, 0x48, 0x00, 0x00, 0xff, 0xdb, 0x00, 0x43, 0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08, 
    0x07, 0x07, 0x07, 0x09, 0x09, 0x08, 0x0a, 0x0c, 0x14, 0x0d, 0x0c, 0x0b, 0x0b, 0x0c, 0x19, 0x12, 
    0x13, 0x0f, 0x14, 0x1d, 0x1a, 0x1f, 0x1e, 0x1d, 0x1a, 0x1c, 0x1c, 0x20, 0x24, 0x2e, 0x27, 0x20, 
    0x22, 0x2c, 0x23, 0x1c, 0x1c, 0x28, 0x37, 0x29, 0x2c, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1f, 0x27, 
    0x39, 0x3d, 0x38, 0x32, 0x3c, 0x2e, 0x33, 0x34, 0x32, 0xff, 0xdb, 0x00, 0x43, 0x01, 0x09, 0x09, 
    0x09, 0x0c, 0x0b, 0x0c, 0x18, 0x0d, 0x0d, 0x18, 0x32, 0x21, 0x1c, 0x21, 0x32, 0x32, 0x32, 0x32, 
    0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 
    0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 
    0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0xff, 0xc0, 0x00, 
    0x11, 0x08, 0x00, 0x01, 0x00, 0x01, 0x03, 0x01, 0x22, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01, 
    0xff, 0xc4, 0x00, 0x15, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0xff, 0xc4, 0x00, 0x14, 0x10, 0x01, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xc4, 0x00, 
    0x14, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x00, 0xff, 0xc4, 0x00, 0x14, 0x11, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xda, 0x00, 0x0c, 0x03, 0x01, 0x00, 
    0x02, 0x11, 0x03, 0x11, 0x00, 0x3f, 0x00, 0xb2, 0xc0, 0x07, 0xff, 0xd9
  ]);
  
  fs.writeFileSync(jpgPath, jpgContent);
  console.log(`Created JPG fallback: ${jpgPath}`);
};

// Generate SVG content based on type
const generateSVG = (type) => {
  const width = 400;
  const height = type === 'banner' ? 200 : 400;
  const fontSize = type === 'banner' ? 24 : 20;
  const text = type === 'default' ? 'Image Not Available' : 
               type === 'product' ? 'Product Image Not Available' :
               type === 'avatar' ? 'Avatar Not Available' : 
               'Banner Not Available';
  
  const backgroundColor = type === 'default' ? '#f0f0f0' : 
                         type === 'product' ? '#e6f7ff' :
                         type === 'avatar' ? '#f9f0ff' : 
                         '#fff9e6';
  
  const textColor = '#666666';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${backgroundColor}" />
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${fontSize}" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
    <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="${fontSize * 0.7}" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">Please check the image URL</text>
  </svg>`;
};

// Create CSS file for image fixes
const createCSSFile = () => {
  const cssPath = path.join(CSS_DIR, 'image-fixes.css');
  const cssContent = `
/* Image fixes for Vercel environment */
img {
  min-width: 1px;
  min-height: 1px;
  max-width: 100%;
  height: auto;
  display: block;
}

img.loading {
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

img.loaded {
  opacity: 1;
}

img.error {
  opacity: 0.7;
  filter: grayscale(100%);
}

@media (max-width: 768px) {
  img {
    max-width: 100%;
    height: auto;
  }
}

/* Placeholder styles */
.placeholder-image {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  text-align: center;
  padding: 20px;
  border-radius: 4px;
}

/* Vercel specific fixes */
.vercel-deployment img[src*="/_next/image"] {
  max-width: 100%;
  height: auto;
}

/* Fix for broken images */
img:not([src]),
img[src=""],
img[src="#"],
img[src="undefined"],
img[src="null"] {
  visibility: hidden;
}

/* Show fallback content for broken images */
img.fallback-visible {
  visibility: visible !important;
}

/* Ensure SVG images display correctly */
img[src$=".svg"] {
  width: auto;
  height: auto;
}

/* Ensure JPEG images display correctly */
img[src$=".jpg"],
img[src$=".jpeg"] {
  object-fit: contain;
}

/* Ensure images with error state display correctly */
img.error[src$=".jpg"],
img.error[src$=".jpeg"],
img.error[src$=".png"],
img.error[src$=".webp"],
img.error[src$=".avif"] {
  content: url('/images/default-placeholder.svg');
}

/* Product image specific styles */
img.product-image.error {
  content: url('/images/product-placeholder.svg');
}

/* Avatar image specific styles */
img.avatar-image.error {
  content: url('/images/avatar-placeholder.svg');
  border-radius: 50%;
}

/* Banner image specific styles */
img.banner-image.error {
  content: url('/images/banner-placeholder.svg');
}

/* Fix for Next.js Image component */
span[style*="box-sizing: border-box; display: block; overflow: hidden;"] > img {
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
}
`;

  fs.writeFileSync(cssPath, cssContent);
  console.log(`Created CSS file: ${cssPath}`);
};

// Create all fallback assets
const createAllFallbacks = () => {
  // Create fallback images
  createFallbackImage('default-placeholder', 'default');
  createFallbackImage('product-placeholder', 'product');
  createFallbackImage('avatar-placeholder', 'avatar');
  createFallbackImage('banner-placeholder', 'banner');
  
  // Create CSS file
  createCSSFile();
  
  console.log('All fallback assets created successfully!');
};

// Run the script
createAllFallbacks(); 