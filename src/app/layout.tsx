import React from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { PhantomTrap } from '@/components/security/PhantomTrap';
import { SpeculationRules } from '@/components/performance/SpeculationRules';

// CRITICAL: BatterySaverProvider wraps the ENTIRE app. Importing it with
// dynamic({ ssr: false }) forces BAILOUT_TO_CLIENT_SIDE_RENDERING for the
// whole tree — every page ships as an EMPTY shell (zero content for
// Googlebot). It is a 'use client' component with all browser APIs inside
// useEffect, so it is fully SSR-safe as a static import. NEVER re-add ssr:false here.
import { BatterySaverProvider } from '@/components/performance/BatterySaver';

const ScrollDepthTracker = dynamic(
  () => import('@/components/behavior/ScrollDepthTracker').then(mod => ({ default: mod.ScrollDepthTracker })),
  { ssr: false }
);

const StickyWhatsApp = dynamic(
  () => import('@/components/behavior/StickyWhatsApp').then(mod => ({ default: mod.StickyWhatsApp })),
  { ssr: false }
);

const GoogleAnalytics = dynamic(
  () => import('@/components/analytics/GoogleAnalytics').then(mod => ({ default: mod.GoogleAnalytics })),
  { ssr: false }
);

const WebVitalsReporter = dynamic(
  () => import('@/components/analytics/WebVitalsReporter').then(mod => ({ default: mod.WebVitalsReporter })),
  { ssr: false }
);

const CookieConsent = dynamic(
  () => import('@/components/compliance/CookieConsent').then(mod => ({ default: mod.CookieConsent })),
  { ssr: false }
);

const ExitIntentPopup = dynamic(
  () => import('@/components/behavior/ExitIntentPopup').then(mod => ({ default: mod.ExitIntentPopup })),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

// Viewport configuration - separated from metadata per Next.js 14 requirements
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: 'UNEOM | يونيوم - Professional Uniforms & Workwear in Saudi Arabia',
  description: 'Leading provider of professional uniforms and workwear in Saudi Arabia. Quality medical scrubs, corporate attire, and industrial uniforms.',
  metadataBase: new URL('https://uneom.com'),
  keywords: 'الأزياء المهنية السعودية, الزي الموحد, يونيوم, أزياء طبية, أزياء الطيران, الأزياء الصناعية, أزياء الضيافة, الأزياء التعليمية, أزياء الأمن, تصنيع الأزياء المهنية, الزي المدرسي, سكرابز طبية, أزياء المستشفيات, الرياض, جدة, الدمام, uniform Saudi Arabia, medical scrubs, aviation uniforms, UNEOM',
  authors: [{ name: 'فريق خبراء يونيوم', url: 'https://uneom.com/about' }],
  creator: 'UNEOM - يونيوم',
  publisher: 'UNEOM - يونيوم للأزياء المهنية',
  applicationName: 'UNEOM - يونيوم',
  generator: 'Next.js 14.2.23',
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}},
  openGraph: {
    type: 'website',
    locale: 'en_SA',
    alternateLocale: ['ar_SA'],
    url: 'https://uneom.com',
    siteName: 'UNEOM - يونيوم للأزياء المهنية',
    title: 'Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia | UNEOM',
    description: 'UNEOM is the leading manufacturer of professional uniforms and workwear in Saudi Arabia. Quality medical scrubs, corporate attire, and industrial uniforms.',
    images: [
      {
        url: 'https://uneom.com/images/og/uneom-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM - Leading Professional Uniforms Manufacturer in Saudi Arabia',
        type: 'image/jpeg'},
      {
        url: 'https://uneom.com/images/og/uneom-logo-og.jpg',
        width: 800,
        height: 600,
        alt: 'UNEOM Professional Uniforms Logo',
        type: 'image/jpeg'},
    ],
    countryName: 'Saudi Arabia'},
  twitter: {
    card: 'summary_large_image',
    site: '@uneom_sa',
    creator: '@uneom_sa',
    title: 'Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia | UNEOM',
    description: 'UNEOM is the leading manufacturer of professional uniforms and workwear in Saudi Arabia',
    images: {
      url: 'https://uneom.com/images/twitter/uneom-twitter-card.jpg',
      alt: 'UNEOM - Leading Professional Uniforms Manufacturer in Saudi Arabia',
      width: 1200,
      height: 630}},
  // NOTE: no site-wide `alternates` here on purpose.
  // A root-level canonical would be inherited by every page that does not
  // define its own, mass-canonicalizing them to the homepage. Each page
  // must declare its own canonical + hreflang via generateMetadata.
  verification: {
    google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is'},
  category: 'Manufacturing',
  classification: 'Business',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'UNEOM',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#1e40af',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#1e40af'}};

// Critical images to preload
const CRITICAL_IMAGES = [
  '/images/og-image.jpg',
  '/images/hero/uniform-hero-2.jpg',
  '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg'
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Correct lang/dir for Arabic routes before first paint.
            The root layout cannot know the pathname during static render,
            so /ar/* would otherwise ship with lang="en" dir="ltr".
            Proper long-term fix: split into (en)/ and ar/ root layouts. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=location.pathname;if(p==='/ar'||p.indexOf('/ar/')===0){var d=document.documentElement;d.lang='ar';d.dir='rtl';}}catch(e){}})();",
          }}
        />
        {/* Favicons are served via the App Router file convention:
            src/app/icon.png (512×512) and src/app/apple-icon.png (180×180).
            The previous hardcoded links pointed at files that did not exist
            (/favicon.ico, /favicon.svg, /icons/*) — all 404s. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* hreflang is emitted per-page via the Metadata API (alternates.languages).
            Do NOT hardcode homepage-wide alternate links here — they would be
            injected into every page and conflict with the per-page values. */}

        {/* Canonical Organization entity — single source of truth.
            Page-level schemas must reference it via
            {"@id": "https://uneom.com/#organization"} instead of
            re-declaring their own Organization with divergent facts.
            (foundingDate / numberOfEmployees intentionally omitted until
            verified business values are provided — previous builds shipped
            three conflicting founding years: 2003, 2013, 2015.) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://uneom.com/#organization",
              "name": "UNEOM",
              "alternateName": "يونيوم للأزياء المهنية",
              "url": "https://uneom.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://uneom.com/images/uneom-logo.png",
                "width": 600,
                "height": 200
              },
              "image": "https://uneom.com/images/og/uneom-og-image.jpg",
              "description": "Leading manufacturer of professional uniforms and workwear in Saudi Arabia. ISO 9001 certified.",
              "telephone": "+966564612017",
              "email": "info@uneom.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966564612017",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Fahd Road, Al Olaya District",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Region",
                "postalCode": "12211",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "areaServed": [
                { "@type": "City", "name": "Riyadh" },
                { "@type": "City", "name": "Jeddah" },
                { "@type": "City", "name": "Dammam" },
                { "@type": "City", "name": "Mecca" },
                { "@type": "City", "name": "Medina" },
                { "@type": "City", "name": "Khobar" },
                { "@type": "City", "name": "Tabuk" },
                { "@type": "City", "name": "Abha" },
                { "@type": "City", "name": "Taif" },
                { "@type": "City", "name": "Hail" },
                { "@type": "City", "name": "Buraidah" },
                { "@type": "City", "name": "Najran" },
                { "@type": "Country", "name": "Saudi Arabia" }
              ],
              "knowsAbout": [
                "Professional Uniform Manufacturing",
                "Medical Scrubs",
                "Corporate Workwear",
                "Aviation Uniforms",
                "Hospitality Attire",
                "Industrial Safety Workwear",
                "Custom Uniform Design",
                "Fabric Technology",
                "تصنيع الأزياء المهنية",
                "الزي الموحد السعودي"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Quality Management",
                  "name": "ISO 9001:2015 Quality Management System"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/uneomuniforms/",
                "https://www.instagram.com/uneomuniforms/",
                "https://www.linkedin.com/company/uneom"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <BatterySaverProvider>
          <QuoteProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </QuoteProvider>
        </BatterySaverProvider>
        {/* PhantomTrap — invisible honeypot for scraper detection */}
        <PhantomTrap />
        {/* Speculation Rules — prefetch for instant navigations */}
        <SpeculationRules />
        {/* Scroll Depth Tracker — Navboost engagement signal */}
        <ScrollDepthTracker />
        {/* Floating WhatsApp CTA — conversion driver */}
        <StickyWhatsApp />
        {/* Google Analytics 4 — G-RSQSS61R9J */}
        <GoogleAnalytics />
        {/* Core Web Vitals → GA4 */}
        <WebVitalsReporter />
        {/* Privacy Compliance — Saudi PDPL */}
        <CookieConsent />
        {/* Exit Intent — Conversion Recovery */}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
