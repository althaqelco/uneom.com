import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'يونيفورم المكاتب | الزي المهني للشركات | يونيوم السعودية',
  description: 'يونيفورم مكتبي متميز مصمم لبيئات الشركات في السعودية. أزياء مهنية ومريحة مع تصاميم عصرية للعمليات التجارية اليومية.',
  keywords: 'يونيفورم مكاتب السعودية، ملابس عمل الشركات الرياض، أزياء مكتبية مهنية، يونيفورم العمل الرسمي، يونيفورم الشركات جدة، ملابس مكتبية متميزة، ملابس الشركات الدمام، مورد يونيفورم، ملابس عمل الموظفين، يونيفورم المكاتب السعودي',
  openGraph: {
    title: 'يونيفورم مكتبي متميز للتميز المهني | يونيوم السعودية',
    description: 'عزز حضورك المكتبي مع يونيفورم الشركات المتميز. مصمم للشركات السعودية مع تصميم عصري، مظهر مهني، وراحة فائقة.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/products/office-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة يونيفورم المكاتب المهنية من يونيوم',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'يونيفورم المكاتب | يونيوم السعودية',
    description: 'يونيفورم مكتبي متميز مصمم لبيئات الشركات في السعودية. المهنية تلتقي بالراحة مع تصميم عصري.',
    images: ['/images/products/office-uniforms.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/corporate-attire/office-uniforms',
    languages: {
      'en': 'https://uneom.com/shop/corporate-attire/office-uniforms',
      'ar': 'https://uneom.com/ar/shop/corporate-attire/office-uniforms',
    },
  },
}; 