import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Checkout | UNEOM Professional Uniforms Saudi Arabia',
  description: 'Complete your uniform order securely with UNEOM. Fast and reliable delivery of premium workwear across Saudi Arabia with multiple payment options.',
  keywords: 'UNEOM checkout, secure uniform payment, workwear order completion, professional uniform delivery, Saudi Arabia uniform shipping, UNEOM payment options, uniform order process, workwear delivery Saudi, secure uniform purchase, UNEOM order confirmation',
  openGraph: {
    title: 'Secure Checkout | Complete Your UNEOM Uniform Order',
    description: 'Finalize your professional uniform order with secure payment options and reliable delivery throughout Saudi Arabia. Premium workwear from UNEOM.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/checkout/secure-checkout.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Secure Checkout - Complete Your Uniform Order',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Checkout | UNEOM Saudi Arabia',
    description: 'Complete your professional uniform order with secure payment options and reliable delivery throughout Saudi Arabia.',
    images: ['/images/checkout/secure-checkout.jpg'],
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/checkout',
    languages: {
      'en': 'https://uneom.com/checkout',
      'ar': 'https://uneom.com/ar/checkout',
    },
  },
}; 