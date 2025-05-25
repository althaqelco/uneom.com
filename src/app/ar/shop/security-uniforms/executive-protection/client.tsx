'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ExecutiveProtectionClientPage() {
  const locale = 'ar';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'executive-protection',
    name: 'زي الحماية التنفيذية',
    price: 'ريال 899',
    basePrice: 899,
    rating: 4.9,
    reviews: 42,
    description: 'زي حماية متخصص مصمم للمهنيين العاملين في مجال حماية الشخصيات الهامة بالمملكة العربية السعودية. يوازن هذا الزي بين المظهر الاحترافي والوظائف التكتيكية، مع توفير توافق مع الدروع الواقية وتعزيز حرية الحركة.',
    features: [
      'توافق مع الدروع الواقية الخفية للحماية من المقذوفات',
      'أقمشة مقاومة للتمزق والتآكل مع خصائص تمدد',
      'تقنية امتصاص الرطوبة للراحة في المناخ السعودي',
      'تصميم معزز للحركة مع ثنيات استراتيجية',
      'نظام جيوب تكتيكي خفي لأدوات الأمن الأساسية',
      'مظهر احترافي يندمج في البيئات التنفيذية',
      'متوفر بأنماط سعودية تقليدية وحديثة مناسبة'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر، 30% قطن، 5% إيلاستين' },
      { name: 'الوزن', value: 'وزن متوسط-ثقيل (240 غم/م²)' },
      { name: 'تعليمات العناية', value: 'غسيل جاف موصى به، قابل للغسل في الغسالة على برنامج معتدل' },
      { name: 'المقاسات المتوفرة', value: 'S - 3XL، وخيارات مخصصة' },
      { name: 'الألوان', value: 'أسود تكتيكي، كحلي تنفيذي، فحمي احترافي' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'دمج الدروع الواقية، توافق مع معدات الاتصالات، أنظمة تحديد الفريق' }
    ],
    images: [
      { src: '/images/security/advanced-fabrics-hero.jpg', alt: 'زي الحماية التنفيذية للأفراد الأمنيين المحترفين' },
      { src: '/images/security/smart-fabric-technology.jpg', alt: 'تقنية الأقمشة المتطورة في بدلات الحماية التنفيذية' },
      { src: '/images/security/stab-resistant-fabric.jpg', alt: 'ميزات الحماية في أزياء الأمن التنفيذية' },
      { src: '/images/security/saudi-events-security.jpg', alt: 'طاقم الحماية التنفيذية في الفعاليات الرسمية السعودية' }
    ],
    category: 'أزياء الأمن',
    categorySlug: 'security-uniforms',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '3-4 أسابيع',
    colors: [
      { name: 'أسود تكتيكي', value: '#1a1a1a' },
      { name: 'كحلي تنفيذي', value: '#1f2937' },
      { name: 'فحمي احترافي', value: '#374151' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', 'مخصص'],
    customizationOptions: [
      { name: 'دمج الدروع الواقية الخفية', price: 'بسعر إضافي' },
      { name: 'توافق مع معدات الاتصالات', price: 'ريال 150 للزي الواحد' },
      { name: 'أنظمة تحديد الفريق', price: 'ريال 120 للمجموعة' },
      { name: 'علامات تجارية خاصة بالشركة/الفعالية', price: 'ريال 80 للزي الواحد' }
    ],
    bulkPricing: [
      { quantity: '10-24', pricePerUnit: 'ريال 899' },
      { quantity: '25-99', pricePerUnit: 'ريال 829' },
      { quantity: '100-499', pricePerUnit: 'ريال 769' },
      { quantity: '500+', pricePerUnit: 'ريال 699' }
    ],
    relatedProducts: [
      {
        id: 'security-officer-uniform',
        name: 'زي ضابط الأمن الاحترافي',
        image: '/images/hospitality/hospitality_uniform_formal.jpg',
        price: 'من ريال 329',
        href: '/ar/shop/security-uniforms/security-officer-uniform'
      },
      {
        id: 'tactical-security-uniforms',
        name: 'أزياء الأمن التكتيكية',
        image: '/images/hospitality/hospitality_uniform_formal.jpg',
        price: 'من ريال 549',
        href: '/ar/shop/security-uniforms/tactical-security-uniforms'
      },
      {
        id: 'hotel-security-uniform',
        name: 'زي الأمن الفندقي',
        image: '/images/hospitality/hospitality_uniform_formal.jpg',
        price: 'من ريال 399',
        href: '/ar/shop/security-uniforms/hotel-security-uniform'
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

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-row-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">الرئيسية</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">المتجر</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href={`/ar/shop/${product.categorySlug}`} className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">
                    {product.category}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* Product Details Section */}
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
              
              {/* Quantity and Add to Quote */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">الكمية (حد أدنى {product.minOrderQuantity})</h3>
                <div className="flex items-center justify-end mb-4">
                  <input
                    type="number"
                    min={product.minOrderQuantity}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-center ml-3"
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
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
                
                <div className="mb-6">
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
                
                <div className="mt-8">
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    المجموع التقديري: {getPriceDisplay()}
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
                      يرجى اختيار اللون والمقاس وتحديد الكمية المطلوبة (الحد الأدنى: {product.minOrderQuantity})
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading centered>المميزات الرئيسية</SectionHeading>
            
            <div className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
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
          </div>
        </Container>
      </section>
      
      {/* Specifications Section */}
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
                key={index}
                href={item.href}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
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