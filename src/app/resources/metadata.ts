import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Resources & Guides | UNEOM Saudi Arabia',
  description: 'Access our comprehensive uniform resources including size guides, fabric information, procurement tips, and uniform policy templates. Expert Saudi Arabian uniform knowledge.',
  keywords: 'uniform resources, corporate workwear guides, Saudi Arabia uniform sizing, professional attire resources, fabric selection guide, uniform policy templates, UNEOM resources',
  openGraph: {
    title: 'Uniform Resources & Guides | UNEOM Saudi Arabia',
    description: 'Access our comprehensive uniform resources including size guides, fabric information, procurement tips, and uniform policy templates for Saudi organizations.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/resources/resources-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Resources and Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Resources & Guides | UNEOM Saudi Arabia',
    description: 'Access our comprehensive uniform resources including size guides, fabric information, procurement tips, and uniform policy templates.',
    images: ['/images/resources/resources-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/resources',
    languages: {
      'en': 'https://uneom.com/resources',
      'ar': 'https://uneom.com/ar/resources',
    },
  },
}; 