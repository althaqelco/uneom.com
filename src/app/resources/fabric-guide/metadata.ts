import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Fabric Guide | Material Selection | UNEOM Saudi Arabia',
  description: 'Comprehensive guide to uniform fabrics - understand durability, comfort, and functionality for different industries. Expert fabric selection advice for Saudi Arabian climate conditions.',
  keywords: 'uniform fabric guide, corporate uniform materials, workwear fabric selection, Saudi Arabia uniform fabrics, breathable uniform materials, durable workwear fabrics, industry-specific fabrics',
  openGraph: {
    title: 'Uniform Fabric Guide | Material Selection | UNEOM Saudi Arabia',
    description: 'Comprehensive guide to uniform fabrics - understand durability, comfort, and functionality for different industries. Expert fabric selection advice for Saudi Arabian climate conditions.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/resources/fabric-guide/fabric-guide-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Fabric Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Fabric Guide | Material Selection | UNEOM Saudi Arabia',
    description: 'Comprehensive guide to uniform fabrics - understand durability, comfort, and functionality for different industries.',
    images: ['/images/resources/fabric-guide/fabric-guide-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/resources/fabric-guide',
    languages: {
      'en': 'https://uneom.com/resources/fabric-guide',
      'ar': 'https://uneom.com/ar/resources/fabric-guide',
    },
  },
}; 