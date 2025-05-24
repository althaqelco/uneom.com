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
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ExecutiveSuitsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أزرق داكن');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details in Arabic
  const product = {
    id: 'executive-suits',
    name: 'بدلات تنفيذية مصممة',
    price: 'من ١,٢٩٩ ريال سعودي',
    basePrice: 1299,
    rating: 4.9,
    reviews: 87,
    description: 'بدلات مصممة فاخرة للمدراء التنفيذيين الذين يتطلبون الأناقة والراحة والمظهر المهني المتميز.',
    longDescription: 'صُممت بدلاتنا التنفيذية خصيصًا للبيئات المؤسسية في المملكة العربية السعودية، حيث تجمع بين الجماليات الحديثة والقيم التقليدية. القماش مصنوع من مزيج الصوف الفاخر مع مرونة خفيفة للراحة أثناء أيام العمل الطويلة في المكاتب المكيفة. يوفر التفصيل مظهرًا متميزًا مع احترام الأعراف الثقافية، مثالي للمدراء التنفيذيين الذين يمثلون الشركات السعودية على المستويين المحلي والدولي.',
    features: [
      'قماش مزيج صوف فاخر (٨٠٪ صوف، ١٨٪ بوليستر، ٢٪ إيلاستين)',
      'تصميم عصري بمرونة خفيفة للراحة وسهولة الحركة',
      'تفاصيل منتهية يدويًا لمظهر متميز',
      'تصميم محافظ مناسب للبيئة السعودية',
      'تقنية مقاومة للبقع والتجاعيد',
      'صدرية مطابقة اختيارية للمناسبات الرسمية',
      'مصممة للارتداء على مدار العام في البيئات المكيفة'
    ],
    specifications: [
      { name: 'المواد', value: '٨٠٪ صوف، ١٨٪ بوليستر، ٢٪ إيلاستين' },
      { name: 'الوزن', value: 'وزن متوسط (٢٤٠-٢٦٠ جم/م²)' },
      { name: 'تعليمات العناية', value: 'تنظيف جاف فقط' },
      { name: 'المقاسات المتوفرة', value: '٤٦ - ٦٢ (قياس أوروبي)' },
      { name: 'الألوان', value: 'أزرق داكن، رمادي فحمي، أسود كلاسيكي، بني غامق' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'تفصيل خاص، علامة تجارية للشركة، تطريز شخصي' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'منظر أمامي للبدلة التنفيذية' },
      { src: '/images/default-placeholder.jpg', alt: 'بدلة تنفيذية للنساء' },
      { src: '/images/avatar-placeholder.jpg', alt: 'فريق تنفيذي بالبدلات المصممة' },
      { src: '/images/default-placeholder.jpg', alt: 'تفاصيل القماش الفاخر' }
    ],
    category: 'ملابس مؤسسية',
    categorySlug: 'workplace-uniforms',
    inStock: true,
    minOrder: 5,
    leadTime: '١٤-٢١ يوم',
    customization: true,
    variants: [
      { name: 'بدلة مكونة من قطعتين', price: '١,٢٩٩ ريال سعودي' },
      { name: 'بدلة مكونة من ثلاث قطع (مع صدرية)', price: '١,٥٩٩ ريال سعودي' },
      { name: 'الباقة التنفيذية (٢ بدلة، ٣ قمصان)', price: '٢,٨٩٩ ريال سعودي' }
    ],
    colors: [
      { name: 'أزرق داكن', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'رمادي فحمي', value: '#36454f', image: '/images/default-placeholder.jpg' },
      { name: 'أسود كلاسيكي', value: '#232323', image: '/images/default-placeholder.jpg' },
      { name: 'بني غامق', value: '#5d4037', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['٤٦', '٤٨', '٥٠', '٥٢', '٥٤', '٥٦', '٥٨', '٦٠', '٦٢'],
    sizeEquivalents: {
      '٤٦': 'S (EU 46)',
      '٤٨': 'M (EU 48)',
      '٥٠': 'M (EU 50)',
      '٥٢': 'L (EU 52)',
      '٥٤': 'L (EU 54)',
      '٥٦': 'XL (EU 56)',
      '٥٨': 'XXL (EU 58)',
      '٦٠': '3XL (EU 60)',
      '٦٢': '4XL (EU 62)'
    },
    testimonials: [
      {
        quote: "أصبحت بدلات UNEOM التنفيذية معيارنا للتمثيل المؤسسي. الجودة لا تشوبها شائبة، وقد أتقنوا التوازن بين الأسلوب الحديث والملاءمة الثقافية.",
        author: "أحمد آل سعود",
        position: "مدير الموارد البشرية، البنك السعودي للاستثمار",
        company: "البنك السعودي للاستثمار",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "كمديرة تنفيذية في المملكة العربية السعودية، كان العثور على ملابس عمل مناسبة وأنيقة تحديًا دائمًا. تحل مجموعة UNEOM التنفيذية هذا بشكل مثالي مع تصاميم محتشمة وراقية.",
        author: "نورة القصبي",
        position: "نائبة الرئيس للعمليات، أرامكو",
        company: "أرامكو",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'ملابس العمل', href: '/ar/shop/workplace-uniforms' },
    { label: 'بدلات تنفيذية مصممة', href: '#' }
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
        price: product.basePrice.toString(),
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
    <main>
      <Container>
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
              <h3 className="text-sm font-medium text-neutral-900">أنماط التصميم</h3>
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
        
        {/* Customization Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>خيارات التخصيص</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              يمكن تخصيص بدلاتنا التنفيذية لتتناسب مع هوية شركتك ومتطلباتك الخاصة. 
              من العلامات التجارية للشركات والقياسات المخصصة إلى اختيارات الأقمشة الخاصة، نقدم مجموعة من الخيارات 
              لضمان ظهور فريقك التنفيذي بصورة متماسكة ومتميزة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">العلامات التجارية للشركات</h4>
                <p className="text-sm text-neutral-600">تطريز شعار دقيق، أزرار مخصصة، أو بطانة فريدة تحمل ألوان شركتك وشعارها.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">خدمات القياس</h4>
                <p className="text-sm text-neutral-600">خدمة قياس احترافية في موقعكم لفريقكم التنفيذي لضمان ملاءمة مثالية لكل فرد.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">خيارات الأقمشة الفاخرة</h4>
                <p className="text-sm text-neutral-600">مجموعة من الأقمشة الفاخرة بما في ذلك الصوف الإيطالي، والأقمشة التقنية عالية الأداء، والمزيج الفاخر.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/ar/contact">
                <Button variant="secondary">اتصل بنا لخيارات التخصيص</Button>
              </Link>
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
        
        {/* Size Chart Modal (would be implemented in a separate component) */}
        {showSizeChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">جدول مقاسات البدلات التنفيذية</h3>
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
                        <th className="p-2 text-right">المقاس الأوروبي</th>
                        <th className="p-2 text-right">المقاس العالمي</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.sizeEquivalents).map(([size, equivalent]) => (
                        <tr key={size} className="border-b">
                          <td className="p-2 font-medium">{size}</td>
                          <td className="p-2">{equivalent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    ملاحظة: المقاسات تقريبية وقد تختلف قليلاً حسب النمط. للحصول على أفضل نتيجة، نوصي باستخدام خدمة القياس الخاصة بنا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
        </main>
  );
} 