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
  EyeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FireIcon,
  BoltIcon,
  BeakerIcon,
  SunIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'ملابس السلامة الصناعية في السعودية: دليل الامتثال الشامل 2025 | يونيوم',
  description: 'دليل شامل لأزياء وملابس السلامة الصناعية في المملكة العربية السعودية. تعرف على معايير ساسو، الملابس المقاومة للهب، معدات الرؤية العالية، متطلبات معدات الحماية الشخصية، والامتثال لقطاعات النفط والغاز والبتروكيماويات والتصنيع والبناء.',
  keywords: 'أزياء السلامة الصناعية السعودية, ملابس FR المملكة, ملابس مقاومة للهب, أزياء الرؤية العالية, معدات الحماية الشخصية السعودية, معايير ساسو للسلامة, ملابس النفط والغاز, أزياء البتروكيماويات, معدات سلامة البناء, ملابس سلامة التصنيع',
  openGraph: {
    title: 'ملابس السلامة الصناعية في السعودية: دليل الامتثال الشامل 2025',
    description: 'دليل أساسي لامتثال ملابس العمل الآمنة وأفضل الممارسات للصناعات السعودية',
    images: ['/images/industrial/saudi-safety-standards.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/industrial-safety-workwear-saudi/',
    languages: {
      'en': '/blog/industrial-safety-workwear-saudi/',
      'ar': '/ar/blog/industrial-safety-workwear-saudi/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'السلامة الصناعية في رؤية 2030' },
  { id: 'standards', title: 'المعايير السعودية والدولية' },
  { id: 'hazard-protection', title: 'الحماية حسب نوع الخطر' },
  { id: 'industry-guide', title: 'متطلبات القطاعات' },
  { id: 'fabric-technology', title: 'تقنيات أقمشة السلامة' },
  { id: 'compliance', title: 'الامتثال والشهادات' },
  { id: 'implementation', title: 'أفضل ممارسات التنفيذ' }
]

const safetyStandards = [
  {
    standard: 'ساسو GSO ISO 11612',
    description: 'الملابس الواقية من الحرارة واللهب',
    application: 'النفط والغاز، البتروكيماويات، اللحام',
    requirement: 'إلزامي لبيئات الحريق الوميضي'
  },
  {
    standard: 'ساسو GSO ISO 20471',
    description: 'ملابس التحذير عالية الرؤية',
    application: 'البناء، أعمال الطرق، الخدمات اللوجستية',
    requirement: 'مطلوب للعمل بالقرب من المركبات/المعدات'
  },
  {
    standard: 'ساسو GSO IEC 61482',
    description: 'الحماية من مخاطر القوس الكهربائي',
    application: 'الأعمال الكهربائية، محطات الطاقة',
    requirement: 'إلزامي لمناطق خطر القوس الوميضي'
  },
  {
    standard: 'ساسو GSO ISO 13688',
    description: 'المتطلبات العامة للملابس الواقية',
    application: 'جميع القطاعات الصناعية',
    requirement: 'المعيار الأساسي لجميع ملابس العمل'
  },
  {
    standard: 'معايير أرامكو الهندسية',
    description: 'متطلبات إضافية لقطاع النفط',
    application: 'عمليات أرامكو السعودية',
    requirement: 'امتثال المقاولين إلزامي'
  }
]

const hazardProtection = [
  {
    hazard: 'الحريق الوميضي واللهب',
    icon: FireIcon,
    risks: ['الحروق', 'إصابات قاتلة', 'ندبات طويلة الأمد'],
    protection: [
      'أقمشة مقاومة للهب (FR)',
      'مواد ذاتية الإطفاء',
      'لا خطر ذوبان الألياف الصناعية',
      'تغطية كاملة للجسم'
    ],
    industries: 'النفط والغاز، البتروكيماويات، اللحام',
    standards: 'NFPA 2112, ISO 11612'
  },
  {
    hazard: 'القوس الكهربائي الوميضي',
    icon: BoltIcon,
    risks: ['حروق شديدة', 'صدمة كهربائية', 'سكتة قلبية'],
    protection: [
      'أقمشة مصنفة للقوس (AR)',
      'تصنيف ATPV مناسب',
      'لا عناصر موصلة',
      'ملابس داخلية FR'
    ],
    industries: 'توليد الطاقة، الأعمال الكهربائية، المرافق',
    standards: 'NFPA 70E, IEC 61482'
  },
  {
    hazard: 'التعرض للمواد الكيميائية',
    icon: BeakerIcon,
    risks: ['حروق جلدية', 'مشاكل تنفسية', 'أمراض طويلة الأمد'],
    protection: [
      'حواجز مقاومة للمواد الكيميائية',
      'مقاومة اختراق مناسبة',
      'درزات محكمة عند الحاجة',
      'قفازات وأحذية متوافقة'
    ],
    industries: 'البتروكيماويات، الأدوية، الزراعة',
    standards: 'ISO 16602, EN 13034'
  },
  {
    hazard: 'الإجهاد الحراري',
    icon: SunIcon,
    risks: ['إرهاق حراري', 'تقليل اليقظة', 'حوادث'],
    protection: [
      'أقمشة FR تنفسية',
      'تقنية امتصاص الرطوبة',
      'بناء خفيف الوزن',
      'إكسسوارات تبريد'
    ],
    industries: 'جميع الأعمال الخارجية/البيئات الحارة',
    standards: 'إرشادات OSHA، اللوائح المحلية'
  },
  {
    hazard: 'الرؤية المنخفضة',
    icon: EyeIcon,
    risks: ['اصطدام المركبات', 'تصادم المعدات', 'السقوط'],
    protection: [
      'ألوان عالية الرؤية',
      'شريط عاكس',
      'امتثال الفئة 2/3',
      'رؤية 360 درجة'
    ],
    industries: 'البناء، الخدمات اللوجستية، أعمال الطرق',
    standards: 'ISO 20471, ANSI 107'
  },
  {
    hazard: 'المخاطر الميكانيكية',
    icon: WrenchScrewdriverIcon,
    risks: ['جروح', 'سحجات', 'ثقوب'],
    protection: [
      'بناء معزز',
      'مواد مقاومة للقطع',
      'مناطق صدمات مبطنة',
      'إغلاقات آمنة'
    ],
    industries: 'التصنيع، البناء، الصيانة',
    standards: 'EN 388, ISO 13997'
  }
]

const industryRequirements = [
  {
    industry: 'النفط والغاز',
    description: 'أكبر قطاع صناعي في المملكة مع أكثر متطلبات السلامة صرامة',
    mandatoryItems: [
      'أفرولات FR (ATPV 8+ cal/cm²)',
      'بطانة خوذة FR',
      'أحذية سلامة (مقدمة فولاذية، مبددة للكهرباء الساكنة)',
      'قفازات FR لمهام محددة',
      'نظارات/واقيات سلامة',
      'معدات كشف H2S (حيث مطلوب)'
    ],
    specialConsiderations: [
      'موافقة أرامكو السعودية مطلوبة لأزياء المقاولين',
      'بروتوكولات فحص الزي اليومية',
      'لا ملابس شخصية تحت ملابس FR',
      'ترميز لوني محدد حسب المقاول/الدور'
    ],
    image: '/images/industrial/saudi-petrochemical-workers.jpg'
  },
  {
    industry: 'البتروكيماويات',
    description: 'معالجة كيميائية معقدة تتطلب حماية متعددة المخاطر',
    mandatoryItems: [
      'أفرولات FR مقاومة للمواد الكيميائية',
      'نظارات رش كيميائي',
      'قفازات نتريل/كيميائية',
      'أحذية مقاومة للمواد الكيميائية',
      'حماية تنفسية (حسب المهمة)',
      'معدات هروب طوارئ'
    ],
    specialConsiderations: [
      'تقييم التوافق الكيميائي مطلوب',
      'توثيق وقت الاختراق',
      'إجراءات إزالة التلوث',
      'برامج المراقبة الطبية'
    ],
    image: '/images/industrial/saudi-petrochemical-plant.jpg'
  },
  {
    industry: 'البناء',
    description: 'بيئات ديناميكية مع أنواع مخاطر متعددة',
    mandatoryItems: [
      'سترة/قميص عالي الرؤية (الفئة 2+)',
      'خوذة صلبة مع حزام ذقن',
      'أحذية سلامة (مقدمة فولاذية)',
      'نظارات سلامة',
      'قفازات عمل',
      'حماية السقوط (العمل على ارتفاع)'
    ],
    specialConsiderations: [
      'إدارة الإجهاد الحراري في الصيف',
      'حماية الغبار في الظروف الصحراوية',
      'متطلبات الرؤية للعمل الليلي',
      'تنسيق المقاولين المتعددين'
    ],
    image: '/images/products/industrial/construction-1.jpg'
  },
  {
    industry: 'التصنيع',
    description: 'مخاطر متنوعة حسب نوع الإنتاج',
    mandatoryItems: [
      'أفرولات مناسبة للصناعة',
      'أحذية سلامة',
      'حماية السمع',
      'حماية العين',
      'واقيات الآلات المحددة',
      'حماية ESD (الإلكترونيات)'
    ],
    specialConsiderations: [
      'منع التشابك بالآلات',
      'تقييمات مستوى الضوضاء',
      'اعتبارات بيئة العمل',
      'الترميز اللوني للجودة/السلامة'
    ],
    image: '/images/industries/manufacturing/manufacturing_uniform_main.jpg'
  },
  {
    industry: 'الكهرباء والمرافق',
    description: 'حماية القوس الوميضي والصدمة الكهربائية حرجة',
    mandatoryItems: [
      'ملابس مصنفة للقوس (ATPV مناسب)',
      'قفازات معزولة (مصنفة للجهد)',
      'أحذية عازلة',
      'واقي وجه مصنف للقوس',
      'أدوات معزولة',
      'معدات التأريض'
    ],
    specialConsiderations: [
      'تحليل خطر القوس الوميضي مطلوب',
      'تعريفات حدود الاقتراب',
      'فحص معدات الحماية اليومي',
      'تصاريح العمل الكهربائي'
    ],
    image: '/images/products/industrial/electrical-maintenance-uniform-main.jpg'
  }
]

const fabricTechnologies = [
  {
    technology: 'أقمشة FR ذاتية المقاومة',
    description: 'مقاومة اللهب مدمجة في بنية الألياف',
    benefits: ['حماية دائمة', 'لا يمكن غسلها', 'أداء متسق'],
    materials: 'Nomex®, Kevlar®, PBI, خلطات رايون FR',
    durability: 'طوال عمر الملابس'
  },
  {
    technology: 'أقمشة FR المعالجة',
    description: 'معالجات كيميائية مطبقة على الأقمشة الأساسية',
    benefits: ['تكلفة أقل', 'ملمس مريح', 'حماية جيدة'],
    materials: 'قطن معالج FR، خلطات قطن/نايلون FR',
    durability: '50-100 دورة غسيل (غسيل صناعي)'
  },
  {
    technology: 'إدارة الرطوبة',
    description: 'امتصاص متكامل للراحة في حرارة المملكة',
    benefits: ['تقليل الإجهاد الحراري', 'تحسين الراحة', 'تمديد وقت الارتداء'],
    materials: 'أقمشة FR مع تشطيبات امتصاص الرطوبة',
    durability: 'طوال عمر الملابس'
  },
  {
    technology: 'تقنية تصنيف القوس',
    description: 'حماية محددة ضد القوس الكهربائي الوميضي',
    benefits: ['حماية مقاسة (ATPV)', 'تصنيفات سلامة واضحة', 'ضمان الامتثال'],
    materials: 'أقمشة FR مصنفة للقوس مع قيم ATPV مختبرة',
    durability: 'حسب مواصفات الشركة المصنعة'
  },
  {
    technology: 'تكامل الرؤية العالية',
    description: 'مواد عاكسة في ملابس FR',
    benefits: ['حماية مزدوجة', 'تقليل الطبقات', 'امتثال أفضل'],
    materials: 'أقمشة FR مع شريط عاكس مصنف FR',
    durability: '50+ دورة غسيل للانعكاسية'
  }
]

const complianceChecklist = [
  {
    category: 'التوثيق',
    items: [
      'شهادات المطابقة لجميع معدات الحماية',
      'تقارير اختبار من مختبرات معتمدة',
      'وثائق تسجيل ساسو',
      'ضمانات ومواصفات الشركة المصنعة',
      'سجلات تدريب مستخدمي المعدات'
    ]
  },
  {
    category: 'عملية الاختيار',
    items: [
      'توثيق تقييم المخاطر',
      'تقييم المخاطر لكل دور وظيفي',
      'تبرير اختيار المعدات',
      'تقييم التوافق (مخاطر متعددة)',
      'تقييم الراحة وقابلية الاستخدام'
    ]
  },
  {
    category: 'برنامج الصيانة',
    items: [
      'جداول وقوائم فحص',
      'بروتوكولات الغسيل (شهادة FR)',
      'معايير الإصلاح مقابل الاستبدال',
      'متطلبات التخزين',
      'جداول الإيقاف عن الخدمة'
    ]
  },
  {
    category: 'متطلبات التدريب',
    items: [
      'إجراءات الارتداء والخلع الصحيحة',
      'الفحص قبل كل استخدام',
      'حدود الحماية',
      'مسؤوليات العناية والصيانة',
      'إجراءات الطوارئ'
    ]
  }
]

export default function IndustrialSafetyWorkwearPageAr() {
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
            <li><span className="text-gray-900 font-medium">ملابس السلامة الصناعية</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/industrial/saudi-safety-standards.jpg"
            alt="ملابس السلامة الصناعية"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30">
                السلامة الصناعية
              </span>
              <span className="bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-medium border border-red-400/30">
                دليل الامتثال
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ملابس السلامة الصناعية: دليل الامتثال السعودي الشامل 2025
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              دليل أساسي لأزياء السلامة الصناعية وملابس العمل FR ومتطلبات معدات الحماية الشخصية 
              لقطاعات النفط والغاز والبتروكيماويات والتصنيع والبناء في المملكة العربية السعودية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق السلامة الصناعية يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>16 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 أبريل 2025</span>
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
                  <TagIcon className="h-5 w-5 text-orange-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Safety Alert */}
              <div className="mt-6 bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5" />
                  السلامة أولاً
                </h3>
                <p className="text-sm text-red-700 mb-4">
                  ملابس العمل غير المتوافقة تعرض الأرواح للخطر. تحقق دائماً من الشهادات.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  احصل على مراجعة امتثال
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">السلامة الصناعية في رؤية 2030</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                مع توسع المملكة العربية السعودية لقاعدتها الصناعية في إطار رؤية 2030، أصبحت سلامة مكان العمل 
                أولوية وطنية. القطاع الصناعي في المملكة—الذي يشمل النفط والغاز والبتروكيماويات 
                والتصنيع والبناء—يوظف ملايين العمال الذين يعتمدون على ملابس السلامة المناسبة 
                لحمايتهم من المخاطر الجسيمة.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/industrial/saudi-safety-standards.jpg"
                  alt="معايير السلامة الصناعية السعودية"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-orange-900 mb-4">إحصائيات السلامة الصناعية السعودية</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">تقليل الإصابات مع معدات الحماية</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">+2 مليار ريال</div>
                    <div className="text-sm text-gray-600">قيمة سوق معدات الحماية السنوية</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">+15</div>
                    <div className="text-sm text-gray-600">معايير سلامة ساسو</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">+5 مليون</div>
                    <div className="text-sm text-gray-600">عامل صناعي في المملكة</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Standards */}
            <section id="standards" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">المعايير السعودية والدولية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                اعتمدت المملكة العربية السعودية المعايير الدولية للسلامة من خلال ساسو (الهيئة السعودية 
                للمواصفات والمقاييس والجودة)، مع متطلبات إضافية من المشغلين الرئيسيين 
                مثل أرامكو السعودية:
              </p>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">المعيار</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">الوصف</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">التطبيق</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {safetyStandards.map((std, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{std.standard}</td>
                        <td className="px-6 py-4 text-gray-600">{std.description}</td>
                        <td className="px-6 py-4 text-gray-600">{std.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Hazard Protection */}
            <section id="hazard-protection" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الحماية حسب نوع الخطر</h2>
              
              <div className="space-y-6">
                {hazardProtection.map((hazard, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <hazard.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{hazard.hazard}</h3>
                        <p className="text-sm text-gray-500">{hazard.industries}</p>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        {hazard.standards}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">المخاطر:</h4>
                        <ul className="space-y-1">
                          {hazard.risks.map((risk, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-red-700">
                              <ExclamationTriangleIcon className="h-4 w-4" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">الحماية:</h4>
                        <ul className="space-y-1">
                          {hazard.protection.map((prot, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-green-700">
                              <CheckCircleIcon className="h-4 w-4" />
                              {prot}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Industry Guide */}
            <section id="industry-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">متطلبات القطاعات</h2>
              
              <div className="space-y-8">
                {industryRequirements.map((industry, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={industry.image}
                          alt={industry.industry}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.industry}</h3>
                        <p className="text-gray-600 mb-4">{industry.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">العناصر الإلزامية:</h4>
                            <ul className="space-y-1">
                              {industry.mandatoryItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">اعتبارات خاصة:</h4>
                            <ul className="space-y-1">
                              {industry.specialConsiderations.map((consideration, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <ExclamationTriangleIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
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

            {/* Fabric Technology */}
            <section id="fabric-technology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تقنيات أقمشة السلامة</h2>
              
              <div className="space-y-4">
                {fabricTechnologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{tech.technology}</h3>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech.durability}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{tech.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-700">المواد: </span>
                        <span className="text-sm text-gray-600">{tech.materials}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.benefits.map((benefit, i) => (
                          <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            ✓ {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Compliance Checklist */}
            <section id="compliance" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الامتثال والشهادات</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {complianceChecklist.map((category, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                          <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">تأكد من حماية قواك العاملة</h2>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  يونيوم هي مزود ملابس السلامة الصناعية الموثوق في المملكة العربية السعودية، 
                  تخدم شركات النفط والغاز والبتروكيماويات والتصنيع الكبرى 
                  بحلول سلامة معتمدة ومتوافقة.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب تقييم السلامة
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/manufacturing"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض الحلول الصناعية
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
