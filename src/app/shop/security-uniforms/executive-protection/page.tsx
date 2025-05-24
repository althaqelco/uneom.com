import React from 'react';
import ClientPage from '../../[category]/[product]/ClientPage';
import { getProductById } from '@/lib/data/products';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Shop | Security Uniforms | Executive Protection | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'shop | security uniforms | executive protection'],
  openGraph: {
    title: 'Shop | Security Uniforms | Executive Protection | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/shop/security-uniforms/executive-protection/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Shop | Security Uniforms | Executive Protection - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


// Generate static params for all product pages
export const generateStaticParams = () => {
  return [
    {
      category: 'security-uniforms',
      product: 'executive-protection'
    }
  ];
}

export default function ExecutiveProtectionPage() {
  // This is a server component that imports the client component
  // All the logic and UI is in the ClientPage component
  // This pattern allows for static site generation with dynamic client components
  return <ClientPage params={{ category: 'security-uniforms', product: 'executive-protection' }} />;
} 