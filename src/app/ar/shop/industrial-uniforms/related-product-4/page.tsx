import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define Arabic metadata for SEO optimization
export const metadata: Metadata = {
  title: 'نظام الحماية من السقوط الصناعي | حزام أمان معتمد وفق معايير السلامة العالمية | يونيوم',
  description: 'توفر أنظمة الحماية من السقوط الصناعية من يونيوم أمانًا متفوقًا في البيئات الصناعية السعودية مع حزام أمان خماسي النقاط، وحبل مخفف للصدمات، وشهادة OSHA/ANSI. مثالية لقطاعات البناء والصيانة والنفط والغاز.',
  keywords: 'الحماية من السقوط السعودية, حزام أمان صناعي, حزام أمان كامل للجسم, نظام وقف السقوط معتمد OSHA, معدات سلامة البناء, معدات السلامة على الارتفاعات, معدات السلامة الصناعية السعودية',
  openGraph: {
    title: 'نظام الحماية من السقوط الصناعي | أمان متفوق للعمل على الارتفاعات في البيئات الصناعية السعودية',
    description: 'مصمم خصيصًا للبيئات الصناعية عالية المخاطر في المملكة العربية السعودية. يتميز بنظام حزام أمان خماسي النقاط، وحبل مخفف للصدمات، وأبازيم سريعة التوصيل للنشر السريع للأمان. يتجاوز معايير OSHA وANSI Z359 وهيئة المواصفات السعودية.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/fall-protection-1.jpg',
        width: 1200,
        height: 630,
        alt: 'نظام الحماية من السقوط الصناعي من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/related-product-4',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/related-product-4'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function IndustrialFallProtectionPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'related-product-4'
  };
  
  // Create product data for the Arabic version
  const product = {
    id: 'related-product-4',
    name: 'نظام الحماية من السقوط الصناعي',
    description: 'نظام حماية من السقوط الصناعي مهني مصمم خصيصًا للبيئات عالية المخاطر في القطاعات الصناعية السعودية. يشمل هذا النظام الكامل حزام أمان خماسي النقاط للجسم بالكامل، وحبل مخفف للصدمات، ونقاط تثبيت مصممة لمنع السقوط وتقليل الإصابة في حالة حدوث سقوط. مصمم هندسيًا لتوفير أقصى درجات السلامة والراحة في قطاعات البناء والصيانة والنفط والغاز.',
    features: [
      'حزام أمان خماسي النقاط للجسم بالكامل مع أحزمة قابلة للتعديل للملاءمة المثالية',
      'حبل مخفف للصدمات لتقليل قوى التأثير أثناء إيقاف السقوط',
      'أبازيم سريعة التوصيل للربط السريع والآمن',
      'يلبي أو يتجاوز معايير OSHA وANSI Z359 وهيئة المواصفات السعودية للحماية من السقوط',
      'أجهزة مقاومة للتآكل للبيئات الصناعية القاسية',
      'تصميم خفيف الوزن وقابل للتنفس للراحة طوال اليوم',
      'خياطة مرئية لسهولة الفحص',
      'نقطة ربط عالمية لمختلف أنظمة التوصيل'
    ],
    price: 590,
    images: [
      '/images/products/safety/fall-protection-1.jpg',
      '/images/products/safety/fall-protection-2.jpg',
      '/images/products/safety/fall-protection-3.jpg'
    ],
    colors: ['#2c3e50', '#e74c3c', '#f39c12'],
    sizes: ['مقاس قياسي', 'مقاس كبير/XL'],
    category: 'industrial-uniforms',
    tags: ['الحماية من السقوط', 'حزام أمان', 'وقف السقوط', 'معدات وقاية', 'سلامة صناعية', 'العمل على ارتفاعات'],
    rating: 4.9,
    reviews: 65
  };
  
  // Create related products for Arabic version
  const relatedProducts = [
    {
      id: 'safety-helmet-pro',
      name: 'خوذة السلامة المتطورة برو',
      description: 'خوذة سلامة متطورة توفر حماية فائقة في بيئات العمل الصناعية',
      features: ['عزل كهربائي', 'مقاومة للصدمات'],
      price: 189,
      images: ['/images/products/safety/helmet-pro-1.webp'],
      colors: ['#f1c40f', '#ecf0f1', '#2980b9'],
      sizes: ['مقاس موحد', 'مقاس كبير'],
      category: 'industrial-uniforms',
      tags: ['خوذة سلامة', 'معدات وقاية', 'حماية الرأس'],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 'related-product-2',
      name: 'نظارات السلامة المهنية',
      description: 'نظارات سلامة مهنية مصممة للبيئات الصناعية المتطلبة',
      features: ['مقاومة للصدمات', 'طلاء مضاد للضباب'],
      price: 175,
      images: ['/images/products/safety/goggles-1.jpg'],
      colors: ['#2c3e50', '#3498db', '#e74c3c'],
      sizes: ['مقاس قياسي', 'مقاس فوق النظارات الطبية'],
      category: 'industrial-uniforms',
      tags: ['نظارات السلامة', 'حماية العيون', 'معدات وقاية'],
      rating: 4.9,
      reviews: 87
    },
    {
      id: 'heat-resistant-gloves',
      name: 'قفازات صناعية مقاومة للحرارة',
      description: 'قفازات مقاومة للحرارة مصممة خصيصًا للاستخدام في البيئات الصناعية السعودية المتطلبة',
      features: ['مقاومة حرارية', 'حماية من الثقب'],
      price: 145,
      images: ['/images/products/industrial/heat-resistant-gloves-1.jpg'],
      colors: ['#e74c3c', '#34495e', '#f1c40f'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'industrial-uniforms',
      tags: ['قفازات مقاومة للحرارة', 'حماية اليدين', 'معدات وقاية'],
      rating: 4.7,
      reviews: 89
    }
  ];
  
  const locale = 'ar';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">نظام الحماية من السقوط الصناعي | حزام أمان معتمد وفق معايير السلامة العالمية | يونيوم</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "نظام الحماية من السقوط الصناعي من يونيوم",
            "image": [
              "https://uneom.com/images/products/safety/fall-protection-1.jpg",
              "https://uneom.com/images/products/safety/fall-protection-2.jpg",
              "https://uneom.com/images/products/safety/fall-protection-3.jpg"
            ],
            "description": "نظام حماية من السقوط الصناعي مهني مصمم للبيئات الصناعية السعودية، يتميز بحزام أمان خماسي النقاط، وحبل مخفف للصدمات، وأبازيم سريعة التوصيل. معتمد من OSHA وANSI Z359 وهيئة المواصفات السعودية لتوفير أقصى درجات السلامة.",
            "sku": "UNEOM-FP-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم لمعدات السلامة المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/related-product-4",
              "priceCurrency": "SAR",
              "price": "590",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "65"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={product} relatedProducts={relatedProducts} locale={locale} />
        </main>
  );
}
