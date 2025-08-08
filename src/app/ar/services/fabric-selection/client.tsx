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
  variable: '--font-cairo'});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal'});

const FabricSelectionClientPage = () => {
  const locale = 'ar';
  
  // مراحل عملية اختيار الأقمشة
  const processSteps = [
    {
      title: 'الاستشارة الأولية',
      description: 'نلتقي مع فريقك لفهم احتياجاتك المحددة ومتطلبات الصناعة وهوية العلامة التجارية',
      icon: '🤝'},
    {
      title: 'تحليل الاحتياجات',
      description: 'يقوم خبراء الأقمشة لدينا بتحليل متطلباتك المحددة، بما في ذلك التكيف مع المناخ والاحتياجات الوظيفية ومعايير الامتثال',
      icon: '🔍'},
    {
      title: 'اختيار العينات',
      description: 'بناءً على متطلباتك، نقدم مجموعة مختارة من عينات الأقمشة المناسبة للتقييم',
      icon: '👕'},
    {
      title: 'اختبار الأقمشة',
      description: 'تخضع الأقمشة المختارة لاختبارات دقيقة للتأكد من تلبيتها لمعايير الأداء في ظروف العمل الحقيقية',
      icon: '⚗️'},
    {
      title: 'التوصيات النهائية',
      description: 'نقدم توصيات مفصلة مع مواصفات شاملة للأقمشة وتعليمات العناية بها',
      icon: '📋'},
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
      image: '/images/fabric-cotton-blends.webp'},
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
      image: '/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg'},
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
      image: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg'},
  ];
  
  // التقنيات المتخصصة للأقمشة
  const fabricTechnologies = [
    {
      name: 'الحماية من الأشعة فوق البنفسجية',
      description: 'أقمشة مزودة بعامل حماية من الأشعة فوق البنفسجية لحجب الأشعة الضارة',
      icon: '☀️'},
    {
      name: 'معالجة مضادة للميكروبات',
      description: 'تقنية تمنع نمو البكتيريا والكائنات الدقيقة على أسطح الأقمشة',
      icon: '🛡️'},
    {
      name: 'مقاومة البقع',
      description: 'معالجات تصد السوائل وتمنع البقع من التغلغل في ألياف القماش',
      icon: '💧'},
    {
      name: 'تقنية التمدد',
      description: 'أقمشة مصممة بالإيلاستين أو تمدد ميكانيكي لتحسين الحركة والراحة',
      icon: '🔄'},
    {
      name: 'التحكم في درجة الحرارة',
      description: 'أقمشة متطورة تساعد على تنظيم درجة حرارة الجسم في الظروف البيئية المتغيرة',
      icon: '🌡️'},
    {
      name: 'معالجة التجفيف السريع',
      description: 'أقمشة مصممة لنقل الرطوبة بعيدًا عن الجسم والجفاف بسرعة',
      icon: '💨'},
  ];
  
  // مميزات خدمة اختيار الأقمشة
  const serviceFeatures = [
    {
      title: 'خبرة متخصصة',
      description: 'الوصول إلى متخصصي الأقمشة ذوي المعرفة الواسعة بخصائص المنسوجات وأداءها وتطبيقاتها الصناعية',
      icon: '👔'},
    {
      title: 'فهم مناخ المملكة العربية السعودية',
      description: 'معرفة متخصصة بكيفية أداء الأقمشة المختلفة في ظروف المناخ الفريدة للملكة العربية السعودية، من الحرارة الشديدة إلى الرطوبة الساحلية',
      icon: '☀️'},
    {
      title: 'اختبار الجودة',
      description: 'اختبار شامل للأقمشة من حيث المتانة والراحة والأداء في ظروف واقعية قبل الاختيار النهائي',
      icon: '🔍'},
    {
      title: 'الالتزام بالميزانية',
      description: 'توصيات الأقمشة التي توازن بين متطلبات الأداء واعتبارات التكلفة لتلبية أهداف ميزانيتك',
      icon: '💰'},
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
                <Image
                  src="/images/fabric-selection-process.webp"
                  alt="عملية اختيار الأقمشة"
                  width={550}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading centered={false} subtitle="رفع جودة الأزياء الموحدة من خلال اختيار الأقمشة المثالية">
                  خدمة اختيار الأقمشة المتخصصة
                </SectionHeading>
                
                <div className={`${tajawalFont.className} space-y-4 text-gray-700`}>
                  <p>
                    تعد خدمة اختيار الأقمشة من يونيوم خطوة أساسية في تطوير برنامج أزياء موحدة ناجح. نوفر خبرة متخصصة تضمن اختيار الأقمشة المثالية التي تتوافق مع احتياجاتك المحددة، مما يحسن رضا الموظفين ويعزز صورة علامتك التجارية.
                  </p>
                  
                  <p>
                    نحن نفهم أن لكل صناعة وبيئة عمل متطلبات فريدة للأداء والراحة والمتانة. مع مراعاة الظروف المناخية الخاصة بالمملكة العربية السعودية، يقوم خبراء الأقمشة لدينا بتقييم مجموعة واسعة من خيارات الأقمشة لتحديد الحلول المثالية لاحتياجاتك.
                  </p>
                  
                  <p>
                    من خلال اختيار الأقمشة المناسبة، نساعدك في تحقيق التوازن الأمثل بين الراحة والمتانة والجاذبية المرئية والتكلفة، مما يضمن عمر خدمة أطول وقيمة أفضل لاستثمارك في الأزياء الموحدة.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم عملية اختيار الأقمشة */}
        <section className="py-16 bg-gray-50">
          <Container>
            <SectionHeading subtitle="خطوات اختيار الأقمشة المثالية للأزياء الموحدة الخاصة بك">
              عملية اختيار الأقمشة
            </SectionHeading>
            
            <div className="mt-12 relative">
              {/* خط المسار المتصل */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative`}>
                    <div className="md:w-1/2 text-center md:text-right p-6 md:p-0">
                      <div className="inline-block text-4xl mb-3">{step.icon}</div>
                      <h3 className={`${cairoFont.className} text-xl font-bold mb-2`}>{step.title}</h3>
                      <p className={`${tajawalFont.className} text-gray-600`}>{step.description}</p>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 hidden md:flex">
                      {index + 1}
                    </div>
                    
                    <div className="md:w-1/2 text-center md:text-left p-6 md:p-0">
                      {/* الجانب الآخر من المسار - يترك فارغًا للتصميم المتوازن */}
                      <div className="md:hidden flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full text-white mx-auto font-bold mb-2">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم أنواع الأقمشة */}
        <section id="fabric-types" className="py-16 bg-white">
          <Container>
            <SectionHeading subtitle="الأقمشة الموصى بها للأزياء الموحدة المهنية في المملكة العربية السعودية">
              أنواع الأقمشة الرئيسية
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {fabricTypes.map((fabric, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={fabric.image}
                      alt={fabric.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`${cairoFont.className} text-xl font-bold mb-3`}>{fabric.name}</h3>
                    <p className={`${tajawalFont.className} text-gray-600 mb-4`}>{fabric.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">المزايا:</h4>
                      <ul className="text-sm space-y-1">
                        {fabric.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary-500">●</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">استخدامات شائعة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {fabric.applications.map((app, i) => (
                          <span key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم تقنيات الأقمشة */}
        <section className="py-16 bg-gray-50">
          <Container>
            <SectionHeading subtitle="معالجات متخصصة لتعزيز أداء الأقمشة">
              تقنيات الأقمشة المتطورة
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {fabricTechnologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-2`}>{tech.name}</h3>
                  <p className={`${tajawalFont.className} text-gray-600`}>{tech.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button href="/ar/quote?service=fabric-selection" variant="primary" size="lg">
                استشر خبراء الأقمشة لدينا
              </Button>
            </div>
          </Container>
        </section>
        
        {/* قسم مميزات الخدمة */}
        <section className="py-16 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <SectionHeading centered={false} subtitle="ما يميز خدمة اختيار الأقمشة من يونيوم">
                  لماذا تختار خدمتنا؟
                </SectionHeading>
                
                <div className="space-y-6 mt-6">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={`${cairoFont.className} text-lg font-bold mb-1`}>{feature.title}</h3>
                        <p className={`${tajawalFont.className} text-gray-600`}>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-lg p-6 shadow-inner">
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-4 text-center`}>مزايا الاستثمار في اختيار الأقمشة الاحترافي</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">تحسين رضا الموظفين ومعنوياتهم</h4>
                        <p className="text-sm text-gray-600">الأقمشة المريحة تزيد من رضا الموظفين وتقلل من الشكاوى المتعلقة بالزي الموحد</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">زيادة عمر خدمة الزي الموحد</h4>
                        <p className="text-sm text-gray-600">تقليل تكاليف الاستبدال المتكرر من خلال اختيار أقمشة متينة ذات جودة عالية</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">تعزيز صورة العلامة التجارية والانطباع المهني</h4>
                        <p className="text-sm text-gray-600">أقمشة عالية الجودة تحافظ على مظهرها الجيد لفترة أطول، مما يعكس احترافية مؤسستك</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">توفير التكاليف على المدى الطويل</h4>
                        <p className="text-sm text-gray-600">الموازنة بين سعر الشراء المبدئي والعمر الافتراضي لتحقيق أفضل قيمة إجمالية</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">تقليل متطلبات الصيانة</h4>
                        <p className="text-sm text-gray-600">اختيار أقمشة سهلة العناية تقلل وقت وتكلفة الغسيل والكي والصيانة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم دعوة للعمل */}
        <section className="py-16 bg-primary-800 text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`${cairoFont.className} text-3xl md:text-4xl font-bold mb-6`}>
                رفع مستوى برنامج الزي الموحد الخاص بك من خلال اختيار الأقمشة المناسبة
              </h2>
              <p className={`${tajawalFont.className} text-xl mb-8 text-white/80`}>
                تواصل مع فريقنا للحصول على استشارة مجانية حول اختيار الأقمشة المثالية لأزياء موحدة عالية الأداء تناسب احتياجات شركتك والظروف المناخية في المملكة العربية السعودية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/ar/quote?service=fabric-selection" variant="secondary" size="lg">
                  طلب استشارة مجانية
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  تواصل مع خبرائنا
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </RTLWrapper>
    </div>
  );
};

export default FabricSelectionClientPage; 