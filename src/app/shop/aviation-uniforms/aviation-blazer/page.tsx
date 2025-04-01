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

export default function AviationBlazerPage() {
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
      title: 'Aviation Blazer',
      description: 'Premium aviation blazers designed for Saudi Arabian airlines, combining professional elegance with practical functionality for pilots, cabin crew, and aviation executives.',
      longDescription: 'Our Aviation Blazers represent the pinnacle of professional aviation attire, meticulously tailored for pilots, senior cabin crew, and airline executives in Saudi Arabia\'s aviation sector. Each blazer combines sophisticated styling with functional features specifically engineered for aviation professionals. The premium wool blend construction with stretch elements ensures comfort during long flights while maintaining an impeccable appearance that commands respect and projects authority. Available with customizable features including airline-specific buttons, embroidered wings, epaulettes, and Saudi Arabian flag details, these blazers are designed to enhance your airline\'s brand identity while meeting international aviation standards. Each piece undergoes rigorous quality testing to ensure exceptional durability in the demanding aviation environment, with specialized treatments that maintain color vibrancy and structural integrity through frequent wear and travel.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Aviation Uniforms', url: '/shop/aviation-uniforms' },
        { name: 'Aviation Blazer', url: '#', current: true }
      ],
      features: [
        'Premium wool blend fabric with stretch elements for comfort during long flights',
        'Flame-retardant treatment meeting international aviation safety standards',
        'Reinforced stitching and structured shoulders for commanding presence',
        'Breathable lining optimized for climate-controlled cabin environments',
        'Specialized internal pockets for aviation documentation and credentials',
        'Customizable buttons, wing emblems, and airline-specific detailing',
        'Saudi flag option and Arabic script embroidery available',
        'Wrinkle-resistant properties ideal for travel and extended wear'
      ],
      specifications: [
        { name: 'Material', value: '75% Premium Wool, 22% Polyester, 3% Elastane with flame-retardant treatment' },
        { name: 'Weight', value: 'Medium-heavy weight (260-280 gsm) for structured appearance' },
        { name: 'Available Sizes', value: '36 to 52 (EU sizing) with short, regular and long options' },
        { name: 'Colors', value: 'Navy Blue, Charcoal Grey, Black, Deep Burgundy, Royal Blue' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Dry clean only, specialized treatment for aviation uniforms' },
        { name: 'Customization Options', value: 'Airline buttons, wing emblems, epaulettes, flag details, Arabic script' }
      ],
      variants: [
        { name: 'Pilot\'s Professional Blazer', price: 'SAR 950' },
        { name: 'Senior Cabin Crew Blazer', price: 'SAR 880' },
        { name: 'Aviation Executive Blazer', price: 'SAR 920' },
        { name: 'First Officer Formal Jacket', price: 'SAR 900' }
      ],
      testimonial: {
        quote: "The Aviation Blazers from UNEOM have set a new standard for our airline's professional image. The exceptional tailoring and premium materials project the authority and expertise our pilots and senior staff require. What particularly impresses us is how the blazers maintain their crisp appearance even during long-haul flights and quick turnarounds. The flame-retardant properties provide essential safety features while the customization options allowed us to perfectly incorporate our airline's branding elements. The attention to cultural details like Saudi flag integration has been especially appreciated.",
        author: "Captain Abdullah Al-Ghamdi",
        position: "Chief Pilot",
        company: "Saudi Gulf Airlines"
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
      title: 'سترة الطيران',
      description: 'سترات طيران فاخرة مصممة للخطوط الجوية السعودية، تجمع بين الأناقة المهنية والوظائف العملية للطيارين وطاقم المقصورة ومديري الطيران.',
      longDescription: 'تمثل سترات الطيران لدينا قمة زي الطيران المهني، مصممة بدقة للطيارين وكبار طاقم المقصورة ومديري الخطوط الجوية في قطاع الطيران السعودي. تجمع كل سترة بين التصميم المتطور والميزات الوظيفية المصممة خصيصًا لمحترفي الطيران. يضمن بناء مزيج الصوف الفاخر مع عناصر التمدد الراحة أثناء الرحلات الطويلة مع الحفاظ على مظهر لا تشوبه شائبة يفرض الاحترام ويعكس السلطة. متوفرة مع ميزات قابلة للتخصيص تشمل أزرار خاصة بالخطوط الجوية وأجنحة مطرزة وأكتاف وتفاصيل العلم المملكة العربية السعودية، تم تصميم هذه السترات لتعزيز هوية العلامة التجارية لشركة الطيران الخاصة بك مع تلبية معايير الطيران الدولية. تخضع كل قطعة لاختبارات جودة صارمة لضمان متانة استثنائية في بيئة الطيران الصعبة، مع معالجات متخصصة تحافظ على حيوية اللون وسلامة الهيكل من خلال الارتداء والسفر المتكرر.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' },
        { name: 'سترة الطيران', url: '#', current: true }
      ],
      features: [
        'قماش مزيج الصوف الفاخر مع عناصر التمدد للراحة أثناء الرحلات الطويلة',
        'معالجة مضادة للهب تلبي معايير سلامة الطيران الدولية',
        'خياطة معززة وأكتاف هيكلية لحضور آمر',
        'بطانة قابلة للتنفس محسنة لبيئات المقصورة ذات درجة الحرارة المتحكم بها',
        'جيوب داخلية متخصصة لوثائق الطيران وأوراق الاعتماد',
        'أزرار قابلة للتخصيص وشعارات الأجنحة وتفاصيل العلم المملكة العربية السعودية',
        'خصائص مقاومة للتجعد مثالية للسفر والارتداء الممتد'
      ],
      specifications: [
        { name: 'المادة', value: '75٪ صوف فاخر، 22٪ بوليستر، 3٪ إيلاستين مع معالجة مضادة للهب' },
        { name: 'الوزن', value: 'وزن متوسط-ثقيل (260-280 جرام للمتر المربع) لمظهر هيكلي' },
        { name: 'المقاسات المتاحة', value: '36 إلى 52 (مقاس أوروبي) مع خيارات قصيرة وعادية وطويلة' },
        { name: 'الألوان', value: 'أزرق بحري، رمادي فحمي، أسود، نبيذي عميق، أزرق ملكي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'تنظيف جاف فقط، معالجة متخصصة لأزياء الطيران' },
        { name: 'خيارات التخصيص', value: 'أزرار الخطوط الجوية، شعارات الأجنحة، الأكتاف، تفاصيل العلم، النص العربي' }
      ],
      variants: [
        { name: 'سترة الطيار المهنية', price: 'ريال 950' },
        { name: 'سترة كبار طاقم المقصورة', price: 'ريال 880' },
        { name: 'سترة مديري الطيران', price: 'ريال 920' },
        { name: 'سترة الضابط الأول الرسمية', price: 'ريال 900' }
      ],
      testimonial: {
        quote: "لقد وضعت سترات الطيران من UNEOM معيارًا جديدًا للصورة المهنية لشركة الطيران لدينا. يعكس التفصيل الاستثنائي والمواد الفاخرة السلطة والخبرة التي يتطلبها طيارونا وكبار موظفينا. ما يثير إعجابنا بشكل خاص هو كيفية حفاظ السترات على مظهرها الأنيق حتى أثناء الرحلات الطويلة والمواعيد السريعة. توفر خصائص مقاومة اللهب ميزات السلامة الأساسية بينما سمحت لنا خيارات التخصيص بدمج عناصر العلامة التجارية لشركة الطيران لدينا بشكل مثالي. تم تقدير الاهتمام بالتفاصيل الثقافية مثل دمج العلم السعودي بشكل خاص.",
        author: "الكابتن عبد الله الغامدي",
        position: "كبير الطيارين",
        company: "الخطوط الجوية السعودية الخليجية"
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
    id: 'aviation-blazer',
    name: 'Aviation Blazer', // Added missing name property
    price: "950", // Added missing price property
    basePrice: "950",
    rating: 5.0,
    reviews: 31,
    inStock: true,
    minOrder: 20,
    leadTime: '21-25 days',
    customization: true,
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Aviation professionals in premium blazers' },
      { src: '/images/default-placeholder.jpg', alt: 'Pilot wearing professional aviation blazer' },
      { src: '/images/default-placeholder.jpg', alt: 'Aviation staff in coordinated uniform blazers' },
      { src: '/images/default-placeholder.jpg', alt: 'Airline staff member in professional aviation blazer' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Charcoal Grey', value: '#36454F' },
      { name: 'Black', value: '#000000' },
      { name: 'Deep Burgundy', value: '#800020' },
      { name: 'Royal Blue', value: '#4169E1' }
    ],
    sizes: ['36', '38', '40', '42', '44', '46', '48', '50', '52'],
    relatedProducts: [
      { id: 'flight-attendant-dress', name: 'Flight Attendant Dress', href: '/shop/aviation-uniforms/flight-attendant-dress' },
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
    
    </div>
  );
}