/**
 * سكريبت لإعادة تسمية الصور بأسماء أبسط
 * يقوم بإزالة المسافات والأحرف الخاصة من أسماء الملفات
 */

const fs = require('fs');
const path = require('path');

// مجلد الصور
const imagesDir = path.join(process.cwd(), 'public/images');

// قائمة بالصور التي تم إعادة تسميتها
const renamedImages = [];

// قراءة محتويات المجلد
fs.readdir(imagesDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error('خطأ في قراءة مجلد الصور:', err);
    return;
  }

  // تصفية الملفات (استبعاد المجلدات)
  const imageFiles = files.filter(file => file.isFile());

  // إعادة تسمية كل ملف
  imageFiles.forEach(file => {
    const oldName = file.name;
    
    // تخطي الملفات التي تبدأ بنقطة والصور الاحتياطية
    if (oldName.startsWith('.') || 
        oldName.includes('placeholder') || 
        oldName.includes('logo') ||
        oldName.includes('pattern')) {
      return;
    }
    
    // إنشاء اسم جديد: إزالة المسافات والأحرف الخاصة
    let newName = oldName
      .replace(/\s+/g, '-')                // استبدال المسافات بشرطات
      .replace(/[^\w\-\.]/g, '')           // إزالة الأحرف الخاصة
      .replace(/--+/g, '-')                // استبدال الشرطات المتعددة بشرطة واحدة
      .replace(/-(\.[^\.]+)$/, '$1')       // إزالة الشرطة قبل الامتداد
      .toLowerCase();                      // تحويل إلى أحرف صغيرة
    
    // إذا كان الاسم الجديد طويلًا جدًا، اختصره
    if (newName.length > 50) {
      const ext = path.extname(newName);
      const baseName = path.basename(newName, ext);
      newName = baseName.substring(0, 45) + ext;
    }
    
    // إذا كان الاسم الجديد مختلفًا عن القديم، قم بإعادة التسمية
    if (newName !== oldName) {
      const oldPath = path.join(imagesDir, oldName);
      const newPath = path.join(imagesDir, newName);
      
      try {
        fs.renameSync(oldPath, newPath);
        renamedImages.push({ oldName, newName });
        console.log(`تمت إعادة تسمية: ${oldName} -> ${newName}`);
      } catch (error) {
        console.error(`خطأ في إعادة تسمية ${oldName}:`, error);
      }
    }
  });
  
  // طباعة ملخص
  console.log(`\nتم إعادة تسمية ${renamedImages.length} صورة بنجاح.`);
  
  // إنشاء ملف نصي بالتغييرات
  if (renamedImages.length > 0) {
    const mappingContent = renamedImages.map(item => `${item.oldName} -> ${item.newName}`).join('\n');
    fs.writeFileSync(path.join(process.cwd(), 'renamed-images.txt'), mappingContent);
    console.log('تم إنشاء ملف renamed-images.txt يحتوي على قائمة بالصور التي تم إعادة تسميتها.');
  }
}); 