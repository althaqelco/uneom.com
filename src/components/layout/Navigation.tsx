"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  locale?: string;
}

const Navigation: React.FC<NavigationProps> = ({ locale = 'en' }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isRTL = locale === 'ar';
  
  // Navigation items with translations
  const navigationItems = {
    en: [
      {
        name: "Industries",
        href: "/industries/",
        dropdown: [
          { name: "Healthcare", href: "/industries/healthcare/" },
          { name: "Aviation", href: "/industries/aviation/" },
          { name: "Hospitality", href: "/industries/hospitality/" },
          { name: "Corporate", href: "/industries/corporate/" },
          { name: "Education", href: "/industries/education/" },
          { name: "Manufacturing", href: "/industries/manufacturing/" },
          { name: "Security", href: "/industries/security/" },
          { name: "Factory Industry", href: "/industries/factory-industry/" },
          { name: "Retail Shops", href: "/industries/retail-shops/" },
          { name: "Supply Manufacturing", href: "/industries/supply-manufacturing/" }
        ]
      },
      {
        name: "Services",
        href: "/services/",
        dropdown: [
          { name: "Uniform Program Management", href: "/services/program-management/" },
          { name: "Custom Design & Branding", href: "/services/custom-design/" },
          { name: "Bulk Ordering", href: "/services/bulk-ordering/" },
          { name: "Measurement Services", href: "/services/measurement-services/" },
          { name: "Corporate Uniform Policies", href: "/services/uniform-policies/" }
        ]
      },
      {
        name: "Resources",
        href: "/resources/",
        dropdown: [
          { name: "Fabric Guide", href: "/resources/fabric-guide/" },
          { name: "Size Guide", href: "/resources/size-guide/" },
          { name: "Procurement Guide", href: "/resources/procurement-guide/" },
          { name: "Uniform Policy Templates", href: "/resources/policy-templates/" },
          { name: "Blog", href: "/blog/" }
        ]
      },
      { name: "About Us", href: "/about/" },
      { name: "Contact", href: "/contact/" },
      { name: "Shop", href: "/shop/" }
    ],
    ar: [
      {
        name: "الصناعات",
        href: "/ar/industries/",
        dropdown: [
          { name: "الرعاية الصحية", href: "/ar/industries/healthcare/" },
          { name: "الطيران", href: "/ar/industries/aviation/" },
          { name: "الضيافة", href: "/ar/industries/hospitality/" },
          { name: "الشركات", href: "/ar/industries/corporate/" },
          { name: "التعليم", href: "/ar/industries/education/" },
          { name: "التصنيع", href: "/ar/industries/manufacturing/" },
          { name: "الأمن", href: "/ar/industries/security/" },
          { name: "الصناعة المصنعية", href: "/ar/industries/factory-industry/" },
          { name: "المحلات التجارية", href: "/ar/industries/retail-shops/" },
          { name: "تصنيع التوريدات", href: "/ar/industries/supply-manufacturing/" }
        ]
      },
      {
        name: "الخدمات",
        href: "/ar/services/",
        dropdown: [
          { name: "إدارة برامج الزي الموحد", href: "/ar/services/program-management/" },
          { name: "تصميم مخصص وعلامات تجارية", href: "/ar/services/custom-design/" },
          { name: "طلبات بالجملة", href: "/ar/services/bulk-ordering/" },
          { name: "خدمات القياس", href: "/ar/services/measurement-services/" },
          { name: "سياسات الزي الرسمي للشركات", href: "/ar/services/uniform-policies/" }
        ]
      },
      {
        name: "الموارد",
        href: "/ar/resources/",
        dropdown: [
          { name: "دليل الأقمشة", href: "/ar/resources/fabric-guide/" },
          { name: "دليل المقاسات", href: "/ar/resources/size-guide/" },
          { name: "دليل المشتريات", href: "/ar/resources/procurement-guide/" },
          { name: "نماذج سياسة الزي الموحد", href: "/ar/resources/policy-templates/" },
          { name: "المدونة", href: "/ar/blog/" }
        ]
      },
      { name: "من نحن", href: "/ar/about/" },
      { name: "اتصل بنا", href: "/ar/contact/" },
      { name: "المتجر", href: "/ar/shop/" }
    ]
  };
  
  // Get the items based on locale
  const items = navigationItems[locale as 'en' | 'ar'];
  
  // Initialize refs for each dropdown
  useEffect(() => {
    items.forEach((item, index) => {
      if (item.dropdown) {
        const key = `dropdown-${index}`;
        if (!dropdownRefs.current[key]) {
          dropdownRefs.current[key] = React.createRef();
        }
      }
    });
  }, [items]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeDropdown && !Object.values(dropdownRefs.current).some(ref => 
        ref.current && ref.current.contains(event.target as Node)
      )) {
        setActiveDropdown(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);
  
  // Handle dropdown open and close with delay for better user experience
  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(`dropdown-${index}`);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing to give user time to move to submenu
  };
  
  // Toggle dropdown on click
  const handleDropdownToggle = (index: number) => {
    const dropdownKey = `dropdown-${index}`;
    setActiveDropdown(prev => prev === dropdownKey ? null : dropdownKey);
  };
  
  // Check if a dropdown container or its parent button is being hovered
  const isDropdownHovered = (dropdownKey: string) => {
    return activeDropdown === dropdownKey;
  };
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };
  
  return (
    <nav className={`flex ${isRTL ? 'space-x-0 space-x-reverse space-x-6' : 'space-x-6'}`}>
      {items.map((item, index) => {
        const dropdownKey = `dropdown-${index}`;
        
        return (
          <div 
            key={index} 
            className="relative group"
            onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            ref={item.dropdown ? dropdownRefs.current[dropdownKey] : undefined}
          >
            {item.dropdown ? (
              <React.Fragment>
                <button
                  className={`inline-flex items-center px-1 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href) || isDropdownHovered(dropdownKey)
                      ? 'text-primary-700 font-semibold'
                      : 'text-neutral-800 hover:text-primary-600'
                  }`}
                  onClick={() => handleDropdownToggle(index)}
                  aria-expanded={isDropdownHovered(dropdownKey)}
                  aria-controls={dropdownKey}
                >
                  {item.name}
                  <svg
                    className={`h-4 w-4 ${isRTL ? 'mr-1' : 'ml-1'} transform transition-transform duration-200 ${
                      isDropdownHovered(dropdownKey) ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
                <div
                  id={dropdownKey}
                  className={`absolute z-50 ${isRTL ? '-right-4' : '-left-4'} mt-1 w-64 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black/5 focus:outline-none overflow-hidden transform transition-all duration-200 ease-in-out ${isRTL ? 'origin-top-right' : 'origin-top-left'} ${
                    isDropdownHovered(dropdownKey) 
                      ? 'opacity-100 translate-y-0 visible block'
                      : 'opacity-0 -translate-y-2 invisible hidden'
                  }`}
                >
                  <div className="py-2">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className={`block px-6 py-2.5 text-sm ${isRTL ? 'text-right' : 'text-left'} text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <Link
                href={item.href}
                className={`inline-flex items-center px-1 py-2 text-base transition-colors duration-200 ${
                  item.name === "Shop" || item.name === "المتجر"
                    ? 'text-primary-600 font-bold'
                    : isActive(item.href)
                      ? 'text-primary-700 font-semibold'
                      : 'text-neutral-800 hover:text-primary-600 font-medium'
                }`}
              >
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation; 