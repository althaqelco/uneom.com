/**
 * سكريبت لتثبيت المكتبات اللازمة لتحسين الصور
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// قائمة المكتبات المطلوبة
const requiredPackages = [
  'sharp',
  'fs-extra'
];

// التحقق من وجود المكتبات في package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} catch (error) {
  console.error('خطأ في قراءة ملف package.json:', error);
  process.exit(1);
}

// جمع المكتبات المفقودة
const missingPackages = requiredPackages.filter(pkg => {
  return !packageJson.dependencies[pkg] && !packageJson.devDependencies[pkg];
});

// تثبيت المكتبات المفقودة
if (missingPackages.length > 0) {
  console.log(`تثبيت المكتبات المفقودة: ${missingPackages.join(', ')}`);
  
  try {
    execSync(`npm install --save ${missingPackages.join(' ')}`, { stdio: 'inherit' });
    console.log('تم تثبيت المكتبات بنجاح.');
  } catch (error) {
    console.error('خطأ في تثبيت المكتبات:', error);
    process.exit(1);
  }
} else {
  console.log('جميع المكتبات المطلوبة مثبتة بالفعل.');
}

// إنشاء مجلد الصور المحسنة إذا لم يكن موجودًا
const optimizedDir = path.join(process.cwd(), 'public/images/optimized');
if (!fs.existsSync(optimizedDir)) {
  console.log('إنشاء مجلد الصور المحسنة...');
  fs.mkdirSync(optimizedDir, { recursive: true });
  console.log('تم إنشاء مجلد الصور المحسنة بنجاح.');
}

console.log('تم الانتهاء من تثبيت المكتبات وإعداد البيئة بنجاح.'); 