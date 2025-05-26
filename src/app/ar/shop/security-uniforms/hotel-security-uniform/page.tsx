import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي أمن الفنادق | ملابس أمن ضيافة احترافية | يونيوم',
  description: 'أزياء أمن فنادق احترافية مصممة لبيئات الضيافة. توازن بين السلطة والمظهر الودود لراحة الضيوف وفعالية الأمن في المملكة العربية السعودية.',
  keywords: 'زي أمن فنادق, ملابس أمن ضيافة, زي حارس فندق السعودية, ملابس أمن احترافية, ملابس أمن ودودة للضيوف',
  openGraph: {
    title: 'زي أمن الفنادق | ملابس أمن ضيافة احترافية | يونيوم',
    description: 'أزياء أمن أنيقة مصممة خصيصًا لبيئات الفنادق والضيافة، تضمن المظهر الاحترافي مع الحفاظ على سلطة الأمن.',
    images: ['/images/security/smart-fabric-technology.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: BuildingOfficeIcon,
    title: 'تصميم يركز على الضيافة',
    description: 'مصمم للاندماج بسلاسة مع جماليات الفندق مع الحفاظ على هوية أمنية واضحة.'
  },
  {
    icon: UserGroupIcon,
    title: 'مظهر ودود للضيوف',
    description: 'تصميم احترافي يبدو ودودًا للضيوف مع نقل السلطة والكفاءة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'ميزات أمنية وظيفية',
    description: 'يتضمن حاملي الشارات ومشابك الراديو وجيوب منفصلة لمعدات الأمن وأجهزة الاتصال.'
  },
  {
    icon: SparklesIcon,
    title: 'مواد فاخرة',
    description: 'أقمشة عالية الجودة تحافظ على المظهر الاحترافي طوال المناوبات الطويلة والتفاعل المتكرر مع الضيوف.'
  }
]

const customizationOptions = [
  'تطريز شعار الفندق',
  'أنظمة ألوان مخصصة لتتناسب مع علامة الفندق التجارية',
  'تنويعات موسمية (خفيفة الوزن/ثقيلة الوزن)',
  'شارات الرتبة وتحديد القسم',
  'بطاقات الأسماء وحاملي الشارات',
  'نقاط ربط الراديو والمعدات'
]

export default function HotelSecurityUniformPageAR() {
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
            <span className="text-gray-900">زي أمن الفنادق</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/smart-fabric-technology.jpg"
            alt="خلفية زي أمن الفنادق"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BuildingOfficeIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            زي أمن الفنادق
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            ملابس أمن احترافية مصممة خصيصًا لبيئات الضيافة، توازن بين السلطة وجماليات خدمة الضيوف الودودة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=hotel-security-uniform"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار
            </Link>
            <Link
              href="/ar/contact/?subject=Hotel Security Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg"
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
                ملابس أمن فنادق احترافية
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم أزياء أمن الفنادق لدينا خصيصًا لصناعة الضيافة، حيث يجب على أفراد الأمن الحفاظ على مظهر احترافي وودود مع ضمان سلامة الضيوف وحماية الممتلكات.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مظهر احترافي أنيق</h3>
                    <p className="text-gray-600">مصمم ليكمل جماليات الفندق مع الحفاظ على سلطة الأمن</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">تصميم ودود للضيوف</h3>
                    <p className="text-gray-600">تصميم احترافي يبدو ودودًا لضيوف الفندق</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">ميزات وظيفية</h3>
                    <p className="text-gray-600">يتضمن جميع نقاط ربط المعدات الأمنية الضرورية</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security/smart-fabric-technology.jpg"
                alt="تفاصيل زي أمن الفنادق"
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
              الميزات الرئيسية لأمن الفنادق
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل جانب مصمم لتلبية المتطلبات الفريدة لعمليات أمن الفنادق.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            خيارات التخصيص
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            صمم أزياء أمن الفنادق لتتناسب مع علامتك التجارية ومتطلبات التشغيل.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {customizationOptions.map((option, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
          <Link
            href="/ar/services/custom-design/#hotel-security"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg inline-flex items-center"
          >
            ناقش التصميم المخصص
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            عزز فريق أمن الفندق لديك
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي أزياء الضيافة لدينا لمناقشة متطلبات زي أمن الفندق الخاص بك واحصل على عرض أسعار مخصص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=hotel-security-uniform"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار الآن
            </Link>
            <Link
              href="/ar/shop/security-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              عرض جميع أزياء الأمن
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}