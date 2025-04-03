import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniform Industry Experts & Specialists | UNEOM Saudi Arabia",
  description: "Meet our team of uniform industry experts at UNEOM. Consultants, designers, and textile specialists providing professional workwear solutions across Saudi Arabia.",
  keywords: [
    "UNEOM experts", 
    "uniform specialists Saudi Arabia", 
    "workwear consultants", 
    "professional uniform designers", 
    "Saudi textile industry experts",
    "UNEOM team members",
    "uniform industry professionals"
  ],
  openGraph: {
    title: "Uniform Industry Experts & Specialists | UNEOM Saudi Arabia",
    description: "Meet our team of uniform industry experts at UNEOM. Consultants, designers, and textile specialists providing professional workwear solutions across Saudi Arabia.",
    locale: "en",
    type: "website",
    images: [
      {
        url: '/images/about/team-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Industry Experts and Specialists'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Industry Experts & Specialists | UNEOM Saudi Arabia',
    description: 'Meet our team of uniform industry experts providing professional workwear solutions across Saudi Arabia',
    images: ['/images/about/team-header.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/authors',
    languages: {
      'en': 'https://uneom.com/authors',
      'ar': 'https://uneom.com/ar/authors'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 