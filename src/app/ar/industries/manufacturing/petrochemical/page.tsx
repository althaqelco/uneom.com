'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaIndustry, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';

// Arabic Page Data
const pageData = {
  hero: {
    title: "حلول صناعة البتروكيماويات",
    subtitle: "ملابس السلامة المتقدمة لقطاع البتروكيماويات في المملكة العربية السعودية",
    image: "/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg",
  },
  stats: [
    { value: "ISO 11612", label: "حماية من الحريق" },
    { value: "NFPA 2112", label: "معايير مقاومة اللهب" },
    { value: "EN 13034", label: "حماية كيميائية" },
    { value: "24/7", label: "دعم متواصل" },
  ],
  features: [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "مقاومة المواد الكيميائية",
      description: "تقنية نسيج متقدمة توفر الحماية من المواد الكيميائية القاسية والمواد المسببة للتآكل."
    },
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "مقاومة اللهب",
      description: "مواد مقاومة للهب تلبي معايير السلامة الدولية لبيئات البتروكيماويات."
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "التركيز على الراحة",
      description: "مصممة للارتداء لفترات طويلة في منشآت البتروكيماويات عالية الحرارة."
    }
  ],
  products: [
    {
      name: "أفرول مقاوم للهب فاخر",
      image: "/images/industries/manufacturing/manufacturing_uniform_product2.jpg",
      features: ["حماية من رذاذ المواد الكيميائية", "خصائص مضادة للكهرباء الساكنة", "عناصر عالية الوضوح"]
    },
    {
      name: "طقم مقاوم للمواد الكيميائية",
      image: "/images/industries/manufacturing/manufacturing_uniform_product1.jpg",
      features: ["نسيج مقاوم للأحماض", "درزات معززة", "إدارة الرطوبة"]
    }
  ]
};

export default function PetrochemicalPageAr() {
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
    <>
      <Container className="py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'الرئيسية', href: '/ar' },
          { label: 'الصناعات', href: '/ar/industries' },
          { label: 'التصنيع', href: '/ar/industries/manufacturing' },
          { label: 'البتروكيماويات', href: '/ar/industries/manufacturing/petrochemical' }
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
                href="/ar/products/petrochemical"
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
              alt="ملابس العمل في صناعة البتروكيماويات"
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
            subtitle="مصممة لسلامة صناعة البتروكيماويات"
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
            subtitle="متخصصة في صناعة البتروكيماويات"
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
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              هل أنت مستعد لتعزيز السلامة في صناعة البتروكيماويات؟
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
    </>
  );
} 