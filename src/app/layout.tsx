import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { JsonLd } from '@/lib/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/seo/schemas';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { WebMCPProvider } from '@/components/WebMCPProvider';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-tajawal',
  adjustFontFallback: true
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
  // Google Search Console ownership token — carried over from the previous
  // architecture; v2 shipped without any site verification.
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
 * Root layout — minimal shell. The EN site layout (`(site)/layout.tsx`)
 * and AR layout (`ar/layout.tsx`) inject the right Header/Footer + lang.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={tajawal.variable} suppressHydrationWarning>
      <head>
        {/* Locale correction: this shared root layout cannot know the path at
            static-render time (calling headers() here would force EVERY page
            to dynamic SSR and destroy the static/CDN cache). So /ar/* pages
            ship as lang="en" in raw HTML; this tiny synchronous script fixes
            <html lang/dir> before first paint, so Googlebot's renderer and
            screen readers see lang="ar" dir="rtl". Gold-standard follow-up:
            migrate /ar to a [lang] segment with per-locale root <html>. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=location.pathname;if(p==='/ar'||p.indexOf('/ar/')===0){var d=document.documentElement;d.lang='ar';d.dir='rtl';}}catch(e){}})();",
          }}
        />
        {/* NOTE: removed the hardcoded LCP preload of
            healthcare-pillar-hero-960.avif — it was injected on EVERY page,
            so ~294 of 296 pages preloaded an image they never render (wasted
            bytes) AND failed to preload their actual LCP hero. Each template's
            hero <img> already carries fetchPriority="high", which is the
            correct per-page LCP signal. Re-introduce per-route preload via the
            page's own <head> if needed. */}
        {/* Preconnect to WhatsApp for faster CTA click */}
        <link rel="preconnect" href="https://wa.me" />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        {/* WhatsApp floating CTA — global, locale-aware */}
        <WhatsAppFloat />
        {/* WebMCP — expose site tools to AI agents via browser */}
        <WebMCPProvider />
        {/* GA4 — property "uneom-c9c0b" (a393573556/p536061119). The GA4
            property + GSC link exist, but v2 shipped with no tag at all
            ("No data received from your website yet"). Loaded via
            @next/third-parties (afterInteractive, non-blocking). The CSP in
            next.config.mjs allowlists googletagmanager/google-analytics. */}
        <GoogleAnalytics gaId="G-RSQSS61R9J" />
        {/* Performance: Speculation Rules + Network-Aware + Battery Saver + SW registration
            Inlined as raw script to avoid 3 React hydration boundaries (Phase 4.1). */}
        <script
          dangerouslySetInnerHTML={{
            __html: [
              // Network-aware lite mode — must run FIRST (synchronous, fast)
              `if('connection' in navigator){var c=navigator.connection;if(c.saveData||/2g|3g/.test(c.effectiveType))document.documentElement.classList.add('uneom-lite-mode')}`,
              // Battery saver — async (getBattery returns a promise)
              `if('getBattery' in navigator)navigator.getBattery().then(function(b){function ck(){b.level<.2&&!b.charging?document.documentElement.classList.add('uneom-power-saver'):document.documentElement.classList.remove('uneom-power-saver')}ck();b.addEventListener('levelchange',ck);b.addEventListener('chargingchange',ck)})`,
              // Speculation Rules — prerender industry pages, prefetch shop/locations (EN + AR)
              `if(HTMLScriptElement.prototype&&'speculationrules' in HTMLScriptElement.prototype){var s=document.createElement('script');s.type='speculationrules';s.textContent=JSON.stringify({prerender:[{source:'document',where:{and:[{href_matches:'/industries/*'},{not:{href_matches:'/industries/*/*'}}]},eagerness:'moderate'},{source:'document',where:{and:[{href_matches:'/ar/industries/*'},{not:{href_matches:'/ar/industries/*/*'}}]},eagerness:'moderate'}],prefetch:[{source:'document',where:{href_matches:'/shop/*'},eagerness:'conservative'},{source:'document',where:{href_matches:'/locations/*'},eagerness:'conservative'},{source:'document',where:{href_matches:'/ar/locations/*'},eagerness:'conservative'}]});document.body.appendChild(s)}`,
              // Service Worker — deferred to idle time (non-critical for first paint)
              `(window.requestIdleCallback||function(cb){setTimeout(cb,2000)})(function(){if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js',{scope:'/'})})`
            ].join(';')
          }}
        />
      </body>
    </html>
  );
}
