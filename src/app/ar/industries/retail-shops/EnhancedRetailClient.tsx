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

export default function EnhancedRetailClient() {
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

  // Retail segments
  const retailSegments = [
    {
      title: 'المتاجر الكبرى والهايبر ماركت',
      description: 'أزياء موحدة لجميع أقسام المتاجر الكبيرة والهايبر ماركت',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      features: ['تصاميم مريحة', 'ألوان مميزة', 'سهولة التعرف', 'مقاومة الاستخدام'],
      stats: '٢٥٠+ متجر كبير'
    },
    {
      title: 'المتاجر المتخصصة والبوتيكات',
      description: 'أزياء أنيقة تعكس طابع المتجر وتعزز تجربة التسوق',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
      features: ['تصاميم أنيقة', 'جودة فاخرة', 'تخصيص كامل', 'مظهر احترافي'],
      stats: '٤٠٠+ متجر متخصص'
    },
    {
      title: 'المطاعم السريعة ومحلات الطعام',
      description: 'أزياء عملية وصحية لقطاع الأغذية والمشروبات',
      image: '/images/fabric-cotton-blends.webp',
      features: ['مقاومة البقع', 'سهولة التنظيف', 'مواد آمنة غذائياً', 'راحة في العمل'],
      stats: '٣٠٠+ مطعم ومقهى'
    },
    {
      title: 'الصيدليات والمتاجر الطبية',
      description: 'أزياء مهنية تعكس الثقة والمصداقية في القطاع الطبي',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      features: ['مظهر طبي مهني', 'نظافة عالية', 'راحة طويلة', 'ثقة العملاء'],
      stats: '١٨٠+ صيدلية'
    }
  ];

  // Retail benefits
  const retailBenefits = [
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'تعزيز تجربة العملاء',
      description: 'أزياء أنيقة ومهنية تترك انطباعاً إيجابياً لدى العملاء وتعزز ثقتهم في المتجر.',
      stats: '٨٧٪ تحسن في تقييمات العملاء'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تعزيز الهوية التجارية',
      description: 'تصاميم مخصصة تعكس هوية العلامة التجارية وتساعد في التعرف على الموظفين.',
      stats: '٩٢٪ تحسن في التعرف على العلامة'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'راحة الموظفين وإنتاجيتهم',
      description: 'أقمشة مريحة وتصاميم عملية تساعد الموظفين على أداء مهامهم بكفاءة أعلى.',
      stats: '٨٣٪ تحسن في رضا الموظفين'
    },
    {
      icon: '/images/icons/culturally-appropriate.svg',
      title: 'مطابقة للثقافة المحلية',
      description: 'تصاميم تحترم القيم الإسلامية والثقافة السعودية مع الحفاظ على الأناقة العصرية.',
      stats: '١٠٠٪ مطابقة ثقافية'
    }
  ];

  // Retail features
  const retailFeatures = [
    {
      name: 'التعرف السريع',
      description: 'ألوان وتصاميم مميزة تساعد العملاء على التعرف على الموظفين',
      icon: '/images/icons/premium-quality.svg',
      applications: ['خدمة العملاء', 'المبيعات', 'الاستقبال', 'الإرشاد']
    },
    {
      name: 'الراحة طوال اليوم',
      description: 'أقمشة مريحة وتصاميم عملية للعمل لساعات طويلة',
      icon: '/images/icons/comprehensive-support.svg',
      applications: ['الوقوف الطويل', 'الحركة المستمرة', 'حمل البضائع', 'خدمة العملاء']
    },
    {
      name: 'سهولة الصيانة',
      description: 'أقمشة سهلة التنظيف ومقاومة للبقع والتجاعيد',
      icon: '/images/icons/customization-icon.svg',
      applications: ['الغسيل المتكرر', 'البقع اليومية', 'الاستخدام المكثف', 'التوفير في التكاليف']
    },
    {
      name: 'التخصيص الكامل',
      description: 'إمكانية تخصيص الألوان والشعارات والتفاصيل',
      icon: '/images/icons/culturally-appropriate.svg',
      applications: ['شعار الشركة', 'ألوان العلامة', 'أسماء الموظفين', 'أقسام المتجر']
    }
  ];

  // Product categories
  const productCategories = [
    {
      name: 'أزياء المبيعات والخدمة',
      description: 'ملابس أنيقة لموظفي المبيعات وخدمة العملاء',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      products: ['قمصان مبيعات', 'بلوزات خدمة', 'بناطيل أنيقة', 'أحذية مريحة']
    },
    {
      name: 'أزياء الكاشير والاستقبال',
      description: 'ملابس مهنية لموظفي الكاشير والاستقبال',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
      products: ['قمصان كاشير', 'فساتين استقبال', 'سترات مهنية', 'إكسسوارات']
    },
    {
      name: 'أزياء المستودعات والتخزين',
      description: 'ملابس عملية لموظفي المستودعات والتخزين',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      products: ['بدلات عمل', 'قمصان مستودع', 'أحذية أمان', 'قفازات عمل']
    },
    {
      name: 'أزياء الإدارة والإشراف',
      description: 'ملابس راقية للمديرين والمشرفين',
      image: '/images/fabric-cotton-blends.webp',
      products: ['بدلات إدارية', 'قمصان إشرافية', 'ربطات عنق', 'أحذية رسمية']
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'مجموعة العثيم للتسوق',
      challenge: 'توحيد أزياء ١٠,٠٠٠ موظف في ١٥٠ فرع مع تعزيز الهوية التجارية',
      solution: 'تطوير نظام أزياء متكامل بألوان مميزة وتصاميم عملية مع شعار واضح',
      result: '٧٥٪ تحسن في تقييمات العملاء، ٨٠٪ رضا الموظفين، ٢٥٪ زيادة في المبيعات',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      testimonial: 'أزياء يونيوم عززت من هويتنا التجارية وحسنت من تجربة التسوق.',
      client: 'أ. نورا العثيم، مديرة الموارد البشرية'
    },
    {
      id: 2,
      title: 'صيدليات النهدي',
      challenge: 'تطوير أزياء مهنية تعكس الثقة والمصداقية في القطاع الطبي',
      solution: 'تصميم أزياء طبية أنيقة بألوان هادئة مع شعارات واضحة',
      result: '٩٠٪ تحسن في ثقة العملاء، ٨٥٪ رضا الصيادلة، ٢٠٪ زيادة في الولاء',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      testimonial: 'الأزياء المهنية من يونيوم عززت من ثقة عملائنا في خدماتنا.',
      client: 'د. أحمد النهدي، المدير الطبي'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'أ. سعد الراجحي',
      role: 'مدير العمليات',
      company: 'مجموعة الراجحي التجارية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'أزياء يونيوم حسنت من مظهر فريقنا وعززت ثقة العملاء في متاجرنا. جودة ممتازة وخدمة متميزة.'
    },
    {
      id: 2,
      name: 'أ. فاطمة الدوسري',
      role: 'مديرة المتجر',
      company: 'بوتيك الأناقة',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'التصاميم الأنيقة والجودة العالية جعلت موظفاتي يشعرن بالثقة والراحة. عملاؤنا يلاحظون الفرق.'
    },
    {
      id: 3,
      name: 'أ. محمد الشمري',
      role: 'مدير المطعم',
      company: 'مطاعم الطازج',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الأزياء عملية ومقاومة للبقع، وسهلة التنظيف. فريق المطبخ راضٍ جداً عن الجودة والراحة.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '١,١٣٠+', label: 'متجر ومحل تجاري' },
    { number: '٨٩%', label: 'رضا المتاجر' },
    { number: '٤٥,٠٠٠+', label: 'موظف مبيعات' },
    { number: '٢٢+', label: 'سنة خبرة في التجارة' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="أزياء قطاع التجارة والمتاجر | يونيوم السعودية - ملابس موظفي المبيعات والخدمة"
        description="أزياء موحدة متخصصة لقطاع التجارة والمتاجر في السعودية. ملابس مبيعات، خدمة عملاء، متاجر. 1,130+ متجر، 89% رضا، تصاميم أنيقة، 22+ سنة خبرة، تعزيز الهوية التجارية."
        keywords={[
          "أزياء تجارية",
          "ملابس مبيعات",
          "زي متجر",
          "أزياء متاجر",
          "ملابس خدمة عملاء",
          "زي موحد تجاري",
          "أزياء صيدليات",
          "ملابس مطاعم",
          "زي كاشير",
          "أزياء تجارة سعودية"
        ]}
        author="فريق خبراء التجارة - يونيوم"
        expertise="تصميم وتوريد أزياء قطاع التجارة والمتاجر"
        contentType="article"
        trustSignals={[
          '1,130+ متجر ومحل تجاري',
          '22+ سنة خبرة في قطاع التجارة',
          'تصاميم تعزز الهوية التجارية',
          '45,000+ موظف مبيعات'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 to-amber-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
            alt="أزياء قطاع التجارة والمتاجر من يونيوم - ملابس موظفي المبيعات والخدمة"
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
              تجارة ناجحة <span className="text-orange-300">بمظهر متميز</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              أزياء متخصصة لقطاع التجارة والمتاجر تعزز الهوية التجارية وتحسن تجربة العملاء مع ضمان راحة الموظفين
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?industry=retail" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمتجر
              </Button>
              <Button 
                href="/ar/shop/retail-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح أزياء المتاجر
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
              <SectionHeading>لماذا تختار يونيوم لقطاع التجارة؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في عالم التجارة، الانطباع الأول يحدد نجاح التفاعل مع العملاء. أزياءنا المتخصصة تضمن أن يكون فريقك دائماً في أفضل حالاته، مما يعزز ثقة العملاء ويحسن تجربة التسوق.
                </p>
                <p>
                  نفهم متطلبات قطاع التجارة المتنوعة، من الحاجة للأناقة في المتاجر الراقية إلى العملية في المتاجر الكبيرة. لذلك نقدم حلول مخصصة لكل نوع من المتاجر.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ٢٢ عاماً في خدمة قطاع التجارة السعودي جعلتنا نطور فهماً عميقاً لاحتياجات السوق المحلي والعالمي.
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
                  alt="موظفة مبيعات ترتدي الزي التجاري الأنيق من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Retail Segments */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قطاعات التجارة التي نخدمها</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول متخصصة لجميع أنواع المتاجر والمحلات التجارية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailSegments.map((segment, index) => (
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
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {segment.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{segment.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{segment.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
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
      <section className="py-20 bg-orange-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا أزياء المتاجر من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية تحققها أزياءنا للمتاجر والموظفين والعملاء
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-orange-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Retail Features */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مميزات أزياء المتاجر المتقدمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات ومميزات متطورة لضمان الأداء التجاري الأمثل
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-orange-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                      <h4 className="font-semibold text-sm text-orange-700 mb-2">التطبيقات:</h4>
                      {feature.applications.map((app, idx) => (
                        <div key={idx} className="text-xs text-neutral-500 bg-orange-50 px-2 py-1 rounded inline-block ml-1 mb-1">
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
            <SectionHeading centered>فئات أزياء المتاجر</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من الأزياء المتخصصة لجميع احتياجات العمل التجاري
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
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
            <SectionHeading centered>قصص نجاح في قطاع التجارة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية للمتاجر والشركات التجارية
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
                    
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <blockquote className="text-neutral-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-orange-600">
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
            <SectionHeading centered>شهادات المتاجر والشركات التجارية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا من قطاع التجارة حول جودة وأناقة أزياءنا
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ارتقِ بمتجرك مع أزياء يونيوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على عرض سعر مخصص وحلول شاملة لأزياء المتاجر
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?industry=retail" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمتجر
              </Button>
              <Button 
                href="/ar/shop/retail-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600"
              >
                تصفح أزياء المتاجر
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}