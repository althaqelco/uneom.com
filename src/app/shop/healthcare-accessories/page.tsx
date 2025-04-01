'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

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
      title: 'Healthcare Accessories',
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
          url: '/shop/healthcare-accessories/medical-name-badges'
        },
        {
          title: 'Stethoscope Holders',
          description: 'Convenient holders designed for secure and hygienic stethoscope storage.',
          image: '/images/product-placeholder.jpg',
          url: '/shop/healthcare-accessories/stethoscope-holders'
        },
        {
          title: 'Instrument Pouches',
          description: 'Multi-compartment pouches for organized medical instrument storage.',
          image: '/images/product-placeholder.jpg',
          url: '/shop/healthcare-accessories/instrument-pouches'
        },
        {
          title: 'Medical Footwear',
          description: 'Comfortable and slip-resistant footwear for healthcare professionals.',
          image: '/images/default-placeholder.jpg',
          url: '/shop/healthcare-accessories/medical-footwear'
        }
      ],
      featured_title: 'Featured Healthcare Accessories',
      products_title: 'Essential Medical Accessories',
      products: [
        {
          id: 'premium-stethoscope-case',
          name: 'Premium Stethoscope Case',
          description: 'Protective stethoscope case with antimicrobial lining and personalization options.',
          image: '/images/avatar-placeholder.jpg',
          price: 'SAR 85',
          url: '/shop/healthcare-accessories/premium-stethoscope-case'
        },
        {
          id: 'digital-name-badge',
          name: 'Digital Smart Name Badge',
          description: 'Advanced digital badge with programmable displays and institutional branding options.',
          image: '/images/default-placeholder.jpg',
          price: 'SAR 120',
          url: '/shop/healthcare-accessories/digital-name-badge'
        },
        {
          id: 'advanced-instrument-pouch',
          name: 'Advanced Instrument Pouch',
          description: 'Multi-compartment pouch with antimicrobial treatment for secure tool organization.',
          image: '/images/default-placeholder.jpg',
          price: 'SAR 95',
          url: '/shop/healthcare-accessories/advanced-instrument-pouch'
        },
        {
          id: 'comfort-pro-medical-clogs',
          name: 'Comfort Pro Medical Clogs',
          description: 'Ergonomic, slip-resistant clogs designed for extended wear in healthcare settings.',
          image: '/images/default-placeholder.jpg',
          price: 'SAR 220',
          url: '/shop/healthcare-accessories/comfort-pro-medical-clogs'
        },
        {
          id: 'professional-id-holder',
          name: 'Professional ID Holder Kit',
          description: 'Complete ID badge solution with retractable holder and protective covering.',
          image: '/images/default-placeholder.jpg',
          price: 'SAR 75',
          url: '/shop/healthcare-accessories/professional-id-holder'
        },
        {
          id: 'antimicrobial-badge-reel',
          name: 'Antimicrobial Badge Reel',
          description: 'Badge reel with antimicrobial surface treatment and extended cord for convenience.',
          image: '/images/default-placeholder.jpg',
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
          url: '/ar/shop/healthcare-accessories/medical-name-badges'
        },
        {
          title: 'حاملات السماعة الطبية',
          description: 'حاملات مريحة مصممة للتخزين الآمن والصحي للسماعة الطبية.',
          image: '/images/product-placeholder.jpg',
          url: '/ar/shop/healthcare-accessories/stethoscope-holders'
        },
        {
          title: 'حقائب الأدوات',
          description: 'حقائب متعددة الأقسام لتنظيم الأدوات الطبية.',
          image: '/images/product-placeholder.jpg',
          url: '/ar/shop/healthcare-accessories/instrument-pouches'
        },
        {
          title: 'الأحذية الطبية',
          description: 'أحذية مريحة ومقاومة للانزلاق للمتخصصين في الرعاية الصحية.',
          image: '/images/default-placeholder.jpg',
          url: '/ar/shop/healthcare-accessories/medical-footwear'
        }
      ],
      featured_title: 'اكسسوارات الرعاية الصحية المميزة',
      products_title: 'اكسسوارات طبية أساسية',
      products: [
        {
          id: 'premium-stethoscope-case',
          name: 'حافظة السماعة الطبية الفاخرة',
          description: 'حافظة واقية للسماعة الطبية مع بطانة مضادة للميكروبات وخيارات التخصيص.',
          image: '/images/avatar-placeholder.jpg',
          price: 'ريال 85',
          url: '/ar/shop/healthcare-accessories/premium-stethoscope-case'
        },
        {
          id: 'digital-name-badge',
          name: 'شارة الاسم الذكية الرقمية',
          description: 'شارة رقمية متقدمة مع شاشات قابلة للبرمجة وخيارات العلامات التجارية المؤسسية.',
          image: '/images/default-placeholder.jpg',
          price: 'ريال 120',
          url: '/ar/shop/healthcare-accessories/digital-name-badge'
        },
        {
          id: 'advanced-instrument-pouch',
          name: 'حقيبة أدوات متقدمة',
          description: 'حقيبة متعددة الأقسام مع معالجة مضادة للميكروبات لتنظيم الأدوات بشكل آمن.',
          image: '/images/default-placeholder.jpg',
          price: 'ريال 95',
          url: '/ar/shop/healthcare-accessories/advanced-instrument-pouch'
        },
        {
          id: 'comfort-pro-medical-clogs',
          name: 'أحذية طبية مريحة برو',
          description: 'أحذية مريحة ومقاومة للانزلاق مصممة للارتداء الطويل في بيئات الرعاية الصحية.',
          image: '/images/default-placeholder.jpg',
          price: 'ريال 220',
          url: '/ar/shop/healthcare-accessories/comfort-pro-medical-clogs'
        },
        {
          id: 'professional-id-holder',
          name: 'طقم حامل بطاقة هوية احترافي',
          description: 'حل كامل لشارة الهوية مع حامل قابل للسحب وغطاء واقي.',
          image: '/images/default-placeholder.jpg',
          price: 'ريال 75',
          url: '/ar/shop/healthcare-accessories/professional-id-holder'
        },
        {
          id: 'antimicrobial-badge-reel',
          name: 'بكرة شارة مضادة للميكروبات',
          description: 'بكرة شارة مع معالجة سطحية مضادة للميكروبات وحبل ممتد للراحة.',
          image: '/images/default-placeholder.jpg',
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
                src="/images/default-placeholder.jpg" 
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