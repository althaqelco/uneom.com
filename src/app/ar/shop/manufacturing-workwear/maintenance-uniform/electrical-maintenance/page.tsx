import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  FireIcon, 
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  LightBulbIcon,
  UserIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي صيانة كهربائية | حماية من القوس الكهربائي والصدمات | UNEOM',
  description: 'يوفر زي الصيانة الكهربائية من UNEOM حماية حاسمة ضد القوس الكهربائي والصدمات الكهربائية. مصمم للسلامة والامتثال في القطاعات الصناعية والمرافق السعودية.',
  keywords: 'زي صيانة كهربائية, ملابس القوس الكهربائي, ملابس عمل حماية من الصدمات, زي مقاوم للهب, ملابس سلامة كهربائية, كهربائيين سعوديين, متوافق NFPA 70E, سلامة UNEOM',
  openGraph: {
    title: 'زي صيانة كهربائية مع حماية من القوس الكهربائي | UNEOM',
    description: 'زي واقٍ متخصص للكهربائيين وموظفي الصيانة العاملين مع معدات الجهد العالي في المملكة العربية السعودية.',
    images: ['/images/products/industrial/electrical-maintenance-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'حماية مقدرة من القوس الكهربائي',
    description: 'مصنوع من مواد مقدرة لمستويات ATPV (قيمة الأداء الحراري للقوس) محددة للحماية من مخاطر القوس الكهربائي.'
  },
  {
    icon: FireIcon,
    title: 'مقاوم للهب (FR)',
    description: 'أقمشة مقاومة للهب بطبيعتها أو معالجة لمقاومة اللهب لا تشتعل أو تذوب أو تقطر عند التعرض للهب أو الحرارة العالية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'تقليل مخاطر الصدمة الكهربائية',
    description: 'مصمم لتقليل التوصيل، مع إغلاقات غير معدنية وأنظمة طبقات مناسبة.'
  },
  {
    icon: UserIcon,
    title: 'راحة وحرية حركة للكهربائيين',
    description: 'تصميم مريح يسمح بالمهارة ونطاق الحركة المطلوب للأعمال الكهربائية المعقدة.'
  }
]

const specifications = [
  { label: 'خيارات القماش', value: 'مزيج مقاوم للهب بطبيعته (مثال: Nomex®, Kermel®, Protera®)، مزيج قطن/نايلون معالج لمقاومة اللهب' },
  { label: 'تقدير القوس (ATPV)', value: 'متوفر بتقديرات مختلفة (مثال: 8 cal/cm²، 12 cal/cm²، 25 cal/cm²، 40 cal/cm² وأعلى)' },
  { label: 'معايير الامتثال', value: 'NFPA 70E، ASTM F1506، EN ISO 11612، IEC 61482-2' },
  { label: 'الأنماط المتاحة', value: 'أفرولات، قمصان وبناطيل، جواكيت، أغطية رأس، أقنعة وجه، معاطف تبديل' },
  { label: 'الألوان', value: 'عادةً كحلي، كاكي، رمادي، برتقالي (خيارات عالية الوضوح مقاومة للهب متاحة)' },
  { label: 'المقاسات', value: 'S - 5XL، مع جداول مقاسات محددة للملابس المقاومة للهب' },
  { label: 'ميزات السلامة الرئيسية', value: 'سحابات/أزرار غير معدنية، خيط مقاوم للهب، نقاط ضغط معززة، تحسينات الرؤية' }
]

const includedItems = [
  'قطعة ملابس صيانة كهربائية مقاومة للهب (قميص/بنطلون/أفرول)',
  'معلومات مفصلة عن السلامة والامتثال',
  'تعليمات العناية بالأقمشة المقاومة للهب',
  'دليل ملابس السلامة الكهربائية من UNEOM'
]

const idealForApplications = [
  { name: 'صيانة المحطات الفرعية', icon: BoltIcon },
  { name: 'إصلاح كهربائي صناعي', icon: CogIcon },
  { name: 'أعمال خطوط المرافق (الجهد المنخفض/المتوسط)', icon: UserIcon },
  { name: 'بناء وتشغيل اللوحات', icon: ShieldCheckIcon },
  { name: 'الاستجابة الكهربائية للطوارئ', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'أفرول صيانة شديد التحمل (غير مقاوم للهب)',
    image: '/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg',
    href: '/ar/shop/manufacturing-workwear/maintenance-uniform/heavy-duty-coverall/',
    price: 'ابتداءً من 290 ر.س'
  },
  {
    name: 'طقم زي صيانة ميكانيكية',
    image: '/images/products/industrial/mechanical-maintenance-set.jpg',
    href: '/ar/shop/manufacturing-workwear/maintenance-uniform/mechanical-set/',
    price: 'ابتداءً من 250 ر.س'
  },
  {
    name: 'قفازات سلامة كهربائية معزولة',
    image: '/images/products/ppe/electrical-safety-gloves.jpg', // صورة مؤقتة
    href: '/ar/shop/ppe/electrical-gloves/', // رابط مؤقت
    price: 'اتصل للاستعلام عن السعر'
  }
]

export default function ElectricalMaintenanceUniformPageAR() {
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
            <Link href="/ar/shop/manufacturing-workwear/maintenance-uniform/" className="hover:text-blue-600">زي الصيانة</Link>
            <span>/</span>
            <span className="text-gray-900">صيانة كهربائية</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/industrial/electrical-maintenance-uniform-main.jpg"
                  alt="زي صيانة كهربائية مع حماية من القوس الكهربائي"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-yellow-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/electrical-uniform-detail-${i}.jpg`}
                      alt={`تفاصيل زي الصيانة الكهربائية ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(خيارات متوافقة مع NFPA 70E)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي صيانة كهربائية
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                احمِ الكهربائيين وموظفي الصيانة لديك بزي الصيانة الكهربائية المتخصص من UNEOM. مصمم للحماية من القوس الكهربائي والصدمات الكهربائية، مما يضمن السلامة والامتثال في البيئات الكهربائية عالية الخطورة في المملكة العربية السعودية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-yellow-600">ابتداءً من 280 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">لطقم مقاوم للهب</span>
              </div>
              
              <div className="p-4 bg-yellow-50 border-r-4 border-yellow-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BoltIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-yellow-700">
                      <strong>حماية حاسمة:</strong> ملابس السلامة الكهربائية لدينا مصممة لتلبية المعايير الدولية الصارمة. <Link href="/ar/resources/electrical-safety-ppe-guide" className="font-medium underline hover:text-yellow-800">تعرف على فئات معدات الوقاية الشخصية الكهربائية</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=electrical-maintenance-uniform"
                  className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex-1 text-center"
                >
                  اطلب عرض سعر لزي السلامة
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى خطة معدات الوقاية الكهربائية
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">خصائص السلامة الأساسية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مواد مقدرة للقوس الكهربائي</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مقاوم للهب (FR)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>يقلل مخاطر الصدمة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>خيارات متوافقة مع NFPA 70E</span>
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
            حماية لا تهاون فيها للمتخصصين الكهربائيين
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Applications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            حاسم لتطبيقات الجهد العالي في المملكة العربية السعودية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForApplications.map((app, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <app.icon className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{app.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات زي الصيانة الكهربائية
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">المواد الواقية والامتثال</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل مجموعة السلامة الكهربائية لديك</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">معيار السلامة الكهربائية من UNEOM</h4>
                <p className="text-sm text-blue-600">
                  جميع زي السلامة الكهربائية لدينا مختبرة ومعتمدة بدقة لتوفير حماية موثوقة ضد المخاطر الكهربائية المحددة.
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
            أكمل معدات الوقاية الشخصية الكهربائية لديك
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">{product.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            أعطِ الأولوية للسلامة الكهربائية مع زي UNEOM الواقي
          </h2>
          <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
            لا تتهاون في السلامة. جهز فرق الصيانة الكهربائية لديك بملابس واقية رائدة في الصناعة. اتصل بـ UNEOM للحصول على استشارة حول احتياجاتك المحددة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Electrical+Maintenance+Uniform+Inquiry"
              className="bg-white text-yellow-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر خبير السلامة الكهربائية
            </Link>
            <Link
              href="/ar/resources/nfpa70e-guide" // رابط مؤقت
              className="border-2 border-yellow-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 hover:border-white transition-colors text-lg"
            >
              دليل امتثال NFPA 70E
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}