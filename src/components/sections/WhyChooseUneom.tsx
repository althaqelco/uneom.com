'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface WhyChooseUneomProps {
  locale?: string;
}

const WhyChooseUneom: React.FC<WhyChooseUneomProps> = ({ locale = 'en' }) => {
  const isRTL = locale === 'ar';
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Auto-switch between features every 3 seconds
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Premium gradients for each feature
  const gradients = [
    'linear-gradient(135deg, rgba(238, 174, 202, 0.9) 0%, rgba(148, 187, 233, 0.8) 100%)',
    'linear-gradient(135deg, rgba(97, 255, 189, 0.85) 0%, rgba(28, 69, 135, 0.9) 100%)',
    'linear-gradient(135deg, rgba(255, 202, 40, 0.9) 0%, rgba(180, 75, 34, 0.9) 100%)',
    'linear-gradient(135deg, rgba(168, 119, 240, 0.85) 0%, rgba(86, 38, 138, 0.9) 100%)',
    'linear-gradient(135deg, rgba(23, 184, 144, 0.85) 0%, rgba(9, 73, 64, 0.9) 100%)',
    'linear-gradient(135deg, rgba(79, 172, 254, 0.85) 0%, rgba(0, 39, 104, 0.9) 100%)',
  ];
  
  // Six reasons to choose UNEOM with their respective icons and descriptions
  const reasons = {
    en: [
      {
        title: "Exceptional Quality Materials",
        description: "Our garments use only premium-grade fabrics, tested to withstand 200+ industrial washings while maintaining professional appearance and comfort throughout extended wear.",
        icon: "/images/icons/premium-quality.svg",
        iconColor: "#FF6B6B"
      },
      {
        title: "Climate-Intelligent Design",
        description: "Engineered specifically for Saudi Arabia's unique climate, our uniforms feature proprietary moisture-wicking technology and breathable construction for all-day comfort in any environment.",
        icon: "/images/icons/climate-adapted.svg",
        iconColor: "#4ECDC4"
      },
      {
        title: "Cultural Authenticity",
        description: "Every design respects Saudi Arabian heritage and cultural values while seamlessly integrating contemporary professional standards for a perfect balance of tradition and modernity.",
        icon: "/images/icons/culturally-appropriate.svg",
        iconColor: "#FFD166"
      },
      {
        title: "Precision Brand Integration",
        description: "Advanced embroidery and sublimation techniques ensure your brand identity is flawlessly represented with precise color matching and impeccable logo reproduction on every garment.",
        icon: "/images/icons/custom-branding.svg",
        iconColor: "#6A4C93"
      },
      {
        title: "Nationwide Logistics Excellence",
        description: "Our sophisticated supply chain ensures on-time delivery to every corner of the Kingdom, with real-time tracking and dedicated logistics specialists guaranteeing your deadlines are met.",
        icon: "/images/icons/timely-delivery.svg",
        iconColor: "#1A936F"
      },
      {
        title: "Comprehensive Client Care",
        description: "Experience our signature concierge-level support at every stage, from initial design consultation through measurements, fittings, delivery, and beyond with dedicated account managers.",
        icon: "/images/icons/comprehensive-support.svg",
        iconColor: "#3D5A80"
      }
    ],
    ar: [
      {
        title: "مواد فائقة الجودة",
        description: "تستخدم منتجاتنا أقمشة ممتازة فقط، تم اختبارها لتتحمل أكثر من 200 غسلة صناعية مع الحفاظ على المظهر المهني والراحة طوال فترة الارتداء الطويلة.",
        icon: "/images/icons/premium-quality.svg",
        iconColor: "#FF6B6B"
      },
      {
        title: "تصميم ذكي للمناخ",
        description: "مصممة خصيصًا لمناخ المملكة العربية السعودية الفريد، تتميز أزياؤنا بتقنية متطورة لامتصاص الرطوبة وتركيبة تسمح بالتهوية لتوفير الراحة طوال اليوم في أي بيئة.",
        icon: "/images/icons/climate-adapted.svg",
        iconColor: "#4ECDC4"
      },
      {
        title: "أصالة ثقافية",
        description: "يحترم كل تصميم التراث السعودي والقيم الثقافية مع دمج المعايير المهنية المعاصرة بسلاسة لتحقيق توازن مثالي بين التقاليد والحداثة.",
        icon: "/images/icons/culturally-appropriate.svg",
        iconColor: "#FFD166"
      },
      {
        title: "دمج العلامة التجارية بدقة",
        description: "تضمن تقنيات التطريز والطباعة المتقدمة تمثيل هوية علامتك التجارية بشكل مثالي مع مطابقة دقيقة للألوان وإعادة إنتاج مثالية للشعار على كل قطعة ملابس.",
        icon: "/images/icons/custom-branding.svg",
        iconColor: "#6A4C93"
      },
      {
        title: "تميّز لوجستي على مستوى الوطن",
        description: "تضمن سلسلة التوريد المتطورة لدينا التسليم في الوقت المحدد إلى كل ركن من أركان المملكة، مع تتبع في الوقت الفعلي ومتخصصين لوجستيين مخصصين يضمنون الوفاء بمواعيدك النهائية.",
        icon: "/images/icons/timely-delivery.svg",
        iconColor: "#1A936F"
      },
      {
        title: "رعاية شاملة للعملاء",
        description: "استمتع بخدمة الدعم المميزة على مستوى الكونسيرج في كل مرحلة، من الاستشارة الأولية للتصميم مرورًا بالقياسات والتجهيزات والتسليم وما بعده مع مديري حسابات مخصصين.",
        icon: "/images/icons/comprehensive-support.svg",
        iconColor: "#3D5A80"
      }
    ]
  };

  const content = {
    en: {
      heading: "Why Leading Saudi Organizations Choose UNEOM",
      subheading: "The Definitive Uniform Partner of Excellence Since 2005"
    },
    ar: {
      heading: "لماذا تختار المؤسسات السعودية الرائدة يونيوم",
      subheading: "الشريك النهائي المتميز للزي الموحد منذ 2005"
    }
  };

  const text = locale === 'en' ? content.en : content.ar;
  const reasonsList = locale === 'en' ? reasons.en : reasons.ar;

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #1a1a1a, #2a2a2a)' 
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-pink-500/5 blur-3xl"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 + 0.3 
            }}
            animate={{ 
              y: [null, Math.random() * 20 - 10 + "%"],
              opacity: [null, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'rtl' : ''}`}
        >
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl text-center">
            {text.heading}
            <span className="block h-1 w-24 bg-primary-500 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-300 mt-4 font-light tracking-wide">
            {text.subheading}
          </p>
          
          {/* Ornamental divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500/50"></div>
            <div className="mx-2">
              <svg className="w-8 h-8 text-primary-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500/50"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 ${isRTL ? 'rtl' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {reasonsList.map((reason, index) => {
            const isActive = activeFeature === index;
            
            return (
              <motion.div 
                key={index}
                ref={(el) => {
                  if (el) featureRefs.current[index] = el;
                }}
                className={`relative group backdrop-blur-sm rounded-xl p-8 transition-all duration-500 ${isActive ? 'ring-1 ring-white/20' : ''}`}
                style={{ 
                  background: isActive 
                    ? `${gradients[index]}, rgba(40, 40, 45, 0.6)` 
                    : 'rgba(40, 40, 45, 0.4)',
                  boxShadow: isActive 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' 
                }}
                onClick={() => setActiveFeature(index)}
              >
                {/* Background glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                  style={{ 
                    background: `radial-gradient(circle at center, ${reason.iconColor}10 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-x-4 mb-6">
                    <motion.div 
                      className="relative flex-shrink-0"
                      animate={{ 
                        rotate: isActive ? [0, 5, 0, -5, 0] : 0,
                        scale: isActive ? [1, 1.1, 1] : 1
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 1
                      }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ 
                          background: `radial-gradient(circle at center, ${reason.iconColor}30 0%, ${reason.iconColor}10 70%)` 
                        }}
                      >
                        <div className="w-8 h-8 relative">
                          <Image 
                            src={reason.icon}
                            alt={reason.title}
                            fill
                            className="object-contain filter drop-shadow-lg"
                            style={{ filter: "brightness(0) invert(1)" }}
                          />
                        </div>
                      </div>
                      {/* Animated ring */}
                      <motion.div 
                        className="absolute -inset-1 rounded-full border border-white/20"
                        animate={{ 
                          scale: isActive ? [1, 1.2, 1] : 1,
                          opacity: isActive ? [0.2, 0.8, 0.2] : 0.2
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: isActive ? Infinity : 0,
                          repeatDelay: 0.5
                        }}
                      ></motion.div>
                    </motion.div>
                    
                    <div>
                      <h3 
                        className="text-2xl font-bold tracking-wide" 
                        style={{ 
                          color: isActive ? 'white' : reason.iconColor,
                          textShadow: isActive ? '0 0 15px rgba(255,255,255,0.3)' : 'none'
                        }}
                      >
                        {reason.title}
                      </h3>
                      {/* Animated underline */}
                      <motion.div 
                        className="h-0.5 rounded-full mt-1 bg-gradient-to-r"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, ${reason.iconColor}, transparent)` 
                        }}
                        initial={{ width: '30%' }}
                        animate={{ width: isActive ? '100%' : '30%' }}
                        transition={{ duration: 1 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                  
                  {/* Footer accent */}
                  <div className="mt-6 flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: reason.iconColor }}
                      animate={{ 
                        scale: isActive ? [1, 1.5, 1] : 1,
                        opacity: isActive ? [0.5, 1, 0.5] : 0.5
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 0.5
                      }}
                    ></motion.div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUneom; 