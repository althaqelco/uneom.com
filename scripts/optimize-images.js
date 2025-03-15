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

// الحد الأقصى لحجم الصورة (بالبايت) - 500 كيلوبايت
const MAX_SIZE = 500 * 1024;

// خيارات التحسين
const REPLACE_ORIGINALS = true; // استبدال الصور الأصلية بالصور المضغوطة
const QUALITY_JPEG = 75; // جودة صور JPEG
const QUALITY_WEBP = 75; // جودة صور WebP
const MAX_WIDTH = 1200; // الحد الأقصى للعرض
const MAX_HEIGHT = 1200; // الحد الأقصى للارتفاع
const CONVERT_TO_WEBP = false; // تحويل جميع الصور إلى WebP

// قراءة محتويات المجلد
async function optimizeImages() {
  try {
    const files = await fs.readdir(imagesDir, { withFileTypes: true });
    
    // تصفية الملفات (استبعاد المجلدات)
    const imageFiles = files.filter(file => 
      file.isFile() && 
      !file.name.startsWith('.') && 
      /\.(jpg|jpeg|png|webp)$/i.test(file.name)
    );

    console.log(`تم العثور على ${imageFiles.length} صورة للتحسين.`);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    // معالجة كل صورة
    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file.name);
      const stats = fs.statSync(filePath);
      totalOriginalSize += stats.size;
      
      // تخطي الصور الصغيرة والصور الاحتياطية
      if (stats.size < MAX_SIZE || 
          file.name.includes('placeholder') || 
          file.name.includes('logo') ||
          file.name.includes('pattern')) {
        console.log(`تخطي: ${file.name} (${(stats.size / 1024).toFixed(2)} KB) - أقل من الحد الأقصى أو صورة احتياطية`);
        continue;
      }
      
      const ext = path.extname(file.name).toLowerCase();
      const baseName = path.basename(file.name, ext);
      
      // تحديد تنسيق الإخراج
      const outputFormat = CONVERT_TO_WEBP ? 'webp' : ext.replace('.', '');
      const outputExt = CONVERT_TO_WEBP ? '.webp' : ext;
      const outputPath = REPLACE_ORIGINALS 
        ? path.join(imagesDir, `${baseName}${outputExt}`) 
        : path.join(optimizedDir, `${baseName}${outputExt}`);
      
      // إنشاء نسخة مؤقتة للتحسين
      const tempOutputPath = path.join(optimizedDir, `temp_${baseName}${outputExt}`);
      
      try {
        console.log(`تحسين: ${file.name} (${(stats.size / 1024).toFixed(2)} KB)`);
        
        // إعداد معالج الصورة
        let imageProcessor = sharp(filePath)
          .resize({ 
            width: MAX_WIDTH, 
            height: MAX_HEIGHT, 
            fit: 'inside', 
            withoutEnlargement: true 
          });
        
        // تطبيق التنسيق المناسب
        if (outputFormat === 'webp') {
          imageProcessor = imageProcessor.webp({ quality: QUALITY_WEBP });
        } else if (outputFormat === 'jpg' || outputFormat === 'jpeg') {
          imageProcessor = imageProcessor.jpeg({ quality: QUALITY_JPEG });
        } else if (outputFormat === 'png') {
          imageProcessor = imageProcessor.png({ quality: QUALITY_JPEG });
        }
        
        // حفظ الصورة المحسنة
        await imageProcessor.toFile(tempOutputPath);
        
        // الحصول على حجم الصورة المحسنة
        const optimizedStats = fs.statSync(tempOutputPath);
        totalOptimizedSize += optimizedStats.size;
        
        // التحقق من أن الصورة المحسنة أصغر من الأصلية
        if (optimizedStats.size < stats.size) {
          // نقل الصورة المحسنة إلى المسار النهائي
          if (REPLACE_ORIGINALS) {
            // عمل نسخة احتياطية من الصورة الأصلية
            const backupPath = path.join(optimizedDir, `original_${file.name}`);
            await fs.copy(filePath, backupPath);
            
            // استبدال الصورة الأصلية بالصورة المحسنة
            await fs.remove(filePath);
            await fs.move(tempOutputPath, outputPath);
          } else {
            await fs.move(tempOutputPath, outputPath, { overwrite: true });
          }
          
          optimizedImages.push({
            original: file.name,
            optimized: path.basename(outputPath),
            originalSize: stats.size,
            optimizedSize: optimizedStats.size,
            reduction: ((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2)
          });
          
          console.log(`  -> تم التحسين: ${path.basename(outputPath)} (${(optimizedStats.size / 1024).toFixed(2)} KB, توفير ${((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2)}%)`);
        } else {
          console.log(`  -> تخطي: الصورة المحسنة أكبر من الأصلية`);
          await fs.remove(tempOutputPath);
        }
      } catch (error) {
        console.error(`  -> خطأ في تحسين ${file.name}:`, error);
        // حذف الملف المؤقت في حالة حدوث خطأ
        if (fs.existsSync(tempOutputPath)) {
          await fs.remove(tempOutputPath);
        }
      }
    }
    
    // طباعة ملخص
    console.log(`\nتم تحسين ${optimizedImages.length} صورة بنجاح.`);
    console.log(`الحجم الإجمالي الأصلي: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`الحجم الإجمالي بعد التحسين: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`نسبة التوفير: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2)}%`);
    
    // إنشاء ملف نصي بالتغييرات
    if (optimizedImages.length > 0) {
      const mappingContent = optimizedImages.map(item => 
        `${item.original} (${(item.originalSize / 1024).toFixed(2)} KB) -> ${item.optimized} (${(item.optimizedSize / 1024).toFixed(2)} KB, توفير ${item.reduction}%)`
      ).join('\n');
      
      fs.writeFileSync(path.join(process.cwd(), 'optimized-images.txt'), mappingContent);
      console.log('تم إنشاء ملف optimized-images.txt يحتوي على قائمة بالصور التي تم تحسينها.');
    }
  } catch (err) {
    console.error('خطأ في معالجة الصور:', err);
  }
}

// تشغيل وظيفة تحسين الصور
optimizeImages(); 