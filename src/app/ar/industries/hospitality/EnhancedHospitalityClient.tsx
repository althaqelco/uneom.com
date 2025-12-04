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

export default function EnhancedHospitalityClient() {
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

  // Hospitality segments
  const hospitalitySegments = [
    {
      title: 'الفنادق الفاخرة',
      description: 'أزياء راقية تعكس مستوى الخدمة الفندقية المتميزة',
      image: '/images/hospitality/hospitality_uniform_formal.jpg',
      features: ['تصاميم أنيقة', 'أقمشة فاخرة', 'تفاصيل ذهبية', 'راحة طوال اليوم'],
      stats: '١٢٠+ فندق فاخر'
    },
    {
      title: 'المطاعم والمقاهي',
      description: 'أزياء عملية وأنيقة لفرق الخدمة والطهي',
      image: '/images/hospitality/hospitality_uniform_department.jpg',
      features: ['مقاومة البقع', 'سهولة التنظيف', 'تهوية ممتازة', 'حرية الحركة'],
      stats: '٣٠٠+ مطعم ومقهى'
    },
    {
      title: 'المنتجعات السياحية',
      description: 'أزياء متنوعة تناسب البيئة السياحية والترفيهية',
      image: '/images/hospitality/hospitality_uniform_concierge.jpg',
      features: ['ألوان زاهية', 'تصاميم مريحة', 'مقاومة الشمس', 'أناقة استوائية'],
      stats: '٨٠+ منتجع سياحي'
    },
    {
      title: 'مراكز المؤتمرات والفعاليات',
      description: 'أزياء مهنية للفعاليات الرسمية والمؤتمرات',
      image: '/images/hospitality/hospitality_uniform_buttons.jpg',
      features: ['مظهر مهني', 'راحة لساعات طويلة', 'سهولة التعرف', 'جودة عالية'],
      stats: '٥٠+ مركز مؤتمرات'
    }
  ];

  // Hospitality benefits
  const hospitalityBenefits = [
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'تعزيز تجربة الضيوف',
      description: 'أزياء أنيقة ومهنية تترك انطباعاً إيجابياً لدى الضيوف وتعزز صورة العلامة التجارية.',
      stats: '٩٢٪ تحسن في تقييمات الضيوف'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تخصيص حسب العلامة التجارية',
      description: 'تصاميم مخصصة تعكس هوية وقيم المؤسسة الفندقية أو المطعم.',
      stats: '١٠٠+ تصميم مخصص'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'راحة الموظفين',
      description: 'أقمشة مريحة وتصاميم عملية تساعد الموظفين على أداء مهامهم بكفاءة.',
      stats: '٩٥٪ رضا الموظفين'
    },
    {
      icon: '/images/icons/culturally-appropriate.svg',
      title: 'مطابقة للمعايير السعودية',
      description: 'تصاميم تحترم القيم الإسلامية والثقافة السعودية مع الحفاظ على الأناقة.',
      stats: '١٠٠٪ مطابقة ثقافية'
    }
  ];

  // Product categories
  const productCategories = [
    {
      name: 'أزياء الاستقبال والكونسيرج',
      description: 'أزياء أنيقة للانطباع الأول المتميز',
      image: '/images/hospitality/hospitality_uniform_concierge.jpg',
      products: ['بدلات استقبال', 'فساتين كونسيرج', 'ربطات عنق', 'إكسسوارات فاخرة']
    },
    {
      name: 'أزياء خدمة الطعام',
      description: 'ملابس عملية وأنيقة لفرق الخدمة',
      image: '/images/hospitality/hospitality_uniform_department.jpg',
      products: ['قمصان خدمة', 'مرايل أنيقة', 'بناطيل مريحة', 'أحذية مهنية']
    },
    {
      name: 'أزياء المطبخ والطهي',
      description: 'ملابس آمنة ومريحة للطهاة',
      image: '/images/hospitality/hospitality_uniform_fabric.jpg',
      products: ['معاطف طهي', 'قبعات شيف', 'مرايل مقاومة', 'أحذية أمان']
    },
    {
      name: 'أزياء التدبير المنزلي',
      description: 'ملابس عملية لفرق النظافة والتدبير',
      image: '/images/hospitality/hospitality_uniform_custom_logo.jpg',
      products: ['فساتين تدبير', 'مرايل واقية', 'أحذية مريحة', 'قفازات عمل']
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'فندق الريتز كارلتون الرياض',
      challenge: 'تطوير هوية بصرية موحدة لجميع الأقسام مع الحفاظ على الفخامة',
      solution: 'تصميم مجموعة متكاملة من الأزياء الفاخرة مع تفاصيل ذهبية مميزة',
      result: '٩٨٪ رضا الضيوف، ٩٥٪ رضا الموظفين، تحسن ملحوظ في تقييمات الفندق',
      image: '/images/hospitality/hospitality_uniform_formal.jpg',
      testimonial: 'يونيوم فهمت رؤيتنا للفخامة وترجمتها إلى أزياء استثنائية.',
      client: 'أ. سارة المالكي، مديرة الموارد البشرية'
    },
    {
      id: 2,
      title: 'مجموعة مطاعم نجد',
      challenge: 'توحيد الهوية البصرية لـ ٢٥ فرع مع الحفاظ على الطابع التراثي',
      solution: 'تطوير تصاميم تجمع بين الأصالة والحداثة مع ألوان تراثية',
      result: '٨٧٪ زيادة في التعرف على العلامة التجارية، ٩٠٪ رضا العملاء',
      image: '/images/hospitality/hospitality_uniform_department.jpg',
      testimonial: 'الأزياء عكست هويتنا التراثية بطريقة عصرية وأنيقة.',
      client: 'أ. فهد النجدي، المدير التنفيذي'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'أ. منى الشهري',
      role: 'مديرة العمليات',
      company: 'فندق موفنبيك الرياض',
      image: '/images/hospitality/hotel-staff-uniform.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'أزياء يونيوم حسنت من مظهر فريقنا وعززت ثقة الضيوف في خدماتنا. جودة استثنائية وخدمة متميزة.'
    },
    {
      id: 2,
      name: 'أ. خالد العمري',
      role: 'مدير المطعم',
      company: 'مطعم لقمة شهية',
      image: '/images/hospitality/hotel-staff-uniform.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الأزياء عملية ومريحة لفريق العمل، والتصميم يعكس هوية مطعمنا بشكل مثالي. شريك موثوق.'
    },
    {
      id: 3,
      name: 'د. نورا الحربي',
      role: 'مديرة المنتجع',
      company: 'منتجع شاطئ الخليج',
      image: '/images/hospitality/hotel-staff-uniform.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'التصاميم المبتكرة والألوان الزاهية أضافت لمسة مميزة لمنتجعنا. الضيوف يلاحظون الفرق.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٥٥٠+', label: 'منشأة ضيافة' },
    { number: '٩٤%', label: 'رضا المنشآت الفندقية' },
    { number: '٥٠,٠٠٠+', label: 'موظف ضيافة' },
    { number: '٢٠+', label: 'سنة خبرة في الضيافة' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="أزياء قطاع الضيافة | يونيوم السعودية - ملابس فنادق ومطاعم فاخرة"
        description="أزياء موحدة متخصصة لقطاع الضيافة في السعودية. ملابس فنادق، مطاعم، منتجعات. 550+ منشأة ضيافة، 94% رضا، تصاميم فاخرة، 20+ سنة خبرة، مطابقة للثقافة السعودية."
        keywords={[
          "أزياء ضيافة",
          "ملابس فنادق",
          "زي فندقي",
          "أزياء مطاعم",
          "ملابس خدمة",
          "زي موحد فندقي",
          "أزياء منتجعات",
          "ملابس كونسيرج",
          "زي استقبال",
          "أزياء ضيافة سعودية"
        ]}
        author="فريق خبراء الضيافة - يونيوم"
        expertise="تصميم وتوريد أزياء الضيافة الفاخرة"
        contentType="article"
        trustSignals={[
          '550+ منشأة ضيافة تثق بنا',
          '20+ سنة خبرة في قطاع الضيافة',
          'تصاميم فاخرة ومخصصة',
          '94% رضا المنشآت الفندقية'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/hospitality/hospitality_uniform_formal.jpg"
            alt="أزياء قطاع الضيافة من يونيوم - ملابس فنادق ومطاعم فاخرة"
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
              ضيافة استثنائية <span className="text-purple-300">بأزياء متميزة</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              أزياء فاخرة لقطاع الضيافة تجمع بين الأناقة والعملية، لتعزز تجربة الضيوف وتعكس مستوى الخدمة المتميز
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?industry=hospitality" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمنشأة
              </Button>
              <Button 
                href="/ar/shop/hospitality-attire" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح أزياء الضيافة
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
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
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
              <SectionHeading>لماذا تختار يونيوم لقطاع الضيافة؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في عالم الضيافة، الانطباع الأول يدوم. أزياءنا المتخصصة تضمن أن يكون فريقك دائماً في أفضل حالاته، مما يعزز ثقة الضيوف ويرفع من مستوى تجربتهم.
                </p>
                <p>
                  نفهم متطلبات قطاع الضيافة الفريدة، من الحاجة للأناقة في الاستقبال إلى العملية في المطبخ. لذلك نقدم حلول شاملة تلبي احتياجات كل قسم.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ٢٠ عاماً في خدمة أرقى الفنادق والمطاعم في المملكة جعلتنا نفهم أهمية التوازن بين الفخامة والعملية.
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
                  src="/images/hospitality/hospitality_uniform_concierge.jpg"
                  alt="موظف استقبال يرتدي الزي الفندقي الأنيق من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Hospitality Segments */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قطاعات الضيافة التي نخدمها</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول متخصصة لجميع أنواع منشآت الضيافة في المملكة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hospitalitySegments.map((segment, index) => (
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
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {segment.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{segment.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{segment.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
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
      <section className="py-20 bg-purple-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا أزياء الضيافة من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية تحققها أزياءنا لمنشآت الضيافة والموظفين
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hospitalityBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-purple-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>فئات أزياء الضيافة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من الأزياء المتخصصة لجميع أقسام الضيافة
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
                        <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
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
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قصص نجاح في قطاع الضيافة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية لمنشآت الضيافة
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
                    
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <blockquote className="text-neutral-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-purple-600">
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
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>شهادات منشآت الضيافة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا من الفنادق والمطاعم والمنتجعات
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ارتقِ بمستوى الضيافة مع يونيوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على عرض سعر مخصص وحلول شاملة لأزياء الضيافة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?industry=hospitality" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمنشأة
              </Button>
              <Button 
                href="/ar/shop/hospitality-attire" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-purple-600"
              >
                تصفح أزياء الضيافة
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}