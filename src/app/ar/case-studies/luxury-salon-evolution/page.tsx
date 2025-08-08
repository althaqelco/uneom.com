import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'دراسة حالة تطور صالون الفخامة | أزياء موحدة فاخرة للسبا | UNEOM المملكة العربية السعودية',
  description: 'كيف ساعدت UNEOM في تحويل صالون تجميل راقي في الرياض من خلال الأزياء الموحدة المصممة خصيصًا للموظفين والتي رفعت من تصور العلامة التجارية واحترافية الموظفين مع الحفاظ على المعايير الثقافية السعودية.',
  keywords: 'أزياء صالون تجميل فاخرة, ملابس موحدة للسبا الفاخر السعودي, تصميم أزياء صالون راقي الرياض, أزياء تجميل مخصصة المملكة العربية السعودية, مظهر محترف لموظفي الصالون, أزياء عيادة تجميلية فاخرة'};

export default function LuxurySalonEvolutionCaseStudyArabic() {
  return (
    <main className="bg-white" dir="rtl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">دراسة حالة تطور صالون الفخامة | أزياء موحدة فاخرة للسبا</h1>
      
      {/* Schema.org structured data */}
      <Script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "تطور صالون الفخامة: UNEOM تحول وجهة التجميل الراقية في الرياض",
            "description": "دراسة حالة عن كيفية قيام UNEOM برفع مستوى علامة صالون تجميل فاخر في الرياض من خلال أزياء موحدة مصممة خصيصًا توازن بين جماليات الفخامة والمتطلبات الثقافية السعودية.",
            "image": "https://uneom.com/images/corporate/corporate_uniform_formal.jpg",
            "datePublished": "2023-10-22T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM للأزياء الموحدة المهنية"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-indigo-300">دراسة حالة</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطور صالون الفخامة</h1>
            <p className="text-xl mb-8 text-white/90">كيف حولت UNEOM صالون تجميل راقي في الرياض بأزياء موحدة مخصصة تعكس المكانة الفاخرة</p>
            <div className="flex items-center space-x-4 flex-row-reverse">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">القطاع</span>
                <span className="block text-lg">التجميل والسبا الفاخر</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">الموقع</span>
                <span className="block text-lg">الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">مدة المشروع</span>
                <span className="block text-lg">3 أشهر</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">نظرة عامة على العميل</h2>
              <p className="text-gray-700 mb-4">
                صالون تجميل حصري وسبا في أرقى أحياء الرياض، يخدم عملاء من ذوي الدخل المرتفع الباحثين عن خدمات تجميل فاخرة. 
                مع فريق مكون من 35 موظفًا يقدمون خدمات تتراوح بين تصفيف الشعر وعلاجات تجميلية متقدمة، احتاج الصالون إلى 
                تجديد أزياء الموظفين لتتماشى مع إعادة تصميم الديكور الداخلي وتعزيز مكانة العلامة التجارية.
              </p>
              <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-6">
                <li>عملاء من الفئة الفاخرة بتوقعات عالية للخدمة والجماليات</li>
                <li>خضع مؤخرًا لإعادة تصميم داخلي كامل بلمسات فاخرة</li>
                <li>يقدم خدمات تجميل تقليدية وعلاجات تجميلية متقدمة</li>
                <li>ينافس علامات صالونات الفخامة العالمية في السوق السعودي</li>
                <li>تركيز قوي على خلق تجربة عميل متميزة وراقية</li>
              </ul>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-900">التحدي الرئيسي</h3>
                <p className="text-gray-700">
                  فشلت الأزياء الموحدة الحالية للموظفين في عكس المكانة الفاخرة للصالون وتصميمه الداخلي الجديد.
                  احتاجوا إلى أزياء توازن بين جماليات الفخامة والمتطلبات العملية لمتخصصي التجميل،
                  مع الحفاظ على معايير الاحتشام الضرورية للسوق السعودي.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px] md:order-1">
              <Image 
                src="/images/corporate/corporate_uniform_formal.jpg" 
                alt="موظفو صالون فاخر بأزياء موحدة فاخرة" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">أزياء موحدة جديدة تعكس المكانة الفاخرة للصالون</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">نهجنا</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">١</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">الانغماس في العلامة التجارية وتحليل التصميم</h3>
                <p className="text-gray-700">
                  أجرينا جلسات متعمقة مع إدارة الصالون لفهم قيم علامتهم التجارية،
                  ورؤيتهم الجمالية، وتوقعات العملاء. كما حللنا عناصر التصميم الداخلي الجديد،
                  ولوحة الألوان، والمواد لضمان انسجام الأزياء مع المساحة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">٢</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">اختيار المواد الفاخرة</h3>
                <p className="text-gray-700">
                  قمنا باختيار مجموعة من الأقمشة الفاخرة التي توازن بين المظهر الفخم
                  ومتطلبات الأداء العملي لمتخصصي التجميل، بما في ذلك مزيج الحرير،
                  والقطن الفاخر، وأقمشة تقنية متخصصة ذات انسيابية أنيقة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">٣</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">تطوير التصميم المخصص</h3>
                <p className="text-gray-700">
                  بدلاً من تقديم قوالب قياسية، أنشأنا تصاميم مخصصة بالكامل لكل دور،
                  بخطوط أنيقة مستوحاة من الأزياء الراقية مع الحفاظ على الملاءمة الثقافية
                  والمتطلبات الوظيفية لمحترفي التجميل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">الحل</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">نظام أزياء فاخر متدرج</h3>
                <p className="text-gray-700 mb-6">
                  أنشأنا نظام أزياء موحدة هرمي حيث حصلت كل فئة من الموظفين على تفاصيل أكثر تطوراً:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">مصففو الشعر والأخصائيون الرئيسيون:</span>
                      <p className="text-gray-700">أثواب من مزيج الحرير الأسود مع تطريز ذهبي مخصص وعناصر تصميم متقنة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">الموظفون الكبار:</span>
                      <p className="text-gray-700">أثواب رمادية داكنة مع تفاصيل فضية وعناصر تحمل شعار العلامة التجارية بشكل متناغم</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">مصففو الشعر المبتدئون وطاقم الدعم:</span>
                      <p className="text-gray-700">أزياء سوداء أنيقة بخطوط نظيفة وعناصر تصميم بسيطة وأنيقة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">الاستقبال وخدمة العملاء:</span>
                      <p className="text-gray-700">سترات وتنانير مصممة خصيصًا بألوان الصالون المميزة مع مزيج من الأقمشة الفاخرة</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:order-1 relative h-96">
                <Image 
                  src="/images/retail-shops/retail-shops-uniform-brands-logo.jpg" 
                  alt="نظام أزياء صالون فاخر متدرج" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/corporate/corporate_brand.jpg" 
                  alt="تفاصيل فاخرة في أزياء صالون الفخامة" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">تفاصيل فاخرة وتخصيص</h3>
                <p className="text-gray-700 mb-6">
                  تم تصميم كل عنصر من عناصر مجموعة الأزياء الموحدة لنقل الفخامة والحصرية:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">تطريز مخصص:</span>
                      <p className="text-gray-700">شعار الصالون مطرز بخيوط معدنية وعناصر كريستالية دقيقة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">إكسسوارات فاخرة:</span>
                      <p className="text-gray-700">أزرار وإغلاقات مصممة خصيصًا بتشطيبات ذهبية وفضية مصقولة</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">النتائج والتأثير</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">41%</div>
                <p className="text-gray-700">زيادة في رضا الموظفين</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">33%</div>
                <p className="text-gray-700">تحسن في رضا العملاء</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">28%</div>
                <p className="text-gray-700">زيادة في الإيرادات</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">52%</div>
                <p className="text-gray-700">تعزيز في قيمة العلامة التجارية</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-indigo-300 mx-auto mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <blockquote className="text-2xl font-light mb-10">
              العمل مع UNEOM حول ليس فقط مظهر موظفينا بل تجربة العميل بأكملها. الأزياء الموحدة المخصصة تكمل بشكل مثالي التصميم الداخلي لصالوننا ومكانتنا الفاخرة.
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">لمى آل سعود</p>
              <p className="text-indigo-300">المؤسسة والمديرة الإبداعية، صالون فاخر</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">دراسات حالة ذات صلة</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/ar/case-studies/beauty-chain-standardization" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg border border-gray-100">
                  <div className="relative h-48">
                    <Image 
                      src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                      alt="دراسة حالة توحيد سلسلة صالونات التجميل" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">توحيد سلسلة صالونات التجميل</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">كيف وحدت UNEOM سلسلة صالونات تجميل رائدة في السعودية بأزياء موحدة احترافية عبر أكثر من 25 موقعًا</p>
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors flex items-center mt-2 justify-end">
                      اقرأ دراسة الحالة
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link href="/ar/case-studies/hospital-aesthetic-clinic" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg border border-gray-100">
                  <div className="relative h-48">
                    <Image 
                      src="/images/hospitality/hospitality_full_look.jpg" 
                      alt="دراسة حالة عيادة التجميل الطبية" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">عيادة التجميل الطبية</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">كيف رفعت UNEOM مستوى منشأة طبية تجميلية رائدة في جدة بأزياء رعاية صحية متطورة</p>
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors flex items-center mt-2 justify-end">
                      اقرأ دراسة الحالة
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت جاهز لتحويل عملك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تقدم UNEOM حلول أزياء موحدة فاخرة مصممة خصيصًا لاحتياجات قطاعك المحددة في جميع أنحاء المملكة العربية السعودية.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/ar/contact" className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              طلب استشارة
            </Link>
            <Link href="/ar/industries" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              استكشاف حلول القطاعات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 