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

export default function HousekeepingUniformPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أخضر تيل');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج مع محتوى محسن للسيو
  const product = {
    id: 'housekeeping-uniform',
    name: 'زي عمال النظافة الاحترافي',
    price: 'من 285 ريال سعودي',
    basePrice: "285",
    rating: 4.8,
    reviews: 94,
    description: 'أزياء عمال نظافة متينة مصممة خصيصًا لقطاع الضيافة الفاخرة في المملكة العربية السعودية، تتميز بتقنية مقاومة البقع، وتصميم مريح، وخيارات محتشمة تجمع بين العملية والمظهر الأنيق في بيئة الضيافة.',
    longDescription: 'تم تصميم أزياء عمال النظافة المهنية لدينا لتلبية المتطلبات الصارمة لطاقم النظافة في أرقى الفنادق والمنتجعات والمرافق المؤسسية في المملكة العربية السعودية. يتميز كل زي بتقنيات متقدمة مضادة للبقع ومضادة للميكروبات تحافظ على المظهر الأنيق أثناء مهام التنظيف المكثفة مع حماية الموظفين في بيئات ذات التعرض المتزايد لمواد التنظيف. توفر اللوحات المرنة الاستراتيجية والتصميم المريح حرية استثنائية في الحركة للانحناء والوصول ومهام الرفع الشائعة في أدوار التدبير المنزلي، مما يقلل من التعب أثناء المناوبات الطويلة. يوازن الزي المصمم بعناية بين الوظائف العملية والمظهر المتطور، مما يضمن أن موظفي النظافة يعكسون الصورة المصقولة المتوقعة في بيئات الضيافة الفاخرة مع وجود ميزات المنفعة اللازمة لتقديم خدمة فعالة. متوفرة بكل من التصميمات التقليدية والمعاصرة مع خيارات لتنويعات التصميم المحتشمة، تضمن أزياء التدبير المنزلي هذه الحساسية الثقافية المناسبة مع تلبية المتطلبات العملية لمهام التدبير المنزلي الصارمة.',
    features: [
      'تقنية نسيج متقدمة مقاومة للبقع مثالية لمهام التنظيف والصيانة',
      'معالجة مضادة للميكروبات تحمي الموظفين أثناء أنشطة التدبير المنزلي المكثفة',
      'تصميم مريح مع لوحات مرنة استراتيجية لحركة غير مقيدة أثناء مهام التنظيف',
      'خياطة معززة في نقاط الإجهاد العالية لمتانة استثنائية في البيئات الصعبة',
      'خيارات تصميم محتشمة مع تغطية مناسبة لمعايير الضيافة السعودية',
      'تركيبة قابلة للتنفس محسنة للمناخ للراحة أثناء واجبات التنظيف البدنية',
      'جيوب خاصة للأدوات الأساسية وإمدادات التنظيف',
      'خيارات علامات تجارية متميزة للممتلكات تحافظ على مظهر متطور'
    ],
    specifications: [
      { name: 'المادة', value: '65% بوليستر أداء، 32% قطن، 3% إيلاستين مع معالجة متقدمة مقاومة للبقع' },
      { name: 'الوزن', value: 'وزن متوسط (220-240 جم/م²) للمتانة والراحة' },
      { name: 'خيارات الأسلوب', value: 'طقم البلوزة التقليدي، طقم المنفعة العصري، مجموعة التدبير المنزلي التنفيذية، طقم مهني محتشم' },
      { name: 'المقاسات المتاحة', value: 'من XS إلى 4XL (قصات عملية للرجال والنساء)' },
      { name: 'الألوان', value: 'أخضر تيل، أزرق بحري، رمادي فحمي، نبيذي، كاكي (ألوان خاصة بالمنشأة متاحة)' },
      { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'تطريز الممتلكات، تحديد القسم، تقوية النسيج في مناطق التآكل العالية' }
    ],
    images: [
      { src: '/images/hospitality/hospitality_uniform_hotel_service.jpg', alt: 'طاقم النظافة المحترف بزي متين يحافظ على غرفة فندق فاخرة' },
      { src: '/images/hospitality/hospitality_uniform_hotel_service.jpg', alt: 'عاملة نظافة بزي محتشم مع ميزات تصميم مريحة في فندق فاخر سعودي' },
      { src: '/images/hospitality/hotel-staff-uniform.jpg', alt: 'فريق التدبير المنزلي بالفندق في أزياء مهنية منسقة للحفاظ على معايير الممتلكات' },
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'فريق النظافة السعودي في أزياء مهنية مناسبة ثقافيًا في منشأة من فئة خمس نجوم' }
    ],
    category: 'أزياء الضيافة',
    categorySlug: 'hospitality-attire',
    inStock: true,
    minOrder: 30,
    leadTime: '15-20 يوم',
    customization: true,
    variants: [
      { name: 'طقم النظافة القياسي', price: '285 ريال سعودي' },
      { name: 'مجموعة النظافة الممتازة', price: '325 ريال سعودي' },
      { name: 'زي النظافة التنفيذي', price: '345 ريال سعودي' },
      { name: 'طقم مهني محتشم', price: '305 ريال سعودي' },
      { name: 'مجموعة النظافة المرافقة', price: '295 ريال سعودي' }
    ],
    colors: [
      { name: 'أخضر تيل', value: '#008080', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg' },
      { name: 'أزرق بحري', value: '#000080', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg' },
      { name: 'رمادي فحمي', value: '#36454F', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg' },
      { name: 'نبيذي', value: '#800020', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg' },
      { name: 'كاكي', value: '#C3B091', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg' }
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
        quote: "لقد أحدثت أزياء النظافة المهنية من يونيوم ثورة في عمليات النظافة لدينا. تقنية مقاومة البقع والمتانة استثنائية - حتى بعد أشهر من الاستخدام اليومي مع المواد الكيميائية للتنظيف، فإنها تحافظ على مظهرها المهني. أدى التصميم المريح إلى تقليل ملحوظ في إرهاق الموظفين، بينما تم تبني الخيارات المحتشمة من قبل أعضاء فريقنا السعودي الذين يقدرون الاعتبار الثقافي.",
        author: "نورة العتيبي",
        position: "مشرفة النظافة التنفيذية",
        company: "فندق وأبراج الارتفاعات الفاخرة",
        image: "/images/hospitality/hotel-staff-uniform.jpg"
      },
      {
        quote: "بعد تنفيذ أزياء النظافة المهنية من يونيوم عبر سلسلة الفنادق لدينا، وثقنا تحسنًا كبيرًا في كل من الكفاءة ورضا الموظفين. تدعم الميزات العملية مثل الجيوب المعززة ولوحات التمدد الاستراتيجية معايير التنظيف الصارمة لدينا، بينما يرفع المظهر المهني صورة علامتنا التجارية. حتى مع واجبات التنظيف اليومية المكثفة، تحافظ هذه الأزياء على جودتها ومظهرها لفترة أطول بكثير من الخيارات السابقة التي جربناها.",
        author: "أحمد الزهراني",
        position: "مدير خدمات الإقامة",
        company: "مجموعة الضيافة الملكية",
        image: "/images/hospitality/hotel-staff-uniform.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' },
    { label: 'زي عمال النظافة', href: '#' }
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
    <main>
      <Container className="py-8 rtl">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* صور المنتج */}
          <div>
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
          <div>
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
              <h3 className="text-sm font-medium text-neutral-900">خيارات زي عمال النظافة</h3>
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
                <span className="mr-2 text-neutral-500">قطعة</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-neutral-500 mb-2">مدة التسليم: {product.leadTime}</p>
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
        
        {/* قسم التميز التشغيلي */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز التشغيلي</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              تم تصميم أزياء النظافة المهنية لدينا بدقة لتلبية المتطلبات الصارمة لقطاع الضيافة الفاخرة في المملكة العربية السعودية، مع اهتمام خاص بالوظائف العملية ورفاهية الموظفين والملاءمة الثقافية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">الأداء العملي</h4>
                <p className="text-sm text-neutral-600">توفر تقنية مقاومة البقع المتقدمة والحماية المضادة للميكروبات والبناء المعزز متانة ونظافة استثنائية في بيئات النظافة الصعبة، مع الحفاظ على مظهر مهني طوال مهام التنظيف المكثفة.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">راحة وسلامة الموظفين</h4>
                <p className="text-sm text-neutral-600">يقلل التصميم المريح مع لوحات التمدد الاستراتيجية من التعب أثناء مهام التنظيف الشاقة بدنيًا، بينما تعزز الأقمشة المتينة والقابلة للتنفس الراحة طوال المناوبات الطويلة في مناخ المملكة العربية السعودية.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">الاعتبار الثقافي</h4>
                <p className="text-sm text-neutral-600">تحترم الخيارات المحتشمة المصممة بعناية القيم الثقافية السعودية مع الحفاظ على الوظائف العملية الأساسية لواجبات التنظيف، مما يضمن الراحة والثقة لأعضاء الفريق المحليين.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* برنامج زي النظافة */}
        <div className="mt-16">
          <SectionHeading>برنامج التميز في النظافة</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/hospitality/hotel-staff-uniform.jpg" 
                  alt="فريق النظافة المهني في أزياء منسقة خلال الاجتماع التوجيهي للموظفين في فندق فاخر" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                نقدم برامج شاملة لأزياء النظافة لأرقى الفنادق والمنتجعات والمرافق المؤسسية في المملكة العربية السعودية. من التصميم الوظيفي إلى راحة الموظفين، يعمل فريق النظافة المتخصص لدينا مع إدارة المنشأة لتطوير أنظمة موحدة تعزز الكفاءة التشغيلية مع الحفاظ على الصورة المتطورة المتوقعة في بيئات الضيافة الفاخرة.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">الكفاءة التشغيلية</h4>
                  <p className="text-sm">عناصر وظيفية مخصصة تشمل تكوينات الجيوب المتخصصة وتعزيز المواد المتينة والإكسسوارات العملية التي تعزز إنتاجية التدبير المنزلي في بيئات الممتلكات الفاخرة.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">رفاهية الموظفين</h4>
                  <p className="text-sm">اعتبارات تصميم مريحة وأقمشة قابلة للتنفس وميزات أداء تقلل من التعب أثناء الواجبات البدنية الشاقة، مما يدعم صحة الموظفين واستبقائهم في أدوار النظافة الصعبة.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">تنسيق الأقسام</h4>
                  <p className="text-sm">أنظمة زي منسقة تتكامل بصريًا مع الأقسام الأخرى في المنشأة مع الحفاظ على الميزات العملية اللازمة لواجبات النظافة، مما يخلق مظهر متماسك للمنشأة.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">تكامل العلامة التجارية</h4>
                  <p className="text-sm">ملابس نظافة متطورة تعكس العلامة التجارية للممتلكات من خلال عناصر تصميم دقيقة وتنسيق الألوان وتطبيق الشعار المتميز، مما يرفع من تصور موظفي النظافة.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب استشارة حول زي النظافة</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* شهادات العملاء */}
        <div className="mt-16">
          <SectionHeading>شهادات العملاء</SectionHeading>
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
        
        {/* نافذة جدول المقاسات */}
        {showSizeChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto rtl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">جدول مقاسات زي عمال النظافة</h3>
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
                  <p className="text-sm text-neutral-500">
                    ملاحظة: هذه القياسات هي إرشادات عامة. بالنسبة لأزياء فريق النظافة، 
                    نوصي بخدمة القياس المهنية لدينا لضمان ملاءمة دقيقة ومريحة 
                    تستوعب الحركات البدنية المطلوبة في واجبات النظافة. 
                    تتوفر خيارات تحديد المقاسات المخصصة والتعديلات المريحة لفريق النظافة لديك.
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