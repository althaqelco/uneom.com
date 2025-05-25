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

export default function ExecutiveMedicalUniformsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('كحلي');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(20);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'executive-medical-uniforms',
    name: 'الأزياء الطبية التنفيذية',
    price: 'من 395 ريال سعودي',
    basePrice: "395",
    rating: 4.9,
    reviews: 76,
    description: 'أزياء طبية تنفيذية فاخرة مصممة خصيصاً لقيادات الرعاية الصحية في المملكة العربية السعودية، تتميز بأناقة التصميم، وجودة الأقمشة الممتازة، والتفاصيل المميزة التي تعبر عن السلطة والمهنية في البيئات السريرية.',
    longDescription: 'تم تصميم الأزياء الطبية التنفيذية لدينا بعناية فائقة للقيادات الصحية والإداريين المتخصصين الذين يحتاجون إلى مظهر متميز مع الحفاظ على الوظائف السريرية. تتميز كل قطعة بأقمشة فاخرة ذات متانة معززة، وحماية مضادة للميكروبات، وراحة فائقة لليوم الإداري الطويل. توفر القصة المصممة والتصميم الأنيق إحساساً بالسلطة والمهنية، بينما تعزز التفاصيل المدروسة مثل الجيوب المقواة، والحجرات المتخصصة للأجهزة الرقمية، والتهوية الاستراتيجية الوظائف اليومية. متوفرة بقصات تقليدية وعصرية مع خيارات تصميم محتشمة تعكس التفضيلات الثقافية السعودية، تؤسس هذه الأزياء التنفيذية تسلسلاً هرمياً بصرياً واضحاً مع الحفاظ على هوية متماسكة عبر منشأتك الصحية.',
    features: [
      'مزيج قماش ممتاز مع حماية معززة مضادة للميكروبات',
      'خياطة متميزة وتصميم أنيق يعبر عن القيادة',
      'متانة معززة للارتداء المهني اليومي',
      'بناء قابل للتنفس مُحسّن ليناسب المناخ السعودي',
      'توزيع استراتيجي للجيوب للأدوات الطبية والإدارية',
      'متوفرة بتصاميم تقليدية ومعاصرة',
      'خيارات تصميم محتشمة متوافقة مع التفضيلات الثقافية السعودية',
      'إمكانية التخصيص بتطريز الأسماء والمؤهلات وشعارات المنشأة'
    ],
    specifications: [
      { name: 'النسيج', value: '78% بوليستر، 20% قطن، 2% سباندكس مع معالجة مضادة للميكروبات' },
      { name: 'الوزن', value: 'وزن متوسط-ثقيل (220-250 جم/م²)' },
      { name: 'خيارات التصميم', value: 'معطف تنفيذي، طقم رسمي، طقم قيادي' },
      { name: 'المقاسات المتوفرة', value: 'من XS إلى 4XL (قصات للرجال والنساء)' },
      { name: 'الألوان', value: 'كحلي، أسود، عنابي، رمادي فحمي، أزرق ملكي (ألوان مخصصة متوفرة)' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'شعارات المؤسسات، تطريز الأسماء/المؤهلات، علامات القيادة' }
    ],
    images: [
      { src: '/images/product-placeholder.jpg', alt: 'قيادي في الرعاية الصحية يرتدي زي طبي تنفيذي كحلي فاخر' },
      { src: '/images/product-placeholder.jpg', alt: 'قيادية في الرعاية الصحية بزي طبي تنفيذي احترافي' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'إداريون طبيون في أزياء تنفيذية خلال اجتماع قيادي' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'مدير طبي سعودي في زي تنفيذي مصمم مع فريقه' }
    ],
    category: 'الأزياء الطبية',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 20,
    leadTime: '14-21 يوم',
    customization: true,
    variants: [
      { name: 'معطف الطبيب التنفيذي', price: '395 ريال سعودي' },
      { name: 'طقم إداري', price: '425 ريال سعودي' },
      { name: 'مجموعة القيادة الطبية', price: '445 ريال سعودي' },
      { name: 'معطف مختبر المدير', price: '415 ريال سعودي' },
      { name: 'زي رئيس القسم', price: '465 ريال سعودي' }
    ],
    colors: [
      { name: 'كحلي', value: '#000080', image: '/images/product-placeholder.jpg' },
      { name: 'أسود', value: '#000000', image: '/images/product-placeholder.jpg' },
      { name: 'عنابي', value: '#800020', image: '/images/product-placeholder.jpg' },
      { name: 'رمادي فحمي', value: '#36454F', image: '/images/product-placeholder.jpg' },
      { name: 'أزرق ملكي', value: '#4169E1', image: '/images/product-placeholder.jpg' }
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
        quote: "جودة وتميز الأزياء الطبية التنفيذية من يونيوم رفعت بشكل ملحوظ من الصورة المهنية لفريق القيادة لدينا. يوازن التصميم الأنيق مع الميزات العملية بشكل مثالي بين متطلباتنا الإدارية والسريرية. ساهم التطريز المخصص بشعار مستشفانا ومؤشرات القيادة في خلق تسلسل هرمي بصري واضح داخل مؤسستنا.",
        author: "د. محمد الحربي",
        position: "الرئيس التنفيذي للمستشفى",
        company: "مركز المملكة الطبي المتقدم",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "بعد تطبيق برنامج الأزياء الطبية التنفيذية من يونيوم لفريقنا الإداري، لاحظنا تحسناً في ثقة المرضى وتماسك الكوادر. حظيت خيارات التصميم المحتشم بتقدير خاص من قبل القيادات النسائية لدينا، وتضمن الجودة الممتازة احتفاظ هذه الأزياء بمظهرها المميز رغم بيئة الرعاية الصحية المتطلبة.",
        author: "د. هناء الرشيد",
        position: "المديرة الطبية",
        company: "المجمع الطبي الدولي",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'الأزياء الطبية', href: '/ar/shop/medical-scrubs' },
    { label: 'الأزياء الطبية التنفيذية', href: '#' }
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
      <Container className="py-8">
        <h1 className="sr-only">الأزياء الطبية التنفيذية المتميزة للقيادات الصحية | أزياء طبية فاخرة للإدارة الطبية | يونيوم</h1>
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
              <h3 className="text-sm font-medium text-neutral-900 text-right">خيارات الأزياء التنفيذية</h3>
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
        
        {/* قسم التميز القيادي */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز القيادي</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4 text-right">
              صُممت الأزياء الطبية التنفيذية لدينا لتمييز قادة الرعاية الصحية مع الحفاظ على المعايير المهنية المتوقعة في بيئات الرعاية الصحية السعودية، مع اهتمام خاص بإظهار السلطة، والوظائف التشغيلية، والملاءمة الثقافية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">السلطة المهنية</h4>
                <p className="text-sm text-neutral-600 text-right">الخياطة المتميزة، والمواد الفاخرة، ومؤشرات المكانة الدقيقة تخلق حضوراً ذا سلطة طبيعية يعزز التعرف على القيادة وثقة المرضى في البيئات السريرية.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">الوظائف التنفيذية</h4>
                <p className="text-sm text-neutral-600 text-right">تكوينات الجيوب المتخصصة، واستيعاب الأجهزة، وتخزين الأدوات الإدارية تجتمع مع الوظائف السريرية لدعم المتطلبات التشغيلية المزدوجة لأدوار القيادة في الرعاية الصحية.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">المواءمة الثقافية</h4>
                <p className="text-sm text-neutral-600 text-right">خيارات مصممة بعناية تحترم التوقعات الثقافية السعودية، بما في ذلك القصات المحتشمة والعناصر التقليدية التي تحافظ على الملاءمة الثقافية مع إظهار المكانة المهنية.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* قسم قيادة الرعاية الصحية */}
        <div className="mt-16">
          <SectionHeading>برنامج قيادة الرعاية الصحية</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/avatar-placeholder.jpg" 
                  alt="فريق قيادة الرعاية الصحية في أزياء طبية تنفيذية" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4 text-right">
                نوفر برامج أزياء قيادية شاملة لمؤسسات الرعاية الصحية في جميع أنحاء المملكة العربية السعودية. من التمييز الإداري إلى وضوح التسلسل الهرمي، يعمل فريقنا المتخصص مع المديرين التنفيذيين للمستشفيات لتطوير أنظمة أزياء تعزز الهيكل التنظيمي مع الحفاظ على هوية المؤسسة.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">وضوح التسلسل الهرمي</h4>
                  <p className="text-sm text-right">تمييز بصري واضح بين رؤساء الأقسام، والمديرين الطبيين، والقيادة التنفيذية من خلال عناصر تصميم مدروسة تشير إلى مستويات السلطة وتحسّن التنقل التنظيمي.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">التمييز الإداري</h4>
                  <p className="text-sm text-right">تصميم أنيق يفصل بصرياً بين القيادة الإدارية والسريرية مع الحفاظ على هوية تنظيمية متماسكة من خلال عناصر تصميم منسقة ومؤشرات العلامة التجارية.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">العلامة التجارية المؤسسية</h4>
                  <p className="text-sm text-right">التطريز المخصص، وتطبيقات الألوان، واختيارات المواد التي تعزز هوية المؤسسة عبر مستويات القيادة مع الحفاظ على الرصانة المهنية المتوقعة من المديرين التنفيذيين للرعاية الصحية.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">الوظائف المزدوجة</h4>
                  <p className="text-sm text-right">تصاميم هجينة تستوعب كلاً من المسؤوليات الإدارية والمشاركة السريرية، مع ميزات مدروسة تدعم المتطلبات التشغيلية المتنوعة للقيادة.</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب استشارة للأزياء التنفيذية</Button>
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
                  <h3 className="text-xl font-semibold">جدول مقاسات الأزياء الطبية التنفيذية</h3>
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
                        <td className="p-2">88-93</td>
                        <td className="p-2">70-75</td>
                        <td className="p-2">94-99</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">94-99</td>
                        <td className="p-2">76-81</td>
                        <td className="p-2">100-105</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">100-105</td>
                        <td className="p-2">82-87</td>
                        <td className="p-2">106-111</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">106-111</td>
                        <td className="p-2">88-93</td>
                        <td className="p-2">112-117</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">112-117</td>
                        <td className="p-2">94-99</td>
                        <td className="p-2">118-123</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">118-123</td>
                        <td className="p-2">100-105</td>
                        <td className="p-2">124-129</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">124-129</td>
                        <td className="p-2">106-111</td>
                        <td className="p-2">130-135</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">130-135</td>
                        <td className="p-2">112-117</td>
                        <td className="p-2">136-141</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500 text-right">
                    ملاحظة: هذه القياسات هي إرشادات عامة. بالنسبة للأزياء الطبية التنفيذية، 
                    نوصي بشدة بخدمة القياس المهنية لدينا لضمان مظهر دقيق ومصمم 
                    بشكل مناسب لأدوار القيادة. تتوفر خيارات تفصيل مخصصة 
                    لاستيعاب التفضيلات والمتطلبات الفردية.
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