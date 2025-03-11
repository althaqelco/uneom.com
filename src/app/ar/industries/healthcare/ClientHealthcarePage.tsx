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

export default function ClientHealthcarePage() {
  // Get Arabic translations
  const t = getTranslation('ar');
  
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
  
  // Key benefits of UNEOM healthcare uniforms
  const benefits = [
    {
      icon: '/images/icons/quality.svg',
      title: 'جودة فائقة',
      description: 'أقمشة ممتازة تتحمل الاستخدام المتكرر والغسيل الصناعي، مما يضمن مظهرًا مهنيًا دائمًا.'
    },
    {
      icon: '/images/icons/compliance.svg',
      title: 'متوافق مع المعايير السعودية',
      description: 'جميع منتجاتنا تتوافق مع معايير السلامة والجودة السعودية وتلبي متطلبات وزارة الصحة.'
    },
    {
      icon: '/images/icons/islamic.svg',
      title: 'خيارات الزي الإسلامي',
      description: 'تصميمات محتشمة تحترم القيم الإسلامية والمتطلبات الثقافية المحلية.'
    },
    {
      icon: '/images/icons/comfort.svg',
      title: 'راحة فائقة',
      description: 'أقمشة قابلة للتنفس ومريحة مصممة خصيصًا للمناخ السعودي ولساعات العمل الطويلة.'
    },
    {
      icon: '/images/icons/custom.svg',
      title: 'تصميم مخصص',
      description: 'خيارات تخصيص كاملة بما في ذلك التطريز بالشعارات وألوان العلامة التجارية والقياسات المخصصة.'
    },
    {
      icon: '/images/icons/delivery.svg',
      title: 'توصيل سريع',
      description: 'خدمة توصيل فعالة في جميع أنحاء المملكة بما في ذلك كميات كبيرة للمستشفيات والعيادات.'
    }
  ];
  
  // Healthcare uniform products
  const products = [
    {
      id: 'premium-medical-scrubs',
      name: 'ملابس طبية متميزة',
      image: '/images/products/medical-scrubs.jpg',
      price: '١٢٠ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/shop/medical-scrubs/premium-medical-scrubs',
      isNew: true
    },
    {
      id: 'medical-lab-coat',
      name: 'معطف مختبر طبي',
      image: '/images/products/medical-lab-coat.jpg',
      price: '١٥٠ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/shop/medical-scrubs/medical-lab-coat'
    },
    {
      id: 'surgical-gown',
      name: 'رداء جراحي',
      image: '/images/products/surgical-gown.jpg',
      price: '١٨٠ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/shop/medical-scrubs/surgical-gown'
    },
    {
      id: 'nurse-uniform',
      name: 'زي تمريض',
      image: '/images/products/nurse-uniform.jpg',
      price: '١٣٥ ر.س',
      category: 'الرعاية الصحية',
      href: '/ar/shop/medical-scrubs/nurse-uniform'
    }
  ];
  
  // Healthcare departments
  const departments = [
    {
      name: 'غرفة العمليات',
      description: 'أزياء متخصصة لفرق الجراحة تتميز بالمتانة والراحة والامتثال للمعايير الطبية.',
      image: '/images/healthcare/surgery.jpg'
    },
    {
      name: 'التمريض',
      description: 'أزياء تمريض راقية مصممة للاستخدام اليومي، مع مراعاة خاصة للحركة والراحة.',
      image: '/images/healthcare/nursing.jpg'
    },
    {
      name: 'المختبر',
      description: 'معاطف مختبر عالية الجودة توفر الحماية اللازمة وتعزز الصورة المهنية.',
      image: '/images/healthcare/laboratory.jpg'
    },
    {
      name: 'الأطباء والمسؤولين',
      description: 'أزياء رسمية تناسب المديرين الطبيين والأطباء، متوفرة بتصاميم تعكس المكانة المهنية.',
      image: '/images/healthcare/doctors.jpg'
    }
  ];
  
  // Testimonials from healthcare clients
  const testimonials = [
    {
      id: 1,
      name: 'د. أحمد الفيصل',
      role: 'المدير الطبي',
      company: 'مستشفى المملكة الرياض',
      image: '/images/testimonials/testimonial-healthcare-1.jpg',
      logo: '/images/logos/kingdom-hospital-ar.png',
      quote: 'ملابس يونيوم الطبية تجمع بين الجودة العالية والراحة في الاستخدام اليومي. نلاحظ تحسنًا كبيرًا في مظهر فريقنا وثقتهم بأنفسهم.'
    },
    {
      id: 2,
      name: 'سارة العتيبي',
      role: 'مديرة التمريض',
      company: 'مستشفى الدكتور سليمان الحبيب',
      image: '/images/testimonials/testimonial-healthcare-2.jpg',
      logo: '/images/logos/habib-hospital-ar.png',
      quote: 'منذ انتقالنا إلى أزياء يونيوم، لاحظنا مقاومة أفضل للتآكل وثبات الألوان حتى بعد التعقيم والغسيل المتكرر.'
    },
    {
      id: 3,
      name: 'د. خالد السويلم',
      role: 'استشاري جراحة',
      company: 'المركز السعودي للجراحة المتقدمة',
      image: '/images/testimonials/testimonial-healthcare-3.jpg',
      logo: '/images/logos/saudi-surgery-center-ar.png',
      quote: 'الأقمشة المقاومة للسوائل والمستخدمة في أردية يونيوم الجراحية أثبتت فعاليتها في توفير الحماية والراحة طوال العمليات الطويلة.'
    }
  ];
  
  // Fabric features
  const fabricFeatures = [
    {
      name: 'مقاومة للسوائل',
      description: 'تحمي من تناثر السوائل والبقع في بيئة الرعاية الصحية',
      icon: '/images/icons/liquid-resistant.svg'
    },
    {
      name: 'مضادة للميكروبات',
      description: 'تقنية مضادة للبكتيريا تعزز السلامة والصحة',
      icon: '/images/icons/antimicrobial.svg'
    },
    {
      name: 'سهلة العناية',
      description: 'تتحمل الغسيل المتكرر والتعقيم دون التأثير على المظهر',
      icon: '/images/icons/easy-care.svg'
    },
    {
      name: 'قابلة للتنفس',
      description: 'تسمح بتبادل الهواء للحفاظ على البرودة خلال المناوبات الطويلة',
      icon: '/images/icons/breathable.svg'
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src={getLocalizedImagePath('/images/industries/healthcare/hero.jpg', 'ar')}
            alt="أزياء الرعاية الصحية من يونيوم - المزود الرائد للزي الموحد في المملكة العربية السعودية"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <motion.div 
            className="relative z-10 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              أزياء الرعاية الصحية الاحترافية
            </h1>
            <p className="text-xl opacity-90 mb-8">
              ملابس طبية عالية الجودة مصممة خصيصًا للمؤسسات الصحية السعودية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/quote?industry=healthcare" 
                variant="secondary" 
                size="lg"
              >
                طلب عرض سعر
              </Button>
              <Button 
                href="/ar/shop/medical-scrubs" 
                variant="outline" 
                size="lg"
              >
                استعرض المنتجات
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading>لماذا أزياء الرعاية الصحية من يونيوم؟</SectionHeading>
              <div className="space-y-4 text-lg">
                <p>
                  توفر يونيوم ملابس طبية عالية الجودة مصممة خصيصًا لتلبية الاحتياجات الفريدة للمؤسسات الصحية في المملكة العربية السعودية.
                </p>
                <p>
                  تجمع منتجاتنا بين المعايير الدولية للجودة والتصميم والاحتياجات المحلية، مع مراعاة خاصة للمناخ السعودي والمتطلبات الثقافية والتشريعية.
                </p>
                <p>
                  بفضل تشكيلتنا الواسعة، يمكننا تلبية احتياجات جميع العاملين في المجال الصحي من الأطباء والجراحين إلى طاقم التمريض والفنيين والإداريين.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={getLocalizedImagePath('/images/industries/healthcare/overview.jpg', 'ar')}
                  alt="أزياء الرعاية الصحية من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Grid */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>المزايا الرئيسية</SectionHeading>
            <p className="text-lg text-neutral-700">
              اكتشف لماذا تختار مؤسسات الرعاية الصحية الرائدة في المملكة العربية السعودية أزياء يونيوم
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
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Image 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      width={24} 
                      height={24}
                      className="text-primary-600"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Healthcare Department Section */}
      <section className="py-16">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>حلول لجميع أقسام الرعاية الصحية</SectionHeading>
            <p className="text-lg text-neutral-700">
              نقدم أزياء متخصصة لكل قسم وتخصص في المؤسسات الصحية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {departments.map((department, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                variants={fadeIn}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <Image
                    src={getLocalizedImagePath(department.image, 'ar')}
                    alt={department.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold mb-2">{department.name}</h3>
                  <p className="text-neutral-600">{department.description}</p>
                  <Link 
                    href="/ar/shop/medical-scrubs" 
                    className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    استكشف المنتجات
                    <svg 
                      className="mr-2 h-4 w-4 rtl-flip" 
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
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>منتجاتنا المميزة</SectionHeading>
            <p className="text-lg text-neutral-700">
              استكشف تشكيلتنا الرائدة من الملابس الطبية والأزياء الصحية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
            <Button href="/ar/shop/medical-scrubs" variant="primary">
              عرض جميع المنتجات
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Fabric Technology Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <SectionHeading>تقنيات الأقمشة المتطورة</SectionHeading>
              <p className="text-lg text-neutral-700 mb-8">
                نستخدم أحدث تقنيات الأقمشة لضمان الراحة والمتانة والسلامة في جميع منتجاتنا الطبية.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {fabricFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-50 p-2 rounded-full flex-shrink-0 ml-4">
                      <Image 
                        src={feature.icon} 
                        alt={feature.name} 
                        width={24} 
                        height={24}
                        className="text-primary-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.name}</h4>
                      <p className="text-sm text-neutral-600">{feature.description}</p>
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
              className="order-1 lg:order-2"
            >
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={getLocalizedImagePath('/images/industries/healthcare/fabric-tech.jpg', 'ar')}
                  alt="تقنيات الأقمشة المتطورة في منتجات يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>ماذا يقول عملاؤنا</SectionHeading>
            <p className="text-lg text-neutral-700">
              استمع إلى آراء المؤسسات الصحية الرائدة في المملكة العربية السعودية
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
                <TestimonialCard {...testimonial} locale="ar" />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لتحسين أزياء فريقك الطبي؟</h2>
            <p className="text-xl mb-8 opacity-90">
              اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ar/quote?industry=healthcare"
                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                طلب عرض سعر
              </a>
              <a
                href="/ar/contact"
                className="inline-block bg-primary-700 text-white hover:bg-primary-800 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>الأسئلة الشائعة</SectionHeading>
            <p className="text-lg text-neutral-700">
              إجابات على الأسئلة الشائعة حول أزياء الرعاية الصحية من يونيوم
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold mb-3">ما هي خيارات التخصيص المتاحة للمستشفيات؟</h3>
              <p className="text-neutral-600">
                نقدم مجموعة واسعة من خيارات التخصيص بما في ذلك تطريز الشعارات والأسماء، وألوان العلامة التجارية، وتعديلات التصميم، وخيارات القماش المختلفة. يمكننا أيضًا تصميم أزياء مخصصة بالكامل حسب متطلباتكم.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold mb-3">ما هي الحد الأدنى للكمية للطلبات؟</h3>
              <p className="text-neutral-600">
                يختلف الحد الأدنى للطلب حسب نوع المنتج. للطلبات القياسية، نقبل طلبات بحد أدنى 20 قطعة. للمنتجات المخصصة بالكامل، الحد الأدنى هو 50 قطعة. نقدم أيضًا أسعارًا تفضيلية للطلبات الكبيرة.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold mb-3">كيف يمكنني طلب عينات قبل تقديم طلب كبير؟</h3>
              <p className="text-neutral-600">
                يمكنك طلب عينات من خلال ملء نموذج طلب العينات أو الاتصال بفريق المبيعات لدينا. نقدم عينات بتكلفة مخفضة يتم ردها عند تقديم طلب كبير.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold mb-3">ما هي مدة التسليم المتوقعة؟</h3>
              <p className="text-neutral-600">
                تستغرق الطلبات القياسية عادة 2-3 أسابيع للتسليم. قد تستغرق الطلبات المخصصة 4-6 أسابيع حسب التعقيد والكمية. نقدم أيضًا خيارات تسليم سريعة للطلبات العاجلة.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
} 