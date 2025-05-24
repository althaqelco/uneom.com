'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { getTranslation } from '@/lib/i18n';
import { getLocalizedImagePath } from '@/lib/utils/imageLoader';
import SchemaMarkup from '@/components/SchemaMarkup';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ClientShopPage() {
  // Get Arabic translations
  const t = getTranslation('ar');
  
  // Prevent redirect loops
  useEffect(() => {
    // Get the current URL
    const url = new URL(window.location.href);
    
    // Check if we're in a local development environment
    const isLocalhost = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    
    // If there's a trailing slash and we're in a development environment
    if (url.pathname.endsWith('/') && isLocalhost) {
      // Store a flag in sessionStorage to prevent infinite redirects
      const redirectCount = parseInt(sessionStorage.getItem('shopRedirectCount') || '0');
      
      if (redirectCount > 3) {
        console.error('Too many redirects detected. Stopping redirect loop.');
        sessionStorage.removeItem('shopRedirectCount');
        return;
      }
      
      sessionStorage.setItem('shopRedirectCount', (redirectCount + 1).toString());
    } else {
      // Reset the counter if we're not in a redirect situation
      sessionStorage.removeItem('shopRedirectCount');
    }
  }, []);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Category filter state
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Product categories
  const categories = [
    { id: 'all', name: 'جميع المنتجات' },
    { id: 'medical-scrubs', name: 'الأزياء الطبية', url: '/ar/shop/medical-scrubs' },
    { id: 'aviation-uniforms', name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' },
    { id: 'hospitality-attire', name: 'أزياء الضيافة', url: '/ar/shop/hospitality-attire' },
    { id: 'corporate-workwear', name: 'أزياء الشركات', url: '/ar/shop/corporate-workwear' },
    { id: 'security-uniforms', name: 'أزياء الأمن', url: '/ar/shop/security-uniforms' },
    { id: 'education-uniforms', name: 'أزياء التعليم', url: '/ar/shop/education-uniforms' }
  ];
  
  // Featured product collections
  const featuredCollections = [
    {
      id: 'medical-scrubs',
      title: 'الأزياء الطبية',
      description: 'ملابس طبية مريحة وعملية لجميع متخصصي الرعاية الصحية',
      image: '/images/avatar-placeholder.jpg',
      url: '/ar/shop/medical-scrubs',
    },
    {
      id: 'aviation-uniforms',
      title: 'أزياء الطيران',
      description: 'أزياء أنيقة لطاقم الطائرة والطيارين وموظفي المطار',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/aviation-uniforms',
    },
    {
      id: 'hospitality-attire',
      title: 'أزياء الضيافة',
      description: 'ملابس احترافية للعاملين في الفنادق والمطاعم',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/hospitality-attire',
    },
    {
      id: 'corporate-workwear',
      title: 'أزياء الشركات',
      description: 'ملابس أنيقة وعملية للمكاتب والشركات',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/corporate-workwear',
    },
    {
      id: 'security-uniforms',
      title: 'أزياء الأمن',
      description: 'أزياء متينة للأمن والحراسة وفرق الاستجابة',
      image: '/images/avatar-placeholder.jpg',
      url: '/ar/shop/security-uniforms',
    },
    {
      id: 'education-uniforms',
      title: 'أزياء التعليم',
      description: 'أزياء مدرسية وجامعية للطلاب والمعلمين',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/education-uniforms',
    }
  ];
  
  // Popular products
  const popularProducts = [
    {
      id: 'premium-medical-scrubs',
      name: 'ملابس طبية متميزة',
      category: 'medical-scrubs',
      image: '/images/default-placeholder.jpg',
      price: '١٢٠ ر.س',
      url: '/ar/shop/medical-scrubs/premium-medical-scrubs',
    },
    {
      id: 'pilot-uniform',
      name: 'زي الطيار',
      category: 'aviation-uniforms',
      image: '/images/default-placeholder.jpg',
      price: '٦٥٠ ر.س',
      url: '/ar/shop/aviation-uniforms/pilot-uniform',
    },
    {
      id: 'chef-uniform',
      name: 'زي الطاهي',
      category: 'hospitality-attire',
      image: '/images/default-placeholder.jpg',
      price: '٢٢٠ ر.س',
      url: '/ar/shop/hospitality-attire/chef-uniform',
    },
    {
      id: 'corporate-suit',
      name: 'بدلة شركات',
      category: 'corporate-workwear',
      image: '/images/default-placeholder.jpg',
      price: '٥٥٠ ر.س',
      url: '/ar/shop/corporate-workwear/corporate-suit',
    },
    {
      id: 'security-uniform',
      name: 'زي أمن',
      category: 'security-uniforms',
      image: '/images/default-placeholder.jpg',
      price: '٣٠٠ ر.س',
      url: '/ar/shop/security-uniforms/security-uniform',
    },
    {
      id: 'nurse-uniform',
      name: 'زي تمريض',
      category: 'medical-scrubs',
      image: '/images/default-placeholder.jpg',
      price: '١٣٥ ر.س',
      url: '/ar/shop/medical-scrubs/nurse-uniform',
    },
    {
      id: 'flight-attendant-uniform',
      name: 'زي مضيف طيران',
      category: 'aviation-uniforms',
      image: '/images/product-placeholder.jpg',
      price: '٤٨٠ ر.س',
      url: '/ar/shop/aviation-uniforms/flight-attendant-uniform',
    },
    {
      id: 'hotel-staff-uniform',
      name: 'زي موظفي الفندق',
      category: 'hospitality-attire',
      image: '/images/default-placeholder.jpg Staff_Uniform.png',
      price: '٢٦٠ ر.س',
      url: '/ar/shop/hospitality-attire/hotel-staff-uniform',
    }
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? popularProducts
    : popularProducts.filter(product => product.category === activeCategory);
  
  // Schema.org data for structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'متجر يونيوم',
    description: 'متجر يونيوم للأزياء الموحدة المهنية في المملكة العربية السعودية',
    url: 'https://uneom.com/ar/shop',
    telephone: '+966500000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'طريق الملك فهد',
      addressLocality: 'الرياض',
      addressRegion: 'الرياض',
      postalCode: '12345',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136',
      longitude: '46.6753'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
      ],
      opens: '09:00',
      closes: '17:00'
    }
  };
  
  return (
    <div dir="rtl">
      {/* Structured data for SEO */}
      <SchemaMarkup type="organization" data={schemaData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={getLocalizedImagePath('/images/shop-hero.webp', 'ar')}
            alt="متجر يونيوم للأزياء الموحدة"
            fill
            className="object-cover"
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المتجر', href: '/ar/shop' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
            <motion.div 
              className="relative z-10 max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">متجر يونيوم للأزياء الموحدة</h1>
              <p className="text-xl opacity-90 mb-8">
              تشكيلة واسعة من الأزياء المهنية عالية الجودة للقطاعات المختلفة في المملكة العربية السعودية
              </p>
                <Button 
              href="#categories"
                  variant="secondary" 
                  size="lg"
                >
              استكشف المجموعات
                </Button>
            </motion.div>
        </Container>
      </section>
      
      {/* Featured Collections */}
      <section className="py-16 bg-white" id="categories">
        <Container>
          <SectionHeading subtitle="اكتشف المنتجات حسب القطاع">
            مجموعاتنا المميزة
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredCollections.map((collection, index) => (
            <motion.div
                key={collection.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
                  >
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                  <p className="text-white/80 mb-4 line-clamp-2">{collection.description}</p>
                  <Link
                    href={collection.url}
                    className="inline-block text-white font-medium hover:underline"
                  >
                    عرض المجموعة →
                  </Link>
                </div>
                </motion.div>
              ))}
          </div>
        </Container>
      </section>
      
      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading subtitle="اكتشف منتجاتنا المفضلة">
            المنتجات الرائجة
          </SectionHeading>
            
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                className={`px-4 py-2 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
          {/* Products Grid */}
            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={fadeIn}
                >
                  <Link href={product.url} className="block">
                  <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                      className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-primary-600 font-bold">{product.price}</p>
                    <Button 
                      href={product.url} 
                      variant="outline" 
                      size="sm"
                      className="w-full mt-3"
                        >
                      عرض التفاصيل
                    </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
        </Container>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading subtitle="خدمات متميزة لعملائنا">
            ما الذي يميزنا
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
              className="text-center"
              variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
              <div className="rounded-full bg-primary-100 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Image
                  src="/icons/customize.svg"
                  alt="تخصيص كامل"
                  width={40}
                  height={40}
                  className="text-primary-600"
                  />
                </div>
              <h3 className="text-xl font-bold mb-2">تخصيص كامل</h3>
              <p className="text-neutral-600">
                نقدم خدمات تخصيص شاملة تتيح لك تعديل أي منتج ليناسب هويتك التجارية ومتطلباتك
              </p>
              </motion.div>
              
              <motion.div
              className="text-center"
              variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <div className="rounded-full bg-primary-100 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/quality.svg"
                  alt="جودة عالية"
                  width={40}
                  height={40}
                  className="text-primary-600"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-neutral-600">
                نستخدم أفضل الخامات والتقنيات لضمان منتجات عالية الجودة تدوم طويلاً
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-primary-100 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/delivery.svg"
                  alt="شحن سريع"
                  width={40}
                  height={40}
                  className="text-primary-600"
                />
                  </div>
              <h3 className="text-xl font-bold mb-2">شحن سريع</h3>
              <p className="text-neutral-600">
                خدمة توصيل سريعة وموثوقة إلى جميع أنحاء المملكة العربية السعودية
              </p>
              </motion.div>
            </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
            <div className="text-center max-w-3xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل تبحث عن حلول الأزياء الموحدة لمؤسستك؟
              </h2>
              <p className="text-xl mb-8 text-white/80">
                تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات مؤسستك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/ar/contact" variant="secondary" size="lg">
                  تواصل معنا
                </Button>
                <Button href="/ar/quote" variant="outline" size="lg">
                  طلب عرض سعر
                </Button>
              </div>
            </motion.div>
            </div>
        </Container>
      </section>
    </div>
  );
} 