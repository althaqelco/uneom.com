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

export default function AirlineServiceVestPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(25);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Toggle language
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };
  
  // Multilingual content
  const content: ContentType = {
    en: {
      title: 'Airline Service Vest',
      description: 'Professional airline service vests designed for Saudi Arabian aviation staff, combining practical functionality with airline branding for cabin crew, ground staff, and service personnel.',
      longDescription: 'Our Airline Service Vests are specially engineered for the diverse operational needs of Saudi Arabian aviation personnel. These versatile garments provide the perfect balance of professional appearance, practical functionality, and airline brand identity for cabin crew, ground staff, and service personnel. The thoughtful design includes multiple specialized pockets for service tools, documentation, and personal items, while the durable yet lightweight construction ensures comfort during long shifts. Each vest features flame-retardant properties meeting international aviation safety standards, with customizable elements including airline logo embroidery, color-matched piping, and Arabic script options. The specialized fabric blend resists stains and wrinkles while maintaining a crisp, professional appearance throughout demanding aviation operations. Available in a range of airline-specific colors with customization options to perfectly align with your brand standards.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Aviation Uniforms', url: '/shop/aviation-uniforms' },
        { name: 'Airline Service Vest', url: '#', current: true }
      ],
      features: [
        'Flame-retardant fabric meeting international aviation safety standards',
        'Multiple specialized pockets for aviation service tools and documentation',
        'Durable yet lightweight construction for extended wear comfort',
        'Easy-care fabric with stain-resistant and wrinkle-resistant properties',
        'Strategic reinforcement at high-stress points for extended durability',
        'Available with airline-specific branding and customization options',
        'Unisex and gender-specific designs available to suit diverse staff needs',
        'Compatible with other aviation uniform components for complete ensemble'
      ],
      specifications: [
        { name: 'Material', value: '65% Premium Polyester, 35% Cotton with flame-retardant treatment' },
        { name: 'Weight', value: 'Light-medium weight (160-180 gsm) for comfort' },
        { name: 'Available Sizes', value: 'XS to 3XL (Unisex, Men\'s and Women\'s cuts available)' },
        { name: 'Colors', value: 'Navy Blue, Royal Blue, Burgundy, Charcoal Grey, Black' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Machine washable, special aviation laundry compatible' },
        { name: 'Customization Options', value: 'Airline logo embroidery, color-matched piping, Arabic script, custom pockets' }
      ],
      variants: [
        { name: 'Cabin Crew Service Vest', price: 'SAR 320' },
        { name: 'Ground Operations Vest', price: 'SAR 290' },
        { name: 'Premium Flight Attendant Vest', price: 'SAR 350' },
        { name: 'Airline Supervisor Vest', price: 'SAR 380' }
      ],
      testimonial: {
        quote: "The Airline Service Vests from UNEOM have proven to be an invaluable addition to our aviation uniforms. The practical pocket configuration perfectly accommodates our service tools and documentation, while the flame-retardant properties provide essential safety features. Our staff particularly appreciate the lightweight comfort during long shifts, and the customized airline branding creates a cohesive, professional appearance across our diverse aviation teams. The quality construction has withstood the demands of daily aviation operations impressively.",
        author: "Ibrahim Al-Mansour",
        position: "Cabin Services Director",
        company: "Flynas Airlines"
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
      title: 'سترة خدمة الطيران',
      description: 'سترات خدمة احترافية للخطوط الجوية مصممة لموظفي الطيران السعودي، تجمع بين الوظائف العملية والعلامة التجارية للخطوط الجوية لطاقم المقصورة وموظفي الأرض وموظفي الخدمة.',
      longDescription: 'تم تصميم سترات خدمة الطيران لدينا خصيصًا للاحتياجات التشغيلية المتنوعة لموظفي الطيران السعودي. توفر هذه الملابس متعددة الاستخدامات التوازن المثالي بين المظهر المهني والوظائف العملية وهوية العلامة التجارية للخطوط الجوية لطاقم المقصورة وموظفي الأرض وموظفي الخدمة. يتضمن التصميم المدروس جيوب متخصصة متعددة لأدوات الخدمة والوثائق والأغراض الشخصية، بينما يضمن البناء المتين والخفيف الوزن الراحة أثناء المناوبات الطويلة. تتميز كل سترة بخصائص مقاومة للهب تلبي معايير سلامة الطيران الدولية، مع عناصر قابلة للتخصيص بما في ذلك تطريز شعار الخطوط الجوية والحواف الملونة المطابقة وخيارات النص العربي. يقاوم مزيج القماش المتخصص البقع والتجاعيد مع الحفاظ على مظهر أنيق ومهني طوال عمليات الطيران الصعبة. متوفر بمجموعة من الألوان الخاصة بالخطوط الجوية مع خيارات التخصيص لتتماشى تمامًا مع معايير علامتك التجارية.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' },
        { name: 'سترة خدمة الطيران', url: '#', current: true }
      ],
      features: [
        'قماش مقاوم للهب يلبي معايير سلامة الطيران الدولية',
        'جيوب متخصصة متعددة لأدوات خدمة الطيران والوثائق',
        'بناء متين وخفيف الوزن لراحة الارتداء الممتد',
        'قماش سهل العناية مع خصائص مقاومة للبقع ومقاومة للتجعد',
        'تعزيز استراتيجي في نقاط الضغط العالي لمتانة ممتدة',
        'متوفر مع خيارات العلامة التجارية والتخصيص الخاصة بالخطوط الجوية',
        'تصاميم للجنسين وخاصة بالجنس متاحة لتناسب احتياجات الموظفين المتنوعة',
        'متوافق مع مكونات زي الطيران الأخرى للمجموعة الكاملة'
      ],
      specifications: [
        { name: 'المادة', value: '65٪ بوليستر فاخر، 35٪ قطن مع معالجة مضادة للهب' },
        { name: 'الوزن', value: 'وزن خفيف-متوسط (160-180 جرام للمتر المربع) للراحة' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 3XL (متوفر قصات للجنسين وللرجال والنساء)' },
        { name: 'الألوان', value: 'أزرق بحري، أزرق ملكي، نبيذي، رمادي فحمي، أسود' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، متوافق مع غسيل الطيران الخاص' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار الخطوط الجوية، حواف ملونة مطابقة، نص عربي، جيوب مخصصة' }
      ],
      variants: [
        { name: 'سترة خدمة طاقم المقصورة', price: 'ريال 320' },
        { name: 'سترة العمليات الأرضية', price: 'ريال 290' },
        { name: 'سترة مضيفة الطيران الفاخرة', price: 'ريال 350' },
        { name: 'سترة مشرف الخطوط الجوية', price: 'ريال 380' }
      ],
      testimonial: {
        quote: "لقد أثبتت سترات خدمة الطيران من UNEOM أنها إضافة لا تقدر بثمن لأزياء الطيران لدينا. تستوعب تكوينات الجيب العملية أدوات الخدمة والوثائق الخاصة بنا بشكل مثالي، بينما توفر خصائص مقاومة اللهب ميزات السلامة الأساسية. يقدر موظفونا بشكل خاص الراحة خفيفة الوزن أثناء المناوبات الطويلة، وتخلق العلامة التجارية المخصصة للخطوط الجوية مظهرًا متماسكًا واحترافيًا عبر فرق الطيران المتنوعة لدينا. لقد صمد البناء عالي الجودة أمام متطلبات عمليات الطيران اليومية بشكل مثير للإعجاب.",
        author: "إبراهيم المنصور",
        position: "مدير خدمات المقصورة",
        company: "طيران ناس"
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
    id: 'airline-service-vest',
    name: 'Airline Service Vest',
    price: "320",
    basePrice: "320",
    rating: 4.8,
    reviews: 39,
    inStock: true,
    minOrder: 25,
    leadTime: '14-18 days',
    customization: true,
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Airline staff in professional service vests' },
      { src: '/images/default-placeholder.jpg', alt: 'Cabin crew members wearing service vests' },
      { src: '/images/default-placeholder.jpg', alt: 'Service personnel in professional vest' },
      { src: '/images/product-placeholder.jpg', alt: 'Staff member in airline service vest' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Royal Blue', value: '#4169E1' },
      { name: 'Burgundy', value: '#800020' },
      { name: 'Charcoal Grey', value: '#36454F' },
      { name: 'Black', value: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    relatedProducts: [
      { id: 'aviation-blazer', name: 'Aviation Blazer', href: '/shop/aviation-uniforms/aviation-blazer' },
      { id: 'flight-attendant-dress', name: 'Flight Attendant Dress', href: '/shop/aviation-uniforms/flight-attendant-dress' },
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
    <div className="bg-white">
    
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
    
    </div>
  );
} 