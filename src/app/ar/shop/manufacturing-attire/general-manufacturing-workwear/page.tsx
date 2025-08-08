import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'ملابس عمل تصنيع عامة | أزياء مصانع متينة | يونيوم',
  description: 'ملابس عمل متينة وعملية لبيئات التصنيع العامة. تشمل قمصان العمل والسراويل والأفرهولات الخفيفة المصممة للراحة والسلامة وطول العمر في المملكة العربية السعودية.',
  keywords: 'ملابس عمل تصنيع, أزياء مصانع السعودية, قمصان عمل صناعية, سراويل عمل متينة, أفرهولات خفيفة السعودية, ملابس مصانع عامة',
  openGraph: {
    title: 'ملابس عمل تصنيع عامة | أزياء مصانع متينة | يونيوم',
    description: 'جهز القوى العاملة في التصنيع لديك بملابس عمل متينة ومريحة وعملية مصممة للاستخدام الصناعي اليومي.',
    images: ['/images/products/manufacturing/general-workwear-main.jpg']}}

const workwearTypes = [
  {
    name: 'قمصان عمل متينة',
    description: 'قمصان شديدة التحمل مصنوعة من قطن الدريل أو مزيج بولي قطن، توفر التهوية ومقاومة التآكل والتمزق.',
    image: '/images/products/manufacturing/work-shirts.jpg',
    features: ['درزات معززة', 'جيوب متعددة الاستخدامات', 'مجموعة متنوعة من الألوان والأوزان']
  },
  {
    name: 'سراويل عمل صناعية',
    description: 'سراويل عمل قوية ومريحة مع ميزات مثل جيوب كارجو، وركب معززة، وخياطة ثلاثية متينة.',
    image: '/images/products/manufacturing/work-pants.jpg',
    features: ['أقمشة شديدة التحمل', 'تصميم جيوب عملي', 'قصة مريحة للحركة']
  },
  {
    name: 'أفرهولات خفيفة الوزن',
    description: 'أفرهولات من قطعة واحدة للحماية العامة من الأوساخ والشحوم والبقع الطفيفة في إعدادات التصنيع.',
    image: '/images/products/manufacturing/light-coveralls.jpg',
    features: ['سهلة الارتداء والخلع', 'بولي قطن يسمح بالتهوية', 'جيوب متعددة للأدوات']
  }
]

const whyChooseUneomManufacturingWorkwear = [
  {
    icon: CogIcon,
    title: 'مصممة للصناعة',
    description: 'ملابس العمل لدينا مصممة خصيصًا لتلبية متطلبات بيئات التصنيع، مع التركيز على المتانة والوظائف.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'سلامة عامل معززة',
    description: 'توفر مستوى أساسيًا من الحماية ويمكن دمجها مع معدات الوقاية الشخصية المتخصصة للمهام عالية الخطورة.'
  },
  {
    icon: SparklesIcon,
    title: 'الراحة والإنتاجية',
    description: 'التصاميم المريحة والأقمشة التي تسمح بالتهوية تساعد على تحسين راحة العامل ويمكن أن تساهم في زيادة الإنتاجية.'
  },
  {
    icon: UserGroupIcon,
    title: 'مظهر فريق احترافي',
    description: 'ملابس العمل الموحدة تخلق صورة موحدة واحترافية للقوى العاملة في التصنيع لديك.'
  }
]

export default function GeneralManufacturingWorkwearPageAR() {
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
            <Link href="/ar/shop/manufacturing-attire/" className="hover:text-blue-600">ملابس التصنيع</Link>
            <span>/</span>
            <span className="text-gray-900">ملابس عمل تصنيع عامة</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-slate-700 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/manufacturing-banner.jpg" 
            alt="خلفية ملابس عمل التصنيع"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <WrenchScrewdriverIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ملابس عمل تصنيع عامة
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
            جهز القوى العاملة لديك بملابس متينة وعملية ومريحة مصممة لمتطلبات بيئات التصنيع العامة في المملكة العربية السعودية.
          </p>
          <Link
            href="/ar/quote/?category=manufacturing-workwear"
            className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            احصل على عرض أسعار لمصنعك
          </Link>
        </div>
      </section>

      {/* Workwear Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ملابس عمل أساسية لخط إنتاجك
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مجموعة من الملابس لضمان تجهيز فريقك للمهام اليومية في بيئة التصنيع.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workwearTypes.map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-72 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/ar/shop/industrial-uniforms/${item.name.toLowerCase().replace(/\s+/g, '-')}/`} 
                    className="mt-auto bg-gray-700 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                  >
                    عرض {item.name}
                    <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              معيار يونيوم لملابس عمل التصنيع
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نقدم حلول ملابس عمل قوية وموثوقة تعطي الأولوية للسلامة والراحة والمتانة لفريق التصنيع لديك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomManufacturingWorkwear.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customization & Bulk Orders Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CogIcon className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ملابس عمل مصممة خصيصًا لاحتياجات التصنيع الخاصة بك
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            نقدم خيارات تخصيص مثل نقاط الضغط المعززة، والجيوب المتخصصة، وعلامات الشركة التجارية (تطريز أو نقل حراري) لإنشاء ملابس عمل تناسب تمامًا متطلبات التشغيل الخاصة بك وتعزز هوية شركتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/services/custom-design/#manufacturing-workwear"
              className="bg-slate-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-lg inline-flex items-center"
            >
              ناقش ملابس العمل المخصصة
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/shop/industrial-uniforms/industrial-protective-uniforms/"
              className="border-2 border-slate-700 text-slate-700 px-10 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-lg"
            >
              عرض الأزياء الواقية
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جهز القوى العاملة لديك للنجاح
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي ملابس العمل الصناعية لدينا لمناقشة احتياجات ملابس التصنيع المحددة الخاصة بك وللحصول على عرض أسعار تنافسي لفريقك.
          </p>
          <Link
            href="/ar/contact/"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-lg"
          >
            اتصل بمتخصصي الصناعة
          </Link>
        </div>
      </section>
    </div>
  )
}