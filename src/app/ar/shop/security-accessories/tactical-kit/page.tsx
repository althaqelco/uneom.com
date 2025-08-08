import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  BoltIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  LockClosedIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم تكتيكي متقدم - معدات أمنية تكتيكية | يونيوم',
  description: 'طقم تكتيكي متقدم للعمليات الأمنية الخاصة والوحدات التكتيكية، يضم أحدث المعدات والإكسسوارات التكتيكية في المملكة العربية السعودية',
  keywords: 'طقم تكتيكي، معدات تكتيكية، أمن تكتيكي، عمليات خاصة، معدات أمنية متقدمة، المملكة العربية السعودية',
  openGraph: {
    title: 'طقم تكتيكي متقدم - معدات أمنية تكتيكية | يونيوم',
    description: 'طقم تكتيكي متقدم للعمليات الأمنية الخاصة والوحدات التكتيكية',
    images: ['/images/products/security/tactical-kit-ar.jpg'],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-accessories/tactical-kit/',
    languages: {
      'en': 'https://uneom.com/shop/security-accessories/tactical-kit/',
      'ar': 'https://uneom.com/ar/shop/security-accessories/tactical-kit/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'طقم تكتيكي متقدم',
  description: 'طقم تكتيكي متقدم للعمليات الأمنية الخاصة والوحدات التكتيكية، يضم أحدث المعدات والإكسسوارات التكتيكية',
  image: [
    'https://uneom.com/images/products/security/tactical-kit-main.jpg',
    'https://uneom.com/images/products/security/tactical-kit-contents.jpg',
    'https://uneom.com/images/products/security/tactical-kit-features.jpg'
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
  category: 'معدات أمنية تكتيكية',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/security-accessories/tactical-kit/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '67',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'ماجد الحربي'
      },
      reviewBody: 'طقم تكتيكي ممتاز ومتكامل، جودة عسكرية وجميع المعدات ضرورية للعمليات التكتيكية'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'عدد القطع',
      value: '15 قطعة'
    },
    {
      '@type': 'PropertyValue',
      name: 'المواد',
      value: 'نايلون تكتيكي ومعادن مقاومة'
    },
    {
      '@type': 'PropertyValue',
      name: 'المعايير',
      value: 'معايير عسكرية'
    }
  ]
}

export default function TacticalKitAr() {
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
              <Link href="/ar/shop/security-accessories/" className="hover:text-blue-600">إكسسوارات الأمن</Link>
              <span>/</span>
              <span className="text-gray-900">طقم تكتيكي متقدم</span>
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
                    src="/images/products/security/tactical-kit-main.jpg"
                    alt="طقم تكتيكي متقدم - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-kit-contents.jpg"
                      alt="محتويات الطقم التكتيكي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-kit-features.jpg"
                      alt="مميزات الطقم التكتيكي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-kit-vest.jpg"
                      alt="سترة تكتيكية"
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    طقم تكتيكي متقدم
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    طقم تكتيكي شامل ومتطور مصمم للعمليات الأمنية الخاصة والوحدات التكتيكية المحترفة
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(67 تقييم)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">المميزات التكتيكية</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-slate-600" />
                      <span className="text-slate-800">15 قطعة تكتيكية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FireIcon className="w-6 h-6 text-red-500" />
                      <span className="text-slate-800">مقاوم للحرارة والنار</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-yellow-500" />
                      <span className="text-slate-800">مقاوم للصدمات</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-green-500" />
                      <span className="text-slate-800">رؤية ليلية محسّنة</span>
                    </div>
                  </div>
                </div>

                {/* Tactical Contents */}
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">محتويات الطقم التكتيكي</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>سترة تكتيكية مقاومة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حزام تكتيكي متعدد الجيوب</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة مسدس تكتيكية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة ذخيرة مزدوجة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>كشاف تكتيكي LED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>سكين تكتيكي متعدد الاستخدام</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>قفازات تكتيكية مقاومة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حقيبة إسعافات أولية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حبل تكتيكي مقاوم</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>أقنعة حماية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>نظارات حماية تكتيكية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>جهاز اتصال لاسلكي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حقيبة نقل مقاومة للماء</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>دليل العمليات التكتيكية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>شارات تعريف متخصصة</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر للوحدات التكتيكية
                  </button>
                  <button className="w-full border-2 border-slate-800 text-slate-800 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-colors">
                    إضافة إلى قائمة الطلبات
                  </button>
                </div>

                {/* Special Notice */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <LockClosedIcon className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-amber-800">تنبيه هام</p>
                      <p className="text-sm text-amber-700">هذا المنتج مخصص للجهات الأمنية والعسكرية المرخصة فقط</p>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">شحن آمن ومتخصص</p>
                    <p className="text-sm text-green-600">تسليم مباشر للجهات المرخصة</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التكتيكية</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">عدد القطع</span>
                    <span className="text-gray-600">15 قطعة تكتيكية</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مادة السترة</span>
                    <span className="text-gray-600">نايلون تكتيكي 1000D</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مقاومة الرصاص</span>
                    <span className="text-gray-600">مستوى IIIA</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">اللون</span>
                    <span className="text-gray-600">أسود تكتيكي</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المعايير</span>
                    <span className="text-gray-600">NIJ 0101.06</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الضمان</span>
                    <span className="text-gray-600">3 سنوات</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المميزات التكتيكية</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">حماية متقدمة</h4>
                      <p className="text-gray-600">حماية شاملة من التهديدات المختلفة والمقذوفات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">مرونة تكتيكية</h4>
                      <p className="text-gray-600">تصميم يسمح بحرية الحركة أثناء العمليات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">تنظيم محترف</h4>
                      <p className="text-gray-600">جيوب وحافظات منظمة لجميع المعدات التكتيكية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">متانة عسكرية</h4>
                      <p className="text-gray-600">مواد عسكرية تتحمل الظروف القاسية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">تقنيات متطورة</h4>
                      <p className="text-gray-600">أحدث التقنيات في مجال المعدات التكتيكية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">الوحدات الخاصة</h4>
                    <p className="text-slate-800 text-sm">العمليات التكتيكية والمهام الخاصة</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">مكافحة الإرهاب</h4>
                    <p className="text-blue-800 text-sm">عمليات مكافحة الإرهاب والتهديدات</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">الأمن الحكومي</h4>
                    <p className="text-green-800 text-sm">حماية المنشآت الحكومية الحساسة</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">العمليات العسكرية</h4>
                    <p className="text-red-800 text-sm">المهام العسكرية والدفاعية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء الوحدات المتخصصة</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "طقم تكتيكي ممتاز ومتكامل، جودة عسكرية وجميع المعدات ضرورية للعمليات التكتيكية."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">ماجد الحربي</p>
                  <p>قائد وحدة خاصة - الحرس الوطني</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "معدات احترافية ومتانة عالية. يلبي جميع متطلبات العمليات التكتيكية المعقدة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">عبدالله القحطاني</p>
                  <p>ضابط تكتيكي - وزارة الداخلية</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "استثمار ممتاز للوحدات التكتيكية. جودة عسكرية وأداء موثوق في الميدان."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">فيصل الدوسري</p>
                  <p>مدرب تكتيكي - كلية الملك فهد الأمنية</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جهز وحدتك التكتيكية بأحدث المعدات
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على طقم تكتيكي متقدم لضمان نجاح العمليات الأمنية الحساسة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/contact/"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                تواصل مع المتخصصين
              </Link>
              <Link
                href="/ar/quote/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center"
              >
                طلب عرض سعر متخصص
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}