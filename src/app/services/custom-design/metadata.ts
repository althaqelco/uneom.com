import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Uniform Design & Branding Services | UNEOM Saudi Arabia',
  description: 'Professional uniform design services for Saudi organizations. Custom branding, logo integration, and specialized design solutions for corporate identity.',
  keywords: 'custom uniform design, professional branding services, logo integration, corporate identity uniforms, Saudi uniform design, custom workwear branding, UNEOM design services',
  openGraph: {
    title: 'Custom Uniform Design & Branding Services | UNEOM Saudi Arabia',
    description: 'Professional uniform design services that incorporate your brand identity and meet the specific requirements of your industry in Saudi Arabia.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/services/custom-design.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Custom Uniform Design Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Uniform Design & Branding Services | UNEOM Saudi Arabia',
    description: 'Professional uniform design services for Saudi organizations',
    images: ['/images/services/custom-design.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/services/custom-design',
    languages: {
      'en': 'https://uneom.com/services/custom-design',
      'ar': 'https://uneom.com/ar/services/custom-design'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 