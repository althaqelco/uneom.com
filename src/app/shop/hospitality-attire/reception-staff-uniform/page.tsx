'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
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
  styling_options: string[];
  styling_title: string;
}

type ContentType = {
  en: LocaleContent;
  ar: LocaleContent;
  [key: string]: LocaleContent;
}

export default function ReceptionStaffUniformPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
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
      title: 'Reception Staff Uniform',
      description: 'Premium reception staff uniforms designed to create a polished and professional first impression for your hospitality establishment in Saudi Arabia.',
      longDescription: 'Our Reception Staff Uniforms are meticulously crafted to reflect the professionalism and hospitality of your establishment\'s front line. Designed specifically for the Saudi hospitality industry, these premium uniforms combine elegant styling with practical functionality to ensure your reception staff make a lasting positive impression on guests. The tailored silhouettes create a refined appearance while the high-performance fabrics provide comfort during long shifts at the front desk. Available in a range of sophisticated colors that can be coordinated with your brand identity, these uniforms offer both modesty and style for Saudi Arabian hospitality environments.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
        { name: 'Reception Staff Uniform', url: '#', current: true }
      ],
      features: [
        'Premium fabric blend with wrinkle-resistant properties',
        'Tailored professional fit designed for front-desk staff',
        'Sophisticated color options with coordinating accessories',
        'Reinforced seams for extended durability in busy environments',
        'Modest design options suitable for Saudi Arabian hospitality settings',
        'Breathable materials adapted for long shift comfort',
        'Professional style elements including pocket squares and scarves',
        'Available in both male and female styling options'
      ],
      specifications: [
        { name: 'Material', value: '65% Polyester, 35% Cotton with wrinkle-resistant treatment' },
        { name: 'Weight', value: 'Medium weight (180-220 gsm)' },
        { name: 'Available Sizes', value: 'XS to 3XL (Men\'s and Women\'s cuts)' },
        { name: 'Colors', value: 'Navy Blue, Charcoal Grey, Burgundy, Royal Blue, Black' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Machine washable, easy-care fabric' },
        { name: 'Customization Options', value: 'Hotel logo embroidery, custom color piping, personalized name badges' }
      ],
      variants: [
        { name: 'Standard Reception Uniform', price: 'SAR 450' },
        { name: 'Deluxe Reception Ensemble', price: 'SAR 550' },
        { name: 'Premium Front Desk Uniform', price: 'SAR 625' },
        { name: 'Executive Reception Set', price: 'SAR 695' }
      ],
      styling_options: [
        'Traditional Saudi styling with contemporary elements',
        'International luxury hotel standards with modest adaptations',
        'Brand-matched color accents and custom design elements',
        'Seasonal options with lightweight summer and warmer winter variants',
        'Coordinated accessories including scarves, ties, and pocket squares'
      ],
      testimonial: {
        quote: "The reception uniforms from UNEOM have significantly enhanced our front desk presence. The elegant styling perfectly represents our brand while the practical design ensures our staff remain comfortable throughout their shifts. The modest yet contemporary styling is perfectly suited to our Saudi clientele, and the quality has withstood daily wear impressively.",
        author: "Mohammed Al-Qahtani",
        position: "Front Office Manager",
        company: "Luxury Oasis Hotel Riyadh"
      },
      sizeChart: "Size Chart",
      colors: "Colors",
      quantity: "Quantity",
      minOrder: "Minimum order",
      addToQuote: "Add to Quote",
      viewSimilar: "View Similar Products",
      features_title: "Key Features",
      specifications_title: "Specifications",
      styling_title: "Styling Options",
      relatedProducts: "Related Products"
    },
    ar: {
      title: 'زي موظفي الاستقبال',
      description: 'أزياء فاخرة لموظفي الاستقبال مصممة لخلق انطباع أول مصقول ومهني لمنشأة الضيافة الخاصة بك في المملكة العربية السعودية.',
      longDescription: 'تم تصميم أزياء موظفي الاستقبال لدينا بدقة لتعكس الاحترافية والضيافة في الخط الأمامي لمؤسستك. مصممة خصيصًا لصناعة الضيافة السعودية، تجمع هذه الأزياء الفاخرة بين الأناقة العملية والوظائف العملية لضمان أن يترك موظفو الاستقبال لديك انطباعًا إيجابيًا دائمًا على الضيوف. تخلق الخطوط المصممة مظهرًا منقحًا بينما توفر الأقمشة عالية الأداء الراحة خلال المناوبات الطويلة في مكتب الاستقبال. متوفرة بمجموعة من الألوان المتطورة التي يمكن تنسيقها مع هوية علامتك التجارية، توفر هذه الأزياء الاحتشام والأناقة لبيئات الضيافة السعودية.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس الضيافة', url: '/ar/shop/hospitality-attire' },
        { name: 'زي موظفي الاستقبال', url: '#', current: true }
      ],
      features: [
        'مزيج قماش فاخر مع خصائص مقاومة للتجعد',
        'قصة مهنية مصممة لموظفي مكتب الاستقبال',
        'خيارات ألوان متطورة مع إكسسوارات منسقة',
        'درزات معززة لمتانة ممتدة في البيئات المزدحمة',
        'خيارات تصميم محتشمة مناسبة لإعدادات الضيافة السعودية',
        'مواد قابلة للتنفس مكيفة لراحة المناوبات الطويلة',
        'عناصر أسلوب احترافية بما في ذلك مناديل الجيب والأوشحة',
        'متوفر في خيارات التصميم للرجال والنساء'
      ],
      specifications: [
        { name: 'المادة', value: '65٪ بوليستر، 35٪ قطن مع معالجة مقاومة للتجعد' },
        { name: 'الوزن', value: 'وزن متوسط (180-220 جرام للمتر المربع)' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 3XL (قصات للرجال والنساء)' },
        { name: 'الألوان', value: 'أزرق بحري، رمادي فحمي، نبيذي، أزرق ملكي، أسود' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، قماش سهل العناية' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار الفندق، حواف بألوان مخصصة، شارات أسماء شخصية' }
      ],
      variants: [
        { name: 'زي استقبال قياسي', price: 'ريال 450' },
        { name: 'مجموعة استقبال فاخرة', price: 'ريال 550' },
        { name: 'زي مكتب استقبال متميز', price: 'ريال 625' },
        { name: 'مجموعة استقبال تنفيذية', price: 'ريال 695' }
      ],
      styling_options: [
        'تصميم سعودي تقليدي مع عناصر معاصرة',
        'معايير فنادق فاخرة دولية مع تعديلات محتشمة',
        'ألوان متناسقة مع العلامة التجارية وعناصر تصميم مخصصة',
        'خيارات موسمية مع بدائل صيفية خفيفة وشتوية أكثر دفئًا',
        'إكسسوارات منسقة تشمل الأوشحة وربطات العنق ومناديل الجيب'
      ],
      testimonial: {
        quote: "لقد عززت أزياء الاستقبال من UNEOM بشكل كبير من وجودنا في مكتب الاستقبال. التصميم الأنيق يمثل علامتنا التجارية بشكل مثالي بينما يضمن التصميم العملي بقاء موظفينا مرتاحين طوال مناوباتهم. الأسلوب المحتشم والمعاصر مناسب تمامًا لعملائنا السعوديين، وقد صمدت الجودة أمام الارتداء اليومي بشكل مثير للإعجاب.",
        author: "محمد القحطاني",
        position: "مدير المكتب الأمامي",
        company: "فندق الواحة الفاخر الرياض"
      },
      sizeChart: "جدول المقاسات",
      colors: "الألوان",
      quantity: "الكمية",
      minOrder: "الحد الأدنى للطلب",
      addToQuote: "أضف إلى طلب عرض السعر",
      viewSimilar: "مشاهدة منتجات مماثلة",
      features_title: "الميزات الرئيسية",
      specifications_title: "المواصفات",
      styling_title: "خيارات التصميم",
      relatedProducts: "منتجات ذات صلة"
    }
  };

  // Shared product data
  const product = {
    id: 'reception-staff-uniform',
    basePrice: "450",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    minOrder: 10,
    leadTime: '14-16 days',
    customization: true,
    images: [
      { src: '/images/hotel-uniform.jpg', alt: 'Professional reception staff uniform for hospitality' },
      { src: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg', alt: 'Hotel reception staff in professional uniforms' },
      { src: '/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg', alt: 'Hospitality professionals in reception attire' },
      { src: '/images/cheerful-flight-attendant-standing-in-airport-term-2024-10-18-08-12-48-utc.jpg', alt: 'Front desk professional in reception uniform' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Charcoal Grey', value: '#36454F' },
      { name: 'Burgundy', value: '#800020' },
      { name: 'Royal Blue', value: '#4169E1' },
      { name: 'Black', value: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    relatedProducts: [
      { id: 'concierge-uniform', name: 'Concierge Uniform', href: '/shop/hospitality-attire/concierge-uniform' },
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
        
        <Breadcrumbs items={content[locale].breadcrumbs} />
        
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
        
        {/* Features and Styling Options */}
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
          
          <h2 className="text-2xl font-bold mb-6">{content[locale].styling_title}</h2>
          <div className="bg-neutral-50 rounded-lg p-6 mb-12">
            <ul className="divide-y divide-neutral-200">
              {content[locale].styling_options.map((option, index) => (
                <li key={index} className="py-3 flex items-start">
                  <span className="mr-2 text-primary-600 mt-1">•</span>
                  <span className="text-neutral-700">{option}</span>
                </li>
              ))}
            </ul>
          </div>
          
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