import { Tajawal } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { JsonLd } from '@/lib/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/seo/schemas';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { WebMCPProvider } from '@/components/WebMCPProvider';
import '@/app/globals.css';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-tajawal',
  adjustFontFallback: true
});

/**
 * Shared <html> shell for both locale root layouts.
 *
 * The site has TWO root layouts — `(site)/layout.tsx` (English) and
 * `(ar)/layout.tsx` (Arabic) — so each locale can emit its own
 * `<html lang dir>` in the STATIC HTML. Previously a single root layout
 * hardcoded lang="en" and a client-side script flipped it to ar/rtl, which
 * meant every non-JS consumer (AI crawlers, answer engines, voice assistants,
 * plain text extractors) saw Arabic pages declared as English.
 *
 * Everything that is genuinely global — fonts, org/website JSON-LD, analytics,
 * WhatsApp CTA, WebMCP, perf scripts — lives here so the two root layouts stay
 * thin and can never drift apart.
 */
export function RootShell({
  lang,
  dir,
  children
}: {
  lang: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  children: React.ReactNode;
}) {
  return (
    <html lang={lang === 'ar' ? 'ar-SA' : 'en'} dir={dir} className={tajawal.variable} suppressHydrationWarning>
      <head>
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
        {/* GA4 — property "uneom-c9c0b". Loaded via @next/third-parties
            (afterInteractive, non-blocking). CSP in next.config.mjs
            allowlists googletagmanager/google-analytics. */}
        <GoogleAnalytics gaId="G-RSQSS61R9J" />
        {/* Performance: Speculation Rules + Network-Aware + Battery Saver + SW
            registration. Inlined as one raw script to avoid extra React
            hydration boundaries. */}
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
