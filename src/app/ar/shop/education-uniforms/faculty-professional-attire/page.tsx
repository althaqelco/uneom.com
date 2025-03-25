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

export default function FacultyProfessionalAttirePageArabic() {
  const locale = 'ar';
  
  // Product details in Arabic
  const product = {
    id: 'faculty-professional-attire',
    name: 'أزياء مهنية للهيئة التدريسية',
    price: 'من ٣٩٩ ريال سعودي',
    basePrice: '399',
    rating: 4.9,
    reviews: 87,
    description: 'ملابس مهنية أنيقة مصممة خصيصًا للمعلمين والإداريين في المؤسسات التعليمية السعودية.',
    longDescription: 'تم تصميم مجموعة الملابس المهنية للهيئة التدريسية لتلبية احتياجات العاملين في قطاع التعليم في المملكة العربية السعودية. تجمع هذه الملابس بين الأناقة المهنية والراحة العملية، مما يجعلها مثالية للبيئة المدرسية. صممت كل قطعة لتعكس الاحترافية والثقة، مع مراعاة متطلبات العمل اليومي للمعلمين. تتوفر المجموعة بمجموعة متنوعة من الأنماط والألوان لتلبية مختلف الأذواق والمتطلبات المؤسسية.',
    features: [
      'أقمشة عالية الجودة مقاومة للتجاعيد للمظهر المهني طوال اليوم',
      'تصاميم مريحة تتيح حرية الحركة أثناء التدريس',
      'تشطيبات متينة تضمن طول العمر حتى مع الاستخدام المنتظم',
      'أنماط محافظة وأنيقة تناسب البيئة التعليمية السعودية',
      'ألوان متنوعة يمكن تنسيقها مع هوية المؤسسة التعليمية',
      'أقمشة خفيفة الوزن مناسبة للمناخ السعودي',
      'خيارات قابلة للتخصيص لإضافة شعارات المدرسة'
    ],
    specifications: [
      { name: 'المواد', value: 'قطن مصري فاخر، مزيج قطن-بوليستر، مزيج صوف-بوليستر (حسب النمط)' },
      { name: 'تعليمات العناية', value: 'غسيل آلي، كي على درجة حرارة متوسطة، بعض القطع تتطلب تنظيف جاف' },
      { name: 'المقاسات المتوفرة', value: 'للنساء: XS إلى 3XL، للرجال: S إلى 4XL' },
      { name: 'الألوان', value: 'أبيض، أزرق فاتح، أزرق داكن، بيج، رمادي، أسود' },
      { name: 'بلد المنشأ', value: 'المملكة العربية السعودية، تركيا (حسب المجموعة)' },
      { name: 'التخصيص', value: 'متوفر تطريز وطباعة شعار المؤسسة التعليمية' }
    ],
    images: [
      { src: '/images/industries/education/faculty/professional-attire-faculty-01.webp', alt: 'ملابس مهنية للهيئة التدريسية - النمط الأساسي' },
      { src: '/images/industries/education/faculty/professional-attire-faculty-02.webp', alt: 'مدرسون يرتدون الزي المهني في بيئة تعليمية' },
      { src: '/images/industries/education/faculty/professional-attire-faculty-03.webp', alt: 'تفاصيل الخياطة الدقيقة للملابس المهنية' },
      { src: '/images/industries/education/faculty/professional-attire-faculty-04.webp', alt: 'مجموعة متنوعة من خيارات الملابس المهنية للمعلمين' }
    ],
    variants: [
      { name: 'قميص رسمي للمعلمين (رجال)', price: '١٧٩ ريال سعودي' },
      { name: 'بنطلون رسمي للمعلمين (رجال)', price: '٢٢٩ ريال سعودي' },
      { name: 'سترة للمعلمين (رجال)', price: '٢٩٩ ريال سعودي' },
      { name: 'بلوزة رسمية للمعلمات (نساء)', price: '١٨٩ ريال سعودي' },
      { name: 'تنورة أو بنطلون رسمي للمعلمات (نساء)', price: '٢٣٩ ريال سعودي' },
      { name: 'سترة للمعلمات (نساء)', price: '٢٧٩ ريال سعودي' },
      { name: 'طقم كامل للمعلمين (رجال)', price: 'من ٣٩٩ ريال سعودي' },
      { name: 'طقم كامل للمعلمات (نساء)', price: 'من ٣٩٩ ريال سعودي' }
    ],
    customizationOptions: [
      { name: 'تطريز شعار المدرسة', price: '+٤٥ ريال سعودي' },
      { name: 'طباعة شعار المدرسة', price: '+٣٠ ريال سعودي' },
      { name: 'تطريز اسم المعلم/ة', price: '+٣٥ ريال سعودي' },
      { name: 'تعديل المقاس', price: '+٥٠ ريال سعودي' }
    ]
  };
  
  // State for selected variant and quantity
  const [selectedVariant, setSelectedVariant] = useState(6); // Default to complete male set
  const [quantity, setQuantity] = useState(1);
  
  // Product images for the gallery
  const images = [
    {
      src: '/images/industries/education/faculty/professional-attire-faculty-01.webp',
      alt: 'أزياء مهنية عالية الجودة للهيئة التدريسية'
    },
    {
      src: '/images/industries/education/faculty/professional-attire-faculty-02.webp',
      alt: 'أعضاء هيئة التدريس يرتدون الأزياء المهنية من يونيوم'
    },
    {
      src: '/images/industries/education/faculty/professional-attire-faculty-03.webp',
      alt: 'لقطة قريبة لتفاصيل الخياطة للأزياء المهنية للمعلمين'
    },
    {
      src: '/images/industries/education/faculty/professional-attire-faculty-04.webp',
      alt: 'مجموعة متنوعة من خيارات الملابس المهنية للمعلمين والإداريين'
    }
  ];
  
  // Find the currently selected variant
  const currentVariant = product.variants[selectedVariant] || product.variants[0];
  
  // JSON-LD Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'أزياء مهنية للهيئة التدريسية',
    image: images.map(img => `https://uneom.com${img.src}`),
    description: 'ملابس مهنية أنيقة مصممة خصيصًا للمعلمين والإداريين في المؤسسات التعليمية السعودية، تجمع بين الأناقة المهنية والراحة العملية.',
    sku: 'EDU-FAC-001',
    brand: {
      '@type': 'Brand',
      name: 'يونيوم'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '179',
      highPrice: '399',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'يونيوم'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '87'
    }
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
    { label: 'أزياء مهنية للهيئة التدريسية', href: '#' },
  ];

  // Function to handle contact button clicks
  const handleContactClick = (messageType: 'product' | 'quote', details?: string) => {
    const productName = 'أزياء مهنية للهيئة التدريسية';
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
        <title>أزياء مهنية للهيئة التدريسية في المؤسسات التعليمية السعودية | يونيوم</title>
        <meta name="description" content="ملابس مهنية أنيقة مصممة خصيصًا للمعلمين والإداريين في المؤسسات التعليمية في المملكة العربية السعودية، تجمع بين الأناقة المهنية والراحة اليومية." />
        <link rel="canonical" href="https://uneom.com/ar/shop/education-uniforms/faculty-professional-attire" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="أزياء مهنية للهيئة التدريسية في المؤسسات التعليمية السعودية" />
        <meta property="og:description" content="ملابس مهنية أنيقة مصممة خصيصًا للمعلمين والإداريين في المؤسسات التعليمية السعودية. أقمشة عالية الجودة وتصاميم مريحة تناسب بيئة العمل التعليمية." />
        <meta property="og:url" content="https://uneom.com/ar/shop/education-uniforms/faculty-professional-attire" />
        <meta property="og:image" content="https://uneom.com/images/industries/education/faculty/professional-attire-faculty-01.webp" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="product:price:amount" content={product.basePrice} />
        <meta property="product:price:currency" content="SAR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="أزياء مهنية للهيئة التدريسية في المؤسسات التعليمية السعودية" />
        <meta name="twitter:description" content="ملابس مهنية أنيقة مصممة خصيصًا للمعلمين والإداريين في المؤسسات التعليمية السعودية." />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/faculty/professional-attire-faculty-01.webp" />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com/shop/education-uniforms/faculty-professional-attire" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar/shop/education-uniforms/faculty-professional-attire" />
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
          
          {/* Professional Image Section */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <SectionHeading>التأثير المهني في بيئة التعليم</SectionHeading>
            <div className="mt-4">
              <p className="text-neutral-700 mb-4">
                تلعب الملابس المهنية للهيئة التدريسية دورًا مهمًا في تعزيز التأثير التعليمي وخلق بيئة احترافية. 
                تعزز أزياؤنا المهنية من مكانة المعلمين وتعكس التزام المؤسسة التعليمية بمعايير الاحترافية.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">تعزيز الاحترام المتبادل</h4>
                  <p className="text-sm text-neutral-600">يساهم المظهر المهني في بناء احترام متبادل بين المعلمين والطلاب وأولياء الأمور.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">إنشاء هوية مؤسسية</h4>
                  <p className="text-sm text-neutral-600">تساعد الأزياء الموحدة للهيئة التدريسية في خلق هوية بصرية متماسكة للمؤسسة التعليمية.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">إعداد بيئة مهنية</h4>
                  <p className="text-sm text-neutral-600">تسهم الملابس المهنية الأنيقة في خلق جو تعليمي رسمي يحفز الانضباط والتركيز.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Institutional Packages Section */}
          <div className="mt-16">
            <SectionHeading>عروض المؤسسات التعليمية</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-1 order-2">
                <p className="text-neutral-700 mb-4">
                  نقدم في يونيوم برامج مخصصة للمؤسسات التعليمية لتوفير ملابس مهنية للهيئة التدريسية بأكملها. 
                  تتضمن عروضنا حلولاً شاملة تتناسب مع احتياجات وميزانية مؤسستكم التعليمية.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">حسومات للكميات الكبيرة</h4>
                    <p className="text-sm">برامج خاصة للطلبيات الكبيرة تناسب المدارس والجامعات بمختلف أحجامها.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">تجربة الملابس</h4>
                    <p className="text-sm">إمكانية توفير عينات للتجربة قبل طلب المجموعة الكاملة.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">التخصيص الشامل</h4>
                    <p className="text-sm">خيارات متعددة لتخصيص الملابس لتعكس هوية المؤسسة التعليمية.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">الدعم المستمر</h4>
                    <p className="text-sm">خدمة مستمرة لتوفير قطع إضافية أو بديلة على مدار العام الدراسي.</p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="mt-6 flex items-center gap-2"
                  onClick={() => handleContactClick('quote', 'استفسار عن أزياء مهنية للمؤسسة التعليمية بالكامل')}
                >
                  <FaWhatsapp /> طلب عرض سعر للمؤسسة التعليمية
                </Button>
              </div>
              <div className="relative order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-80">
                <Image 
                  src="/images/industries/education/faculty/professional-attire-faculty-02.webp"
                  alt="أزياء مهنية للمعلمين والإداريين"
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
                  تواصل مع متخصصي الأزياء المهنية لدينا مباشرة عبر واتساب للحصول على مساعدة مخصصة. 
                  سنساعدك في اختيار الأزياء المناسبة للهيئة التدريسية في مؤسستك التعليمية.
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