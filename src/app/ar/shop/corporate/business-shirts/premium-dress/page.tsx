import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  SparklesIcon, 
  ShieldCheckIcon,
  HeartIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'قمصان رسمية فاخرة | قمصان شركات فاخرة | يونيوم',
  description: 'انغمس في مجموعتنا من القمصان الرسمية الفاخرة. أقمشة رائعة، حرفية فائقة، وتصاميم أنيقة للمديرين التنفيذيين المميزين في المملكة العربية السعودية.',
  keywords: 'قمصان رسمية فاخرة, قمصان شركات فاخرة, قمصان تنفيذية السعودية, قمصان عمل عالية الجودة, ملابس شركات مصممة',
  openGraph: {
    title: 'قمصان رسمية فاخرة | قمصان شركات فاخرة | يونيوم',
    description: 'جرب جودة وأناقة لا مثيل لهما مع قمصاننا الرسمية الفاخرة، المصممة للحضور التنفيذي.',
    images: ['/images/products/corporate/premium-dress-shirts-main.jpg']}}

const productFeatures = [
  {
    icon: TrophyIcon,
    title: 'أقمشة رائعة',
    description: 'مصنوعة من أجود أنواع القطن طويل التيلة، مثل القطن المصري أو سوبيما، لنعومة ولمعان استثنائيين.'
  },
  {
    icon: SparklesIcon,
    title: 'حرفية فائقة',
    description: 'مصممة بدقة مع عدد غرز عالٍ، ودرزات دقيقة، واهتمام بكل التفاصيل للحصول على لمسة نهائية لا تشوبها شائبة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'تصميم أنيق',
    description: 'تصاميم أنيقة وخالدة مع ياقات وأصفاد مصقولة وأزرار فاخرة من عرق اللؤلؤ.'
  },
  {
    icon: UserIcon,
    title: 'راحة ومقاس لا مثيل لهما',
    description: 'مفصلة لانسدال مثالي وراحة استثنائية، مما يضمن لك المظهر والشعور بأفضل حال.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '100% قطن طويل التيلة (مثل المصري، سوبيما، سي آيلاند)' },
  { label: 'عدد الخيوط', value: '100 خيط مزدوج فما فوق' },
  { label: 'الألوان المتاحة', value: 'أبيض كلاسيكي، أزرق غني، باستيل رقيق، نقوش دقيقة' },
  { label: 'المقاسات', value: 'S-XXL (قصة مفصلة - استشر دليل المقاسات)' },
  { label: 'أنواع الياقات', value: 'ويندسور منتشرة، مقطوعة، ياقة بشريط، شبه منتشرة' },
  { label: 'أنواع الأصفاد', value: 'أصفاد فرنسية، أصفاد قابلة للتحويل، أصفاد برميلية' },
  { label: 'الأزرار', value: 'عرق اللؤلؤ الأصلي' },
  { label: 'تعليمات العناية', value: 'يوصى بالغسيل الاحترافي، أو غسيل آلي لطيف بارد، تعليق ليجف' },
  { label: 'التخصيص', value: 'المونوغرام، خيارات خياطة مفصلة، اختيار نمط الياقة/الأصفاد' }
]

const includedItems = [
  'قميص رسمي فاخر',
  'دعامات ياقة عالية الجودة (معدنية أو من عرق اللؤلؤ)',
  'تغليف ملابس فاخر',
  'شهادة أصالة (لأقمشة مختارة)',
  'دليل مفصل للعناية والأناقة'
]

const occasions = [
  {
    name: 'اجتماعات مجلس الإدارة',
    description: 'افرض الاحترام بأسلوب لا تشوبه شائبة.',
    icon: '👔'
  },
  {
    name: 'العروض التقديمية التنفيذية',
    description: 'اعكس الثقة والسلطة.',
    icon: '📊'
  },
  {
    name: 'فعاليات الأعمال الرسمية',
    description: 'اترك انطباعًا دائمًا في التجمعات رفيعة المستوى.',
    icon: '🥂' 
  },
  {
    name: 'تفاعلات العملاء المهمين',
    description: 'اعكس الطبيعة المتميزة لخدماتك.',
    icon: '🤝'
  }
]

const relatedProducts = [
  {
    name: 'قمصان عمل بقصة عصرية',
    image: '/images/products/corporate/modern-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/modern-fit/',
    price: 'من 150 ريال سعودي'
  },
  {
    name: 'قمصان عمل بقصة كلاسيكية',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/classic/',
    price: 'من 120 ريال سعودي'
  },
  {
    name: 'بدلات عمل فاخرة',
    image: '/images/products/corporate/premium-business-suit.jpg',
    href: '/ar/shop/corporate/executive-suits/premium-business/',
    price: 'من 680 ريال سعودي'
  }
]

export default function PremiumDressShirtsPageAR() {
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
            <Link href="/ar/shop/corporate/" className="hover:text-blue-600">ملابس الشركات</Link>
            <span>/</span>
            <Link href="/ar/shop/corporate/business-shirts/" className="hover:text-blue-600">قمصان العمل</Link>
            <span>/</span>
            <span className="text-gray-900">رسمي فاخر</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/corporate/premium-dress-shirts-main.jpg"
                  alt="قميص رسمي فاخر"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/products/corporate/premium-shirt-detail-${i}.jpg`}
                      alt={`تفاصيل قميص فاخر ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="mr-2 text-sm text-gray-600">(98 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قمصان رسمية فاخرة
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                جرب قمة أناقة قمصان الشركات مع قمصاننا الرسمية الفاخرة. مصنوعة بدقة من أجود أنواع القطن في العالم، توفر هذه القمصان نعومة ولمعانًا وأناقة لا مثيل لها للمدير التنفيذي المتميز.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 250 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقميص</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">قصة مفصلة. خيارات تفصيل حسب الطلب متاحة.</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون/النقش</h3>
                <div className="flex flex-wrap gap-3">
                  {['أبيض كلاسيكي', 'أزرق غني', 'وردي رقيق', 'خط رفيع'].map(color => (
                    <button key={color} className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.split(' ')[0].toLowerCase()}-100 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>خيارات أخرى...</span>
                    </button>
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">الكمية</h3>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">-</button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                  إضافة إلى عرض السعر
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex-1">
                  <HeartIcon className="h-5 w-5 inline ml-2" />
                  حفظ لوقت لاحق
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>أجود أنواع القطن طويل التيلة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>حرفية فائقة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>أزرار من عرق اللؤلؤ</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>خيارات تفصيل حسب الطلب</span>
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
            خلاصة التميز في القمصان
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            للحظات التي تتطلب التميز
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{occasion.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{occasion.name}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التفصيلية</h2>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600 text-left">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">عبوتك الفاخرة</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">خدمة الخياطة المفصلة</h3>
                <p className="text-blue-600 mb-4">
                  للحصول على أقصى درجات التخصيص، استفسر عن خدمة الخياطة المفصلة لدينا. قم بإنشاء قميص فريد خاص بك، من اختيار القماش إلى الغرزة النهائية.
                </p>
                <Link href="/ar/services/custom-design" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  اكتشف خيارات التفصيل <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل أناقتك التنفيذية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full"
                  >
                    عرض التفاصيل
                    <ArrowRightIcon className="mr-2 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            استثمر في جودة وأناقة لا هوادة فيهما
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            قمصاننا الرسمية الفاخرة هي استثمار في صورتك المهنية. اتصل بخدمة الكونسيرج لدينا للحصول على مساعدة شخصية أو لترتيب استشارة خاصة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=premium-dress-shirts"
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب استشارة فاخرة
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors text-lg"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}