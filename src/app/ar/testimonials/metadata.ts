import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'آراء العملاء | قصص نجاح مزود الزي الموحد يونيوم',
  description: 'اقرأ ما يقوله عملاؤنا عن خدمات الزي الموحد المهني من يونيوم في المملكة العربية السعودية. قصص نجاح من قطاعات الرعاية الصحية والضيافة والشركات والصناعة.',
  keywords: 'آراء يونيوم، تقييمات مزود الزي الموحد، تعليقات عملاء ملابس العمل السعودية، شهادات الزي الموحد المهني، تقييمات عملاء يونيوم، تقييمات مورد الزي الموحد، قصص نجاح عملاء ملابس العمل، تعليقات الزي الموحد السعودية، رضا عملاء يونيوم، شهادات خدمة الزي الموحد',
  openGraph: {
    title: 'قصص نجاح العملاء | الأزياء المهنية يونيوم',
    description: 'اكتشف كيف استفادت المؤسسات في جميع أنحاء المملكة العربية السعودية من خدمات الزي الموحد وملابس العمل المتميزة من يونيوم. اقرأ الشهادات الحقيقية من عملائنا الراضين.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/testimonials/testimonials-header.jpg',
        width: 1200,
        height: 630,
        alt: 'آراء عملاء يونيوم - قصص نجاح من العملاء الراضين',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آراء العملاء | يونيوم السعودية',
    description: 'اقرأ التقييمات الحقيقية من العملاء الراضين عن خدمات الزي الموحد المتميزة من يونيوم في جميع أنحاء السعودية.',
    images: ['/images/testimonials/testimonials-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/testimonials',
    languages: {
      'en': 'https://uneom.com/testimonials',
      'ar': 'https://uneom.com/ar/testimonials',
    },
  },
}; 