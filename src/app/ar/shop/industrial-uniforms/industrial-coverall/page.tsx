'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface Size {
  name: string;
  description: string;
  inStock: boolean;
}

interface Color {
  name: string;
  value: string;
  inStock: boolean;
}

interface Review {
  id: number;
  rating: number;
  content: string;
  author: string;
  date: string;
}

export default function IndustrialCoverallArabicPage() {
  const locale = 'ar';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'industrial-coverall',
    name: 'بدلة العمل الصناعية عالية المتانة',
    price: 'ريال 189',
    basePrice: 189,
    rating: 4.7,
    reviewCount: 87,
    description: 'بدلة عمل صناعية احترافية مصممة لبيئات العمل الشاقة في المملكة العربية السعودية. مهندسة لتوفير السلامة والمتانة والراحة خلال فترات العمل الطويلة في قطاعات التصنيع والنفط والغاز والإنشاءات.',
    features: [
      'قماش مقاوم للهب وطارد للزيوت لتعزيز السلامة',
      'درزات وتقويات في نقاط الضغط لأقصى درجات المتانة',
      'جيوب متعددة الاستخدامات للأدوات والمعدات',
      'تصميم مريح مع ظهر مرن لتحسين الحركة',
      'خصر وأكمام قابلة للتعديل لتناسب مقاسات مختلفة',
      'أشرطة عاكسة لزيادة الوضوح في ظروف الإضاءة المنخفضة',
      'سحاب ثنائي الاتجاه مخفي مع طية واقية',
      'مصممة وفقاً للوائح السلامة الصناعية السعودية'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر، 35% قطن تويل، 260 جرام/م²' },
      { name: 'ميزات السلامة', value: 'مقاومة للهب، طاردة للزيوت، مضادة للكهرباء الساكنة' },
      { name: 'نوع الإغلاق', value: 'سحاب ثنائي الاتجاه شديد التحمل مع طية واقية' },
      { name: 'الجيوب', value: '6 (2 صدر، 2 جانبية، 2 خلفية)' },
      { name: 'تعليمات العناية', value: 'آمنة للغسالات الصناعية، تجفيف منخفض الحرارة' },
      { name: 'المقاسات المتاحة', value: 'من S إلى 4XL' },
      { name: 'الألوان', value: 'أزرق داكن، أزرق ملكي، رمادي، كاكي، برتقالي' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'بدلة العمل الصناعية - منظر أمامي' },
      { src: '/images/default-placeholder.jpg', alt: 'بدلة العمل الصناعية - منظر جانبي' },
      { src: '/images/default-placeholder.jpg', alt: 'بدلة العمل الصناعية - منظر خلفي' },
      { src: '/images/default-placeholder.jpg', alt: 'بدلة العمل الصناعية - تفاصيل' }
    ],
    category: 'الأزياء الصناعية',
    categorySlug: 'industrial-uniforms',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '2-3 أسابيع',
    colors: [
      { name: 'أزرق داكن', value: '#0a1845', inStock: true },
      { name: 'أزرق ملكي', value: '#1a4b8c', inStock: true },
      { name: 'رمادي', value: '#6a6a6a', inStock: true },
      { name: 'كاكي', value: '#c3b091', inStock: true },
      { name: 'برتقالي', value: '#ff7518', inStock: true }
    ],
    sizes: [
      { name: 'S', description: 'صغير (36-38")', inStock: true },
      { name: 'M', description: 'متوسط (40-42")', inStock: true },
      { name: 'L', description: 'كبير (44-46")', inStock: true },
      { name: 'XL', description: 'كبير جداً (48-50")', inStock: true },
      { name: '2XL', description: 'كبير جداً مضاعف (52-54")', inStock: true },
      { name: '3XL', description: 'كبير جداً ثلاثي (56-58")', inStock: true },
      { name: '4XL', description: 'كبير جداً رباعي (60-62")', inStock: true }
    ],
    customizationOptions: [
      { name: 'تطريز شعار الشركة', price: 'ريال 35 لكل بدلة' },
      { name: 'تطريز اسم الموظف', price: 'ريال 20 لكل بدلة' },
      { name: 'أشرطة عاكسة مخصصة', price: 'ريال 25 لكل بدلة' },
      { name: 'جيوب إضافية', price: 'ريال 15 لكل جيب' },
      { name: 'ميزات سلامة خاصة', price: 'بدءاً من ريال 40 لكل بدلة' }
    ],
    bulkPricing: [
      { quantity: '10-49', pricePerUnit: 'ريال 189' },
      { quantity: '50-99', pricePerUnit: 'ريال 169' },
      { quantity: '100-499', pricePerUnit: 'ريال 149' },
      { quantity: '500+', pricePerUnit: 'ريال 129' }
    ],
    relatedProducts: [
      {
        id: 'safety-vest',
        name: 'سترة السلامة عالية الوضوح',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 59',
        href: '/ar/shop/industrial-uniforms/safety-vest'
      },
      {
        id: 'work-pants',
        name: 'بنطلون العمل الصناعي',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 119',
        href: '/ar/shop/industrial-uniforms/work-pants'
      },
      {
        id: 'industrial-jacket',
        name: 'جاكيت العمل الصناعي',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 229',
        href: '/ar/shop/industrial-uniforms/industrial-jacket'
      }
    ]
  };
  
  // مراجعات العملاء منفصلة عن كائن المنتج
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      content: "هذه البدلات تجاوزت توقعاتنا. المتانة مذهلة، حتى في أقسى ظروف حقول النفط. فريقنا يستخدمها منذ 6 أشهر بدون أي علامات تآكل ظاهرة.",
      author: "أحمد السعود، مدير العمليات",
      date: "15 يونيو 2023"
    },
    {
      id: 2,
      rating: 4,
      content: "جودة ممتازة وتوافق مع معايير السلامة. التخصيص بشعار شركتنا يظهر بشكل احترافي. الاقتراح الوحيد هو إضافة المزيد من خيارات الألوان.",
      author: "خالد إبراهيم، مشرف السلامة",
      date: "3 أغسطس 2023"
    },
    {
      id: 3,
      rating: 5,
      content: "المقاس مثالي وجودة القماش ممتازة. هذه البدلات تحافظ على سلامة عمالنا وراحتهم في بيئات درجات الحرارة المرتفعة. سنطلب المزيد بالتأكيد.",
      author: "محمد القحطاني، مدير المشتريات",
      date: "12 أكتوبر 2023"
    }
  ];
  
  // جدول المقاسات
  const sizeChart = {
    measurements: [
      { size: 'S', chest: '36-38"', waist: '30-32"', inseam: '30"', sleeve: '33"' },
      { size: 'M', chest: '40-42"', waist: '34-36"', inseam: '31"', sleeve: '34"' },
      { size: 'L', chest: '44-46"', waist: '38-40"', inseam: '32"', sleeve: '35"' },
      { size: 'XL', chest: '48-50"', waist: '42-44"', inseam: '33"', sleeve: '36"' },
      { size: '2XL', chest: '52-54"', waist: '46-48"', inseam: '34"', sleeve: '37"' },
      { size: '3XL', chest: '56-58"', waist: '50-52"', inseam: '35"', sleeve: '38"' },
      { size: '4XL', chest: '60-62"', waist: '54-56"', inseam: '36"', sleeve: '39"' },
    ]
  };
  
  // معالجة تغيير الكمية
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
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
      return 'ريال ' + ((product.basePrice * 0.68) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'ريال ' + ((product.basePrice * 0.79) * quantity).toLocaleString();
    } else if (quantity >= 50) {
      return 'ريال ' + ((product.basePrice * 0.89) * quantity).toLocaleString();
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
                  <Link href="/ar/shop/industrial-uniforms" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">
                    الأزياء الصناعية
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
                          <h2 className="text-xl font-bold">جدول مقاسات بدلة العمل الصناعية</h2>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table dir="rtl" className="w-full text-sm text-gray-700">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-2 border">المقاس</th>
                                <th className="px-4 py-2 border">الصدر</th>
                                <th className="px-4 py-2 border">الخصر</th>
                                <th className="px-4 py-2 border">طول الساق</th>
                                <th className="px-4 py-2 border">طول الكم</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.measurements.map((size, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-2 border font-medium">{size.size}</td>
                                  <td className="px-4 py-2 border">{size.chest}</td>
                                  <td className="px-4 py-2 border">{size.waist}</td>
                                  <td className="px-4 py-2 border">{size.inseam}</td>
                                  <td className="px-4 py-2 border">{size.sleeve}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          <p>جميع القياسات بالبوصة. للحصول على أفضل مقاس، قم بالقياس فوق الملابس المناسبة. بالنسبة لبدلات العمل الصناعية، نوصي بطلب مقاس أكبر من مقاس ملابسك العادية للسماح بالحركة والطبقات الإضافية.</p>
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
                  <span className="mr-3 text-sm text-gray-500">الحد الأدنى للطلب: {product.minOrderQuantity} قطعة</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
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
                  <p className="mt-2 text-sm text-gray-500 text-right">اتصل بنا للحصول على مزيد من المعلومات حول خيارات التطريز المخصص والعلامات التجارية.</p>
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
      
      {/* نموذج طلب عرض السعر السريع */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">هل تحتاج إلى أزياء صناعية لفريق عملك؟</h2>
              <p className="text-gray-700 mb-6">احصل على عرض سعر مخصص لمتطلبات الزي الموحد للشركات الصناعية والإنشاءات والتصنيع، بما في ذلك خيارات التخصيص وميزات السلامة.</p>
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
