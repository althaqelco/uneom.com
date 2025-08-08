import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Program Management Services | UNEOM Saudi Arabia',
  description: 'End-to-end management of your organization\'s uniform program. Comprehensive solutions for inventory tracking, distribution, and lifecycle management in Saudi Arabia.',
  keywords: 'uniform program management, corporate uniform program, uniform lifecycle management, inventory tracking, distribution services, Saudi uniform management, UNEOM program management',
  openGraph: {
    title: 'Uniform Program Management Services | UNEOM Saudi Arabia',
    description: 'End-to-end management of your organization\'s entire uniform program, from design to distribution and inventory tracking in Saudi Arabia.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/services/services/program-management.jpg'
      }
    ]
  },
  alternates: {
    canonical: 'https://uneom.com/services/program-management',
    languages: {
      'en': 'https://uneom.com/services/program-management',
      'ar': 'https://uneom.com/ar/services/program-management'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 