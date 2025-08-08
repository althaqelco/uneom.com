import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart | UNEOM Uniform Provider Saudi Arabia',
  description: 'Review your uniform selections in UNEOM\'s shopping cart. Easy checkout for professional workwear, healthcare uniforms, hospitality attire, and corporate clothing.',
  keywords: 'UNEOM shopping cart, uniform order review, Saudi workwear checkout, professional uniform purchase, healthcare uniform order, hospitality attire cart, corporate uniform checkout, UNEOM order process, Saudi Arabia workwear order, uniform provider basket',
  openGraph: {
    title: 'Your Cart | UNEOM Professional Uniforms',
    description: 'Review your selection of premium uniforms and workwear from UNEOM. Simple checkout process with delivery across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/cart/cart-page.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Shopping Cart - Review Your Uniform Order'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Shopping Cart | UNEOM Saudi Arabia',
    description: 'Review your uniform selections before checkout. Premium workwear with delivery across Saudi Arabia.',
    images: ['/images/cart/cart-page.jpg']},
  robots: {
    index: false,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/cart',
    languages: {
      'en': 'https://uneom.com/cart',
      'ar': 'https://uneom.com/ar/cart'}}}; 