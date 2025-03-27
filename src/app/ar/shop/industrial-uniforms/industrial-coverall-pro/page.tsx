'use client';

import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import ColorSwatch from '@/components/shop/ColorSwatch';
import SizeSelector from '@/components/shop/SizeSelector';
import FeaturesGrid from '@/components/shop/FeaturesGrid';
import RelatedProducts from '@/components/shop/RelatedProducts';
import OrderRequirements from '@/components/shop/OrderRequirements';
import CustomizationOptions from '@/components/shop/CustomizationOptions';
import RequestInfoForm from '@/components/forms/RequestInfoForm';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateProductWhatsAppUrl } from '@/utils/whatsapp';

// Definición del producto
  const product = {
    id: "industrial-coverall-pro",
  name: "أفرول صناعي بروفيشنال",
  tagline: "ملابس العمل ذات الحماية العالية للبيئات الصناعية",
  description: "أفرول صناعي متين للاستخدام الشاق في بيئات العمل المتطلبة. مصمم خصيصاً لتوفير الحماية والراحة وسهولة الحركة للعاملين في المنشآت الصناعية.",
  detailedDescription: `
    <p>أفرول صناعي بروفيشنال هو الخيار الأمثل للعمال في القطاعات الصناعية التي تتطلب حماية عالية وأداء متميز. تم تصميم هذا الأفرول بعناية فائقة ليناسب احتياجات الصناعات المختلفة في المملكة العربية السعودية والخليج العربي.</p>
    
    <p>يتميز هذا الأفرول بمقاومته العالية للتمزق والاهتراء، مما يجعله مثالياً للاستخدام اليومي في البيئات الصناعية القاسية. تم استخدام أقمشة معالجة بتقنيات خاصة لتوفير مقاومة للزيوت والشحوم والبقع، مما يسهل عملية التنظيف ويطيل من عمر الزي.</p>
    
    <p>الراحة عنصر أساسي في تصميم الأفرول، حيث يوفر مرونة عالية تسمح بحرية الحركة أثناء العمل. تساعد فتحات التهوية الاستراتيجية على تنظيم درجة حرارة الجسم، مما يجعله مناسباً للعمل في درجات الحرارة المرتفعة.</p>
    
    <p>يحتوي الأفرول على العديد من الجيوب العملية التي تسمح بحمل الأدوات والمعدات الضرورية بسهولة. تضمن الخياطة المزدوجة في نقاط الضغط متانة استثنائية ومقاومة للتمزق حتى في ظروف العمل الأكثر صعوبة.</p>
    
    <p>يمكن تخصيص الأفرول بشعار شركتك وألوان مؤسستك، مما يعزز الهوية المؤسسية ويوفر مظهراً موحداً لفريق العمل. نوفر خدمات التطريز والطباعة عالية الجودة لضمان استمرارية وضوح العلامات حتى بعد الغسيل المتكرر.</p>
  `,
  price: "ريال 240",
  minOrder: 25,
  productCode: "IC-PRO-2023",
    colors: [
    { name: "أزرق داكن", value: "#1a3a5f" },
    { name: "رمادي", value: "#5d5d5d" },
    { name: "برتقالي عاكس", value: "#ff6b00" },
    { name: "أخضر زيتي", value: "#3d5e45" }
  ],
  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    features: [
      {
      title: "مقاوم للزيوت والشحوم",
      description: "نسيج معالج بتقنية خاصة تمنع امتصاص الزيوت والشحوم وتسهل التنظيف",
      icon: "shield"
    },
    {
      title: "متانة استثنائية",
      description: "خياطة مزدوجة في نقاط الضغط ونسيج مقاوم للتمزق لعمر افتراضي أطول",
      icon: "bolt"
    },
    {
      title: "راحة فائقة",
      description: "تصميم مرن يسمح بحرية الحركة مع فتحات تهوية استراتيجية للعمل في درجات الحرارة المرتفعة",
      icon: "sun"
    },
    {
      title: "جيوب عملية",
      description: "جيوب متعددة مصممة بعناية لحمل الأدوات والمعدات بشكل آمن وسهل الوصول",
      icon: "pocket"
    },
    {
      title: "عناصر عاكسة",
      description: "شرائط عاكسة للضوء لتعزيز الرؤية والسلامة في ظروف الإضاءة المنخفضة",
      icon: "light-bulb"
      },
      {
        title: "سهولة الصيانة",
      description: "قابل للغسل في درجات حرارة عالية مع الحفاظ على الألوان والجودة لغسلات متكررة",
      icon: "washing-machine"
      }
    ],
    specifications: [
    { name: "المادة", value: "65% بوليستر، 35% قطن مع معالجة مقاومة للزيوت" },
    { name: "الوزن", value: "260 جرام/م²" },
    { name: "الإغلاق", value: "سحاب مزدوج الاتجاه مع تغطية إضافية للحماية" },
    { name: "التعزيزات", value: "خياطة مزدوجة في جميع التماسات، تعزيزات في نقاط الضغط" },
    { name: "الجيوب", value: "8 جيوب متعددة الاستخدامات (صدر، جوانب، خلفية، ساق)" },
    { name: "المميزات الإضافية", value: "شرائط عاكسة، فتحات تهوية تحت الإبط، خصر مطاطي للراحة" }
    ],
    customizationOptions: [
      { 
      name: "تخصيص الشعار", 
      description: "إضافة شعار شركتك مطرزًا أو مطبوعًا على الصدر أو الظهر",
      image: "/images/product-customization/logo-placement.webp"
    },
    { 
      name: "ألوان مخصصة", 
      description: "تخصيص ألوان الأفرول لتتماشى مع هوية علامتك التجارية (الحد الأدنى للطلب 100 قطعة)",
      image: "/images/product-customization/color-customization.webp"
    },
    { 
      name: "جيوب إضافية", 
      description: "إضافة جيوب خاصة حسب متطلبات العمل المحددة",
      image: "/images/product-customization/pocket-options.webp"
    },
    { 
      name: "شرائط عاكسة إضافية", 
      description: "زيادة العناصر العاكسة للرؤية المحسنة في بيئات العمل منخفضة الإضاءة",
      image: "/images/product-customization/reflective-elements.webp"
    }
  ],
  certifications: [
    "OSHA متوافق مع معايير السلامة والصحة المهنية",
    "ISO 13688 - متطلبات الملابس الواقية العامة",
    "ASTM F1506 - مقاومة للاشتعال واللهب"
  ],
    relatedProducts: [
      {
      id: "high-visibility-jacket",
      name: "سترة عالية الوضوح",
      image: "/images/products/high-visibility-jacket.webp",
      price: "ريال 180",
      href: "/ar/shop/industrial-uniforms/high-visibility-jacket"
    },
    {
      id: "flame-resistant-coverall",
      name: "أفرول مقاوم للهب",
      image: "/images/products/flame-resistant-coverall.webp",
      price: "ريال 350",
      href: "/ar/shop/industrial-uniforms/flame-resistant-coverall"
    },
    {
      id: "industrial-cargo-pants",
      name: "بنطلون كارجو صناعي",
      image: "/images/products/industrial-cargo-pants.webp",
      price: "ريال 150",
      href: "/ar/shop/industrial-uniforms/industrial-cargo-pants"
    }
  ],
  industries: ["صناعة النفط والغاز", "البناء والتشييد", "التصنيع", "الصيانة الصناعية", "المستودعات والخدمات اللوجستية"]
};

export default function IndustrialCoverallProArabicPage() {
  const locale = 'ar';
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to "L"
  const [showRequestForm, setShowRequestForm] = useState(false);

  const whatsappProduct = () => {
    const message = `استفسار عن: ${product.name} (${product.productCode})\nاللون: ${selectedColor}\nالمقاس: ${selectedSize}`;
    const url = generateProductWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleBack = () => {
    router.back();
  };

  // Create schema for product
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: '/images/products/industrial-coverall-pro.webp',
    description: product.description,
    sku: product.productCode,
    brand: {
      '@type': 'Brand',
      name: 'يونيوم'
    },
    offers: {
      '@type': 'Offer',
      price: product.price.replace('ريال ', ''),
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
      {/* Inject JSON-LD schema */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <script type="application/ld+json">
            ${JSON.stringify(productSchema)}
          </script>
        `
      }} />
      
      {/* Product content */}
      <div className="bg-neutral-50 py-8">
        <Container>
          {/* Breadcrumbs */}
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: 'الرئيسية', href: '/ar' },
                { label: 'المتجر', href: '/ar/shop' },
                { label: 'ملابس العمل الصناعية', href: '/ar/shop/industrial-uniforms' },
                { label: product.name, href: '#' },
              ]}
            />
          </div>
          
          <button 
            onClick={handleBack}
            className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 ml-1" />
            <span>العودة</span>
          </button>
        </Container>
      </div>

      <Container className="py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:flex-row-reverse"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Product Image Gallery */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src="/images/products/industrial-coverall-pro.webp"
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer hover:border-primary-300 transition-colors">
                  <Image
                    src={`/images/products/industrial-coverall-pro-${index + 1}.webp`}
                    alt={`${product.name} - صورة ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="space-y-8 text-right">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-neutral-700">
                {product.tagline}
              </p>
            </div>

            <p className="text-lg text-neutral-600">
              {product.description}
            </p>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex justify-between items-end mb-6">
                <div className="text-sm text-neutral-600">
                  الكود: <span className="font-medium">{product.productCode}</span>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">السعر الأساسي</div>
                  <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                  <div className="text-sm text-neutral-600 mt-1">
                    الحد الأدنى للطلب: {product.minOrder} قطعة
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6 text-right">
                <div className="text-sm font-medium text-neutral-900 mb-3">اللون: {selectedColor}</div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {product.colors.map(color => (
                    <ColorSwatch
                      key={color.name}
                      color={color}
                      selected={selectedColor === color.name}
                      onClick={() => setSelectedColor(color.name)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <Link 
                    href="/ar/resources/size-guide" 
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    دليل المقاسات
                  </Link>
                  <div className="text-sm font-medium text-neutral-900">المقاس: {selectedSize}</div>
                </div>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>

              {/* Industry tags */}
              <div className="mb-6">
                <div className="text-sm font-medium text-neutral-900 mb-3">مناسب للقطاعات:</div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {product.industries.map((industry, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row-reverse gap-4 mt-8">
                <AddToQuoteButton
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: "/images/products/industrial-coverall-pro.webp"
                  }}
                  color={selectedColor}
                  size={selectedSize}
                  className="flex-1 order-1 sm:order-2"
                />
                <Button
                  variant="secondary"
                  onClick={whatsappProduct}
                  className="flex-1 order-2 sm:order-1 flex items-center justify-center"
                >
                  <FaWhatsapp className="ml-2 text-lg" />
                  استفسار عبر واتساب
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Rest of the product page - tabs, features, etc. */}
        {/* ... */}
      </Container>
    </>
  );
} 