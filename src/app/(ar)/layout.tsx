import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RootShell } from '@/components/layout/RootShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://uneom.com'),
  title: {
    default: 'UNEOM — الأزياء المهنية السعودية | الرعاية الصحية والضيافة والطيران والتصنيع',
    template: '%s | UNEOM'
  },
  description: 'شريك المملكة العربية السعودية في الأزياء المهنية منذ 2013. برامج زي مؤسسي للرعاية الصحية والضيافة والطيران والمؤسسات والتعليم والتصنيع والأمن والتجزئة عبر جميع الـ24 مدينة.',
  authors: [{ name: 'UNEOM', url: 'https://uneom.com' }],
  creator: 'UNEOM',
  publisher: 'UNEOM',
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  verification: { google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is' },
  alternates: {
    canonical: 'https://uneom.com/ar/',
    languages: {
      en: 'https://uneom.com/',
      'ar-SA': 'https://uneom.com/ar/',
      'x-default': 'https://uneom.com/'
    }
  },
  openGraph: {
    type: 'website', locale: 'ar_SA', alternateLocale: 'en_US',
    url: 'https://uneom.com/ar/', siteName: 'UNEOM',
    title: 'UNEOM — الأزياء المهنية السعودية',
    description: 'برامج زي مؤسسي عبر 8 قطاعات و24 مدينة سعودية.',
    images: [{ url: '/images/uneom-og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNEOM — الأزياء المهنية السعودية',
    description: 'برامج زي مؤسسي عبر 8 قطاعات و24 مدينة سعودية.'
  },
  icons: { icon: '/images/UNEOM_FAVICON.png', apple: '/images/UNEOM_FAVICON.png' },
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0F2C4D' }
  ],
  width: 'device-width', initialScale: 1, maximumScale: 5
};

/**
 * ARABIC ROOT LAYOUT — emits `<html lang="ar-SA" dir="rtl">` in STATIC HTML.
 *
 * Arabic lives in its own route group so it can be a second root layout
 * alongside `(site)/layout.tsx` (English). The group `(ar)` is not part of the
 * URL, so `(ar)/ar/page.tsx` → `/ar/`.
 *
 * This replaces the previous approach — one shared root layout hardcoding
 * lang="en" plus a client-side script that flipped lang/dir before paint.
 * That left every Arabic page declared as English for anything that doesn't
 * execute JavaScript: AI crawlers and answer engines (GPTBot, ClaudeBot,
 * PerplexityBot, Applebot…), voice assistants, and text extractors.
 */
export default function ArRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="ar" dir="rtl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        انتقل إلى المحتوى
      </a>
      <Header lang="ar" />
      <main id="main" className="flex-1">{children}</main>
      <Footer lang="ar" />
    </RootShell>
  );
}
