import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Uniforms | Medical Workwear | UNEOM Saudi Arabia',
  description: 'Premium healthcare uniforms and medical workwear for Saudi hospitals, clinics, and care facilities. UNEOM offers lab coats, scrubs, nurses uniforms and medical accessories.',
  keywords: 'healthcare uniforms Saudi Arabia, medical workwear, hospital uniforms Riyadh, nurses uniforms Saudi, lab coats for doctors, medical scrubs Saudi Arabia, clinic staff uniforms, healthcare professional attire, medical facility workwear, UNEOM healthcare uniforms',
  openGraph: {
    title: 'Premium Healthcare Uniforms & Medical Workwear | UNEOM Saudi Arabia',
    description: 'Professional healthcare uniforms for Saudi medical professionals. UNEOM offers premium scrubs, lab coats, nursing uniforms and medical workwear with nationwide delivery.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/shop/healthcare/healthcare-category.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Healthcare Uniforms - Premium Medical Workwear',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Uniforms | UNEOM Saudi Arabia',
    description: 'Premium medical workwear for healthcare professionals in Saudi Arabia. Explore UNEOM\'s high-quality scrubs, lab coats and nursing uniforms.',
    images: ['/images/shop/healthcare/healthcare-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/healthcare-attire',
    languages: {
      'en': 'https://uneom.com/shop/healthcare-attire',
      'ar': 'https://uneom.com/ar/shop/healthcare-attire',
    },
  },
}; 