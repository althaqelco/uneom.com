'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function PremiumScrubsSetArabicPage() {
  const locale = 'ar';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أزرق سماوي');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'premium-scrubs-set',
    name: 'طقم البدلة الطبية الممتازة',
    price: 'من ريال 249',
    basePrice: 249,
    rating: 4.8,
    reviews: 124,
    description: 'بدلة طبية عالية الأداء مصممة للمتخصصين في الرعاية الصحية الذين يحتاجون إلى الراحة والمتانة والمظهر المهني.',
    longDescription: 'تم تصميم طقم البدلة الطبية الممتازة خصيصًا لبيئة الرعاية الصحية السعودية، حيث يجمع بين تقنية الأقمشة المتطورة وميزات التصميم المدروسة التي يقدرها متخصصو الرعاية الصحية. القماش خفيف الوزن ومتين، مع خصائص طاردة للرطوبة للحفاظ على راحتك طوال المناوبات الطويلة في المرافق المكيفة. المعالجة المضادة للميكروبات تساعد على تقليل الروائح وتعزيز النظافة في البيئات السريرية.',
    features: [
      'معالجة مضادة للميكروبات لتعزيز النظافة',
      'مادة طاردة للرطوبة تحافظ على شعورك بالبرودة والجفاف',
      'غرز معززة في نقاط التوتر لمتانة طويلة',
      'تصميم مريح يسمح بحرية الحركة الكاملة',
      'جيوب متعددة للأدوات والمستلزمات الطبية',
      'متوفرة بمجموعة من الألوان لتتناسب مع متطلبات المؤسسات الصحية',
      'قماش سهل العناية يحافظ على مظهره بعد الغسيل الصناعي'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر، 35% قطن' },
      { name: 'الوزن', value: 'وزن متوسط (170 جرام/م²)' },
      { name: 'تعليمات العناية', value: 'قابلة للغسل الآلي، آمنة للغسيل الصناعي' },
      { name: 'المقاسات المتاحة', value: 'من XS إلى 4XL' },
      { name: 'الألوان', value: '12 خيارًا تشمل الأبيض، الكحلي، الأزرق السماوي، الأخضر الفاتح' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'التطريز، المقاسات المخصصة، مطابقة الألوان' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'طقم البدلة الطبية الممتازة - منظر أمامي' },
      { src: '/images/default-placeholder.jpg', alt: 'طقم البدلة الطبية الممتازة يرتديها متخصصون طبيون' },
      { src: '/images/default-placeholder.jpg', alt: 'طقم البدلة الطبية الممتازة أثناء الاستخدام' },
      { src: '/images/avatar-placeholder.jpg', alt: 'فريق طبي يرتدي بدلات طبية' }
    ],
    category: 'ملابس الرعاية الصحية',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrderQuantity: 5,
    estimatedDelivery: '1-2 أسبوع',
    colors: [
      { name: 'أزرق سماوي', value: '#3D85C6', inStock: true },
      { name: 'كحلي', value: '#0B2447', inStock: true },
      { name: 'أبيض', value: '#FFFFFF', inStock: true },
      { name: 'أخضر فاتح', value: '#20B2AA', inStock: true }
    ],
    sizes: [
      { name: 'XS', description: 'مقاس صغير جداً', inStock: true },
      { name: 'S', description: 'مقاس صغير', inStock: true },
      { name: 'M', description: 'مقاس متوسط', inStock: true },
      { name: 'L', description: 'مقاس كبير', inStock: true },
      { name: 'XL', description: 'مقاس كبير جداً', inStock: true },
      { name: '2XL', description: 'مقاس كبير جداً مرتين', inStock: true },
      { name: '3XL', description: 'مقاس كبير جداً ثلاث مرات', inStock: true },
      { name: '4XL', description: 'مقاس كبير جداً أربع مرات', inStock: true }
    ],
    customizationOptions: [
      { name: 'تطريز شعار المستشفى', price: 'ريال 39 لكل زي' },
      { name: 'تطريز الاسم', price: 'ريال 19 لكل زي' },
      { name: 'ألوان مخصصة', price: 'ريال 79 للطلب' },
      { name: 'دمج تقنية RFID للتتبع', price: 'ريال 49 لكل زي' }
    ],
    bulkPricing: [
      { quantity: '5-24', pricePerUnit: 'ريال 249' },
      { quantity: '25-99', pricePerUnit: 'ريال 229' },
      { quantity: '100-499', pricePerUnit: 'ريال 209' },
      { quantity: '500+', pricePerUnit: 'ريال 189' }
    ],
    relatedProducts: [
      {
        id: 'antimicrobial-scrubs',
        name: 'بدلة طبية مضادة للميكروبات',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 279',
        href: '/ar/shop/medical-scrubs/antimicrobial-scrubs'
      },
      {
        id: 'nursing-scrubs',
        name: 'طقم بدلة التمريض',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 229',
        href: '/ar/shop/medical-scrubs/nursing-scrubs'
      },
      {
        id: 'surgical-scrubs',
        name: 'بدلة الجراحة',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 269',
        href: '/ar/shop/medical-scrubs/surgical-scrubs'
      }
    ]
  };
  
  // جدول المقاسات
  const sizeChart = {
    unisex: [
      { size: 'XS', chest: '34"', waist: '28"', hip: '36"', inseam: '30"' },
      { size: 'S', chest: '36"', waist: '30"', hip: '38"', inseam: '30"' },
      { size: 'M', chest: '38"', waist: '32"', hip: '40"', inseam: '31"' },
      { size: 'L', chest: '40"', waist: '34"', hip: '42"', inseam: '31"' },
      { size: 'XL', chest: '42"', waist: '36"', hip: '44"', inseam: '32"' },
      { size: '2XL', chest: '44"', waist: '38"', hip: '46"', inseam: '32"' },
      { size: '3XL', chest: '46"', waist: '40"', hip: '48"', inseam: '32"' },
      { size: '4XL', chest: '48"', waist: '42"', hip: '50"', inseam: '33"' }
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
      return 'ريال ' + ((product.basePrice * 0.76) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'ريال ' + ((product.basePrice * 0.84) * quantity).toLocaleString();
    } else if (quantity >= 25) {
      return 'ريال ' + ((product.basePrice * 0.92) * quantity).toLocaleString();
    } else {
      return 'ريال ' + (product.basePrice * quantity).toLocaleString();
    }
  };
  
  return (
    <>
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
                  <Link href="/ar/shop/medical-scrubs" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">
                    البدلات الطبية
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* صور المنتج */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={product.images[activeImage].src}
                  alt={product.images[activeImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 transition-colors
                      ${activeImage === index ? 'border-primary-600' : 'border-transparent hover:border-primary-400'}`}
                    onClick={() => setActiveImage(index)}
                  >
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
            
            {/* معلومات المنتج */}
            <div className="order-1 lg:order-2 text-right">
              <span className="text-sm text-primary-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4 justify-end">
                <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} تقييم)</span>
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
                <p className="mt-2">{product.longDescription}</p>
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
                      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 text-right">
                        <div className="flex justify-between items-center mb-4">
                          <button 
                            onClick={() => setShowSizeChart(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <h2 className="text-xl font-bold">جدول مقاسات البدلة الطبية</h2>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table dir="rtl" className="w-full text-sm text-gray-700">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-2 border">المقاس</th>
                                <th className="px-4 py-2 border">الصدر</th>
                                <th className="px-4 py-2 border">الخصر</th>
                                <th className="px-4 py-2 border">الورك</th>
                                <th className="px-4 py-2 border">طول الساق</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.unisex.map((size, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-2 border font-medium">{size.size}</td>
                                  <td className="px-4 py-2 border">{size.chest}</td>
                                  <td className="px-4 py-2 border">{size.waist}</td>
                                  <td className="px-4 py-2 border">{size.hip}</td>
                                  <td className="px-4 py-2 border">{size.inseam}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          <p>جميع القياسات بالبوصة. للحصول على أفضل مقاس، قم بالقياس فوق الملابس المناسبة. للبدلات الطبية، نوصي بطلب المقاس الذي يناسبك عادة مع مراعاة وجود مساحة إضافية للحركة.</p>
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
                  <span className="mr-3 text-sm text-gray-500">الحد الأدنى للطلب: {product.minOrderQuantity} قطع</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={product.minOrderQuantity}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-right"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1 text-right">للطلبات التي تزيد عن 500 وحدة، يرجى الاتصال بنا مباشرة للحصول على أسعار خاصة.</p>
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
                  <p className="mt-2 text-sm text-gray-500 text-right">اتصل بنا للحصول على مزيد من المعلومات حول خيارات التطريز المخصص وإضافة شعار مؤسستك.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم الميزات الرئيسية */}
      <section className="py-12 bg-gray-50">
        <Container>
          <SectionHeading centered>مميزات البدلة الطبية الممتازة</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {product.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-right">
                <div className="flex justify-end items-center mb-4">
                  <h3 className="font-bold text-gray-900 mr-3">{`ميزة ${index + 1}`}</h3>
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* جدول التسعير الجماعي */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>أسعار الكميات الكبيرة</SectionHeading>
          <p className="text-center text-gray-700 mb-8">استفد من وفورات كبيرة مع هيكل أسعارنا للطلبات الكبيرة.</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700" dir="rtl">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 border text-right">الكمية</th>
                    <th className="px-6 py-3 border text-right">السعر لكل وحدة</th>
                    <th className="px-6 py-3 border text-right">التوفير</th>
                  </tr>
                </thead>
                <tbody>
                  {product.bulkPricing.map((tier, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3 border">{tier.quantity} وحدة</td>
                      <td className="px-6 py-3 border text-right">{tier.pricePerUnit}</td>
                      <td className="px-6 py-3 border text-right text-green-600">
                        {index === 0 ? '-' : `${(100 - (parseInt(tier.pricePerUnit.replace('ريال ', '')) / parseInt(product.bulkPricing[0].pricePerUnit.replace('ريال ', '')) * 100)).toFixed(0)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-right">جميع الأسعار بالريال السعودي. اتصل بنا للحصول على عروض أسعار مخصصة للطلبات التي تتجاوز 500 وحدة أو لمتطلبات المستشفيات والمراكز الطبية الكبرى.</p>
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
      
      {/* نموذج طلب عرض السعر السريع */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">هل تحتاج إلى بدلات طبية لمؤسستك الصحية؟</h2>
              <p className="text-gray-700 mb-6">احصل على عرض سعر مخصص لمتطلبات مستشفاك أو عيادتك من البدلات الطبية، بما في ذلك خيارات التخصيص وإضافة الشعارات.</p>
              <Link href="/ar/contact">
                <Button variant="primary" size="lg">
                  طلب عرض سعر
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 