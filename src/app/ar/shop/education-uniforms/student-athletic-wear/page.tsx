'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaStarHalfAlt, FaRegStar, FaShippingFast, FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateProductWhatsAppUrl, generateQuoteWhatsAppUrl } from '@/utils/whatsapp';

export default function StudentAthleticWearPageArabic() {
  const locale = 'ar';
  
  // Product details in Arabic
  const product = {
    id: 'student-athletic-wear',
    name: 'زي رياضي ومستلزمات التربية البدنية للطلاب',
    price: 'من ٢٤٩ ريال سعودي',
    basePrice: "249",
    rating: 4.8,
    reviews: 116,
    description: 'ملابس رياضية عالية الأداء مصممة خصيصًا لبرامج التربية البدنية المدرسية والأنشطة الرياضية في المملكة العربية السعودية.',
    longDescription: 'تم تصميم مجموعة الزي الرياضي ومستلزمات التربية البدنية للطلاب لتلبية الاحتياجات المحددة للمؤسسات التعليمية في جميع أنحاء المملكة العربية السعودية. تجمع هذه الملابس بين المتانة والراحة والاحتشام، مما يجعلها مثالية لحصص التربية البدنية والأنشطة الرياضية. تم تصنيع كل قطعة من أقمشة عالية الأداء تتحمل الاستخدام المنتظم مع توفير إدارة الرطوبة وحرية الحركة. متوفرة بمجموعة متنوعة من التكوينات لتلبية متطلبات المدارس المختلفة والأنشطة الرياضية، تم تصميم أزياءنا الرياضية لتشجيع النشاط البدني مع الحفاظ على المعايير المناسبة للبيئات المدرسية.',
    features: [
      'بوليستر عالي الأداء (100%) طارد للرطوبة للراحة أثناء النشاط',
      'درزات معززة لمتانة ممتدة في مناطق الحركة العالية',
      'حماية من الأشعة فوق البنفسجية (UPF 30+) للأنشطة الخارجية',
      'معالجة مضادة للميكروبات لتقليل تطور الروائح',
      'متوفر بتصاميم محتشمة مناسبة للأوساط التعليمية السعودية',
      'تقنية التجفيف السريع للارتداء في حصص متعددة',
      'قابل للتخصيص بشعارات وألوان المدرسة'
    ],
    specifications: [
      { name: 'المادة', value: 'بوليستر عالي الأداء 100% بتقنية طرد الرطوبة' },
      { name: 'الوزن', value: 'خفيف الوزن (140-160 جرام/متر مربع)' },
      { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، تجفيف منخفض، بدون منعم أقمشة' },
      { name: 'المقاسات المتوفرة', value: 'للأطفال 6-16، للبالغين XS إلى 2XL' },
      { name: 'الألوان', value: 'ألوان المدرسة متاحة؛ الخيارات القياسية تشمل الكحلي، الأسود، الأحمر، الأخضر، الأزرق الملكي' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'التخصيص', value: 'طباعة/تطريز شعار المدرسة، طباعة الاسم، تحديد الفصل/المجموعة' }
    ],
    images: [
      { src: '/images/industries/education/students/school-uniform-students-02.webp', alt: 'الزي الرياضي للطلاب - المنظر الأمامي' },
      { src: '/images/industries/education/students/school-uniform-students-03.webp', alt: 'الزي الرياضي للطلاب أثناء الاستخدام' },
      { src: '/images/industries/education/students/school-uniform-students-04.webp', alt: 'تفاصيل الزي الرياضي للطلاب' },
      { src: '/images/industries/education/students/school-uniform-students-01.webp', alt: 'مجموعة الزي الرياضي للطلاب' }
    ],
    variants: [
      { name: 'قميص التربية البدنية', price: '٨٩ ريال سعودي' },
      { name: 'شورت التربية البدنية', price: '٧٩ ريال سعودي' },
      { name: 'بنطلون رياضي', price: '١٠٩ ريال سعودي' },
      { name: 'جاكيت رياضي', price: '١٥٩ ريال سعودي' },
      { name: 'طقم تربية بدنية كامل (قميص + شورت/بنطلون)', price: 'من ١٤٩ ريال سعودي' },
      { name: 'طقم رياضي كامل (بدلة رياضية كاملة)', price: '٢٤٩ ريال سعودي' }
    ],
    customizationOptions: [
      { name: 'طباعة شعار المدرسة', price: '+٢٠ ريال سعودي' },
      { name: 'تطريز شعار المدرسة', price: '+٣٥ ريال سعودي' },
      { name: 'طباعة الاسم', price: '+١٥ ريال سعودي' },
      { name: 'تحديد الفصل/المجموعة', price: '+١٠ ريال سعودي' }
    ]
  };
  
  // State for selected variant and quantity
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Product images for the gallery
  const images = [
    {
      src: '/images/industries/education/athletic-uniform-01.webp',
      alt: 'طقم الزي الرياضي الكامل للتربية البدنية للطلاب'
    },
    {
      src: '/images/industries/education/athletic-uniform-02.webp',
      alt: 'طالب يرتدي الزي الرياضي أثناء النشاط الرياضي'
    },
    {
      src: '/images/industries/education/athletic-uniform-03.webp',
      alt: 'صورة قريبة لقماش الزي الرياضي توضح خصائص طرد الرطوبة'
    },
    {
      src: '/images/industries/education/students/athletic-uniform-students-01.webp',
      alt: 'طلاب يشاركون في حصة التربية البدنية يرتدون أزياء يونيوم الرياضية'
    }
  ];
  
  // Find the currently selected variant
  const currentVariant = product.variants[selectedVariant] || product.variants[0];
  
  // JSON-LD Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'زي رياضي ومستلزمات التربية البدنية للطلاب',
    image: images.map(img => `https://uneom.com${img.src}`),
    description: 'ملابس رياضية ومستلزمات تربية بدنية عالية الأداء مصممة خصيصًا للمدارس السعودية. تتميز بالبوليستر الطارد للرطوبة، ودرزات معززة، وحماية من الأشعة فوق البنفسجية، وتصاميم محتشمة مناسبة للبيئات المدرسية.',
    sku: 'EDU-ATH-001',
    brand: {
      '@type': 'Brand',
      name: 'يونيوم'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '89',
      highPrice: '249',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'يونيوم'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '116'
    }
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
    { label: 'زي رياضي ومستلزمات التربية البدنية للطلاب', href: '#' },
  ];

  // Function to handle contact button clicks
  const handleContactClick = (messageType: 'product' | 'quote', details?: string) => {
    const productName = "زي رياضي ومستلزمات التربية البدنية للطلاب";
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
        <title>الزي الرياضي ومستلزمات التربية البدنية للمدارس السعودية | يونيوم</title>
        <meta name="description" content="ملابس رياضية ومستلزمات تربية بدنية عالية الأداء مصممة للمدارس السعودية. تصاميم متينة ومريحة ومحتشمة مع خيارات تخصيص." />
        <link rel="canonical" href="https://uneom.com/ar/shop/education-uniforms/student-athletic-wear" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="الزي الرياضي ومستلزمات التربية البدنية للمدارس السعودية" />
        <meta property="og:description" content="ملابس رياضية ومستلزمات تربية بدنية عالية الأداء مصممة للمدارس السعودية مع أقمشة طاردة للرطوبة وسريعة الجفاف وتصاميم محتشمة." />
        <meta property="og:url" content="https://uneom.com/ar/shop/education-uniforms/student-athletic-wear" />
        <meta property="og:image" content="https://uneom.com/images/industries/education/athletic-uniform-01.webp" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="product:price:amount" content={currentVariant.price.toString()} />
        <meta property="product:price:currency" content="SAR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الزي الرياضي ومستلزمات التربية البدنية للمدارس السعودية" />
        <meta name="twitter:description" content="ملابس رياضية ومستلزمات تربية بدنية عالية الأداء مصممة للمدارس السعودية." />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/athletic-uniform-01.webp" />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com/shop/education-uniforms/student-athletic-wear" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar/shop/education-uniforms/student-athletic-wear" />
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
          
          {/* PE Program Excellence Section */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <SectionHeading>التميز في التربية البدنية</SectionHeading>
            <div className="mt-4">
              <p className="text-neutral-700 mb-4">
                تم تصميم الزي الرياضي ومستلزمات التربية البدنية للطلاب لدينا لدعم برامج التربية البدنية
                في المدارس السعودية. يجمع كل زي بين ميزات الأداء مع الاحتشام المناسب
                والأناقة لإنشاء ملابس التربية البدنية المثالية للطلاب.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">مواد عالية الأداء</h4>
                  <p className="text-sm text-neutral-600">أقمشة تقنية تعزز الحركة مع الحفاظ على الاحتشام أثناء الأنشطة البدنية.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">بناء متين</h4>
                  <p className="text-sm text-neutral-600">درزات معززة ومواد عالية الجودة مصممة لتحمل متطلبات حصص التربية البدنية.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">اعتبارات المناخ</h4>
                  <p className="text-sm text-neutral-600">خيارات خفيفة الوزن وقابلة للتنفس للطقس الحار وطبقات مناسبة للمواسم الأكثر برودة.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* School Programs Section */}
          <div className="mt-16">
            <SectionHeading>البرامج الرياضية المدرسية</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-1 order-2">
                <p className="text-neutral-700 mb-4">
                  للمدارس التي تتطلع إلى تجهيز برنامجها الرياضي بالكامل، نقدم حلولاً شاملة
                  تتضمن ملابس التربية البدنية، وأطقم الفرق الرياضية، والمعدات الرياضية. يعمل فريقنا بشكل وثيق مع
                  أقسام التربية البدنية لإنشاء برامج متكاملة للملابس الرياضية.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">تنسيق الفريق</h4>
                    <p className="text-sm">أزياء موحدة لجميع الفرق الرياضية تحافظ على هوية المدرسة.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">تخطيط موسمي</h4>
                    <p className="text-sm">حلول على مدار العام لمختلف المواسم الرياضية ومتطلبات المناخ.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">كفاءة الكميات الكبيرة</h4>
                    <p className="text-sm">وفورات كبيرة في التكلفة للطلبات على مستوى المدرسة مع توزيع مبسط.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">دعم مستمر</h4>
                    <p className="text-sm">أنظمة إعادة طلب سهلة للعناصر البديلة طوال العام الدراسي.</p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="mt-6 flex items-center gap-2"
                  onClick={() => handleContactClick('quote', 'استفسار عن برنامج رياضي على مستوى المدرسة')}
                >
                  <FaWhatsapp /> طلب عرض سعر للبرنامج المدرسي
                </Button>
              </div>
              <div className="relative order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-80">
                <Image 
                  src="/images/industries/education/students/school-uniform-students-02.webp"
                  alt="البرامج الرياضية المدرسية"
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
                  تواصل مع متخصصي الزي الرياضي لدينا مباشرة عبر واتساب للحصول على مساعدة مخصصة. 
                  يمكننا المساعدة في أطقم الفرق المخصصة وبرامج الزي الرياضي للمدرسة بأكملها والمتطلبات الخاصة.
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