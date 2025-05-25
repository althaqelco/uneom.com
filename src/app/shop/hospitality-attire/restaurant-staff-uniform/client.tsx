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
import Script from 'next/script';
import SectionHeading from '@/components/ui/SectionHeading';
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

export function RestaurantStaffUniformClientPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Black');
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
      title: 'Restaurant Staff Uniform',
      description: 'Premium restaurant staff uniforms designed for Saudi Arabian hospitality establishments, combining style, comfort and practicality for food service professionals.',
      longDescription: 'Our Restaurant Staff Uniforms are specifically designed to meet the unique demands of food service environments in Saudi Arabian hospitality establishments. These premium uniforms balance professional appearance with practical functionality, featuring specialized fabrics that resist stains, odors, and withstand frequent washing while maintaining color vibrancy and shape. The thoughtfully designed elements accommodate the range of motion required in restaurant service, while specialized treatments help staff stay comfortable in varied temperature environments. Available in both contemporary and traditional styles with modest options, these uniforms enhance your restaurant\'s brand identity while ensuring staff can perform at their best.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
        { name: 'Restaurant Staff Uniform', url: '#', current: true }
      ],
      features: [
        'Premium fabric blend with advanced stain resistance technology',
        'Specialized antimicrobial treatment for food service environments',
        'Reinforced seams for extended durability with daily use',
        'Strategic stretch panels for ease of movement during service',
        'Moisture-wicking properties to enhance comfort in kitchen environments',
        'Multiple pocket configurations optimized for service tools',
        'Color-fast treatments that maintain appearance after frequent washing',
        'Available in both classic and contemporary restaurant styles'
      ],
      specifications: [
        { name: 'Material', value: '65% Polyester, 32% Cotton, 3% Elastane with stain-guard treatment' },
        { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
        { name: 'Available Sizes', value: 'XS to 3XL (Men\'s and Women\'s cuts)' },
        { name: 'Colors', value: 'Black, White, Burgundy, Navy Blue, Charcoal Grey' },
        { name: 'Country of Manufacture', value: 'Saudi Arabia' },
        { name: 'Care Instructions', value: 'Machine washable, industrial laundry compatible' },
        { name: 'Customization Options', value: 'Restaurant logo embroidery, name badges, accent piping, custom buttons' }
      ],
      variants: [
        { name: 'Standard Server Uniform', price: 'SAR 275' },
        { name: 'Fine Dining Server Attire', price: 'SAR 345' },
        { name: 'Host/Hostess Ensemble', price: 'SAR 320' },
        { name: 'Restaurant Management Uniform', price: 'SAR 395' }
      ],
      testimonial: {
        quote: "The restaurant uniforms from UNEOM have been a game-changer for our dining establishment. The stain-resistant fabric holds up exceptionally well in our busy environment, while the comfortable design allows our staff to move freely during service. Our team particularly appreciates the breathable material that keeps them comfortable during long shifts. The professional appearance has elevated our restaurant's image, and guests frequently comment on how polished our staff looks.",
        author: "Samir Al-Otaibi",
        position: "Food & Beverage Director",
        company: "Al Jawharah Fine Dining"
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
      title: 'زي طاقم المطعم',
      description: 'أزياء فاخرة لطاقم المطعم مصممة لمنشآت الضيافة السعودية، تجمع بين الأناقة والراحة والعملية لمحترفي خدمة الطعام.',
      longDescription: 'تم تصميم أزياء طاقم المطعم لدينا خصيصًا لتلبية المتطلبات الفريدة لبيئات خدمة الطعام في منشآت الضيافة السعودية. توازن هذه الأزياء الفاخرة بين المظهر المهني والوظائف العملية، وتتميز بأقمشة متخصصة تقاوم البقع والروائح وتتحمل الغسيل المتكرر مع الحفاظ على حيوية اللون والشكل. تستوعب العناصر المصممة بعناية نطاق الحركة المطلوب في خدمة المطعم، بينما تساعد المعالجات المتخصصة الموظفين على البقاء مرتاحين في بيئات درجات الحرارة المتنوعة. متوفرة بأنماط معاصرة وتقليدية مع خيارات محتشمة، تعزز هذه الأزياء هوية العلامة التجارية لمطعمك مع ضمان قدرة الموظفين على الأداء بأفضل ما لديهم.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'ملابس الضيافة', url: '/ar/shop/hospitality-attire' },
        { name: 'زي طاقم المطعم', url: '#', current: true }
      ],
      features: [
        'مزيج قماش فاخر مع تقنية متقدمة لمقاومة البقع',
        'معالجة متخصصة مضادة للميكروبات لبيئات خدمة الطعام',
        'درزات معززة لمتانة ممتدة مع الاستخدام اليومي',
        'لوحات تمدد استراتيجية لسهولة الحركة أثناء الخدمة',
        'خصائص امتصاص الرطوبة لتعزيز الراحة في بيئات المطبخ',
        'تكوينات جيب متعددة محسنة لأدوات الخدمة',
        'معالجات ثبات اللون التي تحافظ على المظهر بعد الغسيل المتكرر',
        'متوفر بأنماط مطعم كلاسيكية ومعاصرة'
      ],
      specifications: [
        { name: 'المادة', value: '65٪ بوليستر، 32٪ قطن، 3٪ إيلاستين مع معالجة مقاومة للبقع' },
        { name: 'الوزن', value: 'وزن متوسط (180-200 جرام للمتر المربع)' },
        { name: 'المقاسات المتاحة', value: 'XS إلى 3XL (قصات للرجال والنساء)' },
        { name: 'الألوان', value: 'أسود، أبيض، نبيذي، أزرق بحري، رمادي فحمي' },
        { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
        { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، متوافق مع الغسيل الصناعي' },
        { name: 'خيارات التخصيص', value: 'تطريز شعار المطعم، شارات الأسماء، حواف زخرفية، أزرار مخصصة' }
      ],
      variants: [
        { name: 'زي النادل القياسي', price: 'ريال 275' },
        { name: 'زي نادل المطاعم الفاخرة', price: 'ريال 345' },
        { name: 'مجموعة المضيف/المضيفة', price: 'ريال 320' },
        { name: 'زي إدارة المطعم', price: 'ريال 395' }
      ],
      testimonial: {
        quote: "لقد كانت أزياء المطعم من UNEOM بمثابة نقلة نوعية لمؤسستنا للمأكولات. يصمد القماش المقاوم للبقع بشكل استثنائي في بيئتنا المزدحمة، بينما يسمح التصميم المريح لموظفينا بالتحرك بحرية أثناء الخدمة. يقدر فريقنا بشكل خاص المادة القابلة للتنفس التي تبقيهم مرتاحين خلال المناوبات الطويلة. لقد رفع المظهر المهني من صورة مطعمنا، ويعلق الضيوف بشكل متكرر على مدى أناقة موظفينا.",
        author: "سمير العتيبي",
        position: "مدير الأغذية والمشروبات",
        company: "الجوهرة للمأكولات الفاخرة"
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
    id: 'restaurant-staff-uniform',
    name: 'Restaurant Staff Uniform',
    price: "410",
    basePrice: "410",
    rating: 4.7,
    reviews: 34,
    inStock: true,
    minOrder: 10,
    leadTime: '14-16 days',
    customization: true,
    images: [
      { src: '/images/product-placeholder.jpg', alt: 'Restaurant staff uniform for hospitality' },
      { src: '/images/hospitality/hospitality_uniform_formal.jpg', alt: 'Restaurant staff in professional uniforms' },
      { src: '/images/hospitality/hospitality_uniform_department.jpg', alt: 'Food service professional in restaurant attire' },
      { src: '/images/products/chef-uniform.jpg', alt: 'Chef in professional kitchen uniform' }
    ],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Burgundy', value: '#800020' },
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Charcoal Grey', value: '#36454F' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    relatedProducts: [
      { id: 'reception-staff-uniform', name: 'Reception Staff Uniform', href: '/shop/hospitality-attire/reception-staff-uniform' },
      { id: 'housekeeping-uniform', name: 'Housekeeping Uniform', href: '/shop/hospitality-attire/housekeeping-uniform' },
      { id: 'concierge-uniform', name: 'Concierge Uniform', href: '/shop/hospitality-attire/concierge-uniform' }
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
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Restaurant Staff Uniform by UNEOM",
            "image": [
              "https://uneom.com/images/product-placeholder.jpg",
              "https://uneom.com/images/hospitality/hospitality_uniform_formal.jpg"
            ],
            "description": "Premium restaurant staff uniforms designed for Saudi Arabian hospitality establishments, combining style, comfort and practicality for food service professionals.",
            "sku": "UNEOM-RSU-100",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/hospitality-attire/restaurant-staff-uniform",
              "priceCurrency": "SAR",
              "price": "410",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "34"
            }
          })
        }}
      />
      
      <div className="bg-white">
        <Container className="py-8">
          <Breadcrumbs items={content[locale].breadcrumbs.map(item => ({
            label: item.name,
            href: item.url,
            active: item.current
          }))} />
          
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              <p className="text-xl font-semibold text-primary-600 mt-2">SAR {product.price}</p>
              
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
                <h3 className="text-sm font-medium text-neutral-900">Variants</h3>
                <div className="mt-2 space-y-2">
                  {content[locale].variants.map((variant) => (
                    <div key={variant.name} className="flex justify-between items-center p-3 border border-neutral-200 rounded-md">
                      <span className="font-medium">{variant.name}</span>
                      <span className="text-primary-600">{variant.price}</span>
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
                  <h3 className="text-sm font-medium text-neutral-900">Size</h3>
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
                <h3 className="text-sm font-medium text-neutral-900">{content[locale].quantity} ({content[locale].minOrder}: {product.minOrder})</h3>
                <div className="mt-2 flex items-center">
                  <input
                    type="number"
                    min={product.minOrder}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border border-neutral-300 rounded-md px-3 py-2 w-20 text-center"
                  />
                  <span className="ml-2 text-neutral-500">units</span>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-neutral-500 mb-2">Lead time: {product.leadTime}</p>
                <button
                  onClick={handleAddToQuote}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors"
                >
                  {content[locale].addToQuote}
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="mt-16">
            <SectionHeading>Product Details</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-neutral-700">{content[locale].longDescription}</p>
                <h3 className="font-semibold text-lg mt-6 mb-3">{content[locale].features_title}</h3>
                <ul className="space-y-2">
                  {content[locale].features.map((feature, index) => (
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
                  {content[locale].specifications.map((spec, index) => (
                    <div key={index} className="grid grid-cols-2 py-2 border-b border-neutral-200">
                      <span className="font-medium text-neutral-900">{spec.name}</span>
                      <span className="text-neutral-700">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <svg className="h-8 w-8 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-neutral-700 italic mb-6">{content[locale].testimonial.quote}</p>
              <div className="flex flex-col items-center">
                <p className="font-semibold">{content[locale].testimonial.author}</p>
                <p className="text-sm text-neutral-500">{content[locale].testimonial.position}, {content[locale].testimonial.company}</p>
              </div>
          </div>
        </div>
        
          {/* Related Products */}
          <div className="mt-16">
            <SectionHeading>{content[locale].relatedProducts}</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={relatedProduct.href}
                  className="group"
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-neutral-100 mb-3">
                    <Image 
                      src="/images/product-placeholder.jpg"
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </Container>
        </div>
    </>
  );
} 

// Keep default export for backwards compatibility
export default RestaurantStaffUniformClientPage; 