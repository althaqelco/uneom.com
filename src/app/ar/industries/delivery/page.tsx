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
  weight: ['700', '800'],
  variable: '--font-cairo',
});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

const DeliveryPage = () => {
  const locale = 'ar';
  
  // مميزات ملابس التوصيل
  const features = [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'مصممة خصيصًا لتناسب الظروف المناخية في المملكة العربية السعودية مع أقمشة تنفس ممتازة',
      icon: '☀️',
    },
    {
      title: 'تخصيص كامل للعلامة التجارية',
      description: 'إمكانية طباعة أو تطريز شعار الشركة والألوان المميزة على جميع قطع الملابس',
      icon: '🎨',
    },
    {
      title: 'مقاومة للأوساخ والبقع',
      description: 'معالجة بتقنية "ديرت-رابيلنت" المقاومة للأوساخ والبقع لسهولة التنظيف',
      icon: '✨',
    },
    {
      title: 'متانة استثنائية',
      description: 'مصممة لتحمل الاستخدام اليومي المكثف والغسيل المتكرر مع الحفاظ على مظهرها الاحترافي',
      icon: '💪',
    },
    {
      title: 'مريحة أثناء القيادة',
      description: 'تصميم مريح ومرن يتيح حرية الحركة أثناء القيادة وحمل الطرود والتنقل',
      icon: '🚚',
    },
    {
      title: 'عناصر عاكسة للضوء',
      description: 'تتضمن شرائط وعناصر عاكسة للضوء لتحسين الرؤية والسلامة أثناء العمل الليلي',
      icon: '🔆',
    },
  ];
  
  // منتجات خدمات التوصيل
  const products = [
    {
      id: 'delivery-uniform-set',
      name: 'طقم زي التوصيل الكامل',
      description: 'طقم كامل يشمل قميص بولو مع سروال وقبعة بألوان وشعار الشركة',
      price: '٣٥٠ ر.س',
      image: '/images/a-delivery-person-dressed-in-a-red-polo-and-cap-shows-approval-with-a-thumbs-up-while--SBI-350024443.jpg',
      features: ['قماش مريح وعملي', 'تطريز الشعار', 'مقاومة للأوساخ'],
    },
    {
      id: 'delivery-driver-jacket',
      name: 'جاكيت سائق التوصيل',
      description: 'جاكيت خفيف مقاوم للماء مع جيوب متعددة وعناصر عاكسة',
      price: '٢٨٠ ر.س',
      image: '/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg',
      features: ['مقاوم للماء', 'عناصر عاكسة للضوء', 'خفيف الوزن'],
    },
    {
      id: 'delivery-polo-shirts',
      name: 'قمصان بولو للتوصيل',
      description: 'قمصان بولو عالية الجودة بألوان الشركة مع تطريز الشعار',
      price: '١٢٠ ر.س',
      image: '/images/a-young-handsome-mailman-smiles-at-the-camera-green-screen-studio-SBI-351078959.jpg',
      features: ['قطن ممتاز', 'تهوية جيدة', 'مقاومة للانكماش'],
    },
  ];
  
  // بيانات العملاء والشهادات
  const testimonials = [
    {
      quote: "ملابس التوصيل من يونيوم ساعدت في توحيد هوية علامتنا التجارية وتحسين تجربة العملاء. الجودة والمتانة استثنائية، وخدمة العملاء ممتازة.",
      author: "محمد العتيبي",
      position: "مدير العمليات",
      company: "توصيل إكسبرس"
    },
    {
      quote: "وجدنا في يونيوم شريكًا موثوقًا لتوفير الزي الموحد لفريق التوصيل لدينا. الملابس تتحمل الاستخدام اليومي المكثف مع الحفاظ على مظهرها الاحترافي.",
      author: "خالد الشمري",
      position: "مدير الخدمات اللوجستية",
      company: "الشحن السريع"
    },
  ];
  
  // خيارات التخصيص
  const customizationOptions = [
    {
      title: 'طباعة الشعار',
      description: 'طباعة شعار الشركة بالحجم والألوان المطلوبة على جميع قطع الملابس',
      icon: '🖨️',
    },
    {
      title: 'تطريز متميز',
      description: 'تطريز عالي الدقة للشعارات والأسماء بخيوط متينة ومقاومة للغسيل المتكرر',
      icon: '🧵',
    },
    {
      title: 'ألوان مخصصة',
      description: 'توفير قطع الملابس بألوان تتناسب مع هوية العلامة التجارية',
      icon: '🎨',
    },
    {
      title: 'تصميم خاص',
      description: 'إمكانية تصميم زي فريد خاص بشركتك بالتعاون مع فريق المصممين لدينا',
      icon: '✏️',
    },
  ];

  return (
    <div className={`${cairoFont.variable} ${tajawalFont.variable}`}>
      <RTLWrapper locale="ar">
        {/* قسم الهيدر الرئيسي */}
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/a-delivery-person-dressed-in-a-red-polo-and-cap-shows-approval-with-a-thumbs-up-while--SBI-350024443.jpg"
              alt="ملابس وأزياء خدمات التوصيل"
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
                    ملابس وأزياء خدمات التوصيل
                  </h1>
                  <p className={`${tajawalFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                    ملابس احترافية مخصصة لشركات التوصيل والشحن والخدمات اللوجستية في المملكة العربية السعودية. نساعدك على توحيد هوية علامتك التجارية مع الحفاظ على الراحة والوظائف العملية.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      href="/ar/quote?industry=delivery" 
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
                      <span>مصممة خصيصًا للظروف المناخية في المملكة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>تخصيص كامل لتعزيز هوية العلامة التجارية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>مصنوعة من مواد عالية الجودة ومتينة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>مريحة ومناسبة للاستخدام اليومي المكثف</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <span>شحن سريع وإمكانية تجديد الطلبات بسهولة</span>
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
                    src="/images/close-up-of-asian-male-courier-in-blue-uniform-showing-a-carton-to-camera-and-smiling--SBI-351601765.jpg"
                    alt="سائق توصيل في زي موحد"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <SectionHeading as="h2">
                  ملابس التوصيل الاحترافية
                </SectionHeading>
                <div className={`${tajawalFont.className} space-y-4 text-neutral-700 text-lg`}>
                  <p>
                    مع النمو المتسارع لخدمات التوصيل والشحن في المملكة العربية السعودية، أصبح من الضروري لشركات التوصيل تعزيز هويتها المرئية وضمان ظهور موظفيها بمظهر احترافي موحد. في يونيوم، نقدم مجموعة متكاملة من ملابس التوصيل المصممة خصيصًا لتلبية احتياجات هذا القطاع الحيوي.
                  </p>
                  <p>
                    تجمع منتجاتنا بين المظهر الاحترافي والراحة والوظائف العملية التي يحتاجها سائقو التوصيل وموظفو الخدمات اللوجستية أثناء عملهم اليومي. نستخدم أقمشة متينة مقاومة للتآكل والأوساخ مع خيارات تخصيص كاملة لإبراز هوية علامتك التجارية.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">١٠٠+</div>
                    <div className="text-neutral-600 text-sm">شركة توصيل تثق بمنتجاتنا</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٢٤ ساعة</div>
                    <div className="text-neutral-600 text-sm">خدمة عملاء على مدار الساعة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٥+</div>
                    <div className="text-neutral-600 text-sm">خيارات تخصيص متنوعة</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg shadow-sm">
                    <div className="text-primary-700 font-bold text-2xl mb-1">٣</div>
                    <div className="text-neutral-600 text-sm">أيام للتسليم للطلبات الكبيرة</div>
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
              مميزات ملابس التوصيل من يونيوم
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              نقدم ملابس توصيل مصممة خصيصًا لتلبية الاحتياجات الفريدة لفرق التوصيل والشحن في المملكة
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
              منتجاتنا المتخصصة لخدمات التوصيل
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              مجموعة متكاملة من الملابس الاحترافية المصممة خصيصًا لفرق التوصيل والشحن
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
                        href={`/ar/shop/delivery/${product.id}`}
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
        
        {/* قسم آراء العملاء */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <Container>
            <SectionHeading centered>
              ماذا يقول عملاؤنا
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              شركات التوصيل الرائدة في المملكة العربية السعودية تثق بمنتجاتنا
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <div className="text-primary-600 text-5xl mb-4">"</div>
                  <p className={`${tajawalFont.className} text-neutral-700 mb-6 text-lg`}>{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-neutral-200 rounded-full"></div>
                    <div className="mr-4">
                      <div className="font-bold text-neutral-900">{testimonial.author}</div>
                      <div className="text-sm text-neutral-500">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم خيارات التخصيص */}
        <section className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              خيارات التخصيص
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg text-center text-neutral-700 max-w-3xl mx-auto mb-12`}>
              نقدم مجموعة متنوعة من خيارات التخصيص لإبراز هوية علامتك التجارية
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customizationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className={`${cairoFont.className} text-lg font-bold mb-2 text-neutral-900`}>{option.title}</h3>
                  <p className={`${tajawalFont.className} text-sm text-neutral-600`}>{option.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* قسم التواصل */}
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading centered className="text-white">
                احصل على عرض سعر مخصص
              </SectionHeading>
              <p className={`${tajawalFont.className} text-lg text-white/90 max-w-3xl mx-auto mb-8`}>
                فريقنا من الخبراء جاهز لمساعدتك في اختيار الزي المناسب لفريق التوصيل لديك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/ar/quote?industry=delivery"
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

export default DeliveryPage; 