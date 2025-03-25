import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | UNEOM Saudi Arabia',
  description: 'UNEOM\'s terms and conditions for purchasing professional uniforms and workwear in Saudi Arabia. Learn about our ordering process, delivery terms, and customer agreements.',
  keywords: 'UNEOM terms and conditions, uniform company terms, Saudi workwear terms, customer agreement uniform, online uniform ordering terms, UNEOM customer contract, uniform purchase terms, Saudi business terms, workwear ordering conditions, uniform provider agreement',
  openGraph: {
    title: 'Terms and Conditions | UNEOM Uniform Provider',
    description: 'Complete terms and conditions for ordering professional uniforms and workwear from UNEOM in Saudi Arabia. Understand our delivery, payment, and return policies.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/legal/terms-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Terms and Conditions - Customer Agreement Information',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | UNEOM Saudi Arabia',
    description: 'Complete terms for ordering professional uniforms from UNEOM in Saudi Arabia, including delivery and return policies.',
    images: ['/images/legal/terms-conditions.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/terms-conditions',
    languages: {
      'en': 'https://uneom.com/terms-conditions',
      'ar': 'https://uneom.com/ar/terms-conditions',
    },
  },
}; 