#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// قائمة الأيقونات المفقودة
const missingIcons = [
  'compliance-shield.svg',
  'brand-identity-aviation.svg',
  'modest-design-saudi.svg',
  'fabric-tech-performance.svg',
  'saudi-expertise.svg',
  'brand-aligned.svg'
];

// دالة لإنشاء المجلدات إذا لم تكن موجودة
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ تم إنشاء المجلد: ${dirPath}`);
  }
};

// قوالب الأيقونات SVG
const iconTemplates = {
  'compliance-shield.svg': `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 4L8 16V32C8 46.4 18.8 59.2 32 60C45.2 59.2 56 46.4 56 32V16L32 4Z" fill="#1e40af"/>
  <path d="M32 8L12 18V32C12 44.8 21.2 56.4 32 57.2C42.8 56.4 52 44.8 52 32V18L32 8Z" fill="#3b82f6"/>
  <path d="M28 32L24 28L26.8 25.2L28 26.4L37.2 17.2L40 20L28 32Z" fill="white"/>
  <circle cx="32" cy="44" r="3" fill="white"/>
</svg>`,

  'brand-identity-aviation.svg': `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 8L48 20V32L32 56L16 32V20L32 8Z" fill="#1e40af"/>
  <path d="M32 12L44 22V30L32 50L20 30V22L32 12Z" fill="#3b82f6"/>
  <path d="M32 16L40 24V28L32 44L24 28V24L32 16Z" fill="#60a5fa"/>
  <circle cx="32" cy="28" r="4" fill="white"/>
  <path d="M28 36H36V40H28V36Z" fill="white"/>
</svg>`,

  'modest-design-saudi.svg': `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="48" height="48" rx="8" fill="#1e40af"/>
  <path d="M20 20H44V24H20V20Z" fill="#fbbf24"/>
  <path d="M20 28H44V32H20V28Z" fill="#fbbf24"/>
  <path d="M20 36H44V40H20V36Z" fill="#fbbf24"/>
  <path d="M20 44H44V48H20V44Z" fill="#fbbf24"/>
  <circle cx="32" cy="32" r="8" fill="white" fill-opacity="0.2"/>
  <path d="M28 28L32 32L36 28" stroke="white" stroke-width="2" fill="none"/>
</svg>`,

  'fabric-tech-performance.svg': `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="28" fill="#1e40af"/>
  <circle cx="32" cy="32" r="20" fill="#3b82f6"/>
  <circle cx="32" cy="32" r="12" fill="#60a5fa"/>
  <path d="M32 20V44M20 32H44" stroke="white" stroke-width="2"/>
  <circle cx="32" cy="20" r="2" fill="white"/>
  <circle cx="32" cy="44" r="2" fill="white"/>
  <circle cx="20" cy="32" r="2" fill="white"/>
  <circle cx="44" cy="32" r="2" fill="white"/>
  <circle cx="32" cy="32" r="3" fill="white"/>
</svg>`,

  'saudi-expertise.svg': `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="56" height="56" rx="12" fill="#1e40af"/>
  <path d="M16 16L32 8L48 16V32L32 56L16 32V16Z" fill="#fbbf24"/>
  <path d="M20 20L32 14L44 20V30L32 48L20 30V20Z" fill="#f59e0b"/>
  <circle cx="32" cy="26" r="4" fill="white"/>
  <path d="M28 34H36V38H28V34Z" fill="white"/>
  <path d="M24 42H40V44H24V42Z" fill="white"/>
</svg>`,

  'brand-aligned.svg': `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="48" height="48" rx="24" fill="#1e40af"/>
  <rect x="12" y="12" width="40" height="40" rx="20" fill="#3b82f6"/>
  <rect x="16" y="16" width="32" height="32" rx="16" fill="#60a5fa"/>
  <circle cx="32" cy="32" r="8" fill="white"/>
  <path d="M28 28L32 24L36 28L32 32L28 28Z" fill="#1e40af"/>
  <circle cx="32" cy="32" r="2" fill="#1e40af"/>
</svg>`
};

// إنشاء الأيقونات المفقودة
console.log('🎨 بدء إنشاء الأيقونات المفقودة...\n');

const iconsDir = path.join(__dirname, '..', 'public', 'images', 'icons');
const rootImagesDir = path.join(__dirname, '..', 'public', 'images');

// التأكد من وجود مجلد الأيقونات
ensureDirectoryExists(iconsDir);

missingIcons.forEach(iconName => {
  const iconPath = path.join(iconsDir, iconName);
  const rootIconPath = path.join(rootImagesDir, iconName);
  
  if (iconTemplates[iconName]) {
    // إنشاء الأيقونة في مجلد icons
    if (!fs.existsSync(iconPath)) {
      fs.writeFileSync(iconPath, iconTemplates[iconName].trim());
      console.log(`✅ تم إنشاء الأيقونة: icons/${iconName}`);
    } else {
      console.log(`⚠️  الأيقونة موجودة بالفعل: icons/${iconName}`);
    }
    
    // إنشاء نسخة في المجلد الرئيسي للصور أيضاً
    if (!fs.existsSync(rootIconPath)) {
      fs.writeFileSync(rootIconPath, iconTemplates[iconName].trim());
      console.log(`✅ تم إنشاء نسخة في المجلد الرئيسي: ${iconName}`);
    } else {
      console.log(`⚠️  النسخة موجودة بالفعل في المجلد الرئيسي: ${iconName}`);
    }
  } else {
    console.log(`❌ لا يوجد قالب للأيقونة: ${iconName}`);
  }
});

// إنشاء أيقونات إضافية مطلوبة
const additionalIcons = {
  'favicon-32x32.png': 'icons',
  'favicon-16x16.png': 'icons',
  'apple-touch-icon.png': 'icons',
  'safari-pinned-tab.svg': 'icons',
  'mstile-144x144.png': 'icons'
};

console.log('\n🔧 إنشاء أيقونات إضافية...');

Object.entries(additionalIcons).forEach(([iconName, folder]) => {
  const iconDir = path.join(__dirname, '..', 'public', folder);
  const iconPath = path.join(iconDir, iconName);
  
  ensureDirectoryExists(iconDir);
  
  if (!fs.existsSync(iconPath)) {
    if (iconName.endsWith('.svg')) {
      // إنشاء SVG بسيط
      const svgContent = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="4" fill="#1e40af"/>
  <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">U</text>
</svg>`;
      fs.writeFileSync(iconPath, svgContent.trim());
    } else {
      // إنشاء PNG placeholder بسيط
      const pngPlaceholder = Buffer.from([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
        0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
        0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x20,
        0x08, 0x06, 0x00, 0x00, 0x00, 0x73, 0x7A, 0x7A,
        0xF4, 0x00, 0x00, 0x00, 0x19, 0x49, 0x44, 0x41,
        0x54, 0x78, 0x9C, 0x63, 0xF8, 0x0F, 0x00, 0x01,
        0x01, 0x01, 0x00, 0x18, 0xDD, 0x8D, 0xB4, 0x1C,
        0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44,
        0xAE, 0x42, 0x60, 0x82
      ]);
      fs.writeFileSync(iconPath, pngPlaceholder);
    }
    console.log(`✅ تم إنشاء: ${folder}/${iconName}`);
  } else {
    console.log(`⚠️  موجود بالفعل: ${folder}/${iconName}`);
  }
});

console.log('\n✨ تم الانتهاء من إنشاء جميع الأيقونات المفقودة!');
console.log('\n📝 ملاحظة: هذه أيقونات placeholder بسيطة. يُنصح بإستبدالها بأيقونات مصممة بشكل احترافي.');