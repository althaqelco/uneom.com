import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import LinkPreloader from '@/components/LinkPreloader';
import LocaleProvider from '@/components/providers/LocaleProvider';
import MainLayout from '@/components/layout/MainLayout';
import Script from 'next/script';
import dynamic from 'next/dynamic';

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
  title: 'UNEOM | Uniform Manufacturing in Saudi Arabia',
  description: 'UNEOM is a leading uniform manufacturer in Saudi Arabia, offering high-quality corporate, healthcare, hospitality, and industrial uniforms.',
  keywords: 'uniform, saudi arabia, riyadh, jeddah, dammam, uniform manufacturing, corporate uniforms, healthcare uniforms'
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is" />
        <link rel="stylesheet" href="/css/image-fixes.css" />
        <link rel="icon" href="/favicon/uneom-favicon.png" />
        <link rel="apple-touch-icon" href="/favicon/uneom-favicon.png" />
        <script src="/js/image-handler.js" defer></script>
        {process.env.NODE_ENV === 'development' && (
          <script src="/js/404-checker.js" defer></script>
        )}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
        <link rel="preload" href="/images/default-placeholder.jpg" as="image" />
        <link rel="preload" href="/images/default-placeholder.svg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="img-src 'self' data: https: http: blob: *.vercel.app *.uneom.com *.githubusercontent.com;"
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
      </body>
    </html>
  );
}
