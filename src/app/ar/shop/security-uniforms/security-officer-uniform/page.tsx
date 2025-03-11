'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function SecurityOfficerUniformArabicPage() {
  const locale = 'ar';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'security-officer-uniform',
    name: 'زي ضابط الأمن الاحترافي',
    price: 'ريال 329',
    basePrice: 329,
    rating: 4.7,
    reviews: 56,
    description: 'زي ضابط أمن عالي الجودة مصمم للمتانة والراحة ومظهر احترافي آمر. مصنوع من مواد متميزة لتحمل الارتداء اليومي في بيئات الأمن الصعبة في جميع أنحاء المملكة العربية السعودية.',
    features: [
      'نسيج مزيج من البوليستر والقطن للمتانة وطول العمر',
      'خصائص امتصاص العرق للراحة في ظروف المناخ السعودي',
      'غرز معززة في نقاط الضغط لمتانة محسنة',
      'جيوب تكتيكية متعددة للمعدات والإكسسوارات',
      'عناصر عاكسة لزيادة الرؤية في ظروف الإضاءة المنخفضة',
      'نسيج سهل العناية يحافظ على المظهر الاحترافي بعد الغسيل الصناعي',
      'متوافق مع ملحقات ومعدات الأمن القياسية'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر، 35% قطن ريبستوب' },
      { name: 'الوزن', value: 'وزن متوسط-ثقيل (210 غم/م²)' },
      { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، آمن للغسيل الصناعي' },
      { name: 'المقاسات المتوفرة', value: 'S - 4XL' },
      { name: 'الألوان', value: 'أسود، أزرق بحري، كاكي، أخضر داكن' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'تطريز شعار الشركة، شارات الاسم، شارات الكتف' }
    ],
    images: [
      { src: '/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg', alt: 'زي ضابط الأمن الاحترافي - منظر أمامي' },
      { src: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg', alt: 'زي ضابط الأمن على النموذج' },
      { src: '/images/builder-in-helmet-with-a-suitcase-says-on-camera-on-a-green-screen-chroma-key-SBI-351072375.jpg', alt: 'تفاصيل زي ضابط الأمن' },
      { src: '/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg', alt: 'ملحقات الأمن' }
    ],
    category: 'أزياء الأمن',
    categorySlug: 'security-uniforms',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '2-3 أسابيع',
    colors: [
      { name: 'أسود', value: '#000000' },
      { name: 'أزرق بحري', value: '#000080' },
      { name: 'كاكي', value: '#c3b091' },
      { name: 'أخضر داكن', value: '#006400' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    customizationOptions: [
      { name: 'تطريز شعار الشركة', price: 'ريال 45 للزي الواحد' },
      { name: 'تطريز الاسم', price: 'ريال 25 للزي الواحد' },
      { name: 'شارات الكتف', price: 'ريال 35 للزوج' },
      { name: 'حامل شارة عاكس', price: 'ريال 20 للزي الواحد' }
    ],
    bulkPricing: [
      { quantity: '10-24', pricePerUnit: 'ريال 329' },
      { quantity: '25-99', pricePerUnit: 'ريال 299' },
      { quantity: '100-499', pricePerUnit: 'ريال 279' },
      { quantity: '500+', pricePerUnit: 'ريال 249' }
    ],
    relatedProducts: [
      {
        id: 'security-patrol-jacket',
        name: 'سترة دورية أمنية',
        image: '/images/builder-in-helmet-with-a-suitcase-says-on-camera-on-a-green-screen-chroma-key-SBI-351072375.jpg',
        price: 'من ريال 389',
        href: '/ar/shop/security-uniforms/security-patrol-jacket'
      },
      {
        id: 'tactical-security-vest',
        name: 'سترة أمنية تكتيكية',
        image: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg',
        price: 'من ريال 249',
        href: '/ar/shop/security-uniforms/tactical-security-vest'
      },
      {
        id: 'security-accessories-kit',
        name: 'طقم ملحقات أمنية',
        image: '/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg',
        price: 'من ريال 179',
        href: '/ar/shop/security-uniforms/security-accessories-kit'
      }
    ]
  };
  
  // Size chart
  const sizeChart = {
    unisex: [
      { size: 'S', chest: '38"', waist: '32"', hip: '40"', inseam: '31"' },
      { size: 'M', chest: '40"', waist: '34"', hip: '42"', inseam: '31"' },
      { size: 'L', chest: '42"', waist: '36"', hip: '44"', inseam: '32"' },
      { size: 'XL', chest: '44"', waist: '38"', hip: '46"', inseam: '32"' },
      { size: '2XL', chest: '46"', waist: '40"', hip: '48"', inseam: '32"' },
      { size: '3XL', chest: '48"', waist: '42"', hip: '50"', inseam: '33"' },
      { size: '4XL', chest: '52"', waist: '46"', hip: '54"', inseam: '33"' },
    ]
  };
  
  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  
  // Handle add to quote
  const handleAddToQuote = () => {
    // In a real application, this would add the product to a quote cart
    console.log('Added to quote:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    
    alert('تمت إضافة المنتج إلى طلب عرض السعر.');
  };
  
  // Generate pricing display based on quantity
  const getPriceDisplay = () => {
    if (quantity >= 500) {
      return 'ريال ' + ((product.basePrice * 0.76) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'ريال ' + ((product.basePrice * 0.85) * quantity).toLocaleString();
    } else if (quantity >= 25) {
      return 'ريال ' + ((product.basePrice * 0.91) * quantity).toLocaleString();
    } else {
      return 'ريال ' + (product.basePrice * quantity).toLocaleString();
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-8">
        {/* ... existing content ... */}
      </section>
      
      {/* Product Details */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images - Left side for RTL */}
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
            
            {/* Product Info - Right side for RTL */}
            <div className="order-1 lg:order-2 text-right">
              <span className="text-sm text-primary-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
              
              <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
              
              <div className="prose prose-sm mb-8">
                <p>{product.description}</p>
              </div>
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">اللون</h3>
                  <div className="flex flex-wrap gap-3 justify-end">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 focus:outline-none
                          ${selectedColor === color.name ? 'border-primary-600' : 'border-gray-300'}`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size Selection */}
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
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border focus:outline-none
                          ${selectedSize === size 
                            ? 'border-primary-600 bg-primary-50 text-primary-700' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  
                  {/* Size Chart Modal */}
                  {showSizeChart && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-4">
                          <button 
                            onClick={() => setShowSizeChart(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <h2 className="text-xl font-bold">جدول المقاسات</h2>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-gray-700 text-right">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-2 border">المقاس</th>
                                <th className="px-4 py-2 border">الصدر</th>
                                <th className="px-4 py-2 border">الخصر</th>
                                <th className="px-4 py-2 border">الورك</th>
                                <th className="px-4 py-2 border">طول الساق الداخلي</th>
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
                        
                        <div className="mt-6 text-sm text-gray-500 text-right">
                          <p>جميع القياسات بالبوصة. للحصول على أفضل النتائج، خذ قياساتك فوق الملابس الداخلية المشابهة لتلك التي سترتديها مع الزي الموحد.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">الكمية</h3>
                <div className="flex items-center justify-end">
                  <span className="ml-3 text-sm text-gray-500">الحد الأدنى للطلب: {product.minOrderQuantity} وحدة</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 mr-3"
                  />
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-700">{getPriceDisplay()}</span>
                  <span className="text-gray-700">السعر الإجمالي (تقديري):</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">سيتم تأكيد السعر النهائي في عرض السعر</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                  إضافة إلى عرض السعر
                </Button>
              </div>
              
              {/* Custom Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">خيارات التخصيص</h3>
                  <ul className="space-y-2">
                    {product.customizationOptions.map((option, index) => (
                      <li key={index} className="flex justify-between text-gray-700">
                        <span className="text-gray-500">{option.price}</span>
                        <span>{option.name}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-500 text-right">اتصل بنا للحصول على مزيد من المعلومات حول خيارات التخصيص.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <div className="px-6 py-4 text-right">
                <h2 className="text-xl font-bold text-gray-900">تفاصيل المنتج</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none text-right">
                <h3>الميزات الرئيسية</h3>
                <ul className="space-y-1 pr-6">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h3 className="mt-6">مواصفات المنتج</h3>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse text-right">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-2 px-4 border border-gray-200">{spec.value}</td>
                          <td className="py-2 px-4 border border-gray-200 font-medium">{spec.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        {/* ... existing content ... */}
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        {/* ... existing content ... */}
      </section>
    </>
  );
} 