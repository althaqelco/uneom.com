'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

type LocaleContent = {
  title: string;
  description: string;
  breadcrumbs: {
    name: string;
    url: string;
    current?: boolean;
  }[];
  categories: {
    title: string;
    description: string;
    image: string;
    url: string;
  }[];
  featured_title: string;
  products_title: string;
  products: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    url: string;
  }[];
  view_product: string;
  categories_title: string;
}

type ContentType = {
  en: LocaleContent;
  ar: LocaleContent;
  [key: string]: LocaleContent;
}

export default function HealthcareAccessoriesPage() {
  const [locale, setLocale] = useState('en');
  
  // Toggle language
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };
  
  // Multilingual content
  const content: ContentType = {
    en: {
      title: "UNEOM - Professional Uniforms",
      description: 'Complete your medical uniform with our premium healthcare accessories designed for comfort, functionality, and professionalism. UNEOM offers a comprehensive range of high-quality medical accessories for healthcare professionals across Saudi Arabia.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop' },
        { name: 'Healthcare Accessories', url: '#', current: true }
      ],
      categories: [
        {
          title: 'Medical Name Badges',
          description: 'Professional identification badges customized with institutional branding.',
          image: '/images/product-placeholder.jpg',
          url: '/images/product-placeholder.jpg',
          url: '/images/product-placeholder.jpg',
          url: '/images/healthcare/medical_hijab_uniform.jpg',
          url: '/images/avatar-placeholder.jpg',
          price: 'SAR 85',
          url: '/images/healthcare/medical_hijab_uniform.jpg',
          price: 'SAR 120',
          url: '/images/healthcare/medical_hijab_uniform.jpg',
          price: 'SAR 95',
          url: '/images/healthcare/medical_hijab_uniform.jpg',
          price: 'SAR 220',
          url: '/images/healthcare/medical_hijab_uniform.jpg',
          price: 'SAR 75',
          url: '/images/healthcare/medical_hijab_uniform.jpg',
          price: 'SAR 45',
          url: '/shop/healthcare-accessories/antimicrobial-badge-reel'
        }
      ],
      view_product: 'View Product',
      categories_title: 'Accessory Categories'
    },
    ar: {
      title: 'اكسسوارات الرعاية الصحية',
      description: 'أكمل الزي الطبي الخاص بك مع اكسسوارات الرعاية الصحية المتميزة المصممة للراحة والوظائف والاحترافية. تقدم UNEOM مجموعة شاملة من اكسسوارات طبية عالية الجودة للمتخصصين في الرعاية الصحية في جميع أنحاء المملكة العربية السعودية.',
      breadcrumbs: [
        { name: 'الرئيسية', url: '/ar' },
        { name: 'المتجر', url: '/ar/shop' },
        { name: 'اكسسوارات الرعاية الصحية', url: '#', current: true }
      ],
      categories: [
        {
          title: 'شارات الأسماء الطبية',
          description: 'شارات تعريفية احترافية مخصصة بالعلامة التجارية للمؤسسة.',
          image: '/images/product-placeholder.jpg',
          url: '/ar/images/product-placeholder.jpg',
          url: '/ar/images/product-placeholder.jpg',
          url: '/ar/images/healthcare/medical_hijab_uniform.jpg',
          url: '/ar/images/avatar-placeholder.jpg',
          price: 'ريال 85',
          url: '/ar/images/healthcare/medical_hijab_uniform.jpg',
          price: 'ريال 120',
          url: '/ar/images/healthcare/medical_hijab_uniform.jpg',
          price: 'ريال 95',
          url: '/ar/images/healthcare/medical_hijab_uniform.jpg',
          price: 'ريال 220',
          url: '/ar/images/healthcare/medical_hijab_uniform.jpg',
          price: 'ريال 75',
          url: '/ar/images/healthcare/medical_hijab_uniform.jpg',
          price: 'ريال 45',
          url: '/ar/shop/healthcare-accessories/antimicrobial-badge-reel'
        }
      ],
      view_product: 'عرض المنتج',
      categories_title: 'فئات الاكسسوارات'
    }
  };

  return (
    <div className="bg-white">
    
      <Container className="py-8">
        <div className="flex justify-end mb-4">
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm bg-neutral-100 rounded-md hover:bg-neutral-200"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
        
        <Breadcrumbs items={content[locale].breadcrumbs.map(item => ({
          label: item.name,
          href: item.url
        }))} />
        
        <div className="mt-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">{content[locale].title}</h1>
          <p className="text-lg text-neutral-600 max-w-3xl">{content[locale].description}</p>
        </div>
        
        {/* Categories */}
        <div className="mt-16" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <SectionHeading>{content[locale].categories_title}</SectionHeading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content[locale].categories.map((category, index) => (
              <Link 
                key={index} 
                href={category.url}
                className="group block overflow-hidden rounded-lg border border-neutral-200 hover:border-primary-300 transition"
              >
                <div className="aspect-square relative">
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{category.title}</h3>
                    <p className="text-neutral-100 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Featured Products */}
        <div className="mt-20" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <SectionHeading>{content[locale].products_title}</SectionHeading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[locale].products.map((product) => (
              <Link 
                key={product.id} 
                href={product.url}
                className="group block overflow-hidden rounded-lg border border-neutral-200 hover:border-primary-300 transition bg-white"
              >
                <div className="aspect-square relative">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-neutral-900">{product.name}</h3>
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                  </div>
                  <p className="mt-2 text-neutral-600 text-sm line-clamp-2">{product.description}</p>
                  <p className="mt-3 text-primary-600 text-sm font-medium group-hover:text-primary-700">
                    {content[locale].view_product} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Banner */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{locale === 'en' ? 'Custom Healthcare Accessories' : 'اكسسوارات رعاية صحية مخصصة'}</h2>
            <p className="text-neutral-700">{locale === 'en' 
              ? 'Contact us for customized healthcare accessories tailored to your institution\'s specific requirements. We offer institutional branding, bulk discounts, and specialized solutions for medical facilities across Saudi Arabia.' 
              : 'اتصل بنا للحصول على اكسسوارات رعاية صحية مخصصة مصممة وفقًا لمتطلبات مؤسستك المحددة. نحن نقدم العلامة التجارية المؤسسية وخصومات بالجملة وحلول متخصصة للمرافق الطبية في جميع أنحاء المملكة العربية السعودية.'}</p>
            <Link 
              href="/contact"
              className="mt-4 inline-flex bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition"
            >
              {locale === 'en' ? 'Contact Us' : 'اتصل بنا'}
            </Link>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <div className="w-48 h-48 relative">
              <Image 
                src="/images/healthcare/medical_hijab_uniform.jpg" 
                alt="Healthcare Professional"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    
      </div>
  );
} 