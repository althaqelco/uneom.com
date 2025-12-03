import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  LightBulbIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  SparklesIcon,
  CpuChipIcon,
  BeakerIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أفضل 10 ابتكارات في صناعة الزي الموحد 2025: مراجعة العام | يونيوم',
  description: 'مراجعة شاملة لأكثر الابتكارات تأثيراً في صناعة الزي الموحد لعام 2025. من الأقمشة الذكية والتصميم بالذكاء الاصطناعي إلى المواد المستدامة وتقنية التكيف المناخي.',
  keywords: 'ابتكارات الزي الموحد 2025, تقنية الأقمشة الذكية, تصميم زي بالذكاء الاصطناعي, ابتكار ملابس العمل المستدامة, اتجاهات الزي السعودية, تقنية الملابس القابلة للارتداء',
  openGraph: {
    title: 'أفضل 10 ابتكارات في صناعة الزي الموحد 2025: مراجعة العام',
    description: 'التقنيات والاتجاهات الثورية التي حولت صناعة الزي الموحد في 2025',
    images: ['/images/blog/textile-innovations.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-12-01T08:00:00Z',
    authors: ['فريق الابتكار يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/top-10-uniform-innovations-2025/',
    languages: {
      'en': '/blog/top-10-uniform-innovations-2025/',
      'ar': '/ar/blog/top-10-uniform-innovations-2025/',
    }
  }
}

const innovations = [
  {
    rank: 1,
    title: 'تقنية المقاس المخصص بالذكاء الاصطناعي',
    category: 'التصميم والتصنيع',
    icon: CpuChipIcon,
    description: 'أنظمة ذكاء اصطناعي تحلل قياسات الجسم من صور الهاتف الذكي لإنشاء أزياء مناسبة تماماً بدقة 98%.',
    impact: 'ثوري',
    saudiRelevance: 'تقليل المرتجعات بنسبة 60% وتحسين رضا الموظفين',
    keyFeatures: ['مسح ثلاثي الأبعاد عبر الهاتف', 'تعديل الأنماط بالتعلم الآلي', 'توصيات مقاسات فورية', 'قدرات التجربة الافتراضية'],
    companies: 'كبار تجار التجزئة والعملاء المؤسسيين السعوديين يتبنون هذه التقنية'
  },
  {
    rank: 2,
    title: 'أقمشة المواد متغيرة الطور (PCM)',
    category: 'التكيف المناخي',
    icon: FireIcon,
    description: 'أقمشة متقدمة بكبسولات دقيقة مدمجة تمتص وتخزن وتطلق الحرارة للحفاظ على درجة حرارة الجسم المثلى.',
    impact: 'يغير قواعد اللعبة',
    saudiRelevance: 'حرج للعمال في الهواء الطلق في صيف السعودية +50 درجة',
    keyFeatures: ['تنظيم الحرارة 18-35 درجة', 'لا طاقة خارجية مطلوبة', 'يدوم +200 دورة غسيل', 'تكامل خفيف الوزن'],
    companies: 'القطاع الصناعي والإنشائي من أوائل المتبنين'
  },
  {
    rank: 3,
    title: 'أقمشة واقية معززة بالجرافين',
    category: 'ابتكار السلامة',
    icon: ShieldCheckIcon,
    description: 'منسوجات مدعمة بالجرافين توفر قوة وتوصيل وحماية غير مسبوقة في شكل خفيف الوزن.',
    impact: 'اختراق',
    saudiRelevance: 'تحويل ملابس سلامة النفط والغاز والإنشاءات',
    keyFeatures: ['أقوى 200 مرة من الفولاذ', 'خصائص مضادة للبكتيريا', 'حماية UV', 'تبديد الكهرباء الساكنة'],
    companies: 'برامج تجريبية في أرامكو وسابك جارية'
  },
  {
    rank: 4,
    title: 'معالجات مضادة للميكروبات حيوية',
    category: 'الرعاية الصحية والنظافة',
    icon: BeakerIcon,
    description: 'معالجات مضادة للميكروبات مشتقة من النباتات توفر حماية بمستوى المستشفى دون مواد كيميائية ضارة.',
    impact: 'كبير',
    saudiRelevance: 'تلبية احتياجات توسع الرعاية الصحية في رؤية 2030',
    keyFeatures: ['تقليل بكتيري 99.9%', 'تركيبة غير سامة', 'متانة +100 غسلة', 'التحكم في الروائح'],
    companies: 'مجموعات المستشفيات السعودية الكبرى تُنفذ'
  },
  {
    rank: 5,
    title: 'تكامل الهوية الرقمية',
    category: 'الأزياء الذكية',
    icon: CpuChipIcon,
    description: 'شرائح NFC وRFID مدمجة بسلاسة في الأزياء للتحكم في الوصول والحضور وتتبع الأصول.',
    impact: 'تحويلي',
    saudiRelevance: 'دعم التحول الرقمي عبر القطاعات',
    keyFeatures: ['دخول المباني بدون تلامس', 'تسجيل حضور تلقائي', 'تتبع الأصول', 'تحديد الهوية في الطوارئ'],
    companies: 'القطاع الحكومي والشركات الكبرى تتبنى'
  },
  {
    rank: 6,
    title: 'أزياء من بلاستيك المحيطات المعاد تدويره',
    category: 'الاستدامة',
    icon: GlobeAltIcon,
    description: 'أقمشة زي عالية الأداء مصنوعة من بلاستيك المحيطات المعاد تدويره 100% بجودة ممتازة.',
    impact: 'عالي',
    saudiRelevance: 'التوافق مع أهداف مبادرة السعودية الخضراء',
    keyFeatures: ['12 زجاجة لكل زي', 'أداء معادل', 'تتبع كامل', 'قابلية إعادة التدوير في نهاية الحياة'],
    companies: 'قادة قطاع الضيافة والسياحة'
  },
  {
    rank: 7,
    title: 'أقمشة مراقبة الصحة البيومترية',
    category: 'التقنية القابلة للارتداء',
    icon: SparklesIcon,
    description: 'ألياف موصلة منسوجة في الأزياء تراقب العلامات الحيوية وتنبه لمخاطر الصحة.',
    impact: 'ناشئ',
    saudiRelevance: 'حماية العمال في الظروف القاسية',
    keyFeatures: ['مراقبة معدل القلب', 'تنبيهات الإجهاد الحراري', 'كشف التعب', 'SOS طوارئ'],
    companies: 'برامج السلامة الصناعية تجريبية'
  },
  {
    rank: 8,
    title: 'أنظمة الزي المعيارية',
    category: 'ابتكار التصميم',
    icon: LightBulbIcon,
    description: 'أنظمة زي قائمة على المكونات القابلة للتبديل تقلل احتياجات المخزون وتطيل العمر المفيد.',
    impact: 'عملي',
    saudiRelevance: 'تحسين التكاليف للمؤسسات الكبيرة',
    keyFeatures: ['أجزاء قابلة للتبديل', 'إصلاح/استبدال سهل', 'قابلية التكيف الموسمي', 'تقليل المخزون'],
    companies: 'سلاسل التجزئة والضيافة الكبيرة تُنفذ'
  },
  {
    rank: 9,
    title: 'أقمشة التنظيف الذاتي الضوئي التحفيزي',
    category: 'ابتكار الصيانة',
    icon: SparklesIcon,
    description: 'طلاءات ثاني أكسيد التيتانيوم تستخدم الضوء لتفكيك المواد العضوية والحفاظ على الانتعاش.',
    impact: 'متنامي',
    saudiRelevance: 'تقليل استخدام المياه في عمليات الغسيل',
    keyFeatures: ['تنظيف مُفعّل بالضوء', 'إزالة الروائح', 'تفكيك البقع', 'تقليل تكرار الغسيل'],
    companies: 'خدمات الطعام والرعاية الصحية تختبر'
  },
  {
    rank: 10,
    title: 'إنتاج أقمشة سالب الكربون',
    category: 'بيئي',
    icon: GlobeAltIcon,
    description: 'عمليات تصنيع تلتقط CO2 أكثر مما تنبعث، مما يخلق أزياء إيجابية للمناخ.',
    impact: 'رائد',
    saudiRelevance: 'دعم التزام السعودية بصفر انبعاثات 2060',
    keyFeatures: ['بصمة كربونية سلبية', 'مواد قائمة على الطحالب', 'تكامل التقاط الكربون', 'محاسبة دورة الحياة الكاملة'],
    companies: 'برامج المتبنين الأوائل تنطلق'
  }
]

export default function TopUniformInnovations2025PageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm">
            <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">أفضل 10 ابتكارات 2025</span></li>
          </ol>
        </div>
      </nav>

      <header className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog/textile-innovations.jpg" alt="ابتكارات الزي الموحد" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-indigo-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-violet-500/20 text-violet-300 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-400/30">🏆 مراجعة العام</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">الابتكار</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أفضل 10 ابتكارات في الزي الموحد 2025</h1>
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">مراجعة شاملة للتقنيات والاتجاهات الثورية التي حولت صناعة الزي الموحد هذا العام.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-violet-200">
              <div className="flex items-center gap-2"><UserIcon className="h-5 w-5" /><span>فريق الابتكار يونيوم</span></div>
              <div className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /><span>18 دقيقة قراءة</span></div>
              <div className="flex items-center gap-2"><TagIcon className="h-5 w-5" /><span>1 ديسمبر 2025</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">تصفح سريع</h3>
                <nav className="space-y-1">
                  {innovations.map((item) => (
                    <a key={item.rank} href={`#innovation-${item.rank}`} className="block text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg px-3 py-2 transition-all">
                      #{item.rank} {item.title.split(' ').slice(0, 3).join(' ')}...
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">ابق مبتكراً</h3>
                <p className="text-sm text-violet-100 mb-4">يونيوم تجلب أحدث الابتكارات للمؤسسات السعودية.</p>
                <Link href="/ar/contact" className="block text-center bg-white text-violet-600 px-4 py-2 rounded-lg font-bold hover:bg-violet-50 transition-colors">استكشف الحلول</Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg">كان 2025 عاماً تاريخياً لصناعة الزي الموحد. من التخصيص بالذكاء الاصطناعي إلى المواد المتكيفة مع المناخ، الابتكارات تُحول طريقة تفكيرنا في ملابس العمل. إليك أفضل 10 ابتكارات تحقق أكبر تأثير، مع تركيز خاص على الأهمية لصناعات السعودية المتنوعة.</p>
            </section>

            {innovations.map((innovation) => (
              <section key={innovation.rank} id={`innovation-${innovation.rank}`} className="mb-12">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`px-6 py-4 ${
                    innovation.rank === 1 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
                    innovation.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                    innovation.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-amber-700' :
                    'bg-gradient-to-r from-violet-500 to-indigo-600'
                  } text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold">#{innovation.rank}</span>
                        <div>
                          <h3 className="font-bold text-xl">{innovation.title}</h3>
                          <p className="text-sm opacity-90">{innovation.category}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        innovation.impact === 'ثوري' ? 'bg-red-500' :
                        innovation.impact === 'يغير قواعد اللعبة' ? 'bg-orange-500' :
                        innovation.impact === 'اختراق' ? 'bg-yellow-500 text-gray-900' :
                        'bg-white/20'
                      }`}>{innovation.impact}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{innovation.description}</p>
                    
                    <div className="bg-violet-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-violet-900 mb-2">🇸🇦 الأهمية السعودية</h4>
                      <p className="text-violet-800">{innovation.saudiRelevance}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">الميزات الرئيسية:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {innovation.keyFeatures.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 italic">{innovation.companies}</p>
                  </div>
                </div>
              </section>
            ))}

            <section className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">🚀 مستعد للابتكار؟</h2>
                <p className="text-violet-100 mb-6 max-w-2xl mx-auto">يونيوم تجلب أحدث ابتكارات الزي للمؤسسات السعودية. دعنا نستكشف كيف يمكن لهذه التقنيات تحويل قواك العاملة.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/ar/contact" className="bg-white text-violet-600 px-8 py-3 rounded-xl font-bold hover:bg-violet-50 transition-colors inline-flex items-center gap-2">طلب عرض<ArrowLeftIcon className="h-5 w-5" /></Link>
                  <Link href="/ar/services" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">عرض جميع الخدمات</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}


