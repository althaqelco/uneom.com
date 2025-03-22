import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import { generateMetadata } from '@/lib/metadata';
import LinkPreloader from '@/components/LinkPreloader';
import ArabicOptimizer from '@/components/ArabicOptimizer';
import LocaleProvider from '@/components/providers/LocaleProvider';
import MainLayout from '@/components/layout/MainLayout';
import '@/app/globals.css';
import Script from 'next/script';

// Define fonts for Arabic support - Inter doesn't have Arabic subset, but will be used for Latin characters
const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

// Generate Arabic-specific metadata
const baseMetadata = generateMetadata({
  locale: 'ar',
  page: 'home'
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: baseMetadata.metadataBase,
  // We can't use 'other' with custom font preloading due to type constraints
  // This will be handled by ArabicOptimizer component instead
};

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

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} font-sans rtl`}>
        <LocaleProvider initialLocale="ar">
          <QuoteProvider>
            <MainLayout locale="ar">
              <ArabicStructuredData />
              {children}
            </MainLayout>
          </QuoteProvider>
          <LinkPreloader criticalPaths={['/ar/services', '/ar/industries', '/ar/shop']} />
          <ArabicOptimizer />
        </LocaleProvider>
        
        {/* Script to ensure consistent RTL experience across browsers */}
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
      </body>
    </html>
  );
} 