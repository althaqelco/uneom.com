import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Uniform Ordering Services for Organizations | UNEOM Saudi Arabia',
  description: 'Streamlined procurement process for large-scale uniform orders. Optimized pricing, quality control, and delivery logistics for Saudi organizations.',
  keywords: 'bulk uniform ordering, wholesale uniform procurement, large-scale uniform orders, corporate uniform purchasing, Saudi bulk ordering, volume discount uniforms, UNEOM bulk services',
  openGraph: {
    title: 'Bulk Uniform Ordering Services for Organizations | UNEOM Saudi Arabia',
    description: 'Streamlined procurement process for large-scale uniform orders with optimized pricing, quality control, and delivery logistics in Saudi Arabia.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/services/bulk-ordering.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Bulk Uniform Ordering Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk Uniform Ordering Services for Organizations | UNEOM Saudi Arabia',
    description: 'Streamlined procurement process for large-scale uniform orders in Saudi Arabia',
    images: ['/images/services/bulk-ordering.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/services/bulk-ordering',
    languages: {
      'en': 'https://uneom.com/services/bulk-ordering',
      'ar': 'https://uneom.com/ar/services/bulk-ordering'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 