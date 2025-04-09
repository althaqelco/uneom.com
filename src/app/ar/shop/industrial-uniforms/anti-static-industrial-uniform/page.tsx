import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization in Arabic
export const metadata: Metadata = {
  title: 'زي صناعي مضاد للكهرباء الساكنة | حماية متطورة للبيئات الصناعية السعودية | يونيوم',
  description: 'توفر أزياء يونيوم الصناعية المضادة للكهرباء الساكنة حماية متفوقة للعاملين في قطاعات النفط والغاز والإلكترونيات السعودية. معتمدة وفق معيار ISO 61340-5-1 مع ألياف مبددة للشحنات وتصميم مريح.',
  keywords: 'زي مضاد للكهرباء الساكنة السعودية, ملابس واقية من التفريغ الكهروستاتيكي, أزياء صناعية مبددة للشحنات, معدات وقاية للصناعات الإلكترونية, زي آمن لقطاع النفط والغاز, ملابس الغرف النظيفة السعودية, زي معتمد ISO 61340, ملابس متوافقة مع ATEX',
  openGraph: {
    title: 'زي صناعي مضاد للكهرباء الساكنة | حماية متفوقة من التفريغ الكهروستاتيكي للبيئات الحساسة',
    description: 'مصمم خصيصًا للبيئات الصناعية السعودية المتطلبة حيث يشكل التفريغ الكهروستاتيكي مخاطر جسيمة. يتميز بتقنية الخيوط ذات النواة الكربونية، وألياف مبددة للشحنات، وتصميم شبكي موصل. معتمد وفق معايير ISO 61340-5-1 وATEX.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/antistatic-uniform-1.jpg',
        width: 1200,
        height: 630,
        alt: 'زي صناعي مضاد للكهرباء الساكنة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/anti-static-industrial-uniform',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/anti-static-industrial-uniform',
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

export default function AntiStaticUniformArabicPage() {
  // Create product data for the Arabic version
  const product = {
    id: 'anti-static-industrial-uniform',
    name: 'زي صناعي مضاد للكهرباء الساكنة',
    description: 'زي صناعي متقدم مضاد للكهرباء الساكنة مصمم خصيصًا لبيئات النفط والغاز وتصنيع الإلكترونيات في المملكة العربية السعودية، يوفر حماية متفوقة من مخاطر التفريغ الكهروستاتيكي مع الحفاظ على الراحة والأداء المهني.',
    features: [
      'تقنية الخيوط ذات النواة الكربونية لتبديد الشحنات الكهروستاتيكية',
      'ألياف مبددة للشحنات توفر حماية دائمة حتى بعد الغسيل المتكرر',
      'تصميم شبكي موصل يضمن توزيع الشحنات بشكل متساوٍ',
      'معتمد وفق معايير ISO 61340-5-1 للحماية من الشحنات الكهروستاتيكية',
      'متوافق مع معايير ATEX للبيئات القابلة للانفجار',
      'قماش مريح ومتين مناسب للاستخدام اليومي'
    ],
    price: 480,
    images: [
      '/images/products/industrial/antistatic-uniform-1.jpg',
      '/images/products/industrial/antistatic-uniform-2.jpg',
      '/images/products/industrial/antistatic-uniform-3.jpg'
    ],
    colors: ['#192a56', '#273c75', '#353b48'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'industrial-uniforms',
    tags: ['مضاد للكهرباء الساكنة', 'حماية ESD', 'زي صناعي', 'النفط والغاز', 'الإلكترونيات'],
    rating: 4.8,
    reviews: 73
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
      id: 'heat-resistant-gloves',
      name: 'قفازات مقاومة للحرارة',
      description: 'قفازات صناعية مقاومة للحرارة للاستخدام في البيئات الصناعية القاسية',
      features: ['حماية من الحرارة', 'متانة عالية'],
      price: 145,
      images: ['/images/products/industrial/heat-resistant-gloves-1.jpg'],
      colors: ['#e74c3c', '#34495e', '#f1c40f'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'industrial-uniforms',
      tags: ['قفازات صناعية', 'مقاومة للحرارة', 'معدات وقاية'],
      rating: 4.7,
      reviews: 89
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
            "name": "زي صناعي مضاد للكهرباء الساكنة من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial/antistatic-uniform-1.jpg",
              "https://uneom.com/images/products/industrial/antistatic-uniform-2.jpg",
              "https://uneom.com/images/products/industrial/antistatic-uniform-3.jpg"
            ],
            "description": "زي صناعي متقدم مضاد للكهرباء الساكنة مصمم لبيئات النفط والغاز وتصنيع الإلكترونيات في المملكة العربية السعودية، يتميز بتقنية الخيوط ذات النواة الكربونية وألياف مبددة للشحنات. معتمد وفق معايير ISO 61340-5-1 وATEX.",
            "sku": "UNEOM-AS-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/anti-static-industrial-uniform",
              "priceCurrency": "SAR",
              "price": "480",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "73"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={product} relatedProducts={relatedProducts} locale={locale} />
    </>
  );
} 