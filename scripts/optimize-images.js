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

// مجلد الصور الرئيسي
const imagesBaseDir = path.join(process.cwd(), 'public/images');
// مجلد الصور المحسنة
const optimizedDir = path.join(process.cwd(), 'public/images/optimized');

// إنشاء مجلد الصور المحسنة إذا لم يكن موجودًا
fs.ensureDirSync(optimizedDir);

// قائمة بالصور التي تم تحسينها
const optimizedImages = [];

// وظيفة للبحث عن جميع الصور في مجلد معين بشكل متكرر
const findImagesRecursively = (dir) => {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    
    if (item.isDirectory() && item.name !== 'optimized') {
      // إذا كان مجلدًا، ابحث بداخله بشكل متكرر
      results = results.concat(findImagesRecursively(itemPath));
    } else if (item.isFile()) {
      // إذا كان ملفًا، تحقق مما إذا كان صورة
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && 
          !item.name.includes('placeholder') && 
          !item.name.includes('logo') && 
          !item.name.includes('pattern')) {
        results.push(itemPath);
      }
    }
  }
  
  return results;
};

// معالجة الصور
const processImages = async () => {
  try {
    const imageFiles = findImagesRecursively(imagesBaseDir);
    console.log(`تم العثور على ${imageFiles.length} صورة للتحسين.`);

    // معالجة كل صورة
    for (const filePath of imageFiles) {
      try {
        const stats = fs.statSync(filePath);
        const fileName = path.basename(filePath);
        const dirName = path.dirname(filePath);
        const relativePath = path.relative(imagesBaseDir, dirName);
        const ext = path.extname(fileName).toLowerCase();
        const baseName = path.basename(fileName, ext);
        
        // إنشاء مسار الصورة المحسنة
        const optimizedSubDir = path.join(optimizedDir, relativePath);
        fs.ensureDirSync(optimizedSubDir);
        const outputPath = path.join(optimizedSubDir, `${baseName}.webp`);
        
        console.log(`تحسين: ${filePath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
        
        // تحسين الصورة وتحويلها إلى WebP
        await sharp(filePath)
          .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        // الحصول على حجم الصورة المحسنة
        const optimizedStats = fs.statSync(outputPath);
        
        optimizedImages.push({
          original: filePath,
          optimized: outputPath,
          originalSize: stats.size,
          optimizedSize: optimizedStats.size,
          reduction: ((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2)
        });
        
        console.log(`  -> تم التحسين: ${outputPath} (${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB, توفير ${((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2)}%)`);
        
        // نسخ الصورة المحسنة إلى المجلد الأصلي مع الاحتفاظ بالامتداد الأصلي
        await sharp(outputPath)
          .toFile(filePath + '.temp');
        
        // حذف الملف الأصلي وإعادة تسمية الملف المؤقت
        fs.unlinkSync(filePath);
        fs.renameSync(filePath + '.temp', filePath);
        
        console.log(`  -> تم استبدال الصورة الأصلية بنسخة مضغوطة.`);
      } catch (error) {
        console.error(`  -> خطأ في تحسين ${filePath}:`, error);
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
  } catch (error) {
    console.error('خطأ في معالجة الصور:', error);
  }
};

// تنفيذ المعالجة
processImages(); 