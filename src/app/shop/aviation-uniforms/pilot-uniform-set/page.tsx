import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Shop | Aviation Uniforms | Pilot Uniform Set | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'shop | aviation uniforms | pilot uniform set'],
  openGraph: {
    title: 'Shop | Aviation Uniforms | Pilot Uniform Set | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/shop/aviation-uniforms/pilot-uniform-set/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Shop | Aviation Uniforms | Pilot Uniform Set - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};

export default function PilotUniformSetPage() {
  // This function is needed to match the expected ClientPage props structure
  const params = {
    category: 'aviation-uniforms',
    product: 'pilot-uniform-set'
  };
  
  return <ClientPage params={params} />;
} 