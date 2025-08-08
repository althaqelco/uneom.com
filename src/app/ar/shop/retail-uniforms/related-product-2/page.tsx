import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'طقم بليزر فاخر للبيع بالتجزئة | أزياء محلات راقية | يونيوم المملكة العربية السعودية',
  description: 'اجعل علامتك التجارية رمزاً للتميز والفخامة مع طقم البليزر الراقي من يونيوم، المصمم خصيصاً لقطاع التجزئة السعودي الفاخر. أزياء تجمع بين الأناقة الاستثنائية والراحة الفائقة، مع خيارات تخصيص متعددة.',
  keywords: 'بليزر فاخر للبيع بالتجزئة, يونيفورم متاجر فاخرة السعودية, زي رسمي للبوتيكات, ملابس موظفي المتاجر الراقية, أزياء موحدة للبيع بالتجزئة, بدلات موظفي المتاجر الفاخرة, يونيوم السعودية',
  openGraph: {
    title: 'طقم بليزر فاخر للبيع بالتجزئة | أزياء محلات متميزة',
    description: 'أزياء راقية مصممة خصيصًا لبيئات البيع بالتجزئة الفاخرة في المملكة العربية السعودية. تعكس التزام مؤسستك بأعلى معايير الجودة والاحترافية وتعزز الهوية البصرية لعلامتك التجارية.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
        width: 1200,
        height: 630,
        alt: 'طقم بليزر فاخر للبيع بالتجزئة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/related-product-2',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/related-product-2'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function LuxuryRetailBlazerSetPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-2'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-2',
    name: 'طقم بليزر فاخر للبيع بالتجزئة',
    description: 'اجعل علامتك التجارية رمزاً للتميز والفخامة مع طقم البليزر الراقي المصمم خصيصاً لقطاع التجزئة السعودي الفاخر. يجمع هذا الزي الاحترافي بين الأناقة الاستثنائية والراحة الفائقة، ويعكس التزام مؤسستك بأعلى معايير الجودة والاحترافية. مصمم بعناية لتعزيز ثقة موظفيك وانطباع عملائك في بيئات البيع بالتجزئة الراقية في المملكة العربية السعودية.',
    features: [
      'نسيج فائق الجودة من مزيج الصوف (80% بوليستر فاخر، 20% صوف استرالي) لمظهر راقٍ ومتانة استثنائية',
      'معالجة متطورة مقاومة للبقع والتجاعيد تحافظ على الأناقة طوال يوم العمل وتقلل تكاليف الصيانة',
      'تفاصيل أنيقة لإبراز هوية العلامة التجارية (أزرار مخصصة، ألوان حصرية، تصميم جيب مميز)',
      'قصة عصرية مع اهتمام خاص بتفضيلات الراحة في المملكة العربية السعودية',
      'بطانة فاخرة قابلة للتنفس من الحرير الصناعي عالي الجودة مثالية للارتداء طوال اليوم في بيئات التسوق المكيفة'
    ],
    price: 650,
    images: [
      '/images/products/retail/luxury-1.jpg',
      '/images/products/retail/luxury-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brand.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#000000', '#7f0000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', 'مقاس مخصص'],
    category: 'retail-uniforms',
    tags: ['زي البيع بالتجزئة الفاخر', 'بليزر للمتاجر', 'يونيفورم البوتيكات', 'أزياء متاجر المجوهرات', 'ملابس متاجر الساعات', 'زي احترافي'],
    rating: 4.8,
    reviews: 62
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
      id: 'related-product-3',
      name: 'طقم متجر متعدد الأقسام',
      description: 'طقم احترافي متكامل مصمم للمتاجر متعددة الأقسام ومراكز التسوق الكبرى',
      features: ['تصميم عملي', 'نسيج متين', 'خيارات تمييز الأقسام المختلفة'],
      price: 320,
      images: ['/images/products/retail/department-1.jpg'],
      colors: ['#2c3e50', '#7f8c8d', '#3e5c76', '#654a32'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي متاجر الأقسام', 'يونيفورم هايبر ماركت', 'أزياء المراكز التجارية'],
      rating: 4.7,
      reviews: 53
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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">طقم بليزر فاخر للبيع بالتجزئة | أزياء محلات راقية | يونيوم المملكة العربية السعودية</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "طقم بليزر فاخر للبيع بالتجزئة من يونيوم",
            "image": [
              "https://uneom.com/images/products/retail/luxury-1.jpg",
              "https://uneom.com/images/products/retail/luxury-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg"
            ],
            "description": "طقم بليزر فاخر للبيع بالتجزئة مصمم خصيصًا لبيئات التجزئة السعودية الراقية، يتميز بأقمشة عالية الجودة ومقاومة للتجاعيد، مع خيارات تخصيص لتعزيز هوية العلامة التجارية.",
            "sku": "UNEOM-RT-LUX-02",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-2",
              "priceCurrency": "SAR",
              "price": "650",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "62"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
} 