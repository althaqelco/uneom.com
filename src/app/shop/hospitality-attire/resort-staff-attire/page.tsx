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

export default function ResortStaffAttirePage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Beige');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(10);
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
      description: 'Premium resort staff uniforms designed for comfort and style in luxury Saudi Arabian resorts and vacation destinations, combining elegance with practicality for hospitality professionals.',
      longDescription: 'Our Resort Staff Attire is thoughtfully designed for the unique needs of luxury resort environments in Saudi Arabia. These premium uniforms blend relaxed sophistication with practical functionality, featuring specialized climate-adaptive fabrics that ensure staff comfort throughout the day in both indoor and outdoor settings. The distinctive resort styling projects a welcoming, vacation-ready aesthetic while maintaining professional appearance and brand alignment. Available in coordinated collections that can distinguish different departments while maintaining a cohesive resort identity, these uniforms are perfect for front desk, concierge, pool staff, resort activities, and guest services teams. Each piece is engineered for comfort in Saudi Arabia\'s climate with breathable, quick-drying fabrics that resist fading from sun exposure.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
        { name: 'Resort Staff Attire', url: '#', current: true }
      ],
      features: [
        'Climate-adaptive fabric ideal for Saudi Arabian resort environments',
        'Moisture-wicking, quick-drying technology for indoor and outdoor use',
        'UV-resistant materials that maintain color vibrancy with sun exposure',
        'Relaxed yet professional silhouettes for resort atmosphere',
        'Coordinated departmental designs with consistent brand aesthetic',
        'Lightweight construction for all-day comfort in warm environments',
        'Specialized pockets and features for resort service tools and accessories',
        'Available in modest options suitable for Saudi Arabian staff requirements'
      ],
      specifications: [
        { name: 'Material', value: '60% Premium Cotton, 37% Polyester, 3% Elastane with UV and moisture-wicking treatments' },
        { name: 'Weight', value: 'Lightweight (160-180 gsm) for warm climate comfort' },
        { name: 'Available Sizes', value: 'XS to 3XL (Men\'s and Women\'s resort cuts)' },
        { name: 'Colors', value: 'Beige, Soft Blue, Sea Green, Coral, Sand, White' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Machine washable, quick-drying, minimal ironing required' },
        { name: 'Customization Options', value: 'Resort logo embroidery, custom colors, departmental distinction elements' }
      ],
      variants: [
        { name: 'Front Desk Resort Collection', price: 'SAR 375' },
        { name: 'Pool & Recreation Staff Attire', price: 'SAR 340' },
        { name: 'Resort Activities Uniform', price: 'SAR 360' },
        { name: 'Guest Services Ensemble', price: 'SAR 395' }
      ],
      testimonial: {
        quote: "The Resort Staff Attire from UNEOM has transformed our team's experience during Saudi Arabia's warm seasons. The lightweight, breathable fabrics keep our staff comfortable whether they're assisting guests poolside or in air-conditioned spaces. The coordinated collection allows us to maintain a cohesive resort aesthetic while distinguishing between departments. Guests frequently comment on how our staff's appearance perfectly complements our luxury beachfront environment.",
        author: "Nora Al-Faisal",
        position: "Resort Operations Director",
        company: "Azure Bay Luxury Resort & Spa"
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
      title: 'زي موظفي المنتجع',
      description: 'أزياء فاخرة لموظفي المنتجعات مصممة للراحة والأناقة في المنتجعات ووجهات العطلات الفاخرة في المملكة العربية السعودية، تجمع بين الأناقة والعملية للمتخصصين في الضيافة.',
      longDescription: 'تم تصميم زي موظفي المنتجع لدينا بعناية للاحتياجات الفريدة لبيئات المنتجعات الفاخرة في المملكة العربية السعودية. تمزج هذه الأزياء الفاخرة بين التطور المريح والوظائف العملية، وتتميز بأقمشة متخصصة متكيفة مع المناخ تضمن راحة الموظفين طوال اليوم في البيئات الداخلية والخارجية. يعرض تصميم المنتجع المميز جمالية ترحيبية وجاهزة للعطلات مع الحفاظ على المظهر المهني ومواءمة العلامة التجارية. متوفرة في مجموعات منسقة يمكن أن تميز الأقسام المختلفة مع الحفاظ على هوية متماسكة للمنتجع، هذه الأزياء مثالية لفرق مكتب الاستقبال والكونسيرج وموظفي المسبح وأنشطة المنتجع وخدمات الضيوف. تم تصميم كل قطعة للراحة في مناخ المملكة العربية السعودية مع أقمشة قابلة للتنفس وسريعة الجفاف تقاوم التلاشي من التعرض للشمس.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس الضيافة', url: '/ar/shop/hospitality-attire' },
        { name: 'زي موظفي المنتجع', url: '#', current: true }
      ],
      features: [
        'قماش متكيف مع المناخ مثالي لبيئات المنتجعات السعودية',
        'تقنية امتصاص الرطوبة وسريعة الجفاف للاستخدام الداخلي والخارجي',
        'مواد مقاومة للأشعة فوق البنفسجية تحافظ على حيوية اللون مع التعرض للشمس',
        'تصاميم مريحة ومهنية لأجواء المنتجع',
        'تصاميم قسمية منسقة مع جمالية علامة تجارية متسقة',
        'بناء خفيف الوزن للراحة طوال اليوم في البيئات الدافئة',
        'جيوب وميزات متخصصة لأدوات وإكسسوارات خدمة المنتجع',
        'متوفر بخيارات محتشمة مناسبة لمتطلبات الموظفين السعوديين'
      ],
      specifications: [
        { name: 'المادة', value: '60٪ قطن فاخر، 37٪ بوليستر، 3٪ إيلاستين مع معالجات للأشعة فوق البنفسجية وامتصاص الرطوبة' },
        { name: 'الوزن', value: 'خفيف الوزن (160-180 جرام للمتر المربع) لراحة المناخ الدافئ' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 3XL (قصات منتجع للرجال والنساء)' },
        { name: 'الألوان', value: 'بيج، أزرق فاتح، أخضر بحري، مرجاني، رملي، أبيض' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، سريع الجفاف، يتطلب كي بسيط' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار المنتجع، ألوان مخصصة، عناصر تمييز قسمية' }
      ],
      variants: [
        { name: 'مجموعة مكتب الاستقبال للمنتجع', price: 'ريال 375' },
        { name: 'زي موظفي المسبح والترفيه', price: 'ريال 340' },
        { name: 'زي أنشطة المنتجع', price: 'ريال 360' },
        { name: 'مجموعة خدمات الضيوف', price: 'ريال 395' }
      ],
      testimonial: {
        quote: "لقد غير زي موظفي المنتجع من UNEOM تجربة فريقنا خلال المواسم الدافئة في المملكة العربية السعودية. تحافظ الأقمشة الخفيفة والقابلة للتنفس على راحة موظفينا سواء كانوا يساعدون الضيوف بجانب المسبح أو في الأماكن المكيفة. تسمح لنا المجموعة المنسقة بالحفاظ على جمالية متماسكة للمنتجع مع التمييز بين الأقسام. غالبًا ما يعلق الضيوف على كيفية تكميل مظهر موظفينا بشكل مثالي لبيئة الشاطئ الفاخرة لدينا.",
        author: "نورة الفيصل",
        position: "مديرة عمليات المنتجع",
        company: "منتجع وسبا الخليج الأزرق الفاخر"
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
    id: 'resort-staff-attire',
    name: 'Resort Staff Attire',
    price: "480",
    basePrice: "480",
    rating: 4.7,
    reviews: 32,
    inStock: true,
    minOrder: 12,
    leadTime: '14-20 days',
    customization: true,
    images: [
      { src: '/images/products/hotel-uniform.jpg', alt: 'Resort staff in professional attire greeting guests' },
      { src: '/images/hospitality/hospitality_uniform_concierge.jpg', alt: 'Resort team members in coordinated uniforms' },
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'Resort staff in lightweight professional clothing' },
      { src: '/images/hospitality/hospitality_uniform_department.jpg', alt: 'Guest services staff in resort uniform' }
    ],
    colors: [
      { name: 'Beige', value: '#F5F5DC' },
      { name: 'Soft Blue', value: '#ADD8E6' },
      { name: 'Sea Green', value: '#2E8B57' },
      { name: 'Coral', value: '#FF7F50' },
      { name: 'Sand', value: '#C2B280' },
      { name: 'White', value: '#FFFFFF' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    relatedProducts: [
      { id: 'reception-staff-uniform', name: 'Reception Staff Uniform', href: '/shop/hospitality-attire/reception-staff-uniform' },
      { id: 'housekeeping-uniform', name: 'Housekeeping Uniform', href: '/shop/hospitality-attire/housekeeping-uniform' },
      { id: 'restaurant-staff-uniform', name: 'Restaurant Staff Uniform', href: '/shop/hospitality-attire/restaurant-staff-uniform' }
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