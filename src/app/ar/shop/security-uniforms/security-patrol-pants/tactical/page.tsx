import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  EyeIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  ClockIcon,
  CogIcon,
  FireIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بنطلون دورية أمنية تكتيكي - ملابس أمنية متخصصة | يونيوم',
  description: 'بنطلون دورية أمنية تكتيكي عالي الأداء مصمم للوحدات الأمنية المتخصصة والدوريات التكتيكية في المملكة العربية السعودية. مقاوم للتمزق ومتعدد الجيوب',
  keywords: 'بنطلون أمني تكتيكي، ملابس دورية أمنية، بنطلون أمن، ملابس تكتيكية، زي أمني، دورية أمنية، المملكة العربية السعودية، الرياض، جدة',
  openGraph: {
    title: 'بنطلون دورية أمنية تكتيكي - ملابس أمنية متخصصة | يونيوم',
    description: 'بنطلون دورية أمنية تكتيكي عالي الأداء مصمم للوحدات الأمنية المتخصصة والدوريات التكتيكية',
    images: ['/images/products/security/tactical-patrol-pants-ar.jpg'],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/tactical/',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/security-patrol-pants/tactical/',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/tactical/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'بنطلون دورية أمنية تكتيكي',
  description: 'بنطلون دورية أمنية تكتيكي عالي الأداء مصمم للوحدات الأمنية المتخصصة والدوريات التكتيكية',
  image: [
    'https://uneom.com/images/products/security/tactical-patrol-pants-main.jpg',
    'https://uneom.com/images/products/security/tactical-patrol-pants-details.jpg',
    'https://uneom.com/images/products/security/tactical-patrol-pants-action.jpg'
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
  category: 'ملابس أمنية تكتيكية',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/tactical/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '89',
    bestRating: '5',
    worstRating: '1'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'المادة',
      value: 'قماش تكتيكي مقاوم للتمزق'
    },
    {
      '@type': 'PropertyValue',
      name: 'المقاومة',
      value: 'مقاوم للماء والبقع'
    },
    {
      '@type': 'PropertyValue',
      name: 'الجيوب',
      value: '8 جيوب تكتيكية متعددة الأغراض'
    }
  ]
}

export default function TacticalPatrolPantsAr() {
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
              <span className="text-gray-900">بنطلون دورية تكتيكي</span>
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
                    src="/images/products/security/tactical-patrol-pants-main.jpg"
                    alt="بنطلون دورية أمنية تكتيكي - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-patrol-pants-details.jpg"
                      alt="تفاصيل البنطلون التكتيكي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-patrol-pants-action.jpg"
                      alt="البنطلون أثناء العمل"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-patrol-pants-features.jpg"
                      alt="مميزات البنطلون التكتيكي"
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
                    <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      تكتيكي متخصص
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    بنطلون دورية أمنية تكتيكي
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    بنطلون دورية أمنية تكتيكي عالي الأداء مصمم خصيصاً للوحدات الأمنية المتخصصة والدوريات التكتيكية، يوفر المتانة والمرونة والوظائف المتقدمة
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
                    <span className="text-sm text-gray-600">(89 تقييم)</span>
                  </div>
                </div>

                {/* Tactical Features */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">المميزات التكتيكية</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-red-600" />
                      <span className="text-red-800">مقاوم للتمزق</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-orange-600" />
                      <span className="text-red-800">8 جيوب تكتيكية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FireIcon className="w-6 h-6 text-red-500" />
                      <span className="text-red-800">مقاوم للحريق</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <AdjustmentsHorizontalIcon className="w-6 h-6 text-orange-500" />
                      <span className="text-red-800">قابل للتعديل</span>
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
                        className="border-2 border-gray-300 rounded-lg py-3 text-center font-semibold hover:border-red-500 hover:bg-red-50 transition-colors"
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
                    <button className="w-12 h-12 bg-black rounded-full border-4 border-gray-300"></button>
                    <button className="w-12 h-12 bg-gray-800 rounded-full border-4 border-transparent hover:border-gray-300"></button>
                    <button className="w-12 h-12 bg-green-800 rounded-full border-4 border-transparent hover:border-green-300"></button>
                    <button className="w-12 h-12 bg-blue-900 rounded-full border-4 border-transparent hover:border-blue-300"></button>
                  </div>
                </div>

                {/* Tactical Options */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">الخيارات التكتيكية</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-800">حماية الركبة المدمجة</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-800">جيوب إضافية للمعدات</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-800">شرائط عاكسة للرؤية الليلية</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-800">حزام تكتيكي مدمج</span>
                    </label>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر للوحدات الأمنية
                  </button>
                  <button className="w-full border-2 border-red-600 text-red-600 py-4 rounded-xl font-semibold text-lg hover:bg-red-50 transition-colors">
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
                      <p className="font-semibold text-blue-800">دعم 24/7</p>
                      <p className="text-sm text-blue-600">للوحدات الأمنية</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التكتيكية</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المادة</span>
                    <span className="text-gray-600">قماش تكتيكي مقاوم</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الوزن</span>
                    <span className="text-gray-600">320 جرام/متر مربع</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المقاومة</span>
                    <span className="text-gray-600">مقاوم للماء والتمزق</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الجيوب</span>
                    <span className="text-gray-600">8 جيوب تكتيكية</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الحماية</span>
                    <span className="text-gray-600">حماية الركبة المدمجة</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المعايير</span>
                    <span className="text-gray-600">ISO 11612, EN 343</span>
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
                      <h4 className="font-semibold text-gray-900">مقاومة فائقة</h4>
                      <p className="text-gray-600">مقاوم للتمزق والثقب والاحتكاك الشديد</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">جيوب متعددة الوظائف</h4>
                      <p className="text-gray-600">8 جيوب مصممة لحمل المعدات التكتيكية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">حماية الركبة</h4>
                      <p className="text-gray-600">حماية مدمجة للركبة أثناء العمليات</p>
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
                      <h4 className="font-semibold text-gray-900">مقاوم للحريق</h4>
                      <p className="text-gray-600">مادة مقاومة للحريق للحماية الإضافية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">الوحدات التكتيكية</h4>
                    <p className="text-red-800 text-sm">للعمليات الخاصة والمهام التكتيكية</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">دوريات الأمن</h4>
                    <p className="text-orange-800 text-sm">للدوريات الأمنية والمراقبة</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">أمن المنشآت</h4>
                    <p className="text-blue-800 text-sm">لحماية المنشآت الحيوية والحساسة</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">الحراسة الشخصية</h4>
                    <p className="text-green-800 text-sm">للحماية الشخصية والمرافقة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء رجال الأمن</h2>
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
                  "بنطلون ممتاز للعمليات التكتيكية، مقاوم جداً ومريح أثناء الحركة. الجيوب عملية جداً لحمل المعدات."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">أحمد الشهري</p>
                  <p>ضابط أمن - الوحدة التكتيكية</p>
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
                  "جودة عالية ومتانة استثنائية، يتحمل الاستخدام الشاق والظروف الصعبة. أنصح به بشدة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">خالد المطيري</p>
                  <p>رئيس دورية أمنية</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
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
                  "بنطلون احترافي بمواصفات عالية، مناسب للعمل الميداني والعمليات الطويلة. راحة ممتازة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">محمد العنزي</p>
                  <p>مشرف أمن - منشأة حكومية</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-orange-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جهز وحدتك الأمنية بأفضل المعدات
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على بنطلون دورية تكتيكي عالي الأداء لضمان الحماية والكفاءة القصوى
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <PhoneIcon className="w-6 h-6" />
                طلب عرض سعر فوري
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-900 transition-colors">
                تحدث مع خبير الأمن
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}