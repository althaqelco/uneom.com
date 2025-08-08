import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سلة التسوق | مزود الزي الموحد يونيوم السعودية',
  description: 'راجع اختياراتك من الزي الموحد في سلة تسوق يونيوم. عملية دفع سهلة لملابس العمل المهنية، أزياء الرعاية الصحية، ملابس الضيافة، وأزياء الشركات.',
  keywords: 'سلة تسوق يونيوم، مراجعة طلب الزي الموحد، الدفع لملابس العمل السعودية، شراء الزي الموحد المهني، طلب زي الرعاية الصحية، سلة ملابس الضيافة، الدفع لزي الشركات الموحد، عملية طلب يونيوم، طلب ملابس العمل السعودية، سلة مزود الزي الموحد',
  openGraph: {
    title: 'سلة التسوق الخاصة بك | الأزياء المهنية يونيوم',
    description: 'راجع اختيارك من الزي الموحد المتميز وملابس العمل من يونيوم. عملية دفع بسيطة مع التوصيل في جميع أنحاء المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/cart/cart-page.jpg',
        width: 1200,
        height: 630,
        alt: 'سلة تسوق يونيوم - راجع طلب الزي الموحد الخاص بك'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'سلة التسوق | يونيوم السعودية',
    description: 'راجع اختياراتك من الزي الموحد قبل الدفع. ملابس عمل متميزة مع التوصيل في جميع أنحاء السعودية.',
    images: ['/images/cart/cart-page.jpg']},
  robots: {
    index: false,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/ar/cart',
    languages: {
      'en': 'https://uneom.com/cart',
      'ar': 'https://uneom.com/ar/cart'}}}; 