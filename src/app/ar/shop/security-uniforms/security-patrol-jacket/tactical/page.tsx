import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon,
  CloudIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CogIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'جاكيت دورية أمنية تكتيكي | ملابس أمنية خارجية متطورة | UNEOM',
  description: 'يوفر الجاكيت الأمني التكتيكي للدورية من UNEOM حماية فائقة ووظائف عملية لعمليات الدورية الأمنية في المملكة العربية السعودية. ملابس خارجية تكتيكية متطورة مصممة لفرق الأمن المهنية.',
  keywords: 'جاكيت أمني تكتيكي, جاكيت دورية أمنية, ملابس خارجية تكتيكية, معدات دورية أمنية, جاكيت أمن سعودي, ملابس أمنية تكتيكية UNEOM, جاكيت أمني مهني',
  openGraph: {
    title: 'جاكيت دورية أمنية تكتيكي | UNEOM',
    description: 'جاكيت دورية أمنية تكتيكي متطور مصمم لعمليات الدورية الأمنية المهنية في القطاع الأمني السعودي.',
    images: ['/images/products/security/tactical-security-jacket-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية تكتيكية',
    description: 'بناء معزز بمواد بمواصفات تكتيكية توفر حماية ضد المخاطر البيئية والمخاطر التشغيلية.'
  },
  {
    icon: BoltIcon,
    title: 'وصول سريع',
    description: 'وضع استراتيجي للجيوب وميزات وصول سريع للمعدات الأساسية وأجهزة الاتصال أثناء الدوريات.'
  },
  {
    icon: EyeIcon,
    title: 'رؤية مهنية',
    description: 'عناصر عالية الرؤية ومظهر مهني يحافظ على السلطة مع ضمان السلامة في ظروف الإضاءة المختلفة.'
  },
  {
    icon: CloudIcon,
    title: 'أداء لجميع الأحوال الجوية',
    description: 'مواد مقاومة للطقس وتصميم قابل للتنفس للراحة والحماية في ظروف المناخ المتنوعة في المملكة العربية السعودية.'
  }
]

const specifications = [
  { label: 'تركيب المواد', value: 'نسيج ريبستوب بمواصفات تكتيكية مع طلاء مقاوم للماء ونقاط ضغط معززة' },
  { label: 'ميزات الحماية', value: 'مقاوم للرياح والماء، حماية من الأشعة فوق البنفسجية، ألواح مقاومة للاحتكاك' },
  { label: 'الوزن', value: '0.9-1.3 كجم حسب المقاس والتكوين' },
  { label: 'نطاق المقاسات', value: 'XS - 4XL مع أساور وحافة قابلة للتعديل للملاءمة المثلى' },
  { label: 'خيارات الألوان', value: 'أسود تكتيكي، كحلي، رمادي فحمي، أخضر زيتوني (ألوان مخصصة متاحة)' },
  { label: 'تكوين الجيوب', value: '8-12 جيب تكتيكي، حلقات راديو، حاملات أقلام، مرفقات شارات' },
  { label: 'الميزات الخاصة', value: 'متوافق مع الحمل المخفي، رقع قابلة للإزالة، سحابات تهوية، شرائط عاكسة' }
]

const includedItems = [
  'جاكيت دورية أمنية تكتيكي',
  'نظام رقع قابلة للإزالة',
  'أحزمة أساور قابلة للتعديل',
  'شرائط أمان عاكسة',
  'مرفقات حلقة راديو',
  'دليل العناية التكتيكية من UNEOM',
  'مخطط المقاسات المهني'
]

const idealForOperations = [
  { name: 'الدوريات الأمنية', icon: EyeIcon },
  { name: 'الأمن المتحرك', icon: BoltIcon },
  { name: 'أمن الفعاليات', icon: CogIcon },
  { name: 'أمن المرافق', icon: ShieldCheckIcon },
  { name: 'الاستجابة للطوارئ', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'سترة تكتيكية احترافية',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/ar/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'بنطلون دورية أمنية',
    image: '/images/products/security/security-patrol-pants-main.jpg',
    href: '/ar/shop/security-uniforms/security-patrol-pants/tactical/',
    price: 'ابتداءً من 180 ر.س'
  },
  {
    name: 'طقم إكسسوارات تكتيكية',
    image: '/images/products/security/tactical-accessories-kit.jpg',
    href: '/ar/shop/security-accessories/tactical-kit/',
    price: 'ابتداءً من 200 ر.س'
  }
]

export default function TacticalSecurityPatrolJacketPageAR() {
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
            <span className="text-gray-900">جاكيت دورية أمنية تكتيكي</span>
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
                  src="/images/products/security/tactical-security-jacket-main.jpg"
                  alt="جاكيت دورية أمنية تكتيكي"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-gray-800 cursor-pointer">
                    <Image
                      src={`/images/products/security/tactical-security-jacket-detail-${i}.jpg`}
                      alt={`تفاصيل الجاكيت الأمني التكتيكي ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(أداء تكتيكي مثبت)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                جاكيت دورية أمنية تكتيكي
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ارتق بعمليات الدورية الأمنية مع الجاكيت الأمني التكتيكي للدورية من UNEOM. مصمم لفرق الأمن المهنية في المملكة العربية السعودية، هذه الملابس الخارجية التكتيكية المتطورة تجمع بين الحماية الفائقة والوظائف والمظهر المهني لواجبات الدورية المتطلبة.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">ابتداءً من 320 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للجاكيت الواحد</span>
              </div>
              
              <div className="p-4 bg-gray-50 border-r-4 border-gray-800 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-gray-700">
                      <strong>أداء بمواصفات تكتيكية:</strong> جاكيت الدورية لدينا يلبي المعايير التكتيكية للعمليات الأمنية المهنية. <Link href="/ar/resources/tactical-outerwear-standards" className="font-medium underline hover:text-gray-900">عرض معايير الملابس الخارجية التكتيكية</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=tactical-security-patrol-jacket"
                  className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر لفريق الدورية
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <ClockIcon className="h-5 w-5 ml-2 text-gray-600" /> {/* Changed mr to ml for RTL */}
                  أضف إلى طقم الدورية
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا التكتيكية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية تكتيكية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>وصول سريع</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>رؤية مهنية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>أداء لجميع الأحوال الجوية</span>
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
            مصمم للدوريات الأمنية المهنية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Operations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي لعمليات الدورية الأمنية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForOperations.map((operation, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <operation.icon className="h-10 w-10 text-gray-800 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{operation.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات جاكيت الدورية التكتيكي
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات التصميم التكتيكي</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل حزمة الدورية الكاملة</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">وعد التكتيكي من UNEOM</h4>
                <p className="text-sm text-gray-600">
                  كل جاكيت دورية تكتيكي مصمم مع وضع العمليات الأمنية المهنية في الاعتبار، يوفر حماية وظائف موثوقة لواجبات الدورية المتطلبة.
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
            أكمل طقم الدورية التكتيكي
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{product.name}</h3>
                  <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            عزز عمليات الدورية الأمنية مع المعدات التكتيكية من UNEOM
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            انضم إلى فرق الدورية الأمنية في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لاحتياجات الملابس الخارجية التكتيكية. اختبر المزيج المثالي من الحماية والوظائف والمظهر المهني.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Tactical+Patrol+Equipment+Inquiry"
              className="bg-white text-gray-800 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص المعدات التكتيكية
            </Link>
            <Link
              href="/ar/services/tactical-patrol-program"
              className="border-2 border-gray-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 hover:border-white transition-colors text-lg"
            >
              برامج الدورية التكتيكية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}