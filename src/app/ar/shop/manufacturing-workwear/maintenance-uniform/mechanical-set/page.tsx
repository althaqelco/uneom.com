import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon, 
  CogIcon,
  UserIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم زي صيانة ميكانيكية | ملابس عمل متينة للفنيين | UNEOM',
  description: 'يوفر طقم زي الصيانة الميكانيكية من UNEOM الراحة والمتانة والوظائف العملية للفنيين الميكانيكيين في المملكة العربية السعودية. ملابس عمل احترافية مصممة للبيئات الصناعية الصعبة.',
  keywords: 'زي صيانة ميكانيكية, ملابس عمل فنيين, ملابس صيانة صناعية, زي عمل متين, فنيين ميكانيكيين سعوديين, ملابس عمل UNEOM, طقم زي صيانة',
  openGraph: {
    title: 'طقم زي صيانة ميكانيكية | UNEOM',
    description: 'أطقم زي احترافية مصممة خصيصاً لفنيي الصيانة الميكانيكية في المنشآت الصناعية السعودية.',
    images: ['/images/products/industrial/mechanical-maintenance-set-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'تصميم صديق للأدوات',
    description: 'جيوب متعددة، حلقات أدوات، ومناطق معززة مصممة خصيصاً لأعمال الصيانة الميكانيكية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'متانة معززة',
    description: 'بناء شديد التحمل مع نقاط ضغط معززة لتحمل متطلبات العمل الميكانيكي.'
  },
  {
    icon: CogIcon,
    title: 'حرية حركة وظيفية',
    description: 'تصميم مريح يسمح بنطاق حركة كامل للمهام الميكانيكية المعقدة والوصول للمعدات.'
  },
  {
    icon: UserIcon,
    title: 'مظهر احترافي',
    description: 'مظهر نظيف واحترافي يحافظ على مصداقية الفني مع توفير أقصى وظائف عملية.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'مزيج بولي-قطن (65% بوليستر، 35% قطن)، 245-280 جم/م²' },
  { label: 'مكونات الطقم', value: 'قميص عمل، بنطلون عمل، أفرول اختياري، سترة اختيارية' },
  { label: 'مناطق التعزيز', value: 'الركب، المرفقين، زوايا الجيوب، نقاط الضغط مع خياطة معززة' },
  { label: 'الألوان المتاحة', value: 'كحلي، رمادي فحمي، كاكي، برتقالي (ألوان مخصصة للطلبات الكبيرة)' },
  { label: 'المقاسات', value: 'S - 5XL، مع خيارات للمقاسات العادية والطويلة' },
  { label: 'تكوين الجيوب', value: 'جيوب صدر مع فتحات أقلام، جيوب جانبية، جيوب خلفية، حلقات أدوات' },
  { label: 'تعليمات العناية', value: 'متوافق مع الغسيل الصناعي، ثابت اللون، مقاوم للانكماش' }
]

const includedItems = [
  'قميص عمل صيانة ميكانيكية',
  'بنطلون عمل مطابق',
  'دليل العناية والصيانة من UNEOM',
  'جدول المقاسات وتعليمات القياس'
]

const idealForTasks = [
  { name: 'صيانة المعدات', icon: CogIcon },
  { name: 'إصلاح الآلات', icon: WrenchScrewdriverIcon },
  { name: 'الصيانة الوقائية', icon: AdjustmentsHorizontalIcon },
  { name: 'الفحوصات الفنية', icon: ShieldCheckIcon },
  { name: 'أعمال الخدمة الميدانية', icon: UserIcon }
]

const relatedProducts = [
  {
    name: 'أفرول صيانة شديد التحمل',
    image: '/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg',
    href: '/ar/shop/manufacturing-workwear/maintenance-uniform/heavy-duty-coverall/',
    price: 'ابتداءً من 290 ر.س'
  },
  {
    name: 'زي صيانة كهربائية',
    image: '/images/products/industrial/electrical-maintenance-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/maintenance-uniform/electrical-maintenance/',
    price: 'ابتداءً من 280 ر.س'
  },
  {
    name: 'أحذية سلامة صناعية',
    image: '/images/products/footwear/industrial-safety-boots.jpg',
    href: '/ar/shop/safety-footwear/industrial-boots/',
    price: 'ابتداءً من 180 ر.س'
  }
]

export default function MechanicalMaintenanceSetPageAR() {
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
            <span className="text-gray-900">طقم ميكانيكي</span>
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
                  src="/images/products/industrial/mechanical-maintenance-set-main.jpg"
                  alt="طقم زي صيانة ميكانيكية"
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
                      src={`/images/products/industrial/mechanical-set-detail-${i}.jpg`}
                      alt={`تفاصيل طقم الصيانة الميكانيكية ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(مفضل من قبل الفنيين الميكانيكيين)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                طقم زي صيانة ميكانيكية
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                جهز فريق الصيانة الميكانيكية لديك بأطقم الزي الاحترافية من UNEOM. مصممة للراحة والمتانة والوظائف العملية، هذه الأزياء تلبي المتطلبات الصعبة للفنيين الميكانيكيين في القطاع الصناعي السعودي.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 250 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم الكامل</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-r-4 border-blue-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CogIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-blue-700">
                      <strong>طقم احترافي كامل:</strong> كل ما يحتاجه فريقك الميكانيكي للحصول على مظهر احترافي ووظيفي. <Link href="/ar/contact?subject=Mechanical+Uniform+Customization" className="font-medium underline hover:text-blue-800">خصص لمنشأتك</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=mechanical-maintenance-set"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر للفريق
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى خطة الزي الموحد
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا الرئيسية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>تصميم صديق للأدوات</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>متانة معززة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حرية حركة وظيفية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مظهر احترافي</span>
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
            مصمم للمتخصصين الميكانيكيين
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
            مثالي للمهام الميكانيكية الأساسية
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
            مواصفات طقم الصيانة الميكانيكية
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تفاصيل المواد والبناء</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">يشمل الطقم الكامل</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">ضمان الجودة من UNEOM</h4>
                <p className="text-sm text-green-600">
                  كل طقم زي صيانة ميكانيكية يخضع لاختبار الجودة لضمان تلبيته للمتطلبات الصعبة لأعمال الصيانة الصناعية.
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
            أكمل معدات فريق الصيانة لديك
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
            جهز فريقك الميكانيكي بأزياء UNEOM الاحترافية
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            عزز احترافية وكفاءة فريقك مع أطقم زي الصيانة الميكانيكية المصممة خصيصاً. اتصل بـ UNEOM للحصول على أسعار الكميات وخيارات التخصيص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Mechanical+Maintenance+Uniform+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              احصل على أسعار الفريق
            </Link>
            <Link
              href="/ar/services/uniform-program-management"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              خدمات برنامج الزي الموحد
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}