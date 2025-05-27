import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import LinkPreloader from '@/components/LinkPreloader';
import LocaleProvider from '@/components/providers/LocaleProvider';
import MainLayout from '@/components/layout/MainLayout';
import Script from 'next/script';
import dynamic from 'next/dynamic';
// Removed Vercel Analytics for Netlify deployment
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Analytics } from '@vercel/analytics/react';

// Importar ImageResolver dinámicamente para evitar errores de SSR
const ImageResolver = dynamic(() => import('@/components/ImageResolver'), { 
  ssr: false 
});

// Importar el depurador de imágenes dinámicamente
const ImageDebugger = dynamic(() => import('@/components/ui/ImageDebugger'), {
  ssr: false
});

// Importar el corrector de imágenes para Vercel
const VercelImageFixer = dynamic(() => import('@/components/VercelImageFixer'), {
  ssr: false
});

// Import new image components
const ImagePreloader = dynamic(() => import('@/components/ui/ImagePreloader'), {
  ssr: false
});

const EmergencyImageLoader = dynamic(() => import('@/components/ui/EmergencyImageLoader'), {
  ssr: false
});

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية | UNEOM',
  description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية. نخدم القطاعات الطبية والطيران والضيافة والتعليم والأمن والصناعة بأعلى معايير الجودة. خدمة شاملة في الرياض وجدة والدمام.',
  keywords: 'الأزياء المهنية السعودية, الزي الموحد, يونيوم, أزياء طبية, أزياء الطيران, الأزياء الصناعية, أزياء الضيافة, الأزياء التعليمية, أزياء الأمن, تصنيع الأزياء المهنية, الزي المدرسي, سكرابز طبية, أزياء المستشفيات, الرياض, جدة, الدمام, uniform Saudi Arabia, medical scrubs, aviation uniforms, UNEOM',
  authors: [{ name: 'فريق خبراء يونيوم', url: 'https://uneom.com/about' }],
  creator: 'UNEOM - يونيوم',
  publisher: 'UNEOM - يونيوم للأزياء المهنية',
  applicationName: 'UNEOM - يونيوم',
  generator: 'Next.js 14.2.23',
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 30,
      'max-image-preview': 'large',
      'max-snippet': 160,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: ['en_SA', 'en_US'],
    url: 'https://uneom.com',
    siteName: 'UNEOM - يونيوم للأزياء المهنية',
    title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
    description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية. نخدم جميع القطاعات بأعلى معايير الجودة.',
    images: [
      {
        url: 'https://uneom.com/images/og/uneom-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
        type: 'image/jpeg',
      },
      {
        url: 'https://uneom.com/images/og/uneom-logo-og.jpg',
        width: 800,
        height: 600,
        alt: 'شعار شركة يونيوم للأزياء المهنية',
        type: 'image/jpeg',
      },
    ],
    countryName: 'Saudi Arabia',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@uneom_sa',
    creator: '@uneom_sa',
    title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
    description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية',
    images: {
      url: 'https://uneom.com/images/twitter/uneom-twitter-card.jpg',
      alt: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
      width: 1200,
      height: 630,
    },
  },
  alternates: {
    canonical: 'https://uneom.com',
    languages: {
      'ar-SA': 'https://uneom.com',
      'en-SA': 'https://uneom.com/en',
      'ar': 'https://uneom.com/ar',
      'en': 'https://uneom.com/en',
      'x-default': 'https://uneom.com',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://uneom.com/mobile',
    },
    types: {
      'application/rss+xml': 'https://uneom.com/rss.xml',
    },
  },
  verification: {
    google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
      'facebook-domain-verification': 'facebook-verification-code',
    },
  },
  category: 'Manufacturing',
  classification: 'Business',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'يونيوم',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#1e40af',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#1e40af',
  },
};

// Critical images to preload
const CRITICAL_IMAGES = [
  '/images/og-image.jpg',
  '/images/banner-placeholder.jpg',
  '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg'
];

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  const locale = params?.locale || 'en';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="google-site-verification" content="k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is" />
        
        {/* Performance and Security Headers - May 2025 Standards */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Enhanced Security Headers - X-Frame-Options moved to netlify.toml */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        
        {/* Google 2025 SEO Enhancements */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.country" content="Saudi Arabia" />
        <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        <meta name="language" content="ar" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="pragma" content="no-cache" />
        <meta name="cache-control" content="no-cache" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="طريق الملك فهد، حي العليا" />
        <meta name="business:contact_data:locality" content="الرياض" />
        <meta name="business:contact_data:region" content="منطقة الرياض" />
        <meta name="business:contact_data:postal_code" content="11564" />
        <meta name="business:contact_data:country_name" content="Saudi Arabia" />
        <meta name="business:contact_data:phone_number" content="+966-11-234-5678" />
        <meta name="business:contact_data:website" content="https://uneom.com" />
        
        {/* Favicon and Icons - Enhanced for 2025 */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#1e40af" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-TileImage" content="/images/icons/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Critical resource preloading - removed problematic preloads */}
        <link rel="preload" href="/css/image-fixes.css" as="style" />
        
        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/image-fixes.css" />
        
        {/* Scripts - removed problematic scripts causing NextRouter issues */}
        
        {/* Hreflang Tags for International SEO */}
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar" />
        <link rel="alternate" hrefLang="en" href="https://uneom.com" />
        <link rel="alternate" hrefLang="ar-SA" href="https://uneom.com/ar" />
        <link rel="alternate" hrefLang="en-US" href="https://uneom.com" />
        <link rel="alternate" hrefLang="x-default" href="https://uneom.com" />
        
        {/* Enhanced Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http: blob: *.vercel.app *.uneom.com *.githubusercontent.com; connect-src 'self' https://www.google-analytics.com https://vercel.live;"
        />
        
        {/* Enhanced Structured Data for Google 2025 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "UNEOM - يونيوم",
                "alternateName": ["يونيوم للأزياء المهنية", "UNEOM Uniforms", "يونيوم"],
                "url": "https://uneom.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://uneom.com/images/logo/uneom-logo.png",
                  "width": 300,
                  "height": 100
                },
                "description": "شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "طريق الملك فهد، حي العليا",
                  "addressLocality": "الرياض",
                  "addressRegion": "منطقة الرياض",
                  "postalCode": "11564",
                  "addressCountry": "SA"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+966-11-234-5678",
                  "contactType": "customer service",
                  "areaServed": "SA",
                  "availableLanguage": ["Arabic", "English"]
                },
                "sameAs": [
                  "https://www.linkedin.com/company/uneom",
                  "https://twitter.com/uneom_sa",
                  "https://www.instagram.com/uneom_uniforms",
                  "https://www.facebook.com/uneom.sa"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "1247",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "UNEOM - يونيوم للأزياء المهنية",
                "alternateName": "يونيوم",
                "url": "https://uneom.com",
                "description": "الموقع الرسمي لشركة يونيوم المتخصصة في تصنيع الأزياء المهنية والزي الموحد في السعودية",
                "inLanguage": ["ar-SA", "en-US"],
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://uneom.com/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "UNEOM",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://uneom.com/images/logo/uneom-logo.png"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "UNEOM - يونيوم للأزياء المهنية",
                "image": "https://uneom.com/images/logo/uneom-logo.png",
                "telephone": "+966-11-234-5678",
                "email": "info@uneom.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "طريق الملك فهد، حي العليا",
                  "addressLocality": "الرياض",
                  "addressRegion": "منطقة الرياض",
                  "postalCode": "11564",
                  "addressCountry": "SA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 24.7136,
                  "longitude": 46.6753
                },
                "url": "https://uneom.com",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    "opens": "08:00",
                    "closes": "17:00"
                  }
                ],
                "servedCuisine": "Professional Uniforms Manufacturing",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "كتالوج الأزياء المهنية",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "أزياء طبية",
                        "category": "Medical Uniforms"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "أزياء الطيران",
                        "category": "Aviation Uniforms"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "أزياء الشركات",
                        "category": "Corporate Uniforms"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <LocaleProvider initialLocale={locale}>
          <QuoteProvider>
            <MainLayout locale={locale}>
              <ImagePreloader imagePaths={CRITICAL_IMAGES}>
                {children}
              </ImagePreloader>
              
              <ImageResolver />
              <ImageDebugger />
              <VercelImageFixer />
              <div style={{ display: 'none' }}>
                <EmergencyImageLoader 
                  src="/images/og-image.jpg"
                  alt="Preloaded Logo"
                  showDebugInfo={true}
                />
              </div>
            </MainLayout>
            <LinkPreloader />
          </QuoteProvider>
        </LocaleProvider>
        
        {/* Simplified image handling - removed complex script causing NextRouter issues */}
        <Script id="simple-image-fallback" strategy="afterInteractive">
          {`
            // Simple image error handling
            document.addEventListener('error', function(e) {
              if (e.target.tagName === 'IMG') {
                e.target.src = '/images/healthcare/medical_hijab_uniform.jpg';
              }
            }, true);
          `}
        </Script>
        
        {/* سكريبت تبديل اللغة - تم تحسينه للتوافق مع hydration */}
        <Script id="language-switch-helper" strategy="afterInteractive">
          {`
            // تحديد اللغة واتجاه العناصر
            (function() {
              if (typeof window !== 'undefined') {
                // تحديد اللغة الحالية
                if (window.location.pathname.startsWith('/ar')) {
                  document.documentElement.lang = 'ar';
                  document.documentElement.setAttribute('dir', 'rtl');
                } else {
                  document.documentElement.lang = 'en';
                  document.documentElement.setAttribute('dir', 'ltr');
                }
                
                // إنهاء حالة التحميل
                if (sessionStorage.getItem('isLanguageSwitch') === 'true') {
                  sessionStorage.removeItem('isLanguageSwitch');
                  document.documentElement.classList.remove('language-transition');
                }
                
                // إزالة أي مؤشرات تحميل بعد فترة قصيرة
                setTimeout(function() {
                  document.documentElement.classList.remove('language-transition');
                }, 2000);
              }
            })();
          `}
        </Script>
        
        {/* Statcounter Analytics - Fixed preload issues */}
        <Script id="statcounter-setup" strategy="afterInteractive">
          {`
            try {
              var sc_project=13105039;
              var sc_invisible=1;
              var sc_security="f68332e2";
              
              // Load counter script directly without preload to avoid console warnings
              var sc = document.createElement('script');
              sc.src = "https://www.statcounter.com/counter/counter.js";
              sc.async = true;
              sc.onerror = function() {
                console.log('StatCounter might be blocked by browser extensions.');
              };
              document.body.appendChild(sc);
            } catch (e) {
              console.log('Error setting up StatCounter:', e);
            }
          `}
        </Script>
        <noscript>
          <div className="statcounter">
            <a
              title="free web stats"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13105039/0/f68332e2/1/"
                alt="free web stats"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
        
        {/* Analytics removed for Netlify deployment - using StatCounter instead */}
      </body>
    </html>
  );
}
