import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Size Guide | Measurement Charts | UNEOM Saudi Arabia',
  description: 'Comprehensive uniform sizing charts and measurement guides for corporate, healthcare, hospitality, and industrial workwear. Find the perfect fit for your Saudi organization.',
  keywords: 'uniform size guide, workwear measurement charts, Saudi Arabia uniform sizing, corporate attire measurements, industrial workwear sizing, healthcare uniform fit, hospitality uniform measurements',
  openGraph: {
    title: 'Uniform Size Guide | Measurement Charts | UNEOM Saudi Arabia',
    description: 'Comprehensive uniform sizing charts and measurement guides for corporate, healthcare, hospitality, and industrial workwear. Find the perfect fit for your Saudi organization.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/resources/size-guide/size-guide-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Size Guide and Measurement Charts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Size Guide | Measurement Charts | UNEOM Saudi Arabia',
    description: 'Comprehensive uniform sizing charts and measurement guides for corporate, healthcare, hospitality, and industrial workwear.',
    images: ['/images/resources/size-guide/size-guide-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/resources/size-guide',
    languages: {
      'en': 'https://uneom.com/resources/size-guide',
      'ar': 'https://uneom.com/ar/resources/size-guide',
    },
  },
}; 