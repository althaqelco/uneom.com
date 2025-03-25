import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | UNEOM Saudi Arabia',
  description: 'UNEOM\'s privacy policy details how we collect, use, and protect your data when you interact with our uniform and workwear services across Saudi Arabia.',
  keywords: 'UNEOM privacy policy, uniform company data protection, Saudi workwear privacy, customer data security, online uniform ordering privacy, UNEOM data protection, personal information security, Saudi business privacy, workwear customer privacy, uniform provider policy',
  openGraph: {
    title: 'Privacy Policy | How UNEOM Protects Your Data',
    description: 'Learn how UNEOM collects, processes, and protects your personal information when you use our professional uniform services in Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/legal/privacy-policy.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Privacy Policy - Data Protection Information',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | UNEOM Saudi Arabia',
    description: 'How UNEOM collects, processes, and protects your personal information when using our uniform services.',
    images: ['/images/legal/privacy-policy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/privacy-policy',
    languages: {
      'en': 'https://uneom.com/privacy-policy',
      'ar': 'https://uneom.com/ar/privacy-policy',
    },
  },
}; 