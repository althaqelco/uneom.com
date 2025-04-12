'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
  animation?: {
    type: string;
    delay: number;
    duration: number;
    hoverEffect: string;
  };
  iconBackground?: string;
  highlight?: boolean;
}

interface BenefitsDisplayConfig {
  layout: string;
  iconSize: string;
  animationEnabled: boolean;
  style: string;
  title: string;
  subtitle: string;
  callToAction?: {
    text: string;
    link: string;
  };
}

interface AnimatedBenefitsSectionProps {
  benefits: BenefitItem[];
  displayConfig?: BenefitsDisplayConfig;
  locale: string;
}

const AnimatedBenefitsSection: React.FC<AnimatedBenefitsSectionProps> = ({ 
  benefits, 
  displayConfig,
  locale
}) => {
  // Default configuration if not provided
  const config = displayConfig || {
    layout: 'grid',
    iconSize: 'medium',
    animationEnabled: true,
    style: 'standard',
    title: locale === 'ar' ? 'المزايا والفوائد' : 'Benefits & Advantages',
    subtitle: locale === 'ar' ? 'اكتشف ما يميزنا' : 'Discover what sets us apart',
  };

  // Determine if RTL should be applied based on locale
  const isRTL = locale === 'ar';

  return (
    <section className={`py-16 ${config.style === 'premium' ? 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {config.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {config.subtitle}
          </motion.p>
        </div>

        <div className={`
          ${config.layout === 'grid' ? 'grid' : 'flex flex-col'}
          ${config.layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}
        `}>
          {benefits.map((benefit, index) => (
            <AnimatedBenefitCard 
              key={index} 
              benefit={benefit} 
              index={index}
              config={config}
              isRTL={isRTL}
            />
          ))}
        </div>
        
        {config.callToAction && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              href={config.callToAction.link}
              className="inline-block py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {config.callToAction.text}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const AnimatedBenefitCard: React.FC<{ 
  benefit: BenefitItem; 
  index: number;
  config: BenefitsDisplayConfig;
  isRTL: boolean;
}> = ({ benefit, index, config, isRTL }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Get animation configurations
  const animation = benefit.animation || {
    type: 'fadeIn',
    delay: 0.1 * index,
    duration: 0.6,
    hoverEffect: 'none'
  };

  // Icon size based on config
  const iconSize = config.iconSize === 'large' ? 80 : config.iconSize === 'small' ? 48 : 64;
  
  useEffect(() => {
    if (inView && config.animationEnabled) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: animation.duration,
          delay: animation.delay
        }
      });
    }
  }, [inView, controls, animation, config.animationEnabled]);

  // Get hover animation variants
  const getHoverVariants = () => {
    switch(animation.hoverEffect) {
      case 'pulse':
        return {
          hover: { 
            scale: [1, 1.05, 1], 
            transition: { 
              duration: 0.8, 
              repeat: 0 
            } 
          }
        };
      case 'grow':
        return {
          hover: { 
            scale: 1.05,
            transition: { duration: 0.3 } 
          }
        };
      default:
        return {
          hover: { scale: 1 }
        };
    }
  };
  
  // Determine initial and animate states based on animation type
  const getAnimationStates = () => {
    switch(animation.type) {
      case 'fadeInUp':
        return {
          initial: { opacity: 0, y: 50 },
          animate: controls
        };
      case 'fadeInLeft':
        return {
          initial: { opacity: 0, x: -50 },
          animate: controls
        };
      case 'fadeInRight':
        return {
          initial: { opacity: 0, x: 50 },
          animate: controls
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: controls
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      {...getAnimationStates()}
      whileHover="hover"
      variants={getHoverVariants()}
      className={`
        p-6 rounded-xl shadow-md transition-all duration-300
        ${benefit.highlight ? 'bg-white dark:bg-gray-800 ring-2 ring-blue-500 shadow-xl' : 'bg-white dark:bg-gray-800'}
        ${config.style === 'premium' ? 'border border-gray-200 dark:border-gray-700' : ''}
      `}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="flex items-start">
        <div 
          style={{ background: benefit.iconBackground || 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)' }}
          className={`
            rounded-full p-3 flex items-center justify-center 
            ${isRTL ? 'ml-4' : 'mr-4'}
            ${config.style === 'premium' ? 'shadow-lg' : ''}
          `}
        >
          <Image 
            src={benefit.icon} 
            alt={benefit.title} 
            width={iconSize / 2} 
            height={iconSize / 2}
            className="text-white"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedBenefitsSection; 