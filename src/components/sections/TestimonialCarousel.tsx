"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import TestimonialCard, { TestimonialProps } from '../ui/TestimonialCard';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  image: string;
  logo: string;
}

interface TestimonialCarouselProps {
  locale: string;
  testimonials?: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ locale, testimonials: customTestimonials }) => {
  // Content based on locale
  const content = {
    en: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by leading institutions across various industries in Saudi Arabia',
    },
    ar: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'موثوق به من قبل المؤسسات الرائدة في مختلف الصناعات في المملكة العربية السعودية',
    }
  };

  // Sample testimonials data - Enhanced with diverse, professional testimonials
  const defaultTestimonials: TestimonialProps[] = [
    {
      id: 1,
      quote: locale === 'en' 
        ? "UNEOM provided our hospital staff with high-quality uniforms that not only look professional but are incredibly comfortable for long shifts. Their attention to detail and customization options exceeded our expectations."
        : "قدمت يونيوم لموظفي مستشفانا زيًا موحدًا عالي الجودة لا يبدو احترافيًا فحسب، بل إنه مريح للغاية للمناوبات الطويلة. لقد تجاوز اهتمامهم بالتفاصيل وخيارات التخصيص توقعاتنا.",
      name: locale === 'en' ? "Dr. Ahmed Al-Saud" : "د. أحمد آل سعود",
      role: locale === 'en' ? "Medical Director" : "المدير الطبي",
      company: locale === 'en' ? "Riyadh Medical Center" : "مركز الرياض الطبي",
      image: "/images/default-placeholder.jpg",
      logo: "/images/default-placeholder.jpg/aramco-logo.png",
      locale
    },
    {
      id: 2,
      quote: locale === 'en'
        ? "Finding modest yet practical uniforms for our female healthcare staff was challenging until we partnered with UNEOM. They understood our requirements and delivered specialized medical uniforms that respect our cultural values while maintaining functionality."
        : "كان العثور على زي موحد محتشم وعملي لموظفات الرعاية الصحية لدينا أمرًا صعبًا حتى تعاونا مع يونيوم. لقد فهموا متطلباتنا وقدموا زيًا طبيًا متخصصًا يحترم قيمنا الثقافية مع الحفاظ على الوظائف.",
      name: locale === 'en' ? "Fatima Al-Zahrani" : "فاطمة الزهراني",
      role: locale === 'en' ? "HR Manager" : "مديرة الموارد البشرية",
      company: locale === 'en' ? "King Faisal Hospital" : "مستشفى الملك فيصل",
      image: "/images/default-placeholder.jpg",
      logo: "/images/default-placeholder.jpg/neom-logo.png",
      locale
    },
    {
      id: 3,
      quote: locale === 'en'
        ? "UNEOM's medical uniforms have helped us establish a more professional image. The quality of materials and their durability are exceptional, and their customer service team was responsive throughout the entire process."
        : "ساعدت الأزياء الطبية الموحدة من يونيوم في إنشاء صورة أكثر احترافية. جودة المواد ومتانتها استثنائية، وكان فريق خدمة العملاء سريع الاستجابة طوال العملية بأكملها.",
      name: locale === 'en' ? "Dr. Mohammad Al-Fahad" : "د. محمد الفهد",
      role: locale === 'en' ? "Chief Medical Officer" : "المدير الطبي الرئيسي",
      company: locale === 'en' ? "Jeddah General Hospital" : "مستشفى جدة العام",
      image: "/images/default-placeholder.jpg",
      logo: "/images/default-placeholder.jpg/jarir-logo.png",
      locale
    },
    {
      id: 4,
      quote: locale === 'en'
        ? "As an airline committed to representing Saudi culture with excellence, we needed uniforms that combine elegance, practicality, and cultural sensitivity. UNEOM delivered beyond our expectations, creating a distinctive identity for our cabin crew."
        : "كشركة طيران ملتزمة بتمثيل الثقافة السعودية بتميز، كنا بحاجة إلى أزياء موحدة تجمع بين الأناقة والعملية والحساسية الثقافية. قدمت يونيوم أكثر من توقعاتنا، مما خلق هوية مميزة لطاقم الطائرة لدينا.",
      name: locale === 'en' ? "Sara Al-Qassim" : "سارة القاسم",
      role: locale === 'en' ? "Cabin Services Manager" : "مديرة خدمات المقصورة",
      company: locale === 'en' ? "Saudi Wings Airlines" : "الخطوط السعودية أجنحة",
      image: "/images/default-placeholder.jpg",
      logo: "/images/default-placeholder.jpg/albaik-logo.png",
      locale
    },
    {
      id: 5,
      quote: locale === 'en'
        ? "Our corporate executives needed uniforms that reflect our leadership position in the financial sector. UNEOM's attention to quality fabrics and tailoring details has made our team look impeccably professional, boosting our brand image."
        : "احتاج المدراء التنفيذيون في شركتنا إلى أزياء موحدة تعكس موقعنا القيادي في القطاع المالي. اهتمام يونيوم بجودة الأقمشة وتفاصيل الخياطة جعل فريقنا يبدو محترفًا بشكل لا تشوبه شائبة، مما عزز صورة علامتنا التجارية.",
      name: locale === 'en' ? "Abdullah Al-Otaibi" : "عبدالله العتيبي",
      role: locale === 'en' ? "CEO" : "الرئيس التنفيذي",
      company: locale === 'en' ? "Saudi Investment Bank" : "بنك الاستثمار السعودي",
      image: "/images/default-placeholder.jpg",
      logo: "/images/logos/talabat-logo.png",
      locale
    },
    {
      id: 6,
      quote: locale === 'en'
        ? "The logistics uniforms provided by UNEOM have significantly improved our team's functionality and comfort during long delivery shifts. The durable materials withstand our demanding work conditions while maintaining a professional appearance."
        : "أدت الأزياء الموحدة للخدمات اللوجستية التي قدمتها يونيوم إلى تحسين وظائف فريقنا وراحتهم بشكل كبير أثناء مناوبات التوصيل الطويلة. تتحمل المواد المتينة ظروف عملنا الصعبة مع الحفاظ على مظهر احترافي.",
      name: locale === 'en' ? "Khalid Al-Ghamdi" : "خالد الغامدي",
      role: locale === 'en' ? "Operations Director" : "مدير العمليات",
      company: locale === 'en' ? "FastTrack Logistics" : "فاست تراك للخدمات اللوجستية",
      image: "/images/product-placeholder.jpg",
      logo: "/images/logos/default-logo.png",
      locale
    },
    {
      id: 7,
      quote: locale === 'en'
        ? "For our luxury hotel chain, we required staff uniforms that embody our commitment to sophistication and Arabian hospitality. UNEOM created bespoke designs that perfectly balance elegance with practical comfort for our diverse hotel departments."
        : "لسلسلة الفنادق الفاخرة لدينا، كنا بحاجة إلى زي موحد للموظفين يجسد التزامنا بالرقي والضيافة العربية. ابتكرت يونيوم تصاميم مخصصة توازن بشكل مثالي بين الأناقة والراحة العملية لأقسام الفندق المتنوعة لدينا.",
      name: locale === 'en' ? "Nora Al-Dosari" : "نورة الدوسري",
      role: locale === 'en' ? "Hospitality Manager" : "مديرة الضيافة",
      company: locale === 'en' ? "Royal Oasis Hotels" : "فنادق الواحة الملكية",
      image: "/images/banner-placeholder.jpg",
      logo: "/images/logos/uneom-logo-en.png",
      locale
    },
    {
      id: 8,
      quote: locale === 'en'
        ? "As a prominent retail brand with stores across Saudi Arabia, consistency in staff appearance is crucial. UNEOM delivered high-quality retail uniforms with excellent branding integration and fabric performance that has improved our customer-facing operations."
        : "بصفتنا علامة تجارية بارزة في مجال التجزئة مع متاجر في جميع أنحاء المملكة العربية السعودية، فإن الاتساق في مظهر الموظفين أمر بالغ الأهمية. قدمت يونيوم أزياء موحدة للبيع بالتجزئة عالية الجودة مع تكامل ممتاز للعلامة التجارية وأداء القماش الذي حسن عملياتنا المتعلقة بالعملاء.",
      name: locale === 'en' ? "Saad Al-Rashid" : "سعد الرشيد",
      role: locale === 'en' ? "Retail Manager" : "مدير التجزئة",
      company: locale === 'en' ? "AlMajed Department Stores" : "متاجر الماجد",
      image: "/images/default-placeholder.jpg",
      logo: "/images/default-placeholder.jpg",
      locale
    }
  ];

  // Convert custom testimonials to the format expected by TestimonialCard
  const testimonialsList = customTestimonials 
    ? customTestimonials.map((t, index) => ({
        id: index + 1,
        quote: t.content,
        name: t.author,
        role: t.position,
        company: '',
        image: t.image,
        logo: t.logo,
        locale
      }))
    : defaultTestimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsList.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonialsList.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsList.length - 1 : prevIndex - 1
    );
  }, [testimonialsList.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-advance slides
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, nextSlide]);
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -800 : 800,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  // Client logos for the trust banner - Using logos from public/images/logos
  const clientLogos = [
    "/images/logos/aramco-logo.png",
    "/images/logos/neom-logo.png",
    "/images/logos/jarir-logo.png",
    "/images/logos/albaik-logo.png",
    "/images/logos/talabat-logo.png",
  ];

  // Featured client industries for the visual display
  const industries = [
    { name: locale === 'en' ? 'Healthcare' : 'الرعاية الصحية', count: 120 },
    { name: locale === 'en' ? 'Corporate' : 'الشركات', count: 85 },
    { name: locale === 'en' ? 'Hospitality' : 'الضيافة', count: 64 },
    { name: locale === 'en' ? 'Aviation' : 'الطيران', count: 42 },
    { name: locale === 'en' ? 'Logistics' : 'الخدمات اللوجستية', count: 38 },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Premium Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 opacity-90 z-0"></div>
      
      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/pattern-grid.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ 
            y: [0, 30, 0], 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-3">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-primary-200 font-medium text-sm mb-4">
              {locale === 'en' ? 'Trusted by Industry Leaders' : 'موثوق به من قبل قادة الصناعة'}
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text">
              {content[locale as keyof typeof content].title}
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl text-primary-100/90 max-w-2xl mx-auto">
              {content[locale as keyof typeof content].subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left: Featured Client Image */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[500px]">
              <Image 
                src="/images/default-placeholder.jpg"
                alt={locale === 'en' ? "Various professionals in uniform" : "محترفون في زي موحد"}
                fill
                className="object-cover"
                priority
              />
              
              {/* Premium Glass Morphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent"></div>
              
              {/* Industry Statistics */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex items-end">
                <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    <h4 className="text-white text-lg font-medium mb-4">
                      {locale === 'en' ? 'Client Industries' : 'صناعات العملاء'}
                    </h4>
                    <div className="space-y-3">
                      {industries.map((industry, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="text-sm font-medium text-white w-32">{industry.name}</div>
                          <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary-400 to-blue-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${(industry.count / 120) * 100}%` }}
                              transition={{ duration: 1.5, delay: 0.7 + idx * 0.1 }}
                            ></motion.div>
                          </div>
                          <div className="text-sm text-white/80 w-12 text-center">{industry.count}+</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                      <div className="text-primary-200 font-medium">
                        {locale === 'en' ? 'Total Clients:' : 'إجمالي العملاء:'}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                        >350+</motion.span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Testimonial Carousel */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative">
              {/* Ultra-Premium Testimonial Card */}
              <div className="overflow-hidden">
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20"
                  >
                    <div className="flex flex-col h-full">
                      {/* Premium Quote Icon */}
                      <div className="flex justify-between items-start mb-6">
                        <svg className="h-12 w-12 text-primary-400" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.096 11.436 41.096C16.54 41.096 20.284 36.968 20.284 32.24C20.284 27.512 17.148 23.832 13.028 23.832C12.136 23.832 10.928 23.976 10.696 24.12C11.416 19.24 15.928 13.656 20.436 10.776L14.028 6ZM38.796 6C31.7 11.184 26.268 19.68 26.268 29.04C26.268 36.672 30.876 41.096 36.204 41.096C41.196 41.096 45.052 36.968 45.052 32.24C45.052 27.512 41.464 23.832 37.344 23.832C36.452 23.832 35.356 23.976 35.124 24.12C35.844 19.24 40.244 13.656 44.752 10.776L38.796 6Z" fill="currentColor"/>
                        </svg>
                        
                        <div className="flex -space-x-2">
                          {[0, 1, 2, 3].map((i) => (
                            <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden bg-gray-800">
                              <Image 
                                src={testimonialsList[(currentIndex + i) % testimonialsList.length].image}
                                alt=""
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs text-white font-medium">+{testimonialsList.length - 4}</div>
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <p className="text-lg md:text-xl text-white leading-relaxed mb-8 font-light">
                        "{testimonialsList[currentIndex].quote}"
                      </p>
                      
                      {/* Author Info with Premium Styling */}
                      <div className="mt-auto">
                        <div className="flex items-center">
                          <div className="relative h-16 w-16 rounded-xl overflow-hidden border-2 border-primary-400/30">
                            <Image
                              src={testimonialsList[currentIndex].image}
                              alt={testimonialsList[currentIndex].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-white text-lg">
                              {testimonialsList[currentIndex].name}
                            </h4>
                            <p className="text-primary-200">
                              {testimonialsList[currentIndex].role}
                              {testimonialsList[currentIndex].company ? `, ${testimonialsList[currentIndex].company}` : ''}
                            </p>
                          </div>
                          
                          {/* Verified badge */}
                          <div className="ml-auto">
                            <div className="bg-primary-900/50 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center text-sm text-primary-100 border border-primary-500/20">
                              <svg className="w-4 h-4 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              {locale === 'en' ? 'Verified Client' : 'عميل موثق'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Testimonial Counter */}
              <div className="mt-6 flex items-center justify-start">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-white/80">
                  <span className="font-bold text-white">{currentIndex + 1}</span> / {testimonialsList.length}
                </div>
              </div>
              
              {/* Ultra-Premium Navigation Controls */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2 rtl:space-x-reverse">
                  {testimonialsList.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? 'bg-primary-500 w-8' 
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={locale === 'en' 
                        ? `Go to testimonial ${index + 1}` 
                        : `الانتقال إلى الشهادة ${index + 1}`
                      }
                    />
                  ))}
                </div>
                
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <button 
                    onClick={prevSlide}
                    className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors duration-300"
                    aria-label={locale === 'en' ? "Previous testimonial" : "الشهادة السابقة"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`${locale === 'ar' ? 'rotate-180' : ''}`}
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-full p-3 text-white hover:shadow-lg hover:from-primary-500 hover:to-blue-500 transition-all duration-300"
                    aria-label={locale === 'en' ? "Next testimonial" : "الشهادة التالية"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`${locale === 'ar' ? 'rotate-180' : ''}`}
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ultra-Premium Trust Logos Banner - Using logos from public/images/logos */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-24"
        >
          <div className="text-center mb-6">
            <span className="text-primary-300 font-medium text-sm uppercase tracking-widest">
              {locale === 'en' ? 'Trusted by Industry Leaders' : 'نحظى بثقة رواد الصناعة'}
            </span>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="relative h-10 md:h-12"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={140}
                  height={48}
                  className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialCarousel; 