import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'دراسة حالة عيادة المستشفى التجميلية | أزياء طبية تجميلية | UNEOM المملكة العربية السعودية',
  description: 'كيف ساعدت UNEOM مستشفى متميز في جدة على رفع مستوى خدمات عياداته التجميلية من خلال أزياء موحدة طبية متطورة تجمع بين المعايير الطبية والأناقة',
  keywords: 'أزياء طبية تجميلية, أزياء موحدة لعيادات التجميل, أزياء مستشفيات سعودية, ملابس موحدة للرعاية الصحية السعودية, أزياء أطباء التجميل, أزياء طبية متوافقة مع الحجاب',
};

export default function HospitalAestheticClinicCaseStudyArabic() {
  return (
    <main className="bg-white" dir="rtl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">دراسة حالة عيادة المستشفى التجميلية | أزياء طبية تجميلية</h1>
      
      {/* Schema.org structured data */}
      <Script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "عيادة المستشفى التجميلية: UNEOM ترتقي بخدمات التجميل الطبية في جدة",
            "description": "دراسة حالة عن كيفية تحويل UNEOM لعيادة تجميلية طبية في جدة من خلال أزياء موحدة متطورة تعزز من ثقة المرضى والكفاءة المهنية.",
            "image": "https://uneom.com/images/healthcare/healthcare_medical_uniform.jpg",
            "datePublished": "2023-11-15T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM للأزياء الموحدة المهنية"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-teal-300">دراسة حالة</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">عيادة المستشفى التجميلية</h1>
            <p className="text-xl mb-8 text-white/90">كيف ارتقت UNEOM بمستوى قسم التجميل الطبي في مستشفى رائد بجدة من خلال أزياء موحدة متطورة تعزز الثقة والمهنية</p>
            <div className="flex items-center space-x-4 flex-row-reverse">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">القطاع</span>
                <span className="block text-lg">الرعاية الصحية التجميلية</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">الموقع</span>
                <span className="block text-lg">جدة، المملكة العربية السعودية</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">مدة المشروع</span>
                <span className="block text-lg">4 أشهر</span>
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
                مركز طبي رائد في جدة يضم قسم تجميل متخصص يقدم مجموعة من الإجراءات التجميلية الطبية، بدءًا من علاجات البشرة المتقدمة وحتى الجراحات التجميلية. 
                يخدم المركز عملاء من النخبة يتوقعون أعلى مستويات الرعاية والاحترافية.
              </p>
              <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-6">
                <li>فريق من 18 طبيبًا وممرضة متخصصة في مجال الطب التجميلي</li>
                <li>منشأة حديثة بأحدث التقنيات والمعدات الطبية</li>
                <li>تقديم مجموعة واسعة من الإجراءات من غير الجراحية إلى الجراحية</li>
                <li>التزام قوي بالمعايير الطبية العالمية مع لمسة فاخرة</li>
                <li>خدمة عملاء من النخبة داخل وخارج المملكة العربية السعودية</li>
              </ul>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-teal-900">التحدي الرئيسي</h3>
                <p className="text-gray-700">
                  كان على العيادة أن تجد توازنًا دقيقًا بين المظهر الاحترافي الطبي الذي يبعث على الثقة،
                  وعناصر الفخامة المتوقعة من عيادة تجميلية راقية.
                  تطلب الأمر أزياء موحدة تجمع بين المعايير الطبية الصارمة والتصميم الأنيق،
                  مع مراعاة متطلبات الراحة للعاملين واعتبارات التوافق مع الحجاب.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px] md:order-1">
              <Image 
                src="/images/healthcare/healthcare_medical_uniform.jpg" 
                alt="فريق طبي في عيادة تجميلية بأزياء موحدة متطورة" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">أزياء طبية متطورة للعناية التجميلية</p>
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
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">١</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">تحليل متطلبات البيئة الطبية التجميلية</h3>
                <p className="text-gray-700">
                  أجرينا دراسة متعمقة للإجراءات والعمليات داخل العيادة
                  لفهم المتطلبات الوظيفية الدقيقة لكل دور، والتحديات المحددة
                  في بيئة الرعاية الصحية التجميلية.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">٢</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">اختيار أقمشة عالية الأداء</h3>
                <p className="text-gray-700">
                  حددنا مجموعة من الأقمشة التقنية المتقدمة التي توفر خصائص مضادة للبكتيريا،
                  ومقاومة للبقع، وسهلة التنظيف، مع الحفاظ على المظهر الأنيق
                  والراحة في الاستخدام اليومي الطويل.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">٣</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">تصميم يراعي العوامل الثقافية</h3>
                <p className="text-gray-700">
                  طورنا تصاميم تراعي المتطلبات الثقافية والدينية،
                  بما في ذلك خيارات متوافقة مع الحجاب ومعايير الاحتشام
                  مع الحفاظ على الأناقة والعملية.
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
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">مجموعة أزياء طبية تجميلية متكاملة</h3>
                <p className="text-gray-700 mb-6">
                  طورنا مجموعة شاملة من الأزياء المصممة لتلبية احتياجات كل تخصص في العيادة التجميلية:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">للأطباء المتخصصين:</span>
                      <p className="text-gray-700">معاطف طبية محسنة ذات قصة أنيقة مع تفاصيل عصرية وتشطيبات راقية</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">للممرضات وأخصائيي الرعاية:</span>
                      <p className="text-gray-700">أزياء عملية وأنيقة بألوان موحدة تعكس هوية العلامة التجارية</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">لفريق الاستقبال وخدمة العملاء:</span>
                      <p className="text-gray-700">ملابس أنيقة بتفاصيل عالية الجودة تعكس الطابع الفاخر للعيادة</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:order-1 relative h-96">
                <Image 
                  src="/images/healthcare/healthcare_medical_doctor_uniform.jpg" 
                  alt="طبيب في عيادة تجميلية بزي طبي متطور" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/healthcare/medical_hijab_uniform.jpg" 
                  alt="أزياء طبية متوافقة مع الحجاب في عيادة تجميلية" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">ميزات تقنية متقدمة</h3>
                <p className="text-gray-700 mb-6">
                  دمجنا مزايا تقنية متقدمة لتلبية المتطلبات الخاصة لبيئة الرعاية الصحية التجميلية:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">معالجة مضادة للميكروبات:</span>
                      <p className="text-gray-700">حماية إضافية في بيئة العمل الطبية مع الحفاظ على النظافة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">تصميم بمراعاة حركة الجسم:</span>
                      <p className="text-gray-700">نطاقات حركة محسنة للراحة خلال الإجراءات الطويلة وتنقل الموظفين</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="ms-3 text-right">
                      <span className="font-semibold text-gray-900">أقمشة تنظم درجة الحرارة:</span>
                      <p className="text-gray-700">توفر راحة طوال اليوم في بيئة العمل المكيفة للعيادة التجميلية</p>
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
                <div className="text-teal-600 text-4xl font-bold mb-2">27%</div>
                <p className="text-gray-700">زيادة في الحجوزات</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-teal-600 text-4xl font-bold mb-2">94%</div>
                <p className="text-gray-700">رضا الموظفين</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-teal-600 text-4xl font-bold mb-2">35%</div>
                <p className="text-gray-700">تحسن في ثقة المرضى</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-teal-600 text-4xl font-bold mb-2">40%</div>
                <p className="text-gray-700">تعزيز صورة العلامة التجارية</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-teal-300 mx-auto mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <blockquote className="text-2xl font-light mb-10">
              الشراكة مع UNEOM كانت تحويلية لعيادتنا التجميلية. الأزياء لا تعكس الاحترافية الطبية فحسب، بل تخلق أيضًا بيئة عمل محسنة لطاقمنا وتعزز من ثقة المرضى في خدماتنا.
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">د. فيصل القحطاني</p>
              <p className="text-teal-300">المدير الطبي، عيادة المستشفى التجميلية</p>
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
              <Link href="/ar/case-studies/luxury-salon-evolution" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg border border-gray-100">
                  <div className="relative h-48">
                    <Image 
                      src="/images/corporate/corporate_uniform_formal.jpg" 
                      alt="دراسة حالة تطور صالون الفخامة" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">تطور صالون الفخامة</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">كيف حولت UNEOM صالون تجميل راقي في الرياض بأزياء موحدة مخصصة تعكس المكانة الفاخرة</p>
                    <span className="text-teal-600 font-medium group-hover:text-teal-800 transition-colors flex items-center mt-2 justify-end">
                      اقرأ دراسة الحالة
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              
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
                    <span className="text-teal-600 font-medium group-hover:text-teal-800 transition-colors flex items-center mt-2 justify-end">
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
      <section className="py-16 bg-gradient-to-r from-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">جاهزون لرفع مستوى مرافقكم الطبية؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تقدم UNEOM حلول أزياء موحدة طبية متخصصة تجمع بين المعايير الطبية العالمية والتصميم الأنيق.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/ar/contact" className="bg-white text-teal-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              طلب استشارة
            </Link>
            <Link href="/ar/industries/healthcare" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              استكشاف حلول الرعاية الصحية
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 