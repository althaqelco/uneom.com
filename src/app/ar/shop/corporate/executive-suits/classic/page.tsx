import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  StarIcon,
  CogIcon,
  ClockIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بدلات تنفيذية كلاسيكية | أزياء مؤسسية أنيقة | UNEOM',
  description: 'اكتشف مجموعة البدلات التنفيذية الكلاسيكية من UNEOM. تصاميم أنيقة وعملية للمهنيين والقادة في المملكة العربية السعودية. جودة عالية وأسعار تنافسية تناسب جميع المناسبات المهنية.',
  keywords: 'بدلات تنفيذية كلاسيكية, أزياء مؤسسية أنيقة, بدلات أعمال كلاسيكية, ملابس مهنية سعودية, بدلات مكتبية راقية, أزياء تنفيذية UNEOM, بدلات رجالية كلاسيكية',
  openGraph: {
    title: 'بدلات تنفيذية كلاسيكية | UNEOM',
    description: 'بدلات تنفيذية كلاسيكية أنيقة وعملية للمهنيين والقادة في المملكة العربية السعودية.',
    images: ['/images/products/corporate/classic-executive-suits-main.jpg']}}

const productFeatures = [
  {
    icon: ClockIcon,
    title: 'تصميم كلاسيكي خالد',
    description: 'تصاميم كلاسيكية أنيقة لا تتأثر بتغيرات الموضة، مناسبة لجميع المناسبات المهنية والرسمية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'جودة موثوقة',
    description: 'أقمشة عالية الجودة وخياطة متقنة تضمن المتانة والراحة في الاستخدام اليومي.'
  },
  {
    icon: CogIcon,
    title: 'تنوع في الاستخدام',
    description: 'مناسبة للعمل اليومي، الاجتماعات المهمة، والمناسبات الرسمية المختلفة.'
  },
  {
    icon: UserGroupIcon,
    title: 'مناسبة لجميع المهن',
    description: 'تصاميم متنوعة تناسب المحامين، المديرين، المحاسبين، والمهنيين في جميع القطاعات.'
  }
]

const specifications = [
  { label: 'تركيب الأقمشة', value: 'صوف طبيعي 70-80%، بوليستر 20-30%، أقمشة مقاومة للتجاعيد' },
  { label: 'أنواع البدلات', value: 'بدلة من قطعتين، بدلة من ثلاث قطع، بدلة عمل يومية، بدلة رسمية' },
  { label: 'خيارات القص', value: 'قص كلاسيكي، قص عصري، قص مريح، قص ضيق' },
  { label: 'نطاق المقاسات', value: 'جميع المقاسات من XS إلى 4XL مع إمكانية التعديل' },
  { label: 'خيارات الألوان', value: 'أسود، كحلي، رمادي، بني، أزرق داكن، ألوان موسمية' },
  { label: 'التفاصيل', value: 'أزرار كلاسيكية، جيوب وظيفية، بطانة مريحة، تشطيبات أنيقة' },
  { label: 'العناية', value: 'سهلة التنظيف، مقاومة للتجاعيد، قابلة للكي بسهولة' }
]

const includedItems = [
  'بدلة تنفيذية كلاسيكية (جاكيت + بنطلون)',
  'صديري كلاسيكي (للبدلة ثلاثية القطع)',
  'ربطة عنق كلاسيكية',
  'شماعة خشبية فاخرة',
  'كيس حفظ قماشي',
  'دليل العناية والصيانة',
  'ضمان الجودة لمدة سنة واحدة'
]

const idealForProfessions = [
  { name: 'المحامون', icon: BriefcaseIcon },
  { name: 'المديرون التنفيذيون', icon: BuildingOfficeIcon },
  { name: 'المحاسبون', icon: UserGroupIcon },
  { name: 'الأكاديميون', icon: AcademicCapIcon },
  { name: 'رجال الأعمال', icon: StarIcon }
]

const relatedProducts = [
  {
    name: 'بدلات تنفيذية فاخرة',
    image: '/images/products/corporate/premium-business-suits-main.jpg',
    href: '/ar/shop/corporate/executive-suits/premium-business/',
    price: 'ابتداءً من 1,800 ر.س'
  },
  {
    name: 'قمصان مؤسسية كلاسيكية',
    image: '/images/products/corporate/classic-corporate-shirts-main.jpg',
    href: '/ar/shop/corporate/corporate-shirts/classic/',
    price: 'ابتداءً من 180 ر.س'
  },
  {
    name: 'ربطات عنق كلاسيكية',
    image: '/images/products/corporate/classic-ties-main.jpg',
    href: '/ar/shop/corporate/accessories/classic-ties/',
    price: 'ابتداءً من 80 ر.س'
  }
]

export default function ClassicExecutiveSuitsPageAR() {
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
            <span className="text-gray-900">بدلات كلاسيكية</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-blue-400" />)}
                </div>
                <span className="mr-3 text-blue-400 font-medium">الخيار المفضل للمهنيين</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                بدلات تنفيذية
                <span className="text-blue-400 block">كلاسيكية أنيقة</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                اكتشف مجموعة البدلات التنفيذية الكلاسيكية التي تجمع بين الأناقة الخالدة والعملية. تصاميم مناسبة لجميع المهنيين والقادة في المملكة العربية السعودية.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ar/quote?product=classic-executive-suits"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition-colors text-center"
                >
                  احصل على عرض سعر
                </Link>
                <Link
                  href="/ar/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  استشارة مجانية
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/corporate/classic-executive-suits-hero.jpg"
                  alt="بدلات تنفيذية كلاسيكية"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">+1000</div>
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
              لماذا تختار بدلاتنا الكلاسيكية؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تصاميم كلاسيكية خالدة تجمع بين الأناقة والعملية لتناسب جميع المناسبات المهنية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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
            معرض البدلات الكلاسيكية
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/corporate/classic-executive-suit-${i}.jpg`}
                    alt={`بدلة تنفيذية كلاسيكية ${i}`}
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

      {/* Ideal For Professions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            مثالية لجميع المهن والتخصصات
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {idealForProfessions.map((profession, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <profession.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{profession.name}</h4>
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
              <h3 className="text-3xl font-bold text-gray-900 mb-8">مواصفات البدلات الكلاسيكية</h3>
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
            
            <div className="bg-blue-50 p-10 rounded-xl border border-blue-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">تشمل الحزمة الكلاسيكية</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-blue-100 rounded-lg border border-blue-300">
                <h4 className="text-xl font-bold text-blue-800 mb-3">ضمان الجودة الكلاسيكية</h4>
                <p className="text-blue-700">
                  نضمن جودة عالية ومتانة لمدة سنة كاملة، مع خدمة صيانة وتعديلات مجانية خلال فترة الضمان.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            أسعار تنافسية للجودة الكلاسيكية
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">ابتداءً من 1,200 ر.س</div>
              <div className="text-xl text-gray-600">للبدلة الواحدة شاملة التعديلات</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">بدلة قطعتين</div>
                <div className="text-lg text-gray-600">1,200 - 1,600 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">بدلة ثلاث قطع</div>
                <div className="text-lg text-gray-600">1,500 - 2,000 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">بدلة رسمية</div>
                <div className="text-lg text-gray-600">1,400 - 1,800 ر.س</div>
              </div>
            </div>
            
            <Link
              href="/ar/quote?product=classic-executive-suits"
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors inline-block"
            >
              احصل على عرض سعر مخصص
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            أكمل إطلالتك المهنية
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            اختر الأناقة الكلاسيكية الخالدة
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكن لبدلاتنا الكلاسيكية أن تعزز حضورك المهني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Classic+Executive+Suits+Consultation"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              استشارة مجانية
            </Link>
            <Link
              href="/ar/shop/corporate/"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              تصفح جميع المنتجات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}