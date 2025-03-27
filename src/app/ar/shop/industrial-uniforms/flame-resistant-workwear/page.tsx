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
  id: "flame-resistant-workwear",
  name: "طقم ملابس مقاومة للحريق",
  tagline: "حماية متطورة للعاملين في البيئات الخطرة",
  description: "طقم ملابس عالي الجودة مقاوم للهب والحرارة، مصمم خصيصاً للعاملين في الصناعات البترولية والكهربائية. يوفر حماية قصوى مع الحفاظ على الراحة والأداء.",
  detailedDescription: `
    <p>طقم الملابس المقاومة للحريق هو الحل الأمثل للعاملين في البيئات الصناعية التي تتعرض لمخاطر اللهب والحرارة العالية. مصمم خصيصاً وفقاً لأعلى معايير السلامة العالمية لضمان حماية العاملين في قطاعات النفط والغاز والبتروكيماويات والصناعات الكهربائية في المملكة العربية السعودية.</p>
    
    <p>تم تصنيع هذا الطقم من مواد متطورة مقاومة للهب بشكل ذاتي، حيث تتوقف عن الاحتراق فور إزالة مصدر اللهب. يوفر الطقم حماية فائقة ضد مخاطر الوميض الحراري والحرارة الإشعاعية، مع الحفاظ على خصائص مقاومة اللهب حتى بعد الغسيل المتكرر.</p>
    
    <p>يتميز التصميم بالمرونة والراحة للعمل لفترات طويلة، مع وجود عناصر عاكسة لتحسين الرؤية في ظروف العمل المختلفة. تمت إضافة تقنيات متطورة لتنظيم الحرارة والرطوبة لضمان الراحة حتى في درجات الحرارة المرتفعة في المناخ السعودي.</p>
    
    <p>يتكون الطقم من سترة وبنطلون مصممين بعناية مع جيوب متعددة عملية، وتقوية في مناطق التآكل العالية، وخياطة مزدوجة لزيادة المتانة. كما يمكن تخصيص الطقم بشعار شركتك وألوان مؤسستك لتعزيز الهوية المؤسسية مع الحفاظ على خصائص السلامة.</p>
    
    <p>جميع منتجاتنا المقاومة للهب تتوافق مع المعايير العالمية والمحلية للسلامة، بما في ذلك NFPA 2112 وISO 11612 ومعايير SASO، مما يضمن الامتثال لمتطلبات السلامة في المملكة العربية السعودية.</p>
  `,
  price: "ريال 549 - 749",
  minOrder: 20,
  productCode: "FR-SET-2023",
  colors: [
    { name: "أزرق داكن", value: "#1a3a5f" },
    { name: "رمادي غامق", value: "#3a3a3a" },
    { name: "أحمر طوبي", value: "#8b2e2e" },
    { name: "أخضر زيتي", value: "#3d5e45" }
  ],
  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
  features: [
    {
      title: "مقاومة عالية للهب",
      description: "مصنوع من مواد متطورة تتوقف عن الاحتراق فور إزالة مصدر اللهب",
      icon: "fire"
    },
    {
      title: "حماية من الوميض الحراري",
      description: "مصمم للحماية من مخاطر الوميض الحراري في الصناعات البترولية والكهربائية",
      icon: "bolt"
    },
    {
      title: "متانة استثنائية",
      description: "خياطة مزدوجة وتقوية في مناطق التآكل العالية لضمان عمر افتراضي طويل",
      icon: "shield"
    },
    {
      title: "تنظيم الحرارة",
      description: "تقنيات متطورة لتنظيم الحرارة والرطوبة للعمل في درجات الحرارة المرتفعة",
      icon: "thermometer"
    },
    {
      title: "عناصر عاكسة",
      description: "شرائط عاكسة استراتيجية لتحسين الرؤية في ظروف الإضاءة المنخفضة",
      icon: "light-bulb"
    },
    {
      title: "مطابق للمعايير العالمية",
      description: "يلبي معايير NFPA 2112 وISO 11612 ومعايير SASO للسلامة",
      icon: "certificate"
    }
  ],
  specifications: [
    { name: "المادة", value: "88% قطن معالج، 12% نايلون عالي المتانة مع معالجة مقاومة للهب" },
    { name: "وزن القماش", value: "300 جرام/م²" },
    { name: "تصنيف مقاومة الحريق", value: "ATPV: 12.4 كالوري/سم²" },
    { name: "الإغلاق", value: "سحاب مقاوم للشرر مع غطاء واقي وإغلاق فيلكرو" },
    { name: "التعزيزات", value: "خياطة مزدوجة بخيوط مقاومة للحريق، تقوية في المرفقين والركبتين" },
    { name: "الجيوب", value: "جيوب متعددة الوظائف مع أغطية آمنة" },
    { name: "المميزات الإضافية", value: "طوق مرتفع للحماية، أساور قابلة للتعديل، خصر مطاطي للراحة" }
  ],
  customizationOptions: [
    { 
      name: "تطريز الشعار", 
      description: "إضافة شعار شركتك مطرزًا بخيوط مقاومة للحريق على الصدر أو الأكمام",
      image: "/images/product-customization/logo-placement.webp"
    },
    { 
      name: "شريط عاكس إضافي", 
      description: "زيادة العناصر العاكسة للرؤية المحسنة في ظروف الإضاءة المنخفضة",
      image: "/images/product-customization/reflective-elements.webp"
    },
    { 
      name: "جيوب متخصصة", 
      description: "إضافة جيوب مخصصة حسب متطلبات العمل الخاصة بك",
      image: "/images/product-customization/pocket-options.webp"
    },
    { 
      name: "بطاقات تعريفية", 
      description: "إضافة حامل للبطاقات التعريفية أو شارات الأمان",
      image: "/images/product-customization/badge-holder.webp"
    }
  ],
  certifications: [
    "NFPA 2112 - معيار الملابس المقاومة للهب",
    "ISO 11612 - الملابس الواقية من الحرارة واللهب",
    "ASTM F1506 - مقاومة للقوس الكهربائي",
    "معتمد من SASO - الهيئة السعودية للمواصفات والمقاييس والجودة"
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
      id: "hi-vis-safety-uniform",
      name: "زي السلامة عالي الرؤية",
      image: "/images/products/hi-vis-safety-uniform.webp",
      price: "ريال 400",
      href: "/ar/shop/industrial-uniforms/hi-vis-safety-uniform"
    },
    {
      id: "heat-resistant-gloves",
      name: "قفازات مقاومة للحرارة",
      image: "/images/products/heat-resistant-gloves.webp",
      price: "ريال 95",
      href: "/ar/shop/industrial-uniforms/heat-resistant-gloves"
    }
  ],
  industries: ["النفط والغاز", "البتروكيماويات", "الكهرباء والطاقة", "اللحام", "المعادن والصهر", "الصناعات الثقيلة"]
};

export default function FlameResistantWorkwearArabicPage() {
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
    image: '/images/products/flame-resistant-workwear.webp',
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
                src="/images/products/flame-resistant-workwear.webp"
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/flame-resistant-workwear-detail1.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/flame-resistant-workwear-detail2.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/flame-resistant-workwear-detail3.webp"
                  alt="تفاصيل المنتج"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <Image
                  src="/images/products/flame-resistant-workwear-detail4.webp"
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
                  image: '/images/products/flame-resistant-workwear.webp',
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