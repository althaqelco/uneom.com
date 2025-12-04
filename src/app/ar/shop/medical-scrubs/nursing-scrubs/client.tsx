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

export default function NursingScrubsClientPage() {
  const locale = 'ar';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('أزرق سماوي');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // تفاصيل المنتج
  const product = {
    id: 'nursing-scrubs',
    name: 'أزياء التمريض الفاخرة',
    price: 'من 245 ريال سعودي',
    basePrice: "245",
    rating: 4.9,
    reviews: 128,
    description: 'أزياء تمريض فاخرة مصممة خصيصاً للممرضين والممرضات في المملكة العربية السعودية، مع ميزات راحة متطورة، حماية مضادة للميكروبات، وتصاميم محتشمة تحترم الخصوصية الثقافية.',
    longDescription: 'صُممت أزياء التمريض الفاخرة لدينا بخبرة عالية لتلبية المتطلبات الفريدة لكوادر التمريض في بيئات الرعاية الصحية السعودية. تجمع كل قطعة بين تقنية مضادة للميكروبات متقدمة وميزات راحة استثنائية تدعم العمل المكثف لطاقم التمريض خلال المناوبات الطويلة. يوفر مزيج النسيج المبتكر متانة استثنائية مع الحفاظ على المظهر الاحترافي طوال أيام العمل المرهقة. تم تصميمها بعناية مع مراعاة الحساسيات الثقافية السعودية، وتشمل هذه الأزياء خيارات محتشمة مع ميزات قابلة للتعديل، مما يضمن الراحة التامة والثقة لجميع كوادر التمريض. كما توفر الجيوب المُوزعة استراتيجياً والأقسام المتخصصة مساحة تخزين فعالة للأدوات والأجهزة التمريضية الأساسية، مما يعزز سير العمل والإنتاجية.',
    features: [
      'تقنية مضادة للميكروبات متطورة تقضي على 99.9% من البكتيريا',
      'نسيج مرن رباعي الاتجاهات للحركة الحرة أثناء رعاية المرضى',
      'تقنية طاردة للرطوبة تحافظ على انتعاش الكوادر خلال المناوبات الطويلة',
      'مناطق تهوية شبكية استراتيجية لتعزيز التنفس',
      'خياطة مقواة في نقاط الضغط لإطالة عمر القطعة',
      'ألوان مقاومة للبهتان تحافظ على حيويتها رغم الغسيل المتكرر في المستشفى',
      'جيوب متخصصة متعددة مصممة لأدوات وأجهزة التمريض'
    ],
    specifications: [
      { name: 'النسيج', value: '72% بوليستر، 21% رايون، 7% سباندكس مع معالجة مضادة للميكروبات' },
      { name: 'الوزن', value: 'وزن متوسط (175-195 جم/م²)' },
      { name: 'تعليمات العناية', value: 'متوافقة مع الغسيل بمعايير المستشفيات' },
      { name: 'المقاسات المتوفرة', value: 'من XS إلى 4XL (قصات للرجال والنساء)' },
      { name: 'الألوان', value: '10 ألوان احترافية (متوافقة مع نظام تمييز الأقسام)' },
      { name: 'بلد الصنع', value: 'المملكة العربية السعودية' },
      { name: 'إمكانيات التخصيص', value: 'إضافة شعارات المستشفيات، تطريز الأسماء، ترميز الأقسام بالألوان' }
    ],
    images: [
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'كوادر التمريض ترتدي أزياء فاخرة في محطة المستشفى' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'ممرضة وطبيب في أزياء طبية فاخرة أثناء الاستشارة' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'ممرضة ترتدي أزياء مريحة تتحقق من سجل المريض' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'ممرضة محجبة ترتدي أزياء تمريض متوافقة مع الثقافة المحلية' }
    ],
    category: 'الأزياء الطبية',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 30,
    leadTime: '14-21 يوم',
    customization: true,
    variants: [
      { name: 'مجموعة أزياء التمريض القياسية', price: '245 ريال سعودي' },
      { name: 'مجموعة التمريض الفاخرة', price: '295 ريال سعودي' },
      { name: 'مجموعة معززة للاحتشام', price: '275 ريال سعودي' },
      { name: 'مجموعة متوافقة مع الحجاب', price: '285 ريال سعودي' },
      { name: 'أزياء تمريض للحوامل', price: '305 ريال سعودي' }
    ],
    colors: [
      { name: 'أزرق سماوي', value: '#92a1cf', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'كحلي', value: '#000080', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أزرق كاريبي', value: '#0086cb', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'عنابي', value: '#722f37', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'رمادي فضي', value: '#8e8e8e', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أخضر غامق', value: '#355e3b', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أزرق ملكي', value: '#4169e1', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'أسود', value: '#000000', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'باذنجاني', value: '#614051', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'وردي', value: '#e8909c', image: '/images/healthcare/medical_hijab_uniform.jpg' }
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
        quote: "غيّرت أزياء التمريض من يونيوم تجربة كوادرنا اليومية بشكل كامل. الخصائص المضادة للميكروبات توفر حماية أساسية، والراحة خلال مناوباتنا التي تستمر 12 ساعة لا مثيل لها. خيارات التصميم المحتشم نالت تقديراً خاصاً من فريق التمريض المتنوع لدينا.",
        author: "نورة المنصور",
        position: "رئيسة التمريض",
        company: "مدينة الملك سلمان الطبية",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      },
      {
        quote: "بعد توحيد أزياء التمريض من يونيوم عبر شبكة مستشفياتنا، شهدنا تحسينات كبيرة في رضا الكوادر والمظهر الاحترافي. نظام ترميز الأقسام بالألوان سهّل التفاعل مع المرضى، والمتانة رغم الغسيل المستمر أمر استثنائي.",
        author: "د. فيصل الجهني",
        position: "المدير التنفيذي للتمريض",
        company: "المجموعة الوطنية للرعاية الصحية",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'الأزياء الطبية', href: '/ar/shop/medical-scrubs' },
    { label: 'أزياء التمريض', href: '#' }
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

      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "أزياء التمريض الفاخرة من يونيوم",
            "image": [
              "https://uneom.com/images/products/nursing-scrubs.webp",
              "https://uneom.com/images/products/nursing-scrubs-alt1.webp",
              "https://uneom.com/images/products/nursing-scrubs-alt2.webp"
            ],
            "description": "أزياء تمريض فاخرة مصممة خصيصاً للممرضين والممرضات في المملكة العربية السعودية، مع ميزات راحة متطورة، حماية مضادة للميكروبات، وتصاميم محتشمة تحترم الخصوصية الثقافية.",
            "sku": "UNEOM-NS-2023",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://uneom.com/ar/shop/medical-scrubs/nursing-scrubs",
              "priceCurrency": "SAR",
              "lowPrice": "245",
              "highPrice": "305",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "128"
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
              <h3 className="text-sm font-medium text-neutral-900 text-right">أنواع مجموعات التمريض</h3>
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
                  onClick={() => setShowSizeChart(!showSizeChart)}
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
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              {showSizeChart && (
                <div className="mt-4 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h4 className="font-medium mb-2 text-right">جدول المقاسات</h4>
                  <div className="space-y-1">
                    {Object.entries(product.sizeEquivalents).map(([size, desc]) => (
                      <div key={size} className="flex justify-between text-sm">
                        <span>{desc}</span>
                        <span className="font-medium">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900 text-right">الكمية (الحد الأدنى: {product.minOrder})</h3>
              <div className="mt-2 flex flex-wrap items-center justify-end gap-4">
                <div className="flex">
                  <button
                    type="button"
                    className="px-3 py-1 border border-neutral-300 rounded-r bg-neutral-100"
                    onClick={() => quantity > product.minOrder && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min={product.minOrder}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 border-t border-b border-neutral-300 py-1 text-center"
                  />
                  <button
                    type="button"
                    className="px-3 py-1 border border-neutral-300 rounded-l bg-neutral-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                onClick={handleAddToQuote}
              >
                أضف إلى طلب عرض الأسعار
              </Button>
              
              <div className="flex items-center justify-between border-t border-b border-neutral-200 py-4">
                <span className="text-neutral-700">مدة التسليم المتوقعة:</span>
                <span className="font-medium">{product.leadTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* مواصفات المنتج */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <nav className="-mb-px flex space-x-8 rtl:space-x-reverse">
              <a href="#" className="border-primary-600 text-primary-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                وصف المنتج
              </a>
            </nav>
          </div>
          
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4 text-right">تفاصيل الأزياء الطبية</h2>
            <p className="mb-6 text-neutral-700 text-right">{product.longDescription}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-3 text-right">المزايا الرئيسية</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-right">
                      <span className="text-neutral-700">{feature}</span>
                      <svg className="w-5 h-5 text-primary-600 ms-2 rtl:ml-0 rtl:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-right">المواصفات</h3>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex flex-col py-2 border-b border-neutral-200 last:border-0">
                      <span className="font-medium text-right">{spec.name}</span>
                      <span className="text-neutral-600 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* الشهادات والآراء */}
        <div className="mt-16">
          <SectionHeading centered>ماذا يقول عملاؤنا</SectionHeading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                id={index}
                quote={testimonial.quote}
                name={testimonial.author}
                role={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى ملابس طبية لمؤسستك الصحية؟</h2>
          <p className="text-lg text-neutral-700 mb-6 max-w-3xl mx-auto">
            متخصصونا جاهزون لمساعدتك في اختيار الأزياء الطبية المناسبة لمؤسستك الصحية في المملكة العربية السعودية، مع خيارات تخصيص كاملة والتسليم في جميع أنحاء المملكة.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              href="/ar/contact?category=medical" 
            >
              تواصل مع فريق الأزياء الطبية
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/ar/shop/medical-scrubs" 
            >
              استعرض جميع الأزياء الطبية
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
} 