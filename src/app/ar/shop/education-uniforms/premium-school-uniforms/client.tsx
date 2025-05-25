'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function PremiumSchoolUniformsClientPage() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أزرق داكن');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(50);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-school-uniforms',
    name: 'أزياء مدرسية فاخرة',
    price: 'من 249 ريال سعودي',
    basePrice: "249",
    rating: 4.8,
    reviews: 156,
    description: 'أزياء مدرسية عالية الجودة مصممة خصيصًا للمؤسسات التعليمية السعودية، تجمع بين المتانة والراحة والملاءمة الثقافية.',
    longDescription: 'تم تصميم أزياءنا المدرسية الفاخرة مع مراعاة الاحتياجات الخاصة للمؤسسات التعليمية في المملكة العربية السعودية. يجمع كل زي بين المتانة الاستثنائية للطلاب النشطين وميزات الراحة التي تجعلها مناسبة للارتداء اليومي طوال العام الدراسي. تحترم التصميمات القيم الثقافية السعودية مع تقديم أسلوب عصري يخلق شعورًا بالانتماء والفخر. تتوفر بتكوينات مختلفة لمستويات المدارس المختلفة والمواسم المختلفة، وتتميز أزياؤنا بأقمشة مقاومة للبقع وسهلة العناية تتحمل الغسيل المتكرر مع الحفاظ على مظهرها.',
    features: [
      'مزيج من البولي قطن عالي الكثافة (65/35) لمتانة طويلة الأمد',
      'تقنية مقاومة البقع والتجاعيد في الأقمشة',
      'خياطة مقواة في نقاط الضغط',
      'قماش خفيف وقابل للتنفس مناسب للمناخ السعودي',
      'مقاومة للبهتان حتى بعد الغسيل المتكرر',
      'تصميم محتشم وفقًا للمتطلبات الثقافية',
      'ميزات قابلة للتعديل لاستيعاب نمو الطلاب'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر، 35% قطن' },
      { name: 'الوزن', value: 'وزن متوسط (180-200 جم/م²)' },
      { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، تجفيف منخفض' },
      { name: 'المقاسات المتوفرة', value: 'من عمر 4-18 سنة (نطاقات متعددة)' },
      { name: 'الألوان', value: 'أزرق داكن، أبيض، أزرق فاتح، أسود، بيج' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'التخصيص', value: 'شعارات المدارس، تطريز الأسماء، ألوان مخصصة' }
    ],
    images: [
      { src: '/images/products/industrial-coverall.jpg', alt: 'طلاب سعوديون يرتدون أزياء مدرسية فاخرة في الفصل الدراسي' },
      { src: '/images/products/industrial-coverall.jpg', alt: 'معلم وطلاب في زي المدرسة' },
      { src: '/images/products/industrial-coverall.jpg', alt: 'مجموعة من الطلاب السعوديين في أزياء موحدة' },
      { src: '/images/products/industrial-coverall.jpg', alt: 'طالبة سعودية في زي مدرسي فاخر' }
    ],
    category: 'أزياء تعليمية',
    categorySlug: 'education-uniforms',
    inStock: true,
    minOrder: 50,
    leadTime: '21-30 يوم',
    customization: true,
    variants: [
      { name: 'مجموعة المرحلة الابتدائية (بنين)', price: '249 ريال سعودي' },
      { name: 'مجموعة المرحلة الابتدائية (بنات)', price: '249 ريال سعودي' },
      { name: 'مجموعة المرحلة المتوسطة (بنين)', price: '279 ريال سعودي' },
      { name: 'مجموعة المرحلة المتوسطة (بنات)', price: '279 ريال سعودي' },
      { name: 'مجموعة المرحلة الثانوية (بنين)', price: '299 ريال سعودي' },
      { name: 'مجموعة المرحلة الثانوية (بنات)', price: '299 ريال سعودي' }
    ],
    colors: [
      { name: 'أزرق داكن', value: '#1a2942', image: '/images/products/industrial-coverall.jpg' },
      { name: 'أبيض', value: '#ffffff', image: '/images/products/industrial-coverall.jpg' },
      { name: 'أزرق فاتح', value: '#add8e6', image: '/images/products/industrial-coverall.jpg' },
      { name: 'أسود', value: '#222222', image: '/images/products/industrial-coverall.jpg' },
      { name: 'بيج', value: '#f5f5dc', image: '/images/products/industrial-coverall.jpg' }
    ],
    sizes: ['4-5', '6-7', '8-9', '10-11', '12-13', '14-15', '16-18'],
    sizeEquivalents: {
      '4-5': 'عمر 4-5 سنوات (XXS)',
      '6-7': 'عمر 6-7 سنوات (XS)',
      '8-9': 'عمر 8-9 سنوات (S)',
      '10-11': 'عمر 10-11 سنة (M)',
      '12-13': 'عمر 12-13 سنة (L)',
      '14-15': 'عمر 14-15 سنة (XL)',
      '16-18': 'عمر 16-18 سنة (XXL)'
    },
    testimonials: [
      {
        quote: "لقد غيرت أزياء 'يونيوم' المدرسية مظهر مؤسستنا بشكل كامل. الجودة متميزة، وقد حافظت على مظهرها حتى بعد عام دراسي كامل من الارتداء اليومي. طلابنا وأولياء الأمور راضون للغاية.",
        author: "د. عبدالله السيد",
        position: "مدير المدرسة",
        company: "مدرسة المنار العالمية",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "العمل مع 'يونيوم' سهّل علينا إدارة برنامج الزي الموحد بشكل كبير. أقمشتهم تتحمل نمط الحياة النشط لطلابنا، ونجح فريق التصميم لديهم في دمج قيمنا التقليدية مع احتياجات التعليم المعاصرة.",
        author: "فاطمة العتيبي",
        position: "المدير الإداري",
        company: "أكاديمية الرياض الحديثة",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
    { label: 'أزياء مدرسية فاخرة', href: '#' }
  ];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= product.minOrder) {
      setQuantity(value);
    }
  };

  const handleAddToQuote = () => {
    if (selectedColor && selectedSize) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.basePrice,
        quantity: quantity,
        image: product.images[0].src,
        color: selectedColor,
        size: selectedSize
      });
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "الزي المدرسي المتميز من UNEOM",
            "image": [
              "https://uneom.com/images/products/premium-school-uniforms.webp",
              "https://uneom.com/images/products/premium-school-uniforms-boys.webp",
              "https://uneom.com/images/products/premium-school-uniforms-girls.webp"
            ],
            "description": "زي مدرسي عالي الجودة مصمم خصيصًا للمؤسسات التعليمية السعودية. تجمع أزياؤنا المتميزة بين المتانة الاستثنائية وميزات الراحة المناسبة للارتداء اليومي طوال العام الدراسي، مع احترام القيم والمتطلبات الثقافية السعودية.",
            "sku": "UNEOM-PSU-2023",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للملابس المهنية",
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://uneom.com/ar/shop/education-uniforms/premium-school-uniforms",
              "priceCurrency": "SAR",
              "lowPrice": "249",
              "highPrice": "299",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "156"
            }
          })
        }}
      />
      
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square relative overflow-hidden rounded-lg mb-4 bg-neutral-100">
              <Image 
                src={product.images[activeImage].src}
                alt={product.images[activeImage].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square relative overflow-hidden rounded-md ${activeImage === index ? 'ring-2 ring-primary-600' : 'ring-1 ring-neutral-200'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col space-y-4">
              <div className="mb-2">
                <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
                <p className="text-xl text-primary-600 font-semibold mt-2">{product.price}</p>
                
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-neutral-600 mr-2">{product.rating} ({product.reviews} تقييم)</span>
                </div>
              </div>
              
              <p className="text-neutral-700">{product.description}</p>
              
              <div className="border-t border-b border-neutral-200 py-4 my-4">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">المتغيرات المتاحة</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.variants.map((variant, index) => (
                      <div key={index} className="flex justify-between border border-neutral-200 rounded p-2">
                        <span className="text-sm">{variant.name}</span>
                        <span className="text-sm font-medium">{variant.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">اللون</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedColor === color.name ? 'ring-2 ring-primary-600' : 'ring-1 ring-neutral-200'
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => handleColorSelect(color.name)}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium text-neutral-900 mb-2">المقاس</h3>
                    <button 
                      type="button"
                      className="text-sm text-primary-600 hover:text-primary-800"
                      onClick={() => setShowSizeChart(!showSizeChart)}
                    >
                      {showSizeChart ? 'إخفاء' : 'عرض'} دليل المقاسات
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`px-3 py-1 rounded ${
                          selectedSize === size
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                        }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  
                  {showSizeChart && (
                    <div className="mt-3 border rounded p-3 bg-neutral-50">
                      <h4 className="font-medium mb-2">دليل المقاسات</h4>
                      <div className="space-y-1">
                        {Object.entries(product.sizeEquivalents).map(([size, desc]) => (
                          <div key={size} className="flex justify-between text-sm">
                            <span className="font-medium">{size}:</span>
                            <span>{desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">الكمية (الحد الأدنى: {product.minOrder})</h3>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="px-3 py-1 border border-neutral-300 rounded-r-md bg-neutral-100"
                      onClick={() => quantity > product.minOrder && setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={product.minOrder}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-20 border-t border-b border-neutral-300 py-1 text-center focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button
                      type="button"
                      className="px-3 py-1 border border-neutral-300 rounded-l-md bg-neutral-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <AddToQuoteButton onClick={handleAddToQuote} disabled={!selectedColor || !selectedSize} />
                
                <button
                  type="button"
                  className="py-3 px-4 border border-primary-600 rounded-md text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  اطلب عينة
                </button>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span>متوفر بألوان مخصصة</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-neutral-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>مدة التسليم: {product.leadTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product tabs - Description, Features, Specifications */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <div className="flex space-x-8 rtl:space-x-reverse -mb-px">
              <button className="border-b-2 border-primary-600 py-4 px-1 text-lg font-medium text-primary-600">
                تفاصيل المنتج
              </button>
            </div>
          </div>
          
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold mb-4">وصف المنتج</h2>
                <p className="text-neutral-700 mb-6">{product.longDescription}</p>
                
                <h3 className="text-lg font-semibold mb-3">المميزات الرئيسية</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">المواصفات</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between pb-2 border-b border-neutral-200 last:border-0">
                      <span className="font-medium">{spec.name}</span>
                      <span className="text-neutral-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">ماذا يقول عملاؤنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
        
        {/* Related Products - Placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-neutral-200 rounded-lg overflow-hidden group">
                <div className="aspect-square relative overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    منتج ذو صلة {i}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">اسم المنتج ذو الصلة</h3>
                  <p className="text-sm text-neutral-600 mt-1">وصف مختصر للمنتج</p>
                  <p className="text-primary-600 font-medium mt-2">249 ريال سعودي</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 mb-8 bg-neutral-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى مساعدة في اختيار أزياء مدرسية؟</h2>
          <p className="text-lg text-neutral-700 mb-6 max-w-3xl mx-auto">
            فريقنا المتخصص جاهز لمساعدتك في اختيار الزي المدرسي المثالي لمؤسستك التعليمية. اتصل بنا اليوم للاستفادة من خبراتنا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ar/contact"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg shadow hover:bg-primary-700 transition-colors"
            >
              تواصل معنا
            </Link>
            <Link 
              href="/ar/quote"
              className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              طلب عرض سعر مخصص
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
} 