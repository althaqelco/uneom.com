'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function AirlineCrewUniformPageAr() {
  const locale = 'ar';
  
  // Product details (This would normally come from a database or API)
  const product = {
    id: 'airline-crew-uniform',
    name: 'زي طاقم الطائرة',
    price: 'من ١٢٩٩ ريال',
    basePrice: 1299,
    rating: 4.8,
    reviews: 76,
    description: 'زي طيران مهني وأنيق لطاقم الضيافة، مصمم بقماش فاخر للراحة أثناء الرحلات الطويلة.',
    longDescription: 'مجموعة أزياء طاقم الطائرة من UNEOM مصممة بعناية فائقة للمتخصصين في مجال الطيران الذين يتطلبون المزيج المثالي من الأناقة والراحة والعملية. تم تصميمها خصيصًا لبيئة السفر الجوي المليئة بالتحديات، تحافظ أزياؤنا الموحدة على مظهرها الأنيق طوال الرحلات الطويلة مع توفير الراحة والمرونة التي يحتاجها مضيفو الطيران لأداء واجباتهم بتميز. تضمن الأقمشة الفاخرة المقاومة للتجعد مظهرًا احترافيًا من الإقلاع إلى الهبوط، بينما تخلق القصة المصممة مظهرًا متميزًا يمثل علامة شركة الطيران بتميز.',
    features: [
      'قماش فاخر مقاوم للتجعد يحافظ على المظهر أثناء الرحلات الطويلة',
      'تقنية امتصاص الرطوبة للراحة في درجات حرارة المقصورة المتفاوتة',
      'معالجة مقاومة للبقع للصيانة العملية',
      'قصة مخصصة مع لوحات مرنة استراتيجية لسهولة الحركة',
      'جيوب وظيفية متعددة مصممة لمستلزمات مضيف الطيران',
      'تصميم محتشم ومهني متوافق مع معايير الطيران السعودية',
      'بناء متين للارتداء المتكرر والغسيل الصناعي'
    ],
    specifications: [
      { name: 'المادة', value: '٦٨٪ بوليستر، ٣٠٪ فيسكوز، ٢٪ إيلاستين' },
      { name: 'الوزن', value: 'وزن متوسط (٢٢٠ جرام/م²)' },
      { name: 'تعليمات العناية', value: 'يُنصح بالتنظيف الجاف، قابل للغسل بالغسالة على دورة لطيفة' },
      { name: 'المقاسات المتوفرة', value: 'نساء: ٢-٢٠ (أمريكي)، رجال: ٣٦-٥٤ (أوروبي)' },
      { name: 'الألوان', value: 'أزرق كحلي، أحمر نبيذي، رمادي فحمي (الألوان المخصصة متوفرة)' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'تطريز شعار شركة الطيران، شارات الأسماء، مطابقة الألوان المخصصة' }
    ],
    images: [
      { src: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg', alt: 'زي طاقم الطائرة - إطلالة أمامية' },
      { src: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg', alt: 'زي مضيفة الطيران' },
      { src: '/images/cheerful-flight-attendant-standing-outdoors-at-air-2023-11-27-05-13-43-utc.jpg', alt: 'زي الطيران مع القبعة' },
      { src: '/images/two-beautiful-stewardesses-and-an-airman-staring-a-2024-10-21-02-06-10-utc.jpg', alt: 'مجموعة كاملة من زي طاقم الطائرة' }
    ],
    category: 'أزياء الطيران',
    categorySlug: 'aviation-uniforms',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '٣-٤ أسابيع',
    customizationOptions: [
      { name: 'تطريز شعار شركة الطيران', price: '٤٩ ريال للزي الواحد' },
      { name: 'شارات الأسماء', price: '٢٩ ريال للشارة' },
      { name: 'ألوان مخصصة', price: '٩٩ ريال للطلب' },
      { name: 'تعديلات المقاس', price: '٧٩ ريال للزي الواحد' }
    ],
    bulkPricing: [
      { quantity: '١٠-٤٩', pricePerUnit: '١٢٩٩ ريال' },
      { quantity: '٥٠-٩٩', pricePerUnit: '١١٩٩ ريال' },
      { quantity: '١٠٠-٢٤٩', pricePerUnit: '١٠٩٩ ريال' },
      { quantity: '٢٥٠+', pricePerUnit: '٩٩٩ ريال' }
    ],
    relatedProducts: [
      {
        id: 'pilot-uniform',
        name: 'زي الطيار المهني',
        image: '/images/the-aviators-stance-2024-11-16-08-18-21-utc.jpg',
        price: 'من ١٥٩٩ ريال',
        href: '/ar/shop/aviation-uniforms/pilot-uniform'
      },
      {
        id: 'ground-crew-uniform',
        name: 'زي طاقم الأرض',
        image: '/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
        price: 'من ٨٩٩ ريال',
        href: '/ar/shop/aviation-uniforms/ground-crew-uniform'
      },
      {
        id: 'aviation-blazer',
        name: 'سترة طيران فاخرة',
        image: '/images/cheerful-flight-attendant-standing-in-airport-term-2024-10-18-08-12-48-utc.jpg',
        price: 'من ٩٩٩ ريال',
        href: '/ar/shop/aviation-uniforms/aviation-blazer'
      }
    ]
  };
  
  // Size chart
  const sizeChart = {
    women: [
      { size: '٢', bust: '٣٢ بوصة', waist: '٢٤ بوصة', hip: '٣٤ بوصة', inseam: '٣٠ بوصة' },
      { size: '٤', bust: '٣٣ بوصة', waist: '٢٥ بوصة', hip: '٣٥ بوصة', inseam: '٣٠ بوصة' },
      { size: '٦', bust: '٣٤ بوصة', waist: '٢٦ بوصة', hip: '٣٦ بوصة', inseam: '٣٠ بوصة' },
      { size: '٨', bust: '٣٥ بوصة', waist: '٢٧ بوصة', hip: '٣٧ بوصة', inseam: '٣٠ بوصة' },
      { size: '١٠', bust: '٣٦ بوصة', waist: '٢٨ بوصة', hip: '٣٨ بوصة', inseam: '٣٠ بوصة' },
      { size: '١٢', bust: '٣٨ بوصة', waist: '٣٠ بوصة', hip: '٤٠ بوصة', inseam: '٣٠ بوصة' },
      { size: '١٤', bust: '٤٠ بوصة', waist: '٣٢ بوصة', hip: '٤٢ بوصة', inseam: '٣٠ بوصة' },
      { size: '١٦', bust: '٤٢ بوصة', waist: '٣٤ بوصة', hip: '٤٤ بوصة', inseam: '٣٠ بوصة' },
      { size: '١٨', bust: '٤٤ بوصة', waist: '٣٦ بوصة', hip: '٤٦ بوصة', inseam: '٣٠ بوصة' },
      { size: '٢٠', bust: '٤٦ بوصة', waist: '٣٨ بوصة', hip: '٤٨ بوصة', inseam: '٣٠ بوصة' },
    ],
    men: [
      { size: '٣٦', chest: '٣٦ بوصة', waist: '٣٠ بوصة', hip: '٣٧ بوصة', inseam: '٣٢ بوصة' },
      { size: '٣٨', chest: '٣٨ بوصة', waist: '٣٢ بوصة', hip: '٣٩ بوصة', inseam: '٣٢ بوصة' },
      { size: '٤٠', chest: '٤٠ بوصة', waist: '٣٤ بوصة', hip: '٤١ بوصة', inseam: '٣٢ بوصة' },
      { size: '٤٢', chest: '٤٢ بوصة', waist: '٣٦ بوصة', hip: '٤٣ بوصة', inseam: '٣٢ بوصة' },
      { size: '٤٤', chest: '٤٤ بوصة', waist: '٣٨ بوصة', hip: '٤٥ بوصة', inseam: '٣٢ بوصة' },
      { size: '٤٦', chest: '٤٦ بوصة', waist: '٤٠ بوصة', hip: '٤٧ بوصة', inseam: '٣٢ بوصة' },
      { size: '٤٨', chest: '٤٨ بوصة', waist: '٤٢ بوصة', hip: '٤٩ بوصة', inseam: '٣٢ بوصة' },
      { size: '٥٠', chest: '٥٠ بوصة', waist: '٤٤ بوصة', hip: '٥١ بوصة', inseam: '٣٢ بوصة' },
      { size: '٥٢', chest: '٥٢ بوصة', waist: '٤٦ بوصة', hip: '٥٣ بوصة', inseam: '٣٢ بوصة' },
      { size: '٥٤', chest: '٥٤ بوصة', waist: '٤٨ بوصة', hip: '٥٥ بوصة', inseam: '٣٢ بوصة' },
    ]
  };
  
  // Gallery images
  const galleryImages = [
    "/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg",
    "/images/cheerful-flight-attendant-standing-outdoors-at-air-2023-11-27-05-13-43-utc.jpg",
    "/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg",
    "/images/female-flight-attendant-or-air-hostess-standing-in-2024-10-18-08-14-24-utc.jpg"
  ];
  
  // UI text translations
  const uiText = {
    breadcrumb: {
      home: 'الرئيسية',
      shop: 'المتجر',
      category: 'أزياء الطيران',
    },
    productDetails: {
      reviews: 'تقييمات',
      color: 'اللون',
      quantity: 'الكمية',
      minimum: 'الحد الأدنى',
      specialPricing: 'للطلبات التي تزيد عن ٢٥٠ وحدة، يرجى الاتصال بنا مباشرة للحصول على أسعار خاصة.',
      addToQuote: 'إضافة إلى طلب عرض السعر',
      requestSamples: 'طلب عينات',
      estimatedDelivery: 'مدة التسليم المتوقعة',
      freeDelivery: 'توصيل مجاني للطلبات التي تزيد عن ١٠,٠٠٠ ريال',
      customRequirements: 'متطلبات مخصصة',
      customRequirementsPlaceholder: 'يرجى تحديد أي متطلبات مخصصة لطلبك (مثل وضع الشعار، تنويعات الألوان المحددة، إلخ).',
    },
    tabs: {
      description: 'الوصف',
      specifications: 'المواصفات',
      sizeChart: 'جدول المقاسات',
      bulkPricing: 'أسعار الجملة',
    },
    relatedProducts: {
      title: 'قد يعجبك أيضًا',
      viewDetails: 'عرض التفاصيل',
    },
    cta: {
      title: 'هل تحتاج إلى حل مخصص لزي الطيران؟',
      description: 'يتخصص فريقنا في إنشاء أزياء طيران مخصصة تمثل علامتك التجارية بتميز. من التصميم الأولي إلى إدارة الطرح، نتعامل مع العملية بأكملها.',
      button: 'طلب استشارة',
    },
    keyFeatures: 'المميزات الرئيسية',
    customizationOptions: 'خيارات التخصيص',
    customizationDescription: 'تقدم UNEOM تخصيصًا واسعًا لجميع أزياء الطيران:'
  };
  
  return (
    <>
      {/* Breadcrumbs Section */}
      <section className="py-4 bg-gray-50">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 space-x-reverse md:space-x-3 md:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">{uiText.breadcrumb.home}</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">{uiText.breadcrumb.shop}</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop/aviation-uniforms" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">
                    {uiText.breadcrumb.category}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </section>
      
      {/* Product Hero Section */}
      <section className="py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative h-24 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary-500 transition-colors"
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
            
            {/* Product Info */}
            <div className="order-1 lg:order-2 text-right">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4 justify-end">
                <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} {uiText.productDetails.reviews})</span>
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
              
              <p className="text-2xl font-bold text-gray-900 mb-6">{product.price}</p>
              
              <div className="prose prose-sm mb-6">
                <p>{product.description}</p>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">{uiText.productDetails.color}</h3>
                <div className="flex space-x-2 space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-blue-900 cursor-pointer border-2 border-white ring-2 ring-primary-500"></div>
                  <div className="w-8 h-8 rounded-full bg-red-900 cursor-pointer border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 cursor-pointer border-2 border-white"></div>
                </div>
              </div>
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">{uiText.productDetails.quantity} ({uiText.productDetails.minimum}: {product.minOrderQuantity})</h3>
                <div className="flex justify-end">
                  <input
                    type="number"
                    min={product.minOrderQuantity}
                    defaultValue={product.minOrderQuantity}
                    className="w-20 border border-gray-300 rounded-md py-2 px-3 text-center"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{uiText.productDetails.specialPricing}</p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:space-x-reverse mb-8">
                <Button variant="primary" className="flex-1 py-3 justify-center">
                  {uiText.productDetails.addToQuote}
                </Button>
                <Button variant="outline" className="flex-1 py-3 justify-center">
                  {uiText.productDetails.requestSamples}
                </Button>
              </div>
              
              {/* Delivery Info */}
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-2 justify-end">
                  <span>{uiText.productDetails.estimatedDelivery}: {product.estimatedDelivery}</span>
                  <svg className="w-5 h-5 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex items-center text-sm text-gray-600 justify-end">
                  <span>{uiText.productDetails.freeDelivery}</span>
                  <svg className="w-5 h-5 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Custom Requirements */}
              <div className="mb-6">
                <label htmlFor="custom-requirements" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                  {uiText.productDetails.customRequirements}
                </label>
                <textarea
                  id="custom-requirements"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm placeholder-gray-400 text-right"
                  placeholder={uiText.productDetails.customRequirementsPlaceholder}
                ></textarea>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Features */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px justify-end">
                <button className="text-primary-600 border-b-2 border-primary-600 py-4 px-6 font-medium text-sm">
                  {uiText.tabs.description}
                </button>
                <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm">
                  {uiText.tabs.specifications}
                </button>
                <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm">
                  {uiText.tabs.sizeChart}
                </button>
                <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm">
                  {uiText.tabs.bulkPricing}
                </button>
              </nav>
            </div>
            
            <div className="p-6 text-right">
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">{product.longDescription}</p>
                
                <h3>{uiText.keyFeatures}</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h3>{uiText.customizationOptions}</h3>
                <p>{uiText.customizationDescription}</p>
                <ul>
                  {product.customizationOptions.map((option, index) => (
                    <li key={index}><strong>{option.name}</strong>: {option.price}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Size Guide */}
      <section className="py-12 bg-gray-50">
        <Container>
          <SectionHeading centered>جدول المقاسات</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">نساء</h3>
              {/* Table content will be dynamically generated */}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">رجال</h3>
              {/* Table content will be dynamically generated */}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Specifications and Size Chart (Hidden by default) */}
      {/* ... specifications content ... */}
      
      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <Container>
          <SectionHeading centered>{uiText.relatedProducts.title}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {product.relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={relatedProduct.href} className="group">
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-primary-600 text-sm font-medium group-hover:underline">{uiText.relatedProducts.viewDetails}</span>
                      <span className="font-medium text-gray-900">{relatedProduct.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 order-2 lg:order-1 text-right">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{uiText.cta.title}</h2>
                <p className="text-gray-600 mb-6">
                  {uiText.cta.description}
                </p>
                <Button variant="primary" href="/ar/contact?subject=أزياء%20طيران%20مخصصة">
                  {uiText.cta.button}
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto bg-gray-100 order-1 lg:order-2">
                <Image
                  src="/images/cheerful-flight-attendant-standing-outdoors-at-air-2023-11-27-05-13-43-utc.jpg"
                  alt="تصميم زي طيران مخصص"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 