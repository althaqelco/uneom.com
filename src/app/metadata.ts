import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
  description: 'UNEOM: Saudi Arabia\'s top uniform supplier. We design & manufacture premium workwear for healthcare, corporate & industrial sectors. Request your quote today!',
  // Removed generic meta keywords as they're no longer relevant for modern SEO
  openGraph: {
    title: 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
    description: 'UNEOM: Saudi Arabia\'s top uniform supplier. We design & manufacture premium workwear for healthcare, corporate & industrial sectors. Request your quote today!',
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
    description: 'UNEOM: Saudi Arabia\'s top uniform supplier. We design & manufacture premium workwear for healthcare, corporate & industrial sectors. Request your quote today!',
    images: ['/images/home-hero.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/',
    languages: {
      'en-SA': 'https://uneom.com/',
      'ar-SA': 'https://uneom.com/ar/',
      'x-default': 'https://uneom.com/'
    }
  },
  robots: {
    index: true,
    follow: true
  }
};