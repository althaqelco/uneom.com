import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import LinkPreloader from '@/components/LinkPreloader';
import LocaleProvider from '@/components/providers/LocaleProvider';
import MainLayout from '@/components/layout/MainLayout';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

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
        
        {/* Enhanced Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
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
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/default-placeholder.jpg" as="image" />
        <link rel="preload" href="/images/og-image.jpg" as="image" />
        <link rel="preload" href="/css/image-fixes.css" as="style" />
        
        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/image-fixes.css" />
        
        {/* Scripts */}
        <script src="/js/image-handler.js" defer></script>
        {process.env.NODE_ENV === 'development' && (
          <script src="/js/404-checker.js" defer></script>
        )}
        
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
        
        {/* Script para asignar URLs base a las imágenes */}
        <Script id="image-base-url-helper" strategy="afterInteractive">
          {`
            // Agregar URLs base a todas las imágenes que no las tengan
            (function() {
              if (typeof window !== 'undefined') {
                // Función para corregir rutas de imágenes
                window.fixImagePaths = function() {
                  const images = document.querySelectorAll('img:not([data-fixed="true"])');
                  const baseUrl = window.location.origin;
                  const isVercel = window.location.hostname.includes('vercel.app');
                  
                  images.forEach(img => {
                    const src = img.getAttribute('src') || '';
                    
                    // Si no es una URL absoluta, corregirla
                    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                      const fixedSrc = src.startsWith('/') 
                        ? baseUrl + src 
                        : baseUrl + '/' + src;
                      
                      // Establecer una propiedad de respaldo
                      img.setAttribute('data-original-src', src);
                      
                      // En Vercel, intentar diferentes variaciones
                      if (isVercel) {
                        // Intentar con y sin slash inicial
                        const variations = [
                          fixedSrc,
                          src.startsWith('/') ? baseUrl + src.substring(1) : fixedSrc,
                          src.startsWith('/') ? src : '/' + src,
                          '/_next/static/images/' + src.split('/').pop()
                        ];
                        
                        // Probar cada variación
                        let imgLoaded = false;
                        variations.forEach((variation, index) => {
                          if (!imgLoaded) {
                            const testImg = new Image();
                            testImg.onload = function() {
                              if (!imgLoaded) {
                                img.setAttribute('src', variation);
                                img.setAttribute('data-fixed', 'true');
                                imgLoaded = true;
                              }
                            };
                            testImg.src = variation;
                            
                            // Si la imagen ya está en caché, el evento onload podría no dispararse
                            if (testImg.complete) {
                              img.setAttribute('src', variation);
                              img.setAttribute('data-fixed', 'true');
                              imgLoaded = true;
                            }
                          }
                        });
                      } else {
                        // En desarrollo local, simplemente usar la URL fija
                        img.setAttribute('src', fixedSrc);
                        img.setAttribute('data-fixed', 'true');
                      }
                      
                      // Configurar manejo de errores
                      img.onerror = function() {
                        // Si la URL corregida falla, intentar con la original
                        if (img.getAttribute('src') !== src) {
                          img.setAttribute('src', src);
                        } else {
                          // Si ambas fallan, usar la imagen de respaldo
                          img.setAttribute('src', '/images/default-placeholder.jpg');
                        }
                      };
                    }
                  });
                };
                
                // Ejecutar inicialmente y después de cada carga de página
                window.fixImagePaths();
                window.addEventListener('load', window.fixImagePaths);
                
                // Crear una imagen de respaldo SVG en caso de que todo falle
                window.fallbackImageDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQ4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQ4MCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjMyMCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODgiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                
                // Precargar la imagen de respaldo
                const preloadFallback = new Image();
                preloadFallback.src = '/images/default-placeholder.jpg';
              }
            })();
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
        
        {/* Vercel Analytics and Speed Insights - May 2025 */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
