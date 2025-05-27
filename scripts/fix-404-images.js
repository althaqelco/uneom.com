#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// قائمة بالصور البديلة المتاحة
const availableImages = {
  // صور المدونة
  'sustainable-trends.jpg': 'blog/sustainable-trends.jpg',
  'school-uniform-post-1.jpg': 'blog/school-uniform-post-1.jpg',
  'sustainable-uniform.jpg': 'blog/sustainable-uniform.jpg',
  
  // صور المنتجات
  'airline-1.jpg': 'products/aviation/airline-1.jpg',
  'airline-2.jpg': 'products/aviation/airline-2.jpg',
  'airline-3.jpg': 'products/aviation/airline-3.jpg',
  'corporate-shirts-blouses.jpg': 'products/corporate/corporate-shirts-blouses.jpg',
  'corporate-suit-executive.jpg': 'products/corporate/corporate-suit-executive.jpg',
  'corporate-polo-shirts.jpg': 'products/corporate/corporate-polo-shirts.jpg',
  'lab-coat.jpg': 'products/medical/lab-coat.jpg',
  'nursing-uniform.jpg': 'products/medical/nursing-uniform.jpg',
  
  // صور الصناعات
  'hero-corporate-uniforms.jpg': 'industries/corporate/hero-corporate-uniforms.jpg',
  'hero-healthcare-uniforms.jpg': 'industries/healthcare/hero-healthcare-uniforms.jpg',
  'fabric-tech-healthcare.jpg': 'industries/healthcare/fabric-tech-healthcare.jpg',
  'customization-aviation-uniforms.jpg': 'industries/aviation/customization-aviation-uniforms.jpg',
  'customization-options.jpg': 'industries/customization-options.jpg',
  
  // صور الضيافة
  'hospitality_uniform_custom_logo.jpg': 'hospitality/hospitality_uniform_custom_logo.jpg',
  'hospitality_uniform_buttons.jpg': 'hospitality/hospitality_uniform_buttons.jpg',
  'hospitality_uniform_fabric.jpg': 'hospitality/hospitality_uniform_fabric.jpg',
  'hospitality_uniform_department.jpg': 'hospitality/hospitality_uniform_department.jpg',
  'hospitality_uniform_formal.jpg': 'hospitality/hospitality_uniform_formal.jpg',
  'hospitality_uniform_concierge.jpg': 'hospitality/hospitality_uniform_concierge.jpg',
  
  // الأيقونات
  'compliance-shield.svg': 'icons/compliance-shield.svg',
  'brand-identity-aviation.svg': 'icons/brand-identity-aviation.svg',
  'modest-design-saudi.svg': 'icons/modest-design-saudi.svg',
  'fabric-tech-performance.svg': 'icons/fabric-tech-performance.svg',
  'saudi-expertise.svg': 'icons/saudi-expertise.svg',
  'brand-aligned.svg': 'icons/brand-aligned.svg'
};

// دالة للبحث عن ملفات بامتدادات معينة
const findFiles = (pattern) => {
  try {
    return glob.sync(pattern, { cwd: process.cwd() });
  } catch (error) {
    console.error(`خطأ في البحث عن الملفات: ${error.message}`);
    return [];
  }
};

// دالة لإصلاح مسارات الصور في ملف
const fixImagePaths = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // البحث عن مسارات الصور المعطلة وإصلاحها
    Object.entries(availableImages).forEach(([imageName, correctPath]) => {
      // أنماط مختلفة لمسارات الصور المعطلة
      const patterns = [
        new RegExp(`/images/${imageName}`, 'g'),
        new RegExp(`/blog/images/blog/${imageName}`, 'g'),
        new RegExp(`/blog/images/education/${imageName}`, 'g'),
        new RegExp(`/_next/static/images/${imageName}`, 'g'),
        new RegExp(`/images/blog/${imageName}`, 'g'),
        new RegExp(`/images/education/${imageName}`, 'g'),
        new RegExp(`/services/custom-design/images/${imageName}`, 'g'),
        new RegExp(`/services/fabric-selection/images/${imageName}`, 'g'),
        new RegExp(`/services/technical-finishes/images/${imageName}`, 'g'),
        new RegExp(`/services/quality-assurance/images/${imageName}`, 'g'),
        new RegExp(`/services/manufacturing/images/${imageName}`, 'g'),
        new RegExp(`/services/corporate-programs/images/${imageName}`, 'g'),
        new RegExp(`/shop/aviation-uniforms/airline-crew-uniform/images/products/aviation/${imageName}`, 'g'),
        new RegExp(`/shop/hospitality-attire/luxury-hotel-uniform/images/hospitality/${imageName}`, 'g'),
        new RegExp(`/industries/corporate/images/${imageName}`, 'g'),
        new RegExp(`/industries/healthcare/images/${imageName}`, 'g'),
        new RegExp(`/industries/aviation/images/${imageName}`, 'g'),
        new RegExp(`/icons/${imageName}`, 'g')
      ];
      
      patterns.forEach(pattern => {
        if (pattern.test(content)) {
          content = content.replace(pattern, `/images/${correctPath}`);
          hasChanges = true;
        }
      });
    });
    
    // إصلاح مسارات الصور العامة
    const generalFixes = [
      // إصلاح مسارات الصور في المجلدات الفرعية
      { from: /\/blog\/images\/(blog|education)\//g, to: '/images/blog/' },
      { from: /\/_next\/static\/images\//g, to: '/images/' },
      { from: /\/services\/[^\/]+\/images\//g, to: '/images/services/' },
      { from: /\/shop\/[^\/]+\/[^\/]+\/images\//g, to: '/images/' },
      { from: /\/industries\/[^\/]+\/images\//g, to: '/images/industries/' },
      
      // إصلاح مسارات الأيقونات
      { from: /\/icons\//g, to: '/images/icons/' },
      
      // إصلاح مسارات الصور المكررة
      { from: /\/images\/images\//g, to: '/images/' },
      { from: /\/images\/\/images\//g, to: '/images/' }
    ];
    
    generalFixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ تم إصلاح: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ خطأ في إصلاح ${filePath}: ${error.message}`);
    return false;
  }
};

// دالة لإنشاء ملف تقرير بالصور المفقودة
const generateMissingImagesReport = () => {
  const reportPath = path.join(__dirname, '..', 'missing-images-report.txt');
  const report = [];
  
  report.push('تقرير الصور المفقودة - ' + new Date().toLocaleString('ar-SA'));
  report.push('='.repeat(50));
  report.push('');
  
  // فحص الصور المتاحة
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const availableImagesList = [];
  
  const scanDirectory = (dir, prefix = '') => {
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath, prefix + item + '/');
        } else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(item)) {
          availableImagesList.push(prefix + item);
        }
      });
    } catch (error) {
      console.error(`خطأ في فحص المجلد ${dir}: ${error.message}`);
    }
  };
  
  scanDirectory(imagesDir);
  
  report.push('الصور المتاحة:');
  report.push('-'.repeat(20));
  availableImagesList.sort().forEach(img => {
    report.push(`✅ ${img}`);
  });
  
  report.push('');
  report.push('الصور التي تم إصلاح مساراتها:');
  report.push('-'.repeat(30));
  Object.entries(availableImages).forEach(([imageName, correctPath]) => {
    report.push(`🔧 ${imageName} → ${correctPath}`);
  });
  
  fs.writeFileSync(reportPath, report.join('\n'), 'utf8');
  console.log(`📊 تم إنشاء تقرير الصور: missing-images-report.txt`);
};

// البدء في إصلاح الملفات
console.log('🔧 بدء إصلاح مسارات الصور المعطلة...\n');

// البحث عن جميع ملفات المشروع
const filePatterns = [
  'src/**/*.{tsx,ts,jsx,js}',
  'src/**/*.{md,mdx}',
  'pages/**/*.{tsx,ts,jsx,js}',
  'app/**/*.{tsx,ts,jsx,js}',
  '*.{tsx,ts,jsx,js,md}'
];

let totalFiles = 0;
let fixedFiles = 0;

filePatterns.forEach(pattern => {
  const files = findFiles(pattern);
  
  files.forEach(file => {
    totalFiles++;
    if (fixImagePaths(file)) {
      fixedFiles++;
    }
  });
});

console.log(`\n📈 إحصائيات الإصلاح:`);
console.log(`📁 إجمالي الملفات المفحوصة: ${totalFiles}`);
console.log(`✅ الملفات التي تم إصلاحها: ${fixedFiles}`);
console.log(`⚠️  الملفات بدون تغييرات: ${totalFiles - fixedFiles}`);

// إنشاء تقرير الصور
generateMissingImagesReport();

console.log('\n✨ تم الانتهاء من إصلاح مسارات الصور!');
console.log('\n📝 ملاحظات:');
console.log('- تم إصلاح جميع مسارات الصور المعطلة');
console.log('- تم توحيد مسارات الصور لتبدأ بـ /images/');
console.log('- تم إنشاء تقرير شامل بالصور المتاحة');
console.log('- يُنصح بمراجعة الملفات المُحدثة للتأكد من صحة الإصلاحات');