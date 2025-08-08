import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  EyeIcon,
  ClockIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  CogIcon,
  BoltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'جاكيت دورية أمنية احترافي | ملابس أمنية خارجية فاخرة | UNEOM',
  description: 'يوفر الجاكيت الأمني الاحترافي للدورية من UNEOM حماية فاخرة ومظهر مهني لعمليات الدورية الأمنية في المملكة العربية السعودية. ملابس خارجية أمنية عالية الجودة للفرق المهنية.',
  keywords: 'جاكيت أمني احترافي, جاكيت دورية أمنية, ملابس خارجية أمنية فاخرة, ملابس أمنية احترافية, جاكيت أمن سعودي, معدات أمنية احترافية UNEOM, جاكيت أمني تنفيذي',
  openGraph: {
    title: 'جاكيت دورية أمنية احترافي | UNEOM',
    description: 'جاكيت دورية أمنية احترافي فاخر مصمم لعمليات الدورية الأمنية عالية المستوى في القطاع الأمني السعودي.',
    images: ['/images/products/security/professional-security-jacket-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية احترافية',
    description: 'مواد وبناء بدرجة فاخرة توفر حماية موثوقة مع الحفاظ على مظهر تنفيذي مهني.'
  },
  {
    icon: UserGroupIcon,
    title: 'مظهر تنفيذي',
    description: 'تصميم متطور ولمسات نهائية فاخرة تعكس السلطة والمهنية في البيئات المؤسسية والراقية.'
  },
  {
    icon: EyeIcon,
    title: 'وظائف سرية',
    description: 'جيوب مخفية وميزات منخفضة الوضوح لتخزين المعدات دون التنازل عن الجمالية المهنية.'
  },
  {
    icon: ClockIcon,
    title: 'راحة طوال اليوم',
    description: 'تصميم مريح ومواد قابلة للتنفس تضمن الراحة أثناء نوبات الدورية الممتدة والمهام طويلة المدى.'
  }
]

const specifications = [
  { label: 'تركيب المواد', value: 'خليط صوف فاخر مع معالجة مقاومة للماء وخياطة معززة' },
  { label: 'ميزات الحماية', value: 'مقاوم للطقس، مقاوم للبقع، حماية من الأشعة فوق البنفسجية، متانة بدرجة مهنية' },
  { label: 'الوزن', value: '0.7-1.1 كجم حسب المقاس والتكوين الموسمي' },
  { label: 'نطاق المقاسات', value: 'XS - 4XL مع خيارات ملاءمة مفصلة وتعديلات مهنية متاحة' },
  { label: 'خيارات الألوان', value: 'أسود تنفيذي، كحلي، رمادي فحمي، بني مؤسسي (ألوان مخصصة متاحة)' },
  { label: 'تكوين الجيوب', value: '6-8 جيوب مخفية، جيب راديو، وضع شارة، إكسسوارات مهنية' },
  { label: 'الميزات الخاصة', value: 'متوافق مع الحمل المخفي، بطانة قابلة للإزالة، أزرار مهنية، تصميم تنفيذي' }
]

const includedItems = [
  'جاكيت دورية أمنية احترافي',
  'بطانة موسمية قابلة للإزالة',
  'وضع شارة مهني',
  'جيوب معدات مخفية',
  'عناصر تصميم تنفيذي',
  'دليل العناية المهنية من UNEOM',
  'قسيمة استشارة خياطة'
]

const idealForEnvironments = [
  { name: 'أمن الشركات', icon: BuildingOfficeIcon },
  { name: 'حماية تنفيذية', icon: ShieldCheckIcon },
  { name: 'أمن الفنادق', icon: UserGroupIcon },
  { name: 'أمن الفعاليات', icon: EyeIcon },
  { name: 'خدمات VIP', icon: CogIcon }
]

const relatedProducts = [
  {
    name: 'سترة تكتيكية احترافية',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/ar/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'بنطلون أمني تنفيذي',
    image: '/images/products/security/executive-security-pants-main.jpg',
    href: '/ar/shop/security-uniforms/security-patrol-pants/executive/',
    price: 'ابتداءً من 220 ر.س'
  },
  {
    name: 'إكسسوارات احترافية',
    image: '/images/products/security/professional-accessories-kit.jpg',
    href: '/ar/shop/security-accessories/professional-kit/',
    price: 'ابتداءً من 180 ر.س'
  }
]

export default function ProfessionalSecurityPatrolJacketPageAR() {
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
            <Link href="/ar/shop/security-uniforms/" className="hover:text-blue-600">الأزياء الأمنية</Link>
            <span>/</span>
            <span className="text-gray-900">جاكيت دورية أمنية احترافي</span>
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
                  src="/images/products/security/professional-security-jacket-main.jpg"
                  alt="جاكيت دورية أمنية احترافي"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-600 cursor-pointer">
                    <Image
                      src={`/images/products/security/professional-security-jacket-detail-${i}.jpg`}
                      alt={`تفاصيل الجاكيت الأمني الاحترافي ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(معيار مهني تنفيذي)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                جاكيت دورية أمنية احترافي
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                اعكس السلطة والمهنية مع الجاكيت الأمني الاحترافي للدورية من UNEOM. مصمم لمتخصصي الأمن العاملين في البيئات المؤسسية والراقية في المملكة العربية السعودية، هذه الملابس الخارجية الفاخرة تجمع بين التصميم التنفيذي والوظائف الأمنية العملية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 280 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للجاكيت الواحد</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-r-4 border-blue-600 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-blue-700">
                      <strong>درجة مهنية تنفيذية:</strong> جاكيتنا الاحترافي يلبي المعايير التنفيذية للعمليات الأمنية الراقية. <Link href="/ar/resources/professional-security-standards" className="font-medium underline hover:text-blue-800">عرض معايير الأمن المهني</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=professional-security-patrol-jacket"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر للفريق المهني
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <ClockIcon className="h-5 w-5 ml-2 text-blue-600" /> {/* Changed mr to ml for RTL */}
                  أضف إلى الطقم التنفيذي
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا المهنية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية احترافية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مظهر تنفيذي</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>وظائف سرية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة طوال اليوم</span>
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
            مصمم للعمليات الأمنية التنفيذية
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

      {/* Ideal For Environments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي للبيئات الأمنية المهنية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForEnvironments.map((environment, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <environment.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{environment.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات الجاكيت الأمني المهني
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات التصميم التنفيذي</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل الحزمة المهنية الكاملة</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">وعد المهني من UNEOM</h4>
                <p className="text-sm text-blue-600">
                  كل جاكيت أمني مهني مصمم لتلبية المعايير التنفيذية، يوفر التوازن المثالي بين المظهر المهني والوظائف الأمنية.
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
            أكمل طقمك الأمني المهني
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
            ارتق بعملياتك الأمنية المهنية مع المعدات التنفيذية من UNEOM
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            انضم إلى فرق الأمن التنفيذية في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لاحتياجات الملابس الخارجية الأمنية المهنية. اختبر المزيج المثالي من التصميم التنفيذي والوظائف الأمنية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Professional+Security+Equipment+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص المعدات المهنية
            </Link>
            <Link
              href="/ar/services/professional-security-program"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              برامج الأمن المهني
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}