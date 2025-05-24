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
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

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

const TechnicalFinishesPage = () => {
  const locale = 'ar';
  
  // أنواع التشطيبات الفنية
  const finishTypes = [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'معالجة متطورة تمنع نمو البكتيريا والفطريات وتقضي على الروائح، مثالية للقطاع الصحي والمناخ الحار في المملكة',
      icon: '🦠',
      features: [
        'حماية من البكتيريا بنسبة 99.9%',
        'تقليل الروائح الكريهة',
        'فعالية تستمر طوال عمر القطعة',
        'آمنة تمامًا على البشرة'
      ]
    },
    {
      title: 'المعالجة المقاومة للماء والسوائل',
      description: 'تقنية متطورة تجعل الأقمشة طاردة للماء والسوائل والبقع مع الحفاظ على المظهر والملمس الطبيعي',
      icon: '💧',
      features: [
        'حماية من البقع والسوائل المختلفة',
        'سهولة التنظيف',
        'تهوية ممتازة',
        'تحافظ على المظهر الأنيق'
      ]
    },
    {
      title: 'المعالجة المقاومة للحريق',
      description: 'معالجة خاصة تجعل الأقمشة مقاومة للهب وتؤخر انتشار الحريق، مطابقة للمعايير الدولية والمحلية',
      icon: '🔥',
      features: [
        'مقاومة عالية للهب',
        'مطابقة للمعايير العالمية',
        'دائمة مع الغسيل المتكرر',
        'مناسبة للبيئات الصناعية'
      ]
    },
    {
      title: 'معالجة التحكم في درجة الحرارة',
      description: 'تقنية متطورة تساعد على تنظيم درجة حرارة الجسم، مثالية للملابس المهنية في المناخ الحار بالمملكة',
      icon: '🌡️',
      features: [
        'تساعد على تبريد الجسم',
        'تحافظ على الراحة في الجو الحار',
        'تقلل التعرق',
        'تحسن الأداء في بيئة العمل'
      ]
    },
    {
      title: 'معالجة مقاومة الأشعة فوق البنفسجية',
      description: 'حماية متطورة من أشعة الشمس الضارة، مثالية للملابس المستخدمة في الأماكن المفتوحة والمناخ المشمس',
      icon: '☀️',
      features: [
        'حماية من الأشعة فوق البنفسجية بنسبة 50+ UPF',
        'تمنع تلف الأقمشة بسبب الشمس',
        'تحافظ على ألوان القماش',
        'تزيد من عمر الملابس'
      ]
    },
    {
      title: 'معالجة الراحة الفائقة',
      description: 'تقنيات متطورة لتحسين ملمس الأقمشة وزيادة نعومتها ومرونتها مع الحفاظ على متانتها',
      icon: '✨',
      features: [
        'ملمس ناعم وفاخر',
        'مرونة عالية',
        'سهولة الحركة',
        'راحة طوال اليوم'
      ]
    },
  ];
  
  // فوائد التشطيبات الفنية
  const benefits = [
    {
      title: 'تحسين الأداء الوظيفي',
      description: 'إضافة خصائص وظيفية للأقمشة تناسب طبيعة العمل والبيئة المحيطة',
      icon: '📈',
    },
    {
      title: 'زيادة متانة الملابس',
      description: 'تحسين مقاومة الأقمشة للتآكل والتمزق مما يزيد من عمرها الافتراضي',
      icon: '💪',
    },
    {
      title: 'تعزيز راحة الموظفين',
      description: 'تحسين خصائص الأقمشة لزيادة راحة الموظفين خلال ساعات العمل الطويلة',
      icon: '😊',
    },
    {
      title: 'تلبية متطلبات السلامة',
      description: 'توفير معالجات تلبي معايير السلامة المهنية في القطاعات المختلفة',
      icon: '🛡️',
    },
    {
      title: 'تحسين المظهر الاحترافي',
      description: 'الحفاظ على مظهر أنيق ومهني للزي الموحد لفترة أطول',
      icon: '👔',
    },
    {
      title: 'سهولة العناية والصيانة',
      description: 'تقليل متطلبات العناية بالملابس وتسهيل عمليات الغسيل والتنظيف',
      icon: '🧼',
    },
  ];
  
  // القطاعات المستفيدة
  const sectors = [
    {
      name: 'القطاع الصحي',
      finishes: 'المعالجة المضادة للبكتيريا، مقاومة البقع، سهولة التنظيف',
      icon: '🏥',
    },
    {
      name: 'القطاع الصناعي',
      finishes: 'مقاومة الحريق، مقاومة الكيماويات، مقاومة التآكل',
      icon: '🏭',
    },
    {
      name: 'قطاع الضيافة',
      finishes: 'مقاومة البقع، سهولة التنظيف، المظهر الأنيق',
      icon: '🏨',
    },
    {
      name: 'قطاع النفط والغاز',
      finishes: 'مقاومة الحريق، مقاومة الحرارة، مقاومة المواد الكيميائية',
      icon: '⛽',
    },
  ];
  
  // عملية التشطيبات الفنية
  const processSteps = [
    {
      number: 1,
      title: 'تحليل المتطلبات',
      description: 'دراسة متطلبات القطاع والوظائف المحددة وظروف العمل',
    },
    {
      number: 2,
      title: 'اختيار المعالجات',
      description: 'تحديد المعالجات الفنية المناسبة لتلبية المتطلبات المحددة',
    },
    {
      number: 3,
      title: 'اختبار العينات',
      description: 'إنتاج عينات معالجة واختبارها في ظروف مماثلة لبيئة العمل',
    },
    {
      number: 4,
      title: 'التنفيذ والإنتاج',
      description: 'تطبيق المعالجات على الإنتاج النهائي مع ضمان الجودة',
    },
    {
      number: 5,
      title: 'المتابعة والتقييم',
      description: 'تقييم أداء المعالجات في الظروف الفعلية وإجراء التعديلات اللازمة',
    },
  ];
  
  // المعايير والشهادات
  const certifications = [
    { name: 'الهيئة السعودية للمواصفات والمقاييس (SASO)', icon: '🏅' },
    { name: 'المعهد الأمريكي للمعايير الوطنية (ANSI)', icon: '🏅' },
    { name: 'المعيار الأوروبي (EN)', icon: '🏅' },
    { name: 'شهادة OEKO-TEX للمنسوجات الآمنة', icon: '🏅' },
  ];

  return (
    <div className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      <RTLWrapper locale="ar">
        {/* قسم الهيدر الرئيسي */}
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/services/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg"
              alt="التشطيبات الفنية للأقمشة والملابس"
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
                    خدمات التشطيبات الفنية المتطورة
                  </h1>
                  <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                    نقدم مجموعة شاملة من خدمات التشطيبات والمعالجات الفنية المتطورة للأقمشة والملابس المهنية، لتحسين أدائها وتعزيز خصائصها لتلبية متطلبات القطاعات المختلفة.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      href="/ar/quote?service=technical-finishes" 
                      variant="secondary" 
                      size="lg"
                    >
                      طلب عرض سعر
                    </Button>
                    <Button 
                      href="#finish-types" 
                      variant="outline" 
                      size="lg"
                    >
                      استكشف أنواع التشطيبات
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
                  <h2 className={`${cairoFont.className} text-xl font-bold mb-4`}>لماذا تختار التشطيبات الفنية؟</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تحسين أداء الملابس المهنية في ظروف العمل المختلفة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>إضافة خصائص وظيفية مثل مقاومة البكتيريا والماء والحريق</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>زيادة متانة الملابس وإطالة عمرها الافتراضي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تعزيز راحة الموظفين وزيادة إنتاجيتهم</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تلبية متطلبات السلامة المهنية في القطاعات المختلفة</span>
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
                    src="/images/services/stack-of-rolled-jeans-and-cotton-flowers-on-light-2025-01-29-01-45-01-utc.jpg"
                    alt="التشطيبات الفنية للأقمشة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading as="h2">
                  تشطيبات فنية متطورة للأقمشة والملابس المهنية
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    تعد التشطيبات والمعالجات الفنية للأقمشة والملابس من أهم العوامل التي ترفع من جودة وأداء الزي الموحد المهني. في يونيوم، نوفر مجموعة متنوعة من المعالجات الفنية المتطورة التي تضيف خصائص وظيفية للأقمشة وتحسن من أدائها.
                  </p>
                  <p>
                    تشمل خدماتنا المعالجات المضادة للبكتيريا، والمقاومة للماء والسوائل، والمقاومة للحريق، والتحكم في درجة الحرارة، ومقاومة الأشعة فوق البنفسجية، وغيرها من المعالجات المتخصصة التي تلبي متطلبات مختلف القطاعات والبيئات المهنية في المملكة العربية السعودية.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٥+</div>
                    <div className="text-neutral-600 text-sm">نوع من التشطيبات الفنية</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠+</div>
                    <div className="text-neutral-600 text-sm">سنوات من الخبرة في المجال</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٩٩٪</div>
                    <div className="text-neutral-600 text-sm">فعالية مضمونة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠٠٪</div>
                    <div className="text-neutral-600 text-sm">متوافقة مع المعايير الدولية</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم أنواع التشطيبات */}
        <section id="finish-types" className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              أنواع التشطيبات الفنية
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              مجموعة متنوعة من المعالجات المتخصصة لتحسين أداء وجودة الأقمشة والملابس المهنية
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {finishTypes.map((finish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="text-3xl mb-4">{finish.icon}</div>
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>{finish.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600 mb-4`}>{finish.description}</p>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className={`${cairoFont.className} text-sm font-bold mb-2 text-neutral-800`}>المميزات:</h4>
                    <ul className="space-y-1">
                      {finish.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-600 text-sm">●</span>
                          <span className={`${tajawalFont.className} text-sm text-neutral-700`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم الفوائد */}
        <section className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              فوائد التشطيبات الفنية
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              تعزيز قيمة وأداء الزي الموحد المهني من خلال المعالجات الفنية المتطورة
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-50 rounded-lg p-6 h-full"
                >
                  <div className="text-3xl mb-4 text-primary-600">{benefit.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-2 text-neutral-900`}>{benefit.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم القطاعات المستفيدة */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <Container>
            <SectionHeading centered>
              القطاعات المستفيدة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              معالجات فنية مخصصة لتلبية متطلبات مختلف القطاعات المهنية
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-sm h-full"
                >
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>{sector.name}</h3>
                  <p className={`${tajawalFont.className} text-sm text-neutral-600`}>
                    <span className="font-bold">التشطيبات الموصى بها:</span><br />
                    {sector.finishes}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>
                    حلول مخصصة حسب احتياجات قطاعك
                  </h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>
                    نقدم حلولاً مخصصة حسب متطلبات كل قطاع وبيئة عمل، تواصل معنا لمعرفة التشطيبات الفنية الأنسب لمؤسستك.
                  </p>
                </div>
                <div>
                  <Button 
                    href="/ar/quote?service=technical-finishes" 
                    variant="primary" 
                    size="lg"
                  >
                    طلب استشارة مجانية
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم العملية */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>
                  عملية تطبيق التشطيبات الفنية
                </SectionHeading>
                <p className={`${tajawalFont.className} text-lg text-neutral-700 mb-8`}>
                  منهجية منظمة لضمان أعلى مستويات الجودة والفعالية في التشطيبات الفنية
                </p>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
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
                    src="/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg"
                    alt="عملية تطبيق التشطيبات الفنية"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-5 -left-5 w-44 h-44 bg-primary-50 rounded-lg shadow-md p-4 flex flex-col justify-center">
                  <div className={`${cairoFont.className} text-primary-700 text-lg font-bold mb-1`}>ضمان الجودة</div>
                  <div className={`${tajawalFont.className} text-neutral-700 text-sm`}>
                    نطبق معايير صارمة لضمان فعالية التشطيبات وديمومتها
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم المعايير والشهادات */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              المعايير والشهادات
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              نلتزم بأعلى المعايير المحلية والدولية في تطبيق التشطيبات الفنية
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-sm"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className={`${cairoFont.className} text-base font-bold mb-2 text-neutral-900`}>{cert.name}</h3>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6 mt-12">
              <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-center text-neutral-900`}>
                الالتزام بمعايير السلامة وجودة المنتج
              </h3>
              <p className={`${tajawalFont.className} text-center text-neutral-600 max-w-3xl mx-auto`}>
                جميع التشطيبات الفنية التي نقدمها تخضع لاختبارات صارمة وتطابق المعايير العالمية للسلامة وجودة المنتج.
                نضمن أن جميع المواد المستخدمة آمنة على البشرة وصديقة للبيئة.
              </p>
            </div>
          </Container>
        </section>
        
        {/* قسم التواصل */}
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading centered className="text-white">
                استفد من خدمات التشطيبات الفنية المتطورة
              </SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-white/90 max-w-3xl mx-auto mb-8`}>
                دعنا نساعدك في اختيار التشطيبات الفنية المناسبة التي تلبي احتياجات مؤسستك وتحسن أداء الزي الموحد لديك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/ar/quote?service=technical-finishes"
                  variant="secondary"
                  size="lg"
                >
                  طلب عرض سعر
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

export default TechnicalFinishesPage; 