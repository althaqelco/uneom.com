import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ملابس طبية ويونيفورم الرعاية الصحية | جودة متميزة | يونيوم السعودية',
  description: 'تسوق الملابس الطبية ويونيفورم الرعاية الصحية المتميزة المصممة للمتخصصين الطبيين في السعودية. أقمشة مضادة للميكروبات، مقاسات مريحة، وخيارات مخصصة للمستشفيات والعيادات.',
  keywords: 'ملابس طبية السعودية، يونيفورم الرعاية الصحية الرياض، ملابس المستشفى، يونيفورم طبي مضاد للميكروبات، ملابس جراحية، يونيفورم التمريض جدة، ملابس الأطباء، زي طاقم المستشفى، ملابس العمل الصحية الدمام، الزي الطبي السعودي',
  openGraph: {
    title: 'ملابس طبية ويونيفورم رعاية صحية متميزة | يونيوم السعودية',
    description: 'يونيفورم طبي احترافي مصمم لبيئات الرعاية الصحية السعودية. يجمع بين الراحة والمتانة والحماية المضادة للميكروبات للمستشفيات والعيادات في جميع أنحاء المملكة.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/categories/medical-scrubs-category.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة ملابس طبية احترافية من يونيوم',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ملابس طبية ويونيفورم الرعاية الصحية | يونيوم السعودية',
    description: 'يونيفورم طبي متميز مصمم للمتخصصين في الرعاية الصحية السعودية. الراحة تلتقي بالوظائف العملية مع الحماية المضادة للميكروبات.',
    images: ['/images/categories/medical-scrubs-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/medical-scrubs',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs',
    },
  },
}; 