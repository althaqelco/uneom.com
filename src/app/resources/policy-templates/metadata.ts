import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Policy Templates | Dress Code Guidelines | UNEOM Saudi Arabia',
  description: 'Download customizable uniform policy templates and dress code guidelines for Saudi organizations. Industry-specific uniform standards for corporate, healthcare, hospitality and industrial sectors.',
  keywords: 'uniform policy templates, corporate dress code guidelines, Saudi Arabia uniform standards, workwear policy templates, healthcare uniform guidelines, industrial workwear standards, hospitality dress code policy',
  openGraph: {
    title: 'Uniform Policy Templates | Dress Code Guidelines | UNEOM Saudi Arabia',
    description: 'Download customizable uniform policy templates and dress code guidelines for Saudi organizations. Industry-specific uniform standards for corporate, healthcare, hospitality and industrial sectors.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/resources/policy-templates/policy-templates-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Policy Templates and Dress Code Guidelines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Policy Templates | Dress Code Guidelines | UNEOM Saudi Arabia',
    description: 'Download customizable uniform policy templates and dress code guidelines for Saudi organizations. Industry-specific uniform standards.',
    images: ['/images/resources/policy-templates/policy-templates-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/resources/policy-templates',
    languages: {
      'en': 'https://uneom.com/resources/policy-templates',
      'ar': 'https://uneom.com/ar/resources/policy-templates',
    },
  },
}; 