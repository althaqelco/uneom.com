'use client';

import { generateMetadata } from '@/lib/metadata';
import LinkPreloader from '@/components/LinkPreloader';
// import ArabicOptimizer from '@/components/ArabicOptimizer'; // Commented out
import '@/app/globals.css';
import Script from 'next/script';

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

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ملاحظة مهمة:
  // لا نستخدم MainLayout هنا لأن الـ root layout يستخدمه بالفعل
  // هذا يمنع تكرار الهيدر والفوتر
  return (
    <>
      <ArabicStructuredData />
      {children}
      <LinkPreloader criticalPaths={['/ar/services', '/ar/industries', '/ar/shop']} />
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
    </>
  );
}