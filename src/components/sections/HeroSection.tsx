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
      title: "أزياء الرعاية الصحية بمعايير عالمية",
      subtitle: "راحة وحماية فائقة للعاملين في القطاع الطبي",
      image: "/images/avatar-placeholder.jpg",
      cta: "استكشف حلول الرعاية الصحية"
    },
    {
      title: "خدمات التوصيل والشحن بزي موحد احترافي",
      subtitle: "أزياء عملية ومتينة لفرق التوصيل والخدمات اللوجستية",
      image: "/images/default-placeholder.jpg",
      cta: "استكشف خدماتنا"
    },
    {
      title: "أزياء مدرسية عالية الجودة",
      subtitle: "تصاميم مريحة وعملية للطلاب في جميع المراحل التعليمية",
      image: "/images/default-placeholder.jpg",
      cta: "اكتشف الأزياء المدرسية"
    },
    {
      title: "أناقة وتميز لطاقم الطيران",
      subtitle: "أزياء تعكس رقي وفخامة شركات الطيران السعودية",
      image: "/images/default-placeholder.jpg",
      cta: "اكتشف مجموعة الطيران"
    },
    {
      title: "أزياء مهنية لمختلف القطاعات",
      subtitle: "نلبي احتياجات كافة المهن والتخصصات بتصاميم مبتكرة",
      image: "/images/default-placeholder.jpg",
      cta: "استكشف القطاعات"
    }
  ] : [
    {
      title: "World-Class Healthcare Apparel",
      subtitle: "Superior comfort and protection for medical professionals",
      image: "/images/avatar-placeholder.jpg",
      cta: "Explore Healthcare Solutions"
    },
    {
      title: "Professional Delivery Service Uniforms",
      subtitle: "Practical and durable attire for logistics teams",
      image: "/images/default-placeholder.jpg",
      cta: "Discover Our Services"
    },
    {
      title: "Premium School Uniforms",
      subtitle: "Comfortable and practical designs for students of all ages",
      image: "/images/default-placeholder.jpg",
      cta: "Explore School Uniforms"
    },
    {
      title: "Sophisticated Aviation Attire",
      subtitle: "Uniforms reflecting the elegance of Saudi airlines",
      image: "/images/default-placeholder.jpg",
      cta: "Discover Aviation Collection"
    },
    {
      title: "Professional Attire for All Sectors",
      subtitle: "Meeting the diverse needs of every profession with innovative designs",
      image: "/images/default-placeholder.jpg",
      cta: "Explore Industries"
    }
  ];
  
  const content = {
    en: {
      headline: title || "Saudi Arabia's Leading Provider of Professional Uniforms & Scrubs for Businesses",
      subheading: subtitle || "Tailored B2B Solutions for Healthcare, Aviation, Hospitality & Corporate Sectors",
      ctaPrimary: primaryButtonText || "Request a Quote",
      ctaSecondary: secondaryButtonText || "Explore Industries",
      primaryUrl: primaryButtonUrl || "/contact",
      secondaryUrl: secondaryButtonUrl || "/industries",
      videoButtonText: "Watch Introduction Video",
      prevSlide: "Previous",
      nextSlide: "Next"
    },
    ar: {
      headline: title || "المزود الرائد في المملكة العربية السعودية للأزياء المهنية للشركات",
      subheading: subtitle || "حلول مخصصة للشركات في قطاعات الرعاية الصحية والطيران والضيافة والشركات",
      ctaPrimary: primaryButtonText || "طلب عرض سعر",
      ctaSecondary: secondaryButtonText || "استكشاف الصناعات",
      primaryUrl: primaryButtonUrl || "/ar/contact",
      secondaryUrl: secondaryButtonUrl || "/ar/industries",
      videoButtonText: "شاهد الفيديو التعريفي",
      prevSlide: "السابق",
      nextSlide: "التالي"
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
    <div ref={inViewRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
                  opacity: 0.6,
                  filter: 'brightness(0.65) saturate(1.2)'
                }}
              />
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    {slides[currentSlide].title}
                  </span>
                </h1>
                <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
                <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button 
                    href={text.primaryUrl} 
                    variant="primary" 
                    size="lg"
                    className="relative group overflow-hidden"
                  >
                    <span className="relative z-10">{slides[currentSlide].cta}</span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary-600 to-primary-500 transition-transform duration-300 ease-out"></span>
                  </Button>
                  <Button 
                    href={text.secondaryUrl} 
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
                    aria-label={`Go to slide ${index + 1}`}
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