import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي أمن الفعاليات | ملابس إدارة الحشود عالية الوضوح | يونيوم',
  description: 'أزياء أمن فعاليات احترافية مصممة لإدارة الحشود وخدمات أمن الفعاليات. خيارات عالية الوضوح مع ميزات الراحة والتمييز للفعاليات في المملكة العربية السعودية.',
  keywords: 'زي أمن فعاليات, ملابس إدارة حشود, ملابس أمن عالية الوضوح السعودية, زي حارس فعاليات, ملابس أمن مهرجانات',
  openGraph: {
    title: 'زي أمن الفعاليات | ملابس إدارة الحشود عالية الوضوح | يونيوم',
    description: 'أزياء أمن متخصصة للفعاليات والمهرجانات وإدارة الحشود مع خيارات عالية الوضوح وميزات الراحة.',
    images: ['/images/security/saudi-events-security.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: EyeIcon,
    title: 'تصميم عالي الوضوح',
    description: 'ألوان زاهية وعناصر عاكسة تضمن سهولة التعرف على أفراد الأمن في البيئات المزدحمة.'
  },
  {
    icon: UserGroupIcon,
    title: 'ميزات إدارة الحشود',
    description: 'مصمم للحركة والراحة أثناء فترات الوقوف الطويلة والتفاعل مع الحشود.'
  },
  {
    icon: MegaphoneIcon,
    title: 'جاهز للاتصال',
    description: 'مشابك راديو وتوجيه سماعات الأذن ونقاط ربط المعدات للاتصال السلس.'
  },
  {
    icon: SparklesIcon,
    title: 'مقاوم للطقس',
    description: 'مواد متينة تؤدي بشكل جيد في ظروف الطقس المختلفة للفعاليات الخارجية.'
  }
]

const eventTypes = [
  {
    name: 'المهرجانات والحفلات الموسيقية',
    description: 'أزياء عالية الوضوح للمهرجانات الموسيقية والحفلات وفعاليات الترفيه',
    features: ['ألوان أمان زاهية', 'شرائط عاكسة', 'مقاس مريح للمناوبات الطويلة']
  },
  {
    name: 'الفعاليات الرياضية',
    description: 'ملابس أمن احترافية للملاعب والأماكن الرياضية والمسابقات الرياضية',
    features: ['تنسيق ألوان الفريق', 'مواد مقاومة للطقس', 'نقاط ربط المعدات']
  },
  {
    name: 'الفعاليات الشركاتية',
    description: 'أزياء أمن أنيقة للمؤتمرات التجارية والمعارض والتجمعات الشركاتية',
    features: ['مظهر احترافي', 'خيارات علامة تجارية خفية', 'تصميم رسمي']
  },
  {
    name: 'الفعاليات الثقافية',
    description: 'ملابس أمن مناسبة ثقافيًا للمهرجانات التقليدية والاحتفالات الثقافية',
    features: ['خيارات تصميم محتشم', 'حساسية ثقافية', 'أنظمة ألوان تقليدية']
  }
]

export default function EventSecurityUniformPageAR() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Link href="/ar/" className="hover:text-blue-600">الرئيسية</Link>
            <span>/</span>
            <Link href="/ar/shop/" className="hover:text-blue-600">المتجر</Link>
            <span>/</span>
            <Link href="/ar/shop/security-uniforms/" className="hover:text-blue-600">أزياء الأمن</Link>
            <span>/</span>
            <span className="text-gray-900">زي أمن الفعاليات</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/saudi-events-security.jpg"
            alt="خلفية زي أمن الفعاليات"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EyeIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            زي أمن الفعاليات
          </h1>
          <p className="text-xl text-orange-200 mb-10 max-w-3xl mx-auto">
            أزياء أمن عالية الوضوح مصممة لإدارة الحشود وأمن الفعاليات والسلامة العامة مع ميزات تمييز معززة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=event-security-uniform"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار
            </Link>
            <Link
              href="/ar/contact/?subject=Event Security Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              اتصل بمتخصص
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ملابس أمن فعاليات احترافية
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم أزياء أمن الفعاليات لدينا لتحقيق أقصى قدر من الوضوح والوظائف في البيئات المزدحمة. سواء كان إدارة الحشود في المهرجانات أو الفعاليات الرياضية أو التجمعات الشركاتية، تضمن هذه الأزياء أن فريق الأمن لديك قابل للتعرف بسهولة ومجهز بشكل احترافي.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">خيارات عالية الوضوح</h3>
                    <p className="text-gray-600">ألوان أمان زاهية وعناصر عاكسة لأقصى قدر من التمييز</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">راحة للمناوبات الطويلة</h3>
                    <p className="text-gray-600">أقمشة تسمح بالتهوية وتصميم مريح للارتداء المطول</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مقاوم للطقس</h3>
                    <p className="text-gray-600">مواد متينة مناسبة للفعاليات الخارجية في ظروف مختلفة</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security/saudi-events-security.jpg"
                alt="تفاصيل زي أمن الفعاليات"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الميزات الرئيسية لأمن الفعاليات
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل جانب مصمم لتلبية المتطلبات الفريدة لعمليات أمن الفعاليات.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أزياء لكل نوع من أنواع الفعاليات
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              حلول أزياء أمن متخصصة مصممة خصيصًا لبيئات ومتطلبات فعاليات مختلفة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((eventType) => (
              <div key={eventType.name} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{eventType.name}</h3>
                <p className="text-gray-600 mb-4">{eventType.description}</p>
                <ul className="space-y-2">
                  {eventType.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            أمّن فعاليتك القادمة
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي أمن الفعاليات لدينا لمناقشة متطلباتك المحددة واحصل على حل زي مخصص لفعاليتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=event-security-uniform"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار الفعالية
            </Link>
            <Link
              href="/ar/shop/security-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              عرض جميع أزياء الأمن
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}