'use client';

import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
import Head from 'next/head';

export default function IndustrialCoverallProArabicPage() {
  const locale = 'ar';
  const [selectedColor, setSelectedColor] = useState('كحلي/أزرق ملكي');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showRequestForm, setShowRequestForm] = useState(false);

  // بيانات المنتج
  const product = {
    id: "industrial-coverall-pro",
    category: "industrial-uniforms",
    categoryName: "ملابس العمل الصناعية",
    name: "أفرول صناعي متين",
    tagline: "حماية متينة للبيئات الصناعية المتطلبة",
    shortDescription: "أفرول صناعي ثنائي اللون متين مناسب لبيئات المصانع والمنشآت الصناعية",
    longDescription: "تم تصميم الأفرول الصناعي المتين الخاص بنا للمهنيين العاملين في بيئات المصانع ومرافق التصنيع والإعدادات الصناعية. يوفر هذا الأفرول الممتاز متانة استثنائية وراحة وحماية للعاملين في الظروف الصعبة. يجمع التصميم ثنائي اللون بين الأناقة والوظائف العملية، في حين تضمن الخياطة المقواة وتوزيع الجيوب الاستراتيجي العملية في الاستخدام اليومي.",
    price: "ريال 289",
    minOrder: 15,
    mainImage: "/images/banner-placeholder.jpg",
    additionalImages: [
      "/images/products/industrial-coverall.jpg",
      "/images/default-placeholder.jpg",
      "/images/default-placeholder.jpg"
    ],
    colors: [
      { name: "أسود/رمادي", value: "#333333" },
      { name: "كحلي/أزرق ملكي", value: "#1a3a5f" },
      { name: "بني/خاكي", value: "#5d4037" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      {
        title: "بناء متين",
        description: "مصنوع من قماش مزيج بوليكوتون ثقيل الوزن 240 جرام/م² للمتانة الاستثنائية",
        icon: "shield-check"
      },
      {
        title: "ميزات الأمان",
        description: "يتضمن شرائط عاكسة لتعزيز الرؤية في ظروف الإضاءة المنخفضة",
        icon: "eye"
      },
      {
        title: "تصميم عملي",
        description: "جيوب متعددة تشمل الصدر والجانب والخلف لتخزين الأدوات بشكل مناسب",
        icon: "inbox-stack"
      },
      {
        title: "تركيز على الراحة",
        description: "تصميم ظهر متحرك وإدخالات خصر مرنة لتحسين الحركة والراحة",
        icon: "check-badge"
      },
      {
        title: "سهولة الصيانة",
        description: "متوافق مع الغسيل الصناعي مع تشطيب مقاوم للاتساخ لسهولة التنظيف",
        icon: "sparkles"
      },
      {
        title: "متكيف مع المناخ",
        description: "قماش قابل للتنفس مناسب لظروف المناخ في المملكة العربية السعودية",
        icon: "sun"
      }
    ],
    specifications: [
      { name: "المادة", value: "65% بوليستر، 35% قطن" },
      { name: "الوزن", value: "240 جرام/م²" },
      { name: "الإغلاق", value: "سحاب متين مع غطاء أزرار ضغط" },
      { name: "الجيوب", value: "8 جيوب متعددة الأغراض" },
      { name: "ميزات الأمان", value: "شرائط عاكسة على الصدر والظهر والأكمام" },
      { name: "الغسيل", value: "متوافق مع الغسيل الصناعي" },
      { name: "التخصيص", value: "متاح للتطريز وعلامات الشركة التجارية" }
    ],
    customizationOptions: [
      { 
        name: "تطريز شعار الشركة", 
        description: "إضافة شعار شركتك مطرزًا على الصدر و/أو الظهر",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "علامات الاسم/القسم", 
        description: "إضافة اسم الموظف أو تعريف القسم",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "شرائط عاكسة", 
        description: "شرائط عاكسة إضافية لتعزيز الرؤية",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "تخصيص الجيوب", 
        description: "تعديل تكوين الجيوب بناءً على الاحتياجات المحددة",
        image: "/images/default-placeholder.jpg"
      }
    ],
    relatedProducts: [
      {
        id: "industrial-safety-vest",
        name: "سترة أمان عالية الرؤية",
        image: "/images/product-placeholder.jpg",
        price: "ريال 89",
        href: "/ar/shop/industrial-uniforms/industrial-safety-vest"
      },
      {
        id: "welding-apron",
        name: "مريلة لحام مقاومة للحرارة",
        image: "/images/product-placeholder.jpg",
        price: "ريال 159",
        href: "/ar/shop/industrial-uniforms/welding-apron"
      },
      {
        id: "mechanics-overalls",
        name: "أفرول ميكانيكي ممتاز",
        image: "/images/product-placeholder.jpg",
        price: "ريال 269",
        href: "/ar/shop/industrial-uniforms/mechanics-overalls"
      }
    ],
    detailedDescription: `<p>تم تصميم الأفرول الصناعي المتين الخاص بنا خصيصًا للبيئات الصناعية المتطلبة في المملكة العربية السعودية. تم إنشاؤه مع التركيز على المتانة والحماية والراحة، يتفوق هذا الأفرول في بيئات المصانع ومرافق التصنيع ومواقع البناء وعمليات الصيانة.</p>
    
    <p>يوفر التصميم ثنائي اللون مظهرًا احترافيًا مع إخفاء البقع والأوساخ. تضمن التقويات الاستراتيجية في نقاط الضغط العالي أن هذه الملابس تتحمل الاستخدام المنتظم في الظروف الصعبة. لقد دمجنا ملاحظات العمال الصناعيين لتضمين ميزات عملية مثل تصميم الظهر المتحرك لتحسين الحركة وجيوب متعددة لتخزين الأدوات بشكل مناسب.</p>
    
    <p>يوفر مزيج البوليكوتون ثقيل الوزن 240 جرام/م² مقاومة ممتازة للتمزق والاحتكاك مع الحفاظ على قابلية التنفس في ظروف العمل الساخنة. تعزز الشرائط العاكسة على الصدر والظهر والأكمام الرؤية في البيئات ذات الإضاءة المنخفضة، مما يضيف ميزة أمان أساسية للعمال.</p>
    
    <p>تم تصميم هذا الأفرول لتلبية معايير السلامة في مكان العمل في المملكة العربية السعودية ويمكن تخصيصه بعلامة شركتك التجارية، مما يجعله خيارًا مثاليًا للشركات التي تتطلع إلى الحفاظ على مظهر مهني ومتسق للقوى العاملة مع إعطاء الأولوية لسلامة الموظفين وراحتهم.</p>`
  };

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
        <title>أفرول صناعي متين - يونيوم للأزياء المهنية</title>
        <meta name="description" content="أفرول صناعي متين عالي الجودة مصمم للاستخدام في البيئات الصناعية القاسية، متوفر بعدة ألوان وأحجام في السعودية" />
        <meta name="keywords" content="أفرول صناعي, ملابس عمل صناعية, أفرول متين, زي موحد للمصانع, ملابس عمل سعودية" />
        <meta property="og:title" content="أفرول صناعي متين - يونيوم للأزياء المهنية" />
        <meta property="og:description" content="أفرول صناعي متين عالي الجودة مصمم للاستخدام في البيئات الصناعية القاسية، متوفر بعدة ألوان وأحجام في السعودية" />
        <meta property="og:image" content="/images/banner-placeholder.jpg" />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://uneom.com/ar/shop/industrial-uniforms/industrial-coverall-pro" />
        <link rel="alternate" hrefLang="en" href="https://uneom.com/shop/industrial-uniforms/industrial-coverall-pro" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar/shop/industrial-uniforms/industrial-coverall-pro" />
      </Head>

      <div className="bg-gray-100 py-4">
        <Container>
          <div className="flex items-center text-sm text-neutral-600 justify-end">
            <Link href="/ar/shop" className="hover:text-primary-600 transition-colors">
              المتجر
            </Link>
            <span className="mx-2">•</span>
            <Link href="/ar/shop/industrial-uniforms" className="hover:text-primary-600 transition-colors">
              ملابس العمل الصناعية
            </Link>
            <span className="mx-2">•</span>
            <span className="text-primary-700 font-medium">أفرول صناعي متين</span>
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
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
                      title={color.name}
                    >
                      <span className="sr-only">{color.name}</span>
                      <span
                        className="w-8 h-8 rounded-full border border-neutral-200"
                        style={{ backgroundColor: color.value }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <button className="text-sm text-primary-600 hover:text-primary-700">دليل المقاسات</button>
                  <div className="text-sm font-medium text-neutral-900">المقاس: {selectedSize}</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-neutral-300 text-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
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
                  عزز أفرولات العمل الصناعية الخاصة بك مع خيارات التخصيص هذه لتتناسب تمامًا مع متطلبات شركتك وهوية علامتك التجارية:
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
              <p className="text-neutral-600">3-4 أسابيع للطلبات العادية<br />2-3 أسابيع للطلبات العاجلة</p>
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
                  يرجى ملء النموذج أدناه لطلب المزيد من المعلومات حول هذا المنتج. سيتواصل فريقنا معك قريبًا.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">اسم الشركة</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">الشخص المسؤول</label>
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
                    <label className="block text-sm font-medium text-neutral-700">معلومات إضافية</label>
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