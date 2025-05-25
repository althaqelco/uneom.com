'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import SchemaMarkup, { MultiSchemaMarkup } from '@/components/SchemaMarkup';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ManufacturingAttireClientPage() {
  const locale = 'ar';
  
  // منتجات ملابس التصنيع
  const products = [
    {
      id: 'industrial-coveralls',
      name: 'أفرول صناعي',
      description: 'أفرول صناعي متين مصمم للحماية والراحة في بيئات التصنيع والصناعة الثقيلة.',
      price: 'من 249 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/manufacturing-attire/industrial-coveralls'
    },
    {
      id: 'protective-workwear',
      name: 'ملابس العمل الواقية',
      description: 'ملابس عمل واقية مصممة خصيصاً لحماية العاملين في المصانع والمنشآت الصناعية.',
      price: 'من 279 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/manufacturing-attire/protective-workwear'
    },
    {
      id: 'safety-vests',
      name: 'سترات السلامة',
      description: 'سترات سلامة عاكسة للضوء لزيادة الرؤية وضمان السلامة في بيئات العمل الصناعية.',
      price: 'من 129 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/manufacturing-attire/safety-vests'
    },
    {
      id: 'industrial-jackets',
      name: 'سترات صناعية',
      description: 'سترات صناعية متينة ومقاومة للعوامل الخارجية مناسبة للعمل في بيئات صناعية متنوعة.',
      price: 'من 299 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/manufacturing-attire/industrial-jackets'
    },
    {
      id: 'heat-resistant-workwear',
      name: 'ملابس عمل مقاومة للحرارة',
      description: 'ملابس عمل متخصصة مقاومة للحرارة مصممة للبيئات الصناعية ذات درجات الحرارة المرتفعة.',
      price: 'من 399 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/manufacturing-attire/heat-resistant-workwear'
    },
    {
      id: 'industrial-protective-uniforms',
      name: 'أزياء واقية صناعية',
      description: 'أزياء واقية صناعية متكاملة توفر الحماية والراحة للعاملين في بيئات التصنيع.',
      price: 'من 349 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/manufacturing-attire/industrial-protective-uniforms',
      isNew: true
    }
  ];
  
  // فئات المنتجات
  const categories = [
    {
      title: 'ملابس المصانع',
      description: 'ملابس متخصصة للعاملين في المصانع',
      image: '/images/products/industrial-coverall.jpg',
      url: '/ar/shop/manufacturing-attire/factory-workwear'
    },
    {
      title: 'ملابس الورش',
      description: 'ملابس متينة مناسبة للعمل في ورش العمل',
      image: '/images/products/industrial-coverall.jpg',
      url: '/ar/shop/manufacturing-attire/workshop-attire'
    },
    {
      title: 'معدات السلامة',
      description: 'معدات سلامة للعاملين في بيئات التصنيع',
      image: '/images/products/industrial-coverall.jpg',
      url: '/ar/shop/manufacturing-attire/safety-equipment'
    },
    {
      title: 'ملابس مقاومة للحرارة',
      description: 'ملابس متخصصة لبيئات العمل الحارة',
      image: '/images/products/industrial-coverall.jpg',
      url: '/ar/shop/manufacturing-attire/heat-resistant'
    }
  ];
  
  // بيانات الأسئلة الشائعة
  const faqs = [
    {
      question: "ما هي المعايير التي تتبعونها في تصنيع ملابس العمل الصناعية؟",
      answer: "نلتزم بمعايير السلامة العالمية مثل ISO 11612، ISO 11611، EN 1149 للملابس المقاومة للحريق، والمعايير السعودية SASO. جميع ملابسنا مصممة وفقًا لمتطلبات الأمان والجودة العالية، مع استخدام أفضل الأقمشة والمواد المتينة التي تتحمل بيئات العمل القاسية."
    },
    {
      question: "هل توفرون خدمة تخصيص الملابس للشركات الصناعية؟",
      answer: "نعم، نقدم خدمات تخصيص كاملة تشمل إضافة شعار الشركة، واختيار الألوان المؤسسية، وتعديل التصميم بما يتناسب مع احتياجاتكم. يمكننا أيضاً تطوير حلول مخصصة تمامًا لتلبية متطلبات السلامة والأداء الخاصة بصناعتكم."
    },
    {
      question: "ما مدة توريد طلبات ملابس التصنيع للشركات؟",
      answer: "تعتمد مدة التوريد على حجم الطلب ومستوى التخصيص المطلوب. للطلبات القياسية، نوفر التوريد خلال 1-3 أسابيع، أما الطلبات المخصصة بالكامل فقد تستغرق 3-6 أسابيع. نقدم أيضًا خدمة التوريد السريع للطلبات العاجلة مع رسوم إضافية."
    },
    {
      question: "كيف يمكننا ضمان حصولنا على المقاسات المناسبة لفريق العمل؟",
      answer: "نقدم خدمة أخذ المقاسات في موقعكم للطلبات الكبيرة، كما نوفر دليل مقاسات مفصل وعينات للقياس. يمكننا أيضًا توفير مقاسات خاصة للأفراد الذين يحتاجون إلى تعديلات محددة في الملابس."
    },
    {
      question: "هل توفرون ملابس تصنيع مقاومة للمواد الكيميائية؟",
      answer: "نعم، نوفر مجموعة متخصصة من الملابس المقاومة للمواد الكيميائية المختلفة، مصممة وفقًا للمعايير EN 13034 وEN 14605. تتنوع منتجاتنا لتوفير الحماية من الرذاذ الخفيف إلى المواد الكيميائية الأكثر خطورة، ويمكننا تقديم المشورة بشأن الخيارات المناسبة لبيئة عملكم الخاصة."
    }
  ];
  
  // بيانات الميزات التفصيلية
  const detailedFeatures = [
    {
      title: "أقمشة متطورة",
      description: "نستخدم أقمشة متطورة مثل البولي كوتون المعالج والأقمشة المقاومة للحرارة والحريق، مصممة خصيصًا لتحمل بيئات العمل القاسية وتوفير أقصى درجات الراحة والأمان.",
      icon: "/images/icons/fabric.svg"
    },
    {
      title: "معايير السلامة",
      description: "جميع منتجاتنا تتوافق مع معايير السلامة المحلية والعالمية، بما في ذلك معايير SASO السعودية ومعايير ISO للملابس الواقية، مما يضمن أعلى مستويات الحماية.",
      icon: "/images/icons/safety.svg"
    },
    {
      title: "تقنيات الراحة",
      description: "تتميز ملابسنا بتقنيات متقدمة للراحة مثل المناطق المرنة، والتهوية المحسنة، والتصميم المريح للحركة، مما يساعد العاملين على أداء مهامهم بكفاءة أعلى.",
      icon: "/images/icons/comfort.svg"
    }
  ];
  
  // بيانات Schema.org
  const schemaData = {
    name: 'ملابس التصنيع',
    description: 'ملابس تصنيع عالية الجودة مصممة للحماية والراحة في بيئات المصانع والصناعة الثقيلة في المملكة العربية السعودية.',
    image: 'https://uneom.com/images/categories/manufacturing-attire.webp',
    url: 'https://uneom.com/ar/shop/manufacturing-attire/',
    offers: {
      priceCurrency: 'SAR',
      price: '129',
      priceValidUntil: '2024-12-31',
      availability: 'https://schema.org/InStock',
    },
    brand: {
      name: 'يونيوم',
    },
    mainEntityOfPage: 'https://uneom.com/ar/shop/manufacturing-attire/'
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

      {/* Schema.org Structured Data */}
      <MultiSchemaMarkup schemas={[
        { type: 'product', data: schemaData },
        { type: 'faq', data: faqs.map(faq => ({ question: faq.question, answer: faq.answer })) }
      ]} />
      
      {/* فتات الخبز */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex justify-end" aria-label="فتات الخبز">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">الرئيسية</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">المتجر</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">ملابس التصنيع</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* بانر الصفحة */}
      <section className="relative py-16 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-4">ملابس التصنيع وأزياء العمل الصناعي | أفرولات وملابس واقية للعاملين في المصانع | يونيوم المملكة العربية السعودية</h1>
              <p className="text-xl mb-6 text-white/90">
                ملابس صناعية عالية الجودة مصممة للحماية والراحة في بيئات التصنيع والصناعة الثقيلة في المملكة العربية السعودية. توفر يونيوم مجموعة متكاملة من ملابس العمل المتينة والمريحة للعاملين في القطاع الصناعي بمختلف تخصصاته.
              </p>
              <Button 
                variant="secondary" 
                href="#featured-products"
              >
                تصفح المنتجات
              </Button>
            </div>
            <div className="relative h-64 md:h-80 order-1 md:order-2">
              <Image 
                src="/images/products/industrial-coverall.jpg"
                alt="ملابس التصنيع"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* المميزات التفصيلية */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading centered>لماذا تختار ملابس التصنيع من يونيوم؟</SectionHeading>
            <p className="text-gray-600 mt-4">
              تتميز منتجاتنا بالجودة العالية والمطابقة للمعايير العالمية، مما يجعلها الخيار الأمثل للشركات الصناعية في المملكة العربية السعودية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-right">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* الفئات */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>فئات ملابس التصنيع</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                href={category.url}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-right">
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* المنتجات المميزة */}
      <section id="featured-products" className="py-16">
        <Container>
          <SectionHeading centered>منتجاتنا المميزة</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={product.href} className="block relative h-64">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">جديد</span>
                  )}
                </Link>
                <div className="p-4 text-right">
                  <Link href={product.href} className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary-600 transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline"
                      size="sm"
                      href={product.href}
                    >
                      عرض التفاصيل
                    </Button>
                    <span className="font-bold text-primary-600">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* معلومات تفصيلية عن المنتجات */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/products/industrial-coverall.jpg"
                alt="تفاصيل ملابس التصنيع العالية الجودة"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold mb-6">ملابس تصنيع مصممة خصيصًا للمصانع السعودية</h2>
              <p className="text-gray-700 mb-4">
                تدرك شركة يونيوم التحديات الفريدة التي تواجه العاملين في قطاع التصنيع بالمملكة العربية السعودية، من درجات الحرارة المرتفعة إلى المخاطر المهنية المتنوعة. لذلك، صممنا مجموعة متكاملة من ملابس العمل التي تجمع بين:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">أقمشة متينة تتحمل ظروف العمل القاسية وتدوم لفترة طويلة</span>
                </li>
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">معالجات خاصة للحماية من الحرارة، الشرر، المواد الكيميائية، والأخطار الأخرى</span>
                </li>
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">تصميم مريح يناسب طبيعة العمل الصناعي ويتيح الحركة بحرية</span>
                </li>
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">خيارات تخصيص متعددة تتناسب مع هوية شركتك وقواعد السلامة الخاصة بك</span>
                </li>
              </ul>
              
              <p className="text-gray-700">
                نفخر بتقديم منتجات تحقق توازناً مثالياً بين السلامة، المتانة، والراحة، وهو ما جعل يونيوم الخيار الأول للعديد من المصانع والمنشآت الصناعية في المملكة.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم المميزات */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">الأمان أولاً</h3>
              <p className="text-gray-600">مصممة لتوفير أقصى درجات السلامة للعاملين في بيئات التصنيع المختلفة.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">متانة طويلة الأمد</h3>
              <p className="text-gray-600">مصنوعة من مواد عالية الجودة مصممة لتتحمل ظروف العمل القاسية والاستخدام اليومي.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تخصيص كامل</h3>
              <p className="text-gray-600">إمكانية تخصيص الملابس بالكامل حسب متطلبات وهوية شركتك، بما في ذلك الشعارات والألوان.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم الأسئلة الشائعة */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>الأسئلة الشائعة</SectionHeading>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            إليك إجابات على الأسئلة الأكثر شيوعًا حول ملابس التصنيع من يونيوم
          </p>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-bold mb-3 text-right">{faq.question}</h3>
                <p className="text-gray-600 text-right">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* دعوة للتواصل */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى ملابس مخصصة للتصنيع؟</h2>
            <p className="text-xl mb-8 text-white/90">
              فريقنا من الخبراء جاهز لمساعدتك في اختيار ملابس التصنيع المناسبة لاحتياجات فريق عملك. اتصل بنا اليوم للحصول على استشارة مجانية.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                variant="secondary" 
                href="/ar/contact"
                size="lg"
              >
                تواصل معنا
              </Button>
              <Button 
                variant="outline" 
                href="/ar/quote"
                size="lg"
                className="bg-transparent border-white hover:bg-white hover:text-primary-600"
              >
                طلب عرض سعر
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 