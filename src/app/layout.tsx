import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QuoteProvider } from '@/contexts/QuoteContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// Removed Vercel Analytics for Netlify deployment
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Analytics } from '@vercel/analytics/react';

// Importar ImageResolver dinámicamente para evitar errores de SSR
const ImageResolver = dynamic(() => import('@/components/ImageResolver'), { 
  ssr: false 
});

// Importar el depurador de imágenes dinámicamente
const ImageDebugger = dynamic(() => import('@/components/ui/ImageDebugger'), {
  ssr: false
});

// Importar el corrector de imágenes para Vercel
const VercelImageFixer = dynamic(() => import('@/components/VercelImageFixer'), {
  ssr: false
});

// Import new image components
const ImagePreloader = dynamic(() => import('@/components/ui/ImagePreloader'), {
  ssr: false
});

const EmergencyImageLoader = dynamic(() => import('@/components/ui/EmergencyImageLoader'), {
  ssr: false
});

const inter = Inter({ subsets: ['latin'] });

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://uneom.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UNEOM",
              "alternateName": "يونيوم",
              "url": "https://uneom.com",
              "logo": "https://uneom.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-50-123-4567",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Fahd Road, Al Olaya District",
                "addressLocality": "Riyadh",
                "addressCountry": "SA"
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
        <QuoteProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </QuoteProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
