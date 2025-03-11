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

export default function AdvancedMedicalScrubsPageArabic() {
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
      { src: '/images/doctor-consultation-wearing-scrubs-SBI-300174204.jpg', alt: 'طبيب يرتدي الأزياء الطبية المتطورة أثناء الاستشارة' },
      { src: '/images/nurses-at-hospital-wearing-scrubs-SBI-301282375.jpg', alt: 'ممرضات في الأزياء الطبية المتطورة في محطة التمريض' },
      { src: '/images/surgical-team-operating-theater-SBI-301726744.jpg', alt: 'فريق جراحي يرتدي الأزياء الطبية المتخصصة في غرفة العمليات' },
      { src: '/images/hijab-doctor-stethoscope-hospital-SBI-301837244.jpg', alt: 'طبيبة محجبة ترتدي الأزياء الطبية المتوافقة مع الحجاب' }
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
      { name: 'أزرق ملكي', value: '#4169e1', image: '/images/fabrics/royal-blue-scrubs.jpg' },
      { name: 'أخضر جراحي', value: '#2e8b57', image: '/images/fabrics/surgical-green-scrubs.jpg' },
      { name: 'نبيذي', value: '#800020', image: '/images/fabrics/burgundy-scrubs.jpg' },
      { name: 'كحلي', value: '#000080', image: '/images/fabrics/navy-scrubs.jpg' },
      { name: 'أزرق سماوي', value: '#92a1cf', image: '/images/fabrics/ceil-blue-scrubs.jpg' },
      { name: 'أسود', value: '#000000', image: '/images/fabrics/black-scrubs.jpg' },
      { name: 'رمادي فضي', value: '#8e8e8e', image: '/images/fabrics/pewter-scrubs.jpg' },
      { name: 'عنابي', value: '#722f37', image: '/images/fabrics/wine-scrubs.jpg' }
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
        image: "/images/testimonials/dr-fatima.jpg"
      },
      {
        quote: "بعد توحيد الأزياء الطبية من يونيوم في جميع منشآتنا، لاحظنا تحسناً ملحوظاً في رضا الكوادر والمظهر الاحترافي. نظام ترميز الأقسام بالألوان سهّل التعرف البصري، وحظيت الميزات المخصصة للتخصصات المختلفة بتقدير كبير من الأطباء والممرضين.",
        author: "أحمد الناصر",
        position: "مدير المشتريات",
        company: "مجموعة مستشفيات السعودي الألماني",
        image: "/images/testimonials/ahmad-n.jpg"
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
              <div className="flex items-center">
                <span className="text-neutral-600 mr-2">{product.rating} ({product.reviews} تقييم)</span>
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
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-neutral-700 text-right">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900 text-right">أنواع المجموعات الطبية</h3>
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
        
        {/* وصف المنتج */}
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
        
        {/* قسم التميز الطبي */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز في الرعاية الصحية</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4 text-right">
              صُممت الأزياء الطبية المتطورة لتلبية المتطلبات الصارمة لبيئات الرعاية الصحية في المملكة العربية السعودية، مع اهتمام خاص بمكافحة العدوى، والمظهر الاحترافي، والراحة الفائقة أثناء المناوبات الطويلة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">مكافحة العدوى المتقدمة</h4>
                <p className="text-sm text-neutral-600 text-right">تقنية مضادة للميكروبات متطورة منسوجة في النسيج توفر حماية مستمرة ضد الكائنات الدقيقة المسببة للأمراض، حتى بعد دورات التعقيم والغسيل المتكررة.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">الراحة الاحترافية</h4>
                <p className="text-sm text-neutral-600 text-right">نسيج مرن رباعي الاتجاهات ومناطق تهوية استراتيجية لتعزيز الحركة والراحة أثناء المناوبات الطويلة في بيئات المستشفيات المكيفة والمعقمة.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">التكيف مع الثقافة المحلية</h4>
                <p className="text-sm text-neutral-600 text-right">خيارات مصممة بعناية تحترم متطلبات الثقافة السعودية، بما في ذلك مجموعات متوافقة مع الحجاب وتصاميم محتشمة تناسب جميع المتخصصين في الرعاية الصحية.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* قسم التخصيص الطبي */}
        <div className="mt-16">
          <SectionHeading>برنامج تخصيص الأزياء الطبية</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/doctor-and-nurse-consultation-SBI-300912540.jpg" 
                  alt="متخصصو الرعاية الصحية في أزياء طبية مخصصة" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4 text-right">
                نقدم حلول تخصيص شاملة لمؤسسات الرعاية الصحية في جميع أنحاء المملكة العربية السعودية. من إضافة هوية المستشفى إلى أنظمة ترميز الأقسام بالألوان، يعمل فريقنا المتخصص في القطاع الطبي بشكل وثيق مع إدارة المستشفيات لتطوير برامج أزياء موحدة تعزز الاحترافية والكفاءة الوظيفية.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">هوية المؤسسة الطبية</h4>
                  <p className="text-sm text-right">تطبيق دقيق للشعارات، ومجموعات ألوان مخصصة، وعناصر هوية متناسقة عبر جميع مستويات الكوادر والأقسام.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">تمييز الأقسام الطبية</h4>
                  <p className="text-sm text-right">أنظمة ترميز الألوان للتعرف السريع على الأقسام المختلفة، مع تطبيق متناسق عبر جميع المرافق والفروع.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">تعديلات للتخصصات</h4>
                  <p className="text-sm text-right">جيوب متخصصة، حوامل أدوات، وتعديلات وظيفية تناسب التخصصات الطبية المختلفة من الجراحة إلى طب الأطفال.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">أنظمة التسلسل الهرمي</h4>
                  <p className="text-sm text-right">عناصر تمييز بصرية بين الإداريين والممرضين والأطباء وفرق الدعم من خلال تفاصيل تصميم متناسقة ومدروسة.</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب استشارة طبية متخصصة</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* آراء العملاء */}
        <div className="mt-16">
          <SectionHeading>آراء المؤسسات الطبية</SectionHeading>
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
        
        {/* جدول المقاسات */}
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
                  <h3 className="text-xl font-semibold">جدول مقاسات الأزياء الطبية</h3>
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
                        <td className="p-2">82-87</td>
                        <td className="p-2">63-67</td>
                        <td className="p-2">89-93</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">88-93</td>
                        <td className="p-2">68-72</td>
                        <td className="p-2">94-98</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">94-99</td>
                        <td className="p-2">73-77</td>
                        <td className="p-2">99-103</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">100-105</td>
                        <td className="p-2">78-82</td>
                        <td className="p-2">104-108</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">106-111</td>
                        <td className="p-2">83-88</td>
                        <td className="p-2">109-114</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">112-117</td>
                        <td className="p-2">89-94</td>
                        <td className="p-2">115-120</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">118-123</td>
                        <td className="p-2">95-100</td>
                        <td className="p-2">121-126</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">124-129</td>
                        <td className="p-2">101-106</td>
                        <td className="p-2">127-132</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500 text-right">
                    ملاحظة: هذه القياسات هي دليل عام فقط. لضمان الملاءمة المثالية، نوفر خدمة قياس احترافية 
                    للمؤسسات الطبية. كما نقدم خدمات تفصيل للمقاسات غير القياسية لضمان حصول جميع الكوادر الطبية 
                    على أزياء تناسبهم بشكل مثالي.
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