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

export default function PremiumSurgicalGownsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أخضر جراحي');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-surgical-gowns',
    name: 'العباءات الجراحية الفاخرة',
    price: 'من ٣٤٩ ريال',
    basePrice: 349,
    rating: 4.9,
    reviews: 142,
    description: 'عباءات جراحية عالية الأداء مصممة للراحة والحماية والتعقيم في بيئات العمليات.',
    longDescription: 'صممت العباءات الجراحية الفاخرة لدينا خصيصًا لبيئات الجراحة الأكثر تطلبًا في المملكة العربية السعودية. مصنوعة من نسيج متعدد الطبقات متخصص يوفر مقاومة استثنائية للسوائل مع الحفاظ على قابلية التنفس، توفر هذه العباءات حماية فائقة للجراحين وطاقم الجراحة أثناء الإجراءات الطويلة. يضمن التصميم المريح نطاقًا كاملًا من الحركة، بينما توفر الدرزات المقواة والمناطق الحرجة حماية إضافية حيث تشتد الحاجة إليها.',
    features: [
      'مقاومة للسوائل من المستوى الرابع AAMI لأقصى حماية',
      'تقنية نسيج متعدد الطبقات قابل للتنفس لمنع ارتفاع الحرارة',
      'صدر وأكمام مقواة لمناطق الحماية الحرجة',
      'درزات ملحومة بالموجات فوق الصوتية لتعزيز حاجز السوائل',
      'أساور مرنة مريحة مع حلقات للإبهام لتغطية آمنة',
      'تصميم ملتف ممتد لتغطية كاملة للظهر',
      'متوفرة خيارات معقمة ومعبأة بشكل فردي'
    ],
    specifications: [
      { name: 'المواد', value: 'بولي بروبيلين SMS مع طلاء مقاوم للسوائل' },
      { name: 'الوزن', value: 'خفيف الوزن (٤٥ جم/م²)' },
      { name: 'المطابقة', value: 'المستوى الرابع AAMI PB70، معتمد ISO 13485' },
      { name: 'المقاسات المتوفرة', value: 'S، M، L، XL، XXL' },
      { name: 'الألوان', value: 'أخضر جراحي، أزرق ملكي، كحلي' },
      { name: 'التعقيم', value: 'متوفرة بخيارات معقمة وغير معقمة' },
      { name: 'التعبئة', value: 'عبوات فردية أو خيارات بالجملة متوفرة' }
    ],
    images: [
      { src: '/images/healthcare/healthcare_medical_doctor.jpg', alt: 'فريق جراحي يرتدي عباءات فاخرة' },
      { src: '/images/healthcare/dept-laboratory.jpg', alt: 'جراحون في عباءات فاخرة أثناء العملية' },
      { src: '/images/healthcare/dept-laboratory.jpg', alt: 'لقطة مقربة لقماش العباءة الجراحية الفاخرة وتفاصيلها' },
      { src: '/images/healthcare/dept-laboratory.jpg', alt: 'أخصائي رعاية صحية في ملابس جراحية فاخرة' }
    ],
    category: 'ملابس الرعاية الصحية',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 10,
    leadTime: '٧-١٠ أيام',
    customization: true,
    variants: [
      { name: 'عباءة جراحية قياسية', price: '٣٤٩ ريال' },
      { name: 'عباءة جراحية مقواة', price: '٣٩٩ ريال' },
      { name: 'عباءة معبأة معقمة', price: '٤٢٩ ريال' },
      { name: 'عباءة بشعار المستشفى المخصص', price: '٤٦٩ ريال' }
    ],
    colors: [
      { name: 'أخضر جراحي', value: '#2d8659', image: '/images/healthcare/dept-laboratory.jpg' },
      { name: 'أزرق ملكي', value: '#1e4d8c', image: '/images/healthcare/dept-laboratory.jpg' },
      { name: 'كحلي', value: '#0a1e3c', image: '/images/healthcare/dept-laboratory.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizeEquivalents: {
      'S': 'صغير (الطول: ١٦٠-١٧٠سم)',
      'M': 'متوسط (الطول: ١٧٠-١٨٠سم)',
      'L': 'كبير (الطول: ١٨٠-١٨٥سم)',
      'XL': 'كبير جدًا (الطول: ١٨٥-١٩٠سم)',
      'XXL': 'كبير جدًا جدًا (الطول: ١٩٠-٢٠٠سم)'
    },
    testimonials: [
      {
        quote: "لقد استخدمنا العباءات الجراحية الفاخرة من UNEOM لأكثر من عام الآن، والاختلاف في الجودة ملحوظ. يقدر جراحونا بشكل خاص الراحة المحسنة أثناء الإجراءات الطويلة.",
        author: "د. محمد الحربي",
        position: "رئيس قسم الجراحة",
        company: "مستشفى الملك فيصل التخصصي",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      },
      {
        quote: "مستوى الحماية الذي توفره هذه العباءات استثنائي. توفر المناطق المقواة راحة بال إضافية، ويظل القماش قابلاً للتنفس حتى أثناء الإجراءات الأكثر كثافة.",
        author: "د. سارة القحطاني",
        position: "رئيسة التمريض الجراحي",
        company: "المستشفى السعودي الألماني",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'الملابس الطبية', href: '/ar/shop/medical-scrubs' },
    { label: 'العباءات الجراحية الفاخرة', href: '#' }
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
              <h3 className="text-sm font-medium text-neutral-900">أنواع العباءات</h3>
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
              <div className="mt-2 grid grid-cols-5 gap-2">
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
        
        {/* Hospital Compliance Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>الامتثال للمستشفيات والشهادات</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              تلبي عباءاتنا الجراحية الفاخرة أعلى المعايير لبيئات الرعاية الصحية في المملكة العربية السعودية وتتوافق مع
              اللوائح الطبية الدولية. تخضع كل عباءة لاختبارات صارمة لمقاومة السوائل، وحماية الحاجز،
              والمتانة لضمان الأداء المتسق في بيئات الجراحة الحرجة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">المستوى الرابع AAMI PB70</h4>
                <p className="text-sm text-neutral-600">أعلى مستوى من حماية حاجز السوائل والميكروبات للمناطق الحرجة، وفقًا للمعايير الدولية.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">معتمد ISO 13485</h4>
                <p className="text-sm text-neutral-600">مصنعة تحت نظام إدارة الجودة المصمم خصيصًا للأجهزة الطبية والخدمات ذات الصلة.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">معتمد من الهيئة العامة للغذاء والدواء</h4>
                <p className="text-sm text-neutral-600">متوافق مع متطلبات الهيئة العامة للغذاء والدواء السعودية للمنسوجات الطبية والمعدات الجراحية.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/ar/resources/compliance-guide">
                <Button variant="secondary">تحميل وثائق الامتثال</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Customization Section */}
        <div className="mt-16">
          <SectionHeading>خيارات التخصيص للمستشفيات</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/healthcare/healthcare_medical_doctor.jpg" 
                alt="عباءات جراحية مخصصة لفرق المستشفيات" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4">
                نقدم خيارات تخصيص واسعة للمستشفيات والمرافق الطبية. من الترميز اللوني حسب
                القسم إلى تطريز شعار المستشفى، يمكن تصميم عباءاتنا الجراحية لتلبية متطلباتك المحددة.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">العلامة التجارية للمستشفى</h4>
                  <p className="text-sm">تطريز الشعار المخصص أو طباعة مختومة بالحرارة لتعريف المستشفى.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">الترميز اللوني للأقسام</h4>
                  <p className="text-sm">ألوان خاصة أو لمسات لونية لتحديد الأقسام المحددة أو أدوار الموظفين.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">مقاسات متخصصة</h4>
                  <p className="text-sm">خيارات مقاسات مخصصة متاحة للمتطلبات غير القياسية.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">برامج المستشفيات بالجملة</h4>
                  <p className="text-sm">خصومات على الكميات وحلول إدارة المخزون للمستشفيات.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب تخصيص للمستشفى</Button>
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
                  <h3 className="text-xl font-semibold">جدول مقاسات العباءة الجراحية</h3>
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
                        <th className="p-2 text-right">القياس</th>
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
                    ملاحظة: المقاسات تقريبية وقد تختلف قليلاً حسب النمط. للحصول على أفضل النتائج، نوصي بتجربة العباءات لضمان المقاس المناسب.
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