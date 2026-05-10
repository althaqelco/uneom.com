import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import { JsonLd } from '@/lib/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/seo/schemas';
import { SpeculationRules } from '@/components/perf/SpeculationRules';
import { NetworkAware } from '@/components/perf/NetworkAware';
import { BatterySaver } from '@/components/perf/BatterySaver';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-tajawal'
});

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
 * Root layout — minimal shell. The EN site layout (`(site)/layout.tsx`)
 * and AR layout (`ar/layout.tsx`) inject the right Header/Footer + lang.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={tajawal.variable}>
      <head>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        {/* WhatsApp floating CTA — global, locale-aware */}
        <WhatsAppFloat />
        {/* Performance optimization components */}
        <SpeculationRules />
        <NetworkAware />
        <BatterySaver />
        {/* Service Worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js',{scope:'/'})}`
          }}
        />
      </body>
    </html>
  );
}
