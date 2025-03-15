'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Head from 'next/head';

export default function PremiumMedicalScrubsArabicPage() {
  const locale = 'ar';
  const [selectedColor, setSelectedColor] = useState('أزرق سماوي');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showRequestForm, setShowRequestForm] = useState(false);

  // بيانات المنتج
  const product = {
    id: "premium-medical-scrubs",
    category: "medical-scrubs",
    categoryName: "ملابس الرعاية الصحية",
    name: "سكروب طبي ممتاز",
    tagline: "ملابس طبية عالية الأداء للمتخصصين في الرعاية الصحية",
    shortDescription: "سكروب طبي عالي الجودة بألوان متعددة للعاملين في مجال الرعاية الصحية",
    longDescription: "توفر ملابس السكروب الطبية الممتازة للمتخصصين في الرعاية الصحية راحة استثنائية ومتانة ومظهرًا احترافيًا. تم تصميمها خصيصًا لبيئة الرعاية الصحية في المملكة العربية السعودية، تتميز هذه الملابس بخصائص مضادة للميكروبات، ونسيج يمتص الرطوبة، وتكوينات عملية للجيوب لتلبية جميع احتياجات الطاقم الطبي.",
    price: "ريال 179",
    minOrder: 20,
    mainImage: "/images/default-placeholder.jpg",
    additionalImages: [
      "/images/avatar-placeholder.jpg",
      "/images/default-placeholder.jpg",
      "/images/default-placeholder.jpg"
    ],
    colors: [
      { name: "أزرق سماوي", value: "#87CEEB" },
      { name: "أخضر جراحي", value: "#168269" },
      { name: "كحلي", value: "#000080" },
      { name: "رمادي", value: "#808080" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      {
        title: "نسيج مضاد للميكروبات",
        description: "خصائص مضادة للميكروبات مدمجة تمنع نمو البكتيريا وتقلل الرائحة",
        icon: "shield-check"
      },
      {
        title: "امتصاص الرطوبة",
        description: "تقنية نسيج متقدمة تسحب الرطوبة بعيدًا عن الجسم للراحة طوال اليوم",
        icon: "sparkles"
      },
      {
        title: "بناء متين",
        description: "خياطة مقواة ونسيج عالي الجودة يضمن أداءً طويل الأمد",
        icon: "check-badge"
      },
      {
        title: "تصميم عملي",
        description: "جيوب متعددة موضوعة بشكل استراتيجي للأدوات والملحقات الطبية الأساسية",
        icon: "inbox-stack"
      },
      {
        title: "راحة مثالية",
        description: "تصميم مريح مع لوحات مرنة تسمح بنطاق كامل من الحركة أثناء المناوبات",
        icon: "heart"
      },
      {
        title: "سهولة العناية",
        description: "نسيج مقاوم للتجعد وسهل العناية يتحمل الغسيل الصناعي المتكرر",
        icon: "check-circle"
      }
    ],
    specifications: [
      { name: "المادة", value: "65% بوليستر، 35% قطن مع معالجة مضادة للميكروبات" },
      { name: "الوزن", value: "180 جرام/م²" },
      { name: "الإغلاق", value: "بنطلون برباط، قميص بياقة V" },
      { name: "الجيوب", value: "6 جيوب وظيفية (3 علوية، 3 في البنطلون)" },
      { name: "العناية", value: "قابل للغسل في الغسالة، متوافق مع الغسيل الصناعي" },
      { name: "المميزات", value: "مضاد للميكروبات، يمتص الرطوبة، مقاوم للسوائل" }
    ],
    customizationOptions: [
      { 
        name: "شعار المستشفى/العيادة", 
        description: "إضافة شعار مؤسستك مطرزًا على الصدر أو الكم",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "تطريز الاسم", 
        description: "اسم الموظف ومؤهلاته مطرزة للتعريف",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "ترميز الألوان للأقسام", 
        description: "خيارات الألوان لتمييز الأقسام المختلفة أو الأدوار",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "تكوين جيوب مخصص", 
        description: "تعديل موضع الجيوب بناءً على احتياجات قسم معين",
        image: "/images/default-placeholder.jpg"
      }
    ],
    relatedProducts: [
      {
        id: "surgical-scrubs",
        name: "طقم سكروب جراحي",
        image: "/images/product-placeholder.jpg",
        price: "ريال 199",
        href: "/ar/shop/medical-scrubs/surgical-scrubs"
      },
      {
        id: "lab-coats",
        name: "معطف مختبر احترافي",
        image: "/images/product-placeholder.jpg",
        price: "ريال 229",
        href: "/ar/shop/medical-scrubs/lab-coats"
      },
      {
        id: "nurse-uniform",
        name: "زي تمريض ممتاز",
        image: "/images/product-placeholder.jpg",
        price: "ريال 189",
        href: "/ar/shop/medical-scrubs/nurse-uniform"
      }
    ],
    detailedDescription: `<p>يضع السكروب الطبي الممتاز الخاص بنا معيارًا جديدًا لملابس الرعاية الصحية في المرافق الطبية بالمملكة العربية السعودية. تم تطويره بمدخلات من المتخصصين في الرعاية الصحية، يجمع هذا السكروب بين أعلى جودة من المواد مع ميزات تصميم عملية لتلبية الاحتياجات المتطلبة للبيئات الطبية.</p>
    
    <p>توفر تقنية النسيج المضاد للميكروبات طبقة إضافية من الحماية في إعدادات الرعاية الصحية، بينما تضمن خصائص امتصاص الرطوبة الراحة أثناء المناوبات الطويلة. تم بناء كل طقم بخياطة مقواة في نقاط الضغط العالي لتحمل مشاق الاستخدام اليومي والغسيل المتكرر.</p>
    
    <p>يتضمن التصميم المدروس جيوبًا متعددة موضوعة بشكل استراتيجي للوصول المريح إلى الأدوات والأجهزة الأساسية. القص المريح يسمح بنطاق كامل من الحركة للمتخصصين الطبيين الذين يتنقلون باستمرار، مع الحفاظ على مظهر احترافي وأنيق.</p>
    
    <p>متوفر بمجموعة من الألوان المناسبة لترميز الأقسام المختلفة، يمكن تخصيص سكروب الطبي الممتاز بشعار مؤسستك وتعريف الموظفين. يلبي النسيج المعايير الصحية الدولية مع تكييفه خصيصًا لبيئات الرعاية الصحية في المملكة العربية السعودية.</p>`
  };

  // Define the color type for better TypeScript support
  interface ColorOption {
    name: string;
    value: string;
  }

  // Define props interface for ColorSwatch component
  interface ColorSwatchProps {
    color: ColorOption;
    selected: boolean;
    onClick: () => void;
  }

  // مكون اختيار اللون
  const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, selected, onClick }) => (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${selected ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
      title={color.name}
    >
      <span className="sr-only">{color.name}</span>
      <span
        className="w-6 h-6 rounded-full"
        style={{ backgroundColor: color.value }}
      />
    </button>
  );

  // Define props interface for SizeSelector component
  interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string | null;
    onChange: (size: string) => void;
  }

  // مكون اختيار المقاس
  const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onChange }) => (
    <div className="grid grid-cols-7 gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={`py-2 border rounded-md ${
            selectedSize === size
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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

  return (
    <>
      <Head>
        <title>ملابس طبية متميزة - يونيوم للأزياء المهنية</title>
        <meta name="description" content="ملابس طبية متميزة عالية الجودة مصنوعة من أقمشة متطورة للاستخدام في المستشفيات والمراكز الطبية بالمملكة العربية السعودية" />
        <meta name="keywords" content="سكروب طبي, ملابس طبية, ملابس مستشفيات, زي طبي ممتاز, يونيوم, السعودية" />
        <meta property="og:title" content="ملابس طبية متميزة - يونيوم للأزياء المهنية" />
        <meta property="og:description" content="ملابس طبية متميزة عالية الجودة مصنوعة من أقمشة متطورة للاستخدام في المستشفيات والمراكز الطبية بالمملكة العربية السعودية" />
        <meta property="og:image" content="/images/default-placeholder.jpg" />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://uneom.com/ar/shop/medical-scrubs/premium-medical-scrubs" />
        <link rel="alternate" hrefLang="en" href="https://uneom.com/shop/medical-scrubs/premium-medical-scrubs" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar/shop/medical-scrubs/premium-medical-scrubs" />
      </Head>

      <div className="bg-gray-100 py-4">
        <Container>
          <div className="flex items-center text-sm text-neutral-600 justify-end">
            <Link href="/ar/shop" className="hover:text-primary-600 transition-colors">
              المتجر
            </Link>
            <span className="mx-2">•</span>
            <Link href="/ar/shop/medical-scrubs" className="hover:text-primary-600 transition-colors">
              سكروب طبي
            </Link>
            <span className="mx-2">•</span>
            <span className="text-primary-700 font-medium">سكروب طبي ممتاز</span>
          </div>
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
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.additionalImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer hover:border-primary-300 transition-colors">
                  <Image
                    src={image}
                    alt={`${product.name} - عرض ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="space-y-8 text-right">
            <div>
              <div className="text-sm text-primary-700 font-medium mb-2">
                {product.categoryName}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-neutral-700">
                {product.tagline}
              </p>
            </div>

            <p className="text-lg text-neutral-800">
              {product.shortDescription}
            </p>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex justify-between items-end mb-6">
                <div className="text-sm text-neutral-600">
                  الحد الأدنى للطلب: <span className="font-medium">{product.minOrder} قطعة</span>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">السعر الأساسي</div>
                  <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
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
                  <button className="text-sm text-primary-600 hover:text-primary-700">دليل المقاسات</button>
                  <div className="text-sm font-medium text-neutral-900">المقاس: {selectedSize}</div>
                </div>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setShowRequestForm(true)}
                >
                  طلب معلومات
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                >
                  إضافة إلى طلب التسعير
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Details Tabs */}
        <div className="mt-16 border-t border-neutral-200 pt-8">
          <div className="flex space-x-8 border-b border-neutral-200 justify-end">
            <button
              onClick={() => setActiveTab('customization')}
              className={`pb-4 font-medium text-sm ${
                activeTab === 'customization'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              خيارات التخصيص
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`pb-4 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              المواصفات
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 font-medium text-sm ${
                activeTab === 'description'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              الوصف
            </button>
          </div>

          <div className="py-8 text-right">
            {activeTab === 'description' && (
              <div className="prose max-w-none prose-headings:text-right prose-p:text-right">
                <div dangerouslySetInnerHTML={{ __html: product.detailedDescription }} dir="rtl" />
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex flex-row-reverse">
                    <div className="w-2/3 text-neutral-700 text-right">{spec.value}</div>
                    <div className="w-1/3 font-medium text-neutral-900 text-right">{spec.name}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'customization' && (
              <div className="space-y-6">
                <p className="text-neutral-700 text-right">
                  عزز ملابس السكروب الطبية الخاصة بك مع خيارات التخصيص هذه لتتناسب تمامًا مع متطلبات مؤسستك الصحية:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.customizationOptions.map((option, index) => (
                    <div key={index} className="flex items-start space-x-4 flex-row-reverse">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100 mr-0 ml-4">
                        {option.image && (
                          <Image
                            src={option.image}
                            alt={option.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                      <div className="text-right">
                        <h4 className="font-medium text-neutral-900">{option.name}</h4>
                        <p className="text-sm text-neutral-600 mt-1">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-16 bg-neutral-50 rounded-2xl p-8">
          <SectionHeading as="h2" className="text-center mb-12">
            الميزات والفوائد الرئيسية
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  {/* Icon would go here - using placeholder */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Requirements */}
        <div className="mt-16 bg-neutral-50 rounded-2xl p-8">
          <SectionHeading as="h2" className="mb-6 text-center">
            معلومات الطلب
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">الحد الأدنى للطلب</h3>
              <p className="text-neutral-600">{product.minOrder} قطعة لكل نمط ولون</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">الجدول الزمني للإنتاج</h3>
              <p className="text-neutral-600">2-3 أسابيع للطلبات العادية<br />1-2 أسبوع للطلبات العاجلة</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">شروط الدفع</h3>
              <p className="text-neutral-600">50% دفعة عند تأكيد الطلب<br />50% قبل الشحن</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="primary">
              طلب عرض سعر
            </Button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <SectionHeading as="h2" className="mb-8 text-center">
            منتجات ذات صلة
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 mb-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Request Information Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <span className="sr-only">إغلاق</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="text-xl font-bold">طلب معلومات</h3>
              </div>
              <div className="space-y-4 text-right">
                <p className="text-neutral-700">
                  يرجى ملء النموذج أدناه لطلب المزيد من المعلومات حول سكروب طبي ممتاز. سيتواصل معك متخصصو الأزياء الطبية لدينا قريبًا.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">المنشأة الصحية</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">الشخص المسؤول</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">المنصب/القسم</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">البريد الإلكتروني</label>
                    <input type="email" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">رقم الهاتف</label>
                    <input type="tel" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">الكمية المقدرة</label>
                    <input type="number" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">متطلبات محددة</label>
                    <textarea rows={4} className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"></textarea>
                  </div>
                  <div className="flex justify-start">
                    <Button variant="primary">
                      إرسال الطلب
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 