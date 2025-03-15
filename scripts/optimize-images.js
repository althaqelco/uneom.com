/**
 * سكريبت لضغط الصور وتحسين حجمها
 * يستخدم sharp لضغط الصور وتحويلها إلى تنسيقات أكثر كفاءة
 * 
 * تثبيت المكتبات المطلوبة:
 * npm install sharp fs-extra
 */

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

// مجلد الصور
const imagesDir = path.join(process.cwd(), 'public/images');
// مجلد الصور المحسنة
const optimizedDir = path.join(process.cwd(), 'public/images/optimized');

// إنشاء مجلد الصور المحسنة إذا لم يكن موجودًا
fs.ensureDirSync(optimizedDir);

// قائمة بالصور التي تم تحسينها
const optimizedImages = [];

// الحد الأقصى لحجم الصورة (بالبايت) - 1 ميجابايت
const MAX_SIZE = 1 * 1024 * 1024;

// قراءة محتويات المجلد
fs.readdir(imagesDir, { withFileTypes: true }, async (err, files) => {
  if (err) {
    console.error('خطأ في قراءة مجلد الصور:', err);
    return;
  }

  // تصفية الملفات (استبعاد المجلدات)
  const imageFiles = files.filter(file => 
    file.isFile() && 
    !file.name.startsWith('.') && 
    /\.(jpg|jpeg|png|webp)$/i.test(file.name)
  );

  console.log(`تم العثور على ${imageFiles.length} صورة للتحسين.`);

  // معالجة كل صورة
  for (const file of imageFiles) {
    const filePath = path.join(imagesDir, file.name);
    const stats = fs.statSync(filePath);
    
    // تخطي الصور الصغيرة والصور الاحتياطية
    if (stats.size < MAX_SIZE || 
        file.name.includes('placeholder') || 
        file.name.includes('logo') ||
        file.name.includes('pattern')) {
      continue;
    }
    
    const ext = path.extname(file.name).toLowerCase();
    const baseName = path.basename(file.name, ext);
    const outputPath = path.join(optimizedDir, `${baseName}.webp`);
    
    try {
      console.log(`تحسين: ${file.name} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
      
      // تحسين الصورة وتحويلها إلى WebP
      await sharp(filePath)
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      // الحصول على حجم الصورة المحسنة
      const optimizedStats = fs.statSync(outputPath);
      
      optimizedImages.push({
        original: file.name,
        optimized: `${baseName}.webp`,
        originalSize: stats.size,
        optimizedSize: optimizedStats.size,
        reduction: ((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2)
      });
      
      console.log(`  -> تم التحسين: ${baseName}.webp (${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB, توفير ${((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2)}%)`);
    } catch (error) {
      console.error(`  -> خطأ في تحسين ${file.name}:`, error);
    }
  }
  
  // طباعة ملخص
  console.log(`\nتم تحسين ${optimizedImages.length} صورة بنجاح.`);
  
  // إنشاء ملف نصي بالتغييرات
  if (optimizedImages.length > 0) {
    const mappingContent = optimizedImages.map(item => 
      `${item.original} (${(item.originalSize / 1024 / 1024).toFixed(2)} MB) -> ${item.optimized} (${(item.optimizedSize / 1024 / 1024).toFixed(2)} MB, توفير ${item.reduction}%)`
    ).join('\n');
    
    fs.writeFileSync(path.join(process.cwd(), 'optimized-images.txt'), mappingContent);
    console.log('تم إنشاء ملف optimized-images.txt يحتوي على قائمة بالصور التي تم تحسينها.');
  }
}); 