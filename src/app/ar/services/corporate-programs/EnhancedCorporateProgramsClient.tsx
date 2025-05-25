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

export default function EnhancedCorporateProgramsClient() {
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

  // Corporate programs
  const corporatePrograms = [
    {
      title: 'برنامج الشركات الكبرى',
      description: 'حلول شاملة للشركات متعددة الفروع والمواقع',
      image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
      features: ['إدارة مركزية', 'توحيد المعايير', 'خدمة ٢٤/٧', 'تقارير تفصيلية'],
      benefits: ['توفير ٣٠٪ في التكاليف', 'توحيد الهوية', 'سهولة الإدارة', 'جودة مضمونة']
    },
    {
      title: 'برنامج الشراكة الاستراتيجية',
      description: 'شراكات طويلة المدى مع خدمات متميزة',
      image: '/images/men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg',
      features: ['عقود طويلة المدى', 'أسعار تفضيلية', 'خدمات حصرية', 'دعم مخصص'],
      benefits: ['استقرار التكاليف', 'أولوية في الخدمة', 'حلول مبتكرة', 'نمو مشترك']
    },
    {
      title: 'برنامج الصيانة والتجديد',
      description: 'خدمات صيانة وتجديد شاملة للأزياء الموحدة',
      image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
      features: ['صيانة دورية', 'تجديد سنوي', 'استبدال سريع', 'ضمان الجودة'],
      benefits: ['إطالة عمر الأزياء', 'مظهر دائم', 'توفير التكاليف', 'راحة البال']
    },
    {
      title: 'برنامج التدريب والاستشارات',
      description: 'تدريب الفرق وتقديم الاستشارات المتخصصة',
      image: '/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg',
      features: ['تدريب متخصص', 'استشارات مهنية', 'ورش عمل', 'دعم مستمر'],
      benefits: ['تحسين الأداء', 'زيادة الوعي', 'تطوير المهارات', 'نتائج أفضل']
    }
  ];

  // Program benefits
  const programBenefits = [
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'إدارة شاملة ومتكاملة',
      description: 'نتولى إدارة جميع جوانب الأزياء الموحدة من التصميم إلى التسليم والصيانة.',
      stats: '٩٥٪ رضا في الإدارة'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'توفير كبير في التكاليف',
      description: 'برامج مصممة لتحقيق أقصى توفير مع الحفاظ على أعلى معايير الجودة.',
      stats: '٣٥٪ توفير في المتوسط'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'حلول مخصصة ومرنة',
      description: 'برامج قابلة للتخصيص حسب احتياجات كل شركة وطبيعة عملها.',
      stats: '١٠٠٪ تخصيص حسب الحاجة'
    },
    {
      icon: '/images/icons/compliance-shield.svg',
      title: 'ضمان الجودة والالتزام',
      description: 'التزام كامل بالمواعيد والمعايير مع ضمانات شاملة على الجودة.',
      stats: '٩٨٪ التزام بالمواعيد'
    }
  ];

  // Service levels
  const serviceLevels = [
    {
      level: 'البرونزي',
      description: 'الحزمة الأساسية للشركات الناشئة',
      features: ['تصميم أساسي', 'إنتاج محدود', 'دعم أساسي', 'ضمان سنة'],
      price: 'يبدأ من ٥٠٠ ريال',
      color: 'amber'
    },
    {
      level: 'الفضي',
      description: 'الحزمة المتوسطة للشركات المتنامية',
      features: ['تصميم متقدم', 'إنتاج موسع', 'دعم متقدم', 'ضمان سنتين'],
      price: 'يبدأ من ١,٠٠٠ ريال',
      color: 'gray'
    },
    {
      level: 'الذهبي',
      description: 'الحزمة المتميزة للشركات الكبيرة',
      features: ['تصميم حصري', 'إنتاج كامل', 'دعم مخصص', 'ضمان ٣ سنوات'],
      price: 'يبدأ من ٢,٠٠٠ ريال',
      color: 'yellow'
    },
    {
      level: 'البلاتيني',
      description: 'الحزمة الشاملة للمؤسسات الكبرى',
      features: ['تصميم فاخر', 'إنتاج لا محدود', 'دعم ٢٤/٧', 'ضمان ٥ سنوات'],
      price: 'حسب المتطلبات',
      color: 'slate'
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'مجموعة سامبا المالية',
      challenge: 'توحيد أزياء ١٥,٠٠٠ موظف في ٢٠٠ فرع مع ضمان الجودة والالتزام',
      solution: 'برنامج شراكة استراتيجية شامل مع إدارة مركزية وخدمات متكاملة',
      result: '٤٠٪ توفير في التكاليف، ٩٥٪ رضا الموظفين، توحيد كامل للهوية',
      image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
      testimonial: 'برنامج يونيوم المؤسسي حقق لنا توفيراً كبيراً مع ضمان الجودة.',
      client: 'أ. محمد الراجحي، مدير الموارد البشرية'
    },
    {
      id: 2,
      title: 'شركة أرامكو السعودية',
      challenge: 'إدارة أزياء ٨٠,٠٠٠ موظف مع متطلبات سلامة عالية ومعايير دولية',
      solution: 'برنامج مؤسسي متكامل مع تقنيات متقدمة وإدارة ذكية',
      result: '٥٠٪ تحسن في الكفاءة، ٩٨٪ مطابقة للمعايير، صفر تأخير',
      image: '/images/men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg',
      testimonial: 'الاحترافية والالتزام في برنامج يونيوم فاق توقعاتنا.',
      client: 'م. سارة العتيبي، مديرة المشتريات'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'أ. عبدالله الفيصل',
      role: 'الرئيس التنفيذي',
      company: 'مجموعة الفيصل التجارية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'برنامج يونيوم المؤسسي وفر علينا الكثير من الوقت والجهد. خدمة متميزة وجودة عالية.'
    },
    {
      id: 2,
      name: 'د. نورا الدوسري',
      role: 'مديرة الموارد البشرية',
      company: 'مستشفى الملك فهد',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الدعم المستمر والحلول المبتكرة جعلت إدارة الأزياء الطبية أسهل وأكثر كفاءة.'
    },
    {
      id: 3,
      name: 'م. خالد النجار',
      role: 'مدير العمليات',
      company: 'شركة الاتصالات السعودية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'التزام يونيوم بالمواعيد والجودة جعلهم الشريك المثالي لبرامجنا المؤسسية.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٥٠٠+', label: 'برنامج مؤسسي نشط' },
    { number: '٩٦%', label: 'رضا الشركات' },
    { number: '٢٠٠,٠٠٠+', label: 'موظف مستفيد' },
    { number: '١٢+', label: 'سنة خبرة مؤسسية' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="البرامج المؤسسية للشركات | يونيوم السعودية - حلول شاملة للأزياء الموحدة"
        description="برامج مؤسسية متخصصة للشركات في السعودية. إدارة شاملة، توفير 35%، شراكات استراتيجية. 500+ برنامج، 96% رضا، 200,000+ موظف، 12+ سنة خبرة، حلول مخصصة."
        keywords={[
          "برامج مؤسسية",
          "حلول شركات",
          "أزياء موحدة شركات",
          "برامج شراكة",
          "إدارة أزياء",
          "حلول مؤسسية",
          "برامج تدريب",
          "خدمات شركات",
          "برامج صيانة",
          "حلول سعودية"
        ]}
        author="فريق الحلول المؤسسية - يونيوم"
        expertise="تصميم وإدارة البرامج المؤسسية للأزياء الموحدة"
        contentType="service"
        trustSignals={[
          '500+ برنامج مؤسسي نشط',
          '12+ سنة خبرة في الحلول المؤسسية',
          '35% توفير متوسط في التكاليف',
          '200,000+ موظف مستفيد'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg"
            alt="البرامج المؤسسية للشركات من يونيوم - حلول شاملة للأزياء الموحدة"
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
              حلول مؤسسية <span className="text-indigo-300">متكاملة وذكية</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              برامج مؤسسية شاملة تدير جميع احتياجات الأزياء الموحدة للشركات الكبيرة مع ضمان التوفير والجودة والالتزام
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=corporate-programs" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة مؤسسية مجانية
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
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
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
              <SectionHeading>لماذا تختار البرامج المؤسسية من يونيوم؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  الشركات الكبيرة تحتاج حلول متطورة تتناسب مع حجمها وتعقيداتها. برامجنا المؤسسية مصممة خصيصاً لتلبية احتياجات المؤسسات الكبرى مع ضمان أقصى كفاءة وتوفير.
                </p>
                <p>
                  نقدم إدارة شاملة ومتكاملة تشمل التصميم والإنتاج والتوزيع والصيانة، مما يوفر على الشركات عناء التعامل مع متعددي الموردين.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ١٢ عاماً في خدمة المؤسسات الكبرى جعلتنا نطور فهماً عميقاً لاحتياجاتها وتحدياتها الفريدة.
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
                  src="/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg"
                  alt="فريق يونيوم يقدم الاستشارات المؤسسية"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Corporate Programs */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>البرامج المؤسسية المتاحة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من البرامج المصممة لتلبية احتياجات الشركات المختلفة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {corporatePrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{program.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-indigo-700">المميزات:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full ml-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-indigo-700">الفوائد:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                          {benefit}
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

      {/* Service Levels */}
      <section className="py-20 bg-indigo-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مستويات الخدمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              اختر المستوى الذي يناسب حجم شركتك واحتياجاتها
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceLevels.map((level, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className={`text-center mb-6`}>
                  <div className={`inline-block px-4 py-2 rounded-full text-white font-bold mb-4 ${
                    level.color === 'amber' ? 'bg-amber-500' :
                    level.color === 'gray' ? 'bg-gray-500' :
                    level.color === 'yellow' ? 'bg-yellow-500' :
                    'bg-slate-600'
                  }`}>
                    {level.level}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">{level.level}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{level.description}</p>
                  <div className="text-2xl font-bold text-indigo-600">{level.price}</div>
                </div>
                
                <div className="space-y-3">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full ml-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  href="/ar/contact?service=corporate-programs" 
                  variant="outline" 
                  size="sm"
                  className="w-full mt-6"
                >
                  اطلب الآن
                </Button>
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
            <SectionHeading centered>مزايا البرامج المؤسسية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية تحققها برامجنا للشركات والمؤسسات
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
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
            <SectionHeading centered>قصص نجاح البرامج المؤسسية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية للشركات والمؤسسات
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
                    
                    <div className="bg-indigo-50 p-6 rounded-xl">
                      <blockquote className="text-neutral-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-indigo-600">
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
            <SectionHeading centered>شهادات الشركات والمؤسسات</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا من الشركات الكبرى حول برامجنا المؤسسية
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ برنامجك المؤسسي اليوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على استشارة مجانية وتصميم البرنامج المؤسسي المناسب لشركتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=corporate-programs" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة مؤسسية مجانية
              </Button>
              <Button 
                href="/ar/services" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-indigo-600"
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