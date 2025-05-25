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

export default function EnhancedProgramManagementClient() {
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

  // Program management services
  const programManagementServices = [
    {
      title: 'إدارة شاملة لبرامج الأزياء الموحدة',
      description: 'نقدم حلولاً متكاملة لإدارة برامج الأزياء الموحدة للشركات والمؤسسات الكبرى.',
      image: '/images/service-overview.jpg', // Placeholder, replace with relevant image
      features: ['تخطيط استراتيجي', 'إدارة الموردين', 'مراقبة الجودة', 'توزيع ولوجستيات'],
      benefits: ['كفاءة تشغيلية', 'توفير في التكاليف', 'جودة مضمونة', 'التزام بالمواعيد']
    },
    {
      title: 'تطوير وتنفيذ خطط الأزياء',
      description: 'نساعدك في وضع خطط أزياء موحدة مخصصة وتنفيذها بكفاءة عالية.',
      image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
      features: ['تحليل الاحتياجات', 'تصميم الخطة', 'إدارة الميزانية', 'متابعة الأداء'],
      benefits: ['تحقيق الأهداف', 'تحسين الصورة الذهنية', 'رضا الموظفين', 'عائد استثمار مرتفع']
    },
    {
      title: 'إدارة المخزون والتوريد',
      description: 'حلول ذكية لإدارة مخزون الأزياء وضمان سلاسة عمليات التوريد.',
      image: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
      features: ['تنبؤ بالطلب', 'مستويات مخزون مثالية', 'تتبع الشحنات', 'تقارير دورية'],
      benefits: ['تقليل الهدر', 'توفر دائم', 'شفافية العمليات', 'تحكم كامل']
    },
    {
      title: 'الدعم الفني والاستشارات المستمرة',
      description: 'نقدم دعماً فنياً واستشارات متخصصة لضمان نجاح برنامج الأزياء الموحدة.',
      image: '/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg',
      features: ['فريق دعم مخصص', 'استشارات دورية', 'حل المشكلات', 'تحديثات وتطوير'],
      benefits: ['استمرارية النجاح', 'تحسين مستمر', 'شريك موثوق', 'راحة بال تامة']
    }
  ];

  // Program benefits
  const programBenefits = [
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'كفاءة تشغيلية عالية',
      description: 'نحسن عمليات إدارة الأزياء الموحدة لزيادة الكفاءة وتقليل الأعباء الإدارية.',
      stats: 'تحسين الكفاءة بنسبة ٤٠٪'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'تحكم كامل في التكاليف',
      description: 'نساعدك على تحقيق أفضل قيمة مقابل تكلفة مع الحفاظ على الجودة العالية.',
      stats: 'توفير يصل إلى ٢٥٪'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'جودة متسقة ومضمونة',
      description: 'نضمن تطبيق أعلى معايير الجودة في جميع مراحل البرنامج.',
      stats: 'رضا عن الجودة بنسبة ٩٨٪'
    },
    {
      icon: '/images/icons/compliance-shield.svg',
      title: 'شراكة استراتيجية موثوقة',
      description: 'نعمل كشريك استراتيجي لضمان تحقيق أهداف برنامج الأزياء الموحدة الخاص بك.',
      stats: 'علاقات شراكة تمتد لـ ١٠+ سنوات'
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: '١',
      title: 'التقييم والتخطيط',
      description: 'فهم متطلباتك ووضع خطة برنامج مخصصة.',
      icon: '/images/icons/consultation-icon.svg' 
    },
    {
      step: '٢',
      title: 'التصميم والتطوير',
      description: 'تصميم الأزياء وتطوير مواصفات البرنامج.',
      icon: '/images/icons/customization-icon.svg'
    },
    {
      step: '٣',
      title: 'التنفيذ والإدارة',
      description: 'إدارة عمليات الإنتاج، التوريد، والتوزيع.',
      icon: '/images/icons/premium-quality.svg'
    },
    {
      step: '٤',
      title: 'المتابعة والتحسين',
      description: 'مراقبة الأداء وتقديم تقارير وتحسينات مستمرة.',
      icon: '/images/icons/compliance-shield.svg'
    }
  ];
  
  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'السيد/ عمر خالد',
      role: 'مدير المشتريات',
      company: 'مجموعة شركات السالم القابضة',
      image: '/images/avatar-placeholder.jpg', // Placeholder
      logo: '/images/about/riyadh_chamber_of_commerce.png', // Placeholder
      quote: 'إدارة يونيوم لبرنامج أزيائنا الموحدة كانت احترافية وفعالة. لقد وفروا علينا الكثير من الجهد والمال.'
    },
    {
      id: 2,
      name: 'السيدة/ ليلى عبد العزيز',
      role: 'مديرة الموارد البشرية',
      company: 'البنك السعودي للاستثمار',
      image: '/images/avatar-placeholder.jpg', // Placeholder
      logo: '/images/about/riyadh_chamber_of_commerce.png', // Placeholder
      quote: 'فريق إدارة البرامج في يونيوم يتمتع بخبرة كبيرة وقدم لنا حلولاً مبتكرة لتوحيد أزياء موظفينا.'
    },
    {
      id: 3,
      name: 'المهندس/ أحمد ياسين',
      role: 'مدير العمليات',
      company: 'شركة المقاولات الوطنية',
      image: '/images/avatar-placeholder.jpg', // Placeholder
      logo: '/images/about/riyadh_chamber_of_commerce.png', // Placeholder
      quote: 'نقدر التزام يونيوم بالجودة والمواعيد في إدارة برنامج أزياء السلامة الخاص بعمالنا.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '١٥٠+', label: 'برنامج مُدار بنجاح' },
    { number: '٩٧%', label: 'رضا العملاء عن الإدارة' },
    { number: '١٠ سنوات+', label: 'خبرة في إدارة البرامج' },
    { number: '٢٠٪', label: 'متوسط التوفير المحقق للعملاء' }
  ];

  return (
    <>
      <EnhancedSEO2025 
        title="إدارة برامج الأزياء الموحدة | يونيوم السعودية"
        description="خدمات إدارة برامج الأزياء الموحدة للشركات في السعودية. تخطيط استراتيجي، إدارة موردين، مراقبة جودة، توفير تكاليف. 150+ برنامج، 97% رضا، 10+ سنوات خبرة."
        keywords={[
          "إدارة برامج الأزياء",
          "حلول أزياء الشركات",
          "إدارة موحدة",
          "برامج أزياء السعودية",
          "تخطيط أزياء",
          "إدارة توريد الأزياء",
          "استشارات أزياء الشركات"
        ]}
        author="فريق إدارة البرامج - يونيوم"
        expertise="إدارة برامج الأزياء الموحدة للشركات والمؤسسات"
        contentType="service"
        trustSignals={[
          'إدارة أكثر من 150 برنامج بنجاح',
          'خبرة تتجاوز 10 سنوات في إدارة برامج الأزياء',
          'تحقيق متوسط توفير 20% للعملاء',
          'معدل رضا عملاء 97% عن خدمات الإدارة'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-900 to-blue-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/service-overview.jpg" // Placeholder
            alt="إدارة برامج الأزياء الموحدة من يونيوم"
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
              إدارة احترافية <span className="text-sky-300">لبرامج أزيائكم الموحدة</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              نقدم حلولاً متكاملة لإدارة برامج الأزياء الموحدة، من التخطيط والتصميم إلى التوريد والتوزيع والمتابعة، لضمان تحقيق أهدافكم بكفاءة وفعالية.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=program-management" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب استشارة لإدارة برنامجكم
              </Button>
              <Button 
                href="/ar/services" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                اكتشف خدماتنا الأخرى
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
              <SectionHeading>لماذا تحتاج إلى إدارة متخصصة لبرنامج أزيائك؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  إدارة برنامج الأزياء الموحدة لشركة كبيرة أو مؤسسة يمكن أن تكون عملية معقدة وتستهلك الكثير من الوقت والموارد. نحن في يونيوم نتخصص في تبسيط هذه العملية وتحقيق أفضل النتائج.
                </p>
                <p>
                  من خلال خبرتنا، نضمن لكم الحصول على أزياء عالية الجودة، متوافقة مع هويتكم، ومناسبة لميزانيتكم، مع إدارة فعالة لجميع مراحل البرنامج.
                </p>
                <p>
                  نعمل كذراعكم التنفيذي، مما يتيح لكم التركيز على أعمالكم الأساسية بينما نهتم نحن بكل تفاصيل برنامج أزيائكم الموحدة.
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
                  src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg" // Placeholder
                  alt="فريق يونيوم يدير برنامج أزياء موحدة"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Program Management Services */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>خدماتنا في إدارة برامج الأزياء الموحدة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              نقدم مجموعة شاملة من الخدمات لضمان نجاح برنامج أزيائكم من البداية إلى النهاية.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {programManagementServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{service.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-sky-700">تشمل الخدمة:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-2 h-2 bg-sky-500 rounded-full ml-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-sky-700">الفوائد الرئيسية:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
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

      {/* Process Steps */}
      <section className="py-20 bg-sky-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>منهجيتنا في إدارة البرامج</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              نتبع عملية منظمة لضمان تحقيق أفضل النتائج لبرنامج أزيائكم الموحدة.
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
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-sky-600">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="mt-4">
                     <Image src={step.icon} alt={step.title} width={48} height={48} className="mx-auto"/>
                  </div>
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
            <SectionHeading centered>لماذا تختار يونيوم لإدارة برنامجك؟</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              نقدم قيمة مضافة حقيقية لشركتك من خلال خبرتنا وتفانينا.
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
                  <div className="bg-sky-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
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
            <SectionHeading centered>شهادات عملائنا في إدارة البرامج</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              يثق بنا كبار العملاء في إدارة برامج أزيائهم الموحدة.
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
              هل أنت مستعد لتبسيط إدارة أزيائك الموحدة؟
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكن لخبرائنا مساعدتك في تحقيق أهدافك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=program-management" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                اطلب استشارة مجانية الآن
              </Button>
              <Button 
                href="/ar/case-studies" // Assuming a case studies page exists
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-sky-600"
              >
                شاهد دراسات الحالة
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}