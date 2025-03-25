import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Rental Services | Cost-Effective Workwear Solutions | UNEOM',
  description: 'Professional uniform rental services across Saudi Arabia. UNEOM provides cost-effective workwear solutions with regular cleaning, maintenance, and replacement.',
  keywords: 'uniform rental Saudi Arabia, workwear rental service, professional attire leasing, healthcare uniform rental, hospitality uniform rental, industrial workwear rental, corporate uniform leasing, UNEOM uniform rental, cost-effective uniform solution, workwear maintenance service',
  openGraph: {
    title: 'Uniform Rental Services | UNEOM Saudi Arabia',
    description: 'Reduce costs and simplify uniform management with UNEOM\'s professional rental services. Premium workwear with maintenance, cleaning, and regular replacements included.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/services/uniform-rental-service.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Rental Service - Cost-Effective Workwear Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Rental Services | UNEOM Saudi Arabia',
    description: 'Cost-effective professional uniform rental with maintenance and replacement services across Saudi Arabia.',
    images: ['/images/services/uniform-rental-service.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/services/uniform-rental',
    languages: {
      'en': 'https://uneom.com/services/uniform-rental',
      'ar': 'https://uneom.com/ar/services/uniform-rental',
    },
  },
}; 