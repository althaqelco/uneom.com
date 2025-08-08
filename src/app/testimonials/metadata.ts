import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials | UNEOM Uniform Provider Success Stories',
  description: 'Read what our clients say about UNEOM\'s professional uniform services in Saudi Arabia. Success stories from healthcare, hospitality, corporate and industrial sectors.',
  keywords: 'UNEOM testimonials, uniform provider reviews, Saudi workwear client feedback, professional uniform testimonials, UNEOM customer reviews, uniform supplier ratings, workwear client success stories, Saudi Arabia uniform feedback, UNEOM client satisfaction, uniform service testimonials',
  openGraph: {
    title: 'Client Success Stories | UNEOM Professional Uniforms',
    description: 'Discover how organizations across Saudi Arabia have benefited from UNEOM\'s premium uniforms and workwear services. Read authentic testimonials from our satisfied clients.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/testimonials/testimonials-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Client Testimonials - Success Stories from Satisfied Customers'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | UNEOM Saudi Arabia',
    description: 'Read authentic reviews from satisfied clients about UNEOM\'s premium uniform services across Saudi Arabia.',
    images: ['/images/testimonials/testimonials-header.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/testimonials',
    languages: {
      'en': 'https://uneom.com/testimonials',
      'ar': 'https://uneom.com/ar/testimonials'}}}; 