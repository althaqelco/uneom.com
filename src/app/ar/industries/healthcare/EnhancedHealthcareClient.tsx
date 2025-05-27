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

export default function EnhancedHealthcareClient() {
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

  // Key benefits for healthcare uniforms
  const benefits = [
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'جودة طبية معتمدة',
      description: 'أقمشة طبية عالية الجودة تلبي معايير وزارة الصحة السعودية والمعايير الدولية للسلامة الطبية.'
    },
    {
      icon: '/images/compliance-shield.svg',
      title: 'مقاومة العدوى والميكروبات',
      description: 'تقنيات متقدمة مضادة للبكتيريا والفيروسات توفر حماية إضافية للعاملين في القطاع الصحي.'
    },
    {
      icon: '/images/saudi-expertise.svg',
      title: 'تصاميم محتشمة ومريحة',
      description: 'أزياء طبية تحترم القيم الإسلامية مع توفير الراحة القصوى للعمل في المناوبات الطويلة.'
    },
    {
      icon: '/images/fabric-cotton-blends.svg',
      title: 'تقنيات أقمشة متطورة',
      description: 'أقمشة قابلة للتنفس ومقاومة للسوائل والبقع مع سهولة التنظيف والتعقيم.'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تخصيص حسب التخصص',
      description: 'تصاميم مختلفة لكل تخصص طبي مع إمكانية إضافة شعارات المستشفيات والعيادات.'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'خدمة شاملة للمؤسسات',
      description: 'برامج توريد شاملة للمستشفيات والعيادات مع خدمات الصيانة والاستبدال الدوري.'
    }
  ];

  // Healthcare departments and specialties
  const departments = [
    {
      name: 'غرف العمليات والجراحة',
      description: 'أزياء جراحية متخصصة توفر أقصى درجات الحماية والراحة أثناء العمليات الجراحية المعقدة.',
      image: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
      features: ['مقاومة السوائل', 'تهوية فائقة', 'حرية الحركة', 'مضادة للكهرباء الساكنة']
    },
    {
      name: 'التمريض والرعاية',
      description: 'أزياء تمريض عملية وأنيقة مصممة للاستخدام اليومي مع مراعاة الراحة والمظهر المهني.',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      features: ['تصاميم محتشمة', 'جيوب عملية', 'أقمشة مرنة', 'ألوان هادئة']
    },
    {
      name: 'المختبرات الطبية',
      description: 'معاطف مختبر عالية الجودة توفر الحماية من المواد الكيميائية والعينات البيولوجية.',
      image: '/images/products/lab-coat.jpg',
      features: ['مقاومة المواد الكيميائية', 'أكمام قابلة للتعديل', 'إغلاق آمن', 'سهولة التنظيف']
    },
    {
      name: 'الطوارئ والإسعاف',
      description: 'أزياء طوارئ مصممة للعمل السريع والفعال في الحالات الحرجة والطوارئ الطبية.',
      image: '/images/healthcare/healthcare_nurce_uniform.jpg',
      features: ['مقاومة التمزق', 'جيوب متعددة', 'ألوان تمييزية', 'راحة في الحركة']
    }
  ];

  // Featured healthcare products
  const products = [
    {
      id: 'premium-medical-scrubs',
      name: 'سكراب طبي متميز',
      image: '/images/healthcare/healthcare_medical_uniform.jpg',
      price: '١٤٥ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/images/healthcare/medical_hijab_uniform.jpg',
      price: '١٦٨ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/images/healthcare/full_clothes_doctor_uniform.jpg',
      price: '٢٢٠ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/images/products/lab-coat.jpg',
      price: '١٨٥ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/shop/medical-scrubs/lab-coat-professional',
      features: ['حماية كيميائية', 'جيوب متعددة', 'إغلاق آمن']
    }
  ];

  // Client testimonials from healthcare sector
  const testimonials = [
    {
      id: 1,
      name: 'د. أحمد الفيصل',
      role: 'المدير الطبي',
      company: 'مستشفى الملك فيصل التخصصي',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/Saudi_Hospitals_Association.png',
      quote: 'أزياء يونيوم الطبية غيرت من مستوى الراحة والثقة لدى فريقنا الطبي. الجودة العالية والتصاميم المدروسة تعكس احترافية مستشفانا.'
    },
    {
      id: 2,
      name: 'أ. سارة العتيبي',
      role: 'مديرة التمريض',
      company: 'مستشفى الدكتور سليمان الحبيب',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/Saudi_Hospitals_Association.png',
      quote: 'منذ تبنينا لأزياء يونيوم، لاحظنا تحسناً كبيراً في راحة الممرضات وثقتهن بأنفسهن. الأقمشة تتحمل التعقيم المتكرر دون فقدان جودتها.'
    },
    {
      id: 3,
      name: 'د. خالد السويلم',
      role: 'استشاري جراحة القلب',
      company: 'مدينة الملك عبدالعزيز الطبية',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/Saudi_Hospitals_Association.png',
      quote: 'الأردية الجراحية من يونيوم توفر الحماية والراحة المطلوبة في العمليات الطويلة. التقنيات المتقدمة في الأقمشة تجعل الفرق واضحاً.'
    }
  ];

  // Fabric technologies for healthcare
  const fabricTechnologies = [
    {
      name: 'تقنية مضادة للميكروبات',
      description: 'معالجة خاصة للأقمشة تمنع نمو البكتيريا والفطريات',
      icon: '/images/compliance-shield.svg'
    },
    {
      name: 'مقاومة السوائل والبقع',
      description: 'طبقة حماية تمنع تسرب السوائل والدم والمواد الطبية',
      icon: '/images/fabric-cotton-blends.svg'
    },
    {
      name: 'تنظيم درجة الحرارة',
      description: 'أقمشة ذكية تحافظ على برودة الجسم في البيئات الحارة',
      icon: '/images/icons/premium-quality.svg'
    },
    {
      name: 'سهولة التنظيف والتعقيم',
      description: 'تحمل درجات حرارة عالية والمواد المعقمة دون تلف',
      icon: '/images/icons/comprehensive-support.svg'
    }
  ];

  // Healthcare industry statistics
  const statistics = [
    { number: '٢٠٠+', label: 'مؤسسة صحية تثق بنا' },
    { number: '٩٩%', label: 'معدل رضا الأطباء' },
    { number: '٢٤/٧', label: 'دعم طوارئ للمستشفيات' },
    { number: '١٠٠%', label: 'مطابقة معايير الصحة' }
  ];

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="أزياء الرعاية الصحية والملابس الطبية | يونيوم السعودية - معتمد من وزارة الصحة"
        description="أزياء طبية احترافية للمستشفيات والعيادات في السعودية. سكراب طبي، أردية جراحية، معاطف مختبر مع تقنيات مضادة للبكتيريا. معتمد من وزارة الصحة."
        keywords={[
          "أزياء طبية",
          "سكراب طبي",
          "ملابس طبية",
          "أردية جراحية",
          "معاطف مختبر",
          "زي تمريض",
          "ملابس مستشفيات",
          "أزياء صحية سعودية",
          "يونيفورم طبي",
          "ملابس أطباء"
        ]}
        author="فريق خبراء يونيوم الطبي"
        expertise="تصميم وتصنيع الأزياء الطبية المعتمدة"
        contentType="service"
        trustSignals={[
          'معتمد من وزارة الصحة السعودية',
          'تقنيات مضادة للبكتيريا',
          'مطابق للمعايير الدولية',
          'خبرة 15+ سنة في القطاع الصحي'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg"
            alt="أزياء الرعاية الصحية من يونيوم - معتمد من وزارة الصحة السعودية"
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
              أزياء طبية <span className="text-blue-300">معتمدة ومتطورة</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              حلول شاملة للأزياء الطبية تجمع بين أعلى معايير السلامة والراحة، مصممة خصيصاً للمؤسسات الصحية السعودية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/quote?industry=healthcare" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                طلب عرض سعر للمؤسسات
              </Button>
              <Button 
                href="/ar/shop/medical-scrubs" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استعرض المنتجات الطبية
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
              <SectionHeading>لماذا تختار أزياء يونيوم الطبية؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في قطاع الرعاية الصحية، تُعد الأزياء الطبية أكثر من مجرد ملابس عمل - إنها خط الدفاع الأول ضد العدوى ورمز للثقة والاحترافية.
                </p>
                <p>
                  تقدم يونيوم أزياء طبية معتمدة من وزارة الصحة السعودية، مصنوعة بأحدث التقنيات المضادة للبكتيريا والفيروسات، مع مراعاة خاصة للمناخ السعودي والقيم الثقافية.
                </p>
                <p>
                  من السكراب الطبي اليومي إلى الأردية الجراحية المتخصصة، نوفر حلولاً شاملة لجميع التخصصات الطبية مع ضمان أعلى معايير الجودة والسلامة.
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
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="طبيبة ترتدي زي يونيوم الطبي المحتشم في مستشفى سعودي"
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
            <SectionHeading centered>المزايا الطبية المتقدمة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات متطورة ومعايير عالمية تجعل أزياءنا الطبية الخيار الأول للمؤسسات الصحية الرائدة
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
                  <div className="bg-blue-50 p-4 rounded-full ml-4">
                    <Image 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      width={32} 
                      height={32}
                      className="text-blue-600"
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

      {/* Departments Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>حلول لجميع التخصصات الطبية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              أزياء متخصصة لكل قسم طبي مع مراعاة الاحتياجات الخاصة لكل تخصص
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {departments.map((department, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image
                    src={department.image}
                    alt={department.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{department.name}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{department.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {department.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/ar/shop/medical-scrubs" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
            <SectionHeading centered>منتجاتنا الطبية المميزة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تشكيلة شاملة من الأزياء الطبية عالية الجودة والمعتمدة طبياً
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
            <Button href="/ar/shop/medical-scrubs" variant="primary" size="lg">
              عرض جميع المنتجات الطبية
            </Button>
          </div>
        </Container>
      </section>

      {/* Fabric Technologies */}
      <section className="py-20 bg-blue-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading>تقنيات الأقمشة الطبية المتقدمة</SectionHeading>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                نستخدم أحدث التقنيات في معالجة الأقمشة لضمان أعلى مستويات الحماية والراحة للعاملين في القطاع الصحي.
              </p>
              
              <div className="space-y-6">
                {fabricTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-3 rounded-full flex-shrink-0 ml-4 shadow-md">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={24} 
                        height={24}
                        className="text-blue-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-neutral-800">{tech.name}</h4>
                      <p className="text-neutral-600 leading-relaxed">{tech.description}</p>
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
                  src="/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
                  alt="عينات أقمشة يونيوم الطبية المتقدمة مع التقنيات المضادة للبكتيريا"
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
            <SectionHeading centered>شهادات من القطاع الصحي</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              آراء الأطباء والممرضين من المؤسسات الصحية الرائدة في المملكة
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ارتقِ بمستوى الرعاية الصحية في مؤسستك
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              احصل على استشارة مجانية من خبرائنا وعرض سعر مخصص لاحتياجات مؤسستك الصحية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استشارة مجانية للمؤسسات
              </Button>
              <Button 
                href="/ar/quote?industry=healthcare" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
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