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
                
              // Preload Arabic fonts programmatically
              const fontUrls = [
                '/fonts/ar/Cairo-Regular.woff2',
                '/fonts/ar/Cairo-Bold.woff2',
                '/fonts/ar/Cairo-Medium.woff2',
                '/fonts/ar/Cairo-SemiBold.woff2'
              ];
              
              fontUrls.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'font';
                link.type = 'font/woff2';
                link.href = url;
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
} 