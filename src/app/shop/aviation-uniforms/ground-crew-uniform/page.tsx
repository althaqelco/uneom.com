'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useRouter } from 'next/navigation';

type LocaleContent = {
  title: string;
  description: string;
  longDescription: string;
  breadcrumbs: {
    name: string;
    url: string;
    current?: boolean;
  }[];
  features: string[];
  specifications: {
    name: string;
    value: string;
  }[];
  variants: {
    name: string;
    price: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  sizeChart: string;
  colors: string;
  quantity: string;
  minOrder: string;
  addToQuote: string;
  viewSimilar: string;
  features_title: string;
  specifications_title: string;
  relatedProducts: string;
}

type ContentType = {
  en: LocaleContent;
  ar: LocaleContent;
  [key: string]: LocaleContent;
}

export default function GroundCrewUniformPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('High Visibility Yellow');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(15);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Toggle language
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };
  
  // Multilingual content
  const content: ContentType = {
    en: {
      title: 'Ground Crew Uniform',
      description: 'High-performance ground crew uniforms designed for Saudi Arabian aviation environments, combining safety, functionality, and professional appearance for airside operations personnel.',
      longDescription: 'Our Ground Crew Uniforms are engineered specifically for the demanding conditions of Saudi Arabian airport airside operations. These specialized uniforms feature high-visibility elements, durable construction, and climate-adaptive materials to keep ground personnel safe, comfortable, and professional in all conditions. The reinforced stitching and abrasion-resistant panels ensure longevity in high-activity environments, while the strategic reflective elements enhance visibility during both day and night operations. Each uniform includes practical features such as specialized tool pockets, communication device attachments, and ID badge holders designed specifically for airport ground operations. Available in Saudi aviation authority-compliant designs with options for customization with airline branding and departmental identification.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Aviation Uniforms', url: '/shop/aviation-uniforms' },
        { name: 'Ground Crew Uniform', url: '#', current: true }
      ],
      features: [
        'High-visibility elements compliant with international aviation safety standards',
        'Durable, abrasion-resistant fabric designed for airside operational environments',
        'Climate-adaptive materials engineered for Saudi Arabia\'s temperature conditions',
        'Reinforced construction at high-stress points for extended operational life',
        'Specialized pockets and attachments for ground operations equipment',
        'Reflective elements for enhanced visibility during night operations',
        'Moisture-wicking technology for comfort during physical activities',
        'Available in Saudi aviation authority-compliant designs'
      ],
      specifications: [
        { name: 'Material', value: '65% Polyester, 35% Cotton with abrasion-resistant treatment' },
        { name: 'Weight', value: 'Medium-heavy weight (240-260 gsm) for durability' },
        { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s cuts)' },
        { name: 'Colors', value: 'High Visibility Yellow, Safety Orange, Navy Blue, Black' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Industrial laundry compatible, reflective elements require special care' },
        { name: 'Customization Options', value: 'Airline logo embroidery, department identification, name badges' }
      ],
      variants: [
        { name: 'Standard Ground Operations Uniform', price: 'SAR 520' },
        { name: 'Ramp Service Personnel Set', price: 'SAR 580' },
        { name: 'Aircraft Servicing Crew Attire', price: 'SAR 620' },
        { name: 'Baggage Handling Team Uniform', price: 'SAR 550' }
      ],
      testimonial: {
        quote: "The Ground Crew Uniforms from UNEOM have significantly improved our airside operations efficiency. The durable construction withstands the demands of daily ground handling duties, while the high-visibility elements have enhanced our safety protocols. Our team particularly appreciates the climate-adaptive fabric, which keeps them comfortable despite Saudi Arabia's challenging temperature conditions. The specialized pocket configurations have also proven invaluable for keeping essential tools accessible.",
        author: "Fahad Al-Sulaiman",
        position: "Ground Operations Manager",
        company: "Saudi Aviation Services"
      },
      sizeChart: "Size Chart",
      colors: "Colors",
      quantity: "Quantity",
      minOrder: "Minimum order",
      addToQuote: "Add to Quote",
      viewSimilar: "View Similar Products",
      features_title: "Key Features",
      specifications_title: "Specifications",
      relatedProducts: "Related Products"
    },
    ar: {
      title: 'زي طاقم الأرض',
      description: 'أزياء عالية الأداء لطاقم الأرض مصممة لبيئات الطيران السعودية، تجمع بين السلامة والوظائف والمظهر المهني لموظفي العمليات الجوية.',
      longDescription: 'تم تصميم أزياء طاقم الأرض لدينا خصيصًا للظروف الصعبة لعمليات المطار الجوية السعودية. تتميز هذه الأزياء المتخصصة بعناصر عالية الرؤية وبناء متين ومواد متكيفة مع المناخ للحفاظ على سلامة وراحة واحترافية موظفي الأرض في جميع الظروف. تضمن الخياطة المعززة والألواح المقاومة للتآكل طول العمر في بيئات النشاط العالي، بينما تعزز العناصر العاكسة الاستراتيجية الرؤية خلال عمليات النهار والليل. يتضمن كل زي ميزات عملية مثل جيوب الأدوات المتخصصة ومرفقات أجهزة الاتصال وحاملات شارة الهوية المصممة خصيصًا لعمليات المطار الأرضية. متوفرة بتصاميم متوافقة مع هيئة الطيران السعودية مع خيارات للتخصيص مع العلامة التجارية للخطوط الجوية وتحديد الإدارات.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' },
        { name: 'زي طاقم الأرض', url: '#', current: true }
      ],
      features: [
        'عناصر عالية الرؤية متوافقة مع معايير سلامة الطيران الدولية',
        'قماش متين ومقاوم للتآكل مصمم لبيئات العمليات الجوية',
        'مواد متكيفة مع المناخ مصممة لظروف درجة حرارة المملكة العربية السعودية',
        'بناء معزز في نقاط الضغط العالية لعمر تشغيلي ممتد',
        'جيوب ومرفقات متخصصة لمعدات العمليات الأرضية',
        'عناصر عاكسة لتعزيز الرؤية أثناء عمليات الليل',
        'تقنية امتصاص الرطوبة للراحة أثناء الأنشطة البدنية',
        'متوفر بتصاميم متوافقة مع هيئة الطيران السعودية'
      ],
      specifications: [
        { name: 'المادة', value: '65٪ بوليستر، 35٪ قطن مع معالجة مقاومة للتآكل' },
        { name: 'الوزن', value: 'وزن متوسط-ثقيل (240-260 جرام للمتر المربع) للمتانة' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 4XL (قصات للرجال والنساء)' },
        { name: 'الألوان', value: 'أصفر عالي الرؤية، برتقالي السلامة، أزرق بحري، أسود' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'متوافق مع الغسيل الصناعي، تتطلب العناصر العاكسة عناية خاصة' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار الخطوط الجوية، تحديد الإدارة، شارات الأسماء' }
      ],
      variants: [
        { name: 'زي عمليات أرضية قياسي', price: 'ريال 520' },
        { name: 'مجموعة موظفي خدمة المنحدر', price: 'ريال 580' },
        { name: 'زي طاقم خدمة الطائرات', price: 'ريال 620' },
        { name: 'زي فريق مناولة الأمتعة', price: 'ريال 550' }
      ],
      testimonial: {
        quote: "لقد حسنت أزياء طاقم الأرض من UNEOM بشكل كبير من كفاءة عملياتنا الجوية. يتحمل البناء المتين متطلبات واجبات المناولة الأرضية اليومية، بينما عززت عناصر الرؤية العالية من بروتوكولات السلامة لدينا. يقدر فريقنا بشكل خاص القماش المتكيف مع المناخ، الذي يحافظ على راحتهم رغم ظروف درجات الحرارة الصعبة في المملكة العربية السعودية. كما أثبتت تكوينات الجيب المتخصصة قيمتها الكبيرة في الحفاظ على إمكانية الوصول إلى الأدوات الأساسية.",
        author: "فهد السليمان",
        position: "مدير العمليات الأرضية",
        company: "خدمات الطيران السعودية"
      },
      sizeChart: "جدول المقاسات",
      colors: "الألوان",
      quantity: "الكمية",
      minOrder: "الحد الأدنى للطلب",
      addToQuote: "أضف إلى طلب عرض السعر",
      viewSimilar: "مشاهدة منتجات مماثلة",
      features_title: "الميزات الرئيسية",
      specifications_title: "المواصفات",
      relatedProducts: "منتجات ذات صلة"
    }
  };

  // Shared product data
  const product = {
    id: 'ground-crew-uniform',
    basePrice: "520",
    rating: 4.9,
    reviews: 45,
    inStock: true,
    minOrder: 15,
    leadTime: '16-18 days',
    customization: true,
    images: [
      { src: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg', alt: 'Ground crew member in high-visibility uniform' },
      { src: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg', alt: 'Aviation ground staff in safety uniform' },
      { src: '/images/builder-in-helmet-with-a-suitcase-says-on-camera-on-a-green-screen-chroma-key-SBI-351072375.jpg', alt: 'Ground operations personnel in safety attire' },
      { src: '/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg', alt: 'Ramp service crew member in high-visibility uniform' }
    ],
    colors: [
      { name: 'High Visibility Yellow', value: '#FFFF00' },
      { name: 'Safety Orange', value: '#FF5F15' },
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Black', value: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    relatedProducts: [
      { id: 'flight-attendant-dress', name: 'Flight Attendant Dress', href: '/shop/aviation-uniforms/flight-attendant-dress' },
      { id: 'aviation-blazer', name: 'Aviation Blazer', href: '/shop/aviation-uniforms/aviation-blazer' },
      { id: 'airline-service-vest', name: 'Airline Service Vest', href: '/shop/aviation-uniforms/airline-service-vest' }
    ]
  };

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
        name: content[locale].title,
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
    <MainLayout locale={locale}>
      <Container className="py-8">
        <div className="flex justify-end mb-4">
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm bg-neutral-100 rounded-md hover:bg-neutral-200"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
        
        <Breadcrumbs items={content[locale].breadcrumbs.map(item => ({
          label: item.name,
          href: item.url
        }))} />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          {/* Product Images */}
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
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">{content[locale].title}</h1>
            <p className="text-xl font-semibold text-primary-600 mt-2">{content[locale].variants[0].price}</p>
            
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
                <span className="text-neutral-600 ml-2">{product.rating} ({product.reviews})</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-neutral-700">{content[locale].description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">{content[locale].title}</h3>
              <div className="mt-2 space-y-2">
                {content[locale].variants.map((variant) => (
                  <div key={variant.name} className="flex justify-between items-center p-3 border border-neutral-200 rounded-md">
                    <span className="text-primary-600">{variant.price}</span>
                    <span className="font-medium">{variant.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">{content[locale].colors}</h3>
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
                <h3 className="text-sm font-medium text-neutral-900">{locale === 'en' ? 'Size' : 'المقاس'}</h3>
                <button 
                  type="button" 
                  className="text-primary-600 text-sm"
                  onClick={() => setShowSizeChart(true)}
                >
                  {content[locale].sizeChart}
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
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-neutral-900">{content[locale].quantity}</h3>
                <p className="text-sm text-neutral-500">{content[locale].minOrder}: {product.minOrder}</p>
              </div>
              <div className="mt-2 flex items-center">
                <input
                  type="number"
                  min={product.minOrder}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-neutral-300 rounded-md px-3 py-2 w-24 text-center"
                />
                <span className="ml-3 text-neutral-700">{locale === 'en' ? 'units' : 'وحدة'}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <AddToQuoteButton 
  product={product}
  color={selectedColor || undefined}
  size={selectedSize || undefined}
  quantity={quantity}
/>
            </div>
          </div>
        </div>
        
        {/* Features and Specifications */}
        <div className="mt-16" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <h2 className="text-2xl font-bold mb-6">{content[locale].features_title}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {content[locale].features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-bold mb-6">{content[locale].specifications_title}</h2>
          <div className="bg-neutral-50 rounded-lg p-6 mb-12">
            <dl className="divide-y divide-neutral-200">
              {content[locale].specifications.map((spec, index) => (
                <div key={index} className="py-4 flex flex-col sm:flex-row">
                  <dt className="font-medium text-neutral-900 sm:w-1/3">{spec.name}</dt>
                  <dd className="mt-1 sm:mt-0 sm:w-2/3 text-neutral-700">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-primary-50 rounded-lg p-8 my-12" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <blockquote className="relative">
            <p className="text-lg font-medium text-neutral-700 mb-4">"{content[locale].testimonial.quote}"</p>
            <footer className="text-neutral-600">
              <strong>{content[locale].testimonial.author}</strong> — {content[locale].testimonial.position}, {content[locale].testimonial.company}
            </footer>
          </blockquote>
        </div>
        
        {/* Related Products */}
        <div className="mt-12" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <h2 className="text-2xl font-bold mb-6">{content[locale].relatedProducts}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={relatedProduct.href}
                className="group block border border-neutral-200 rounded-lg overflow-hidden hover:border-primary-300 transition"
              >
                <div className="aspect-square relative bg-neutral-100">
                  <div className="p-4 absolute bottom-0 left-0 right-0 bg-white bg-opacity-90">
                    <h3 className="font-medium text-neutral-900">{relatedProduct.name}</h3>
                    <p className="text-primary-600 group-hover:text-primary-700">{locale === 'en' ? 'View Product' : 'عرض المنتج'} →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
} 