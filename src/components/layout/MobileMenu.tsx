"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';

interface MobileMenuProps {
  locale?: string;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ locale = 'en', onClose }) => {
  const pathname = usePathname();
  const isRTL = locale === 'ar';
  
  // Verificar si una ruta está activa
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };
  
  // Generar elementos de menú basados en el idioma
  const items = locale === 'ar' ? [
    { name: 'الرئيسية', href: '/ar' },
    { name: 'من نحن', href: '/ar/about' },
    { name: 'المتجر', href: '/ar/shop', children: [
      { name: 'أزياء المستشفيات', href: '/ar/shop/healthcare' },
      { name: 'الأزياء الفندقية', href: '/ar/shop/hospitality-attire' },
      { name: 'الزي الرسمي للشركات', href: '/ar/shop/corporate-workwear' },
      { name: 'أزياء الطيران', href: '/ar/shop/aviation-uniforms' },
      { name: 'ملابس العمل الصناعية', href: '/ar/shop/industrial-uniforms' },
      { name: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
      { name: 'ملابس مطاعم', href: '/ar/shop/culinary-uniforms' },
      { name: 'أزياء أمنية', href: '/ar/shop/security-uniforms' },
    ] },
    { name: 'خدماتنا', href: '/ar/services', children: [
      { name: 'تصميم مخصص', href: '/ar/services/custom-design' },
      { name: 'إدارة برامج الزي الموحد', href: '/ar/services/program-management' },
      { name: 'الطلبات الجماعية', href: '/ar/services/bulk-ordering' },
      { name: 'اختيار الأقمشة', href: '/ar/services/fabric-selection' },
      { name: 'خدمات القياس', href: '/ar/services/measurement-services' },
      { name: 'ضمان الجودة', href: '/ar/services/quality-assurance' },
      { name: 'التصنيع', href: '/ar/services/manufacturing' },
      { name: 'التشطيبات الفنية', href: '/ar/services/technical-finishes' },
      { name: 'سياسات الزي الموحد', href: '/ar/services/uniform-policies' },
      { name: 'البرامج المؤسسية', href: '/ar/services/corporate-programs' },
    ] },
    { name: 'القطاعات', href: '/ar/industries', children: [
      { name: 'الرعاية الصحية', href: '/ar/industries/healthcare' },
      { name: 'الضيافة', href: '/ar/industries/hospitality' },
      { name: 'الشركات', href: '/ar/industries/corporate' },
      { name: 'التعليم', href: '/ar/industries/education' },
      { name: 'الطيران', href: '/ar/industries/aviation' },
      { name: 'المتاجر', href: '/ar/industries/retail-shops' },
      { name: 'التصنيع', href: '/ar/industries/manufacturing' },
      { name: 'المصانع', href: '/ar/industries/factory-industry' },
      { name: 'توريد وتصنيع', href: '/ar/industries/supply-manufacturing' },
      { name: 'الأمن', href: '/ar/industries/security' },
    ] },
    { name: 'الموارد', href: '/ar/resources', children: [
      { name: 'دليل الأقمشة', href: '/ar/resources/fabric-guide' },
      { name: 'دليل المقاسات', href: '/ar/resources/size-guide' },
      { name: 'دليل المشتريات', href: '/ar/resources/procurement-guide' },
      { name: 'قوالب السياسات', href: '/ar/resources/policy-templates' },
      { name: 'أدلة إرشادية', href: '/ar/resources/guides' },
      { name: 'دراسات حالة', href: '/ar/resources/case-studies' },
      { name: 'أحداث', href: '/ar/resources/events' },
    ] },
    { name: 'المدونة', href: '/ar/blog' },
    { name: 'اتصل بنا', href: '/ar/contact' },
  ] : [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/shop', children: [
      { name: 'Healthcare Uniforms', href: '/shop/healthcare' },
      { name: 'Hospitality Attire', href: '/shop/hospitality-attire' },
      { name: 'Corporate Workwear', href: '/shop/corporate-workwear' },
      { name: 'Aviation Uniforms', href: '/shop/aviation-uniforms' },
      { name: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
      { name: 'Education Uniforms', href: '/shop/education-uniforms' },
      { name: 'Culinary Uniforms', href: '/shop/culinary-uniforms' },
      { name: 'Security Uniforms', href: '/shop/security-uniforms' },
    ] },
    { name: 'Services', href: '/services', children: [
      { name: 'Custom Design', href: '/services/custom-design' },
      { name: 'Program Management', href: '/services/program-management' },
      { name: 'Bulk Ordering', href: '/services/bulk-ordering' },
      { name: 'Fabric Selection', href: '/services/fabric-selection' },
      { name: 'Measurement Services', href: '/services/measurement-services' },
      { name: 'Quality Assurance', href: '/services/quality-assurance' },
      { name: 'Manufacturing', href: '/services/manufacturing' },
      { name: 'Technical Finishes', href: '/services/technical-finishes' },
      { name: 'Uniform Policies', href: '/services/uniform-policies' },
      { name: 'Corporate Programs', href: '/services/corporate-programs' },
    ] },
    { name: 'Industries', href: '/industries', children: [
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Hospitality', href: '/industries/hospitality' },
      { name: 'Corporate', href: '/industries/corporate' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Aviation', href: '/industries/aviation' },
      { name: 'Retail Shops', href: '/industries/retail-shops' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Factory Industry', href: '/industries/factory-industry' },
      { name: 'Supply Manufacturing', href: '/industries/supply-manufacturing' },
      { name: 'Security', href: '/industries/security' },
    ] },
    { name: 'Resources', href: '/resources', children: [
      { name: 'Fabric Guide', href: '/resources/fabric-guide' },
      { name: 'Size Guide', href: '/resources/size-guide' },
      { name: 'Procurement Guide', href: '/resources/procurement-guide' },
      { name: 'Policy Templates', href: '/resources/policy-templates' },
      { name: 'Guides', href: '/resources/guides' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Events', href: '/resources/events' },
    ] },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  
  // Animación para el menú - entrada suave
  const menuVariants = {
    hidden: { x: isRTL ? '-100%' : '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3
      } 
    },
    exit: {
      x: isRTL ? '-100%' : '100%',
      transition: {
        ease: 'easeIn',
        duration: 0.2
      }
    }
  };

  // Efectos de animación para los elementos del menú
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.3
      }
    })
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-80 bg-white shadow-xl overflow-y-auto`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        onClick={(e) => e.stopPropagation()}
        style={{ textAlign: isRTL ? 'right' : 'left' }}
    >
      <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href={locale === 'ar' ? '/ar' : '/'} onClick={onClose}>
              <img 
                src="/images/logo.png" 
                alt="UNEOM Logo" 
                className="h-8 w-auto" 
              />
            </Link>
          <button 
              className="p-2 text-neutral-500 hover:text-neutral-700"
            onClick={onClose}
            aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
          {/* Navegación principal */}
          <nav className={isRTL ? 'text-right' : 'text-left'}>
          <motion.ul 
              className="space-y-1"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
              }
            }}
          >
            {items.map((item, index) => (
              <motion.li 
                  key={item.name} 
                  custom={index}
                  variants={itemVariants}
                  className="py-1"
                >
                  {item.children ? (
                    <div className="py-2 px-2 font-medium text-neutral-900">
                      {item.name}
                      <div className="mt-2 pl-4 border-l-2 border-neutral-100 space-y-1">
                        {item.children.map((child) => (
                                <Link
                            key={child.name}
                            href={child.href}
                                  onClick={onClose}
                            className={`block py-2 px-2 text-sm ${
                              isActive(child.href) 
                                ? 'text-primary-600 font-medium' 
                                : 'text-neutral-600 hover:text-neutral-900'
                            }`}
                          >
                            {child.name}
                                </Link>
                        ))}
                      </div>
                    </div>
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
        
          {/* Request Quote Button */}
          <div className="mt-6 pt-4 border-t border-gray-200">
          <Link 
              href={locale === 'ar' ? '/ar/quote' : '/quote'}
            onClick={onClose}
              className={`block w-full text-center py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition duration-200 flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <FaQuoteRight className={isRTL ? 'ml-2' : 'mr-2'} />
              {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
          </Link>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu; 