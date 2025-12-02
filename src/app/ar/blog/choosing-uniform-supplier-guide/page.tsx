import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckBadgeIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ScaleIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'كيف تختار مورد الزي الموحد المثالي لشركتك في 2025 | دليل يونيوم',
  description: 'دليل شامل لاختيار مورد الزي الموحد المثالي في المملكة العربية السعودية. تعرف على معايير الجودة وعوامل التسعير وموثوقية التسليم وخيارات التخصيص ومعايير التقييم الرئيسية للأزياء المؤسسية والصحية والضيافة والصناعية.',
  keywords: 'مورد زي موحد السعودية, اختيار مورد ملابس العمل, شراء الزي المؤسسي, أفضل شركة زي موحد السعودية, معايير جودة الزي الموحد, طلب زي موحد بالجملة, مصنع زي موحد مخصص, مورد ملابس مهنية الرياض جدة الدمام',
  openGraph: {
    title: 'كيف تختار مورد الزي الموحد المثالي لشركتك في 2025',
    description: 'دليل خبراء لتقييم واختيار موردي الزي الموحد في المملكة العربية السعودية',
    images: ['/images/services/consultation-meeting.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-01-20T08:00:00Z',
    authors: ['فريق المشتريات يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/choosing-uniform-supplier-guide/',
    languages: {
      'en': '/blog/choosing-uniform-supplier-guide/',
      'ar': '/ar/blog/choosing-uniform-supplier-guide/',
    }
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'كيف تختار مورد الزي الموحد المثالي',
  description: 'دليل خطوة بخطوة لاختيار مورد الزي الموحد المثالي لعملك في المملكة العربية السعودية',
  image: 'https://uneom.com/images/services/consultation-meeting.jpg',
  inLanguage: 'ar',
  totalTime: 'P2W',
  step: [
    {
      '@type': 'HowToStep',
      name: 'حدد متطلباتك',
      text: 'حدد احتياجاتك من الزي الموحد بما في ذلك الكمية ومعايير الجودة ومتطلبات التخصيص'
    },
    {
      '@type': 'HowToStep',
      name: 'ابحث عن الموردين المحتملين',
      text: 'أنشئ قائمة مختصرة من الموردين بناءً على السمعة والشهادات والخبرة في المجال'
    },
    {
      '@type': 'HowToStep',
      name: 'اطلب وقارن العروض',
      text: 'احصل على عروض أسعار مفصلة وقارن التسعير والجودة والخدمات ذات القيمة المضافة'
    },
    {
      '@type': 'HowToStep',
      name: 'قيّم العينات',
      text: 'اطلب واختبر عينات المنتجات من حيث الجودة والراحة والمتانة'
    },
    {
      '@type': 'HowToStep',
      name: 'اتخذ قرارك',
      text: 'اختر المورد الذي يلبي معاييرك بشكل أفضل وتفاوض على الشروط النهائية'
    }
  ]
}

const tableOfContents = [
  { id: 'introduction', title: 'لماذا يهم اختيار المورد' },
  { id: 'requirements', title: 'تحديد متطلباتك' },
  { id: 'evaluation-criteria', title: 'معايير التقييم الرئيسية' },
  { id: 'quality-standards', title: 'معايير الجودة والشهادات' },
  { id: 'pricing', title: 'فهم عوامل التسعير' },
  { id: 'red-flags', title: 'علامات التحذير' },
  { id: 'checklist', title: 'قائمة تقييم المورد' },
  { id: 'negotiation', title: 'نصائح التفاوض' }
]

const evaluationCriteria = [
  {
    icon: CheckBadgeIcon,
    title: 'الجودة والحرفية',
    weight: '30%',
    description: 'أساس برنامج الزي الموحد الجيد. الجودة السيئة تؤدي إلى استبدال متكرر وشكاوى الموظفين وضرر العلامة التجارية.',
    checkpoints: [
      'اختبار جودة القماش والمتانة',
      'معايير الخياطة والبناء',
      'ثبات اللون بعد غسلات متعددة',
      'اتساق المقاسات عبر الدفعات',
      'تفاصيل التشطيب والعرض العام'
    ]
  },
  {
    icon: TruckIcon,
    title: 'التسليم والموثوقية',
    weight: '25%',
    description: 'التسليم المتسق في الوقت المحدد أمر حاسم للحفاظ على مخزون الزي الموحد وتلبية الاحتياجات التشغيلية.',
    checkpoints: [
      'متوسط وقت التسليم للطلبات القياسية',
      'قدرات الطلبات العاجلة وتكاليفها',
      'سجل التسليم في الوقت المحدد',
      'خيارات إدارة المخزون',
      'تغطية التوصيل عبر المملكة'
    ]
  },
  {
    icon: CurrencyDollarIcon,
    title: 'التسعير والقيمة',
    weight: '20%',
    description: 'بينما التكلفة مهمة، نادراً ما يوفر الخيار الأرخص أفضل قيمة. ضع في اعتبارك التكلفة الإجمالية للملكية.',
    checkpoints: [
      'هيكل تسعير شفاف',
      'برامج خصم الكميات',
      'التكاليف المخفية (الإعداد، الشحن، إلخ)',
      'مرونة شروط الدفع',
      'استقرار الأسعار طويل المدى'
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'الخدمة والدعم',
    weight: '15%',
    description: 'خدمة العملاء الممتازة تضمن عمليات سلسة وحل سريع لأي مشاكل.',
    checkpoints: [
      'مدير حساب مخصص',
      'وقت الاستجابة للاستفسارات',
      'جودة دعم ما بعد البيع',
      'سياسات الإرجاع والاستبدال',
      'توفر الاستشارة الفنية'
    ]
  },
  {
    icon: ScaleIcon,
    title: 'قدرات التخصيص',
    weight: '10%',
    description: 'القدرة على تخصيص الأزياء حسب مواصفات علامتك التجارية تميز مؤسستك.',
    checkpoints: [
      'خيارات تطريز وطباعة الشعار',
      'قدرات مطابقة الألوان المخصصة',
      'خدمات التصميم حسب الطلب',
      'مرونة التعديل',
      'عملية تطوير العينات'
    ]
  }
]

const qualityCertifications = [
  {
    name: 'ISO 9001:2015',
    description: 'شهادة نظام إدارة الجودة تضمن عمليات جودة متسقة',
    importance: 'حرج',
    what_it_means: 'لدى المورد إجراءات جودة موثقة وعمليات تحسين مستمر'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'شهادة أن المنسوجات خالية من المواد الضارة',
    importance: 'عالي',
    what_it_means: 'الأقمشة آمنة للتلامس المطول مع الجلد وتلبي المعايير الصحية'
  },
  {
    name: 'شهادة SASO',
    description: 'امتثال الهيئة السعودية للمواصفات والمقاييس والجودة',
    importance: 'مطلوب',
    what_it_means: 'المنتجات تلبي المتطلبات التنظيمية السعودية للبيع في المملكة'
  },
  {
    name: 'ISO 14001',
    description: 'شهادة نظام الإدارة البيئية',
    importance: 'متزايد',
    what_it_means: 'يُظهر المورد التزاماً بالمسؤولية البيئية والاستدامة'
  },
  {
    name: 'شهادة WRAP',
    description: 'الإنتاج المعتمد المسؤول عالمياً',
    importance: 'مهم',
    what_it_means: 'ممارسات تصنيع أخلاقية بما في ذلك العمل العادل وظروف العمل الآمنة'
  }
]

const pricingFactors = [
  {
    factor: 'نوع القماش وجودته',
    impact: 'عالي',
    description: 'الأقمشة الفاخرة مثل القطن العضوي أو المزيج عالي الأداء أو المواد المتخصصة تؤثر بشكل كبير على التسعير.',
    tip: 'اطلب مواصفات القماش وقارن GSM (جرام لكل متر مربع) بين الموردين'
  },
  {
    factor: 'حجم الطلب',
    impact: 'عالي',
    description: 'الطلبات الأكبر تحصل عادة على تسعير أفضل لكل وحدة بسبب وفورات الحجم.',
    tip: 'تفاوض على مستويات الحجم وفكر في توحيد الطلبات عبر الأقسام'
  },
  {
    factor: 'مستوى التخصيص',
    impact: 'متوسط-عالي',
    description: 'التطريز والطباعة والألوان المخصصة والتصاميم حسب الطلب تضيف إلى التكلفة الأساسية.',
    tip: 'احصل على عروض مفصلة تظهر التكلفة الأساسية مقابل تكاليف التخصيص'
  },
  {
    factor: 'سرعة التسليم',
    impact: 'متوسط',
    description: 'الطلبات العاجلة والشحن السريع يزيدان التكاليف بشكل كبير.',
    tip: 'خطط للطلبات مسبقاً لتجنب رسوم الاستعجال - أوقات التسليم القياسية توفر المال'
  },
  {
    factor: 'الخدمات ذات القيمة المضافة',
    impact: 'متوسط',
    description: 'خدمات مثل إدارة المخزون والتغليف الفردي أو التوصيل المباشر للموظفين.',
    tip: 'قيّم الخدمات التي توفر قيمة حقيقية مقابل التكاليف غير الضرورية'
  },
  {
    factor: 'مدة العقد',
    impact: 'متوسط',
    description: 'الالتزامات طويلة المدى غالباً تفتح تسعيراً أفضل وخدمة ذات أولوية.',
    tip: 'وازن بين مدة الالتزام واحتياجات المرونة وأداء المورد'
  }
]

const redFlags = [
  {
    flag: 'عدم وجود حضور فعلي في السعودية',
    severity: 'عالي',
    explanation: 'بدون عمليات محلية، يصبح حل المشاكل وضمان الجودة والوفاء بالمواعيد أمراً صعباً.',
    alternative: 'اختر موردين لديهم صالات عرض أو مستودعات أو مكاتب في المملكة'
  },
  {
    flag: 'التردد في تقديم عينات',
    severity: 'عالي',
    explanation: 'الموردون الجيدون واثقون من منتجاتهم ويقدمون العينات للتقييم بسهولة.',
    alternative: 'اطلب عينات قبل تقديم طلبات كبيرة - ويفضل بمقاسات متعددة'
  },
  {
    flag: 'تسعير غير واضح أو رسوم مخفية',
    severity: 'عالي',
    explanation: 'نقص الشفافية غالباً يؤدي إلى تكاليف غير متوقعة وتجاوز الميزانية.',
    alternative: 'اطلب عروض أسعار مفصلة ومفصّلة تشمل جميع الرسوم والضرائب وتكاليف الشحن'
  },
  {
    flag: 'عدم وجود مراجع أو دراسات حالة',
    severity: 'متوسط-عالي',
    explanation: 'الموردون الراسخون يجب أن يكون لديهم محفظة من علاقات العملاء الناجحة.',
    alternative: 'اطلب مراجع من شركات مماثلة في مجالك'
  },
  {
    flag: 'أسعار منخفضة للغاية',
    severity: 'متوسط',
    explanation: 'الأسعار الأقل بكثير من أسعار السوق غالباً تشير إلى تنازلات في الجودة.',
    alternative: 'قارن العروض من موردين متعددين وتحقق من العروض المنخفضة بشكل غير عادي'
  },
  {
    flag: 'ضعف التواصل',
    severity: 'متوسط',
    explanation: 'الاستجابات البطيئة أثناء المبيعات غالباً تتنبأ بخدمة أسوأ بعد الشراء.',
    alternative: 'قيّم أوقات الاستجابة وجودة التواصل خلال مرحلة التقييم'
  },
  {
    flag: 'عدم وجود ضمان جودة',
    severity: 'متوسط-عالي',
    explanation: 'الموردون ذوو السمعة الجيدة يدعمون منتجاتهم بشروط ضمان واضحة.',
    alternative: 'تأكد من وجود ضمانات مكتوبة تغطي العيوب واتساق الألوان والمقاسات'
  }
]

const supplierChecklist = [
  {
    category: 'أوراق اعتماد الشركة',
    items: [
      'سجل تجاري ساري في المملكة العربية السعودية',
      'شهادات صناعية ذات صلة (ISO, SASO, إلخ)',
      'حد أدنى 3-5 سنوات من التاريخ التشغيلي',
      'تغطية تأمينية للمنتجات والعمليات',
      'عضوية في جمعيات الصناعة'
    ]
  },
  {
    category: 'قدرات الإنتاج',
    items: [
      'تصنيع داخلي أو شراكات مصنع موثوقة',
      'قدرة على التعامل مع متطلبات الحجم الخاصة بك',
      'عمليات مراقبة الجودة موثقة',
      'القدرة على التوسع مع نموك',
      'معايير التكنولوجيا والمعدات'
    ]
  },
  {
    category: 'جودة المنتج',
    items: [
      'جودة العينة تلبي التوقعات',
      'تقارير اختبار القماش متاحة',
      'اتساق المقاسات عبر العينات',
      'نتائج اختبار الغسيل مقدمة',
      'قدرات مطابقة الألوان مثبتة'
    ]
  },
  {
    category: 'معايير الخدمة',
    items: [
      'مدير حساب مخصص معين',
      'قنوات اتصال واضحة مؤسسة',
      'نظام تتبع الطلبات متاح',
      'سياسة الإرجاع/الاستبدال موثقة',
      'هيكل دعم ما بعد البيع موجود'
    ]
  },
  {
    category: 'الشروط التجارية',
    items: [
      'تسعير شفاف وتنافسي',
      'شروط الدفع مقبولة',
      'جداول التسليم واقعية',
      'شروط العقد عادلة ومتوازنة',
      'برنامج خصم الكميات متاح'
    ]
  }
]

const negotiationTips = [
  {
    tip: 'احضر مستعداً ببحث السوق',
    description: 'اعرف نطاقات الأسعار النموذجية وما يقدمه المنافسون. هذه المعرفة تمنحك نفوذاً وتضمن مفاوضات عادلة.'
  },
  {
    tip: 'اجمع الخدمات للحصول على قيمة أفضل',
    description: 'تفاوض على صفقات شاملة تشمل التصميم والإنتاج وإدارة المخزون والتوصيل للحصول على خصومات شاملة.'
  },
  {
    tip: 'ناقش فوائد الشراكة طويلة المدى',
    description: 'غالباً يقدم الموردون شروطاً أفضل للعلاقات الملتزمة طويلة المدى. عبّر عن اهتمامك بالشراكة المستمرة.'
  },
  {
    tip: 'اطلب طلبات تجريبية',
    description: 'قبل الالتزام بكميات كبيرة، تفاوض على طلبات تجريبية أصغر للتحقق من الجودة والخدمة.'
  },
  {
    tip: 'أدرج بنود الأداء',
    description: 'ابنِ ضمانات التسليم ومعايير الجودة والعلاجات لعدم الامتثال لحماية مصالحك.'
  },
  {
    tip: 'لا تضحِّ بالجودة من أجل السعر',
    description: 'ركز على القيمة الإجمالية بما في ذلك الجودة والموثوقية والخدمة. الخيار الأرخص غالباً يكلف أكثر على المدى الطويل.'
  }
]

export default function ChoosingUniformSupplierGuidePageAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white" dir="rtl">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4 border-b" aria-label="مسار التنقل">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 space-x-reverse text-sm">
              <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-900 font-medium">دليل اختيار مورد الزي الموحد</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/services/consultation-meeting.jpg"
              alt="اختيار مورد الزي الموحد"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">
                  دليل المشتريات
                </span>
                <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30">
                  نصائح الخبراء
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                كيف تختار مورد الزي الموحد المثالي لشركتك
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                دليل شامل لتقييم واختيار والشراكة مع مورد الزي الموحد المناسب 
                في المملكة العربية السعودية. اتخذ قرارات مستنيرة تؤثر على الجودة 
                والتكلفة ورضا الموظفين.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>فريق المشتريات يونيوم</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>12 دقيقة قراءة</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>20 يناير 2025</span>
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
                    <TagIcon className="h-5 w-5 text-emerald-600" />
                    فهرس المحتويات
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Download */}
                <div className="mt-6 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-emerald-900 mb-3">مورد مجاني</h3>
                  <p className="text-sm text-emerald-700 mb-4">
                    حمّل نموذج تقييم المورد الشامل
                  </p>
                  <Link
                    href="/ar/contact"
                    className="block text-center bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    احصل على النموذج المجاني
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BuildingOfficeIcon className="h-8 w-8 text-emerald-600" />
                  لماذا يهم اختيار المورد
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  اختيار مورد الزي الموحد المناسب هو أحد أكثر قرارات المشتريات تأثيراً 
                  التي ستتخذها مؤسستك. الأزياء التي يرتديها موظفوك تمثل علامتك التجارية، 
                  وتؤثر على معنويات الموظفين وإنتاجيتهم، وتؤثر بشكل كبير على ميزانيتك التشغيلية.
                </p>

                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-8">
                  <h3 className="font-bold text-emerald-900 mb-4">التكلفة الحقيقية لسوء اختيار المورد</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">تكاليف استبدال أعلى مع الأزياء منخفضة الجودة</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">25%</div>
                      <div className="text-sm text-gray-600">خسارة إنتاجية من ملابس العمل غير المريحة</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">3x</div>
                      <div className="text-sm text-gray-600">وقت أكثر في إدارة الموردين السيئين</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  يوفر هذا الدليل نهجاً منظماً لتقييم موردي الزي الموحد، مما يساعدك 
                  على تجنب المزالق الشائعة وبناء شراكة تقدم قيمة طويلة المدى.
                </p>
              </section>

              {/* Requirements Section */}
              <section id="requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">تحديد متطلباتك</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  قبل التواصل مع الموردين، حدد بوضوح ما تحتاجه. المتطلبات الموثقة جيداً 
                  تؤدي إلى عروض أسعار أفضل وسوء فهم أقل ونتائج أكثر نجاحاً.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">قائمة المتطلبات</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">الاحتياجات الكمية</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>إجمالي عدد الموظفين الذين يحتاجون الزي الموحد</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>عدد أطقم الزي لكل موظف</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>توزيع المقاسات عبر القوى العاملة</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>تقدير معدل الاستبدال السنوي</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>نطاق الميزانية وتفضيلات الدفع</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">الاحتياجات النوعية</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>متطلبات الأسلوب أو التصميم المحددة</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>ألوان العلامة التجارية واحتياجات التخصيص</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>تفضيلات القماش ومتطلبات الأداء</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>احتياجات الامتثال الخاصة بالصناعة</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>أولويات الاستدامة والمصادر الأخلاقية</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Evaluation Criteria */}
              <section id="evaluation-criteria" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير التقييم الرئيسية</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  استخدم هذه المعايير الموزونة لتقييم الموردين المحتملين بموضوعية. 
                  عدّل الأوزان بناءً على أولويات مؤسستك المحددة.
                </p>

                <div className="space-y-6">
                  {evaluationCriteria.map((criteria, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-emerald-100 p-3 rounded-xl">
                          <criteria.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">{criteria.title}</h3>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                              الوزن: {criteria.weight}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-2">{criteria.description}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">نقاط التقييم:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {criteria.checkpoints.map((checkpoint, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                              <span>{checkpoint}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quality Standards */}
              <section id="quality-standards" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير الجودة والشهادات</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  توفر الشهادات تحققاً مستقلاً من قدرات المورد. 
                  ابحث عن هذه الشهادات الرئيسية عند تقييم موردي الزي الموحد:
                </p>

                <div className="space-y-4">
                  {qualityCertifications.map((cert, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{cert.name}</h3>
                          <p className="text-gray-600 text-sm">{cert.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cert.importance === 'حرج' ? 'bg-red-100 text-red-700' :
                          cert.importance === 'مطلوب' ? 'bg-orange-100 text-orange-700' :
                          cert.importance === 'عالي' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {cert.importance}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-gray-700 text-sm">
                          <strong>ما يعنيه:</strong> {cert.what_it_means}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Red Flags */}
              <section id="red-flags" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
                  علامات التحذير
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  احمِ مؤسستك بمراقبة هذه العلامات التحذيرية أثناء تقييم المورد:
                </p>

                <div className="space-y-4">
                  {redFlags.map((item, index) => (
                    <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-red-900">{item.flag}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.severity === 'عالي' ? 'bg-red-200 text-red-800' :
                          'bg-orange-200 text-orange-800'
                        }`}>
                          مخاطر {item.severity}ة
                        </span>
                      </div>
                      <p className="text-red-800 text-sm mb-3">{item.explanation}</p>
                      <div className="bg-white rounded-lg p-3 border border-red-200">
                        <span className="text-green-700 text-sm">
                          <strong>✓ بدلاً من ذلك:</strong> {item.alternative}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Checklist */}
              <section id="checklist" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ClipboardDocumentCheckIcon className="h-8 w-8 text-emerald-600" />
                  قائمة تقييم المورد
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  استخدم هذه القائمة الشاملة عند تقييم موردي الزي الموحد المحتملين:
                </p>

                <div className="space-y-6">
                  {supplierChecklist.map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">{category.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.items.map((item, i) => (
                          <label key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-emerald-300 transition-colors">
                            <input type="checkbox" className="mt-1 h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Negotiation Tips */}
              <section id="negotiation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">نصائح التفاوض</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  بمجرد تحديد الموردين المحتملين، استخدم هذه الاستراتيجيات للتفاوض 
                  على أفضل الشروط:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {negotiationTips.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{item.tip}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لإيجاد شريك الزي الموحد المثالي؟</h2>
                  <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                    يونيوم كانت المورد الموثوق للزي الموحد في المملكة العربية السعودية لأكثر من 15 عاماً، 
                    تخدم أكثر من 500 مؤسسة عبر قطاعات الرعاية الصحية والضيافة والشركات والصناعة. 
                    دعنا نريك لماذا نحن الخيار الصحيح.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/ar/contact"
                      className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
                    >
                      اطلب عرض سعر
                      <ArrowLeftIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/ar/about"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      لماذا تختار يونيوم
                    </Link>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">أدلة ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/ar/blog/uniform-trends-2025-saudi-market" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/textile-innovations.jpg"
                      alt="اتجاهات الزي الموحد 2025"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      اتجاهات الزي الموحد 2025: السوق السعودي
                    </h3>
                    <p className="text-gray-600 text-sm">
                      ابقَ في المقدمة مع أحدث الابتكارات التي تحول الصناعة.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/ar/blog/corporate-uniforms-brand-perception" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/corporate-uniforms.jpg"
                      alt="الأزياء المؤسسية"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      الأزياء المؤسسية وإدراك العلامة التجارية
                    </h3>
                    <p className="text-gray-600 text-sm">
                      كيف تؤثر الملابس المهنية على صورة شركتك.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/ar/blog/sustainable-uniforms-2024-trends" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/sustainable-uniforms-2024.jpg"
                      alt="الأزياء المستدامة"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      دليل الأزياء المستدامة
                    </h3>
                    <p className="text-gray-600 text-sm">
                      خيارات صديقة للبيئة للمؤسسات الواعية بيئياً.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
