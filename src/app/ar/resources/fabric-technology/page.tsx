import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon, BeakerIcon, ShieldCheckIcon, SparklesIcon, FireIcon, CloudIcon, SunIcon } from '@heroicons/react/24/outline'
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'تقنيات الأقمشة المتقدمة | موارد يونيوم للزي الموحد',
  description: 'اكتشف أحدث تقنيات الأقمشة المتطورة للزي الموحد في السعودية. تقنيات مضادة للبكتيريا، مقاومة للبقع، وتنظيم الرطوبة للمهنيين.',
  keywords: 'تقنيات الأقمشة, الزي الموحد المتطور, أقمشة مضادة للبكتيريا, تقنيات النسيج, يونيوم السعودية',
  openGraph: {
    title: 'تقنيات الأقمشة المتقدمة | موارد يونيوم',
    description: 'دليل شامل لأحدث تقنيات الأقمشة المستخدمة في صناعة الزي الموحد المهني',
    type: 'article',
    locale: 'ar_SA',
  },
  alternates: {
    canonical: '/ar/resources/fabric-technology/',
    languages: {
      'en': '/resources/fabric-technology/',
      'ar': '/ar/resources/fabric-technology/',
    },
  },
}

const fabricTechnologies = [
  {
    icon: ShieldCheckIcon,
    title: 'التقنيات المضادة للبكتيريا',
    description: 'أقمشة معالجة بتقنيات متطورة تمنع نمو البكتيريا والفطريات، مثالية للبيئات الطبية والغذائية.',
    features: ['حماية طويلة المدى', 'آمنة على البشرة', 'مقاومة للغسيل المتكرر', 'معتمدة طبياً'],
    applications: ['الزي الطبي', 'زي المطاعم', 'زي المختبرات', 'زي الرعاية الصحية']
  },
  {
    icon: CloudIcon,
    title: 'تقنية إدارة الرطوبة',
    description: 'أقمشة ذكية تنقل الرطوبة بعيداً عن الجسم وتحافظ على الجفاف والراحة طوال اليوم.',
    features: ['سرعة في التجفيف', 'تهوية ممتازة', 'راحة طوال اليوم', 'مقاومة الروائح'],
    applications: ['الزي الرياضي', 'زي العمل الشاق', 'الزي الصناعي', 'زي الأمن']
  },
  {
    icon: SparklesIcon,
    title: 'مقاومة البقع والأوساخ',
    description: 'طلاء واقي متطور يمنع امتصاص السوائل والبقع، مما يسهل عملية التنظيف والصيانة.',
    features: ['سهولة التنظيف', 'مقاومة الزيوت', 'حماية من البقع', 'مظهر احترافي دائم'],
    applications: ['زي المطاعم', 'الزي الصناعي', 'زي التنظيف', 'زي الصيانة']
  },
  {
    icon: FireIcon,
    title: 'مقاومة الحريق',
    description: 'أقمشة مصممة خصيصاً لتوفير الحماية من الحرارة واللهب في البيئات عالية المخاطر.',
    features: ['حماية من اللهب', 'مقاومة الحرارة', 'معايير السلامة الدولية', 'راحة في الارتداء'],
    applications: ['الصناعات البترولية', 'اللحام والمعادن', 'الكهرباء', 'الطوارئ والإطفاء']
  },
  {
    icon: SunIcon,
    title: 'الحماية من الأشعة فوق البنفسجية',
    description: 'أقمشة توفر حماية فعالة من أشعة الشمس الضارة، مثالية للعمل في البيئات المفتوحة.',
    features: ['حماية UPF 50+', 'مقاومة تلاشي الألوان', 'خفيفة الوزن', 'تهوية ممتازة'],
    applications: ['العمل الخارجي', 'الزراعة', 'البناء', 'الأمن والحراسة']
  },
  {
    icon: BeakerIcon,
    title: 'التقنيات الذكية والمتطورة',
    description: 'أحدث الابتكارات في عالم النسيج تشمل الأقمشة التفاعلية والمواد النانوية المتطورة.',
    features: ['تقنيات نانوية', 'استجابة للحرارة', 'خصائص تفاعلية', 'صديقة للبيئة'],
    applications: ['الزي الطبي المتطور', 'الرياضة المهنية', 'البحث العلمي', 'التطبيقات الخاصة']
  }
]

const sustainabilityFeatures = [
  {
    title: 'الأقمشة المعاد تدويرها',
    description: 'استخدام مواد معاد تدويرها لتقليل التأثير البيئي',
    icon: '♻️'
  },
  {
    title: 'الإنتاج المستدام',
    description: 'عمليات تصنيع صديقة للبيئة وموفرة للطاقة',
    icon: '🌱'
  },
  {
    title: 'المواد الطبيعية',
    description: 'دمج الألياف الطبيعية مع التقنيات المتطورة',
    icon: '🌿'
  },
  {
    title: 'دورة الحياة الطويلة',
    description: 'أقمشة مصممة للاستخدام طويل المدى',
    icon: '⏳'
  }
]

export default function FabricTechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/ar" className="hover:text-blue-600">الرئيسية</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400 rotate-180" />
            <Link href="/ar/resources" className="hover:text-blue-600">الموارد</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400 rotate-180" />
            <span className="text-gray-900">تقنيات الأقمشة</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                تقنيات الأقمشة المتقدمة
                <span className="block text-blue-200 text-3xl lg:text-4xl mt-2">
                  للزي الموحد المهني
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                اكتشف أحدث الابتكارات في عالم تقنيات الأقمشة التي تجعل الزي الموحد أكثر راحة وأماناً وفعالية للمهنيين في جميع القطاعات.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/ar/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  استشارة مجانية
                </Link>
                <Link 
                  href="/ar/resources/fabric-guide"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  دليل الأقمشة
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/stack-of-rolled-jeans-and-cotton-flowers-on-light-2025-01-29-01-45-01-utc.jpg"
                alt="تقنيات الأقمشة المتطورة"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              تقنيات الأقمشة المتطورة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نستخدم أحدث التقنيات العالمية لضمان أعلى مستويات الجودة والأداء في منتجاتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg ml-4">
                    <tech.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">المميزات الرئيسية:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">التطبيقات:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              الاستدامة والمسؤولية البيئية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نلتزم بالممارسات المستدامة في جميع مراحل الإنتاج لحماية البيئة والمجتمع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  معايير الجودة العالمية
                </h2>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  جميع منتجاتنا تخضع لاختبارات صارمة وتلتزم بأعلى المعايير الدولية للجودة والسلامة.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 ml-3" />
                    <span>معتمدة من ISO 9001:2015</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 ml-3" />
                    <span>اختبارات مقاومة الغسيل</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 ml-3" />
                    <span>فحص السلامة والصحة</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 ml-3" />
                    <span>ضمان الجودة طويل المدى</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/services/quality-assurance"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  تعرف على ضمان الجودة
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/images/services/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                  alt="فحص جودة الأقمشة"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            هل تحتاج إلى استشارة متخصصة؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            فريقنا من الخبراء جاهز لمساعدتك في اختيار أفضل تقنيات الأقمشة المناسبة لاحتياجاتك المهنية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ar/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              احجز استشارة مجانية
            </Link>
            <Link 
              href="/ar/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              استكشف المزيد من الموارد
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}