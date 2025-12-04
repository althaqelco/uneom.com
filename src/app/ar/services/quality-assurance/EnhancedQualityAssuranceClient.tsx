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

export default function EnhancedQualityAssuranceClient() {
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

  // Quality assurance stages
  const qaStages = [
    {
      stage: '01',
      title: 'فحص المواد الخام',
      description: 'فحص شامل لجميع الأقمشة والمواد قبل بدء الإنتاج',
      icon: '/images/icons/premium-quality.svg',
      tests: ['اختبار جودة القماش', 'فحص الألوان', 'اختبار المتانة', 'تحليل التركيب']
    },
    {
      stage: '02',
      title: 'مراقبة الإنتاج',
      description: 'مراقبة مستمرة لجميع مراحل التصنيع والخياطة',
      icon: '/images/compliance-shield.svg',
      tests: ['فحص الخياطة', 'مراجعة القياسات', 'اختبار التجميع', 'مراقبة العمليات']
    },
    {
      stage: '03',
      title: 'الفحص النهائي',
      description: 'فحص شامل للمنتج النهائي قبل التعبئة والشحن',
      icon: '/images/icons/comprehensive-support.svg',
      tests: ['فحص المظهر', 'اختبار المقاسات', 'مراجعة التشطيب', 'تأكيد المطابقة']
    },
    {
      stage: '04',
      title: 'ضمان ما بعد البيع',
      description: 'متابعة مستمرة لضمان رضا العملاء والجودة المستدامة',
      icon: '/images/icons/customization-icon.svg',
      tests: ['متابعة الأداء', 'تقييم العملاء', 'خدمة الصيانة', 'ضمان الجودة']
    }
  ];

  // Quality standards
  const qualityStandards = [
    {
      name: 'ISO 9001:2015',
      description: 'نظام إدارة الجودة المعتمد دولياً',
      scope: 'جميع عمليات الإنتاج والخدمات',
      benefits: ['تحسين مستمر', 'رضا العملاء', 'كفاءة العمليات', 'موثوقية عالية']
    },
    {
      name: 'OEKO-TEX Standard 100',
      description: 'شهادة السلامة البيئية للمنسوجات',
      scope: 'جميع المواد والأقمشة',
      benefits: ['أمان صحي', 'صديق للبيئة', 'خالي من المواد الضارة', 'جودة مضمونة']
    },
    {
      name: 'معايير وزارة الصحة السعودية',
      description: 'مطابقة كاملة للمعايير الطبية المحلية',
      scope: 'الأزياء الطبية والصحية',
      benefits: ['مطابقة محلية', 'سلامة طبية', 'جودة معتمدة', 'ثقة المؤسسات']
    },
    {
      name: 'معايير الطيران المدني',
      description: 'مطابقة لمعايير السلامة في الطيران',
      scope: 'أزياء الطيران والمطارات',
      benefits: ['سلامة الطيران', 'مطابقة دولية', 'جودة عالمية', 'موثوقية تامة']
    }
  ];

  // Testing procedures
  const testingProcedures = [
    {
      category: 'اختبارات الأقمشة',
      tests: [
        { name: 'اختبار المتانة', description: 'قياس قوة تحمل القماش للاستخدام اليومي' },
        { name: 'اختبار ثبات الألوان', description: 'ضمان عدم بهتان الألوان مع الغسيل' },
        { name: 'اختبار مقاومة التجعد', description: 'قياس قدرة القماش على مقاومة التجاعيد' },
        { name: 'اختبار النفاذية', description: 'قياس قابلية التنفس والراحة' }
      ]
    },
    {
      category: 'اختبارات الخياطة',
      tests: [
        { name: 'قوة الخياطة', description: 'اختبار متانة الخيوط والدرزات' },
        { name: 'دقة القياسات', description: 'التأكد من مطابقة المقاسات المطلوبة' },
        { name: 'جودة التشطيب', description: 'فحص الحواف والتفاصيل النهائية' },
        { name: 'اختبار الأزرار', description: 'ضمان قوة تثبيت الأزرار والإكسسوارات' }
      ]
    }
  ];

  // Quality metrics
  const qualityMetrics = [
    {
      metric: 'معدل الجودة الإجمالي',
      value: '99.5%',
      description: 'نسبة المنتجات التي تجتاز جميع اختبارات الجودة',
      trend: 'تحسن مستمر'
    },
    {
      metric: 'رضا العملاء',
      value: '98.2%',
      description: 'نسبة العملاء الراضين عن جودة المنتجات',
      trend: 'استقرار عالي'
    },
    {
      metric: 'معدل الإرجاع',
      value: '0.3%',
      description: 'نسبة المنتجات المرتجعة بسبب عيوب الجودة',
      trend: 'انخفاض مستمر'
    },
    {
      metric: 'الالتزام بالمواعيد',
      value: '99.1%',
      description: 'نسبة الطلبات المسلمة في الموعد المحدد',
      trend: 'تحسن ملحوظ'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'د. محمد الحربي',
      role: 'مدير الجودة',
      company: 'مستشفى الملك فهد التخصصي',
      image: '/images/team/uneom-team.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'معايير الجودة في يونيوم تفوق توقعاتنا. الأزياء الطبية تلبي جميع المتطلبات الصحية والمهنية بامتياز.'
    },
    {
      id: 2,
      name: 'م. سارة العتيبي',
      role: 'مديرة المشتريات',
      company: 'شركة أرامكو السعودية',
      image: '/images/team/uneom-team.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الاهتمام بالتفاصيل ومراقبة الجودة في كل مرحلة يضمن حصولنا على منتجات تلبي أعلى المعايير الصناعية.'
    },
    {
      id: 3,
      name: 'أ. فهد القحطاني',
      role: 'مدير العمليات',
      company: 'الخطوط الجوية السعودية',
      image: '/images/team/uneom-team.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'جودة أزياء الطيران من يونيوم تعكس صورة مهنية متميزة لشركتنا. الجودة ثابتة في كل دفعة إنتاج.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٩٩.٥%', label: 'معدل الجودة الإجمالي' },
    { number: '٥٠+', label: 'نقطة فحص جودة' },
    { number: '٢٤/٧', label: 'مراقبة مستمرة' },
    { number: '١٠+', label: 'شهادات جودة دولية' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="خدمات ضمان الجودة | يونيوم السعودية - معايير عالمية ومراقبة شاملة"
        description="خدمات ضمان الجودة المتخصصة للأزياء الموحدة في السعودية. معايير ISO 9001، مراقبة شاملة، 99.5% معدل جودة، 50+ نقطة فحص، شهادات دولية معتمدة."
        keywords={[
          "ضمان الجودة",
          "مراقبة الجودة",
          "معايير الجودة",
          "اختبارات الجودة",
          "شهادات ISO",
          "فحص المنتجات",
          "جودة الأزياء",
          "معايير التصنيع",
          "مراقبة الإنتاج",
          "ضمان المطابقة"
        ]}
        author="فريق خبراء الجودة - يونيوم"
        expertise="ضمان الجودة ومراقبة المعايير"
        contentType="service"
        trustSignals={[
          '99.5% معدل جودة إجمالي',
          'شهادات ISO 9001:2015',
          '50+ نقطة فحص جودة',
          'مراقبة 24/7 مستمرة'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
            alt="خدمات ضمان الجودة من يونيوم - معايير عالمية ومراقبة شاملة"
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
              ضمان الجودة <span className="text-blue-300">بمعايير عالمية</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              نظام شامل لضمان الجودة يغطي جميع مراحل الإنتاج، من المواد الخام إلى المنتج النهائي، بمعايير دولية معتمدة
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=quality-assurance" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة جودة مجانية
              </Button>
              <Button 
                href="/ar/quality-certificates" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                شهادات الجودة
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
              <SectionHeading>لماذا يُعد ضمان الجودة أولوية قصوى في يونيوم؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  الجودة ليست مجرد هدف نسعى إليه، بل فلسفة نعمل بها في كل خطوة من خطوات الإنتاج. نؤمن أن العملاء يستحقون الأفضل، ولذلك نطبق أصرم معايير الجودة العالمية.
                </p>
                <p>
                  فريقنا المتخصص في ضمان الجودة يعمل على مدار الساعة لمراقبة جميع مراحل الإنتاج، من اختيار المواد الخام إلى التسليم النهائي.
                </p>
                <p>
                  حصولنا على شهادات الجودة الدولية مثل ISO 9001:2015 و OEKO-TEX يؤكد التزامنا بتقديم منتجات تلبي أعلى المعايير العالمية.
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
                  src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                  alt="خبير جودة يونيوم يفحص جودة الأقمشة والمنتجات"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* QA Stages */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مراحل ضمان الجودة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              نظام متكامل لضمان الجودة في كل مرحلة من مراحل الإنتاج
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {qaStages.map((stage, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {stage.stage}
                </div>
                <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Image 
                    src={stage.icon} 
                    alt={stage.title} 
                    width={24} 
                    height={24}
                  />
                </div>
                <h3 className="text-lg font-bold mb-3 text-neutral-800">{stage.title}</h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{stage.description}</p>
                <div className="space-y-1">
                  {stage.tests.map((test, idx) => (
                    <div key={idx} className="flex items-center text-xs text-neutral-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full ml-2"></div>
                      {test}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-blue-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>معايير الجودة المعتمدة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              شهادات واعتمادات دولية تؤكد التزامنا بأعلى معايير الجودة
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
                <h3 className="text-xl font-bold mb-3 text-blue-600">{standard.name}</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">{standard.description}</p>
                <div className="text-sm text-neutral-600 bg-blue-50 px-4 py-2 rounded-lg mb-4">
                  <strong>النطاق:</strong> {standard.scope}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {standard.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Testing Procedures */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>إجراءات الاختبار والفحص</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              اختبارات شاملة ومتخصصة لضمان أعلى مستويات الجودة والأداء
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testingProcedures.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-600">{category.category}</h3>
                <div className="space-y-4">
                  {category.tests.map((test, idx) => (
                    <div key={idx} className="border-r-4 border-blue-200 pr-4">
                      <h4 className="font-bold text-lg mb-2 text-neutral-800">{test.name}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{test.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مؤشرات الأداء والجودة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              أرقام حقيقية تعكس التزامنا بالتميز والجودة العالية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                variants={fadeIn}
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{metric.value}</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">{metric.metric}</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">{metric.description}</p>
                <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {metric.trend}
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
              آراء عملائنا حول جودة منتجاتنا وخدمات ضمان الجودة
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
              اطمئن على جودة منتجاتك مع يونيوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على استشارة مجانية حول معايير الجودة وضمان المطابقة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=quality-assurance" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة جودة مجانية
              </Button>
              <Button 
                href="/ar/quality-certificates" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
              >
                تحميل شهادات الجودة
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}