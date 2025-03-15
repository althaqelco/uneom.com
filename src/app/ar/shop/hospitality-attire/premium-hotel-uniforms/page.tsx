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

export default function PremiumHotelUniformsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أحمر نبيذي');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details in Arabic
  const product = {
    id: 'premium-hotel-uniforms',
    name: 'أزياء موظفي الفنادق الفاخرة',
    price: 'من ٧٩٩ ريال',
    basePrice: "799",
    rating: 4.9,
    reviews: 112,
    description: 'أزياء أنيقة ومتينة مصممة لموظفي الفنادق الفاخرة، تمزج بين الجماليات العربية الحديثة والوظائف العملية.',
    longDescription: 'صُممت مجموعة أزياء موظفي الفنادق الفاخرة لدينا خصيصًا لقطاع الضيافة الراقي في المملكة العربية السعودية. تجمع كل قطعة بين الأناقة الخالدة والوظائف العملية، مما يخلق حلاً موحدًا راقيًا ومريحًا للفنادق والمنتجعات الفاخرة. يتحمل مزيج القماش الفاخر الغسيل المتكرر مع الحفاظ على مظهره الراقي، وتستوعب التصاميم المتطلبات الثقافية للمملكة مع إظهار المعايير العالية المتوقعة في المنشآت ذات الخمس نجوم.',
    features: [
      'مزيج فاخر من البوليستر والصوف مع قابلية للتمدد للراحة أثناء المناوبات الطويلة',
      'تقنية مقاومة للبقع والتراب في الأقمشة',
      'خصائص مقاومة للعرق مثالية للمناخ السعودي',
      'درزات معززة لمتانة طويلة الأمد في الأدوار عالية النشاط',
      'تصميم محتشم وأنيق مناسب للفنادق الفاخرة السعودية',
      'متوفر بأنماط غربية وأخرى مستوحاة من التقاليد السعودية',
      'تصاميم متخصصة لموظفي الاستقبال والكونسيرج والتدبير المنزلي والإدارة'
    ],
    specifications: [
      { name: 'المواد', value: '٦٠٪ بوليستر، ٣٥٪ صوف، ٥٪ إيلاستين' },
      { name: 'الوزن', value: 'وزن متوسط (٢٢٠-٢٤٠ جم/م²)' },
      { name: 'تعليمات العناية', value: 'آمن للغسيل الصناعي والمنزلي' },
      { name: 'المقاسات المتوفرة', value: 'XS - 4XL' },
      { name: 'الألوان', value: 'أحمر نبيذي، ذهبي ملكي، كحلي غامق، أخضر زمردي، أسود كلاسيكي' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'التخصيص', value: 'شعارات الفنادق، أسماء الموظفين، ترميز الأقسام بالألوان' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'موظفو استقبال الفندق بأزياء فاخرة' },
      { src: '/images/default-placeholder.jpg', alt: 'موظف الكونسيرج بزي فندقي فاخر' },
      { src: '/images/default-placeholder.jpg', alt: 'طاقم التدبير المنزلي بأزياء مهنية' },
      { src: '/images/default-placeholder.jpg', alt: 'مدير الفندق بزي تنفيذي يرحب بالضيوف' }
    ],
    category: 'أزياء الضيافة',
    categorySlug: 'hospitality-attire',
    inStock: true,
    minOrder: 10,
    leadTime: '١٤-٢١ يوم',
    customization: true,
    variants: [
      { name: 'طقم زي موظفي الاستقبال', price: '٧٩٩ ريال' },
      { name: 'طقم زي الكونسيرج', price: '٨٩٩ ريال' },
      { name: 'زي طاقم التدبير المنزلي', price: '٦٤٩ ريال' },
      { name: 'زي الإدارة التنفيذية', price: '١,١٩٩ ريال' }
    ],
    colors: [
      { name: 'أحمر نبيذي', value: '#800020', image: '/images/default-placeholder.jpg' },
      { name: 'ذهبي ملكي', value: '#caa548', image: '/images/default-placeholder.jpg' },
      { name: 'كحلي غامق', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'أخضر زمردي', value: '#2e5d4b', image: '/images/default-placeholder.jpg' },
      { name: 'أسود كلاسيكي', value: '#232323', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    sizeEquivalents: {
      'XS': 'صغير جدًا (أوروبي ٤٠-٤٢)',
      'S': 'صغير (أوروبي ٤٤-٤٦)',
      'M': 'متوسط (أوروبي ٤٨-٥٠)',
      'L': 'كبير (أوروبي ٥٢-٥٤)',
      'XL': 'كبير جدًا (أوروبي ٥٦-٥٨)',
      'XXL': 'كبير جدًا جدًا (أوروبي ٦٠-٦٢)',
      '3XL': 'كبير جدًا بثلاث مرات (أوروبي ٦٤-٦٦)',
      '4XL': 'كبير جدًا بأربع مرات (أوروبي ٦٨-٧٠)'
    },
    testimonials: [
      {
        quote: "حصلت الأزياء التي صممتها UNEOM لطاقمنا على إشادات لا حصر لها من الضيوف. الجودة استثنائية، وقد حافظت على مظهرها بشكل مثالي رغم الاستخدام اليومي في فندقنا المزدحم.",
        author: "عبدالله المنصور",
        position: "المدير العام",
        company: "فندق رويال بالمز الرياض",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "العمل مع UNEOM بسّط إدارة الأزياء الموحدة لدينا بشكل كبير. جودة القماش متميزة - حيث تظهر الحد الأدنى من التآكل حتى بعد أشهر من الاستخدام المستمر، وفهم فريق التصميم لديهم حاجتنا للموازنة بين الأناقة السعودية التقليدية ومعايير الضيافة الحديثة.",
        author: "نادية الحربي",
        position: "مديرة التدبير المنزلي التنفيذية",
        company: "منتجع وسبا جدة جراند",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' },
    { label: 'أزياء موظفي الفنادق الفاخرة', href: '#' }
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
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: product.basePrice,
        image: product.images[0].src
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
            <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
            <p className="text-xl font-semibold text-primary-600 mt-2">{product.price}</p>
            
            <div className="flex items-center mt-2">
              <div className="flex items-center">
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
                <span className="text-neutral-600 mr-2">{product.rating} ({product.reviews} تقييم)</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-neutral-700">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">أنواع الأزياء حسب الوظائف</h3>
              <div className="mt-2 space-y-2">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="flex justify-between items-center p-3 border border-neutral-200 rounded-md">
                    <span className="font-medium">{variant.name}</span>
                    <span className="text-primary-600">{variant.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">الألوان</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-primary-600' : 'border-transparent'}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    onClick={() => handleColorSelect(color.name)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-neutral-900">المقاس</h3>
                <button 
                  type="button" 
                  className="text-primary-600 text-sm"
                  onClick={() => setShowSizeChart(true)}
                >
                  جدول المقاسات
                </button>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 px-4 border rounded-md text-center ${
                      selectedSize === size 
                        ? 'border-primary-600 bg-primary-50 text-primary-600' 
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">الكمية (الحد الأدنى: {product.minOrder})</h3>
              <div className="mt-2 flex items-center">
                <input
                  type="number"
                  min={product.minOrder}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-neutral-300 rounded-md px-3 py-2 w-20 text-center"
                />
                <span className="mr-2 text-neutral-500">وحدة</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-neutral-500 mb-2">وقت التسليم: {product.leadTime}</p>
              <AddToQuoteButton 
                product={product}
                color={selectedColor || undefined}
                size={selectedSize || undefined}
                quantity={quantity}
              />
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16">
          <SectionHeading>تفاصيل المنتج</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-neutral-700">{product.longDescription}</p>
              <h3 className="font-semibold text-lg mt-6 mb-3">الميزات الرئيسية</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">المواصفات</h3>
              <div className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 py-2 border-b border-neutral-200">
                    <span className="font-medium text-neutral-900">{spec.name}</span>
                    <span className="text-neutral-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Hospitality Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز في الضيافة</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              صُممت أزياء موظفي الفنادق الفاخرة لدينا لتعكس الأناقة والرقي المتوقعين في قطاع الضيافة الفاخر في المملكة العربية السعودية. 
              تم صناعة كل تفصيل لتعزيز صورة العلامة التجارية لفندقك مع ضمان راحة الموظفين وثقتهم طوال المناوبات المتطلبة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">تمثيل العلامة التجارية</h4>
                <p className="text-sm text-neutral-600">أزياء تعكس معايير الجودة والجمالية لفندقك، مما يخلق هوية بصرية متناسقة خلال تفاعلات الضيوف.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">الوظائف العملية</h4>
                <p className="text-sm text-neutral-600">تصاميم مريحة مع لوحات مرنة استراتيجية وتعزيز في المناطق عالية الإجهاد لراحة الموظفين أثناء المناوبات الطويلة.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">الحساسية الثقافية</h4>
                <p className="text-sm text-neutral-600">تصاميم محتشمة ومعاصرة تحترم القيم الثقافية السعودية مع عكس معايير الفخامة الدولية.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hotel Branding Section */}
        <div className="mt-16">
          <SectionHeading>العلامة التجارية للفندق والتخصيص</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/default-placeholder.jpg" 
                alt="طاقم فندق فاخر في أزياء موحدة مخصصة ومنسقة" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4">
                نقدم خيارات تخصيص واسعة لضمان أن أزياء موظفي الفندق تعكس بشكل مثالي هوية علامتك التجارية.
                من الألوان المخصصة التي تتناسب مع التصميم الداخلي إلى الشعارات المطرزة وشارات الأسماء الشخصية، يعمل فريق التصميم لدينا 
                بشكل وثيق مع إدارتكم لإنشاء هوية بصرية متماسكة عبر جميع الأقسام.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">العلامة التجارية للمنشأة</h4>
                  <p className="text-sm">تطريز مخصص، تسميات منسوجة، وأزرار متخصصة تحمل شعار وهوية الفندق.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">تمييز الأقسام</h4>
                  <p className="text-sm">ترميز الألوان، تنوع الأنماط، والإكسسوارات المتخصصة للتمييز بين الأدوار والأقسام.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">التخصيص الشخصي للموظفين</h4>
                  <p className="text-sm">تطريز الأسماء، تحديد المناصب، وشارات اللغة لتعزيز التواصل مع الضيوف.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">اختيار الأقمشة المخصصة</h4>
                  <p className="text-sm">أقمشة متخصصة، ملمس، وأنماط تكمل الطابع الجمالي للفندق.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب تخصيص للفندق</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16">
          <SectionHeading>آراء العملاء</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                id={index}
                quote={testimonial.quote}
                name={testimonial.author}
                role={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                locale={locale}
              />
            ))}
          </div>
        </div>
        
        {/* Size Chart Modal */}
        {showSizeChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">جدول مقاسات الزي الفندقي</h3>
                  <button onClick={() => setShowSizeChart(false)} className="text-neutral-500 hover:text-neutral-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-100">
                      <tr>
                        <th className="p-2 text-right">المقاس</th>
                        <th className="p-2 text-right">الصدر (سم)</th>
                        <th className="p-2 text-right">الخصر (سم)</th>
                        <th className="p-2 text-right">الورك (سم)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XS</td>
                        <td className="p-2">٨٦-٩٠</td>
                        <td className="p-2">٧٠-٧٤</td>
                        <td className="p-2">٩٠-٩٤</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">٩١-٩٦</td>
                        <td className="p-2">٧٥-٨٠</td>
                        <td className="p-2">٩٥-١٠٠</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">٩٧-١٠٢</td>
                        <td className="p-2">٨١-٨٦</td>
                        <td className="p-2">١٠١-١٠٦</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">١٠٣-١٠٨</td>
                        <td className="p-2">٨٧-٩٢</td>
                        <td className="p-2">١٠٧-١١٢</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">١٠٩-١١٤</td>
                        <td className="p-2">٩٣-٩٨</td>
                        <td className="p-2">١١٣-١١٨</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XXL</td>
                        <td className="p-2">١١٥-١٢٠</td>
                        <td className="p-2">٩٩-١٠٤</td>
                        <td className="p-2">١١٩-١٢٤</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">١٢١-١٢٦</td>
                        <td className="p-2">١٠٥-١١٠</td>
                        <td className="p-2">١٢٥-١٣٠</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">١٢٧-١٣٢</td>
                        <td className="p-2">١١١-١١٦</td>
                        <td className="p-2">١٣١-١٣٦</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    ملاحظة: بالنسبة للفنادق، نوصي بخدمة القياس في الموقع لضمان الملاءمة المثالية لجميع أفراد الطاقم.
                    تتوفر مقاسات مخصصة للموظفين ذوي المقاسات غير القياسية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
} 