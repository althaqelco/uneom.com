import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'يونيفورم الأمن | زي الحراس المهني | يونيوم السعودية',
  description: 'يونيفورم أمن متميز مصمم لمتخصصي الأمن في السعودية. أزياء مهنية ومتينة مع مميزات تكتيكية لموظفي الأمن والحراس.',
  keywords: 'يونيفورم أمن السعودية، يونيفورم حراس الرياض، ملابس عمل الأمن، أزياء أمن مهنية، يونيفورم موظفي الأمن جدة، ملابس أمن تكتيكية، ملابس الحراس الدمام، مورد يونيفورم، ملابس عمل الأمن، يونيفورم الأمن السعودي',
  openGraph: {
    title: 'يونيفورم أمن متميز للحماية المهنية | يونيوم السعودية',
    description: 'عزز حضور فريق الأمن مع يونيفورم متميز. مصمم لقطاع الأمن السعودي مع مواد متينة، مميزات تكتيكية، وراحة فائقة لموظفي الأمن.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/products/security-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة يونيفورم الأمن المهنية من يونيوم',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'يونيفورم الأمن | يونيوم السعودية',
    description: 'يونيفورم أمن متميز مصمم لقطاع الأمن في السعودية. المهنية تلتقي بالوظائف العملية مع مميزات تكتيكية.',
    images: ['/images/products/security-uniforms.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-attire/security-uniforms',
    languages: {
      'en': 'https://uneom.com/shop/security-attire/security-uniforms',
      'ar': 'https://uneom.com/ar/shop/security-attire/security-uniforms',
    },
  },
}; 