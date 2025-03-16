'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Cairo, Tajawal } from 'next/font/google';

// Define the fonts
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

const ManufacturingPage = () => {
  const locale = 'ar';
  
  // Manufacturing Capabilities
  const manufacturingCapabilities = [
    {
      title: 'القطع الدقيق',
      description: 'أنظمة قطع محوسبة تضمن الدقة والاتساق في جميع قطع الزي الموحد',
      icon: '✂️',
    },
    {
      title: 'الخياطة المتطورة',
      description: 'تقنيات خياطة عالية الأداء تمنح قوة ومتانة فائقة للدرزات',
      icon: '🧵',
    },
    {
      title: 'التطريز والعلامات التجارية',
      description: 'آلات تطريز متطورة لوضع الشعارات والتخصيص بدقة عالية',
      icon: '🧶',
    },
    {
      title: 'الطباعة على الأقمشة',
      description: 'أنظمة طباعة صناعية للرسومات النابضة بالحياة والدائمة',
      icon: '🖌️',
    },
    {
      title: 'عمليات التشطيب',
      description: 'معالجات تشطيب متقدمة لتعزيز الراحة والمتانة والمظهر',
      icon: '✨',
    },
    {
      title: 'مراقبة الجودة',
      description: 'عمليات فحص صارمة في كل مرحلة لضمان جودة متسقة',
      icon: '✓',
    },
  ];
  
  // Manufacturing Process
  const manufacturingProcess = [
    {
      name: 'التصميم وتطوير الأنماط',
      description: 'تحويل مفاهيم التصميم إلى أنماط وموصفات مفصلة للإنتاج.',
      steps: [
        'الانتهاء من التصميم بموافقة العميل',
        'إنشاء أنماط رقمية وتدريجها',
        'تطوير المواصفات التقنية',
        'اختبار نمط العينة وتعديله',
        'إعداد النمط النهائي للإنتاج'
      ],
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
    },
    {
      name: 'تحضير المواد',
      description: 'تجهيز الأقمشة والمواد لعملية القطع، وضمان الجودة والاتساق.',
      steps: [
        'فحص جودة المواد',
        'تكييف وتجهيز الأقمشة',
        'اختبار الانكماش والمعالجة المسبقة',
        'فرد وتنضيد الأقمشة للقطع',
        'محاذاة المواد والتحقق منها'
      ],
      image: '/images/fabric-material-2024-12-06-03-35-02-utc.jpg',
    },
    {
      name: 'التجميع المتخصص',
      description: 'حرفيون مهرة يقومون بتجميع مكونات الزي الموحد بدقة واهتمام بالتفاصيل.',
      steps: [
        'تحضير المكونات الأولية',
        'عمليات التجميع المتسلسلة',
        'إنشاء درزات متخصصة',
        'فحوصات الجودة أثناء العمل',
        'التحقق من السلامة الهيكلية'
      ],
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
    },
    {
      name: 'مراقبة الجودة والتشطيب',
      description: 'اللمسات النهائية وفحوصات الجودة الشاملة لضمان مطابقة جميع الأزياء الموحدة لمعاييرنا الدقيقة.',
      steps: [
        'تشذيب الخيوط والتنظيف',
        'الكي وضبط الشكل',
        'الفحص النهائي مقابل المواصفات',
        'التحقق من دقة المقاسات',
        'التعبئة والتغليف والتجهيز للتسليم'
      ],
      image: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg',
    },
  ];
  
  // Production Options
  const productionOptions = [
    {
      title: 'الإنتاج العادي',
      description: 'تصنيع فعال لطلبات الزي الموحد بكميات قياسية وجداول زمنية متوقعة.',
      features: [
        'الحد الأدنى للطلب من 50 قطعة لكل تصميم',
        'مواعيد تسليم قياسية من 4-6 أسابيع',
        'إنتاج فعال من حيث التكلفة للطلبات المتوسطة والكبيرة',
        'نقاط تفتيش منتظمة لمراقبة الجودة'
      ],
      suitableFor: 'المؤسسات المتوسطة والكبيرة ذات متطلبات الزي الموحد الثابتة',
    },
    {
      title: 'الإنتاج السريع',
      description: 'عملية تصنيع معجلة لمتطلبات الزي الموحد العاجلة دون المساس بالجودة.',
      features: [
        'جدول إنتاج مسرع',
        'توفير المواد ذات الأولوية',
        'تخصيص خط إنتاج مخصص',
        'تنسيق التسليم السريع'
      ],
      suitableFor: 'المؤسسات ذات احتياجات الزي الموحد العاجلة أو المواعيد النهائية الضيقة',
    },
    {
      title: 'إنتاج بكميات صغيرة',
      description: 'خدمة تصنيع متخصصة للمؤسسات الصغيرة أو احتياجات الأقسام المحددة.',
      features: [
        'الحد الأدنى المنخفض لكميات الطلب (بدءًا من 20 قطعة)',
        'جدولة إنتاج مرنة',
        'نفس أساليب الإنتاج عالية الجودة',
        'الأمثل من حيث التكلفة للكميات الصغيرة'
      ],
      suitableFor: 'الشركات الصغيرة أو الشركات الناشئة أو الأقسام التي تتطلب كميات محدودة',
    },
  ];
  
  // Manufacturing Benefits
  const manufacturingBenefits = [
    {
      title: 'مراقبة جودة متفوقة',
      description: 'يضمن تصنيعنا الداخلي معايير جودة صارمة في كل مرحلة من مراحل الإنتاج',
      icon: '🛠️',
    },
    {
      title: 'أوقات تسليم أسرع',
      description: 'التحكم المباشر في جدولة الإنتاج يسمح بمواعيد تسليم أكثر كفاءة',
      icon: '⏱️',
    },
    {
      title: 'مرونة الإنتاج',
      description: 'القدرة على استيعاب الطلبات واسعة النطاق والدفعات المتخصصة الصغيرة',
      icon: '🔄',
    },
    {
      title: 'كفاءة التكلفة',
      description: 'عمليات الإنتاج المبسطة وتحسين استخدام المواد يقلل من التكاليف الإجمالية',
      icon: '💰',
    },
  ];

  return (
    <div dir="rtl" className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-l from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg"
            alt="تصنيع الزي الموحد الاحترافي"
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
                  تصنيع الزي الموحد بدقة عالية
                </h1>
                <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                  مرافق تصنيع متطورة وحرفيين مهرة ينتجون أزياء موحدة احترافية عالية الجودة. من التصميم إلى التسليم، نحافظ على معايير دقيقة في كل مرحلة من مراحل الإنتاج.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="/quote?service=manufacturing" 
                    variant="secondary" 
                    size="lg"
                  >
                    طلب عرض سعر للتصنيع
                  </Button>
                  <Button 
                    href="#manufacturing-process" 
                    variant="outline" 
                    size="lg"
                  >
                    استكشاف عملية التصنيع
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
                <h2 className={`${cairoFont.className} text-xl font-bold mb-4`}>التميز في التصنيع</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>مرافق إنتاج متطورة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>حرفيون مهرة ذوو خبرة سنوات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>معايير مراقبة جودة صارمة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>قدرات إنتاج مرنة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>الامتثال للمعايير الدولية</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <SectionHeading>قدرات تصنيع متطورة</SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-gray-700 mb-6`}>
                في يونيوم، نجمع بين تكنولوجيا التصنيع المتقدمة والحرفية الماهرة لإنتاج أزياء موحدة احترافية ذات جودة استثنائية. مرافق التصنيع لدينا مجهزة بأحدث تقنيات الإنتاج لضمان الدقة والاتساق والتشطيب المتميز في كل قطعة ملابس ننتجها.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-r-4 border-primary-600">
                <h3 className={`${cairoFont.className} text-xl font-semibold text-primary-800 mb-2`}>صُنع للمملكة العربية السعودية</h3>
                <p className={`${tajawalFont.className} text-gray-700`}>
                  تم تحسين مرافق وعمليات التصنيع لدينا خصيصًا لإنتاج أزياء موحدة تناسب مناخ المملكة العربية السعودية ومتطلباتها الثقافية والمعايير الصناعية، مما يضمن الأداء الأمثل في الظروف المحلية.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
                  alt="مرافق تصنيع الزي الموحد المتقدمة"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Manufacturing Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>قدرات التصنيع لدينا</SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-gray-700 max-w-3xl mx-auto`}>
              لقد استثمرنا في تقنيات تصنيع متطورة لضمان إنتاج زي موحد بأعلى جودة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 text-primary-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  {capability.icon}
                </div>
                <h3 className={`${cairoFont.className} text-xl font-semibold mb-3 text-center`}>{capability.title}</h3>
                <p className={`${tajawalFont.className} text-gray-700 text-center`}>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Manufacturing Process Section */}
      <section id="manufacturing-process" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>عملية التصنيع لدينا</SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-gray-700 max-w-3xl mx-auto`}>
              نتبع عملية إنتاج شاملة لضمان تلبية كل زي موحد لمعايير الجودة الدقيقة لدينا.
            </p>
          </div>
          
          <div className="space-y-16">
            {manufacturingProcess.map((process, index) => (
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
                      src={process.image}
                      alt={process.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full text-white font-bold mb-2">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className={`${cairoFont.className} text-2xl font-bold mb-4`}>{process.name}</h3>
                  <p className={`${tajawalFont.className} text-gray-700 mb-6`}>{process.description}</p>
                  
                  <div className="mb-4">
                    <h4 className={`${cairoFont.className} font-semibold text-primary-900 mb-2`}>الخطوات الرئيسية:</h4>
                    <ul className="space-y-1">
                      {process.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">•</span>
                          <span className={`${tajawalFont.className}`}>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Production Options Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>خيارات الإنتاج</SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-gray-700 max-w-3xl mx-auto`}>
              نقدم خيارات تصنيع مرنة لتلبية متطلبات والجداول الزمنية المختلفة للعملاء.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productionOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md h-full"
              >
                <div className="bg-primary-900 p-4 text-white">
                  <h3 className={`${cairoFont.className} text-xl font-semibold`}>{option.title}</h3>
                </div>
                
                <div className="p-6 flex flex-col h-[calc(100%-60px)]">
                  <p className={`${tajawalFont.className} text-gray-700 mb-6`}>{option.description}</p>
                  
                  <div className="mb-4 flex-grow">
                    <h4 className={`${cairoFont.className} font-semibold text-primary-900 mb-2`}>المميزات:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">✓</span>
                          <span className={`${tajawalFont.className} text-gray-700`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className={`${cairoFont.className} font-semibold text-primary-900 mb-2`}>مناسب لـ:</h4>
                    <p className={`${tajawalFont.className} bg-primary-50 text-primary-800 px-4 py-2 rounded text-center`}>{option.suitableFor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>فوائد خدمة التصنيع لدينا</SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-gray-700 max-w-3xl mx-auto`}>
              توفر قدرات التصنيع الداخلية لدينا مزايا كبيرة لبرنامج الزي الموحد لمؤسستك.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 text-primary-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className={`${cairoFont.className} text-xl font-semibold mb-3 text-center`}>{benefit.title}</h3>
                <p className={`${tajawalFont.className} text-gray-700 text-center`}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <Image
                  src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
                  alt="شهادة عميل حول تصنيع الزي الموحد"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-amber-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                  </svg>
                </div>
                <p className={`${tajawalFont.className} text-xl md:text-2xl font-medium text-gray-800 mb-6`}>
                  جودة التصنيع في يونيوم استثنائية. طلبنا 500 زي موحد مخصص لموظفي شركة الطيران لدينا، وكان الاهتمام بالتفاصيل مذهلاً. خيار الإنتاج السريع يعني أننا تلقينا جميع الأزياء الموحدة قبل أسبوعين من موعد إطلاقنا، وتجاوزت الجودة توقعاتنا.
                </p>
                <div>
                  <p className={`${cairoFont.className} font-bold text-gray-900`}>ليلى المنصور</p>
                  <p className={`${tajawalFont.className} text-gray-600`}>مديرة المشتريات، شركة سكاي لينك للطيران</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`${cairoFont.className} text-3xl md:text-4xl font-bold mb-6`}>هل أنت جاهز لتصنيع الأزياء الموحدة الاحترافية الخاصة بك؟</h2>
            <p className={`${tajawalFont.className} text-xl text-white/90 mb-8`}>
              اتصل بفريق التصنيع لدينا اليوم لمناقشة متطلبات إنتاج الزي الموحد الخاص بك واستكشاف قدراتنا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quote?service=manufacturing" 
                variant="secondary" 
                size="lg"
              >
                طلب عرض سعر للتصنيع
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
              >
                اتصل بفريقنا
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ManufacturingPage; 