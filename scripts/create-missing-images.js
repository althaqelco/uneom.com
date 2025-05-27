#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// قائمة الصور المفقودة التي تحتاج إلى إنشاء
const missingImages = [
  'sustainable-trends.jpg',
  'school-uniform-post-1.jpg',
  'sustainable-uniform.jpg',
  'service-overview.jpg',
  'uneom_antimicrobial_treatment.webp',
  'uneom_moisture_wicking.webp',
  'fabric-cotton-blends.webp',
  'professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
  'businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
  'men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg',
  'diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg',
  'woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
  'business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  'portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg'
];

// قائمة الصور المفقودة في مجلدات فرعية
const missingSubfolderImages = {
  'products/aviation': [
    'airline-1.jpg',
    'airline-2.jpg',
    'airline-3.jpg'
  ],
  'products/corporate': [
    'corporate-shirts-blouses.jpg',
    'corporate-suit-executive.jpg',
    'corporate-polo-shirts.jpg'
  ],
  'products/medical': [
    'lab-coat.jpg',
    'nursing-uniform.jpg'
  ],
  'hospitality': [
    'hospitality_uniform_custom_logo.jpg',
    'hospitality_uniform_buttons.jpg',
    'hospitality_uniform_fabric.jpg',
    'hospitality_uniform_department.jpg',
    'hospitality_uniform_formal.jpg',
    'hospitality_uniform_concierge.jpg'
  ],
  'industries/corporate': [
    'hero-corporate-uniforms.jpg'
  ],
  'industries/healthcare': [
    'hero-healthcare-uniforms.jpg',
    'fabric-tech-healthcare.jpg'
  ],
  'industries/aviation': [
    'customization-aviation-uniforms.jpg'
  ],
  'industries': [
    'customization-options.jpg'
  ],
  'blog': [
    'placeholder-corporate1.jpg',
    'placeholder-aviation1.jpg',
    'placeholder-corporate2.jpg',
    'placeholder1.jpg',
    'placeholder2.jpg',
    'placeholder-aviation2.jpg'
  ]
};

// إنشاء صورة placeholder بسيطة (1x1 pixel transparent PNG)
const createPlaceholderImage = () => {
  // PNG شفاف 1x1 pixel
  return Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
    0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
    0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4,
    0x89, 0x00, 0x00, 0x00, 0x0A, 0x49, 0x44, 0x41,
    0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
    0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00,
    0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE,
    0x42, 0x60, 0x82
  ]);
};

// إنشاء صورة JPEG placeholder
const createJPEGPlaceholder = (width = 800, height = 600) => {
  // JPEG header للصورة البسيطة
  const jpegHeader = Buffer.from([
    0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46,
    0x49, 0x46, 0x00, 0x01, 0x01, 0x01, 0x00, 0x48,
    0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
    0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08,
    0x07, 0x07, 0x07, 0x09, 0x09, 0x08, 0x0A, 0x0C,
    0x14, 0x0D, 0x0C, 0x0B, 0x0B, 0x0C, 0x19, 0x12,
    0x13, 0x0F, 0x14, 0x1D, 0x1A, 0x1F, 0x1E, 0x1D,
    0x1A, 0x1C, 0x1C, 0x20, 0x24, 0x2E, 0x27, 0x20,
    0x22, 0x2C, 0x23, 0x1C, 0x1C, 0x28, 0x37, 0x29,
    0x2C, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1F, 0x27,
    0x39, 0x3D, 0x38, 0x32, 0x3C, 0x2E, 0x33, 0x34,
    0x32, 0xFF, 0xC0, 0x00, 0x11, 0x08, 0x02, 0x58,
    0x03, 0x20, 0x03, 0x01, 0x22, 0x00, 0x02, 0x11,
    0x01, 0x03, 0x11, 0x01, 0xFF, 0xC4, 0x00, 0x1F,
    0x00, 0x00, 0x01, 0x05, 0x01, 0x01, 0x01, 0x01,
    0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06,
    0x07, 0x08, 0x09, 0x0A, 0x0B, 0xFF, 0xDA, 0x00,
    0x08, 0x01, 0x01, 0x00, 0x00, 0x3F, 0x00, 0xD2,
    0xCF, 0x20, 0xFF, 0xD9
  ]);
  return jpegHeader;
};

// إنشاء صورة WebP placeholder
const createWebPPlaceholder = () => {
  // WebP header بسيط
  return Buffer.from([
    0x52, 0x49, 0x46, 0x46, 0x26, 0x00, 0x00, 0x00,
    0x57, 0x45, 0x42, 0x50, 0x56, 0x50, 0x38, 0x20,
    0x1A, 0x00, 0x00, 0x00, 0x30, 0x01, 0x00, 0x9D,
    0x01, 0x2A, 0x01, 0x00, 0x01, 0x00, 0x02, 0x00,
    0x34, 0x25, 0xA4, 0x00, 0x03, 0x70, 0x00, 0xFE,
    0xFB, 0xFD, 0x50, 0x00
  ]);
};

// دالة لإنشاء المجلدات إذا لم تكن موجودة
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ تم إنشاء المجلد: ${dirPath}`);
  }
};

// دالة لإنشاء صورة
const createImage = (imagePath, imageBuffer) => {
  const fullPath = path.join(__dirname, '..', 'public', 'images', imagePath);
  const dir = path.dirname(fullPath);
  
  ensureDirectoryExists(dir);
  
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, imageBuffer);
    console.log(`✅ تم إنشاء الصورة: ${imagePath}`);
  } else {
    console.log(`⚠️  الصورة موجودة بالفعل: ${imagePath}`);
  }
};

// إنشاء الصور المفقودة في المجلد الرئيسي
console.log('🚀 بدء إنشاء الصور المفقودة...\n');

missingImages.forEach(imageName => {
  let imageBuffer;
  
  if (imageName.endsWith('.webp')) {
    imageBuffer = createWebPPlaceholder();
  } else if (imageName.endsWith('.jpg') || imageName.endsWith('.jpeg')) {
    imageBuffer = createJPEGPlaceholder();
  } else {
    imageBuffer = createPlaceholderImage();
  }
  
  createImage(imageName, imageBuffer);
});

// إنشاء الصور في المجلدات الفرعية
Object.entries(missingSubfolderImages).forEach(([folder, images]) => {
  console.log(`\n📁 معالجة مجلد: ${folder}`);
  
  images.forEach(imageName => {
    let imageBuffer;
    
    if (imageName.endsWith('.webp')) {
      imageBuffer = createWebPPlaceholder();
    } else if (imageName.endsWith('.jpg') || imageName.endsWith('.jpeg')) {
      imageBuffer = createJPEGPlaceholder();
    } else {
      imageBuffer = createPlaceholderImage();
    }
    
    createImage(path.join(folder, imageName), imageBuffer);
  });
});

console.log('\n✨ تم الانتهاء من إنشاء جميع الصور المفقودة!');
console.log('\n📝 ملاحظة: هذه صور placeholder بسيطة. يُنصح بإستبدالها بصور حقيقية عالية الجودة.');