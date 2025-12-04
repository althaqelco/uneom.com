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

export default function EnhancedEducationClient() {
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

  // Educational segments
  const educationSegments = [
    {
      title: 'المدارس الحكومية',
      description: 'أزياء موحدة تلبي معايير وزارة التعليم السعودية',
      image: '/images/blog/school-uniform-post-1.jpg',
      features: ['مطابقة للمعايير الحكومية', 'أقمشة عالية الجودة', 'تصاميم محتشمة', 'أسعار تنافسية'],
      stats: '٢٠٠+ مدرسة حكومية'
    },
    {
      title: 'المدارس الأهلية والعالمية',
      description: 'تصاميم مخصصة تعكس هوية المؤسسة التعليمية',
      image: '/images/blog/sustainable-uniform.jpg',
      features: ['تصاميم مخصصة', 'شعارات مطرزة', 'ألوان متنوعة', 'جودة فاخرة'],
      stats: '١٥٠+ مدرسة أهلية'
    },
    {
      title: 'الجامعات والكليات',
      description: 'أزياء أكاديمية للطلاب وأعضاء هيئة التدريس',
      image: '/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg',
      features: ['أزياء أكاديمية', 'ملابس مختبرات', 'أردية تخرج', 'زي هيئة التدريس'],
      stats: '٥٠+ جامعة وكلية'
    },
    {
      title: 'المعاهد التقنية والمهنية',
      description: 'ملابس عملية للتدريب المهني والتقني',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      features: ['ملابس ورش', 'معدات حماية', 'أزياء مختبرات', 'ملابس تدريب'],
      stats: '٨٠+ معهد تقني'
    }
  ];

  // Educational benefits
  const educationBenefits = [
    {
      icon: '/images/icons/culturally-appropriate.svg',
      title: 'مطابقة للمعايير التعليمية',
      description: 'تصاميم تلبي جميع متطلبات وزارة التعليم السعودية والمعايير الدولية.',
      stats: '١٠٠٪ مطابقة للمعايير'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'جودة تتحمل الاستخدام اليومي',
      description: 'أقمشة متينة تتحمل النشاطات المدرسية والغسيل المتكرر.',
      stats: '٩٨٪ معدل رضا الطلاب'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تخصيص حسب المؤسسة',
      description: 'إمكانية تخصيص الألوان والشعارات والتفاصيل حسب هوية المؤسسة.',
      stats: '٥٠+ خيار تخصيص'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'دعم شامل للمؤسسات التعليمية',
      description: 'خدمات متكاملة من التصميم إلى التوريد والصيانة.',
      stats: '٢٤/٧ دعم فني'
    }
  ];

  // Product categories
  const productCategories = [
    {
      name: 'الأزياء المدرسية الأساسية',
      description: 'مجموعة شاملة للطلاب والطالبات',
      image: '/images/blog/school-uniform-post-1.jpg',
      products: ['قمصان وبلوزات', 'بناطيل وتنانير', 'فساتين مدرسية', 'جاكيتات وسترات']
    },
    {
      name: 'الأزياء الرياضية',
      description: 'ملابس رياضية مريحة وعملية',
      image: '/images/blog/sustainable-uniform.jpg',
      products: ['تيشيرتات رياضية', 'شورتات وبناطيل', 'أحذية رياضية', 'حقائب رياضية']
    },
    {
      name: 'أزياء المختبرات',
      description: 'ملابس آمنة للأنشطة العلمية',
      image: '/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg',
      products: ['معاطف مختبر', 'نظارات حماية', 'قفازات', 'أحذية أمان']
    },
    {
      name: 'الإكسسوارات التعليمية',
      description: 'مكملات الزي المدرسي',
      image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
      products: ['ربطات عنق', 'أحزمة', 'شارات وأوسمة', 'حقائب مدرسية']
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      title: 'مدارس الرياض النموذجية',
      challenge: 'تحديث الأزياء المدرسية لـ ٢٥ مدرسة مع الحفاظ على الهوية',
      solution: 'تطوير نظام أزياء متكامل يجمع بين التقاليد والحداثة',
      result: '٩٥٪ رضا من الطلاب وأولياء الأمور، تحسن ملحوظ في الانضباط المدرسي',
      image: '/images/blog/school-uniform-post-1.jpg',
      testimonial: 'يونيوم فهمت احتياجاتنا التعليمية وقدمت حلول عملية ومبتكرة.',
      client: 'أ. فاطمة الزهراني، مديرة المدارس'
    },
    {
      id: 2,
      title: 'جامعة الملك سعود',
      challenge: 'توحيد أزياء الكليات العلمية والطبية',
      solution: 'تصميم مجموعة متخصصة لكل كلية مع معايير السلامة',
      result: '٩٠٪ تحسن في معايير السلامة، ٨٨٪ رضا أعضاء هيئة التدريس',
      image: '/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg',
      testimonial: 'الجودة والمهنية في التنفيذ جعلت من يونيوم شريكنا المفضل.',
      client: 'د. محمد العتيبي، عميد كلية الطب'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'أ. سارة الأحمد',
      role: 'مديرة مدرسة',
      company: 'مدارس الفيصلية الأهلية',
      image: '/images/education/teacher-uniform-professional.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'أزياء يونيوم حسنت من مظهر طلابنا وعززت الانتماء للمدرسة. الجودة ممتازة والأسعار معقولة.'
    },
    {
      id: 2,
      name: 'د. أحمد الحربي',
      role: 'عميد الكلية',
      company: 'كلية التقنية بالرياض',
      image: '/images/education/teacher-uniform-professional.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'ملابس المختبرات والورش من يونيوم توفر الحماية اللازمة مع الراحة في العمل. خدمة متميزة.'
    },
    {
      id: 3,
      name: 'أ. نورا القحطاني',
      role: 'مسؤولة المشتريات',
      company: 'إدارة تعليم الرياض',
      image: '/images/education/teacher-uniform-professional.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'التعامل مع يونيوم سهل ومرن. يلبون احتياجاتنا بسرعة ودقة عالية. شريك موثوق.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٤٨٠+', label: 'مؤسسة تعليمية' },
    { number: '٩٧%', label: 'رضا المؤسسات التعليمية' },
    { number: '٢٠٠,٠٠٠+', label: 'طالب وطالبة' },
    { number: '١٥+', label: 'سنة خبرة في التعليم' }
  ];

  return (
    <>
      {/* Enhanced SEO */}
      <EnhancedSEO2025 
        title="أزياء القطاع التعليمي | يونيوم السعودية - ملابس مدرسية وجامعية عالية الجودة"
        description="أزياء موحدة متخصصة للقطاع التعليمي في السعودية. ملابس مدرسية، جامعية، ومعاهد تقنية. 480+ مؤسسة تعليمية، 97% رضا، مطابقة لمعايير وزارة التعليم، تصاميم محتشمة."
        keywords={[
          "أزياء تعليمية",
          "ملابس مدرسية",
          "زي مدرسي",
          "أزياء جامعية",
          "ملابس طلاب",
          "زي موحد مدرسي",
          "أزياء معاهد",
          "ملابس مختبرات",
          "زي أكاديمي",
          "أزياء تعليم سعودي"
        ]}
        author="فريق خبراء التعليم - يونيوم"
        expertise="تصميم وتوريد الأزياء التعليمية"
        contentType="article"
        trustSignals={[
          '480+ مؤسسة تعليمية تثق بنا',
          'مطابقة 100% لمعايير وزارة التعليم',
          '15+ سنة خبرة في القطاع التعليمي',
          '200,000+ طالب وطالبة'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-emerald-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/blog/school-uniform-post-1.jpg"
            alt="أزياء القطاع التعليمي من يونيوم - ملابس مدرسية وجامعية عالية الجودة"
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
              أزياء تعليمية <span className="text-green-300">تلهم التميز</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              حلول شاملة للأزياء التعليمية تجمع بين الجودة والراحة والمطابقة لمعايير وزارة التعليم السعودية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?industry=education" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمؤسسة
              </Button>
              <Button 
                href="/ar/shop/education-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح المنتجات التعليمية
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
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
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
              <SectionHeading>لماذا تختار يونيوم للقطاع التعليمي؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  نفهم أن الزي المدرسي ليس مجرد ملابس، بل جزء من الهوية التعليمية التي تعزز الانتماء والانضباط. لذلك نقدم حلول شاملة تلبي احتياجات جميع المؤسسات التعليمية.
                </p>
                <p>
                  خبرتنا الممتدة لأكثر من ١٥ عاماً في القطاع التعليمي السعودي جعلتنا نفهم المتطلبات الخاصة لكل مرحلة تعليمية، من رياض الأطفال إلى الجامعات.
                </p>
                <p>
                  نلتزم بأعلى معايير الجودة والسلامة، مع ضمان المطابقة الكاملة لمعايير وزارة التعليم والقيم الإسلامية والثقافة السعودية.
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
                  src="/images/blog/sustainable-uniform.jpg"
                  alt="طلاب يرتدون الأزياء التعليمية من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Education Segments */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>قطاعات التعليم التي نخدمها</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول متخصصة لجميع المراحل والمؤسسات التعليمية في المملكة
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationSegments.map((segment, index) => (
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
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {segment.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{segment.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{segment.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
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
      <section className="py-20 bg-green-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا الأزياء التعليمية من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              فوائد حقيقية تحققها أزياءنا للمؤسسات التعليمية والطلاب
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-green-50 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
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
            <SectionHeading centered>فئات المنتجات التعليمية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة شاملة من الأزياء والمنتجات التعليمية عالية الجودة
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
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
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
            <SectionHeading centered>قصص نجاح في القطاع التعليمي</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مشاريع حقيقية حققت نتائج استثنائية للمؤسسات التعليمية
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
                    
                    <div className="bg-green-50 p-6 rounded-xl">
                      <blockquote className="text-neutral-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-green-600">
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
            <SectionHeading centered>شهادات المؤسسات التعليمية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء عملائنا من المدارس والجامعات والمعاهد التعليمية
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ارتقِ بمؤسستك التعليمية مع يونيوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على عرض سعر مخصص وحلول شاملة للأزياء التعليمية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?industry=education" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمؤسسة
              </Button>
              <Button 
                href="/ar/shop/education-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-green-600"
              >
                تصفح المنتجات التعليمية
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}