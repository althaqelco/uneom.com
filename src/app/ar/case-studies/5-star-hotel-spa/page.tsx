import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'دراسة حالة سبا فندق خمس نجوم | أزياء سبا فاخرة | UNEOM المملكة العربية السعودية',
  description: 'كيف قامت UNEOM بتحويل سبا مرموق في فندق خمس نجوم بالرياض بأزياء موحدة فاخرة مخصصة رفعت من ثقة الموظفين، وتجارب الضيوف، وهوية العلامة التجارية',
  keywords: 'أزياء سبا فاخرة، ملابس سبا فندق خمس نجوم، أزياء موحدة للفنادق السعودية، ملابس موظفي السبا الرياض، أزياء فاخرة للضيافة، ملابس مراكز العافية، علامة تجارية لسبا الفندق'};

export default function FiveStarHotelSpaCaseStudyArabic() {
  return (
    <main className="bg-white" dir="rtl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">دراسة حالة سبا فندق خمس نجوم | أزياء سبا فاخرة</h1>
      
      {/* Schema.org structured data */}
      <Script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "تحويل سبا فندق خمس نجوم: تصميم أزياء فاخرة من UNEOM",
            "description": "دراسة حالة عن كيفية قيام UNEOM بتحويل سبا مرموق في فندق خمس نجوم بالرياض بأزياء موحدة فاخرة مخصصة رفعت تجربة الضيف الشاملة.",
            "image": "https://uneom.com/images/hospitality/hospitality_spa_uniform.jpg",
            "datePublished": "2024-05-01T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM للأزياء الموحدة المهنية"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-indigo-300">دراسة حالة</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تحويل سبا فندق خمس نجوم</h1>
            <p className="text-xl mb-8 text-white/90">كيف رفعت UNEOM مستوى سبا مرموق في فندق بالرياض بأزياء موحدة فاخرة تجسد العافية والأناقة والحساسية الثقافية</p>
            <div className="flex flex-wrap items-center gap-4 flex-row-reverse">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">القطاع</span>
                <span className="block text-lg">الضيافة الفاخرة</span>
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
                أحد أكثر فنادق الخمس نجوم تميزاً في الرياض، يضم سبا وَمركز عافية حائز على جوائز يقدم مجموعة شاملة من العلاجات والتجارب. 
                يخدم السبا ضيوفاً متميزين من جميع أنحاء العالم يتوقعون رفاهية لا مثيل لها وتميزاً في الخدمة.
              </p>
              <ul className="list-disc pr-6 text-gray-700 space-y-2 mb-6">
                <li>مرفق سبا وعافية بمساحة 30,000 قدم مربع</li>
                <li>فريق من أكثر من 40 متخصصاً في العافية وموظفي دعم</li>
                <li>عروض علاجية متنوعة من الطقوس العربية التقليدية إلى علاجات العافية المتطورة</li>
                <li>مرافق منفصلة للرجال والنساء مع مناطق استرخاء فاخرة مشتركة</li>
                <li>جوائز عالمية متعددة للتميز في خدمات السبا</li>
              </ul>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-900">التحدي الرئيسي</h3>
                <p className="text-gray-700">
                  احتاج السبا إلى الموازنة بين الفخامة والوظائفية، من خلال تصميم أزياء موحدة تعكس العلامة التجارية المرموقة للفندق
                  مع توفير الراحة والاحتشام للموظفين الذين يقدمون مجموعة واسعة من العلاجات.
                  كان من الضروري أن تكون الأزياء الموحدة مناسبة للسياق الثقافي السعودي مع الحفاظ على معايير الفخامة العالمية التي يتوقعها المسافرون العالميون.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px] md:order-1">
              <Image 
                src="/images/hospitality/hospitality_spa_uniform.jpg" 
                alt="موظفو سبا فاخر بأزياء موحدة مصممة خصيصاً" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">موظفو استقبال السبا الفاخر بأزياء UNEOM الموحدة</p>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-900">تجربة العلامة التجارية الغامرة</h3>
                <p className="text-gray-700">
                  انغمس فريقنا في تجربة سبا الفندق، وفهم الأجواء الفريدة،
                  وسير الخدمة، وموقع العلامة التجارية لضمان توافق تصاميمنا
                  مع رحلة الضيف الشاملة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">٢</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">تحليل أدوار الموظفين</h3>
                <p className="text-gray-700">
                  أجرينا تحليلاً مفصلاً لكل دور من أدوار الموظفين،
                  من المعالجين وأخصائيي التجميل إلى الاستقبال والإدارة،
                  لفهم متطلبات الحركة الخاصة بهم، وبروتوكولات العلاج،
                  وأنماط التفاعل مع العملاء.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">٣</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">التكيف الثقافي</h3>
                <p className="text-gray-700">
                  دمجنا مبادئ تصميم الفخامة الحديثة مع احترام التوقعات
                  الثقافية السعودية، وطورنا خيارات مناسبة للموظفين
                  المحليين والدوليين بطريقة تحترم القيم المحلية
                  دون المساس بالأناقة.
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
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">مجموعة المعالجين</h3>
                <p className="text-gray-700 mb-6">
                  طورنا مجموعة متميزة من أزياء العلاج التي وازنت بين الاحتياجات العملية وجماليات الفخامة:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full ml-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">أقمشة فاخرة طاردة للرطوبة</span>
                      <p className="text-gray-700">منسوجات أداء عالية ذات خصائص مضادة للميكروبات ومرونة مريحة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full ml-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">نظام تصميم مرن</span>
                      <p className="text-gray-700">عناصر متعددة الطبقات تسمح للموظفين بتكييف الملابس مع أنواع العلاجات المختلفة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full ml-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">خيارات مناسبة للحجاب</span>
                      <p className="text-gray-700">تصاميم أنيقة تتضمن بدائل محتشمة للموظفات اللواتي يفضلن تغطية الحجاب</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:order-1 relative h-96">
                <Image 
                  src="/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg" 
                  alt="زي معالج سبا فندق فاخر" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg" 
                  alt="زي استقبال سبا فندق خمس نجوم" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">أناقة الواجهة الأمامية</h3>
                <p className="text-gray-700 mb-6">
                  بالنسبة للأدوار التي تتعامل مع الضيوف، أنشأنا مجموعة جسدت مكانة الفندق الفاخرة:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full ml-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">أشكال مميزة</span>
                      <p className="text-gray-700">قصات معاصرة مع إشارات دقيقة لعناصر الأزياء العربية التقليدية</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full ml-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">منسوجات طبيعية فاخرة</span>
                      <p className="text-gray-700">مزيج من القطن الناعم ولمسات من الحرير بألوان الفندق المميزة</p>
                    </div>
                  </li>
                  <li className="flex items-start flex-row-reverse">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full ml-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">إكسسوارات مصممة خصيصاً</span>
                      <p className="text-gray-700">دبابيس وأوشحة ومناديل جيب مصممة خصيصاً تتضمن عناصر العلامة التجارية الدقيقة</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* More solution sections will be added in subsequent edits */}
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
                <div className="text-indigo-600 text-4xl font-bold mb-2">32%</div>
                <p className="text-gray-700">زيادة في حجوزات العلاجات</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">96%</div>
                <p className="text-gray-700">رضا الموظفين</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">28%</div>
                <p className="text-gray-700">زيادة في مبيعات منتجات السبا</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">4.9/5</div>
                <p className="text-gray-700">متوسط تقييم الضيوف</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-right">النتائج الرئيسية</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start flex-row-reverse">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full ml-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-right">تحسن كبير في إدراك العلامة التجارية وقيمة الفخامة المتصورة</p>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full ml-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-right">تعزيز ثقة الموظفين عند التعامل مع العملاء المميزين</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start flex-row-reverse">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full ml-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-right">ذكر أكثر تكراراً لمظهر الموظفين في تعليقات الضيوف الإيجابية</p>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full ml-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700 text-right">تحسن معدلات الاحتفاظ بالموظفين بين معالجي السبا والمتخصصين</p>
                    </li>
                  </ul>
                </div>
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
              فهمت UNEOM التحديات الفريدة لإنشاء أزياء السبا التي تمثل مكانتنا الفاخرة مع تلبية الاحتياجات العملية لمعالجينا. تجاوزت النتائج توقعاتنا، حيث علق كل من الموظفين والضيوف على كيفية تعزيز الأزياء الموحدة لتجربة العافية الشاملة.
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">سارة الفارسي</p>
              <p className="text-indigo-300">مديرة السبا، فندق خمس نجوم الرياض</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-right">دراسات حالة ذات صلة</h2>
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
                    <p className="text-gray-700 text-right">كيف حولت UNEOM صالون تجميل راقي في الرياض بأزياء موحدة مخصصة تعكس المكانة الفاخرة</p>
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
                      src="/images/healthcare/healthcare_medical_uniform.jpg" 
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
                    <p className="text-gray-700 text-right">كيف رفعت UNEOM الخدمات التجميلية في مستشفى بجدة من خلال أزياء طبية متطورة تجمع بين المعايير والأناقة</p>
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
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت جاهز لتحويل تجربة الضيافة لديك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تصمم UNEOM أزياء موحدة فاخرة وعملية ترفع من مكانة علامتك التجارية وتعزز تجارب كل من الضيوف والموظفين.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/ar/contact" className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              طلب استشارة
            </Link>
            <Link href="/ar/industries/hospitality" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              استكشاف حلول الضيافة
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 