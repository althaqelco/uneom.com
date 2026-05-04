import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'src', 'app');

const reportPath = path.join(rootDir, 'broken-links-report.json');
const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

// Flatten all missing URLs into a unique set
const missingUrls = new Set();
Object.values(report).forEach(category => {
  category.forEach(item => {
    missingUrls.add(item.url);
  });
});

console.log(`Found ${missingUrls.size} unique URLs to generate.`);

function formatTitle(urlSegment) {
  return urlSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generatePageContent(urlPath) {
  const isArabic = urlPath.startsWith('/ar/');
  const segments = urlPath.split('/').filter(Boolean);
  
  // Remove 'ar' from segments if present
  const cleanSegments = isArabic ? segments.slice(1) : segments;
  
  const category = cleanSegments[0] || '';
  const itemSlug = cleanSegments[cleanSegments.length - 1] || 'Page';
  const itemName = formatTitle(itemSlug);
  const categoryName = formatTitle(category);
  
  const title = isArabic 
    ? `${itemName} | ${categoryName} - يونيوم للزي الموحد` 
    : `${itemName} | Professional ${categoryName} - UNEOM Uniforms`;
    
  const desc = isArabic
    ? `اكتشف أفضل ${itemName} من يونيوم. نقدم حلول الزي الموحد عالية الجودة في السعودية مع توصيل سريع.`
    : `Discover premium ${itemName} by UNEOM. We provide high-quality professional uniforms across Saudi Arabia with fast delivery.`;
    
  const heading = isArabic ? itemName : itemName;
  const subHeading = isArabic ? `حلول متقدمة لقطاع ${categoryName}` : `Premium Solutions for ${categoryName}`;
  const ctaText = isArabic ? 'احصل على عرض سعر مجاني' : 'Get a Free Quote';
  const contactText = isArabic ? 'تواصل معنا' : 'Contact Us';
  const returnText = isArabic ? 'العودة للرئيسية' : 'Back to Home';

  return `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc}',
};

export default function GeneratedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-10"></div>
        <Container>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400">★</span>
              <span className="text-sm font-medium uppercase tracking-wider">${categoryName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ${heading}
            </h1>
            
            <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              ${desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="${isArabic ? '/ar/quote' : '/quote'}"
                variant="primary" 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold border-0 shadow-lg shadow-orange-500/30"
              >
                ${ctaText} →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <main className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">${subHeading}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              ${isArabic 
                ? 'نقوم حالياً بتحديث هذا القسم بأحدث الكتالوجات والمنتجات. يرجى التواصل مع فريق المبيعات للحصول على التفاصيل الكاملة والأسعار المخصصة.' 
                : 'We are currently updating this section with our latest catalogs and products. Please contact our sales team for full details and custom pricing.'}
            </p>
            
            <div className="flex justify-center gap-4">
               <Link 
                  href="${isArabic ? '/ar/contact' : '/contact'}"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  ${contactText}
                </Link>
                <Link 
                  href="${isArabic ? '/ar' : '/'}"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  ${returnText}
                </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
`;
}

let createdCount = 0;

for (const urlPath of missingUrls) {
  // Prevent overriding root or dangerous paths
  if (urlPath === '/' || urlPath === '/ar') continue;
  
  // Construct physical path inside src/app
  const targetDir = path.join(appDir, urlPath);
  const targetFile = path.join(targetDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Only write if file doesn't exist to prevent overwriting existing valid routes
  if (!fs.existsSync(targetFile)) {
    const content = generatePageContent(urlPath);
    fs.writeFileSync(targetFile, content, 'utf-8');
    createdCount++;
    console.log(`Created: ${urlPath}/page.tsx`);
  } else {
    console.log(`Skipped (already exists): ${urlPath}/page.tsx`);
  }
}

console.log(`\n✅ Successfully generated ${createdCount} missing pages.`);
