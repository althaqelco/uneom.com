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
        color: 'from-amber-500 via-amber-400 to-yellow-500'
      },
      { 
        value: '500+', 
        label: 'Clients Served',
        icon: <MdGroups className="text-2xl" />,
        color: 'from-blue-600 via-blue-500 to-sky-500'
      },
      { 
        value: 'Saudi-Made',
        label: 'Saudi-Made Options',
        icon: <MdVerified className="text-2xl" />,
        color: 'from-green-600 via-green-500 to-emerald-500'
      },
      { 
        value: 'Compliant',
        label: 'Industry Compliance',
        icon: <MdStarRate className="text-2xl" />,
        color: 'from-primary-600 via-primary-500 to-primary-400'
      },
      { 
        value: 'Reliable',
        label: 'Nationwide Delivery',
        icon: <MdLocalShipping className="text-2xl" />,
        color: 'from-purple-600 via-purple-500 to-indigo-500'
      }
    ],
    ar: [
      { 
        value: '+15', 
        label: 'سنوات في العمل',
        icon: <MdDateRange className="text-2xl" />,
        color: 'from-amber-500 via-amber-400 to-yellow-500'
      },
      { 
        value: '+500', 
        label: 'عملاء تمت خدمتهم',
        icon: <MdGroups className="text-2xl" />,
        color: 'from-blue-600 via-blue-500 to-sky-500'
      },
      { 
        value: 'صنع في السعودية',
        label: 'خيارات صناعة سعودية',
        icon: <MdVerified className="text-2xl" />,
        color: 'from-green-600 via-green-500 to-emerald-500'
      },
      { 
        value: 'متوافق',
        label: 'الامتثال للمعايير',
        icon: <MdStarRate className="text-2xl" />,
        color: 'from-primary-600 via-primary-500 to-primary-400'
      },
      { 
        value: 'موثوق',
        label: 'توصيل لكافة المناطق',
        icon: <MdLocalShipping className="text-2xl" />,
        color: 'from-purple-600 via-purple-500 to-indigo-500'
      }
    ]
  };

  const content = {
    en: {
      title: "Trusted by Leading Organizations Across Saudi Arabia",
      subtitle: "Providing high-quality professional uniforms for diverse industries throughout the Kingdom",
    },
    ar: {
      title: "موثوق به من قبل المؤسسات الرائدة في المملكة العربية السعودية",
      subtitle: "نوفر زيًا موحدًا مهنيًا عالي الجودة لصناعات متنوعة في جميع أنحاء المملكة",
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
      scale: 1.05,
      y: -10,
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
      {/* Enhanced gradient background with multiple color accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/70 to-white z-0"></div>
      
      {/* Enhanced glass morphism effect */}
      <div className="absolute inset-0 backdrop-blur-[100px] z-0"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary-300/40 to-blue-400/30 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={1}
        ></motion.div>
        <motion.div 
          className="absolute top-[30%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-bl from-amber-300/40 to-amber-100/20 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={2}
        ></motion.div>
        <motion.div 
          className="absolute bottom-[10%] left-[20%] w-48 h-48 rounded-full bg-gradient-to-tr from-green-300/40 to-blue-200/30 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={3}
        ></motion.div>
        <motion.div 
          className="absolute top-[40%] left-[40%] w-72 h-72 rounded-full bg-gradient-to-tl from-purple-300/30 to-indigo-200/20 blur-3xl"
          variants={randomFloatVariants}
          initial="initial"
          animate="animate"
          custom={4}
        ></motion.div>

        {/* Enhanced mesh grid background */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Enhanced Section Header with stronger shadow and text effect */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading tracking-tight bg-gradient-to-r from-neutral-900 via-primary-800 to-neutral-900 text-transparent bg-clip-text drop-shadow-sm">
            {text.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 drop-shadow-sm">
            {text.subtitle}
          </p>
        </motion.div>

        {/* Enhanced Animated Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {statsToDisplay.map((stat, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br ${stat.color} hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden group`}
              custom={index}
              variants={bounceVariants}
              initial="hidden"
              animate={statsControls}
              whileHover="hover"
              onMouseEnter={() => setHoveredStatIndex(index)}
              onMouseLeave={() => setHoveredStatIndex(null)}
              style={{ 
                boxShadow: hoveredStatIndex === index ? `0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)` : '' 
              }}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0.5 rounded-xl bg-white/90 backdrop-blur-sm z-0"></div>
              
              {/* Colorful background circle */}
              <motion.div 
                className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${stat.color} opacity-20 -mt-12 -mr-12 z-0`}
                animate={{
                  scale: hoveredStatIndex === index ? 1.2 : 1,
                  opacity: hoveredStatIndex === index ? 0.3 : 0.2,
                }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              
              {/* Enhanced Icon */}
              <motion.div
                className={`relative z-10 text-white p-4 rounded-full bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:shadow-xl`}
                variants={bounceVariants}
                custom={index}
              >
                {stat.icon}
              </motion.div>
              
              {/* Enhanced Value */}
              <motion.div
                className={`font-bold text-2xl md:text-3xl mb-2 relative z-10 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
                variants={valueTextVariants}
                custom={index}
              >
                {stat.value}
              </motion.div>
              
              {/* Enhanced Label */}
              <motion.div
                className="font-medium text-neutral-700 relative z-10"
                variants={counterVariants}
                custom={index}
              >
                {stat.label}
              </motion.div>
              
              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.color} rounded-b-xl z-10`}></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustSignals; 