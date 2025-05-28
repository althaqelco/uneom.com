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
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'دليل الامتثال للسلامة الصناعية: معايير وإجراءات شاملة | مدونة يونيوم',
  description: 'دليل شامل للامتثال لمعايير السلامة الصناعية في السعودية. تعرف على اللوائح والمعايير المطلوبة للأزياء والمعدات الصناعية وإجراءات السلامة المهنية.',
  keywords: 'السلامة الصناعية السعودية, معايير الامتثال الصناعي, لوائح السلامة المهنية, الأزياء الصناعية الآمنة, إجراءات السلامة',
  openGraph: {
    title: 'دليل الامتثال للسلامة الصناعية: معايير وإجراءات شاملة',
    description: 'دليل شامل للامتثال لمعايير السلامة الصناعية والمهنية في السعودية',
    images: ['/images/blog/industrial-safety-compliance.jpg'],
    locale: 'ar_SA',
  },
  alternates: {
    canonical: '/ar/blog/industrial-safety-compliance-guide/',
    languages: {
      'en': '/blog/industrial-safety-compliance-guide/',
      'ar': '/ar/blog/industrial-safety-compliance-guide/',
    },
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'مقدمة عن السلامة الصناعية' },
  { id: 'saudi-regulations', title: 'اللوائح السعودية للسلامة الصناعية' },
  { id: 'international-standards', title: 'المعايير الدولية المعتمدة' },
  { id: 'uniform-requirements', title: 'متطلبات الأزياء الصناعية الآمنة' },
  { id: 'compliance-procedures', title: 'إجراءات الامتثال والتطبيق' },
  { id: 'inspection-audit', title: 'التفتيش والمراجعة' },
  { id: 'best-practices', title: 'أفضل الممارسات والتوصيات' }
]

const saudiRegulations = [
  {
    regulation: 'نظام العمل السعودي',
    description: 'المادة 121 - التزامات صاحب العمل بتوفير بيئة عمل آمنة',
    requirements: 'توفير معدات الحماية الشخصية والتدريب على السلامة'
  },
  {
    regulation: 'لائحة السلامة والصحة المهنية',
    description: 'اللائحة التنفيذية لنظام العمل - الباب السابع',
    requirements: 'معايير محددة للأزياء الواقية والمعدات الصناعية'
  },
  {
    regulation: 'معايير الهيئة السعودية للمواصفات',
    description: 'SASO - المواصفات القياسية للمعدات الصناعية',
    requirements: 'شهادات المطابقة والاختبارات المعتمدة'
  },
  {
    regulation: 'لوائح وزارة الصناعة والثروة المعدنية',
    description: 'متطلبات السلامة في المنشآت الصناعية',
    requirements: 'تطبيق أنظمة إدارة السلامة المتكاملة'
  }
]

const internationalStandards = [
  {
    standard: 'ISO 45001',
    title: 'نظم إدارة السلامة والصحة المهنية',
    scope: 'إطار شامل لإدارة مخاطر السلامة في مكان العمل'
  },
  {
    standard: 'ANSI/ISEA 107',
    title: 'معايير الملابس عالية الرؤية',
    scope: 'متطلبات الألوان والعلامات العاكسة للسلامة'
  },
  {
    standard: 'EN 388',
    title: 'حماية اليدين من المخاطر الميكانيكية',
    scope: 'معايير القفازات الواقية ومستويات الحماية'
  },
  {
    standard: 'NFPA 2112',
    title: 'معايير الملابس المقاومة للحريق',
    scope: 'متطلبات الأقمشة والتصميم للحماية من الحرائق'
  }
]

const uniformRequirements = [
  {
    category: 'الحماية من الحرارة',
    requirements: [
      'مقاومة الحريق حسب معيار NFPA 2112',
      'عزل حراري مناسب للبيئة',
      'تهوية كافية لمنع ارتفاع الحرارة',
      'مواد لا تذوب أو تلتصق بالجلد'
    ]
  },
  {
    category: 'الحماية الكيميائية',
    requirements: [
      'مقاومة المواد الكيميائية المحددة',
      'حواجز نفاذية مناسبة',
      'خياطة محكمة ومقاومة للتسرب',
      'سهولة إزالة التلوث'
    ]
  },
  {
    category: 'الحماية الميكانيكية',
    requirements: [
      'مقاومة التمزق والثقب',
      'حماية من الحواف الحادة',
      'مرونة في الحركة',
      'تعزيزات في المناطق الحرجة'
    ]
  },
  {
    category: 'الرؤية والتمييز',
    requirements: [
      'ألوان عالية الرؤية (أصفر، برتقالي)',
      'شرائط عاكسة معتمدة',
      'تباين لوني مناسب',
      'وضوح في جميع ظروف الإضاءة'
    ]
  }
]

const complianceProcedures = [
  {
    step: '1. تقييم المخاطر',
    description: 'تحديد وتحليل المخاطر في بيئة العمل',
    actions: [
      'مسح شامل لمكان العمل',
      'تحديد أنواع المخاطر المحتملة',
      'تقييم مستوى الخطر لكل نشاط',
      'توثيق نتائج التقييم'
    ]
  },
  {
    step: '2. اختيار المعدات المناسبة',
    description: 'انتقاء الأزياء والمعدات الواقية المطلوبة',
    actions: [
      'مطابقة المعدات مع نوع المخاطر',
      'التأكد من الشهادات المطلوبة',
      'اختبار الملاءمة والراحة',
      'التحقق من جودة التصنيع'
    ]
  },
  {
    step: '3. التدريب والتوعية',
    description: 'تدريب العاملين على الاستخدام الصحيح',
    actions: [
      'برامج تدريبية شاملة',
      'تعليمات الاستخدام والصيانة',
      'التوعية بأهمية السلامة',
      'تقييم فهم العاملين'
    ]
  },
  {
    step: '4. التطبيق والمراقبة',
    description: 'تنفيذ إجراءات السلامة ومراقبة الالتزام',
    actions: [
      'تطبيق السياسات بصرامة',
      'مراقبة دورية للالتزام',
      'تصحيح المخالفات فوراً',
      'تحديث الإجراءات حسب الحاجة'
    ]
  }
]

const inspectionChecklist = [
  'فحص حالة الأزياء الواقية دورياً',
  'التأكد من صلاحية شهادات المطابقة',
  'مراجعة سجلات التدريب والتوعية',
  'فحص فعالية إجراءات الطوارئ',
  'تقييم مستوى الالتزام بالسلامة',
  'مراجعة تقارير الحوادث والإصابات',
  'التحقق من توفر المعدات الاحتياطية',
  'فحص أنظمة الإنذار والإخلاء'
]

const bestPractices = [
  {
    practice: 'الصيانة الوقائية',
    description: 'برنامج منتظم لصيانة وفحص المعدات',
    benefits: 'تقليل الأعطال وضمان الفعالية المستمرة'
  },
  {
    practice: 'التحديث المستمر',
    description: 'مواكبة أحدث المعايير والتقنيات',
    benefits: 'تحسين مستوى الحماية والامتثال'
  },
  {
    practice: 'ثقافة السلامة',
    description: 'بناء ثقافة مؤسسية تركز على السلامة',
    benefits: 'تقليل الحوادث وزيادة الوعي'
  },
  {
    practice: 'التوثيق الشامل',
    description: 'حفظ سجلات مفصلة لجميع إجراءات السلامة',
    benefits: 'سهولة المراجعة والتحسين المستمر'
  }
]

export default function IndustrialSafetyComplianceGuidePage() {
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
            <span className="text-gray-900">دليل الامتثال للسلامة الصناعية</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                السلامة المهنية
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                دليل شامل
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              دليل الامتثال للسلامة الصناعية: معايير وإجراءات شاملة
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              دليل متكامل للامتثال لمعايير السلامة الصناعية في المملكة العربية السعودية وتطبيق أفضل الممارسات العالمية
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>م. عبدالله الشهري</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>20 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>4,123 مشاهدة</span>
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
                src="/images/blog/industrial-safety-compliance.jpg"
                alt="دليل الامتثال للسلامة الصناعية"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة عن السلامة الصناعية</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تُعد السلامة الصناعية من أهم الأولويات في القطاع الصناعي السعودي، خاصة مع التوسع الكبير في المشاريع الصناعية ضمن رؤية المملكة 2030. الامتثال لمعايير السلامة ليس فقط التزاماً قانونياً، بل استثماراً في حماية الأرواح والممتلكات وضمان استمرارية الإنتاج.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    هذا الدليل يقدم إطاراً شاملاً للامتثال لمعايير السلامة الصناعية، بدءاً من اللوائح المحلية وصولاً إلى أفضل الممارسات العالمية، مع التركيز على الأزياء والمعدات الواقية كعنصر أساسي في منظومة السلامة.
                  </p>
                  
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <ExclamationTriangleIcon className="h-6 w-6 text-orange-600 mt-1 ml-3" />
                      <div>
                        <h3 className="font-semibold text-orange-900 mb-2">أهمية الامتثال للسلامة الصناعية</h3>
                        <ul className="text-orange-800 space-y-1 text-sm">
                          <li>• حماية العاملين من الإصابات والأمراض المهنية</li>
                          <li>• تجنب الغرامات والعقوبات القانونية</li>
                          <li>• تحسين الإنتاجية وتقليل التكاليف</li>
                          <li>• تعزيز سمعة الشركة ومسؤوليتها الاجتماعية</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="saudi-regulations" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">اللوائح السعودية للسلامة الصناعية</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تحكم المملكة العربية السعودية السلامة الصناعية من خلال مجموعة شاملة من الأنظمة واللوائح:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {saudiRegulations.map((reg, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{reg.regulation}</h3>
                        <p className="text-gray-700 mb-3">{reg.description}</p>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-blue-800 text-sm"><strong>المتطلبات:</strong> {reg.requirements}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="international-standards" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">المعايير الدولية المعتمدة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تتبنى المملكة العديد من المعايير الدولية لضمان أعلى مستويات السلامة:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {internationalStandards.map((standard, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{standard.standard}</h3>
                        <h4 className="text-blue-600 font-medium mb-2">{standard.title}</h4>
                        <p className="text-gray-600 text-sm">{standard.scope}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="uniform-requirements" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">متطلبات الأزياء الصناعية الآمنة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تختلف متطلبات الأزياء الصناعية حسب نوع المخاطر في بيئة العمل:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {uniformRequirements.map((category, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.requirements.map((req, reqIndex) => (
                            <div key={reqIndex} className="flex items-center">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3" />
                              <span className="text-gray-700 text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="compliance-procedures" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">إجراءات الامتثال والتطبيق</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تطبيق معايير السلامة الصناعية يتطلب منهجية منظمة ومتدرجة:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {complianceProcedures.map((procedure, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-900 mb-3">{procedure.step}</h3>
                        <p className="text-blue-800 mb-4">{procedure.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {procedure.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center">
                              <CogIcon className="h-4 w-4 text-blue-600 ml-2" />
                              <span className="text-blue-700 text-sm">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="inspection-audit" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">التفتيش والمراجعة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    التفتيش الدوري والمراجعة المستمرة ضروريان لضمان فعالية إجراءات السلامة:
                  </p>
                  
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-yellow-900 mb-4">قائمة فحص السلامة الصناعية:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {inspectionChecklist.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <DocumentCheckIcon className="h-5 w-5 text-yellow-600 ml-3" />
                          <span className="text-yellow-800 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-practices" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">أفضل الممارسات والتوصيات</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تطبيق أفضل الممارسات يضمن تحقيق أقصى استفادة من استثمارات السلامة:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {bestPractices.map((practice, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{practice.practice}</h3>
                        <p className="text-gray-700 mb-3 text-sm">{practice.description}</p>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-green-800 text-sm"><strong>الفوائد:</strong> {practice.benefits}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-900 mb-3">نصائح للنجاح:</h3>
                    <ul className="list-disc list-inside text-green-800 space-y-2 text-sm">
                      <li>إشراك الإدارة العليا في برامج السلامة</li>
                      <li>تخصيص ميزانية كافية للسلامة والصحة المهنية</li>
                      <li>تطوير برامج تحفيزية للعاملين الملتزمين بالسلامة</li>
                      <li>الاستعانة بخبراء السلامة المعتمدين</li>
                      <li>تطبيق نظام إدارة السلامة المتكامل</li>
                    </ul>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تحتاج لحلول السلامة الصناعية؟</h3>
                  <p className="text-gray-700 mb-4">
                    يونيوم تقدم مجموعة شاملة من الأزياء والمعدات الصناعية المطابقة لأعلى معايير السلامة العالمية والمحلية.
                  </p>
                  <Link 
                    href="/ar/shop/industrial-uniforms"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    استكشف الأزياء الصناعية الآمنة
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/ar/blog/industrial-protective-clothing-advances" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/industrial-protective-clothing.jpg"
                      alt="تطورات الملابس الواقية الصناعية"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">تطورات الملابس الواقية الصناعية</h4>
                      <p className="text-gray-600 text-sm">أحدث التطورات في تقنيات الملابس الواقية الصناعية</p>
                    </div>
                  </div>
                </Link>
                <Link href="/ar/blog/corporate-uniform-employee-satisfaction" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/corporate-uniform-satisfaction.jpg"
                      alt="الأزياء المؤسسية ورضا الموظفين"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">الأزياء المؤسسية ورضا الموظفين</h4>
                      <p className="text-gray-600 text-sm">تأثير الأزياء المؤسسية على رضا وإنتاجية الموظفين</p>
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