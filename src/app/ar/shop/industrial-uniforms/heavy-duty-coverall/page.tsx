import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  FireIcon, 
  BeakerIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'كفرول صناعي ثقيل - ملابس حماية متطورة | يونيوم',
  description: 'كفرول صناعي ثقيل عالي الجودة مقاوم للحرارة والمواد الكيميائية، مصمم خصيصاً للبيئات الصناعية القاسية في المملكة العربية السعودية',
  keywords: 'كفرول صناعي، ملابس حماية، كفرول ثقيل، ملابس عمل، حماية صناعية، معدات السلامة، المملكة العربية السعودية',
  openGraph: {
    title: 'كفرول صناعي ثقيل - ملابس حماية متطورة | يونيوم',
    description: 'كفرول صناعي ثقيل عالي الجودة مقاوم للحرارة والمواد الكيميائية',
    images: ['/images/products/industrial/heavy-duty-coverall-ar.jpg'],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/heavy-duty-coverall/',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/heavy-duty-coverall/',
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/heavy-duty-coverall/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'كفرول صناعي ثقيل',
  description: 'كفرول صناعي ثقيل عالي الجودة مقاوم للحرارة والمواد الكيميائية، مصمم خصيصاً للبيئات الصناعية القاسية',
  image: [
    'https://uneom.com/images/products/industrial/heavy-duty-coverall-main.jpg',
    'https://uneom.com/images/products/industrial/heavy-duty-coverall-details.jpg',
    'https://uneom.com/images/products/industrial/heavy-duty-coverall-features.jpg'
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
  category: 'ملابس الحماية الصناعية',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/industrial-uniforms/heavy-duty-coverall/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
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
        name: 'أحمد المطيري'
      },
      reviewBody: 'كفرول ممتاز وعملي جداً، جودة عالية ومقاوم للظروف القاسية'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'مقاومة الحرارة',
      value: 'حتى 300 درجة مئوية'
    },
    {
      '@type': 'PropertyValue',
      name: 'مقاومة كيميائية',
      value: 'مقاوم للأحماض والقلويات'
    },
    {
      '@type': 'PropertyValue',
      name: 'المادة',
      value: 'قطن مخلوط بالبوليستر'
    }
  ]
}

export default function HeavyDutyCoverallAr() {
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
              <Link href="/ar/shop/industrial-uniforms/" className="hover:text-blue-600">الملابس الصناعية</Link>
              <span>/</span>
              <span className="text-gray-900">كفرول صناعي ثقيل</span>
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
                    src="/images/products/industrial/heavy-duty-coverall-main.jpg"
                    alt="كفرول صناعي ثقيل - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/industrial/heavy-duty-coverall-details.jpg"
                      alt="تفاصيل الكفرول الصناعي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/industrial/heavy-duty-coverall-features.jpg"
                      alt="مميزات الكفرول الصناعي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/industrial/heavy-duty-coverall-colors.jpg"
                      alt="ألوان الكفرول المتاحة"
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
                    كفرول صناعي ثقيل
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    كفرول عالي الجودة مصمم خصيصاً للبيئات الصناعية القاسية مع حماية فائقة من الحرارة والمواد الكيميائية
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
                    <span className="text-sm text-gray-600">(127 تقييم)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">المميزات الرئيسية</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <FireIcon className="w-6 h-6 text-red-500" />
                      <span className="text-blue-800">مقاوم للحرارة حتى 300°م</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-green-500" />
                      <span className="text-blue-800">مقاوم للمواد الكيميائية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">حماية شاملة للجسم</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CogIcon className="w-6 h-6 text-purple-500" />
                      <span className="text-blue-800">تصميم عملي ومريح</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
                    <button className="w-12 h-12 bg-blue-600 rounded-full border-4 border-blue-200"></button>
                    <button className="w-12 h-12 bg-gray-600 rounded-full border-4 border-transparent hover:border-gray-300"></button>
                    <button className="w-12 h-12 bg-orange-500 rounded-full border-4 border-transparent hover:border-orange-300"></button>
                    <button className="w-12 h-12 bg-green-600 rounded-full border-4 border-transparent hover:border-green-300"></button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر مخصص
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    إضافة إلى قائمة الطلبات
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">شحن مجاني</p>
                    <p className="text-sm text-green-600">للطلبات أكثر من 500 ريال</p>
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
                    <span className="text-gray-600">قطن 65% + بوليستر 35%</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الوزن</span>
                    <span className="text-gray-600">320 جرام/متر مربع</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مقاومة الحرارة</span>
                    <span className="text-gray-600">حتى 300 درجة مئوية</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المقاومة الكيميائية</span>
                    <span className="text-gray-600">أحماض وقلويات خفيفة</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المعايير</span>
                    <span className="text-gray-600">ISO 11612, EN 13034</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الألوان المتاحة</span>
                    <span className="text-gray-600">أزرق، رمادي، برتقالي، أخضر</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المميزات والفوائد</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">حماية شاملة</h4>
                      <p className="text-gray-600">يغطي الجسم بالكامل مع حماية من الرأس إلى القدمين</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">راحة في الحركة</h4>
                      <p className="text-gray-600">تصميم مرن يسمح بحرية الحركة أثناء العمل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">جيوب متعددة</h4>
                      <p className="text-gray-600">جيوب عملية لحمل الأدوات والمعدات الضرورية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">سهولة الصيانة</h4>
                      <p className="text-gray-600">قابل للغسيل والتنظيف بسهولة مع الحفاظ على الخصائص</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">متانة عالية</h4>
                      <p className="text-gray-600">مقاوم للتمزق والتآكل في البيئات القاسية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">الصناعات البتروكيماوية</h4>
                    <p className="text-blue-800 text-sm">مثالي للعمل في المصافي ومصانع البتروكيماويات</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">صناعة المعادن</h4>
                    <p className="text-green-800 text-sm">حماية فعالة في مصانع الحديد والصلب</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">الصناعات الكيميائية</h4>
                    <p className="text-purple-800 text-sm">مقاومة للمواد الكيميائية الخفيفة والمتوسطة</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">أعمال اللحام</h4>
                    <p className="text-orange-800 text-sm">حماية من الشرر والحرارة العالية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء العملاء</h2>
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
                  "كفرول ممتاز وعملي جداً، جودة عالية ومقاوم للظروف القاسية في المصنع. أنصح به بشدة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">أحمد المطيري</p>
                  <p>مهندس صناعي - أرامكو</p>
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
                  "راحة في الحركة ومقاومة ممتازة للحرارة. استخدمته في أعمال اللحام وكان أداؤه رائع."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">محمد العتيبي</p>
                  <p>فني لحام - سابك</p>
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
                  "منتج جيد جداً وسعر مناسب. الجودة عالية والخامة ممتازة. سأطلب المزيد للفريق."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">خالد الشهري</p>
                  <p>مشرف سلامة - معادن</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">منتجات ذات صلة</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Link href="/ar/shop/industrial-uniforms/flame-resistant-coverall/" className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/products/industrial/flame-resistant-coverall.jpg"
                    alt="كفرول مقاوم للحريق"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">كفرول مقاوم للحريق</h3>
                    <p className="text-sm text-gray-600">حماية فائقة من الحرائق</p>
                  </div>
                </div>
              </Link>

              <Link href="/ar/shop/industrial-uniforms/chemical-resistant-suit/" className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/products/industrial/chemical-resistant-suit.jpg"
                    alt="بدلة مقاومة للكيماويات"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">بدلة مقاومة للكيماويات</h3>
                    <p className="text-sm text-gray-600">حماية من المواد الكيميائية</p>
                  </div>
                </div>
              </Link>

              <Link href="/ar/shop/industrial-uniforms/high-visibility-coverall/" className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/products/industrial/high-visibility-coverall.jpg"
                    alt="كفرول عالي الوضوح"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">كفرول عالي الوضوح</h3>
                    <p className="text-sm text-gray-600">رؤية محسّنة للسلامة</p>
                  </div>
                </div>
              </Link>

              <Link href="/ar/shop/industrial-uniforms/welding-coverall/" className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/products/industrial/welding-coverall.jpg"
                    alt="كفرول لحام متخصص"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">كفرول لحام متخصص</h3>
                    <p className="text-sm text-gray-600">مصمم خصيصاً للحام</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل تحتاج إلى استشارة متخصصة؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              تواصل مع خبرائنا للحصول على أفضل حلول الحماية الصناعية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/contact/"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                تواصل معنا
              </Link>
              <Link
                href="/ar/quote/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}