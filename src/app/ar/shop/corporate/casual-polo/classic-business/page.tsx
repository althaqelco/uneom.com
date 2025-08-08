import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'بولو الأعمال الكلاسيكي | قمصان بولو شركاتية أنيقة | يونيوم',
  description: 'قمصان بولو كلاسيكية للشركات والمكاتب. تصميم أنيق ومريح للبيئة المهنية مع خامات عالية الجودة ومظهر احترافي في المملكة العربية السعودية.',
  keywords: 'بولو أعمال كلاسيكي, قميص بولو شركاتي, ملابس مكتبية كاجوال السعودية, بولو احترافي, قميص عمل أنيق',
  openGraph: {
    title: 'بولو الأعمال الكلاسيكي | قمصان بولو شركاتية أنيقة | يونيوم',
    description: 'قمصان بولو كلاسيكية مصممة للبيئة المهنية مع الحفاظ على الأناقة والراحة.',
    images: ['/images/products/corporate-polo-shirts.jpg']}}

const classicFeatures = [
  {
    icon: BuildingOfficeIcon,
    title: 'تصميم مهني كلاسيكي',
    description: 'قصة كلاسيكية أنيقة تناسب البيئة المهنية والاجتماعات غير الرسمية.'
  },
  {
    icon: SparklesIcon,
    title: 'خامات عالية الجودة',
    description: 'قطن مخلوط عالي الجودة يوفر الراحة والمتانة مع مظهر أنيق.'
  },
  {
    icon: UserGroupIcon,
    title: 'مناسب لجميع المناسبات',
    description: 'مثالي للعمل اليومي والاجتماعات والفعاليات الشركاتية غير الرسمية.'
  },
  {
    icon: StarIcon,
    title: 'راحة طوال اليوم',
    description: 'تصميم مريح يسمح بحرية الحركة مع الحفاظ على المظهر الأنيق.'
  }
]

export default function ClassicBusinessPoloPageAR() {
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
            <Link href="/ar/shop/corporate/" className="hover:text-blue-600">الملابس الشركاتية</Link>
            <span>/</span>
            <Link href="/ar/shop/corporate/casual-polo/" className="hover:text-blue-600">بولو كاجوال</Link>
            <span>/</span>
            <span className="text-gray-900">بولو الأعمال الكلاسيكي</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/corporate-polo-shirts.jpg"
            alt="خلفية بولو الأعمال الكلاسيكي"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BuildingOfficeIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            بولو الأعمال الكلاسيكي
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            قمصان بولو كلاسيكية مصممة للبيئة المهنية، تجمع بين الأناقة التقليدية والراحة العملية للاستخدام اليومي في المكتب.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=classic-business-polo"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار
            </Link>
            <Link
              href="/ar/contact/?subject=Classic Business Polo Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
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
                الأناقة الكلاسيكية للبيئة المهنية
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم قمصان البولو الكلاسيكية لدينا للمهنيين الذين يقدرون الأناقة التقليدية والراحة في العمل. هذه القمصان مثالية للبيئة المكتبية الحديثة التي تتطلب مظهرًا مهنيًا مع مرونة في الأسلوب.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">تصميم كلاسيكي أنيق</h3>
                    <p className="text-gray-600">قصة تقليدية محدثة تناسب جميع أنواع الجسم</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">خامات متميزة</h3>
                    <p className="text-gray-600">قطن مخلوط عالي الجودة مقاوم للتجعد</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">متعدد الاستخدامات</h3>
                    <p className="text-gray-600">مناسب للعمل والاجتماعات والفعاليات</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/corporate-polo-shirts.jpg"
                alt="تفاصيل بولو الأعمال الكلاسيكي"
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
              مميزات البولو الكلاسيكي
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل تفصيلة مصممة لتوفير الراحة والأناقة في البيئة المهنية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classicFeatures.map((feature) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ بمظهرك المهني
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي الملابس الشركاتية لدينا لمناقشة احتياجاتك واحصل على عرض أسعار مخصص لقمصان البولو الكلاسيكية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=classic-business-polo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار الآن
            </Link>
            <Link
              href="/ar/shop/corporate/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              عرض جميع الملابس الشركاتية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}