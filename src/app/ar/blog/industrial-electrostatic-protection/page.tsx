import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  ShieldCheckIcon,
  CogIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الحماية من الكهرباء الساكنة في البيئات الصناعية | يونيوم للزي الموحد',
  description: 'دليل شامل للحماية من الكهرباء الساكنة في البيئات الصناعية السعودية. تقنيات متقدمة ومعايير السلامة للملابس المضادة للكهرباء الساكنة.',
  keywords: 'الحماية من الكهرباء الساكنة, الملابس المضادة للكهرباء الساكنة, السلامة الصناعية, معدات الحماية الشخصية, البيئات الخطرة, الصناعات البتروكيماوية',
  openGraph: {
    title: 'الحماية من الكهرباء الساكنة في البيئات الصناعية | يونيوم',
    description: 'دليل شامل للحماية من الكهرباء الساكنة في البيئات الصناعية السعودية',
    images: ['/images/blog/industrial-electrostatic-protection.jpg']}}

export default function IndustrialElectrostaticProtectionPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            
            {/* Header */}
            <div className="relative h-96 bg-gradient-to-br from-blue-600 to-purple-700">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div>
                  <BoltIcon className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    الحماية من الكهرباء الساكنة في البيئات الصناعية
                  </h1>
                  <p className="text-xl text-blue-100 max-w-3xl">
                    دليل شامل للحماية من مخاطر الكهرباء الساكنة في الصناعات السعودية
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  تُعد الحماية من الكهرباء الساكنة أحد أهم جوانب السلامة في البيئات الصناعية، خاصة في الصناعات البتروكيماوية والكيميائية والإلكترونية. في المملكة العربية السعودية، حيث تزدهر هذه الصناعات، تصبح الحاجة إلى حلول حماية متقدمة ومعايير سلامة صارمة أمراً بالغ الأهمية.
                </p>
                
                <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 mb-8">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 ml-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-900 mb-2">تحذير مهم</h3>
                      <p className="text-yellow-800">
                        يمكن أن تؤدي الكهرباء الساكنة إلى انفجارات وحرائق في البيئات التي تحتوي على مواد قابلة للاشتعال، مما يجعل استخدام الملابس المضادة للكهرباء الساكنة ضرورة حتمية وليس مجرد احتياط.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Understanding Static Electricity */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <BoltIcon className="h-8 w-8 text-blue-600 ml-3" />
                  فهم الكهرباء الساكنة في البيئات الصناعية
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  الكهرباء الساكنة هي تراكم الشحنات الكهربائية على سطح المواد نتيجة الاحتكاك أو الفصل. في البيئات الصناعية، يمكن أن تتولد هذه الشحنات من خلال عمليات متنوعة مثل نقل السوائل، طحن المواد، أو حتى حركة العمال أنفسهم.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">مصادر توليد الكهرباء الساكنة</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• احتكاك الملابس بالجسم أو المعدات</li>
                      <li>• تدفق السوائل عبر الأنابيب</li>
                      <li>• عمليات الطحن والخلط</li>
                      <li>• نقل المساحيق والمواد الجافة</li>
                      <li>• استخدام الأحزمة الناقلة</li>
                      <li>• عمليات الرش والطلاء</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">المخاطر المحتملة</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• اشتعال الأبخرة القابلة للاشتعال</li>
                      <li>• انفجار الغازات والغبار</li>
                      <li>• تلف المعدات الإلكترونية الحساسة</li>
                      <li>• صدمات كهربائية للعمال</li>
                      <li>• تعطيل العمليات الإنتاجية</li>
                      <li>• مخاطر الحرائق في المناطق الخطرة</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Anti-Static Clothing Technology */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600 ml-3" />
                  تقنيات الملابس المضادة للكهرباء الساكنة
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  تعتمد الملابس المضادة للكهرباء الساكنة على تقنيات متقدمة لتبديد الشحنات الكهربائية بأمان قبل أن تصل إلى مستويات خطرة. هذه التقنيات تشمل استخدام ألياف موصلة، معالجات كيميائية خاصة، وتصاميم هندسية محددة.
                </p>

                <h3 className="text-2xl font-semibold mb-4">أنواع الألياف المضادة للكهرباء الساكنة</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-900">الألياف الموصلة المدمجة</h4>
                    <p className="text-blue-800 text-sm mb-3">
                      ألياف من الكربون أو الفولاذ المقاوم للصدأ مدمجة في النسيج لتوفير مسار موصل للشحنات.
                    </p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• مقاومة دائمة للغسيل</li>
                      <li>• فعالية عالية في التبديد</li>
                      <li>• متانة طويلة المدى</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-green-900">المعالجات الكيميائية</h4>
                    <p className="text-green-800 text-sm mb-3">
                      مواد كيميائية خاصة تُطبق على النسيج لزيادة الموصلية وتقليل تراكم الشحنات.
                    </p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• تطبيق سهل على الأقمشة الموجودة</li>
                      <li>• تكلفة أقل نسبياً</li>
                      <li>• قد تحتاج إعادة تطبيق دورية</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-900">الألياف الطبيعية المعدلة</h4>
                    <p className="text-purple-800 text-sm mb-3">
                      ألياف طبيعية مثل القطن معدلة كيميائياً لتحسين خصائصها المضادة للكهرباء الساكنة.
                    </p>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• راحة عالية للمستخدم</li>
                      <li>• تهوية طبيعية ممتازة</li>
                      <li>• صديقة للبيئة</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Standards and Regulations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-600 ml-3" />
                  المعايير والأنظمة في المملكة العربية السعودية
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  تلتزم المملكة العربية السعودية بأعلى معايير السلامة الدولية في مجال الحماية من الكهرباء الساكنة، مع تطبيق أنظمة صارمة تضمن سلامة العمال والمنشآت الصناعية.
                </p>

                <h3 className="text-2xl font-semibold mb-4">المعايير الدولية المطبقة</h3>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">معايير IEC</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• IEC 61340-5-1: حماية الأجهزة الإلكترونية</li>
                        <li>• IEC 61340-4-3: اختبار مقاومة السطح</li>
                        <li>• IEC 61340-2-3: طرق قياس المقاومة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">معايير EN</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• EN 1149-1: خصائص الكهرباء الساكنة</li>
                        <li>• EN 1149-3: قياس تسرب الشحنة</li>
                        <li>• EN 1149-5: متطلبات الأداء</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">متطلبات الامتثال السعودية</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3">الصناعات البتروكيماوية</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• شهادات SASO للملابس الواقية</li>
                      <li>• اختبارات دورية للمقاومة الكهربائية</li>
                      <li>• توثيق برامج التدريب والصيانة</li>
                      <li>• تقييم المخاطر الشامل</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3">الصناعات الإلكترونية</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• بروتوكولات ESD صارمة</li>
                      <li>• مناطق محمية من الكهرباء الساكنة</li>
                      <li>• معدات اختبار معتمدة</li>
                      <li>• تدريب متخصص للعمال</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Implementation Best Practices */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <CogIcon className="h-8 w-8 text-orange-600 ml-3" />
                  أفضل الممارسات للتطبيق
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  التطبيق الناجح لبرنامج الحماية من الكهرباء الساكنة يتطلب نهجاً شاملاً يغطي اختيار المعدات، التدريب، الصيانة، والمراقبة المستمرة.
                </p>

                <h3 className="text-2xl font-semibold mb-4">خطوات التطبيق</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">1</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">تقييم المخاطر الشامل</h4>
                      <p className="text-gray-700">
                        تحديد جميع مصادر الكهرباء الساكنة المحتملة في بيئة العمل وتقييم مستوى المخاطر لكل منطقة.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">2</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">اختيار الملابس المناسبة</h4>
                      <p className="text-gray-700">
                        انتقاء الملابس المضادة للكهرباء الساكنة بناءً على نوع المخاطر، مستوى الحماية المطلوب، وراحة العامل.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">3</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">برنامج التدريب الشامل</h4>
                      <p className="text-gray-700">
                        تدريب العمال على الاستخدام الصحيح، الصيانة، والتعامل مع حالات الطوارئ المتعلقة بالكهرباء الساكنة.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold ml-4 mt-1">4</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">المراقبة والصيانة</h4>
                      <p className="text-gray-700">
                        وضع برنامج دوري لفحص واختبار فعالية الملابس المضادة للكهرباء الساكنة وضمان استمرار أدائها.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testing and Maintenance */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <BeakerIcon className="h-8 w-8 text-purple-600 ml-3" />
                  الاختبار والصيانة
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  الاختبار المنتظم والصيانة الدورية ضروريان لضمان استمرار فعالية الملابس المضادة للكهرباء الساكنة. هذا يشمل اختبارات المقاومة، فحص التآكل، وتقييم الأداء العام.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">اختبارات الأداء</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• قياس المقاومة السطحية</li>
                      <li>• اختبار تسرب الشحنة</li>
                      <li>• فحص التوصيل الكهربائي</li>
                      <li>• تقييم الثبات بعد الغسيل</li>
                      <li>• اختبار المتانة الميكانيكية</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">جدولة الصيانة</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• فحص يومي للتلف الظاهري</li>
                      <li>• اختبار أسبوعي للمقاومة</li>
                      <li>• تقييم شهري شامل</li>
                      <li>• مراجعة سنوية للبرنامج</li>
                      <li>• استبدال دوري حسب الحاجة</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-r-4 border-red-500 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">علامات التحذير للاستبدال</h3>
                  <ul className="text-red-800 space-y-1">
                    <li>• زيادة المقاومة عن الحدود المسموحة</li>
                    <li>• تلف الألياف الموصلة</li>
                    <li>• تآكل أو تمزق في النسيج</li>
                    <li>• فقدان الخصائص المضادة للكهرباء الساكنة</li>
                    <li>• عدم اجتياز اختبارات الأداء</li>
                  </ul>
                </div>
              </section>

              {/* Future Innovations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <ArrowTrendingUpIcon className="h-8 w-8 text-green-600 ml-3" />
                  الابتكارات المستقبلية
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  مجال الحماية من الكهرباء الساكنة يشهد تطورات مستمرة مع ظهور تقنيات جديدة تهدف إلى تحسين الأداء، الراحة، والفعالية من حيث التكلفة.
                </p>

                <h3 className="text-2xl font-semibold mb-4">التقنيات الناشئة</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">النانو تكنولوجي</h4>
                    <p className="text-gray-700 text-sm">
                      استخدام جسيمات النانو لتحسين الخصائص المضادة للكهرباء الساكنة مع الحفاظ على راحة النسيج.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">الألياف الذكية</h4>
                    <p className="text-gray-700 text-sm">
                      ألياف تتكيف مع مستوى الرطوبة والحرارة لتحسين الأداء المضاد للكهرباء الساكنة تلقائياً.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3">أجهزة الاستشعار المدمجة</h4>
                    <p className="text-gray-700 text-sm">
                      أجهزة استشعار صغيرة مدمجة في الملابس لمراقبة مستوى الشحنات الكهربائية في الوقت الفعلي.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion and CTA */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">الخلاصة والتوصيات</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  الحماية من الكهرباء الساكنة في البيئات الصناعية ليست مجرد متطلب تنظيمي، بل ضرورة حيوية لضمان سلامة العمال والمنشآت. مع التطور المستمر في التقنيات والمعايير، تصبح الحاجة إلى شركاء موثوقين يفهمون التحديات المحلية والدولية أمراً بالغ الأهمية.
                </p>

                <div className="bg-primary-50 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">احمِ منشأتك مع حلول يونيوم المتقدمة</h3>
                  <p className="text-gray-700 mb-6">
                    استفد من خبرتنا في توفير أحدث حلول الحماية من الكهرباء الساكنة المصممة خصيصاً للبيئات الصناعية السعودية. نقدم استشارات شاملة، منتجات معتمدة، وخدمات ما بعد البيع المتميزة.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/ar/contact" 
                      className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      احصل على استشارة مجانية
                    </Link>
                    <Link 
                      href="/ar/shop/industrial-uniforms" 
                      className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                    >
                      تصفح منتجاتنا
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </article>
        </div>
      </main>
    </div>
  )
}