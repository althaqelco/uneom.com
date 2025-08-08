import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ملابس جراحية | يونيفورم طبي بمستوى المستشفيات | يونيوم السعودية',
  description: 'ملابس جراحية متميزة مصممة لبيئات الرعاية الصحية في المملكة العربية السعودية. قماش مضاد للميكروبات، تصميم مريح، وخيارات تخصيص للمستشفيات والمراكز الجراحية.',
  keywords: 'ملابس جراحية السعودية، يونيفورم المستشفيات، ملابس طبية مضادة للميكروبات، ملابس غرفة العمليات، يونيفورم جراحي الرياض، ملابس العمل الصحية، يونيفورم الطاقم الطبي، ملابس OR، ملابس المسرح الجراحي، يونيفورم طبي يونيوم',
  openGraph: {
    title: 'ملابس جراحية متميزة للمتخصصين في الرعاية الصحية | يونيوم السعودية',
    description: 'ملابس جراحية بمستوى المستشفيات مع حماية مضادة للميكروبات، راحة مثالية، وخيارات تخصيص. مصممة للبيئات الطبية في جميع أنحاء المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/products/surgical-scrubs.jpg',
        width: 1200,
        height: 630,
        alt: 'ملابس جراحية احترافية من يونيوم'}
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'ملابس جراحية | يونيفورم طبي بمستوى المستشفيات | يونيوم السعودية',
    description: 'ملابس جراحية متميزة مصممة لبيئات الرعاية الصحية في المملكة العربية السعودية.',
    images: ['/images/products/surgical-scrubs.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/medical-scrubs/surgical-scrubs',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs/surgical-scrubs',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs/surgical-scrubs'}}}; 