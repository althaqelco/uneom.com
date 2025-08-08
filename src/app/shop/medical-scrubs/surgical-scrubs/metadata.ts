import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Surgical Scrubs | Hospital-Grade Medical Uniforms | UNEOM Saudi Arabia',
  description: 'Premium surgical scrubs designed for Saudi Arabian healthcare environments. Antimicrobial fabric, comfort-fit design, and customization options for hospitals and surgical centers.',
  keywords: 'surgical scrubs Saudi Arabia, hospital uniforms, antimicrobial medical scrubs, operating room attire, surgical uniforms Riyadh, healthcare workwear, medical staff uniforms, OR scrubs, surgical theater clothing, UNEOM medical uniforms',
  openGraph: {
    title: 'Premium Surgical Scrubs for Healthcare Professionals | UNEOM Saudi Arabia',
    description: 'Hospital-grade surgical scrubs with antimicrobial protection, optimal comfort, and customization options. Designed for medical environments across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/surgical-scrubs.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Surgical Scrubs by UNEOM'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Surgical Scrubs | Hospital-Grade Medical Uniforms | UNEOM Saudi Arabia',
    description: 'Premium surgical scrubs designed for Saudi Arabian healthcare environments.',
    images: ['/images/products/surgical-scrubs.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/shop/medical-scrubs/surgical-scrubs',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs/surgical-scrubs',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs/surgical-scrubs'}}}; 