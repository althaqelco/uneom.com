import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بدلات إدارية للتعليم | ملابس تنفيذية لقيادات المدارس | يونيم السعودية',
  description: 'تقدم يونيم بدلات إدارية فاخرة لمديري المدارس والجامعات ونوابهم في المملكة العربية السعودية. ملابس تنفيذية احترافية تعكس القيادة التربوية.',
  keywords: 'بدلات إدارية تعليم السعودية, ملابس قيادات مدرسية KSA, بدلات مديري مدارس الرياض, ملابس تنفيذية جامعية جدة, يونيفورم إداريي المدارس الدمام',
  openGraph: {
    title: 'بدلات إدارية تعليمية من يونيم | ملابس قيادية احترافية في المملكة',
    description: 'اكتشف بدلات تنفيذية مصممة خصيصًا للإداريين في قطاع التعليم من يونيم. مثالية للمديرين ورؤساء الأقسام وقيادات الجامعات في السعودية.',
    images: ['/images/education/admin-suit-og.jpg'],
    locale: 'ar_SA',
    siteName: 'UNEOM'},
  alternates: {
    canonical: '/ar/shop/education/staff-uniforms/admin-suit/',
    languages: {
      'ar-SA': '/ar/shop/education/staff-uniforms/admin-suit/',
      'en-US': '/shop/education/staff-uniforms/admin-suit/'}}}

const suitFeaturesAr = [
  {
    icon: BriefcaseIcon,
    title: 'حضور تنفيذي',
    description: '[محتوى عربي فريد: مظهر احترافي مهيب يعكس سلطة القيادة والتميز التعليمي.]'
  },
  {
    icon: SparklesIcon,
    title: 'جودة فاخرة',
    description: '[محتوى عربي فريد: مواد عالية الجودة وتفصيل متقن لمظهر متميز ومصقول.]'
  },
  {
    icon: ShieldCheckIcon,
    title: 'تصميم متين',
    description: '[محتوى عربي فريد: مصمم للحفاظ على المظهر الاحترافي خلال الاستخدام المتكرر والمناسبات الرسمية.]'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'أناقة متعددة الاستخدامات',
    description: '[محتوى عربي فريد: مناسب لاجتماعات مجلس الإدارة، الاحتفالات، المؤتمرات، والمهام الإدارية اليومية.]'
  }
]

const administrativeRolesAr = [
  {
    title: 'مديرو المدارس',
    description: '[محتوى عربي فريد: بدلات متميزة لقيادة المدرسة والتميز الإداري.]',
    features: ['تصميم تنفيذي', 'حضور يعكس السلطة', 'مناسبات رسمية', 'قيادة يومية'],
    image: '/images/education/admin-suit-classic.jpg',
    occasions: ['اجتماعات مجلس الإدارة', 'لقاءات أولياء الأمور', 'الاحتفالات', 'المناسبات الرسمية']
  },
  {
    title: 'نواب المديرين والعمداء',
    description: '[محتوى عربي فريد: ملابس احترافية وقريبة للإداريين المساعدين والعمداء وأعضاء هيئة التدريس الرئيسيين.]',
    features: ['مظهر احترافي أنيق', 'سلطة ودودة', 'تصميم متعدد الاستخدامات', 'راحة تامة'],
    image: '/images/education/admin-suit-modern.jpg',
    occasions: ['اجتماعات تنسيق الموظفين', 'جلسات تأديب الطلاب', 'الإشراف الإداري', 'فعاليات المدرسة']
  },
  {
    title: 'رؤساء الأقسام والمنسقون',
    description: '[محتوى عربي فريد: ملابس قيادية أكاديمية لرؤساء الأقسام ومنسقي المناهج وقادة البرامج.]',
    features: ['احترافية أكاديمية', 'حضور قيادي', 'مظهر علمي مصقول', 'جاهزية للاجتماعات'],
    image: '/images/education/admin-suit-modern.jpg',
    occasions: ['اجتماعات هيئة التدريس وورش العمل', 'جلسات التخطيط الأكاديمي', 'تطوير المناهج', 'الإرشاد الأكاديمي للطلاب']
  },
  {
    title: 'التنفيذيون في الجامعات والكليات',
    description: '[محتوى عربي فريد: بدلات تنفيذية فاخرة ومتميزة مصممة لإدارة التعليم العالي والقيادة المؤسسية.]',
    features: ['مظهر مرموق لا يُضاهى', 'مصنوعة من مواد بجودة تنفيذية', 'تصميم رسمي وأنيق', 'حضور قيادي متميز'],
    image: '/images/education/admin-suit-classic.jpg',
    occasions: ['عروض تقديمية لمجلس الجامعة', 'اجتماعات المانحين والجهات المعنية', 'احتفالات التخرج والتكريم', 'الوظائف الرسمية رفيعة المستوى']
  }
]

const suitStylesAr = [
  {
    style: 'بدلة عمل كلاسيكية',
    description: '[محتوى عربي فريد: بدلة تقليدية من قطعتين بتصميم لا يتأثر بمرور الزمن.]',
    components: ['جاكيت مفصل', 'بنطلون مطابق', 'قصة احترافية', 'ياقات كلاسيكية'],
    colors: ['أزرق داكن', 'رمادي فحمي', 'أسود', 'بني غامق']
  },
  {
    style: 'بدلة تنفيذية من ثلاث قطع',
    description: '[محتوى عربي فريد: بدلة متميزة من ثلاث قطع مع صدرية للمناسبات الرسمية.]',
    components: ['جاكيت منظم', 'صدرية مطابقة', 'بنطلون مفصل', 'تشطيب فاخر'],
    colors: ['كحلي مقلم', 'فحمي', 'رمادي غامق', 'أزرق ليلي']
  },
  {
    style: 'بدلة عصرية بقصة ضيقة (سليم فيت)',
    description: '[محتوى عربي فريد: تصميم معاصر بأبعاد حديثة.]',
    components: ['جاكيت بقصة ضيقة', 'بنطلون مدبب', 'ياقات عصرية', 'خطوط نظيفة'],
    colors: ['كحلي', 'فحمي', 'رمادي غامق', 'أسود']
  },
  {
    style: 'بدلة رسمية للاحتفالات',
    description: '[محتوى عربي فريد: بدلات فاخرة للتخرج والاحتفالات الرسمية.]',
    components: ['تصميم رسمي', 'تفاصيل احتفالية', 'مواد فاخرة', 'تشطيب متميز'],
    colors: ['أسود', 'كحلي ليلي', 'رمادي رسمي', 'ألوان تقليدية']
  }
]

const customizationOptionsAr = [
  'تطريز شعار المدرسة',
  'مجموعات ألوان مخصصة',
  'بطاقات اسم شخصية',
  'شارات مؤسسية',
  'مؤشرات الرتبة',
  'تعديلات للمناسبات الخاصة',
  'تكييفات موسمية',
  'خيارات للاحتفالات الرسمية'
]

const fabricOptionsAr = [
  {
    name: 'صوف فاخر',
    description: '[محتوى عربي فريد: مزيج صوف عالي الجودة لراحة ومظهر فائقين.]',
    benefits: ['انسدال ممتاز', 'يسمح بالتهوية', 'مقاوم للتجعد', 'تشطيب احترافي']
  },
  {
    name: 'مزيج صوف وبوليستر',
    description: '[محتوى عربي فريد: مزيج متين يجمع بين الراحة وسهولة الصيانة.]',
    benefits: ['عناية سهلة', 'متين', 'ثبات اللون', 'فعال من حيث التكلفة']
  },
  {
    name: 'جاباردين فاخر',
    description: '[محتوى عربي فريد: قماش فاخر للمناسبات الأكثر تميزًا.]',
    benefits: ['مظهر أنيق', 'جودة فائقة', 'تشطيب رسمي', 'يدوم طويلاً']
  }
]

export default function AdminSuitPageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/ar/" className="hover:text-blue-600">الرئيسية</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link href="/ar/shop/" className="hover:text-blue-600">المتجر</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link href="/ar/shop/education/" className="hover:text-blue-600">أزياء التعليم</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link href="/ar/shop/education/staff-uniforms/" className="hover:text-blue-600">أزياء هيئة التدريس</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><span className="text-gray-900" aria-current="page">البدلات الإدارية</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-gray-800 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/admin-suit-hero.jpg"
            alt="بدلات إدارية تنفيذية لقيادات التعليم في المملكة العربية السعودية"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarSolidIcon key={i} className="h-8 w-8 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            بدلات تنفيذية إدارية
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            [محتوى عربي فريد: بدلات تنفيذية متميزة مصممة لقيادات التعليم. تعكس السلطة والاحترافية والتميز في كل دور إداري.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=admin-suits-education"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر
            </Link>
            <Link
              href="/ar/contact/?subject=استفسار عن بدلة إدارية"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              تواصل مع أخصائي
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تميز تنفيذي في كل تفصيل
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: بدلاتنا الإدارية مصممة لتعكس القيادة والاحترافية للمديرين التنفيذيين في قطاع التعليم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suitFeaturesAr.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Roles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              بدلات لقيادات التعليم
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: ملابس تنفيذية متخصصة مصممة لمختلف الأدوار الإدارية والمناصب القيادية.]
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {administrativeRolesAr.map((role) => (
              <div key={role.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={role.image}
                    alt={`بدلة إدارية احترافية لـ ${role.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">الميزات:</h4>
                    <ul className="space-y-1">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">المناسبات الملائمة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.occasions.map((occasion, occasionIndex) => (
                        <span key={occasionIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suit Styles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أنماط البدلات التنفيذية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: اختر من بين مجموعتنا من أنماط البدلات الاحترافية المصممة لقيادات التعليم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suitStylesAr.map((suit) => (
              <div key={suit.style} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{suit.style}</h3>
                <p className="text-gray-600 mb-4">{suit.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">المكونات:</h4>
                  <ul className="space-y-1">
                    {suit.components.map((component, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">الألوان المتوفرة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {suit.colors.map((color, colorIndex) => (
                      <span key={colorIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خيارات الأقمشة الفاخرة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: اختر من بين مجموعتنا من الأقمشة عالية الجودة المصممة للملابس التنفيذية.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricOptionsAr.map((fabric) => (
              <div key={fabric.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600 mb-4">{fabric.description}</p>
                <ul className="space-y-2">
                  {fabric.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خيارات التخصيص
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: قم بتخصيص بدلاتك الإدارية لتعكس هوية مؤسستك ودورك القيادي.]
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customizationOptionsAr.map((option, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                لماذا تختار بدلاتنا الإدارية؟
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">حضور تنفيذي</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: افرض الاحترام والسلطة في أدوار القيادة التعليمية.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">جودة فاخرة</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: مواد عالية الجودة وتفصيل متقن لانطباع دائم.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">أناقة متعددة الاستخدامات</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: مناسب لمختلف المناسبات والاجتماعات الإدارية.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">علامة تجارية مخصصة</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: دمج هوية المؤسسة ومؤشرات القيادة.]</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/admin-suit-benefits.jpg"
                alt="إداري تعليمي يرتدي بدلة تنفيذية من يونيم"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">يثق بنا قادة التعليم</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: استمع إلى آراء مديري المدارس في المملكة العربية السعودية الذين اختاروا يونيم لملابسهم التنفيذية.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "السيد عبد الله الفهد", school: "مدارس الرياض العالمية", quote: "[محتوى عربي فريد: شهادة حول جودة البدلات الإدارية من يونيم وملاءمتها وصورتها الاحترافية.]" },
              { name: "السيدة فاطمة الزهراني", school: "أكاديمية جدة للبنات", quote: "[محتوى عربي فريد: شهادة تسلط الضوء على الراحة والمتانة للأيام الإدارية الطويلة، والانطباع الإيجابي على الموظفين وأولياء الأمور.]" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/authors/avatar-placeholder.jpg" alt={`شهادة من ${testimonial.name}`} width={48} height={48} className="rounded-full ml-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.school}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <StarSolidIcon key={starIndex} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            قُد بأسلوب متميز وثقة
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            [محتوى عربي فريد: جهز فريق قيادتك التعليمية ببدلات يونيم الإدارية التنفيذية. تواصل مع متخصصينا لمناقشة حلول مخصصة لمؤسستك في المملكة العربية السعودية.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=admin-suits-education"
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر للبدلات الإدارية
            </Link>
            <Link
              href="/ar/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              تصفح جميع أزياء هيئة التدريس
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage", 
          "name": "بدلات إدارية تنفيذية للتعليم | يونيم المملكة العربية السعودية",
          "description": "تقدم يونيم بدلات إدارية عالية الجودة لقيادات المدارس والجامعات في المملكة العربية السعودية، مما يضمن مظهرًا احترافيًا وسلطويًا.",
          "url": "https://uneom.com/ar/shop/education/staff-uniforms/admin-suit/",
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@type": "WebSite",
            "name": "UNEOM",
            "url": "https://uneom.com/ar/"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://uneom.com/ar/" },
              { "@type": "ListItem", "position": 2, "name": "المتجر", "item": "https://uneom.com/ar/shop/" },
              { "@type": "ListItem", "position": 3, "name": "أزياء التعليم", "item": "https://uneom.com/ar/shop/education/" },
              { "@type": "ListItem", "position": 4, "name": "أزياء هيئة التدريس", "item": "https://uneom.com/ar/shop/education/staff-uniforms/" },
              { "@type": "ListItem", "position": 5, "name": "البدلات الإدارية", "item": "https://uneom.com/ar/shop/education/staff-uniforms/admin-suit/" }
            ]
          }
        }) }}
      />
    </div>
  )
}