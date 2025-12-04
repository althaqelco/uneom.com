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

export default function EnhancedTechnicalFinishesClient() {
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

  // Technical finishes
  const technicalFinishes = [
    {
      title: 'المعالجة المضادة للميكروبات',
      description: 'تقنية متقدمة تمنع نمو البكتيريا والفطريات',
      image: '/images/uneom_antimicrobial_treatment.webp',
      features: ['حماية ٩٩.٩٪ من البكتيريا', 'مقاومة الروائح', 'آمنة على البشرة', 'فعالية طويلة المدى'],
      applications: ['الأزياء الطبية', 'ملابس الطعام', 'الأزياء الرياضية', 'بيئات العمل الحساسة']
    },
    {
      title: 'تقنية طرد الرطوبة',
      description: 'أقمشة ذكية تحافظ على جفاف الجسم وراحته',
      image: '/images/uneom_moisture_wicking.webp',
      features: ['جفاف سريع', 'تهوية ممتازة', 'راحة طوال اليوم', 'مقاومة التعرق'],
      applications: ['الأزياء الرياضية', 'ملابس العمل الشاق', 'البيئات الحارة', 'الأنشطة الخارجية']
    },
    {
      title: 'المقاومة المائية والبقع',
      description: 'حماية فائقة ضد الماء والسوائل والبقع',
      image: '/images/fabric-cotton-blends.webp',
      features: ['مقاومة مائية ١٠٠٪', 'طرد البقع', 'سهولة التنظيف', 'حفظ المظهر'],
      applications: ['أزياء المطاعم', 'ملابس المختبرات', 'بيئات العمل الرطبة', 'الاستخدام الخارجي']
    },
    {
      title: 'الحماية من الأشعة فوق البنفسجية',
      description: 'حماية متقدمة من أشعة الشمس الضارة',
      image: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
      features: ['حماية UPF 50+', 'منع التلاشي', 'راحة في الشمس', 'حماية البشرة'],
      applications: ['العمل الخارجي', 'الأنشطة الرياضية', 'السياحة', 'البناء والإنشاءات']
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: '١',
      title: 'تحليل المتطلبات',
      description: 'دراسة شاملة لبيئة العمل والاحتياجات الخاصة',
      icon: '/images/icons/consultation-icon.svg'
    },
    {
      step: '٢',
      title: 'اختيار التقنية المناسبة',
      description: 'تحديد أفضل المعالجات التقنية حسب الاستخدام',
      icon: '/images/icons/customization-icon.svg'
    },
    {
      step: '٣',
      title: 'التطبيق المتخصص',
      description: 'تطبيق المعالجات بأحدث التقنيات والمعايير',
      icon: '/images/icons/premium-quality.svg'
    },
    {
      step: '٤',
      title: 'الاختبار والضمان',
      description: 'اختبارات شاملة لضمان فعالية المعالجة',
      icon: '/images/compliance-shield.svg'
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'أداء متفوق',
      description: 'تحسين كبير في خصائص الأقمشة ووظائفها الأساسية.',
      stats: '٨٥٪ تحسن في الأداء'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'راحة استثنائية',
      description: 'تجربة ارتداء مريحة وممتعة في جميع الظروف.',
      stats: '٩٢٪ رضا المستخدمين'
    },
    {
      icon: '/images/compliance-shield.svg',
      title: 'متانة وطول العمر',
      description: 'زيادة عمر الأزياء وتقليل تكاليف الاستبدال.',
      stats: '٤٠٪ زيادة في العمر الافتراضي'
    },
    {
      icon: '/images/icons/culturally-appropriate.svg',
      title: 'صداقة للبيئة',
      description: 'معالجات آمنة بيئياً ومستدامة.',
      stats: '١٠٠٪ آمنة بيئياً'
    }
  ];

  // Applications by industry
  const industryApplications = [
    {
      industry: 'القطاع الطبي',
      applications: ['مقاومة البكتيريا', 'سهولة التعقيم', 'راحة طويلة', 'مقاومة السوائل'],
      image: '/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg'
    },
    {
      industry: 'الصناعات الغذائية',
      applications: ['مقاومة البقع', 'سهولة التنظيف', 'مقاومة الروائح', 'أمان غذائي'],
      image: '/images/fabric-cotton-blends.webp'
    },
    {
      industry: 'العمل الخارجي',
      applications: ['حماية من الشمس', 'مقاومة الطقس', 'جفاف سريع', 'متانة عالية'],
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg'
    },
    {
      industry: 'الرياضة واللياقة',
      applications: ['طرد الرطوبة', 'تهوية ممتازة', 'مرونة حركة', 'راحة قصوى'],
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'د. أحمد الطبيب',
      role: 'مدير المستشفى',
      company: 'مستشفى الملك فهد',
      image: '/images/team/uneom-team.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'المعالجة المضادة للميكروبات من يونيوم حسنت من معايير النظافة في مستشفانا بشكل كبير.'
    },
    {
      id: 2,
      name: 'م. سارة المهندسة',
      role: 'مديرة المصنع',
      company: 'مصانع الغذاء المتقدمة',
      image: '/images/team/uneom-team.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'تقنية مقاومة البقع وفرت علينا الكثير من وقت وتكلفة التنظيف. نتائج ممتازة.'
    },
    {
      id: 3,
      name: 'أ. خالد العامل',
      role: 'مشرف الموقع',
      company: 'شركة البناء الحديث',
      image: '/images/team/uneom-team.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الحماية من الأشعة فوق البنفسجية جعلت العمل تحت الشمس أكثر راحة وأماناً لفريقنا.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٢٠+', label: 'تقنية معالجة متقدمة' },
    { number: '٩٨%', label: 'فعالية المعالجات' },
    { number: '٥٠٠+', label: 'مشروع معالجة' },
    { number: '١٥+', label: 'سنة خبرة تقنية' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="خدمات المعالجات التقنية | يونيوم السعودية - تقنيات متقدمة للأقمشة والأزياء"
        description="خدمات متخصصة للمعالجات التقنية للأقمشة في السعودية. مقاومة البكتيريا، طرد الرطوبة، حماية UV. 20+ تقنية، 98% فعالية، 500+ مشروع، 15+ سنة خبرة، معالجات آمنة بيئياً."
        keywords={[
          "معالجات تقنية",
          "مقاومة البكتيريا",
          "طرد الرطوبة",
          "حماية الأشعة",
          "معالجة أقمشة",
          "تقنيات متقدمة",
          "مقاومة البقع",
          "أقمشة ذكية",
          "معالجات آمنة",
          "تقنيات سعودية"
        ]}
        author="فريق خبراء التقنيات - يونيوم"
        expertise="المعالجات التقنية المتقدمة للأقمشة"
        contentType="service"
        trustSignals={[
          '20+ تقنية معالجة متقدمة',
          '15+ سنة خبرة في التقنيات',
          '98% فعالية المعالجات',
          '500+ مشروع معالجة ناجح'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 to-cyan-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/uneom_antimicrobial_treatment.webp"
            alt="خدمات المعالجات التقنية من يونيوم - تقنيات متقدمة للأقمشة والأزياء"
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
              تقنيات متقدمة <span className="text-teal-300">لأداء استثنائي</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              معالجات تقنية متطورة تحول الأقمشة العادية إلى أزياء ذكية بخصائص فائقة تلبي احتياجات العمل الحديث
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=technical-finishes" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة تقنية مجانية
              </Button>
              <Button 
                href="/ar/services" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح جميع الخدمات
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
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
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
              <SectionHeading>لماذا تختار المعالجات التقنية من يونيوم؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في عالم اليوم، الأزياء العادية لا تكفي. نحن نحول الأقمشة إلى حلول ذكية بتقنيات متقدمة تحسن الأداء وتوفر الراحة والحماية في بيئات العمل المختلفة.
                </p>
                <p>
                  معالجاتنا التقنية تستخدم أحدث الابتكارات العالمية مع ضمان السلامة والاستدامة البيئية، لنقدم لك أزياء تتفوق على التوقعات.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ١٥ عاماً في التقنيات المتقدمة جعلتنا رواد في تطبيق أحدث المعالجات التقنية في المنطقة.
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
                  src="/images/uneom_moisture_wicking.webp"
                  alt="تقنيات المعالجة المتقدمة للأقمشة"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Technical Finishes */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>المعالجات التقنية المتقدمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات متطورة تحول أقمشتك إلى حلول ذكية بخصائص فائقة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technicalFinishes.map((finish, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={finish.image}
                    alt={finish.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{finish.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{finish.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-teal-700">المميزات:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {finish.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-teal-700">التطبيقات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {finish.applications.map((app, idx) => (
                        <span key={idx} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded">
                          {app}
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

      {/* Process Steps */}
      <section className="py-20 bg-teal-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>عملية المعالجة التقنية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              منهجية علمية متطورة لضمان أفضل النتائج
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-800">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>فوائد المعالجات التقنية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مزايا حقيقية تحققها تقنياتنا المتقدمة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                <div className="flex items-start">
                  <div className="bg-teal-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>التطبيقات حسب القطاع</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول مخصصة لكل قطاع وبيئة عمل
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industryApplications.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={industry.industry}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{industry.industry}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                        {app}
                      </div>
                    ))}
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
            <SectionHeading centered>شهادات العملاء</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا حول فعالية المعالجات التقنية
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              اكتشف قوة التقنيات المتقدمة
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على استشارة مجانية حول أفضل المعالجات التقنية لاحتياجاتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=technical-finishes" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة تقنية مجانية
              </Button>
              <Button 
                href="/ar/services" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-teal-600"
              >
                تصفح جميع الخدمات
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}