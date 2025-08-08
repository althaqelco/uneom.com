import type { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'يونيوم: أفضل مصنع زي موحد بالسعودية | الرياض، جدة، الدمام',
  description: 'يونيوم: خبيرك لتصنيع وتوريد الزي الموحد الفاخر في السعودية. نصمم للرعاية الصحية، الشركات والصناعة. اطلب عرض أسعار اليوم!',
  keywords: ['الزي الموحد', 'اليونيفورم', 'زي موحد السعودية', 'يونيفورم الرياض', 'الزي الموحد جدة', 'يونيفورم الدمام', 'زي موحد الخبر', 'الزي الموحد للمستشفيات', 'اليونيفورم الطبي', 'الزي الموحد للشركات', 'يونيفورم الفنادق', 'الزي الموحد الصناعي', 'مصنع الزي الموحد السعودية', 'مورد اليونيفورم', 'الزي الموحد المخصص', 'تصميم اليونيفورم'],
  authors: [
    {
      name: 'يونيوم - مزود الزي الموحد واليونيفورم الرائد في السعودية',
      url: 'https://uneom.com/ar'}
  ],
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    title: 'يونيوم: أفضل مصنع زي موحد بالسعودية | تصاميم مخصصة وجودة عالية',
    description: 'يونيوم: خبيرك لتصنيع وتوريد الزي الموحد الفاخر في السعودية. نصمم للرعاية الصحية، الشركات والصناعة. اطلب عرض أسعار اليوم!',
    images: [
      {
        url: 'https://uneom.com/api/og?title=الزي%20الموحد%20واليونيفورم%20المهني%20في%20السعودية',
        width: 1200,
        height: 630,
        alt: 'يونيوم - الزي الموحد واليونيفورم في المملكة العربية السعودية'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'يونيوم: أفضل مصنع زي موحد بالسعودية | الرياض، جدة، الدمام',
    description: 'يونيوم: خبيرك لتصنيع وتوريد الزي الموحد الفاخر في السعودية. نصمم للرعاية الصحية، الشركات والصناعة. اطلب عرض أسعار اليوم!',
    images: ['https://uneom.com/api/og?title=الزي%20الموحد%20واليونيفورم%20المهني%20في%20السعودية']},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}},
  alternates: {
    canonical: 'https://uneom.com/ar',
    languages: {
      'en-SA': 'https://uneom.com',
      'ar-SA': 'https://uneom.com/ar',
      'x-default': 'https://uneom.com'
    }},
  verification: {
    google: 'google-site-verification=abcdefghijklmnopqrstuvwxyz'}};

export default metadata; 