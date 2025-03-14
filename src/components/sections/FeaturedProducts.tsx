"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface FeaturedProductsProps {
  locale: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  categoryLabel: string;
  href: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ locale }) => {
  // Ensure locale is valid
  const validLocale = locale === 'ar' ? 'ar' : 'en';
  
  // Content based on locale
  const content = {
    en: {
      title: 'Our Top Selling Products',
      subtitle: 'Quality uniforms designed for comfort and professionalism',
      buttonText: 'View All Products'
    },
    ar: {
      title: 'منتجاتنا الأكثر مبيعًا',
      subtitle: 'زي موحد عالي الجودة مصمم للراحة والاحترافية',
      buttonText: 'عرض جميع المنتجات'
    }
  };

  // Sample featured products data
  const products: Record<string, Product[]> = {
    en: [
      {
        id: 'p1',
        name: 'Executive Office Wear',
        description: 'Professional corporate uniforms designed for Saudi executives and office staff.',
        image: '/images/products/corporate-uniform.jpg',
        category: 'corporate',
        categoryLabel: 'Corporate',
        href: '/shop/corporate-workwear'
      },
      {
        id: 'p2',
        name: 'Healthcare Scrubs',
        description: 'Comfortable and durable medical scrubs for healthcare professionals.',
        image: '/images/products/healthcare-uniform.jpg',
        category: 'healthcare',
        categoryLabel: 'Healthcare',
        href: '/shop/medical-scrubs'
      },
      {
        id: 'p3',
        name: 'Hospitality Staff Uniforms',
        description: 'Elegant and practical uniforms for hotels, restaurants, and hospitality services.',
        image: '/images/products/hospitality-uniform.jpg',
        category: 'hospitality',
        categoryLabel: 'Hospitality',
        href: '/shop/hospitality-attire'
      },
      {
        id: 'p4',
        name: 'Industrial Workwear',
        description: 'Durable and safety-compliant workwear for industrial environments.',
        image: '/images/products/industrial-uniform.jpg',
        category: 'industrial',
        categoryLabel: 'Industrial',
        href: '/shop/industrial-uniforms'
      }
    ],
    ar: [
      {
        id: 'p1',
        name: 'ملابس المكاتب التنفيذية',
        description: 'زي موحد احترافي للشركات مصمم للتنفيذيين وموظفي المكاتب السعوديين.',
        image: '/images/products/corporate-uniform.jpg',
        category: 'corporate',
        categoryLabel: 'الشركات',
        href: '/ar/shop/corporate-workwear'
      },
      {
        id: 'p2',
        name: 'الزي الطبي',
        description: 'زي طبي مريح ومتين لمتخصصي الرعاية الصحية.',
        image: '/images/products/healthcare-uniform.jpg',
        category: 'healthcare',
        categoryLabel: 'الرعاية الصحية',
        href: '/ar/shop/medical-scrubs'
      },
      {
        id: 'p3',
        name: 'زي موظفي الضيافة',
        description: 'زي أنيق وعملي للفنادق والمطاعم وخدمات الضيافة.',
        image: '/images/products/hospitality-uniform.jpg',
        category: 'hospitality',
        categoryLabel: 'الضيافة',
        href: '/ar/shop/hospitality-attire'
      },
      {
        id: 'p4',
        name: 'ملابس العمل الصناعية',
        description: 'ملابس عمل متينة ومتوافقة مع معايير السلامة للبيئات الصناعية.',
        image: '/images/products/industrial-uniform.jpg',
        category: 'industrial',
        categoryLabel: 'الصناعة',
        href: '/ar/shop/industrial-uniforms'
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeading
          subtitle={content[validLocale].subtitle}
          centered={validLocale !== 'ar'}
        >
          {content[validLocale].title}
        </SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products[validLocale].map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <Link href={product.href} className="block relative">
                <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.categoryLabel}
                  </span>
                </div>
              </Link>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  <Link 
                    href={product.href} 
                    className="text-neutral-900 hover:text-primary-600 transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Link 
                  href={product.href}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                >
                  {validLocale === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-1 ${validLocale === 'ar' ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products Button */}
        <div className="mt-12 text-center">
          <Button 
            href="/products"
            variant="primary"
            size="lg"
          >
            {content[validLocale].buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts; 