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
  weight: ['700', '800'],
  variable: '--font-cairo',
});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

const FirefightingPage = () => {
  const locale = 'ar';
  
  // خصائص البدلات المقاومة للحريق
  const features = [
    {
      title: 'مقاومة عالية للحرارة',
      description: 'مصممة للعمل في درجات حرارة تصل إلى 1000 درجة مئوية مع عزل حراري فائق',
      icon: '🔥',
    },
    {
      title: 'معالجة مضادة للهب',
      description: 'أقمشة مطورة بتقنية "فاير-جارد" المانعة لانتشار اللهب وتأخير الاشتعال',
      icon: '🛡️',
    },
    {
      title: 'مقاومة للماء والسوائل',
      description: 'طبقة خارجية مقاومة للماء والزيوت والمواد الكيميائية السائلة',
      icon: '💧',
    },
    {
      title: 'جيوب متخصصة للمعدات',
      description: 'تصميم عملي مع جيوب مقواة لحمل معدات الإنقاذ والاتصالات',
      icon: '🧰',
    },
    {
      title: 'شرائط عاكسة للضوء',
      description: 'شرائط عاكسة عالية الوضوح في الظروف المظلمة والدخان الكثيف',
      icon: '✨',
    },
    {
      title: 'مطابقة للمعايير الدولية',
      description: 'تلبي معايير NFPA 1971 وEN 469 ومعايير الهيئة السعودية للمواصفات والمقاييس',
      icon: '✓',
    },
  ];
  
  // منتجات مكافحة الحرائق
  const products = [
    {
      id: 'firefighter-suit-pro',
      name: 'بدلة إطفاء محترفة',
      description: 'بدلة كاملة مقاومة للحريق مع طبقات متعددة للحماية القصوى',
      price: '٢٨٥٠ ر.س',
      image: '/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg',
      features: ['مقاومة للحرارة القصوى', 'طبقة عازلة حرارية', 'مقاومة للماء والزيوت'],
    },
    {
      id: 'fire-resistant-gloves',
      name: 'قفازات مقاومة للحريق',
      description: 'قفازات متينة توفر حماية فائقة مع الحفاظ على المرونة والتحكم',
      price: '٤٥٠ ر.س',
      image: '/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg',
      features: ['نسيج مقاوم للحرارة', 'تصميم مريح', 'سطح مانع للانزلاق'],
    },
    {
      id: 'fire-resistant-hood',
      name: 'غطاء رأس مقاوم للحريق',
      description: 'غطاء متطور لحماية الرأس والرقبة من الحرارة واللهب',
      price: '٣٢٠ ر.س',
      image: '/images/uneom_dirt_fire_resistant_fabric.webp',
      features: ['نسيج مزدوج الطبقة', 'مقاومة للحرارة', 'قابل للغسل المتكرر'],
    },
  ];
  
  // بيانات المواصفات الفنية
  const specifications = [
    { name: 'مادة البدلة الخارجية', value: 'نوميكس/كيفلار مع معالجة PBI' },
    { name: 'الطبقة المتوسطة', value: 'غشاء مقاوم للماء ومضاد للبكتيريا' },
    { name: 'البطانة الحرارية', value: 'طبقة عازلة متعددة الطبقات' },
    { name: 'مقاومة الحرارة', value: 'حتى 1000 درجة مئوية' },
    { name: 'درجة مقاومة اللهب', value: 'مستوى A (الأعلى)' },
    { name: 'مطابقة المعايير', value: 'NFPA 1971, EN 469, SASO 2889' },
  ];
  
  // بيانات الشهادات والاعتمادات
  const certifications = [
    { name: 'شهادة الهيئة السعودية للمواصفات والمقاييس', icon: '🏅' },
    { name: 'اعتماد المعهد الأمريكي للمعايير الوطنية (ANSI)', icon: '🏅' },
    { name: 'شهادة مطابقة CE الأوروبية', icon: '🏅' },
    { name: 'شهادة الرابطة الوطنية للحماية من الحرائق (NFPA)', icon: '🏅' },
  ];

  return (
    <div className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      <RTLWrapper locale="ar">
        {/* قسم الهيدر الرئيسي */}
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg"
              alt="ملابس مكافحة الحرائق المهنية"
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
                    ملابس مكافحة الحرائق الاحترافية
                  </h1>
                  <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                    تقدم يونيوم بدلات مكافحة الحرائق عالية الجودة المصممة خصيصًا لتلبية متطلبات فرق الإطفاء والدفاع المدني والسلامة المهنية في المملكة العربية السعودية، بتقنيات متطورة مطابقة للمعايير العالمية.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      href="/ar/quote?industry=firefighting" 
                      variant="secondary" 
                      size="lg"
                    >
                      طلب عرض سعر
                    </Button>
                    <Button 
                      href="#products" 
                      variant="outline" 
                      size="lg"
                    >
                      عرض المنتجات
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
                  <h2 className={`${cairoFont.className} text-xl font-bold mb-4`}>مزايا منتجاتنا</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>مقاومة قصوى للهب والحرارة العالية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>مطابقة للمعايير السعودية والدولية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تقنيات متطورة لمقاومة الحرارة والسوائل</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>خيارات التخصيص حسب متطلبات كل مؤسسة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>ضمان الجودة والمتانة في الظروف القاسية</span>
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
                    src="/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg"
                    alt="فريق إطفاء يرتدي بدلات مقاومة للحريق"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading as="h2">
                  ملابس مكافحة الحرائق عالية الأداء
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    تقدم يونيوم مجموعة متكاملة من ملابس مكافحة الحرائق المصممة خصيصًا لتلبية متطلبات فرق الإطفاء والدفاع المدني والمؤسسات المتخصصة في المملكة العربية السعودية. تجمع منتجاتنا بين أحدث التقنيات العالمية ومعايير السلامة الدولية مع مراعاة الظروف المناخية المحلية.
                  </p>
                  <p>
                    تتميز ملابسنا المقاومة للحريق بتصميمها المتطور الذي يوفر الحماية القصوى مع الحفاظ على خفة الوزن والمرونة اللازمة لتسهيل حركة فرق الإطفاء أثناء أداء مهامهم الحرجة. نستخدم أقمشة متخصصة معالجة بتقنية "فاير-جارد" المقاومة للهب والحرارة العالية مع طبقات إضافية للحماية من السوائل والمواد الكيميائية.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠٠٠°</div>
                    <div className="text-neutral-600 text-sm">مقاومة للحرارة حتى ١٠٠٠ درجة مئوية</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠٠%</div>
                    <div className="text-neutral-600 text-sm">مطابقة للمعايير الدولية</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٤+</div>
                    <div className="text-neutral-600 text-sm">طبقات حماية متخصصة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٥</div>
                    <div className="text-neutral-600 text-sm">سنوات ضمان للجودة</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم المميزات */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              مميزات ملابس مكافحة الحرائق من يونيوم
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              تتميز منتجاتنا بأحدث التقنيات العالمية المصممة خصيصًا لتلبية متطلبات الحماية في الظروف القاسية
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className={`${cairoFont.className} text-xl font-bold mb-3 text-neutral-900`}>{feature.title}</h3>
                  <p className={`${tajawalFont.className} text-neutral-600`}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم المنتجات */}
        <section id="products" className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              منتجاتنا المتخصصة لمكافحة الحرائق
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              مجموعة متكاملة من المنتجات عالية الجودة المصممة لتلبية احتياجات فرق الإطفاء والسلامة المهنية
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="relative h-64 bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`${cairoFont.className} text-xl font-bold mb-2 text-neutral-900`}>{product.name}</h3>
                    <p className={`${tajawalFont.className} text-neutral-600 mb-4`}>{product.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-lg font-bold text-primary-700">{product.price}</span>
                      <span className="text-sm text-neutral-500 mr-2">/ قطعة</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-neutral-900 mb-2">الخصائص:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                            <span className="text-primary-600">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/ar/shop/firefighting/${product.id}`}
                        className="text-primary-700 font-medium text-sm hover:text-primary-800 transition-colors"
                      >
                        عرض التفاصيل
                      </Link>
                      <Button
                        href={`/ar/quote?product=${product.id}`}
                        variant="primary"
                        size="sm"
                      >
                        طلب عرض سعر
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم المواصفات الفنية */}
        <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <Container>
            <SectionHeading centered className="text-white">
              المواصفات الفنية لبدلات مكافحة الحرائق
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-white/80 max-w-3xl mx-auto mb-12`}>
              تتميز بدلاتنا بأعلى معايير الجودة والسلامة المهنية، مطابقة للمواصفات الدولية
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-b border-white/20 pb-4">
                    <div className="text-white/70 text-sm mb-1">{spec.name}</div>
                    <div className="text-lg font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className={`${cairoFont.className} text-xl font-bold mb-4`}>الشهادات والاعتمادات</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">{cert.icon}</div>
                      <div className="text-sm font-medium">{cert.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* قسم التواصل */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading centered>
                طلب استشارة متخصصة
              </SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-neutral-700 max-w-3xl mx-auto mb-8`}>
                فريقنا من الخبراء جاهز لمساعدتك في اختيار الحلول المناسبة لاحتياجات مؤسستك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/ar/quote?industry=firefighting"
                  variant="primary"
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

export default FirefightingPage; 