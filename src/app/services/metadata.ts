import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Uniform Services & Solutions | UNEOM Saudi Arabia',
  description: 'Comprehensive uniform services for Saudi organizations. Design, program management, custom branding, and consulting solutions to streamline your uniform program.',
  keywords: 'uniform services Saudi Arabia, corporate uniform program, uniform design services, bulk ordering, measurement services, uniform policy consulting, UNEOM services',
  openGraph: {
    title: 'Professional Uniform Services & Solutions | UNEOM Saudi Arabia',
    description: 'Comprehensive uniform services for Saudi organizations including design, program management, and custom branding solutions.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/hero/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Professional Uniform Services and Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Uniform Services & Solutions | UNEOM Saudi Arabia',
    description: 'Comprehensive uniform services for Saudi organizations',
    images: ['/images/hero/services-hero.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://uneom.com/services',
    languages: {
      'en': 'https://uneom.com/services',
      'ar': 'https://uneom.com/ar/services'
    }
  }
}; 