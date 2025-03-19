'use client';

import React from 'react';
import Image from 'next/image';
import { Cairo, Tajawal } from 'next/font/google';
import Link from 'next/link';

import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import ImageResolver from '@/components/ui/ImageResolver';

// تعريف الخطوط العربية
const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
});

export default function HealthcareIndustryPage() {
  return (
    <div className={`${cairo.variable} ${tajawal.variable} font-tajawal`} dir="rtl">
      {/* قسم الهيدر الرئيسي مع خلفية صورة احترافية */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg"
            alt="فريق طبي متكامل يرتدي زي موحد طبي في مستشفى سعودي حديث"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/80"></div>
        </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                معايير الجودة العالمية في القطاع الصحي السعودي
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                تجهيزات الرعاية الصحية المتوافقة مع معايير الهيئة السعودية للتخصصات الصحية
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                حلول متكاملة لقطاع الصحة والمستشفيات في المملكة العربية السعودية، تلبي متطلبات الاعتماد الصحي الوطني وتدعم رؤية 2030 للتحول الرقمي في القطاع الصحي.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/ar/contact?industry=healthcare" variant="primary" size="lg">
                  طلب استشارة
                </Button>
                <Button href="/ar/shop/healthcare" variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  استعرض الحلول الطبية
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageResolver
                src="/images/three-surgeons-busy-with-a-patient-SBI-300908245.jpg"
                alt="فريق جراحي محترف يلتزم بمعايير مكافحة العدوى في المستشفيات السعودية"
                width={600}
                height={400}
                locale="ar"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* قسم المقدمة مع الكلمات المفتاحية للقطاع الصحي */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading centered={true}>معايير التميز في القطاع الصحي السعودي</SectionHeading>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              يشهد القطاع الصحي في المملكة تطوراً متسارعاً ضمن مبادرات البرنامج الوطني للتحول الصحي ورؤية 2030، مما يتطلب الالتزام بأعلى معايير الجودة والسلامة في جميع المنشآت الطبية. في يونيوم، نقدم حلولاً متكاملة تلبي متطلبات الهيئة السعودية للتخصصات الصحية ومجلس الضمان الصحي التعاوني، مع التركيز على تعزيز مكافحة العدوى وضمان سلامة المرضى والكوادر الطبية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              تتوافق منتجاتنا مع متطلبات المركز السعودي لاعتماد المنشآت الصحية (CBAHI) ومعايير اللجنة الدولية المشتركة (JCI)، كما تدعم جهود خصخصة القطاع الصحي ضمن برامج التحول الوطني. نلتزم بتوفير حلول متخصصة تعزز كفاءة العمليات التشغيلية في المستشفيات السعودية وتضمن بيئة عمل صحية آمنة.
            </p>
          </div>
        </Container>
      </section>

      {/* قسم المميزات والفوائد مع أيقونات احترافية */}
      <section className="py-12 md:py-16 bg-blue-50">
        <Container>
          <SectionHeading centered={true} subtitle="مزايا الزي الطبي الموحد المعتمد من الهيئات الصحية السعودية">
            الخصائص المتقدمة ليونيفورم الرعاية الصحية من يونيوم
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 h-full transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">تقنية مضادة للميكروبات معتمدة</h3>
              <p className="text-gray-700">يونيفورم طبي مزود بتقنية مضادة للبكتيريا والفطريات معتمدة من وزارة الصحة السعودية، تدعم برامج <a href="/ar/blog/hospital-infection-control" className="text-blue-600 hover:text-blue-800">مكافحة العدوى المرتبطة بالرعاية الصحية</a> وتحقق متطلبات سلامة المرضى والكوادر الطبية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 h-full transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">متوافق مع المعايير الإسلامية والسعودية</h3>
              <p className="text-gray-700">زي طبي موحد محتشم يراعي الخصوصية الثقافية والدينية للعاملين في القطاع الصحي السعودي، مع تصاميم خاصة للكوادر النسائية تتوافق مع <a href="/ar/blog/islamic-medical-attire" className="text-blue-600 hover:text-blue-800">ضوابط الزي الشرعي</a> ومتطلبات الهيئة العامة للغذاء والدواء السعودية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 h-full transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">مصمم خصيصاً للمناخ السعودي والبيئة الطبية</h3>
              <p className="text-gray-700">أقمشة طبية متطورة صُممت خصيصاً لتحمل بيئة المستشفيات والمراكز الطبية في المملكة العربية السعودية، مع مراعاة الظروف المناخية المحلية و<a href="/ar/resources/fabric-guide" className="text-blue-600 hover:text-blue-800">معايير جودة الأقمشة الطبية</a> المعتمدة من الهيئات الصحية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 h-full transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">تخصيص الهوية المؤسسية للمنشآت الصحية</h3>
              <p className="text-gray-700">إمكانية <a href="/ar/services/custom-design" className="text-blue-600 hover:text-blue-800">تخصيص اليونيفورم الطبي</a> بشعار المستشفى أو المركز الطبي وألوان العلامة التجارية مع خدمات التطريز عالية الجودة والطباعة الحرارية المقاومة للغسيل المتكرر، مما يعزز الهوية المؤسسية ويدعم استراتيجيات التسويق الصحي.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 h-full transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">متانة وجودة تلبي متطلبات الاعتماد الصحي</h3>
              <p className="text-gray-700">يونيفورم طبي عالي المتانة يتحمل عمليات <a href="/ar/blog/medical-uniform-sterilization" className="text-blue-600 hover:text-blue-800">التعقيم والتطهير المتكررة</a> وفق بروتوكولات مكافحة العدوى المعتمدة من المركز السعودي لاعتماد المنشآت الصحية، مع الحفاظ على جودته لفترات طويلة مما يدعم كفاءة الإنفاق في القطاع الصحي.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 h-full transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">راحة فائقة تعزز إنتاجية الكوادر الطبية</h3>
              <p className="text-gray-700">تصميمات مريحة ومرنة تمنح حرية الحركة خلال <a href="/ar/resources/healthcare-uniforms-comfort" className="text-blue-600 hover:text-blue-800">ساعات العمل الطويلة</a> في المستشفيات، مما يعزز الإنتاجية وجودة الحياة الوظيفية للعاملين في القطاع الصحي السعودي ويدعم مبادرات تحسين بيئة العمل ضمن برامج التحول الصحي.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم المنتجات المميزة مع كلمات مفتاحية للقطاع الصحي */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading centered={true} subtitle="حلول مضادة للميكروبات متوافقة مع معايير الاعتماد الصحي السعودي">
            يونيفورم طبي متخصص للمنشآت الصحية المعتمدة من CBAHI و JCI
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/products/scrubs-set.jpg" 
                  alt="زي موحد طبي ممتاز متوافق مع معايير مكافحة العدوى في المستشفيات السعودية"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium">الأكثر مبيعاً</div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded inline-block">متوافق مع CBAHI</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block">مضاد للميكروبات</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded inline-block">معتمد من الهيئة</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">يونيفورم طبي مضاد للجراثيم للمستشفيات السعودية</h3>
                  <p className="text-gray-700 mb-4">زي طبي احترافي مصمم خصيصاً للكوادر الصحية السعودية ويلبي اشتراطات المركز السعودي لاعتماد المنشآت الصحية (CBAHI)، مصنوع من أقمشة متطورة مضادة للميكروبات تدعم برامج <a href="/ar/blog/infection-control-uniforms" className="text-blue-600 hover:text-blue-800">مكافحة العدوى</a> وتحقق أعلى معايير السلامة للمرضى والعاملين.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="/ar/shop/healthcare/premium-scrubs"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                  >
                    اكتشف تشكيلة اليونيفورم الطبي
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-sm">يبدأ من ١٨٠ ر.س</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/products/lab-coat.jpg" 
                  alt="معطف طبي احترافي للأطباء والصيادلة متوافق مع متطلبات الهيئة السعودية للتخصصات الصحية"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block">معتمد من SFDA</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded inline-block">سهل التنظيف</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded inline-block">متطابق مع JCI</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">معاطف طبية للأطباء والصيادلة السعوديين</h3>
                  <p className="text-gray-700 mb-4">معاطف طبية عالية الجودة مصممة للأطباء والصيادلة والباحثين وفق معايير <a href="/ar/blog/saudi-healthcare-standards" className="text-blue-600 hover:text-blue-800">الهيئة العامة للغذاء والدواء السعودية</a>، بأقمشة متينة مقاومة للبقع والتجاعيد تحافظ على المظهر المهني طوال اليوم، مع إمكانية تخصيص الألوان والتطريز حسب هوية المنشأة الصحية.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="/ar/shop/healthcare/lab-coats"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                  >
                    تصفح مجموعة المعاطف الطبية
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-sm">يبدأ من ١٦٠ ر.س</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/products/nursing-uniform.jpg" 
                  alt="زي تمريضي متوافق مع متطلبات الهيئة السعودية للتخصصات الصحية ومناسب للكوادر النسائية المحجبة"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-xs font-medium">جديد</div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded inline-block">معتمد من الهيئة</span>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded inline-block">للكوادر النسائية</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded inline-block">متوافق مع الحجاب</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">يونيفورم تمريضي إسلامي محتشم معتمد</h3>
                  <p className="text-gray-700 mb-4">زي تمريضي محتشم مصمم خصيصاً للممرضات السعوديات والخليجيات، يجمع بين <a href="/ar/blog/islamic-nursing-uniforms" className="text-blue-600 hover:text-blue-800">الالتزام بالضوابط الشرعية</a> ومتطلبات الهيئة السعودية للتخصصات الصحية. يتميز بقصات مريحة وأقمشة متطورة تدعم الحركة خلال نوبات العمل الطويلة مع الحفاظ على الحشمة والأناقة المهنية.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="/ar/shop/healthcare/nursing-uniforms"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                  >
                    استكشف الزي التمريضي المحتشم
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-sm">يبدأ من ١٩٠ ر.س</span>
                </div>
              </div>
            </div>
            
            {/* منتج جديد: يونيفورم طوارئ وإسعاف */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/products/medical-scrubs.jpg" 
                  alt="زي موحد للطوارئ والإسعاف متوافق مع متطلبات هيئة الهلال الأحمر السعودي والمراكز الطبية المتخصصة"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs font-medium">مميز</div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded inline-block">الإسعاف والطوارئ</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block">مقاوم للسوائل</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded inline-block">عاكس للضوء</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">يونيفورم الطوارئ والإسعاف المتطور</h3>
                  <p className="text-gray-700 mb-4">زي متخصص لفرق الطوارئ والإسعاف مصمم وفق <a href="/ar/blog/emergency-medical-uniforms" className="text-blue-600 hover:text-blue-800">معايير الهلال الأحمر السعودي</a> ومتطلبات العمل الإسعافي، بخامات متينة مقاومة للسوائل والتمزق مع عناصر عاكسة للضوء تعزز السلامة خلال عمليات الاستجابة الليلية والطارئة، ويضمن الحركة السهلة وسرعة الاستجابة.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="/ar/shop/healthcare/emergency-uniforms"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                  >
                    تعرف على يونيفورم الطوارئ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-sm">يبدأ من ٢١٠ ر.س</span>
                </div>
              </div>
            </div>
            
            {/* منتج جديد: أطقم جراحية متخصصة */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/products/surgical-gowns.jpg" 
                  alt="أطقم جراحية معقمة متوافقة مع معايير مكافحة العدوى في المستشفيات السعودية والخليجية"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded inline-block">غرف العمليات</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded inline-block">معقمة طبياً</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded inline-block">متطابق مع AAMI</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">أطقم جراحية متخصصة للعمليات المعقدة</h3>
                  <p className="text-gray-700 mb-4">يونيفورم جراحي متطور مصمم خصيصاً لغرف العمليات وفق <a href="/ar/blog/surgical-gowns-standards" className="text-blue-600 hover:text-blue-800">معايير AAMI ومتطلبات CBAHI</a> للتعقيم ومكافحة العدوى، بخامات مقاومة للسوائل والبكتيريا ودرجات عزل متعددة تناسب أنواع التدخلات الجراحية المختلفة. تضمن مستويات أمان عالية مع المحافظة على الراحة خلال العمليات الطويلة.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="/ar/shop/healthcare/surgical-uniforms"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                  >
                    اكتشف الأطقم الجراحية المتخصصة
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-sm">يبدأ من ٢٤٠ ر.س</span>
                </div>
              </div>
            </div>
            
            {/* منتج جديد: يونيفورم إداري للمنشآت الصحية */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/products/administrative-uniform.jpg" 
                  alt="يونيفورم إداري احترافي للمنشآت الصحية السعودية يعكس الهوية المؤسسية للمستشفيات والمراكز الطبية"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded inline-block">الكادر الإداري</span>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded inline-block">هوية مؤسسية</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block">خدمة العملاء</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">يونيفورم إداري للمنشآت الصحية السعودية</h3>
                  <p className="text-gray-700 mb-4">زي موحد احترافي للكوادر الإدارية وموظفي الاستقبال وخدمة العملاء في <a href="/ar/blog/hospital-administrative-uniforms" className="text-blue-600 hover:text-blue-800">المستشفيات والمراكز الطبية</a>، يعكس هوية المنشأة الصحية ويعزز صورتها المهنية. مصمم بمعايير عالية من الأناقة والعملية مع إمكانية تخصيص الألوان والتصاميم حسب الهوية المؤسسية لكل منشأة صحية.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="/ar/shop/healthcare/administrative-uniforms"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                  >
                    تصفح يونيفورم الكادر الإداري
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-sm">يبدأ من ١٤٠ ر.س</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم مخصص للدعوة للتواصل مع روابط داخلية وتحسينات SEO */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
          <Image 
            src="/images/PremiumـMedicalـScrubs.png" 
            alt="يونيفورم طبي عالي الجودة لقطاع الرعاية الصحية في المملكة العربية السعودية"
            fill
            className="object-cover mix-blend-overlay opacity-10"
          />
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <Image 
            src="/images/grid-pattern.svg" 
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <Container>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">حلول متكاملة ليونيفورم الرعاية الصحية المتوافق مع معايير الاعتماد السعودي</h2>
              <p className="text-blue-100 text-lg">
                نقدم برامج إدارة متكاملة ليونيفورم الرعاية الصحية تشمل التصميم، أخذ المقاسات، التوريد، وإدارة المخزون بما يتوافق مع متطلبات المركز السعودي لاعتماد المنشآت الصحية (CBAHI) والهيئة السعودية للتخصصات الصحية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-white/20 hover:bg-white/15 transition duration-300">
                <div className="mb-4 bg-white/10 p-3 rounded-full inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">برنامج إدارة يونيفورم الرعاية الصحية</h3>
                <p className="text-blue-100 mb-6">برنامج متكامل لإدارة يونيفورم الكوادر الطبية يشمل التخطيط، التصميم، التنفيذ، التوزيع، وإدارة دورة حياة اليونيفورم الطبي بشكل كامل، مما يخفف العبء الإداري عن المنشآت الصحية ويضمن الامتثال لمعايير الاعتماد السعودي.</p>
                <Link 
                  href="/ar/services/program-management?industry=healthcare"
                  className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors"
                >
                  تعرف على برنامج إدارة اليونيفورم الطبي
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-white/20 hover:bg-white/15 transition duration-300">
                <div className="mb-4 bg-white/10 p-3 rounded-full inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">تصميم مخصص للهوية البصرية</h3>
                <p className="text-blue-100 mb-6">خدمات تصميم احترافية لتطوير يونيفورم طبي يعكس هوية منشأتك الصحية بشكل متميز، مع الالتزام الكامل بمعايير الجودة ومتطلبات مكافحة العدوى والسلامة المهنية المعتمدة من الهيئات الصحية السعودية.</p>
                <Link 
                  href="/ar/services/custom-design?industry=healthcare"
                  className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors"
                >
                  استكشف خدمات التصميم المخصص
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
              <Link href="/ar/contact?source=healthcare-uniforms" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-medium rounded-md shadow-sm hover:bg-blue-50 transition-colors w-full md:w-auto">
                طلب استشارة مجانية
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link href="/ar/resources/healthcare-uniform-guide" className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors w-full md:w-auto">
                تحميل دليل يونيفورم الرعاية الصحية
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم الأسئلة الشائعة لتعزيز SEO */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <SectionHeading centered={true}>الأسئلة الشائعة حول يونيفورم الرعاية الصحية</SectionHeading>
          <div className="max-w-3xl mx-auto mt-10">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">ما هي معايير الاعتماد السعودي للزي الطبي الموحد؟</h3>
                <p className="text-gray-700">
                  يشترط المركز السعودي لاعتماد المنشآت الصحية (CBAHI) أن يكون اليونيفورم الطبي متوافقاً مع متطلبات مكافحة العدوى، حيث يجب أن يكون قابلاً للغسل بدرجات حرارة عالية (تصل إلى 60 درجة مئوية)، مقاوماً للبكتيريا، ومصنوعاً من مواد لا تسهل انتشار الملوثات. كما تشترط المعايير السعودية وجود تمييز واضح بين أقسام المستشفى المختلفة من خلال ألوان محددة لكل قسم، مع الالتزام بمبادئ الاحتشام والمظهر المهني اللائق بالمنشآت الصحية.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">ما الفرق بين يونيفورم المستشفيات الحكومية والخاصة في السعودية؟</h3>
                <p className="text-gray-700">
                  تلتزم كل من المستشفيات الحكومية والخاصة بمعايير CBAHI الأساسية، لكن المستشفيات الحكومية تتبع نظاماً مركزياً موحداً للزي الطبي تحدده وزارة الصحة السعودية مع ألوان وتصاميم محددة بدقة لكل تخصص. بينما تتمتع المستشفيات الخاصة بمرونة أكبر في تخصيص الزي الطبي بما يعكس هويتها البصرية الخاصة، مع الالتزام بالمعايير الأساسية. تقدم يونيوم حلولاً مخصصة لكلا القطاعين تراعي هذه الاختلافات مع ضمان الامتثال الكامل للمعايير الوطنية والدولية.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">ما هي المواد المثالية ليونيفورم الرعاية الصحية في البيئة السعودية؟</h3>
                <p className="text-gray-700">
                  نظراً للطبيعة المناخية في المملكة العربية السعودية، نوصي باستخدام أقمشة متطورة مثل مزيج القطن والبوليستر بنسبة 65/35 المعالج بتقنية مضادة للميكروبات للاستخدام اليومي. هذه الأقمشة توفر تهوية ممتازة وراحة في الارتداء مع مقاومة للتجعد والانكماش. للأقسام الحرجة مثل غرف العمليات، نقدم أقمشة طبية متخصصة من نوع Poly-Cotton Tri-Blend المعالجة بتقنية DuoGuard المضادة للسوائل والبكتيريا، والتي تتحمل التعقيم المتكرر وتحافظ على خصائصها الواقية لفترات طويلة بما يتوافق مع معايير JCI وCBAHI.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">كيف يمكن لبرنامج إدارة اليونيفورم الطبي تحسين كفاءة المنشآت الصحية؟</h3>
                <p className="text-gray-700">
                  يساهم برنامج إدارة اليونيفورم الطبي المتكامل من يونيوم في تحسين كفاءة المنشآت الصحية من خلال:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>تخفيض التكاليف التشغيلية بنسبة تصل إلى 30% من خلال إدارة المخزون الذكية والتوريد المستمر حسب الحاجة.</li>
                    <li>تقليل العبء الإداري عن الكوادر الطبية وتمكينهم من التركيز على تقديم الرعاية الصحية.</li>
                    <li>ضمان الامتثال المستمر لمعايير الاعتماد من خلال مراقبة جودة اليونيفورم واستبداله عند الحاجة.</li>
                    <li>تحسين الصورة المهنية للمنشأة الصحية مما ينعكس إيجاباً على ثقة المرضى والزوار.</li>
                  </ul>
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">كيف تضمنون توافق اليونيفورم الطبي مع متطلبات الزي الإسلامي المحتشم للكوادر النسائية؟</h3>
                <p className="text-gray-700">
                  طورنا في يونيوم مجموعة متخصصة من تصاميم اليونيفورم الطبي "المُحتَشِم برو" والتي تراعي خصوصية الكوادر الطبية النسائية المحجبة والمنتقبة، مع الالتزام التام بالمعايير المهنية والوظيفية للزي الطبي. تشمل هذه التصاميم خيارات متنوعة مثل السكروب المُطوّل مع البنطلون الواسع، المعاطف الطبية ذات الأكمام الطويلة، والأغطية الرأسية المخصصة للبيئات الطبية. جميع هذه التصاميم مصنوعة من أقمشة مرنة وعملية تسمح بحرية الحركة وتحافظ على الاحتشام، وتم اعتمادها من قبل إدارات الشؤون الدينية في كبرى المستشفيات السعودية.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم مقالات ذات صلة لتعزيز SEO */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <SectionHeading centered={true}>مقالات ذات صلة بيونيفورم الرعاية الصحية</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Link href="/ar/blog/healthcare-uniforms-infection-control" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg" 
                    alt="دور اليونيفورم الطبي في مكافحة العدوى بالمنشآت الصحية السعودية"
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-700 transition duration-300">دور اليونيفورم الطبي في مكافحة العدوى بالمستشفيات</h3>
                  <p className="text-gray-700 mb-4">تحليل علمي لأهمية الزي الطبي الموحد في دعم برامج مكافحة العدوى وتقليل مخاطر انتقال الميكروبات في المنشآت الصحية السعودية وفق معايير CBAHI.</p>
                </div>
              </div>
            </Link>

            <Link href="/ar/blog/cbahi-uniform-requirements" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg" 
                    alt="متطلبات المركز السعودي لاعتماد المنشآت الصحية للزي الطبي الموحد"
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-700 transition duration-300">متطلبات CBAHI ليونيفورم الرعاية الصحية</h3>
                  <p className="text-gray-700 mb-4">دليل شامل حول متطلبات المركز السعودي لاعتماد المنشآت الصحية (CBAHI) الخاصة باليونيفورم الطبي وكيفية تحقيق الامتثال لمعايير الاعتماد الوطني.</p>
                </div>
              </div>
            </Link>

            <Link href="/ar/blog/islamic-medical-attire-guidelines" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg" 
                    alt="دليل الزي الطبي المحتشم للكوادر النسائية في القطاع الصحي السعودي"
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-700 transition duration-300">دليل اليونيفورم الطبي المحتشم للكوادر النسائية</h3>
                  <p className="text-gray-700 mb-4">إرشادات شاملة حول تصميم وتنفيذ الزي الطبي المحتشم للممرضات والطبيبات السعوديات بما يتوافق مع الضوابط الشرعية ومتطلبات البيئة الطبية.</p>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
} 
