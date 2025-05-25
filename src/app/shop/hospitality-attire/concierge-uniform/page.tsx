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

export default function ConciergeUniformPage() {
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
      description: 'Premium concierge uniforms designed to create an elegant and sophisticated first impression for luxury hospitality establishments in Saudi Arabia.',
      longDescription: 'Our Concierge Uniforms represent the pinnacle of hospitality presentation, meticulously crafted for the front-line ambassadors of luxury hotels and resorts across Saudi Arabia. These premium uniforms combine sophisticated styling with practical functionality to create a distinctive and memorable first impression. The refined tailoring and superior fabric selection ensure staff can maintain a dignified appearance throughout demanding shifts while the thoughtful design elements facilitate the practical duties of the concierge position. Available in classic and contemporary styles with modest design options, these uniforms convey the prestige of your establishment while ensuring staff comfort and confidence.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
        { name: 'Concierge Uniform', url: '#', current: true }
      ],
      features: [
        'Premium European fabric blend with superior durability',
        'Distinguished tailoring with elegant design elements',
        'Sophisticated styling to reflect luxury hospitality standards',
        'Distinctive details including decorative braiding and gold buttons',
        'Modest design options suitable for Saudi Arabian setting',
        'Breathable construction for comfort in air-conditioned environments',
        'Multiple pocket configurations for practical concierge essentials',
        'Available in both traditional and contemporary styles'
      ],
      specifications: [
        { name: 'Material', value: '55% Premium Wool, 40% Performance Polyester, 5% Elastane with moisture-wicking and stain-resistant treatment' },
        { name: 'Weight', value: 'Medium weight (260-280 gsm) for structured appearance and year-round comfort' },
        { name: 'Style Options', value: 'Classic Hospitality Suit, Contemporary Mandarin Collar Ensemble, Premium Saudi-Inspired Design, Luxury Resort Collection' },
        { name: 'Available Sizes', value: 'XS to 3XL (Men\'s and Women\'s tailored fits)' },
        { name: 'Colors', value: 'Navy Blue, Charcoal Grey, Deep Burgundy, Royal Black, Desert Sand (property-specific colors available)' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Customization Options', value: 'Property embroidery, metal buttons with logo, accent color piping, premium fabric upgrades' }
      ],
      variants: [
        { name: 'Classic Concierge Suit', price: 'SAR 450' },
        { name: 'Premium Mandarin Collar Ensemble', price: 'SAR 495' },
        { name: 'Executive Concierge Collection', price: 'SAR 525' },
        { name: 'Luxury Resort Concierge Attire', price: 'SAR 575' },
        { name: 'Saudi-Inspired Premium Design', price: 'SAR 550' }
      ],
      testimonial: {
        quote: "The Premium Concierge Uniforms from Uneom have significantly elevated our property's first impression. The sophisticated design perfectly balances traditional Saudi elements with contemporary luxury, while the superior construction maintains an impeccable appearance even during the busiest periods. Our concierge staff report exceptional comfort throughout extended shifts, and the distinguished appearance has become an integral part of our property's prestigious image.",
        author: "Fahad Al-Rashidi",
        position: "Front Office Manager",
        company: "Royal Oasis Hotel & Residence",
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
      title: 'زي الكونسيرج',
      description: 'أزياء كونسيرج فاخرة مصممة لخلق انطباع أول أنيق وراقٍ لمنشآت الضيافة الفاخرة في المملكة العربية السعودية.',
      longDescription: 'تمثل أزياء الكونسيرج لدينا ذروة عرض الضيافة، مصممة بدقة لسفراء الخط الأمامي للفنادق والمنتجعات الفاخرة في جميع أنحاء المملكة العربية السعودية. تجمع هذه الأزياء الفاخرة بين التصميم المتطور والوظائف العملية لخلق انطباع أول مميز ولا يُنسى. يضمن التفصيل المنقح واختيار القماش الفائق قدرة الموظفين على الحفاظ على مظهر وقور طوال المناوبات المتطلبة بينما تسهل عناصر التصميم المدروسة المهام العملية لموقع الكونسيرج. متوفرة بأنماط كلاسيكية ومعاصرة مع خيارات تصميم محتشمة، تنقل هذه الأزياء هيبة مؤسستك مع ضمان راحة الموظفين وثقتهم.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس الضيافة', url: '/ar/shop/hospitality-attire' },
        { name: 'زي الكونسيرج', url: '#', current: true }
      ],
      features: [
        'مزيج قماش أوروبي فاخر مع متانة فائقة',
        'تفصيل متميز مع عناصر تصميم أنيقة',
        'تصميم متطور يعكس معايير الضيافة الفاخرة',
        'تفاصيل مميزة تشمل الضفيرة الزخرفية والأزرار الذهبية',
        'خيارات تصميم محتشمة مناسبة للبيئة السعودية',
        'بناء قابل للتنفس للراحة في البيئات المكيفة',
        'تكوينات جيب متعددة للمستلزمات الأساسية للكونسيرج',
        'متوفر بأنماط تقليدية ومعاصرة'
      ],
      specifications: [
        { name: 'المادة', value: '80٪ صوف، 20٪ بوليستر مع تشطيب فاخر' },
        { name: 'الوزن', value: 'وزن متوسط-ثقيل (240-260 جرام للمتر المربع)' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 3XL (قصات للرجال والنساء)' },
        { name: 'الألوان', value: 'نبيذي، أزرق بحري، أسود، رمادي فحمي، أخضر غابي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'يوصى بالتنظيف الجاف، عناية خاصة للزخارف' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار الفندق، شارات أسماء شخصية، أزرار مخصصة، ضفيرة متخصصة' }
      ],
      variants: [
        { name: 'زي كونسيرج قياسي', price: 'ريال 750' },
        { name: 'مجموعة كونسيرج فاخرة', price: 'ريال 895' },
        { name: 'زي كونسيرج نخبة', price: 'ريال 1,050' },
        { name: 'مجموعة رئيس الكونسيرج', price: 'ريال 1,250' }
      ],
      testimonial: {
        quote: "لقد رفعت أزياء الكونسيرج من UNEOM بشكل كبير من الانطباع الأول لفندقنا. يمثل التصميم المميز بشكل مثالي موقعنا الفاخر، بينما أثارت الحرفية عالية الجودة إعجاب كل من موظفينا وضيوفنا. تجمع الأزياء بين الأناقة والعملية، مما يسمح لفريق الكونسيرج لدينا بأداء واجباتهم بثقة وتميز. عناصر التصميم المحتشمة والمتطورة مناسبة تمامًا لعملائنا السعوديين.",
        author: "خالد الرشيد",
        position: "رئيس الكونسيرج",
        company: "فندق القصر الملكي الرياض"
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

  // Product details with SEO-optimized content
  const product = {
    id: 'concierge-uniform',
    name: 'Premium Concierge Uniform',
    price: 'From SAR 450',
    basePrice: "450",
    rating: 4.9,
    reviews: 76,
    description: 'Sophisticated concierge uniforms designed specifically for Saudi Arabia\'s luxury hospitality sector, featuring premium fabrication, meticulous tailoring, and distinguished styling that creates an impeccable first impression while providing exceptional comfort for front-of-house staff.',
    longDescription: 'Our Premium Concierge Uniforms represent the pinnacle of hospitality attire, meticulously crafted to embody the prestige and sophistication of Saudi Arabia\'s finest hotels and residential properties. Every uniform combines exceptional quality materials with superior craftsmanship to create garments that command respect and convey authority while maintaining a welcoming, approachable appearance. The sophisticated styling incorporates subtle traditional Saudi design elements reimagined through a contemporary lens, creating a distinctive yet universally appealing aesthetic that complements luxury hospitality environments. Each uniform is constructed with performance-enhanced premium fabrics that maintain a pristine appearance throughout demanding shifts while providing superior comfort during extended periods of standing and guest interaction. Engineered with discreet stretch components in strategic locations, these uniforms allow for unrestricted movement during luggage handling and guest assistance tasks. The collection is available in classic and contemporary silhouettes with impeccable detailing that reflects the premium positioning of your property while ensuring each concierge projects the polished, authoritative image essential for creating exceptional first impressions.',
    features: [
      'Premium European wool blend fabrics with performance enhancement for durability and comfort',
      'Meticulously tailored silhouettes with structured shoulders and defined waistlines for distinguished appearance',
      'Traditional Saudi design elements incorporated through subtle embroidery and accent details',
      'Climate-optimized construction with advanced ventilation for comfort in Saudi luxury environments',
      'Strategic stretch components for unrestricted movement during guest service activities',
      'Stain-resistant treatments that maintain impeccable appearance throughout extended shifts',
      'Reinforced construction at high-stress points to ensure exceptional durability',
      'Customizable styling options to align with property branding and design aesthetic'
    ],
    specifications: [
      { name: 'Material', value: '55% Premium Wool, 40% Performance Polyester, 5% Elastane with moisture-wicking and stain-resistant treatment' },
      { name: 'Weight', value: 'Medium weight (260-280 gsm) for structured appearance and year-round comfort' },
      { name: 'Style Options', value: 'Classic Hospitality Suit, Contemporary Mandarin Collar Ensemble, Premium Saudi-Inspired Design, Luxury Resort Collection' },
      { name: 'Available Sizes', value: 'XS to 3XL (Men\'s and Women\'s tailored fits)' },
      { name: 'Colors', value: 'Navy Blue, Charcoal Grey, Deep Burgundy, Royal Black, Desert Sand (property-specific colors available)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Property embroidery, metal buttons with logo, accent color piping, premium fabric upgrades' }
    ],
    images: [
      { src: '/images/product-placeholder.jpg', alt: 'Premium concierge staff in distinguished uniform assisting guest at luxury Saudi hotel' },
      { src: '/images/product-placeholder.jpg', alt: 'Professional concierge in tailored uniform welcoming guests at five-star property entrance' },
      { src: '/images/hospitality/hospitality_uniform_concierge.jpg', alt: 'Concierge team in coordinated premium uniforms at prestigious hotel lobby in Saudi Arabia' },
      { src: '/images/product-placeholder.jpg', alt: 'Close-up detail of premium concierge uniform showing quality tailoring and Saudi-inspired accents' }
    ],
    category: 'Hospitality Attire',
    categorySlug: 'hospitality-attire',
    inStock: true,
    minOrder: 20,
    leadTime: '21-28 days',
    customization: true,
    variants: [
      { name: 'Classic Concierge Suit', price: 'SAR 450' },
      { name: 'Premium Mandarin Collar Ensemble', price: 'SAR 495' },
      { name: 'Executive Concierge Collection', price: 'SAR 525' },
      { name: 'Luxury Resort Concierge Attire', price: 'SAR 575' },
      { name: 'Saudi-Inspired Premium Design', price: 'SAR 550' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#000080', image: '/images/product-placeholder.jpg' },
      { name: 'Charcoal Grey', value: '#36454F', image: '/images/product-placeholder.jpg' },
      { name: 'Deep Burgundy', value: '#800020', image: '/images/product-placeholder.jpg' },
      { name: 'Royal Black', value: '#000000', image: '/images/product-placeholder.jpg' },
      { name: 'Desert Sand', value: '#E1C699', image: '/images/product-placeholder.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double XL (20-22)',
      '3XL': 'Triple XL (24-26)'
    },
    testimonials: [
      {
        quote: "The Premium Concierge Uniforms from Uneom have significantly elevated our property's first impression. The sophisticated design perfectly balances traditional Saudi elements with contemporary luxury, while the superior construction maintains an impeccable appearance even during the busiest periods. Our concierge staff report exceptional comfort throughout extended shifts, and the distinguished appearance has become an integral part of our property's prestigious image.",
        author: "Fahad Al-Rashidi",
        position: "Front Office Manager",
        company: "Royal Oasis Hotel & Residence",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "After implementing Uneom's concierge collection across our hotel portfolio, we've received consistent praise from both guests and staff. The attention to detail in the tailoring creates a commanding yet approachable presence that perfectly embodies our service philosophy. The subtle integration of Saudi design elements provides a distinctive character while maintaining international appeal. Most importantly, the performance fabrics have proven exceptionally durable while providing the comfort our front-line staff require.",
        author: "Layla Al-Harbi",
        position: "Director of Brand Standards",
        company: "Prestige Hospitality Group",
        image: "/images/avatar-placeholder.jpg"
      }
    ],
    relatedProducts: [
      { id: 'reception-staff-uniform', name: 'Reception Staff Uniform', href: '/shop/hospitality-attire/reception-staff-uniform' },
      { id: 'housekeeping-uniform', name: 'Housekeeping Uniform', href: '/shop/hospitality-attire/housekeeping-uniform' },
      { id: 'restaurant-staff-uniform', name: 'Restaurant Staff Uniform', href: '/shop/hospitality-attire/restaurant-staff-uniform' }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
    { name: 'Concierge Uniform', url: '#', current: true }
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
        name: product.name[locale],
        description: product.description[locale],
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: product.basePrice,
        image: product.images[0].src
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
                <span className="text-neutral-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-neutral-700">{product.description}</p>
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
              <p className="text-sm text-neutral-500 mb-2">Lead time: {product.leadTime}</p>
              <AddToQuoteButton 
  product={product}
  color={selectedColor || undefined}
  size={selectedSize || undefined}
  quantity={quantity}
/>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16">
          <SectionHeading>Product Details</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-neutral-700">{product.longDescription}</p>
              <h3 className="font-semibold text-lg mt-6 mb-3">{content[locale].features_title}</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">{content[locale].specifications_title}</h3>
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
        
        {/* First Impressions Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>The Art of First Impressions</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium Concierge Uniforms are meticulously designed to create powerful first impressions that reflect the prestigious positioning of Saudi Arabia's finest hospitality properties, with special attention to distinguished presentation, comfort, and cultural relevance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Distinguished Presence</h4>
                <p className="text-sm text-neutral-600">Impeccably tailored silhouettes, premium materials, and refined detailing create a commanding yet approachable presence that conveys authority and professionalism, establishing immediate guest confidence in your property's service standards.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Functional Excellence</h4>
                <p className="text-sm text-neutral-600">Strategic performance elements, including moisture-wicking fabrics, discreet stretch components, and reinforced construction, ensure concierge staff maintain an impeccable appearance while performing their duties with comfort and ease throughout extended shifts.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Sophistication</h4>
                <p className="text-sm text-neutral-600">Subtle integration of Saudi design elements and consideration for local aesthetic preferences creates uniforms that honor cultural heritage while maintaining international appeal, perfectly complementing luxury hospitality environments.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Concierge Excellence Program */}
        <div className="mt-16">
          <SectionHeading>Concierge Excellence Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/avatar-placeholder.jpg" 
                  alt="Professional concierge team in premium uniforms at luxury Saudi hotel lobby" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive concierge uniform programs tailored specifically for Saudi Arabia's most prestigious hotels, resorts, and luxury residential properties. From initial design consultation to ongoing uniform management, our specialized team works with property management to develop distinguished uniform systems that enhance your front-of-house presence and reinforce your property's unique positioning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Bespoke Design</h4>
                  <p className="text-sm">Collaborative design process that incorporates your property's unique aesthetic, brand standards, and service philosophy into distinguished concierge attire that becomes an integral part of your property's identity.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Staff Wellness</h4>
                  <p className="text-sm">Ergonomic design considerations, premium comfort features, and climate-optimized construction that supports the physical wellbeing of concierge staff during long periods of standing and guest interaction.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Service Integration</h4>
                  <p className="text-sm">Strategic uniform elements that facilitate exceptional service delivery, from functional pocket configurations to sophisticated accessory systems that complement concierge workflow and guest assistance tasks.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Image Elevation</h4>
                  <p className="text-sm">Distinguished sartorial elements including premium buttons, custom embroidery, and sophisticated accent details that elevate your property's visual presentation and create memorable guest impressions.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Concierge Uniform Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16">
          <SectionHeading>Client Testimonials</SectionHeading>
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
              />
            ))}
          </div>
        </div>
        
        {/* Size Chart Modal */}
        {showSizeChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Concierge Uniform Size Chart</h3>
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
                        <th className="p-2 text-left">Size</th>
                        <th className="p-2 text-left">Chest (cm)</th>
                        <th className="p-2 text-left">Waist (cm)</th>
                        <th className="p-2 text-left">Hip (cm)</th>
                        <th className="p-2 text-left">Sleeve (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XS</td>
                        <td className="p-2">86-91</td>
                        <td className="p-2">71-76</td>
                        <td className="p-2">86-91</td>
                        <td className="p-2">81-82</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">92-97</td>
                        <td className="p-2">77-82</td>
                        <td className="p-2">92-97</td>
                        <td className="p-2">83-84</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">98-103</td>
                        <td className="p-2">83-88</td>
                        <td className="p-2">98-103</td>
                        <td className="p-2">85-86</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">104-109</td>
                        <td className="p-2">89-94</td>
                        <td className="p-2">104-109</td>
                        <td className="p-2">87-88</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">110-115</td>
                        <td className="p-2">95-100</td>
                        <td className="p-2">110-115</td>
                        <td className="p-2">89-90</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">116-121</td>
                        <td className="p-2">101-106</td>
                        <td className="p-2">116-121</td>
                        <td className="p-2">91-92</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">122-127</td>
                        <td className="p-2">107-112</td>
                        <td className="p-2">122-127</td>
                        <td className="p-2">93-94</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: These measurements are general guidelines. For concierge uniforms, 
                    we recommend our professional measurement service to ensure the precise, 
                    tailored fit that distinguishes premium front-of-house staff. 
                    Custom sizing and alterations are available for your concierge team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    
      </div>
  );
} 