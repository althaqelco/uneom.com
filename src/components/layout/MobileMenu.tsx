"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronDown } from 'react-icons/fa';

interface MobileMenuProps {
  locale?: string;
  onClose: () => void;
}

// Helper component for individual menu items
const MenuItem = ({ item, locale, isActive, onClose }: {
  item: any;
  locale: string;
  isActive: (href: string) => boolean;
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = locale === 'ar';

  const toggleOpen = () => setIsOpen(!isOpen);

  if (item.children) {
    return (
      <div>
        <button
          onClick={toggleOpen}
          className={`flex items-center justify-between w-full py-3 px-2 rounded-md text-lg font-medium ${isRTL ? 'flex-row-reverse text-right' : 'text-left'} ${isActive(item.href) ? 'text-primary-700 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-50'} transition-colors duration-200`}
        >
          <span>{item.name}</span>
          <FaChevronDown 
            className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isRTL ? 'mr-auto' : 'ml-auto'}`} 
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`overflow-hidden ${isRTL ? 'pr-4 border-r-2' : 'pl-4 border-l-2'} border-neutral-200 ml-2 mr-2 mt-1 space-y-1`}
            >
              {item.children.map((child: any) => (
                <Link
                  key={child.name}
                  href={child.href}
                  onClick={onClose}
                  className={`block py-2 px-2 text-base rounded ${isRTL ? 'text-right' : 'text-left'} ${
                    isActive(child.href)
                      ? 'text-primary-600 font-medium bg-primary-50'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  } transition-colors duration-150`}
                >
                  {child.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  } else {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={`block py-3 px-2 rounded-md text-lg ${isRTL ? 'text-right' : 'text-left'} ${
          isActive(item.href)
            ? 'text-primary-700 font-semibold bg-primary-50'
            : 'text-neutral-800 hover:bg-neutral-50'
        } transition-colors duration-200`}
      >
        {item.name}
      </Link>
    );
  }
};

const MobileMenu: React.FC<MobileMenuProps> = ({ locale = 'en', onClose }) => {
  const pathname = usePathname();
  const isRTL = locale === 'ar';
  
  const isActive = (href: string): boolean => { 
    if (!pathname) return false; 
    
    if (href === '/' && pathname === '/') return true;
    if (href === '/ar' && pathname === '/ar') return true;
    if (href === '/' || href === '/ar') return false;
    
    return pathname.startsWith(href);
  };
  
  const items = locale === 'ar' ? [
    { name: 'الرئيسية', href: '/ar/' },
    { name: 'من نحن', href: '/ar/about/' },
    { name: 'المتجر', href: '/ar/shop/', children: [
      { name: 'أزياء المستشفيات', href: '/ar/shop/healthcare/' },
      { name: 'الأزياء الفندقية', href: '/ar/shop/hospitality-attire/' },
      { name: 'الزي الرسمي للشركات', href: '/ar/shop/corporate-workwear/' },
      { name: 'أزياء الطيران', href: '/ar/shop/aviation-uniforms/' },
      { name: 'ملابس العمل الصناعية', href: '/ar/shop/industrial-uniforms/' },
      { name: 'أزياء تعليمية', href: '/ar/shop/education-uniforms/' },
      { name: 'ملابس مطاعم', href: '/ar/shop/culinary-uniforms/' },
      { name: 'أزياء أمنية', href: '/ar/shop/security-uniforms/' },
    ] },
    { name: 'خدماتنا', href: '/ar/services/', children: [
      { name: 'تصميم مخصص', href: '/ar/services/custom-design/' },
      { name: 'إدارة برامج الزي الموحد', href: '/ar/services/program-management/' },
      { name: 'الطلبات الجماعية', href: '/ar/services/bulk-ordering/' },
      { name: 'اختيار الأقمشة', href: '/ar/services/fabric-selection/' },
      { name: 'خدمات القياس', href: '/ar/services/measurement-services/' },
      { name: 'ضمان الجودة', href: '/ar/services/quality-assurance/' },
      { name: 'التصنيع', href: '/ar/services/manufacturing/' },
      { name: 'التشطيبات الفنية', href: '/ar/services/technical-finishes/' },
      { name: 'سياسات الزي الموحد', href: '/ar/services/uniform-policies/' },
      { name: 'البرامج المؤسسية', href: '/ar/services/corporate-programs/' },
    ] },
    { name: 'القطاعات', href: '/ar/industries/', children: [
      { name: 'الرعاية الصحية', href: '/ar/industries/healthcare/' },
      { name: 'الضيافة', href: '/ar/industries/hospitality/' },
      { name: 'الشركات', href: '/ar/industries/corporate/' },
      { name: 'التعليم', href: '/ar/industries/education/' },
      { name: 'الطيران', href: '/ar/industries/aviation/' },
      { name: 'المتاجر', href: '/ar/industries/retail-shops/' },
      { name: 'التصنيع', href: '/ar/industries/manufacturing/' },
      { name: 'المصانع', href: '/ar/industries/factory-industry/' },
      { name: 'توريد وتصنيع', href: '/ar/industries/supply-manufacturing/' },
      { name: 'الأمن', href: '/ar/industries/security/' },
    ] },
    { name: 'الموارد', href: '/ar/resources/', children: [
      { name: 'دليل الأقمشة', href: '/ar/resources/fabric-guide/' },
      { name: 'دليل المقاسات', href: '/ar/resources/size-guide/' },
      { name: 'دليل المشتريات', href: '/ar/resources/procurement-guide/' },
      { name: 'قوالب السياسات', href: '/ar/resources/policy-templates/' },
      { name: 'أدلة إرشادية', href: '/ar/resources/guides/' },
      { name: 'دراسات حالة', href: '/ar/resources/case-studies/' },
      { name: 'أحداث', href: '/ar/resources/events/' },
    ] },
    { name: 'المدونة', href: '/ar/blog/' },
    { name: 'اتصل بنا', href: '/ar/contact/' },
  ] : [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about/' },
    { name: 'Shop', href: '/shop/', children: [
      { name: 'Healthcare Uniforms', href: '/shop/healthcare/' },
      { name: 'Hospitality Attire', href: '/shop/hospitality-attire/' },
      { name: 'Corporate Workwear', href: '/shop/corporate-workwear/' },
      { name: 'Aviation Uniforms', href: '/shop/aviation-uniforms/' },
      { name: 'Industrial Uniforms', href: '/shop/industrial-uniforms/' },
      { name: 'Education Uniforms', href: '/shop/education-uniforms/' },
      { name: 'Culinary Uniforms', href: '/shop/culinary-uniforms/' },
      { name: 'Security Uniforms', href: '/shop/security-uniforms/' },
    ] },
    { name: 'Services', href: '/services/', children: [
      { name: 'Custom Design', href: '/services/custom-design/' },
      { name: 'Program Management', href: '/services/program-management/' },
      { name: 'Bulk Ordering', href: '/services/bulk-ordering/' },
      { name: 'Fabric Selection', href: '/services/fabric-selection/' },
      { name: 'Measurement Services', href: '/services/measurement-services/' },
      { name: 'Quality Assurance', href: '/services/quality-assurance/' },
      { name: 'Manufacturing', href: '/services/manufacturing/' },
      { name: 'Technical Finishes', href: '/services/technical-finishes/' },
      { name: 'Uniform Policies', href: '/services/uniform-policies/' },
      { name: 'Corporate Programs', href: '/services/corporate-programs/' },
    ] },
    { name: 'Industries', href: '/industries/', children: [
      { name: 'Healthcare', href: '/industries/healthcare/' },
      { name: 'Hospitality', href: '/industries/hospitality/' },
      { name: 'Corporate', href: '/industries/corporate/' },
      { name: 'Education', href: '/industries/education/' },
      { name: 'Aviation', href: '/industries/aviation/' },
      { name: 'Retail Shops', href: '/industries/retail-shops/' },
      { name: 'Manufacturing', href: '/industries/manufacturing/' },
      { name: 'Factory Industry', href: '/industries/factory-industry/' },
      { name: 'Supply Manufacturing', href: '/industries/supply-manufacturing/' },
      { name: 'Security', href: '/industries/security/' },
    ] },
    { name: 'Resources', href: '/resources/', children: [
      { name: 'Fabric Guide', href: '/resources/fabric-guide/' },
      { name: 'Size Guide', href: '/resources/size-guide/' },
      { name: 'Procurement Guide', href: '/resources/procurement-guide/' },
      { name: 'Policy Templates', href: '/resources/policy-templates/' },
      { name: 'Guides', href: '/resources/guides/' },
      { name: 'Case Studies', href: '/resources/case-studies/' },
      { name: 'Events', href: '/resources/events/' },
    ] },
    { name: 'Blog', href: '/blog/' },
    { name: 'Contact', href: '/contact/' },
  ];
  
  const menuVariants = {
    hidden: { x: isRTL ? '100%' : '-100%' },
    visible: { 
      x: 0,
      transition: { type: 'spring', stiffness: 400, damping: 30, duration: 0.2 }
    },
    exit: {
      x: isRTL ? '100%' : '-100%',
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <motion.div 
        className={`fixed top-0 bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full max-w-xs sm:max-w-sm bg-white shadow-xl overflow-y-auto h-screen`}
        style={{ position: 'fixed', top: 0, height: '100vh', visibility: 'visible', display: 'block' }}
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <div className={`flex items-center justify-between mb-6 pb-4 border-b border-neutral-200 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Link href={locale === 'ar' ? '/ar' : '/'} onClick={onClose} className="inline-block">
              <img 
                src={locale === 'ar' ? '/images/uneom-logo.png' : '/images/uneom-logo-en.png'} 
                alt="UNEOM Logo" 
                className={`h-8 sm:h-9 w-auto ${isRTL ? 'ml-1' : 'mr-1'}`} 
              />
            </Link>
            <button 
              className="p-2 text-neutral-500 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors" 
              onClick={onClose}
              aria-label={isRTL ? "إغلاق القائمة" : "Close menu"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-grow overflow-y-auto pr-2 -mr-2">
            <ul className="space-y-1 pb-4">
              {items.map((item) => (
                <li key={item.name}>
                  <MenuItem 
                    item={item} 
                    locale={locale || 'en'} 
                    isActive={isActive} 
                    onClose={onClose} 
                  />
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-neutral-200">
            <Link 
              href={locale === 'ar' ? '/ar/quote/' : '/quote/'}
              onClick={onClose}
              className={`flex items-center justify-center w-full text-center py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition duration-200 shadow-sm hover:shadow-md ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <FaQuoteRight className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu; 