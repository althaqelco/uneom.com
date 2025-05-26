import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ClipboardDocumentListIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  WrenchIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي مشرفي أرضيات المصانع | ملابس عمل تصنيع عملية | UNEOM',
  description: 'زي مشرفي أرضيات المصانع من UNEOM مصمم للقادة النشطين في المصانع السعودية. متين وعملي ومريح للإشراف المباشر وإدارة الفرق.',
  keywords: 'زي مشرفي أرضيات المصانع, ملابس عمل تصنيع, ملابس مشرفي مصانع, زي صناعي عملي, ملابس مشرفين متينة, قيادة مصانع سعودية',
  openGraph: {
    title: 'زي مشرفي أرضيات المصانع للتصنيع | UNEOM',
    description: 'زي عملي ومتين لمشرفي الأرضيات النشطين في بيئات التصنيع.',
    images: ['/images/products/industrial/floor-supervisor-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'تصميم عملي وفعال',
    description: 'مزود بجيوب موضوعة بشكل استراتيجي وحلقات أدوات للأدوات والأجهزة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'متين للمتطلبات اليومية',
    description: 'مصنوع من أقمشة شديدة التحمل تقاوم التمزق والبقع والبهتان في البيئات النشطة.'
  },
  {
    icon: UserGroupIcon,
    title: 'راحة للأدوار النشطة',
    description: 'مواد تسمح بالتهوية وتصاميم تتيح نطاقًا كاملاً من الحركة أثناء الإشراف الميداني.'
  },
  {
    icon: WrenchIcon, 
    title: 'سهولة التعرف عليهم',
    description: 'تصميم مميز أو خيارات ألوان لجعل المشرفين سهلي التعرف عليهم في أرض المصنع المزدحمة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'مزيج بولي-قطن متين (مثال: 60% قطن، 40% بوليستر، 220-245 جم/م²) أو قماش ريبستوب' },
  { label: 'أنماط التصميم', value: 'قمصان/قمصان بولو عملية، بناطيل كارجو، سترات متعددة الجيوب، جواكيت خفيفة' },
  { label: 'الألوان المتاحة', value: 'كحلي، رمادي، كاكي، أسود، مع خيارات لإضافات عالية الوضوح' },
  { label: 'المقاسات', value: 'M - 4XL، مع خيارات لمقاسات أكبر أو مخصصة' },
  { label: 'الميزات الرئيسية', value: 'نقاط ضغط معززة، جيوب آمنة متعددة (بسحاب/أزرار)، فتحات أقلام، حلقات راديو' },
  { label: 'سهولة الغسيل والارتداء', value: 'سهل العناية، قابل للغسل في الغسالة، يحافظ على المظهر الاحترافي بعد الغسيل المتكرر' },
  { label: 'التخصيص', value: 'تطريز/طباعة لقب "مشرف"، شعار الشركة، تعريف القسم' }
]

const includedItems = [
  'قميص/بولو مشرف أرضية المصنع',
  'بنطلون/بنطلون كارجو مشرف أرضية المصنع',
  'سترة عملية أو جاكيت خفيف اختياري (إذا طُلب)',
  'دليل متانة ملابس العمل من UNEOM'
]

const idealForTasks = [
  { name: 'توجيه سير العمل', icon: ArrowLeftIcon }, 
  { name: 'حل المشكلات الفوري', icon: WrenchIcon },
  { name: 'تنسيق الفريق', icon: UserGroupIcon },
  { name: 'فحوصات الجودة والتفتيش', icon: CheckCircleIcon }, 
  { name: 'ضمان الامتثال للسلامة', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'زي المشرف التنفيذي',
    image: '/images/products/industrial/executive-supervisor-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/supervisor-uniform/executive/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'زي مشرفي السلامة',
    image: '/images/products/industrial/safety-supervisor-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/supervisor-uniform/safety-supervisor/',
    price: 'ابتداءً من 210 ر.س'
  },
  {
    name: 'زي خطوط الإنتاج القياسي',
    image: '/images/products/industrial/standard-production-line-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/standard/',
    price: 'ابتداءً من 180 ر.س'
  }
]


export default function FloorSupervisorUniformPageAR() {
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
            <span className="text-gray-900">مشرف أرضية المصنع</span>
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
                  src="/images/products/industrial/floor-supervisor-uniform-main.jpg"
                  alt="زي مشرف أرضية المصنع"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/floor-supervisor-detail-${i}.jpg`}
                      alt={`تفاصيل زي مشرف أرضية المصنع ${i}`}
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
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="mr-2 text-sm text-gray-600">(تقييم عالي للوظائف العملية)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي مشرف أرضية المصنع
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                مصمم لبيئة أرض المصنع الديناميكية، يجمع زي مشرفي أرضيات المصانع من UNEOM بين العملية والمتانة والراحة. مكّن مشرفيك من القيادة بفعالية وإدارة العمليات بشكل مباشر.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 190 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم (مثال: قميص وبنطلون)</span>
              </div>
              
              <div className="p-4 bg-green-50 border-r-4 border-green-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-green-700">
                      <strong>مصمم للعمل الميداني:</strong> هذا الزي مصمم خصيصًا للمشرفين المشاركين بفعالية في العمليات اليومية، مما يتطلب المرونة وسهولة الحركة. <Link href="/ar/services/custom-design" className="font-medium underline hover:text-green-800">خصصه لفريقك</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=floor-supervisor-uniform"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  اطلب عرض سعر
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى قائمة الرغبات
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا الرئيسية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>تصميم عملي للغاية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>شديد التحمل ومتين</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة للأدوار النشطة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>سهولة التعرف على المشرف</span>
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
            العملية والأداء لقيادة أرضية المصنع
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

      {/* Ideal For Tasks Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي للمهام الإشرافية الرئيسية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForTasks.map((task, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <task.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
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
            مواصفات زي مشرف أرضية المصنع
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">المواد والبناء</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">محتويات الطلب</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-700 mb-2">ضمان UNEOM للجاهزية للعمل</h4>
                <p className="text-sm text-yellow-600">
                  صُمم زي مشرفي أرضيات المصانع لدينا لتحمل التحديات اليومية للمصنع المزدحم، مما يضمن الموثوقية والمظهر الاحترافي وردية بعد وردية.
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
            استكشف أنواع أخرى من زي المشرفين
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جهز مشرفي أرضيات المصانع للنجاح
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            زود قيادتك الميدانية بزي يناسب أدوارهم الصعبة. اتصل بـ UNEOM للحصول على حلول ملابس عمل متينة وعملية ومريحة للمشرفين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Floor+Supervisor+Uniform+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              ناقش احتياجاتك
            </Link>
            <Link
              href="/ar/shop/manufacturing-workwear/"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              عرض جميع ملابس عمل التصنيع
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}