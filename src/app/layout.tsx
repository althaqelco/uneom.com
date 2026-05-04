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

// Dynamic imports for client-side only components
const BatterySaverProvider = dynamic(
  () => import('@/components/performance/BatterySaver').then(mod => ({ default: mod.BatterySaverProvider })),
  { ssr: false }
);

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
      'max-video-preview': 30,
      'max-image-preview': 'large',
      'max-snippet': 160}},
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
  alternates: {
    canonical: 'https://uneom.com',
    languages: {
      'en': 'https://uneom.com',
      'ar': 'https://uneom.com/ar',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://uneom.com/mobile'},
    types: {
      'application/rss+xml': 'https://uneom.com/rss.xml'}},
  verification: {
    google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
      'facebook-domain-verification': 'facebook-verification-code'}},
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
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://uneom.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ClothingStore", "LocalBusiness"],
              "name": "UNEOM",
              "alternateName": "يونيوم للأزياء المهنية",
              "url": "https://uneom.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://uneom.com/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Leading manufacturer of professional uniforms and workwear in Saudi Arabia. ISO 9001 certified.",
              "foundingDate": "2015",
              "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50, "maxValue": 200 },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971558164922",
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
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://uneom.com/quote?service={serviceSlug}&city={citySlug}",
                  "inLanguage": ["ar-SA", "en"]
                },
                "result": { "@type": "Reservation", "name": "Uniform Quote Request" }
              },
              "sameAs": [
                "https://twitter.com/uneom_sa",
                "https://linkedin.com/company/uneom",
                "https://instagram.com/uneom_official"
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
