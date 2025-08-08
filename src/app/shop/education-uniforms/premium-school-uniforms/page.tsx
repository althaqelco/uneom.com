import React from 'react';
// This is now a server component that handles metadata
import { Metadata } from 'next';
import PremiumSchoolUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Premium School Uniforms | Saudi Educational Attire | UNEOM Saudi Arabia',
  description: 'High-quality school uniforms designed for Saudi educational institutions. Featuring durable, comfortable, and culturally appropriate designs for all ages. Custom school embroidery available.',
  keywords: 'school uniforms Saudi Arabia, Saudi educational attire, premium school uniforms Riyadh, Islamic school clothing, private school uniforms KSA, custom school embroidery, Saudi academy uniforms, school dress code Saudi Arabia',
  openGraph: {
    title: 'Premium School Uniforms | Saudi Educational Attire | UNEOM Saudi Arabia',
    description: 'High-quality school uniforms designed for Saudi educational institutions. Featuring durable, comfortable, and culturally appropriate designs for all ages. Custom school embroidery available.',
    images: [
      {
        url: 'https://uneom.com/images/products/premium-school-uniforms.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium School Uniforms for Saudi Educational Institutions'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/education-uniforms/premium-school-uniforms',
    languages: {
      'ar': 'https://uneom.com/ar/shop/education-uniforms/premium-school-uniforms'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function PremiumSchoolUniformsPage() {
  // Server component that renders the client component
  return <PremiumSchoolUniformsClientPage />;
} 