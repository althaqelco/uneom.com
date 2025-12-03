import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  BeakerIcon,
  HeartIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الحجاب الطبي: التوازن بين المتطلبات الشرعية ومعايير الرعاية الصحية | يونيوم',
  description: 'دليل شامل لتصميم الحجاب الطبي الذي يلبي معايير مكافحة العدوى مع احترام متطلبات اللباس الإسلامي. تعرف على الأقمشة المضادة للميكروبات، ميزات السلامة، وأفضل الممارسات للحجاب الطبي في المستشفيات والعيادات السعودية.',
  keywords: 'الحجاب الطبي السعودية, تصميم حجاب الرعاية الصحية, حجاب مكافحة العدوى, لباس محتشم للمستشفى, حجاب مضاد للميكروبات, حجاب الممرضات, معايير حجاب الطبيبات, الزي الطبي الإسلامي, يونيفورم صحي محتشم',
  openGraph: {
    title: 'الحجاب الطبي: التوازن بين المتطلبات الشرعية ومعايير الرعاية الصحية',
    description: 'دليل خبراء لتصميم الحجاب الطبي الذي يلبي معايير مكافحة العدوى والسلامة للمهنيات الصحيات في السعودية',
    images: ['/images/healthcare/healthcare_hijab_doctor.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-06-01T08:00:00Z',
    authors: ['فريق الرعاية الصحية يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/medical-hijab-healthcare-standards/',
    languages: {
      'en': '/blog/medical-hijab-healthcare-standards/',
      'ar': '/ar/blog/medical-hijab-healthcare-standards/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'الإيمان يلتقي بالرعاية الصحية' },
  { id: 'infection-control', title: 'متطلبات مكافحة العدوى' },
  { id: 'design-features', title: 'ميزات التصميم الأساسية' },
  { id: 'fabric-technology', title: 'تقنية الأقمشة المضادة للميكروبات' },
  { id: 'department-guidelines', title: 'إرشادات حسب القسم' },
  { id: 'safety-standards', title: 'معايير السلامة والامتثال' },
  { id: 'implementation', title: 'التطبيق في المستشفى' },
  { id: 'care-maintenance', title: 'العناية والصيانة' }
]

const infectionControlStats = [
  {
    stat: '80%',
    description: 'من عدوى الرعاية الصحية تنتقل عبر الأيدي والملابس',
    source: 'إرشادات منظمة الصحة العالمية لعدوى الرعاية الصحية'
  },
  {
    stat: '99.9%',
    description: 'تقليل البكتيريا ممكن مع الأقمشة المضادة للميكروبات المعالجة بشكل صحيح',
    source: 'مجلة عدوى المستشفيات'
  },
  {
    stat: '47%',
    description: 'تقليل في التلوث عند استخدام أغطية رأس للاستعمال مرة واحدة مقارنة بالقابلة للاستخدام المتكرر في غرفة العمليات',
    source: 'المجلة الأمريكية لمكافحة العدوى'
  },
  {
    stat: '100%',
    description: 'من المنشآت الصحية السعودية تتطلب غطاء الرأس للطاقم النسائي',
    source: 'وزارة الصحة السعودية'
  }
]

const designFeatures = [
  {
    feature: 'نظام تثبيت آمن',
    icon: ShieldCheckIcon,
    description: 'تصاميم بدون دبابيس تقضي على مخاطر الأدوات الحادة وتحافظ على الوضع خلال الإجراءات',
    options: [
      'إغلاقات مغناطيسية (خارج مناطق الرنين)',
      'أزرار كباس مع أغطية قماش',
      'أنظمة ربط خلفي متكاملة',
      'فيلكرو مع بطانة ناعمة',
      'تصاميم قبعة داخلية مطاطية'
    ],
    importance: 'حرج'
  },
  {
    feature: 'تصميم التغطية الكاملة',
    icon: HeartIcon,
    description: 'تصاميم توفر تغطية كاملة مع تلبية المتطلبات السريرية',
    options: [
      'تغطية رقبة ممتدة',
      'خيارات تغطية الذقن',
      'عدم وجود فجوات أثناء الحركة',
      'تكامل آمن تحت السكراب',
      'أنظمة طبقات لغرفة العمليات'
    ],
    importance: 'أساسي'
  },
  {
    feature: 'مناطق التنفس',
    icon: SparklesIcon,
    description: 'تهوية استراتيجية تحافظ على الراحة خلال المناوبات الطويلة',
    options: [
      'ألواح شبكية في المناطق غير السريرية',
      'طبقات داخلية ماصة للرطوبة',
      'أقسام تاج قابلة للتنفس',
      'أقمشة منظمة للحرارة',
      'أشرطة ماصة للعرق'
    ],
    importance: 'عالي'
  },
  {
    feature: 'تصميم سهل اللبس/الخلع',
    icon: ClockIcon,
    description: 'إزالة سريعة للحالات الطارئة أو عند مغادرة المناطق الملوثة',
    options: [
      'أنظمة تحرير بسحبة واحدة',
      'أشكال مسبقة التشكيل',
      'دمج قماش مطاط',
      'مؤشرات واضحة للأمام/الخلف',
      'مقاسات مرمزة بالألوان'
    ],
    importance: 'حرج'
  },
  {
    feature: 'مقاومة السوائل',
    icon: BeakerIcon,
    description: 'حماية ضد الدم وسوائل الجسم والرذاذ الكيميائي',
    options: [
      'طبقة خارجية طاردة للسوائل',
      'بناء درزات محكمة',
      'تكامل واقي الرذاذ',
      'خيارات مقاومة للماء للجراحة',
      'أسطح سهلة التنظيف'
    ],
    importance: 'أساسي'
  }
]

const fabricTechnology = [
  {
    fabric: 'مزيج بوليستر مضاد للميكروبات',
    protection: 'ممتازة',
    comfort: 'جيدة',
    durability: '+200 غسلة',
    features: [
      'تقنية أيونات الفضة',
      'مقاومة الروائح',
      'خصائص جفاف سريع',
      'ثبات اللون'
    ],
    bestFor: 'تمريض الأجنحة العامة، العيادات الخارجية'
  },
  {
    fabric: 'مزيج قطن طبي',
    protection: 'جيدة',
    comfort: 'ممتازة',
    durability: '+150 غسلة',
    features: [
      'تنفس طبيعي',
      'ناعم على الجلد',
      'معالجة مضادة للميكروبات',
      'مضاد للحساسية'
    ],
    bestFor: 'الطاقم ذو المناوبات الطويلة، البشرة الحساسة'
  },
  {
    fabric: 'تقنية قماش الحاجز',
    protection: 'فائقة',
    comfort: 'معتدلة',
    durability: '+100 غسلة',
    features: [
      'طبقة غير منفذة للسوائل',
      'حماية حاجز فيروسي',
      'مقاومة الرذاذ',
      'متوافق مع التعقيم'
    ],
    bestFor: 'غرف العمليات، العناية المركزة، الطوارئ'
  },
  {
    fabric: 'قماش SMS للاستعمال مرة واحدة',
    protection: 'قصوى',
    comfort: 'أساسية',
    durability: 'استعمال واحد',
    features: [
      'تعقيم كامل',
      'لا يتطلب غسيل',
      'حماية متسقة',
      'سهل التخلص'
    ],
    bestFor: 'الجراحة، وحدات العزل، الإجراءات عالية الخطورة'
  }
]

const departmentGuidelines = [
  {
    department: 'غرفة العمليات (OR)',
    requirements: [
      'حجاب للاستعمال مرة واحدة أو قابل للتعقيم مطلوب',
      'طي كامل تحت القبعة الجراحية',
      'لا يُسمح بالقماش الفضفاض',
      'تنسيق الألوان مع سكراب غرفة العمليات',
      'التغيير بين الإجراءات'
    ],
    restrictions: [
      'لا مشابك معدنية',
      'لا قماش متدفق',
      'يجب أن يناسب تحت غطاء الجراحة',
      'لا يُسمح بالحجاب الشخصي'
    ],
    recommended: 'حجاب جراحي للاستعمال مرة واحدة أو نظام قبعة داخلية قابل للتعقيم'
  },
  {
    department: 'وحدة العناية المركزة (ICU)',
    requirements: [
      'قماش مقاوم للسوائل إلزامي',
      'معالجة مضادة للميكروبات مطلوبة',
      'سهل اللبس/الخلع للطوارئ',
      'تغييرات يومية متعددة متاحة',
      'تثبيت آمن أثناء الإنعاش'
    ],
    restrictions: [
      'لا أطراف فضفاضة',
      'تدلي قليل',
      'لا عناصر زخرفية',
      'يجب ألا يتداخل مع السماعة الطبية'
    ],
    recommended: 'حجاب مضاد للميكروبات محكم مع إغلاقات كباسية'
  },
  {
    department: 'قسم الطوارئ (ED)',
    requirements: [
      'تصميم تحرير سريع للصدمات',
      'خصائص مقاومة للسوائل',
      'رؤية عالية في الفوضى',
      'متين للمتطلبات البدنية',
      'سهل التنظيف بين المرضى'
    ],
    restrictions: [
      'لا أنماط تدلي طويلة',
      'آمن أثناء الحركة السريعة',
      'يجب أن يسمح بارتداء درع الوجه',
      'لا مخاطر تعثر'
    ],
    recommended: 'نمط رياضي محكم مع طلاء مقاوم للسوائل'
  },
  {
    department: 'الأجنحة العامة',
    requirements: [
      'مظهر مهني',
      'راحة لمناوبات 8-12 ساعة',
      'قماش مضاد للميكروبات',
      'سهل الغسيل',
      'خيارات ألوان متعددة'
    ],
    restrictions: [
      'يجب أن يكون من المستشفى أو معتمد',
      'ألوان محايدة أو ألوان القسم',
      'لا زخرفة مفرطة',
      'الدبابيس غير مشجعة'
    ],
    recommended: 'حجاب طبي قياسي مع معالجة مضادة للميكروبات'
  },
  {
    department: 'العيادات الخارجية',
    requirements: [
      'مظهر مهني ومرحب',
      'ألوان صديقة للمرضى',
      'مريح للعمل المكتبي',
      'قماش سهل العناية',
      'اتساق العلامة التجارية'
    ],
    restrictions: [
      'ضمن قواعد لباس المستشفى',
      'منسق مع الزي',
      'نظيف ومكوي',
      'لا ملابس سريرية خارج العيادة'
    ],
    recommended: 'حجاب مهني أنيق بألوان العيادة'
  },
  {
    department: 'طب الأطفال',
    requirements: [
      'مظهر صديق للأطفال',
      'سهل التنظيف (الأطفال يلمسون!)',
      'ألوان غير مخيفة',
      'تثبيت آمن للعمل النشط',
      'مقاوم للبقع'
    ],
    restrictions: [
      'لا أجزاء صغيرة قابلة للفصل',
      'لا حواف حادة',
      'الغسيل بعد كل مناوبة',
      'طقم مخصص للأطفال'
    ],
    recommended: 'حجاب ملون آمن التثبيت مع طلاء مضاد للميكروبات'
  }
]

const safetyStandards = [
  {
    standard: 'متطلبات SFDA للمنسوجات الصحية',
    requirements: [
      'تصنيف منسوجات طبية مسجل',
      'اختبار فعالية مضادة للميكروبات',
      'شهادة التوافق الحيوي',
      'امتثال معايير القابلية للاشتعال',
      'شهادة إدارة الجودة'
    ]
  },
  {
    standard: 'معايير اعتماد CBAHI',
    requirements: [
      'امتثال الوقاية من العدوى',
      'سياسات معدات الحماية الشخصية',
      'توثيق قواعد لباس الطاقم',
      'تدقيق الزي المنتظم',
      'التدريب على الاستخدام الصحيح'
    ]
  },
  {
    standard: 'معايير JCI الدولية',
    requirements: [
      'مكافحة عدوى قائمة على الأدلة',
      'بروتوكولات سلامة الطاقم',
      'توثيق سياسات معدات الحماية',
      'مراقبة الامتثال المنتظمة',
      'أنظمة الإبلاغ عن الحوادث'
    ]
  }
]

const implementationSteps = [
  {
    phase: 'مرحلة التقييم',
    duration: '4-6 أسابيع',
    tasks: [
      'استطلاع ممارسات الحجاب الحالية',
      'تحديد احتياجات القسم المحددة',
      'استشارة مكافحة العدوى',
      'جمع مدخلات ومخاوف الطاقم',
      'مراجعة قيود الميزانية'
    ]
  },
  {
    phase: 'التصميم والشراء',
    duration: '8-12 أسبوع',
    tasks: [
      'تطوير تصاميم خاصة بالقسم',
      'الحصول على أقمشة متوافقة',
      'إنشاء مواصفات نطاق المقاسات',
      'اختبار العينات مع الطاقم',
      'إنهاء عقود الموردين'
    ]
  },
  {
    phase: 'تطوير السياسة',
    duration: '4-6 أسابيع',
    tasks: [
      'كتابة سياسة حجاب شاملة',
      'تحديد متطلبات القسم',
      'إنشاء بروتوكولات الغسيل',
      'إنشاء إجراءات الامتثال',
      'تطوير مواد التدريب'
    ]
  },
  {
    phase: 'التدريب والطرح',
    duration: '4-8 أسابيع',
    tasks: [
      'تدريب أبطال مكافحة العدوى',
      'طرح قسم بقسم',
      'جلسات تجربة فردية',
      'إعداد مراقبة الامتثال',
      'نظام جمع الملاحظات'
    ]
  },
  {
    phase: 'المراقبة والتحسين',
    duration: 'مستمر',
    tasks: [
      'تدقيق الامتثال المنتظم',
      'استطلاعات رضا الطاقم',
      'مراقبة معدلات العدوى',
      'تتبع جودة المنتج',
      'التحسين المستمر'
    ]
  }
]

const careMaintenance = [
  {
    aspect: 'العناية اليومية',
    guidelines: [
      'تغيير الحجاب يومياً كحد أدنى، أكثر إذا تلوث',
      'تخزين في مكان نظيف وجاف عند عدم الاستخدام',
      'عدم مشاركة الحجاب بين الموظفات',
      'فحص التلف قبل كل استخدام',
      'إزالة فوراً إذا حدث تلوث'
    ]
  },
  {
    aspect: 'الغسيل',
    guidelines: [
      'الغسيل عند 60 درجة مئوية كحد أدنى (معيار الرعاية الصحية)',
      'استخدام منظف معتمد من المستشفى',
      'عدم الخلط مع غسيل المنزل',
      'التجفيف بالمجفف على حرارة عالية عندما يسمح القماش',
      'الكي على درجة مناسبة للتطهير'
    ]
  },
  {
    aspect: 'الاستبدال',
    guidelines: [
      'الاستبدال كل 6-12 شهر حسب الاستخدام',
      'استبدال فوري إذا تلف أو تبقع',
      'تتبع دورات الغسيل للأقمشة المضادة للميكروبات',
      'الحفاظ على 5 حجابات كحد أدنى لكل موظفة',
      'تخصيص ميزانية لدورة الاستبدال المنتظمة'
    ]
  },
  {
    aspect: 'التخزين',
    guidelines: [
      'التخزين في منطقة نظيفة مخصصة',
      'استخدام أكياس أو خزائن فردية مُسمّاة',
      'الحفظ بعيداً عن العناصر الملوثة',
      'ضمان التهوية المناسبة',
      'فصل النظيف عن المتسخ'
    ]
  }
]

export default function MedicalHijabHealthcareStandardsPageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm">
            <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">معايير الحجاب الطبي</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/healthcare/healthcare_hijab_doctor.jpg"
            alt="الحجاب الطبي الاحترافي"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-cyan-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30">
                الرعاية الصحية
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium border border-cyan-400/30">
                مكافحة العدوى
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              الحجاب الطبي: التوازن بين الإيمان وسلامة الرعاية الصحية
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              دليل شامل لتصميم الحجاب الطبي الذي يكرم متطلبات اللباس الإسلامي 
              مع تلبية معايير مكافحة العدوى والسلامة الصارمة 
              في المنشآت الصحية السعودية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الرعاية الصحية يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5" />
                <span>1 يونيو 2025</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TagIcon className="h-5 w-5 text-teal-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA Card */}
              <div className="mt-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">تحتاج حجاب طبي؟</h3>
                <p className="text-sm text-teal-100 mb-4">
                  يونيوم توفر حجاب طبي متوافق مع المعايير لأفضل المستشفيات في السعودية.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-teal-600 px-4 py-2 rounded-lg font-bold hover:bg-teal-50 transition-colors"
                >
                  احصل على عرض سعر
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الإيمان يلتقي بسلامة الرعاية الصحية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في المنشآت الصحية السعودية، الحجاب ليس مجرد متطلب ديني—إنه جزء 
                لا يتجزأ من الزي الطبي المهني الذي يجب أن يلبي نفس معايير 
                السلامة ومكافحة العدوى الصارمة مثل أي قطعة ملابس طبية أخرى. 
                تصميم حجاب طبي يكرم كلاً من الإيمان والسلامة هو تحدٍ يتطلب 
                خبرة وابتكاراً وفهماً عميقاً لكلا المجالين.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/healthcare/healthcare_hijab_doctor.jpg"
                  alt="مهنية صحية ترتدي حجاب طبي"
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-bold text-gray-900 mb-3">التحدي المزدوج</h3>
                <p className="text-gray-700 mb-4">
                  يجب أن يحقق الحجاب الطبي هدفين حرجين في آن واحد:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-teal-700 mb-2">الامتثال الديني</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• تغطية كاملة للشعر</li>
                      <li>• تغطية الرقبة والصدر</li>
                      <li>• مظهر محتشم وكريم</li>
                      <li>• مريح لأوقات الصلاة</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-cyan-700 mb-2">السلامة السريرية</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• امتثال مكافحة العدوى</li>
                      <li>• عدم وجود خطر تلوث</li>
                      <li>• أنظمة تثبيت آمنة</li>
                      <li>• سهولة الإزالة الطارئة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Infection Control */}
            <section id="infection-control" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">متطلبات مكافحة العدوى</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                فهم مكافحة العدوى أساسي لتصميم الحجاب الطبي. 
                أغطية الرأس في بيئات الرعاية الصحية هي ناقلات محتملة 
                لانتقال الجراثيم إذا لم تُصمم وتُدار بشكل صحيح.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {infectionControlStats.map((item, index) => (
                  <div key={index} className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <div className="text-4xl font-bold text-teal-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">المصدر: {item.source}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-start gap-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">اعتبار حرج</h3>
                    <p className="text-amber-800">
                      حجاب الموضة العادي غير مناسب للبيئات السريرية. 
                      يجب تصميم الحجاب الطبي خصيصاً بخصائص مضادة للميكروبات، 
                      وأنظمة تثبيت مناسبة، وتقنية قماش ملائمة لمنع 
                      عدوى الرعاية الصحية المرتبطة.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Features */}
            <section id="design-features" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ميزات التصميم الأساسية</h2>
              
              <div className="space-y-6">
                {designFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-xl">
                        <feature.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{feature.feature}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            feature.importance === 'حرج' ? 'bg-red-100 text-red-700' :
                            feature.importance === 'أساسي' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {feature.importance}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm">خيارات التصميم:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {feature.options.map((option, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-teal-500 flex-shrink-0" />
                                <span>{option}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabric Technology */}
            <section id="fabric-technology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تقنية الأقمشة المضادة للميكروبات</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                اختيار القماش للحجاب الطبي يؤثر مباشرة على فعالية مكافحة العدوى، 
                وراحة المرتدية، وعمر المنتج:
              </p>

              <div className="space-y-6">
                {fabricTechnology.map((fabric, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">{fabric.fabric}</h3>
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                        {fabric.durability}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <span className="text-xs text-gray-500">الحماية</span>
                        <p className={`font-bold ${
                          fabric.protection === 'قصوى' || fabric.protection === 'فائقة' ? 'text-green-600' :
                          fabric.protection === 'ممتازة' ? 'text-teal-600' :
                          'text-blue-600'
                        }`}>{fabric.protection}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">الراحة</span>
                        <p className={`font-bold ${
                          fabric.comfort === 'ممتازة' ? 'text-green-600' :
                          fabric.comfort === 'جيدة' ? 'text-blue-600' :
                          'text-gray-600'
                        }`}>{fabric.comfort}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">الأفضل لـ</span>
                        <p className="font-medium text-gray-700 text-sm">{fabric.bestFor}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {fabric.features.map((feature, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Department Guidelines */}
            <section id="department-guidelines" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">إرشادات حسب القسم</h2>
              
              <div className="space-y-6">
                {departmentGuidelines.map((dept, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-4">
                      <h3 className="font-bold text-white text-lg">{dept.department}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            المتطلبات
                          </h4>
                          <ul className="space-y-1">
                            {dept.requirements.map((req, i) => (
                              <li key={i} className="text-sm text-gray-600">• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <ExclamationTriangleIcon className="h-5 w-5 text-amber-500" />
                            القيود
                          </h4>
                          <ul className="space-y-1">
                            {dept.restrictions.map((res, i) => (
                              <li key={i} className="text-sm text-gray-600">• {res}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4">
                        <span className="text-sm font-bold text-teal-800">الموصى به: </span>
                        <span className="text-sm text-teal-700">{dept.recommended}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Safety Standards */}
            <section id="safety-standards" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير السلامة والامتثال</h2>
              
              <div className="space-y-6">
                {safetyStandards.map((standard, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <DocumentCheckIcon className="h-6 w-6 text-blue-600" />
                      <h3 className="font-bold text-blue-900">{standard.standard}</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {standard.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل التطبيق في المستشفى</h2>
              
              <div className="space-y-6">
                {implementationSteps.map((phase, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                      </div>
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Care & Maintenance */}
            <section id="care-maintenance" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">العناية والصيانة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careMaintenance.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <SparklesIcon className="h-5 w-5 text-teal-600" />
                      {item.aspect}
                    </h3>
                    <ul className="space-y-2">
                      {item.guidelines.map((guideline, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">جهزي فريقك الصحي بحجاب طبي متوافق مع المعايير</h2>
                <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تشارك أفضل المستشفيات في السعودية لتوفير حجاب طبي 
                  يلبي أعلى معايير مكافحة العدوى مع احترام المتطلبات الدينية.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-teal-600 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/healthcare"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الرعاية الصحية
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  )
}


