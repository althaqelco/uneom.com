'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useRouter } from 'next/navigation';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

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

export default function FlightAttendantDressPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(20);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Toggle language
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };
  
  // Multilingual content
  const content: ContentType = {
    en: {
      title: "UNEOM - Professional Uniforms",
      description: 'Premium flight attendant dresses designed for Saudi Arabian airlines, combining elegant styling with practical functionality for female cabin crew members.',
      longDescription: 'Our Flight Attendant Dresses are meticulously crafted to meet the exacting standards of Saudi Arabian airlines and cultural requirements. These premium garments blend sophisticated styling with functional design elements that enhance cabin crew performance while maintaining a distinctive and professional airline image. The thoughtfully engineered construction provides exceptional range of motion for inflight duties while the wrinkle-resistant, flame-retardant fabric ensures a pristine appearance throughout long-haul flights. Each dress includes specialized features tailored to cabin crew needs, including hidden pockets for essential items, secure badge attachments, and modest design elements that respect Saudi Arabian values while maintaining international aviation standards. Available in airline-specific colors and designs with customization options to perfectly align with your brand identity.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Aviation Uniforms', url: '/shop/aviation-uniforms' },
        { name: 'Flight Attendant Dress', url: '#', current: true }
      ],
      features: [
        'Premium fabric with flame-retardant and wrinkle-resistant properties',
        'Modest design compliant with Saudi Arabian cultural values',
        'Strategic stretch panels for enhanced range of motion during in-flight duties',
        'Hidden functional pockets for essential flight attendant tools',
        'Secure badge attachment and name tag integration',
        'Breathable construction optimized for extended wear in pressurized cabins',
        'Available in airline-specific colors with custom accent options',
        'Optional matching scarf/hijab in coordinating airline colors'
      ],
      specifications: [
        { name: 'Material', value: '80% Premium Polyester, 17% Rayon, 3% Elastane with flame-retardant treatment' },
        { name: 'Weight', value: 'Medium weight (180-200 gsm) for comfort and structure' },
        { name: 'Available Sizes', value: '2 to 20 (US Sizing) with petite, regular and tall options' },
        { name: 'Colors', value: 'Navy Blue, Deep Burgundy, Charcoal Grey, Forest Green, Royal Blue' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Dry clean recommended, hang for wrinkle release' },
        { name: 'Customization Options', value: 'Airline logo embroidery, custom colors, branded buttons, matching accessories' }
      ],
      variants: [
        { name: 'Standard Flight Attendant Dress', price: 'SAR 680' },
        { name: 'Premium Cabin Crew Ensemble', price: 'SAR 750' },
        { name: 'First Class Attendant Collection', price: 'SAR 820' },
        { name: 'International Flight Service Attire', price: 'SAR 780' }
      ],
      testimonial: {
        quote: "The Flight Attendant Dresses from UNEOM have revolutionized our cabin crew's experience. The modest yet elegant design perfectly balances our airline's international image with Saudi cultural values. Our flight attendants particularly praise the fabric quality, which maintains a crisp, professional appearance even after long-haul flights. The functional features like strategically placed pockets and flame-retardant properties provide both practicality and safety. The customization options allowed us to perfectly align the uniform with our brand identity.",
        author: "Layla Al-Zahrani",
        position: "Cabin Crew Director",
        company: "Royal Saudi Airlines"
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
      title: 'فستان مضيفة الطيران',
      description: 'فساتين فاخرة لمضيفات الطيران مصممة للخطوط الجوية السعودية، تجمع بين التصميم الأنيق والوظائف العملية لأفراد طاقم المقصورة من النساء.',
      longDescription: 'تم تصميم فساتين مضيفات الطيران لدينا بدقة لتلبية المعايير الدقيقة للخطوط الجوية السعودية والمتطلبات الثقافية. تمزج هذه الملابس الفاخرة بين التصميم المتطور وعناصر التصميم الوظيفية التي تعزز أداء طاقم المقصورة مع الحفاظ على صورة مميزة ومهنية للخطوط الجوية. يوفر البناء المصمم بعناية نطاقًا استثنائيًا للحركة لواجبات الرحلة بينما يضمن القماش المقاوم للتجعد والمضاد للهب مظهرًا نقيًا طوال الرحلات الطويلة. يتضمن كل فستان ميزات متخصصة مصممة لاحتياجات طاقم المقصورة، بما في ذلك الجيوب المخفية للعناصر الأساسية ومرفقات الشارات الآمنة وعناصر التصميم المحتشمة التي تحترم القيم السعودية مع الحفاظ على معايير الطيران الدولية. متوفر بألوان وتصميمات خاصة بالخطوط الجوية مع خيارات التخصيص لتتماشى تمامًا مع هوية علامتك التجارية.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' },
        { name: 'فستان مضيفة الطيران', url: '#', current: true }
      ],
      features: [
        'قماش فاخر بخصائص مقاومة للهب ومقاومة للتجعد',
        'تصميم محتشم متوافق مع القيم الثقافية السعودية',
        'ألواح تمدد استراتيجية لتعزيز نطاق الحركة أثناء واجبات الرحلة',
        'جيوب وظيفية مخفية لأدوات مضيفة الطيران الأساسية',
        'مرفق شارة آمن ودمج بطاقة الاسم',
        'بناء قابل للتنفس محسن للارتداء الممتد في المقصورات المضغوطة',
        'متوفر بألوان خاصة بالخطوط الجوية مع خيارات لهجة مخصصة',
        'وشاح/حجاب مطابق اختياري بألوان الخطوط الجوية المنسقة'
      ],
      specifications: [
        { name: 'المادة', value: '80٪ بوليستر فاخر، 17٪ رايون، 3٪ إيلاستين مع معالجة مضادة للهب' },
        { name: 'الوزن', value: 'وزن متوسط (180-200 جرام للمتر المربع) للراحة والهيكل' },
        { name: 'المقاسات المتاحة', value: '2 إلى 20 (مقاس أمريكي) مع خيارات صغيرة وعادية وطويلة' },
        { name: 'الألوان', value: 'أزرق بحري، نبيذي عميق، رمادي فحمي، أخضر غابي، أزرق ملكي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'يوصى بالتنظيف الجاف، تعليق لإزالة التجعد' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار الخطوط الجوية، ألوان مخصصة، أزرار العلامة التجارية، إكسسوارات مطابقة' }
      ],
      variants: [
        { name: 'فستان مضيفة طيران قياسي', price: 'ريال 680' },
        { name: 'مجموعة طاقم المقصورة الفاخرة', price: 'ريال 750' },
        { name: 'مجموعة مضيفة الدرجة الأولى', price: 'ريال 820' },
        { name: 'زي خدمة الرحلات الدولية', price: 'ريال 780' }
      ],
      testimonial: {
        quote: "لقد أحدثت فساتين مضيفات الطيران من UNEOM ثورة في تجربة طاقم المقصورة لدينا. يوازن التصميم المحتشم والأنيق بشكل مثالي بين صورة شركتنا الدولية والقيم الثقافية السعودية. تشيد مضيفات الطيران لدينا بشكل خاص بجودة القماش، التي تحافظ على مظهر أنيق ومهني حتى بعد الرحلات الطويلة. توفر الميزات الوظيفية مثل الجيوب الموضوعة استراتيجيًا وخصائص مقاومة اللهب كلاً من العملية والسلامة. سمحت لنا خيارات التخصيص بمواءمة الزي الموحد تمامًا مع هوية علامتنا التجارية.",
        author: "ليلى الزهراني",
        position: "مديرة طاقم المقصورة",
        company: "الخطوط الجوية السعودية الملكية"
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
    id: 'flight-attendant-dress',
    name: 'Flight Attendant Dress', // Added missing name property required by Product interface
    price: "680", // Added missing price property required by Product interface
    basePrice: "680",
    rating: 4.9,
    reviews: 57,
    inStock: true,
    minOrder: 20,
    leadTime: '18-21 days',
    customization: true,
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Female flight attendant in professional dress uniform' },
      { src: '/images/default-placeholder.jpg', alt: 'Flight attendant in elegant cabin crew dress' },
      { src: '/images/default-placeholder.jpg', alt: 'Saudi airline flight attendant in professional uniform' },
      { src: '/images/default-placeholder.jpg', alt: 'Group of flight attendants in coordinated uniform dresses' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Deep Burgundy', value: '#800020' },
      { name: 'Charcoal Grey', value: '#36454F' },
      { name: 'Forest Green', value: '#228B22' },
      { name: 'Royal Blue', value: '#4169E1' }
    ],
    sizes: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
    relatedProducts: [
      { id: 'aviation-blazer', name: 'Aviation Blazer', href: '/shop/aviation-uniforms/aviation-blazer' },
      { id: 'airline-service-vest', name: 'Airline Service Vest', href: '/shop/aviation-uniforms/airline-service-vest' },
      { id: 'ground-crew-uniform', name: 'Ground Crew Uniform', href: '/shop/aviation-uniforms/ground-crew-uniform' }
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
    <main>
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
        </main>
  );
}