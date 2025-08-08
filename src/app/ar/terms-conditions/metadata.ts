import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الشروط والأحكام | يونيوم السعودية',
  description: 'شروط وأحكام يونيوم لشراء الزي الموحد المهني وملابس العمل في المملكة العربية السعودية. تعرف على عملية الطلب، شروط التوصيل، واتفاقيات العملاء.',
  keywords: 'شروط وأحكام يونيوم، شروط شركة الزي الموحد، شروط ملابس العمل السعودية، اتفاقية العملاء للزي الموحد، شروط طلب الزي الموحد عبر الإنترنت، عقد عملاء يونيوم، شروط شراء الزي الموحد، شروط الأعمال السعودية، شروط طلب ملابس العمل، اتفاقية مزود الزي الموحد',
  openGraph: {
    title: 'الشروط والأحكام | مزود الزي الموحد يونيوم',
    description: 'الشروط والأحكام الكاملة لطلب الزي الموحد المهني وملابس العمل من يونيوم في المملكة العربية السعودية. تعرف على سياسات التوصيل والدفع والإرجاع.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/legal/terms-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'الشروط والأحكام يونيوم - معلومات اتفاقية العملاء'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'الشروط والأحكام | يونيوم السعودية',
    description: 'الشروط الكاملة لطلب الزي الموحد المهني من يونيوم في السعودية، بما في ذلك سياسات التوصيل والإرجاع.',
    images: ['/images/legal/terms-conditions.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/ar/terms-conditions',
    languages: {
      'en': 'https://uneom.com/terms-conditions',
      'ar': 'https://uneom.com/ar/terms-conditions'}}}; 