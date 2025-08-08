import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldExclamationIcon, 
  EyeIcon, 
  ClipboardDocumentCheckIcon,
  MegaphoneIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي مشرفي السلامة | ملابس عمل واقية وعالية الوضوح | UNEOM',
  description: 'يضمن زي مشرفي السلامة من UNEOM الوضوح والحماية للمسؤولين عن السلامة في المصانع السعودية. متين ومتوافق مع المعايير ومصمم للسلطة.',
  keywords: 'زي مشرفي السلامة, ملابس عمل عالية الوضوح, ملابس واقية للمشرفين, ملابس سلامة المصانع, زي سلامة صناعي, سلامة التصنيع السعودي, خط UNEOM للسلامة',
  openGraph: {
    title: 'زي مشرفي السلامة للتصنيع | UNEOM',
    description: 'اضمن الوضوح والسلطة مع زي متخصص لمشرفي السلامة في البيئات الصناعية.',
    images: ['/images/products/industrial/safety-supervisor-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: EyeIcon,
    title: 'أقصى درجات الوضوح',
    description: 'ألوان زاهية ومتباينة وشريط عاكس عالي الجودة لسهولة التعرف في جميع ظروف المصنع.'
  },
  {
    icon: ShieldExclamationIcon,
    title: 'ميزات حماية معززة',
    description: 'أقمشة متينة مع خيارات لمقاومة اللهب، خصائص مضادة للكهرباء الساكنة، أو حماية من تناثر المواد الكيميائية حسب الحاجة.'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'عملي لمهام السلامة',
    description: 'مصمم بجيوب لمعدات السلامة، قوائم التحقق، وأجهزة الاتصال.'
  },
  {
    icon: MegaphoneIcon, 
    title: 'مظهر رسمي يوحي بالسلطة',
    description: 'تصميم احترافي يميز مسؤولي السلامة بوضوح ويعزز سلطتهم.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'بوليستر عالي الوضوح، مزيج موداكريليك (لمقاومة اللهب)، أو مزيج قطن/بولي معالج' },
  { label: 'معايير الوضوح', value: 'متوافق مع EN ISO 20471 (الفئة 2 أو 3)، خيارات ANSI/ISEA 107' },
  { label: 'المواد العاكسة', value: 'شريط عاكس عالي الجودة (مثال: 3M Scotchlite™)' },
  { label: 'الأنماط المتاحة', value: 'سترات، قمصان، جواكيت، بناطيل، أفرولات عالية الوضوح' },
  { label: 'الألوان', value: 'أصفر فلوري، برتقالي فلوري، مع لوحات متباينة باللون الكحلي/الأسود' },
  { label: 'المقاسات', value: 'S - 5XL، مصممة ليتم ارتداؤها فوق ملابس أخرى إذا لزم الأمر' },
  { label: 'ميزات إضافية', value: 'حلقات راديو، حوامل بطاقات هوية، نقاط ضغط معززة، لوحات شبكية للتهوية (اختياري)' }
]

const includedItems = [
  'قطعة ملابس عالية الوضوح لمشرف السلامة (سترة/قميص/جاكيت)',
  'بنطلون أو أفرول مطابق اختياري',
  'ورقة معلومات امتثال السلامة من UNEOM',
  'دليل العناية والصيانة لملابس عالية الوضوح'
]

const idealForResponsibilities = [
  { name: 'تطبيق بروتوكولات السلامة', icon: ShieldExclamationIcon },
  { name: 'إجراء عمليات تفتيش الموقع', icon: ClipboardDocumentCheckIcon },
  { name: 'تنسيق الاستجابة للطوارئ', icon: MegaphoneIcon },
  { name: 'التحقيق في الحوادث', icon: EyeIcon }, 
  { name: 'تدريبات وإيجازات السلامة', icon: UserGroupIcon }
]

const relatedProducts = [
  {
    name: 'زي المشرف التنفيذي',
    image: '/images/products/industrial/executive-supervisor-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/supervisor-uniform/executive/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'زي مشرفي أرضيات المصانع',
    image: '/images/products/industrial/floor-supervisor-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/supervisor-uniform/floor-supervisor/',
    price: 'ابتداءً من 190 ر.س'
  },
  {
    name: 'سترة سلامة صناعية (قياسية)',
    image: '/images/products/industrial/industrial-safety-vest.jpg',
    href: '/ar/shop/high-visibility-clothing/industrial-safety-vest/',
    price: 'ابتداءً من 75 ر.س'
  }
]

export default function SafetySupervisorUniformPageAR() {
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
            <Link href="/ar/shop/manufacturing-workwear/supervisor-uniform/" className="hover:text-blue-600">زي المشرفين</Link>
            <span>/</span>
            <span className="text-gray-900">مشرف السلامة</span>
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
                  src="/images/products/industrial/safety-supervisor-uniform-main.jpg"
                  alt="زي مشرف السلامة"
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
                      src={`/images/products/industrial/safety-supervisor-detail-${i}.jpg`}
                      alt={`تفاصيل زي مشرف السلامة ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(وضوح وحماية معتمدة)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي مشرف السلامة
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                مكّن مشرفي السلامة لديك بزي UNEOM المتخصص. مصمم لأقصى درجات الوضوح والحماية والسلطة، مما يضمن تميز قادة السلامة لديك وسلامتهم في البيئات الصناعية السعودية الصعبة.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-orange-600">ابتداءً من 210 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم (مثال: قميص وبنطلون عالي الوضوح)</span>
              </div>
              
              <div className="p-4 bg-yellow-50 border-r-4 border-yellow-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldExclamationIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-yellow-700">
                      <strong>تصميم يضع السلامة أولاً:</strong> متوافق مع معايير السلامة ذات الصلة، مما يوفر راحة البال وحماية معززة لموظفي السلامة الرئيسيين لديك. <Link href="/ar/resources/safety-standards-guide" className="font-medium underline hover:text-yellow-800">عرض معايير السلامة</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=safety-supervisor-uniform"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex-1 text-center"
                >
                  اطلب عرض سعر للسلامة
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى خطة السلامة
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">ميزات السلامة الحاسمة:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>امتثال لمعايير الوضوح العالي</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>خيارات مواد واقية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>عملي لواجبات السلامة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>إشارة واضحة للسلطة</span>
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
            إعطاء الأولوية للسلامة والوضوح
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Responsibilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مصمم خصيصًا لمسؤوليات السلامة الرئيسية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForResponsibilities.map((task, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <task.icon className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{task.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات زي مشرف السلامة
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">التفاصيل الفنية والسلامة</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ما يحصل عليه فريق السلامة لديك</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-700 mb-2">التزام UNEOM بالسلامة</h4>
                <p className="text-sm text-red-600">
                  يتم تصميم وتصنيع زي مشرفي السلامة لدينا بأقصى قدر من الاهتمام بالحماية والامتثال، مما يدعم التزامك بمكان عمل آمن.
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
            ملابس سلامة ومشرفين أساسية أخرى
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600">{product.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            أعطِ الأولوية للسلامة مع زي المشرفين المتخصص من UNEOM
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            تأكد من أن مشرفي السلامة لديك مجهزون جيدًا، ومرئيون للغاية، ويمكن التعرف عليهم بوضوح. اتصل بـ UNEOM لمناقشة احتياجات ملابس السلامة المحددة لمصنعك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Safety+Supervisor+Uniform+Inquiry"
              className="bg-white text-orange-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر خبير ملابس السلامة
            </Link>
            <Link
              href="/ar/industries/manufacturing#safety"
              className="border-2 border-orange-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:border-white transition-colors text-lg"
            >
              حلول سلامة التصنيع
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}