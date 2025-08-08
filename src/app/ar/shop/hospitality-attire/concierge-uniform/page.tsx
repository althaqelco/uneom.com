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
  UserIcon,
  TrophyIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي البواب (الكونسيرج) | يونيوم لأزياء الضيافة الفاخرة',
  description: 'اكتشف زي البواب الفاخر من يونيوم - تصميم كلاسيكي أنيق للفنادق الفاخرة والمنتجعات في السعودية. جودة استثنائية ومظهر مهني راقي مع إمكانية التخصيص الكامل.',
  keywords: 'زي بواب, زي كونسيرج, زي فنادق فاخرة, زي ضيافة راقية السعودية, زي بواب فندق',
  openGraph: {
    title: 'زي البواب (الكونسيرج) | يونيوم',
    description: 'زي بواب فاخر وأنيق للفنادق والمنتجعات الراقية',
    images: ['/images/products/concierge-uniform.jpg'],
    locale: 'ar_SA'},
  alternates: {
    canonical: '/ar/shop/hospitality-attire/concierge-uniform/',
    languages: {
      'en': '/shop/hospitality-attire/concierge-uniform/',
      'ar': '/ar/shop/hospitality-attire/concierge-uniform/'}}}

const features = [
  {
    icon: TrophyIcon,
    title: 'تصميم فاخر وكلاسيكي',
    description: 'تصميم أنيق يعكس مستوى الخدمة الراقية والضيافة الفاخرة'
  },
  {
    icon: SparklesIcon,
    title: 'خامات عالية الجودة',
    description: 'أجود الأقمشة والخامات المستوردة لضمان المتانة والأناقة'
  },
  {
    icon: SwatchIcon,
    title: 'تخصيص كامل',
    description: 'إمكانية تخصيص الألوان والتطريز والشعارات حسب هوية الفندق'
  },
  {
    icon: HeartIcon,
    title: 'راحة استثنائية',
    description: 'تصميم مريح يسمح بحرية الحركة أثناء تقديم الخدمات'
  }
]

const uniformComponents = [
  'جاكيت فاخر بتصميم كلاسيكي',
  'بنطلون مطابق عالي الجودة',
  'قميص أبيض أنيق',
  'ربطة عنق أو بابيون مميز',
  'قبعة البواب التقليدية',
  'قفازات بيضاء أنيقة',
  'شارة اسم وشعار الفندق',
  'حزام جلدي مطابق'
]

const specifications = [
  { label: 'المادة الخارجية', value: 'صوف مخلوط فاخر 80% صوف، 20% بوليستر' },
  { label: 'البطانة', value: 'حرير صناعي عالي الجودة' },
  { label: 'الوزن', value: '350 جرام/متر مربع' },
  { label: 'المقاسات', value: 'XS إلى 4XL مع إمكانية القياس المخصص' },
  { label: 'الألوان', value: 'أزرق كحلي، أسود، بورجوندي، أخضر داكن' },
  { label: 'التطريز', value: 'تطريز ذهبي أو فضي للشعارات والزخارف' },
  { label: 'الأزرار', value: 'أزرار معدنية مطلية بالذهب أو الفضة' },
  { label: 'العناية', value: 'تنظيف جاف فقط للحفاظ على الجودة' },
  { label: 'الضمان', value: 'ضمان الجودة لمدة 36 شهر' }
]

const testimonials = [
  {
    name: 'أ. خالد المالكي',
    role: 'مدير عام الفندق',
    content: 'زي البواب الجديد أضاف لمسة من الفخامة والأناقة لفندقنا. الضيوف يلاحظون الفرق ويعلقون على المظهر المهني الراقي',
    rating: 5,
    company: 'فندق الفيصلية الرياض'
  },
  {
    name: 'محمد الشهري',
    role: 'مدير الضيافة',
    content: 'جودة استثنائية وتصميم كلاسيكي رائع. الزي يعكس مستوى الخدمة الراقية التي نقدمها في المنتجع',
    rating: 5,
    company: 'منتجع أمان الرياض'
  }
]

const colors = [
  { name: 'أزرق كحلي ملكي', code: '#1e3a8a', popular: true, description: 'اللون الكلاسيكي للفنادق الفاخرة' },
  { name: 'أسود أنيق', code: '#000000', popular: true, description: 'مثالي للمناسبات الرسمية' },
  { name: 'بورجوندي فاخر', code: '#7c2d12', popular: false, description: 'لمسة من الفخامة والتميز' },
  { name: 'أخضر داكن', code: '#14532d', popular: false, description: 'مناسب للمنتجعات الطبيعية' }
]

const hotelTypes = [
  {
    icon: TrophyIcon,
    title: 'الفنادق الفاخرة 5 نجوم',
    description: 'مثالي للفنادق الفاخرة التي تقدم خدمة استثنائية'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'المنتجعات الراقية',
    description: 'مناسب للمنتجعات والمراكز السياحية الفاخرة'
  },
  {
    icon: GlobeAltIcon,
    title: 'الفنادق التراثية',
    description: 'يناسب الفنادق التراثية والقصور المحولة'
  },
  {
    icon: UserIcon,
    title: 'النوادي الخاصة',
    description: 'مثالي للنوادي الخاصة والمراكز الاجتماعية الراقية'
  }
]

const customizationOptions = [
  'تطريز الشعار بالذهب أو الفضة',
  'إضافة اسم الفندق على الجاكيت',
  'تخصيص ألوان الأزرار والتفاصيل',
  'تصميم قبعة خاصة بهوية الفندق',
  'إضافة شرائط وزخارف مميزة',
  'تخصيص بطانة الجاكيت بألوان الفندق'
]

export default function ConciergeUniformPage() {
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
            <span className="text-gray-900">زي البواب (الكونسيرج)</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  فاخر وحصري
                </span>
                <span className="mr-2 text-sm text-gray-600">تصميم كلاسيكي</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                زي البواب (الكونسيرج)
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                زي بواب فاخر وأنيق مصمم خصيصاً للفنادق الفاخرة والمنتجعات الراقية في السعودية. تصميم كلاسيكي يعكس مستوى الضيافة الاستثنائية مع خامات عالية الجودة وإمكانية التخصيص الكامل.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="mr-2 text-sm text-gray-600">(89 تقييم)</span>
                <span className="mr-4 text-sm text-green-600 font-medium">100% رضا العملاء</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                  طلب تصميم مخصص
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  عرض الكتالوج
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/concierge-uniform.jpg"
                alt="زي البواب (الكونسيرج)"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <TrophyIcon className="h-8 w-8 text-amber-500" />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-900">فخامة استثنائية</p>
                    <p className="text-sm text-gray-600">تصميم كلاسيكي راقي</p>
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
              مميزات زي البواب الفاخر
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مصمم خصيصاً للفنادق الفاخرة التي تسعى لتقديم تجربة ضيافة استثنائية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
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
                مكونات الزي الفاخر
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                يتضمن زي البواب جميع القطع الأساسية لمظهر فاخر ومهني متكامل
              </p>
              <div className="space-y-4">
                {uniformComponents.map((component, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-amber-500 ml-3" />
                    <span className="text-gray-700">{component}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>ملاحظة:</strong> جميع المكونات قابلة للتخصيص بالكامل حسب هوية الفندق ومتطلبات التصميم الخاصة
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/concierge-uniform-details.jpg"
                alt="تفاصيل زي البواب"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Types Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مناسب للمؤسسات الراقية
            </h2>
            <p className="text-lg text-gray-600">
              زي البواب مصمم خصيصاً للمؤسسات التي تقدم خدمات ضيافة استثنائية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelTypes.map((type, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <type.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
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
              الألوان الفاخرة المتوفرة
            </h2>
            <p className="text-lg text-gray-600">
              اختر من مجموعة الألوان الكلاسيكية الفاخرة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colors.map((color, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div 
                  className="w-20 h-20 rounded-full border-4 border-gray-300 mx-auto mb-4"
                  style={{ backgroundColor: color.code }}
                ></div>
                <h3 className="font-semibold text-gray-900 mb-2">{color.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{color.description}</p>
                {color.popular && (
                  <span className="text-xs text-amber-600 font-medium bg-amber-100 px-2 py-1 rounded-full">
                    الأكثر طلباً
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customization Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خيارات التخصيص
            </h2>
            <p className="text-lg text-gray-600">
              اجعل زي البواب يعكس هوية فندقك الفريدة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationOptions.map((option, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <SparklesIcon className="h-6 w-6 text-amber-500 ml-3" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المواصفات التقنية
            </h2>
            <p className="text-lg text-gray-600">
              تفاصيل شاملة عن زي البواب الفاخر
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
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
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              آراء مديري الفنادق الفاخرة
            </h2>
            <p className="text-lg text-gray-600">
              ما يقوله مديرو الفنادق الفاخرة عن زي البواب
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
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
                  <p className="text-xs text-amber-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ بمستوى الضيافة في فندقك
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            احصل على زي البواب الفاخر واترك انطباعاً لا يُنسى لدى ضيوفك من اللحظة الأولى
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              طلب تصميم مخصص
            </button>
            <Link 
              href="/ar/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
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
            <Link href="/ar/shop/hospitality-attire/reception-staff-uniform" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/reception-staff-uniform.jpg"
                  alt="زي موظفي الاستقبال"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">زي موظفي الاستقبال</h3>
                  <p className="text-gray-600 text-sm">زي أنيق ومهني لموظفي الاستقبال</p>
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