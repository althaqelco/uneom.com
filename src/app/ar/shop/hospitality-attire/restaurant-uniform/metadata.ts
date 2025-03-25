import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'يونيفورم المطاعم | أزياء خدمة الطعام المتميزة | يونيوم السعودية',
  description: 'يونيفورم مطاعم متميز مصمم لمنشآت تقديم الطعام في السعودية. أقمشة أنيقة ومقاومة للبقع مع تصاميم عملية لراحة موظفي الصالة والمطبخ.',
  keywords: 'يونيفورم مطاعم السعودية، يونيفورم خدمة الطعام الرياض، يونيفورم النادل، يونيفورم الطهاة، أزياء موظفي المطاعم، يونيفورم منشآت الطعام جدة، ملابس عمل المطبخ، يونيفورم خدمة احترافي الدمام، مورد ملابس المطاعم، أزياء الضيافة السعودية',
  openGraph: {
    title: 'يونيفورم موظفي المطاعم المتميز للخدمة الراقية | يونيوم السعودية',
    description: 'ارتقِ بصورة مطعمك مع يونيفورم الموظفين المتميز. مصمم لمنشآت تقديم الطعام السعودية بأقمشة مقاومة للبقع، تصاميم أنيقة، وراحة فائقة للتميز في الخدمة.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/products/restaurant-uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة يونيفورم موظفي المطاعم الاحترافية من يونيوم',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'يونيفورم المطاعم | يونيوم السعودية',
    description: 'يونيفورم مطاعم متميز مصمم لمنشآت تقديم الطعام في السعودية. الأناقة تلتقي بالوظائف العملية مع راحة ومتانة فائقة.',
    images: ['/images/products/restaurant-uniform.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/hospitality-attire/restaurant-uniform',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire/restaurant-uniform',
      'ar': 'https://uneom.com/ar/shop/hospitality-attire/restaurant-uniform',
    },
  },
}; 