'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import TrustSignals from '@/components/sections/TrustSignals';
import HeroSection from '@/components/sections/HeroSection';
import IndustryGrid from '@/components/sections/IndustryGrid';
import BlogPreview from '@/components/sections/BlogPreview';
import Button from '@/components/ui/Button';
import { Amiri, Cairo, Tajawal } from 'next/font/google';

// تعريف الخطوط العربية
const cairoFont = Cairo({ 
  subsets: ['arabic'],
  weight: ['700', '800'],
  variable: '--font-cairo'
});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal'
});

const amiriFont = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri'
});

// Import data for the page
import { industries } from '@/lib/data/industries';
import { products } from '@/lib/data/products';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// بيانات العملاء
const clients = [
  { 
    name: 'البيك', 
    logo: '/images/logos/albaik-logo.png',
    height: 80
  },
  { 
    name: 'أرامكو السعودية', 
    logo: '/images/logos/aramco-logo.png',
    height: 60
  },
  { 
    name: 'مكتبة جرير', 
    logo: '/images/logos/jarir-logo.png',
    height: 70
  },
  { 
    name: 'نيوم', 
    logo: '/images/logos/neom-logo.png',
    height: 65
  },
  { 
    name: 'طلبات', 
    logo: '/images/logos/talabat-logo.png',
    height: 60
  },
];

// بيانات الخدمات
const services = [
  {
    title: 'تصميم الزي الموحد',
    description: 'تصميمات مبتكرة تعكس هوية علامتك التجارية وتلبي المتطلبات العملية لموظفيك.',
    icon: '/images/icons/custom-branding.svg',
    link: '/ar/images/services/product-placeholder.jpg',
    link: '/ar/images/services/images/icons/comprehensive-support.svg',
    link: '/ar/images/services/images/icons/customization-icon.svg',
    link: '/ar/services/measurement-services',
  },
];

// بيانات المميزات
const features = [
  {
    title: 'تصميم مخصص',
    description: 'نصمم الزي الموحد خصيصًا ليعكس هوية علامتك التجارية ويلبي احتياجات موظفيك.',
    icon: '/images/icons/custom-branding.svg',
  },
  {
    title: 'مواد عالية الجودة',
    description: 'نستخدم فقط أفضل الأقمشة والمواد لضمان الراحة والمتانة والمظهر المهني.',
    icon: '/images/icons/premium-quality.svg',
  },
  {
    title: 'توافق مع المعايير السعودية',
    description: 'جميع منتجاتنا متوافقة مع المعايير السعودية ومناسبة للبيئة المحلية.',
    icon: '/images/images/icons/saudi-expertise.svg',
  },
  {
    title: 'التسليم السريع',
    description: 'نلتزم بجداول التسليم المحددة لنضمن وصول طلبك في الوقت المناسب.',
    icon: '/images/icons/timely-delivery.svg',
  },
  {
    title: 'دعم مستمر',
    description: 'فريق دعم متخصص جاهز لمساعدتك في أي استفسارات أو متطلبات إضافية.',
    icon: '/images/icons/comprehensive-support.svg',
  },
  {
    title: 'أسعار تنافسية',
    description: 'نقدم أسعارًا تنافسية مع الحفاظ على أعلى معايير الجودة لجميع منتجاتنا.',
    icon: '/images/icons/premium-quality.svg',
  },
];

// تصنيفات المنتجات المميزة
const featuredCategories = [
  {
    title: 'الرعاية الصحية',
    image: '/images/products/scrubs-set.jpg',
    items: ['ملابس طبية متطورة', 'أردية معامل', 'بدلات جراحية'],
    link: '/ar/shop/medical-scrubs'
  },
  {
    title: 'الطيران',
    image: '/images/products/airline-uniform.jpg',
    items: ['أزياء طاقم الضيافة', 'بدلات الطيارين', 'أزياء موظفي الأرض'],
    link: '/ar/shop/aviation-uniforms'
  },
  {
    title: 'الضيافة والفنادق',
    image: '/images/products/hotel-uniform.jpg',
    items: ['أزياء الاستقبال', 'زي طاقم الخدمة', 'بدلات الشيف'],
    link: '/ar/shop/hospitality-attire'
  },
  {
    title: 'الصناعة والمؤسسات',
    image: '/images/products/industrial-coverall.jpg',
    items: ['بدلات عمل صناعية', 'ملابس الأمن والسلامة', 'بدلات رسمية للشركات'],
    link: '/ar/shop/workplace-uniforms'
  }
];

// التكنولوجيات المميزة
const technologies = [
  {
    name: 'أقمشة كومفورت-تيك',
    description: 'أقمشة متطورة تمتاز بمقاومة الماء والحرارة مع الحفاظ على التهوية المثالية',
    icon: 'sparkles',
    iconColor: 'text-blue-500'
  },
  {
    name: 'حماية بيو-شيلد',
    description: 'تقنية مضادة للميكروبات توفر حماية طويلة الأمد في بيئات العمل المختلفة',
    icon: 'shield-check',
    iconColor: 'text-green-500'
  },
  {
    name: 'دوراتكس الفائق',
    description: 'تقنية نسيج متينة تحافظ على المظهر الاحترافي رغم الاستخدام المتكرر والغسيل',
    icon: 'refresh',
    iconColor: 'text-purple-500'
  },
  {
    name: 'ايكو-بليند المستدام',
    description: 'مزيج من الأقمشة المستدامة والصديقة للبيئة دون المساس بالجودة أو المتانة',
    icon: 'leaf',
    iconColor: 'text-green-600'
  },
];

export default function HomePage() {
  const locale = 'ar';
  
  // نظام العرض المتغير للشرائح (Slider)
  const [currentSlide, setCurrentSlide] = useState(0);
  // حالة لإظهار وإخفاء نافذة الفيديو
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // تحديث شرائح العرض بالصور المطلوبة
  const slides = [
    {
      title: "الزي الموحد المميز للمؤسسات السعودية",
      subtitle: "حلول متكاملة تجمع بين الهوية الوطنية والمعايير العالمية",
      image: "/images/products/corporate-suit-executive.jpg",
      cta: "اطلب عرض سعر"
    },
    {
      title: "أزياء الرعاية الصحية بمعايير عالمية",
      subtitle: "راحة وحماية فائقة للعاملين في القطاع الطبي",
      image: "/images/avatar-placeholder.jpg",
      cta: "استكشف حلول الرعاية الصحية"
    },
    {
      title: "خدمات التوصيل والشحن بزي موحد احترافي",
      subtitle: "أزياء عملية ومتينة لفرق التوصيل والخدمات اللوجستية",
      image: "/images/a-young-handsome-mailman-smiles-at-the-camera-green-screen-studio-SBI-351078959.jpg",
      cta: "استكشف خدماتنا"
    },
    {
      title: "أزياء مدرسية عالية الجودة",
      subtitle: "تصاميم مريحة وعملية للطلاب في جميع المراحل التعليمية",
      image: "/images/education/uniform_school_product-2.jpg",
      cta: "اكتشف الأزياء المدرسية"
    },
    {
      title: "أناقة وتميز لطاقم الطيران",
      subtitle: "أزياء تعكس رقي وفخامة شركات الطيران السعودية",
      image: "/images/aviation/aviation_uniform_main.jpg",
      cta: "اكتشف مجموعة الطيران"
    },
    {
      title: "أزياء مهنية لمختلف القطاعات",
      subtitle: "نلبي احتياجات كافة المهن والتخصصات بتصاميم مبتكرة",
      image: "/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg",
      cta: "استكشف القطاعات"
    },
    {
      title: "أزياء المطاعم والضيافة",
      subtitle: "تصاميم أنيقة وعملية لفرق الطهي وخدمة العملاء",
      image: "/images/hospitality/hospitality_uniform_formal.jpg",
      cta: "اكتشف أزياء الضيافة"
    },
    {
      title: "مجموعة متكاملة من الأزياء المهنية",
      subtitle: "حلول متخصصة لكل مهنة ولكل قطاع",
      image: "/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg",
      cta: "تصفح منتجاتنا"
    }
  ];

  // تعديل نظام تبديل الشرائح التلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // تحريك الشريحة إلى اليسار
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  // تحريك الشريحة إلى اليمين
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Featured Industries (use first 4 from the data file)
  const featuredIndustries = industries.slice(0, 4).map(industry => ({
    id: industry.id,
    title: industry.nameAr ? industry.nameAr + ' الأزياء الموحدة' : industry.name + ' الأزياء الموحدة',
    description: industry.descriptionAr ? (industry.descriptionAr.split('.')[0] + '.') : (industry.description.split('.')[0] + '.'),
    image: industry.image,
    link: `/ar/industries/${industry.id}`
  }));
  
  // Shop Categories (for the shop section)
  const shopCategories = [
    {
      id: 'medical-scrubs',
      title: 'ملابس الرعاية الصحية',
      description: 'ملابس طبية وزي موحد عالي الجودة مصمم للراحة أثناء المناوبات الطويلة.',
      image: '/images/products/scrubs-set.jpg',
      link: '/ar/shop/medical-scrubs'
    },
    {
      id: 'aviation-uniforms',
      title: 'ملابس الطيران',
      description: 'أزياء مهنية لطاقم الطائرة وطاقم الأرض وموظفي الطيران.',
      image: '/images/products/airline-uniform.jpg',
      link: '/ar/shop/aviation-uniforms'
    },
    {
      id: 'hospitality-attire',
      title: 'ملابس الضيافة',
      description: 'أزياء موحدة عالية الجودة للفنادق والمنتجعات وفرق الضيافة تجمع بين الأناقة والوظائف العملية.',
      image: '/images/products/hotel-uniform.jpg',
      link: '/ar/shop/hospitality-attire'
    },
    {
      id: 'corporate-wear',
      title: 'ملابس الشركات',
      description: 'ملابس مكتبية أنيقة ومهنية تعزز صورة الشركة والانتماء المؤسسي.',
      image: '/images/products/industrial-coverall.jpg',
      link: '/ar/shop/workplace-uniforms'
    },
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: 'كيف يمكنني طلب عينات من منتجاتكم؟',
      answer: 'يمكنك طلب عينات من خلال ملء نموذج الاتصال الخاص بنا أو الاتصال بفريق خدمة العملاء لدينا مباشرة. سيقوم ممثل المبيعات بالتواصل معك لمناقشة متطلباتك وترتيب إرسال العينات.'
    },
    {
      question: 'هل توفرون خدمات التطريز والشعارات المخصصة؟',
      answer: 'نعم، نقدم خدمات شاملة للتطريز وإضافة الشعارات المخصصة على جميع منتجاتنا. يمكننا تطبيق شعار شركتك بمختلف التقنيات بما في ذلك التطريز والطباعة الحرارية والطباعة الرقمية.'
    },
    {
      question: 'ما هي الحد الأدنى للطلب؟',
      answer: 'يختلف الحد الأدنى للطلب حسب نوع المنتج. للطلبات القياسية، عادة ما يكون الحد الأدنى 50 قطعة. للمنتجات المخصصة بالكامل، قد يكون الحد الأدنى أعلى. يرجى التواصل معنا للحصول على تفاصيل محددة لمنتجات معينة.'
    },
    {
      question: 'ما هي مدة التسليم المتوقعة؟',
      answer: 'تتراوح أوقات التسليم عادة من 2-4 أسابيع للمنتجات القياسية، و 4-8 أسابيع للمنتجات المخصصة بالكامل. قد تختلف المواعيد حسب حجم الطلب ومتطلبات التخصيص.'
    },
  ];

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* قسم البطل الرئيسي المحسن */}
      <section className="relative h-[90vh] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
        {/* شرائح العرض الرئيسية */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  className="object-cover" 
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 flex items-center">
                <Container>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 30 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-3xl mr-auto ml-8 md:ml-16 lg:ml-36 text-right"
                  >
                    <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-xl">
                      <h1 className={`${cairoFont.className} text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight tracking-wide`}>
                        {slide.title}
                      </h1>
                      <p className={`${tajawalFont.className} text-base md:text-lg text-white/90 mb-5 font-normal`}>
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-3 justify-end">
                        <Link 
                          href="/ar/quote" 
                          className={`${tajawalFont.className} bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all transform hover:-translate-y-1`}
                        >
                          {slide.cta}
                        </Link>
                        <Link 
                          href="/ar/industries" 
                          className={`${tajawalFont.className} bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-2.5 rounded-md font-bold text-sm transition-all`}
                        >
                          استكشف المزيد
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </Container>
              </div>
            </div>
          ))}
          
          {/* أزرار التنقل */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all duration-300"
            aria-label="الشريحة السابقة"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all duration-300"
            aria-label="الشريحة التالية"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          {/* زر تشغيل الفيديو */}
          <motion.button
            onClick={() => setIsVideoModalOpen(true)}
            className="absolute bottom-16 left-1/4 z-30 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 backdrop-blur-sm text-white rounded-full p-8 md:p-10 transition-all duration-300 group shadow-xl border-2 border-white/30"
            aria-label="تشغيل الفيديو التعريفي"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              opacity: 1,
              boxShadow: ["0 0 20px 0 rgba(255, 255, 255, 0.4)", "0 0 40px 10px rgba(255, 255, 255, 0.2)", "0 0 20px 0 rgba(255, 255, 255, 0.4)"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3
            }}
            whileHover={{ scale: 1.15 }}
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" 
                className="w-14 h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.413-1.667-.13-1.667-.986V5.653z" />
              </svg>
              <motion.div
                className="absolute -inset-1 rounded-full border-4 border-yellow-400/70"
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.9, 0, 0.9]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2
                }}
              />
            </div>
            <div className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-3 whitespace-nowrap bg-gradient-to-r from-primary-700 to-primary-600 backdrop-blur-sm rounded-full px-5 py-3 text-base font-bold shadow-lg border border-white/20">
              <motion.span
                className={`${tajawalFont.className}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                شاهد الفيديو التعريفي
              </motion.span>
              <motion.div
                className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-180"
                initial={{ x: 0 }}
                animate={{ x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-yellow-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </motion.div>
            </div>
          </motion.button>
        </div>
        
        {/* مؤشرات الشرائح */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
              aria-label={`الشريحة ${index + 1}`}
            />
          ))}
        </div>
        
        {/* شكل زخرفي */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* نافذة الفيديو المنبثقة */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)} // إغلاق النافذة عند النقر على الخلفية
        >
          <motion.div 
            className="w-full max-w-5xl bg-black rounded-lg shadow-2xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // منع انتشار الحدث للعنصر الأب
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)} 
              className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black text-white rounded-full p-2 transition-all"
              aria-label="إغلاق الفيديو"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative" style={{padding: '56.25% 0 0 0'}}>
              <iframe 
                src="https://player.vimeo.com/video/1063939680?h=d186c87f02&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                title="حيث يلتقي الإبداع مع الجودة في عالم اليونيفورم"
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* قسم إشارات الثقة */}
      <TrustSignals
        locale={locale}
        stats={[
          { value: '15+', label: 'سنوات في العمل' },
          { value: '500+', label: 'عملاء تمت خدمتهم' },
          { value: '100%', label: 'منتجات عالية الجودة' },
          { value: '24/7', label: 'دعم العملاء' }
        ]}
      />

      {/* قسم الصناعات */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading centered>
              <span className={cairoFont.className}>نحن نخدم مجموعة متنوعة من الصناعات</span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-gray-600 mt-4`}>
              نقدم حلولاً متخصصة للزي الموحد تلبي الاحتياجات الفريدة لكل قطاع
            </p>
          </div>
          
          <IndustryGrid items={featuredIndustries} locale={locale} />
          
          <div className="text-center mt-12">
            <Link 
              href="/ar/industries"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
            >
              استكشف جميع الصناعات
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم خدماتنا المميزة */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading centered>
              <span className={cairoFont.className}>خدماتنا المميزة</span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-gray-600 mt-4`}>
              نقدم مجموعة متكاملة من الخدمات لتلبية احتياجات عملائنا بأفضل جودة وأعلى كفاءة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="text-center">
                  <Link
                    href={service.link}
                    className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center justify-center"
                  >
                    اكتشف المزيد
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* قسم التكنولوجيا المتطورة */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">تقنيات متطورة للأزياء المهنية</h2>
              <p className="text-lg text-gray-600 mb-8">
                نستخدم أحدث التقنيات والابتكارات في صناعة الأزياء المهنية لضمان الراحة والمتانة والأداء الأمثل في بيئات العمل المختلفة
              </p>
              
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${tech.iconColor} bg-gray-100`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {tech.icon === 'sparkles' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        )}
                        {tech.icon === 'shield-check' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        )}
                        {tech.icon === 'refresh' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        )}
                        {tech.icon === 'leaf' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                      </svg>
                    </div>
                    <div className="mr-5">
                      <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link
                  href="/ar/resources/fabric-guide"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
                >
                  اكتشف دليل الأقمشة
                </Link>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/80 to-primary-600/50 mix-blend-multiply z-10"></div>
              <Image
                src="/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
                alt="تقنيات الأقمشة المتطورة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-block rounded-full bg-white/20 p-4 mb-6 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">جودة استثنائية</h3>
                  <p className="text-white/90 text-lg mb-6">نستخدم أفضل الأقمشة والمواد لضمان أداء فائق في جميع بيئات العمل</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">مقاومة للماء</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">مضادة للبكتيريا</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">متينة</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">سهلة العناية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم فئات المتجر المحسن */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading centered>اكتشف مجموعاتنا المميزة</SectionHeading>
            <p className="text-lg text-gray-600 mt-4">
              تصفح تشكيلتنا الواسعة من الأزياء المهنية عالية الجودة المصممة خصيصًا لمختلف القطاعات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 z-20 flex items-end">
                  <div className="p-8 w-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {category.items.map((item, i) => (
                        <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={category.link}
                      className="inline-flex items-center text-white font-semibold transition-all group-hover:text-primary-200"
                    >
                      تسوق المجموعة
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/ar/shop"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
            >
              زيارة المتجر
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم شهادات العملاء المحسّن */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading centered>آراء عملائنا</SectionHeading>
            <p className="text-lg text-gray-600 mt-4">
              استمع إلى ما يقوله عملاؤنا عن تجربتهم مع يونيوم
            </p>
          </div>
          
          <div className="relative">
            {/* عناصر زخرفية للخلفية */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-[30%] right-[30%] w-64 h-64 bg-secondary-600/10 rounded-full mix-blend-multiply filter blur-2xl"></div>
          
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  content: "منذ أن بدأنا العمل مع يونيوم، تحسن مظهر فريقنا الطبي بشكل كبير. تجمع أزياؤهم بين الأناقة والراحة والوظائف العملية، مما يعزز صورتنا المهنية ويزيد من ثقة المرضى.",
                  author: "د. سارة الفايز",
                  position: "مديرة الخدمات الطبية",
                  company: "مستشفى الأمل",
                  image: "/images/healthcare/medical_hijab_uniform.jpg",
                  industry: "الرعاية الصحية"
                },
                {
                  content: "ساعدنا فريق يونيوم في تصميم أزياء لطاقم الطيران تعكس هويتنا السعودية بطريقة عصرية وأنيقة. لقد نالت إعجاب الركاب وحققت راحة استثنائية لطاقمنا خلال الرحلات الطويلة.",
                  author: "كابتن خالد الشمري",
                  position: "مدير العمليات",
                  company: "الخليج للطيران",
                  image: "/images/aviation/aviation_uniform_airline.jpg",
                  industry: "الطيران"
                },
                {
                  content: "تميز فريق يونيوم بمهنية عالية ودقة في التنفيذ. حصلنا على أزياء موحدة عالية الجودة لموظفي الفندق تناسب هويتنا الفاخرة. نوصي بشدة بالتعامل معهم لأي مشروع أزياء مهنية.",
                  author: "أحمد العتيبي",
                  position: "مدير المشتريات",
                  company: "فنادق القمة",
                  image: "/images/hospitality/hospitality_uniform_concierge.jpg",
                  industry: "الضيافة"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative"
                >
                  {/* وسم الصناعة */}
                  <div className="absolute -top-3 right-6 bg-primary-50 text-primary-700 px-4 py-1 rounded-full text-sm font-medium">
                    {testimonial.industry}
                  </div>
                  
                  {/* اقتباس زخرفي */}
                  <div className="absolute -top-5 -right-5 text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="text-gray-700 mb-8 relative z-10 mt-6">
                    {testimonial.content}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <p className="text-primary-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link
                href="/ar/testimonials"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 transition duration-300"
              >
                شاهد المزيد من آراء العملاء
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم عملاء موثوقين */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">نثق بنا</h2>
            <p className="text-gray-600">نحن فخورون بخدمة أكبر المؤسسات في المملكة العربية السعودية</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.height}
                  height={client.height}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* قسم الأسئلة الشائعة المحسن */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading centered>الأسئلة الشائعة</SectionHeading>
            <p className="text-lg text-gray-600 mt-4">
              إجابات على الأسئلة الأكثر شيوعًا حول منتجاتنا وخدماتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-lg hover:border-primary-200 transition-all shadow-sm hover:shadow-md bg-white"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 mr-11">{item.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              هل لديك سؤال آخر؟ نحن هنا للمساعدة
            </p>
            <Link
              href="/ar/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 transition duration-300"
            >
              تواصل معنا
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم المدونة المحسن */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <SectionHeading centered={false}>آخر المقالات من المدونة</SectionHeading>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                استكشف أحدث المقالات حول اتجاهات الزي الموحد وأفضل الممارسات في مجال الأزياء المهنية
              </p>
            </div>
            <div>
              <Link
                href="/ar/blog"
                className="mt-6 md:mt-0 inline-flex items-center font-medium text-primary-700 hover:text-primary-600"
              >
                جميع المقالات
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "اتجاهات الزي الموحد في المملكة العربية السعودية لعام 2023",
                excerpt: "استكشف أحدث اتجاهات الزي الموحد في المملكة وكيف تؤثر الرؤية السعودية 2030 على قطاع الملابس المهنية.",
                slug: "uniform-trends-2023",
                date: "23 مايو 2023",
                image: "/images/banner-placeholder.jpg",
                author: "محمد العلي",
                category: "اتجاهات"
              },
              {
                title: "الاستدامة في صناعة الزي الموحد: توجه جديد في المملكة",
                excerpt: "كيف تتبنى الشركات السعودية ممارسات الاستدامة في الزي الموحد وتأثير ذلك على البيئة والاقتصاد.",
                slug: "sustainable-uniforms",
                date: "14 يونيو 2023",
                image: "/images/blog/sustainable-uniforms.jpg",
                author: "سارة الأحمد",
                category: "الاستدامة"
              },
              {
                title: "كيفية اختيار الزي الموحد المناسب لفريق الرعاية الصحية",
                excerpt: "دليل شامل لاختيار الزي الطبي المناسب الذي يلبي متطلبات الراحة والأداء والامتثال للمعايير.",
                slug: "choosing-healthcare-uniforms",
                date: "02 يوليو 2023",
                image: "/images/avatar-placeholder.jpg",
                author: "د. فهد العنزي",
                category: "دليل"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
              >
                <Link href={`/ar/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    <Link href={`/ar/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/ar/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                  >
                    اقرأ المزيد
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* قسم طلب عرض سعر المحسن */}
      <section className="relative py-24 overflow-hidden">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
        
        {/* عناصر زخرفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-primary-600/30 rounded-full mix-blend-overlay filter blur-2xl"></div>
          <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-primary-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-[30%] right-[30%] w-64 h-64 bg-secondary-600/10 rounded-full mix-blend-overlay filter blur-2xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">جاهز لتطوير برنامج الزي الموحد لمؤسستك؟</h2>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  دعنا نساعدك في تصميم وتنفيذ برنامج زي موحد يعزز هوية علامتك التجارية ويحسن تجربة موظفيك
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "تصميم مخصص يعكس هويتك",
                    "أعلى معايير الجودة والمتانة",
                    "خدمة شاملة من الفكرة إلى التسليم",
                    "دعم متواصل ما بعد البيع"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="flex items-center text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link 
                    href="/ar/quote"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-900 bg-white hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    طلب عرض سعر مجاني
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="relative border border-white/20 p-8 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال السريعة</h3>
              <ul className="space-y-6">
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ml-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/70 text-sm">اتصل بنا</span>
                    <span className="text-lg font-semibold">+971558164922</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ml-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/70 text-sm">البريد الإلكتروني</span>
                    <span className="text-lg font-semibold">info@uneom.com</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ml-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/70 text-sm">الموقع</span>
                    <span className="text-lg font-semibold">طريق الملك فهد، الرياض، المملكة العربية السعودية</span>
                  </div>
                </motion.li>
              </ul>
              <div className="mt-8 flex items-center justify-between">
                <div className="text-white/70 text-sm">تابعنا على</div>
                <div className="flex gap-4">
                  {['twitter', 'linkedin', 'instagram', 'facebook'].map((social, index) => (
                    <Link 
                      key={social} 
                      href={`https://${social}.com/uneom`}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      {social === 'twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      )}
                      {social === 'linkedin' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      )}
                      {social === 'instagram' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      )}
                      {social === 'facebook' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* تم نقل قسم لماذا تختار يونيوم */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 relative overflow-hidden">
        {/* تأثير خلفية زخرفية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className={`${cairoFont.className} text-3xl md:text-4xl font-bold text-white mb-6`}>
              لماذا تختار <span className="text-primary-400">يونيوم</span>؟
            </h2>
            <p className={`${tajawalFont.className} text-lg text-gray-300`}>
              نقدم لكم حلول متكاملة للزي الموحد تجمع بين الجودة العالمية والخبرة المحلية لتلبية احتياجات مؤسستكم
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* الميزة الأولى: جودة المواد */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-primary-500/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(5,150,255,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300`}>
                أقمشة فاخرة عالية الجودة
              </h3>
              <p className={`${tajawalFont.className} text-gray-300 mb-4 leading-relaxed`}>
                نستخدم أفخم أنواع الأقمشة المستوردة من أفضل المصادر العالمية مع تركيز خاص على الأقمشة المناسبة للمناخ السعودي، المضادة للبكتيريا والمقاومة للبقع.
              </p>
            </motion.div>
            
            {/* الميزة الثانية: التصميم المخصص */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-yellow-500/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-yellow-500 to-amber-500 w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg -rotate-3 group-hover:-rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300`}>
                تصميم مخصص يعكس هويتكم
              </h3>
              <p className={`${tajawalFont.className} text-gray-300 mb-4 leading-relaxed`}>
                نمزج بين الهوية الوطنية السعودية ومتطلبات علامتكم التجارية الفريدة، مع تصاميم تراعي العادات والقيم المحلية وتحافظ على المظهر المهني الراقي.
              </p>
            </motion.div>
            
            {/* الميزة الثالثة: الامتثال للمعايير */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300`}>
                مطابقة للمعايير السعودية والعالمية
              </h3>
              <p className={`${tajawalFont.className} text-gray-300 mb-4 leading-relaxed`}>
                نلتزم بجميع المعايير السعودية الخاصة بالمنسوجات ومتطلبات هيئة المواصفات والمقاييس، بالإضافة إلى المعايير العالمية للجودة مثل ISO 9001 وOEKO-TEX.
              </p>
            </motion.div>
            
            {/* الميزة الرابعة: سرعة التوريد */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg -rotate-3 group-hover:-rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300`}>
                سرعة توريد قياسية
              </h3>
              <p className={`${tajawalFont.className} text-gray-300 mb-4 leading-relaxed`}>
                نضمن سرعة استثنائية في التوريد بفضل مصانعنا المحلية في المملكة، ونلتزم بالجداول الزمنية المتفق عليها مع عملائنا، مع إمكانية التوريد العاجل للطلبات الطارئة.
              </p>
            </motion.div>
            
            {/* الميزة الخامسة: خبرة محلية */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-red-500/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-red-500 to-rose-600 w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300`}>
                خبرة وطنية متخصصة
              </h3>
              <p className={`${tajawalFont.className} text-gray-300 mb-4 leading-relaxed`}>
                بخبرة تمتد لأكثر من 15 عاماً في السوق السعودي، نفهم احتياجات القطاعات المختلفة بعمق، ونقدم الحلول المناسبة لكل قطاع مع مراعاة المتطلبات الخاصة بكل مؤسسة.
              </p>
            </motion.div>
            
            {/* الميزة السادسة: خدمة متكاملة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-teal-500/50 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-2xl p-4 mb-6 shadow-lg -rotate-3 group-hover:-rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300`}>
                خدمة متكاملة شاملة
              </h3>
              <p className={`${tajawalFont.className} text-gray-300 mb-4 leading-relaxed`}>
                نقدم خدمة شاملة من التصميم المبدئي إلى التسليم النهائي، مع خدمات ما بعد البيع المتميزة، ودعم مستمر، وخدمات صيانة وإصلاح، وإمكانية تجديد الطلبات بكل سهولة.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link 
                href="/ar/quote" 
                className={`${tajawalFont.className} inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary-500/30`}
              >
                احصل على عرض سعر مخصص
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
} 
