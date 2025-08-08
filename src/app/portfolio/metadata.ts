import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Portfolio | UNEOM Custom Workwear Projects in Saudi Arabia',
  description: 'Explore UNEOM\'s portfolio of custom uniform projects for top Saudi organizations. See our workwear designs for healthcare, hospitality, corporate, and industrial sectors.',
  keywords: 'UNEOM portfolio, uniform design projects, Saudi workwear examples, professional uniform portfolio, custom uniform designs, UNEOM client projects, hospitality uniform showcase, healthcare uniform designs, corporate workwear portfolio, Saudi Arabia uniform case studies',
  openGraph: {
    title: 'UNEOM Portfolio | Custom Uniform Projects Across Saudi Arabia',
    description: 'View our showcase of custom uniform designs for leading organizations in Saudi Arabia. Explore our work in healthcare, hospitality, corporate, and industrial sectors.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/portfolio/portfolio-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Uniform Portfolio - Custom Workwear Projects'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Portfolio | UNEOM Saudi Arabia',
    description: 'Explore our showcase of custom uniform projects for leading Saudi organizations across multiple sectors.',
    images: ['/images/portfolio/portfolio-header.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/portfolio',
    languages: {
      'en': 'https://uneom.com/portfolio',
      'ar': 'https://uneom.com/ar/portfolio'}}}; 