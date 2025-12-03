import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FlagIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  HeartIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الزي المؤسسي في اليوم الوطني: الاحتفال بالفخر السعودي بأناقة مهنية | يونيوم',
  description: 'اكتشف كيف تحتفل الشركات السعودية باليوم الوطني من خلال الزي المؤسسي. دليل خبراء لدمج الرموز الوطنية، موضوعات رؤية 2030، ألوان الأخضر والأبيض، والعناصر الوطنية مع الحفاظ على المعايير المهنية.',
  keywords: 'زي اليوم الوطني السعودي, ملابس 23 سبتمبر المؤسسية, لباس وطني للأعمال, أزياء رؤية 2030, الزي الأخضر السعودي, لباس الفخر الوطني, يوم التأسيس السعودي, ملابس وطنية للشركات',
  openGraph: {
    title: 'الزي المؤسسي في اليوم الوطني: الاحتفال بالفخر السعودي بأناقة مهنية',
    description: 'كيف تعبر الشركات السعودية عن الفخر الوطني من خلال برامج الزي المؤسسي',
    images: ['/images/corporate/corporate_brand.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-09-01T08:00:00Z',
    authors: ['فريق الشركات يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/national-day-corporate-uniforms/',
    languages: {
      'en': '/blog/national-day-corporate-uniforms/',
      'ar': '/ar/blog/national-day-corporate-uniforms/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'الفخر في الزي المهني' },
  { id: 'national-symbols', title: 'الرموز الوطنية في التصميم' },
  { id: 'color-psychology', title: 'قوة الأخضر والأبيض' },
  { id: 'uniform-options', title: 'خيارات الزي حسب القطاع' },
  { id: 'vision-2030', title: 'دمج رؤية 2030' },
  { id: 'implementation', title: 'تخطيط برنامجك' },
  { id: 'celebration-calendar', title: 'تقويم الاحتفالات الوطنية' },
  { id: 'best-practices', title: 'أفضل الممارسات والأفكار' }
]

const nationalPrideStats = [
  {
    stat: '94%',
    description: 'من الموظفين السعوديين يشعرون بفخر أكبر عند ارتداء أزياء بطابع وطني',
    source: 'استطلاع ثقافة العمل السعودية 2024'
  },
  {
    stat: '78%',
    description: 'من الشركات تفيد بتحسن وحدة الفريق خلال الاحتفالات الوطنية',
    source: 'تقرير إدارة الموارد البشرية السعودية'
  },
  {
    stat: '89%',
    description: 'من العملاء يقدرون الشركات التي تُظهر الفخر الوطني',
    source: 'دراسة مشاعر المستهلكين'
  },
  {
    stat: '3x',
    description: 'زيادة في تفاعل وسائل التواصل مع منشورات الزي الوطني',
    source: 'تحليلات وسائل التواصل السعودية'
  }
]

const nationalSymbols = [
  {
    symbol: 'ألوان العلم السعودي',
    significance: 'الأخضر يمثل الإسلام والازدهار؛ الأبيض يرمز للنقاء والسلام',
    designApplications: [
      'ألوان التمييز الرئيسية في الأزياء',
      'خيارات ربطات العنق والأوشحة',
      'ألوان خيوط التطريز',
      'تصاميم الدبابيس والشارات',
      'تفاصيل الحواف في الزي'
    ],
    icon: FlagIcon
  },
  {
    symbol: 'الشهادة والسيف',
    significance: 'شهادة التوحيد الإسلامية وسيف العدالة',
    designApplications: [
      'تطريز دقيق على الملابس الرسمية',
      'شارات دبوس لليوم الوطني',
      'أوشحة وربطات عنق مطبوعة',
      'إكسسوارات المناسبات الخاصة',
      'رقع تذكارية'
    ],
    icon: StarIcon
  },
  {
    symbol: 'النخلة والسيفين المتقاطعين',
    significance: 'الشعار الوطني يمثل العدالة والقوة والنمو',
    designApplications: [
      'دبابيس صدر وبروشات',
      'مناديل جيب مطرزة',
      'تصاميم أزرار الأكمام',
      'لمسات أبازيم الأحزمة',
      'أغطية أزرار رسمية'
    ],
    icon: SparklesIcon
  },
  {
    symbol: 'شعار رؤية 2030',
    significance: 'رحلة تحول المملكة وطموحاتها المستقبلية',
    designApplications: [
      'مجموعات زي حديثة',
      'ملابس قطاع التقنية',
      'زي فرق الابتكار',
      'أزياء المشاريع الخاصة',
      'ملابس المناسبات المؤسسية'
    ],
    icon: GlobeAltIcon
  }
]

const sectorUniforms = [
  {
    sector: 'البنوك والمالية',
    regularUniform: 'بدلات محافظة بالأزرق الداكن أو الفحمي أو الأسود',
    nationalDayOptions: [
      'ربطات عنق خضراء مع أنماط نخيل دقيقة',
      'مناديل جيب بيضاء بتطريز أخضر',
      'ربطات عنق مخططة بالأخضر والأبيض',
      'دبابيس صدر بالعلم السعودي',
      'أزرار أكمام خضراء برموز وطنية'
    ],
    specialConsiderations: 'الحفاظ على المظهر المهني مع إظهار الوطنية'
  },
  {
    sector: 'الرعاية الصحية',
    regularUniform: 'معاطف بيضاء، سكراب بألوان الأقسام',
    nationalDayOptions: [
      'قبعات أو حجابات سكراب خضراء',
      'معاطف بيضاء بحواف خضراء',
      'شارات اليوم الوطني',
      'إكسسوارات سماعة خضراء',
      'تصاميم كمامات وطنية'
    ],
    specialConsiderations: 'يجب الحفاظ على الامتثال لمكافحة العدوى'
  },
  {
    sector: 'التجزئة والضيافة',
    regularUniform: 'أزياء خاصة بالعلامة التجارية تختلف حسب الشركة',
    nationalDayOptions: [
      'مجموعات زي كاملة بالأخضر والأبيض',
      'أوشحة وإكسسوارات بالعلم الوطني',
      'مرايل إصدار خاص',
      'شارات أسماء وطنية',
      'لمسات مستوحاة من التراث'
    ],
    specialConsiderations: 'رؤية عالية للعملاء؛ أقصى تعبير وطني'
  },
  {
    sector: 'الحكومة والقطاع العام',
    regularUniform: 'بدلات رسمية أو لباس تقليدي',
    nationalDayOptions: [
      'تشجيع اللباس السعودي التقليدي',
      'البشت الأخضر للمسؤولين التنفيذيين',
      'إكسسوارات خضراء رسمية',
      'لباس الاحتفال الرسمي',
      'عناصر احتفالية'
    ],
    specialConsiderations: 'غالباً يقود الاحتفالات الوطنية؛ أعلى درجات الرسمية'
  },
  {
    sector: 'التقنية والشركات الناشئة',
    regularUniform: 'أنيق كاجوال إلى مهني كاجوال',
    nationalDayOptions: [
      'قمصان بولو خضراء بشعار الشركة',
      'تيشيرتات كاجوال بالأخضر والأبيض',
      'ملابس بموضوع رؤية 2030',
      'تصاميم سعودية حديثة',
      'مزج التقنية بالتراث'
    ],
    specialConsiderations: 'مزيد من الحرية الإبداعية؛ تصاميم تركز على الابتكار'
  },
  {
    sector: 'التعليم',
    regularUniform: 'زي معلمين مهني',
    nationalDayOptions: [
      'أزياء بطابع أخضر وأبيض',
      'إكسسوارات التراث السعودي',
      'أوشحة احتفال خاصة',
      'شارات وطنية للطلاب والموظفين',
      'أيام اللباس التقليدي'
    ],
    specialConsiderations: 'فرصة تعليمية؛ تشمل الطلاب'
  }
]

const vision2030Integration = [
  {
    theme: 'مجتمع حيوي',
    uniformConcept: 'الاحتفال بالتراث الثقافي مع احتضان الحداثة',
    elements: [
      'أنماط تقليدية بقصات حديثة',
      'لوحات ألوان مستوحاة من التراث',
      'رسائل جودة الحياة',
      'أزياء قطاع الفنون والترفيه',
      'التركيز على السياحة والضيافة'
    ]
  },
  {
    theme: 'اقتصاد مزدهر',
    uniformConcept: 'التميز المهني والتنافسية العالمية',
    elements: [
      'مواد عالية الجودة',
      'معايير أعمال دولية',
      'تصاميم قطاع الابتكار',
      'ملابس بطابع ريادة الأعمال',
      'زي الاستثمار والمالية'
    ]
  },
  {
    theme: 'وطن طموح',
    uniformConcept: 'الكفاءة والمسؤولية والشفافية',
    elements: [
      'تحديث القطاع الحكومي',
      'تصاميم نظيفة وفعالة',
      'دمج الاستدامة',
      'أزياء الخدمة العامة',
      'لباس المؤسسات الوطنية'
    ]
  }
]

const celebrationCalendar = [
  {
    event: 'يوم التأسيس السعودي',
    date: '22 فبراير',
    significance: 'إحياء ذكرى تأسيس الدولة السعودية الأولى في 1727',
    uniformTheme: 'التركيز على التراث التاريخي بعناصر تقليدية',
    suggestions: [
      'تشجيع اللباس السعودي التقليدي',
      'تصاميم حديثة مستوحاة من التراث',
      'لوحات ألوان تاريخية',
      'لمسات الحرفية التقليدية',
      'عناصر التراث الإقليمي'
    ]
  },
  {
    event: 'اليوم الوطني السعودي',
    date: '23 سبتمبر',
    significance: 'الاحتفال بتوحيد المملكة في 1932',
    uniformTheme: 'أقصى تعبير وطني بالأخضر والأبيض',
    suggestions: [
      'أزياء كاملة بالأخضر والأبيض',
      'إكسسوارات العلم الوطني',
      'لباس منسق على مستوى الشركة',
      'مجموعات إصدار خاص',
      'احتفالات أمام الجمهور'
    ]
  },
  {
    event: 'يوم العلم',
    date: '11 مارس',
    significance: 'تكريم علم المملكة العربية السعودية',
    uniformTheme: 'إكسسوارات ولمسات تركز على العلم',
    suggestions: [
      'متطلبات دبوس العلم',
      'التركيز على اللمسات الخضراء',
      'إكسسوارات بنمط العلم',
      'عروض العلم الرسمية',
      'أنشطة العلم التعليمية'
    ]
  }
]

const implementationGuide = [
  {
    phase: 'التخطيط (3-6 أشهر قبل)',
    tasks: [
      'تحديد تخصيص الميزانية',
      'استطلاع تفضيلات الموظفين',
      'تصميم أو اختيار الخيارات',
      'التنسيق مع مورد الأزياء',
      'تخطيط استراتيجية الاتصال'
    ]
  },
  {
    phase: 'التصميم والموافقة (2-3 أشهر قبل)',
    tasks: [
      'مراجعة مفاهيم التصميم',
      'ضمان الملاءمة الثقافية',
      'الحصول على موافقة الإدارة',
      'إنتاج واختبار العينات',
      'تحديد الكميات والمقاسات النهائية'
    ]
  },
  {
    phase: 'الإنتاج (1-2 شهر قبل)',
    tasks: [
      'تقديم طلبات الجملة',
      'فحوصات مراقبة الجودة',
      'تخطيط الخدمات اللوجستية',
      'ترتيبات التخزين',
      'جدولة التوزيع'
    ]
  },
  {
    phase: 'التوزيع (1-2 أسبوع قبل)',
    tasks: [
      'جمع مقاسات الموظفين',
      'التوزيع حسب القسم',
      'توزيع الإكسسوارات',
      'توفير تعليمات العناية',
      'إعداد وسائل التواصل'
    ]
  },
  {
    phase: 'يوم الاحتفال',
    tasks: [
      'تفعيل قواعد اللباس على مستوى الشركة',
      'حملات وسائل التواصل',
      'الاحتفالات الداخلية',
      'المناسبات أمام العملاء',
      'توثيق صور'
    ]
  }
]

const bestPractices = [
  {
    practice: 'احترام الرموز الثقافية',
    description: 'التأكد من استخدام جميع الرموز الوطنية باحترام وبشكل مناسب',
    tips: [
      'استشارة مستشارين ثقافيين',
      'اتباع الإرشادات الرسمية',
      'تجنب الوضع على عناصر غير مناسبة',
      'الحفاظ على الكرامة في جميع الاستخدامات'
    ]
  },
  {
    practice: 'التوازن بين الفخر والاحترافية',
    description: 'التعبير الوطني يجب أن يعزز المعايير المهنية لا يستبدلها',
    tips: [
      'الحفاظ على لباس مناسب للصناعة',
      'استخدام اللمسات بدلاً من التحول الكامل',
      'الحفاظ على أناقة الأدوار أمام العملاء',
      'السماح بالتعبير الشخصي ضمن الإرشادات'
    ]
  },
  {
    practice: 'شمول جميع الموظفين',
    description: 'الاحتفالات الوطنية يجب أن توحد القوى العاملة بأكملها',
    tips: [
      'توفير خيارات لجميع الأدوار',
      'مراعاة شمولية المقاسات',
      'احترام التفضيلات الفردية',
      'جعل المشاركة ترحيبية وليست إلزامية'
    ]
  },
  {
    practice: 'الجودة على الكمية',
    description: 'الاستثمار في عناصر تمثل الفخر الوطني بشكل جيد',
    tips: [
      'اختيار مواد متينة',
      'التركيز على إكسسوارات متعددة الاستخدام',
      'اختيار عناصر قابلة للاستخدام سنوياً',
      'تجنب العناصر الرخيصة للاستعمال مرة واحدة'
    ]
  },
  {
    practice: 'التوثيق والمشاركة',
    description: 'التقاط الاحتفالات للتفاعل وبناء العلامة التجارية',
    tips: [
      'تصوير احترافي',
      'حملات وسائل التواصل',
      'الاتصالات الداخلية',
      'مقارنات سنوية'
    ]
  }
]

export default function NationalDayCorporateUniformsPageAr() {
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
            <li><span className="text-gray-900 font-medium">الزي المؤسسي في اليوم الوطني</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/corporate/corporate_brand.jpg"
            alt="أزياء اليوم الوطني السعودي"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                🇸🇦 الفخر الوطني
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                الثقافة المؤسسية
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              الزي المؤسسي في اليوم الوطني: الفخر والاحترافية
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              احتفل بالمناسبات الوطنية السعودية بأزياء مؤسسية تعبر 
              عن الفخر الوطني مع الحفاظ على التميز المهني. دليل شامل 
              للشركات التي تحتضن الهوية الوطنية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الشركات يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>10 دقائق قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                <span>1 سبتمبر 2025</span>
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
                  <TagIcon className="h-5 w-5 text-green-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA Card */}
              <div className="mt-6 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">خطط ليومك الوطني!</h3>
                <p className="text-sm text-green-100 mb-4">
                  يونيوم تصنع برامج أزياء وطنية للشركات السعودية.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-50 transition-colors"
                >
                  ابدأ الآن
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الفخر في الزي المهني</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في المملكة العربية السعودية، الاحتفالات الوطنية هي أكثر من مجرد عطلات—إنها 
                تعبيرات عن الهوية الجماعية والقيم المشتركة والفخر برحلة الأمة المميزة. 
                للشركات العاملة في المملكة، هذه المناسبات تقدم فرصة فريدة لتوحيد 
                الموظفين حول الفخر الوطني مع تعزيز الثقافة المؤسسية.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/corporate/corporate_brand.jpg"
                  alt="فريق مؤسسي بأزياء اليوم الوطني"
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {nationalPrideStats.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">المصدر: {item.source}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* National Symbols */}
            <section id="national-symbols" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الرموز الوطنية في التصميم</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                فهم الرموز الوطنية السعودية واستخدامها المناسب أمر ضروري 
                لإنشاء أزياء وطنية محترمة ومؤثرة:
              </p>

              <div className="space-y-6">
                {nationalSymbols.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <item.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">{item.symbol}</h3>
                        <p className="text-gray-600 mb-4">{item.significance}</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm">تطبيقات التصميم:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.designApplications.map((app, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>{app}</span>
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

            {/* Color Psychology */}
            <section id="color-psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قوة الأخضر والأبيض</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-700 text-white rounded-2xl p-8">
                  <h3 className="font-bold text-2xl mb-4">الأخضر السعودي</h3>
                  <p className="text-green-100 mb-4">
                    الأخضر المميز للعلم السعودي يمثل الإسلام والنمو والازدهار. 
                    إنه اللون الأساسي للاحتفالات الوطنية.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Pantone:</strong> 349 C</p>
                    <p className="text-sm"><strong>Hex:</strong> #006C35</p>
                    <p className="text-sm"><strong>RGB:</strong> 0, 108, 53</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300">
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">الأبيض النقي</h3>
                  <p className="text-gray-700 mb-4">
                    الأبيض يرمز للنقاء والسلام ومستقبل المملكة المشرق. 
                    يوفر التباين والتوازن في التصاميم الوطنية.
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-sm"><strong>الاستخدام:</strong> الخلفية، النص، اللمسات</p>
                    <p className="text-sm"><strong>يمثل:</strong> النقاء، السلام</p>
                    <p className="text-sm"><strong>الاقتران:</strong> دائماً مع الأخضر السعودي</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Uniform Options by Sector */}
            <section id="uniform-options" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">خيارات الزي حسب القطاع</h2>
              
              <div className="space-y-6">
                {sectorUniforms.map((sector, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <BuildingOfficeIcon className="h-6 w-6 text-green-600" />
                      <h3 className="font-bold text-gray-900 text-lg">{sector.sector}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      <strong>الزي الاعتيادي:</strong> {sector.regularUniform}
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">خيارات اليوم الوطني:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sector.nationalDayOptions.map((option, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-green-500">✓</span>
                            <span>{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-green-700 bg-green-50 rounded-lg p-3">
                      <strong>الاعتبار الرئيسي:</strong> {sector.specialConsiderations}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Vision 2030 */}
            <section id="vision-2030" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دمج رؤية 2030</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                رؤية السعودية 2030 تمثل رحلة تحول المملكة. 
                يمكن للأزياء المؤسسية أن تعكس هذه الطموحات:
              </p>

              <div className="space-y-6">
                {vision2030Integration.map((theme, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">{theme.theme}</h3>
                    <p className="text-green-800 mb-4">{theme.uniformConcept}</p>
                    <div className="flex flex-wrap gap-2">
                      {theme.elements.map((element, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-green-700 border border-green-300">
                          {element}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Celebration Calendar */}
            <section id="celebration-calendar" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تقويم الاحتفالات الوطنية</h2>
              
              <div className="space-y-6">
                {celebrationCalendar.map((event, index) => (
                  <div key={index} className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                    <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="h-6 w-6" />
                        <h3 className="font-bold text-lg">{event.event}</h3>
                      </div>
                      <span className="bg-white text-green-600 px-4 py-1 rounded-full font-bold">
                        {event.date}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">{event.significance}</p>
                      <p className="text-green-700 font-medium mb-4">
                        <strong>موضوع الزي:</strong> {event.uniformTheme}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">الاقتراحات:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {event.suggestions.map((suggestion, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تخطيط برنامجك</h2>
              
              <div className="space-y-4">
                {implementationGuide.map((phase, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <h3 className="font-bold text-gray-900">{phase.phase}</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">أفضل الممارسات والأفكار</h2>
              
              <div className="space-y-6">
                {bestPractices.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">{item.practice}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <StarIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">🇸🇦 احتفل بالفخر السعودي مع فريقك</h2>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تساعد الشركات السعودية على إنشاء برامج أزياء احتفال وطني 
                  لا تُنسى توحد الفرق وتعبر عن الفخر الوطني.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
                  >
                    ابدأ التخطيط
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/corporate"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الشركات
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


