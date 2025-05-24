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
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

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

export default function IndustrialCoverallProClientPage() {
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
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/products/industrial-coverall-pro.webp"
                    alt={`${product.name} - صورة 1`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/industries/Factory_Industrial/industrial-coverall-detail.webp"
                    alt={`${product.name} - صورة 2`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/industries/Factory_Industrial/industrial-coverall-worker.webp"
                    alt={`${product.name} - صورة 3`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/industries/Factory_Industrial/factory-workers-industrial.webp"
                    alt={`${product.name} - صورة 4`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="space-y-8 text-right" dir="rtl">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-lg text-neutral-600 mt-1">{product.tagline}</p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                <span className="text-sm text-neutral-500 mr-2">
                  (الحد الأدنى للطلب: {product.minOrder} قطعة)
                </span>
              </div>
            </div>

            <div className="py-4 border-t border-b border-neutral-200">
              <p className="text-neutral-700">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">اختر اللون:</h3>
              <ColorSwatch
                colors={product.colors}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
              />
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">اختر المقاس:</h3>
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <AddToQuoteButton
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  color: selectedColor,
                  size: selectedSize,
                }}
                fullWidth
              />
              <Button 
                onClick={whatsappProduct}
                variant="outline"
                className="flex items-center justify-center gap-2"
                fullWidth
              >
                <FaWhatsapp className="h-5 w-5 text-green-600" />
                <span>استفسر عبر الواتساب</span>
              </Button>
            </div>
            
            <Button
              variant="ghost"
              onClick={() => setShowRequestForm(true)}
              className="w-full"
            >
              طلب معلومات إضافية
            </Button>

            {/* Request Form Dialog */}
            {showRequestForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                  <h2 className="text-2xl font-bold mb-4">طلب معلومات حول {product.name}</h2>
                  <RequestInfoForm productName={product.name} onClose={() => setShowRequestForm(false)} />
                </div>
              </div>
            )}

            {/* Product Code */}
            <div>
              <p className="text-sm text-neutral-500">رمز المنتج: {product.productCode}</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Product Details */}
      <section className="bg-white py-16">
        <Container>
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex flex-wrap gap-2" dir="rtl">
              <button
                className={`px-6 py-3 font-medium text-lg transition-colors ${
                  activeTab === 'description' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-600'
                }`}
                onClick={() => setActiveTab('description')}
              >
                التفاصيل
              </button>
              <button
                className={`px-6 py-3 font-medium text-lg transition-colors ${
                  activeTab === 'specifications' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-600'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                المواصفات
              </button>
              <button
                className={`px-6 py-3 font-medium text-lg transition-colors ${
                  activeTab === 'customization' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-600'
                }`}
                onClick={() => setActiveTab('customization')}
              >
                خيارات التخصيص
              </button>
            </div>
          </div>

          <div className="text-right" dir="rtl">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-full rtl">
                <div dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
                
                <h3>الصناعات المستهدفة</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.industries.map((industry, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                
                {product.certifications.length > 0 && (
                  <>
                    <h3>الشهادات والمعايير</h3>
                    <ul>
                      {product.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">المواصفات الفنية</h2>
                <div className="bg-neutral-50 rounded-lg p-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className={`py-3 ${index !== 0 && 'border-t border-neutral-200'}`}>
                      <div className="flex flex-wrap justify-between">
                        <span className="font-medium text-neutral-900">{spec.name}</span>
                        <span className="text-neutral-700">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'customization' && (
              <CustomizationOptions options={product.customizationOptions} />
            )}
          </div>
        </Container>
      </section>

      {/* Product Features */}
      <section className="bg-neutral-50 py-16">
        <Container>
          <SectionHeading subtitle="مزايا وخصائص فريدة" alignment="right">
            مميزات الأفرول الصناعي بروفيشنال
          </SectionHeading>
          
          <FeaturesGrid features={product.features} />
        </Container>
      </section>
      
      {/* Order Requirements */}
      <OrderRequirements locale={locale} />
      
      {/* Related Products */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading subtitle="استكشف منتجات مشابهة من تشكيلة الملابس الصناعية" alignment="right">
            منتجات ذات صلة
          </SectionHeading>
          
          <RelatedProducts products={product.relatedProducts} />
        </Container>
      </section>
    </>
  );
} 