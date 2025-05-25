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

export default function EnhancedFabricSelectionClient() {
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

  // Fabric categories
  const fabricCategories = [
    {
      name: 'الأقمشة الطبيعية الفاخرة',
      description: 'قطن مصري، صوف إيطالي، كتان أوروبي عالي الجودة',
      image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
      features: ['قابلية تنفس عالية', 'راحة طبيعية', 'مقاومة التجعد', 'صديق للبيئة'],
      applications: ['الأزياء التنفيذية', 'الملابس الرسمية', 'أزياء الضيافة الفاخرة']
    },
    {
      name: 'الأقمشة التقنية المتطورة',
      description: 'أقمشة ذكية مع خصائص الأداء المتقدمة',
      image: '/images/uneom_moisture_wicking.webp',
      features: ['مقاومة الرطوبة', 'تنظيم الحرارة', 'مضادة للبكتيريا', 'سهولة العناية'],
      applications: ['الأزياء الطبية', 'ملابس الطيران', 'الأزياء الرياضية']
    },
    {
      name: 'أقمشة الحماية والسلامة',
      description: 'مواد متخصصة للبيئات الصناعية والطبية',
      image: '/images/uneom_antimicrobial_treatment.webp',
      features: ['مقاومة النار', 'حماية كيميائية', 'رؤية عالية', 'متانة فائقة'],
      applications: ['الصناعات الثقيلة', 'المختبرات', 'أزياء الأمان']
    },
    {
      name: 'الأقمشة المخلوطة المبتكرة',
      description: 'مزيج مثالي من الراحة والأداء والمتانة',
      image: '/images/fabric-cotton-blends.webp',
      features: ['توازن مثالي', 'اقتصادية', 'متعددة الاستخدام', 'ألوان ثابتة'],
      applications: ['الأزياء المكتبية', 'ملابس الخدمة', 'الأزياء التعليمية']
    }
  ];

  // Fabric selection process
  const selectionProcess = [
    {
      step: '01',
      title: 'تحليل الاحتياجات',
      description: 'نحلل بيئة العمل ومتطلبات الاستخدام لتحديد المواصفات المطلوبة',
      icon: '/images/icons/consultation-icon.svg'
    },
    {
      step: '02',
      title: 'اختبار الأقمشة',
      description: 'نجري اختبارات شاملة للمتانة والراحة والأداء في ظروف العمل الفعلية',
      icon: '/images/icons/premium-quality.svg'
    },
    {
      step: '03',
      title: 'التوصيات المخصصة',
      description: 'نقدم توصيات مدروسة بناءً على الميزانية والاحتياجات والتفضيلات',
      icon: '/images/icons/customization-icon.svg'
    },
    {
      step: '04',
      title: 'العينات والموافقة',
      description: 'نوفر عينات للاختبار والتقييم قبل اتخاذ القرار النهائي',
      icon: '/images/icons/comprehensive-support.svg'
    }
  ];

  // Fabric technologies
  const fabricTechnologies = [
    {
      name: 'تقنية مقاومة الرطوبة',
      description: 'أقمشة تطرد الرطوبة وتحافظ على الجفاف',
      icon: '/images/icons/fabric-tech-performance.svg',
      benefits: ['راحة طوال اليوم', 'تجفيف سريع', 'منع الروائح', 'مناسب للمناخ الحار']
    },
    {
      name: 'المعالجة المضادة للميكروبات',
      description: 'حماية طبيعية ضد البكتيريا والفطريات',
      icon: '/images/icons/compliance-shield.svg',
      benefits: ['نظافة صحية', 'حماية إضافية', 'تقليل الغسيل', 'مناسب للقطاع الطبي']
    },
    {
      name: 'تقنية مقاومة التجعد',
      description: 'أقمشة تحافظ على مظهرها الأنيق',
      icon: '/images/icons/premium-quality.svg',
      benefits: ['مظهر مهني دائم', 'سهولة العناية', 'توفير الوقت', 'اقتصادية']
    },
    {
      name: 'الحماية من الأشعة فوق البنفسجية',
      description: 'حماية طبيعية من أشعة الشمس الضارة',
      icon: '/images/icons/culturally-appropriate.svg',
      benefits: ['حماية الجلد', 'مناسب للعمل الخارجي', 'راحة في الصيف', 'صحة أفضل']
    }
  ];

  // Quality standards
  const qualityStandards = [
    {
      standard: 'ISO 9001:2015',
      description: 'نظام إدارة الجودة المعتمد دولياً',
      scope: 'جميع عمليات اختيار وتوريد الأقمشة'
    },
    {
      standard: 'OEKO-TEX Standard 100',
      description: 'شهادة السلامة البيئية والصحية',
      scope: 'جميع الأقمشة المستخدمة في المنتجات'
    },
    {
      standard: 'معايير وزارة الصحة السعودية',
      description: 'مطابقة كاملة للمعايير الطبية المحلية',
      scope: 'الأقمشة الطبية والصحية'
    },
    {
      standard: 'معايير الطيران المدني',
      description: 'مطابقة لمعايير السلامة في الطيران',
      scope: 'أقمشة أزياء الطيران'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'م. عبدالله الحربي',
      role: 'مدير المشتريات',
      company: 'مجموعة سابك',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'خبرة يونيوم في اختيار الأقمشة ساعدتنا في الحصول على أزياء تتحمل البيئة الصناعية القاسية مع الحفاظ على الراحة.'
    },
    {
      id: 2,
      name: 'د. سارة العتيبي',
      role: 'مديرة الجودة',
      company: 'مستشفى الملك فيصل التخصصي',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الأقمشة المضادة للبكتيريا التي اختارتها يونيوم حسنت من معايير النظافة في مستشفانا بشكل ملحوظ.'
    },
    {
      id: 3,
      name: 'أ. فهد القحطاني',
      role: 'مدير العمليات',
      company: 'الخطوط السعودية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'جودة الأقمشة وخصائصها التقنية تناسب تماماً متطلبات العمل في الطيران. فريقنا راضٍ جداً عن الراحة والمظهر.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '١٠٠٠+', label: 'نوع قماش متاح' },
    { number: '٥٠+', label: 'مورد عالمي معتمد' },
    { number: '٩٩%', label: 'معدل رضا العملاء' },
    { number: '٢٤/٧', label: 'استشارات فنية' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="خدمات اختيار الأقمشة والمواد | يونيوم السعودية - خبراء الأقمشة التقنية"
        description="خدمات اختيار الأقمشة المتخصصة في السعودية. أقمشة طبيعية وتقنية عالية الجودة مع خصائص متقدمة. 1000+ نوع قماش، 50+ مورد عالمي، خبرة 15+ سنة."
        keywords={[
          "اختيار أقمشة",
          "أقمشة تقنية",
          "قماش طبيعي",
          "أقمشة طبية",
          "مواد متقدمة",
          "أقمشة مقاومة",
          "قطن مصري",
          "صوف إيطالي",
          "أقمشة ذكية",
          "مواد عالية الجودة"
        ]}
        author="فريق خبراء الأقمشة - يونيوم"
        expertise="اختيار وتوريد الأقمشة المتخصصة"
        contentType="service"
        trustSignals={[
          '1000+ نوع قماش متاح',
          '50+ مورد عالمي معتمد',
          'شهادات جودة دولية',
          'خبرة 15+ سنة في الأقمشة'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
            alt="خدمات اختيار الأقمشة من يونيوم - خبراء الأقمشة التقنية والطبيعية"
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
              أقمشة متميزة <span className="text-emerald-300">لأزياء استثنائية</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              خدمات اختيار الأقمشة المتخصصة تجمع بين الجودة العالمية والتقنيات المتطورة، لضمان الراحة والأداء والمتانة
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=fabric-selection" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة أقمشة مجانية
              </Button>
              <Button 
                href="/ar/fabric-catalog" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                كتالوج الأقمشة
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
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
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
              <SectionHeading>لماذا يُعد اختيار القماش المناسب أمراً بالغ الأهمية؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  القماش هو أساس أي زي موحد ناجح. الاختيار الصحيح يؤثر على الراحة والمتانة والمظهر المهني، بينما الاختيار الخاطئ قد يؤدي إلى مشاكل في الاستخدام والصيانة.
                </p>
                <p>
                  بفضل خبرتنا الواسعة وشراكاتنا مع أفضل موردي الأقمشة عالمياً، نساعدك في اختيار المواد المثالية التي تلبي احتياجاتك الخاصة وتناسب بيئة عملك.
                </p>
                <p>
                  من الأقمشة الطبيعية الفاخرة إلى المواد التقنية المتطورة، نوفر مجموعة شاملة تغطي جميع الاحتياجات والميزانيات.
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
                  alt="خبير أقمشة يونيوم يفحص جودة الأقمشة في المصنع"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Fabric Categories */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>فئات الأقمشة المتخصصة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من الأقمشة عالية الجودة لتلبية جميع احتياجات الأزياء الموحدة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fabricCategories.map((category, index) => (
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
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-emerald-600">المميزات:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full ml-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-neutral-700">التطبيقات:</h4>
                    <div className="space-y-1">
                      {category.applications.map((app, idx) => (
                        <div key={idx} className="text-sm text-neutral-600 bg-neutral-50 px-3 py-1 rounded-full inline-block ml-2 mb-2">
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

      {/* Selection Process */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>عملية اختيار الأقمشة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              منهجية علمية مدروسة لضمان اختيار الأقمشة المثالية لاحتياجاتك
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {selectionProcess.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="bg-emerald-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Image 
                    src={step.icon} 
                    alt={step.title} 
                    width={32} 
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-800">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Fabric Technologies */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>تقنيات الأقمشة المتطورة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              أحدث التقنيات في معالجة الأقمشة لتحسين الأداء والراحة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fabricTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-emerald-50 p-4 rounded-full ml-6 flex-shrink-0">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name} 
                      width={32} 
                      height={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{tech.name}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{tech.description}</p>
                    <div className="space-y-2">
                      {tech.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full ml-2"></div>
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

      {/* Quality Standards */}
      <section className="py-20 bg-emerald-50">
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
                <h3 className="text-xl font-bold mb-3 text-emerald-600">{standard.standard}</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">{standard.description}</p>
                <div className="text-sm text-neutral-600 bg-emerald-50 px-4 py-2 rounded-lg">
                  <strong>النطاق:</strong> {standard.scope}
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
              آراء عملائنا حول جودة الأقمشة وخدمات الاختيار المتخصصة
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              اكتشف الأقمشة المثالية لمشروعك
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل مع خبرائنا للحصول على استشارة مجانية واختيار الأقمشة المناسبة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=fabric-selection" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة أقمشة مجانية
              </Button>
              <Button 
                href="/ar/fabric-catalog" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                تصفح كتالوج الأقمشة
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}