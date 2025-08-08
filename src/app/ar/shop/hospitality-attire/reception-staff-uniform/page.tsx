import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  SwatchIcon,
  ScissorsIcon,
  BuildingOfficeIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي موظفي الاستقبال | يونيوم لأزياء الضيافة المتخصصة',
  description: 'اكتشف زي موظفي الاستقبال من يونيوم - تصميم أنيق ومهني للفنادق والمنتجعات والمكاتب في السعودية. جودة عالية وراحة استثنائية مع إمكانية التخصيص.',
  keywords: 'زي استقبال, زي موظفي الفنادق, زي ضيافة السعودية, زي استقبال فنادق, زي موظفين مهني',
  openGraph: {
    title: 'زي موظفي الاستقبال | يونيوم',
    description: 'زي استقبال أنيق ومهني للفنادق والمنتجعات والمكاتب',
    images: ['/images/products/reception-staff-uniform.jpg'],
    locale: 'ar_SA'},
  alternates: {
    canonical: '/ar/shop/hospitality-attire/reception-staff-uniform/',
    languages: {
      'en': '/shop/hospitality-attire/reception-staff-uniform/',
      'ar': '/ar/shop/hospitality-attire/reception-staff-uniform/'}}}

const features = [
  {
    icon: SparklesIcon,
    title: 'تصميم أنيق ومهني',
    description: 'تصميم عصري يعكس صورة مهنية راقية للمؤسسة'
  },
  {
    icon: HeartIcon,
    title: 'راحة طوال اليوم',
    description: 'نسيج مريح يسمح بحرية الحركة أثناء ساعات العمل الطويلة'
  },
  {
    icon: SwatchIcon,
    title: 'ألوان متنوعة',
    description: 'مجموعة واسعة من الألوان لتناسب هوية المؤسسة'
  },
  {
    icon: CogIcon,
    title: 'سهولة العناية',
    description: 'نسيج مقاوم للتجعد وسهل التنظيف والصيانة'
  }
]

const uniformComponents = [
  'بلوزة أو قميص أنيق',
  'بنطلون أو تنورة مهنية',
  'جاكيت أو بليزر (اختياري)',
  'ربطة عنق أو وشاح مطابق',
  'شارة اسم مخصصة',
  'إكسسوارات مطابقة'
]

const specifications = [
  { label: 'المادة', value: 'قطن مخلوط عالي الجودة 70% قطن، 30% بوليستر' },
  { label: 'الوزن', value: '200 جرام/متر مربع' },
  { label: 'المقاسات', value: 'XS إلى 4XL للرجال والنساء' },
  { label: 'الألوان', value: 'أزرق كحلي، رمادي، أسود، بيج، أبيض' },
  { label: 'التخصيص', value: 'شعار المؤسسة، ألوان خاصة، تطريز' },
  { label: 'المعالجة', value: 'مقاوم للتجعد ومضاد للبقع' },
  { label: 'العناية', value: 'غسيل آلي حتى 40 درجة مئوية' },
  { label: 'الضمان', value: 'ضمان الجودة لمدة 24 شهر' }
]

const testimonials = [
  {
    name: 'أ. فاطمة الحربي',
    role: 'مديرة الاستقبال',
    content: 'زي رائع وأنيق، يعطي انطباعاً مهنياً ممتازاً للضيوف. الجودة عالية والراحة استثنائية',
    rating: 5,
    company: 'فندق الريتز كارلتون الرياض'
  },
  {
    name: 'محمد العتيبي',
    role: 'مدير العمليات',
    content: 'أفضل استثمار لفريق الاستقبال. الزي يعكس مستوى الخدمة الراقية التي نقدمها',
    rating: 5,
    company: 'منتجع البحر الأحمر'
  }
]

const colors = [
  { name: 'أزرق كحلي كلاسيكي', code: '#1e3a8a', popular: true },
  { name: 'رمادي أنثراسايت', code: '#374151', popular: true },
  { name: 'أسود أنيق', code: '#000000', popular: false },
  { name: 'بيج فاتح', code: '#d4c5b9', popular: false },
  { name: 'أبيض كريمي', code: '#fefefe', popular: false }
]

const industries = [
  {
    icon: BuildingOfficeIcon,
    title: 'الفنادق والمنتجعات',
    description: 'مثالي لموظفي استقبال الفنادق والمنتجعات الفاخرة'
  },
  {
    icon: UserIcon,
    title: 'المكاتب التجارية',
    description: 'مناسب لموظفي الاستقبال في الشركات والمكاتب'
  },
  {
    icon: HeartIcon,
    title: 'المراكز الطبية',
    description: 'ملائم لموظفي استقبال المستشفيات والعيادات'
  },
  {
    icon: UserGroupIcon,
    title: 'مراكز الخدمات',
    description: 'مثالي لمراكز خدمة العملاء والاستقبال'
  }
]

export default function ReceptionStaffUniformPage() {
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
            <Link href="/ar/shop/hospitality-attire" className="hover:text-blue-600">أزياء الضيافة</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">زي موظفي الاستقبال</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  تصميم حصري
                </span>
                <span className="mr-2 text-sm text-gray-600">قابل للتخصيص</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                زي موظفي الاستقبال
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                زي استقبال أنيق ومهني مصمم خصيصاً للفنادق والمنتجعات والمكاتب التجارية في السعودية. تصميم عصري يعكس الصورة المهنية الراقية مع راحة استثنائية طوال اليوم.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="mr-2 text-sm text-gray-600">(156 تقييم)</span>
                <span className="mr-4 text-sm text-green-600 font-medium">96% رضا العملاء</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  طلب عرض سعر
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  عينة مجانية
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/reception-staff-uniform.jpg"
                alt="زي موظفي الاستقبال"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <SparklesIcon className="h-8 w-8 text-blue-500" />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-900">تصميم أنيق</p>
                    <p className="text-sm text-gray-600">مظهر مهني راقي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مميزات زي موظفي الاستقبال
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مصمم خصيصاً لتوفير المظهر المهني الراقي مع الراحة والعملية في بيئة العمل
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
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

      {/* Uniform Components Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                مكونات الزي
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                يتضمن زي موظفي الاستقبال جميع القطع الأساسية لمظهر مهني متكامل
              </p>
              <div className="space-y-4">
                {uniformComponents.map((component, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3" />
                    <span className="text-gray-700">{component}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>ملاحظة:</strong> يمكن تخصيص جميع المكونات حسب احتياجات المؤسسة وإضافة الشعار والألوان الخاصة
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/reception-uniform-components.jpg"
                alt="مكونات زي الاستقبال"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مناسب لجميع القطاعات
            </h2>
            <p className="text-lg text-gray-600">
              زي موظفي الاستقبال مصمم ليناسب مختلف بيئات العمل المهنية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <industry.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الألوان المتوفرة
            </h2>
            <p className="text-lg text-gray-600">
              اختر من مجموعة الألوان الأنيقة لتناسب هوية مؤسستك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {colors.map((color, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div 
                  className="w-16 h-16 rounded-full border-4 border-gray-300 mx-auto mb-4"
                  style={{ backgroundColor: color.code }}
                ></div>
                <h3 className="font-medium text-gray-900 mb-2">{color.name}</h3>
                {color.popular && (
                  <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                    الأكثر طلباً
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المواصفات التقنية
            </h2>
            <p className="text-lg text-gray-600">
              تفاصيل شاملة عن زي موظفي الاستقبال
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-900">{spec.label}:</span>
                  <span className="text-gray-600 text-left">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg text-gray-600">
              ما يقوله مديرو الفنادق والمؤسسات عن زي موظفي الاستقبال
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
                  <p className="text-xs text-blue-600">{testimonial.company}</p>
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
            ارتقِ بصورة مؤسستك المهنية
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            احصل على زي موظفي الاستقبال الأنيق واترك انطباعاً مهنياً لا يُنسى لدى عملائك
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

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/ar/shop/hospitality-attire/concierge-uniform" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/concierge-uniform.jpg"
                  alt="زي البواب"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">زي البواب</h3>
                  <p className="text-gray-600 text-sm">زي أنيق ومميز للبوابين في الفنادق</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/hospitality-attire/restaurant-staff-uniform" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/restaurant-staff-uniform.jpg"
                  alt="زي موظفي المطاعم"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">زي موظفي المطاعم</h3>
                  <p className="text-gray-600 text-sm">أزياء مهنية لموظفي المطاعم</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/hospitality-attire/housekeeping-uniform" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/housekeeping-uniform.jpg"
                  alt="زي التدبير المنزلي"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">زي التدبير المنزلي</h3>
                  <p className="text-gray-600 text-sm">أزياء عملية لموظفي التدبير المنزلي</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}