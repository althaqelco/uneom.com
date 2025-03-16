"use client";

import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import { MdDateRange, MdGroups, MdLocalShipping, MdSecurity, MdVerified, MdOutlineSchool, MdCategory, MdStarRate, MdLayers } from 'react-icons/md';
import Image from 'next/image';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

interface TrustSignalsProps {
  locale?: string;
  stats?: Stat[];
}

const TrustSignals: React.FC<TrustSignalsProps> = ({ 
  locale = 'en',
  stats
}) => {
  const defaultStats = {
    en: [
      { 
        value: '15+', 
        label: 'Years in Business',
        icon: <MdDateRange className="text-2xl" />,
        color: 'from-amber-500 to-amber-600'
      },
      { 
        value: '500+', 
        label: 'Clients Served',
        icon: <MdGroups className="text-2xl" />,
        color: 'from-primary-500 to-primary-600'
      },
      { 
        value: '100%', 
        label: 'Quality Products',
        icon: <MdVerified className="text-2xl" />,
        color: 'from-green-500 to-green-600'
      },
      { 
        value: '24/7', 
        label: 'Customer Support',
        icon: <MdSecurity className="text-2xl" />,
        color: 'from-blue-500 to-blue-600'
      }
    ],
    ar: [
      { 
        value: '+15', 
        label: 'سنوات في العمل',
        icon: <MdDateRange className="text-2xl" />,
        color: 'from-amber-500 to-amber-600'
      },
      { 
        value: '+500', 
        label: 'عملاء تمت خدمتهم',
        icon: <MdGroups className="text-2xl" />,
        color: 'from-primary-500 to-primary-600'
      },
      { 
        value: '100%', 
        label: 'منتجات عالية الجودة',
        icon: <MdVerified className="text-2xl" />,
        color: 'from-green-500 to-green-600'
      },
      { 
        value: '24/7', 
        label: 'دعم العملاء',
        icon: <MdSecurity className="text-2xl" />,
        color: 'from-blue-500 to-blue-600'
      }
    ]
  };

  const content = {
    en: {
      title: "Trusted by Leading Organizations Across Saudi Arabia",
      subtitle: "Providing high-quality professional uniforms for diverse industries throughout the Kingdom",
      signals: [
        {
          icon: <MdStarRate className="w-12 h-12 text-primary-500" />,
          title: "Industry Compliant",
          description: "Our uniforms meet all industry standards for safety, quality and comfort"
        },
        {
          icon: <MdCategory className="w-12 h-12 text-primary-500" />,
          title: "Multiple Industries",
          description: "Serving diverse sectors from healthcare to hospitality across Saudi Arabia"
        },
        {
          icon: <MdVerified className="w-12 h-12 text-primary-500" />,
          title: "Saudi Made",
          description: "Supporting local manufacturing with Saudi expertise"
        },
        {
          icon: <MdLayers className="w-12 h-12 text-primary-500" />,
          title: "Specialized Designs",
          description: "Custom uniforms for every industry, department and role"
        }
      ]
    },
    ar: {
      title: "موثوق به من قبل المؤسسات الرائدة في المملكة العربية السعودية",
      subtitle: "نوفر زيًا موحدًا مهنيًا عالي الجودة لصناعات متنوعة في جميع أنحاء المملكة",
      signals: [
        {
          icon: <MdStarRate className="w-12 h-12 text-primary-500" />,
          title: "متوافق مع المعايير",
          description: "تلبي أزياؤنا الموحدة جميع معايير الصناعة للسلامة والجودة والراحة"
        },
        {
          icon: <MdCategory className="w-12 h-12 text-primary-500" />,
          title: "صناعات متعددة",
          description: "خدمة قطاعات متنوعة من الرعاية الصحية إلى الضيافة في المملكة العربية السعودية"
        },
        {
          icon: <MdVerified className="w-12 h-12 text-primary-500" />,
          title: "صناعة سعودية",
          description: "دعم التصنيع المحلي بخبرات سعودية"
        },
        {
          icon: <MdLayers className="w-12 h-12 text-primary-500" />,
          title: "تصاميم متخصصة",
          description: "أزياء موحدة مخصصة لكل صناعة وقسم ودور"
        }
      ]
    }
  };
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.2 });
  const statsControls = useAnimation();
  const [hoveredStatIndex, setHoveredStatIndex] = useState<number | null>(null);
  
  useEffect(() => {
    if (isStatsInView) {
      statsControls.start("visible");
    } else {
      statsControls.start("hidden");
    }
  }, [isStatsInView, statsControls]);
  
  const counterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };
  
  const bounceVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const valueTextVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: (custom: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: custom * 0.15 + 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  const isRTL = locale === 'ar';
  const text = content[locale as keyof typeof content];
  const statsToDisplay = stats || defaultStats[locale as keyof typeof defaultStats];

  // Random animation for background elements
  const randomFloatVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ultra-modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/70 to-white z-0"></div>
      
      {/* Glass morphism effect */}
      <div className="absolute inset-0 backdrop-blur-[100px] z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary-200/40 to-blue-300/20 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={1}
        ></motion.div>
        <motion.div 
          className="absolute top-[30%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-bl from-amber-200/30 to-amber-100/10 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={2}
        ></motion.div>
        <motion.div 
          className="absolute bottom-[10%] left-[20%] w-48 h-48 rounded-full bg-gradient-to-tr from-green-200/30 to-blue-100/20 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={3}
        ></motion.div>

        {/* Mesh grid background */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.015] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10">
        <Container>
          {/* Stats Section */}
          <motion.div 
            ref={statsRef} 
            initial="hidden"
            animate={statsControls}
            className="relative mb-24 mx-auto max-w-5xl"
          >
            {/* Outer container with 3D style and elevated shadow */}
            <div className="relative rounded-[30px] p-1 bg-gradient-to-br from-white/80 to-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 10px 40px rgba(107, 136, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.7) inset, 0 -20px 40px rgba(255, 255, 255, 0.5) inset'
                }}
            >
              {/* Stats container with glass effect */}
              <div className="p-10 rounded-[28px] bg-gradient-to-br from-white/80 via-white/90 to-blue-50/50 border border-white/80"
                   style={{ backdropFilter: 'blur(10px)' }}
              >
                <h3 className="text-center text-xl text-neutral-500 font-medium mb-10 tracking-wide">{isRTL ? 'بيان حقائق يونيوم' : 'UNEOM BY THE NUMBERS'}</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {statsToDisplay.map((stat, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={counterVariants}
                      className="relative flex flex-col items-center text-center"
                      onHoverStart={() => setHoveredStatIndex(index)}
                      onHoverEnd={() => setHoveredStatIndex(null)}
                    >
                      {/* Background circle - subtle growing animation on hover */}
                      <AnimatePresence>
                        {hoveredStatIndex === index && (
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-primary-50/40 rounded-2xl"
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Icon container with gradient */}
                      <motion.div 
                        className={`relative mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${stat.color || 'from-primary-500 to-blue-600'} text-white shadow-lg p-4`}
                        variants={bounceVariants}
                        custom={index}
                        whileHover="hover"
                      >
                        {/* Inner circle */}
                        <div className="absolute inset-[3px] rounded-full bg-white/10"></div>
                        
                        {/* Icon */}
                        {stat.icon}
                        
                        {/* Shine effect */}
                        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/30 rounded-full blur-[1px] transform translate-x-1 -translate-y-1"></div>
                      </motion.div>
                      
                      {/* Value with gradient text */}
                      <motion.div 
                        className="relative"
                        variants={valueTextVariants}
                        custom={index}
                      >
                        <div className="text-5xl md:text-6xl font-extrabold mb-2 relative tracking-tight">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-blue-600">
                            {stat.value}
                          </span>
                        </div>
                        
                        {/* Label with subtle animation */}
                        <div className="text-neutral-700 font-medium relative z-10 tracking-wide">
                          {stat.label}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-primary-100/80 shadow-md"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-blue-100/80 shadow-md"></div>
          </motion.div>
          
          <div className="mb-14 text-center relative">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-3 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {text.title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500"></div>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {text.subtitle}
            </motion.p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {text.signals.map((signal, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="flex flex-col items-center text-center p-7 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(255, 255, 255, 1) inset'
                }}
              >
                <div className="mb-5 bg-gradient-to-br from-primary-50 to-blue-50 p-5 rounded-2xl transform transition-transform group-hover:scale-110">
                  {signal.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{signal.title}</h3>
                <p className="text-neutral-600">{signal.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-primary-100/80 blur-md"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-blue-100/80 blur-md"></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/80"
                 style={{
                   boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9) inset'
                 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 leading-tight">
                    {isRTL 
                      ? "نزود المهنيين في مختلف القطاعات بأفضل الأزياء الموحدة"
                      : "Equipping Professionals Across Industries with the Best Uniforms"}
                  </h3>
                  <p className="text-neutral-600 mb-8 text-lg">
                    {isRTL
                      ? "من الرعاية الصحية إلى الضيافة والطيران، نقدم زيًا موحدًا يجمع بين الوظائف والراحة والمظهر المهني."
                      : "From healthcare to hospitality and aviation, we provide uniforms that combine functionality, comfort, and professional appearance."}
                  </p>
                  <ul className="space-y-4">
                    {[
                      isRTL ? "مواد عالية الجودة مقاومة للتآكل" : "High-quality durable materials",
                      isRTL ? "تصاميم مريحة للاستخدام اليومي" : "Comfortable designs for daily use",
                      isRTL ? "خيارات متوافقة مع الثقافة السعودية" : "Options compatible with Saudi culture"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mr-3 mt-0.5 shadow-md">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-lg text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-full min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-blue-100/20 mix-blend-overlay"></div>
                  <Image 
                    src="/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg"
                    alt={isRTL ? "مهنيون في أزياء موحدة" : "Professionals in uniforms"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default TrustSignals; 