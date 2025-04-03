import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Uniform Quote | Custom Pricing | UNEOM Saudi Arabia',
  description: 'Request a custom quote for UNEOM\'s premium uniform solutions. Get personalized pricing for bulk orders, custom designs, and professional workwear in Saudi Arabia.',
  keywords: 'uniform quote request, custom uniform pricing, Saudi workwear quotes, professional uniform order, bulk uniform prices, custom workwear quote, UNEOM quote request',
  openGraph: {
    title: 'Request a Uniform Quote | Custom Pricing | UNEOM Saudi Arabia',
    description: 'Request a personalized quote for professional uniforms and workwear solutions tailored to your organization\'s specific needs in Saudi Arabia.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/quote-request.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Custom Uniform Quote Request'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Uniform Quote | Custom Pricing | UNEOM Saudi Arabia',
    description: 'Request a personalized quote for professional uniforms in Saudi Arabia',
    images: ['/images/quote-request.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/quote',
    languages: {
      'en': 'https://uneom.com/quote',
      'ar': 'https://uneom.com/ar/quote'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 