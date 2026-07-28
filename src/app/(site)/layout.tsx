import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RootShell } from '@/components/layout/RootShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://uneom.com'),
  title: {
    default: 'UNEOM — Saudi Professional Uniforms | Healthcare, Hospitality, Aviation, Manufacturing',
    template: '%s | UNEOM'
  },
  description:
    'Saudi Arabia\'s professional uniform partner since 2013. Bulk programmes for healthcare, hospitality, aviation, corporate, education, manufacturing, security, and retail — across all 24 cities. ISO 9001 + OEKO-TEX certified.',
  keywords: [
    'UNEOM', 'Saudi uniforms', 'professional uniforms KSA', 'medical scrubs Saudi Arabia',
    'hospitality uniforms', 'aviation uniforms', 'corporate workwear', 'industrial uniforms',
    'B2B uniform manufacturer', 'Riyadh uniforms', 'Jeddah uniforms'
  ],
  authors: [{ name: 'UNEOM', url: 'https://uneom.com' }],
  creator: 'UNEOM',
  publisher: 'UNEOM',
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  // Google Search Console ownership token.
  verification: { google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is' },
  alternates: {
    canonical: 'https://uneom.com/',
    languages: {
      en: 'https://uneom.com/',
      'ar-SA': 'https://uneom.com/ar/',
      'x-default': 'https://uneom.com/'
    }
  },
  openGraph: {
    type: 'website', locale: 'en_US', alternateLocale: 'ar_SA',
    url: 'https://uneom.com/', siteName: 'UNEOM',
    title: 'UNEOM — Saudi Professional Uniforms',
    description: 'B2B uniform programmes across 8 industries and 24 Saudi cities. ISO 9001 + OEKO-TEX certified.',
    images: [{ url: '/images/uneom-og-image.jpg', width: 1200, height: 630, alt: 'UNEOM — Saudi Professional Uniforms' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNEOM — Saudi Professional Uniforms',
    description: 'B2B uniform programmes across 8 industries and 24 Saudi cities.',
    images: ['/images/uneom-social-share.jpg'],
    creator: '@uneom_sa'
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
 * ENGLISH ROOT LAYOUT — emits `<html lang="en" dir="ltr">`.
 *
 * This is a root layout (there is no `src/app/layout.tsx`); the Arabic tree has
 * its own at `(ar)/layout.tsx`. Two root layouts is what lets each locale ship
 * the correct `lang`/`dir` in STATIC HTML, with no client-side correction.
 *
 * Group `(site)` doesn't appear in the URL: `(site)/page.tsx` → `/`.
 */
export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en" dir="ltr">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header lang="en" />
      <main id="main" className="flex-1">{children}</main>
      <Footer lang="en" />
    </RootShell>
  );
}
