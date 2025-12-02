import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  StarIcon,
  BuildingOfficeIcon,
  HeartIcon,
  GlobeAltIcon,
  UserGroupIcon,
  SunIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الزي الموحد في قطاع الضيافة السعودي: تجربة ضيف لا تُنسى | يونيوم',
  description: 'اكتشف كيف يؤثر زي الضيافة على تجربة الضيوف في الفنادق والمطاعم السعودية. دليل خبراء عن تصميم الزي الموحد والاعتبارات الثقافية ومعايير مظهر الموظفين وهوية العلامة التجارية للفنادق 5 نجوم والمنتجعات والمطاعم في الرياض وجدة وعبر المملكة.',
  keywords: 'زي الضيافة السعودية, زي موظفي الفنادق, زي المطاعم الرياض, زي الفنادق 5 نجوم, تصميم زي الكونسيرج, ملابس الاستقبال, زي التدبير المنزلي, زي موظفي الأغذية والمشروبات, ملابس الفنادق الفاخرة, صناعة الضيافة السعودية',
  openGraph: {
    title: 'الزي الموحد في قطاع الضيافة السعودي: تجربة ضيف لا تُنسى',
    description: 'كيف تحول الأزياء المهنية تجربة الضيوف في قطاع الضيافة السعودي',
    images: ['/images/hospitality/hospitality_uniform_hotel_service.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-02-01T08:00:00Z',
    authors: ['فريق الضيافة يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/hospitality-uniforms-guest-experience/',
    languages: {
      'en': '/blog/hospitality-uniforms-guest-experience/',
      'ar': '/ar/blog/hospitality-uniforms-guest-experience/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'قوة الانطباع الأول' },
  { id: 'guest-psychology', title: 'سيكولوجية الضيف وتأثير الزي' },
  { id: 'department-guide', title: 'دليل الزي حسب القسم' },
  { id: 'cultural-considerations', title: 'التصميم الثقافي والمحتشم' },
  { id: 'fabric-technology', title: 'تقنية الأقمشة للضيافة' },
  { id: 'brand-integration', title: 'تكامل هوية العلامة التجارية' },
  { id: 'case-studies', title: 'قصص نجاح سعودية' }
]

const guestPsychologyStats = [
  {
    stat: '94%',
    description: 'من الضيوف يشكلون انطباعهم الأول خلال 7 ثوانٍ من التفاعل',
    source: 'أبحاث كورنيل للضيافة'
  },
  {
    stat: '73%',
    description: 'من الضيوف يربطون مظهر الموظفين بجودة الخدمة الإجمالية',
    source: 'دراسة J.D. Power للفنادق'
  },
  {
    stat: '68%',
    description: 'مستوى ثقة أعلى عندما يرتدي الموظفون أزياء مهنية ومناسبة',
    source: 'استطلاع Hospitality Net'
  },
  {
    stat: '45%',
    description: 'زيادة في التقييمات الإيجابية التي تذكر "المظهر المهني للموظفين"',
    source: 'تحليل TripAdvisor 2024'
  }
]

const departmentUniforms = [
  {
    department: 'الاستقبال ومكتب الخدمة',
    icon: BuildingOfficeIcon,
    color: 'blue',
    image: '/images/hospitality/hospitality_reception.jpg',
    keyElements: [
      'سترات أو بدلات مفصلة بألوان العلامة التجارية',
      'قمصان رسمية نظيفة ومكوية',
      'شارات أسماء مع اللقب وأعلام اللغات',
      'أوشحة أو ربطات عنق أنيقة كقطع مميزة',
      'أحذية مهنية لامعة'
    ],
    considerations: [
      'يجب أن ينقل السلطة والود',
      'الوقوف لفترات طويلة - الراحة ضرورية',
      'ألوان العلامة التجارية بارزة للتعرف',
      'جيوب للأدوات الأساسية (أقلام، مفاتيح)'
    ]
  },
  {
    department: 'خدمات الكونسيرج',
    icon: StarIcon,
    color: 'amber',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg',
    keyElements: [
      'زي مميز يفرق عن مكتب الاستقبال',
      'أقمشة فاخرة تنقل التفرد',
      'إكسسوارات مميزة (دبابيس طية، أزرار أكمام)',
      'عناصر تقليدية اختيارية للنكهة المحلية',
      'أحذية مريحة وأنيقة'
    ],
    considerations: [
      'يمثل أعلى مستوى خدمة',
      'يجب أن يكون لا يُنسى ويمكن التعرف عليه',
      'غالباً يُصوَّر مع الضيوف',
      'يحتاج للعمل داخلياً وخارجياً'
    ]
  },
  {
    department: 'التدبير المنزلي',
    icon: SparklesIcon,
    color: 'teal',
    image: '/images/hospitality/hospitality_uniform_department.jpg',
    keyElements: [
      'تونيكات أو فساتين عملية',
      'أحذية مريحة وداعمة',
      'جيوب عميقة للمستلزمات',
      'أقمشة سهلة العناية ومقاومة للبقع',
      'تصاميم محتشمة تحترم القيم الثقافية'
    ],
    considerations: [
      'عمل بدني شاق - الحركة ضرورية',
      'انحناء ومد متكرر',
      'التعرض لمواد التنظيف',
      'يجب أن يبقى منتعشاً طوال المناوبة'
    ]
  },
  {
    department: 'خدمة الأغذية والمشروبات',
    icon: HeartIcon,
    color: 'purple',
    image: '/images/hospitality/hospitality_uniform_resturant.jpg',
    keyElements: [
      'صدريات أو سترات أنيقة',
      'قمصان رسمية بيضاء أو ملونة',
      'مآزر لخدمة النبيذ أو المطاعم الكاجوال',
      'ربطات فراشة أو ربطات عنق',
      'أحذية مانعة للانزلاق ومريحة'
    ],
    considerations: [
      'حركة مستمرة وحمل أشياء',
      'مقاومة انسكاب الطعام والمشروبات',
      'تمييز المطاعم الفاخرة عن الكاجوال',
      'تغيرات درجة الحرارة (المطبخ إلى قاعة الطعام)'
    ]
  },
  {
    department: 'السبا والعافية',
    icon: SunIcon,
    color: 'green',
    image: '/images/hospitality/hospitality_spa_uniform.jpg',
    keyElements: [
      'تونيكات فضفاضة أو أعلى ملفوفة',
      'سراويل مريحة أو فضفاضة',
      'لوحات ألوان طبيعية ناعمة',
      'إكسسوارات قليلة',
      'أحذية هادئة ومريحة'
    ],
    considerations: [
      'يخلق جواً هادئاً ومريحاً',
      'العلاجات البدنية تتطلب حركة',
      'مقاومة الزيوت والمنتجات مطلوبة',
      'يجب الحفاظ على مظهر هادئ'
    ]
  },
  {
    department: 'الإدارة والتنفيذيين',
    icon: UserGroupIcon,
    color: 'gray',
    image: '/images/hospitality/hospitality_uniform_management.jpg',
    keyElements: [
      'بدلات مميزة أو ملابس تنفيذية',
      'أقمشة عالية الجودة',
      'تعريف علامة تجارية دقيق',
      'إكسسوارات مهنية',
      'معايير تهذيب لا تشوبها شائبة'
    ],
    considerations: [
      'يجب أن يفرض الاحترام والسلطة',
      'يمثل العلامة التجارية على أعلى مستوى',
      'غالباً في مواقف تواجه الضيوف',
      'يحتاج للانتقال بين الأماكن'
    ]
  }
]

const culturalConsiderations = [
  {
    aspect: 'الملابس النسائية المحتشمة',
    description: 'تصاميم تحترم قواعد اللباس الإسلامي مع الحفاظ على الأناقة المهنية',
    solutions: [
      'خيارات أكمام أطول (كاملة أو ثلاثة أرباع)',
      'خطوط رقبة أعلى مع تفاصيل أنيقة',
      'حواف أطول (تحت الركبة أو كاملة)',
      'تصاميم ياقة مناسبة للحجاب',
      'قصات فضفاضة لا تضر بالأناقة'
    ]
  },
  {
    aspect: 'العناصر التقليدية',
    description: 'دمج التراث السعودي في تصميم الزي للهوية المحلية الأصيلة',
    solutions: [
      'أنماط هندسية دقيقة مستوحاة من الفن الإسلامي',
      'لوحات ألوان سعودية تقليدية (ذهبي، أخضر، أبيض)',
      'عناصر اختيارية مستوحاة من الثوب للموظفين الذكور',
      'تطريز يضم زخارف محلية',
      'إكسسوارات تعكس الحرفية الإقليمية'
    ]
  },
  {
    aspect: 'توقعات الضيوف الدوليين',
    description: 'التوازن بين الثقافة المحلية ومعايير الضيافة الدولية',
    solutions: [
      'معايير مظهر مهني عالمية',
      'شارات أسماء متعددة اللغات',
      'أزياء أساسية محايدة ثقافياً مع لمسات محلية',
      'تغييرات موسمية للأحداث الدولية',
      'مرونة لخلفيات الموظفين المتنوعة'
    ]
  }
]

const fabricTechnology = [
  {
    technology: 'معالجة درع البقع',
    benefit: 'يصد السوائل ويمنع التلطخ من الانسكابات',
    application: 'خدمة الأغذية والمشروبات، التدبير المنزلي، موظفو المطبخ',
    durability: '+50 غسلة'
  },
  {
    technology: 'تشطيب مضاد للميكروبات',
    benefit: 'يمنع البكتيريا المسببة للرائحة، يبقي الأزياء منتعشة',
    application: 'جميع الأقسام، خاصة التدبير المنزلي والأغذية والمشروبات',
    durability: 'طوال عمر الملابس'
  },
  {
    technology: 'أقمشة التحكم في المناخ',
    benefit: 'تنظيم درجة الحرارة للانتقالات داخل/خارج المبنى',
    application: 'صف السيارات، حاملو الأمتعة، موظفو الأحداث الخارجية',
    durability: 'متأصل في القماش'
  },
  {
    technology: 'تشطيب مقاوم للتجاعيد',
    benefit: 'يحافظ على مظهر أنيق طوال المناوبات الطويلة',
    application: 'مكتب الاستقبال، الإدارة، خدمة الأغذية والمشروبات',
    durability: '+100 غسلة'
  },
  {
    technology: 'مزيج راحة مرن',
    benefit: 'يسمح بحرية الحركة دون فقدان الشكل',
    application: 'التدبير المنزلي، السبا، أدوار الخدمة النشطة',
    durability: 'متأصل في القماش'
  },
  {
    technology: 'الحماية من الأشعة فوق البنفسجية',
    benefit: 'يحمي الموظفين الخارجيين من التعرض الضار للشمس',
    application: 'مرافقو المسبح، صف السيارات، الأحداث الخارجية',
    durability: 'طوال عمر الملابس'
  }
]

const saudiSuccessStories = [
  {
    property: 'منتجع فاخر، البحر الأحمر',
    challenge: 'إنشاء أزياء مميزة لوجهة فخامة بيئية جديدة',
    solution: 'طوّرنا أزياء مستدامة باستخدام بلاستيك المحيطات المعاد تدويره، تضم ألوان وأنماط مستوحاة من البحر الأحمر',
    result: '98% رضا الموظفين، ظهرت في منشورات الضيافة الدولية',
    image: '/images/hospitality/hospitality_uniform_hotel.jpg'
  },
  {
    property: 'فندق 5 نجوم، الرياض',
    challenge: 'توحيد هوية العلامة التجارية عبر 8 منافذ أغذية ومشروبات',
    solution: 'أنشأنا نظام زي معياري مع قطع أساسية مشتركة وإكسسوارات خاصة بكل منفذ',
    result: '30% تخفيض في تكاليف الزي، تحسن تماسك العلامة التجارية',
    image: '/images/hospitality/hospitality_uniform_formal.jpg'
  },
  {
    property: 'فندق تراثي بوتيك، جدة',
    challenge: 'عكس التراث السعودي مع تلبية المعايير الدولية',
    solution: 'دمجنا أنماط معمارية البلد التقليدية في تصاميم الزي المعاصرة',
    result: 'ذكر "مظهر الموظفين" في TripAdvisor زاد 45%',
    image: '/images/hospitality/hospitality_full_look.jpg'
  }
]

export default function HospitalityUniformsGuestExperiencePageAr() {
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
            <li><span className="text-gray-900 font-medium">زي الضيافة وتجربة الضيوف</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hospitality/hospitality_uniform_hotel_service.jpg"
            alt="أزياء الضيافة"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium border border-amber-400/30">
                الضيافة
              </span>
              <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30">
                تجربة الضيوف
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              زي الضيافة: إنشاء تجارب ضيوف لا تُنسى
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              اكتشف كيف تحول الأزياء المهنية تصورات الضيوف وترتقي بجودة الخدمة 
              في قطاع الضيافة المزدهر في المملكة العربية السعودية. من الفنادق الفاخرة 
              إلى المطاعم البوتيك.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الضيافة يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 فبراير 2025</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Table of Contents */}
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TagIcon className="h-5 w-5 text-amber-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA Card */}
              <div className="mt-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">تحتاج أزياء ضيافة؟</h3>
                <p className="text-sm text-amber-100 mb-4">
                  يونيوم تخدم أفضل الفنادق والمنتجعات والمطاعم في المملكة العربية السعودية.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-amber-600 px-4 py-2 rounded-lg font-bold hover:bg-amber-50 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قوة الانطباع الأول</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في قطاع الضيافة المتوسع بسرعة في المملكة العربية السعودية، الزي الذي يرتديه موظفوك 
                هو أكثر بكثير من قواعد لباس—إنه بيان قوي لالتزام علامتك التجارية بالتميز. 
                بينما ترحب المملكة بملايين الزوار للسياحة والأعمال والحج والعمرة، 
                فإن المنافسة على تجارب الضيوف الاستثنائية لم تكن أشد من أي وقت مضى.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/hospitality/hospitality_uniform_hotel_service.jpg"
                  alt="موظفو ضيافة محترفون بالزي الموحد"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Guest Psychology */}
            <section id="guest-psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">سيكولوجية الضيف وتأثير الزي</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                تُظهر الأبحاث باستمرار التأثير النفسي العميق لمظهر الموظفين 
                على تصورات الضيوف وسلوكهم:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {guestPsychologyStats.map((item, index) => (
                  <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <div className="text-4xl font-bold text-amber-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">المصدر: {item.source}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Department Guide */}
            <section id="department-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل الزي حسب القسم</h2>
              
              <div className="space-y-8">
                {departmentUniforms.map((dept, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={dept.image}
                          alt={`أزياء ${dept.department}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`bg-${dept.color}-100 p-2 rounded-lg`}>
                            <dept.icon className={`h-6 w-6 text-${dept.color}-600`} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{dept.department}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">العناصر الرئيسية:</h4>
                            <ul className="space-y-1">
                              {dept.keyElements.map((element, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{element}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">الاعتبارات:</h4>
                            <ul className="space-y-1">
                              {dept.considerations.map((consideration, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-amber-500">•</span>
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

            {/* Cultural Considerations */}
            <section id="cultural-considerations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">التصميم الثقافي والمحتشم</h2>
              
              <div className="space-y-6">
                {culturalConsiderations.map((item, index) => (
                  <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">{item.aspect}</h3>
                    <p className="text-purple-800 mb-4">{item.description}</p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">الحلول:</h4>
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

            {/* Fabric Technology */}
            <section id="fabric-technology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تقنية الأقمشة للضيافة</h2>
              
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">التقنية</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">الفائدة</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">الأفضل لـ</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">المتانة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {fabricTechnology.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.technology}</td>
                        <td className="px-6 py-4 text-gray-600">{item.benefit}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{item.application}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                            {item.durability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصص نجاح سعودية</h2>
              
              <div className="space-y-6">
                {saudiSuccessStories.map((story, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto md:order-2">
                        <Image
                          src={story.image}
                          alt={story.property}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="font-bold text-gray-900 mb-3">{story.property}</h3>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-semibold text-gray-500">التحدي:</span>
                            <p className="text-gray-700">{story.challenge}</p>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-gray-500">الحل:</span>
                            <p className="text-gray-700">{story.solution}</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <span className="text-sm font-semibold text-green-800">النتيجة:</span>
                            <p className="text-green-700">{story.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">ارتقِ بتجربة ضيوفك</h2>
                <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تشارك أفضل الفنادق والمنتجعات والمطاعم في المملكة العربية السعودية 
                  لإنشاء برامج زي موحد مميزة تعزز هوية العلامة التجارية ورضا الضيوف.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-amber-600 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/hospitality"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الضيافة
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
