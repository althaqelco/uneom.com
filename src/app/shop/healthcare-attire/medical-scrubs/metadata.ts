import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Scrubs | Premium Healthcare Uniforms | UNEOM Saudi Arabia',
  description: 'Premium medical scrubs designed for healthcare professionals in Saudi Arabia. Comfortable, durable uniforms with antimicrobial fabrics and practical features for medical staff.',
  keywords: 'medical scrubs Saudi Arabia, healthcare uniforms Riyadh, hospital staff scrubs, nurse uniforms, doctor scrubs Jeddah, medical workwear, premium scrubs Dammam, healthcare uniform supplier, hospital staff attire, Saudi medical uniforms',
  openGraph: {
    title: 'Premium Medical Scrubs for Healthcare Excellence | UNEOM Saudi Arabia',
    description: 'Enhance your medical team\'s performance with our premium scrubs. Designed for Saudi Arabia\'s healthcare professionals with antimicrobial fabrics, ergonomic features, and superior comfort.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/medical-scrubs.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Medical Scrubs Collection by UNEOM'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Scrubs | UNEOM Saudi Arabia',
    description: 'Premium medical scrubs designed for Saudi Arabia\'s healthcare professionals. Comfort meets functionality with antimicrobial protection.',
    images: ['/images/products/medical-scrubs.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/shop/healthcare-attire/medical-scrubs',
    languages: {
      'en': 'https://uneom.com/shop/healthcare-attire/medical-scrubs',
      'ar': 'https://uneom.com/ar/shop/healthcare-attire/medical-scrubs'}}}; 