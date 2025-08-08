import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'طقم متجر متعدد الأقسام | زي موظفي المتاجر الكبرى | يونيوم المملكة العربية السعودية',
  description: 'أزياء متكاملة وعملية مصممة خصيصًا للعاملين في متاجر متعددة الأقسام في السوق السعودي. حلول مبتكرة بجودة عالية لتوحيد مظهر الفريق مع التمييز بين الأقسام المختلفة وتسهيل التعرف عليها من قبل العملاء.',
  keywords: 'زي متاجر متعددة الأقسام, يونيفورم هايبر ماركت, ملابس موظفي المراكز التجارية السعودية, أزياء متاجر الأقسام الكبرى, يونيفورم السوبر ماركت الرياض, زي موحد للمتاجر الكبرى السعودية, ملابس موظفي متاجر متعددة الأقسام',
  openGraph: {
    title: 'طقم متجر متعدد الأقسام | يونيوم السعودية',
    description: 'مجموعة أزياء احترافية للمتاجر متعددة الأقسام في المملكة العربية السعودية. صممت لتوفير الراحة خلال المناوبات الطويلة مع إمكانية تخصيص كل قسم للتمييز البصري السهل.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'طقم متجر متعدد الأقسام من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/related-product-3',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/related-product-3'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function RetailDepartmentStoreSetPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-3'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-3',
    name: 'طقم متجر متعدد الأقسام',
    description: 'أزياء متكاملة وعملية مصممة خصيصًا للعاملين في متاجر متعددة الأقسام في السوق السعودي. يوفر هذا الطقم مزيجًا مثاليًا من الأناقة المهنية ومتانة الاستخدام اليومي مع تكاليف مُحسّنة للمؤسسات ذات الفرق الكبيرة. يتميز الطقم بقابليته للتخصيص لمختلف الأقسام مع الحفاظ على اتساق الهوية البصرية للعلامة التجارية، ويوفر للموظفين راحة فائقة خلال نوبات العمل الطويلة في بيئة البيع بالتجزئة النشطة.',
    features: [
      'نسيج متين ومريح بنسبة مزج مثالية (60% قطن معالج، 40% بوليستر عالي الأداء) للاستخدام المتكرر مع الحفاظ على الشكل الأنيق',
      'تصميم متعدد الطبقات يمكن تعديله للملاءمة الموسمية - قميص أساسي وصديري/جاكيت خفيف قابل للإزالة',
      'جيوب عملية مصممة لاحتياجات العمل اليومية مع وضوح شارات الأسماء ورموز الأقسام',
      'تشطيبات مقاومة للكرمشة والبقع تبقى أنيقة طوال اليوم وتقلل تكاليف الصيانة',
      'تصميم محايد للجنسين يناسب فرق العمل المتنوعة مع خيارات تخصيص للأقسام المختلفة (تعليمية بألوان مميزة، شارات قسم)'
    ],
    price: 320,
    images: [
      '/images/products/retail/department-1.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg'
    ],
    colors: ['#1d3f6e', '#4a4a4a', '#556b2f', '#654321'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', 'مقاسات خاصة'],
    category: 'retail-uniforms',
    tags: ['زي متاجر الهايبر ماركت', 'ملابس موظفي الأقسام المتعددة', 'يونيفورم المتاجر الكبرى', 'زي موحد للسوبر ماركت', 'ملابس مراكز التسوق', 'أزياء متاجر الأثاث'],
    rating: 4.7,
    reviews: 85
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'related-product-1',
      name: 'بولو فاخر لموظفي المتاجر',
      description: 'قميص بولو فاخر مصمم خصيصًا لموظفي المتاجر الراقية في المملكة العربية السعودية',
      features: ['قماش فاخر مريح', 'مقاوم للبقع', 'خيارات تخصيص متعددة'],
      price: 185,
      images: ['/images/products/retail/uniform-1.jpg'],
      colors: ['#2c3e50', '#34495e', '#000000', '#ffffff'],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['بولو فاخر', 'زي المتاجر', 'قميص موظفين'],
      rating: 4.9,
      reviews: 78
    },
    {
      id: 'related-product-2',
      name: 'طقم بليزر فاخر للبيع بالتجزئة',
      description: 'طقم بليزر راقي مصمم خصيصًا لبيئات البيع بالتجزئة الفاخرة في المملكة العربية السعودية',
      features: ['نسيج فاخر', 'مقاوم للتجاعيد', 'تفاصيل أنيقة لإبراز هوية العلامة التجارية'],
      price: 650,
      images: ['/images/products/retail/luxury-1.jpg'],
      colors: ['#2c3e50', '#34495e', '#000000', '#7f0000'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي البيع بالتجزئة الفاخر', 'بليزر للمتاجر', 'يونيفورم البوتيكات'],
      rating: 4.8,
      reviews: 62
    },
    {
      id: 'related-product-4',
      name: 'زي فريق التجزئة غير الرسمي',
      description: 'أزياء عصرية وغير رسمية مصممة خصيصًا لمتاجر التجزئة المعاصرة',
      features: ['أقمشة مريحة', 'تصميم عصري', 'مناسب للمتاجر الشبابية'],
      price: 150,
      images: ['/images/products/retail/casual-1.jpg'],
      colors: ['#2ac3e2', '#7f8c8d', '#60714F', '#e67e22', '#8e44ad'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي كاجوال', 'ملابس متاجر التكنولوجيا', 'أزياء العلامات الشبابية'],
      rating: 4.6,
      reviews: 45
    }
  ];
  
  const locale = 'ar';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">طقم متجر متعدد الأقسام | زي موظفي المتاجر الكبرى | يونيوم المملكة العربية السعودية</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "طقم متجر متعدد الأقسام من يونيوم",
            "image": [
              "https://uneom.com/images/products/retail/department-1.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg"
            ],
            "description": "طقم متجر متعدد الأقسام مصمم خصيصًا للمتاجر الكبرى في السعودية، يتميز بنسيج متين، وتصميم عملي، وأنظمة تخصيص متكاملة لتمييز الأقسام المختلفة.",
            "sku": "UNEOM-RT-DPT-03",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-3",
              "priceCurrency": "SAR",
              "price": "320",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "85"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
} 