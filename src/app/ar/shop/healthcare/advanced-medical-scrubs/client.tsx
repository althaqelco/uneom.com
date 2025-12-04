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
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function AdvancedMedicalScrubsClientPage() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أزرق ملكي');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'advanced-medical-scrubs',
    name: 'الأزياء الطبية المتطورة',
    price: 'من 289 ريال سعودي',
    basePrice: "289",
    rating: 4.9,
    reviews: 142,
    description: 'أزياء طبية مبتكرة وعالية الجودة مصممة خصيصاً للكوادر الصحية في المملكة العربية السعودية، مع تقنيات مضادة للميكروبات، راحة فائقة ومظهر احترافي يليق بالقطاع الطبي.',
    longDescription: 'تمثل مجموعة الأزياء الطبية المتطورة قمة الابتكار في عالم الملابس الطبية، حيث صُممت خصيصاً لتلبية متطلبات بيئة الرعاية الصحية في المملكة العربية السعودية. تجمع هذه الأزياء بين أحدث تقنيات مكافحة الميكروبات وأنسجة ذكية تطرد الرطوبة لتوفير حماية استثنائية وراحة متكاملة أثناء المناوبات الطويلة. يتميز التصميم المبتكر بمناطق تهوية استراتيجية تعزز التبريد في بيئة المستشفيات المكيفة، مع الحفاظ على المظهر الاحترافي الأنيق طوال اليوم. تخضع كل قطعة لمعايير جودة صارمة تضمن متانة استثنائية تتحمل عمليات التعقيم والغسيل المتكررة، مع الاحتفاظ بألوانها وشكلها الأصلي.',
    features: [
      'تقنية أيونات الفضة المتطورة المضادة للميكروبات تقضي على 99.9% من البكتيريا',
      'نسيج مرن رباعي الاتجاهات يوفر حرية الحركة المطلقة أثناء الإجراءات الطبية',
      'تقنية ذكية لطرد الرطوبة تبقي الكوادر الطبية منتعشة ومرتاحة طوال المناوبة',
      'مناطق تهوية شبكية استراتيجية تعزز تنظيم درجة الحرارة في المناطق الرئيسية',
      'خياطة مقواة في مناطق الضغط العالي تزيد من عمر القطعة وتحملها',
      'تقنية مقاومة البهتان والاحتفاظ باللون حتى مع التعقيم والغسيل المتكرر',
      'جيوب متخصصة متعددة مصممة بعناية لحمل الأدوات والأجهزة الطبية بشكل آمن ومريح'
    ],
    specifications: [
      { name: 'النسيج', value: '74% بوليستر، 20% رايون، 6% سباندكس مع معالجة مضادة للميكروبات' },
      { name: 'الوزن', value: 'متوسط الوزن (180-200 جم/م²)' },
      { name: 'تعليمات العناية', value: 'متوافقة مع الغسيل والتعقيم بمعايير المستشفيات' },
      { name: 'المقاسات المتوفرة', value: 'من XS إلى 4XL (قصات للرجال والنساء)' },
      { name: 'الألوان', value: '8 ألوان احترافية متوافقة مع نظام تمييز الأقسام' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'إمكانيات التخصيص', value: 'إضافة شعارات المستشفيات، تطريز الأسماء، ترميز الأقسام بالألوان' }
    ],
    images: [
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'طبيب يرتدي الأزياء الطبية المتطورة أثناء الاستشارة' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'ممرضات في الأزياء الطبية المتطورة في محطة التمريض' },
      { src: '/images/healthcare/healthcare_medical_doctor.jpg', alt: 'فريق جراحي يرتدي الأزياء الطبية المتخصصة في غرفة العمليات' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'طبيبة محجبة ترتدي الأزياء الطبية المتوافقة مع الحجاب' }
    ],
    category: 'الرعاية الصحية',
    categorySlug: 'healthcare',
    inStock: true,
    minOrder: 30,
    leadTime: '14-21 يوم',
    customization: true,
    variants: [
      { name: 'مجموعة الأزياء الطبية القياسية', price: '289 ريال سعودي' },
      { name: 'مجموعة الأزياء الجراحية المتميزة', price: '345 ريال سعودي' },
      { name: 'مجموعة الأطباء التنفيذية', price: '395 ريال سعودي' },
      { name: 'مجموعة متوافقة مع الحجاب', price: '329 ريال سعودي' },
      { name: 'أزياء طبية للحوامل', price: '339 ريال سعودي' }
    ],
    colors: [
      { name: 'أزرق ملكي', value: '#4169e1', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أخضر جراحي', value: '#2e8b57', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'نبيذي', value: '#800020', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'كحلي', value: '#000080', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أزرق سماوي', value: '#92a1cf', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أسود', value: '#000000', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'رمادي فضي', value: '#8e8e8e', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'عنابي', value: '#722f37', image: '/images/healthcare/medical_hijab_uniform.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    sizeEquivalents: {
      'XS': 'صغير جداً (0-2)',
      'S': 'صغير (4-6)',
      'M': 'متوسط (8-10)',
      'L': 'كبير (12-14)',
      'XL': 'كبير جداً (16-18)',
      '2XL': 'كبير جداً مضاعف (20-22)',
      '3XL': 'كبير جداً ثلاثي (24-26)',
      '4XL': 'كبير جداً رباعي (28-30)'
    },
    testimonials: [
      {
        quote: "حققت الأزياء الطبية المتطورة من يونيوم نقلة نوعية في تجربة كوادرنا الطبية. توفر الخصائص المضادة للميكروبات طبقة إضافية من الحماية، والراحة الفائقة أثناء المناوبات الطويلة لا مثيل لها. يحتفظ النسيج بمظهره الاحترافي حتى بعد التعقيم والغسيل المتكرر.",
        author: "د. فاطمة الزهراني",
        position: "رئيسة الطاقم الطبي",
        company: "مدينة الملك فهد الطبية",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      },
      {
        quote: "بعد توحيد الأزياء الطبية من يونيوم في جميع منشآتنا، لاحظنا تحسناً ملحوظاً في رضا الكوادر والمظهر الاحترافي. نظام ترميز الأقسام بالألوان سهّل التعرف البصري، وحظيت الميزات المخصصة للتخصصات المختلفة بتقدير كبير من الأطباء والممرضين.",
        author: "أحمد الناصر",
        position: "مدير المشتريات",
        company: "مجموعة مستشفيات السعودي الألماني",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'الرعاية الصحية', href: '/ar/shop/healthcare' },
    { label: 'الأزياء الطبية المتطورة', href: '#' }
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
        size: selectedSize,
        color: selectedColor
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

      {/* بيانات منظمة للتحسين لمحركات البحث */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "الأزياء الطبية المتطورة من يونيوم",
            "image": [
              "https://uneom.com/images/healthcare/medical_hijab_uniform.jpg",
              "https://uneom.com/images/healthcare/medical_hijab_uniform.jpg",
              "https://uneom.com/images/healthcare/healthcare_medical_doctor.jpg"
            ],
            "description": "أزياء طبية مبتكرة وعالية الجودة مصممة خصيصاً للكوادر الصحية في المملكة العربية السعودية، مع تقنيات مضادة للميكروبات، راحة فائقة ومظهر احترافي يليق بالقطاع الطبي.",
            "sku": "UNEOM-AMS-100",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/healthcare/advanced-medical-scrubs",
              "priceCurrency": "SAR",
              "price": "289",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "142"
            }
          })
        }}
      />
    
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* صور المنتج */}
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
          
          {/* تفاصيل المنتج */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl font-bold text-neutral-900 text-right">{product.name}</h1>
            <p className="text-xl font-semibold text-primary-600 mt-2 text-right">{product.price}</p>
            
            <div className="flex items-center mt-2 justify-end">
              <span className="text-neutral-600 text-sm ms-1">{product.reviews} تقييم</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-neutral-900 text-right">وصف المنتج</h2>
              <p className="mt-2 text-neutral-600 text-right">{product.longDescription}</p>
            </div>
            
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-neutral-900 text-right">اختر اللون</h2>
              <div className="mt-2 flex flex-wrap gap-2 justify-end">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-primary-600' : 'border-transparent'}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => handleColorSelect(color.name)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <button 
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                  onClick={() => setShowSizeChart(!showSizeChart)}
                >
                  جدول المقاسات
                </button>
                <h2 className="text-lg font-semibold text-neutral-900">اختر المقاس</h2>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`py-2 rounded-md border ${selectedSize === size ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-neutral-300 text-neutral-700'}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              {showSizeChart && (
                <div className="mt-4 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h3 className="font-medium text-neutral-900 mb-2 text-right">جدول المقاسات</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-neutral-500 text-sm text-right">المقاس</th>
                          <th className="px-4 py-2 text-neutral-500 text-sm text-right">الوصف</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {Object.entries(product.sizeEquivalents).map(([size, desc]) => (
                          <tr key={size}>
                            <td className="px-4 py-2 text-neutral-900 text-right">{size}</td>
                            <td className="px-4 py-2 text-neutral-700 text-right">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-neutral-900 text-right">الكمية</h2>
              <div className="mt-2 flex items-center">
                <div className="text-xs text-neutral-500 ms-3 text-right">
                  الحد الأدنى للطلب: {product.minOrder} وحدة
                </div>
                <input
                  type="number"
                  min={product.minOrder}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-24 border border-neutral-300 rounded-md px-3 py-2 text-right"
                />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <Button variant="primary" size="lg" onClick={handleAddToQuote} className="w-full">
                أضف إلى طلب عرض الأسعار
              </Button>
              <div className="text-sm text-neutral-500 text-right">
                مدة التسليم المتوقعة: {product.leadTime}
              </div>
            </div>
            
            <div className="mt-8 border-t border-neutral-200 pt-6">
              <h2 className="text-lg font-semibold text-neutral-900 text-right">المميزات</h2>
              <ul className="mt-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-right">
                    <span className="text-neutral-600 text-right">{feature}</span>
                    <svg className="h-5 w-5 text-primary-500 shrink-0 ms-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* مواصفات المنتج */}
        <div className="mt-16">
          <SectionHeading>
            المواصفات
          </SectionHeading>
          <div className="mt-8 border-t border-neutral-200 pt-6">
            <dl className="divide-y divide-neutral-200">
              {product.specifications.map((spec, index) => (
                <div key={index} className="grid grid-cols-3 py-4 text-right">
                  <dt className="text-sm font-medium text-neutral-700">{spec.name}</dt>
                  <dd className="col-span-2 text-sm text-neutral-600">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
        {/* الأنواع */}
        <div className="mt-16">
          <SectionHeading>
            الأنواع المتوفرة
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.variants.map((variant, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm text-right">
                <h3 className="text-lg font-semibold text-neutral-900">{variant.name}</h3>
                <p className="mt-2 text-primary-600">{variant.price}</p>
                <Button variant="ghost" size="sm" className="mt-4">
                  معرفة المزيد
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* الشهادات */}
        <div className="mt-16">
          <SectionHeading>
            آراء عملائنا
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                id={index + 1}
                quote={testimonial.quote}
                name={testimonial.author}
                role={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
        
        {/* التخصيص */}
        <div className="mt-16 bg-neutral-50 p-8 rounded-lg">
          <SectionHeading subtitle="خدمة تخصيص المنتجات للمؤسسات الصحية في المملكة">
            إضفاء الطابع الشخصي على الأزياء الطبية
          </SectionHeading>
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-neutral-600">
              يسعدنا في يونيوم أن نقدم خدمات تخصيص شاملة لمؤسستكم الصحية. نوفر إمكانية إضافة شعار مؤسستكم، وتخصيص الألوان حسب نظام الأقسام، وتطريز الأسماء والتخصصات، وتطويع التصميمات لتتناسب مع احتياجاتكم الخاصة. تواصلوا معنا لمعرفة كيف يمكننا تصميم حل متكامل لأزياء الرعاية الصحية في مؤسستكم.
            </p>
            <div className="mt-6">
              <Link href="/ar/contact">
                <Button variant="primary" size="lg">
                  تواصل مع فريق المؤسسات الصحية
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* منتجات مشابهة */}
        <div className="mt-16">
          <SectionHeading>
            قد يعجبك أيضاً
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                <Image 
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="روب الطبيب التنفيذي"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="mt-3 text-neutral-900 font-medium text-right">روب الطبيب التنفيذي</h3>
              <p className="text-primary-600 text-right">من 329 ريال سعودي</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                <Image 
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="مجموعة أزياء العمليات الجراحية"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="mt-3 text-neutral-900 font-medium text-right">مجموعة أزياء العمليات الجراحية</h3>
              <p className="text-primary-600 text-right">من 275 ريال سعودي</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                <Image 
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="ملابس التمريض الأساسية"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="mt-3 text-neutral-900 font-medium text-right">ملابس التمريض الأساسية</h3>
              <p className="text-primary-600 text-right">من 249 ريال سعودي</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                <Image 
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="معطف الطبيب الكلاسيكي"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="mt-3 text-neutral-900 font-medium text-right">معطف الطبيب الكلاسيكي</h3>
              <p className="text-primary-600 text-right">من 299 ريال سعودي</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
} 