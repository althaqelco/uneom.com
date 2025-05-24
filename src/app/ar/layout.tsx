'use client';

import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import { generateMetadata } from '@/lib/metadata';
import LinkPreloader from '@/components/LinkPreloader';
// import ArabicOptimizer from '@/components/ArabicOptimizer'; // Commented out
import LocaleProvider from '@/components/providers/LocaleProvider';
import '@/app/globals.css';
import Script from 'next/script';
import MainLayout from '@/components/layout/MainLayout';
import { usePathname } from 'next/navigation';

// Define fonts for Arabic support - Inter doesn't have Arabic subset, but will be used for Latin characters
const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

// جلب البيانات الوصفية ولكن عدم تصديرها هنا (ستكون في metadata.ts)
const baseMetadata = generateMetadata({
  locale: 'ar',
  page: 'home'
});

// إضافة StructuredData للصفحة العربية
export const ArabicStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "يونيوم",
    "alternateName": "UNEOM",
    "url": "https://uneom.com/ar",
    "logo": "https://uneom.com/images/logo.png",
    "description": "يونيوم هي الشركة الرائدة في تصنيع وتوريد الزي الموحد واليونيفورم المهني في المملكة العربية السعودية. نقدم أزياء موحدة عالية الجودة للرعاية الصحية، الشركات، الضيافة والقطاعات الصناعية.",
    "sameAs": [
      "https://twitter.com/uneom_sa",
      "https://www.facebook.com/uneom.sa",
      "https://www.linkedin.com/company/uneom",
      "https://www.instagram.com/uneom_sa"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك فهد",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-11-000-0000",
      "contactType": "خدمة العملاء",
      "areaServed": "SA",
      "availableLanguage": ["Arabic", "English"]
    },
    "areaServed": [
      "الرياض",
      "جدة",
      "الدمام",
      "مكة المكرمة",
      "المدينة المنورة"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "اليونيفورم والزي الموحد",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "الزي الموحد للرعاية الصحية",
          "description": "اليونيفورم الطبي عالي الجودة للمستشفيات والمراكز الصحية في المملكة العربية السعودية"
        },
        {
          "@type": "OfferCatalog",
          "name": "يونيفورم الشركات",
          "description": "الزي الموحد المكتبي الأنيق للشركات والمؤسسات السعودية"
        },
        {
          "@type": "OfferCatalog",
          "name": "الزي الموحد للضيافة",
          "description": "يونيفورم الفنادق والمطاعم في جميع أنحاء المملكة"
        },
        {
          "@type": "OfferCatalog",
          "name": "اليونيفورم الصناعي",
          "description": "الزي الموحد المتين للقطاعات الصناعية والإنتاجية في السعودية"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// التحقق مما إذا كانت الصفحة تحتوي على خيارات خاصة بالهيدر والفوتر
function shouldHideHeaderFooter(pathname: string | null): boolean {
  if (!pathname) return false;
  
  // التأكد من أن المسار مطابق بالضبط للصفحة الرئيسية
  // أو صفحات القطاعات والخدمات التي تستخدم layouts مع skipMainLayout=true
  const isExactlyHomePage = pathname === '/ar' || pathname === '/ar/';
  const isIndustryPage = pathname.startsWith('/ar/industries/');
  const isServicePage = pathname.startsWith('/ar/services/');
  const isResourcesPage = pathname.startsWith('/ar/resources');
  
  // الصفحة الرئيسية تخفي الهيدر والفوتر بالكامل
  // بينما صفحات القطاعات والخدمات والموارد تستخدم skipMainLayout=true وتحتاج لتجنب التكرار
  return isExactlyHomePage || isIndustryPage || isServicePage || isResourcesPage;
}

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // التحقق من المسار باستخدام usePathname
  const pathname = usePathname();
  
  // تحديد ما إذا كان يجب إخفاء الهيدر والفوتر بناءً على المسار
  const hideHeader = shouldHideHeaderFooter(pathname);
  const hideFooter = shouldHideHeaderFooter(pathname);

  // ملاحظة مهمة:
  // MainLayout هو المكون الوحيد المسؤول عن عرض الهيدر والفوتر
  // الصفحات الفرعية لا يجب أن تضيف هيدر أو فوتر إضافي
  return (
    <LocaleProvider initialLocale="ar">
      <QuoteProvider>
        <MainLayout locale="ar" hideHeader={hideHeader} hideFooter={hideFooter}>
          <ArabicStructuredData />
          {children}
        </MainLayout>
        <LinkPreloader criticalPaths={['/ar/services', '/ar/industries', '/ar/shop']} />
        {/* <ArabicOptimizer /> */}
        <Script id="rtl-support-script" strategy="afterInteractive">
          {`
            (function() {
              // Add RTL class to all elements that need special handling
              document.querySelectorAll('.flex, .grid, .space-x-1, .space-x-2, .space-x-3, .space-x-4, .space-x-6, .space-x-8')
                .forEach(function(el) {
                  el.classList.add('rtl-aware');
                });
                
              // Fix dropdown positioning
              document.querySelectorAll('.dropdown, .dropdown-menu')
                .forEach(function(el) {
                  el.classList.add('rtl-dropdown');
                });
                
              // Fix SVG icons
              document.querySelectorAll('svg[class*="chevron"], svg[class*="arrow"]')
                .forEach(function(el) {
                  el.classList.add('rtl-flip');
                });
            })();
          `}
        </Script>
      </QuoteProvider>
    </LocaleProvider>
  );
} 