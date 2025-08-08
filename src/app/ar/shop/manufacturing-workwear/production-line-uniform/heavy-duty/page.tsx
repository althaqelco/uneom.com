import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon, 
  FireIcon,
  BoltIcon,
  UserGroupIcon,
  CubeTransparentIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid' // For filled star

export const metadata: Metadata = {
  title: 'زي خطوط الإنتاج شديد التحمل | ملابس عمل متينة للمصانع | UNEOM',
  description: 'جهز قواك العاملة بزي خطوط الإنتاج شديد التحمل من UNEOM. مصمم للمتانة والسلامة والراحة في بيئات المصانع السعودية الصعبة. خيارات تخصيص متاحة.',
  keywords: 'زي شديد التحمل, ملابس عمل خطوط الإنتاج, زي المصانع, ملابس صناعية, ملابس عمل متينة, التصنيع السعودي, ملابس السلامة, UNEOM الصناعية',
  openGraph: {
    title: 'زي خطوط الإنتاج شديد التحمل | UNEOM',
    description: 'زي قوي وموثوق لمهام خطوط الإنتاج الصعبة في المصانع السعودية.',
    images: ['/images/products/industrial/heavy-duty-production-line-uniform-main.jpg']}}

// Placeholder for CogIcon and BuildingOffice2Icon if not directly available
const CogIcon = WrenchScrewdriverIcon; 
const BuildingOffice2Icon = CubeTransparentIcon;

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'متانة فائقة',
    description: 'مصنوع من أقمشة معززة لتحمل الاستخدام اليومي الشاق في البيئات الصناعية.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'تعزيز سلامة العامل',
    description: 'يتضمن ميزات مثل الدرزات المقواة، خيارات عالية الوضوح، وحماية ضد مخاطر العمل البسيطة.'
  },
  {
    icon: FireIcon, // مثال، يمكن أن يكون أكثر تحديدًا
    title: 'مقاومة للعناصر الصناعية',
    description: 'معالج لمقاومة المواد الصناعية الشائعة مثل الزيوت والشحوم وبعض المواد الكيميائية (يُحدد بناءً على المنتج الفعلي).'
  },
  {
    icon: UserGroupIcon,
    title: 'راحة للنوبات الطويلة',
    description: 'مصمم هندسيًا لسهولة الحركة والتهوية، مما يضمن الراحة طوال أيام العمل الشاقة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'مزيج بولي قطن شديد التحمل (مثال: 65% بوليستر، 35% قطن، 245-280 جم/م²)' },
  { label: 'التعزيزات', value: 'درزات ثلاثية، نقاط ضغط معززة، رقع ركبة/كوع مقواة (اختياري)' },
  { label: 'الألوان المتاحة', value: 'أزرق داكن، رمادي فحمي، كاكي، برتقالي (عالي الوضوح)، أزرق ملكي' },
  { label: 'المقاسات', value: 'S - 5XL، مع خيارات للمقاسات المخصصة' },
  { label: 'الميزات الرئيسية', value: 'جيوب متعددة الاستخدامات، واجهة أمامية بسحاب/كباسين مخفية، ظهر عملي للمرونة' },
  { label: 'معايير السلامة المحققة', value: 'تحديد معايير EN/ISO ذات الصلة إن وجدت (مثال: EN ISO 13688)' },
  { label: 'التخصيص', value: 'تطريز/طباعة الشعار، إضافة شريط عاكس، تكوينات جيوب محددة' }
]

const includedItems = [
  'زي خط إنتاج شديد التحمل (أفرول/طقم من قطعتين)',
  'وسادات ركبة قابلة للفصل/مدمجة (إن وجدت)',
  'بطاقة ضمان جودة UNEOM',
  'تعليمات عناية مفصلة'
]

const idealForIndustries = [
  { name: 'الصناعات الثقيلة', icon: CogIcon },
  { name: 'تجميع السيارات', icon: WrenchScrewdriverIcon },
  { name: 'إنتاج مواد البناء', icon: BuildingOffice2Icon },
  { name: 'تصنيع المعادن', icon: FireIcon },
  { name: 'الخدمات اللوجستية والمستودعات (بضائع ثقيلة)', icon: CubeTransparentIcon }
]

const relatedProducts = [
  {
    name: 'زي خطوط الإنتاج القياسي',
    image: '/images/products/industrial/standard-production-line-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/standard/',
    price: 'ابتداءً من 180 ر.س'
  },
  {
    name: 'زي إنتاج غرف الأبحاث النظيفة',
    image: '/images/products/industrial/clean-room-production-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/clean-room/',
    price: 'ابتداءً من 250 ر.س'
  },
  {
    name: 'سترة سلامة صناعية',
    image: '/images/products/industrial/industrial-safety-vest.jpg',
    href: '/ar/shop/high-visibility-clothing/industrial-safety-vest/',
    price: 'ابتداءً من 75 ر.س'
  }
]

export default function HeavyDutyProductionUniformPageAR() {
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
            <Link href="/ar/shop/manufacturing-workwear/" className="hover:text-blue-600">ملابس عمل التصنيع</Link>
            <span>/</span>
            <Link href="/ar/shop/manufacturing-workwear/production-line-uniform/" className="hover:text-blue-600">زي خطوط الإنتاج</Link>
            <span>/</span>
            <span className="text-gray-900">شديد التحمل</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/industrial/heavy-duty-production-line-uniform-main.jpg"
                  alt="زي خط إنتاج شديد التحمل"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/heavy-duty-uniform-detail-${i}.jpg`}
                      alt={`تفاصيل زي شديد التحمل ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                  <StarIcon className="h-5 w-5 text-yellow-400" /> {/* Example for 4.x stars */}
                </div>
                <span className="mr-2 text-sm text-gray-600">(بناءً على 78 اختبار متانة)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي خط إنتاج شديد التحمل
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                مصمم لأصعب البيئات الصناعية، يوفر زي خطوط الإنتاج شديد التحمل لدينا متانة وأمان وراحة لا مثيل لها. صُنع ليدوم ويحمي قواك العاملة في ظروف المصانع السعودية الصعبة.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 220 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم (جاكيت وبنطلون / أفرول)</span>
              </div>
              
              {/* Customization Note */}
              <div className="p-4 bg-blue-50 border-r-4 border-blue-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <TagIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-blue-700">
                      <strong>قابل للتخصيص بالكامل:</strong> صمم هذا الزي وفقًا لمواصفاتك الدقيقة بما في ذلك اللون، موضع الشعار، تصميم الجيب، وميزات الحماية المتخصصة. <Link href="/ar/services/custom-design" className="font-medium underline hover:text-blue-800">اعرف المزيد</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=heavy-duty-production-uniform"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  اطلب عرض سعر للكميات
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى قائمة الرغبات
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">أبرز الميزات:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>معزز لمتانة قصوى</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية معززة للعامل</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة للارتداء المطول</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>قابل للتخصيص حسب احتياجات العلامة التجارية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            صُمم لأصعب المهام
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي للصناعات السعودية الصعبة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForIndustries.map((industry, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <industry.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Tabs (Simplified for now) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            المواصفات الفنية ومحتويات الطلب
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">المواصفات</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-left">{spec.value}</span> {/* Changed text-right to text-left for RTL */}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">محتويات طلبك</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">ضمان جودة UNEOM</h4>
                <p className="text-sm text-green-600">
                  تخضع جميع ملابس العمل شديدة التحمل لدينا لفحوصات جودة صارمة لضمان تلبيتها لأعلى معايير المتانة والسلامة للبيئات الصناعية السعودية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ملابس عمل صناعية مكملة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
                  >
                    عرض المنتج
                    <ArrowLeftIcon className="mr-2 h-4 w-4" /> {/* Changed ml to mr and ArrowRight to ArrowLeft for RTL */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            طور إلى زي UNEOM شديد التحمل اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            احمِ قواك العاملة وعزز الإنتاجية بزي مصمم لتحمل قسوة الصناعة السعودية. اتصل بنا للحصول على استشارة شخصية وأسعار للطلبات الكبيرة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Heavy-Duty+Uniform+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              اتصل بفريقنا الصناعي
            </Link>
            <Link
              href="/ar/services/uniform-program-management"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              تعرف على برامج الزي الموحد
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}