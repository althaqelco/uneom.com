import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  TruckIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'إكسسوارات الرعاية الصحية | يونيوم للمعدات الطبية المتخصصة',
  description: 'اكتشف مجموعة يونيوم الشاملة من إكسسوارات الرعاية الصحية - معدات وأدوات طبية عالية الجودة للمهنيين الصحيين في السعودية. إكسسوارات احترافية للمستشفيات والعيادات.',
  keywords: 'إكسسوارات الرعاية الصحية, معدات طبية, أدوات طبية السعودية, إكسسوارات طبية, معدات مستشفيات, مستلزمات عيادات',
  openGraph: {
    title: 'إكسسوارات الرعاية الصحية | يونيوم',
    description: 'مجموعة شاملة من إكسسوارات الرعاية الصحية عالية الجودة للمهنيين الطبيين',
    images: ['/images/products/healthcare-accessories.jpg'],
    locale: 'ar_SA'},
  alternates: {
    canonical: '/ar/shop/healthcare-accessories/',
    languages: {
      'en': '/shop/healthcare-accessories/',
      'ar': '/ar/shop/healthcare-accessories/'}}}

const categories = [
  {
    title: 'أطقم الأدوات الطبية المهنية',
    description: 'مجموعات شاملة من الأدوات الطبية للمهنيين الصحيين',
    image: '/images/products/medical-professional-kit.jpg',
    link: '/ar/shop/medical-accessories/professional-kit',
    items: '12+ منتج'
  },
  {
    title: 'معدات التشخيص',
    description: 'أدوات ومعدات تشخيص عالية الجودة',
    image: '/images/products/diagnostic-equipment.jpg',
    link: '/ar/shop/healthcare-accessories/diagnostic-equipment',
    items: '25+ منتج'
  },
  {
    title: 'السلامة والحماية',
    description: 'معدات الحماية الشخصية للعاملين في الرعاية الصحية',
    image: '/images/products/medical-ppe.jpg',
    link: '/ar/shop/healthcare-accessories/safety-protection',
    items: '18+ منتج'
  },
  {
    title: 'حلول التخزين',
    description: 'تخزين منظم للمستلزمات والمعدات الطبية',
    image: '/images/products/medical-storage.jpg',
    link: '/ar/shop/healthcare-accessories/storage-solutions',
    items: '15+ منتج'
  }
]

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'جودة طبية معتمدة',
    description: 'جميع الإكسسوارات تلبي المعايير الطبية الدولية والشهادات المعتمدة'
  },
  {
    icon: BeakerIcon,
    title: 'معقم وآمن',
    description: 'مصمم للبيئات المعقمة مع خصائص مضادة للميكروبات'
  },
  {
    icon: CogIcon,
    title: 'سهولة الاستخدام',
    description: 'تصميم مريح للاستخدام اليومي المريح من قبل المهنيين الصحيين'
  },
  {
    icon: TruckIcon,
    title: 'توصيل سريع',
    description: 'توصيل سريع في جميع أنحاء السعودية مع إمكانية التتبع'
  }
]

const popularProducts = [
  {
    name: 'طقم الأدوات الطبية المهنية',
    description: 'طقم شامل من الأدوات الطبية للمهنيين الصحيين',
    image: '/images/products/medical-professional-kit.jpg',
    link: '/ar/shop/medical-accessories/professional-kit',
    rating: 5,
    reviews: 127
  },
  {
    name: 'سماعة طبية رقمية',
    description: 'سماعة طبية رقمية متطورة مع إلغاء الضوضاء',
    image: '/images/products/digital-stethoscope.jpg',
    link: '/ar/shop/healthcare-accessories/digital-stethoscope',
    rating: 5,
    reviews: 89
  },
  {
    name: 'حقيبة تخزين طبية',
    description: 'حقيبة تخزين مقاومة للماء للمعدات الطبية',
    image: '/images/products/medical-storage-case.jpg',
    link: '/ar/shop/healthcare-accessories/storage-case',
    rating: 4,
    reviews: 156
  }
]

const testimonials = [
  {
    name: 'د. سارة المطيري',
    role: 'استشارية أمراض باطنة',
    content: 'إكسسوارات ممتازة الجودة حسنت من سير عملنا اليومي. الطقم المهني شامل ومنظم بشكل رائع.',
    rating: 5,
    hospital: 'مستشفى الملك فهد'
  },
  {
    name: 'أحمد الزهراني',
    role: 'فني مختبرات',
    content: 'أفضل استثمار لمختبرنا. الجودة متميزة والمعدات موثوقة جداً.',
    rating: 5,
    hospital: 'مجمع الملك سلمان الطبي'
  }
]

export default function HealthcareAccessoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/ar" className="hover:text-blue-600">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/shop" className="hover:text-blue-600">المتجر</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">إكسسوارات الرعاية الصحية</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              إكسسوارات الرعاية الصحية
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              اكتشف مجموعتنا الشاملة من إكسسوارات الرعاية الصحية عالية الجودة المصممة للمهنيين الطبيين في السعودية. من أدوات التشخيص إلى حلول التخزين، نوفر كل ما تحتاجه لتقديم رعاية صحية فعالة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                تصفح الكتالوج
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                طلب عرض سعر
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في إكسسوارات الرعاية الصحية..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
                فلاتر
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>ترتيب حسب: الأكثر شعبية</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
                <option>الأحدث أولاً</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              فئات الإكسسوارات
            </h2>
            <p className="text-lg text-gray-600">
              تصفح فئاتنا المنظمة للعثور على ما تحتاجه بالضبط
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium">{category.items}</span>
                      <span className="text-blue-600 group-hover:text-blue-700">
                        ← عرض الكل
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار إكسسوارات الرعاية الصحية لدينا
            </h2>
            <p className="text-lg text-gray-600">
              الجودة والموثوقية والمعايير المهنية في كل منتج
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              إكسسوارات الرعاية الصحية الأكثر شعبية
            </h2>
            <p className="text-lg text-gray-600">
              المنتجات الأكثر ثقة من قبل المهنيين الصحيين
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <Link key={index} href={product.link} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(product.rating)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="mr-2 text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                        عرض التفاصيل
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ما يقوله المهنيون الصحيون
            </h2>
            <p className="text-lg text-gray-600">
              موثوق من قبل المهنيين الطبيين في جميع أنحاء السعودية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جهز مرفقك الصحي اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            انضم إلى آلاف المهنيين الصحيين الذين يثقون في يونيوم لاحتياجاتهم من الإكسسوارات الطبية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              طلب عرض سعر مخصص
            </button>
            <Link 
              href="/ar/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            فئات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/ar/shop/medical-scrubs" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-scrubs.jpg"
                  alt="الأزياء الطبية"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">الأزياء الطبية</h3>
                  <p className="text-gray-600 text-sm">الزي الطبي المهني والسكراب</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/healthcare-uniforms" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/healthcare-uniforms.jpg"
                  alt="أزياء الرعاية الصحية"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">أزياء الرعاية الصحية</h3>
                  <p className="text-gray-600 text-sm">حلول شاملة لأزياء الرعاية الصحية</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/ppe" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-ppe.jpg"
                  alt="معدات الحماية الشخصية"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">معدات الحماية الشخصية</h3>
                  <p className="text-gray-600 text-sm">معدات السلامة للعاملين في الرعاية الصحية</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}