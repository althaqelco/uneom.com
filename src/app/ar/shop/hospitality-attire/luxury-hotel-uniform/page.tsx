'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Head from 'next/head';
import { motion } from 'framer-motion';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function LuxuryHotelUniformArabicPage() {
  const locale = 'ar';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'luxury-hotel-uniform',
    name: 'طقم زي موظفي الفنادق الفاخرة',
    price: 'ريال 349',
    basePrice: 349,
    rating: 4.9,
    reviewCount: 78,
    mainImage: "/images/healthcare/medical_hijab_uniform.jpg Staff_Uniform.png",
    additionalImages: [
      "/images/hospitality/hospitality_uniform_formal.jpg",
      "/images/product-placeholder.jpg",
      "/images/hospitality/hospitality_uniform_formal.jpg"
    ],
    description: 'طقم زي فندقي فاخر مصمم للمنشآت ذات الخمس نجوم في المملكة العربية السعودية. يجمع بين الأناقة والراحة العملية لموظفي الاستقبال والكونسيرج وطاقم الإدارة.',
    features: [
      'مصنوع من مزيج أقمشة فاخرة لراحة ومتانة فائقة',
      'تشطيب مقاوم للبقع والتجعد للحفاظ على مظهر أنيق طوال فترة العمل',
      'قماش قابل للتنفس مصمم خصيصًا للتكيف مع مناخ المملكة وبيئات الفنادق',
      'تصميم مميز مع تفاصيل فاخرة للحصول على مظهر احترافي راقي',
      'متوفر في مجموعات متناسقة لتقديم مظهر متسق لجميع موظفي الفندق',
      'قابل للتخصيص مع تطريز شعار الفندق ومطابقة الألوان',
      'مصمم لكل من الموظفين والموظفات مع خيارات مناسبة للجميع'
    ],
    specifications: [
      { name: 'المادة', value: 'مزيج 65% بوليستر، 35% قطن بتشطيب فاخر' },
      { name: 'الوزن', value: 'وزن متوسط (180 جرام/م²)' },
      { name: 'تعليمات العناية', value: 'تنظيف جاف أو غسيل آلي لطيف، قماش سهل العناية' },
      { name: 'المقاسات المتاحة', value: 'من XS إلى 3XL للرجال والنساء' },
      { name: 'الألوان', value: 'أسود، كحلي، نبيتي، خيارات لمسات ذهبية' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'التخصيص', value: 'تطريز شعار الفندق، بطاقات الأسماء، خيارات الزخارف الذهبية' }
    ],
    images: [
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'زي الفندق الفاخر - موظفي الاستقبال' },
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'زي الفندق الفاخر - خدمة الكونسيرج' },
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'زي الفندق الفاخر - طراز المدير' },
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'زي الفندق الفاخر - المجموعة الكاملة' }
    ],
    category: 'أزياء الضيافة',
    categorySlug: 'hospitality-attire',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '2-3 أسابيع',
    colors: [
      { name: 'أسود', value: '#000000', inStock: true },
      { name: 'كحلي', value: '#0a1845', inStock: true },
      { name: 'نبيتي', value: '#800020', inStock: true },
      { name: 'رمادي فحمي', value: '#36454F', inStock: true }
    ],
    sizes: [
      { name: 'XS', description: 'صغير جداً', inStock: true },
      { name: 'S', description: 'صغير', inStock: true },
      { name: 'M', description: 'متوسط', inStock: true },
      { name: 'L', description: 'كبير', inStock: true },
      { name: 'XL', description: 'كبير جداً', inStock: true },
      { name: '2XL', description: 'كبير جداً مرتين', inStock: true },
      { name: '3XL', description: 'كبير جداً ثلاث مرات', inStock: true }
    ],
    customizationOptions: [
      { name: 'تطريز شعار الفندق', price: 'ريال 45 لكل زي' },
      { name: 'تطريز بطاقة الاسم', price: 'ريال 25 لكل زي' },
      { name: 'زخارف بلمسات ذهبية', price: 'ريال 60 لكل زي' },
      { name: 'تخصيص مطابقة الألوان', price: 'ريال 90 للطلبية' },
      { name: 'ترقية نوعية القماش', price: 'ريال 50 لكل زي' }
    ],
    bulkPricing: [
      { quantity: '10-49', pricePerUnit: 'ريال 349' },
      { quantity: '50-99', pricePerUnit: 'ريال 329' },
      { quantity: '100-499', pricePerUnit: 'ريال 309' },
      { quantity: '500+', pricePerUnit: 'ريال 289' }
    ],
    relatedProducts: [
      {
        id: 'hotel-housekeeping-uniform',
        name: 'زي عمال النظافة الفندقية',
        image: '/images/hospitality/hospitality_uniform_formal.jpg',
        price: 'من ريال 249',
        href: '/ar/shop/hospitality-attire/hotel-housekeeping-uniform'
      }
    ]
  };
  
  // جدول المقاسات
  const sizeChart = {
    men: [
      { size: 'XS', chest: '34-36"', waist: '28-30"', neck: '14-14.5"' },
      { size: 'S', chest: '36-38"', waist: '30-32"', neck: '14.5-15"' },
      { size: 'M', chest: '38-40"', waist: '32-34"', neck: '15-15.5"' },
      { size: 'L', chest: '40-42"', waist: '34-36"', neck: '15.5-16"' },
      { size: 'XL', chest: '42-44"', waist: '36-38"', neck: '16-16.5"' },
      { size: '2XL', chest: '44-46"', waist: '38-40"', neck: '16.5-17"' },
      { size: '3XL', chest: '46-48"', waist: '40-42"', neck: '17-17.5"' }
    ],
    women: [
      { size: 'XS', bust: '32-33"', waist: '25-26"', hip: '35-36"' },
      { size: 'S', bust: '34-35"', waist: '27-28"', hip: '37-38"' },
      { size: 'M', bust: '36-37"', waist: '29-30"', hip: '39-40"' },
      { size: 'L', bust: '38-39"', waist: '31-32"', hip: '41-42"' },
      { size: 'XL', bust: '40-42"', waist: '33-34"', hip: '43-44"' },
      { size: '2XL', bust: '43-45"', waist: '35-37"', hip: '45-47"' },
      { size: '3XL', bust: '46-48"', waist: '38-40"', hip: '48-50"' }
    ]
  };
  
  // معالجة تغيير الكمية
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= product.minOrderQuantity) {
      setQuantity(value);
    }
  };
  
  // معالجة الإضافة إلى طلب عرض السعر
  const handleAddToQuote = () => {
    console.log('تمت الإضافة إلى طلب عرض السعر:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    
    alert('تمت إضافة المنتج إلى طلب عرض السعر الخاص بك.');
  };
  
  // إنشاء عرض السعر بناءً على الكمية
  const getPriceDisplay = () => {
    if (quantity >= 500) {
      return 'ريال ' + ((product.basePrice * 0.83) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'ريال ' + ((product.basePrice * 0.89) * quantity).toLocaleString();
    } else if (quantity >= 50) {
      return 'ريال ' + ((product.basePrice * 0.94) * quantity).toLocaleString();
    } else {
      return 'ريال ' + (product.basePrice * quantity).toLocaleString();
    }
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

      <Head>
        <title>زي فندقي فاخر - يونيوم للأزياء المهنية</title>
        <meta name="description" content="زي فندقي أنيق وعالي الجودة مصمم خصيصًا للفنادق الفاخرة في المملكة العربية السعودية، مع خيارات تخصيص حسب احتياجات منشأتك" />
        <meta property="og:title" content="زي فندقي فاخر - يونيوم للأزياء المهنية" />
        <meta property="og:description" content="زي فندقي أنيق وعالي الجودة مصمم خصيصًا للفنادق الفاخرة في المملكة العربية السعودية، مع خيارات تخصيص حسب احتياجات منشأتك" />
        <meta property="og:image" content="/images/healthcare/medical_hijab_uniform.jpg Staff_Uniform.png" />
      </Head>
      
      {/* مسار التنقل */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex justify-end" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-row-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">الرئيسية</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">المتجر</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop/hospitality-attire" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">
                    أزياء الضيافة
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* قسم تفاصيل المنتج */}
      <section className="py-12">
        <Container>
          <h1 className="sr-only">زي فنادق فاخر | يونيفورم استقبال وضيافة راقي للفنادق السعودية | يونيوم</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* صور المنتج */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.additionalImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 transition-colors
                      ${activeImage === index ? 'border-primary-600' : 'border-transparent hover:border-primary-400'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* معلومات المنتج */}
            <div className="order-1 lg:order-2 text-right">
              <span className="text-sm text-primary-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4 justify-end">
                <span className="text-gray-600 ml-2">{product.rating} ({product.reviewCount} تقييم)</span>
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
              
              <div className="prose prose-sm mb-8 text-right">
                <p>{product.description}</p>
              </div>
              
              {/* اختيار اللون */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 text-right">اللون</h3>
                  <div className="flex flex-wrap gap-3 justify-end">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 focus:outline-none
                          ${selectedColor === color.name ? 'border-primary-600' : 'border-gray-300'}`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                        disabled={!color.inStock}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* اختيار المقاس */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <button 
                      onClick={() => setShowSizeChart(!showSizeChart)}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      جدول المقاسات
                    </button>
                    <h3 className="text-sm font-medium text-gray-900">المقاس</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-end">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size.name)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border focus:outline-none
                          ${selectedSize === size.name 
                            ? 'border-primary-600 bg-primary-50 text-primary-700' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                        disabled={!size.inStock}
                        title={size.description}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* نافذة جدول المقاسات */}
                  {showSizeChart && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 text-right">
                        <div className="flex justify-between items-center mb-4">
                          <button 
                            onClick={() => setShowSizeChart(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <h2 className="text-xl font-bold">جدول مقاسات زي الفندق</h2>
                        </div>
                        
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-lg font-medium mb-3">مقاسات الرجال</h3>
                            <div className="overflow-x-auto">
                              <table dir="rtl" className="w-full text-sm text-gray-700">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 border">المقاس</th>
                                    <th className="px-4 py-2 border">الصدر</th>
                                    <th className="px-4 py-2 border">الخصر</th>
                                    <th className="px-4 py-2 border">الرقبة</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sizeChart.men.map((size, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      <td className="px-4 py-2 border font-medium">{size.size}</td>
                                      <td className="px-4 py-2 border">{size.chest}</td>
                                      <td className="px-4 py-2 border">{size.waist}</td>
                                      <td className="px-4 py-2 border">{size.neck}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">مقاسات النساء</h3>
                            <div className="overflow-x-auto">
                              <table dir="rtl" className="w-full text-sm text-gray-700">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 border">المقاس</th>
                                    <th className="px-4 py-2 border">محيط الصدر</th>
                                    <th className="px-4 py-2 border">الخصر</th>
                                    <th className="px-4 py-2 border">الورك</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sizeChart.women.map((size, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      <td className="px-4 py-2 border font-medium">{size.size}</td>
                                      <td className="px-4 py-2 border">{size.bust}</td>
                                      <td className="px-4 py-2 border">{size.waist}</td>
                                      <td className="px-4 py-2 border">{size.hip}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500 text-right">
                          <p>جميع القياسات بالبوصة. للحصول على أفضل مقاس، نوصي بأخذ القياسات على الملابس الداخلية. بالنسبة لأزياء موظفي الفنادق، نقترح اختيار مقاس أكبر إذا كانت القياسات تقع بين مقاسين للحصول على ارتداء أكثر راحة أثناء فترات العمل الممتدة.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* اختيار الكمية */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3 text-right">الكمية</h3>
                <div className="flex items-center justify-end">
                  <span className="mr-3 text-sm text-gray-500">الحد الأدنى للطلب: {product.minOrderQuantity} طقم</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={product.minOrderQuantity}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-right"
                  />
                </div>
              </div>
              
              {/* السعر الإجمالي */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-700">{getPriceDisplay()}</span>
                  <span className="text-gray-700">السعر الإجمالي (تقديري):</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">سيتم تأكيد السعر النهائي في عرض السعر</p>
              </div>
              
              {/* أزرار الإجراءات */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link href="/ar/contact" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    طلب استشارة
                  </Button>
                </Link>
                <Button
                  onClick={handleAddToQuote}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  إضافة لطلب عرض السعر
                </Button>
              </div>
              
              {/* خيارات التخصيص */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 text-right">خيارات التخصيص</h3>
                  <ul className="space-y-2">
                    {product.customizationOptions.map((option, index) => (
                      <li key={index} className="flex justify-between text-gray-700">
                        <span className="text-gray-500">{option.price}</span>
                        <span>{option.name}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-gray-500 text-right">اتصل بنا للحصول على مزيد من المعلومات حول خيارات التطريز المخصص وطلبات التصميم الخاصة لطاقم الفندق الخاص بك.</p>
                </div>
              )}
                          </div>
            </div>
          </Container>
      </section>
      
      {/* المنتجات ذات الصلة */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <Container>
            <SectionHeading centered>منتجات ذات صلة</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {product.relatedProducts.map((relatedProduct, index) => (
                <Link href={relatedProduct.href} key={index} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-right">
                      <h3 className="text-lg font-bold mt-1 group-hover:text-primary-600 transition-colors duration-200">{relatedProduct.name}</h3>
                      <p className="text-primary-600 font-medium mt-2">{relatedProduct.price}</p>
                      <span className="text-sm text-primary-600 group-hover:text-primary-500 transition-colors duration-200 flex items-center mt-3 justify-end">
                        عرض التفاصيل
                        <svg className="w-4 h-4 mr-1 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      
      {/* نموذج طلب استشارة سريع */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">تحتاج إلى أزياء ضيافة لفندقك؟</h2>
              <p className="text-gray-700 mb-6">يمكن لمتخصصي أزياء الضيافة لدينا إنشاء برنامج زي موحد مخصص يناسب هوية العلامة التجارية لفندقك ومتطلباتك الخاصة.</p>
              <Link href="/ar/contact">
                <Button variant="primary" size="lg">
                  طلب استشارة
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 