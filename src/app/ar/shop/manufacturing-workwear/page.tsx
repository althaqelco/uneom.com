import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'ملابس العمل الصناعية | أزياء المصانع وملابس الأمان | يونيوم',
  description: 'ملابس عمل صناعية احترافية وأزياء صناعية للمصانع وخطوط الإنتاج والمنشآت الصناعية في المملكة العربية السعودية. حلول ملابس عمل تركز على الأمان والمتانة والراحة.',
  keywords: 'ملابس عمل صناعية, أزياء صناعية السعودية, ملابس مصانع, أزياء خطوط إنتاج, ملابس أمان صناعية, ملابس عمل تصنيع',
  openGraph: {
    title: 'ملابس العمل الصناعية | أزياء المصانع وملابس الأمان | يونيوم',
    description: 'حلول ملابس عمل صناعية شاملة مصممة للأمان والمتانة والراحة في البيئات الصناعية.',
    images: ['/images/manufacturing/hero-manufacturing-workwear.jpg']}}

const workwearCategories = [
  {
    icon: CogIcon,
    title: 'أزياء خطوط الإنتاج',
    description: 'أزياء متخصصة لعمال ومشغلي خطوط الإنتاج',
    features: ['تصاميم آمنة للآلات', 'سهولة الحركة', 'تكوينات الجيوب', 'أنظمة التعريف'],
    link: '/ar/shop/manufacturing-workwear/production-line-uniforms/',
    image: '/images/manufacturing/production-line-uniforms.jpg'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'ملابس الصيانة',
    description: 'ملابس متينة لموظفي الصيانة والفنيين',
    features: ['جيوب الأدوات', 'مناطق معززة', 'مقاومة البقع', 'قصة مريحة'],
    link: '/ar/shop/manufacturing-workwear/maintenance-uniforms/',
    image: '/images/manufacturing/maintenance-workwear.jpg'
  },
  {
    icon: UserGroupIcon,
    title: 'ملابس المشرفين',
    description: 'ملابس مهنية للمشرفين والإدارة',
    features: ['مظهر مهني', 'راحة للورديات الطويلة', 'ميزات التعريف', 'مواد عالية الجودة'],
    link: '/ar/shop/manufacturing-workwear/supervisor-uniforms/',
    image: '/images/manufacturing/supervisor-attire.jpg'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'ملابس الأمان',
    description: 'ملابس عالية الوضوح وواقية للامتثال للأمان',
    features: ['مواد عالية الوضوح', 'امتثال الأمان', 'شرائط عاكسة', 'ميزات واقية'],
    link: '/ar/shop/manufacturing-workwear/safety-workwear/',
    image: '/images/manufacturing/safety-workwear.jpg'
  }
]

const safetyFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'امتثال الأمان',
    description: 'جميع ملابس العمل تلبي معايير الأمان الدولية واللوائح للبيئات الصناعية.'
  },
  {
    icon: CogIcon,
    title: 'المتانة',
    description: 'بناء قوي مصمم لتحمل متطلبات بيئات العمل الصناعية.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'الوظائف',
    description: 'تصاميم عملية مع جيوب الأدوات والمناطق المعززة والميزات التي تدعم مهام العمل اليومية.'
  },
  {
    icon: UserGroupIcon,
    title: 'الراحة',
    description: 'تصاميم مريحة توفر الراحة أثناء الورديات الطويلة وأنشطة العمل البدني.'
  }
]

const industries = [
  {
    name: 'تصنيع السيارات',
    description: 'ملابس عمل متخصصة لمرافق إنتاج السيارات',
    applications: ['خطوط التجميع', 'مراقبة الجودة', 'الصيانة', 'الإدارة']
  },
  {
    name: 'تجهيز الأغذية',
    description: 'ملابس عمل صحية لبيئات تصنيع الأغذية',
    applications: ['مناطق الإنتاج', 'التعبئة والتغليف', 'ضمان الجودة', 'موظفي التنظيف']
  },
  {
    name: 'التصنيع الكيميائي',
    description: 'ملابس عمل واقية لمرافق المعالجة الكيميائية',
    applications: ['التعامل مع المواد الكيميائية', 'العمل المختبري', 'بروتوكولات الأمان', 'الاستجابة للطوارئ']
  },
  {
    name: 'تصنيع الإلكترونيات',
    description: 'ملابس عمل مضادة للكهرباء الساكنة ومتوافقة مع الغرف النظيفة',
    applications: ['الغرف النظيفة', 'التجميع', 'الاختبار', 'التعبئة والتغليف']
  }
]

export default function ManufacturingWorkwearPageAR() {
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
            <span className="text-gray-900">ملابس العمل الصناعية</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-gray-800 to-blue-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/manufacturing/hero-manufacturing-workwear.jpg"
            alt="خلفية ملابس العمل الصناعية"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CogIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            حلول ملابس العمل الصناعية
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            ملابس عمل مهنية مصممة للبيئات الصناعية، تجمع بين الأمان والمتانة والراحة للعمال الصناعيين في جميع أنحاء المملكة العربية السعودية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=manufacturing-workwear"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار صناعي
            </Link>
            <Link
              href="/ar/contact/?subject=Manufacturing Workwear Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              اتصل بمتخصص
            </Link>
          </div>
        </div>
      </section>

      {/* Workwear Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجموعة ملابس العمل الصناعية الشاملة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              من عمال خطوط الإنتاج إلى الإدارة، نوفر ملابس عمل متخصصة لكل دور في التصنيع.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workwearCategories.map((category) => (
              <div key={category.title} className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <category.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Link
                      href={category.link}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                      استكشف الفئة
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ميزات الأمان والجودة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل قطعة من ملابس العمل الصناعية مصممة مع مراعاة الأمان والمتانة وراحة العامل.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature) => (
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

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الصناعات التي نخدمها
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              حلول ملابس عمل متخصصة لقطاعات التصنيع المختلفة في جميع أنحاء المملكة العربية السعودية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">التطبيقات:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.applications.map((app, index) => (
                      <div key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جهز فريق التصنيع الخاص بك
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي ملابس العمل الصناعية لدينا لمناقشة احتياجات منشأتك واحصل على اقتراح حل مخصص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=manufacturing-workwear"
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار صناعي
            </Link>
            <Link
              href="/ar/industries/manufacturing/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              تعرف على حلول التصنيع
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}