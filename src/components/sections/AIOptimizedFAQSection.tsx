/**
 * AIOptimizedFAQSection Component
 * قسم الأسئلة الشائعة المحسن للذكاء الاصطناعي
 * 
 * Features:
 * - Schema.org FAQPage markup
 * - Speakable content for voice search
 * - Expandable/collapsible design
 * - Mobile-first responsive
 * - RTL support
 * - AI search snippet optimization
 */

'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface AIOptimizedFAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  locale?: 'en' | 'ar';
  showCategories?: boolean;
  expandFirst?: boolean;
  maxVisible?: number;
  showSchema?: boolean;
  className?: string;
  accentColor?: string;
}

const AIOptimizedFAQSection: React.FC<AIOptimizedFAQSectionProps> = ({
  title,
  subtitle,
  faqs,
  locale = 'en',
  showCategories = false,
  expandFirst = true,
  maxVisible = 0,
  showSchema = true,
  className = '',
  accentColor = 'blue'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(expandFirst ? 0 : null);
  const [showAll, setShowAll] = useState(maxVisible === 0);
  const isRTL = locale === 'ar';
  
  // Determine visible FAQs
  const visibleFaqs = showAll || maxVisible === 0 
    ? faqs 
    : faqs.slice(0, maxVisible);
  
  // Group FAQs by category if needed
  const groupedFaqs = showCategories 
    ? faqs.reduce((acc, faq) => {
        const category = faq.category || 'General';
        if (!acc[category]) acc[category] = [];
        acc[category].push(faq);
        return acc;
      }, {} as Record<string, FAQ[]>)
    : null;
  
  // Generate FAQPage schema
  const generateFAQSchema = () => {
    if (!showSchema) return null;
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
    
    return (
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };
  
  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Accent color classes
  const accentClasses = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-50'
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-50',
      text: 'text-green-600',
      hover: 'hover:bg-green-50'
    },
    orange: {
      border: 'border-orange-500',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-50'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-50'
    }
  };
  
  const colors = accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.blue;
  
  // Render single FAQ item
  const renderFAQItem = (faq: FAQ, index: number, globalIndex: number) => {
    const isOpen = openIndex === globalIndex;
    
    return (
      <div 
        key={globalIndex}
        className={`
          border-l-4 ${isOpen ? colors.border : 'border-gray-200'}
          rounded-lg overflow-hidden mb-3 transition-all duration-200
          ${isOpen ? colors.bg : 'bg-white hover:bg-gray-50'}
          shadow-sm hover:shadow-md
        `}
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
      >
        {/* Question */}
        <button
          onClick={() => toggleFAQ(globalIndex)}
          className={`
            w-full flex items-center justify-between
            p-4 sm:p-5 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}
            font-semibold text-gray-800
            focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-inset
          `}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${globalIndex}`}
        >
          <span 
            className="flex-1 text-base sm:text-lg"
            itemProp="name"
            data-speakable="true"
          >
            {faq.question}
          </span>
          <span className={`
            flex-shrink-0 ${isRTL ? 'ml-0 mr-4' : 'ml-4 mr-0'}
            transform transition-transform duration-200
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}>
            <svg 
              className="w-5 h-5 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </span>
        </button>
        
        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`faq-answer-${globalIndex}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div 
                className={`
                  px-4 sm:px-5 pb-4 sm:pb-5
                  text-gray-600 text-sm sm:text-base leading-relaxed
                  faq-answer
                  ${isRTL ? 'text-right' : 'text-left'}
                `}
                itemProp="text"
                data-speakable="true"
              >
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section 
      className={`py-12 md:py-16 lg:py-20 ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      aria-label={isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-12`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          {showCategories && groupedFaqs ? (
            // Categorized FAQs
            Object.entries(groupedFaqs).map(([category, categoryFaqs], catIndex) => (
              <div key={category} className="mb-8">
                <h3 className={`
                  text-lg sm:text-xl font-semibold mb-4 ${colors.text}
                  ${isRTL ? 'text-right' : 'text-left'}
                `}>
                  {category}
                </h3>
                {categoryFaqs.map((faq, faqIndex) => 
                  renderFAQItem(
                    faq, 
                    faqIndex, 
                    faqs.findIndex(f => f.question === faq.question)
                  )
                )}
              </div>
            ))
          ) : (
            // Flat FAQs
            visibleFaqs.map((faq, index) => renderFAQItem(faq, index, index))
          )}
          
          {/* Show More Button */}
          {maxVisible > 0 && faqs.length > maxVisible && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className={`
                w-full mt-4 py-3 px-6
                border-2 ${colors.border} ${colors.text}
                rounded-lg font-semibold
                ${colors.hover}
                transition-colors duration-200
              `}
            >
              {isRTL 
                ? `عرض ${faqs.length - maxVisible} أسئلة أخرى`
                : `Show ${faqs.length - maxVisible} more questions`
              }
            </button>
          )}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-600 mb-4">
            {isRTL 
              ? 'لم تجد إجابة لسؤالك؟'
              : "Didn't find what you're looking for?"
            }
          </p>
          <a
            href={isRTL ? '/ar/contact/' : '/contact/'}
            className={`
              inline-flex items-center gap-2 px-6 py-3
              bg-blue-600 hover:bg-blue-700 text-white
              rounded-lg font-semibold transition-colors
            `}
          >
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
            <svg 
              className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Schema Markup */}
      {generateFAQSchema()}
    </section>
  );
};

export default AIOptimizedFAQSection;







