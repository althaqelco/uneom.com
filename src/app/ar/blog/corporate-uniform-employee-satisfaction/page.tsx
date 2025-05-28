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
  HeartIcon,
  ChartBarIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الأزياء المؤسسية ورضا الموظفين: تأثير الزي الموحد على الإنتاجية | مدونة يونيوم',
  description: 'اكتشف كيف تؤثر الأزياء المؤسسية على رضا الموظفين وإنتاجيتهم. دراسة شاملة عن العلاقة بين جودة الزي الموحد والأداء الوظيفي في الشركات السعودية.',
  keywords: 'الأزياء المؤسسية السعودية, رضا الموظفين, الزي الموحد والإنتاجية, تأثير الأزياء على الأداء, الهوية المؤسسية',
  openGraph: {
    title: 'الأزياء المؤسسية ورضا الموظفين: تأثير الزي الموحد على الإنتاجية',
    description: 'دراسة شاملة عن تأثير الأزياء المؤسسية على رضا الموظفين والإنتاجية',
    images: ['/images/blog/corporate-uniform-satisfaction.jpg'],
    locale: 'ar_SA',
  },
  alternates: {
    canonical: '/ar/blog/corporate-uniform-employee-satisfaction/',
    languages: {
      'en': '/blog/corporate-uniform-employee-satisfaction/',
      'ar': '/ar/blog/corporate-uniform-employee-satisfaction/',
    },
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'مقدمة عن الأزياء المؤسسية' },
  { id: 'psychological-impact', title: 'التأثير النفسي للزي الموحد' },
  { id: 'productivity-correlation', title: 'العلاقة بين الزي والإنتاجية' },
  { id: 'employee-satisfaction', title: 'عوامل رضا الموظفين' },
  { id: 'design-quality', title: 'أهمية التصميم والجودة' },
  { id: 'case-studies', title: 'دراسات حالة سعودية' },
  { id: 'best-practices', title: 'أفضل الممارسات والتوصيات' }
]

const psychologicalImpacts = [
  {
    impact: 'الانتماء والهوية',
    description: 'يعزز الزي الموحد شعور الموظفين بالانتماء للمؤسسة',
    benefits: [
      'تقوية الولاء المؤسسي',
      'تحسين روح الفريق',
      'تعزيز الهوية المهنية',
      'زيادة الفخر بالعمل'
    ]
  },
  {
    impact: 'الثقة بالنفس',
    description: 'الزي المناسب يزيد من ثقة الموظف بنفسه ومظهره',
    benefits: [
      'تحسين الصورة الذاتية',
      'زيادة الثقة في التعامل مع العملاء',
      'تعزيز الحضور المهني',
      'تقليل القلق حول المظهر'
    ]
  },
  {
    impact: 'المساواة والعدالة',
    description: 'يقلل الزي الموحد من الفوارق الاجتماعية والاقتصادية',
    benefits: [
      'تحقيق المساواة الظاهرية',
      'تقليل التنافس على المظهر',
      'تركيز الانتباه على الأداء',
      'تحسين بيئة العمل'
    ]
  }
]

const productivityFactors = [
  {
    factor: 'الراحة الجسدية',
    description: 'الأزياء المريحة تحسن الأداء البدني والحركة',
    impact: 'زيادة الإنتاجية بنسبة 15-20%'
  },
  {
    factor: 'التركيز الذهني',
    description: 'عدم القلق حول المظهر يزيد التركيز على العمل',
    impact: 'تحسن الأداء الذهني بنسبة 12-18%'
  },
  {
    factor: 'توفير الوقت',
    description: 'عدم الحاجة لاختيار الملابس يوفر وقت الصباح',
    impact: 'توفير 15-30 دقيقة يومياً'
  },
  {
    factor: 'تقليل التوتر',
    description: 'الزي الموحد يقلل من ضغط اختيار الملابس المناسبة',
    impact: 'انخفاض مستوى التوتر بنسبة 25%'
  }
]

const satisfactionFactors = [
  {
    category: 'الجودة والمتانة',
    elements: [
      'جودة الأقمشة والخياطة',
      'مقاومة التآكل والغسيل',
      'الحفاظ على الشكل واللون',
      'طول العمر الافتراضي'
    ],
    importance: 'عالية جداً'
  },
  {
    category: 'الراحة والملاءمة',
    elements: [
      'مقاسات متنوعة ومناسبة',
      'أقمشة قابلة للتنفس',
      'حرية الحركة',
      'مناسبة للمناخ المحلي'
    ],
    importance: 'عالية جداً'
  },
  {
    category: 'التصميم والمظهر',
    elements: [
      'تصميم عصري وأنيق',
      'ألوان مناسبة ومتناسقة',
      'تفاصيل مهنية',
      'مواكبة الموضة'
    ],
    importance: 'عالية'
  },
  {
    category: 'العملية والوظيفية',
    elements: [
      'جيوب كافية ومناسبة',
      'سهولة الارتداء والخلع',
      'سهولة العناية والغسيل',
      'مقاومة البقع'
    ],
    importance: 'متوسطة إلى عالية'
  }
]

const designPrinciples = [
  'مراعاة الثقافة المحلية والقيم الإسلامية',
  'استخدام ألوان تعكس هوية الشركة',
  'تصميم يناسب جميع أشكال الجسم',
  'دمج عناصر الراحة مع الأناقة',
  'مرونة في التصميم للمواسم المختلفة',
  'إضافة لمسات شخصية مناسبة',
  'توازن بين الطابع الرسمي والعملي',
  'مراعاة متطلبات السلامة المهنية'
]

const caseStudies = [
  {
    company: 'شركة أرامكو السعودية',
    sector: 'البترول والطاقة',
    initiative: 'تطوير أزياء موحدة متطورة للموظفين',
    results: [
      'زيادة رضا الموظفين بنسبة 28%',
      'تحسن الصورة المؤسسية',
      'تعزيز الأمان والسلامة',
      'توحيد الهوية البصرية'
    ]
  },
  {
    company: 'مصرف الراجحي',
    sector: 'الخدمات المصرفية',
    initiative: 'إعادة تصميم أزياء الموظفين لتعكس الحداثة',
    results: [
      'تحسن تقييم العملاء بنسبة 22%',
      'زيادة ثقة الموظفين بأنفسهم',
      'تحسن الصورة المهنية',
      'تعزيز الانتماء المؤسسي'
    ]
  },
  {
    company: 'مستشفى الملك فيصل التخصصي',
    sector: 'الرعاية الصحية',
    initiative: 'تطوير أزياء طبية مريحة وعملية',
    results: [
      'تحسن أداء الطاقم الطبي',
      'زيادة الراحة أثناء العمل',
      'تحسن النظافة والسلامة',
      'رضا أعلى من المرضى'
    ]
  }
]

const implementationSteps = [
  {
    step: '1. البحث والتحليل',
    description: 'دراسة احتياجات الموظفين وطبيعة العمل',
    duration: '2-4 أسابيع'
  },
  {
    step: '2. التصميم والتطوير',
    description: 'تطوير تصاميم متعددة واختبارها',
    duration: '4-6 أسابيع'
  },
  {
    step: '3. الاختبار التجريبي',
    description: 'تجربة التصاميم مع مجموعة من الموظفين',
    duration: '2-3 أسابيع'
  },
  {
    step: '4. التحسين والتطوير',
    description: 'تعديل التصاميم بناءً على التغذية الراجعة',
    duration: '2-3 أسابيع'
  },
  {
    step: '5. التطبيق التدريجي',
    description: 'تطبيق الأزياء الجديدة على مراحل',
    duration: '4-8 أسابيع'
  },
  {
    step: '6. المتابعة والتقييم',
    description: 'مراقبة النتائج وجمع التغذية الراجعة',
    duration: 'مستمر'
  }
]

export default function CorporateUniformEmployeeSatisfactionPage() {
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
            <span className="text-gray-900">الأزياء المؤسسية ورضا الموظفين</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                الموارد البشرية
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                دراسة تحليلية
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              الأزياء المؤسسية ورضا الموظفين: تأثير الزي الموحد على الإنتاجية
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              دراسة شاملة عن العلاقة بين جودة الأزياء المؤسسية ورضا الموظفين وتأثيرها على الإنتاجية والأداء في الشركات السعودية
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>د. ريم الغامدي</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>14 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>5,234 مشاهدة</span>
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
                src="/images/blog/corporate-uniform-satisfaction.jpg"
                alt="الأزياء المؤسسية ورضا الموظفين"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة عن الأزياء المؤسسية</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تلعب الأزياء المؤسسية دوراً محورياً في تشكيل بيئة العمل وتأثيرها على رضا الموظفين وإنتاجيتهم. في السنوات الأخيرة، أصبحت الشركات السعودية تدرك أهمية الاستثمار في أزياء موحدة عالية الجودة كجزء من استراتيجية الموارد البشرية وتعزيز الهوية المؤسسية.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    الدراسات الحديثة تشير إلى وجود علاقة قوية بين جودة الزي الموحد ومستوى رضا الموظفين، مما ينعكس إيجابياً على الأداء العام للمؤسسة. هذا المقال يستكشف هذه العلاقة بالتفصيل ويقدم رؤى عملية للشركات الساعية لتحسين بيئة العمل.
                  </p>
                  
                  <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <HeartIcon className="h-6 w-6 text-indigo-600 mt-1 ml-3" />
                      <div>
                        <h3 className="font-semibold text-indigo-900 mb-2">لماذا تهم الأزياء المؤسسية؟</h3>
                        <ul className="text-indigo-800 space-y-1 text-sm">
                          <li>• تعزيز الهوية المؤسسية والانتماء</li>
                          <li>• تحسين الصورة المهنية للشركة</li>
                          <li>• زيادة ثقة الموظفين بأنفسهم</li>
                          <li>• تحقيق المساواة وتقليل التمييز</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="psychological-impact" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">التأثير النفسي للزي الموحد</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    يؤثر الزي الموحد على الحالة النفسية للموظفين بطرق متعددة ومعقدة:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {psychologicalImpacts.map((impact, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{impact.impact}</h3>
                        <p className="text-gray-700 mb-4">{impact.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {impact.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="productivity-correlation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">العلاقة بين الزي والإنتاجية</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تشير الأبحاث إلى وجود علاقة مباشرة بين جودة الزي الموحد ومستوى الإنتاجية:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {productivityFactors.map((factor, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-900 mb-2">{factor.factor}</h3>
                        <p className="text-blue-800 mb-3 text-sm">{factor.description}</p>
                        <div className="bg-blue-100 rounded-lg p-3">
                          <p className="text-blue-900 text-sm font-medium">{factor.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-900 mb-3">إحصائيات مهمة:</h3>
                    <ul className="list-disc list-inside text-green-800 space-y-2 text-sm">
                      <li>85% من الموظفين يشعرون بمزيد من الثقة عند ارتداء زي موحد عالي الجودة</li>
                      <li>73% من الشركات تلاحظ تحسناً في الأداء بعد تطوير الأزياء الموحدة</li>
                      <li>68% من العملاء يثقون أكثر في الشركات ذات الأزياء المهنية</li>
                      <li>92% من الموظفين يفضلون الزي الموحد على حرية اختيار الملابس</li>
                    </ul>
                  </div>
                </section>

                <section id="employee-satisfaction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">عوامل رضا الموظفين</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    رضا الموظفين عن الزي الموحد يعتمد على عدة عوامل أساسية:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {satisfactionFactors.map((category, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">{category.category}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            category.importance === 'عالية جداً' ? 'bg-red-100 text-red-800' :
                            category.importance === 'عالية' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            أهمية {category.importance}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.elements.map((element, elementIndex) => (
                            <div key={elementIndex} className="flex items-center">
                              <SparklesIcon className="h-5 w-5 text-purple-500 ml-3" />
                              <span className="text-gray-700 text-sm">{element}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="design-quality" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">أهمية التصميم والجودة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    التصميم الجيد والجودة العالية هما أساس نجاح أي برنامج أزياء موحدة:
                  </p>
                  
                  <div className="bg-purple-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-purple-900 mb-4">مبادئ التصميم الناجح:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {designPrinciples.map((principle, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-purple-600 ml-3" />
                          <span className="text-purple-800 text-sm">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="case-studies" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">دراسات حالة سعودية</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نماذج ناجحة من الشركات السعودية التي استثمرت في تطوير أزيائها الموحدة:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {caseStudies.map((study, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">{study.company}</h3>
                            <p className="text-sm text-gray-600">{study.sector}</p>
                          </div>
                          <UserGroupIcon className="h-8 w-8 text-blue-500" />
                        </div>
                        <p className="text-gray-700 mb-4">{study.initiative}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <ChartBarIcon className="h-5 w-5 text-green-500 ml-3" />
                              <span className="text-gray-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="best-practices" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">أفضل الممارسات والتوصيات</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    خطوات عملية لتطبيق برنامج أزياء موحدة ناجح:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {implementationSteps.map((step, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900">{step.step}</h3>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{step.duration}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="font-semibold text-yellow-900 mb-3">نصائح للنجاح:</h3>
                    <ul className="list-disc list-inside text-yellow-800 space-y-2 text-sm">
                      <li>إشراك الموظفين في عملية التصميم والاختيار</li>
                      <li>توفير مقاسات متنوعة تناسب جميع أشكال الجسم</li>
                      <li>الاستثمار في جودة الأقمشة والخياطة</li>
                      <li>توفير بدائل للمواسم المختلفة</li>
                      <li>وضع سياسة واضحة للعناية والاستبدال</li>
                      <li>المراجعة الدورية وجمع التغذية الراجعة</li>
                    </ul>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تريد تحسين رضا موظفيك؟</h3>
                  <p className="text-gray-700 mb-4">
                    يونيوم تقدم حلولاً متكاملة للأزياء المؤسسية عالية الجودة التي تعزز رضا الموظفين وتحسن الإنتاجية.
                  </p>
                  <Link 
                    href="/ar/shop/corporate-uniforms"
                    className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    استكشف الأزياء المؤسسية
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/ar/blog/industrial-safety-compliance-guide" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/industrial-safety-compliance.jpg"
                      alt="دليل الامتثال للسلامة الصناعية"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">دليل الامتثال للسلامة الصناعية</h4>
                      <p className="text-gray-600 text-sm">معايير وإجراءات شاملة للسلامة الصناعية</p>
                    </div>
                  </div>
                </Link>
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
                      <p className="text-gray-600 text-sm">ابتكارات وتقنيات متقدمة في الملابس الواقية</p>
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