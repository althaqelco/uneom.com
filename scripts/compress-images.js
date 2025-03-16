#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

// كمية الضغط (من 1 إلى 100) - القيمة المنخفضة تعني ضغط أعلى
const JPEG_QUALITY = 75;
const PNG_QUALITY = 75;
const WEBP_QUALITY = 75;

// حد الحجم الذي نريد ضغط الصور التي تتجاوزه (بالبايت) - 300 كيلوبايت
const SIZE_THRESHOLD = 300 * 1024;

// الوظيفة التي تتحقق ما إذا كان المسار يشير إلى ملف صورة
function isImage(file) {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
}

// الوظيفة التي تضغط صورة واحدة
async function compressImage(filePath) {
  try {
    // التحقق من حجم الملف
    const fileStats = await stat(filePath);
    const fileSizeKB = fileStats.size / 1024;
    
    // نتجاهل الصور التي حجمها أقل من الحد
    if (fileStats.size < SIZE_THRESHOLD) {
      console.log(`تخطي ${filePath} - الحجم ${fileSizeKB.toFixed(2)} كيلوبايت (أقل من الحد)`);
      return;
    }
    
    console.log(`معالجة ${filePath} - الحجم الأصلي: ${fileSizeKB.toFixed(2)} كيلوبايت`);
    
    const ext = path.extname(filePath).toLowerCase();
    const outputPath = filePath + '.temp';
    
    let compressedImage;
    
    // قراءة الصورة
    const image = sharp(filePath);
    
    // ضغط الصورة حسب نوعها
    if (ext === '.jpg' || ext === '.jpeg') {
      compressedImage = await image.jpeg({ quality: JPEG_QUALITY }).toBuffer();
    } else if (ext === '.png') {
      compressedImage = await image.png({ quality: PNG_QUALITY }).toBuffer();
    } else if (ext === '.webp') {
      compressedImage = await image.webp({ quality: WEBP_QUALITY }).toBuffer();
    } else if (ext === '.gif') {
      // تجاهل صور GIF لأنها قد تفقد التحريك
      console.log(`تخطي ${filePath} - ملفات GIF غير مدعومة للضغط لتجنب فقدان التحريك`);
      return;
    } else {
      console.log(`تخطي ${filePath} - نوع الملف غير مدعوم`);
      return;
    }
    
    // كتابة الصورة المضغوطة كملف مؤقت
    fs.writeFileSync(outputPath, compressedImage);
    
    // تحقق من حجم الملف المضغوط
    const compressedStats = await stat(outputPath);
    const compressedSizeKB = compressedStats.size / 1024;
    
    // إذا كان الضغط فعّالًا (أي أن الحجم المضغوط أصغر)، استبدل الملف الأصلي
    if (compressedStats.size < fileStats.size) {
      fs.unlinkSync(filePath);
      fs.renameSync(outputPath, filePath);
      
      const savingsPercent = ((fileStats.size - compressedStats.size) / fileStats.size * 100).toFixed(2);
      console.log(`تم ضغط ${filePath} - الحجم الجديد: ${compressedSizeKB.toFixed(2)} كيلوبايت (توفير ${savingsPercent}%)`);
    } else {
      // إذا لم يكن الضغط فعّالًا، احتفظ بالملف الأصلي
      fs.unlinkSync(outputPath);
      console.log(`تخطي ${filePath} - الضغط لم يؤدي إلى تحسين`);
    }
  } catch (error) {
    console.error(`خطأ في معالجة ${filePath}:`, error.message);
  }
}

// الوظيفة التي تتصفح المجلد بشكل متكرر وتضغط جميع الصور
async function processDirectory(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        // تجاهل المجلدات الخاصة
        if (entry.name.startsWith('.')) continue;
        
        // معالجة المجلدات الفرعية بشكل متكرر
        await processDirectory(fullPath);
      } else if (entry.isFile() && isImage(entry.name)) {
        // معالجة ملفات الصور
        await compressImage(fullPath);
      }
    }
  } catch (error) {
    console.error(`خطأ في معالجة المجلد ${directory}:`, error.message);
  }
}

// المجلد الذي نريد معالجة الصور فيه - فقط مجلد الصور
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// بدء المعالجة
(async () => {
  console.log('بدء ضغط الصور في المجلدات الفرعية...');
  
  await processDirectory(IMAGES_DIR);
  
  console.log('اكتملت عملية ضغط الصور!');
})(); 