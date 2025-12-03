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
  CheckCircleIcon,
  FireIcon,
  BeakerIcon,
  ShieldCheckIcon,
  StarIcon,
  SwatchIcon,
  CogIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أسرار تصميم زي الشيف المثالي: من المطبخ السعودي إلى المعايير العالمية | يونيوم',
  description: 'دليل شامل لتصميم زي الشيف المثالي. تعرف على الأقمشة المقاومة للحرارة، معايير النظافة، الاعتبارات الثقافية للمطابخ السعودية، وكيفية اختيار زي الطهاة المناسب للفنادق والمطاعم وشركات التموين.',
  keywords: 'زي الشيف السعودية, ملابس الطهاة الاحترافية, تصميم زي المطبخ, معايير معطف الشيف, زي الطهي السعودي, زي شيف المطعم, زي مطبخ الفندق, تصميم قبعة الشيف, ملابس سلامة المطبخ',
  openGraph: {
    title: 'أسرار تصميم زي الشيف المثالي: من المطبخ السعودي إلى المعايير العالمية',
    description: 'دليل شامل لتصميم زي الشيف الاحترافي الذي يلبي المعايير الدولية مع احترام القيم الثقافية السعودية',
    images: ['/images/hospitality/hospitality_uniform_chef.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-02-15T08:00:00Z',
    authors: ['فريق الطهي يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/chef-uniform-design-guide/',
    languages: {
      'en': '/blog/chef-uniform-design-guide/',
      'ar': '/ar/blog/chef-uniform-design-guide/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'فن زي الشيف' },
  { id: 'history', title: 'التاريخ والتقاليد' },
  { id: 'components', title: 'مكونات الزي الأساسية' },
  { id: 'fabrics', title: 'تقنية الأقمشة والسلامة' },
  { id: 'hierarchy', title: 'التسلسل الهرمي في المطبخ' },
  { id: 'saudi-considerations', title: 'الاعتبارات السعودية' },
  { id: 'hygiene', title: 'معايير النظافة والسلامة' },
  { id: 'selection-guide', title: 'دليل الاختيار والمقاسات' }
]

const chefUniformHistory = [
  {
    era: 'منتصف القرن 19',
    milestone: 'ماري أنطوان كاريم يؤسس معطف الشيف الأبيض',
    significance: 'الأبيض يرمز للنظافة والاحترافية في المطبخ'
  },
  {
    era: 'أواخر القرن 19',
    milestone: 'أوغست إسكوفييه يُعَيِّر نظام فريق المطبخ',
    significance: 'التسلسل الهرمي للزي يعكس المنصب والخبرة'
  },
  {
    era: 'القرن العشرين',
    milestone: 'إدخال الأقمشة المقاومة للحرارة والبقع',
    significance: 'تعزيز السلامة والعملية في المطابخ الاحترافية'
  },
  {
    era: 'القرن 21',
    milestone: 'أقمشة الأداء الحديثة والتكيفات الثقافية',
    significance: 'التوازن بين التقاليد والتكنولوجيا والاحترام الثقافي'
  }
]

const uniformComponents = [
  {
    item: 'معطف الشيف (الجاكيت)',
    icon: ShieldCheckIcon,
    description: 'حجر الزاوية في زي الشيف، تقليدياً مزدوج الصدر للعكس والحماية',
    features: [
      'تصميم مزدوج الصدر لتغطية الانسكابات',
      'قطن سميك أو مزيج بولي-قطن',
      'أزرار مغطاة بالقماش (لا تذوب أو تتشقق)',
      'أكمام طويلة لحماية الذراعين',
      'ألواح تهوية تحت الإبط'
    ],
    image: '/images/hospitality/hospitality_uniform_chef.jpg'
  },
  {
    item: 'بنطلون الشيف',
    icon: CogIcon,
    description: 'مصمم للراحة خلال المناوبات الطويلة مع ميزات السلامة',
    features: [
      'قصة فضفاضة للحركة ودوران الهواء',
      'أنماط مربعات تقليدية أو أسود سادة',
      'خصر مطاطي أو برباط',
      'جيوب عميقة للأدوات',
      'تصميم فتح سريع للسلامة'
    ],
    image: '/images/hospitality/chef-uniform-professional.jpg'
  },
  {
    item: 'قبعة الشيف (التوك)',
    icon: StarIcon,
    description: 'غطاء رأس وظيفي يمنع تلوث الشعر ويمتص العرق',
    features: [
      'توك عالي مطوي للشيفات التنفيذيين',
      'قبعات جمجمة لطهاة الخط',
      'قبعات للاستعمال مرة واحدة لتحضير الطعام',
      'خيارات شبكية قابلة للتنفس',
      'الارتفاع يشير للرتبة تقليدياً'
    ],
    image: '/images/hospitality/premium-chef-uniform.jpg'
  },
  {
    item: 'المريول',
    icon: SwatchIcon,
    description: 'طبقة حماية إضافية للجزء السفلي من الجسم',
    features: [
      'مرايل صدر للتغطية الكاملة',
      'مرايل خصر لطهاة المعجنات',
      'خيارات مقاومة للماء متاحة',
      'تصاميم جيوب متعددة',
      'أحزمة رقبة وخصر قابلة للتعديل'
    ],
    image: '/images/hospitality/hospitality_uniform_resturant.jpg'
  },
  {
    item: 'أحذية المطبخ',
    icon: ShieldCheckIcon,
    description: 'أحذية سلامة مصممة لبيئات المطبخ',
    features: [
      'نعل مانع للانزلاق (أساسي)',
      'حماية إصبع القدم من الفولاذ أو المركب',
      'مواد مقاومة للماء',
      'تصميم مغلق من الأمام',
      'مريحة لمناوبات +12 ساعة'
    ],
    image: '/images/hospitality/hospitality_uniform_department.jpg'
  },
  {
    item: 'منديل الرقبة',
    icon: SparklesIcon,
    description: 'إكسسوار تقليدي يمتص العرق ويضيف الأناقة',
    features: [
      'قطن أو مزيج قطني',
      'يمتص التعرق',
      'اللون يمكن أن يشير للرتبة',
      'سهل الغسيل والاستبدال',
      'يضيف مظهراً احترافياً'
    ],
    image: '/images/hospitality/hospitality_uniform_formal.jpg'
  }
]

const fabricTechnology = [
  {
    fabric: 'قطن 100%',
    heatResistance: 'عالية',
    breathability: 'ممتازة',
    durability: 'متوسطة',
    care: 'سهلة - غسيل آلي',
    bestFor: 'مطابخ المطاعم الفاخرة التقليدية'
  },
  {
    fabric: 'مزيج بولي-قطن (65/35)',
    heatResistance: 'متوسطة-عالية',
    breathability: 'جيدة',
    durability: 'عالية',
    care: 'سهلة جداً - مقاوم للتجاعيد',
    bestFor: 'المطابخ التجارية ذات الحجم الكبير'
  },
  {
    fabric: 'تقنية CoolMax®',
    heatResistance: 'متوسطة',
    breathability: 'فائقة',
    durability: 'عالية',
    care: 'سهلة - جفاف سريع',
    bestFor: 'مطابخ المناخ الحار (السعودية)'
  },
  {
    fabric: 'معالج مقاوم للهب',
    heatResistance: 'عالية جداً',
    breathability: 'جيدة',
    durability: 'عالية جداً',
    care: 'يتطلب عناية خاصة',
    bestFor: 'الطهي على اللهب المكشوف، الشوايات'
  },
  {
    fabric: 'مزيج بامبو-قطن',
    heatResistance: 'متوسطة',
    breathability: 'ممتازة',
    durability: 'متوسطة',
    care: 'سهلة - مضاد للميكروبات',
    bestFor: 'المنشآت الصديقة للبيئة'
  }
]

const kitchenHierarchy = [
  {
    position: 'الشيف التنفيذي (شيف دو كويزين)',
    uniform: 'أبيض كامل مع توك عالي (100 طية تقليدياً)',
    distinguishing: 'تطريز ذهبي أو أسود، اسم مطرز، قماش فاخر'
  },
  {
    position: 'مساعد الشيف (سو شيف)',
    uniform: 'معطف أبيض مع توك متوسط',
    distinguishing: 'تطريز فضي، توك أقصر قليلاً'
  },
  {
    position: 'شيف القسم (شيف دو بارتي)',
    uniform: 'معطف أبيض مع قبعة جمجمة أو توك قصير',
    distinguishing: 'لمسات لون القسم (المعجنات، المقبلات، إلخ)'
  },
  {
    position: 'شيف مبتدئ (كومي شيف)',
    uniform: 'معطف أبيض مع قبعة جمجمة',
    distinguishing: 'تصميم أساسي، بدون زخارف'
  },
  {
    position: 'عامل المطبخ/طاهي التحضير',
    uniform: 'معطف ملون أو مريول مع قبعة',
    distinguishing: 'ألوان غير بيضاء للتمييز'
  }
]

const saudiConsiderations = [
  {
    aspect: 'التكيف مع المناخ',
    challenge: 'الحرارة الشديدة في السعودية تزيد درجة حرارة المطبخ',
    solutions: [
      'تقنية أقمشة ماصة للرطوبة',
      'مواد خفيفة قابلة للتنفس',
      'ألواح تهوية شبكية',
      'إدراجات تبريد للياقة',
      'خيارات أكمام قصيرة لمناطق التحضير'
    ]
  },
  {
    aspect: 'الاحتشام الثقافي',
    challenge: 'احترام قواعد اللباس الإسلامي مع الحفاظ على الوظيفية',
    solutions: [
      'أكمام كاملة كمعيار',
      'تصاميم رقبة محتشمة',
      'أغطية رأس متوافقة مع الحجاب للنساء',
      'تصاميم فضفاضة',
      'معاطف ممتدة الطول متاحة'
    ]
  },
  {
    aspect: 'متطلبات المطبخ الحلال',
    challenge: 'التمييز البصري لتحضير الطعام الحلال',
    solutions: [
      'مرايل مرمزة بالألوان لمحطات الحلال',
      'أطقم زي مخصصة لمناطق الحلال',
      'تسميات وتعريف واضح',
      'تخزين منفصل لأزياء مطبخ الحلال',
      'تدريب على منع التلوث المتبادل'
    ]
  },
  {
    aspect: 'دمج المطبخ المحلي',
    challenge: 'تكريم التقاليد الطهوية السعودية',
    solutions: [
      'خيارات تطريز تقليدي',
      'لمسات ألوان سعودية',
      'تصاميم مخصصة للمطاعم السعودية',
      'دمج أنماط التراث',
      'تطريز الاسم بالعربية'
    ]
  }
]

const hygieneStandards = [
  {
    standard: 'متطلبات SFDA (هيئة الغذاء والدواء السعودية)',
    requirements: [
      'ارتداء أزياء نظيفة في المطبخ فقط',
      'تغطية الشعر بالكامل',
      'عدم ارتداء المجوهرات باستثناء خاتم الزواج البسيط',
      'أحذية مغلقة مانعة للانزلاق',
      'تغيير الزي بانتظام (يومياً كحد أدنى)'
    ]
  },
  {
    standard: 'امتثال HACCP',
    requirements: [
      'أزياء فاتحة اللون لرؤية التلوث',
      'الغسيل عند 60 درجة مئوية كحد أدنى',
      'تخزين منفصل عن الملابس العادية',
      'عناصر للاستعمال مرة واحدة عند الحاجة',
      'فحص الأزياء بانتظام'
    ]
  },
  {
    standard: 'معايير الفنادق الدولية',
    requirements: [
      'أطقم زي متعددة لكل موظف',
      'خدمات غسيل احترافية',
      'نظام توزيع الزي اليومي',
      'تطبيق معايير المظهر',
      'جدول استبدال منتظم'
    ]
  }
]

const selectionGuide = [
  {
    venue: 'مطعم فاخر',
    recommended: 'معطف أبيض تقليدي مزدوج الصدر، توك عالي، قطن فاخر',
    budget: '400-800 ريال للشيف',
    replacement: 'كل 6-12 شهر'
  },
  {
    venue: 'مطبخ فندقي',
    recommended: 'مزيج بولي-قطن بالعلامة التجارية، غطاء رأس احترافي، مرايل منسقة',
    budget: '300-600 ريال للشيف',
    replacement: 'كل 6-9 أشهر'
  },
  {
    venue: 'شركة تموين',
    recommended: 'أقمشة متينة سهلة العناية، تصاميم صديقة للتنقل',
    budget: '250-500 ريال للشيف',
    replacement: 'كل 4-6 أشهر'
  },
  {
    venue: 'مطعم كاجوال سريع',
    recommended: 'معاطف شيف عصرية، قبعات مريحة، مرايل بالعلامة التجارية',
    budget: '200-400 ريال للشيف',
    replacement: 'كل 3-6 أشهر'
  },
  {
    venue: 'مطبخ صناعي/مستشفى',
    recommended: 'أقمشة عالية المتانة، تصميم يركز على السلامة، عناصر للاستعمال مرة واحدة',
    budget: '300-500 ريال للشيف',
    replacement: 'كل 3-4 أشهر'
  }
]

export default function ChefUniformDesignGuidePageAr() {
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
            <li><span className="text-gray-900 font-medium">دليل تصميم زي الشيف</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hospitality/hospitality_uniform_chef.jpg"
            alt="زي الشيف الاحترافي"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30">
                الضيافة
              </span>
              <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium border border-amber-400/30">
                الطهي
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أسرار تصميم زي الشيف المثالي
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              أتقن فن وعلم زي الشيف الاحترافي. من المعاطف البيضاء التقليدية 
              إلى أقمشة الأداء الحديثة، اكتشف كيفية تجهيز فريقك الطهوي 
              للنجاح في المطابخ السعودية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الطهي يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>15 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5" />
                <span>15 فبراير 2025</span>
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

              {/* CTA Card */}
              <div className="mt-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">تحتاج زي شيف؟</h3>
                <p className="text-sm text-orange-100 mb-4">
                  يونيوم توفر زي الشيف الاحترافي لأفضل المطاعم والفنادق في السعودية.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">فن زي الشيف</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                زي الشيف هو أكثر من مجرد ملابس—إنه رمز للتميز الطهوي، أداة عملية 
                لسلامة المطبخ، وتمثيل بصري للاحترافية التي تطورت عبر قرون. في قطاع 
                الضيافة السريع النمو في المملكة العربية السعودية، فهم تفاصيل تصميم 
                زي الشيف أمر ضروري لأي منشأة تأخذ برنامجها الطهوي بجدية.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/hospitality/hospitality_uniform_chef.jpg"
                  alt="شيف احترافي بالزي الأبيض التقليدي"
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-3">لماذا يهم زي الشيف</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <FireIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-700"><strong>السلامة</strong><br/>الحماية من الحروق والانسكابات ومخاطر المطبخ</p>
                  </div>
                  <div className="text-center">
                    <BeakerIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-700"><strong>النظافة</strong><br/>تلبية معايير سلامة الغذاء واللوائح</p>
                  </div>
                  <div className="text-center">
                    <StarIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-700"><strong>الاحترافية</strong><br/>إظهار الخبرة والتميز الطهوي</p>
                  </div>
                </div>
              </div>
            </section>

            {/* History Section */}
            <section id="history" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">التاريخ والتقاليد</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                لزي الشيف الحديث تاريخ غني يعود إلى منتصف القرن التاسع عشر. 
                فهم هذا التراث يساعدنا على تقدير سبب بقاء عناصر معينة 
                معيارية في المطابخ الاحترافية حول العالم.
              </p>

              <div className="space-y-4">
                {chefUniformHistory.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap">
                      {item.era}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.milestone}</p>
                      <p className="text-sm text-gray-600">{item.significance}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-bold mb-3">هل تعلم؟</h3>
                <p className="text-gray-300">
                  قيل أن قبعة الشيف العالية التقليدية (التوك) كانت تحتوي على 100 طية، 
                  تمثل الـ 100 طريقة التي يمكن للشيف بها إعداد البيضة. بينما هذا رمزي 
                  إلى حد كبير اليوم، يظل التوك رمزاً قوياً للإتقان الطهوي.
                </p>
              </div>
            </section>

            {/* Components Section */}
            <section id="components" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مكونات الزي الأساسية</h2>
              
              <div className="space-y-8">
                {uniformComponents.map((component, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={component.image}
                          alt={component.item}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-2 rounded-lg">
                            <component.icon className="h-6 w-6 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{component.item}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{component.description}</p>
                        <ul className="space-y-2">
                          {component.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabrics Section */}
            <section id="fabrics" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تقنية الأقمشة والسلامة</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                اختيار القماش الصحيح يمكن أن يحدث فرقاً بين فريق مطبخ مرتاح ومنتج 
                وفريق يعاني من الحرارة وعدم الراحة. إليك مقارنة شاملة لخيارات الأقمشة:
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">القماش</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">مقاومة الحرارة</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">التنفس</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">المتانة</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">الأفضل لـ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {fabricTechnology.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{item.fabric}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.heatResistance === 'عالية جداً' ? 'bg-red-100 text-red-700' :
                            item.heatResistance === 'عالية' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.heatResistance}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.breathability === 'فائقة' || item.breathability === 'ممتازة' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.breathability}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{item.durability}</td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{item.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Hierarchy Section */}
            <section id="hierarchy" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">التسلسل الهرمي في المطبخ من خلال الزي</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في المطابخ الاحترافية، الأزياء تنقل الرتبة والمسؤولية بنظرة واحدة. 
                هذا التسلسل الهرمي البصري يساعد على الحفاظ على النظام خلال وتيرة الخدمة المكثفة.
              </p>

              <div className="space-y-4">
                {kitchenHierarchy.map((role, index) => (
                  <div key={index} className={`rounded-xl p-6 border ${
                    index === 0 ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' :
                    index === 1 ? 'bg-gray-50 border-gray-300' :
                    'bg-white border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        index === 0 ? 'bg-amber-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {index + 1}
                      </span>
                      <h3 className="font-bold text-gray-900">{role.position}</h3>
                    </div>
                    <p className="text-gray-700 mb-1"><strong>الزي:</strong> {role.uniform}</p>
                    <p className="text-gray-600 text-sm"><strong>السمات المميزة:</strong> {role.distinguishing}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Saudi Considerations */}
            <section id="saudi-considerations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الاعتبارات السعودية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                تشغيل المطابخ في المملكة العربية السعودية يقدم تحديات وفرص فريدة. 
                إليك كيفية تكييف أزياء الشيف للسياق المحلي:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {saudiConsiderations.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">{item.aspect}</h3>
                    <p className="text-green-800 text-sm mb-4">{item.challenge}</p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">الحلول:</h4>
                      <ul className="space-y-1">
                        {item.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hygiene Standards */}
            <section id="hygiene" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير النظافة والسلامة</h2>
              
              <div className="space-y-6">
                {hygieneStandards.map((standard, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-4">{standard.standard}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {standard.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                          <ShieldCheckIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Selection Guide */}
            <section id="selection-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل الاختيار والمقاسات</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                اختر أزياء الشيف المناسبة بناءً على نوع المكان والميزانية والاحتياجات التشغيلية:
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">نوع المكان</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">النمط الموصى به</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">الميزانية/للشيف</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">الاستبدال</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {selectionGuide.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{item.venue}</td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{item.recommended}</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                            {item.budget}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{item.replacement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">جهّز فريق مطبخك للنجاح</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  يونيوم توفر أزياء الشيف الفاخرة لأفضل الفنادق والمطاعم 
                  وشركات التموين في السعودية. من المعاطف البيضاء التقليدية 
                  إلى ملابس الأداء العصرية، نقدم جودة تلبي المعايير الدولية.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
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


