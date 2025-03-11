'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import RTLWrapper from '@/components/layout/RTLWrapper';
import { getTranslation } from '@/lib/i18n';
import { getLocalizedImagePath } from '@/lib/utils/imageLoader';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function ClientShopPage() {
  // Get Arabic translations
  const t = getTranslation('ar');
  
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
      image: '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',
      url: '/ar/shop/medical-scrubs',
    },
    {
      id: 'aviation-uniforms',
      title: 'أزياء الطيران',
      description: 'أزياء أنيقة لطاقم الطائرة والطيارين وموظفي المطار',
      image: '/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg',
      url: '/ar/shop/aviation-uniforms',
    },
    {
      id: 'hospitality-attire',
      title: 'أزياء الضيافة',
      description: 'ملابس احترافية للعاملين في الفنادق والمطاعم',
      image: '/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg',
      url: '/ar/shop/hospitality-attire',
    },
    {
      id: 'corporate-workwear',
      title: 'أزياء الشركات',
      description: 'ملابس أنيقة وعملية للمكاتب والشركات',
      image: '/images/modern-arabic-businessman-SBI-300984397.jpg',
      url: '/ar/shop/corporate-workwear',
    },
    {
      id: 'security-uniforms',
      title: 'أزياء الأمن',
      description: 'أزياء متينة للأمن والحراسة وفرق الاستجابة',
      image: '/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg',
      url: '/ar/shop/security-uniforms',
    },
    {
      id: 'education-uniforms',
      title: 'أزياء التعليم',
      description: 'أزياء مدرسية وجامعية للطلاب والمعلمين',
      image: '/images/back-to-elementary-school-concept-children-hold-h-2024-11-29-15-57-59-utc.jpg',
      url: '/ar/shop/education-uniforms',
    }
  ];
  
  // Popular products
  const popularProducts = [
    {
      id: 'premium-medical-scrubs',
      name: 'ملابس طبية متميزة',
      category: 'medical-scrubs',
      image: '/images/PremiumـMedicalـScrubs.png',
      price: '١٢٠ ر.س',
      url: '/ar/shop/medical-scrubs/premium-medical-scrubs',
    },
    {
      id: 'pilot-uniform',
      name: 'زي الطيار',
      category: 'aviation-uniforms',
      image: '/images/the-aviators-stance-2024-11-16-08-18-21-utc.jpg',
      price: '٦٥٠ ر.س',
      url: '/ar/shop/aviation-uniforms/pilot-uniform',
    },
    {
      id: 'chef-uniform',
      name: 'زي الطاهي',
      category: 'hospitality-attire',
      image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
      price: '٢٢٠ ر.س',
      url: '/ar/shop/hospitality-attire/chef-uniform',
    },
    {
      id: 'corporate-suit',
      name: 'بدلة شركات',
      category: 'corporate-workwear',
      image: '/images/arabian-businessman-in-the-middle-east-SBI-300984430.jpg',
      price: '٥٥٠ ر.س',
      url: '/ar/shop/corporate-workwear/corporate-suit',
    },
    {
      id: 'security-uniform',
      name: 'زي أمن',
      category: 'security-uniforms',
      image: '/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg',
      price: '٣٠٠ ر.س',
      url: '/ar/shop/security-uniforms/security-uniform',
    },
    {
      id: 'nurse-uniform',
      name: 'زي تمريض',
      category: 'medical-scrubs',
      image: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
      price: '١٣٥ ر.س',
      url: '/ar/shop/medical-scrubs/nurse-uniform',
    },
    {
      id: 'flight-attendant-uniform',
      name: 'زي مضيف طيران',
      category: 'aviation-uniforms',
      image: '/images/Airline_Crew_Uniform.png',
      price: '٤٨٠ ر.س',
      url: '/ar/shop/aviation-uniforms/flight-attendant-uniform',
    },
    {
      id: 'hotel-staff-uniform',
      name: 'زي موظفي الفندق',
      category: 'hospitality-attire',
      image: '/images/Luxury_Hotel Staff_Uniform.png',
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
    name: 'مجموعة الأزياء المهنية',
    description: 'تشكيلة واسعة من الأزياء المهنية والموحدة عالية الجودة للقطاعات المختلفة',
    url: 'https://uneom.com/ar/shop',
    image: 'https://uneom.com/images/uneom_hero.jpg',
    locale: 'ar'
  };
  
  return (
    <>
      {/* Schema.org structured data */}
      <SchemaMarkup type="Product" data={schemaData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg"
            alt="متجر يونيوم - المورد الرائد للزي الموحد في المملكة العربية السعودية"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <RTLWrapper locale="ar">
            <Breadcrumbs locale="ar" className="mb-8 text-white/90" />
          
            <motion.div 
              className="relative z-10 max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                متجر الأزياء المهنية
              </h1>
              <p className="text-xl opacity-90 mb-8">
                تشكيلة واسعة من الأزياء المهنية عالية الجودة للقطاعات المختلفة
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  href="/ar/quote" 
                  variant="secondary" 
                  size="lg"
                >
                  طلب عرض سعر
                </Button>
                <Button 
                  href="#categories" 
                  variant="outline" 
                  size="lg"
                >
                  استعرض الفئات
                </Button>
              </div>
            </motion.div>
          </RTLWrapper>
        </Container>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="py-16 bg-neutral-50">
        <Container>
          <RTLWrapper locale="ar">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>مجموعات المنتجات</SectionHeading>
              <p className="text-lg text-neutral-700">
                استكشف مجموعاتنا المتخصصة من الأزياء المهنية لكل قطاع
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredCollections.map((collection) => (
                <motion.div
                  key={collection.id}
                  variants={fadeIn}
                >
                  <Link 
                    href={collection.url}
                    className="group block relative aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-xl font-bold text-white">{collection.title}</h3>
                        <p className="mt-2 text-white/80 text-sm line-clamp-2">
                          {collection.description}
                        </p>
                        <div className="mt-4 text-white/90 flex items-center">
                          <span className="text-sm">عرض المجموعة</span>
                          <svg 
                            className="mr-2 h-4 w-4 rtl-flip" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </RTLWrapper>
        </Container>
      </section>
      
      {/* Popular Products Section */}
      <section className="py-16">
        <Container>
          <RTLWrapper locale="ar">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>المنتجات الشائعة</SectionHeading>
              <p className="text-lg text-neutral-700">
                استكشف أكثر منتجاتنا مبيعًا من الأزياء المهنية
              </p>
            </motion.div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeIn}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Link href={product.url} className="block">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className="text-sm text-primary-600 font-medium mb-1">
                        {categories.find(c => c.id === product.category)?.name}
                      </div>
                      <h3 className="text-lg font-bold mb-1">
                        {product.name}
                      </h3>
                      <div className="text-neutral-900 font-semibold">
                        {product.price}
                      </div>
                      
                      <div className="mt-4">
                        <button
                          className="w-full bg-primary-100 text-primary-800 hover:bg-primary-200 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          أضف إلى عرض السعر
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {activeCategory !== 'all' && (
              <div className="text-center mt-8">
                <Link 
                  href={categories.find(c => c.id === activeCategory)?.url || '#'}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  عرض كل منتجات {categories.find(c => c.id === activeCategory)?.name}
                  <svg 
                    className="mr-2 h-4 w-4 rtl-flip" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </RTLWrapper>
        </Container>
      </section>
      
      {/* Custom Orders Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <RTLWrapper locale="ar">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
                    alt="الطلبات المخصصة من يونيوم"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <SectionHeading>حلول مخصصة لمؤسستك</SectionHeading>
                <div className="space-y-4 text-lg">
                  <p>
                    هل تبحث عن أزياء مصممة خصيصًا لتناسب احتياجات مؤسستك؟ يقدم فريقنا من المصممين المحترفين حلول أزياء مخصصة تعكس هوية علامتك التجارية.
                  </p>
                  <p>
                    من تطريز الشعارات إلى اختيار الألوان والأقمشة المناسبة، نعمل معك لإنشاء أزياء موحدة فريدة تميز فريقك.
                  </p>
                  
                  <ul className="space-y-2 mt-6">
                    <li className="flex items-center">
                      <svg className="ml-2 h-5 w-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>اختيار من مئات الأقمشة والألوان</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="ml-2 h-5 w-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>تطريز وطباعة الشعارات بدقة عالية</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="ml-2 h-5 w-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>قياسات مخصصة لضمان ملاءمة مثالية</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="ml-2 h-5 w-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>طلبات بالجملة بأسعار تنافسية</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Button 
                      href="/ar/services/custom-design" 
                      variant="primary"
                    >
                      استكشف خدمات التصميم المخصص
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </RTLWrapper>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <Container>
          <RTLWrapper locale="ar">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لتحسين مظهر فريقك المهني؟</h2>
              <p className="text-xl mb-8 opacity-90">
                اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/ar/quote" 
                  variant="secondary"
                  size="lg"
                >
                  طلب عرض سعر
                </Button>
                <Button 
                  href="/ar/contact" 
                  variant="ghost"
                  size="lg"
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </RTLWrapper>
        </Container>
      </section>
    </>
  );
} 