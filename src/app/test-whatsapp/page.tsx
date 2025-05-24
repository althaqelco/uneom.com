import React from 'react';
import LocationPageLayout from '@/components/layout/LocationPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Test Whatsapp | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'test whatsapp'],
  openGraph: {
    title: 'Test Whatsapp | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/test-whatsapp/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Test Whatsapp - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


export default function TestWhatsAppPage() {
  return (
    <LocationPageLayout locale="en">
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Test WhatsApp Component</h1>
        <p className="mt-4">This is a test page to verify that the FloatingWhatsApp component works correctly.</p>
      </div>
    </LocationPageLayout>
  );
} 