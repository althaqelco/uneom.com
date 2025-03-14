import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ArabicLayoutProvider } from '@/components/providers/arabic-layout-provider';
import '../globals.css';
import ArabicOptimizer from '@/components/ArabicOptimizer';
import CSPHeaders from '@/components/CSPHeaders';
import ImagePreloader from '@/components/ImagePreloader';

// Define fonts
const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isArabic = params.locale === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  return (
    <html lang={params.locale} dir={dir} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://uneom-com.vercel.app" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://uneom.com" crossOrigin="anonymous" />
      </head>
      <body className={`${dir === 'rtl' ? 'rtl' : 'ltr'} ${inter.variable} font-sans min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ArabicLayoutProvider isRtl={dir === 'rtl'}>
            {isArabic && <ArabicOptimizer />}
            <CSPHeaders />
            <ImagePreloader />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
            <SpeedInsights />
            <Analytics />
          </ArabicLayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 