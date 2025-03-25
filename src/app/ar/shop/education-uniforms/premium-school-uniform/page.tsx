'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaStar, FaStarHalfAlt, FaRegStar, FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateProductWhatsAppUrl, generateQuoteWhatsAppUrl } from '@/utils/whatsapp';

export default function PremiumSchoolUniformPageArabic() {
  const locale = 'ar';
  
  // Product details in Arabic
  const product = {
    id: 'premium-school-uniform',
    name: 'الزي المدرسي الفاخر للطلاب',
    price: 'من ٢٢٩ ريال سعودي',
    basePrice: "229",
    rating: 4.7,
    reviews: 132,
    description: 'أزياء مدرسية فاخرة تجمع بين المتانة والراحة والأناقة، مصممة خصيصًا للمدارس السعودية.',
    longDescription: 'تم تطوير مجموعة الزي المدرسي الفاخر لدينا لتوفير أعلى مستويات الراحة والمتانة مع الحفاظ على المظهر الأنيق. كل قطعة تتميز بتصميم متطور ومواد عالية الجودة تضمن متانة استثنائية، حتى مع الاستخدام اليومي المكثف. تم اختيار الأقمشة بعناية لتوفير الأداء الأمثل في البيئة المدرسية السعودية، مع مراعاة الظروف المناخية والمعايير الثقافية. تتوفر مجموعتنا بمجموعة متنوعة من الألوان والتصاميم، مما يسمح للمدارس بتطبيق هويتها الفريدة، مع خيارات تخصيص لإضافة شعارات المدرسة.',
    features: [
      'قطن مصري فاخر مزيج (65% قطن، 35% بوليستر) للراحة والمتانة',
      'تصاميم مقاومة للتجاعيد تحافظ على المظهر الأنيق طوال اليوم الدراسي',
      'تقنية مضادة للبقع لسهولة التنظيف والصيانة',
      'خياطة معززة في مناطق الضغط العالي لزيادة العمر الافتراضي',
      'أزرار وسحابات متينة عالية الجودة تتحمل الاستخدام المتكرر',
      'أقمشة يمكن أن تتنفس مناسبة للمناخ السعودي',
      'خيارات تخصيص متعددة تناسب متطلبات المدرسة'
    ],
    specifications: [
      { name: 'المواد', value: 'قطن مصري مزيج (65% قطن، 35% بوليستر)' },
      { name: 'الوزن', value: 'متوسط الوزن (180-200 جرام/متر مربع)' },
      { name: 'تعليمات العناية', value: 'غسيل آلي، كي منخفض، لا تستخدم التبييض' },
      { name: 'المقاسات المتوفرة', value: 'من 4 سنوات إلى 18 سنة، للبالغين من XS إلى XXL' },
      { name: 'الألوان', value: 'متوفر بجميع ألوان المدارس التقليدية؛ الخيارات الشائعة: كحلي، رمادي، أخضر، أزرق فاتح' },
      { name: 'بلد المنشأ', value: 'المملكة العربية السعودية' },
      { name: 'التخصيص', value: 'تطريز الشعار، طباعة الشعارات، ألوان مخصصة متاحة للطلبات الكبيرة' }
    ],
    images: [
      { src: '/images/industries/education/students/premium-uniform-01.webp', alt: 'الزي المدرسي الفاخر للطلاب - المظهر الأمامي' },
      { src: '/images/industries/education/students/premium-uniform-02.webp', alt: 'الزي المدرسي الفاخر للطلاب - المظهر الجانبي' },
      { src: '/images/industries/education/students/premium-uniform-03.webp', alt: 'تفاصيل خياطة الزي المدرسي الفاخر' },
      { src: '/images/industries/education/students/premium-uniform-04.webp', alt: 'مجموعة الزي المدرسي الفاخر للطلاب' }
    ],
    variants: [
      { name: 'قميص مدرسي فاخر', price: '٨٩ ريال سعودي' },
      { name: 'بنطلون مدرسي فاخر', price: '١٠٩ ريال سعودي' },
      { name: 'تنورة مدرسية فاخرة', price: '٩٩ ريال سعودي' },
      { name: 'سترة مدرسية فاخرة', price: '١٣٩ ريال سعودي' },
      { name: 'بليزر مدرسي فاخر', price: '١٨٩ ريال سعودي' },
      { name: 'ربطة عنق/وشاح مدرسي', price: '٤٩ ريال سعودي' },
      { name: 'طقم كامل للبنين (قميص + بنطلون + سترة)', price: 'من ٢٢٩ ريال سعودي' },
      { name: 'طقم كامل للبنات (قميص + تنورة/بنطلون + سترة)', price: 'من ٢٢٩ ريال سعودي' }
    ],
    customizationOptions: [
      { name: 'تطريز شعار المدرسة', price: '+٣٥ ريال سعودي' },
      { name: 'طباعة شعار المدرسة', price: '+٢٠ ريال سعودي' },
      { name: 'تطريز اسم الطالب', price: '+٢٥ ريال سعودي' },
      { name: 'ألوان مخصصة', price: 'متوفر للطلبات الكبيرة' }
    ]
  };
  
  // State for selected variant and quantity
  const [selectedVariant, setSelectedVariant] = useState(6); // Default to complete boy's set
  const [quantity, setQuantity] = useState(1);
  
  // Product images for the gallery
  const images = [
    {
      src: '/images/industries/education/premium-uniform-01.webp',
      alt: 'طقم الزي المدرسي الفاخر للطلاب'
    },
    {
      src: '/images/industries/education/premium-uniform-02.webp',
      alt: 'طلاب يرتدون الزي المدرسي الفاخر في بيئة مدرسية'
    },
    {
      src: '/images/industries/education/premium-uniform-03.webp',
      alt: 'صورة قريبة لتفاصيل الخياطة للزي المدرسي الفاخر'
    },
    {
      src: '/images/industries/education/students/premium-uniform-01.webp',
      alt: 'مجموعة الزي المدرسي الفاخر الكاملة للطلاب'
    }
  ];
  
  // Find the currently selected variant
  const currentVariant = product.variants[selectedVariant] || product.variants[0];
  
  // JSON-LD Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'الزي المدرسي الفاخر للطلاب',
    image: images.map(img => `https://uneom.com${img.src}`),
    description: 'أزياء مدرسية فاخرة تجمع بين المتانة والراحة والأناقة، مصممة خصيصًا للمدارس السعودية. تتميز بالقطن المصري، وتقنية مقاومة البقع، وتصاميم مقاومة للتجاعيد.',
    sku: 'EDU-PREM-001',
    brand: {
      '@type': 'Brand',
      name: 'يونيوم'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '49',
      highPrice: '229',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'يونيوم'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '132'
    }
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
    { label: 'الزي المدرسي الفاخر للطلاب', href: '#' },
  ];

  // Function to handle contact button clicks
  const handleContactClick = (messageType: 'product' | 'quote', details?: string) => {
    const productName = 'الزي المدرسي الفاخر للطلاب';
    const variant = product.variants ? product.variants[selectedVariant].name : '';
    
    let whatsappUrl;
    if (messageType === 'product') {
      whatsappUrl = generateProductWhatsAppUrl(productName, variant, quantity);
    } else {
      const detailsMsg = details || `الطراز: ${variant}، الكمية: ${quantity}، متطلبات إضافية: ${details || "لا يوجد"}`;
      whatsappUrl = generateQuoteWhatsAppUrl(productName, detailsMsg);
    }
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <MainLayout locale={locale}>
      <Head>
        <title>الزي المدرسي الفاخر للطلاب في المملكة العربية السعودية | يونيوم</title>
        <meta name="description" content="أزياء مدرسية فاخرة تجمع بين المتانة والراحة والأناقة، مصممة خصيصًا للمدارس السعودية. قماش قطني فاخر مع تقنية مقاومة البقع." />
        <link rel="canonical" href="https://uneom.com/ar/shop/education-uniforms/premium-school-uniform" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="الزي المدرسي الفاخر للطلاب في المملكة العربية السعودية" />
        <meta property="og:description" content="أزياء مدرسية فاخرة تجمع بين المتانة والراحة والأناقة، مصممة خصيصًا للمدارس السعودية. مصنوعة من قطن مصري فاخر مع تقنية مقاومة البقع." />
        <meta property="og:url" content="https://uneom.com/ar/shop/education-uniforms/premium-school-uniform" />
        <meta property="og:image" content="https://uneom.com/images/industries/education/premium-uniform-01.webp" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="product:price:amount" content={product.basePrice} />
        <meta property="product:price:currency" content="SAR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الزي المدرسي الفاخر للطلاب في المملكة العربية السعودية" />
        <meta name="twitter:description" content="أزياء مدرسية فاخرة مصممة خصيصًا للمدارس السعودية." />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/premium-uniform-01.webp" />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com/shop/education-uniforms/premium-school-uniform" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar/shop/education-uniforms/premium-school-uniform" />
      </Head>
      
      <div className="bg-white pt-8 pb-16">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          
          {/* Product main section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product images */}
            <div className="relative order-1 md:order-2">
              <div className="aspect-w-1 aspect-h-1 bg-neutral-100 rounded-lg overflow-hidden">
                <Image 
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {product.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product details */}
            <div className="order-2 md:order-1">
              <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mt-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => {
                    if (product.rating >= i + 1) {
                      return <FaStar key={i} className="w-5 h-5" />;
                    } else if (product.rating >= i + 0.5) {
                      return <FaStarHalfAlt key={i} className="w-5 h-5" />;
                    } else {
                      return <FaRegStar key={i} className="w-5 h-5" />;
                    }
                  })}
                </div>
                <span className="mr-2 text-neutral-500">{product.rating} ({product.reviews} تقييم)</span>
              </div>
              
              <p className="text-2xl font-bold text-primary-600 mb-6">{product.price}</p>
              
              <div className="prose max-w-none mb-6">
                <p>{product.longDescription}</p>
              </div>
              
              {/* Variants selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">الخيارات</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 text-sm border rounded-md transition ${
                        selectedVariant === index
                          ? "border-primary-600 bg-primary-50 text-primary-700"
                          : "border-neutral-300 hover:border-neutral-400"
                      }`}
                      onClick={() => setSelectedVariant(index)}
                    >
                      {variant.name} - {variant.price}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Customization options */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">خيارات التخصيص</h3>
                <div className="space-y-2 bg-neutral-50 p-4 rounded-md">
                  {product.customizationOptions.map((option, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{option.name}</span>
                      <span className="font-medium">{option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Add to Quote */}
              <div className="flex items-center mb-6">
                <div className="border border-neutral-300 rounded-md flex items-center ml-4">
                  <button
                    className="px-3 py-2 text-neutral-600 hover:text-primary-600 transition"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-neutral-300 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-2 text-neutral-600 hover:text-primary-600 transition"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1 justify-center items-center gap-2"
                  onClick={() => handleContactClick('product')}
                >
                  <FaWhatsapp /> تواصل الآن
                </Button>
              </div>
              
              {/* Features */}
              <div className="border-t border-b border-neutral-200 py-4 mb-6">
                <h3 className="font-medium mb-3">الميزات الرئيسية</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-primary-600 mt-1 ml-2 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Specifications */}
              <div>
                <h3 className="font-medium mb-3">المواصفات</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="grid grid-cols-3 py-2 border-b border-neutral-100">
                      <span className="text-neutral-600 font-medium">{spec.name}</span>
                      <span className="text-neutral-800 col-span-2">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium Quality Section */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <SectionHeading>لماذا تختار الزي المدرسي الفاخر؟</SectionHeading>
            <div className="mt-4">
              <p className="text-neutral-700 mb-4">
                تم تصميم مجموعة الزي المدرسي الفاخر لدينا ليس فقط للمظهر الأنيق ولكن أيضًا للأداء اليومي المتفوق. 
                نحن نفهم أن الزي المدرسي هو استثمار، ولهذا السبب نركز على الجودة العالية والمتانة التي تدوم طوال العام الدراسي وما بعده.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">مواد فائقة الجودة</h4>
                  <p className="text-sm text-neutral-600">نستخدم فقط أفضل المواد، بما في ذلك القطن المصري الفاخر، لضمان الراحة والمتانة طوال اليوم.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">صناعة متميزة</h4>
                  <p className="text-sm text-neutral-600">كل قطعة يتم تصنيعها بعناية مع اهتمام خاص بالتفاصيل، من الخياطة المعززة إلى الأزرار عالية الجودة.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">خيارات تخصيص متنوعة</h4>
                  <p className="text-sm text-neutral-600">نقدم مجموعة من خيارات التخصيص لإنشاء زي مدرسي يعكس تمامًا هوية مدرستك وقيمها.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* School Identity Section */}
          <div className="mt-16">
            <SectionHeading>عزز هوية مدرستك</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-1 order-2">
                <p className="text-neutral-700 mb-4">
                  يلعب الزي المدرسي دورًا مهمًا في تعزيز الهوية المدرسية وخلق شعور بالانتماء بين الطلاب. 
                  يتيح برنامج الزي المدرسي الفاخر الخاص بنا للمدارس تصميم زي يعكس قيمها وتقاليدها.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">تصميم مخصص</h4>
                    <p className="text-sm">خيارات تخصيص كاملة لألوان وأنماط وشعارات المدرسة.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">برامج للمدارس</h4>
                    <p className="text-sm">حلول متكاملة للمدارس من جميع الأحجام، مع أسعار خاصة للطلبات الكبيرة.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">استشارات التصميم</h4>
                    <p className="text-sm">خدمات استشارية لمساعدة المدارس في إنشاء برنامج زي مدرسي أنيق وعملي.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">نظام توزيع سهل</h4>
                    <p className="text-sm">خيارات متعددة للتوزيع، بما في ذلك التوصيل المباشر وطلبات بوابة الأولياء.</p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="mt-6 flex items-center gap-2"
                  onClick={() => handleContactClick('quote', 'استفسار عن برنامج زي مدرسي كامل')}
                >
                  <FaWhatsapp /> طلب عرض سعر للمدرسة
                </Button>
              </div>
              <div className="relative order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-80">
                <Image 
                  src="/images/industries/education/students/premium-uniform-02.webp"
                  alt="طلاب يرتدون الزي المدرسي الفاخر"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Contact section */}
          <div className="mt-16" id="contact">
            <SectionHeading>طلب عرض سعر مخصص</SectionHeading>
            <div className="mt-8 bg-neutral-50 p-6 rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">تواصل معنا مباشرة</h3>
                <p className="mb-6">
                  تواصل مع متخصصي الزي المدرسي لدينا مباشرة عبر واتساب للحصول على مساعدة مخصصة. 
                  يمكننا المساعدة في برامج الزي المدرسي الكاملة، والتخصيص، وطلبات المدارس الكبيرة.
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="flex items-center justify-center gap-2 mx-auto"
                  onClick={() => handleContactClick('quote')}
                >
                  <FaWhatsapp className="text-xl" /> احصل على عرض سعر عبر واتساب
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 