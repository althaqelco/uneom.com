'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function EnhancedManufacturingClient() {
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

  // Manufacturing capabilities
  const capabilities = [
    {
      title: 'التصنيع المتقدم',
      description: 'مصانع حديثة مجهزة بأحدث التقنيات والآلات المتطورة',
      icon: '/images/icons/premium-quality.svg',
      features: ['آلات خياطة متطورة', 'تقنيات قطع دقيقة', 'أنظمة جودة آلية', 'إنتاج عالي الكفاءة']
    },
    {
      title: 'مراقبة الجودة الشاملة',
      description: 'نظام صارم لضمان الجودة في كل مرحلة من مراحل الإنتاج',
      icon: '/images/icons/compliance-shield.svg',
      features: ['فحص المواد الخام', 'مراقبة الإنتاج', 'اختبار المنتج النهائي', 'شهادات جودة']
    },
    {
      title: 'المرونة في الإنتاج',
      description: 'قدرة على التعامل مع الطلبات الصغيرة والكبيرة بنفس الكفاءة',
      icon: '/images/icons/customization-icon.svg',
      features: ['طلبات صغيرة (50+ قطعة)', 'إنتاج كبير (10,000+ قطعة)', 'تخصيص فردي', 'مواعيد مرنة']
    },
    {
      title: 'الاستدامة البيئية',
      description: 'التزام بالممارسات الصديقة للبيئة في جميع عمليات التصنيع',
      icon: '/images/icons/culturally-appropriate.svg',
      features: ['مواد معاد تدويرها', 'توفير الطاقة', 'تقليل النفايات', 'شهادات بيئية']
    }
  ];

  // Manufacturing process
  const manufacturingProcess = [
    {
      step: '01',
      title: 'التخطيط والتصميم',
      description: 'تحليل المتطلبات وإعداد خطة الإنتاج المفصلة',
      duration: '١-٢ أسبوع',
      activities: ['دراسة التصميم', 'تحديد المواد', 'جدولة الإنتاج', 'تخصيص الموارد']
    },
    {
      step: '02',
      title: 'إعداد المواد',
      description: 'فحص وتحضير جميع المواد والأقمشة المطلوبة',
      duration: '٣-٥ أيام',
      activities: ['فحص الجودة', 'قطع الأقمشة', 'تحضير الإكسسوارات', 'مراقبة المخزون']
    },
    {
      step: '03',
      title: 'الإنتاج والتجميع',
      description: 'عملية التصنيع الفعلية مع مراقبة مستمرة للجودة',
      duration: '٢-٤ أسابيع',
      activities: ['خياطة متخصصة', 'تطريز وطباعة', 'تجميع القطع', 'فحص مرحلي']
    },
    {
      step: '04',
      title: 'الفحص النهائي والتعبئة',
      description: 'فحص شامل للمنتج النهائي وتعبئة احترافية',
      duration: '٢-٣ أيام',
      activities: ['فحص نهائي', 'كي وتشطيب', 'تعبئة مخصصة', 'إعداد الشحن']
    }
  ];

  // Production facilities
  const facilities = [
    {
      name: 'مصنع الرياض الرئيسي',
      location: 'الرياض، المملكة العربية السعودية',
      capacity: '٥٠,٠٠٠ قطعة شهرياً',
      specialization: 'الأزياء المؤسسية والطبية',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      certifications: ['ISO 9001:2015', 'OEKO-TEX', 'SA8000']
    },
    {
      name: 'مصنع جدة المتخصص',
      location: 'جدة، المملكة العربية السعودية',
      capacity: '٣٠,٠٠٠ قطعة شهرياً',
      specialization: 'أزياء الضيافة والطيران',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      certifications: ['ISO 14001', 'WRAP', 'BSCI']
    }
  ];

  // Quality standards
  const qualityStandards = [
    {
      standard: 'ISO 9001:2015',
      description: 'نظام إدارة الجودة المعتمد دولياً',
      scope: 'جميع عمليات التصنيع والإنتاج'
    },
    {
      standard: 'OEKO-TEX Standard 100',
      description: 'شهادة السلامة البيئية للمنسوجات',
      scope: 'جميع المواد والأقمشة المستخدمة'
    },
    {
      standard: 'SA8000',
      description: 'معيار المسؤولية الاجتماعية',
      scope: 'ظروف العمل وحقوق العمال'
    },
    {
      standard: 'WRAP',
      description: 'برنامج الإنتاج المسؤول عالمياً',
      scope: 'الممارسات الأخلاقية في التصنيع'
    }
  ];

  // Technology features
  const technologyFeatures = [
    {
      name: 'أنظمة القطع الآلي',
      description: 'تقنيات قطع متطورة لضمان الدقة وتقليل الهدر',
      benefits: ['دقة عالية', 'توفير المواد', 'سرعة في الإنتاج', 'جودة متسقة']
    },
    {
      name: 'آلات الخياطة المتخصصة',
      description: 'معدات حديثة لجميع أنواع الخياطة والتشطيب',
      benefits: ['خياطة متقنة', 'تشطيب احترافي', 'متانة عالية', 'مظهر أنيق']
    },
    {
      name: 'أنظمة التطريز الرقمي',
      description: 'تقنيات تطريز متقدمة للشعارات والتفاصيل',
      benefits: ['دقة في التطريز', 'ألوان ثابتة', 'تصاميم معقدة', 'إنتاج سريع']
    },
    {
      name: 'مراقبة الجودة الآلية',
      description: 'أنظمة فحص متطورة لضمان المعايير العالية',
      benefits: ['فحص شامل', 'كشف العيوب', 'ضمان الجودة', 'تقارير مفصلة']
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'م. أحمد الفيصل',
      role: 'مدير المشتريات',
      company: 'مجموعة بن لادن',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'جودة التصنيع في يونيوم تفوق التوقعات. الالتزام بالمواعيد والمعايير العالية جعلهم شريكنا المفضل في الأزياء الموحدة.'
    },
    {
      id: 2,
      name: 'أ. سارة القحطاني',
      role: 'مديرة العمليات',
      company: 'مستشفى الملك فهد',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'المرونة في الإنتاج والقدرة على التعامل مع طلباتنا المتغيرة ميزة كبيرة. الجودة ثابتة في كل دفعة إنتاج.'
    },
    {
      id: 3,
      name: 'د. خالد العتيبي',
      role: 'المدير التنفيذي',
      company: 'شركة الطيران السعودي',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'التقنيات المتطورة في التصنيع والاهتمام بالتفاصيل جعل أزياء طاقمنا تحافظ على مظهرها الأنيق حتى في الرحلات الطويلة.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٢٠٠,٠٠٠+', label: 'قطعة منتجة شهرياً' },
    { number: '٩٩.٥%', label: 'معدل الجودة' },
    { number: '٩٨%', label: 'الالتزام بالمواعيد' },
    { number: '١٥+', label: 'سنة خبرة في التصنيع' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="خدمات التصنيع والإنتاج | يونيوم السعودية - مصانع متطورة ومعايير عالمية"
        description="خدمات التصنيع المتخصصة للأزياء الموحدة في السعودية. مصانع حديثة، تقنيات متطورة، مراقبة جودة شاملة. 200,000+ قطعة شهرياً، 99.5% معدل جودة، شهادات ISO."
        keywords={[
          "تصنيع أزياء",
          "إنتاج ملابس",
          "مصانع أزياء",
          "تصنيع يونيفورم",
          "إنتاج ملابس موحدة",
          "مصانع سعودية",
          "جودة التصنيع",
          "إنتاج متطور",
          "تصنيع احترافي",
          "مراقبة الجودة"
        ]}
        author="فريق خبراء التصنيع - يونيوم"
        expertise="التصنيع والإنتاج المتخصص للأزياء الموحدة"
        contentType="service"
        trustSignals={[
          '200,000+ قطعة منتجة شهرياً',
          'شهادات ISO 9001:2015',
          'مصانع متطورة في السعودية',
          '15+ سنة خبرة في التصنيع'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 to-red-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
            alt="خدمات التصنيع من يونيوم - مصانع متطورة ومعايير عالمية"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <motion.div 
            className="relative z-10 max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              تصنيع متطور <span className="text-orange-300">بمعايير عالمية</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              مصانع حديثة مجهزة بأحدث التقنيات لإنتاج أزياء موحدة عالية الجودة تلبي أعلى المعايير الدولية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=manufacturing" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للإنتاج
              </Button>
              <Button 
                href="/ar/factory-tour" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                جولة في المصنع
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading>لماذا تختار مصانع يونيوم للتصنيع؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  مصانعنا المتطورة في المملكة العربية السعودية مجهزة بأحدث التقنيات والآلات لضمان إنتاج أزياء موحدة تلبي أعلى معايير الجودة العالمية.
                </p>
                <p>
                  نجمع بين الخبرة الحرفية التقليدية والتقنيات الحديثة لنقدم منتجات استثنائية تتميز بالدقة والمتانة والأناقة.
                </p>
                <p>
                  التزامنا بالمواعيد والجودة جعلنا الخيار الأول للشركات والمؤسسات الرائدة في المملكة ومنطقة الخليج.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
                  alt="خياط ماهر يعمل في مصنع يونيوم المتطور"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قدرات التصنيع المتطورة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              إمكانيات شاملة تغطي جميع احتياجات إنتاج الأزياء الموحدة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-orange-50 p-4 rounded-full ml-6 flex-shrink-0">
                    <Image 
                      src={capability.icon} 
                      alt={capability.title} 
                      width={32} 
                      height={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{capability.title}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{capability.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full ml-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>عملية التصنيع المتكاملة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              منهجية منظمة ومدروسة لضمان أعلى معايير الجودة والكفاءة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {manufacturingProcess.map((process, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
                variants={fadeIn}
              >
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-neutral-800">{process.title}</h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{process.description}</p>
                <div className="text-xs font-semibold text-orange-600 mb-4">
                  المدة: {process.duration}
                </div>
                <div className="space-y-1">
                  {process.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center text-xs text-neutral-500">
                      <div className="w-1 h-1 bg-orange-400 rounded-full ml-2"></div>
                      {activity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Production Facilities */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مرافق الإنتاج المتطورة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مصانع حديثة في مواقع استراتيجية لخدمة عملائنا بكفاءة عالية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-neutral-800">{facility.name}</h3>
                  <p className="text-neutral-600 mb-4">{facility.location}</p>
                  
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <span className="font-semibold text-orange-600">الطاقة الإنتاجية:</span>
                      <span className="text-neutral-700 mr-2">{facility.capacity}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-600">التخصص:</span>
                      <span className="text-neutral-700 mr-2">{facility.specialization}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-neutral-700">الشهادات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.certifications.map((cert, idx) => (
                        <span key={idx} className="text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-orange-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>التقنيات المتطورة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              أحدث التقنيات والمعدات لضمان أعلى مستويات الجودة والكفاءة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologyFeatures.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold mb-3 text-orange-600">{tech.name}</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">{tech.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {tech.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full ml-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>معايير الجودة والاعتماد</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              التزامنا بأعلى معايير الجودة العالمية والمحلية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold mb-3 text-orange-600">{standard.standard}</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">{standard.description}</p>
                <div className="text-sm text-neutral-600 bg-orange-50 px-4 py-2 rounded-lg">
                  <strong>النطاق:</strong> {standard.scope}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>شهادات العملاء</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا حول جودة التصنيع والخدمات المتميزة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeIn}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ مشروع التصنيع الخاص بك اليوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على عرض سعر مخصص وخطة إنتاج تناسب احتياجاتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=manufacturing" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للإنتاج
              </Button>
              <Button 
                href="/ar/factory-tour" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600"
              >
                احجز جولة في المصنع
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}