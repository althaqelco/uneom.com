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

export default function SurgicalScrubsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أخضر جراحي');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'surgical-scrubs',
    name: 'الأزياء الجراحية المتقدمة',
    price: 'من 275 ريال سعودي',
    basePrice: "275",
    rating: 4.8,
    reviews: 92,
    description: 'أزياء جراحية عالية الأداء مصممة خصيصاً لبيئات غرف العمليات في المنشآت الصحية السعودية، تتميز بتقنية متقدمة مقاومة للسوائل، وراحة استثنائية، ومبادئ تصميم معقمة.',
    longDescription: 'صُممت الأزياء الجراحية المتقدمة لدينا للظروف المتطلبة في غرف العمليات بالمنشآت الصحية السعودية. يتضمن كل طقم تقنية متطورة مقاومة للسوائل توفر حماية أساسية أثناء الإجراءات الجراحية، مع الحفاظ على قابلية التنفس للراحة المستمرة. تضمن الخياطة المقواة في مناطق الضغط العالي المتانة خلال دورات التعقيم المتكررة، بينما تستوعب تكوينات الجيوب المتخصصة الأدوات الجراحية دون المساس بمبادئ المجال المعقم. توفر المعالجة المضادة للميكروبات طبقة إضافية من الحماية في البيئات الحرجة، مما يثبط نمو البكتيريا. متوفرة بتصاميم تقليدية وعصرية مع خيارات لعناصر تصميم محتشمة تحترم التفضيلات الثقافية السعودية، تجمع هذه الأزياء الجراحية بين الأداء التقني والاحتياجات العملية للمتخصصين الجراحيين.',
    features: [
      'تقنية نسيج متقدمة مقاومة للسوائل مخصصة للبيئات الجراحية',
      'معالجة مضادة للميكروبات تحافظ على فعاليتها خلال التعقيم',
      'تقوية متخصصة في خياطة المناطق عالية الضغط وزوايا الجيوب',
      'مناطق تهوية استراتيجية للراحة خلال الإجراءات الطويلة',
      'تكوينات جيوب متخصصة تقلل من تساقط الجزيئات',
      'نسيج منخفض التوبير لتقليل مخاطر التلوث في البيئات المعقمة',
      'مصممة للراحة خلال الإجراءات الجراحية الطويلة',
      'متوفرة بتصاميم محتشمة مع ميزات قابلة للتعديل'
    ],
    specifications: [
      { name: 'النسيج', value: '65% بوليستر، 35% قطن مع معالجة مقاومة للسوائل ومضادة للميكروبات' },
      { name: 'الوزن', value: 'وزن متوسط (180-200 جم/م²)' },
      { name: 'تعليمات العناية', value: 'متوافقة مع التعقيم الصناعي' },
      { name: 'المقاسات المتوفرة', value: 'من XS إلى 4XL (قصات للرجال والنساء)' },
      { name: 'الألوان', value: 'أخضر جراحي، أزرق كاريبي، أزرق سماوي، كحلي، أزرق ملكي' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'شعارات المستشفيات، تحديد الأقسام، تطريز أسماء الجراحين' }
    ],
    images: [
      { src: '/images/surgical-team-operating-room-SBI-300143928.jpg', alt: 'فريق جراحي يرتدي أزياء متقدمة في غرفة العمليات' },
      { src: '/images/surgeon-nurse-surgical-scrubs-SBI-300817645.jpg', alt: 'جراح وممرض بملابس جراحية عالية الأداء يستعدان للإجراء' },
      { src: '/images/surgical-scrubs-team-hospital-SBI-301556128.jpg', alt: 'متخصصون طبيون في أزياء جراحية متطابقة خلال العملية' },
      { src: '/images/saudi-surgeon-scrubs-hospital-SBI-301287456.jpg', alt: 'جراح سعودي في أزياء جراحية متخصصة مع فريقه' }
    ],
    category: 'الأزياء الطبية',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 30,
    leadTime: '14-21 يوم',
    customization: true,
    variants: [
      { name: 'طقم أزياء جراحية قياسي', price: '275 ريال سعودي' },
      { name: 'طقم جراحي فاخر', price: '325 ريال سعودي' },
      { name: 'طقم معقم معزز', price: '345 ريال سعودي' },
      { name: 'طقم تفضيلات الجراحين', price: '295 ريال سعودي' },
      { name: 'طقم جراحي بتصميم محتشم', price: '285 ريال سعودي' }
    ],
    colors: [
      { name: 'أخضر جراحي', value: '#5cb85c', image: '/images/fabrics/surgical-green-scrubs.jpg' },
      { name: 'أزرق كاريبي', value: '#0086cb', image: '/images/fabrics/caribbean-blue-scrubs.jpg' },
      { name: 'أزرق سماوي', value: '#92a1cf', image: '/images/fabrics/ceil-blue-scrubs.jpg' },
      { name: 'كحلي', value: '#000080', image: '/images/fabrics/navy-scrubs.jpg' },
      { name: 'أزرق ملكي', value: '#4169e1', image: '/images/fabrics/royal-blue-scrubs.jpg' }
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
        quote: "كان أداء الأزياء الجراحية من يونيوم في غرف عملياتنا استثنائياً. توفر التقنية المقاومة للسوائل حماية حاسمة أثناء الإجراءات، وقد حظيت الراحة أثناء العمليات الجراحية الطويلة بإشادة جماعية من طاقمنا الجراحي. تحافظ جودة النسيج على سلامتها حتى بعد مئات دورات التعقيم الصناعي.",
        author: "د. خالد العنزي",
        position: "رئيس قسم الجراحة",
        company: "مستشفى الملك فيصل التخصصي",
        image: "/images/testimonials/khalid-a.jpg"
      },
      {
        quote: "بعد توحيد الأزياء الجراحية من يونيوم عبر شبكة منشآت العمليات لدينا، وثّقنا تحسناً ملموساً في راحة الطاقم خلال الإجراءات الطويلة. كانت خيارات التصميم المحتشم ذات قيمة خاصة للجراحات لدينا، ويساعد التطريز المخصص في الحفاظ على تحديد واضح في البيئات الجراحية.",
        author: "د. ليلى العريني",
        position: "مديرة قسم الجراحة",
        company: "مجموعة مستشفيات السعودي الألماني",
        image: "/images/testimonials/layla-o.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'الأزياء الطبية', href: '/ar/shop/medical-scrubs' },
    { label: 'الأزياء الجراحية', href: '#' }
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
        price: product.basePrice.toString(),
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
              <h3 className="text-sm font-medium text-neutral-900 text-right">خيارات الطقم الجراحي</h3>
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
        
        {/* قسم التميز الجراحي */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز الجراحي</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4 text-right">
              صُممت الأزياء الجراحية المتقدمة لدينا لتلبية المتطلبات الدقيقة للبيئات الجراحية في المنشآت الصحية السعودية، مع اهتمام خاص بمبادئ التعقيم، وراحة الفريق الجراحي، والمعايير المؤسسية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">حماية البيئة المعقمة</h4>
                <p className="text-sm text-neutral-600 text-right">نسيج منخفض التوبير ومقاوم للسوائل مع تقنية مضادة للميكروبات مدمجة يقلل مخاطر التلوث مع توفير حماية أساسية أثناء الإجراءات الجراحية.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">راحة الفريق الجراحي</h4>
                <p className="text-sm text-neutral-600 text-right">مناطق تهوية موضوعة استراتيجياً، ونسيج مرن رباعي الاتجاهات، وتصاميم مريحة تعزز الحركة والراحة خلال الإجراءات الجراحية الطويلة، مما يقلل التعب ويدعم الأداء الأمثل.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">الامتثال المؤسسي</h4>
                <p className="text-sm text-neutral-600 text-right">ميزات قابلة للتخصيص تشمل علامات المنشأة التجارية، والترميز اللوني لتحديد الأقسام، وتكوينات الجيوب المتخصصة التي تتوافق مع البروتوكولات المؤسسية للملابس الجراحية.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* برنامج الأزياء الجراحية */}
        <div className="mt-16">
          <SectionHeading>برنامج الأزياء الجراحية</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/surgical-team-preparing-operation-SBI-300177455.jpg" 
                  alt="فريق جراحي في أزياء موحدة يستعد للعملية" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4 text-right">
                نوفر برامج أزياء جراحية شاملة للمنشآت الصحية في جميع أنحاء المملكة العربية السعودية. من معايير التعقيم إلى تحديد الفريق الجراحي، يعمل فريقنا المتخصص مع أقسام الجراحة لتطوير بروتوكولات أزياء موحدة تعزز سلامة الإجراءات وكفاءتها.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">تحديد الفريق</h4>
                  <p className="text-sm text-right">أنظمة ترميز الألوان والتطريز المخصص التي تحدد بوضوح أدوار الفريق الجراحي، والتخصصات، والأقسام، مما يحسن التواصل وتنسيق الإجراءات.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">بروتوكولات التعقيم</h4>
                  <p className="text-sm text-right">اختيار المواد وميزات التصميم التي تتوافق مع معايير التعقيم الدولية والمؤسسية، مع الاهتمام بتساقط الجزيئات، ومقاومة السوائل، وخصائص مضادة للميكروبات.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">تعديلات التخصصات</h4>
                  <p className="text-sm text-right">تنويعات تصميم متخصصة للتخصصات الجراحية الفرعية، بما في ذلك جراحة العظام، وجراحة القلب والصدر، وجراحة الأعصاب، مع الاهتمام بالمتطلبات التشغيلية المحددة لكل تخصص.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">الاعتبارات الثقافية</h4>
                  <p className="text-sm text-right">خيارات مصممة بعناية تحترم الحساسيات الثقافية السعودية مع الحفاظ على الالتزام الصارم بالمعايير الجراحية، بما في ذلك عناصر التصميم المحتشم والتعديلات الخاصة بالجنسين.</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب استشارة للأزياء الجراحية</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* آراء العملاء */}
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
                  <h3 className="text-xl font-semibold">جدول مقاسات الأزياء الجراحية</h3>
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
                    ملاحظة: هذه القياسات هي إرشادات عامة. للبيئات الجراحية، 
                    نوصي بخدمة القياس المهنية لدينا للمؤسسات الصحية 
                    لضمان الملاءمة المناسبة والراحة خلال الإجراءات الطويلة. المقاسات 
                    المخصصة متاحة لتلبية متطلبات الطاقم الجراحي الفردية.
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