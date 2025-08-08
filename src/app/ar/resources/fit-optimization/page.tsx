import React from 'react';
;import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AdjustmentsHorizontalIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'دليل تحسين المقاسات للأزياء المهنية | موارد يونيوم',
  description: 'دليل شامل لتحسين مقاسات الأزياء المهنية في المؤسسات السعودية. استراتيجيات متقدمة لضمان الراحة والأداء الأمثل للموظفين.',
  keywords: 'تحسين المقاسات, الأزياء المهنية, قياس الملابس, الراحة المهنية, تخصيص الأزياء, إدارة المقاسات',
  openGraph: {
    title: 'دليل تحسين المقاسات للأزياء المهنية | موارد يونيوم',
    description: 'دليل شامل لتحسين مقاسات الأزياء المهنية في المؤسسات السعودية',
    images: ['/images/resources/fit-optimization-hero.jpg']}}

export default function FitOptimizationPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative h-full flex items-center justify-center">
                <div>
                  <AdjustmentsHorizontalIcon className="h-16 w-16 text-white mx-auto mb-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    دليل تحسين المقاسات
                  </h1>
                  <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    استراتيجيات متقدمة لضمان المقاس المثالي للأزياء المهنية
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">أهمية تحسين المقاسات في بيئة العمل</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                يُعد تحسين مقاسات الأزياء المهنية عاملاً حاسماً في نجاح أي برنامج للزي الموحد. المقاس المناسب لا يؤثر فقط على مظهر الموظفين المهني، بل يلعب دوراً مهماً في راحتهم، إنتاجيتهم، وثقتهم بأنفسهم. في المملكة العربية السعودية، حيث تتنوع أشكال الجسم والتفضيلات الثقافية، تصبح الحاجة إلى نهج مدروس ومرن لتحسين المقاسات أمراً بالغ الأهمية.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">رضا الموظفين</h3>
                  <p className="text-gray-600">زيادة الراحة والثقة في بيئة العمل</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ChartBarIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">تحسين الإنتاجية</h3>
                  <p className="text-gray-600">ملابس مريحة تعزز الأداء المهني</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CogIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">تقليل التكاليف</h3>
                  <p className="text-gray-600">تقليل الحاجة للاستبدال والتعديلات</p>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Process */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600 ml-3" />
                عملية تقييم المقاسات
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                تقييم المقاسات الشامل هو الخطوة الأولى نحو برنامج ناجح للأزياء المهنية. هذه العملية تتطلب فهماً عميقاً لاحتياجات المؤسسة، تنوع أشكال الجسم، والمتطلبات الوظيفية المختلفة.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">مراحل التقييم</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">التحليل الديموغرافي</h4>
                        <p className="text-gray-600 text-sm">دراسة توزيع المقاسات الحالي في المؤسسة</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">تحليل المتطلبات الوظيفية</h4>
                        <p className="text-gray-600 text-sm">فهم احتياجات كل قسم ونوع عمل</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">القياس الدقيق</h4>
                        <p className="text-gray-600 text-sm">أخذ قياسات شاملة ودقيقة للموظفين</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold mb-1">التحليل والتوصيات</h4>
                        <p className="text-gray-600 text-sm">وضع خطة شاملة لتحسين المقاسات</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">أدوات القياس المتقدمة</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                        <span>تقنيات المسح ثلاثي الأبعاد</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                        <span>أنظمة القياس الرقمية</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                        <span>تطبيقات الهواتف الذكية للقياس</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                        <span>قواعد بيانات المقاسات الذكية</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                        <span>تحليل البيانات التنبؤي</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Size Optimization Strategies */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <AdjustmentsHorizontalIcon className="h-8 w-8 text-green-600 ml-3" />
                استراتيجيات تحسين المقاسات
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                تحسين المقاسات يتطلب نهجاً متعدد الأوجه يجمع بين التقنيات المتقدمة، فهم احتياجات الموظفين، والمرونة في التطبيق. هذه الاستراتيجيات تضمن حصول كل موظف على المقاس المثالي.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">التخصيص الفردي</h3>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• قياسات مخصصة لكل موظف</li>
                    <li>• تعديلات حسب الاحتياجات الخاصة</li>
                    <li>• مراعاة التفضيلات الشخصية</li>
                    <li>• خيارات متعددة للمقاس الواحد</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-900">النظم الذكية</h3>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• خوارزميات تحليل المقاسات</li>
                    <li>• توقع الاحتياجات المستقبلية</li>
                    <li>• تحسين مستمر للمخزون</li>
                    <li>• تقارير تحليلية شاملة</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-900">المرونة التشغيلية</h3>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>• خيارات تعديل سريعة</li>
                    <li>• برامج استبدال مرنة</li>
                    <li>• خدمات تعديل في الموقع</li>
                    <li>• دعم فني متخصص</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">نصيحة مهمة</h3>
                <p className="text-yellow-800">
                  تذكر أن المقاس المثالي ليس فقط عن الأبعاد الصحيحة، بل أيضاً عن الراحة، الحركة الطبيعية، والثقة التي يشعر بها الموظف عند ارتداء الزي المهني.
                </p>
              </div>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <DocumentTextIcon className="h-8 w-8 text-orange-600 ml-3" />
                دليل التطبيق العملي
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                التطبيق الناجح لبرنامج تحسين المقاسات يتطلب تخطيطاً دقيقاً، تنفيذاً مرحلياً، ومتابعة مستمرة. هذا الدليل يوضح الخطوات العملية للتطبيق.
              </p>

              <div className="space-y-8">
                <div className="border-r-4 border-blue-500 pr-6">
                  <h3 className="text-2xl font-semibold mb-4">المرحلة الأولى: التخطيط والإعداد</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">تحديد الأهداف</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• تحسين رضا الموظفين بنسبة محددة</li>
                        <li>• تقليل شكاوى المقاسات</li>
                        <li>• تحسين المظهر المهني العام</li>
                        <li>• تقليل تكاليف الاستبدال</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">تشكيل الفريق</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• مدير المشروع</li>
                        <li>• خبير قياسات</li>
                        <li>• ممثل الموارد البشرية</li>
                        <li>• مسؤول المشتريات</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-r-4 border-green-500 pr-6">
                  <h3 className="text-2xl font-semibold mb-4">المرحلة الثانية: جمع البيانات والتحليل</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">جمع البيانات</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• مسح شامل للموظفين</li>
                        <li>• قياسات دقيقة</li>
                        <li>• تحليل الشكاوى الحالية</li>
                        <li>• دراسة أنماط الاستخدام</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">التحليل المتقدم</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• تحليل إحصائي للمقاسات</li>
                        <li>• تحديد الفجوات</li>
                        <li>• توقع الاحتياجات</li>
                        <li>• وضع التوصيات</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-r-4 border-purple-500 pr-6">
                  <h3 className="text-2xl font-semibold mb-4">المرحلة الثالثة: التطبيق والمتابعة</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">التطبيق التدريجي</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• بدء بمجموعة تجريبية</li>
                        <li>• تطبيق على مراحل</li>
                        <li>• تدريب الفرق المختصة</li>
                        <li>• توثيق العمليات</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">المراقبة والتحسين</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• متابعة دورية للنتائج</li>
                        <li>• جمع التغذية الراجعة</li>
                        <li>• تحليل البيانات المستمر</li>
                        <li>• تحسينات مستمرة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Solutions */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <CogIcon className="h-8 w-8 text-blue-600 ml-3" />
                الحلول التقنية المتقدمة
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                التقنيات الحديثة تلعب دوراً محورياً في تحسين دقة وكفاءة عمليات تحسين المقاسات. من المسح ثلاثي الأبعاد إلى الذكاء الاصطناعي، هذه الأدوات تحول طريقة تعاملنا مع المقاسات.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">تقنيات المسح والقياس</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">المسح ثلاثي الأبعاد</h4>
                      <p className="text-gray-600 text-sm">قياسات دقيقة في ثوانٍ معدودة مع نمذجة ثلاثية الأبعاد للجسم</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">تطبيقات الهواتف الذكية</h4>
                      <p className="text-gray-600 text-sm">حلول قياس محمولة وسهلة الاستخدام للموظفين</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">أجهزة القياس الرقمية</h4>
                      <p className="text-gray-600 text-sm">أدوات قياس متطورة لضمان الدقة والاتساق</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-900">أنظمة إدارة البيانات</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">قواعد البيانات الذكية</h4>
                      <p className="text-gray-600 text-sm">تخزين وتحليل بيانات المقاسات بطريقة ذكية ومنظمة</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">التحليل التنبؤي</h4>
                      <p className="text-gray-600 text-sm">توقع الاحتياجات المستقبلية وتحسين إدارة المخزون</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">التقارير التفاعلية</h4>
                      <p className="text-gray-600 text-sm">لوحات معلومات شاملة لمتابعة الأداء والنتائج</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI and Benefits */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <ArrowTrendingUpIcon className="h-8 w-8 text-green-600 ml-3" />
                العائد على الاستثمار والفوائد
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                الاستثمار في تحسين المقاسات يحقق عوائد ملموسة على المدى القصير والطويل. من تحسين رضا الموظفين إلى تقليل التكاليف التشغيلية، الفوائد متعددة ومؤثرة.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">85%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">تحسين رضا الموظفين</h3>
                  <p className="text-gray-600 text-sm">زيادة ملحوظة في مستوى الرضا عن الزي المهني</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">40%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">تقليل التكاليف</h3>
                  <p className="text-gray-600 text-sm">انخفاض في تكاليف الاستبدال والتعديلات</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">60%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">تحسين الكفاءة</h3>
                  <p className="text-gray-600 text-sm">تسريع عمليات الطلب والتوزيع</p>
                </div>
              </div>

              <div className="bg-green-50 border-r-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">دراسة حالة: نجاح تطبيق تحسين المقاسات</h3>
                <p className="text-green-800">
                  إحدى الشركات الكبرى في المملكة حققت توفيراً سنوياً يزيد عن 2 مليون ريال من خلال تطبيق برنامج شامل لتحسين المقاسات، مع تحسن ملحوظ في رضا الموظفين والمظهر المهني العام.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">ابدأ رحلة تحسين المقاسات مع يونيوم</h2>
              <p className="text-xl mb-8 text-primary-100">
                استفد من خبرتنا المتقدمة في تحسين مقاسات الأزياء المهنية وحقق نتائج استثنائية لمؤسستك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ar/contact"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  احصل على استشارة مجانية
                </Link>
                <Link
                  href="/ar/services/measurement-services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  تعرف على خدماتنا
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
