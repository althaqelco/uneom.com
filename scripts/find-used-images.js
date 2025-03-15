/**
 * سكريبت للبحث عن الصور المستخدمة في الموقع وتحديد الصور غير المستخدمة
 * يقوم بفحص جميع ملفات المشروع للبحث عن مراجع للصور
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// مجلد الصور
const imagesDir = path.join(process.cwd(), 'public/images');
// مجلد المشروع
const projectDir = process.cwd();
// مجلد للصور المستخدمة
const usedImagesDir = path.join(process.cwd(), 'public/images/used');
// مجلد للصور غير المستخدمة
const unusedImagesDir = path.join(process.cwd(), 'public/images/unused');

// إنشاء المجلدات إذا لم تكن موجودة
fs.ensureDirSync(usedImagesDir);
fs.ensureDirSync(unusedImagesDir);

// قائمة بالصور المستخدمة
const usedImages = new Set();
// قائمة بالصور غير المستخدمة
const unusedImages = [];
// قائمة بجميع الصور
const allImages = [];
// قائمة بالصور الضرورية
const essentialImages = [
  'default-placeholder.jpg',
  'default-placeholder.svg',
  'product-placeholder.jpg',
  'product-placeholder.svg',
  'avatar-placeholder.jpg',
  'avatar-placeholder.svg',
  'banner-placeholder.jpg',
  'banner-placeholder.svg',
  'uneom-logo.png',
  'uneom-logo-ar.png',
  'uneom-logo-en.png',
  'grid-pattern.svg',
  'pattern-grid.svg'
];

// الامتدادات التي سيتم فحصها
const fileExtensions = [
  'js', 'jsx', 'ts', 'tsx', 'html', 'css', 'scss', 'md', 'mdx', 'json'
];

// المجلدات التي سيتم استبعادها
const excludedDirs = [
  'node_modules', '.git', '.next', 'public/images/unused', 'public/images/optimized', 'out', 'build', 'dist'
];

// الحصول على قائمة بجميع الصور
function getAllImages() {
  try {
    const files = fs.readdirSync(imagesDir, { withFileTypes: true });
    
    files.forEach(file => {
      if (file.isFile() && !file.name.startsWith('.') && isImageFile(file.name)) {
        allImages.push(file.name);
      } else if (file.isDirectory() && file.name !== 'used' && file.name !== 'unused' && file.name !== 'optimized') {
        // الحصول على الصور في المجلدات الفرعية
        const subDirPath = path.join(imagesDir, file.name);
        const subDirFiles = fs.readdirSync(subDirPath, { withFileTypes: true });
        
        subDirFiles.forEach(subFile => {
          if (subFile.isFile() && !subFile.name.startsWith('.') && isImageFile(subFile.name)) {
            allImages.push(`${file.name}/${subFile.name}`);
          }
        });
      }
    });
    
    console.log(`تم العثور على ${allImages.length} صورة في مجلد الصور.`);
  } catch (error) {
    console.error('خطأ في قراءة مجلد الصور:', error);
  }
}

// التحقق مما إذا كان الملف صورة
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif'].includes(ext);
}

// البحث عن الصور المستخدمة في الملفات
async function findUsedImages() {
  console.log('البحث عن الصور المستخدمة في الملفات...');
  
  try {
    // إضافة الصور الضرورية إلى قائمة الصور المستخدمة
    essentialImages.forEach(image => {
      if (allImages.includes(image)) {
        usedImages.add(image);
        console.log(`الصورة ضرورية: ${image}`);
      }
    });
    
    // البحث عن الصور في ملفات المشروع
    for (const image of allImages) {
      // تجنب البحث عن الصور الضرورية مرة أخرى
      if (usedImages.has(image)) {
        continue;
      }
      
      // استخراج اسم الملف بدون المسار
      const filename = path.basename(image);
      
      // البحث عن اسم الملف في جميع ملفات المشروع
      try {
        // تجنب الأحرف الخاصة في اسم الصورة
        const escapedFilename = filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // البحث عن اسم الملف في جميع الملفات
        const grepCommand = `grep -r --include="*.{${fileExtensions.join(',')}}" "${escapedFilename}" ${projectDir} --exclude-dir={${excludedDirs.join(',')}}`;
        const result = execSync(grepCommand, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
        
        if (result && result.trim()) {
          usedImages.add(image);
          console.log(`الصورة مستخدمة: ${image}`);
        }
      } catch (error) {
        // grep يعيد خطأ إذا لم يجد تطابقًا، لذا نتجاهل هذا الخطأ
      }
      
      // البحث عن المسار الكامل للصورة
      if (!usedImages.has(image)) {
        try {
          // تجنب الأحرف الخاصة في مسار الصورة
          const escapedPath = image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          
          // البحث عن مسار الصورة في جميع الملفات
          const grepCommand = `grep -r --include="*.{${fileExtensions.join(',')}}" "${escapedPath}" ${projectDir} --exclude-dir={${excludedDirs.join(',')}}`;
          const result = execSync(grepCommand, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
          
          if (result && result.trim()) {
            usedImages.add(image);
            console.log(`الصورة مستخدمة (مسار كامل): ${image}`);
          }
        } catch (error) {
          // grep يعيد خطأ إذا لم يجد تطابقًا، لذا نتجاهل هذا الخطأ
        }
      }
      
      // البحث عن الصور في المجلدات الخاصة (ar, en, etc.)
      if (!usedImages.has(image) && image.includes('/')) {
        const folderName = image.split('/')[0];
        
        // إذا كان المجلد هو ar أو en، فهذه الصور مستخدمة للنسخ المترجمة
        if (['ar', 'en'].includes(folderName)) {
          usedImages.add(image);
          console.log(`الصورة مستخدمة (نسخة مترجمة): ${image}`);
        }
        
        // إذا كان المجلد هو logos أو icons أو hero، فهذه الصور مستخدمة في الواجهة
        if (['logos', 'icons', 'hero', 'team', 'testimonials', 'products', 'industries', 'blog', 'about', 'certificate'].includes(folderName)) {
          usedImages.add(image);
          console.log(`الصورة مستخدمة (واجهة المستخدم): ${image}`);
        }
      }
    }
    
    // تحديد الصور غير المستخدمة
    for (const image of allImages) {
      if (!usedImages.has(image)) {
        unusedImages.push(image);
      }
    }
    
    console.log(`\nتم العثور على ${usedImages.size} صورة مستخدمة و ${unusedImages.length} صورة غير مستخدمة.`);
    
    // كتابة قوائم الصور إلى ملفات
    fs.writeFileSync(path.join(process.cwd(), 'used-images.txt'), Array.from(usedImages).join('\n'));
    fs.writeFileSync(path.join(process.cwd(), 'unused-images.txt'), unusedImages.join('\n'));
    
    console.log('تم إنشاء ملفات used-images.txt و unused-images.txt تحتوي على قوائم الصور المستخدمة وغير المستخدمة.');
  } catch (error) {
    console.error('خطأ في البحث عن الصور المستخدمة:', error);
  }
}

// نقل الصور غير المستخدمة إلى مجلد منفصل
async function moveUnusedImages() {
  console.log('\nنقل الصور غير المستخدمة إلى مجلد منفصل...');
  
  try {
    for (const image of unusedImages) {
      const sourcePath = path.join(imagesDir, image);
      const destPath = path.join(unusedImagesDir, path.basename(image));
      
      if (fs.existsSync(sourcePath)) {
        await fs.copy(sourcePath, destPath);
        console.log(`تم نقل الصورة غير المستخدمة: ${image}`);
      }
    }
    
    console.log(`تم نقل ${unusedImages.length} صورة غير مستخدمة إلى مجلد ${unusedImagesDir}`);
  } catch (error) {
    console.error('خطأ في نقل الصور غير المستخدمة:', error);
  }
}

// حذف الصور غير المستخدمة
async function deleteUnusedImages() {
  console.log('\nهل ترغب في حذف الصور غير المستخدمة؟ (y/n)');
  
  // هنا يمكن إضافة منطق للتأكيد قبل الحذف
  // في هذا المثال، سنفترض أن المستخدم وافق على الحذف
  
  try {
    for (const image of unusedImages) {
      const imagePath = path.join(imagesDir, image);
      
      if (fs.existsSync(imagePath)) {
        await fs.remove(imagePath);
        console.log(`تم حذف الصورة غير المستخدمة: ${image}`);
      }
    }
    
    console.log(`تم حذف ${unusedImages.length} صورة غير مستخدمة.`);
  } catch (error) {
    console.error('خطأ في حذف الصور غير المستخدمة:', error);
  }
}

// تنفيذ العمليات
async function main() {
  // الحصول على قائمة بجميع الصور
  getAllImages();
  
  // البحث عن الصور المستخدمة
  await findUsedImages();
  
  // نقل الصور غير المستخدمة إلى مجلد منفصل
  await moveUnusedImages();
  
  // طباعة تعليمات للمستخدم
  console.log('\nلحذف الصور غير المستخدمة، قم بتشغيل:');
  console.log('node scripts/delete-unused-images.js');
  
  // حساب حجم الصور المستخدمة وغير المستخدمة
  let usedSize = 0;
  let unusedSize = 0;
  
  for (const image of usedImages) {
    const imagePath = path.join(imagesDir, image);
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      usedSize += stats.size;
    }
  }
  
  for (const image of unusedImages) {
    const imagePath = path.join(imagesDir, image);
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      unusedSize += stats.size;
    }
  }
  
  console.log(`\nحجم الصور المستخدمة: ${(usedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`حجم الصور غير المستخدمة: ${(unusedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`إجمالي حجم الصور: ${((usedSize + unusedSize) / 1024 / 1024).toFixed(2)} MB`);
}

// تشغيل البرنامج
main(); 