import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'زي الأمن | ملابس عمل الحراس المهنية | يونيوم السعودية',
  description: 'زي أمن متميز وملابس عمل الحراس لشركات ومرافق الأمن السعودية. توفر يونيوم أزياء أمن مهنية، زي تكتيكي، وإكسسوارات الحراس.',
  keywords: 'زي الأمن السعودية، ملابس عمل الحراس، زي ضباط الأمن الرياض، أزياء الأمن المهنية، ملابس الأمن التكتيكية، زي حراس الأمن السعودي، ملابس عمل حماية المرافق، زي شركات الأمن، أزياء الأمن الخاص، زي الأمن يونيوم',
  openGraph: {
    title: 'زي الأمن المتميز | يونيوم السعودية',
    description: 'زي حراس الأمن المهني مصمم لخدمات الحماية في المملكة العربية السعودية. توفر يونيوم ملابس عمل متينة تعكس السلطة لأفراد الأمن على جميع المستويات.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/shop/security/security-category.jpg',
        width: 1200,
        height: 630,
        alt: 'زي الأمن يونيوم - ملابس عمل الحراس المهنية',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'زي الأمن | يونيوم السعودية',
    description: 'ملابس عمل حراس الأمن المتميزة لخدمات الحماية السعودية. استكشف زي الأمن المهني عالي الجودة من يونيوم.',
    images: ['/images/shop/security/security-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-attire',
    languages: {
      'en': 'https://uneom.com/shop/security-attire',
      'ar': 'https://uneom.com/ar/shop/security-attire',
    },
  },
}; 