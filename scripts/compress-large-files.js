#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const stat = promisify(fs.stat);

// كمية الضغط (من 1 إلى 100) - القيمة المنخفضة تعني ضغط أعلى
const JPEG_QUALITY = 65; // ضغط أكبر للملفات الكبيرة

// قائمة الملفات الكبيرة التي نريد ضغطها
const LARGE_FILES = [
  path.join(__dirname, '..', 'public/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg'),
  path.join(__dirname, '..', 'public/images/clients/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg'),
  path.join(__dirname, '..', 'public/images/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg')
];

// الوظيفة التي تضغط صورة واحدة
async function compressImage(filePath) {
  try {
    // التحقق من حجم الملف
    const fileStats = await stat(filePath);
    const fileSizeMB = fileStats.size / (1024 * 1024);
    
    console.log(`معالجة ${filePath} - الحجم الأصلي: ${fileSizeMB.toFixed(2)} ميجابايت`);
    
    const ext = path.extname(filePath).toLowerCase();
    const outputPath = filePath + '.temp';
    
    // قراءة الصورة وضغطها مع تقليل الأبعاد إذا كانت كبيرة جداً
    try {
      // الحصول على معلومات الصورة
      const metadata = await sharp(filePath).metadata();
      
      let sharpInstance = sharp(filePath);
      
      // إذا كانت الصورة عالية الدقة جداً، قم بتقليل حجمها
      if (metadata.width > 2000 || metadata.height > 2000) {
        const resizeFactor = Math.min(2000 / metadata.width, 2000 / metadata.height);
        const newWidth = Math.round(metadata.width * resizeFactor);
        const newHeight = Math.round(metadata.height * resizeFactor);
        
        console.log(`تغيير حجم الصورة من ${metadata.width}x${metadata.height} إلى ${newWidth}x${newHeight}`);
        sharpInstance = sharpInstance.resize(newWidth, newHeight);
      }
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharpInstance.jpeg({ quality: JPEG_QUALITY }).toFile(outputPath);
      } else if (ext === '.png') {
        await sharpInstance.png({ quality: JPEG_QUALITY }).toFile(outputPath);
      } else {
        console.log(`تخطي ${filePath} - نوع الملف غير مدعوم`);
        return;
      }
      
      // تحقق من حجم الملف المضغوط
      const compressedStats = await stat(outputPath);
      const compressedSizeMB = compressedStats.size / (1024 * 1024);
      
      // إذا كان الضغط فعّالًا، استبدل الملف الأصلي
      fs.unlinkSync(filePath);
      fs.renameSync(outputPath, filePath);
      
      const savingsPercent = ((fileStats.size - compressedStats.size) / fileStats.size * 100).toFixed(2);
      console.log(`تم ضغط ${filePath} - الحجم الجديد: ${compressedSizeMB.toFixed(2)} ميجابايت (توفير ${savingsPercent}%)`);
    } catch (error) {
      console.error(`خطأ أثناء ضغط الصورة ${filePath}:`, error.message);
    }
  } catch (error) {
    console.error(`خطأ في معالجة ${filePath}:`, error.message);
  }
}

// بدء المعالجة
(async () => {
  console.log('بدء ضغط الملفات الكبيرة...');
  
  for (const file of LARGE_FILES) {
    await compressImage(file);
  }
  
  console.log('اكتملت عملية ضغط الملفات الكبيرة!');
})(); 