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

export default function HousekeepingUniformPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Teal Green');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
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
      description: 'Professional housekeeping uniforms designed for comfort and durability in Saudi Arabia\'s hospitality sector, featuring practical design elements and modern styling.',
      longDescription: 'Our premium Housekeeping Uniforms are specifically designed for the unique needs of housekeeping staff in Saudi Arabia\'s hospitality sector. These uniforms combine practical functionality with professional appearance to enhance staff efficiency while maintaining a polished hotel image. Crafted from durable, stain-resistant fabrics that withstand rigorous cleaning duties and frequent washing, these uniforms feature thoughtful design elements like reinforced pockets, strategic stretch panels, and comfortable fits that facilitate movement during housekeeping tasks. Available in both traditional and modern styles with modest design options, our housekeeping uniforms ensure your staff maintain a professional appearance while working comfortably throughout their shifts.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
        { name: 'Housekeeping Uniform', url: '#', current: true }
      ],
      features: [
        'Durable fabric blend with exceptional stain resistance',
        'Reinforced seams for extended durability with daily use',
        'Practical pocket configuration for housekeeping essentials',
        'Comfortable design for ease of movement during tasks',
        'Modest options suitable for Saudi Arabian staff requirements',
        'Easy-care properties that maintain appearance after multiple washes',
        'Breathable materials adapted for active cleaning duties',
        'Professional styling that complements hotel brand image'
      ],
      specifications: [
        { name: 'Material', value: '65% Polyester, 35% Cotton with stain-resistant treatment' },
        { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
        { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s cuts)' },
        { name: 'Colors', value: 'Teal Green, Navy Blue, Charcoal Grey, Burgundy, Khaki' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Machine washable, industrial laundry compatible' },
        { name: 'Customization Options', value: 'Hotel logo embroidery, name badges, custom colors' }
      ],
      variants: [
        { name: 'Standard Housekeeping Tunic', price: 'SAR 175' },
        { name: 'Executive Housekeeping Set', price: 'SAR 225' },
        { name: 'Deluxe Housekeeping Uniform', price: 'SAR 250' },
        { name: 'Supervisor Housekeeping Attire', price: 'SAR 295' }
      ],
      testimonial: {
        quote: "The housekeeping uniforms from UNEOM have tremendously improved both staff comfort and professional appearance. The durable fabrics stand up to the rigorous demands of daily cleaning duties, while the stain-resistant properties help maintain a crisp, professional look throughout long shifts. Our housekeeping staff particularly appreciate the thoughtful pocket designs and comfortable fit that facilitates their work.",
        author: "Aisha Al-Mahmoud",
        position: "Executive Housekeeper",
        company: "Grand Oasis Hotel Jeddah"
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
      title: 'زي التدبير المنزلي',
      description: 'أزياء تدبير منزلي احترافية مصممة للراحة والمتانة في قطاع الضيافة السعودي، تتميز بعناصر تصميم عملية وتصميم عصري.',
      longDescription: 'تم تصميم أزياء التدبير المنزلي المتميزة لدينا خصيصًا للاحتياجات الفريدة لموظفي التدبير المنزلي في قطاع الضيافة السعودي. تجمع هذه الأزياء بين الوظائف العملية والمظهر المهني لتعزيز كفاءة الموظفين مع الحفاظ على صورة فندقية مصقولة. مصنوعة من أقمشة متينة ومقاومة للبقع تتحمل مهام التنظيف الدقيقة والغسيل المتكرر، تتميز هذه الأزياء بعناصر تصميم مدروسة مثل الجيوب المعززة ولوحات الامتداد الاستراتيجية والمقاسات المريحة التي تسهل الحركة أثناء مهام التدبير المنزلي. متوفرة بأنماط تقليدية وحديثة مع خيارات تصميم محتشمة، تضمن أزياء التدبير المنزلي لدينا حفاظ موظفيك على مظهر احترافي أثناء العمل براحة طوال مناوباتهم.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس الضيافة', url: '/ar/shop/hospitality-attire' },
        { name: 'زي التدبير المنزلي', url: '#', current: true }
      ],
      features: [
        'مزيج قماش متين مع مقاومة استثنائية للبقع',
        'درزات معززة لمتانة ممتدة مع الاستخدام اليومي',
        'تكوين جيب عملي للمستلزمات الأساسية للتدبير المنزلي',
        'تصميم مريح لسهولة الحركة أثناء المهام',
        'خيارات محتشمة مناسبة لمتطلبات الموظفين السعوديين',
        'خصائص سهلة العناية تحافظ على المظهر بعد عمليات غسيل متعددة',
        'مواد قابلة للتنفس مكيفة لواجبات التنظيف النشطة',
        'تصميم احترافي يكمل صورة العلامة التجارية للفندق'
      ],
      specifications: [
        { name: 'المادة', value: '65٪ بوليستر، 35٪ قطن مع معالجة مقاومة للبقع' },
        { name: 'الوزن', value: 'وزن متوسط (180-200 جرام للمتر المربع)' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 4XL (قصات للرجال والنساء)' },
        { name: 'الألوان', value: 'رمادي داكن، أزرق بحري، أسود، نبيذي، أخضر غابي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، متوافق مع الغسيل الصناعي' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار الفندق، شارات الأسماء، ألوان مخصصة' }
      ],
      variants: [
        { name: 'سترة تدبير منزلي قياسية', price: 'ريال 175' },
        { name: 'مجموعة تدبير منزلي تنفيذية', price: 'ريال 225' },
        { name: 'زي تدبير منزلي فاخر', price: 'ريال 250' },
        { name: 'زي مشرف التدبير المنزلي', price: 'ريال 295' }
      ],
      testimonial: {
        quote: "لقد حسنت أزياء التدبير المنزلي من UNEOM بشكل كبير راحة الموظفين والمظهر المهني. تصمد الأقمشة المتينة أمام المتطلبات الصارمة لواجبات التنظيف اليومية، بينما تساعد خصائص مقاومة البقع في الحفاظ على مظهر حاد ومهني طوال المناوبات الطويلة. يقدر موظفو التدبير المنزلي لدينا بشكل خاص تصميمات الجيوب المدروسة والمقاس المريح الذي يسهل عملهم.",
        author: "عائشة المحمود",
        position: "مديرة التدبير المنزلي التنفيذية",
        company: "فندق الواحة الكبير جدة"
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
    id: 'housekeeping-uniform',
    name: 'Professional Housekeeping Uniform',
    price: 'From SAR 285',
    basePrice: "285",
    rating: 4.8,
    reviews: 94,
    description: 'Durable professional housekeeping uniforms designed specifically for Saudi Arabia\'s luxury hospitality sector, featuring stain-resistant technology, ergonomic design, and modest options that combine practicality with sophisticated hospitality presentation.',
    longDescription: 'Our Professional Housekeeping Uniforms are engineered to meet the demanding requirements of housekeeping staff in Saudi Arabia\'s most prestigious hotels, resorts, and corporate facilities. Each uniform incorporates advanced stain-resistant and antimicrobial technologies that maintain a pristine appearance through intensive cleaning duties while protecting staff in environments with increased exposure to cleaning agents. The strategic stretchable panels and ergonomic design ensure exceptional freedom of movement for bending, reaching, and lifting tasks common in housekeeping roles, reducing fatigue during long shifts. The thoughtfully designed uniform balances practical functionality with sophisticated presentation, ensuring housekeeping staff project the polished image expected in luxury hospitality environments while having the utility features necessary for efficient service delivery. Available in both traditional and contemporary silhouettes with options for modest design variations, these housekeeping uniforms ensure appropriate cultural sensitivity while meeting the practical demands of rigorous housekeeping duties.',
    features: [
      'Advanced stain-resistant fabric technology ideal for cleaning and maintenance duties',
      'Antimicrobial treatment protects staff during intensive housekeeping activities',
      'Ergonomic design with strategic stretch panels for unrestricted movement during cleaning tasks',
      'Reinforced stitching at high-stress points for exceptional durability in demanding environments',
      'Modest design options with appropriate coverage for Saudi hospitality standards',
      'Climate-optimized breathable construction for comfort during physical housekeeping duties',
      'Specialized utility pockets for essential housekeeping tools and supplies',
      'Discreet property branding options that maintain a sophisticated appearance'
    ],
    specifications: [
      { name: 'Material', value: '65% Performance Polyester, 32% Cotton, 3% Elastane with advanced stain-resistant treatment' },
      { name: 'Weight', value: 'Medium weight (220-240 gsm) for durability and comfort' },
      { name: 'Style Options', value: 'Traditional Tunic Set, Modern Utility Set, Executive Housekeeping Ensemble, Modest Professional Set' },
      { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s practical cuts)' },
      { name: 'Colors', value: 'Teal Green, Navy Blue, Charcoal Grey, Burgundy, Khaki (property-specific colors available)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Property embroidery, department identification, fabric reinforcement in high-wear areas' }
    ],
    images: [
      { src: '/images/hospitality/hotel-staff-uniform.jpg', alt: 'Professional housekeeping staff in durable uniform maintaining luxury hotel room' },
      { src: '/images/hospitality/housekeeping-uniform.jpg', alt: 'Female housekeeper in modest uniform with ergonomic design features at Saudi luxury hotel' },
      { src: '/images/hospitality/hospitality_uniform_department.jpg', alt: 'Hotel housekeeping team in coordinated professional uniforms maintaining property standards' },
      { src: '/images/hospitality/hotel-housekeeping.jpg', alt: 'Saudi housekeeping staff in culturally appropriate professional uniforms at five-star property' }
    ],
    category: 'Hospitality Attire',
    categorySlug: 'hospitality-attire',
    inStock: true,
    minOrder: 30,
    leadTime: '15-20 days',
    customization: true,
    variants: [
      { name: 'Standard Housekeeping Set', price: 'SAR 285' },
      { name: 'Premium Housekeeping Ensemble', price: 'SAR 325' },
      { name: 'Executive Housekeeping Uniform', price: 'SAR 345' },
      { name: 'Modest Professional Set', price: 'SAR 305' },
      { name: 'Utility Housekeeping Collection', price: 'SAR 295' }
    ],
    colors: [
      { name: 'Teal Green', value: '#008080', image: '/images/hospitality/hotel-staff-uniform.jpg' },
      { name: 'Navy Blue', value: '#000080', image: '/images/hospitality/hospitality_uniform_blue.jpg' },
      { name: 'Charcoal Grey', value: '#36454F', image: '/images/hospitality/hospitality_uniform_grey.jpg' },
      { name: 'Burgundy', value: '#800020', image: '/images/hospitality/hospitality_hotel_reception.jpg' },
      { name: 'Khaki', value: '#C3B091', image: '/images/hospitality/hospitality_uniform_formal.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double XL (20-22)',
      '3XL': 'Triple XL (24-26)',
      '4XL': 'Quadruple XL (28-30)'
    },
    testimonials: [
      {
        quote: "The Professional Housekeeping Uniforms from Uneom have revolutionized our housekeeping operations. The stain-resistant technology and durability are exceptional - even after months of daily use with cleaning chemicals, they maintain their professional appearance. The ergonomic design has noticeably reduced staff fatigue, while the modest options have been embraced by our Saudi team members who appreciate the cultural consideration.",
        author: "Noura Al-Otaibi",
        position: "Executive Housekeeper",
        company: "Luxury Heights Hotel & Towers",
        image: "/images/clients/adult-beautiful-muslim-woman-with-hijab-on-head-smiling-for-camera-in-room-SBI-351089408.jpg"
      },
      {
        quote: "After implementing Uneom's Professional Housekeeping Uniforms across our hotel chain, we've documented a significant improvement in both efficiency and staff satisfaction. The practical features like reinforced pockets and strategic stretch panels support our rigorous cleaning standards, while the professional appearance elevates our brand image. Even with daily intensive cleaning duties, these uniforms maintain their quality and appearance far longer than previous options we've tried.",
        author: "Ahmad Al-Zahrani",
        position: "Director of Accommodation Services",
        company: "Royal Hospitality Group",
        image: "/images/clients/modern-arabic-businessman-SBI-300984397.jpg"
      }
    ],
    relatedProducts: [
      { id: 'reception-staff-uniform', name: 'Reception Staff Uniform', href: '/shop/hospitality-attire/reception-staff-uniform' },
      { id: 'concierge-uniform', name: 'Concierge Uniform', href: '/shop/hospitality-attire/concierge-uniform' },
      { id: 'restaurant-staff-uniform', name: 'Restaurant Staff Uniform', href: '/shop/hospitality-attire/restaurant-staff-uniform' }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
    { name: 'Housekeeping Uniform', url: '#', current: true }
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
                <span className="text-neutral-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
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
                    className={`py-2 px-4 border rounded-md text-center ${selectedSize === size
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

        {/* Operational Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Operational Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Professional Housekeeping Uniforms are meticulously engineered to meet the demanding requirements of Saudi Arabia's luxury hospitality sector, with special attention to practical functionality, staff wellbeing, and cultural appropriateness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Practical Performance</h4>
                <p className="text-sm text-neutral-600">Advanced stain-resistant technology, antimicrobial protection, and reinforced construction provide exceptional durability and cleanliness in demanding housekeeping environments, maintaining a professional appearance throughout intensive cleaning duties.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Staff Comfort & Safety</h4>
                <p className="text-sm text-neutral-600">Ergonomic design with strategic stretch panels reduces fatigue during physically demanding housekeeping tasks, while durable, breathable fabrics enhance comfort throughout long shifts in Saudi Arabia's climate.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Consideration</h4>
                <p className="text-sm text-neutral-600">Thoughtfully designed modest options respect Saudi cultural values while maintaining the practical functionality essential for housekeeping duties, ensuring comfort and confidence for local staff members.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Housekeeping Uniform Program */}
        <div className="mt-16">
          <SectionHeading>Housekeeping Excellence Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/hospitality/hospitality_uniform_hotel_service.jpg"
                  alt="Professional housekeeping team in coordinated uniforms during staff briefing at luxury hotel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive housekeeping uniform programs for Saudi Arabia's most prestigious hotels, resorts, and corporate facilities. From functional design to staff comfort, our specialized housekeeping team works with property management to develop uniform systems that enhance operational efficiency while maintaining the sophisticated image expected in luxury hospitality environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Operational Efficiency</h4>
                  <p className="text-sm">Custom functional elements including specialized pocket configurations, durable material reinforcement, and practical accessories that enhance housekeeping productivity in luxury property environments.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Staff Wellbeing</h4>
                  <p className="text-sm">Ergonomic design considerations, breathable fabrics, and performance features that reduce fatigue during physically demanding duties, supporting staff health and retention in challenging housekeeping roles.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Departmental Coordination</h4>
                  <p className="text-sm">Coordinated uniform systems that visually integrate with other property departments while maintaining the practical features needed for housekeeping duties, creating a cohesive property appearance.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Brand Integration</h4>
                  <p className="text-sm">Sophisticated housekeeping attire that reflects property branding through subtle design elements, color coordination, and discrete logo application, elevating the perception of housekeeping staff.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Housekeeping Uniform Consultation</Button>
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

        {/* Size Chart Modal */}
        {showSizeChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Housekeeping Uniform Size Chart</h3>
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
                    Note: These measurements are general guidelines. For housekeeping staff uniforms,
                    we recommend our professional measurement service to ensure a precise,
                    comfortable fit that accommodates the physical movements required in housekeeping duties.
                    Custom sizing and ergonomic adjustments are available for your housekeeping team.
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