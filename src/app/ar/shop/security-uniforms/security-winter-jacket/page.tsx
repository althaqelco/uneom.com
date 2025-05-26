import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CloudIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'جاكيت أمن شتوي | ملابس أمن خارجية معزولة | يونيوم',
  description: 'جاكيتات أمن شتوية احترافية مصممة لظروف الطقس البارد. ملابس أمن خارجية معزولة بتصميم احترافي للمراقبة الخارجية في المملكة العربية السعودية.',
  keywords: 'جاكيت أمن شتوي, معطف أمن معزول, زي أمن طقس بارد, جاكيت أمن خارجي السعودية, ملابس أمن حرارية',
  openGraph: {
    title: 'جاكيت أمن شتوي | ملابس أمن خارجية معزولة | يونيوم',
    description: 'جاكيتات أمن معزولة مصممة لظروف الطقس البارد مع ميزات أمنية وتصميم احترافي للمراقبة الخارجية.',
    images: ['/images/security/advanced-fabrics-hero.jpg'],
  },
}

const jacketFeatures = [
  {
    icon: CloudIcon,
    title: 'حماية من الطقس',
    description: 'غلاف خارجي مقاوم للماء مع عزل حراري للحماية من الظروف الباردة والرطبة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'ميزات أمنية',
    description: 'حاملي الشارات ومشابك الراديو ونقاط ربط المعدات مدمجة في التصميم.'
  },
  {
    icon: SparklesIcon,
    title: 'تصميم احترافي',
    description: 'يحافظ على المظهر الأمني الاحترافي مع توفير الحماية الأساسية من الطقس البارد.'
  },
  {
    icon: SunIcon,
    title: 'عناصر عاكسة',
    description: 'شرائط عاكسة موضوعة بشكل استراتيجي لتعزيز الرؤية أثناء ظروف الإضاءة المنخفضة.'
  }
]

const technicalSpecs = [
  {
    feature: 'العزل',
    specification: 'حشو حراري صناعي مع تصنيف درجة حرارة مناسب لظروف الشتاء السعودي'
  },
  {
    feature: 'مقاومة الماء',
    specification: 'طلاء DWR (طارد الماء المتين) مع درزات مختومة'
  },
  {
    feature: 'التهوية',
    specification: 'بطانة تمتص الرطوبة لمنع الحرارة الزائدة أثناء المهام النشطة'
  },
  {
    feature: 'المتانة',
    specification: 'نقاط ضغط معززة وسحابات شديدة التحمل للاستخدام المطول'
  },
  {
    feature: 'الرؤية',
    specification: 'شريط عاكس 3M موضوع بشكل استراتيجي للرؤية 360 درجة'
  },
  {
    feature: 'التخزين',
    specification: 'جيوب آمنة متعددة للمعدات والوثائق والأشياء الشخصية'
  }
]

export default function SecurityWinterJacketPageAR() {
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
            <span className="text-gray-900">جاكيت أمن شتوي</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-slate-700 to-blue-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/advanced-fabrics-hero.jpg"
            alt="خلفية جاكيت أمن شتوي"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CloudIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            جاكيت أمن شتوي
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
            جاكيتات أمن معزولة احترافية مصممة لظروف الطقس البارد والمراقبة الخارجية وعمليات الأمن المطولة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=security-winter-jacket"
              className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار
            </Link>
            <Link
              href="/ar/contact/?subject=Security Winter Jacket Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors text-lg"
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
                معدات أمن احترافية للطقس البارد
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم جاكيتات الأمن الشتوية لدينا لمحترفي الأمن الذين يعملون في ظروف الطقس البارد. سواء كان إجراء دوريات خارجية أو إدارة مناطق وقوف السيارات أو توفير أمن المحيط، تضمن هذه الجاكيتات الراحة والوظائف دون المساس بالمظهر الاحترافي.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">عزل حراري</h3>
                    <p className="text-gray-600">عزل صناعي متقدم للدفء دون الحجم الكبير</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مقاوم للماء</h3>
                    <p className="text-gray-600">طلاء DWR يحمي من المطر والرطوبة</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">رؤية معززة</h3>
                    <p className="text-gray-600">عناصر عاكسة للسلامة أثناء المناوبات الليلية</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security/advanced-fabrics-hero.jpg"
                alt="تفاصيل جاكيت أمن شتوي"
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
              الميزات الرئيسية لأمن الطقس البارد
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل جانب مصمم للحفاظ على أفراد الأمن دافئين وجافين ومحترفين في ظروف الطقس الصعبة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jacketFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المواصفات التقنية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مواصفات مفصلة تضمن الأداء الأمثل في عمليات الأمن في الطقس البارد.
            </p>
          </div>
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
            {technicalSpecs.map((spec, index) => (
              <div key={spec.feature} className={`p-6 ${index !== technicalSpecs.length - 1 ? 'border-b' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="sm:w-1/3">
                    <h3 className="font-semibold text-gray-900">{spec.feature}</h3>
                  </div>
                  <div className="sm:w-2/3 mt-2 sm:mt-0">
                    <p className="text-gray-600">{spec.specification}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing and Customization */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            خيارات المقاسات والتخصيص
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            متوفر في مجموعة كاملة من المقاسات مع خيارات التخصيص لتلبية متطلبات مؤسستك المحددة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">نطاق المقاسات</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• متوفر من XS إلى 5XL</li>
                <li>• أطوال عادية وطويلة</li>
                <li>• مقاسات مخصصة للمتطلبات الخاصة</li>
                <li>• استشارة المقاس متاحة</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">التخصيص</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• تطريز شعار الشركة</li>
                <li>• أنظمة ألوان مخصصة</li>
                <li>• وضع عاكس إضافي</li>
                <li>• تكوينات جيوب متخصصة</li>
              </ul>
            </div>
          </div>
          <Link
            href="/ar/services/custom-design/#security-winter-jacket"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors text-lg inline-flex items-center"
          >
            ناقش الخيارات المخصصة
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            احم فريق الأمن لديك على مدار السنة
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي أزياء الأمن لدينا لمناقشة متطلبات معدات الطقس البارد واحصل على عرض أسعار مخصص لفريقك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=security-winter-jacket"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار معدات الشتاء
            </Link>
            <Link
              href="/ar/shop/security-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors text-lg"
            >
              عرض جميع أزياء الأمن
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}