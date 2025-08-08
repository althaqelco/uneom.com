import { NextSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

// SEO Default Configuration
const DEFAULT_SEO = {
  titleTemplate: '%s | UNEOM - Professional Uniform Manufacturer Saudi Arabia',
  defaultTitle: 'UNEOM - Leading Uniform Supplier & Manufacturer in Saudi Arabia | KSA',
  description: "Saudi Arabia's premier uniform manufacturer. Medical scrubs, aviation, hospitality, corporate uniforms. ISO certified, 15+ years experience. Fast delivery all KSA cities.",
  canonical: 'https://uneom.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uneom.com',
    siteName: 'UNEOM - Professional Uniform Manufacturer',
    images: [
      {
        url: 'https://uneom.com/images/og/uneom-uniform-manufacturer.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM - Leading Uniform Manufacturer in Saudi Arabia',
      },
    ],
  },
  twitter: {
    handle: '@uneom_saudi',
    site: '@uneom_saudi',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'UNEOM Uniform Manufacturing',
    },
    {
      name: 'keywords',
      content: 'uniform supplier Saudi Arabia, uniform manufacturer KSA, professional uniforms Saudi, medical scrubs Saudi Arabia, aviation uniforms KSA',
    },
    {
      property: 'og:locale:alternate',
      content: 'ar_SA',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp; 