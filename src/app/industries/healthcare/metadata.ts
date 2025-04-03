import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical & Healthcare Uniform Solutions | UNEOM Saudi Arabia',
  description: 'Premium medical scrubs and healthcare uniforms for Saudi healthcare professionals. SCHS-compliant, antimicrobial medical attire for hospitals, clinics, and medical facilities in Saudi Arabia.',
  keywords: 'healthcare uniforms, medical scrubs, Saudi healthcare attire, hospital uniforms, SCHS compliant, antimicrobial medical uniforms, nursing uniforms, lab coats, Saudi hospital workwear, UNEOM healthcare',
  openGraph: {
    title: 'Medical & Healthcare Uniform Solutions | UNEOM Saudi Arabia',
    description: 'Premium medical scrubs and healthcare uniforms designed for Saudi medical professionals with antimicrobial protection and SCHS compliance.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium UNEOM Healthcare Uniforms for Saudi Medical Professionals'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical & Healthcare Uniform Solutions | UNEOM Saudi Arabia',
    description: 'Premium medical scrubs and healthcare uniforms for Saudi medical professionals',
    images: ['/images/healthcare/healthcare_medical_doctor_uniform.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/healthcare',
    languages: {
      'en': 'https://uneom.com/industries/healthcare',
      'ar': 'https://uneom.com/ar/industries/healthcare'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 