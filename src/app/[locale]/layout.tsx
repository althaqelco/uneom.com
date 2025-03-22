import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from '@/components/providers/theme-provider';
import ArabicLayoutProvider from '@/components/providers/arabic-layout-provider';
import LocaleProvider from '@/components/providers/LocaleProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UNEOM - Premium Uniforms in Saudi Arabia',
  description: 'Custom uniforms for hospitality, healthcare, and corporate sectors in Saudi Arabia.',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Set direction based on locale
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';
  const lang = params.locale === 'ar' ? 'ar' : 'en';

  return (
    <html lang={lang} dir={dir}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <LocaleProvider initialLocale={params.locale}>
            <ArabicLayoutProvider locale={params.locale}>
              {children}
            </ArabicLayoutProvider>
          </LocaleProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
} 