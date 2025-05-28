import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  CogIcon,
  BeakerIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'تطورات الملابس الواقية الصناعية: ابتكارات تقنية متقدمة | مدونة يونيوم',
  description: 'اكتشف أحدث التطورات في تقنيات الملابس الواقية الصناعية، من الأقمشة الذكية إلى أنظمة الحماية المتقدمة. دليل شامل للابتكارات التقنية في معدات الحماية الشخصية.',
  keywords: 'تطورات الملابس الواقية, ابتكارات الحماية الصناعية, تقنيات الأمان الصناعي, الأقمشة الذكية, معدات الحماية الشخصية',
  openGraph: {
    title: 'تطورات الملابس الواقية الصناعية: ابتكارات تقنية متقدمة',
    description: 'أحدث الابتكارات في تقنيات الحماية الصناعية والملابس الواقية المتطورة',
    images: ['/images/blog/industrial-protective-advances.jpg'],
    locale: 'ar_SA',
  },
  alternates: {
    canonical: '/ar/blog/industrial-protective-clothing-advances/',
    languages: {
      'en': '/blog/industrial-protective-clothing-advances/',
      'ar': '/ar/blog/industrial-protective-clothing-advances/',
    },
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'مقدمة عن تطورات الملابس الواقية' },
  { id: 'smart-fabrics', title: 'الأقمشة الذكية والتقنيات المدمجة' },
  { id: 'advanced-materials', title: 'المواد المتقدمة والنانو تكنولوجي' },
  { id: 'protection-systems', title: 'أنظمة الحماية المتكاملة' },
  { id: 'industry-applications', title: 'التطبيقات الصناعية المتخصصة' },
  { id: 'future-trends', title: 'اتجاهات المستقبل والابتكارات القادمة' },
  { id: 'implementation', title: 'استراتيجيات التطبيق والتنفيذ' }
]

const smartFabricTechnologies = [
  {
    technology: 'أقمشة مراقبة العلامات الحيوية',
    description: 'أقمشة مدمجة بأجهزة استشعار لمراقبة معدل ضربات القلب ودرجة الحرارة',
    benefits: [
      'مراقبة مستمرة لحالة العامل الصحية',
      'إنذار مبكر عند الإجهاد الحراري',
      'تحسين السلامة في البيئات الخطرة',
      'بيانات في الوقت الفعلي للإدارة'
    ],
    applications: 'الصناعات البترولية، المناجم، البيئات عالية الحرارة'
  },
  {
    technology: 'الأقمشة ذاتية التنظيف',
    description: 'تقنية النانو التي تمنع التصاق الأوساخ والملوثات',
    benefits: [
      'تقليل تكاليف التنظيف والصيانة',
      'حماية أطول من الملوثات',
      'تحسين النظافة الشخصية',
      'مقاومة البقع والروائح'
    ],
    applications: 'الصناعات الكيميائية، معالجة الأغذية، البيئات الملوثة'
  },
  {
    technology: 'أقمشة التحكم في درجة الحرارة',
    description: 'مواد تتكيف مع درجة الحرارة المحيطة لتوفير راحة مثلى',
    benefits: [
      'تنظيم تلقائي لدرجة حرارة الجسم',
      'تحسين الراحة والإنتاجية',
      'توفير الطاقة في التكييف',
      'تقليل الإجهاد الحراري'
    ],
    applications: 'العمل في الهواء الطلق، الصناعات الثقيلة، البيئات المتغيرة'
  },
  {
    technology: 'الأقمشة المضادة للكهرباء الساكنة',
    description: 'تقنيات متقدمة لتبديد الشحنات الكهربائية بأمان',
    benefits: [
      'حماية من الانفجارات الكهربائية',
      'منع تلف المعدات الحساسة',
      'تحسين السلامة في البيئات الخطرة',
      'مطابقة للمعايير الدولية'
    ],
    applications: 'صناعة الإلكترونيات، المختبرات، البيئات القابلة للاشتعال'
  }
]

const advancedMaterials = [
  {
    material: 'ألياف الجرافين',
    properties: 'قوة فائقة، توصيل حراري ممتاز، مرونة عالية',
    advantages: [
      'أقوى 200 مرة من الفولاذ',
      'خفيف الوزن ومرن',
      'مقاوم للحرارة والكيماويات',
      'توصيل كهربائي متحكم فيه'
    ],
    applications: 'الحماية من الصدمات، البيئات عالية الحرارة'
  },
  {
    material: 'النانو سيراميك',
    properties: 'مقاومة حرارية عالية، خفة في الوزن، صلابة فائقة',
    advantages: [
      'حماية من درجات حرارة تصل إلى 1200°م',
      'مقاومة للتآكل والأحماض',
      'عزل حراري ممتاز',
      'متانة طويلة المدى'
    ],
    applications: 'صناعة المعادن، الأفران الصناعية، اللحام'
  },
  {
    material: 'البوليمرات الذكية',
    properties: 'تغيير الخصائص حسب البيئة، ذاكرة شكلية',
    advantages: [
      'تكيف مع الظروف المتغيرة',
      'إصلاح ذاتي للأضرار الطفيفة',
      'مرونة في التطبيق',
      'كفاءة في الاستخدام'
    ],
    applications: 'البيئات المتغيرة، الحماية التكيفية'
  },
  {
    material: 'الألياف المعدنية المتقدمة',
    properties: 'مقاومة القطع، حماية من الإشعاع، توصيل كهربائي',
    advantages: [
      'حماية من الجروح والقطع',
      'مقاومة الإشعاع الكهرومغناطيسي',
      'متانة استثنائية',
      'خصائص مضادة للبكتيريا'
    ],
    applications: 'الصناعات النووية، المختبرات، الأمن'
  }
]

const protectionSystems = [
  {
    system: 'أنظمة التهوية المدمجة',
    description: 'أنظمة تهوية شخصية مدمجة في الملابس الواقية',
    features: [
      'مراوح صغيرة عالية الكفاءة',
      'فلاتر هواء متقدمة',
      'تحكم ذكي في التدفق',
      'بطاريات طويلة المدى'
    ],
    benefits: 'تحسين الراحة، منع الإجهاد الحراري، حماية من الملوثات'
  },
  {
    system: 'أنظمة الإنذار المبكر',
    description: 'أجهزة استشعار متعددة للكشف عن المخاطر',
    features: [
      'كشف الغازات السامة',
      'مراقبة مستويات الأكسجين',
      'تنبيهات اهتزازية وصوتية',
      'إرسال إشارات الطوارئ'
    ],
    benefits: 'حماية استباقية، استجابة سريعة للطوارئ، تقليل المخاطر'
  },
  {
    system: 'أنظمة تتبع الموقع',
    description: 'تقنيات GPS وRFID لتتبع العمال في المواقع الخطرة',
    features: [
      'تحديد الموقع بدقة عالية',
      'مراقبة الحركة والنشاط',
      'إنذار عند دخول مناطق خطرة',
      'سجل تاريخي للمسارات'
    ],
    benefits: 'تحسين السلامة، استجابة طوارئ أسرع، إدارة أفضل للقوى العاملة'
  },
  {
    system: 'أنظمة الاتصال المدمجة',
    description: 'تقنيات اتصال لاسلكية مدمجة في معدات الحماية',
    features: [
      'اتصال صوتي واضح',
      'مقاومة للضوضاء',
      'اتصال جماعي',
      'تسجيل المحادثات'
    ],
    benefits: 'تنسيق أفضل، استجابة سريعة، تحسين الكفاءة'
  }
]

const industryApplications = [
  {
    industry: 'الصناعات البترولية والغاز',
    challenges: [
      'مخاطر الانفجار والحريق',
      'التعرض للمواد الكيميائية',
      'البيئات عالية الضغط',
      'العمل في أماكن مغلقة'
    ],
    solutions: [
      'أقمشة مقاومة للهب ومضادة للكهرباء الساكنة',
      'أنظمة تنفس مستقلة مدمجة',
      'حماية من الضغط العالي',
      'أجهزة كشف الغازات المتقدمة'
    ]
  },
  {
    industry: 'التعدين والمحاجر',
    challenges: [
      'الغبار والجسيمات الدقيقة',
      'مخاطر الانهيار',
      'البيئات منخفضة الإضاءة',
      'المعدات الثقيلة'
    ],
    solutions: [
      'فلاتر تنفس متطورة',
      'حماية من الصدمات والسقوط',
      'إضاءة LED مدمجة',
      'مواد عاكسة عالية الوضوح'
    ]
  },
  {
    industry: 'الصناعات الكيميائية',
    challenges: [
      'التعرض للأحماض والقواعد',
      'الأبخرة السامة',
      'التفاعلات الكيميائية',
      'التلوث البيئي'
    ],
    solutions: [
      'مواد مقاومة للكيماويات',
      'أنظمة تنقية هواء شخصية',
      'حماية شاملة للجسم',
      'أنظمة إزالة التلوث'
    ]
  },
  {
    industry: 'الطاقة النووية',
    challenges: [
      'الإشعاع المؤين',
      'التلوث الإشعاعي',
      'البيئات عالية الأمان',
      'إجراءات صارمة'
    ],
    solutions: [
      'مواد مقاومة للإشعاع',
      'أنظمة مراقبة الجرعات',
      'حماية شاملة محكمة',
      'أنظمة إزالة التلوث المتقدمة'
    ]
  }
]

const futureTrends = [
  {
    trend: 'الذكاء الاصطناعي المدمج',
    description: 'دمج الذكاء الاصطناعي في معدات الحماية للتنبؤ بالمخاطر',
    timeline: '2025-2027',
    impact: 'تحسين السلامة بنسبة 60% من خلال التنبؤ المبكر'
  },
  {
    trend: 'الطباعة ثلاثية الأبعاد المخصصة',
    description: 'إنتاج معدات حماية مخصصة لكل عامل باستخدام الطباعة ثلاثية الأبعاد',
    timeline: '2024-2026',
    impact: 'تحسين الراحة والحماية بنسبة 40%'
  },
  {
    trend: 'المواد ذاتية الإصلاح',
    description: 'تطوير مواد قادرة على إصلاح الأضرار الطفيفة تلقائياً',
    timeline: '2026-2028',
    impact: 'تقليل تكاليف الصيانة بنسبة 50%'
  },
  {
    trend: 'الواقع المعزز للتدريب',
    description: 'استخدام الواقع المعزز في تدريب العمال على استخدام معدات الحماية',
    timeline: '2024-2025',
    impact: 'تحسين فعالية التدريب بنسبة 70%'
  }
]

const implementationStrategies = [
  {
    phase: 'التقييم والتخطيط',
    duration: '4-6 أسابيع',
    activities: [
      'تحليل المخاطر الحالية في مكان العمل',
      'تقييم معدات الحماية الموجودة',
      'تحديد الاحتياجات التقنية المطلوبة',
      'وضع خطة التطوير والتنفيذ'
    ]
  },
  {
    phase: 'البحث والتطوير',
    duration: '8-12 أسبوع',
    activities: [
      'البحث عن أحدث التقنيات المتاحة',
      'اختبار النماذج الأولية',
      'تقييم الفعالية والتكلفة',
      'تطوير المواصفات النهائية'
    ]
  },
  {
    phase: 'التجريب والاختبار',
    duration: '6-8 أسابيع',
    activities: [
      'تطبيق تجريبي على مجموعة محدودة',
      'جمع البيانات والتغذية الراجعة',
      'تحليل الأداء والسلامة',
      'إجراء التعديلات المطلوبة'
    ]
  },
  {
    phase: 'التطبيق الشامل',
    duration: '12-16 أسبوع',
    activities: [
      'تدريب جميع العاملين',
      'توزيع المعدات الجديدة',
      'تطبيق أنظمة المراقبة',
      'تقييم النتائج والتحسين المستمر'
    ]
  }
]

export default function IndustrialProtectiveClothingAdvancesPage() {
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
            <span className="text-gray-900">تطورات الملابس الواقية الصناعية</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                ابتكارات تقنية
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                حماية متقدمة
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              تطورات الملابس الواقية الصناعية: ابتكارات تقنية متقدمة
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              استكشف أحدث التطورات والابتكارات في تقنيات الملابس الواقية الصناعية، من الأقمشة الذكية إلى أنظمة الحماية المتكاملة التي تعيد تعريف معايير السلامة المهنية.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>فريق الخبراء التقنيين</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>20 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>4,892 مشاهدة</span>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">فهرس المحتويات</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
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
                src="/images/blog/industrial-protective-advances.jpg"
                alt="تطورات الملابس الواقية الصناعية"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة عن تطورات الملابس الواقية</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تشهد صناعة الملابس الواقية الصناعية ثورة تقنية حقيقية، حيث تتطور التقنيات والمواد المستخدمة بوتيرة متسارعة لتوفير مستويات حماية أعلى وراحة أكبر للعاملين في البيئات الصناعية الخطرة. هذه التطورات لا تقتصر على تحسين المواد التقليدية، بل تشمل دمج التقنيات الذكية والذكاء الاصطناعي في معدات الحماية الشخصية.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    من الأقمشة النانوية المتقدمة إلى أنظمة المراقبة المدمجة، تعيد هذه الابتكارات تعريف مفهوم السلامة المهنية وتفتح آفاقاً جديدة لحماية العمال في الصناعات عالية المخاطر. في هذا المقال، نستكشف أحدث هذه التطورات وتأثيرها على مستقبل السلامة الصناعية.
                  </p>
                  
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <BoltIcon className="h-6 w-6 text-orange-600 mt-1 ml-3" />
                      <div>
                        <h3 className="font-semibold text-orange-900 mb-2">أبرز التطورات التقنية</h3>
                        <ul className="text-orange-800 space-y-1 text-sm">
                          <li>• الأقمشة الذكية مع أجهزة استشعار مدمجة</li>
                          <li>• مواد النانو تكنولوجي للحماية المتقدمة</li>
                          <li>• أنظمة الإنذار المبكر والمراقبة الذكية</li>
                          <li>• تقنيات التكيف الذاتي مع البيئة المحيطة</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="smart-fabrics" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">الأقمشة الذكية والتقنيات المدمجة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تمثل الأقمشة الذكية نقلة نوعية في عالم الملابس الواقية، حيث تدمج التقنيات الإلكترونية المتقدمة مع المواد التقليدية:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {smartFabricTechnologies.map((tech, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start mb-4">
                          <BeakerIcon className="h-6 w-6 text-blue-600 mt-1 ml-3" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{tech.technology}</h3>
                            <p className="text-gray-600 text-sm">{tech.description}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-green-900 mb-2">الفوائد الرئيسية:</h4>
                            <ul className="text-green-800 text-sm space-y-1">
                              {tech.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900 mb-2">التطبيقات:</h4>
                            <p className="text-blue-800 text-sm">{tech.applications}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="advanced-materials" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">المواد المتقدمة والنانو تكنولوجي</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تطوير مواد جديدة بخصائص فائقة يعيد تعريف إمكانيات الحماية الصناعية:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {advancedMaterials.map((material, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{material.material}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{material.properties}</p>
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2">المزايا:</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            {material.advantages.map((advantage, advantageIndex) => (
                              <li key={advantageIndex}>• {advantage}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-blue-800 text-sm"><strong>التطبيقات:</strong> {material.applications}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="protection-systems" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">أنظمة الحماية المتكاملة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    الانتقال من الحماية السلبية إلى أنظمة حماية ذكية ومتكاملة:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {protectionSystems.map((system, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{system.system}</h3>
                        <p className="text-gray-700 mb-4">{system.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">المميزات التقنية:</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              {system.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">الفوائد:</h4>
                            <p className="text-gray-700 text-sm">{system.benefits}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="industry-applications" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">التطبيقات الصناعية المتخصصة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تطبيق التقنيات المتقدمة في مختلف القطاعات الصناعية:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {industryApplications.map((industry, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">{industry.industry}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-red-900 mb-2">التحديات الرئيسية:</h4>
                            <ul className="text-red-800 text-sm space-y-1">
                              {industry.challenges.map((challenge, challengeIndex) => (
                                <li key={challengeIndex}>• {challenge}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-900 mb-2">الحلول التقنية:</h4>
                            <ul className="text-green-800 text-sm space-y-1">
                              {industry.solutions.map((solution, solutionIndex) => (
                                <li key={solutionIndex}>• {solution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="future-trends" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">اتجاهات المستقبل والابتكارات القادمة</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    نظرة على مستقبل تقنيات الحماية الصناعية والابتكارات المتوقعة:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {futureTrends.map((trend, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-purple-900">{trend.trend}</h3>
                          <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">{trend.timeline}</span>
                        </div>
                        <p className="text-purple-800 text-sm mb-3">{trend.description}</p>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-purple-900 text-sm"><strong>التأثير المتوقع:</strong> {trend.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="implementation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">استراتيجيات التطبيق والتنفيذ</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    خطة شاملة لتطبيق التقنيات المتقدمة في الملابس الواقية:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {implementationStrategies.map((phase, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">{phase.duration}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center">
                              <CogIcon className="h-4 w-4 text-gray-600 ml-2" />
                              <span className="text-gray-700 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تريد تطبيق أحدث تقنيات الحماية في منشأتك؟</h3>
                  <p className="text-gray-700 mb-4">
                    يونيوم في المقدمة لتوفير أحدث تقنيات الملابس الواقية الصناعية المتطورة.
                  </p>
                  <Link 
                    href="/ar/shop/industrial-uniforms"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    استكشف الحلول المتقدمة
                    <ArrowRightIcon className="mr-2 h-4 w-4" />
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
                      <p className="text-gray-600 text-sm">دليل شامل للمعايير واللوائح الصناعية</p>
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
                      <p className="text-gray-600 text-sm">التقنيات الذكية في الأزياء الأمنية المستقبلية</p>
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