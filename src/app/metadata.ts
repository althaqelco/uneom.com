import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
  description: 'Leading uniform manufacturer in Saudi Arabia offering premium-quality professional workwear for healthcare, corporate, hospitality, and industrial sectors across the Kingdom.',
  keywords: 'uniform manufacturer Saudi Arabia, professional workwear, corporate uniforms Riyadh, healthcare uniforms Jeddah, hospitality uniforms KSA, industrial workwear Saudi, custom uniform solutions, UNEOM Saudi Arabia',
  openGraph: {
    title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
    description: 'Leading manufacturer of high-quality professional uniforms serving Saudi organizations with premium workwear solutions across all major industries.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM - Premium Uniform Manufacturer in Saudi Arabia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
    description: 'Leading uniform manufacturer serving Saudi organizations with premium workwear solutions',
    images: ['/images/home-hero.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com',
    languages: {
      'en': 'https://uneom.com',
      'ar': 'https://uneom.com/ar'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 