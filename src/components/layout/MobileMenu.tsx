"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  locale?: string;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ locale = 'en', onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const lastClickTimeRef = useRef<number>(0);
  const pathname = usePathname();
  const isRTL = locale === 'ar';
  
  // Navigation items with translations
  const navigationItems = {
    en: [
      {
        name: "Industries",
        href: "/industries",
        dropdown: [
          { name: "Healthcare", href: "/industries/healthcare" },
          { name: "Aviation", href: "/industries/aviation" },
          { name: "Hospitality", href: "/industries/hospitality" },
          { name: "Corporate", href: "/industries/corporate" },
          { name: "Education", href: "/industries/education" },
          { name: "Manufacturing", href: "/industries/manufacturing" },
          { name: "Security", href: "/industries/security" }
        ]
      },
      {
        name: "Services",
        href: "/services",
        dropdown: [
          { name: "Uniform Program Management", href: "/services/program-management" },
          { name: "Custom Design & Branding", href: "/services/custom-design" },
          { name: "Bulk Ordering", href: "/services/bulk-ordering" },
          { name: "Measurement Services", href: "/services/measurement-services" },
          { name: "Corporate Uniform Policies", href: "/services/uniform-policies" }
        ]
      },
      {
        name: "Resources",
        href: "/resources",
        dropdown: [
          { name: "Fabric Guide", href: "/resources/fabric-guide" },
          { name: "Size Guide", href: "/resources/size-guide" },
          { name: "Procurement Guide", href: "/resources/procurement-guide" },
          { name: "Uniform Policy Templates", href: "/resources/policy-templates" },
          { name: "Blog", href: "/blog" }
        ]
      },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Shop", href: "/shop" }
    ],
    ar: [
      {
        name: "الصناعات",
        href: "/ar/industries",
        dropdown: [
          { name: "الرعاية الصحية", href: "/ar/industries/healthcare" },
          { name: "الطيران", href: "/ar/industries/aviation" },
          { name: "الضيافة", href: "/ar/industries/hospitality" },
          { name: "الشركات", href: "/ar/industries/corporate" },
          { name: "التعليم", href: "/ar/industries/education" },
          { name: "التصنيع", href: "/ar/industries/manufacturing" },
          { name: "الأمن", href: "/ar/industries/security" }
        ]
      },
      {
        name: "الخدمات",
        href: "/ar/services",
        dropdown: [
          { name: "إدارة برامج الزي الموحد", href: "/ar/services/program-management" },
          { name: "تصميم مخصص وعلامات تجارية", href: "/ar/services/custom-design" },
          { name: "طلبات بالجملة", href: "/ar/services/bulk-ordering" },
          { name: "خدمات القياس", href: "/ar/services/measurement-services" },
          { name: "سياسات الزي الرسمي للشركات", href: "/ar/services/uniform-policies" }
        ]
      },
      {
        name: "الموارد",
        href: "/ar/resources",
        dropdown: [
          { name: "دليل الأقمشة", href: "/ar/resources/fabric-guide" },
          { name: "دليل المقاسات", href: "/ar/resources/size-guide" },
          { name: "دليل المشتريات", href: "/ar/resources/procurement-guide" },
          { name: "نماذج سياسة الزي الموحد", href: "/ar/resources/policy-templates" },
          { name: "المدونة", href: "/ar/blog" }
        ]
      },
      { name: "من نحن", href: "/ar/about" },
      { name: "اتصل بنا", href: "/ar/contact" },
      { name: "المتجر", href: "/ar/shop" }
    ]
  };
  
  const items = locale === 'en' ? navigationItems.en : navigationItems.ar;
  
  // Improved toggle function with debounce to prevent accidental double touches
  const toggleSection = (section: string) => {
    const now = Date.now();
    // Prevent rapid toggling (debounce)
    if (now - lastClickTimeRef.current < 200) {
      return;
    }
    lastClickTimeRef.current = now;
    
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };
  
  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      } 
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.1,
        duration: 0.3
      } 
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <motion.div 
      className="lg:hidden bg-white/95 backdrop-blur-sm fixed inset-0 z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-center mb-8`}>
          <h2 className={`text-2xl font-bold text-neutral-900 ${isRTL ? 'text-right' : ''}`}>
            {locale === 'en' ? 'Menu' : 'القائمة'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-neutral-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        
        <nav className="mt-4">
          <motion.ul 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
              }
            }}
          >
            {items.map((item, index) => (
              <motion.li 
                key={index} 
                className="border-b border-neutral-100 pb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`w-full flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-center py-3 px-2 text-left rounded-md ${
                        isActive(item.href) 
                          ? 'text-primary-600 font-semibold bg-primary-50' 
                          : 'text-neutral-800 hover:bg-neutral-50'
                      } transition-colors duration-200`}
                      onClick={() => toggleSection(`section-${index}`)}
                      aria-expanded={expandedSection === `section-${index}`}
                    >
                      <span className="text-lg">{item.name}</span>
                      <svg 
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          expandedSection === `section-${index}` ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {expandedSection === `section-${index}` && (
                        <motion.div
                          key={`section-${index}`}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="overflow-hidden"
                        >
                          <ul className={`${isRTL ? 'pr-6' : 'pl-6'} space-y-2 mt-3 mb-2`}>
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <motion.li key={dropdownIndex} variants={itemVariants}>
                                <Link
                                  href={dropdownItem.href}
                                  onClick={onClose}
                                  className={`block py-2.5 px-3 rounded-md ${isRTL ? 'text-right' : 'text-left'} ${
                                    isActive(dropdownItem.href) 
                                      ? 'text-primary-600 font-medium bg-primary-50' 
                                      : 'text-neutral-700 hover:bg-neutral-50'
                                  } transition-colors duration-200`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block py-3 px-2 rounded-md ${
                      isActive(item.href) 
                        ? 'text-primary-600 font-semibold bg-primary-50' 
                        : 'text-neutral-800 hover:bg-neutral-50'
                    } transition-colors duration-200 text-lg`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        
        {/* Language Switcher */}
        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="flex justify-center">
            <LanguageSwitcher currentLocale={locale} className="text-lg" />
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-neutral-100">
          <Link 
            href={locale === 'en' ? 
              pathname === '/' ? '/ar' : pathname.replace(/^\//, '/ar/') : 
              pathname.replace(/^\/ar(?=\/|$)/, '/')}
            className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end space-x-0 space-x-reverse' : 'space-x-2'} py-3 px-2 text-neutral-800 hover:text-primary-600 transition-colors duration-200`}
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{locale === 'en' ? 'العربية' : 'English'}</span>
          </Link>
          
          <Link
            href={locale === 'en' ? '/contact' : '/ar/contact'}
            onClick={onClose}
            className={`mt-4 block w-full ${isRTL ? 'text-right pr-4' : 'text-center'} bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-200 shadow-sm`}
          >
            {locale === 'en' ? 'Request Quote' : 'طلب عرض سعر'}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu; 