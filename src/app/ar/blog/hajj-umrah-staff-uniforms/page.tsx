import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  SunIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي موظفي الحج والعمرة: خدمة الحجاج بتميز وأناقة | يونيوم',
  description: 'دليل شامل لأزياء العاملين في خدمة الحج والعمرة بالمملكة العربية السعودية. رؤى خبراء عن تصميم أزياء عملية ومحترمة ومناسبة للمناخ لموظفي الفنادق وعمال النقل وفرق الضيافة ومقدمي الخدمات في مكة المكرمة والمدينة المنورة.',
  keywords: 'زي موظفي الحج, زي عمال العمرة, زي فنادق مكة, ملابس ضيافة المدينة, زي خدمة الحجاج, ملابس العمل في المدن المقدسة, أزياء الضيافة الإسلامية, موظفي الحج السعودية, ملابس موسم الحج, أزياء السياحة الدينية',
  openGraph: {
    title: 'زي موظفي الحج والعمرة: خدمة الحجاج بتميز وأناقة',
    description: 'أزياء احترافية لمن يخدمون الحجاج في المدن المقدسة',
    images: ['/images/hospitality/hospitality_uniform_hotel.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/hajj-umrah-staff-uniforms/',
    languages: {
      'en': '/blog/hajj-umrah-staff-uniforms/',
      'ar': '/ar/blog/hajj-umrah-staff-uniforms/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'المسؤولية المقدسة' },
  { id: 'unique-requirements', title: 'المتطلبات الفريدة' },
  { id: 'sector-guide', title: 'دليل القطاعات' },
  { id: 'climate-solutions', title: 'حلول المناخ والراحة' },
  { id: 'cultural-sensitivity', title: 'الحساسية الثقافية' },
  { id: 'implementation', title: 'جدول التنفيذ' },
  { id: 'suppliers', title: 'اختيار المورد المناسب' }
]

const uniqueRequirements = [
  {
    requirement: 'أداء في الحرارة الشديدة',
    description: 'يعمل الموظفون في درجات حرارة تتجاوز 45 درجة مئوية خلال ذروة موسم الحج',
    solution: 'أقمشة تبريد متقدمة مع خصائص امتصاص الرطوبة وعكس الحرارة',
    icon: SunIcon
  },
  {
    requirement: 'التنقل في الحشود',
    description: 'يجب أن يكون الموظفون قابلين للتمييز بسهولة بين ملايين الحجاج',
    solution: 'ألوان مميزة وعناصر عاكسة وتحديد واضح للدور',
    icon: UserGroupIcon
  },
  {
    requirement: 'الاحترام الديني',
    description: 'يجب أن تحترم الأزياء قدسية المدن المقدسة',
    solution: 'تصاميم محتشمة وألوان مناسبة ولا صور قد تكون مشتتة',
    icon: StarIcon
  },
  {
    requirement: 'الخدمة متعددة اللغات',
    description: 'يخدم الموظفون حجاجاً من أكثر من 180 دولة يتحدثون لغات مختلفة',
    solution: 'أعلام لغات ورموز أقسام واضحة ولافتات عالمية',
    icon: GlobeAltIcon
  },
  {
    requirement: 'مناوبات ممتدة',
    description: 'يعمل كثير من الموظفين مناوبات 12-16 ساعة خلال فترات الذروة',
    solution: 'تصاميم تركز على الراحة وأحذية داعمة وأقمشة سهلة العناية',
    icon: ClockIcon
  },
  {
    requirement: 'معايير النظافة',
    description: 'الاتصال الوثيق مع الحجاج يتطلب نظافة لا تشوبها شائبة',
    solution: 'أقمشة مضادة للميكروبات ومجموعات أزياء متعددة ومواد سريعة الجفاف',
    icon: ShieldCheckIcon
  }
]

const sectorGuidelines = [
  {
    sector: 'الفنادق والإقامة',
    roles: ['الاستقبال', 'التدبير المنزلي', 'الكونسيرج', 'خدمة الأجراس', 'الأغذية والمشروبات'],
    keyConsiderations: [
      'مظهر أنيق يليق بتوقعات الحجاج',
      'تمييز واضح بين الأقسام',
      'معايير احتشام لجميع الموظفين',
      'راحة للوقوف لفترات طويلة',
      'سهولة التعرف لمساعدة الضيوف'
    ],
    colorSchemes: 'أخضر داكن وأبيض وذهبي - ألوان مرتبطة بالتراث الإسلامي',
    image: '/images/hospitality/hospitality_uniform_hotel_service.jpg'
  },
  {
    sector: 'النقل والخدمات اللوجستية',
    roles: ['سائقو الحافلات', 'المرشدون', 'المنسقون', 'موظفو اللوجستيات'],
    keyConsiderations: [
      'رؤية عالية للسلامة',
      'متانة للعمل النشط',
      'جيوب لأجهزة الاتصال',
      'حماية من الشمس للعمل الخارجي',
      'عناصر عاكسة للعمليات الليلية'
    ],
    colorSchemes: 'ألوان تعريف ساطعة مع عناصر عاكسة',
    image: '/images/hospitality/hospitality_full_look.jpg'
  },
  {
    sector: 'الدعم الصحي',
    roles: ['الإسعافات الأولية', 'المساعدون الطبيون', 'خدمات الكراسي المتحركة', 'دعم الطوارئ'],
    keyConsiderations: [
      'التعرف الفوري كموظفين طبيين',
      'جيوب عملية للمعدات',
      'سهولة التنظيف والتعقيم',
      'راحة للمساعدة البدنية',
      'تحديد لغة واضح'
    ],
    colorSchemes: 'أبيض طبي مع تعريف الصليب أو الهلال الأحمر',
    image: '/images/healthcare/healthcare_medical_uniform.jpg'
  },
  {
    sector: 'الإرشاد والمعلومات',
    roles: ['مرشدو الحجاج', 'مكتب المعلومات', 'المترجمون', 'المستشارون الدينيون'],
    keyConsiderations: [
      'مظهر ودود وذو سلطة',
      'شارات لغات متعددة',
      'راحة لجولات المشي',
      'مظهر مهني للإرشاد الديني',
      'سهولة التعرف في نقاط المعلومات'
    ],
    colorSchemes: 'ألوان سعودية تقليدية تمثل الضيافة',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg'
  },
  {
    sector: 'الأغذية والتموين',
    roles: ['موظفو المطبخ', 'النوادل', 'توزيع الطعام', 'مديرو التموين'],
    keyConsiderations: [
      'الامتثال لسلامة الغذاء',
      'مقاومة الحرارة لعمل المطبخ',
      'مواد مقاومة للبقع',
      'شبكات شعر وإكسسوارات نظافة',
      'عرض واضح لشهادة التعامل مع الطعام'
    ],
    colorSchemes: 'أبيض نظيف مع ألوان مميزة لتحديد الأقسام',
    image: '/images/hospitality/hospitality_uniform_chef.jpg'
  },
  {
    sector: 'الأمن وإدارة الحشود',
    roles: ['أفراد الأمن', 'مراقبو الحشود', 'منسقو الطوارئ'],
    keyConsiderations: [
      'مظهر ذو سلطة ولكن ودود',
      'رؤية عالية في الحشود',
      'عملي للمهام النشطة',
      'خيارات مناسبة للطقس',
      'تحديد واضح كأمن'
    ],
    colorSchemes: 'ألوان مميزة تفرق عن الخدمات الأخرى',
    image: '/images/security/saudi-events-security.jpg'
  }
]

const climateSolutions = [
  {
    technology: 'مواد تغيير الطور (PCM)',
    description: 'كبسولات دقيقة تمتص وتخزن وتطلق الحرارة لتنظيم درجة حرارة الجسم',
    benefit: 'يبقي مرتديه أبرد بما يصل إلى 3 درجات مئوية في الحرارة الشديدة',
    application: 'موظفو الخدمة الخارجية، عمال النقل، الأمن'
  },
  {
    technology: 'أقمشة امتصاص الرطوبة',
    description: 'ألياف متقدمة تسحب العرق بعيداً عن الجلد للتبخر السريع',
    benefit: 'تقلل عدم الراحة المتعلق بالعرق بنسبة 60%',
    application: 'جميع فئات الموظفين، خاصة الأدوار النشطة'
  },
  {
    technology: 'معالجات الحماية من الأشعة فوق البنفسجية',
    description: 'أقمشة بحماية UPF 50+ تحجب أشعة الشمس الضارة',
    benefit: 'يمنع حروق الشمس ويقلل مخاطر سرطان الجلد',
    application: 'المرشدون الخارجيون، موظفو النقل، الأمن'
  },
  {
    technology: 'أيون الفضة المضاد للميكروبات',
    description: 'ألياف مدمجة بالفضة تمنع نمو البكتيريا والرائحة',
    benefit: 'الأزياء تبقى منتعشة طوال المناوبات الممتدة',
    application: 'جميع الموظفين، خاصة أدوار الاتصال العالي'
  },
  {
    technology: 'نسج خفيفة تنفسية',
    description: 'هياكل قماش مهندسة تعظم تدفق الهواء',
    benefit: 'تحسن التهوية دون المساس بالمظهر',
    application: 'موظفو الفنادق، المرشدون، الأدوار الإدارية'
  }
]

const culturalSensitivity = [
  {
    aspect: 'معايير التصميم المحتشم',
    guidelines: [
      'خيارات طويلة لجميع الموظفات',
      'قصات فضفاضة لا تكشف شكل الجسم',
      'تصاميم ياقة ورقبة متوافقة مع الحجاب',
      'أطوال أكمام مناسبة (كاملة أو ثلاثة أرباع كحد أدنى)',
      'لا مواد شفافة أو كاشفة'
    ]
  },
  {
    aspect: 'مناسبة الألوان',
    guidelines: [
      'تجنب الألوان المرتبطة بالحداد (أسود نقي للأزياء)',
      'دمج ألوان التراث الإسلامي (أخضر، أبيض، ذهبي)',
      'احترام الإحرام الأبيض الذي يرتديه الحجاج الذكور',
      'تمييز الأقسام من خلال ألوان مميزة',
      'مراعاة ظهور الألوان في البيئات المزدحمة'
    ]
  },
  {
    aspect: 'عناصر التصميم',
    guidelines: [
      'لا صور أو شعارات قد تعتبر صنمية',
      'أنماط هندسية مفضلة على التصاميم التصويرية',
      'خط عربي إسلامي حيث يكون مناسباً',
      'احترام الطبيعة المقدسة للبيئة',
      'تجنب العناصر البراقة أو المشتتة'
    ]
  },
  {
    aspect: 'اعتبارات عملية',
    guidelines: [
      'سهولة الوضوء الشعائري مع تصاميم الأكمام',
      'راحة لأوقات الصلاة',
      'متانة لمتطلبات موسم الحج',
      'سهولة العناية للحفاظ على النظافة',
      'مناسبة للبيئات الداخلية والخارجية'
    ]
  }
]

const implementationTimeline = [
  {
    phase: 'التخطيط (12-18 شهراً قبل الحج)',
    activities: [
      'تقييم أعداد الموظفين والأدوار',
      'تحديد متطلبات الزي حسب القسم',
      'تخصيص الميزانية والموافقة',
      'اختيار الموردين والتعاقد'
    ]
  },
  {
    phase: 'التصميم والتطوير (9-12 شهراً قبل)',
    activities: [
      'تطوير التصميم المخصص',
      'إنتاج العينات والاختبار',
      'جمع ملاحظات الموظفين',
      'تنقيح التصميم والموافقة'
    ]
  },
  {
    phase: 'الإنتاج (6-9 أشهر قبل)',
    activities: [
      'بدء الإنتاج بالجملة',
      'عمليات مراقبة الجودة',
      'تخطيط توزيع المقاسات',
      'شراء الإكسسوارات والأحذية'
    ]
  },
  {
    phase: 'التوزيع (2-3 أشهر قبل)',
    activities: [
      'قياسات الموظفين الفردية',
      'جلسات تجربة الزي',
      'التوزيع حسب القسم',
      'وضع المخزون الاحتياطي'
    ]
  },
  {
    phase: 'عمليات موسم الحج',
    activities: [
      'خدمات الاستبدال السريع',
      'دعم الغسيل والصيانة',
      'إمدادات الزي الطارئة',
      'جمع وتخزين ما بعد الموسم'
    ]
  }
]

export default function HajjUmrahStaffUniformsPageAr() {
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
            <li><span className="text-gray-900 font-medium">زي موظفي الحج والعمرة</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hospitality/hospitality_uniform_hotel.jpg"
            alt="موظفو خدمة الحج"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">
                الحج والعمرة
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                خدمة الحجاج
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              زي موظفي الحج والعمرة: خدمة الحجاج بتميز
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              دليل شامل لتصميم أزياء تكرّم المسؤولية المقدسة 
              لخدمة ملايين الحجاج في المدن المقدسة مكة المكرمة والمدينة المنورة.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق خدمات الحج يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>15 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 مايو 2025</span>
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

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">موسم الحج يقترب؟</h3>
                <p className="text-sm text-emerald-100 mb-4">
                  خطط لبرنامج الزي مبكراً. يونيوم لديها أكثر من 15 عاماً في خدمة منظمات الحج.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
                >
                  ابدأ التخطيط الآن
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">المسؤولية المقدسة</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                خدمة الحجاج خلال الحج والعمرة من بين أشرف المسؤوليات 
                في المملكة العربية السعودية. الأزياء التي يرتديها موظفو الخدمة ليست مجرد 
                ملابس عملية—إنها تمثل التزام المملكة بالضيافة 
                واحترام الرحلة المقدسة وأعلى معايير التميز في الخدمة.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/hospitality/hospitality_uniform_hotel.jpg"
                  alt="موظفو خدمة الحج والعمرة"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <StarIcon className="h-6 w-6" />
                  حجم الخدمة
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">+2 مليون</div>
                    <div className="text-sm text-gray-600">حاج سنوياً</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">+15 مليون</div>
                    <div className="text-sm text-gray-600">معتمر سنوياً</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">+180</div>
                    <div className="text-sm text-gray-600">دولة ممثلة</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">+100 ألف</div>
                    <div className="text-sm text-gray-600">موظف خدمة</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Unique Requirements */}
            <section id="unique-requirements" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">المتطلبات الفريدة</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                تواجه أزياء خدمة الحج والعمرة تحديات لا مثيل لها في أي بيئة ضيافة أخرى:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {uniqueRequirements.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <item.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-900">{item.requirement}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="text-sm text-emerald-700">
                        <strong>الحل:</strong> {item.solution}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sector Guide */}
            <section id="sector-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل القطاعات</h2>
              
              <div className="space-y-8">
                {sectorGuidelines.map((sector, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={sector.image}
                          alt={sector.sector}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.sector}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {sector.roles.map((role, i) => (
                            <span key={i} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                              {role}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2 mb-4">
                          {sector.keyConsiderations.map((consideration, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{consideration}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <span className="text-sm text-gray-700">
                            <strong>الألوان الموصى بها:</strong> {sector.colorSchemes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Climate Solutions */}
            <section id="climate-solutions" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">حلول المناخ والراحة</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                تقنيات الأقمشة المتقدمة ضرورية للموظفين العاملين في درجات حرارة موسم الحج القصوى:
              </p>

              <div className="space-y-4">
                {climateSolutions.map((tech, index) => (
                  <div key={index} className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-orange-900">{tech.technology}</h3>
                      <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        {tech.application}
                      </span>
                    </div>
                    <p className="text-orange-800 mb-3">{tech.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-orange-700 font-medium">✓ {tech.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cultural Sensitivity */}
            <section id="cultural-sensitivity" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الحساسية الثقافية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                يجب أن تُظهر أزياء خدمات الحج والعمرة أعلى درجات الاحترام للقيم الإسلامية 
                وقدسية المدن المقدسة:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {culturalSensitivity.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-900 mb-4">{item.aspect}</h3>
                    <ul className="space-y-2">
                      {item.guidelines.map((guideline, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                          <CheckCircleIcon className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Timeline */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">جدول التنفيذ</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                برامج زي الحج الناجحة تتطلب تخطيطاً مسبقاً دقيقاً:
              </p>

              <div className="space-y-6">
                {implementationTimeline.map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-3">{phase.phase}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">استعد لموسم حج 2025</h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  يونيوم كانت الشريك الموثوق للزي الموحد لمقدمي خدمات الحج والعمرة 
                  لأكثر من 15 عاماً. ابدأ تخطيطك مبكراً لضمان التميز في الخدمة.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة الحج
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/hospitality"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض أعمالنا
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
