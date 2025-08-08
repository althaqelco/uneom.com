import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'معايير السلامة في الأزياء الأمنية: دليل شامل للجودة والحماية | مدونة يونيوم',
  description: 'تعرف على معايير السلامة والجودة المطلوبة في تصنيع الأزياء الأمنية. دليل شامل عن المواصفات الدولية والمحلية للأزياء الأمنية في السعودية.',
  keywords: 'معايير السلامة الأزياء الأمنية, مواصفات الأزياء الأمنية, جودة الأزياء الأمنية السعودية, معايير الأمان في الملابس',
  openGraph: {
    title: 'معايير السلامة في الأزياء الأمنية: دليل شامل للجودة والحماية',
    description: 'دليل شامل عن معايير السلامة والجودة في تصنيع الأزياء الأمنية',
    images: ['/images/blog/security-uniform-standards.jpg'],
    locale: 'ar_SA'},
  alternates: {
    canonical: '/ar/blog/security-uniform-safety-standards/',
    languages: {
      'en': '/blog/security-uniform-safety-standards/',
      'ar': '/ar/blog/security-uniform-safety-standards/'}}}

const tableOfContents = [
  { id: 'introduction', title: 'أهمية معايير السلامة في الأزياء الأمنية' },
  { id: 'international-standards', title: 'المعايير الدولية للأزياء الأمنية' },
  { id: 'saudi-standards', title: 'المعايير السعودية والمحلية' },
  { id: 'material-requirements', title: 'متطلبات المواد والأقمشة' },
  { id: 'testing-procedures', title: 'إجراءات الاختبار والفحص' },
  { id: 'compliance', title: 'الامتثال والشهادات المطلوبة' }
]

const internationalStandards = [
  {
    standard: 'ISO 13688',
    description: 'المعيار الدولي للملابس الواقية - المتطلبات العامة',
    scope: 'يحدد المتطلبات الأساسية لجميع أنواع الملابس الواقية'
  },
  {
    standard: 'EN 343',
    description: 'الحماية من الطقس والأمطار',
    scope: 'معايير مقاومة الماء والرطوبة في الأزياء الأمنية'
  },
  {
    standard: 'ANSI/ISEA 107',
    description: 'معايير الرؤية العالية',
    scope: 'متطلبات الألوان والعلامات العاكسة للسلامة'
  },
  {
    standard: 'NIJ 0101.06',
    description: 'معايير الدروع الواقية من الرصاص',
    scope: 'مواصفات السترات الواقية ومستويات الحماية'
  }
]

const materialRequirements = [
  {
    property: 'مقاومة التمزق',
    requirement: 'حد أدنى 300 نيوتن',
    importance: 'ضمان المتانة أثناء الاستخدام المكثف'
  },
  {
    property: 'مقاومة الاحتكاك',
    requirement: '50,000 دورة كحد أدنى',
    importance: 'تحمل الاستخدام اليومي والحركة المستمرة'
  },
  {
    property: 'ثبات الألوان',
    requirement: 'درجة 4-5 حسب مقياس الرمادي',
    importance: 'الحفاظ على المظهر المهني'
  },
  {
    property: 'مقاومة الحريق',
    requirement: 'معدل انتشار اللهب < 100 مم/دقيقة',
    importance: 'السلامة في البيئات عالية المخاطر'
  }
]

const testingProcedures = [
  'اختبار قوة الشد والتمزق',
  'فحص ثبات الألوان تحت الضوء والغسيل',
  'اختبار مقاومة الاحتكاك والتآكل',
  'فحص الخصائص المضادة للبكتيريا',
  'اختبار مقاومة الماء والرطوبة',
  'فحص الخصائص الحرارية والعزل'
]

const complianceChecklist = [
  'شهادة المطابقة للمعايير الدولية',
  'تقرير اختبار المواد من مختبر معتمد',
  'شهادة الجودة من الشركة المصنعة',
  'وثائق التتبع وسلسلة التوريد',
  'شهادة السلامة البيئية',
  'تقرير الفحص النهائي للمنتج'
]

export default function SecurityUniformSafetyStandardsPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/ar" className="hover:text-blue-600">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/blog" className="hover:text-blue-600">المدونة</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">معايير السلامة في الأزياء الأمنية</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                معايير الجودة
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                السلامة المهنية
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              معايير السلامة في الأزياء الأمنية: دليل شامل للجودة والحماية
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              تعرف على المعايير الدولية والمحلية المطلوبة لضمان جودة وسلامة الأزياء الأمنية في السعودية
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>م. سارة المطيري</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>12 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>1,923 مشاهدة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">محتويات المقال</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog/security-uniform-standards.jpg"
                alt="معايير السلامة في الأزياء الأمنية"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">أهمية معايير السلامة في الأزياء الأمنية</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تلعب معايير السلامة دوراً حيوياً في ضمان جودة وفعالية الأزياء الأمنية. هذه المعايير ليست مجرد متطلبات تنظيمية، بل هي ضمانات أساسية لحماية العاملين في القطاع الأمني وضمان أدائهم الأمثل في مختلف الظروف والبيئات.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    في المملكة العربية السعودية، تزداد أهمية الالتزام بهذه المعايير مع التطور المستمر في القطاع الأمني ومتطلبات الجودة العالية. الأزياء الأمنية التي تلتزم بالمعايير الدولية والمحلية تضمن الحماية الفعالة والراحة والمظهر المهني المطلوب.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <ShieldCheckIcon className="h-6 w-6 text-blue-600 mt-1 ml-3" />
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-2">لماذا معايير السلامة مهمة؟</h3>
                        <ul className="text-blue-800 space-y-1 text-sm">
                          <li>• ضمان الحماية الفعالة للعاملين</li>
                          <li>• تحسين الأداء والراحة أثناء العمل</li>
                          <li>• الامتثال للقوانين واللوائح المحلية</li>
                          <li>• تعزيز الثقة والمصداقية المهنية</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="international-standards" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">المعايير الدولية للأزياء الأمنية</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تعتمد صناعة الأزياء الأمنية على مجموعة من المعايير الدولية المعترف بها عالمياً. هذه المعايير تضمن التوافق والجودة عبر الأسواق المختلفة:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {internationalStandards.map((standard, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{standard.standard}</h3>
                        <p className="text-gray-700 mb-2">{standard.description}</p>
                        <p className="text-sm text-blue-600"><strong>النطاق:</strong> {standard.scope}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="saudi-standards" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">المعايير السعودية والمحلية</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تطبق المملكة العربية السعودية معايير صارمة للأزياء الأمنية تتماشى مع المعايير الدولية مع مراعاة الظروف المحلية:
                  </p>
                  
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-green-900 mb-3">المتطلبات السعودية الخاصة:</h3>
                    <ul className="list-disc list-inside text-green-800 space-y-2">
                      <li>مقاومة الحرارة العالية (حتى 50 درجة مئوية)</li>
                      <li>حماية من الأشعة فوق البنفسجية (UPF 50+)</li>
                      <li>خصائص مضادة للبكتيريا والفطريات</li>
                      <li>سهولة التنظيف والصيانة</li>
                      <li>الامتثال للمواصفات الثقافية والدينية</li>
                    </ul>
                  </div>
                </section>

                <section id="material-requirements" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">متطلبات المواد والأقمشة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تخضع المواد المستخدمة في تصنيع الأزياء الأمنية لمتطلبات صارمة لضمان الأداء والسلامة:
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-right">الخاصية</th>
                          <th className="border border-gray-300 px-4 py-2 text-right">المتطلب</th>
                          <th className="border border-gray-300 px-4 py-2 text-right">الأهمية</th>
                        </tr>
                      </thead>
                      <tbody>
                        {materialRequirements.map((req, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{req.property}</td>
                            <td className="border border-gray-300 px-4 py-2">{req.requirement}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{req.importance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="testing-procedures" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">إجراءات الاختبار والفحص</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تخضع الأزياء الأمنية لسلسلة من الاختبارات الصارمة لضمان مطابقتها للمعايير المطلوبة:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {testingProcedures.map((procedure, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3" />
                        <span className="text-gray-700">{procedure}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 ml-3" />
                      <div>
                        <h3 className="font-semibold text-yellow-900 mb-2">ملاحظة مهمة</h3>
                        <p className="text-yellow-800 text-sm">
                          يجب إجراء جميع الاختبارات في مختبرات معتمدة ومعترف بها دولياً لضمان صحة النتائج ومصداقيتها.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="compliance" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">الامتثال والشهادات المطلوبة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    للتأكد من امتثال الأزياء الأمنية للمعايير المطلوبة، يجب الحصول على الشهادات والوثائق التالية:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {complianceChecklist.map((item, index) => (
                      <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 ml-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">نصائح للامتثال:</h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-2 text-sm">
                      <li>التعامل مع موردين معتمدين ومعترف بهم</li>
                      <li>طلب شهادات الاختبار قبل الشراء</li>
                      <li>التحقق من صحة الشهادات مع الجهات المصدرة</li>
                      <li>الاحتفاظ بجميع الوثائق للمراجعة المستقبلية</li>
                    </ul>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تبحث عن أزياء أمنية معتمدة؟</h3>
                  <p className="text-gray-700 mb-4">
                    يونيوم تقدم أزياء أمنية عالية الجودة تلتزم بجميع المعايير الدولية والمحلية للسلامة والجودة.
                  </p>
                  <Link 
                    href="/ar/shop/security-uniforms"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    تصفح الأزياء الأمنية المعتمدة
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/ar/blog/bulletproof-protection-technologies" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/bulletproof-protection-technologies.jpg"
                      alt="تقنيات الحماية المضادة للرصاص"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">تقنيات الحماية المضادة للرصاص</h4>
                      <p className="text-gray-600 text-sm">دليل شامل عن أحدث تقنيات الحماية والدروع الواقية</p>
                    </div>
                  </div>
                </Link>
                <Link href="/ar/blog/smart-security-uniforms-future" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/smart-security-uniforms.jpg"
                      alt="مستقبل الأزياء الأمنية الذكية"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">مستقبل الأزياء الأمنية الذكية</h4>
                      <p className="text-gray-600 text-sm">استكشف التقنيات الذكية في أزياء الأمن المستقبلية</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}