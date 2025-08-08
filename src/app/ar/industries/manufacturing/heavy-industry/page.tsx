'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHardHat, FaTools, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Arabic Page Data
const pageData = {
  hero: {
    title: "UNEOM - Professional Uniforms",
    subtitle: "ملابس السلامة المتقدمة لقطاع الصناعات الثقيلة في المملكة العربية السعودية",
    image: "/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg"},
  stats: [
    { value: "ISO 20471", label: "وضوح عالي" },
    { value: "EN 388", label: "حماية من الصدمات" },
    { value: "ISO 11611", label: "سلامة اللحام" },
    { value: "100%", label: "صنع سعودي" },
  ],
  features: [
    {
      icon: <FaHardHat className="w-6 h-6" />,
      title: "حماية من الصدمات",
      description: "ميزات حماية معززة مصممة لبيئات الآلات الثقيلة والعمليات الصناعية."
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "تركيز على المتانة",
      description: "مواد متينة وبناء معزز للارتداء الطويل في الظروف الصعبة."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "حماية متعددة المخاطر",
      description: "حماية شاملة ضد المخاطر الميكانيكية والحرارة والمخاطر الصناعية."
    }
  ],
  products: [
    {
      name: "أفرول شديد التحمل",
      image: "/images/industries/manufacturing/manufacturing_uniform_full.jpg",
      features: ["لوحات مقاومة للصدمات", "عناصر عالية الوضوح", "جيوب متعددة للأدوات"]
    },
    {
      name: "طقم السلامة الصناعي",
      image: "/images/industries/manufacturing/manufacturing_uniform_variation.jpg",
      features: ["مناطق ركبة معززة", "نسيج قابل للتنفس", "خصائص مضادة للكهرباء الساكنة"]
    }
  ],
  applications: [
    {
      title: "صناعة الصلب",
      description: "حماية متخصصة للبيئات عالية الحرارة",
      image: "/images/industries/manufacturing/manufacturing_uniform_basic.jpg"
    },
    {
      title: "الآلات الثقيلة",
      description: "متانة معززة للعمل الميكانيكي",
      image: "/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg"
    },
    {
      title: "المعالجة الصناعية",
      description: "تغطية كاملة لمختلف التطبيقات الصناعية",
      image: "/images/industries/manufacturing/manufacturing_uniform_perpare.jpg"
    }
  ]
};

export default function HeavyIndustryPageAr() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <main>
      <Container className="py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'الرئيسية', href: '/ar' },
          { label: 'الصناعات', href: '/ar/industries' },
          { label: 'التصنيع', href: '/ar/industries/manufacturing' },
          { label: 'الصناعات الثقيلة', href: '/ar/industries/manufacturing/heavy-industry' }
        ]} />

        {/* Hero Section */}
        <motion.div 
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6 lg:order-2 text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 font-heading">
              {pageData.hero.title}
            </h1>
            <p className="text-xl text-neutral-600">
              {pageData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button 
                href="/ar/contact" 
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2 flex-row-reverse"
              >
                طلب استشارة <FaArrowRight className="rotate-180" />
              </Button>
              <Button 
                href="/ar/products/heavy-industry"
                variant="outline"
                size="lg"
              >
                عرض المنتجات
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl lg:order-1">
            <Image
              src={pageData.hero.image}
              alt="ملابس العمل في الصناعات الثقيلة"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {pageData.stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="text-center space-y-2"
            >
              <div className="text-2xl font-bold text-primary-700">{stat.value}</div>
              <div className="text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="مصممة للسلامة الصناعية"
            centered={true}
          >
            ميزات خاصة بالصناعة
          </SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow text-right"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Products Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="متخصصة في الصناعات الثقيلة"
            centered={true}
          >
            المنتجات المميزة
          </SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pageData.products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">{product.name}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-600 flex-row-reverse">
                        <FaShieldAlt className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="حلول مخصصة لمختلف القطاعات"
            centered={true}
          >
            تطبيقات الصناعة
          </SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData.applications.map((app, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">{app.title}</h3>
                  <p className="text-neutral-600">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-primary-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading">
              هل أنت مستعد لتعزيز السلامة الصناعية؟
            </h2>
            <p className="text-lg text-neutral-600">
              اتصل بنا للحصول على حل مخصص يلبي متطلباتك ومعايير السلامة الخاصة بك.
            </p>
            <Button 
              href="/ar/contact"
              variant="primary"
              size="lg"
              className="mt-4"
            >
              جدولة استشارة
            </Button>
          </div>
        </motion.div>
      </Container>
        </main>
  );
} 