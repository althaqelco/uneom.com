const fs = require('fs');
const path = require('path');

// المسار الأساسي للصفحات العربية
const basePath = path.join(__dirname, 'src/app/ar/shop');

// دالة للبحث بشكل تكراري عن ملفات في المجلد
function findTsxFiles(directory) {
  let results = [];
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // استمر بالبحث في المجلد الفرعي
      results = results.concat(findTsxFiles(fullPath));
    } else if (item === 'page.tsx') {
      results.push(fullPath);
    }
  }

  return results;
}

// دالة لمعالجة محتوى الملف وإزالة MainLayout
function processFile(filePath) {
  console.log(`معالجة الملف: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // تحقق مما إذا كان الملف يستخدم MainLayout
  if (content.includes('MainLayout')) {
    // إزالة استيراد MainLayout
    content = content.replace(/import MainLayout from ['"]@\/components\/layout\/MainLayout['"];?\n?/g, '');
    
    // استبدال <MainLayout locale={locale}> بـ <>
    content = content.replace(/<MainLayout locale=\{locale\}>/g, '<>');
    
    // استبدال </MainLayout> بـ </>
    content = content.replace(/<\/MainLayout>/g, '</>');
    
    // كتابة المحتوى المُعدّل إلى الملف
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`تم تعديل الملف: ${filePath}`);
    return true;
  }
  
  return false;
}

// البحث عن جميع ملفات page.tsx وتجهيزها
const productPages = findTsxFiles(basePath);
let modifiedCount = 0;

for (const page of productPages) {
  if (processFile(page)) {
    modifiedCount++;
  }
}

console.log(`تم تعديل ${modifiedCount} من ${productPages.length} صفحة.`); 