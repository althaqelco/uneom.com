'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function SecurityOfficerUniformClientPage() {
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
      { src: '/images/products/industrial-coverall.jpg', alt: 'زي ضابط الأمن الاحترافي - منظر أمامي' },
      { src: '/images/product-placeholder.jpg', alt: 'زي ضابط الأمن على النموذج' },
      { src: '/images/products/industrial-coverall.jpg', alt: 'تفاصيل زي ضابط الأمن' },
      { src: '/images/products/industrial-coverall.jpg', alt: 'ملحقات الأمن' }
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
        image: '/images/products/industrial-coverall.jpg',
        price: 'من ريال 389',
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

      {/* Hero Section */}
      <section className="bg-gray-50 py-8">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              أزياء أمن احترافية للشركات والمؤسسات الأمنية في المملكة العربية السعودية
            </p>
          </div>
        </Container>
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
              <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h2>
              
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <h3 className="text-lg font-bold">جدول المقاسات</h3>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3">المقاس</th>
                                <th scope="col" className="px-6 py-3">الصدر</th>
                                <th scope="col" className="px-6 py-3">الخصر</th>
                                <th scope="col" className="px-6 py-3">الورك</th>
                                <th scope="col" className="px-6 py-3">طول الساق</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.unisex.map((item, index) => (
                                <tr key={index} className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.size}</th>
                                  <td className="px-6 py-4">{item.chest}</td>
                                  <td className="px-6 py-4">{item.waist}</td>
                                  <td className="px-6 py-4">{item.hip}</td>
                                  <td className="px-6 py-4">{item.inseam}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <p className="mt-4 text-sm text-gray-600">
                          * القياسات بالبوصة. للحصول على مقاسات مخصصة، يرجى التواصل معنا مباشرة.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Quantity and Bulk Pricing */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">الكمية (حد أدنى {product.minOrderQuantity})</h3>
                
                <div className="flex items-center justify-end mb-4">
                  <input
                    type="number"
                    min={product.minOrderQuantity}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-center"
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">أسعار الكميات</h4>
                  <div className="space-y-1 text-sm">
                    {product.bulkPricing.map((tier, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{tier.pricePerUnit}</span>
                        <span>{tier.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Customization Options */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">خيارات التخصيص</h3>
                <div className="space-y-2 text-sm">
                  {product.customizationOptions.map((option, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-500">{option.price}</span>
                      <span>{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Add to Quote Button */}
              <div className="mb-8">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  المجموع: {getPriceDisplay()}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  التوصيل المتوقع: {product.estimatedDelivery}
                </p>
                
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handleAddToQuote}
                  disabled={!selectedColor || !selectedSize || quantity < product.minOrderQuantity}
                >
                  طلب عرض سعر
                </Button>
                
                {(!selectedColor || !selectedSize || quantity < product.minOrderQuantity) && (
                  <p className="text-sm text-red-600 mt-2 text-center">
                    يرجى اختيار اللون والمقاس وتحديد الكمية المطلوبة
                  </p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Features */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading centered>المميزات الرئيسية</SectionHeading>
            
            <div className="mt-8 grid md:grid-cols-2 gap-y-4 gap-x-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-right">
                  <div className="flex-grow">
                    <p>{feature}</p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Specifications */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>المواصفات</SectionHeading>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <dl className="divide-y divide-gray-200">
              {product.specifications.map((spec, index) => (
                <div key={index} className="py-4 flex justify-between text-right">
                  <dd className="text-gray-900">{spec.value}</dd>
                  <dt className="font-medium text-gray-500">{spec.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <Container>
          <SectionHeading centered>منتجات ذات صلة</SectionHeading>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.relatedProducts.map((item, index) => (
              <Link 
                href={item.href} 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">{item.name}</h3>
                  <p className="font-medium text-gray-900">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
} 