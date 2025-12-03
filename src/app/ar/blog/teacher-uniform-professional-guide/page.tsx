import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  BookOpenIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  StarIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي المعلم المثالي: الاحترافية والراحة في البيئة التعليمية | يونيوم',
  description: 'دليل شامل لأزياء المعلمين في السعودية. تعرف على قواعد اللباس المهني، خيارات الأقمشة المريحة للفصول الدراسية، الاعتبارات الثقافية، وكيف يؤثر مظهر المعلم على احترام الطلاب ونتائج التعلم.',
  keywords: 'زي المعلمين السعودية, قواعد لباس المعلم, ملابس المعلم المهنية, أزياء طاقم المدرسة, معايير اللباس الأكاديمي, إرشادات ملابس المعلم, أزياء التعليم السعودي, لباس الفصل المناسب',
  openGraph: {
    title: 'زي المعلم المثالي: الاحترافية والراحة في البيئة التعليمية',
    description: 'دليل شامل لتصميم أزياء المعلمين المهنية التي تعزز السلطة والراحة في المؤسسات التعليمية السعودية',
    images: ['/images/education/teacher-hero-background.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-03-01T08:00:00Z',
    authors: ['فريق التعليم يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/teacher-uniform-professional-guide/',
    languages: {
      'en': '/blog/teacher-uniform-professional-guide/',
      'ar': '/ar/blog/teacher-uniform-professional-guide/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'دور مظهر المعلم' },
  { id: 'psychology', title: 'سيكولوجية اللباس المهني' },
  { id: 'education-levels', title: 'الأزياء حسب المرحلة التعليمية' },
  { id: 'cultural-design', title: 'التصميم الثقافي والمحتشم' },
  { id: 'fabric-comfort', title: 'خيارات الأقمشة للراحة' },
  { id: 'administrative', title: 'زي الطاقم الإداري' },
  { id: 'implementation', title: 'دليل التطبيق المدرسي' },
  { id: 'best-practices', title: 'أفضل الممارسات والمعايير' }
]

const teacherAttireImpact = [
  {
    stat: '87%',
    description: 'من الطلاب يفيدون باحترام أعلى للمعلمين ذوي المظهر المهني',
    source: 'مجلة علم النفس التربوي'
  },
  {
    stat: '23%',
    description: 'تحسن في الانضباط الصفي مع قواعد لباس المعلمين الموحدة',
    source: 'دراسة وزارة التعليم السعودية'
  },
  {
    stat: '91%',
    description: 'من أولياء الأمور يربطون مظهر المعلم بجودة المدرسة',
    source: 'استطلاع KPMG للتعليم 2024'
  },
  {
    stat: '76%',
    description: 'من المعلمين يشعرون بثقة أكبر عند ارتداء الأزياء المهنية',
    source: 'بحث رفاهية المعلمين'
  }
]

const educationLevels = [
  {
    level: 'الطفولة المبكرة والروضة',
    icon: HeartIcon,
    color: 'pink',
    image: '/images/education/teacher-elementary.jpg',
    requirements: [
      'تصاميم مريحة تسمح بالحركة',
      'أقمشة مقاومة للبقع',
      'ألوان مشرقة ومرحبة مقبولة',
      'أحذية مغلقة ومريحة',
      'مجوهرات قليلة للسلامة'
    ],
    recommendations: [
      'قمصان بولو مع شعار المدرسة',
      'بناطيل أو تنانير قطنية مريحة',
      'كارديجان للطبقات',
      'مرايل عملية للأنشطة',
      'أحذية بنعل ناعم للحركة'
    ],
    considerations: 'المعلمون يقضون وقتاً كبيراً على الأرض، ينحنون، ويشاركون في أنشطة بدنية مع الأطفال الصغار.'
  },
  {
    level: 'المرحلة الابتدائية',
    icon: BookOpenIcon,
    color: 'blue',
    image: '/images/education/teacher-elementary.jpg',
    requirements: [
      'مظهر مهني ولكن ودود',
      'أقمشة متينة للأيام النشطة',
      'رقبات وحواف محتشمة',
      'جيوب عملية للمستلزمات',
      'مواد سهلة العناية'
    ],
    recommendations: [
      'قمصان بياقة أو بلوزات',
      'بناطيل رسمية أو تنانير محتشمة',
      'سترات خفيفة للمناسبات الرسمية',
      'أحذية مهنية مريحة',
      'إكسسوارات بشعار المدرسة'
    ],
    considerations: 'التوازن بين السلطة والود هو المفتاح في هذه المرحلة.'
  },
  {
    level: 'المرحلة المتوسطة',
    icon: AcademicCapIcon,
    color: 'purple',
    image: '/images/education/teacher-middle-school.jpg',
    requirements: [
      'مظهر مهني أكثر رسمية',
      'ملابس تظهر السلطة بوضوح',
      'التزام متسق بقواعد اللباس',
      'أقمشة وتصنيع عالي الجودة',
      'تغطية مناسبة'
    ],
    recommendations: [
      'قمصان رسمية مع ربطات عنق (للرجال)',
      'بلوزات وسترات مهنية (للنساء)',
      'بناطيل رسمية أو تنانير رسمية',
      'أحذية جلدية ملمعة',
      'دمج دقيق لألوان المدرسة'
    ],
    considerations: 'الطلاب في هذا العمر يختبرون الحدود؛ مظهر المعلم يعزز السلطة المهنية.'
  },
  {
    level: 'المرحلة الثانوية',
    icon: StarIcon,
    color: 'amber',
    image: '/images/education/teacher-high-school.jpg',
    requirements: [
      'معيار رسمي للأعمال',
      'مظهر القدوة',
      'تنويعات مناسبة للمادة',
      'مواد عالية الجودة',
      'مظهر أنيق لا تشوبه شائبة'
    ],
    recommendations: [
      'بدلات كاملة للمعلمين الذكور',
      'ملابس أعمال رسمية للنساء',
      'معاطف مختبر لمعلمي العلوم',
      'أزياء رياضية لطاقم الرياضة',
      'تنسيق ألوان القسم'
    ],
    considerations: 'تحضير الطلاب للعالم المهني؛ المعلمون يمثلون نموذج توقعات لباس العمل.'
  },
  {
    level: 'الجامعة والتعليم العالي',
    icon: LightBulbIcon,
    color: 'green',
    image: '/images/education/admin-suit-modern.jpg',
    requirements: [
      'ملابس مهنية أكاديمية',
      'لباس مناسب للقسم',
      'رسمي للمحاضرات، عملي للمختبرات',
      'حساسية ثقافية',
      'تعبير فردي ضمن الإرشادات'
    ],
    recommendations: [
      'رسمي للمحاضرات',
      'أنيق كاجوال لساعات المكتب',
      'العباءة الأكاديمية للمراسم',
      'ملابس عملية للعمل الميداني',
      'دمج اللباس الثقافي'
    ],
    considerations: 'التوازن بين التقاليد الأكاديمية والمعايير المهنية المعاصرة.'
  }
]

const culturalConsiderations = [
  {
    aspect: 'الملابس المهنية المحتشمة للنساء',
    description: 'تصميم أزياء معلمات مهنية تحترم متطلبات اللباس الإسلامي',
    solutions: [
      'أكمام كاملة كخيار أساسي',
      'تصاميم ياقة ورقبة متوافقة مع الحجاب',
      'تنانير وفساتين تحت الركبة أو كاملة الطول',
      'سترات وجاكيتات فضفاضة',
      'خيارات حجاب منسقة بألوان المدرسة',
      'قطع للطبقات للاحتشام'
    ]
  },
  {
    aspect: 'دمج التقاليد للرجال',
    description: 'خيارات لدمج العناصر السعودية التقليدية في السياق المهني',
    solutions: [
      'خيارات الثوب الرسمي للمناسبات الخاصة',
      'عناصر تقليدية مع قصات مهنية حديثة',
      'إرشادات تنسيق الغترة/الشماغ',
      'خيارات البدلة الغربية مع لمسات سعودية',
      'تنويعات موسمية تحترم التقاليد'
    ]
  },
  {
    aspect: 'المدارس المنفصلة حسب الجنس',
    description: 'اعتبارات خاصة لبيئات مدارس البنين والبنات',
    solutions: [
      'أزياء طاقم نسائي بالكامل لمدارس البنات',
      'تصاميم مركزة على الراحة للبيئات أحادية الجنس',
      'معايير تغطية مناسبة',
      'نهج مهني ولكن عملي',
      'إرشادات واضحة لكل بيئة'
    ]
  }
]

const fabricRecommendations = [
  {
    fabric: 'مزيج قطن فاخر (60/40)',
    breathability: 'ممتازة',
    durability: 'عالية',
    comfort: 'عالية جداً',
    maintenance: 'سهلة - غسيل آلي',
    bestFor: 'الاستخدام اليومي في الفصل، جميع المواسم',
    priceRange: '150-300 ريال/قطعة'
  },
  {
    fabric: 'مزيج بولي-فيسكوز',
    breathability: 'جيدة',
    durability: 'عالية جداً',
    comfort: 'جيدة',
    maintenance: 'سهلة جداً - بدون تجاعيد',
    bestFor: 'المناسبات الرسمية، الطاقم الإداري',
    priceRange: '200-400 ريال/قطعة'
  },
  {
    fabric: 'قطن تويل مرن',
    breathability: 'جيدة',
    durability: 'عالية',
    comfort: 'ممتازة',
    maintenance: 'سهلة',
    bestFor: 'المعلمون النشطون، معلمو الرياضة',
    priceRange: '120-250 ريال/قطعة'
  },
  {
    fabric: 'مزيج كتان-قطن',
    breathability: 'فائقة',
    durability: 'متوسطة',
    comfort: 'ممتازة',
    maintenance: 'يتطلب كي',
    bestFor: 'أشهر الصيف، الفصول الحارة',
    priceRange: '180-350 ريال/قطعة'
  },
  {
    fabric: 'قماش أداء محبوك',
    breathability: 'ممتازة',
    durability: 'عالية',
    comfort: 'عالية جداً',
    maintenance: 'سهلة جداً - جفاف سريع',
    bestFor: 'معلمو الرياضة، الأنشطة الخارجية',
    priceRange: '100-200 ريال/قطعة'
  }
]

const administrativeStaff = [
  {
    role: 'مدير المدرسة',
    attire: 'رسمي تنفيذي للأعمال',
    details: [
      'بدلات عالية الجودة أو لباس رسمي تقليدي',
      'أقمشة فاخرة تعكس القيادة',
      'ألوان المدرسة في الإكسسوارات',
      'معايير مظهر لا تشوبها شائبة',
      'أحذية رسمية'
    ]
  },
  {
    role: 'نائب المدير/الوكيل',
    attire: 'رسمي للأعمال',
    details: [
      'بدلات مهنية أو قطع منسقة',
      'أقل رسمية قليلاً من المدير',
      'تحديد القسم',
      'إكسسوارات مهنية',
      'أحذية جلدية عالية الجودة'
    ]
  },
  {
    role: 'رؤساء الأقسام',
    attire: 'مهني أنيق للأعمال',
    details: [
      'سترات مع بناطيل/تنانير منسقة',
      'ترميز لوني للقسم',
      'شارات الاسم والمسمى',
      'مهني ولكن ودود',
      'مريح لمهام التدريس'
    ]
  },
  {
    role: 'المساعدون الإداريون',
    attire: 'كاجوال إلى مهني للأعمال',
    details: [
      'أزياء منسقة مع علامة المدرسة',
      'مريحة للعمل المكتبي',
      'مظهر مهني للتفاعل مع أولياء الأمور',
      'عملية للمهام المتنوعة',
      'مظهر فريق متسق'
    ]
  },
  {
    role: 'طاقم الدعم',
    attire: 'أزياء عملية',
    details: [
      'ملابس عمل مناسبة للدور',
      'بولو أو قمصان بشعار المدرسة',
      'بناطيل عملية مريحة',
      'أحذية سلامة عند الحاجة',
      'تحديد هوية واضح'
    ]
  }
]

const implementationGuide = [
  {
    phase: 'المرحلة 1: التقييم',
    duration: '2-4 أسابيع',
    tasks: [
      'استطلاع ممارسات لباس الطاقم الحالية',
      'تحديد المتطلبات الثقافية والدينية',
      'تقييم الميزانية وخيارات الشراء',
      'مراجعة معايير المدارس المنافسة/النظيرة',
      'استشارة ممثلي الطاقم'
    ]
  },
  {
    phase: 'المرحلة 2: تطوير السياسة',
    duration: '4-6 أسابيع',
    tasks: [
      'صياغة سياسة شاملة لقواعد اللباس',
      'تحديد المعايير حسب الدور والقسم',
      'تأسيس الاستثناءات والتسهيلات',
      'إنشاء أدلة وأمثلة بصرية',
      'المراجعة والموافقة القانونية'
    ]
  },
  {
    phase: 'المرحلة 3: الشراء',
    duration: '6-8 أسابيع',
    tasks: [
      'طلب عروض أسعار من موردي الأزياء',
      'اختبار العينات وملاحظات الطاقم',
      'طلب بالجملة مع تنويعات المقاسات',
      'فحوصات ضمان الجودة',
      'تخطيط التوصيل والتوزيع'
    ]
  },
  {
    phase: 'المرحلة 4: الطرح',
    duration: '2-4 أسابيع',
    tasks: [
      'التواصل مع الطاقم والتدريب',
      'القياس والتجربة الفردية',
      'توزيع الأزياء',
      'فترة سماح للانتقال',
      'معالجة الأسئلة والمخاوف'
    ]
  },
  {
    phase: 'المرحلة 5: الصيانة',
    duration: 'مستمر',
    tasks: [
      'مراقبة الامتثال المنتظمة',
      'نظام طلب الاستبدال',
      'مراجعة السياسة السنوية',
      'جمع ملاحظات الطاقم',
      'إدارة علاقات الموردين'
    ]
  }
]

const bestPractices = [
  {
    practice: 'توفير كميات كافية',
    description: 'كل معلم يجب أن يحصل على 5 أطقم على الأقل للحفاظ على الانتعاش طوال أسبوع العمل',
    icon: ShieldCheckIcon
  },
  {
    practice: 'تقديم شمولية المقاسات',
    description: 'التأكد من توفر الأزياء بمجموعة واسعة من المقاسات مع خيارات تجربة مناسبة',
    icon: UserGroupIcon
  },
  {
    practice: 'مراعاة التحكم في المناخ',
    description: 'توفير تنويعات موسمية لصيف السعودية الحار وشتائها المعتدل',
    icon: SparklesIcon
  },
  {
    practice: 'السماح بالتعبير الشخصي',
    description: 'ضمن الإرشادات، السماح ببعض الإكسسوارات أو التنويعات التي تحافظ على الفردية',
    icon: StarIcon
  },
  {
    practice: 'وضع إرشادات العناية',
    description: 'توفير تعليمات غسيل واضحة للحفاظ على مظهر الزي وعمره الطويل',
    icon: BookOpenIcon
  },
  {
    practice: 'إنشاء قنوات الملاحظات',
    description: 'فرص منتظمة للطاقم لتقديم مدخلات حول الراحة والوظائف',
    icon: HeartIcon
  }
]

export default function TeacherUniformProfessionalGuidePageAr() {
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
            <li><span className="text-gray-900 font-medium">دليل زي المعلم المهني</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/teacher-hero-background.jpg"
            alt="معلمون محترفون"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">
                التعليم
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-400/30">
                التطوير المهني
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              زي المعلم المثالي: الاحترافية تلتقي بالراحة
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              اكتشف كيف يعزز مظهر المعلم المهني سلطة الفصل الدراسي، 
              واحترام الطلاب، وثقة المعلمين. دليل شامل للمؤسسات 
              التعليمية في المملكة العربية السعودية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق التعليم يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>12 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5" />
                <span>1 مارس 2025</span>
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
                  <TagIcon className="h-5 w-5 text-indigo-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA Card */}
              <div className="mt-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">تحتاج أزياء تعليمية؟</h3>
                <p className="text-sm text-indigo-100 mb-4">
                  يونيوم توفر أزياء مهنية لأفضل المدارس والجامعات في السعودية.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-indigo-600 px-4 py-2 rounded-lg font-bold hover:bg-indigo-50 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دور مظهر المعلم في التعليم</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في المشهد التعليمي المتطور في المملكة العربية السعودية، تمتد احترافية 
                المعلم إلى ما هو أبعد من المهارات التربوية لتشمل المظهر والعرض. مع تنافس 
                المدارس على التميز وتزايد تطلعات أولياء الأمور، أصبح الانطباع البصري 
                الذي يتركه المعلمون أكثر أهمية من أي وقت مضى.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/education/teacher-hero-background.jpg"
                  alt="معلمون محترفون في بيئة تعليمية"
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-bold text-gray-900 mb-3">لماذا تهم أزياء المعلمين</h3>
                <p className="text-gray-700">
                  يخلق مظهر المعلم المهني تمييزاً بصرياً يعزز السلطة، 
                  ويبني الثقة مع أولياء الأمور، ويؤسس ثقافة الاحترام 
                  داخل المجتمع المدرسي. عندما يرتدي المعلمون ملابس مهنية، 
                  فإنه يشير للطلاب أن التعليم هو مسعى جاد يستحق الاحترام.
                </p>
              </div>
            </section>

            {/* Psychology Section */}
            <section id="psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">سيكولوجية اللباس المهني</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                تُظهر الأبحاث باستمرار تأثير مظهر المعلم على النتائج 
                التعليمية وديناميكيات الفصل الدراسي:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {teacherAttireImpact.map((item, index) => (
                  <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">المصدر: {item.source}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">تأثير "الإدراك الملبوس"</h3>
                <p className="text-gray-700">
                  تُظهر الدراسات أن ارتداء الملابس المهنية لا يؤثر فقط على كيفية 
                  إدراك الآخرين لنا—بل يؤثر على عملياتنا المعرفية نفسها. المعلمون 
                  الذين يرتدون ملابس مهنية يفيدون بشعور أكبر بالسلطة والثقة والتركيز. 
                  هذا الدفع النفسي يترجم إلى إدارة أفضل للفصل وفعالية تدريس أعلى.
                </p>
              </div>
            </section>

            {/* Education Levels Section */}
            <section id="education-levels" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الأزياء حسب المرحلة التعليمية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                تتطلب المراحل التعليمية المختلفة نهجاً مختلفاً لمظهر المعلم. 
                إليك دليلاً شاملاً لكل مرحلة:
              </p>

              <div className="space-y-8">
                {educationLevels.map((level, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={level.image}
                          alt={`أزياء معلمي ${level.level}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`bg-${level.color}-100 p-2 rounded-lg`}>
                            <level.icon className={`h-6 w-6 text-${level.color}-600`} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{level.level}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">المتطلبات:</h4>
                            <ul className="space-y-1">
                              {level.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">التوصيات:</h4>
                            <ul className="space-y-1">
                              {level.recommendations.map((rec, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-indigo-500">•</span>
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <span className="text-sm text-gray-700">
                            <strong>الاعتبار الرئيسي:</strong> {level.considerations}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cultural Considerations */}
            <section id="cultural-design" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">التصميم الثقافي والمحتشم</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                يجب على المؤسسات التعليمية السعودية التوازن بين المعايير 
                المهنية الدولية والقيم الثقافية والدينية المحلية:
              </p>

              <div className="space-y-6">
                {culturalConsiderations.map((item, index) => (
                  <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">{item.aspect}</h3>
                    <p className="text-purple-800 mb-4">{item.description}</p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">حلول التصميم:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabric Choices */}
            <section id="fabric-comfort" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">خيارات الأقمشة للراحة</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                يقضي المعلمون 6-8 ساعات واقفين، غالباً في فصول دراسية 
                بتحكم متغير في المناخ. اختيار الأقمشة المناسبة ضروري للراحة طوال اليوم:
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">القماش</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">التنفس</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">الراحة</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">الأفضل لـ</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">النطاق السعري</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {fabricRecommendations.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{item.fabric}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.breathability === 'فائقة' || item.breathability === 'ممتازة' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.breathability}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.comfort === 'ممتازة' || item.comfort === 'عالية جداً' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.comfort}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{item.bestFor}</td>
                        <td className="px-4 py-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {item.priceRange}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Administrative Staff */}
            <section id="administrative" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">زي الطاقم الإداري</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                يساهم الطاقم غير التدريسي أيضاً في الصورة المهنية للمدرسة. 
                إليك الإرشادات حسب الدور:
              </p>

              <div className="space-y-4">
                {administrativeStaff.map((staff, index) => (
                  <div key={index} className={`rounded-xl p-6 border ${
                    index === 0 ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' :
                    'bg-white border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        index === 0 ? 'bg-amber-500 text-white' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {staff.attire}
                      </span>
                      <h3 className="font-bold text-gray-900">{staff.role}</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {staff.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل التطبيق المدرسي</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                يتطلب تطبيق برنامج زي المعلمين بنجاح تخطيطاً دقيقاً. 
                اتبع هذا النهج التدريجي:
              </p>

              <div className="space-y-6">
                {implementationGuide.map((phase, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
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

            {/* Best Practices */}
            <section id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">أفضل الممارسات والمعايير</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestPractices.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-indigo-100 p-2 rounded-lg">
                        <item.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="font-bold text-gray-900">{item.practice}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">ارتقِ بالصورة المهنية لمدرستك</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تشارك المدارس الرائدة في السعودية لإنشاء برامج 
                  شاملة لأزياء المعلمين تعزز الاحترافية والراحة.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/education"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول التعليم
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


