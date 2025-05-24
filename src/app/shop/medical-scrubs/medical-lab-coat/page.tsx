'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
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
  specifications_title: string;
  features_title: string;
  relatedProducts: string;
}

type ContentType = {
  en: LocaleContent;
  ar: LocaleContent;
  [key: string]: LocaleContent;
}

export default function MedicalLabCoatPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Pure White');
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
      description: 'Premium quality medical lab coats for healthcare professionals, featuring durable, stain-resistant fabric with antimicrobial properties - perfect for hospitals and clinics across Saudi Arabia.',
      longDescription: 'Our Medical Lab Coats are designed specifically for the needs of healthcare professionals in Saudi Arabia. Made from high-quality, durable fabric with antimicrobial properties, these lab coats offer superior protection while maintaining comfort during long shifts. The stain-resistant treatment ensures a professional appearance throughout the day, while the breathable fabric keeps you cool in busy hospital environments. Available in various sizes and styles, including options that comply with modest dress requirements.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
        { name: 'Medical Lab Coat', url: '#', current: true }
      ],
      features: [
        'High-quality polyester-cotton blend (65/35) with antimicrobial treatment',
        'Durable, stain-resistant fabric for long-lasting professional appearance',
        'Breathable material ideal for Saudi healthcare environments',
        'Multiple pocket configurations for practical storage of tools and devices',
        'Available in several lengths and styles, including modest options',
        'Customizable with embroidery for hospital logos and personal names'
      ],
      specifications: [
        { name: 'Material', value: '65% Polyester, 35% Cotton with antimicrobial treatment' },
        { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
        { name: 'Length Options', value: 'Standard (36"), Long (40")' },
        { name: 'Available Sizes', value: 'XS to 3XL (Unisex and Women\'s cuts available)' },
        { name: 'Colors', value: 'Pure White, Soft White, Light Blue, Mint Green' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Customization Options', value: 'Embroidery, pocket configurations, button or snap front' }
      ],
      variants: [
        { name: 'Standard Medical Lab Coat', price: 'SAR 195' },
        { name: 'Long Medical Lab Coat', price: 'SAR 225' },
        { name: 'Women\'s Fitted Lab Coat', price: 'SAR 210' },
        { name: 'Student Medical Lab Coat', price: 'SAR 180' },
      ],
      testimonial: {
        quote: "The medical lab coats from UNEOM have greatly improved our staff's professional appearance. The antimicrobial protection gives us confidence in high-traffic hospital environments, and the fabric quality holds up remarkably well to frequent washing. The customization options allowed us to add our hospital logo, creating a unified look across departments.",
        author: "Dr. Fatima Al-Harbi",
        position: "Head of Nursing",
        company: "King Fahd Medical City"
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
      title: 'معطف مختبر طبي',
      description: 'معاطف مختبر طبية عالية الجودة للمتخصصين في الرعاية الصحية، تتميز بقماش متين ومقاوم للبقع مع خصائص مضادة للميكروبات - مثالية للمستشفيات والعيادات في جميع أنحاء المملكة العربية السعودية.',
      longDescription: 'تم تصميم معاطف المختبر الطبية لدينا خصيصًا لتلبية احتياجات المتخصصين في الرعاية الصحية في المملكة العربية السعودية. مصنوعة من قماش عالي الجودة ومتين مع خصائص مضادة للميكروبات، توفر هذه المعاطف حماية فائقة مع الحفاظ على الراحة خلال المناوبات الطويلة. تضمن المعالجة المقاومة للبقع مظهرًا مهنيًا طوال اليوم، بينما يحافظ القماش القابل للتنفس على برودتك في بيئات المستشفى المزدحمة. متوفرة بأحجام وأنماط مختلفة، بما في ذلك خيارات تتوافق مع متطلبات اللباس المحتشم.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس طبية', url: '/ar/shop/medical-scrubs' },
        { name: 'معطف مختبر طبي', url: '#', current: true }
      ],
      features: [
        'مزيج بوليستر وقطن عالي الجودة (65/35) مع معالجة مضادة للميكروبات',
        'قماش متين ومقاوم للبقع للحصول على مظهر مهني طويل الأمد',
        'مادة قابلة للتنفس مثالية لبيئات الرعاية الصحية السعودية',
        'تكوينات جيب متعددة للتخزين العملي للأدوات والأجهزة',
        'متوفر بعدة أطوال وأنماط، بما في ذلك الخيارات المحتشمة',
        'قابل للتخصيص مع التطريز لشعارات المستشفى والأسماء الشخصية'
      ],
      specifications: [
        { name: 'المادة', value: '65٪ بوليستر، 35٪ قطن مع معالجة مضادة للميكروبات' },
        { name: 'الوزن', value: 'وزن متوسط (180-200 غرام للمتر المربع)' },
        { name: 'خيارات الطول', value: 'قياسي (36 بوصة)، طويل (40 بوصة)' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 3XL (متوفر قصات للجنسين وللنساء)' },
        { name: 'الألوان', value: 'أبيض نقي، أبيض ناعم، أزرق فاتح، أخضر نعناعي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'خيارات التخصيص', value: 'تطريز، تكوينات الجيب، أزرار أو أمام سنابي' }
      ],
      variants: [
        { name: 'معطف مختبر طبي قياسي', price: 'ريال 195' },
        { name: 'معطف مختبر طبي طويل', price: 'ريال 225' },
        { name: 'معطف مختبر نسائي', price: 'ريال 210' },
        { name: 'معطف مختبر طبي للطلاب', price: 'ريال 180' },
      ],
      testimonial: {
        quote: "لقد حسنت معاطف المختبر الطبية من UNEOM بشكل كبير من المظهر المهني لموظفينا. تمنحنا الحماية المضادة للميكروبات الثقة في بيئات المستشفى ذات الحركة المرورية العالية، ويصمد القماش عالي الجودة بشكل رائع مع الغسيل المتكرر. سمحت لنا خيارات التخصيص بإضافة شعار مستشفانا، مما خلق مظهرًا موحدًا عبر الأقسام.",
        author: "د. فاطمة الحربي",
        position: "رئيسة التمريض",
        company: "مدينة الملك فهد الطبية"
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
    id: 'medical-lab-coat',
    name: 'Medical Lab Coat',
    price: "195",
    basePrice: "195",
    rating: 4.7,
    reviews: 87,
    inStock: true,
    minOrder: 20,
    leadTime: '10-12 days',
    customization: true,
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Medical professional wearing lab coat' },
      { src: '/images/default-placeholder.jpg', alt: 'Diverse healthcare professionals in medical attire' },
      { src: '/images/avatar-placeholder.jpg', alt: 'Medical team in hospital corridor' },
      { src: '/images/default-placeholder.jpg', alt: 'Doctor smiling in lab coat' }
    ],
    colors: [
      { name: 'Pure White', value: '#FFFFFF' },
      { name: 'Soft White', value: '#F5F5F5' },
      { name: 'Light Blue', value: '#ADD8E6' },
      { name: 'Mint Green', value: '#98FB98' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double XL (20-22)',
      '3XL': 'Triple XL (24-26)',
    },
    relatedProducts: [
      { id: 'professional-lab-coat', name: 'Professional Lab Coat', href: '/shop/medical-scrubs/professional-lab-coat' },
      { id: 'executive-medical-uniform', name: 'Executive Medical Uniform', href: '/shop/medical-scrubs/executive-medical-uniform' },
      { id: 'surgical-scrubs', name: 'Surgical Scrubs', href: '/shop/medical-scrubs/surgical-scrubs' }
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