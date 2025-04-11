import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'زي مستشار مبيعات البوتيك | ملابس متاجر التصميم الراقية | يونيوم المملكة العربية السعودية',
  description: 'أزياء مستشاري مبيعات البوتيك المتطورة والمصممة خصيصًا لمتاجر التجزئة الراقية في السعودية. ملابس أنيقة واحترافية بأقمشة فاخرة وخيارات تصميم محتشمة. ارتقِ بفريق متجرك الفاخر في الرياض وجدة وجميع أنحاء المملكة.',
  keywords: 'زي مبيعات البوتيك السعودية, ملابس موظفي التجزئة الفاخرة, زي المتاجر الراقية, ملابس بوتيكات الأزياء السعودية, يونيفورم متاجر التصميم الرياض, أزياء المستشارين الفاخرة, حلول البيع بالتجزئة الفاخرة السعودية',
  openGraph: {
    title: 'زي مستشار مبيعات البوتيك | ارتقِ بتجربة التجزئة الفاخرة',
    description: 'مصممة بدقة للبوتيكات الراقية وبيئات البيع بالتجزئة المتخصصة في المملكة العربية السعودية. أزياء متطورة وأنيقة تعزز هيبة علامتك التجارية وتجربة العملاء. خيارات تخصيص متعددة مع أقمشة فاخرة.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
        width: 1200,
        height: 630,
        alt: 'زي مستشار مبيعات البوتيك من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/related-product-2',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/related-product-2',
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

export default function BoutiqueSalesConsultantUniformPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-2'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-2',
    name: 'زي مستشار مبيعات البوتيك',
    description: 'ارتقِ بعلامتك التجارية مع زي مستشار المبيعات المتطور، المصمم خصيصًا لبيئات البيع بالتجزئة الراقية في المملكة العربية السعودية. تُظهر هذه المجموعة الأنيقة الفخامة والاهتمام بالتفاصيل، مصنوعة من أقمشة فاخرة توفر راحة استثنائية أثناء استشارات العملاء. تشير الخطوط المنقحة وتفاصيل التصميم الدقيقة إلى الجودة والخبرة للعملاء المتميزين، مما يكمل بشكل مثالي بيئات البيع بالتجزئة الفاخرة.',
    features: [
      'مصنوعة من مزيج الأقمشة الإيطالية الفاخرة (80% صوف، 20% بوليستر) لانسيابية وراحة متطورة',
      'خطوط أنيقة مع خيارات تخصيص دقيقة خاصة بالعلامة التجارية',
      'متوفرة بلوحات ألوان مناسبة للبوتيكات لتكمل ديكور المتاجر الداخلي',
      'تنوعات تصميم محتشمة مناسبة لبيئات البيع بالتجزئة الفاخرة السعودية',
      'خصائص مقاومة للتجاعيد للحفاظ على مظهر لا تشوبه شائبة طوال المناوبات الطويلة',
      'إكسسوارات تنسيق اختيارية (أوشحة، مناديل الجيب، مجوهرات) للتناغم الكامل مع العلامة التجارية'
    ],
    price: 680,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#8e44ad', '#ecf0f1'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'retail-uniforms',
    tags: ['زي البوتيك الفاخر', 'ملابس متاجر المصممين', 'أزياء البيع بالتجزئة الفاخرة', 'مستشار المبيعات الراقي', 'ملابس بوتيك الأزياء'],
    rating: 4.9,
    reviews: 65
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'luxury-retail-collection',
      name: 'مجموعة أزياء البيع بالتجزئة الفاخرة',
      description: 'مجموعة كاملة من أزياء البيع بالتجزئة الفاخرة للمتاجر والبوتيكات الراقية',
      features: ['أقمشة فاخرة', 'قصة محكمة', 'مخططات ألوان قابلة للتخصيص'],
      price: 795,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['البيع بالتجزئة الفاخر', 'زي البوتيك', 'ملابس المتاجر الراقية'],
      rating: 4.9,
      reviews: 92
    },
    {
      id: 'customer-service',
      name: 'زي مكتب خدمة العملاء',
      description: 'ملابس احترافية مصممة خصيصًا لممثلي خدمة العملاء',
      features: ['مظهر احترافي', 'راحة للمناوبات الطويلة', 'تخصيص العلامة التجارية'],
      price: 380,
      images: ['/images/industries/retail-shops/retail-shops-uniform-brand.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      category: 'retail-uniforms',
      tags: ['خدمة العملاء', 'مكتب المساعدة', 'موظفي دعم البيع بالتجزئة'],
      rating: 4.7,
      reviews: 63
    },
    {
      id: 'related-product-1',
      name: 'زي موظف المتجر الفاخر',
      description: 'ارتقِ بعلامتك التجارية مع مجموعة أزياء موظفي المتاجر الفاخرة',
      features: ['قصة محكمة', 'مزيج قماش فاخر مريح', 'خيارات تخصيص'],
      price: 450,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي البيع بالتجزئة', 'ملابس موظفي المتجر', 'أزياء البيع بالتجزئة الفاخرة'],
      rating: 4.9,
      reviews: 78
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
            "name": "زي مستشار مبيعات البوتيك من يونيوم",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg"
            ],
            "description": "زي مستشار مبيعات البوتيك المتطور مصمم لبيئات البيع بالتجزئة الراقية السعودية، يتميز بأقمشة إيطالية فاخرة، وخطوط أنيقة، وخيارات تخصيص.",
            "sku": "UNEOM-RT-BTQ-02",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-2",
              "priceCurrency": "SAR",
              "price": "680",
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
      <ClientPage params={params} />
    </>
  );
} 