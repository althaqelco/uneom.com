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

const FabricSelectionPage = () => {
  const locale = 'ar';
  
  // مراحل عملية اختيار الأقمشة
  const processSteps = [
    {
      title: 'الاستشارة الأولية',
      description: 'نلتقي مع فريقك لفهم احتياجاتك المحددة ومتطلبات الصناعة وهوية العلامة التجارية',
      icon: '🤝',
    },
    {
      title: 'تحليل الاحتياجات',
      description: 'يقوم خبراء الأقمشة لدينا بتحليل متطلباتك المحددة، بما في ذلك التكيف مع المناخ والاحتياجات الوظيفية ومعايير الامتثال',
      icon: '🔍',
    },
    {
      title: 'اختيار العينات',
      description: 'بناءً على متطلباتك، نقدم مجموعة مختارة من عينات الأقمشة المناسبة للتقييم',
      icon: '👕',
    },
    {
      title: 'اختبار الأقمشة',
      description: 'تخضع الأقمشة المختارة لاختبارات دقيقة للتأكد من تلبيتها لمعايير الأداء في ظروف العمل الحقيقية',
      icon: '⚗️',
    },
    {
      title: 'التوصيات النهائية',
      description: 'نقدم توصيات مفصلة مع مواصفات شاملة للأقمشة وتعليمات العناية بها',
      icon: '📋',
    },
  ];
  
  // أنواع الأقمشة الرئيسية
  const fabricTypes = [
    {
      name: 'خلطات القطن',
      description: 'توازن مثالي بين الراحة الطبيعية والمتانة، مثالية للأزياء الموحدة المهنية اليومية في مناخ المملكة العربية السعودية.',
      benefits: [
        'تنفس طبيعي',
        'امتصاص ممتاز للرطوبة',
        'ملمس ناعم ومريح',
        'متين مع العناية المناسبة',
        'انسدال وظهور جيد'
      ],
      applications: ['أزياء موحدة للمكاتب', 'ملابس موظفي الضيافة', 'أزياء الرعاية الصحية', 'الزي المدرسي'],
      image: '/images/fabric-cotton-blends.webp',
    },
    {
      name: 'أقمشة البوليستر عالية الأداء',
      description: 'أقمشة اصطناعية مهندسة تقدم متانة استثنائية ومقاومة للتجعد واحتفاظ باللون.',
      benefits: [
        'مقاومة فائقة للتجعد',
        'احتفاظ ممتاز باللون',
        'خصائص التجفيف السريع',
        'متانة عالية',
        'احتفاظ بالشكل'
      ],
      applications: ['الملابس الرسمية للأعمال', 'موظفي الاستقبال', 'أزياء الأمن', 'أزياء موظفي شركات الطيران'],
      image: '/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg',
    },
    {
      name: 'أقمشة مقاومة للماء والظروف الجوية',
      description: 'أقمشة متخصصة مصممة للحماية من المطر والرياح والظروف الجوية القاسية مع الحفاظ على الراحة.',
      benefits: [
        'حماية من الماء والرياح',
        'أغشية تسمح بمرور الهواء',
        'صد دائم للماء',
        'حماية خفيفة الوزن',
        'قابلة للتكيف مع تغيرات الطقس'
      ],
      applications: ['أفراد الأمن الخارجي', 'موظفي التوصيل', 'إدارة المرافق', 'فرق تنسيق الحدائق'],
      image: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg',
    },
  ];
  
  // التقنيات المتخصصة للأقمشة
  const fabricTechnologies = [
    {
      name: 'الحماية من الأشعة فوق البنفسجية',
      description: 'أقمشة مزودة بعامل حماية من الأشعة فوق البنفسجية لحجب الأشعة الضارة',
      icon: '☀️',
    },
    {
      name: 'معالجة مضادة للميكروبات',
      description: 'تقنية تمنع نمو البكتيريا والكائنات الدقيقة على أسطح الأقمشة',
      icon: '🛡️',
    },
    {
      name: 'مقاومة البقع',
      description: 'معالجات تصد السوائل وتمنع البقع من التغلغل في ألياف القماش',
      icon: '💧',
    },
    {
      name: 'تقنية التمدد',
      description: 'أقمشة مصممة بالإيلاستين أو تمدد ميكانيكي لتحسين الحركة والراحة',
      icon: '🔄',
    },
    {
      name: 'التحكم في درجة الحرارة',
      description: 'أقمشة متطورة تساعد على تنظيم درجة حرارة الجسم في الظروف البيئية المتغيرة',
      icon: '🌡️',
    },
    {
      name: 'معالجة التجفيف السريع',
      description: 'أقمشة مصممة لنقل الرطوبة بعيدًا عن الجسم والجفاف بسرعة',
      icon: '💨',
    },
  ];
  
  // مميزات خدمة اختيار الأقمشة
  const serviceFeatures = [
    {
      title: 'خبرة متخصصة',
      description: 'الوصول إلى متخصصي الأقمشة ذوي المعرفة الواسعة بخصائص المنسوجات وأداءها وتطبيقاتها الصناعية',
      icon: '👔',
    },
    {
      title: 'فهم مناخ المملكة العربية السعودية',
      description: 'معرفة متخصصة بكيفية أداء الأقمشة المختلفة في ظروف المناخ الفريدة للملكة العربية السعودية، من الحرارة الشديدة إلى الرطوبة الساحلية',
      icon: '☀️',
    },
    {
      title: 'اختبار الجودة',
      description: 'اختبار شامل للأقمشة من حيث المتانة والراحة والأداء في ظروف واقعية قبل الاختيار النهائي',
      icon: '🔍',
    },
    {
      title: 'الالتزام بالميزانية',
      description: 'توصيات الأقمشة التي توازن بين متطلبات الأداء واعتبارات التكلفة لتلبية أهداف ميزانيتك',
      icon: '💰',
    },
  ];

  return (
    <div className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      <RTLWrapper locale="ar">
        {/* قسم الهيدر الرئيسي */}
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/fabric-cotton-blends.webp"
              alt="خدمة اختيار الأقمشة الاحترافية"
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
                    خدمة اختيار الأقمشة الاحترافية
                  </h1>
                  <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                    استشارة متخصصة لتحديد الأقمشة المثالية للأزياء الموحدة المهنية. نطابق خصائص الأداء مع متطلبات صناعتك المحددة والظروف البيئية وهوية علامتك التجارية.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      href="/quote?service=fabric-selection" 
                      variant="secondary" 
                      size="lg"
                    >
                      طلب استشارة مجانية
                    </Button>
                    <Button 
                      href="#fabric-types" 
                      variant="outline" 
                      size="lg"
                    >
                      استكشاف أنواع الأقمشة
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
                  <h2 className={`${cairoFont.className} text-xl font-bold mb-4`}>لماذا يهم اختيار الأقمشة</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>يؤثر مباشرة على راحة المرتدي وإنتاجيته</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>يحدد متانة الزي الموحد وعمره الافتراضي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>يؤثر على متطلبات الصيانة والتكاليف</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>يؤثر على المظهر المهني وصورة العلامة التجارية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>ضروري للتكيف مع مناخ المملكة العربية السعودية</span>
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
                    src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300991172.jpg"
                    alt="استشارة اختيار الأقمشة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading as="h2">
                  خدمة اختيار الأقمشة الاحترافية
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    يُعد اختيار الأقمشة المناسبة أحد أهم العوامل في نجاح برنامج الزي الموحد لأي مؤسسة. في يونيوم، نقدم خدمة متخصصة لمساعدتك على اختيار الأقمشة المثالية التي تجمع بين الراحة والمتانة والمظهر الاحترافي، مع مراعاة الظروف المناخية في المملكة العربية السعودية وطبيعة نشاط مؤسستك.
                  </p>
                  <p>
                    يقوم فريقنا من الخبراء بتحليل احتياجاتك ومتطلبات بيئة العمل لتقديم توصيات مخصصة تساعدك على اختيار الأقمشة المناسبة لكل قسم ووظيفة في مؤسستك. نوفر مجموعة واسعة من الأقمشة عالية الجودة من مصادر موثوقة حول العالم، مع التركيز على الأقمشة المناسبة للمناخ السعودي.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠٠+</div>
                    <div className="text-neutral-600 text-sm">نوع من الأقمشة المتخصصة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٥+</div>
                    <div className="text-neutral-600 text-sm">سنة من الخبرة في مجال الأقمشة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٥٠+</div>
                    <div className="text-neutral-600 text-sm">معيار اختبار للأقمشة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٩٩%</div>
                    <div className="text-neutral-600 text-sm">نسبة رضا العملاء</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم عملية اختيار الأقمشة */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              عملية اختيار الأقمشة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              منهجيتنا المنظمة في اختيار الأقمشة المناسبة لاحتياجات مؤسستك
            </p>
            
            <div className="relative">
              {/* خط الزمن */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl mb-4">
                        {step.icon}
                      </div>
                      <div className="hidden md:flex items-center justify-center bg-white w-10 h-10 rounded-full border-2 border-primary-600 text-primary-800 font-bold mb-4">
                        {index + 1}
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-md text-center h-full">
                        <h3 className={`${cairoFont.className} text-lg font-bold mb-2 text-neutral-900`}>{step.title}</h3>
                        <p className={`${tajawalFont.className} text-sm text-neutral-600`}>{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم أنواع الأقمشة */}
        <section id="fabric-types" className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              أنواع الأقمشة الرئيسية
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              مجموعة متنوعة من الأقمشة عالية الجودة المناسبة لمختلف القطاعات والاحتياجات
            </p>
            
            <div className="space-y-16">
              {fabricTypes.map((fabric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="md:w-2/5">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={fabric.image}
                        alt={fabric.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <h3 className={`${cairoFont.className} text-2xl font-bold mb-4`}>{fabric.name}</h3>
                    <p className={`${tajawalFont.className} text-neutral-600 mb-6`}>{fabric.description}</p>
                    
                    <div className="mb-4">
                      <h4 className={`${cairoFont.className} font-semibold text-primary-900 mb-2`}>الفوائد الرئيسية:</h4>
                      <ul className="space-y-1">
                        {fabric.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary-600 flex-shrink-0">•</span>
                            <span className={`${tajawalFont.className}`}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className={`${cairoFont.className} font-semibold text-primary-900 mb-2`}>التطبيقات الشائعة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {fabric.applications.map((application, i) => (
                          <span key={i} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                            {application}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم التقنيات المتخصصة */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <Container>
            <SectionHeading centered>
              التقنيات المتخصصة للأقمشة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              أحدث التقنيات العالمية المستخدمة في معالجة الأقمشة لتحسين أدائها وراحتها
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabricTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="text-3xl mb-4">{tech.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-2 text-neutral-900`}>{tech.name}</h3>
                  <p className={`${tajawalFont.className} text-sm text-neutral-600`}>{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم مميزات الخدمة */}
        <section className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              مميزات خدمة اختيار الأقمشة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              نقدم خدمة شاملة ومتخصصة لضمان اختيار الأقمشة المثالية لمؤسستك
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-50 rounded-xl p-6 text-center h-full"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-3 text-neutral-900`}>{feature.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-primary-50 rounded-xl p-8 mt-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-2 text-neutral-900`}>هل تحتاج إلى مساعدة في اختيار الأقمشة المناسبة؟</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>فريقنا من الخبراء جاهز لمساعدتك في اختيار الأقمشة المثالية لزي مؤسستك.</p>
                </div>
                <Button
                  href="/quote?service=fabric-selection"
                  variant="primary"
                  size="lg"
                >
                  طلب استشارة مجانية
                </Button>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم التواصل */}
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading centered className="text-white">
                احصل على استشارة مخصصة
              </SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-white/90 max-w-3xl mx-auto mb-8`}>
                دعنا نساعدك في اختيار الأقمشة المثالية التي تناسب احتياجات مؤسستك وميزانيتك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/quote?service=fabric-selection"
                  variant="secondary"
                  size="lg"
                >
                  طلب استشارة مجانية
                </Button>
                <Button
                  href="/contact"
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

export default FabricSelectionPage; 