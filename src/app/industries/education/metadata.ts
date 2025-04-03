import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School & Educational Institution Uniforms | UNEOM Saudi Arabia',
  description: 'Premium school uniforms and educational staff attire for Saudi academic institutions. Quality workwear solutions tailored for Saudi schools, colleges, and universities.',
  keywords: 'school uniforms Saudi Arabia, educational institution uniforms, Saudi school workwear, academic attire, teacher uniforms, faculty workwear, student uniforms, PE uniforms, UNEOM education',
  openGraph: {
    title: 'School & Educational Institution Uniforms | UNEOM Saudi Arabia',
    description: 'Premium school uniforms and educational staff attire designed for Saudi academic institutions with durability, comfort, and cultural considerations.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/education/uniform_school-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium UNEOM School Uniforms for Saudi Educational Institutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School & Educational Institution Uniforms | UNEOM Saudi Arabia',
    description: 'Premium school uniforms and educational staff attire for Saudi academic institutions',
    images: ['/images/education/uniform_school-2.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/education',
    languages: {
      'en': 'https://uneom.com/industries/education',
      'ar': 'https://uneom.com/ar/industries/education'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 