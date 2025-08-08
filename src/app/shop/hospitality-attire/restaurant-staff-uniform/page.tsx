import React from 'react';
import { Metadata } from 'next';
import { RestaurantStaffUniformClientPage } from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata = {
  title: 'Premium Restaurant Staff Uniforms | Saudi Arabian Hospitality Workwear | UNEOM',
  description: 'High-quality restaurant staff uniforms designed for Saudi Arabian hospitality venues. Featuring antimicrobial, stain-resistant fabrics and professional styling for food service environments.',
  keywords: 'restaurant staff uniforms Saudi Arabia, hospitality workwear Riyadh, food service uniforms, Saudi restaurant attire, restaurant server uniforms, fine dining staff clothing, hotel restaurant uniforms KSA, F&B service apparel',
  openGraph: {
    title: 'Premium Restaurant Staff Uniforms | Saudi Arabian Hospitality Workwear | UNEOM',
    description: 'High-quality restaurant staff uniforms designed for Saudi Arabian hospitality venues. Featuring antimicrobial, stain-resistant fabrics and professional styling for food service environments.',
    images: [
      {
        url: 'https://uneom.com/images/products/restaurant-staff-uniform.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium Restaurant Staff Uniforms'}
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/hospitality-attire/restaurant-staff-uniform',
    languages: {
      'ar': 'https://uneom.com/ar/shop/hospitality-attire/restaurant-staff-uniform'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}}

export default function RestaurantStaffUniformPage() {
  return <RestaurantStaffUniformClientPage />;
}
