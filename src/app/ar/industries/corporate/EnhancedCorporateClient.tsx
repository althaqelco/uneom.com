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

export default function EnhancedCorporateClient() {
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

  // Key benefits for corporate uniforms
  const benefits = [
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'صورة مهنية موحدة',
      description: 'تعزز الأزياء الموحدة من يونيوم الصورة المهنية لشركتك وتخلق انطباعاً إيجابياً لدى العملاء والشركاء.'
    },
    {
      icon: '/images/images/icons/brand-aligned.svg',
      title: 'تعزيز الهوية التجارية',
      description: 'تخصيص كامل للألوان والشعارات والتصاميم لتعكس هوية علامتك التجارية وتميزها في السوق السعودي.'
    },
    {
      icon: '/images/icons/culturally-appropriate.svg',
      title: 'ملائم للثقافة السعودية',
      description: 'تصاميم محتشمة وأنيقة تحترم القيم الإسلامية والتقاليد السعودية مع الحفاظ على الطابع العصري.'
    },
    {
      icon: '/images/icons/climate-adapted.svg',
      title: 'مناسب للمناخ السعودي',
      description: 'أقمشة قابلة للتنفس ومقاومة للحرارة مصممة خصيصاً لتوفير الراحة في المناخ الصحراوي.'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'خدمة شاملة',
      description: 'من التصميم والإنتاج إلى التوصيل والصيانة، نقدم خدمة متكاملة لجميع احتياجات الأزياء المؤسسية.'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'مرونة في التخصيص',
      description: 'إمكانيات لا محدودة للتخصيص بما يشمل القياسات الخاصة والتفاصيل الفريدة لكل منصب وظيفي.'
    }
  ];

  // Corporate uniform categories
  const categories = [
    {
      name: 'البدلات التنفيذية',
      description: 'بدلات فاخرة للمدراء التنفيذيين والقيادات العليا تعكس المكانة المهنية والأناقة.',
      image: '/images/products/corporate-suit-executive.jpg',
      features: ['أقمشة إيطالية فاخرة', 'تفصيل حسب المقاس', 'تطريز الشعارات', 'ألوان مخصصة']
    },
    {
      name: 'الأزياء المكتبية',
      description: 'تشكيلة متنوعة من القمصان والبناطيل والتنانير المناسبة للعمل اليومي.',
      image: '/images/products/corporate-shirts-blouses.jpg',
      features: ['أقمشة مقاومة للتجعد', 'سهولة العناية', 'تصاميم عملية', 'راحة طوال اليوم']
    },
    {
      name: 'أزياء الاستقبال',
      description: 'أزياء أنيقة تمثل واجهة الشركة للموظفين في الاستقبال وخدمة العملاء.',
      image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
      features: ['تصاميم جذابة', 'راحة في الحركة', 'مقاومة البقع', 'سهولة الصيانة']
    },
    {
      name: 'الأزياء الإدارية',
      description: 'حلول شاملة للموظفين الإداريين تجمع بين الاحترافية والراحة.',
      image: '/images/products/corporate-polo-shirts.jpg',
      features: ['تنوع في الأساليب', 'مرونة في الاختيار', 'جودة عالية', 'أسعار تنافسية']
    }
  ];

  // Featured products
  const products = [
    {
      id: 'executive-suit-premium',
      name: 'البدلة التنفيذية المتميزة',
      image: '/images/products/corporate-suit-executive.jpg',
      price: '٨٥٠ ر.س',
      category: 'الأزياء المؤسسية',
      href: '/ar/images/products/corporate-shirts-blouses.jpg',
      price: '١٢٠ ر.س',
      category: 'الأزياء المؤسسية',
      href: '/ar/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
      price: '٢٨٠ ر.س',
      category: 'الأزياء المؤسسية',
      href: '/ar/images/products/corporate-polo-shirts.jpg',
      price: '٩٥ ر.س',
      category: 'الأزياء المؤسسية',
      href: '/ar/shop/corporate-attire/corporate-polo',
      features: ['قطن بيكيه عالي الجودة', 'تطريز الشعار', 'ألوان الشركة']
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'م. سلمان القحطاني',
      role: 'مدير الموارد البشرية',
      company: 'مجموعة الخليج للاستثمار',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'برنامج الزي الموحد من يونيوم غيّر من صورة شركتنا بشكل إيجابي. الموظفون أصبحوا أكثر فخراً بانتمائهم للشركة، والعملاء يلاحظون الاحترافية في المظهر العام.'
    },
    {
      id: 2,
      name: 'أ. نورا العتيبي',
      role: 'مديرة العلاقات العامة',
      company: 'بنك الرياض',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'جودة الأقمشة والتفصيل في أزياء يونيوم تفوق التوقعات. حتى بعد سنتين من الاستخدام، لا تزال الأزياء تحتفظ بمظهرها الأنيق ولونها الثابت.'
    },
    {
      id: 3,
      name: 'د. خالد الحربي',
      role: 'الرئيس التنفيذي',
      company: 'شركة التقنية المتقدمة',
      image: '/images/avatar-placeholder.jpg',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      quote: 'الخدمة المتميزة من يونيوم تشمل كل شيء من التصميم إلى التسليم. فريقهم المحترف ساعدنا في اختيار التصاميم المناسبة لثقافة شركتنا.'
    }
  ];

  // Customization options
  const customizationOptions = [
    {
      name: 'تطريز الشعارات',
      description: 'تطريز عالي الدقة لشعارات الشركة بأحدث التقنيات',
      icon: '/images/icons/customization-icon.svg'
    },
    {
      name: 'ألوان مخصصة',
      description: 'مطابقة دقيقة لألوان الهوية البصرية للشركة',
      icon: '/images/images/icons/brand-aligned.svg'
    },
    {
      name: 'قياسات فردية',
      description: 'تفصيل حسب مقاسات كل موظف لضمان الملاءمة المثالية',
      icon: '/images/icons/premium-quality.svg'
    },
    {
      name: 'إكسسوارات مكملة',
      description: 'ربطات عنق، أحزمة، وإكسسوارات تكمل المظهر المهني',
      icon: '/images/icons/comprehensive-support.svg'
    }
  ];

  // Industry statistics
  const statistics = [
    { number: '٥٠٠+', label: 'شركة سعودية تثق بنا' },
    { number: '٩٨%', label: 'معدل رضا العملاء' },
    { number: '١٥+', label: 'سنة من الخبرة' },
    { number: '٢٤/٧', label: 'دعم فني متواصل' }
  ];

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="أزياء الشركات والمكاتب المؤسسية | يونيوم السعودية"
        description="أزياء مؤسسية احترافية للشركات والمكاتب في السعودية. بدلات تنفيذية وأزياء مكتبية مخصصة تعكس هوية علامتك التجارية."
        keywords={[
          "أزياء مؤسسية",
          "بدلات تنفيذية",
          "أزياء مكتبية",
          "زي موحد للشركات",
          "ملابس رسمية سعودية",
          "أزياء الاستقبال",
          "يونيفورم الشركات",
          "ملابس العمل الرسمية"
        ]}
        author="فريق خبراء يونيوم"
        expertise="تصميم وتصنيع الأزياء المؤسسية"
        contentType="service"
        trustSignals={[
          'شهادة الأيزو للجودة',
          'خامات فاخرة مستوردة',
          'حلول تصميم مخصصة',
          'رائد السوق السعودي'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
            alt="أزياء الشركات المؤسسية من يونيوم - الرائد في تصميم الأزياء المهنية بالسعودية"
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
              أزياء مؤسسية تعكس <span className="text-secondary-400">تميز شركتك</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              حلول شاملة للأزياء المؤسسية تجمع بين الأناقة والاحترافية، مصممة خصيصاً للشركات والمؤسسات السعودية
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/quote?industry=corporate" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                احصل على عرض سعر مجاني
              </Button>
              <Button 
                href="/ar/shop/corporate-attire" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                استعرض المجموعات
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
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
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
              <SectionHeading>لماذا تختار أزياء يونيوم المؤسسية؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في عالم الأعمال اليوم، يُعد المظهر المهني الموحد أحد أهم عوامل النجاح المؤسسي. تقدم يونيوم حلولاً متكاملة للأزياء المؤسسية تعكس قيم وثقافة شركتك.
                </p>
                <p>
                  بفضل خبرتنا الممتدة لأكثر من ١٥ عاماً في السوق السعودي، نفهم احتياجات الشركات المحلية ونقدم تصاميم تجمع بين الأناقة العالمية والاحتشام المطلوب.
                </p>
                <p>
                  من البدلات التنفيذية الفاخرة إلى الأزياء المكتبية اليومية، نوفر تشكيلة شاملة تناسب جميع المستويات الوظيفية مع إمكانية التخصيص الكامل.
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
                  src="/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg"
                  alt="فريق عمل يرتدي أزياء يونيوم المؤسسية في اجتماع مهني"
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
            <SectionHeading centered>المزايا التي تميز أزياءنا المؤسسية</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              اكتشف كيف تساهم أزياء يونيوم في تعزيز صورة شركتك المهنية وزيادة ثقة موظفيك
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
                  <div className="bg-primary-50 p-4 rounded-full ml-4">
                    <Image 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      width={32} 
                      height={32}
                      className="text-primary-600"
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

      {/* Categories Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مجموعاتنا المتخصصة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تشكيلة شاملة من الأزياء المؤسسية تناسب جميع المستويات الوظيفية والمناسبات المهنية
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
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
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full ml-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/ar/shop/corporate-attire" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    استكشف المجموعة
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
            <SectionHeading centered>منتجاتنا المميزة</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              اختر من تشكيلتنا المتميزة من الأزياء المؤسسية عالية الجودة
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
            <Button href="/ar/shop/corporate-attire" variant="primary" size="lg">
              عرض جميع المنتجات
            </Button>
          </div>
        </Container>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading>خيارات التخصيص المتقدمة</SectionHeading>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                نقدم خيارات تخصيص شاملة لضمان أن تعكس أزياءكم المؤسسية هوية شركتكم بشكل مثالي.
              </p>
              
              <div className="space-y-6">
                {customizationOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-3 rounded-full flex-shrink-0 ml-4 shadow-md">
                      <Image 
                        src={option.icon} 
                        alt={option.name} 
                        width={24} 
                        height={24}
                        className="text-primary-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-neutral-800">{option.name}</h4>
                      <p className="text-neutral-600 leading-relaxed">{option.description}</p>
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
                  src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
                  alt="خياط يونيوم يعمل على تفصيل بدلة مؤسسية حسب المقاس"
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
            <SectionHeading centered>ماذا يقول عملاؤنا</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              شهادات من قادة الشركات السعودية الذين اختاروا يونيوم لأزيائهم المؤسسية
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلة التميز المؤسسي اليوم
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات شركتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                احجز استشارة مجانية
              </Button>
              <Button 
                href="/ar/quote?industry=corporate" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              >
                احصل على عرض سعر
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>كيف نعمل معكم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              عملية بسيطة ومنظمة لضمان حصولكم على أفضل النتائج
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: '١',
                title: 'الاستشارة',
                description: 'نبدأ بفهم احتياجاتكم ومتطلبات شركتكم'
              },
              {
                step: '٢',
                title: 'التصميم',
                description: 'نقدم تصاميم مخصصة تعكس هوية علامتكم التجارية'
              },
              {
                step: '٣',
                title: 'العينات',
                description: 'نصنع عينات للمراجعة والموافقة النهائية'
              },
              {
                step: '٤',
                title: 'الإنتاج والتسليم',
                description: 'ننتج ونسلم طلبكم في الوقت المحدد'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-800">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}