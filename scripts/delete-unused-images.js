/**
 * سكريبت لحذف الصور غير المستخدمة
 * يقوم بقراءة قائمة الصور غير المستخدمة من ملف unused-images.txt وحذفها
 */

const fs = require('fs-extra');
const path = require('path');

// مجلد الصور
const imagesDir = path.join(process.cwd(), 'public/images');
// مسار ملف الصور غير المستخدمة
const unusedImagesFilePath = path.join(process.cwd(), 'unused-images.txt');

// قائمة بالصور غير المستخدمة
let unusedImages = [];

// قراءة قائمة الصور غير المستخدمة
function readUnusedImages() {
  try {
    if (fs.existsSync(unusedImagesFilePath)) {
      const content = fs.readFileSync(unusedImagesFilePath, 'utf8');
      unusedImages = content.split('\n').filter(line => line.trim() !== '');
      console.log(`تم العثور على ${unusedImages.length} صورة غير مستخدمة في الملف.`);
    } else {
      console.error('ملف الصور غير المستخدمة غير موجود. قم بتشغيل scripts/find-used-images.js أولاً.');
      process.exit(1);
    }
  } catch (error) {
    console.error('خطأ في قراءة ملف الصور غير المستخدمة:', error);
    process.exit(1);
  }
}

// حساب حجم الصور غير المستخدمة
function calculateUnusedSize() {
  let totalSize = 0;
  
  for (const image of unusedImages) {
    const imagePath = path.join(imagesDir, image);
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      totalSize += stats.size;
    }
  }
  
  return totalSize;
}

// حذف الصور غير المستخدمة
async function deleteUnusedImages() {
  let deletedCount = 0;
  let errorCount = 0;
  
  for (const image of unusedImages) {
    const imagePath = path.join(imagesDir, image);
    
    if (fs.existsSync(imagePath)) {
      try {
        await fs.remove(imagePath);
        console.log(`تم حذف: ${image}`);
        deletedCount++;
      } catch (error) {
        console.error(`خطأ في حذف ${image}:`, error);
        errorCount++;
      }
    } else {
      console.warn(`الصورة غير موجودة: ${image}`);
    }
  }
  
  console.log(`\nتم حذف ${deletedCount} صورة غير مستخدمة.`);
  if (errorCount > 0) {
    console.log(`فشل في حذف ${errorCount} صورة.`);
  }
}

// تنفيذ العمليات
async function main() {
  // قراءة قائمة الصور غير المستخدمة
  readUnusedImages();
  
  if (unusedImages.length === 0) {
    console.log('لا توجد صور غير مستخدمة للحذف.');
    return;
  }
  
  // حساب حجم الصور غير المستخدمة
  const unusedSize = calculateUnusedSize();
  console.log(`حجم الصور غير المستخدمة: ${(unusedSize / 1024 / 1024).toFixed(2)} MB`);
  
  // حذف الصور غير المستخدمة تلقائيًا
  console.log(`جاري حذف ${unusedImages.length} صورة غير مستخدمة...`);
  await deleteUnusedImages();
  
  // حساب المساحة المتبقية بعد الحذف
  const remainingSize = fs.existsSync(imagesDir) ? 
    calculateDirSize(imagesDir) / 1024 / 1024 : 0;
  
  console.log(`تم تحرير ${(unusedSize / 1024 / 1024).toFixed(2)} MB من المساحة.`);
  console.log(`حجم مجلد الصور الآن: ${remainingSize.toFixed(2)} MB`);
}

// حساب حجم مجلد
function calculateDirSize(dirPath) {
  let totalSize = 0;
  
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    
    if (file.isDirectory()) {
      // تجاهل المجلدات الخاصة
      if (file.name !== 'unused' && file.name !== 'optimized') {
        totalSize += calculateDirSize(filePath);
      }
    } else {
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    }
  }
  
  return totalSize;
}

// تشغيل البرنامج
main(); 