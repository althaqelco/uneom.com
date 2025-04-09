import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization in Arabic
export const metadata: Metadata = {
  title: 'زي المشرف الصناعي الاحترافي | ملابس عمل فاخرة للمشرفين | يونيوم',
  description: 'توفر أزياء المشرفين الصناعية من يونيوم ملابس مهنية مميزة لإدارة المواقع الصناعية في المملكة العربية السعودية. أقمشة فاخرة، خيارات تخصيص العلامة التجارية، وبناء متين للإشراف اليومي على المواقع.',
  keywords: 'زي المشرف الصناعي السعودية, ملابس المدراء المهنية, زي مشرف الموقع, زي قائد الفريق الصناعي, ملابس المشرف المخصصة, أزياء صناعية احترافية, زي إدارة الإنشاءات السعودي, ملابس عمل مشرفي النفط والغاز',
  openGraph: {
    title: 'زي المشرف الصناعي الاحترافي | ملابس مميزة للإدارة في الصناعة السعودية',
    description: 'أزياء مشرفين فاخرة مصممة لقيادة الصناعة السعودية. تصميم مميز مع راحة فائقة، مظهر احترافي، ووظائف عملية. متوفر مع خيارات تخصيص العلامة التجارية وتكوينات جيوب متعددة لاحتياجات إدارة الموقع.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/supervisor-uniform-1.jpg',
        width: 1200,
        height: 630,
        alt: 'زي المشرف الصناعي من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/supervisor-industrial-uniform',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/supervisor-industrial-uniform',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SupervisorUniformArabicPage() {
  // Create product data for the Arabic version
  const product = {
    id: 'supervisor-industrial-uniform',
    name: 'زي المشرف الصناعي الاحترافي',
    description: 'زي صناعي فاخر للمشرفين مصمم خصيصًا لقيادة الصناعة السعودية، يوفر مظهرًا مميزًا واحترافيًا مع الحفاظ على الراحة والوظائف العملية للإشراف اليومي على الموقع.',
    features: [
      'تصميم مميز يعكس المكانة الإدارية للمشرفين',
      'أقمشة فاخرة مريحة ومتينة للاستخدام اليومي',
      'جيوب متعددة عملية مصممة خصيصًا لمهام الإشراف',
      'إمكانية تطريز الشعارات والاسم والمسمى الوظيفي',
      'مقاومة للماء والبقع لسهولة الصيانة',
      'ألوان احترافية تناسب بيئات العمل الصناعية المختلفة'
    ],
    price: 520,
    images: [
      '/images/products/industrial/supervisor-uniform-1.jpg',
      '/images/products/industrial/supervisor-uniform-2.jpg',
      '/images/products/industrial/supervisor-uniform-3.jpg'
    ],
    colors: ['#1e3a8a', '#0f172a', '#1e293b'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'industrial-uniforms',
    tags: ['زي المشرف', 'ملابس إدارية', 'زي صناعي', 'ملابس مهنية', 'زي فاخر'],
    rating: 4.9,
    reviews: 87
  };
  
  // Create related products for Arabic version
  const relatedProducts = [
    {
      id: 'flame-resistant-workwear',
      name: 'زي مقاوم للهب',
      description: 'زي صناعي مقاوم للهب والحرارة للبيئات الصناعية عالية المخاطر',
      features: ['مقاوم للحريق', 'حماية حرارية'],
      price: 549,
      images: ['/images/products/industrial/flame-resistant-1.jpg'],
      colors: ['#192a56', '#273c75', '#353b48'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      category: 'industrial-uniforms',
      tags: ['مقاوم للهب', 'حماية من الحريق', 'زي صناعي'],
      rating: 4.9,
      reviews: 82
    },
    {
      id: 'hi-vis-safety-uniform',
      name: 'زي سلامة عالي الرؤية',
      description: 'زي سلامة عالي الرؤية لبيئات العمل الخطرة ومناطق الإضاءة المنخفضة',
      features: ['وضوح عالي', 'شرائط عاكسة'],
      price: 390,
      images: ['/images/products/industrial/hi-vis-1.jpg'],
      colors: ['#ffde00', '#ff7800'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      category: 'industrial-uniforms',
      tags: ['عالي الرؤية', 'زي سلامة', 'زي إنشاءات'],
      rating: 4.8,
      reviews: 94
    },
    {
      id: 'anti-static-industrial-uniform',
      name: 'زي صناعي مضاد للكهرباء الساكنة',
      description: 'زي صناعي متقدم مضاد للكهرباء الساكنة لبيئات النفط والغاز وتصنيع الإلكترونيات',
      features: ['مضاد للكهرباء الساكنة', 'تبديد الشحنات'],
      price: 480,
      images: ['/images/products/industrial/antistatic-uniform-1.jpg'],
      colors: ['#192a56', '#273c75', '#353b48'],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'industrial-uniforms',
      tags: ['مضاد للكهرباء الساكنة', 'حماية ESD', 'زي صناعي'],
      rating: 4.8,
      reviews: 73
    }
  ];
  
  const locale = 'ar';
  
  return (
    <>
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "زي المشرف الصناعي الاحترافي من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial/supervisor-uniform-1.jpg",
              "https://uneom.com/images/products/industrial/supervisor-uniform-2.jpg",
              "https://uneom.com/images/products/industrial/supervisor-uniform-3.jpg"
            ],
            "description": "زي صناعي فاخر للمشرفين مصمم خصيصًا لقيادة الصناعة السعودية، يتميز بتصميم مميز، وراحة فائقة، ووظائف عملية للإشراف على الموقع. متوفر مع خيارات تخصيص العلامة التجارية.",
            "sku": "UNEOM-SUP-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/supervisor-industrial-uniform",
              "priceCurrency": "SAR",
              "price": "520",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={product} relatedProducts={relatedProducts} locale={locale} />
    </>
  );
} 