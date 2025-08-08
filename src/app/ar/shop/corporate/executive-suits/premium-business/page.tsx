import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  StarIcon,
  CogIcon,
  SparklesIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بدلات تنفيذية فاخرة للأعمال | أزياء مؤسسية راقية | UNEOM',
  description: 'اكتشف مجموعة البدلات التنفيذية الفاخرة للأعمال من UNEOM. بدلات مؤسسية راقية مصممة خصيصاً للقادة التنفيذيين في المملكة العربية السعودية. جودة استثنائية وتصميم عصري يعكس الهوية المهنية المتميزة.',
  keywords: 'بدلات تنفيذية فاخرة, أزياء مؤسسية راقية, بدلات أعمال سعودية, ملابس تنفيذية احترافية, بدلات مديرين تنفيذيين, أزياء مؤسسية UNEOM, بدلات أعمال فاخرة الرياض',
  openGraph: {
    title: 'بدلات تنفيذية فاخرة للأعمال | UNEOM',
    description: 'بدلات تنفيذية فاخرة مصممة خصيصاً للقادة التنفيذيين في المملكة العربية السعودية. جودة استثنائية وتصميم عصري.',
    images: ['/images/products/corporate/premium-business-suits-main.jpg']}}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'تصميم فاخر حصري',
    description: 'تصاميم حصرية مستوحاة من أحدث صيحات الموضة العالمية، مصممة خصيصاً للقادة التنفيذيين المتميزين في المملكة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'جودة استثنائية',
    description: 'أقمشة فاخرة مستوردة من أرقى المصانع العالمية، مع خياطة يدوية دقيقة تضمن المتانة والأناقة لسنوات طويلة.'
  },
  {
    icon: CogIcon,
    title: 'تفصيل مخصص',
    description: 'خدمة تفصيل شخصية تضمن الملاءمة المثالية لكل عميل، مع إمكانية التخصيص الكامل للألوان والتفاصيل.'
  },
  {
    icon: UserGroupIcon,
    title: 'هوية مؤسسية متميزة',
    description: 'تصاميم تعكس الهوية المؤسسية وتعزز الحضور المهني للقادة التنفيذيين في جميع المناسبات الرسمية.'
  }
]

const specifications = [
  { label: 'تركيب الأقمشة', value: 'صوف فاخر 100% أو خليط صوف-كشمير، أقمشة إيطالية وإنجليزية مستوردة' },
  { label: 'أنواع البدلات', value: 'بدلة من قطعتين، بدلة من ثلاث قطع، سموكينغ تنفيذي، بدلة سهرة رسمية' },
  { label: 'خيارات التفصيل', value: 'تفصيل كامل حسب الطلب، تعديلات دقيقة، قياسات شخصية' },
  { label: 'نطاق المقاسات', value: 'جميع المقاسات من S إلى 5XL مع خدمة التفصيل المخصص' },
  { label: 'خيارات الألوان', value: 'أسود كلاسيكي، كحلي داكن، رمادي فحمي، بني شوكولاتة، ألوان مخصصة' },
  { label: 'التفاصيل الفاخرة', value: 'أزرار معدنية فاخرة، بطانة حريرية، جيوب مخفية، تطريز الشعار' },
  { label: 'الإكسسوارات', value: 'ربطة عنق حريرية، كبك أكمام فاخرة، منديل جيب، حزام جلدي إيطالي' }
]

const includedItems = [
  'بدلة تنفيذية فاخرة (جاكيت + بنطلون)',
  'صديري فاخر (للبدلة ثلاثية القطع)',
  'ربطة عنق حريرية مطابقة',
  'منديل جيب أنيق',
  'كبك أكمام فاخرة',
  'حقيبة حفظ فاخرة',
  'دليل العناية والصيانة',
  'ضمان الجودة لمدة سنتين'
]

const idealForOccasions = [
  { name: 'الاجتماعات التنفيذية', icon: BuildingOfficeIcon },
  { name: 'المؤتمرات الدولية', icon: UserGroupIcon },
  { name: 'المناسبات الرسمية', icon: StarIcon },
  { name: 'العشاء الرسمي', icon: ClockIcon },
  { name: 'حفلات التكريم', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'بدلات تنفيذية كلاسيكية',
    image: '/images/products/corporate/classic-executive-suits-main.jpg',
    href: '/ar/shop/corporate/executive-suits/classic/',
    price: 'ابتداءً من 1,200 ر.س'
  },
  {
    name: 'قمصان تنفيذية فاخرة',
    image: '/images/products/corporate/premium-executive-shirts-main.jpg',
    href: '/ar/shop/corporate/executive-shirts/premium/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'إكسسوارات تنفيذية',
    image: '/images/products/corporate/executive-accessories-main.jpg',
    href: '/ar/shop/corporate/executive-accessories/',
    price: 'ابتداءً من 150 ر.س'
  }
]

export default function PremiumBusinessSuitsPageAR() {
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
            <Link href="/ar/shop/corporate/" className="hover:text-blue-600">الأزياء المؤسسية</Link>
            <span>/</span>
            <Link href="/ar/shop/corporate/executive-suits/" className="hover:text-blue-600">البدلات التنفيذية</Link>
            <span>/</span>
            <span className="text-gray-900">بدلات فاخرة للأعمال</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-yellow-400" />)}
                </div>
                <span className="mr-3 text-yellow-400 font-medium">تقييم العملاء الممتاز</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                بدلات تنفيذية
                <span className="text-yellow-400 block">فاخرة للأعمال</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                اكتشف مجموعة البدلات التنفيذية الفاخرة المصممة خصيصاً للقادة المتميزين. جودة استثنائية وتصميم عصري يعكس الهوية المهنية الراقية في المملكة العربية السعودية.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ar/quote?product=premium-business-suits"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-center"
                >
                  احصل على استشارة مجانية
                </Link>
                <Link
                  href="/ar/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors text-center"
                >
                  تواصل مع خبير التفصيل
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/corporate/premium-business-suits-hero.jpg"
                  alt="بدلات تنفيذية فاخرة للأعمال"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">+500</div>
                  <div className="text-sm">عميل راضٍ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار بدلاتنا التنفيذية الفاخرة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم أرقى البدلات التنفيذية المصممة بعناية فائقة لتلبية احتياجات القادة المتميزين
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            معرض البدلات التنفيذية الفاخرة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/corporate/premium-business-suit-${i}.jpg`}
                    alt={`بدلة تنفيذية فاخرة ${i}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            مثالية للمناسبات الرسمية والتنفيذية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {idealForOccasions.map((occasion, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <occasion.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{occasion.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">مواصفات البدلات الفاخرة</h3>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-800 text-lg">{spec.label}:</span>
                      <span className="text-gray-600 text-left max-w-md">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 p-10 rounded-xl border border-yellow-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">تشمل الحزمة الفاخرة</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-yellow-600 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-yellow-100 rounded-lg border border-yellow-300">
                <h4 className="text-xl font-bold text-yellow-800 mb-3">ضمان الجودة الفاخرة</h4>
                <p className="text-yellow-700">
                  نضمن جودة استثنائية لمدة سنتين كاملتين، مع خدمة صيانة مجانية وإمكانية التعديل حسب الحاجة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            استثمر في إطلالتك المهنية المتميزة
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">ابتداءً من 1,800 ر.س</div>
              <div className="text-xl text-gray-600">للبدلة الواحدة مع التفصيل المخصص</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">بدلة قطعتين</div>
                <div className="text-lg text-gray-600">1,800 - 2,500 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">بدلة ثلاث قطع</div>
                <div className="text-lg text-gray-600">2,200 - 3,000 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">سموكينغ فاخر</div>
                <div className="text-lg text-gray-600">2,800 - 4,000 ر.س</div>
              </div>
            </div>
            
            <Link
              href="/ar/quote?product=premium-business-suits"
              className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors inline-block"
            >
              احجز استشارة مجانية الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            أكمل إطلالتك التنفيذية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600">{product.name}</h3>
                  <p className="text-yellow-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center w-full"
                  >
                    عرض المنتج
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            ابدأ رحلتك نحو التميز المهني
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            احجز استشارة مجانية مع خبراء التفصيل لدينا واكتشف كيف يمكن لبدلاتنا الفاخرة أن تعزز حضورك المهني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Premium+Business+Suits+Consultation"
              className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              احجز استشارة مجانية
            </Link>
            <Link
              href="/ar/shop/corporate/"
              className="border-2 border-black text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors"
            >
              تصفح جميع المنتجات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}