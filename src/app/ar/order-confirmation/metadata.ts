import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تأكيد الطلب | الأزياء المهنية يونيوم السعودية',
  description: 'شكراً لطلبك الزي الموحد من يونيوم. تتبع توصيل ملابس العمل المهنية الخاصة بك في جميع أنحاء المملكة العربية السعودية مع تفاصيل تأكيد الطلب.',
  keywords: 'تأكيد طلب يونيوم، اكتمال شراء الزي الموحد، نجاح طلب ملابس العمل، تتبع طلب الزي الموحد المهني، حالة توصيل الزي الموحد السعودية، تأكيد شراء يونيوم، إيصال طلب الزي الموحد، تتبع توصيل ملابس العمل، ملخص طلب يونيوم، نجاح طلب الزي الموحد',
  openGraph: {
    title: 'تم تأكيد الطلب | شكراً لاختيارك أزياء يونيوم',
    description: 'تم وضع طلب الزي الموحد المهني الخاص بك بنجاح. تتبع توصيل ملابس العمل المتميزة واعرض تفاصيل طلبك من يونيوم السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/order/order-confirmation.jpg',
        width: 1200,
        height: 630,
        alt: 'تأكيد طلب يونيوم - شكراً لشرائك'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'تأكيد الطلب | يونيوم السعودية',
    description: 'تم تأكيد طلب الزي الموحد المهني الخاص بك. تتبع التوصيل واعرض تفاصيل طلب شراء ملابس العمل من يونيوم.',
    images: ['/images/order/order-confirmation.jpg']},
  robots: {
    index: false,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/ar/order-confirmation',
    languages: {
      'en': 'https://uneom.com/order-confirmation',
      'ar': 'https://uneom.com/ar/order-confirmation'}}}; 