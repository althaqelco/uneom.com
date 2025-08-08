import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define Arabic metadata for SEO optimization
export const metadata: Metadata = {
  title: 'أحذية عمل صناعية متطورة | أحذية سلامة معتمدة للصناعات | يونيوم',
  description: 'توفر أحذية العمل الصناعية من يونيوم حماية متفوقة في البيئات الصناعية السعودية مع مقاومة للانزلاق، وحماية من الصدمات، وتصميم مريح. معتمدة وفقًا للمعايير الخليجية والدولية لأقصى درجات السلامة.',
  keywords: 'أحذية عمل صناعية السعودية, أحذية سلامة للعمال, أحذية مقاومة للانزلاق, أحذية معتمدة للسلامة, أحذية بمقدمة فولاذية, أحذية مقاومة للثقب, معدات السلامة الصناعية السعودية',
  openGraph: {
    title: 'أحذية عمل صناعية متطورة | حماية متميزة للقدمين في بيئات العمل السعودية',
    description: 'مصممة خصيصًا للبيئات الصناعية المتطلبة في المملكة العربية السعودية. نعل مقاوم للانزلاق، مقدمة فولاذية للحماية من الصدمات، ونعل داخلي مضاد للتعب للاستخدام الممتد. تتجاوز معايير السلامة الخليجية والدولية.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/work-boots-1.jpg',
        width: 1200,
        height: 630,
        alt: 'أحذية العمل الصناعية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/related-product-1',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/related-product-1'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function IndustrialWorkBootsPageArabic() {
  // Create product data for the Arabic version
  const productData = {
    id: 'related-product-1',
    name: 'أحذية عمل صناعية متطورة',
    description: 'أحذية عمل صناعية متطورة مصممة خصيصًا للاستخدام في البيئات الصناعية السعودية المتطلبة. توفر هذه الأحذية حماية متميزة للقدمين من المخاطر الصناعية مثل الأجسام الثقيلة والأسطح الحادة، مع نعل مقاوم للانزلاق ومقدمة فولاذية للحماية من الصدمات. تم تصميمها بعناية لتوفير الراحة خلال ساعات العمل الطويلة في الظروف الصعبة.',
    features: [
      'نعل مقاوم للانزلاق على الأسطح الزيتية والرطبة',
      'مقدمة فولاذية للحماية من الصدمات حتى 200 جول',
      'نعل داخلي مضاد للثقب',
      'نظام تهوية متطور للعمل في درجات الحرارة العالية',
      'نعل داخلي مريح مضاد للتعب للاستخدام الممتد',
      'مقاومة للزيوت والمواد الكيميائية الصناعية'
    ],
    price: 320,
    images: [
      '/images/products/industrial/work-boots-1.jpg',
      '/images/products/industrial/work-boots-2.jpg',
      '/images/products/industrial/work-boots-3.jpg'
    ],
    colors: ['#34495e', '#795548', '#212121'],
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    category: 'industrial-uniforms',
    tags: ['أحذية عمل', 'أحذية سلامة', 'معدات وقاية', 'صناعة', 'سلامة مهنية'],
    rating: 4.8,
    reviews: 102
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
      id: 'industrial-coverall',
      name: 'بدلة عمل صناعية',
      description: 'بدلة عمل صناعية عالية الجودة مقاومة للحرارة والاشتعال',
      features: ['مقاومة للحرارة', 'مقاومة للاشتعال'],
      price: 349,
      images: ['/images/products/industrial/coverall-1.jpg'],
      colors: ['#e67e22', '#21618c', '#b7950b'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'industrial-uniforms',
      tags: ['بدلة عمل', 'صناعية', 'مقاومة للحرارة'],
      rating: 4.6,
      reviews: 98
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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">أحذية عمل صناعية متطورة | أحذية سلامة معتمدة للصناعات | يونيوم</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "أحذية العمل الصناعية المتطورة من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial/work-boots-1.jpg",
              "https://uneom.com/images/products/industrial/work-boots-2.jpg",
              "https://uneom.com/images/products/industrial/work-boots-3.jpg"
            ],
            "description": "أحذية عمل صناعية متطورة مصممة للبيئات الصناعية السعودية، تتميز بنعل مقاوم للانزلاق، ومقدمة فولاذية للحماية من الصدمات، ونعل داخلي مضاد للثقب.",
            "sku": "UNEOM-WB-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/related-product-1",
              "priceCurrency": "SAR",
              "price": "320",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "102"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />
        </main>
  );
}
