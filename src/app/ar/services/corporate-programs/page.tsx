'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import RTLWrapper from '@/components/layout/RTLWrapper';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Cairo, Tajawal } from 'next/font/google';

// تعريف الخطوط العربية
const cairoFont = Cairo({ 
  subsets: ['arabic'],
  weight: ['600', '700'],
  variable: '--font-cairo',
});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

const CorporateProgramsPage = () => {
  const locale = 'ar';
  
  // مكونات برنامج الزي الموحد
  const programComponents = [
    {
      title: 'تقييم الاحتياجات',
      description: 'تحليل شامل لمتطلبات مؤسستك والبيئة التشغيلية لتصميم برنامج مخصص يلبي احتياجاتك المحددة.',
      features: [
        'تحليل الاحتياجات الخاصة بكل قسم',
        'مراجعة المتطلبات التنظيمية والسلامة',
        'دراسة البيئة التشغيلية',
        'تقييم هوية العلامة التجارية'
      ],
      icon: '🔍',
    },
    {
      title: 'التصميم والتطوير المخصص',
      description: 'إنشاء تصاميم مخصصة للزي الموحد تعكس هوية علامتك التجارية وتلبي المتطلبات الوظيفية لمختلف الأدوار.',
      features: [
        'تصميمات حصرية تعكس هوية العلامة التجارية',
        'اختيار الأقمشة المناسبة للمناخ والوظائف',
        'تطوير عينات للاختبار والموافقة',
        'توثيق المواصفات الفنية'
      ],
      icon: '✏️',
    },
    {
      title: 'استراتيجية التنفيذ',
      description: 'خطة منهجية لطرح برنامج الزي الموحد الجديد أو المحدث بطريقة سلسة وفعالة عبر المؤسسة بأكملها.',
      features: [
        'جدولة التوزيع والتنفيذ',
        'إدارة التغيير والتواصل',
        'تدريب المشرفين والموظفين',
        'خطط طوارئ لضمان استمرارية العمليات'
      ],
      icon: '📋',
    },
    {
      title: 'الإدارة المستمرة',
      description: 'حلول شاملة لإدارة برنامج الزي الموحد على المدى الطويل، مما يقلل العبء الإداري على فريقك.',
      features: [
        'إدارة المخزون والتجديد',
        'نظام طلب وتوزيع مباشر',
        'تتبع ومراقبة الاستخدام',
        'تقارير وتحليلات دورية'
      ],
      icon: '🔄',
    },
  ];
  
  // مزايا البرامج المؤسسية
  const programBenefits = [
    {
      title: 'هوية متناسقة للعلامة التجارية',
      description: 'توحيد مظهر جميع الموظفين بما يعكس هوية وقيم علامتك التجارية بشكل متسق ومهني.',
      icon: '🏆',
    },
    {
      title: 'إدارة مبسطة',
      description: 'تولي يونيوم جميع جوانب إدارة الزي الموحد، من التصميم إلى التوريد وإدارة المخزون.',
      icon: '⚙️',
    },
    {
      title: 'كفاءة التكاليف',
      description: 'تحقيق وفورات كبيرة من خلال توحيد المشتريات وخفض النفقات الإدارية وتبسيط العمليات.',
      icon: '💰',
    },
    {
      title: 'اتساق الجودة',
      description: 'ضمان مستوى ثابت من الجودة العالية لجميع عناصر الزي الموحد عبر مختلف المواقع والأقسام.',
      icon: '✓',
    },
    {
      title: 'رضا الموظفين',
      description: 'تحسين تجربة الموظفين من خلال توفير زي موحد مريح وعملي وأنيق مصمم خصيصًا لاحتياجاتهم.',
      icon: '😊',
    },
    {
      title: 'ضمان الامتثال',
      description: 'التأكد من امتثال جميع عناصر الزي الموحد للمتطلبات التنظيمية ومعايير السلامة المهنية.',
      icon: '📜',
    },
  ];
  
  // دراسات الحالة للبرامج المؤسسية
  const caseStudies = [
    {
      company: 'مجموعة فنادق الواحة',
      industry: 'الضيافة',
      challenge: 'إدارة الزي الموحد لـ 1,200 موظف عبر 5 فنادق مع تباين كبير في الأقسام والأدوار والمواقع.',
      solution: 'برنامج متكامل يشمل تصميمات مخصصة، ونظام إدارة مخزون مركزي، وعمليات توزيع مبسطة.',
      results: [
        'توفير 32% في تكاليف الشراء',
        'تقليل وقت التسليم بنسبة 60%',
        'تحسين مستويات رضا الموظفين بنسبة 78%',
        'تعزيز اتساق هوية العلامة التجارية عبر جميع المواقع'
      ],
      image: '/images/corporate-uniform-program-hospitality-SBI-300967711.jpg',
    },
    {
      company: 'شركة الخليج للخدمات الأمنية',
      industry: 'الأمن',
      challenge: 'الحاجة إلى زي موحد متين يتحمل ظروف العمل القاسية مع تلبية متطلبات المظهر الاحترافي والراحة.',
      solution: 'برنامج مخصص مع أقمشة عالية الأداء وتقنيات متقدمة للتكيف مع المناخ السعودي وبيئة العمل الصعبة.',
      results: [
        'تحسين عمر الزي الموحد بنسبة 45%',
        'انخفاض في شكاوى الموظفين بنسبة 83%',
        'تقليل التكاليف الإجمالية بنسبة 28% سنويًا',
        'تعزيز الصورة المهنية والثقة في الخدمات'
      ],
      image: '/images/corporate-uniform-program-security-SBI-300991078.jpg',
    },
  ];
  
  // نموذج لمراحل تنفيذ البرنامج
  const implementationSteps = [
    {
      number: 1,
      title: 'الاستشارة الأولية',
      description: 'استكشاف احتياجاتك ومتطلباتك وأهدافك من برنامج الزي الموحد المؤسسي.',
    },
    {
      number: 2,
      title: 'تحليل الاحتياجات',
      description: 'تقييم شامل للهيكل التنظيمي والبيئة التشغيلية والمتطلبات الخاصة بكل قسم ودور.',
    },
    {
      number: 3,
      title: 'تطوير الاستراتيجية',
      description: 'وضع خطة شاملة تتضمن التصميم والتوريد والتنفيذ وإدارة البرنامج على المدى الطويل.',
    },
    {
      number: 4,
      title: 'التصميم والعينات',
      description: 'إنشاء تصاميم مخصصة وعينات للمراجعة والموافقة استنادًا إلى استراتيجية البرنامج.',
    },
    {
      number: 5,
      title: 'الإنتاج والتوريد',
      description: 'تصنيع الزي الموحد وفقًا للمواصفات المعتمدة مع ضمان أعلى معايير الجودة والاتساق.',
    },
    {
      number: 6,
      title: 'التنفيذ والتوزيع',
      description: 'طرح البرنامج بطريقة منظمة عبر المؤسسة مع توفير التدريب والدعم اللازم.',
    },
    {
      number: 7,
      title: 'الدعم المستمر',
      description: 'إدارة متواصلة للبرنامج، بما في ذلك تجديد المخزون والاستبدال والتحديثات والتقارير الدورية.',
    },
  ];

  return (
    <div className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      <RTLWrapper locale="ar">
        {/* قسم الهيدر الرئيسي */}
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/Corporate_Uniform_Programs.jpg"
              alt="برامج الزي الموحد المؤسسي"
              fill
              className="object-cover"
            />
          </div>
          
          <Container>
            <Breadcrumbs locale={locale} className="mb-8 text-white/80" />
            
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className={`${cairoFont.className} text-3xl md:text-5xl font-bold mb-6`}>
                    برامج الزي الموحد المؤسسي
                  </h1>
                  <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                    حلول متكاملة لإدارة برامج الزي الموحد في المؤسسات الكبيرة، من التصميم إلى التوريد والتوزيع وإدارة البرنامج على المدى الطويل.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      href="/ar/quote?service=corporate-programs" 
                      variant="secondary" 
                      size="lg"
                    >
                      طلب استشارة مجانية
                    </Button>
                    <Button 
                      href="#case-studies" 
                      variant="outline" 
                      size="lg"
                    >
                      مشاهدة دراسات الحالة
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                >
                  <h2 className={`${cairoFont.className} text-xl font-bold mb-4`}>لماذا تختار برنامج الزي الموحد المؤسسي؟</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>إدارة فعالة للزي الموحد عبر مواقع ووظائف متعددة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>ضمان اتساق هوية العلامة التجارية في جميع نقاط التواصل</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تبسيط عمليات التوريد والتوزيع والاستبدال</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تحقيق وفورات كبيرة في التكاليف من خلال الإدارة المركزية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تخفيف العبء الإداري على فرق الموارد البشرية والمشتريات</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
        
        {/* قسم المقدمة */}
        <section className="py-16 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/services/bright-raincoats-hanging-at-a-fashion-store-2024-12-16-06-50-01-utc.jpg"
                    alt="إدارة برامج الزي الموحد للشركات"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading as="h2">
                  حلول متكاملة لإدارة برامج الزي الموحد المؤسسي
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    تقدم يونيوم حلولاً متكاملة لإدارة برامج الزي الموحد للشركات والمؤسسات الكبيرة في المملكة العربية السعودية. نتولى جميع مراحل البرنامج بدءاً من التصميم والتخطيط الاستراتيجي، مروراً بالإنتاج والتوريد، وصولاً إلى التوزيع وإدارة البرنامج على المدى الطويل.
                  </p>
                  <p>
                    نعمل مع المؤسسات التي تضم مئات أو آلاف الموظفين ونوفر لها حلولاً مبتكرة تساعدها على تبسيط وأتمتة عمليات إدارة الزي الموحد، مما يؤدي إلى توفير الوقت والجهد والتكاليف، مع ضمان الاتساق في الجودة والمظهر في جميع فروع المؤسسة.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٥٠+</div>
                    <div className="text-neutral-600 text-sm">برنامج مؤسسي نشط</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٣٠٪</div>
                    <div className="text-neutral-600 text-sm">متوسط توفير التكاليف</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٩٨.٥٪</div>
                    <div className="text-neutral-600 text-sm">نسبة رضا العملاء</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٢٤/٧</div>
                    <div className="text-neutral-600 text-sm">دعم على مدار الساعة</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم مكونات البرنامج */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              مكونات برنامج الزي الموحد المؤسسي
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              تتكون برامجنا المؤسسية من عدة عناصر رئيسية مصممة لتوفير حل شامل لاحتياجات الزي الموحد لمؤسستك.
            </p>
            
            <div className="space-y-12">
              {programComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="md:w-2/5">
                    <div className="bg-gray-50 p-8 rounded-xl relative">
                      <div className="text-primary-600 text-6xl absolute -top-6 -right-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                        {component.icon}
                      </div>
                      <h3 className={`${cairoFont.className} text-2xl font-bold mb-6 mt-4`}>{component.title}</h3>
                      <p className={`${tajawalFont.className} text-gray-700 mb-6`}>{component.description}</p>
                      <div className="bg-white rounded-lg p-4 border border-gray-100">
                        <h4 className={`${cairoFont.className} text-sm font-semibold text-primary-800 mb-3`}>المميزات الرئيسية:</h4>
                        <ul className="space-y-2">
                          {component.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-600 flex-shrink-0">•</span>
                              <span className={`${tajawalFont.className} text-gray-700 text-sm`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    {index === 0 && (
                      <Image
                        src="/images/needs-assessment-for-corporate-uniform-program-SBI-300991050.jpg"
                        alt="تقييم احتياجات برنامج الزي الموحد المؤسسي"
                        width={800}
                        height={500}
                        className="rounded-xl shadow-lg"
                      />
                    )}
                    {index === 1 && (
                      <Image
                        src="/images/custom-design-development-corporate-uniforms-SBI-300991076.jpg"
                        alt="تصميم وتطوير الزي الموحد المخصص"
                        width={800}
                        height={500}
                        className="rounded-xl shadow-lg"
                      />
                    )}
                    {index === 2 && (
                      <Image
                        src="/images/implementation-strategy-corporate-uniform-program-SBI-300990817.jpg"
                        alt="استراتيجية تنفيذ برنامج الزي الموحد المؤسسي"
                        width={800}
                        height={500}
                        className="rounded-xl shadow-lg"
                      />
                    )}
                    {index === 3 && (
                      <Image
                        src="/images/ongoing-management-corporate-uniform-program-SBI-301012725.jpg"
                        alt="الإدارة المستمرة لبرنامج الزي الموحد المؤسسي"
                        width={800}
                        height={500}
                        className="rounded-xl shadow-lg"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم مراحل التنفيذ */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>
                  مراحل تنفيذ برنامج الزي الموحد
                </SectionHeading>
                <p className={`${tajawalFont.className} text-lg text-neutral-700 mb-8`}>
                  نتبع نهجًا منظمًا ومنهجيًا لتطوير وتنفيذ برامج الزي الموحد المؤسسية التي تلبي احتياجاتك المحددة.
                </p>
                
                <div className="space-y-8">
                  {implementationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className={`${cairoFont.className} text-lg font-bold mb-1 text-neutral-900`}>{step.title}</h3>
                        <p className={`${tajawalFont.className} text-neutral-600`}>{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/services/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg"
                    alt="مراحل تنفيذ برنامج الزي الموحد"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-5 -left-5 w-44 h-44 bg-primary-50 rounded-lg shadow-md p-4 flex flex-col justify-center">
                  <div className={`${cairoFont.className} text-primary-700 text-lg font-bold mb-1`}>برنامج مخصص</div>
                  <div className={`${tajawalFont.className} text-neutral-700 text-sm`}>
                    نصمم كل برنامج بشكل فريد ليناسب احتياجات مؤسستك وأهدافها
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم المزايا */}
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <Container>
            <SectionHeading centered>
              مزايا برنامج الزي الموحد المؤسسي
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              القيمة المضافة التي تحصل عليها المؤسسات من خلال برامجنا المتكاملة
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <div className="text-3xl mb-4 text-primary-600">{benefit.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-2 text-neutral-900`}>{benefit.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم دراسات الحالة */}
        <section id="case-studies" className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              دراسات حالة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              قصص نجاح حقيقية لبرامج الزي الموحد المؤسسي التي نفذتها يونيوم
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>{caseStudy.company}</h3>
                    <p className={`${tajawalFont.className} text-neutral-600`}>{caseStudy.challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button
                href="/ar/contact"
                variant="outline"
                size="lg"
              >
                تواصل معنا لمعرفة المزيد من قصص النجاح
              </Button>
            </div>
          </Container>
        </section>
        
        {/* قسم المنصة التكنولوجية */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>
                  منصة تكنولوجية متقدمة لإدارة البرامج
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    تعتمد برامجنا المؤسسية على منصة تكنولوجية متطورة تم تطويرها خصيصاً لتلبية احتياجات إدارة برامج الزي الموحد للمؤسسات الكبيرة. توفر المنصة واجهة سهلة الاستخدام للإدارة والموظفين، مع أدوات متقدمة للتحكم والتحليل.
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-primary-600 text-xl">✓</div>
                    <div>
                      <div className={`${cairoFont.className} font-bold text-neutral-900`}>بوابة طلبات الموظفين</div>
                      <div className={`${tajawalFont.className} text-sm text-neutral-600`}>نظام سهل الاستخدام للموظفين لطلب واستبدال الزي الموحد</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary-600 text-xl">✓</div>
                    <div>
                      <div className={`${cairoFont.className} font-bold text-neutral-900`}>إدارة المخزون الذكية</div>
                      <div className={`${tajawalFont.className} text-sm text-neutral-600`}>نظام متطور للتنبؤ بالاحتياجات وإدارة المخزون بفعالية</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary-600 text-xl">✓</div>
                    <div>
                      <div className={`${cairoFont.className} font-bold text-neutral-900`}>لوحة تحكم للإدارة</div>
                      <div className={`${tajawalFont.className} text-sm text-neutral-600`}>أدوات متقدمة للإدارة ومراقبة البرنامج بشكل شامل</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary-600 text-xl">✓</div>
                    <div>
                      <div className={`${cairoFont.className} font-bold text-neutral-900`}>تقارير وتحليلات</div>
                      <div className={`${tajawalFont.className} text-sm text-neutral-600`}>تقارير تفصيلية وتحليلات متقدمة لتحسين أداء البرنامج</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button
                    href="/ar/quote?service=corporate-programs"
                    variant="primary"
                    size="lg"
                  >
                    طلب عرض توضيحي للمنصة
                  </Button>
                </div>
              </div>
              
              <div className="relative w-full aspect-video md:aspect-square rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Corporate_Technology_Platform.jpg"
                  alt="منصة تكنولوجية لإدارة برامج الزي الموحد"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم التواصل */}
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading centered className="text-white">
                لنبدأ في تطوير برنامج الزي الموحد المؤسسي الخاص بك
              </SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-white/90 max-w-3xl mx-auto mb-8`}>
                فريقنا من الخبراء جاهز لمساعدتك في تصميم وتنفيذ برنامج زي موحد مؤسسي يلبي احتياجات مؤسستك ويحقق أهدافها
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/ar/quote?service=corporate-programs"
                  variant="secondary"
                  size="lg"
                >
                  طلب استشارة مجانية
                </Button>
                <Button
                  href="/ar/contact"
                  variant="outline"
                  size="lg"
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </RTLWrapper>
    </div>
  );
};

export default CorporateProgramsPage; 