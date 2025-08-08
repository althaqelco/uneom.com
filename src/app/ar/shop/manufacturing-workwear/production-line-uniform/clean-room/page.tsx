import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  CubeTransparentIcon,
  BeakerIcon, 
  UserGroupIcon,
  CpuChipIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي إنتاج غرف الأبحاث النظيفة | ملابس التحكم في التلوث | UNEOM',
  description: 'زي غرف الأبحاث النظيفة المتخصص من UNEOM لخطوط الإنتاج الحساسة للتلوث في المملكة العربية السعودية. مضاد للكهرباء الساكنة، قليل الوبر، ومصمم للصناعات الدوائية والإلكترونيات والتكنولوجيا الحيوية.',
  keywords: 'زي غرف الأبحاث النظيفة, التحكم في التلوث, ملابس مضادة للكهرباء الساكنة, ملابس قليلة الوبر, زي صناعات دوائية, ملابس عمل تصنيع الإلكترونيات, ملابس تكنولوجيا حيوية, غرف الأبحاث النظيفة السعودية',
  openGraph: {
    title: 'زي إنتاج غرف الأبحاث النظيفة | UNEOM',
    description: 'زي عالي الأداء للحفاظ على بيئات إنتاج معقمة ومتحكم بها.',
    images: ['/images/products/industrial/clean-room-production-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'مواد قليلة الوبر',
    description: 'مصنوعة من أقمشة متخصصة غير متناثرة لتقليل توليد الجسيمات والتلوث.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'خصائص مضادة للكهرباء الساكنة',
    description: 'مواد آمنة من التفريغ الكهروستاتيكي (ESD) لحماية المكونات الإلكترونية الحساسة ومنع تراكم الكهرباء الساكنة.'
  },
  {
    icon: CubeTransparentIcon, // يمثل بيئة محكومة
    title: 'تصميم للتحكم في التلوث',
    description: 'ميزات مثل السحابات المغطاة، الأصفاد والكاحل المرنة، والحد الأدنى من الجيوب لمنع احتجاز الجسيمات.'
  },
  {
    icon: UserGroupIcon,
    title: 'الراحة والتهوية',
    description: 'مصممة للارتداء المطول في البيئات الخاضعة للرقابة، مما يوفر الراحة دون المساس بالتعقيم.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'بوليستر متخصص مع شبكة ألياف كربونية (مثال: 98% بوليستر، 2% ألياف كربونية)' },
  { label: 'توافق فئة غرف الأبحاث النظيفة', value: 'مناسب لفئة ISO 5-8 (يُحدد بناءً على متغيرات المنتج)' },
  { label: 'توافق التعقيم', value: 'خيارات قابلة للتعقيم بالبخار المضغوط (الأوتوكلاف) أو التشعيع بأشعة جاما متاحة' },
  { label: 'الأنماط المتاحة', value: 'أفرولات (مع أو بدون غطاء رأس/حذاء)، أرواب، أغطية رأس، أغطية أحذية' },
  { label: 'الألوان', value: 'عادةً أبيض، أزرق فاتح، رمادي فاتح (لرؤية الجسيمات)' },
  { label: 'المقاسات', value: 'S - 3XL، مع خيارات للمقاسات المخصصة' },
  { label: 'الشهادات', value: 'تحديد معايير IEST، ISO، أو ASTM ذات الصلة المحققة' }
]

const includedItems = [
  'زي غرفة أبحاث نظيفة (أفرول/روب)',
  'غطاء رأس مدمج أو منفصل (حسب النمط)',
  'أغطية أحذية مدمجة/منفصلة اختيارية',
  'تغليف مناسب لبروتوكولات دخول غرف الأبحاث النظيفة'
]

const idealForIndustries = [
  { name: 'الصناعات الدوائية', icon: BeakerIcon },
  { name: 'تجميع الإلكترونيات وأشباه الموصلات', icon: CpuChipIcon },
  { name: 'التكنولوجيا الحيوية وعلوم الحياة', icon: SparklesIcon },
  { name: 'هندسة الطيران والفضاء والصناعات الدقيقة', icon: CubeTransparentIcon },
  { name: 'تصنيع الأغذية (المناطق المعقمة)', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'زي خطوط الإنتاج القياسي',
    image: '/images/products/industrial/standard-production-line-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/standard/',
    price: 'ابتداءً من 180 ر.س'
  },
  {
    name: 'زي خطوط الإنتاج شديد التحمل',
    image: '/images/products/industrial/heavy-duty-production-line-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    price: 'ابتداءً من 220 ر.س'
  },
  {
    name: 'أرواب غرف أبحاث نظيفة للاستخدام مرة واحدة',
    image: '/images/products/industrial/disposable-clean-room-gowns.jpg', // صورة مؤقتة
    href: '/ar/shop/disposable-workwear/clean-room-gowns/', // رابط مؤقت
    price: 'اتصل للاستعلام عن السعر'
  }
]

export default function CleanRoomProductionUniformPageAR() {
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
            <span className="text-gray-900">غرف الأبحاث النظيفة</span>
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
                  src="/images/products/industrial/clean-room-production-uniform-main.jpg"
                  alt="زي إنتاج غرف الأبحاث النظيفة"
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
                      src={`/images/products/industrial/clean-room-uniform-detail-${i}.jpg`}
                      alt={`تفاصيل زي غرفة أبحاث نظيفة ${i}`}
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
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="mr-2 text-sm text-gray-600">(معتمد لفئة ISO 5)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي إنتاج غرف الأبحاث النظيفة
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                حافظ على أعلى معايير النظافة والتحكم في التلوث مع زي غرف الأبحاث النظيفة المتخصص من UNEOM. مصمم للبيئات الحرجة في قطاعات التصنيع المتقدمة في المملكة العربية السعودية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 250 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم (أفرول مع غطاء رأس وحذاء)</span>
              </div>
              
              <div className="p-4 bg-indigo-50 border-r-4 border-indigo-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BeakerIcon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-indigo-700">
                      <strong>تصميم متخصص:</strong> تلبي ملابس غرف الأبحاث النظيفة لدينا معايير الصناعة الصارمة للتحكم في الجسيمات، الحماية من التفريغ الكهروستاتيكي، والتعقيم. <Link href="/ar/contact?subject=Clean+Room+Uniform+Technical+Specs" className="font-medium underline hover:text-indigo-800">اطلب ورقة البيانات الفنية</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=clean-room-production-uniform"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر متخصص
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  حفظ المواصفات
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">السمات الرئيسية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>قليل تناثر الجسيمات</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>خيارات آمنة من التفريغ الكهروستاتيكي</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>متوافق مع التعقيم</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مصمم للبيئات الحرجة</span>
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
            مصمم هندسيًا للتحكم في التلوث
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
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
            أساسي للصناعات عالية التقنية في المملكة العربية السعودية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForIndustries.map((industry, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <industry.icon className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات زي غرف الأبحاث النظيفة
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">التفاصيل الفنية</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">محتويات الحزمة</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">بروتوكول UNEOM لغرف الأبحاث النظيفة</h4>
                <p className="text-sm text-teal-600">
                  يتم تصنيع وتعبئة زي غرف الأبحاث النظيفة لدينا وفقًا لبروتوكولات صارمة لضمان وصولها جاهزة لبيئتك الخاضعة للرقابة.
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
            أنواع أخرى من زي خطوط الإنتاج
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">{product.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
                  >
                    عرض التفاصيل
                    <ArrowLeftIcon className="mr-2 h-4 w-4" /> {/* Changed ml to mr and ArrowRight to ArrowLeft for RTL */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            اضمن التحكم في التلوث مع ملابس غرف الأبحاث النظيفة من UNEOM
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            اتصل بمتخصصينا لمناقشة متطلبات غرف الأبحاث النظيفة الخاصة بك وكيف يمكن لزينا أن يساعدك في الحفاظ على أعلى معايير التعقيم والسلامة في منشأتك السعودية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Clean+Room+Uniform+Inquiry"
              className="bg-white text-indigo-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص غرف الأبحاث النظيفة
            </Link>
            <Link
              href="/ar/resources/cleanroom-best-practices" // رابط مؤقت
              className="border-2 border-indigo-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:border-white transition-colors text-lg"
            >
              موارد غرف الأبحاث النظيفة
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}