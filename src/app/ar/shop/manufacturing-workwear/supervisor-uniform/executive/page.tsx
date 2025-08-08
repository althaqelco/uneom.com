import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  SparklesIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  BriefcaseIcon, 
  BuildingStorefrontIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي المشرف التنفيذي | ملابس عمل فاخرة للتصنيع | UNEOM',
  description: 'ارتقِ بمشرفي التصنيع لديك مع زي المشرف التنفيذي من UNEOM. يجمع بين الهيبة والراحة والمتانة للأدوار القيادية في البيئات الصناعية السعودية. تتوفر خيارات العلامة التجارية المخصصة.',
  keywords: 'زي مشرف تنفيذي, ملابس مشرفي التصنيع, ملابس عمل قيادية صناعية, زي مصانع فاخر, ملابس مشرفين سعوديين, خط UNEOM التنفيذي',
  openGraph: {
    title: 'زي المشرف التنفيذي للتصنيع | UNEOM',
    description: 'زي احترافي ومتين مصمم للمشرفين في بيئات التصنيع الصعبة.',
    images: ['/images/products/industrial/executive-supervisor-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: BriefcaseIcon,
    title: 'مظهر رسمي واحترافي',
    description: 'تصاميم مفصلة تعكس القيادة والكفاءة في أرض المصنع.'
  },
  {
    icon: SparklesIcon, 
    title: 'أقمشة فاخرة ومتينة',
    description: 'استخدام مواد عالية الجودة توفر مظهراً راقياً ومرونة لتحمل الاستخدام الصناعي.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'راحة وحرية حركة معززة',
    description: 'قصات مريحة وأقمشة تسمح بالتهوية تضمن الراحة للمشرفين كثيري الحركة.'
  },
  {
    icon: TagIcon, 
    title: 'خيارات العلامة التجارية المخصصة',
    description: 'وضع بارز للشعار وتنسيق الألوان لتتماشى مع هوية علامتك التجارية.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'مزيج بولي-فسكوز أو بولي-قطن تويل فاخر (مثال: 65% بوليستر، 35% فسكوز/قطن، 220-260 جم/م²)' },
  { label: 'أنماط التصميم', value: 'قمصان/قمصان بولو مفصلة، بناطيل/تشينو أنيقة، جواكيت/سترات منسقة اختيارية' },
  { label: 'الألوان المتاحة', value: 'كحلي، رمادي فحمي، أسود، أزرق فاتح، أبيض، مع خيارات لتباين الأنابيب/التفاصيل' },
  { label: 'المقاسات', value: 'S - 4XL، مع خيارات تفصيل حسب الطلب متاحة' },
  { label: 'الميزات الرئيسية', value: 'لمسة نهائية مقاومة للتجعد، معالجة طاردة للبقع، جيوب عملية، نقاط ضغط معززة' },
  { label: 'المتانة', value: 'ثبات ألوان ممتاز واحتفاظ بالشكل بعد غسلات متعددة' },
  { label: 'التخصيص', value: 'شعارات مطرزة، أزرار مخصصة، ياقات/أساور متباينة، بطاقات أسماء' }
]

const includedItems = [
  'قميص/بولو مشرف تنفيذي',
  'بنطلون/تشينو مشرف تنفيذي',
  'جاكيت أو سترة مطابقة اختيارية (إذا طُلبت)',
  'حقيبة ملابس فاخرة وشماعة'
]

const idealForRoles = [
  { name: 'مشرفو الإنتاج', icon: BriefcaseIcon },
  { name: 'مديرو أرضيات المصانع', icon: BuildingStorefrontIcon },
  { name: 'قادة مراقبة الجودة', icon: ShieldCheckIcon },
  { name: 'رؤساء الورديات', icon: UserGroupIcon },
  { name: 'مديرو العمليات (في الموقع)', icon: BriefcaseIcon }
]

const relatedProducts = [
  {
    name: 'زي مشرفي أرضيات المصانع',
    image: '/images/products/industrial/floor-supervisor-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/supervisor-uniform/floor-supervisor/',
    price: 'ابتداءً من 190 ر.س'
  },
  {
    name: 'زي مشرفي السلامة',
    image: '/images/products/industrial/safety-supervisor-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/supervisor-uniform/safety-supervisor/',
    price: 'ابتداءً من 210 ر.س'
  },
  {
    name: 'زي خطوط الإنتاج شديد التحمل',
    image: '/images/products/industrial/heavy-duty-production-line-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    price: 'ابتداءً من 220 ر.س'
  }
]

export default function ExecutiveSupervisorUniformPageAR() {
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
            <span className="text-gray-900">التنفيذي</span>
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
                  src="/images/products/industrial/executive-supervisor-uniform-main.jpg"
                  alt="زي المشرف التنفيذي"
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
                      src={`/images/products/industrial/executive-supervisor-detail-${i}.jpg`}
                      alt={`تفاصيل زي المشرف التنفيذي ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(الخط الفاخر - تقييم عالي)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي المشرف التنفيذي
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                افرض الاحترام واضمن التميز التشغيلي مع زي المشرف التنفيذي من UNEOM. مصنوع بدقة للقادة في قطاع التصنيع السعودي، يمزج بين الأناقة الراقية والأداء الصناعي المتين.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 350 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم (مثال: قميص وبنطلون)</span>
              </div>
              
              <div className="p-4 bg-teal-50 border-r-4 border-teal-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BriefcaseIcon className="h-6 w-6 text-teal-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-teal-700">
                      <strong>زي القيادة:</strong> مصمم لتمييز طاقم الإشراف لديك، مما يعزز الهيبة والاحترافية في أرض المصنع. <Link href="/ar/services/corporate-programs" className="font-medium underline hover:text-teal-800">استكشف برامج الشركات</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=executive-supervisor-uniform"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  اطلب عرض سعر فاخر
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى المجموعة
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">الميزات المميزة:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>قصة رسمية ومفصلة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>أقمشة فاخرة مرنة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة وحرية حركة طوال اليوم</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>علامة تجارية مخصصة بالكامل</span>
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
            تحديد الحضور التنفيذي في التصنيع
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

      {/* Ideal For Roles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي للأدوار القيادية في التصنيع السعودي
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForRoles.map((role, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <role.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{role.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات الزي التنفيذي
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تفاصيل المواد والتصميم</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ما يتلقاه فريقك التنفيذي</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">معيار UNEOM التنفيذي</h4>
                <p className="text-sm text-green-600">
                  يتم تصنيع كل طقم زي تنفيذي بعناية فائقة بالتفاصيل، مما يضمن لمسة نهائية فائقة تعكس أهمية طاقم الإشراف لديك.
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
            زي مشرفين وصناعي آخر
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
      <section className="py-20 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جهز قيادتك التصنيعية بالتميز
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            استثمر في زي المشرف التنفيذي من UNEOM لتعزيز الاحترافية والهيبة داخل عملياتك الصناعية السعودية. اتصل بنا للحصول على استشارة مخصصة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Executive+Supervisor+Uniform+Inquiry"
              className="bg-white text-blue-800 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              تحدث إلى متخصصي الزي الموحد
            </Link>
            <Link
              href="/ar/industries/manufacturing"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:border-white transition-colors text-lg"
            >
              المزيد من حلول التصنيع
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}