import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUneom from '@/components/sections/WhyChooseUneom';
import IndustryGrid from '@/components/sections/IndustryGrid';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BlogPreview from '@/components/sections/BlogPreview';
import { Amiri, Cairo, Tajawal } from 'next/font/google';
import SEO from '@/components/SEO';
import type { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'يونيوم - المزود الرائد للأزياء المهنية في المملكة العربية السعودية',
  description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية في جميع أنحاء المملكة.',
  // Removed generic meta keywords as they're no longer relevant for modern SEO
  openGraph: {
    title: 'يونيوم - المزود الرائد للأزياء المهنية في المملكة العربية السعودية',
    description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية في جميع أنحاء المملكة.',
    url: 'https://uneom.com/ar/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'يونيوم - المزود الرائد للأزياء المهنية في المملكة العربية السعودية'
      }
    ],
    locale: 'ar'
  }
};


// تعريف الخطوط العربية
const cairoFont = Cairo({ 
  subsets: ['arabic'],
  weight: ['700', '800'],
  variable: '--font-cairo',
});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

// متغير للخط العربي Amiri - إذا كان مستخدماً في مكان آخر
const amiriFont = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
});

// إضافة خاصية لتجنب التكرار في الهيدر والفوتر
export const layoutOptions = {
  hideHeaderFooter: true
};

export default function HomePage() {
  const locale = 'ar';
  
  // الصناعات المميزة - defined directly instead of using industries.slice().map
  const featuredIndustries = [
    {
      id: "healthcare",
      title: "الرعاية الصحية",
      description: "يونيفورم طبي عالي الجودة مصمم للراحة والوظائف العملية في بيئات الرعاية الصحية السعودية. متوافق مع اللوائح المحلية ومناسب لمناخ المملكة.",
      image: "/images/industries/healthcare.jpg",
      link: `/ar/industries/healthcare`
    }
  ];
  
  // Shop Categories (for the shop section)
  const shopCategories = [
    {
      id: 'medical-scrubs',
      title: 'الزي الموحد للرعاية الصحية',
      description: 'اليونيفورم الطبي والزي الموحد عالي الجودة مصمم للراحة أثناء المناوبات الطويلة في المستشفيات والمراكز الطبية.',
      image: '/images/products/scrubs-set.jpg',
      link: '/ar/shop/medical-scrubs'
    },
    {
      id: 'aviation-uniforms',
      title: 'يونيفورم الطيران',
      description: 'الزي الموحد المهني لطاقم الطائرة وطاقم الأرض وموظفي الطيران المصمم خصيصاً لشركات الطيران السعودية.',
      image: '/images/products/airline-uniform.jpg',
      link: '/ar/shop/aviation-uniforms'
    },
    {
      id: 'hospitality-attire',
      title: 'الزي الموحد للضيافة',
      description: 'يونيفورم عالي الجودة للفنادق والمنتجعات وفرق الضيافة يجمع بين الأناقة والوظائف العملية لقطاع الضيافة السعودي.',
      image: '/images/products/hotel-uniform.jpg',
      link: '/ar/shop/hospitality-attire'
    },
    {
      id: 'corporate-wear',
      title: 'اليونيفورم المكتبي للشركات',
      description: 'الزي الموحد المكتبي الأنيق والمهني الذي يعزز صورة الشركة والانتماء المؤسسي في بيئة العمل السعودية.',
      image: '/images/products/industrial-coverall.jpg',
      link: '/ar/shop/workplace-uniforms',
      backgroundImage: '/images/grid-pattern.svg'
    },
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: 'كيف يمكنني طلب عينات من اليونيفورم لدى يونيوم؟',
      answer: 'يمكنك طلب عينات من الزي الموحد من خلال ملء نموذج الاتصال الخاص بنا أو الاتصال بفريق خدمة العملاء لدينا مباشرة. سيقوم ممثل المبيعات بالتواصل معك لمناقشة متطلباتك وترتيب إرسال عينات اليونيفورم.'
    },
    {
      question: 'هل توفرون خدمات التطريز والشعارات المخصصة للزي الموحد؟',
      answer: 'نعم، نقدم خدمات شاملة للتطريز وإضافة الشعارات المخصصة على جميع أنواع اليونيفورم. يمكننا تطبيق شعار شركتك على الزي الموحد بمختلف التقنيات بما في ذلك التطريز والطباعة الحرارية والطباعة الرقمية.'
    },
    {
      question: 'ما هو الحد الأدنى لطلب اليونيفورم من يونيوم؟',
      answer: 'يختلف الحد الأدنى لطلب الزي الموحد حسب نوع المنتج. للطلبات القياسية، عادة ما يكون الحد الأدنى 50 قطعة. لليونيفورم المخصص بالكامل، قد يكون الحد الأدنى أعلى. يرجى التواصل معنا للحصول على تفاصيل محددة للزي الموحد المطلوب.'
    },
    {
      question: 'ما هي مدة تسليم الزي الموحد المتوقعة؟',
      answer: 'تتراوح أوقات تسليم اليونيفورم عادة من 2-4 أسابيع للمنتجات القياسية، و 4-8 أسابيع للزي الموحد المخصص بالكامل. قد تختلف مواعيد تسليم اليونيفورم حسب حجم الطلب ومتطلبات التخصيص.'
    },
  ];

  // SEO title and description for the Arabic homepage
  const seoTitle = "يونيوم - المزود الرائد للأزياء المهنية في المملكة العربية السعودية";
  const seoDescription = "توفر يونيوم حلول أزياء موحدة متكاملة مصممة خصيصًا للشركات في جميع أنحاء المملكة العربية السعودية والشرق الأوسط. خدمات مخصصة لقطاعات الرعاية الصحية والطيران والضيافة والشركات.";

  return (
    <div dir="rtl" className={`${cairoFont.variable} ${tajawalFont.variable} ${amiriFont.variable}`}>
      {/* Add explicit SEO component for proper metadata */}
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl="https://uneom.com/ar/"
        ogImage="/images/uneom-og-image.jpg"
        ogType="website"
      />
    
      {/* Hero Section */}
      <HeroSection locale={locale} />

      {/* Explicit H1 tag that will be present in the HTML */}
      <h1 className="sr-only">يونيوم - المزود الرائد للأزياء المهنية في المملكة العربية السعودية</h1>
      
      {/* قسم المحتوى المعزز */}
      <section className="py-12 md:py-16 bg-white" dir="rtl">
        <Container>
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-bold text-neutral-800 mb-6 ${cairoFont.className}`}>
              شريككم الموثوق للزي الموحد في المملكة العربية السعودية
            </h2>
            <p className={`text-lg text-neutral-700 mb-4 max-w-3xl mx-auto leading-relaxed ${tajawalFont.className}`}>
              يونيوم هي شريككم الأول للزي الموحد وملابس العمل للشركات في جميع أنحاء المملكة العربية السعودية. نحن متخصصون في تصميم وتصنيع وتوريد حلول زي موحد عالية الجودة ومخصصة تعزز صورة علامتكم التجارية، وتضمن راحة وسلامة فريقكم، وتلبي المتطلبات المحددة لقطاعكم.
            </p>
            <p className={`${tajawalFont.className} text-lg text-gray-700 leading-relaxed mb-10`}>
              في يونيوم، نفخر بكوننا شريككم الموثوق لتوريد الزي الموحد والملابس المهنية عالية الجودة في جميع أنحاء المملكة العربية السعودية. من قلب الرياض النابض بالحياة إلى المراكز الصناعية في الدمام والمناطق التجارية الديناميكية في جدة، نقدم حلولاً متكاملة تلبي كافة احتياجاتكم.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-right">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className={`text-2xl font-bold mb-3 text-primary-700 ${cairoFont.className}`}>الجودة العالية والابتكار</h3>
                <p className={`${tajawalFont.className} text-gray-700 leading-relaxed`}>
                  نستخدم أحدث التقنيات وأجود أنواع الأقمشة لضمان حصولكم على زي موحد مريح وعملي ويعكس أعلى معايير الاحترافية. ابتكاراتنا في التصميم تضمن لكم التميز.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className={`text-2xl font-bold mb-3 text-primary-700 ${cairoFont.className}`}>تصاميم مخصصة تلبي هويتكم</h3>
                <p className={`${tajawalFont.className} text-gray-700 leading-relaxed`}>
                  نقدم خدمات تصميم يونيفورم مخصصة تعبر عن هوية علامتكم التجارية وتلائم متطلبات كل قطاع، مع التركيز على التفاصيل الدقيقة التي تحدث فرقًا.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className={`text-2xl font-bold mb-3 text-primary-700 ${cairoFont.className}`}>التوريد الموثوق والفعال</h3>
                <p className={`${tajawalFont.className} text-gray-700 leading-relaxed`}>
                  نضمن لكم سلسلة توريد فعالة وموثوقة، مع الالتزام بمواعيد التسليم لتلبية احتياجاتكم العاجلة والمستقبلية في جميع مدن المملكة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className={`text-2xl font-bold mb-3 text-primary-700 ${cairoFont.className}`}>أسعار تنافسية وقيمة استثنائية</h3>
                <p className={`${tajawalFont.className} text-gray-700 leading-relaxed`}>
                  نقدم لكم أفضل قيمة مقابل سعر، مع حلول زي موحد تنافسية لا تساوم على الجودة، مما يساعدكم على تحقيق أهدافكم المالية والتشغيلية.
                </p>
              </div>
            </div>
      </div>
        </Container>
      </section>

      {/* قسم لماذا تختار يونيوم - Why Choose UNEOM Section */}
      <WhyChooseUneom locale={locale} />
      
      {/* قسم الصناعات */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* زخارف خلفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-primary-50 text-primary-700 py-1 px-4 rounded-full text-sm font-bold">
                قطاعات متخصصة للزي الموحد
              </span>
            </div>
            <SectionHeading centered>
              <span className={`${cairoFont.className} text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500`}>
                نحن نخدم مجموعة متنوعة من اليونيفورم لكافة القطاعات
              </span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg md:text-xl text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto`}>
              نقدم حلولاً متخصصة للزي الموحد واليونيفورم تلبي الاحتياجات الفريدة لكل قطاع، مصممة خصيصًا لتناسب بيئة العمل في المملكة العربية السعودية
            </p>
          </div>
          
          {/* Industry Grid Component */}
          <IndustryGrid items={featuredIndustries} locale={locale} />
          
          {/* زر استكشاف جميع الصناعات */}
          <div className="text-center mt-16">
            <Link 
              href="/ar/industries"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              استكشف جميع الصناعات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم خدماتنا المميزة */}
      <ServicesGrid locale={locale} />

      {/* قسم فئات المتجر المحسن */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* زخارف خلفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.02] mix-blend-overlay"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-primary-50 text-primary-700 py-1.5 px-5 rounded-full text-sm font-bold">
                مجموعات اليونيفورم الحصرية
              </span>
            </div>
            <SectionHeading centered>
              <span className={`${cairoFont.className} text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500`}>
                اكتشف مجموعاتنا المميزة من الزي الموحد
              </span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg md:text-xl text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto`}>
              تصفح تشكيلتنا الواسعة من الزي الموحد واليونيفورم المهني عالي الجودة المصمم خصيصًا لمختلف القطاعات في المملكة العربية السعودية
            </p>
          </div>
          
          {/* قسم الفئات */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className={`${cairoFont.className} text-2xl font-bold text-gray-900 mb-4`}>أزياء موحدة حسب القطاع</h3>
              <p className="text-gray-600">اكتشف مجموعاتنا المتنوعة من اليونيفورم حسب القطاع المهني</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {shopCategories.map((category, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                  {category.id === 'corporate-wear' && (
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.05] mix-blend-overlay"></div>
                  )}
                  <div className="relative aspect-[1/1] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                      <Link
                        href={category.link}
                        className="inline-flex items-center text-white font-medium transition-all group-hover:text-primary-200"
                      >
                        تصفح المجموعة
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* زر زيارة المتجر */}
          <div className="text-center mt-16">
            <Link
              href="/ar/shop"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium rounded-full text-white group"
            >
              <span className="absolute w-full h-full bg-gradient-to-br from-primary-600 to-blue-600 group-hover:from-primary-500 group-hover:to-blue-500 transition-all duration-500"></span>
              <span className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-primary-500/50 to-blue-500/50 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full backdrop-blur-xl border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center">
                زيارة المتجر
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم شهادات العملاء المحسّن */}
      <section className="py-24 relative overflow-hidden">
        {/* قسم آراء العملاء (TestimonialCarousel) */}
        <TestimonialCarousel locale={locale} />
      </section>

      {/* قسم الأسئلة الشائعة المحسن */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-primary-100/30 to-transparent"></div>
          <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-100/40 to-transparent"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-tl from-amber-100/30 to-transparent"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-100/30 to-transparent"></div>
          
          {/* Lines */}
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4 shadow-sm border border-primary-100">
              الدعم والمساعدة
            </div>
            <SectionHeading centered>
              <span className="relative">
                الأسئلة الشائعة
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 rounded"></div>
              </span>
            </SectionHeading>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعًا حول منتجاتنا وخدماتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Glow effect behind accordion */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-white to-blue-50/50 rounded-2xl blur-3xl -z-10 transform scale-105"></div>
            
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-100 rounded-xl p-1 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 rounded-lg bg-gradient-to-r from-white to-gray-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 me-5">
                        <div className="relative">
                          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold text-xl shadow-lg shadow-primary-200 group-hover:shadow-primary-300 transition-all duration-300 group-hover:scale-110">
                            {index + 1}
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                          {item.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-primary-50 rounded-full blur-3xl -z-10"></div>
            
            <p className="text-lg text-gray-700 mb-6 font-medium">
              هل لديك سؤال آخر؟ نحن هنا للمساعدة
            </p>
            <Link
              href="/ar/contact"
              className="relative inline-flex items-center justify-center group"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"></span>
              <span className="absolute inset-0.5 rounded-[7px] bg-white/90 group-hover:bg-white transition-colors duration-300"></span>
              <span className="relative px-8 py-4 text-base font-semibold text-primary-700 flex items-center">
                تواصل معنا
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">هل أنت جاهز لتطوير زي موحد مميز لمؤسستك؟</h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            كن شريكًا ليونيوم، المزود الرائد لليونيفورم في المملكة العربية السعودية. اطلب استشارة مخصصة اليوم لمناقشة احتياجاتك الخاصة.
          </p>
              <Link
            href="/ar/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            اطلب استشارة مجانية
                  </Link>
        </Container>
      </section>
          </div>
  );
} 
