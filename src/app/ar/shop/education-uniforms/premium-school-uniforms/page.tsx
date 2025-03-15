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

export default function PremiumSchoolUniformsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أزرق داكن');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(50);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-school-uniforms',
    name: 'أزياء مدرسية فاخرة',
    price: 'من 249 ريال سعودي',
    basePrice: "249",
    rating: 4.8,
    reviews: 156,
    description: 'أزياء مدرسية عالية الجودة مصممة خصيصًا للمؤسسات التعليمية السعودية، تجمع بين المتانة والراحة والملاءمة الثقافية.',
    longDescription: 'تم تصميم أزياءنا المدرسية الفاخرة مع مراعاة الاحتياجات الخاصة للمؤسسات التعليمية في المملكة العربية السعودية. يجمع كل زي بين المتانة الاستثنائية للطلاب النشطين وميزات الراحة التي تجعلها مناسبة للارتداء اليومي طوال العام الدراسي. تحترم التصميمات القيم الثقافية السعودية مع تقديم أسلوب عصري يخلق شعورًا بالانتماء والفخر. تتوفر بتكوينات مختلفة لمستويات المدارس المختلفة والمواسم المختلفة، وتتميز أزياؤنا بأقمشة مقاومة للبقع وسهلة العناية تتحمل الغسيل المتكرر مع الحفاظ على مظهرها.',
    features: [
      'مزيج من البولي قطن عالي الكثافة (65/35) لمتانة طويلة الأمد',
      'تقنية مقاومة البقع والتجاعيد في الأقمشة',
      'خياطة مقواة في نقاط الضغط',
      'قماش خفيف وقابل للتنفس مناسب للمناخ السعودي',
      'مقاومة للبهتان حتى بعد الغسيل المتكرر',
      'تصميم محتشم وفقًا للمتطلبات الثقافية',
      'ميزات قابلة للتعديل لاستيعاب نمو الطلاب'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر، 35% قطن' },
      { name: 'الوزن', value: 'وزن متوسط (180-200 جم/م²)' },
      { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، تجفيف منخفض' },
      { name: 'المقاسات المتوفرة', value: 'من عمر 4-18 سنة (نطاقات متعددة)' },
      { name: 'الألوان', value: 'أزرق داكن، أبيض، أزرق فاتح، أسود، بيج' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'التخصيص', value: 'شعارات المدارس، تطريز الأسماء، ألوان مخصصة' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'طلاب سعوديون يرتدون أزياء مدرسية فاخرة في الفصل الدراسي' },
      { src: '/images/default-placeholder.jpg', alt: 'معلم وطلاب في زي المدرسة' },
      { src: '/images/default-placeholder.jpg', alt: 'مجموعة من الطلاب السعوديين في أزياء موحدة' },
      { src: '/images/default-placeholder.jpg', alt: 'طالبة سعودية في زي مدرسي فاخر' }
    ],
    category: 'أزياء تعليمية',
    categorySlug: 'education-uniforms',
    inStock: true,
    minOrder: 50,
    leadTime: '21-30 يوم',
    customization: true,
    variants: [
      { name: 'مجموعة المرحلة الابتدائية (بنين)', price: '249 ريال سعودي' },
      { name: 'مجموعة المرحلة الابتدائية (بنات)', price: '249 ريال سعودي' },
      { name: 'مجموعة المرحلة المتوسطة (بنين)', price: '279 ريال سعودي' },
      { name: 'مجموعة المرحلة المتوسطة (بنات)', price: '279 ريال سعودي' },
      { name: 'مجموعة المرحلة الثانوية (بنين)', price: '299 ريال سعودي' },
      { name: 'مجموعة المرحلة الثانوية (بنات)', price: '299 ريال سعودي' }
    ],
    colors: [
      { name: 'أزرق داكن', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'أبيض', value: '#ffffff', image: '/images/default-placeholder.jpg' },
      { name: 'أزرق فاتح', value: '#add8e6', image: '/images/default-placeholder.jpg' },
      { name: 'أسود', value: '#222222', image: '/images/default-placeholder.jpg' },
      { name: 'بيج', value: '#f5f5dc', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['4-5', '6-7', '8-9', '10-11', '12-13', '14-15', '16-18'],
    sizeEquivalents: {
      '4-5': 'عمر 4-5 سنوات (XXS)',
      '6-7': 'عمر 6-7 سنوات (XS)',
      '8-9': 'عمر 8-9 سنوات (S)',
      '10-11': 'عمر 10-11 سنة (M)',
      '12-13': 'عمر 12-13 سنة (L)',
      '14-15': 'عمر 14-15 سنة (XL)',
      '16-18': 'عمر 16-18 سنة (XXL)'
    },
    testimonials: [
      {
        quote: "لقد غيرت أزياء 'يونيوم' المدرسية مظهر مؤسستنا بشكل كامل. الجودة متميزة، وقد حافظت على مظهرها حتى بعد عام دراسي كامل من الارتداء اليومي. طلابنا وأولياء الأمور راضون للغاية.",
        author: "د. عبدالله السيد",
        position: "مدير المدرسة",
        company: "مدرسة المنار العالمية",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "العمل مع 'يونيوم' سهّل علينا إدارة برنامج الزي الموحد بشكل كبير. أقمشتهم تتحمل نمط الحياة النشط لطلابنا، ونجح فريق التصميم لديهم في دمج قيمنا التقليدية مع احتياجات التعليم المعاصرة.",
        author: "فاطمة العتيبي",
        position: "المدير الإداري",
        company: "أكاديمية الرياض الحديثة",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
    { label: 'أزياء مدرسية فاخرة', href: '#' }
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
        price: product.basePrice,
        quantity: quantity,
        image: product.images[0].src,
        color: selectedColor,
        size: selectedSize
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
              <p className="text-neutral-700 text-right">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900 text-right">أنواع الزي</h3>
              <div className="mt-2 space-y-2">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="flex justify-between items-center p-3 border border-neutral-200 rounded-md">
                    <span className="text-primary-600">{variant.price}</span>
                    <span className="font-medium">{variant.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900 text-right">الألوان</h3>
              <div className="mt-2 flex flex-wrap gap-2 justify-end">
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
                <button 
                  type="button" 
                  className="text-primary-600 text-sm"
                  onClick={() => setShowSizeChart(true)}
                >
                  جدول المقاسات
                </button>
                <h3 className="text-sm font-medium text-neutral-900">المقاس</h3>
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
              <h3 className="text-sm font-medium text-neutral-900 text-right">الكمية (الحد الأدنى: {product.minOrder})</h3>
              <div className="mt-2 flex items-center justify-end">
                <span className="ml-2 text-neutral-500">قطعة</span>
                <input
                  type="number"
                  min={product.minOrder}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-neutral-300 rounded-md px-3 py-2 w-20 text-center"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-neutral-500 mb-2 text-right">مدة التوصيل: {product.leadTime}</p>
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
              <p className="text-neutral-700 text-right">{product.longDescription}</p>
              <h3 className="font-semibold text-lg mt-6 mb-3 text-right">الميزات الرئيسية</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start justify-end">
                    <span className="text-right">{feature}</span>
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-right">المواصفات</h3>
              <div className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 py-2 border-b border-neutral-200">
                    <span className="text-neutral-700 text-right">{spec.value}</span>
                    <span className="font-medium text-neutral-900 text-right">{spec.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Educational Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز التعليمي</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4 text-right">
              تم تصميم أزياءنا المدرسية الفاخرة لتعزيز التجربة التعليمية من خلال تزويد الطلاب بملابس مريحة وعملية تعزز الشعور بالانتماء والفخر. تم تصميم كل جانب من جوانب أزيائنا مع وضع احتياجات المؤسسات التعليمية السعودية في الاعتبار.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">الهوية والانتماء</h4>
                <p className="text-sm text-neutral-600 text-right">أزياء تعزز هوية المدرسة وتخلق شعورًا بالمجتمع والانتماء بين الطلاب.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">المتانة العملية</h4>
                <p className="text-sm text-neutral-600 text-right">مصممة لأنماط الحياة النشطة للطلاب مع تركيب مقوى في نقاط التوتر وأقمشة سهلة العناية.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">الحساسية الثقافية</h4>
                <p className="text-sm text-neutral-600 text-right">تم تصميمها بعناية لتكريم القيم الثقافية السعودية مع توفير ملابس تعليمية مريحة ومعاصرة.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* School Customization Section */}
        <div className="mt-16">
          <SectionHeading>برنامج تخصيص الزي المدرسي</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/default-placeholder.jpg" 
                  alt="طلاب سعوديون في أزياء مدرسية مخصصة" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4 text-right">
                نقدم خيارات تخصيص شاملة للمؤسسات التعليمية من جميع المستويات. من دمج هوية مدرستك من خلال الشعارات والألوان إلى تطوير أنظمة زي كاملة لمستويات الصفوف المختلفة، يعمل فريق التصميم لدينا بشكل وثيق مع الإداريين لإنشاء حلول زي موحد تعكس رؤية مؤسستك.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">هوية المدرسة</h4>
                  <p className="text-sm text-right">تطريز مخصص، شارات منسوجة، ومخططات ألوان تدمج علامتك التجارية وتقاليد مدرستك.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">تمييز المستوى الدراسي</h4>
                  <p className="text-sm text-right">ترميز الألوان، وتنويعات الأسلوب، وأنظمة الاكسسوارات للتمييز بين المستويات الدراسية والإنجازات الأكاديمية.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">التكيف الموسمي</h4>
                  <p className="text-sm text-right">أزياء صيفية وشتوية مصممة لظروف المناخ في المملكة العربية السعودية على مدار العام الدراسي.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">نظام زي موحد كامل</h4>
                  <p className="text-sm text-right">ملابس يومية منسقة، وملابس للتربية البدنية، وأزياء للمناسبات الخاصة لهوية مدرسية كاملة.</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب تخصيص المدرسة</Button>
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
                  <button onClick={() => setShowSizeChart(false)} className="text-neutral-500 hover:text-neutral-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-xl font-semibold">جدول مقاسات الزي المدرسي</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-100">
                      <tr>
                        <th className="p-2 text-right">المقاس</th>
                        <th className="p-2 text-right">العمر</th>
                        <th className="p-2 text-right">الطول (سم)</th>
                        <th className="p-2 text-right">محيط الصدر (سم)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4-5</td>
                        <td className="p-2">4-5 سنوات</td>
                        <td className="p-2">104-110</td>
                        <td className="p-2">58-61</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">6-7</td>
                        <td className="p-2">6-7 سنوات</td>
                        <td className="p-2">116-122</td>
                        <td className="p-2">63-65</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">8-9</td>
                        <td className="p-2">8-9 سنوات</td>
                        <td className="p-2">128-134</td>
                        <td className="p-2">67-70</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">10-11</td>
                        <td className="p-2">10-11 سنة</td>
                        <td className="p-2">140-146</td>
                        <td className="p-2">73-77</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">12-13</td>
                        <td className="p-2">12-13 سنة</td>
                        <td className="p-2">152-158</td>
                        <td className="p-2">82-85</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">14-15</td>
                        <td className="p-2">14-15 سنة</td>
                        <td className="p-2">164-170</td>
                        <td className="p-2">88-92</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">16-18</td>
                        <td className="p-2">16-18 سنة</td>
                        <td className="p-2">174-180</td>
                        <td className="p-2">96-102</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500 text-right">
                    ملاحظة: هذه القياسات هي إرشادات عامة. للحصول على أفضل مقاس، نوصي بخدمة قياس المدرسة للحصول على مقاسات دقيقة لجميع الطلاب. كما نقدم ميزات قابلة للتعديل لاستيعاب النمو على مدار العام الدراسي.
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