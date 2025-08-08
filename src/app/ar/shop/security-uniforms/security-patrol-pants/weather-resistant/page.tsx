import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CloudIcon, 
  ShieldCheckIcon, 
  SunIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  ClockIcon,
  EyeIcon,
  FireIcon,
  UserGroupIcon,
  BeakerIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بنطلون دورية مقاوم للطقس - ملابس أمنية متخصصة | يونيوم',
  description: 'بنطلون دورية أمنية مقاوم لجميع الظروف الجوية مصمم للعمل الخارجي في المطر والحرارة والرياح. حماية شاملة لرجال الأمن في المملكة العربية السعودية',
  keywords: 'بنطلون مقاوم للطقس، ملابس دورية أمنية، بنطلون أمن، ملابس مقاومة للماء، زي أمني، دورية خارجية، المملكة العربية السعودية، الرياض، جدة',
  openGraph: {
    title: 'بنطلون دورية مقاوم للطقس - ملابس أمنية متخصصة | يونيوم',
    description: 'بنطلون دورية أمنية مقاوم لجميع الظروف الجوية مصمم للعمل الخارجي في المطر والحرارة والرياح',
    images: ['/images/products/security/weather-resistant-patrol-pants-ar.jpg'],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/weather-resistant/',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/security-patrol-pants/weather-resistant/',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/weather-resistant/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'بنطلون دورية مقاوم للطقس',
  description: 'بنطلون دورية أمنية مقاوم لجميع الظروف الجوية مصمم للعمل الخارجي في المطر والحرارة والرياح',
  image: [
    'https://uneom.com/images/products/security/weather-resistant-patrol-pants-main.jpg',
    'https://uneom.com/images/products/security/weather-resistant-patrol-pants-details.jpg',
    'https://uneom.com/images/products/security/weather-resistant-patrol-pants-outdoor.jpg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'يونيوم'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'يونيوم',
    url: 'https://uneom.com/ar/'
  },
  category: 'ملابس أمنية مقاومة للطقس',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/weather-resistant/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '94',
    bestRating: '5',
    worstRating: '1'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'المادة',
      value: 'قماش مقاوم للطقس والماء'
    },
    {
      '@type': 'PropertyValue',
      name: 'المقاومة',
      value: 'مقاوم للماء والرياح والحرارة'
    },
    {
      '@type': 'PropertyValue',
      name: 'الاستخدام',
      value: 'الدوريات الخارجية في جميع الأوقات'
    }
  ]
}

export default function WeatherResistantPatrolPantsAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/ar/" className="hover:text-blue-600">الرئيسية</Link>
              <span>/</span>
              <Link href="/ar/shop/" className="hover:text-blue-600">المتجر</Link>
              <span>/</span>
              <Link href="/ar/shop/security-uniforms/" className="hover:text-blue-600">الأزياء الأمنية</Link>
              <span>/</span>
              <span className="text-gray-900">بنطلون مقاوم للطقس</span>
            </div>
          </div>
        </nav>

        {/* Product Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/security/weather-resistant-patrol-pants-main.jpg"
                    alt="بنطلون دورية مقاوم للطقس - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/weather-resistant-patrol-pants-details.jpg"
                      alt="تفاصيل البنطلون المقاوم للطقس"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/weather-resistant-patrol-pants-outdoor.jpg"
                      alt="البنطلون في العمل الخارجي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/weather-resistant-patrol-pants-features.jpg"
                      alt="مميزات البنطلون المقاوم"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CloudIcon className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      مقاوم لجميع الظروف الجوية
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    بنطلون دورية مقاوم للطقس
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    بنطلون دورية أمنية مقاوم لجميع الظروف الجوية مصمم خصيصاً للعمل الخارجي، يوفر الحماية الكاملة من المطر والرياح والحرارة مع الراحة القصوى
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(94 تقييم)</span>
                  </div>
                </div>

                {/* Weather Resistance Features */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">مميزات المقاومة للطقس</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CloudIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-blue-800">مقاوم للمطر</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SunIcon className="w-6 h-6 text-yellow-600" />
                      <span className="text-blue-800">حماية من الحرارة</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-purple-600" />
                      <span className="text-blue-800">مقاوم للرياح</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-orange-600" />
                      <span className="text-blue-800">مقاوم للأتربة</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                  <div className="grid grid-cols-6 gap-3">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className="border-2 border-gray-300 rounded-lg py-3 text-center font-semibold hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون</h3>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-gray-800 rounded-full border-4 border-gray-300"></button>
                    <button className="w-12 h-12 bg-blue-900 rounded-full border-4 border-transparent hover:border-blue-300"></button>
                    <button className="w-12 h-12 bg-green-800 rounded-full border-4 border-transparent hover:border-green-300"></button>
                    <button className="w-12 h-12 bg-orange-800 rounded-full border-4 border-transparent hover:border-orange-300"></button>
                  </div>
                </div>

                {/* Weather Protection Options */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">خيارات الحماية من الطقس</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">طبقة إضافية مقاومة للماء</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">بطانة حرارية للشتاء</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">شرائط عاكسة للرؤية</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">جيوب مقاومة للماء</span>
                    </label>
                  </div>
                </div>

                {/* Weather Conditions */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">مناسب للظروف الجوية</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CloudIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-blue-800">المطر الغزير</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SunIcon className="w-6 h-6 text-yellow-600" />
                      <span className="text-blue-800">الحرارة العالية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-purple-600" />
                      <span className="text-blue-800">الرياح القوية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-orange-600" />
                      <span className="text-blue-800">العواصف الترابية</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر للدوريات الخارجية
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    إضافة إلى قائمة الطلبات
                  </button>
                </div>

                {/* Service Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                    <TruckIcon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">تسليم سريع</p>
                      <p className="text-sm text-green-600">خلال 3-5 أيام عمل</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-800">ضمان الجودة</p>
                      <p className="text-sm text-blue-600">ضمان 6 أشهر</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التقنية</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المادة</span>
                    <span className="text-gray-600">قماش مقاوم للطقس</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الوزن</span>
                    <span className="text-gray-600">350 جرام/متر مربع</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مقاومة الماء</span>
                    <span className="text-gray-600">IPX5</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الجيوب</span>
                    <span className="text-gray-600">6 جيوب مقاومة للماء</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">درجة الحرارة</span>
                    <span className="text-gray-600">-10°C إلى +45°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المعايير</span>
                    <span className="text-gray-600">EN 343, ISO 20471</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مميزات المقاومة</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">مقاومة شاملة للطقس</h4>
                      <p className="text-gray-600">حماية كاملة من جميع الظروف الجوية القاسية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">تهوية متقدمة</h4>
                      <p className="text-gray-600">نظام تهوية يمنع تراكم الرطوبة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">مرونة الحركة</h4>
                      <p className="text-gray-600">تصميم يسمح بحرية الحركة الكاملة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">سهولة العناية</h4>
                      <p className="text-gray-600">قابل للغسيل والتنظيف السريع</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">متانة عالية</h4>
                      <p className="text-gray-600">مقاوم للتمزق والاستخدام الشاق</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">الدوريات الخارجية</h4>
                    <p className="text-blue-800 text-sm">للدوريات الأمنية في الطقس السيء</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 mb-2">حراسة المواقع</h4>
                    <p className="text-cyan-800 text-sm">لحراسة المواقع الخارجية والمفتوحة</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">العمليات الطارئة</h4>
                    <p className="text-green-800 text-sm">للاستجابة السريعة في الطوارئ</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">المراقبة الليلية</h4>
                    <p className="text-orange-800 text-sm">للمراقبة والحراسة الليلية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Conditions Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                مقاوم لجميع الظروف الجوية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مصمم خصيصاً لمواجهة التحديات الجوية في المملكة العربية السعودية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">مقاوم للمطر</h3>
                <p className="text-gray-600 text-sm">
                  حماية كاملة من الأمطار الغزيرة والرطوبة العالية
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SunIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">حماية من الحرارة</h3>
                <p className="text-gray-600 text-sm">
                  تقنية متقدمة للحماية من أشعة الشمس والحرارة العالية
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">مقاوم للرياح</h3>
                <p className="text-gray-600 text-sm">
                  تصميم محكم يقاوم الرياح القوية والعواصف
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BeakerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">مقاوم للأتربة</h3>
                <p className="text-gray-600 text-sm">
                  حماية فعالة من العواصف الترابية والغبار
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء رجال الأمن</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "بنطلون ممتاز للعمل في الطقس السيء، مقاوم جداً للمطر ومريح أثناء الدوريات الطويلة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">فهد الدوسري</p>
                  <p>رجل أمن - دورية خارجية</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                    <StarIcon className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-600">4/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "جودة عالية ومقاومة ممتازة للحرارة والرياح، ساعدني كثيراً في العمل الصيفي."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">عبدالرحمن العتيبي</p>
                  <p>حارس أمن - موقع خارجي</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "بنطلون احترافي يتحمل جميع الظروف الجوية، أنصح به لجميع العاملين في الأمن الخارجي."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">طلال الشهري</p>
                  <p>مشرف أمن - منشأة حكومية</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              واجه جميع الظروف الجوية بثقة
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على بنطلون دورية مقاوم للطقس لضمان الحماية والراحة في جميع الأوقات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <PhoneIcon className="w-6 h-6" />
                طلب عرض سعر فوري
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                استشارة مجانية
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}