import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | يونيوم السعودية',
  description: 'تفاصيل سياسة الخصوصية ليونيوم حول كيفية جمع واستخدام وحماية بياناتك عند التفاعل مع خدمات الزي الموحد وملابس العمل لدينا في جميع أنحاء المملكة العربية السعودية.',
  keywords: 'سياسة الخصوصية يونيوم، حماية بيانات شركة الزي الموحد، خصوصية ملابس العمل السعودية، أمن بيانات العملاء، خصوصية طلب الزي الموحد عبر الإنترنت، حماية البيانات يونيوم، أمن المعلومات الشخصية، خصوصية الأعمال السعودية، خصوصية عملاء ملابس العمل، سياسة مزود الزي الموحد',
  openGraph: {
    title: 'سياسة الخصوصية | كيف تحمي يونيوم بياناتك',
    description: 'تعرف على كيفية جمع ومعالجة وحماية يونيوم لمعلوماتك الشخصية عند استخدام خدمات الزي الموحد المهني لدينا في المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/legal/privacy-policy.jpg',
        width: 1200,
        height: 630,
        alt: 'سياسة الخصوصية يونيوم - معلومات حماية البيانات',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سياسة الخصوصية | يونيوم السعودية',
    description: 'كيف تقوم يونيوم بجمع ومعالجة وحماية معلوماتك الشخصية عند استخدام خدمات الزي الموحد لدينا.',
    images: ['/images/legal/privacy-policy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/privacy-policy',
    languages: {
      'en': 'https://uneom.com/privacy-policy',
      'ar': 'https://uneom.com/ar/privacy-policy',
    },
  },
}; 