"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface HeroSectionProps {
  locale?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  image?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  locale = 'en',
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  image = '/images/banner-placeholder.jpg'
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef);
  
  // Slides data based on locale
  const slides = locale === 'ar' ? [
    {
      title: "خدمات الرعاية الصحية المتميزة",
      subtitle: "نقدم أزياء طبية عالية الجودة تجمع بين الراحة والأناقة والحماية لكافة الطواقم الطبية",
      image: "/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg",
      cta: "استكشف حلول الرعاية الصحية",
      ctaTitle: "اكتشف مجموعة الأزياء الطبية المتخصصة - معايير عالمية للقطاع الصحي السعودي"
    },
    {
      title: "خدمات التوصيل الاحترافية",
      subtitle: "أزياء مريحة ومتينة مصممة خصيصًا لفرق التوصيل لتعزيز الكفاءة والانطباع المهني",
      image: "/images/hero/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg",
      cta: "اكتشف خدمات التوصيل",
      ctaTitle: "حلول أزياء متكاملة لشركات التوصيل - تصاميم عملية تعزز هوية علامتك التجارية"
    },
    {
      title: "الأزياء المدرسية المميزة",
      subtitle: "تصاميم عصرية وعملية تلبي احتياجات الطلاب مع مراعاة الراحة والمتانة في جميع المراحل التعليمية",
      image: "/images/hero/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-sbi-349929394.jpg",
      cta: "اكتشف الأزياء المدرسية",
      ctaTitle: "أزياء مدرسية تعزز الانتماء والهوية - جودة مضمونة لجميع المراحل التعليمية"
    },
    {
      title: "أزياء طيران فاخرة",
      subtitle: "تصاميم أنيقة ومريحة تعكس احترافية وجمال خدمات الطيران السعودية",
      image: "/images/hero/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg",
      cta: "اكتشف مجموعة الطيران",
      ctaTitle: "أزياء طيران احترافية بمعايير دولية - تصاميم تعكس رقي الضيافة السعودية"
    },
    {
      title: "تشكيلة واسعة من الأزياء المهنية",
      subtitle: "حلول متكاملة لمختلف القطاعات المهنية مع مراعاة متطلبات كل مهنة وخصائصها الفريدة",
      image: "/images/hero/uniform-collection-hero.jpg",
      cta: "استكشف القطاعات",
      ctaTitle: "حلول أزياء شاملة لجميع القطاعات - من التصميم إلى التنفيذ بأعلى معايير الجودة"
    },
    {
      title: "أزياء الطهاة الاحترافية",
      subtitle: "تصاميم عملية وأنيقة لعالم المطاعم والضيافة تجمع بين الراحة والمظهر الاحترافي",
      image: "/images/hero/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg",
      cta: "اكتشف أزياء الطهاة",
      ctaTitle: "أزياء طهاة عالمية المستوى - تصاميم تجمع بين الأناقة والوظيفية للمطابخ الاحترافية"
    },
    {
      title: "أزياء رجال الإطفاء",
      subtitle: "ملابس مقاومة للحريق ومتينة مصممة لتوفير أقصى درجات الحماية والراحة لرجال الإطفاء",
      image: "/images/hero/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-sbi-349465280.jpg",
      cta: "اكتشف أزياء الإطفاء",
      ctaTitle: "معدات حماية متطورة لرجال الإطفاء - تقنيات مقاومة الحريق بمعايير السلامة الدولية"
    },
    {
      title: "أزياء مهنية متعددة الاستخدامات",
      subtitle: "مجموعة متنوعة من الأزياء المهنية تلبي احتياجات مختلف القطاعات بتصاميم عصرية ومريحة",
      image: "/images/hero/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg",
      cta: "اكتشف المزيد",
      ctaTitle: "تنوع لا محدود في الأزياء المهنية - حلول مخصصة لكل قطاع ومهنة"
    }
  ] : [
    {
      title: "Excellence in Healthcare Attire",
      subtitle: "Premium quality medical uniforms combining comfort, elegance, and protection for all healthcare professionals",
      image: "/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg",
      cta: "Explore Healthcare Solutions",
      ctaTitle: "Discover Specialized Medical Uniforms - International Standards for Saudi Healthcare"
    },
    {
      title: "Professional Delivery Uniforms",
      subtitle: "Comfortable and durable attire specially designed for delivery teams to enhance efficiency and professional impression",
      image: "/images/hero/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg",
      cta: "Discover Delivery Services",
      ctaTitle: "Complete Uniform Solutions for Delivery Companies - Practical Designs That Enhance Your Brand Identity"
    },
    {
      title: "Distinguished School Uniforms",
      subtitle: "Modern and practical designs meeting student needs with comfort and durability across all educational stages",
      image: "/images/hero/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-sbi-349929394.jpg",
      cta: "Explore School Uniforms",
      ctaTitle: "School Uniforms That Foster Belonging and Identity - Guaranteed Quality for All Educational Levels"
    },
    {
      title: "Elegant Aviation Attire",
      subtitle: "Sophisticated and comfortable designs reflecting the professionalism and beauty of Saudi aviation services",
      image: "/images/hero/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg",
      cta: "Discover Aviation Collection",
      ctaTitle: "Professional Aviation Uniforms with International Standards - Designs Reflecting Saudi Hospitality Excellence"
    },
    {
      title: "Comprehensive Professional Uniforms",
      subtitle: "Integrated solutions for various professional sectors, considering the unique requirements of each profession",
      image: "/images/hero/uniform-collection-hero.jpg",
      cta: "Explore Industries",
      ctaTitle: "Complete Uniform Solutions for All Sectors - From Design to Implementation with Highest Quality Standards"
    },
    {
      title: "Professional Chef Attire",
      subtitle: "Practical and elegant designs for the restaurant and hospitality world, combining comfort with professional appearance",
      image: "/images/hero/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg",
      cta: "Discover Chef Uniforms",
      ctaTitle: "World-Class Chef Uniforms - Designs Combining Elegance and Functionality for Professional Kitchens"
    },
    {
      title: "Firefighter Uniforms",
      subtitle: "Flame-resistant and durable clothing designed to provide maximum protection and comfort for firefighters",
      image: "/images/hero/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-sbi-349465280.jpg",
      cta: "Explore Firefighting Attire",
      ctaTitle: "Advanced Protective Equipment for Firefighters - Fire-Resistant Technology Meeting International Safety Standards"
    },
    {
      title: "Versatile Professional Attire",
      subtitle: "A diverse collection of professional uniforms meeting the needs of various sectors with modern and comfortable designs",
      image: "/images/hero/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg",
      cta: "Discover More",
      ctaTitle: "Unlimited Diversity in Professional Uniforms - Customized Solutions for Every Sector and Profession"
    }
  ];
  
  const content = {
    en: {
      headline: title || slides[currentSlide].title,
      subheading: subtitle || slides[currentSlide].subtitle,
      ctaPrimary: primaryButtonText || "Request a Quote",
      ctaSecondary: secondaryButtonText || "Explore Industries",
      primaryUrl: primaryButtonUrl || "/contact",
      secondaryUrl: secondaryButtonUrl || "/industries",
      videoButtonText: "Watch Introduction Video",
      prevSlide: "Previous Solution",
      nextSlide: "Next Solution",
      prevSlideTitle: "Explore Previous Uniform Solution",
      nextSlideTitle: "Discover Next Uniform Innovation"
    },
    ar: {
      headline: title || slides[currentSlide].title,
      subheading: subtitle || slides[currentSlide].subtitle,
      ctaPrimary: primaryButtonText || "طلب عرض سعر",
      ctaSecondary: secondaryButtonText || "استكشاف الصناعات",
      primaryUrl: primaryButtonUrl || "/ar/contact",
      secondaryUrl: secondaryButtonUrl || "/ar/industries",
      videoButtonText: "شاهد الفيديو التعريفي",
      prevSlide: "الحل السابق",
      nextSlide: "الحل التالي",
      prevSlideTitle: "استكشف حل الزي الموحد السابق",
      nextSlideTitle: "اكتشف ابتكار الزي الموحد التالي"
    }
  };
  
  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const parallaxY = useSpring(y, { stiffness: 100, damping: 30 });
  
  // Auto advance slides
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [slides.length]);
  
  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const isRTL = locale === 'ar';
  const text = locale === 'en' ? content.en : content.ar;
  
  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    })
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.5,
        ease: [0.55, 0.085, 0.68, 0.53]
      }
    }
  };
  
  return (
    <div ref={inViewRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16">
      {/* Loading animation */}
      {loading && (
        <motion.div 
          className="absolute inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, repeat: 2, repeatType: "reverse" }}
          >
            UNEOM
          </motion.div>
        </motion.div>
      )}
      
      {/* Ambient background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Parallax grid lines */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ y: parallaxY }}
      >
        <div className="w-full h-full grid grid-cols-6 grid-rows-6">
          {[...Array(42)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/10"></div>
          ))}
        </div>
      </motion.div>
      
      {/* Main Hero Section with Slider */}
      <div ref={sliderRef} className="relative w-full h-full overflow-hidden">
        {/* Hero Slider */}
        <AnimatePresence initial={false} custom={0}>
          <motion.div 
            key={currentSlide}
            custom={0}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Background Image - Use regular img tag for more reliable loading */}
            <div className="absolute inset-0 z-0">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="object-cover w-full h-full"
                style={{ 
                  opacity: 0.7,
                  filter: 'brightness(0.7) contrast(1.1) saturate(1.2)'
                }}
              />
              {/* Add overlay gradient for better text readability */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"
                style={{
                  mixBlendMode: 'multiply'
                }}
              ></div>
            </div>
            
            {/* Content Container */}
            <Container className="relative z-10 h-full flex items-center">
              <motion.div 
                className={`max-w-3xl mx-auto md:mx-0 ${isRTL ? 'md:mr-10 text-right' : 'md:ml-10 text-left'}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
              >
                <div className={`p-0.5 ${isRTL ? 'mr-0' : 'ml-0'} mb-4 w-16 bg-gradient-to-r from-primary-500 to-primary-300`}></div>
                <AnimatePresence mode='wait'>
                  <motion.h1
                    key={`slide-title-${currentSlide}`}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-heading leading-tight drop-shadow-lg mb-8"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-300">
                      {text.headline}
                    </span>
                  </motion.h1>
                </AnimatePresence>
                
                <AnimatePresence mode='wait'>
                  <motion.p 
                    key={`slide-subtitle-${currentSlide}`}
                    className="mt-6 text-xl text-white/95 max-w-2xl leading-relaxed drop-shadow-md backdrop-blur-sm bg-black/10 p-3 rounded-lg inline-block"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                </AnimatePresence>

                <div className={`mt-8 flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button
                    href={text.primaryUrl}
                    variant="primary"
                    size="lg"
                    className="relative group overflow-hidden shadow-lg"
                    title={slides[currentSlide].ctaTitle}
                  >
                    <span className="relative z-10">{slides[currentSlide].cta}</span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary-600 to-primary-500 transition-transform duration-300 ease-out"></span>
                  </Button>
                  <Button 
                    href={locale === 'ar' ? '/ar' + text.secondaryUrl.substring(3) : text.secondaryUrl} 
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    {text.ctaSecondary}
                  </Button>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        </AnimatePresence>
        
        {/* Video Play Button - positioned differently based on locale */}
        <motion.button
          onClick={() => setIsVideoModalOpen(true)}
          className={`absolute bottom-28 z-30 bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-600 hover:to-primary-400 backdrop-blur-sm text-white rounded-full p-8 md:p-10 transition-all duration-300 group shadow-xl border-2 border-white/30 ${isRTL ? 'left-1/4' : 'right-1/4'}`}
          aria-label={isRTL ? "تشغيل الفيديو التعريفي" : "Play introduction video"}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.95, 1.05, 0.95],
            opacity: 1,
            boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0.4)", "0 0 0 25px rgba(255, 255, 255, 0)", "0 0 0 0 rgba(255, 255, 255, 0)"]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5,
            delay: 0.5
          }}
          whileHover={{ 
            scale: 1.2,
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
          }}
        >
          {/* Enhanced play icon with multiple layers */}
          <div className="relative">
            {/* Main play icon */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20,
                ease: "linear"
              }}
              className="absolute -inset-8 opacity-30 blur-md"
              style={{
                background: 'conic-gradient(from 0deg, #FF6B6B, #4ECDC4, #FFD166, #6A4C93, #FF6B6B)'
              }}
            />
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" 
                className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.413-1.667-.13-1.667-.986V5.653z" />
              </svg>
            </motion.div>
            
            {/* Multiple animated rings */}
            <motion.div
              className="absolute -inset-3 rounded-full border-4 border-white/50"
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5
              }}
            />
            <motion.div
              className="absolute -inset-5 rounded-full border-2 border-primary-400/30"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -inset-7 rounded-full border border-white/20"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0, 0.4],
                rotate: [0, -45, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3.5,
                delay: 0.7
              }}
            />
          </div>
        </motion.button>
        
        {/* Slider Navigation */}
        <div className="absolute bottom-12 left-0 right-0 z-30">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Pagination Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={locale === 'en' ? `View Solution ${index + 1}` : `عرض الحل ${index + 1}`}
                    title={locale === 'en' ? `Explore Uniform Solution ${index + 1}` : `استكشف حل الزي الموحد ${index + 1}`}
                    className={`relative h-2 transition-all duration-500 ${
                      currentSlide === index ? 'w-10 bg-white' : 'w-2 bg-white/50'
                    } rounded-full overflow-hidden`}
                  >
                    {currentSlide === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300"
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 7, ease: 'linear' }}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Next/Prev Buttons */}
              <div className={`flex gap-3 mt-4 md:mt-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={goToPrevSlide}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  aria-label={text.prevSlide}
                  title={text.prevSlideTitle}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-5 h-5 text-white ${isRTL ? 'rotate-180' : ''} group-hover:scale-110 transition-transform`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={goToNextSlide}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  aria-label={text.nextSlide}
                  title={text.nextSlideTitle}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className={`w-5 h-5 text-white ${isRTL ? 'rotate-180' : ''} group-hover:scale-110 transition-transform`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              className="w-full max-w-6xl bg-black rounded-lg shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)} 
                className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black text-white rounded-full p-2 transition-all"
                aria-label={isRTL ? "إغلاق الفيديو" : "Close video"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative" style={{padding: '56.25% 0 0 0'}}>
                <iframe 
                  src={isRTL 
                    ? "https://player.vimeo.com/video/1065895823?h=4c0ee40f09&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1"
                    : "https://player.vimeo.com/video/1064010724?h=285e655a92&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1"
                  } 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                  title={isRTL ? "حيث يلتقي الإبداع مع الجودة في عالم اليونيفورم" : "Uneom: Crafting Excellence in Professional Uniforms"}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection; 