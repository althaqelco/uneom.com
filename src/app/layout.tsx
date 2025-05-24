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
  title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia - Custom Designs & Quality Fabrics',
  description: 'Leading uniform manufacturer in Saudi Arabia providing high-quality corporate, healthcare, hospitality, and industrial uniforms with custom designs, premium fabrics, and nationwide delivery to Riyadh, Jeddah, Dammam.',
  keywords: 'uniform Saudi Arabia, uniform manufacturer, corporate uniforms, medical uniforms, hospitality uniforms, industrial uniforms, custom uniforms Saudi, professional workwear, uniform supplier Riyadh, uniform Jeddah, uniform Dammam',
  authors: [{ name: 'UNEOM Expert Team' }],
  creator: 'UNEOM',
  publisher: 'UNEOM',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_SA',
    url: 'https://uneom.com',
    siteName: 'UNEOM',
    title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
    description: 'Leading uniform manufacturer in Saudi Arabia providing high-quality corporate, healthcare, hospitality, and industrial uniforms with custom designs and premium fabrics.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM - Premium Uniform Manufacturer in Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
    description: 'Leading uniform manufacturer in Saudi Arabia providing high-quality corporate, healthcare, hospitality, and industrial uniforms.',
    images: ['/images/og-image.jpg'],
    creator: '@uneom',
    site: '@uneom',
  },
  alternates: {
    canonical: 'https://uneom.com',
    languages: {
      'en-SA': 'https://uneom.com',
      'ar-SA': 'https://uneom.com/ar',
    },
  },
  verification: {
    google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is',
  },
  category: 'Manufacturing',
};

// Critical images to preload
const CRITICAL_IMAGES = [
  '/images/default-placeholder.jpg',
  '/images/banner-placeholder.jpg',
  '/images/default-placeholder.jpg',
  '/images/default-placeholder.jpg'
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
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/uneom-favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        
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
        
        {/* Enhanced Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http: blob: *.vercel.app *.uneom.com *.githubusercontent.com; connect-src 'self' https://www.google-analytics.com https://vercel.live;"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
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
                  src="/images/default-placeholder.jpg" 
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
                e.target.src = '/images/default-placeholder.jpg';
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
        
        {/* Statcounter Analytics */}
        <Script id="statcounter-setup" strategy="afterInteractive">
          {`
            try {
              var sc_project=13105039; 
              var sc_invisible=1; 
              var sc_security="f68332e2";
              
              // Load counter script only if not blocked
              // Create a test image to check if requests to statcounter domain are blocked
              var testImg = new Image();
              testImg.onerror = function() {
                console.log('StatCounter might be blocked by browser extensions.');
              };
              testImg.onload = function() {
                // Only load the script if the test image loads successfully
                var sc = document.createElement('script');
                sc.src = "https://www.statcounter.com/counter/counter.js";
                sc.async = true;
                document.body.appendChild(sc);
              };
              testImg.src = "https://c.statcounter.com/ping.gif";
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
