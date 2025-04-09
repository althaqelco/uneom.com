'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ExecutiveProtectionArabicPage() {
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
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 329',
        href: '/ar/shop/security-uniforms/security-officer-uniform'
      },
      {
        id: 'tactical-security-uniforms',
        name: 'أزياء الأمن التكتيكية',
        image: '/images/default-placeholder.jpg',
        price: 'من ريال 549',
        href: '/ar/shop/security-uniforms/tactical-security-uniforms'
      },
      {
        id: 'hotel-security-uniform',
        name: 'زي الأمن الفندقي',
        image: '/images/default-placeholder.jpg',
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
                                <th className="px-4 py-2 border">الطول الداخلي</th>
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
                          <p>جميع القياسات بالبوصات. للحصول على أفضل النتائج، خذ قياساتك على ملابس داخلية مشابهة لتلك التي سترتديها مع الزي الموحد.</p>
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
                  <span className="mr-3 text-sm text-gray-500">الحد الأدنى للطلب: {product.minOrderQuantity} قطع</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={product.minOrderQuantity}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-right"
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
                <Button
                  onClick={handleAddToQuote}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  إضافة إلى طلب عرض السعر
                </Button>
                <Link href="/ar/contact" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    طلب استشارة
                  </Button>
                </Link>
              </div>
              
              {/* Custom Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">خيارات التخصيص</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                    {product.customizationOptions.map((option, index) => (
                      <li key={index} className="text-right">{option.name} - {option.price}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-gray-500 text-right">اتصل بنا للحصول على الأسعار الخاصة بخيارات التخصيص.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900 text-right">تفاصيل المنتج</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none text-right">
                <h3>الوصف</h3>
                <p>{product.description}</p>
                
                {product.features && product.features.length > 0 && (
                  <>
                    <h3>الميزات الرئيسية</h3>
                    <ul className="text-right mr-5">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-right">{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {product.specifications && product.specifications.length > 0 && (
                  <>
                    <h3>المواصفات</h3>
                    <ul className="text-right mr-5">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="text-right"><strong>{spec.name}:</strong> {spec.value}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Bulk Pricing */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>أسعار الطلبات الكبيرة</SectionHeading>
          <p className="text-center text-gray-700 mb-8">استفد من وفورات كبيرة مع هيكل أسعارنا للطلبات الكبيرة.</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 text-right">
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
                        {index === 0 ? '-' : index === 1 ? '9%' : index === 2 ? '15%' : '24%'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-right">جميع الأسعار بالريال السعودي. اتصل بنا للحصول على عروض أسعار مخصصة للطلبات التي تتجاوز 1,000 وحدة.</p>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
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
                        <svg className="w-4 h-4 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        عرض التفاصيل
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      
      {/* Quick Quote Form */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">هل تحتاج إلى عرض سعر مخصص؟</h2>
              <p className="text-gray-700 mb-6">احصل على عرض سعر مخصص لطلبك الكبير، بما في ذلك خيارات العلامة التجارية المخصصة وجدول التسليم.</p>
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