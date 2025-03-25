import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About UNEOM | Premium Uniform Supplier in Saudi Arabia',
  description: 'UNEOM is Saudi Arabia\'s leading uniform manufacturer with over 15 years of experience providing premium workwear solutions across healthcare, corporate, hospitality and industrial sectors.',
  keywords: 'about UNEOM, Saudi uniform supplier, professional workwear company, uniform manufacturer Saudi Arabia, UNEOM history, Saudi workwear provider, uniform company values, custom uniform supplier, UNEOM team, uniform industry leader',
  openGraph: {
    title: 'About UNEOM | Leading Uniform Provider in Saudi Arabia',
    description: 'Discover UNEOM\'s journey to becoming Saudi Arabia\'s premier uniform provider. Learn about our history, values, team, and commitment to excellence in professional workwear.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/about/about-header.jpg',
        width: 1200,
        height: 630,
        alt: 'About UNEOM - Premium Uniform Provider in Saudi Arabia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About UNEOM | Saudi Arabia',
    description: 'UNEOM\'s journey to becoming Saudi Arabia\'s premier uniform provider with our commitment to quality, innovation, and customer satisfaction.',
    images: ['/images/about/about-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/about',
    languages: {
      'en': 'https://uneom.com/about',
      'ar': 'https://uneom.com/ar/about',
    },
  },
}; 