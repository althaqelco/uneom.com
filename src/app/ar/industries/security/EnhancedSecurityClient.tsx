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

export default function EnhancedSecurityClient() {
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

  // Security segments
  const securitySegments = [
    {
      title: 'الأمن الخاص والحراسات',
      description: 'أزياء مهنية لشركات الأمن الخاص والحراسات الشخصية',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      features: ['مظهر مهني', 'راحة في الحركة', 'جيوب متعددة', 'مواد متينة'],
      stats: '٢٠٠+ شركة أمن'
    },
    {
      title: 'أمن المطارات والموانئ',
      description: 'أزياء متخصصة لأمن المطارات والموانئ والمنافذ الحدودية',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      features: ['رؤية عالية', 'تقنيات متقدمة', 'مقاومة الطقس', 'شارات تعريف'],
      stats: '٥٠+ منفذ حدودي'
    },
    {
      title: 'الأمن الصناعي',
      description: 'أزياء حماية للعمل في البيئات الصناعية الحساسة',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
      features: ['حماية متقدمة', 'مقاومة كيميائية', 'معدات اتصال', 'سلامة عالية'],
      stats: '١٢٠+ منشأة صناعية'
    },
    {
      title: 'أمن المناسبات والفعاليات',
      description: 'أزياء مرنة للأمن في المناسبات والفعاليات الخاصة',
      image: '/images/fabric-cotton-blends.webp',
      features: ['تصاميم مرنة', 'سهولة التعرف', 'راحة طويلة', 'مظهر احترافي'],
      stats: '٣٠٠+ فعالية سنوياً'
    }
  ];

  // Security benefits
  const securityBenefits = [
    {
      icon: '/images/compliance-shield.svg',
      title: 'الهيبة والاحترام',
      description: 'أزياء تعزز الهيبة المهنية وتكسب احترام الجمهور وثقتهم في رجال الأمن.',
      stats: '٩٠٪ تحسن في التفاعل مع الجمهور'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'الوضوح والتعرف',
      description: 'تصاميم واضحة تساعد على التعرف السريع على رجال الأمن في جميع الظروف.',
      stats: '٩٥٪ وضوح في التعرف'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'التخصيص الأمني',
      description: 'إمكانية تخصيص الأزياء حسب نوع المهمة الأمنية والبيئة المطلوبة.',
      stats: '١٥٠+ تخصيص أمني'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'الراحة والأداء',
      description: 'تصاميم مريحة تساعد رجال الأمن على أداء مهامهم بكفاءة عالية لساعات طويلة.',
      stats: '٨٨٪ تحسن في الأداء'
    }
  ];

  // Security features
  const securityFeatures = [
    {
      name: 'الرؤية العالية',
      description: 'ألوان وشارات واضحة للتعرف السريع',
      icon: '/images/icons/premium-quality.svg',
      applications: ['الأمن العام', 'المطارات', 'الفعاليات', 'الطوارئ']
    },
    {
      name: 'الجيوب المتخصصة',
      description: 'جيوب مصممة لحمل المعدات الأمنية',
      icon: '/images/icons/customization-icon.svg',
      applications: ['أجهزة الاتصال', 'الأدوات الأمنية', 'الوثائق', 'المعدات الطبية']
    },
    {
      name: 'المقاومة والمتانة',
      description: 'مواد قوية تتحمل الاستخدام المكثف',
      icon: '/images/compliance-shield.svg',
      applications: ['العمل الميداني', 'الحراسة الليلية', 'الدوريات', 'المهام الخاصة']
    },
    {
      name: 'التقنيات المتقدمة',
      description: 'دمج التقنيات الحديثة في التصميم',
      icon: '/images/icons/comprehensive-support.svg',
      applications: ['أجهزة التتبع', 'الاتصالات', 'الإنذار', 'المراقبة']
    }
  ];

  // Product categories
  const productCategories = [
    {
      name: 'أزياء الأمن العام',
      description: 'ملابس أساسية لجميع أنواع المهام الأمنية',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      products: ['قمصان أمنية', 'بناطيل تكتيكية', 'جاكيتات أمنية', 'أحذية تكتيكية']
    },
    {
      name: 'أزياء الأمن المتخصص',
      description: 'ملابس للمهام الأمنية الخاصة والحساسة',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      products: ['بدلات تكتيكية', 'سترات واقية', 'خوذات أمنية', 'معدات حماية']
    },
    {
      name: 'أزياء الحراسة الشخصية',
      description: 'ملابس أنيقة للحراسة الشخصية والبروتوكول',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
      products: ['بدلات رسمية', 'قمصان بروتوكول', 'ربطات عنق', 'أحذية رسمية']
    },
    {
      name: 'إكسسوارات الأمن',
      description: 'مكملات ومعدات الزي الأمني',
      image: '/images/fabric-cotton-blends.webp',
      products: ['شارات تعريف', 'أحزمة تكتيكية', 'قبعات أمنية', 'قفازات تكتيكية']
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'شركة الحرس الخاص السعودي',
      challenge: 'توحيد أزياء ٥,٠٠٠ حارس أمن مع تعزيز الهيبة المهنية',
      solution: 'تطوير نظام أزياء متكامل يجمع بين المهنية والراحة والوضوح',
      result: '٨٥٪ تحسن في تقييمات العملاء، ٩٠٪ رضا الحراس، انخفاض ٣٠٪ في الشكاوى',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      testimonial: 'أزياء يونيوم عززت من صورتنا المهنية وحسنت من أداء فريقنا.',
      client: 'العقيد م. سعد الغامدي، المدير التنفيذي'
    },
    {
      id: 2,
      title: 'مطار الملك عبدالعزيز الدولي',
      challenge: 'تطوير أزياء أمنية متطورة تناسب البيئة المطارية',
      solution: 'تصميم أزياء بتقنيات متقدمة مع رؤية عالية ومعدات اتصال',
      result: '٩٥٪ تحسن في كفاءة الأمن، ٩٢٪ رضا المسافرين، صفر حوادث أمنية',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      testimonial: 'الجودة والتقنيات المتقدمة في أزياء يونيوم حسنت من أمن المطار.',
      client: 'أ. فاطمة الزهراني، مديرة الأمن والسلامة'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'العقيد أحمد الشهري',
      role: 'مدير العمليات الأمنية',
      company: 'شركة الأمان للحراسات',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'أزياء يونيوم أعطت فريقنا الهيبة المطلوبة وحسنت من تفاعلهم مع الجمهور. جودة استثنائية.'
    },
    {
      id: 2,
      name: 'أ. سارة العتيبي',
      role: 'مديرة الأمن',
      company: 'مجمع الرياض التجاري',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الأزياء مريحة وعملية، والتصميم يساعد الزوار على التعرف على فريق الأمن بسهولة.'
    },
    {
      id: 3,
      name: 'الرائد خالد النجار',
      role: 'رئيس الأمن',
      company: 'مدينة الملك عبدالله الاقتصادية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'المتانة والجودة في أزياء يونيوم تناسب تماماً طبيعة العمل الأمني المكثف.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٦٧٠+', label: 'شركة ومؤسسة أمنية' },
    { number: '٩٣%', label: 'رضا الشركات الأمنية' },
    { number: '٢٥,٠٠٠+', label: 'رجل أمن' },
    { number: '١٨+', label: 'سنة خبرة في الأمن' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="أزياء قطاع الأمن | يونيوم السعودية - ملابس أمنية وحراسات مهنية"
        description="أزياء موحدة متخصصة لقطاع الأمن في السعودية. ملابس أمنية، حراسات، أمن خاص. 670+ شركة أمنية، 93% رضا، تصاميم مهنية، 18+ سنة خبرة، هيبة واحترام، رؤية عالية."
        keywords={[
          "أزياء أمنية",
          "ملابس أمن",
          "زي أمني",
          "أزياء حراسات",
          "ملابس حراس",
          "زي موحد أمني",
          "أزياء أمن خاص",
          "ملابس حماية",
          "زي تكتيكي",
          "أزياء أمن سعودية"
        ]}
        author="فريق خبراء الأمن - يونيوم"
        expertise="تصميم وتوريد الأزياء الأمنية المهنية"
        contentType="article"
        trustSignals={[
          '670+ شركة ومؤسسة أمنية',
          '18+ سنة خبرة في قطاع الأمن',
          'تصاميم مهنية معتمدة',
          '25,000+ رجل أمن'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
            alt="أزياء قطاع الأمن من يونيوم - ملابس أمنية وحراسات مهنية"
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
              أمن مهني <span className="text-blue-300">بهيبة واحترام</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              أزياء متخصصة لقطاع الأمن تجمع بين المهنية والهيبة والراحة، لتعزز ثقة الجمهور وكفاءة الأداء الأمني
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?industry=security" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للشركة
              </Button>
              <Button 
                href="/ar/shop/security-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح الأزياء الأمنية
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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
              <SectionHeading>لماذا تختار يونيوم لقطاع الأمن؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في مجال الأمن، المظهر المهني والهيبة عوامل حاسمة في نجاح المهمة. أزياءنا المتخصصة تمنح رجال الأمن الثقة والاحترام اللازمين لأداء مهامهم بفعالية.
                </p>
                <p>
                  نفهم التحديات الفريدة لقطاع الأمن، من الحاجة للوضوح والتعرف السريع إلى الراحة في العمل لساعات طويلة في ظروف متنوعة.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ١٨ عاماً في خدمة القطاع الأمني السعودي جعلتنا نطور حلول مبتكرة تلبي أعلى معايير المهنية والجودة.
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
                  alt="رجل أمن يرتدي الزي الأمني المهني من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Security Segments */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قطاعات الأمن التي نخدمها</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول متخصصة لجميع أنواع الخدمات الأمنية في المملكة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securitySegments.map((segment, index) => (
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
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {segment.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{segment.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{segment.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
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
      <section className="py-20 bg-blue-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا الأزياء الأمنية من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية تحققها أزياءنا للشركات الأمنية ورجال الأمن
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securityBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مميزات الأزياء الأمنية المتقدمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات ومميزات متطورة لضمان الأداء الأمني الأمثل
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                      <h4 className="font-semibold text-sm text-blue-700 mb-2">التطبيقات:</h4>
                      {feature.applications.map((app, idx) => (
                        <div key={idx} className="text-xs text-neutral-500 bg-blue-50 px-2 py-1 rounded inline-block ml-1 mb-1">
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
            <SectionHeading centered>فئات الأزياء الأمنية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من الأزياء المتخصصة لجميع احتياجات العمل الأمني
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
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
            <SectionHeading centered>قصص نجاح في قطاع الأمن</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية للشركات الأمنية
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
                    
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <blockquote className="text-neutral-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-blue-600">
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
            <SectionHeading centered>شهادات الشركات الأمنية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا من شركات الأمن والحراسات حول جودة أزياءنا
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              عزز هيبة فريقك الأمني مع يونيوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على عرض سعر مخصص وحلول شاملة للأزياء الأمنية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?industry=security" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للشركة
              </Button>
              <Button 
                href="/ar/shop/security-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
              >
                تصفح الأزياء الأمنية
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}