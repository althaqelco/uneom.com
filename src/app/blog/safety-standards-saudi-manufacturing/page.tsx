import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  CogIcon, 
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CalendarIcon,
  UserIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'معايير السلامة في التصنيع السعودي: دليل شامل للامتثال والجودة | UNEOM',
  description: 'دليل متخصص لمعايير السلامة في قطاع التصنيع السعودي. تعرف على متطلبات SASO، معايير الجودة، وأفضل الممارسات لضمان السلامة المهنية.',
  keywords: 'معايير السلامة السعودية, SASO, التصنيع الآمن, السلامة المهنية, معايير الجودة السعودية, التصنيع في السعودية, رؤية 2030',
  openGraph: {
    title: 'معايير السلامة في التصنيع السعودي: دليل الامتثال الشامل',
    description: 'دليل متخصص لمعايير السلامة والجودة في قطاع التصنيع السعودي',
    images: ['/images/manufacturing/saudi-safety-standards.jpg'],
  },
}

const safetyStandards = [
  {
    icon: ShieldCheckIcon,
    title: 'معايير SASO الأساسية',
    description: 'الهيئة السعودية للمواصفات والمقاييس والجودة تضع المعايير الأساسية للسلامة',
    requirements: [
      'شهادات الجودة المعتمدة',
      'اختبارات السلامة الدورية',
      'توثيق العمليات التصنيعية',
      'مراقبة الجودة المستمرة'
    ],
    color: 'blue'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'السلامة المهنية',
    description: 'حماية العمال وضمان بيئة عمل آمنة في جميع مراحل التصنيع',
    requirements: [
      'معدات الحماية الشخصية',
      'تدريب السلامة المستمر',
      'إجراءات الطوارئ',
      'فحص المعدات الدوري'
    ],
    color: 'red'
  },
  {
    icon: DocumentCheckIcon,
    title: 'ضمان الجودة',
    description: 'أنظمة شاملة لضمان جودة المنتجات وفقاً للمعايير الدولية',
    requirements: [
      'نظام إدارة الجودة ISO 9001',
      'اختبارات المواد الخام',
      'مراقبة العمليات الإنتاجية',
      'فحص المنتج النهائي'
    ],
    color: 'green'
  },
  {
    icon: CogIcon,
    title: 'أمان المعدات',
    description: 'صيانة وتشغيل المعدات الصناعية وفقاً لأعلى معايير السلامة',
    requirements: [
      'صيانة وقائية منتظمة',
      'معايرة المعدات',
      'تدريب المشغلين',
      'أنظمة الإنذار المبكر'
    ],
    color: 'purple'
  }
]

const complianceFramework = [
  {
    category: 'التراخيص والتصاريح',
    items: [
      'ترخيص المصنع من وزارة الصناعة',
      'شهادة السلامة من الدفاع المدني',
      'تصريح البيئة من الهيئة العامة للأرصاد',
      'رخصة العمل من وزارة الموارد البشرية'
    ],
    icon: '📋'
  },
  {
    category: 'المعايير التقنية',
    items: [
      'مطابقة المواصفات السعودية',
      'اعتماد المختبرات المعتمدة',
      'شهادات المطابقة للمنتجات',
      'تقارير الاختبار الدورية'
    ],
    icon: '⚙️'
  },
  {
    category: 'السلامة البيئية',
    items: [
      'إدارة النفايات الصناعية',
      'مراقبة الانبعاثات',
      'معالجة المياه الصناعية',
      'استخدام المواد الصديقة للبيئة'
    ],
    icon: '🌱'
  },
  {
    category: 'التدريب والتأهيل',
    items: [
      'برامج تدريب السلامة',
      'شهادات الكفاءة المهنية',
      'التدريب على الطوارئ',
      'التطوير المستمر للمهارات'
    ],
    icon: '🎓'
  }
]

const vision2030Impact = [
  {
    title: 'التحول الرقمي',
    description: 'دمج التقنيات الحديثة في أنظمة السلامة والمراقبة',
    benefits: ['مراقبة آنية للعمليات', 'تحليل البيانات المتقدم', 'الذكاء الاصطناعي في السلامة'],
    icon: '💻'
  },
  {
    title: 'الاستدامة',
    description: 'التركيز على الممارسات المستدامة والصديقة للبيئة',
    benefits: ['تقليل النفايات', 'كفاءة الطاقة', 'المواد المعاد تدويرها'],
    icon: '♻️'
  },
  {
    title: 'الابتكار',
    description: 'تشجيع الابتكار في تقنيات السلامة والتصنيع',
    benefits: ['تقنيات جديدة للسلامة', 'أتمتة العمليات', 'حلول ذكية'],
    icon: '💡'
  }
]

const bestPractices = [
  {
    title: 'إدارة المخاطر',
    practices: [
      'تحديد وتقييم المخاطر بانتظام',
      'وضع خطط للتخفيف من المخاطر',
      'مراجعة وتحديث إجراءات السلامة',
      'تدريب الموظفين على إدارة المخاطر'
    ]
  },
  {
    title: 'التحسين المستمر',
    practices: [
      'مراجعة دورية لأنظمة السلامة',
      'تحليل الحوادث والاستفادة منها',
      'تطبيق أفضل الممارسات العالمية',
      'الاستثمار في التقنيات الحديثة'
    ]
  },
  {
    title: 'الثقافة التنظيمية',
    practices: [
      'بناء ثقافة السلامة في المؤسسة',
      'تشجيع الإبلاغ عن المخاطر',
      'مكافأة السلوك الآمن',
      'القيادة بالمثال في السلامة'
    ]
  }
]

export default function SafetyStandardsSaudiManufacturingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-gray-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">مايو 25، 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">خبراء السلامة - UNEOM</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              معايير السلامة في
              <span className="text-blue-600 block">التصنيع السعودي</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              دليل شامل لمعايير السلامة والجودة في قطاع التصنيع السعودي، يغطي متطلبات SASO، 
              أفضل الممارسات، وكيفية تحقيق الامتثال الكامل لرؤية المملكة 2030.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/industries/manufacturing"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                حلول التصنيع
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                استشارة متخصصة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  أهمية معايير السلامة في التصنيع
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  تلعب معايير السلامة دوراً محورياً في نجاح القطاع الصناعي السعودي. مع رؤية المملكة 2030 
                  والتوجه نحو التنويع الاقتصادي، أصبح الالتزام بأعلى معايير السلامة والجودة ضرورة حتمية.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) تضع الإطار التنظيمي الذي يضمن 
                  سلامة المنتجات وحماية المستهلكين، مما يعزز من تنافسية الصناعات السعودية محلياً وعالمياً.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/manufacturing/saudi-safety-standards.jpg"
                    alt="معايير السلامة في التصنيع السعودي"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المعايير الأساسية للسلامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              أربعة محاور رئيسية تشكل أساس السلامة في التصنيع السعودي
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {safetyStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <standard.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {standard.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">المتطلبات الأساسية:</p>
                      <ul className="space-y-2">
                        {standard.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              إطار الامتثال الشامل
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              المتطلبات الأساسية للامتثال الكامل لمعايير السلامة السعودية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {complianceFramework.map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{framework.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {framework.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {framework.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تأثير رؤية 2030 على معايير السلامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              كيف تشكل رؤية المملكة 2030 مستقبل السلامة في التصنيع
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vision2030Impact.map((impact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{impact.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {impact.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">الفوائد الرئيسية:</p>
                  <ul className="space-y-2">
                    {impact.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أفضل الممارسات في السلامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استراتيجيات مجربة لتحقيق أعلى معايير السلامة
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {practice.title}
                </h3>
                <ul className="space-y-4">
                  {practice.practices.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold ml-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            احصل على استشارة متخصصة في معايير السلامة
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            فريق خبرائنا جاهز لمساعدتك في تحقيق الامتثال الكامل لمعايير السلامة السعودية 
            وضمان أعلى مستويات الجودة في منتجاتك.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              احصل على استشارة مجانية
              <ArrowRightIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/industries/manufacturing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              حلول التصنيع
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مقالات ذات صلة
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog/workwear-innovations-saudi-factories" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/manufacturing/workwear-innovations.jpg"
                    alt="ابتكارات ملابس العمل في المصانع السعودية"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    ابتكارات ملابس العمل في المصانع
                  </h3>
                  <p className="text-gray-600 text-sm">
                    أحدث التطورات في تقنيات ملابس العمل الصناعية وتأثيرها على السلامة.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/industrial-protective-clothing-advances" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/manufacturing/protective-clothing.jpg"
                    alt="تطورات الملابس الواقية الصناعية"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    تطورات الملابس الواقية الصناعية
                  </h3>
                  <p className="text-gray-600 text-sm">
                    كيف تساهم التقنيات الحديثة في تحسين فعالية الملابس الواقية.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/manufacturing-attire" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/manufacturing/manufacturing-uniforms.jpg"
                    alt="ملابس التصنيع المتخصصة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    مجموعة ملابس التصنيع
                  </h3>
                  <p className="text-gray-600 text-sm">
                    اكتشف مجموعتنا المتخصصة من ملابس العمل الصناعية الآمنة.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}