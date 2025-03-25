import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Industry Events & Exhibitions | UNEOM Saudi Arabia',
  description: 'Stay updated on uniform industry events, exhibitions, and trade shows in Saudi Arabia. UNEOM\'s calendar of fashion showcases, industry conferences, and uniform innovation exhibitions.',
  keywords: 'uniform industry events, Saudi Arabia fashion exhibitions, workwear trade shows, professional attire showcases, UNEOM events, uniform design exhibitions, corporate fashion shows, Saudi uniform conferences',
  openGraph: {
    title: 'Uniform Industry Events & Exhibitions | UNEOM Saudi Arabia',
    description: 'Stay updated on uniform industry events, exhibitions, and trade shows in Saudi Arabia. UNEOM\'s calendar of fashion showcases, industry conferences, and uniform innovation exhibitions.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/resources/events/events-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Industry Events and Exhibitions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Industry Events & Exhibitions | UNEOM Saudi Arabia',
    description: 'Stay updated on uniform industry events, exhibitions, and trade shows in Saudi Arabia.',
    images: ['/images/resources/events/events-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/resources/events',
    languages: {
      'en': 'https://uneom.com/resources/events',
      'ar': 'https://uneom.com/ar/resources/events',
    },
  },
}; 