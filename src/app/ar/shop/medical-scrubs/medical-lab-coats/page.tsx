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

export default function MedicalLabCoatsPageArabic() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أبيض');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(25);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'medical-lab-coats',
    name: 'معاطف المختبرات الطبية الفاخرة',
    price: 'من 295 ريال سعودي',
    basePrice: "295",
    rating: 4.8,
    reviews: 87,
    description: 'معاطف طبية احترافية مصممة خصيصاً للمتخصصين في الرعاية الصحية في المملكة العربية السعودية، مع حماية مضادة للميكروبات، وراحة معززة، وخيارات تخصيص لتلبية متطلبات المنشآت الطبية.',
    longDescription: 'صُممت معاطف المختبرات الطبية الفاخرة لدينا بدقة متناهية لتلبية المعايير الصارمة للمرافق الصحية في جميع أنحاء المملكة. تتميز كل معطف بتقنية نسيج متقدمة مضادة للميكروبات تمنع نمو البكتيريا، مما يوفر حماية أساسية في البيئات السريرية. تجمع القصة المصممة بين المظهر المهني والتصميم الوظيفي، مع توفير وضع استراتيجي للجيوب لحمل الأدوات الطبية والأغراض الشخصية. وبفضل خصائص طرد الاتساخ المعززة، تحافظ هذه المعاطف على مظهرها النقي حتى مع الغسيل المتكرر. متوفرة بتصاميم للجنسين وقصات خاصة بكل جنس مع خيارات للتصاميم المحتشمة التي تتوافق مع التفضيلات الثقافية، توفر معاطفنا الطبية المزيج المثالي من المهنية والحماية والراحة لمقدمي الرعاية الصحية السعوديين.',
    features: [
      'تقنية نسيج متقدمة مضادة للميكروبات تمنع نمو البكتيريا',
      'تشطيب مقاوم للبقع يضمن سهولة إزالة الاتساخات عند الغسيل',
      'نسيج مقاوم للتجعد يحافظ على المظهر الاحترافي طوال اليوم',
      'قماش قابل للتنفس مُحسّن ليناسب المناخ السعودي',
      'درزات وخياطة معززة في نقاط الضغط لمتانة طويلة الأمد',
      'قصة مُصممة مع توزيع استراتيجي للجيوب لحمل الأدوات السريرية',
      'متوفرة بتصاميم محتشمة مع ميزات قابلة للتعديل',
      'إمكانية التخصيص بتطريز الأسماء والمؤهلات وشعارات المنشأة'
    ],
    specifications: [
      { name: 'النسيج', value: '65% بوليستر، 35% قطن مع معالجة مضادة للميكروبات' },
      { name: 'الوزن', value: 'وزن متوسط (200-230 جم/م²)' },
      { name: 'خيارات الطول', value: 'قصير (76 سم)، قياسي (97 سم)، طويل (107 سم)' },
      { name: 'المقاسات المتوفرة', value: 'من XS إلى 5XL (قصات للرجال والنساء)' },
      { name: 'الألوان', value: 'أبيض، أزرق فاتح، كحلي، أسود، رمادي (ألوان خاصة متوفرة حسب طلب المنشأة)' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'خيارات التخصيص', value: 'شعارات المستشفيات، تطريز الأسماء/المؤهلات، ترميز الأقسام بالألوان' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'طبيب يرتدي معطف مختبر أبيض فاخر مع سماعة طبية' },
      { src: '/images/default-placeholder.jpg', alt: 'طبيبة ترتدي معطف مختبر احترافي في بيئة مستشفى' },
      { src: '/images/default-placeholder.jpg', alt: 'متخصصون طبيون يرتدون معاطف مختبر أثناء استشارة' },
      { src: '/images/default-placeholder.jpg', alt: 'متخصص رعاية صحية سعودي في معطف مختبر مصمم خصيصاً' }
    ],
    category: 'الأزياء الطبية',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 25,
    leadTime: '10-15 يوم',
    customization: true,
    variants: [
      { name: 'معطف مختبر قياسي', price: '295 ريال سعودي' },
      { name: 'معطف مختبر تنفيذي', price: '345 ريال سعودي' },
      { name: 'معطف مختبر للطلاب', price: '265 ريال سعودي' },
      { name: 'معطف استشارات', price: '325 ريال سعودي' },
      { name: 'تصميم معزز للاحتشام', price: '315 ريال سعودي' }
    ],
    colors: [
      { name: 'أبيض', value: '#FFFFFF', image: '/images/default-placeholder.jpg' },
      { name: 'أزرق فاتح', value: '#ADD8E6', image: '/images/default-placeholder.jpg' },
      { name: 'كحلي', value: '#000080', image: '/images/default-placeholder.jpg' },
      { name: 'أسود', value: '#000000', image: '/images/default-placeholder.jpg' },
      { name: 'رمادي', value: '#808080', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    sizeEquivalents: {
      'XS': 'صغير جداً (0-2)',
      'S': 'صغير (4-6)',
      'M': 'متوسط (8-10)',
      'L': 'كبير (12-14)',
      'XL': 'كبير جداً (16-18)',
      '2XL': 'كبير جداً مضاعف (20-22)',
      '3XL': 'كبير جداً ثلاثي (24-26)',
      '4XL': 'كبير جداً رباعي (28-30)',
      '5XL': 'كبير جداً خماسي (32-34)'
    },
    testimonials: [
      {
        quote: "جودة معاطف المختبر من يونيوم تتفوق بشكل كبير على ما استخدمناه سابقاً. توفر الحماية المضادة للميكروبات الثقة لكوادرنا، خاصة في الأقسام عالية الخطورة. ساهم تخصيص التطريز بشعار مؤسستنا وبيانات الكوادر في خلق مظهر مهني أكثر تماسكاً عبر جميع منشآتنا.",
        author: "د. عبدالله القحطاني",
        position: "المدير الطبي",
        company: "مدينة الملك فهد الطبية",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "بعد التحول إلى معاطف المختبر الفاخرة من يونيوم، تلقينا العديد من الإشادات من المرضى حول المظهر المهني لكوادرنا. كانت خيارات التصميم المحتشم ذات قيمة خاصة لطبيباتنا، كما أن المتانة مع الغسيل المتكرر جعلت هذه المعاطف خياراً فعالاً من حيث التكلفة لشبكة مستشفياتنا.",
        author: "د. سمر الزامل",
        position: "رئيسة الكادر الطبي",
        company: "مجموعة المستشفى السعودي الألماني",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'الأزياء الطبية', href: '/ar/shop/medical-scrubs' },
    { label: 'معاطف المختبرات الطبية', href: '#' }
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
              <h3 className="text-sm font-medium text-neutral-900 text-right">أنواع المعاطف الطبية</h3>
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
        
        {/* قسم التميز السريري */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>التميز السريري</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4 text-right">
              صُممت معاطف المختبرات الطبية الفاخرة لدينا لتلبية المعايير المهنية المتوقعة في بيئات الرعاية الصحية السعودية، مع اهتمام خاص بمكافحة العدوى، والمظهر المهني، والوظائف العملية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">مكافحة العدوى</h4>
                <p className="text-sm text-neutral-600 text-right">تقنية متقدمة مضادة للميكروبات مدمجة في النسيج توفر حماية مستمرة ضد مسببات الأمراض، بينما تضمن خصائص طرد الاتساخ إزالة الملوثات تماماً عند الغسيل.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">الصورة المهنية</h4>
                <p className="text-sm text-neutral-600 text-right">قصة مصممة بعناية ونسيج مقاوم للتجعد يحافظان على مظهر أنيق وموثوق به طوال أيام العمل السريري المرهقة، مما يعزز ثقة المرضى وسمعة المنشأة.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-right">التصميم العملي</h4>
                <p className="text-sm text-neutral-600 text-right">توزيع استراتيجي للجيوب يستوعب الأدوات الطبية والأجهزة الشخصية والمواد المرجعية، مع بنية متينة تتحمل متطلبات البيئات السريرية.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* قسم التخصيص */}
        <div className="mt-16">
          <SectionHeading>برنامج تخصيص معاطف المختبرات الطبية</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/default-placeholder.jpg" 
                  alt="متخصصون طبيون في معاطف مختبر مخصصة" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700 mb-4 text-right">
                نوفر حلول تخصيص شاملة للمرافق الصحية في جميع أنحاء المملكة العربية السعودية. من الهوية المؤسسية إلى تصاميم خاصة بالأقسام، يعمل فريقنا المتخصص مع القيادات الطبية لتطوير برامج معاطف مختبر تعزز الهوية المهنية وتلبي المتطلبات الخاصة بالمنشأة.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">هوية المؤسسة</h4>
                  <p className="text-sm text-right">تطبيق دقيق للشعارات، وتطريز الأسماء والمؤهلات، وعناصر تصميم متناسقة تعزز هوية المؤسسة والاحترافية.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">ترميز الأقسام</h4>
                  <p className="text-sm text-right">لمسات لونية وخيارات زخرفة تميز بصرياً بين التخصصات والأقسام الطبية، مما يحسن تنقل المرضى وتنظيم المرفق.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">تعديلات سريرية</h4>
                  <p className="text-sm text-right">تصاميم معدلة لبيئات سريرية محددة، بما في ذلك جيوب متخصصة لأقسام الجراحة، ووحدات الأمراض المعدية، ومختبرات الأبحاث.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2 text-right">التسلسل الهرمي المهني</h4>
                  <p className="text-sm text-right">تمييز بصري بين طلاب الطب، والأطباء المقيمين، وأطباء الاستشاريين، وقيادات الأقسام من خلال اختلافات تصميم دقيقة وخيارات تشطيب فاخرة.</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <Link href="/ar/contact">
                  <Button variant="primary">طلب استشارة لمعاطف المختبرات</Button>
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
                  <h3 className="text-xl font-semibold">جدول مقاسات معاطف المختبرات الطبية</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-100">
                      <tr>
                        <th className="p-2 text-right">المقاس</th>
                        <th className="p-2 text-right">الصدر (سم)</th>
                        <th className="p-2 text-right">الكتف (سم)</th>
                        <th className="p-2 text-right">الطول (سم)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XS</td>
                        <td className="p-2">94-98</td>
                        <td className="p-2">42-43</td>
                        <td className="p-2">90-92</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">99-103</td>
                        <td className="p-2">44-45</td>
                        <td className="p-2">93-95</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">104-108</td>
                        <td className="p-2">46-47</td>
                        <td className="p-2">96-98</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">109-113</td>
                        <td className="p-2">48-49</td>
                        <td className="p-2">99-101</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">114-118</td>
                        <td className="p-2">50-51</td>
                        <td className="p-2">102-104</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">119-123</td>
                        <td className="p-2">52-53</td>
                        <td className="p-2">105-107</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">124-128</td>
                        <td className="p-2">54-55</td>
                        <td className="p-2">108-110</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">129-133</td>
                        <td className="p-2">56-57</td>
                        <td className="p-2">111-113</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">5XL</td>
                        <td className="p-2">134-138</td>
                        <td className="p-2">58-59</td>
                        <td className="p-2">114-116</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500 text-right">
                    ملاحظة: هذه القياسات هي إرشادات عامة. للحصول على المقاس الأكثر ملاءمة، نوصي بخدمة القياس المهنية
                    للمؤسسات الصحية. خيارات المقاسات والأطوال المخصصة متوفرة لتناسب متطلبات جميع الكوادر الطبية.
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