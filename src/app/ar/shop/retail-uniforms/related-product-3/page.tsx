import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'طقم زي مدير القسم | ملابس قيادية احترافية للبيع بالتجزئة | يونيوم المملكة العربية السعودية',
  description: 'أزياء مديري الأقسام المتميزة المصممة لقيادة قطاع التجزئة السعودي. ملابس احترافية ذات هيبة مع أقمشة فاخرة وعلامات تجارية دقيقة. رسخ حضور الإدارة في بيئات البيع بالتجزئة في الرياض وجدة وجميع أنحاء المملكة.',
  keywords: 'زي مدير القسم السعودية, ملابس إدارة التجزئة, ملابس قيادية احترافية, أزياء البيع بالتجزئة التنفيذية السعودية, يونيفورم مدراء المتاجر الرياض, ملابس مشرفي التجزئة, حلول الإدارة السعودية',
  openGraph: {
    title: 'طقم زي مدير القسم | ترسيخ حضور قيادة التجزئة',
    description: 'مصممة خصيصًا لأدوار الإدارة والقيادة في بيئات البيع بالتجزئة السعودية. ملابس متميزة واحترافية ترسخ السلطة مع الحفاظ على سهولة التواصل. أقمشة فاخرة مع خيارات تخصيص دقيقة.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'طقم زي مدير القسم من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/related-product-3',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/related-product-3',
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

export default function DepartmentManagerUniformPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-3'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-3',
    name: 'طقم زي مدير القسم',
    description: 'رسخ حضور قيادي واضح مع طقم زي مدير القسم، المصمم خصيصًا لأدوار إدارة التجزئة في بيئات التسوق السعودية. تحقق هذه المجموعة المتميزة التوازن المثالي بين السلطة وسهولة التواصل، وتتميز بأقمشة فاخرة وتصميم تنفيذي دقيق يميز الإدارة مع الحفاظ على تناغم العلامة التجارية مع أزياء الموظفين. تشير القصة المحكمة والتفاصيل عالية الجودة إلى الاحترافية لكل من العملاء والموظفين.',
    features: [
      'مزيج قماش فاخر (75% صوف، 25% بوليستر) مع لمسة نهائية تنفيذية دقيقة',
      'خطوط محكمة مع تفاصيل متقنة تميز الإدارة عن الموظفين العاديين',
      'عناصر علامة تجارية دقيقة تشمل شارات إدارية اختيارية',
      'لوحة ألوان احترافية مصممة للتنسيق مع أزياء الموظفين مع التميز عنها',
      'بناء عالي المتانة لمسؤوليات إدارة التجزئة النشطة',
      'إكسسوارات تنفيذية اختيارية تشمل ربطة عنق/وشاح بالعلامة التجارية ودبوس طية صدر'
    ],
    price: 750,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brand.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'retail-uniforms',
    tags: ['زي مدير القسم', 'ملابس إدارة التجزئة', 'ملابس قيادية احترافية', 'أزياء البيع بالتجزئة التنفيذية', 'زي مشرف المتجر'],
    rating: 4.8,
    reviews: 52
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
      id: 'related-product-2',
      name: 'زي مستشار مبيعات البوتيك',
      description: 'أزياء مستشاري مبيعات البوتيك المتطورة والمصممة خصيصًا لمتاجر التجزئة الراقية',
      features: ['أقمشة فاخرة', 'خطوط أنيقة', 'لوحات ألوان مناسبة للبوتيكات'],
      price: 680,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg'],
      colors: ['#2c3e50', '#34495e', '#8e44ad', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['زي البوتيك', 'البيع بالتجزئة الفاخر', 'المبيعات الراقية'],
      rating: 4.9,
      reviews: 65
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
            "name": "طقم زي مدير القسم من يونيوم",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brand.jpg"
            ],
            "description": "طقم زي مدير القسم المتميز مصمم لقيادة التجزئة في البيئات السعودية، ويتميز بقماش مزيج الصوف الفاخر، وخطوط محكمة، وعناصر علامة تجارية دقيقة.",
            "sku": "UNEOM-RT-MGR-03",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-3",
              "priceCurrency": "SAR",
              "price": "750",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "52"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 