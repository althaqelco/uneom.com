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
  materials_title: string;
  materials: string[];
}

type ContentType = {
  en: LocaleContent;
  ar: LocaleContent;
  [key: string]: LocaleContent;
}

export default function ExecutiveMedicalUniformPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
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
      title: 'Executive Medical Uniform',
      description: 'Premium executive medical uniforms designed for healthcare leaders and administrators, featuring elegant styling with exceptional comfort and durability - perfect for Saudi healthcare management professionals.',
      longDescription: 'Our Executive Medical Uniforms represent the pinnacle of healthcare professional attire, designed specifically for medical directors, department heads, and healthcare executives in Saudi Arabian medical institutions. These premium uniforms blend sophisticated styling with functional design to create a distinct professional appearance that communicates authority and expertise. Crafted from superior performance fabrics with natural stretch and enhanced durability, these uniforms maintain their impeccable appearance through long workdays while ensuring excellent freedom of movement. The tailored fit provides a refined silhouette that distinguishes leadership personnel while the antimicrobial properties and soil-release technology ensure continuous protection and pristine presentation.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
        { name: 'Executive Medical Uniform', url: '#', current: true }
      ],
      features: [
        'Premium fabric blend with natural stretch and enhanced durability',
        'Tailored professional fit designed for healthcare executives',
        'Advanced antimicrobial protection exceeding healthcare standards',
        'Sophisticated color options appropriate for leadership positions',
        'Reinforced seams and stress points for extended garment life',
        'Specialized pocket configurations for administrative essentials',
        'Soil-release technology for maintaining professional appearance',
        'Available in modest design options suitable for Saudi professionals'
      ],
      specifications: [
        { name: 'Material', value: '75% Polyester, 21% Rayon, 4% Spandex with antimicrobial finish' },
        { name: 'Weight', value: 'Medium-heavy weight (220-250 gsm)' },
        { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s executive cuts)' },
        { name: 'Colors', value: 'Navy Blue, Charcoal Grey, Deep Burgundy, Executive Black' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Machine washable, soil-release technology, minimal ironing required' },
        { name: 'Customization Options', value: 'Embroidery, professional piping, personalized name plates' }
      ],
      variants: [
        { name: 'Director Series Executive Uniform', price: 'SAR 595' },
        { name: 'Department Head Ensemble', price: 'SAR 625' },
        { name: 'Executive Medical Suite', price: 'SAR 675' },
        { name: 'Administrative Professional Set', price: 'SAR 550' },
      ],
      testimonial: {
        quote: "The Executive Medical Uniforms from UNEOM have transformed our administrative team's professional presence. The sophisticated styling and superior fabric quality immediately distinguish our leadership personnel, and the comfort throughout long strategy meetings has been universally praised. The antimicrobial protection is essential in our environment, and the attention to detail in the tailoring reflects our commitment to excellence.",
        author: "Dr. Ahmed Al-Majid",
        position: "Executive Director",
        company: "Saudi German Hospital Group"
      },
      materials: [
        'Premium polyester-rayon-spandex blend for comfort and polish',
        'Performance antimicrobial technology with extended protection',
        'Soil-release coating for stain resistance and easy maintenance',
        'Natural stretch fabric for freedom of movement during long shifts',
        'Breathable construction adapted for Saudi Arabian healthcare environments'
      ],
      sizeChart: "Size Chart",
      colors: "Colors",
      quantity: "Quantity",
      minOrder: "Minimum order",
      addToQuote: "Add to Quote",
      viewSimilar: "View Similar Products",
      features_title: "Key Features",
      specifications_title: "Specifications",
      materials_title: "Materials & Technology",
      relatedProducts: "Related Products"
    },
    ar: {
      title: 'زي طبي تنفيذي',
      description: 'أزياء طبية تنفيذية فاخرة مصممة لقادة الرعاية الصحية والإداريين، تتميز بأناقة استثنائية مع راحة ومتانة استثنائية - مثالية للمتخصصين في إدارة الرعاية الصحية السعودية.',
      longDescription: 'تمثل الأزياء الطبية التنفيذية لدينا قمة الزي المهني للرعاية الصحية، المصممة خصيصًا للمديرين الطبيين ورؤساء الأقسام والمديرين التنفيذيين في مؤسسات الرعاية الصحية السعودية. تمزج هذه الأزياء الفاخرة بين الأناقة المتطورة والتصميم الوظيفي لخلق مظهر مهني متميز يوصل السلطة والخبرة. مصنوعة من أقمشة أداء متفوقة مع مرونة طبيعية ومتانة معززة، تحافظ هذه الأزياء على مظهرها المثالي خلال أيام العمل الطويلة مع ضمان حرية ممتازة في الحركة. يوفر التصميم المخصص شكلًا منقحًا يميز موظفي القيادة بينما تضمن الخصائص المضادة للميكروبات وتقنية إزالة الأوساخ حماية مستمرة وعرضًا نقيًا.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس طبية', url: '/ar/shop/medical-scrubs' },
        { name: 'زي طبي تنفيذي', url: '#', current: true }
      ],
      features: [
        'مزيج قماش فاخر مع مرونة طبيعية ومتانة معززة',
        'قصة مهنية مخصصة مصممة للمديرين التنفيذيين في مجال الرعاية الصحية',
        'حماية متقدمة مضادة للميكروبات تتجاوز معايير الرعاية الصحية',
        'خيارات ألوان متطورة مناسبة لمناصب القيادة',
        'درزات وأماكن الضغط معززة لإطالة عمر الملابس',
        'تكوينات جيب متخصصة للمستلزمات الإدارية',
        'تقنية إزالة الأوساخ للحفاظ على المظهر المهني',
        'متوفر بخيارات تصميم محتشمة مناسبة للمهنيين السعوديين'
      ],
      specifications: [
        { name: 'المادة', value: '75٪ بوليستر، 21٪ رايون، 4٪ سباندكس مع تشطيب مضاد للميكروبات' },
        { name: 'الوزن', value: 'وزن متوسط-ثقيل (220-250 جرام للمتر المربع)' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 4XL (قصات تنفيذية للرجال والنساء)' },
        { name: 'الألوان', value: 'أزرق بحري، رمادي فحمي، نبيذي عميق، أسود تنفيذي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، تقنية إزالة الأوساخ، يتطلب كي بسيط' },
        { name: 'خيارات التخصيص', value: 'تطريز، تطريز مهني، لوحات أسماء شخصية' }
      ],
      variants: [
        { name: 'زي تنفيذي سلسلة المدير', price: 'ريال 595' },
        { name: 'مجموعة رئيس القسم', price: 'ريال 625' },
        { name: 'مجموعة طبية تنفيذية', price: 'ريال 675' },
        { name: 'مجموعة المهنيين الإداريين', price: 'ريال 550' },
      ],
      testimonial: {
        quote: "لقد غيرت الأزياء الطبية التنفيذية من UNEOM الحضور المهني لفريقنا الإداري. تميز الأناقة المتطورة وجودة القماش الفائقة على الفور موظفي القيادة لدينا، وقد تم الإشادة بالراحة خلال اجتماعات الاستراتيجية الطويلة بشكل عالمي. الحماية المضادة للميكروبات ضرورية في بيئتنا، والاهتمام بالتفاصيل في التصميم يعكس التزامنا بالتميز.",
        author: "د. أحمد الماجد",
        position: "المدير التنفيذي",
        company: "مجموعة المستشفى السعودي الألماني"
      },
      materials: [
        'مزيج بوليستر-رايون-سباندكس فاخر للراحة والأناقة',
        'تقنية مضادة للميكروبات عالية الأداء مع حماية ممتدة',
        'طلاء لإزالة الأوساخ لمقاومة البقع وسهولة الصيانة',
        'قماش مرن طبيعي لحرية الحركة أثناء المناوبات الطويلة',
        'بناء قابل للتنفس مكيف لبيئات الرعاية الصحية في المملكة العربية السعودية'
      ],
      sizeChart: "جدول المقاسات",
      colors: "الألوان",
      quantity: "الكمية",
      minOrder: "الحد الأدنى للطلب",
      addToQuote: "أضف إلى طلب عرض السعر",
      viewSimilar: "مشاهدة منتجات مماثلة",
      features_title: "الميزات الرئيسية",
      specifications_title: "المواصفات",
      materials_title: "المواد والتكنولوجيا",
      relatedProducts: "منتجات ذات صلة"
    }
  };

  // Shared product data
  const product = {
    id: 'executive-medical-uniform',
    basePrice: "595",
    rating: 4.9,
    reviews: 63,
    inStock: true,
    minOrder: 15,
    leadTime: '15-18 days',
    customization: true,
    images: [
      { src: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg', alt: 'Executive medical professionals in premium healthcare uniforms' },
      { src: '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg', alt: 'Medical administration team in executive uniforms' },
      { src: '/images/happy-doctor-smiling-at-the-camera-on-a-green-screen-chroma-key-SBI-349602091.jpg', alt: 'Healthcare executive in professional medical attire' },
      { src: '/images/doctor-SBI-300813580.jpg', alt: 'Medical director in executive uniform' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Charcoal Grey', value: '#36454F' },
      { name: 'Deep Burgundy', value: '#800020' },
      { name: 'Executive Black', value: '#000000' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    relatedProducts: [
      { id: 'medical-lab-coat', name: 'Medical Lab Coat', href: '/shop/medical-scrubs/medical-lab-coat' },
      { id: 'professional-lab-coat', name: 'Professional Lab Coat', href: '/shop/medical-scrubs/professional-lab-coat' },
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
        
        {/* Features and Materials */}
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
          
          <h2 className="text-2xl font-bold mb-6">{content[locale].materials_title}</h2>
          <div className="bg-neutral-50 rounded-lg p-6 mb-12">
            <ul className="divide-y divide-neutral-200">
              {content[locale].materials.map((material, index) => (
                <li key={index} className="py-3 flex items-start">
                  <span className="mr-2 text-primary-600 mt-1">•</span>
                  <span className="text-neutral-700">{material}</span>
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