import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation | UNEOM Professional Uniforms Saudi Arabia',
  description: 'Thank you for your uniform order with UNEOM. Track your professional workwear delivery across Saudi Arabia with our order confirmation details.',
  keywords: 'UNEOM order confirmation, uniform purchase complete, workwear order success, professional uniform order tracking, Saudi Arabia uniform delivery status, UNEOM purchase confirmation, uniform order receipt, workwear delivery tracking, UNEOM order summary, uniform order successful',
  openGraph: {
    title: 'Order Confirmed | Thank You for Choosing UNEOM Uniforms',
    description: 'Your professional uniform order has been successfully placed. Track your premium workwear delivery and view your order details from UNEOM Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/order/order-confirmation.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Order Confirmation - Thank You for Your Purchase'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'Order Confirmation | UNEOM Saudi Arabia',
    description: 'Your professional uniform order is confirmed. Track your delivery and view order details for your UNEOM workwear purchase.',
    images: ['/images/order/order-confirmation.jpg']},
  robots: {
    index: false,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/order-confirmation',
    languages: {
      'en': 'https://uneom.com/order-confirmation',
      'ar': 'https://uneom.com/ar/order-confirmation'}}}; 