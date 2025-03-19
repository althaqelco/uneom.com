import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviation Uniforms | Airline Crew & Pilot Attire | GACA Standards | UNEOM',
  description: 'Professional aviation uniforms for Saudi airlines. Premium designs for cabin crew, pilots, and ground staff compliant with GACA standards and Islamic principles. Custom brand identity solutions.',
  keywords: 'aviation uniforms, airline crew attire, pilot uniforms, Saudi airline uniforms, GACA compliant uniforms, modest flight attendant attire, Islamic aviation wear, airport staff clothing, Saudi airline apparel, ground service uniforms, UNEOM',
  openGraph: {
    title: 'Aviation Uniforms | Airline Crew & Pilot Attire | GACA Standards | UNEOM',
    description: 'Professional aviation uniforms for Saudi airlines. Premium designs for cabin crew, pilots, and ground staff compliant with GACA standards and Islamic principles. Custom brand identity solutions.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/industries/aviation.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional UNEOM aviation uniforms compliant with Saudi GACA standards'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aviation Uniforms | Airline Crew & Pilot Attire | GACA Standards',
    description: 'Professional aviation uniforms for Saudi airlines compliant with GACA standards and Islamic principles',
    images: ['/images/industries/aviation.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/aviation',
    languages: {
      'en': 'https://uneom.com/industries/aviation',
      'ar': 'https://uneom.com/ar/industries/aviation'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 