import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact UNEOM | Uniform Provider in Saudi Arabia',
  description: 'Contact UNEOM, Saudi Arabia\'s leading uniform provider. Reach our offices in Riyadh, Jeddah, and Dammam for uniform inquiries, quotes, or support.',
  keywords: 'contact UNEOM, uniform provider contact, Saudi workwear company contact, professional uniform inquiry, UNEOM phone number, UNEOM email address, Saudi uniform supplier contact, workwear quote request, UNEOM Riyadh office, UNEOM Jeddah office, UNEOM Dammam office',
  openGraph: {
    title: 'Contact UNEOM | Saudi Arabia\'s Professional Uniform Provider',
    description: 'Get in touch with UNEOM for all your uniform and workwear needs across Saudi Arabia. Contact our offices in Riyadh, Jeddah, and Dammam for quotes, support, or inquiries.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/contact/contact-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Contact Information - Reach Our Uniform Specialists',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact UNEOM | Uniform Provider in Saudi Arabia',
    description: 'Reach UNEOM\'s uniform specialists in Riyadh, Jeddah, and Dammam for quotes, support, or inquiries.',
    images: ['/images/contact/contact-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/contact',
    languages: {
      'en': 'https://uneom.com/contact',
      'ar': 'https://uneom.com/ar/contact',
    },
  },
}; 