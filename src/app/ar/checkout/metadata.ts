import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الدفع الآمن | الأزياء المهنية يونيوم السعودية',
  description: 'أكمل طلب الزي الموحد الخاص بك بأمان مع يونيوم. توصيل سريع وموثوق لملابس العمل المتميزة في جميع أنحاء المملكة العربية السعودية مع خيارات دفع متعددة.',
  keywords: 'الدفع يونيوم، دفع آمن للزي الموحد، إتمام طلب ملابس العمل، توصيل الزي الموحد المهني، شحن الزي الموحد السعودية، خيارات الدفع يونيوم، عملية طلب الزي الموحد، توصيل ملابس العمل السعودية، شراء آمن للزي الموحد، تأكيد طلب يونيوم',
  openGraph: {
    title: 'الدفع الآمن | أكمل طلب الزي الموحد من يونيوم',
    description: 'أكمل طلب الزي الموحد المهني الخاص بك مع خيارات دفع آمنة وتوصيل موثوق في جميع أنحاء المملكة العربية السعودية. ملابس عمل متميزة من يونيوم.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/checkout/secure-checkout.jpg',
        width: 1200,
        height: 630,
        alt: 'الدفع الآمن يونيوم - أكمل طلب الزي الموحد الخاص بك',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الدفع الآمن | يونيوم السعودية',
    description: 'أكمل طلب الزي الموحد المهني الخاص بك مع خيارات دفع آمنة وتوصيل موثوق في جميع أنحاء المملكة العربية السعودية.',
    images: ['/images/checkout/secure-checkout.jpg'],
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/checkout',
    languages: {
      'en': 'https://uneom.com/checkout',
      'ar': 'https://uneom.com/ar/checkout',
    },
  },
}; 