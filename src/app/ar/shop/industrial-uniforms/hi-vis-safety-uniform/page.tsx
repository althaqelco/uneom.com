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

// تعريف المنتج
const product = {
  id: "hi-vis-safety-uniform",
  name: "زي السلامة عالي الرؤية",
  tagline: "رؤية واضحة وحماية فائقة في بيئات العمل الخطرة",
  description: "زي مهني عالي الرؤية مصمم خصيصاً لبيئات العمل الخطرة والمناطق منخفضة الإضاءة، يوفر وضوح استثنائي مع الحفاظ على المتانة والراحة للعاملين في الصناعات المختلفة.",
  detailedDescription: `
    <p>زي السلامة عالي الرؤية هو الخيار الأمثل للعاملين في البيئات الصناعية والإنشائية التي تتطلب مستوى عالٍ من الوضوح لضمان سلامة العمال. مصمم خصيصاً لتلبية معايير السلامة العالمية والمحلية، مما يجعله مناسباً للاستخدام في مشاريع البنية التحتية والمواقع الصناعية في المملكة العربية السعودية.</p>
    
    <p>يتميز هذا الزي بألوانه الفسفورية عالية الوضوح (أصفر فلوري، برتقالي فلوري) المدمجة مع شرائط عاكسة عالية الكثافة مقاومة للغسيل المتكرر. تم تصميم الشرائط العاكسة بنمط استراتيجي لضمان رؤية 360 درجة في جميع ظروف الإضاءة، خاصة أثناء الليل وفي الظروف الجوية المتغيرة.</p>
    
    <p>صُنع الزي من مواد متينة مقاومة للتمزق وخفيفة الوزن، مع معالجة خاصة لمقاومة الأشعة فوق البنفسجية للحفاظ على الألوان الزاهية حتى تحت أشعة الشمس القوية في المناخ السعودي. كما تمت إضافة معالجة لمقاومة الاتساخ والبقع لسهولة التنظيف والصيانة.</p>
    
    <p>يتكون الطقم من سترة وبنطلون مع جيوب متعددة عملية للأدوات والمستلزمات، وتصميم مريح يسمح بحرية الحركة. تم تعزيز المناطق المعرضة للتآكل العالي بخياطة مزدوجة لضمان متانة استثنائية وعمر افتراضي طويل.</p>
    
    <p>جميع منتجاتنا عالية الرؤية تتوافق مع معايير ANSI/ISEA 107 و EN 20471 و SASO، مما يضمن المطابقة لمتطلبات السلامة في مواقع العمل السعودية والخليجية.</p>
  `,
  price: "ريال 390 - 450",
  minOrder: 20,
  productCode: "HV-ST-2023",
  colors: [
    { name: "أصفر فلوري", value: "#ffde00" },
    { name: "برتقالي فلوري", value: "#ff7800" },
    { name: "أصفر/أسود", value: "#ccb100" },
    { name: "برتقالي/أزرق", value: "#cc5000" }
  ],
  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
  features: [
    {
      title: "وضوح عالي",
      description: "ألوان فلورية عالية الوضوح تضمن الرؤية حتى في الظروف الصعبة",
      icon: "eye"
    },
    {
      title: "شرائط عاكسة متطورة",
      description: "شرائط ميكروبريزم عاكسة توفر رؤية 360 درجة في جميع ظروف الإضاءة",
      icon: "sparkles"
    },
    {
      title: "مقاومة للعوامل الجوية",
      description: "معالجة خاصة لمقاومة الأشعة فوق البنفسجية والاتساخ والبقع",
      icon: "sun"
    },
    {
      title: "متانة فائقة",
      description: "مصنوع من أقمشة قوية مقاومة للتمزق مع تعزيز في مناطق التآكل العالي",
      icon: "shield"
    },
    {
      title: "تصميم مريح",
      description: "تصميم يسمح بحرية الحركة مع جيوب متعددة الاستخدامات",
      icon: "adjustments"
    },
    {
      title: "مطابق للمعايير العالمية",
      description: "يلبي معايير ANSI/ISEA 107 و EN 20471 ومعايير SASO للسلامة",
      icon: "certificate"
    }
  ],
  specifications: [
    { name: "المادة", value: "100% بوليستر عالي الكثافة مع معالجة مقاومة للأشعة فوق البنفسجية" },
    { name: "وزن القماش", value: "280 جرام/م²" },
    { name: "فئة الرؤية", value: "الفئة 3 (أعلى مستوى رؤية)" },
    { name: "الشرائط العاكسة", value: "ميكروبريزم عاكس عالي الجودة (5 سم عرض)" },
    { name: "الإغلاق", value: "سحابات YKK مع تقوية وإغلاق فيلكرو" },
    { name: "التعزيزات", value: "خياطة مزدوجة في جميع التقاطعات والمناطق الحرجة" },
    { name: "الجيوب", value: "جيوب متعددة بأغطية مع إغلاق فيلكرو لزيادة الأمان" }
  ],
  customizationOptions: [
    { 
      name: "طباعة أو تطريز الشعار", 
      description: "إضافة شعار شركتك على الصدر أو الظهر أو الأكمام",
      image: "/images/product-customization/logo-placement.webp"
    },
    { 
      name: "إضافة جيوب متخصصة", 
      description: "جيوب مخصصة لأدوات محددة أو معدات الاتصال",
      image: "/images/product-customization/pocket-options.webp"
    },
    { 
      name: "حاملات للأدوات", 
      description: "إضافة حلقات أو مشابك للأدوات والمعدات",
      image: "/images/product-customization/tool-holders.webp"
    },
    { 
      name: "بطاقات تعريفية", 
      description: "إضافة حامل للبطاقات التعريفية أو شارات الأمان",
      image: "/images/product-customization/badge-holder.webp"
    }
  ],
  certifications: [
    "ANSI/ISEA 107 - معيار الملابس عالية الرؤية",
    "EN 20471 - معيار الملابس التحذيرية عالية الرؤية",
    "SASO 2910 - المواصفات السعودية لملابس السلامة",
    "معتمد من هيئة المواصفات والمقاييس السعودية"
  ],
  relatedProducts: [
    {
      id: "industrial-coverall-pro",
      name: "أفرول صناعي بروفيشنال",
      image: "/images/products/industrial-coverall-pro.webp",
      price: "ريال 240",
      href: "/ar/shop/industrial-uniforms/industrial-coverall-pro"
    },
    {
      id: "flame-resistant-workwear",
      name: "طقم ملابس مقاومة للحريق",
      image: "/images/products/flame-resistant-workwear.webp",
      price: "ريال 549",
      href: "/ar/shop/industrial-uniforms/flame-resistant-workwear"
    },
    {
      id: "safety-helmet-pro",
      name: "خوذة السلامة المتطورة",
      image: "/images/products/safety-helmet.webp",
      price: "ريال 120",
      href: "/ar/shop/industrial-uniforms/safety-helmet-pro"
    }
  ],
  industries: ["الإنشاءات", "الصناعات البترولية", "الطرق والجسور", "المطارات", "الموانئ البحرية", "العمليات الليلية", "المصانع"]
};

export default function HiVisSafetyUniformArabicPage() {
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
    image: '/images/products/hi-vis-safety-uniform.webp',
    description: product.description,
    sku: product.productCode,
    brand: {
      '@type': 'Brand',
      name: 'يونيوم'
    },
    offers: {
      '@type': 'Offer',
      price: product.price.replace('ريال ', '').split(' - ')[0],
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
              locale={locale}
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
                src="/images/products/hi-vis-safety-uniform.webp"
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/hi-vis-safety-uniform-detail1.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/hi-vis-safety-uniform-detail2.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/hi-vis-safety-uniform-detail3.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/hi-vis-safety-uniform-detail4.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} className="space-y-8 rtl">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">{product.name}</h1>
              <p className="text-xl text-neutral-600">{product.tagline}</p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-700 mb-1">{product.price}</div>
              <div className="text-sm text-neutral-600">الحد الأدنى للطلب: {product.minOrder} قطعة</div>
              <div className="text-sm text-neutral-600">رمز المنتج: {product.productCode}</div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-neutral-900 mb-3">الوصف:</h3>
                <p className="text-neutral-700">{product.description}</p>
              </div>

              <div>
                <h3 className="font-medium text-neutral-900 mb-3">الصناعات المناسبة:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((industry, index) => (
                    <span key={index} className="inline-block bg-neutral-200 rounded-full px-3 py-1 text-sm text-neutral-700">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-neutral-900 mb-3">اختر اللون:</h3>
                <div className="flex gap-3">
                  <ColorSwatch
                    colors={product.colors}
                    selectedColor={selectedColor}
                    onChange={setSelectedColor}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-neutral-900 mb-3">اختر المقاس:</h3>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                onClick={whatsappProduct}
                className="w-full flex justify-center items-center gap-2"
              >
                <FaWhatsapp className="h-5 w-5" />
                تواصل عبر واتساب
              </Button>
              
              <AddToQuoteButton
                product={{
                  id: product.id,
                  name: product.name,
                  image: '/images/products/hi-vis-safety-uniform.webp',
                  price: product.price
                }}
                color={selectedColor}
                size={selectedSize}
                className="w-full"
              />
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowRequestForm(true)}
              >
                طلب معلومات إضافية
              </Button>
            </div>

            <div className="bg-neutral-100 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-2">الشهادات:</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-700">
                {product.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <div className="flex space-x-8">
              <button
                className={`py-4 text-sm font-medium border-b-2 px-1 -mb-px ${
                  activeTab === 'description'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900'
                }`}
                onClick={() => setActiveTab('description')}
              >
                تفاصيل المنتج
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 px-1 -mb-px ${
                  activeTab === 'specifications'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                المواصفات
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 px-1 -mb-px ${
                  activeTab === 'customization'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900'
                }`}
                onClick={() => setActiveTab('customization')}
              >
                خيارات التخصيص
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none prose-lg rtl">
                <div dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
                
                <h3 className="text-xl font-bold mt-8 mb-4">المميزات الرئيسية</h3>
                <FeaturesGrid features={product.features} />
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">المواصفات الفنية</h3>
                  <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="border-t border-neutral-200">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                          <dt className="text-sm font-medium text-neutral-900">{spec.name}</dt>
                          <dd className="mt-1 text-sm text-neutral-700 sm:col-span-2 sm:mt-0">{spec.value}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <OrderRequirements minOrder={product.minOrder} />
              </div>
            )}

            {activeTab === 'customization' && (
              <div>
                <h3 className="text-xl font-bold mb-4">خيارات التخصيص</h3>
                <CustomizationOptions options={product.customizationOptions} />
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <SectionHeading alignment="right">منتجات ذات صلة</SectionHeading>
          <RelatedProducts products={product.relatedProducts} />
        </div>
      </Container>

      {/* Request Info Form Modal */}
      {showRequestForm && (
        <RequestInfoForm 
          productName={product.name}
          productCode={product.productCode}
          onClose={() => setShowRequestForm(false)}
        />
      )}
    </>
  );
} 