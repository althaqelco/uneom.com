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

export default function EnhancedFactoryIndustryClient() {
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

  // Factory segments (similar to manufacturing, can be adjusted)
  const factorySegments = [
    {
      title: 'مصانع البتروكيماويات والكيماويات',
      description: 'أزياء متخصصة توفر الحماية القصوى في بيئات العمل الكيميائية.',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg', // Placeholder
      features: ['مقاومة كيميائية عالية', 'حماية من الحرارة واللهب', 'مواد مضادة للكهرباء الساكنة', 'مطابقة لمعايير السلامة الدولية'],
      stats: 'خدمة ٨٠+ مصنع بتروكيماويات'
    },
    {
      title: 'مصانع الأغذية والمشروبات',
      description: 'ملابس عمل صحية وآمنة تضمن سلامة المنتج والعاملين.',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg', // Placeholder
      features: ['مواد معتمدة غذائياً', 'سهولة التنظيف والتعقيم', 'مقاومة للبقع والروائح', 'تهوية ممتازة للراحة'],
      stats: 'خدمة ١٢٠+ مصنع أغذية'
    },
    {
      title: 'مصانع التعدين والمعادن الثقيلة',
      description: 'أزياء متينة وقوية مصممة لتحمل ظروف العمل الشاقة في قطاع التعدين.',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg', // Placeholder
      features: ['مقاومة عالية للتمزق والاحتكاك', 'حماية من الشرر والمعادن المنصهرة', 'جيوب متعددة للأدوات', 'متانة استثنائية'],
      stats: 'خدمة ٩٠+ مصنع تعدين ومعادن'
    },
    {
      title: 'مصانع النسيج والملابس الجاهزة',
      description: 'ملابس عمل مريحة وعملية لزيادة إنتاجية العاملين في مصانع النسيج.',
      image: '/images/fabric-cotton-blends.webp', // Placeholder
      features: ['راحة فائقة في الحركة', 'مقاومة للوبر والانكماش', 'ألوان ثابتة تدوم طويلاً', 'تصاميم عملية ومرنة'],
      stats: 'خدمة ٦٠+ مصنع نسيج'
    }
  ];

  // Factory benefits
  const factoryBenefits = [
    {
      icon: '/images/compliance-shield.svg',
      title: 'أولوية السلامة المهنية',
      description: 'أزياء مصممة وفقاً لأعلى معايير السلامة لحماية العاملين من مخاطر بيئة المصنع.',
      stats: 'مطابقة ٩٩٪ لمعايير السلامة العالمية'
    },
    {
      icon: '/images/icons/premium-quality.svg',
      title: 'متانة وجودة لا تضاهى',
      description: 'استخدام مواد عالية الجودة تتحمل ظروف العمل القاسية وتضمن عمراً افتراضياً طويلاً للزي.',
      stats: 'متوسط عمر افتراضي للزي ٣ سنوات'
    },
    {
      icon: '/images/icons/customization-icon.svg',
      title: 'تصاميم مخصصة لكل مصنع',
      description: 'حلول أزياء مخصصة لتلبية المتطلبات الفريدة لكل نوع من المصانع وبيئة العمل الخاصة به.',
      stats: 'أكثر من ٢٠٠ تخصيص صناعي ناجح'
    },
    {
      icon: '/images/icons/comprehensive-support.svg',
      title: 'راحة تزيد الإنتاجية',
      description: 'تصاميم مريحة وعملية تساهم في رفع كفاءة العاملين وزيادة إنتاجيتهم.',
      stats: 'تحسن ملحوظ في إنتاجية العمال بنسبة ٨٥٪'
    }
  ];

  // Safety features for factories
  const safetyFeatures = [
    {
      name: 'الحماية من درجات الحرارة العالية',
      description: 'أقمشة مقاومة للحرارة واللهب لحماية العاملين في الأفران وخطوط الإنتاج الساخنة.',
      icon: '/images/icons/premium-quality.svg', // Placeholder
      applications: ['أفران الصهر', 'خطوط الإنتاج الساخنة', 'عمليات اللحام', 'المصافي']
    },
    {
      name: 'المقاومة الفائقة للمواد الكيميائية',
      description: 'حماية موثوقة ضد تسرب المواد الكيميائية الخطرة والأحماض.',
      icon: '/images/compliance-shield.svg', // Placeholder
      applications: ['المختبرات الكيميائية', 'مصانع الكيماويات', 'وحدات معالجة المياه', 'قطاع البتروكيماويات']
    },
    {
      name: 'ملابس عالية الوضوح (Hi-Vis)',
      description: 'ألوان فسفورية وشرائط عاكسة لضمان رؤية العاملين في ظروف الإضاءة المنخفضة.',
      icon: '/images/icons/culturally-appropriate.svg', // Placeholder - needs better icon
      applications: ['المواقع الإنشائية داخل المصانع', 'المستودعات الكبيرة', 'المناطق ذات حركة مرور آلية']
    },
    {
      name: 'الحماية من المخاطر الكهربائية',
      description: 'أقمشة مضادة للكهرباء الساكنة وعازلة للكهرباء لحماية العاملين في المنشآت الكهربائية.',
      icon: '/images/icons/customization-icon.svg', // Placeholder
      applications: ['محطات توليد الكهرباء', 'مصانع الإلكترونيات', 'أقسام الصيانة الكهربائية']
    }
  ];

  // Product categories for factories
  const productCategories = [
    {
      name: 'أزياء السلامة المتكاملة للمصانع',
      description: 'ملابس حماية شاملة مصممة خصيصاً للبيئات الصناعية الخطرة.',
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg', // Placeholder
      products: ['بدلات حماية كاملة', 'خوذات أمان متطورة', 'أحذية سلامة معززة', 'قفازات واقية متخصصة']
    },
    {
      name: 'ملابس العمل اليومي للمصانع',
      description: 'أزياء مريحة وعملية للاستخدام اليومي في مختلف أقسام المصنع.',
      image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg', // Placeholder
      products: ['بناطيل عمل متينة', 'قمصان صناعية مريحة', 'جاكيتات عمل واقية', 'مرايل حماية']
    },
    {
      name: 'أزياء فرق الصيانة والتشغيل',
      description: 'ملابس متخصصة مصممة لتلبية احتياجات فرق الصيانة والتشغيل في المصانع.',
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg', // Placeholder
      products: ['بدلات صيانة متعددة الجيوب', 'حقائب أدوات مدمجة', 'أحزمة أمان للارتفاعات', 'معدات حماية شخصية']
    },
    {
      name: 'أزياء الإدارة والإشراف في المصانع',
      description: 'ملابس مهنية وأنيقة للمشرفين والمديرين داخل بيئة المصنع.',
      image: '/images/fabric-cotton-blends.webp', // Placeholder
      products: ['قمصان إشرافية مميزة', 'سترات مهنية بشعار المصنع', 'خوذات أمان بتصاميم إدارية', 'شارات تعريف وهوية']
    }
  ];
  
  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'المهندس/ عبد الرحمن الفهد',
      role: 'مدير مصنع الرياض للحديد',
      company: 'مصنع الرياض للحديد والصلب',
      image: '/images/team/uneom-team.jpg', // Placeholder
      logo: '/images/about/riyadh_chamber_of_commerce.png', // Placeholder
      quote: 'أزياء يونيوم وفرت الحماية اللازمة لعمالنا مع الحفاظ على الراحة. لاحظنا انخفاضاً في إصابات العمل.'
    },
    {
      id: 2,
      name: 'السيدة/ نورة السالم',
      role: 'مسؤولة السلامة والجودة',
      company: 'مصنع جدة للمنتجات الغذائية',
      image: '/images/team/uneom-team.jpg', // Placeholder
      logo: '/images/about/riyadh_chamber_of_commerce.png', // Placeholder
      quote: 'الأزياء تلبي جميع معايير السلامة الغذائية وهي سهلة التنظيف. فريقنا سعيد جداً بالجودة والمتانة.'
    },
    {
      id: 3,
      name: 'المهندس/ علي المنصور',
      role: 'مدير الإنتاج',
      company: 'مصنع الدمام للبتروكيماويات',
      image: '/images/team/uneom-team.jpg', // Placeholder
      logo: '/images/about/riyadh_chamber_of_commerce.png', // Placeholder
      quote: 'المتانة والجودة العالية لأزياء يونيوم تتناسب تماماً مع بيئة العمل القاسية في مصنعنا.'
    }
  ];

  // Statistics
  const statistics = [
    { number: '٤٠٠+', label: 'مصنع شريك' },
    { number: '٩٥%', label: 'رضا عملاء المصانع' },
    { number: '١٢٠,٠٠٠+', label: 'عامل مصنع يرتدي أزياءنا' },
    { number: '٢٠+', label: 'عاماً من الخبرة في خدمة المصانع' }
  ];

  return (
    <>
      <EnhancedSEO2025 
        title="أزياء المصانع والصناعات التحويلية | يونيوم السعودية"
        description="أزياء موحدة متخصصة للمصانع والصناعات التحويلية في السعودية. ملابس سلامة، حماية عمال، أزياء مصانع بتروكيماويات، أغذية، تعدين. 400+ مصنع، 95% رضا، معايير سلامة عالمية."
        keywords={[
          "أزياء مصانع",
          "ملابس سلامة صناعية",
          "زي عمال مصانع",
          "أزياء صناعات تحويلية",
          "ملابس حماية للمصانع",
          "زي موحد للمصانع",
          "أزياء قطاع الصناعة",
          "ملابس أمان للمصانع",
          "زي مهني للمصانع",
          "أزياء مصانع سعودية"
        ]}
        author="فريق خبراء أزياء المصانع - يونيوم"
        expertise="تصميم وتوريد أزياء السلامة والعمل للمصانع والصناعات التحويلية"
        contentType="article" // Or "product.collection" if it's more of a product listing
        trustSignals={[
          'خدمة أكثر من 400 مصنع في السعودية',
          'خبرة تمتد لأكثر من 20 عاماً في قطاع المصانع',
          'تطبيق معايير السلامة الدولية (ISO, OSHA)',
          'أكثر من 120,000 عامل مصنع يثقون في أزيائنا'
        ]}
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-slate-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg" // Placeholder
            alt="أزياء المصانع والصناعات التحويلية من يونيوم"
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
              أزياء مصانع بمعايير عالمية <span className="text-gray-300">لإنتاجية وأمان أعلى</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              نوفر حلول أزياء متخصصة للمصانع والصناعات التحويلية، تجمع بين أعلى مستويات السلامة، المتانة، والراحة لتعزيز كفاءة وأمان العاملين.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/ar/contact?industry=factory-industry" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                اطلب عرض سعر لمصنعك
              </Button>
              <Button 
                href="/ar/shop/industrial-uniforms" // Link to relevant shop category
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                تصفح منتجات أزياء المصانع
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
                <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">
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
              <SectionHeading>لماذا يونيوم هي خيارك الأول لأزياء مصنعك؟</SectionHeading>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  في بيئة المصنع الديناميكية، يعتبر زي العمل خط الدفاع الأول للعاملين وأداة أساسية لتعزيز الكفاءة. نحن في يونيوم ندرك هذه الأهمية ونقدم حلولاً تتجاوز مجرد الملابس.
                </p>
                <p>
                  نجمع بين خبرتنا العميقة في صناعة الأزياء وفهمنا الدقيق لمتطلبات السلامة والجودة في مختلف القطاعات الصناعية، لنقدم أزياء مصانع تعزز علامتك التجارية وتحمي أهم أصولك - موظفيك.
                </p>
                <p>
                  نلتزم بتقديم منتجات مبتكرة، متينة، ومريحة، مع خدمة عملاء استثنائية ودعم فني متخصص لضمان رضاكم التام.
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
                  src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg" // Placeholder
                  alt="عامل في مصنع يرتدي زي سلامة من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Factory Segments */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>نخدم مختلف قطاعات المصانع</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              حلول أزياء مصممة خصيصاً لتلبية احتياجات مختلف أنواع المصانع في المملكة.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {factorySegments.map((segment, index) => (
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
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {segment.stats}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-800">{segment.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{segment.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-gray-500 rounded-full ml-2"></div>
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
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مزايا اختيار أزياء المصانع من يونيوم</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              نقدم قيمة حقيقية لمصنعك من خلال منتجات وخدمات متفوقة.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {factoryBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-gray-100 p-4 rounded-full ml-6 flex-shrink-0">
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
                    <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Safety Features */}
      <section className="py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مميزات السلامة المتقدمة في أزيائنا</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              تقنيات حماية مبتكرة لضمان أقصى درجات الأمان للعاملين في المصانع.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-gray-100 p-4 rounded-full ml-6 flex-shrink-0">
                    <Image 
                      src={feature.icon} 
                      alt={feature.name} 
                      width={32} 
                      height={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">{feature.name}</h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">التطبيقات الرئيسية:</h4>
                      {feature.applications.map((app, idx) => (
                        <div key={idx} className="text-xs text-neutral-500 bg-gray-100 px-2 py-1 rounded inline-block ml-1 mb-1">
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

      {/* Product Categories */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>فئات منتجات أزياء المصانع</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              مجموعة متكاملة من الأزياء لتلبية جميع احتياجات العاملين في المصنع.
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
                        <div className="w-2 h-2 bg-gray-500 rounded-full ml-2"></div>
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
            <SectionHeading centered>ماذا يقول عملاؤنا من قطاع المصانع؟</SectionHeading>
            <p className="text-xl text-neutral-700 leading-relaxed">
              شهادات حقيقية من مدراء ومسؤولي المصانع الذين وثقوا في حلولنا.
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
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-700 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل أنت مستعد لرفع مستوى السلامة والإنتاجية في مصنعك؟
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات مصنعك من الأزياء الموحدة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?industry=factory-industry" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                اطلب استشارة مجانية لمصنعك
              </Button>
              <Button 
                href="/ar/shop/industrial-uniforms" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-600"
              >
                تصفح كتالوج أزياء المصانع
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}