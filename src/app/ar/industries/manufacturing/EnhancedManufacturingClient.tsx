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

  // Manufacturing segments
  const manufacturingSegments = [
    {
      title: 'الصناعات البتروكيماوية',
      description: 'أزياء متخصصة للعمل في البيئات الكيميائية والبترولية',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      features: ['مقاومة كيميائية', 'حماية من الحرارة', 'مواد مضادة للكهرباء الساكنة', 'معايير سلامة عالمية'],
      stats: '٨٠+ مصنع بتروكيماوي'
    },
    {
      title: 'الصناعات الغذائية',
      description: 'ملابس آمنة وصحية لصناعة الأغذية والمشروبات',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      features: ['مواد آمنة غذائياً', 'سهولة التنظيف', 'مقاومة البقع', 'تهوية ممتازة'],
      stats: '١٢٠+ مصنع غذائي'
    },
    {
      title: 'الصناعات المعدنية والميكانيكية',
      description: 'أزياء متينة للعمل مع المعادن والآلات الثقيلة',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
      features: ['مقاومة التمزق', 'حماية من الشرر', 'جيوب متعددة', 'متانة فائقة'],
      stats: '٩٠+ مصنع معدني'
    },
    {
      title: 'الصناعات النسيجية',
      description: 'ملابس مريحة وعملية لبيئة العمل النسيجي',
      image: '/images/fabric-cotton-blends.webp',
      features: ['راحة في الحركة', 'مقاومة الوبر', 'ألوان ثابتة', 'تصاميم عملية'],
      stats: '٦٠+ مصنع نسيجي'
    }
  ];

  // Manufacturing benefits
  const manufacturingBenefits = [
    {
      icon: '/images/compliance-shield.svg',
      title: 'السلامة المهنية',
      description: 'أزياء تلبي أعلى معايير السلامة المهنية وتحمي العمال من مخاطر بيئة العمل الصناعي.',
      stats: '٩٩٪ مطابقة لمعايير السلامة'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'المتانة والجودة',
      description: 'مواد عالية الجودة تتحمل ظروف العمل القاسية وتدوم لفترات طويلة.',
      stats: '٣ سنوات ضمان متوسط'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تخصيص حسب البيئة الصناعية',
      description: 'تصاميم مخصصة تناسب متطلبات كل صناعة ونوع العمل المحدد.',
      stats: '٢٠٠+ تخصيص صناعي'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'الراحة والإنتاجية',
      description: 'تصاميم مريحة تساعد العمال على أداء مهامهم بكفاءة أعلى وراحة أكبر.',
      stats: '٨٥٪ تحسن في الإنتاجية'
    }
  ];

  // Safety features
  const safetyFeatures = [
    {
      name: 'الحماية من الحرارة',
      description: 'مواد مقاومة للحرارة العالية والنيران',
      icon: '/images/icons/premium-quality.svg',
      applications: ['أفران الصهر', 'خطوط الإنتاج الساخنة', 'عمليات اللحام', 'المصافي']
    },
    {
      name: 'المقاومة الكيميائية',
      description: 'حماية من المواد الكيميائية والأحماض',
      icon: '/images/compliance-shield.svg',
      applications: ['المختبرات', 'المصانع الكيميائية', 'معالجة المياه', 'البتروكيماويات']
    },
    {
      name: 'الرؤية العالية',
      description: 'ألوان فلورية وشرائط عاكسة للرؤية الواضحة',
      icon: '/images/icons/culturally-appropriate.svg',
      applications: ['المواقع الإنشائية', 'المطارات', 'الطرق السريعة', 'المستودعات']
    },
    {
      name: 'الحماية الكهربائية',
      description: 'مواد مضادة للكهرباء الساكنة والعزل الكهربائي',
      icon: '/images/icons/customization-icon.svg',
      applications: ['محطات الكهرباء', 'الإلكترونيات', 'الاتصالات', 'أنظمة التحكم']
    }
  ];

  // Product categories
  const productCategories = [
    {
      name: 'أزياء السلامة الصناعية',
      description: 'ملابس حماية شاملة للبيئات الخطرة',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      products: ['بدلات حماية', 'خوذات أمان', 'أحذية سلامة', 'قفازات واقية']
    },
    {
      name: 'ملابس العمل اليومية',
      description: 'أزياء مريحة للعمل اليومي في المصانع',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      products: ['بناطيل عمل', 'قمصان صناعية', 'جاكيتات عمل', 'مرايل واقية']
    },
    {
      name: 'أزياء الصيانة والتشغيل',
      description: 'ملابس متخصصة لفرق الصيانة والتشغيل',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
      products: ['بدلات صيانة', 'حقائب أدوات', 'أحزمة أمان', 'معدات حماية']
    },
    {
      name: 'أزياء الإدارة والإشراف',
      description: 'ملابس مهنية للمشرفين والإداريين',
      image: '/images/fabric-cotton-blends.webp',
      products: ['قمصان إشرافية', 'سترات مهنية', 'خوذات مميزة', 'شارات تعريف']
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'شركة أرامكو السعودية',
      challenge: 'توحيد أزياء السلامة لـ ٥٠,٠٠٠ موظف مع ضمان أعلى معايير الحماية',
      solution: 'تطوير نظام أزياء متكامل مع تقنيات حماية متقدمة ومواد عالية الجودة',
      result: '٤٠٪ انخفاض في حوادث العمل، ٩٥٪ رضا الموظفين، توفير ٢٠٪ في التكاليف',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      testimonial: 'يونيوم قدمت حلول سلامة متطورة حسنت من بيئة العمل بشكل كبير.',
      client: 'م. عبدالله الدوسري، مدير السلامة المهنية'
    },
    {
      id: 2,
      title: 'مجموعة سابك',
      challenge: 'تطوير أزياء مقاومة للمواد الكيميائية لمصانع البتروكيماويات',
      solution: 'تصميم أزياء متخصصة بمواد مقاومة كيميائياً مع راحة في الاستخدام',
      result: '٦٠٪ تحسن في معايير السلامة، ٩٠٪ رضا العمال، صفر حوادث كيميائية',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      testimonial: 'الجودة والحماية التي توفرها أزياء يونيوم لا مثيل لها في السوق.',
      client: 'د. سارة العتيبي، مديرة الجودة والسلامة'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'م. أحمد الفيصل',
      role: 'مدير المصنع',
      company: 'مصنع الجبيل للبتروكيماويات',
      image: '/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'أزياء يونيوم وفرت الحماية اللازمة لعمالنا مع راحة استثنائية. انخفضت الحوادث بشكل ملحوظ.'
    },
    {
      id: 2,
      name: 'أ. فاطمة الحربي',
      role: 'مديرة السلامة',
      company: 'مصنع الرياض للأغذية',
      image: '/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الأزياء تلبي جميع معايير السلامة الغذائية وسهلة التنظيف. فريقنا راضٍ جداً عن الجودة.'
    },
    {
      id: 3,
      name: 'م. خالد النجار',
      role: 'مدير الإنتاج',
      company: 'مصانع الحديد والصلب',
      image: '/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'المتانة والجودة في أزياء يونيوم تناسب تماماً بيئة العمل القاسية في مصانعنا.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٣٥٠+', label: 'مصنع ومنشأة صناعية' },
    { number: '٩٦%', label: 'رضا المصانع' },
    { number: '١٠٠,٠٠٠+', label: 'عامل صناعي' },
    { number: '٢٥+', label: 'سنة خبرة في الصناعة' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="أزياء القطاع الصناعي | يونيوم السعودية - ملابس سلامة وحماية صناعية"
        description="أزياء موحدة متخصصة للقطاع الصناعي في السعودية. ملابس سلامة، حماية صناعية، أزياء مصانع. 350+ مصنع، 96% رضا، معايير سلامة عالمية، 25+ سنة خبرة، حماية شاملة."
        keywords={[
          "أزياء صناعية",
          "ملابس سلامة",
          "زي صناعي",
          "أزياء مصانع",
          "ملابس حماية",
          "زي موحد صناعي",
          "أزياء عمال",
          "ملابس أمان",
          "زي مهني صناعي",
          "أزياء صناعة سعودية"
        ]}
        author="فريق خبراء الصناعة - يونيوم"
        expertise="تصميم وتوريد أزياء السلامة الصناعية"
        contentType="article"
        trustSignals={[
          '350+ مصنع ومنشأة صناعية',
          '25+ سنة خبرة في القطاع الصناعي',
          'معايير سلامة عالمية معتمدة',
          '100,000+ عامل صناعي'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-slate-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
            alt="أزياء القطاع الصناعي من يونيوم - ملابس سلامة وحماية صناعية"
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
              سلامة صناعية <span className="text-gray-300">بمعايير عالمية</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              أزياء متخصصة للقطاع الصناعي تجمع بين أعلى معايير السلامة والحماية مع الراحة والمتانة في بيئة العمل الصناعي
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?industry=manufacturing" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمصنع
              </Button>
              <Button 
                href="/ar/shop/industrial-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح الأزياء الصناعية
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
                <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">
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
              <SectionHeading>لماذا تختار يونيوم للقطاع الصناعي؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في البيئة الصناعية، السلامة ليست خياراً بل ضرورة. أزياءنا المتخصصة توفر الحماية الشاملة للعمال مع ضمان الراحة والمتانة في أقسى ظروف العمل.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ٢٥ عاماً في خدمة القطاع الصناعي السعودي جعلتنا نفهم التحديات الفريدة لكل صناعة ونطور حلول مخصصة لها.
                </p>
                <p>
                  نلتزم بأعلى معايير السلامة العالمية ونستخدم أحدث التقنيات في المواد والتصنيع لضمان حماية فعالة ومتانة استثنائية.
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
                  alt="عامل يرتدي أزياء السلامة الصناعية من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Manufacturing Segments */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>القطاعات الصناعية التي نخدمها</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول متخصصة لجميع أنواع الصناعات في المملكة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {manufacturingSegments.map((segment, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {segment.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{segment.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{segment.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-gray-500 rounded-full ml-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا الأزياء الصناعية من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية تحققها أزياءنا للمصانع والعمال
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {manufacturingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-gray-50 p-4 rounded-full ml-6 flex-shrink-0">
                    <Image 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      width={32} 
                      height={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{benefit.title}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="text-sm font-semibold text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Safety Features */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مميزات السلامة المتقدمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات حماية متطورة لضمان سلامة العمال في جميع البيئات الصناعية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-gray-50 p-4 rounded-full ml-6 flex-shrink-0">
                    <Image 
                      src={feature.icon} 
                      alt={feature.name} 
                      width={32} 
                      height={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{feature.name}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">التطبيقات:</h4>
                      {feature.applications.map((app, idx) => (
                        <div key={idx} className="text-xs text-neutral-500 bg-gray-50 px-2 py-1 rounded inline-block ml-1 mb-1">
                          {app}
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

      {/* Product Categories */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>فئات الأزياء الصناعية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من الأزياء المتخصصة لجميع احتياجات العمل الصناعي
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{category.name}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{category.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-gray-500 rounded-full ml-2"></div>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قصص نجاح في القطاع الصناعي</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية للمصانع والشركات الصناعية
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={fadeIn}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold mb-6 text-neutral-800">{story.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-600">التحدي:</h4>
                      <p className="text-neutral-600 leading-relaxed">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-blue-600">الحل:</h4>
                      <p className="text-neutral-600 leading-relaxed">{story.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-green-600">النتيجة:</h4>
                      <p className="text-neutral-600 leading-relaxed">{story.result}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <blockquote className="text-neutral-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-gray-600">
                        {story.client}
                      </cite>
                    </div>
                  </div>
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
            <SectionHeading centered>شهادات المصانع والشركات الصناعية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا من القطاع الصناعي حول جودة وسلامة أزياءنا
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
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              احمِ عمالك مع أزياء يونيوم الصناعية
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على عرض سعر مخصص وحلول شاملة للسلامة الصناعية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?industry=manufacturing" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمصنع
              </Button>
              <Button 
                href="/ar/shop/industrial-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-600"
              >
                تصفح الأزياء الصناعية
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}