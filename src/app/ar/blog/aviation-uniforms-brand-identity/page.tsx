import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  PaperAirplaneIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  SparklesIcon,
  GlobeAltIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أزياء الطيران والهوية التجارية: كيف تخلق شركات الطيران انطباعات لا تُنسى | يونيوم',
  description: 'استكشف كيف تشكّل أزياء الطيران الهوية التجارية لشركات الطيران في المملكة العربية السعودية. دليل شامل يغطي أزياء طاقم الضيافة والطيارين وموظفي الخدمات الأرضية وكيف تستخدم شركات الطيران السعودية مثل السعودية وطيران ناس الأزياء للتميز.',
  keywords: 'أزياء الطيران السعودية, زي شركات الطيران, زي طاقم الضيافة, زي الطيارين, أزياء السعودية للطيران, أزياء طيران ناس, زي المضيفات, هوية العلامة التجارية للطيران, ملابس طاقم الطائرة, معايير لباس الطيران',
  openGraph: {
    title: 'أزياء الطيران والهوية التجارية: كيف تخلق شركات الطيران انطباعات لا تُنسى',
    description: 'الدور الاستراتيجي للأزياء في بناء علامات تجارية قوية لشركات الطيران',
    images: ['/images/aviation/aviation_airline_ground_staff_uniform.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/aviation-uniforms-brand-identity/',
    languages: {
      'en': '/blog/aviation-uniforms-brand-identity/',
      'ar': '/ar/blog/aviation-uniforms-brand-identity/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'قوة أزياء الطيران' },
  { id: 'brand-psychology', title: 'سيكولوجية العلامة التجارية' },
  { id: 'role-specific', title: 'متطلبات كل دور' },
  { id: 'saudi-airlines', title: 'دراسات حالة الطيران السعودي' },
  { id: 'design-elements', title: 'عناصر التصميم الأساسية' },
  { id: 'fabric-innovation', title: 'ابتكارات الأقمشة' },
  { id: 'future-trends', title: 'مستقبل أزياء الطيران' }
]

const brandElements = [
  {
    element: 'سيكولوجية الألوان',
    description: 'اختيارات لونية استراتيجية تثير مشاعر وارتباطات محددة',
    examples: [
      { airline: 'الخطوط السعودية', approach: 'أخضر داكن وذهبي - التراث السعودي، الخدمة الفاخرة' },
      { airline: 'طيران ناس', approach: 'بنفسجي وأبيض - عصري، شبابي، مبتكر' },
      { airline: 'طيران الإمارات', approach: 'بيج وأحمر - دفء، ضيافة عربية' }
    ]
  },
  {
    element: 'لغة التصميم',
    description: 'عناصر بصرية تعبر عن شخصية العلامة التجارية',
    examples: [
      { airline: 'الناقلات التقليدية', approach: 'صور ظلية منظمة، تفاصيل رسمية' },
      { airline: 'الناقلات منخفضة التكلفة', approach: 'قصات مريحة، ميزات عملية' },
      { airline: 'الخطوط الفاخرة', approach: 'تعاونات مع مصممين، أقمشة فاخرة' }
    ]
  },
  {
    element: 'الدلالات الثقافية',
    description: 'عناصر تصميم ترتبط بالهوية الوطنية والثقافية',
    examples: [
      { airline: 'ناقلات الخليج', approach: 'أنماط مستوحاة من الفن الإسلامي، تصاميم محتشمة' },
      { airline: 'الخطوط الآسيوية', approach: 'منسوجات تقليدية، زخارف إقليمية' },
      { airline: 'الناقلات الأوروبية', approach: 'بساطة معاصرة، أناقة دقيقة' }
    ]
  }
]

const roleRequirements = [
  {
    role: 'طاقم الضيافة الجوية',
    primaryFunction: 'خدمة العملاء، عروض السلامة، رعاية الركاب',
    uniformRequirements: [
      'مظهر احترافي لكن ودود',
      'حرية الحركة لواجبات السلامة',
      'مريح لرحلات أكثر من 12 ساعة',
      'سهل العناية للإقامات الدولية',
      'خيارات محتشمة تلبي المتطلبات الثقافية'
    ],
    specialConsiderations: [
      'مناطق مناخية متعددة',
      'واجبات خدمة الطعام',
      'قدرة الإخلاء الطارئ',
      'تمثيل العلامة التجارية المرئي'
    ],
    image: '/images/aviation/aviation_flight_attendant_uniforms.jpg'
  },
  {
    role: 'طاقم قمرة القيادة (الطيارون)',
    primaryFunction: 'تشغيل الطائرة، ثقة الركاب، السلطة المهنية',
    uniformRequirements: [
      'مظهر مهني ذو سلطة',
      'تمييز الرتبة من خلال الشارات',
      'جيوب عملية للوثائق',
      'مريح لساعات قمرة القيادة الطويلة',
      'تنظيم حراري لظروف قمرة القيادة المتغيرة'
    ],
    specialConsiderations: [
      'توقعات المظهر الرسمي',
      'بروتوكولات الكتفية والشرائط',
      'تقاليد القبعة والجاكيت',
      'معايير التعرف الدولية'
    ],
    image: '/images/aviation/pilot-airline-uniform.jpg'
  },
  {
    role: 'الموظفون الأرضيون',
    primaryFunction: 'تسجيل الوصول، عمليات البوابات، مساعدة الركاب',
    uniformRequirements: [
      'مظهر متوافق مع العلامة التجارية',
      'عملي للأدوار النشطة',
      'خيارات مناسبة للطقس',
      'تعريف واضح',
      'متطلبات أحذية مريحة'
    ],
    specialConsiderations: [
      'انتقالات داخلية/خارجية',
      'أنشطة رفع ثقيل',
      'تفاعلات مواجهة العملاء',
      'امتثال أمن المطار'
    ],
    image: '/images/aviation/aviation_airline_ground_staff_uniform.jpg'
  },
  {
    role: 'الصيانة والفنيون',
    primaryFunction: 'صيانة الطائرات، العمليات التقنية، امتثال السلامة',
    uniformRequirements: [
      'مواد متوافقة مع السلامة',
      'تصميم عملي مع وصول للأدوات',
      'عناصر عالية الرؤية',
      'بناء متين',
      'تصميم خالي من FOD (لا عناصر فضفاضة)'
    ],
    specialConsiderations: [
      'سلامة القرب من الطائرة',
      'ظروف المنحدر',
      'رؤية الشهادة الفنية',
      'توافق معدات السلامة'
    ],
    image: '/images/aviation/pilot-aviation-maintenance-uniforms.jpg'
  }
]

const saudiAirlinesAnalysis = [
  {
    airline: 'الخطوط الجوية العربية السعودية (السعودية)',
    brandPosition: 'الناقل الوطني، خدمة كاملة فاخرة',
    uniformPhilosophy: 'التراث يلتقي الأناقة المعاصرة',
    keyElements: [
      'الأخضر الداكن يمثل اللون الوطني السعودي',
      'لمسات ذهبية ترمز للخدمة الفاخرة',
      'عناصر تقليدية في صور ظلية عصرية',
      'تصاميم متوافقة مع الإسلام لجميع الموظفين',
      'تعاون مع مصممين للمجموعة الحالية'
    ],
    designHighlights: [
      'الطاقم النسائي: فساتين مستوحاة من العباية الخضراء، حجاب اختياري',
      'الطاقم الذكوري: بدلات خضراء مفصلة مع تفاصيل ذهبية',
      'الطيارون: كحلي كلاسيكي مع شعارات سعودية',
      'الموظفون الأرضيون: لوحة ألوان خضراء منسقة'
    ],
    image: '/images/aviation/saudia-airlines-crew.jpg'
  },
  {
    airline: 'طيران ناس',
    brandPosition: 'ناقل منخفض التكلفة، شبابي وديناميكي',
    uniformPhilosophy: 'عصري، ودود، سعودي بشكل مميز',
    keyElements: [
      'البنفسجي النابض كلون أساسي',
      'صور ظلية معاصرة ومريحة',
      'تصاميم عملية لكن أنيقة',
      'اتساق قوي في لون العلامة التجارية',
      'خيارات محتشمة مدمجة بشكل طبيعي'
    ],
    designHighlights: [
      'الطاقم النسائي: فساتين بنفسجية مع لمسات بيضاء',
      'الطاقم الذكوري: قمصان بولو بنفسجية أو بليزرات',
      'الطيارون: تصميم تقليدي مع ربطات عنق بنفسجية',
      'الموظفون الأرضيون: ملابس بنفسجية عادية بالعلامة التجارية'
    ],
    image: '/images/aviation/flynas-cabin-crew.jpg'
  },
  {
    airline: 'طيران الرياض (قيد الإطلاق)',
    brandPosition: 'ناقل فاخر جديد، هوية سعودية حديثة',
    uniformPhilosophy: 'جريء، مبتكر، موجه نحو المستقبل',
    keyElements: [
      'جمالية سعودية معاصرة',
      'ابتكارات أقمشة مستدامة',
      'نهج تصميم متساوٍ بين الجنسين',
      'إمكانية تكامل التكنولوجيا',
      'جاذبية عالمية مع جذور سعودية'
    ],
    designHighlights: [
      'متوقع أن يضع معايير صناعية جديدة',
      'تعاون محتمل مع مصممين',
      'تركيز على المواد المستدامة',
      'تفسير عصري للعناصر السعودية'
    ],
    image: '/images/aviation/riyadh-air-concept.jpg'
  }
]

const designElements = [
  {
    category: 'الصورة الظلية والقصة',
    importance: 'تحدد شخصية العلامة التجارية الشاملة وحركة الموظفين',
    considerations: [
      'منظم مقابل مريح بناءً على وضع العلامة التجارية',
      'حرية الحركة لواجبات السلامة',
      'مناسب لأنواع الجسم المتنوعة',
      'ملاءمة ثقافية في جميع الأسواق'
    ]
  },
  {
    category: 'اللون والنمط',
    importance: 'التعرف الأساسي على العلامة التجارية والاستجابة العاطفية',
    considerations: [
      'ألوان العلامة التجارية الرئيسية بارزة',
      'ألوان مميزة للتسلسل الهرمي/الأقسام',
      'استخدام الأنماط للاهتمام البصري',
      'اتساق اللون عبر جميع نقاط الاتصال'
    ]
  },
  {
    category: 'الإكسسوارات والتفاصيل',
    importance: 'ترفع الزي الأساسي إلى تجربة علامة تجارية كاملة',
    considerations: [
      'أوشحة، ربطات عنق، دبابيس بعناصر العلامة التجارية',
      'أجهزة عالية الجودة (أزرار، سحابات)',
      'تنسيق الحقائب والأحذية',
      'شارات الأسماء ودبابيس الأجنحة'
    ]
  },
  {
    category: 'خيارات التصميم المحتشم',
    importance: 'أساسية للناقلات السعودية والخليجية',
    considerations: [
      'خيارات حجاب تطابق ألوان الزي',
      'بدائل بأكمام طويلة',
      'خيارات بنطلون للموظفات',
      'حواف أطول دون المساومة على الأناقة'
    ]
  }
]

const fabricInnovations = [
  {
    innovation: 'أقمشة تنظيم درجة الحرارة',
    description: 'مواد تغيير الطور التي تتكيف مع درجة حرارة الجسم',
    benefit: 'راحة عبر تغيرات درجة حرارة المقصورة والوجهات',
    application: 'أزياء طاقم الضيافة، قمصان الطيارين'
  },
  {
    innovation: 'معالجات مضادة للميكروبات',
    description: 'أيون الفضة ومعالجات أخرى تمنع نمو البكتيريا',
    benefit: 'أزياء أكثر انتعاشاً خلال الرحلات الدولية الطويلة',
    application: 'جميع أزياء الطاقم، خاصة القمصان والبلوزات'
  },
  {
    innovation: 'خلطات التمدد والتعافي',
    description: 'أقمشة تتمدد مع الحركة وتستعيد شكلها',
    benefit: 'الحفاظ على المظهر المهني طوال المناوبات',
    application: 'البناطيل، التنانير، الفساتين'
  },
  {
    innovation: 'تشطيبات إزالة البقع',
    description: 'طلاءات نانو تصد السوائل وتزيل البقع',
    benefit: 'صيانة سهلة خلال الرحلات متعددة الأيام',
    application: 'جميع مكونات الزي المرئية'
  },
  {
    innovation: 'المواد المستدامة',
    description: 'بوليستر معاد تدويره، قطن عضوي، أقمشة بيئية مبتكرة',
    benefit: 'تأثير بيئي أقل، يتوافق مع أهداف رؤية 2030',
    application: 'بشكل متزايد عبر برامج الزي بأكملها'
  }
]

const futureTrends = [
  {
    trend: 'تقنية المقاس الشخصي',
    timeline: '2024-2026',
    description: 'مسح الجسم ثلاثي الأبعاد لأزياء مناسبة تماماً لكل عضو طاقم',
    impact: 'راحة أفضل، تعديلات أقل، هدر أقل'
  },
  {
    trend: 'تكامل الزي الذكي',
    timeline: '2025-2028',
    description: 'تقنية مدمجة لمراقبة الصحة والتواصل والتعريف',
    impact: 'تعزيز رفاهية الطاقم، تبسيط العمليات'
  },
  {
    trend: 'برامج التصميم الدائري',
    timeline: '2024-2027',
    description: 'إدارة دورة حياة كاملة مع إعادة التدوير وإعادة الاستخدام',
    impact: 'أهداف صفر نفايات، وضع علامة تجارية مستدامة'
  },
  {
    trend: 'أنظمة الزي المعيارية',
    timeline: '2025-2030',
    description: 'مكونات قابلة للتبديل للطقس والدور والتفضيل',
    impact: 'مرونة، تقليل المخزون، رضا الطاقم'
  }
]

export default function AviationUniformsBrandIdentityPageAr() {
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
            <li><span className="text-gray-900 font-medium">أزياء الطيران والهوية التجارية</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/aviation/aviation_airline_ground_staff_uniform.jpg"
            alt="أزياء الطيران"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-sky-500/20 text-sky-300 px-4 py-1.5 rounded-full text-sm font-medium border border-sky-400/30">
                الطيران
              </span>
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">
                الهوية التجارية
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء الطيران والهوية التجارية: خلق انطباعات لا تُنسى
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              اكتشف كيف تستخدم شركات الطيران الأزياء كسفراء أقوياء للعلامة التجارية، 
              مع تركيز خاص على الناقلات السعودية الرائدة في الابتكار بالصناعة.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الطيران يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 يوليو 2025</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TagIcon className="h-5 w-5 text-sky-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-sky-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">شريك أزياء الطيران؟</h3>
                <p className="text-sm text-sky-100 mb-4">
                  يونيوم تصمم أزياء فاخرة لشركات الطيران السعودية الرائدة.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-sky-600 px-4 py-2 rounded-lg font-bold hover:bg-sky-50 transition-colors"
                >
                  جدول استشارة
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قوة أزياء الطيران</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في صناعة الطيران التنافسية، تعمل الأزياء كأكثر تعبير مرئي وثابت 
                عن هوية العلامة التجارية لشركة الطيران. من لحظة دخول المسافرين المطار 
                حتى وجهتهم النهائية، يخلق موظفو الطيران بأزيائهم المميزة انطباعات 
                لا حصر لها للعلامة التجارية تشكل تصورات الجودة والسلامة والخدمة.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/aviation/aviation_flight_attendant_uniforms.jpg"
                  alt="أزياء طاقم ضيافة شركات الطيران"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                <h3 className="font-bold text-sky-900 mb-4 flex items-center gap-2">
                  <PaperAirplaneIcon className="h-6 w-6" />
                  الطيران السعودي بالأرقام
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-sky-600">+100 مليون</div>
                    <div className="text-sm text-gray-600">مسافر سنوياً (2025)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">+30</div>
                    <div className="text-sm text-gray-600">شركة طيران تعمل في المملكة</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">+50 ألف</div>
                    <div className="text-sm text-gray-600">موظف طيران</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">100 مليار ريال</div>
                    <div className="text-sm text-gray-600">استثمار قطاع الطيران</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Psychology */}
            <section id="brand-psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">سيكولوجية العلامة التجارية للطيران</h2>
              
              <div className="space-y-6">
                {brandElements.map((element, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{element.element}</h3>
                    <p className="text-gray-600 mb-4">{element.description}</p>
                    <div className="space-y-3">
                      {element.examples.map((ex, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-3">
                          <span className="font-semibold text-sky-700">{ex.airline}:</span>
                          <span className="text-gray-600 mr-2">{ex.approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Role-Specific Requirements */}
            <section id="role-specific" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">متطلبات كل دور</h2>
              
              <div className="space-y-8">
                {roleRequirements.map((role, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={role.image}
                          alt={role.role}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{role.role}</h3>
                        <p className="text-sm text-sky-600 mb-4">{role.primaryFunction}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">متطلبات الزي:</h4>
                            <ul className="space-y-1">
                              {role.uniformRequirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">اعتبارات خاصة:</h4>
                            <ul className="space-y-1">
                              {role.specialConsiderations.map((consideration, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <StarIcon className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span>{consideration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Saudi Airlines */}
            <section id="saudi-airlines" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دراسات حالة الطيران السعودي</h2>
              
              <div className="space-y-6">
                {saudiAirlinesAnalysis.map((airline, index) => (
                  <div key={index} className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{airline.airline}</h3>
                    <p className="text-sm text-indigo-600 mb-4">{airline.brandPosition}</p>
                    <p className="text-indigo-800 mb-4"><strong>الفلسفة:</strong> {airline.uniformPhilosophy}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-2">العناصر الرئيسية:</h4>
                        <ul className="space-y-1">
                          {airline.keyElements.map((elem, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                              <CheckCircleIcon className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span>{elem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-2">أبرز التصاميم:</h4>
                        <ul className="space-y-1">
                          {airline.designHighlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                              <SparklesIcon className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Design Elements */}
            <section id="design-elements" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عناصر التصميم الأساسية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designElements.map((element, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{element.category}</h3>
                    <p className="text-sm text-gray-500 mb-4">{element.importance}</p>
                    <ul className="space-y-2">
                      {element.considerations.map((consideration, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabric Innovation */}
            <section id="fabric-innovation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ابتكارات الأقمشة</h2>
              
              <div className="space-y-4">
                {fabricInnovations.map((innovation, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{innovation.innovation}</h3>
                      <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
                        {innovation.application}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{innovation.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-sky-700 font-medium">الفائدة: {innovation.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Trends */}
            <section id="future-trends" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مستقبل أزياء الطيران</h2>
              
              <div className="space-y-4">
                {futureTrends.map((trend, index) => (
                  <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-purple-900">{trend.trend}</h3>
                      <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                        {trend.timeline}
                      </span>
                    </div>
                    <p className="text-purple-800 mb-3">{trend.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-purple-700 font-medium">الأثر: {trend.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">ارفع هوية شركة الطيران الخاصة بك</h2>
                <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تتشارك مع شركات الطيران الرائدة لإنشاء برامج أزياء مميزة 
                  تعزز هوية العلامة التجارية وتحسن أداء الطاقم.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-sky-600 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة طيران
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/aviation"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الطيران
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
