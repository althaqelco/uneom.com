'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { getTranslation } from '@/lib/i18n';
import { getLocalizedImagePath } from '@/lib/utils/imageLoader';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function EnhancedAviationClient() {
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

  // Key benefits for aviation uniforms
  const benefits = [
    {
      icon: '/images/icons/brand-identity-aviation.svg',
      title: 'هوية طيران مميزة',
      description: 'تصاميم فريدة تعكس هوية شركة الطيران وتميزها في المطارات والرحلات الجوية، مع مراعاة التراث السعودي.'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'جودة عالمية معتمدة',
      description: 'أقمشة فاخرة تلبي معايير الطيران الدولية مع مقاومة التجعد والحفاظ على المظهر الأنيق طوال الرحلة.'
    },
    {
      icon: '/images/icons/fabric-tech-performance.svg',
      title: 'تقنيات أقمشة متطورة',
      description: 'أقمشة ذكية تنظم درجة الحرارة وتوفر الراحة في ضغط المقصورة وتغيرات المناخ أثناء السفر.'
    },
    {
      icon: '/images/icons/modest-design-saudi.svg',
      title: 'تصاميم محتشمة وعصرية',
      description: 'أزياء طيران تجمع بين الأناقة العالمية والاحتشام المطلوب، مناسبة للطاقم السعودي والدولي.'
    },
    {
      icon: '/images/icons/compliance-shield.svg',
      title: 'مطابقة معايير السلامة',
      description: 'جميع المنتجات تلبي معايير سلامة الطيران المدني السعودي والمعايير الدولية للطيران.'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تخصيص شامل',
      description: 'إمكانيات لا محدودة للتخصيص تشمل الألوان والشعارات والرتب والإكسسوارات المكملة.'
    }
  ];

  // Aviation crew categories
  const crewCategories = [
    {
      name: 'طاقم قيادة الطائرة',
      description: 'أزياء رسمية للطيارين ومساعدي الطيار تعكس السلطة والمهنية العالية مع راحة فائقة أثناء الطيران.',
      image: '/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
      features: ['أقمشة مقاومة للتجعد', 'تصميم كلاسيكي أنيق', 'جيوب وظيفية', 'رتب وشارات مطرزة']
    },
    {
      name: 'طاقم الضيافة الجوية',
      description: 'تصاميم أنيقة ومريحة لمضيفات ومضيفي الطيران تجمع بين الجمال والوظائف العملية.',
      image: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
      features: ['حرية الحركة', 'أقمشة قابلة للتنفس', 'تصاميم محتشمة', 'ألوان ثابتة']
    },
    {
      name: 'الخدمات الأرضية',
      description: 'أزياء عملية لموظفي المطار والخدمات الأرضية مصممة للعمل في بيئة المطار الديناميكية.',
      image: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg',
      features: ['مقاومة الظروف الجوية', 'رؤية عالية', 'متانة فائقة', 'سهولة الحركة']
    },
    {
      name: 'الإدارة والمكاتب',
      description: 'أزياء إدارية أنيقة لموظفي مكاتب شركات الطيران والإدارة العليا في المطارات.',
      image: '/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg',
      features: ['مظهر تنفيذي', 'راحة مكتبية', 'تمثيل العلامة التجارية', 'تنوع في الأساليب']
    }
  ];

  // Featured aviation products
  const products = [
    {
      id: 'pilot-uniform-premium',
      name: 'زي طيار متميز',
      image: '/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
      price: '١٢٠٠ ر.س',
      category: 'أزياء الطيران',
      href: '/ar/shop/aviation-uniforms/pilot-uniform-premium',
      isNew: true,
      features: ['قماش صوف فاخر', 'رتب مطرزة', 'تصميم كلاسيكي']
    },
    {
      id: 'cabin-crew-female',
      name: 'زي مضيفة طيران',
      image: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
      price: '٨٥٠ ر.س',
      category: 'أزياء الطيران',
      href: '/ar/shop/aviation-uniforms/cabin-crew-female',
      features: ['تصميم محتشم', 'أقمشة مرنة', 'ألوان أنيقة']
    },
    {
      id: 'ground-crew-uniform',
      name: 'زي الخدمات الأرضية',
      image: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg',
      price: '٤٢٠ ر.س',
      category: 'أزياء الطيران',
      href: '/ar/shop/aviation-uniforms/ground-crew-uniform',
      features: ['مقاوم للطقس', 'رؤية عالية', 'متانة فائقة']
    },
    {
      id: 'aviation-blazer',
      name: 'بليزر طيران تنفيذي',
      image: '/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg',
      price: '٦٨٠ ر.س',
      category: 'أزياء الطيران',
      href: '/ar/shop/aviation-uniforms/aviation-blazer',
      features: ['تصميم تنفيذي', 'قماش فاخر', 'شعار مطرز']
    }
  ];

  // Client testimonials from aviation sector
  const testimonials = [
    {
      id: 1,
      name: 'كابتن محمد الحربي',
      role: 'طيار أول',
      company: 'الخطوط السعودية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/Saudi_Aviation_Academy.png',
      quote: 'أزياء يونيوم للطيران تجمع بين الأناقة والراحة بشكل مثالي. الجودة العالية والتصميم المدروس يعكسان احترافية الخطوط السعودية.'
    },
    {
      id: 2,
      name: 'أ. نورا القحطاني',
      role: 'كبيرة مضيفات',
      company: 'طيران ناس',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/Saudi_Aviation_Academy.png',
      quote: 'التصاميم المحتشمة والأنيقة من يونيوم تمنحنا الثقة والراحة أثناء العمل. الأقمشة عالية الجودة تحافظ على مظهرها حتى في الرحلات الطويلة.'
    },
    {
      id: 3,
      name: 'م. عبدالله السويلم',
      role: 'مدير العمليات الأرضية',
      company: 'مطار الملك عبدالعزيز الدولي',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/Saudi_Aviation_Academy.png',
      quote: 'برنامج الأزياء الموحدة من يونيوم حسّن من صورة فريق الخدمات الأرضية بشكل ملحوظ. الجودة والمتانة تناسب بيئة العمل في المطار.'
    }
  ];

  // Customization options for aviation
  const customizationOptions = [
    {
      name: 'شعارات وهوية الشركة',
      description: 'تطريز دقيق لشعارات شركات الطيران والرموز التجارية',
      icon: '/images/icons/brand-identity-aviation.svg'
    },
    {
      name: 'رتب وشارات الطيران',
      description: 'رتب مطرزة للطيارين وشارات التخصص لطاقم الضيافة',
      icon: '/images/icons/premium-quality.svg'
    },
    {
      name: 'ألوان مخصصة',
      description: 'مطابقة دقيقة لألوان الهوية البصرية لشركة الطيران',
      icon: '/images/icons/customization-icon.svg'
    },
    {
      name: 'إكسسوارات الطيران',
      description: 'ربطات عنق، أوشحة، قبعات، وحقائب مكملة للزي',
      icon: '/images/icons/comprehensive-support.svg'
    }
  ];

  // Aviation industry statistics
  const statistics = [
    { number: '٢٥+', label: 'شركة طيران تثق بنا' },
    { number: '١٠٠%', label: 'مطابقة معايير الطيران' },
    { number: '٩٧%', label: 'معدل رضا الطاقم' },
    { number: '٢٤/٧', label: 'دعم فني للطوارئ' }
  ];

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="أزياء الطيران والخطوط الجوية | يونيوم السعودية - مطابق لمعايير الطيران المدني"
        description="أزياء طيران احترافية لشركات الطيران السعودية. أزياء طيارين، مضيفات طيران، خدمات أرضية مع تصاميم محتشمة وأناقة عالمية. مطابق لمعايير الطيران المدني."
        keywords={[
          "أزياء طيران",
          "زي طيار",
          "مضيفة طيران",
          "يونيفورم طيران",
          "ملابس طاقم طيران",
          "أزياء خطوط جوية",
          "زي خدمات أرضية",
          "ملابس مطار",
          "أزياء طيران سعودية",
          "يونيفورم مضيفات"
        ]}
        author="فريق خبراء يونيوم للطيران"
        expertise="تصميم وتصنيع أزياء الطيران المعتمدة"
        contentType="service"
        trustSignals={[
          'مطابق لمعايير الطيران المدني السعودي',
          'معتمد من شركات الطيران الرائدة',
          'تصاميم محتشمة وعالمية',
          'خبرة 15+ سنة في قطاع الطيران'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-900 to-blue-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg"
            alt="أزياء الطيران من يونيوم - مطابق لمعايير الطيران المدني السعودي"
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
              أزياء طيران <span className="text-sky-300">تحلق بالأناقة</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              حلول شاملة لأزياء الطيران تجمع بين الأناقة العالمية والتراث السعودي، مصممة لجميع أطقم الطيران والخدمات الجوية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/quote?industry=aviation" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر لشركة الطيران
              </Button>
              <Button 
                href="/ar/shop/aviation-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استعرض مجموعة الطيران
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
                <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">
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
              <SectionHeading>لماذا تختار أزياء يونيوم للطيران؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في صناعة الطيران، يُعد المظهر المهني للطاقم انعكاساً مباشراً لمستوى الخدمة ومكانة شركة الطيران. تقدم يونيوم أزياء طيران تجمع بين المعايير العالمية والهوية السعودية.
                </p>
                <p>
                  بفضل خبرتنا الواسعة مع شركات الطيران السعودية والدولية، نفهم متطلبات كل تخصص في قطاع الطيران، من الطيارين وطاقم الضيافة إلى الخدمات الأرضية والإدارة.
                </p>
                <p>
                  تصاميمنا تلبي معايير الطيران المدني السعودي والمعايير الدولية، مع مراعاة خاصة للراحة أثناء الطيران والمظهر الأنيق في جميع الأوقات.
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
                  src="/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg"
                  alt="طاقم طيران يرتدي أزياء يونيوم في مطار سعودي"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Grid */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا أزياء الطيران من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات متقدمة ومعايير عالمية تجعل أزياءنا الخيار الأول لشركات الطيران الرائدة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-sky-50 p-4 rounded-full ml-4">
                    <Image 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      width={32} 
                      height={32}
                      className="text-sky-600"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800">{benefit.title}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Crew Categories Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>حلول لجميع أطقم الطيران</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              أزياء متخصصة لكل فئة في قطاع الطيران مع مراعاة الاحتياجات الخاصة لكل تخصص
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {crewCategories.map((category, index) => (
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
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-sky-500 rounded-full ml-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/ar/shop/aviation-uniforms" 
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                  >
                    استكشف المنتجات
                    <svg 
                      className="mr-2 h-5 w-5 rtl-flip" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>منتجات الطيران المميزة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تشكيلة شاملة من أزياء الطيران عالية الجودة والمطابقة للمعايير الدولية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeIn}>
                <ProductCard product={product} locale="ar" showAddToQuote={true} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button href="/ar/shop/aviation-uniforms" variant="primary" size="lg">
              عرض جميع منتجات الطيران
            </Button>
          </div>
        </Container>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-sky-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading>خيارات التخصيص للطيران</SectionHeading>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                نقدم خيارات تخصيص شاملة لضمان أن تعكس أزياء طاقمكم هوية شركة الطيران بشكل مثالي.
              </p>
              
              <div className="space-y-6">
                {customizationOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-3 rounded-full flex-shrink-0 ml-4 shadow-md">
                      <Image 
                        src={option.icon} 
                        alt={option.name} 
                        width={24} 
                        height={24}
                        className="text-sky-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-neutral-800">{option.name}</h4>
                      <p className="text-neutral-600 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
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
                  src="/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg"
                  alt="مضيفات طيران يرتدين أزياء يونيوم المخصصة بشعار شركة الطيران"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>شهادات من قطاع الطيران</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء الطيارين وطاقم الضيافة من شركات الطيران الرائدة في المملكة
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
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ارتقِ بصورة شركة الطيران إلى آفاق جديدة
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              احصل على استشارة مجانية من خبرائنا وعرض سعر مخصص لاحتياجات شركة الطيران
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة مجانية لشركات الطيران
              </Button>
              <Button 
                href="/ar/quote?industry=aviation" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-sky-600"
              >
                طلب عرض سعر
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}