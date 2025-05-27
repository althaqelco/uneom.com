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

export default function EnhancedCustomDesignClient() {
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

  // Design process steps
  const designSteps = [
    {
      number: '01',
      title: 'اكتشاف العلامة التجارية',
      description: 'نبدأ بدراسة شاملة لهوية علامتك التجارية وقيمها وأهدافها لفهم رؤيتك بشكل كامل.',
      icon: '/images/images/icons/brand-aligned.svg',
      duration: '١-٢ أسبوع'
    },
    {
      number: '02',
      title: 'تطوير المفهوم الإبداعي',
      description: 'يقوم فريق التصميم بإنشاء مفاهيم متعددة تجمع بين الجمال والوظائف العملية.',
      icon: '/images/icons/customization-icon.svg',
      duration: '٢-٣ أسابيع'
    },
    {
      number: '03',
      title: 'التحسين والنماذج الأولية',
      description: 'نطور نماذج أولية للتصاميم المختارة ونجري التعديلات اللازمة بناءً على ملاحظاتكم.',
      icon: '/images/icons/premium-quality.svg',
      duration: '٣-٤ أسابيع'
    },
    {
      number: '04',
      title: 'الإنتاج والتنفيذ',
      description: 'ندير عملية الإنتاج بمعايير جودة صارمة لضمان تحقيق رؤيتكم بأعلى مستوى.',
      icon: '/images/icons/comprehensive-support.svg',
      duration: '٦-٨ أسابيع'
    }
  ];

  // Key benefits
  const benefits = [
    {
      icon: '/images/images/icons/brand-aligned.svg',
      title: 'تعزيز الهوية التجارية',
      description: 'تصاميم فريدة تعكس شخصية علامتك التجارية وتميزها في السوق السعودي.',
      stats: '٩٢٪ زيادة في التعرف على العلامة التجارية'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'جودة استثنائية',
      description: 'أقمشة فاخرة وتقنيات تصنيع متقدمة تضمن المتانة والأناقة.',
      stats: '٩٨٪ معدل رضا العملاء'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تخصيص شامل',
      description: 'إمكانيات لا محدودة للتخصيص تشمل الألوان والأقمشة والتفاصيل.',
      stats: '١٠٠+ خيار تخصيص متاح'
    },
    {
      icon: '/images/icons/culturally-appropriate.svg',
      title: 'ملائم للثقافة السعودية',
      description: 'تصاميم تحترم القيم الإسلامية والتقاليد السعودية مع الحداثة.',
      stats: '١٠٠٪ مطابقة للمعايير الثقافية'
    }
  ];

  // Design specializations
  const specializations = [
    {
      title: 'الشركات والمكاتب',
      description: 'تصاميم مؤسسية تعكس الاحترافية والأناقة',
      image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
      features: ['بدلات تنفيذية', 'أزياء مكتبية', 'ملابس استقبال', 'شعارات مطرزة']
    },
    {
      title: 'القطاع الصحي',
      description: 'أزياء طبية متخصصة مع تقنيات مضادة للبكتيريا',
      image: '/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg',
      features: ['سكراب طبي', 'أردية جراحية', 'معاطف مختبر', 'تصاميم محتشمة']
    },
    {
      title: 'الضيافة والفنادق',
      description: 'أزياء فاخرة تعكس مستوى الخدمة المتميز',
      image: '/images/hospitality/hospitality_uniform_formal.jpg',
      features: ['أزياء استقبال', 'ملابس خدمة', 'تصاميم فاخرة', 'تفاصيل مميزة']
    },
    {
      title: 'الطيران والمطارات',
      description: 'تصاميم عالمية تلبي معايير الطيران الدولية',
      image: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
      features: ['أزياء طيارين', 'ملابس مضيفات', 'خدمات أرضية', 'رتب وشارات']
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'مجموعة فنادق المملكة',
      challenge: 'تطوير هوية بصرية موحدة لـ ١٢ فندق في مختلف مناطق المملكة',
      solution: 'تصميم نظام أزياء متكامل يجمع بين الفخامة والتراث السعودي',
      result: '٩٥٪ زيادة في رضا الضيوف عن المظهر المهني للموظفين',
      image: '/images/hospitality/hospitality_uniform_formal.jpg',
      testimonial: 'تصاميم يونيوم حولت صورة فنادقنا بشكل كامل. أصبح موظفونا سفراء حقيقيين لعلامتنا التجارية.',
      client: 'م. سارة الفيصل، مديرة العلامة التجارية'
    },
    {
      id: 2,
      title: 'مستشفى الملك فهد التخصصي',
      challenge: 'تحديث الأزياء الطبية مع الحفاظ على المعايير الطبية الصارمة',
      solution: 'تطوير مجموعة طبية متكاملة بتقنيات مضادة للبكتيريا',
      result: '٨٨٪ تحسن في راحة الطاقم الطبي و ٩٢٪ مطابقة لمعايير العدوى',
      image: '/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg',
      testimonial: 'الجودة والراحة التي وفرتها يونيوم ساعدت فريقنا الطبي على التركيز على المرضى.',
      client: 'د. أحمد الحربي، المدير الطبي'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'م. فهد العتيبي',
      role: 'مدير العمليات',
      company: 'مجموعة الرياض للاستثمار',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'فريق التصميم في يونيوم فهم رؤيتنا تماماً وحولها إلى واقع يفوق التوقعات. التصاميم المخصصة عكست هويتنا بشكل مثالي.'
    },
    {
      id: 2,
      name: 'أ. نورا القحطاني',
      role: 'مديرة الموارد البشرية',
      company: 'شركة أرامكو السعودية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'عملية التصميم كانت تعاونية ومهنية. النتيجة النهائية تجاوزت توقعاتنا وحسنت من صورة شركتنا بشكل كبير.'
    },
    {
      id: 3,
      name: 'د. خالد السويلم',
      role: 'الرئيس التنفيذي',
      company: 'مستشفى الدكتور سليمان الحبيب',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'التصاميم الطبية من يونيوم جمعت بين الوظائف العملية والمظهر المهني. فريقنا الطبي راضٍ جداً عن الجودة.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٥٠٠+', label: 'تصميم مخصص تم تنفيذه' },
    { number: '٩٨%', label: 'معدل رضا العملاء' },
    { number: '١٢-١٦', label: 'أسبوع متوسط وقت التنفيذ' },
    { number: '٢٤/٧', label: 'دعم فني متواصل' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="خدمات التصميم المخصص والعلامات التجارية | يونيوم السعودية - تصاميم فريدة تعكس هويتك"
        description="خدمات تصميم الأزياء الموحدة المخصصة في السعودية. تصاميم فريدة تعكس هوية علامتك التجارية مع خبرة 15+ سنة. 500+ تصميم مخصص، 98% رضا العملاء."
        keywords={[
          "تصميم أزياء مخصص",
          "تصميم يونيفورم",
          "علامة تجارية أزياء",
          "تصميم ملابس موحدة",
          "هوية بصرية أزياء",
          "تخصيص ملابس عمل",
          "تصميم زي موحد سعودي",
          "شعارات مطرزة",
          "ألوان مخصصة",
          "تصميم احترافي"
        ]}
        author="فريق خبراء التصميم - يونيوم"
        expertise="تصميم وتطوير الأزياء الموحدة المخصصة"
        contentType="service"
        trustSignals={[
          '500+ تصميم مخصص منجز',
          'خبرة 15+ سنة في التصميم',
          'فريق مصممين محترفين',
          'تقنيات تصنيع متقدمة'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
            alt="خدمات التصميم المخصص من يونيوم - تصاميم فريدة تعكس هوية علامتك التجارية"
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
              تصاميم مخصصة <span className="text-purple-300">تعكس هويتك</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              حلول تصميم شاملة للأزياء الموحدة تجمع بين الإبداع والوظائف العملية، مصممة خصيصاً لتعزيز هوية علامتك التجارية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?service=custom-design" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب استشارة تصميم مجانية
              </Button>
              <Button 
                href="/ar/portfolio" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استعرض أعمالنا السابقة
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
              <SectionHeading>لماذا تختار خدمات التصميم المخصص من يونيوم؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في عالم الأعمال التنافسي اليوم، تُعد الهوية البصرية المميزة أحد أهم عوامل النجاح. نقدم خدمات تصميم مخصصة تحول رؤيتك إلى واقع ملموس.
                </p>
                <p>
                  فريقنا من المصممين المحترفين يجمع بين الخبرة العالمية والفهم العميق للثقافة السعودية، لنقدم تصاميم تعكس هويتك وتحترم قيمك.
                </p>
                <p>
                  من المفهوم الأولي إلى التنفيذ النهائي، نرافقك في كل خطوة لضمان تحقيق رؤيتك بأعلى معايير الجودة والإبداع.
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
                  src="/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
                  alt="عينات أقمشة وألوان متنوعة لخدمات التصميم المخصص"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>عملية التصميم المخصص</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              منهجية منظمة ومدروسة لضمان تحقيق رؤيتك بأعلى معايير الجودة والإبداع
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {designSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={fadeIn}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ml-4">
                      {step.number}
                    </div>
                    <div className="bg-purple-50 p-3 rounded-full">
                      <Image 
                        src={step.icon} 
                        alt={step.title} 
                        width={24} 
                        height={24}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-neutral-800">{step.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-sm text-purple-600 font-semibold">
                    المدة: {step.duration}
                  </div>
                </div>
                {index < designSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-purple-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا التصميم المخصص</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية وقابلة للقياس تحققها خدمات التصميم المخصص لعلامتك التجارية
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

      {/* Specializations Section */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>تخصصاتنا في التصميم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              خبرة متخصصة في تصميم الأزياء الموحدة لمختلف القطاعات والصناعات
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{spec.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{spec.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {spec.features.map((feature, idx) => (
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
            <SectionHeading centered>قصص نجاح ملهمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية لعملائنا في مختلف القطاعات
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
            <SectionHeading centered>شهادات العملاء</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا الذين اختاروا خدمات التصميم المخصص من يونيوم
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
              ابدأ رحلة التصميم المخصص اليوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على استشارة مجانية وتحويل رؤيتك إلى تصاميم استثنائية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?service=custom-design" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                احجز استشارة تصميم مجانية
              </Button>
              <Button 
                href="/ar/portfolio" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-purple-600"
              >
                استعرض معرض أعمالنا
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}