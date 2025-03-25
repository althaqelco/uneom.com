import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Blog Categories | Industry Insights by Topic | UNEOM Saudi Arabia',
  description: 'Explore our uniform industry blog categories covering healthcare, corporate, hospitality, and industrial workwear. Find expert insights and guides by topic.',
  keywords: 'uniform blog categories, workwear topics, healthcare uniform blog, corporate attire insights, hospitality uniform guides, industrial workwear articles, Saudi uniform industry, professional dress guides, uniform maintenance tips, workwear trends',
  openGraph: {
    title: 'Professional Uniform Industry Blog Categories | UNEOM Saudi Arabia',
    description: 'Browse our comprehensive collection of uniform industry insights by category. From healthcare to hospitality, find expert guidance for every professional sector.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/blog/categories-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Blog Categories - Professional Uniform Industry Insights',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Blog Categories | UNEOM Saudi Arabia',
    description: 'Explore uniform industry insights by category. Find expert guidance and trends for every professional sector.',
    images: ['/images/blog/categories-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/blog/categories',
    languages: {
      'en': 'https://uneom.com/blog/categories',
      'ar': 'https://uneom.com/ar/blog/categories',
    },
  },
}; 