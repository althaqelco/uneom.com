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

const QualityAssurancePage = () => {
  const locale = 'ar';
  
  // مراحل عملية ضمان الجودة
  const qualityProcessSteps = [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'اختبار دقيق لجميع المواد الخام والأقمشة قبل بدء عملية الإنتاج',
      icon: '🧵',
    },
    {
      title: 'مراقبة خط الإنتاج',
      description: 'فحص مستمر أثناء جميع مراحل الإنتاج لضمان الالتزام بالمعايير',
      icon: '🏭',
    },
    {
      title: 'فحص العينات',
      description: 'اختبار دقيق للعينات من كل دفعة إنتاج للتأكد من جودتها',
      icon: '🔍',
    },
    {
      title: 'الاختبارات الفنية',
      description: 'إجراء اختبارات متخصصة للخصائص الفيزيائية والكيميائية',
      icon: '⚗️',
    },
    {
      title: 'فحص المنتج النهائي',
      description: 'فحص شامل للمنتجات النهائية قبل التعبئة والشحن',
      icon: '✅',
    },
    {
      title: 'التوثيق والشهادات',
      description: 'إصدار شهادات الجودة وتوثيق جميع نتائج الاختبارات',
      icon: '📜',
    },
  ];
  
  // اختبارات الجودة الرئيسية
  const qualityTests = [
    {
      name: 'اختبار متانة الأقمشة',
      description: 'قياس قوة تحمل الأقمشة للشد والتمزق ومقاومتها للتلف',
      icon: '💪',
    },
    {
      name: 'اختبار ثبات الألوان',
      description: 'قياس مدى ثبات الألوان ومقاومتها للبهتان عند التعرض للضوء والغسيل المتكرر',
      icon: '🎨',
    },
    {
      name: 'اختبار مقاومة الانكماش',
      description: 'فحص مدى مقاومة القماش للانكماش بعد الغسيل المتكرر',
      icon: '📏',
    },
    {
      name: 'اختبار مقاومة البقع',
      description: 'تحديد مدى مقاومة الأقمشة للبقع والسوائل المختلفة',
      icon: '💧',
    },
    {
      name: 'اختبار سهولة العناية',
      description: 'تقييم سهولة الغسيل والكي والتنظيف للملابس المهنية',
      icon: '👔',
    },
    {
      name: 'اختبار الراحة وقابلية التنفس',
      description: 'قياس مستوى راحة الملابس وقدرتها على تنظيم درجة حرارة الجسم',
      icon: '🌡️',
    },
    {
      name: 'اختبار الخصائص المتخصصة',
      description: 'فحص الخصائص المحددة مثل مقاومة اللهب أو الماء أو المواد الكيميائية',
      icon: '🔬',
    },
    {
      name: 'اختبار جودة الخياطة',
      description: 'فحص دقة الخياطة ومتانتها وجودة التشطيبات النهائية',
      icon: '🧷',
    },
  ];
  
  // الشهادات والمعايير
  const certifications = [
    {
      name: 'ISO 9001',
      description: 'شهادة نظام إدارة الجودة الدولية',
      icon: '🏅',
    },
    {
      name: 'SASO',
      description: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
      icon: '🏅',
    },
    {
      name: 'OEKO-TEX',
      description: 'شهادة سلامة المنسوجات من المواد الضارة',
      icon: '🏅',
    },
    {
      name: 'ASTM',
      description: 'الجمعية الأمريكية للاختبار والمواد',
      icon: '🏅',
    },
  ];
  
  // فوائد ضمان الجودة
  const qualityBenefits = [
    {
      title: 'زيادة متانة الزي الموحد',
      description: 'ضمان عمر افتراضي أطول للملابس وتقليل الحاجة للاستبدال المتكرر',
      icon: '⏱️',
    },
    {
      title: 'توفير التكاليف على المدى الطويل',
      description: 'تقليل تكاليف الصيانة والاستبدال من خلال ضمان جودة المنتجات',
      icon: '💰',
    },
    {
      title: 'تحسين راحة الموظفين',
      description: 'زيادة إنتاجية الموظفين من خلال توفير ملابس مريحة وعملية',
      icon: '😊',
    },
    {
      title: 'الامتثال للمعايير الدولية',
      description: 'ضمان الالتزام بمعايير الجودة والسلامة العالمية والمحلية',
      icon: '✓',
    },
  ];

  return (
    <div className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      <RTLWrapper locale="ar">
        {/* قسم الهيدر الرئيسي */}
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
              alt="خدمات ضمان الجودة للملابس المهنية"
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
                    خدمات ضمان الجودة للملابس المهنية
                  </h1>
                  <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                    نقدم خدمات ضمان جودة شاملة تضمن تلبية جميع منتجاتنا لأعلى المعايير من حيث المتانة والراحة والمظهر الاحترافي، مع الالتزام بالمعايير المحلية والدولية.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      href="/ar/quote?service=quality-assurance" 
                      variant="secondary" 
                      size="lg"
                    >
                      طلب خدمات ضمان الجودة
                    </Button>
                    <Button 
                      href="#quality-tests" 
                      variant="outline" 
                      size="lg"
                    >
                      تعرف على اختباراتنا
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
                  <h2 className={`${cairoFont.className} text-xl font-bold mb-4`}>لماذا تعتبر جودة الملابس المهنية مهمة؟</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تعزيز صورة المؤسسة الاحترافية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>زيادة راحة الموظفين وإنتاجيتهم</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>خفض تكاليف الاستبدال على المدى الطويل</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>الامتثال لمعايير السلامة والصحة المهنية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>الحفاظ على المظهر الموحد على مدار فترة الاستخدام</span>
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
                    src="/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg"
                    alt="فحص جودة الملابس المهنية"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading as="h2">
                  نظام ضمان الجودة الشامل
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    في يونيوم، نعتبر ضمان الجودة أحد أهم الركائز الأساسية في جميع مراحل إنتاج الزي الموحد والملابس المهنية. نطبق نظام ضمان جودة شامل يبدأ من اختيار المواد الخام ويستمر خلال جميع مراحل التصميم والإنتاج وحتى التسليم النهائي للمنتجات.
                  </p>
                  <p>
                    يتكون فريق ضمان الجودة لدينا من خبراء مدربين على أعلى مستوى، يستخدمون أحدث التقنيات والمعدات لإجراء مجموعة شاملة من الاختبارات الفيزيائية والكيميائية والميكانيكية للتأكد من مطابقة جميع منتجاتنا للمعايير المحلية والدولية. نحرص على توثيق جميع عمليات الاختبار وإصدار شهادات جودة لكل دفعة من المنتجات.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠٠%</div>
                    <div className="text-neutral-600 text-sm">فحص للمنتجات النهائية</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٢٥+</div>
                    <div className="text-neutral-600 text-sm">اختبار جودة مختلف</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٥+</div>
                    <div className="text-neutral-600 text-sm">شهادات جودة دولية معتمدة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٩٩.٨%</div>
                    <div className="text-neutral-600 text-sm">نسبة المنتجات المطابقة للمعايير</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم عملية ضمان الجودة */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              عملية ضمان الجودة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              منهجيتنا الشاملة لضمان الجودة في جميع مراحل الإنتاج
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityProcessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>{step.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم اختبارات الجودة */}
        <section id="quality-tests" className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              اختبارات الجودة الرئيسية
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              مجموعة شاملة من الاختبارات المتخصصة لضمان أعلى معايير الجودة
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityTests.map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-lg p-5"
                >
                  <div className="text-3xl mb-3">{test.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-2 text-neutral-900`}>{test.name}</h3>
                  <p className={`${tajawalFont.className} text-sm text-neutral-600`}>{test.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 mt-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>
                    مختبرات متخصصة لاختبارات الجودة
                  </h3>
                  <p className={`${tajawalFont.className} text-neutral-700`}>
                    نستخدم مختبرات متخصصة مجهزة بأحدث التقنيات والمعدات لإجراء اختبارات دقيقة وشاملة. جميع اختباراتنا تتم وفق المعايير الدولية المعتمدة، وتحت إشراف متخصصين مؤهلين في مجال فحص الجودة وتقييم المنسوجات والملابس المهنية.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="relative w-full aspect-video md:aspect-square rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/fabric-material-2024-12-06-03-35-02-utc.jpg"
                      alt="مختبر فحص جودة الأقمشة"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم الشهادات والمعايير */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <Container>
            <SectionHeading centered>
              الشهادات والمعايير
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              نلتزم بأعلى المعايير المحلية والدولية لضمان الجودة
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
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-2 text-neutral-900`}>{cert.name}</h3>
                  <p className={`${tajawalFont.className} text-sm text-neutral-600`}>{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم فوائد ضمان الجودة */}
        <section className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              فوائد خدمات ضمان الجودة
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              تحقيق قيمة مضافة لمؤسستك من خلال ضمان جودة الملابس المهنية
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-50 rounded-xl p-6 text-center h-full"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-3 text-neutral-900`}>{benefit.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16">
              <div className="bg-primary-50 rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <h3 className={`${cairoFont.className} text-2xl font-bold mb-4 text-neutral-900`}>
                      هل تهتم بتحسين جودة الزي الموحد لمؤسستك؟
                    </h3>
                    <p className={`${tajawalFont.className} text-neutral-700 mb-6`}>
                      فريقنا من خبراء الجودة جاهز لمساعدتك في تقييم واختيار الملابس المهنية الأفضل لاحتياجات مؤسستك.
                    </p>
                    <Button
                      href="/ar/quote?service=quality-assurance"
                      variant="primary"
                      size="lg"
                    >
                      تواصل مع خبير الجودة
                    </Button>
                  </div>
                  <div className="relative min-h-[250px]">
                    <Image
                      src="/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
                      alt="عينات الأقمشة عالية الجودة"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم التواصل */}
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading centered className="text-white">
                تواصل مع فريق ضمان الجودة
              </SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-white/90 max-w-3xl mx-auto mb-8`}>
                نحن هنا لمساعدتك في ضمان أعلى معايير الجودة للزي الموحد الخاص بمؤسستك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/ar/quote?service=quality-assurance"
                  variant="secondary"
                  size="lg"
                >
                  طلب خدمات ضمان الجودة
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

export default QualityAssurancePage; 