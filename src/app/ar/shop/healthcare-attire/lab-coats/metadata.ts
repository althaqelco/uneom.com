import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'معاطف المختبر | الزي الطبي المهني | يونيوم السعودية',
  description: 'معاطف مختبر متميزة مصممة للمتخصصين الطبيين في السعودية. معاطف مهنية ومتينة مع حماية مضادة للميكروبات ومميزات عملية لممارسي الرعاية الصحية.',
  keywords: 'معاطف مختبر السعودية، معاطف مختبر طبية الرياض، معاطف بيضاء للأطباء، ملابس مختبر مهنية، معاطف مختبر المستشفى جدة، ملابس عمل طبية، معاطف مختبر متميزة الدمام، مورد يونيفورم الرعاية الصحية، معاطف الأطباء، الزي الطبي السعودي',
  openGraph: {
    title: 'معاطف مختبر متميزة للمتخصصين الطبيين | يونيوم السعودية',
    description: 'ارتقِ بمظهرك المهني مع معاطف المختبر المتميزة. مصممة لممارسي الرعاية الصحية في السعودية مع حماية مضادة للميكروبات، مميزات وظيفية، وراحة فائقة.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/products/lab-coats.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة معاطف المختبر المهنية من يونيوم',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'معاطف المختبر | يونيوم السعودية',
    description: 'معاطف مختبر متميزة مصممة للمتخصصين الطبيين في السعودية. المهنية تلتقي بالوظائف العملية مع حماية مضادة للميكروبات.',
    images: ['/images/products/lab-coats.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/healthcare-attire/lab-coats',
    languages: {
      'en': 'https://uneom.com/shop/healthcare-attire/lab-coats',
      'ar': 'https://uneom.com/ar/shop/healthcare-attire/lab-coats',
    },
  },
}; 