import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform FAQs | Common Questions Answered | UNEOM Saudi Arabia',
  description: 'Find answers to frequently asked questions about professional uniforms, custom workwear, ordering process, delivery, and services provided by UNEOM across Saudi Arabia.',
  keywords: 'uniform FAQs, workwear questions, professional uniform guide, custom uniform ordering, UNEOM delivery information, uniform sizing questions, corporate workwear FAQs, healthcare uniform information, industrial workwear guide, Saudi uniform supplier',
  openGraph: {
    title: 'Frequently Asked Questions About Professional Uniforms | UNEOM Saudi Arabia',
    description: 'Get answers to common questions about professional uniforms, custom workwear solutions, ordering process, and UNEOM\'s comprehensive services across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/faq/faq-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Professional Uniform FAQs - Common Questions Answered',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform FAQs | UNEOM Saudi Arabia',
    description: 'Find answers to common questions about professional uniforms, ordering process, and UNEOM\'s services across Saudi Arabia.',
    images: ['/images/faq/faq-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/faq',
    languages: {
      'en': 'https://uneom.com/faq',
      'ar': 'https://uneom.com/ar/faq',
    },
  },
}; 