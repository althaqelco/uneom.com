import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ملابس طبية | يونيفورم الرعاية الصحية المتميز | يونيوم السعودية',
  description: 'ملابس طبية متميزة مصممة لمتخصصي الرعاية الصحية في السعودية. يونيفورم مريح ومتين مع أقمشة مضادة للميكروبات ومميزات عملية للطاقم الطبي.',
  keywords: 'ملابس طبية السعودية، يونيفورم الرعاية الصحية الرياض، ملابس طاقم المستشفى، يونيفورم الممرضات، ملابس الأطباء جدة، ملابس العمل الطبية، ملابس طبية متميزة الدمام، مورد يونيفورم الرعاية الصحية، أزياء طاقم المستشفى، يونيفورم طبي سعودي',
  openGraph: {
    title: 'ملابس طبية متميزة للتميز في الرعاية الصحية | يونيوم السعودية',
    description: 'عزز أداء فريقك الطبي مع ملابسنا الطبية المتميزة. مصممة لمتخصصي الرعاية الصحية في السعودية مع أقمشة مضادة للميكروبات، مميزات مريحة، وراحة فائقة.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/products/medical-scrubs.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة الملابس الطبية الاحترافية من يونيوم',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ملابس طبية | يونيوم السعودية',
    description: 'ملابس طبية متميزة مصممة لمتخصصي الرعاية الصحية في السعودية. الراحة تلتقي بالوظائف العملية مع حماية مضادة للميكروبات.',
    images: ['/images/products/medical-scrubs.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/healthcare-attire/medical-scrubs',
    languages: {
      'en': 'https://uneom.com/shop/healthcare-attire/medical-scrubs',
      'ar': 'https://uneom.com/ar/shop/healthcare-attire/medical-scrubs',
    },
  },
}; 