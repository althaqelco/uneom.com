import React from 'react';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Shop | Aviation Uniforms | Airline Crew Uniform | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'shop | aviation uniforms | airline crew uniform'],
  openGraph: {
    title: 'Shop | Aviation Uniforms | Airline Crew Uniform | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/shop/aviation-uniforms/airline-crew-uniform/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Shop | Aviation Uniforms | Airline Crew Uniform - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


export default function AirlineCrewUniformPage() {
  // This function is needed to match the expected ClientPage props structure
  const params = {
    category: 'aviation-uniforms',
    product: 'airline-crew-uniform'
  };
  
  return <ClientPage params={params} />;
} 