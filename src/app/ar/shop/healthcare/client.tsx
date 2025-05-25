'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import SchemaMarkup, { MultiSchemaMarkup } from '@/components/SchemaMarkup';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function HealthcareClientPage() {
  const locale = 'ar';
  
  // Healthcare products
  const products: Product[] = [
    {
      id: 'advanced-medical-scrubs',
      name: 'سكرب طبي متطور',
      description: 'سكرب طبي ممتاز مصمم للعاملين في مجال الرعاية الصحية، يتميز بنسيج مضاد للميكروبات وراحة فائقة.',
      price: 'من 249 ريال',
      image: '/images/Healthcare_Uniforms.png',
      href: '/ar/shop/healthcare/advanced-medical-scrubs',
      features: ['نسيج مضاد للميكروبات', 'مقاوم للرطوبة', 'مقاوم للتجعد', 'جيوب متعددة'],
      colors: ['كحلي', 'أزرق فاتح', 'تركواز', 'أسود', 'نبيذي'],
      isBestseller: true
    },
    {
      id: 'premium-lab-coat',
      name: 'معطف مختبر فاخر',
      description: 'معطف مختبر عالي الجودة مصمم للمهنيين الطبيين، يتميز بنسيج متين ومظهر احترافي.',
      price: 'من 199 ريال',
      image: '/images/doctor-SBI-300813580.jpg',
      href: '/ar/shop/healthcare/premium-lab-coat',
      features: ['مقاوم للبقع', 'نسيج متين', 'مظهر احترافي', 'جيوب متعددة'],
      colors: ['أبيض', 'أزرق فاتح'],
      isNew: true
    },
    {
      id: 'nursing-uniform',
      name: 'زي التمريض',
      description: 'زي تمريض مريح وعملي مصمم للاستخدام اليومي في بيئات الرعاية الصحية.',
      price: 'من 179 ريال',
      image: '/images/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
      href: '/ar/shop/healthcare/nursing-uniform',
      features: ['تصميم مريح', 'سهل العناية', 'نسيج متين', 'مظهر احترافي'],
      colors: ['أبيض', 'أزرق فاتح', 'وردي', 'كحلي']
    },
    {
      id: 'surgical-scrubs',
      name: 'ملابس العمليات الجراحية',
      description: 'ملابس جراحية متخصصة مصممة لبيئات غرف العمليات، تتميز بخصائص مضادة للميكروبات.',
      price: 'من 269 ريال',
      image: '/images/three-surgeons-busy-with-a-patient-SBI-300908245.jpg',
      href: '/ar/shop/healthcare/surgical-scrubs',
      features: ['مضاد للميكروبات', 'مقاوم للسوائل', 'تصميم مريح', 'ميزات خاصة بغرف العمليات'],
      colors: ['أخضر جراحي', 'أزرق جراحي', 'كحلي']
    },
    {
      id: 'medical-uniform-set',
      name: 'طقم زي طبي متكامل',
      description: 'طقم زي طبي كامل مصمم لمهنيي الرعاية الصحية، يشمل قميص وبنطلون ومعطف مختبر.',
      price: 'من 349 ريال',
      image: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
      href: '/ar/shop/healthcare/medical-uniform-set',
      features: ['طقم كامل', 'تصميم متناسق', 'نسيج ممتاز', 'مظهر احترافي'],
      colors: ['خيارات متعددة متاحة']
    },
    {
      id: 'dental-uniform',
      name: 'زي طب الأسنان',
      description: 'زي متخصص مصمم لأطباء الأسنان، يتميز بخصائص مضادة للميكروبات وتصميم مريح.',
      price: 'من 229 ريال',
      image: '/images/happy-doctor-smiling-at-the-camera-on-a-green-screen-chroma-key-SBI-349602091.jpg',
      href: '/ar/shop/healthcare/dental-uniform',
      features: ['مضاد للميكروبات', 'مقاوم للبقع', 'تصميم مريح', 'مظهر احترافي'],
      colors: ['أبيض', 'أزرق فاتح', 'كحلي', 'أسود']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'doctors', name: 'الأطباء' },
    { id: 'nurses', name: 'التمريض' },
    { id: 'surgeons', name: 'الجراحين' },
    { id: 'dental', name: 'طب الأسنان' },
    { id: 'laboratory', name: 'المختبرات' }
  ];
  
  // بيانات الأسئلة الشائعة
  const faqs = [
    {
      question: "ما هي المعايير التي تتبعونها في تصنيع الملابس الطبية؟",
      answer: "نلتزم بمعايير الجودة العالمية والسعودية في تصنيع الملابس الطبية، مثل AAMI PB70 للملابس الواقية و ASTM F2407 لأداء أقمشة الملابس الطبية. جميع منتجاتنا مصممة لتوفير الراحة والحماية مع مقاومة البكتيريا والسوائل والتجعد."
    },
    {
      question: "هل توفرون خدمة تخصيص الملابس الطبية للمستشفيات والعيادات؟",
      answer: "نعم، نقدم خدمات تخصيص شاملة للمؤسسات الصحية تشمل إضافة شعارات المستشفى أو العيادة، واختيار الألوان المؤسسية، وتعديل التصميم حسب متطلباتكم. نوفر أيضاً خدمة التطريز وطباعة الأسماء والوظائف على الملابس الطبية."
    },
    {
      question: "ما مدة توريد طلبات الملابس الطبية للمستشفيات؟",
      answer: "تعتمد مدة التوريد على حجم الطلب ودرجة التخصيص المطلوبة. للطلبات القياسية، نوفر التوريد خلال 1-2 أسبوع، أما الطلبات المخصصة بالكامل فقد تستغرق 2-4 أسابيع. نقدم أيضًا خدمة التوريد السريع للطلبات العاجلة بتكلفة إضافية."
    },
    {
      question: "هل ملابسكم الطبية مقاومة للبكتيريا؟",
      answer: "نعم، نستخدم في العديد من منتجاتنا الطبية تقنيات مضادة للميكروبات والبكتيريا، مما يساعد في الحد من انتشار العدوى وتوفير بيئة عمل أكثر نظافة وأماناً. تتميز أقمشتنا بمعالجات خاصة تدوم لعمر المنتج حتى بعد الغسيل المتكرر."
    },
    {
      question: "كيف يمكننا طلب عينات من الملابس الطبية؟",
      answer: "يمكنكم طلب عينات من منتجاتنا عبر تعبئة نموذج طلب العينات في قسم 'طلب عرض سعر' على موقعنا، أو التواصل مع خدمة العملاء مباشرة. نقدم عينات بأسعار مخفضة للمؤسسات الصحية، ويتم خصم قيمة العينات من الطلبات الكبيرة اللاحقة."
    }
  ];
  
  // بيانات الميزات التفصيلية
  const detailedFeatures = [
    {
      title: "أقمشة طبية متخصصة",
      description: "نستخدم أقمشة طبية عالية الجودة مقاومة للبقع والسوائل ومضادة للبكتيريا، مصممة خصيصاً للاستخدام المكثف في بيئات الرعاية الصحية.",
      icon: "/images/icons/fabric.svg"
    },
    {
      title: "راحة فائقة",
      description: "تتميز ملابسنا الطبية بتصميمات مريحة مع خاصية التمدد الأربعي ونسيج يسمح بالتهوية، مما يوفر حرية الحركة والراحة طوال ساعات العمل الطويلة.",
      icon: "/images/icons/comfort.svg"
    },
    {
      title: "معايير نظافة عالية",
      description: "مصنعة وفق أعلى معايير النظافة والتعقيم، وقابلة للغسل بدرجات حرارة عالية دون أن تفقد شكلها أو خصائصها المقاومة للبكتيريا.",
      icon: "/images/icons/hygiene.svg"
    }
  ];
  
  // بيانات Schema.org
  const schemaData = {
    name: 'منتجات الرعاية الصحية والملابس الطبية',
    description: 'ملابس طبية عالية الجودة ومنتجات رعاية صحية للمستشفيات والعيادات في المملكة العربية السعودية.',
    image: 'https://uneom.com/images/categories/healthcare.webp',
    url: 'https://uneom.com/ar/shop/healthcare/',
    offers: {
      priceCurrency: 'SAR',
      price: '179',
      priceValidUntil: '2024-12-31',
      availability: 'https://schema.org/InStock',
    },
    brand: {
      name: 'يونيوم',
    },
    mainEntityOfPage: 'https://uneom.com/ar/shop/healthcare/'
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
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">الرعاية الصحية</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* بانر الصفحة */}
      <section className="relative py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-4">منتجات الرعاية الصحية والملابس الطبية | ملابس طبية عالية الجودة للمستشفيات والعيادات | يونيوم المملكة العربية السعودية</h1>
              <p className="text-xl mb-6 text-white/90">
                منتجات رعاية صحية وملابس طبية عالية الجودة مصممة للراحة والمتانة للعاملين في القطاع الصحي في المملكة العربية السعودية. توفر يونيوم مجموعة متكاملة من الأزياء الطبية للمستشفيات والعيادات والمختبرات.
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
                src="/images/healthcare/medical_hijab_uniform.jpg"
                alt="منتجات الرعاية الصحية"
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
            <SectionHeading centered>لماذا تختار منتجات الرعاية الصحية من يونيوم؟</SectionHeading>
            <p className="text-gray-600 mt-4">
              تتميز منتجاتنا بالجودة العالية والراحة الفائقة، مصممة خصيصاً لتلبية احتياجات القطاع الصحي في المملكة العربية السعودية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-right">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <SectionHeading centered>فئات منتجات الرعاية الصحية</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {departments.map((dept, index) => (
              <Link 
                key={index} 
                href={`/ar/shop/healthcare/${dept.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src="/images/healthcare/medical_hijab_uniform.jpg"
                    alt={dept.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-right">
                  <h3 className="font-bold text-lg mb-2">{dept.name}</h3>
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
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">جديد</span>
                  )}
                </Link>
                <div className="p-4 text-right">
                  <Link href={product.href} className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
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
                    <span className="font-bold text-blue-600">{product.price}</span>
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
                src="/images/healthcare/medical_hijab_uniform.jpg"
                alt="تفاصيل منتجات الرعاية الصحية عالية الجودة"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold mb-6">ملابس طبية مصممة خصيصًا للمستشفيات والعيادات السعودية</h2>
              <p className="text-gray-700 mb-4">
                تدرك شركة يونيوم متطلبات العاملين في القطاع الصحي بالمملكة العربية السعودية، من ساعات العمل الطويلة إلى الحاجة لملابس مقاومة للبكتيريا والسوائل. لذلك، صممنا مجموعة متكاملة من الملابس الطبية التي تجمع بين:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">الراحة والمتانة لساعات العمل الطويلة في المستشفيات والعيادات</span>
                </li>
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">تقنيات مضادة للبكتيريا وسهلة التنظيف لضمان أعلى معايير النظافة</span>
                </li>
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">أقمشة مقاومة للسوائل والبقع لحماية مثالية في بيئة العمل الطبية</span>
                </li>
                <li className="flex items-center">
                  <svg className="ml-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">خيارات تخصيص شاملة مع شعارات المستشفيات والألوان المؤسسية</span>
                </li>
              </ul>
              
              <p className="text-gray-700">
                تجمع منتجات الرعاية الصحية من يونيوم بين الوظائف العملية والمظهر الاحترافي، وهو ما جعلها الخيار المفضل للعديد من المستشفيات والمراكز الطبية في المملكة.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم المميزات */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مضاد للبكتيريا</h3>
              <p className="text-gray-600">معالجة خاصة مضادة للبكتيريا تدوم طوال عمر المنتج حتى بعد الغسيل المتكرر.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">متانة طويلة الأمد</h3>
              <p className="text-gray-600">مصممة لتتحمل الاستخدام اليومي المكثف والغسيل المتكرر دون فقدان الشكل أو اللون.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تخصيص كامل</h3>
              <p className="text-gray-600">إمكانية تخصيص كاملة مع إضافة شعار المستشفى والألوان المؤسسية والتطريز لأسماء الموظفين.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم الأسئلة الشائعة */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>الأسئلة الشائعة</SectionHeading>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            إليك إجابات على الأسئلة الأكثر شيوعًا حول منتجات الرعاية الصحية من يونيوم
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
      <section className="py-16 bg-blue-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى ملابس طبية مخصصة؟</h2>
            <p className="text-xl mb-8 text-white/90">
              فريقنا من المتخصصين جاهز لمساعدتك في اختيار المنتجات المناسبة لاحتياجات مؤسستك الصحية. اتصل بنا اليوم للحصول على استشارة مجانية.
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
                className="bg-transparent border-white hover:bg-white hover:text-blue-600"
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