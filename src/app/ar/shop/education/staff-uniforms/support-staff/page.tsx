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
  WrenchScrewdriverIcon,
  HeartIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'أزياء موظفي الدعم التعليمي | ملابس دعم احترافية | يونيم السعودية',
  description: 'توفر يونيم أزياء عالية الجودة لموظفي دعم المدارس في المملكة العربية السعودية، بما في ذلك فرق الصيانة والأمن والنظافة وخدمات الطعام. اطلب عرض سعر!',
  keywords: 'أزياء موظفي الدعم التعليمي السعودية, زي صيانة المدارس KSA, ملابس أمن المدارس الرياض, زي نظافة جدة, يونيفورم خدمات الطعام الدمام',
  openGraph: {
    title: 'أزياء موظفي الدعم التعليمي من يونيم | موثوقة واحترافية',
    description: 'جهز فرق الدعم في مدرستك بأزياء متينة وعملية واحترافية من يونيم. نخدم المؤسسات التعليمية في جميع أنحاء المملكة العربية السعودية.',
    images: ['/images/education/support-staff-og.jpg'],
    locale: 'ar_SA',
    siteName: 'UNEOM'},
  alternates: {
    canonical: '/ar/shop/education/staff-uniforms/support-staff/',
    languages: {
      'ar-SA': '/ar/shop/education/staff-uniforms/support-staff/',
      'en-US': '/shop/education/staff-uniforms/support-staff/'}}}

const uniformFeaturesAr = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'تصميم وظيفي',
    description: '[محتوى عربي فريد: ميزات عملية تشمل جيوب متعددة، وحلقات أدوات، ومناطق معززة لمهام العمل اليومية.]'
  },
  {
    icon: ShieldCheckIcon,
    title: 'هيكل متين',
    description: '[محتوى عربي فريد: مواد شديدة التحمل وخياطة معززة لتحمل بيئات العمل الشاقة.]'
  },
  {
    icon: HeartIcon,
    title: 'التركيز على الراحة',
    description: '[محتوى عربي فريد: تصميم مريح وأقمشة تسمح بالتهوية لراحة طوال اليوم أثناء العمل البدني.]'
  },
  {
    icon: UserGroupIcon,
    title: 'هوية مهنية',
    description: '[محتوى عربي فريد: تعريف واضح ومظهر احترافي يعكس معايير المؤسسة.]'
  }
]

const supportRolesAr = [
  {
    title: 'موظفو الصيانة',
    description: '[محتوى عربي فريد: أزياء متينة لموظفي صيانة المرافق والإصلاح.]',
    features: ['أقمشة شديدة التحمل', 'جيوب أدوات متعددة', 'ركب معززة', 'مقاومة للبقع'],
    image: '/images/education/support-staff-maintenance.jpg',
    workAreas: ['صيانة مرافق المدرسة', 'أعمال كهربائية', 'سباكة', 'إصلاحات عامة'],
    colors: ['أزرق داكن عملي', 'رمادي ورشة', 'كاكي متين', 'أخضر غابي']
  },
  {
    title: 'أفراد الأمن',
    description: '[محتوى عربي فريد: أزياء أمن احترافية لضمان سلامة الحرم المدرسي وحماية الطلاب.]',
    features: ['مظهر احترافي واضح', 'أماكن تثبيت للشارات والهويات', 'حلقات لأجهزة اللاسلكي وأحزمة خدمات', 'مريحة للدوريات الطويلة'],
    image: '/images/education/support-staff-security.jpg',
    workAreas: ['دوريات أمن الحرم المدرسي', 'مراقبة الدخول وإدارة الزوار', 'الاستجابة للطوارئ', 'أمن الفعاليات والتحكم في الحشود'],
    colors: ['أزرق أمني داكن', 'أسود تكتيكي', 'رمادي قيادي', 'لمسات زرقاء عالية الوضوح']
  },
  {
    title: 'موظفو النظافة والخدمات العامة',
    description: '[محتوى عربي فريد: أزياء عملية وصحية وسهلة الصيانة لخدمات التنظيف والنظافة العامة.]',
    features: ['أقمشة سهلة العناية ومقاومة للمبيضات', 'خصائص ممتازة لطرد البقع والأوساخ', 'مصممة لحركة مريحة', 'تحافظ على مظهر نظيف واحترافي'],
    image: '/images/education/support-staff-custodial.jpg',
    workAreas: ['تنظيف الفصول الدراسية والممرات', 'تعقيم وصحة المرافق', 'إدارة النفايات وإعادة التدوير', 'العناية بالأرضيات وصيانتها'],
    colors: ['أزرق فاتح صحي', 'رمادي نظيف', 'أخضر خدمي', 'كاكي عملي']
  },
  {
    title: 'موظفو خدمات الطعام والكافتيريا',
    description: '[محتوى عربي فريد: أزياء صحية واحترافية لموظفي كافتيريا المدرسة والمطبخ وخدمات الطعام.]',
    features: ['مواد آمنة للاستخدام مع الطعام', 'سهلة الغسيل في درجات حرارة عالية', 'مقاومة فائقة للبقع والشحوم', 'تصميم أنيق وصحي واحترافي'],
    image: '/images/education/support-staff-food-service.jpg',
    workAreas: ['عمليات مطبخ المدرسة', 'تحضير وجبات الطلاب', 'خطوط تقديم الطعام بالكافتيريا', 'تنظيف وتعقيم المطبخ'],
    colors: ['أبيض كلاسيكي', 'أزرق فاتح صحي', 'رمادي خدمي', 'مآزر اختيارية بألوان المدرسة']
  },
  {
    title: 'موظفو النقل (سائقو الحافلات)',
    description: '[محتوى عربي فريد: أزياء مريحة واحترافية لسائقي حافلات المدرسة ومنسقي النقل.]',
    features: ['مصممة لجلوس مريح خلال الرحلات الطويلة', 'هوية مهنية واضحة', 'عناصر اختيارية للحماية من الطقس', 'تسمح بحركة سهلة وفحوصات السلامة'],
    image: '/images/education/support-staff-transport.jpg',
    workAreas: ['خطوط نقل الطلاب', 'فحوصات صيانة مركبات المدرسة', 'تخطيط وتنسيق المسارات', 'ضمان بروتوكولات سلامة الطلاب'],
    colors: ['أزرق نقل داكن', 'أزرق سائقين', 'لمسات صفراء للسلامة', 'شرائط عاكسة اختيارية']
  },
  {
    title: 'موظفو تنسيق الحدائق والملاعب',
    description: '[محتوى عربي فريد: أزياء عمل خارجية متينة مصممة لأعمال تنسيق حدائق المدرسة وصيانة الملاعب.]',
    features: ['أقمشة مقاومة للطقس وحامية من الأشعة فوق البنفسجية', 'مواد متينة للغاية للعمل في الهواء الطلق', 'جيوب عملية للأدوات والأساسيات', 'مريحة للأعمال البدنية'],
    image: '/images/education/support-staff-grounds.jpg',
    workAreas: ['تنسيق حدائق المدرسة', 'صيانة وإعداد الملاعب الرياضية', 'صيانة المرافق الخارجية', 'أعمال الزراعة الموسمية والعناية بالحدائق'],
    colors: ['أخضر حدائق', 'كاكي ترابي', 'بني عملي', 'أزرق خدمات خارجية']
  }
]

const uniformComponentsAr = [
  {
    item: 'قمصان العمل',
    description: '[محتوى عربي فريد: قمصان متينة مصممة لبيئات العمل النشطة.]',
    options: ['قمصان بولو', 'قمصان عمل بأزرار', 'خيارات بأكمام طويلة', 'ماصة للرطوبة']
  },
  {
    item: 'بناطيل العمل',
    description: '[محتوى عربي فريد: بناطيل عمل مريحة ومتينة.]',
    options: ['بناطيل كارجو', 'بناطيل عمل', 'ركب معززة', 'جيوب متعددة']
  },
  {
    item: 'الأفرهولات (Coveralls)',
    description: '[محتوى عربي فريد: حماية لكامل الجسم لأعمال الصيانة والأعمال الفنية.]',
    options: ['أفرهولات قياسية', 'خيارات معزولة', 'مواد تسمح بالتهوية', 'ملحقات أدوات']
  },
  {
    item: 'معدات السلامة',
    description: '[محتوى عربي فريد: إكسسوارات السلامة ومعدات الحماية.]',
    options: ['سترات عالية الوضوح', 'خوذات صلبة', 'نظارات سلامة', 'قفازات عمل']
  }
]

const fabricBenefitsAr = [
  'معالجات مقاومة للبقع والأوساخ',
  'نقاط ضغط ودرزات معززة',
  'ماصة للرطوبة للراحة',
  'سهلة العناية وقابلة للغسل في الغسالة',
  'ألوان مقاومة للبهتان',
  'تتوفر معالجات مضادة للميكروبات'
]

export default function SupportStaffPageAr() {
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
            <li><span className="text-gray-900" aria-current="page">أزياء موظفي الدعم</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/support-staff-hero.jpg"
            alt="أزياء احترافية لموظفي دعم المدارس في السعودية"
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
            أزياء موظفي الدعم
          </h1>
          <p className="text-xl text-orange-200 mb-10 max-w-3xl mx-auto">
            [محتوى عربي فريد: أزياء احترافية مصممة لموظفي الدعم المتفانين الذين يحافظون على سير العمل بسلاسة في المؤسسات التعليمية. تجمع بين الوظيفية والمتانة والمظهر الاحترافي.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=education-support-staff"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر
            </Link>
            <Link
              href="/ar/contact/?subject=استفسار عن زي موظفي الدعم"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
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
              مصممة للأعمال الشاقة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: أزياء موظفي الدعم لدينا مصممة لتلبية الاحتياجات الصعبة لموظفي الدعم التعليمي.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeaturesAr.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Roles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أزياء لكل دور دعم
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: أزياء متخصصة مصممة لمختلف وظائف موظفي الدعم وبيئات العمل.]
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportRolesAr.map((role) => (
              <div key={role.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={role.image}
                    alt={`زي احترافي لـ ${role.title} في المؤسسات التعليمية`}
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
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">مجالات العمل:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.workAreas.map((area, areaIndex) => (
                        <span key={areaIndex} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">الألوان المتوفرة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {color}
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

      {/* Uniform Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              حلول زي متكاملة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: كل ما يحتاجه موظفو الدعم لملابس عمل احترافية وعملية.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformComponentsAr.map((component) => (
              <div key={component.item} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.item}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.options.map((option, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مزايا الأقمشة الصناعية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: تتميز أزياء موظفي الدعم لدينا بتقنيات أقمشة متقدمة مصممة لبيئات العمل الشاقة.]
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabricBenefitsAr.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                لماذا تختار أزياء موظفي الدعم من يونيم؟
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">تصميم وظيفي</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: ميزات عملية تعزز كفاءة العمل والراحة.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">متانة استثنائية</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: مصممة لتحمل أصعب بيئات العمل.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مظهر احترافي</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: يحافظ على معايير المؤسسة أثناء العمل.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">فعالية من حيث التكلفة</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: أزياء تدوم طويلاً وتوفر قيمة ممتازة.]</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/support-staff-benefits.jpg"
                alt="أزياء موظفي دعم المدارس من يونيم تظهر المتانة والراحة"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">يثق بنا مديرو العمليات بالمدارس</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: تعرف على سبب ثقة المؤسسات التعليمية في المملكة العربية السعودية في يونيم لتوفير أزياء موظفي الدعم لديهم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "السيد إبراهيم الحربي", school: "مدارس الملك فهد النموذجية، الرياض", quote: "[محتوى عربي فريد: شهادة حول متانة ووظيفية أزياء الصيانة والأمن المقدمة من يونيم.]" },
              { name: "السيدة عائشة الغامدي", school: "مدرسة جدة العالمية الإعدادية", quote: "[محتوى عربي فريد: شهادة تركز على المظهر الاحترافي وراحة أزياء موظفي النظافة وخدمات الطعام.]" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/education/school-staff.jpg" alt={`شهادة من ${testimonial.name}`} width={48} height={48} className="rounded-full ml-4" />
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

      {/* Safety and Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              إعطاء الأولوية للسلامة ومعايير المؤسسة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: أزياء موظفي الدعم لدينا مصممة لتلبية معايير السلامة الصارمة والحفاظ على الصورة المهنية لمؤسستك التعليمية في المملكة العربية السعودية.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <ShieldCheckIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">الالتزام بمعايير السلامة</h3>
              <p className="text-gray-600">[محتوى عربي فريد: أزياء متوافقة مع لوائح سلامة مكان العمل ذات الصلة في المملكة لمختلف أدوار الدعم.]</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <ClipboardDocumentListIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ضمان الجودة والمتانة</h3>
              <p className="text-gray-600">[محتوى عربي فريد: تخضع لرقابة جودة واختبارات صارمة لضمان أداء طويل الأمد.]</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <SparklesIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">الحفاظ على الصورة المهنية</h3>
              <p className="text-gray-600">[محتوى عربي فريد: يساهم في صورة مؤسسية متسقة واحترافية عبر جميع مستويات الموظفين.]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جهز فريق الدعم الأساسي لديك مع يونيم
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            [محتوى عربي فريد: تأكد من أن موظفي الدعم في مؤسستك التعليمية في المملكة العربية السعودية مجهزون بأزياء احترافية ومتينة وعملية. تواصل مع متخصصي يونيم اليوم.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=education-support-staff"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر لزي موظفي الدعم
            </Link>
            <Link
              href="/ar/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
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
          "name": "أزياء موظفي الدعم التعليمي | يونيم المملكة العربية السعودية",
          "description": "تقدم يونيم مجموعة شاملة من الأزياء المتينة والاحترافية لموظفي الدعم التعليمي في المملكة العربية السعودية، بما في ذلك فرق الصيانة والأمن والنظافة وخدمات الطعام.",
          "url": "https://uneom.com/ar/shop/education/staff-uniforms/support-staff/",
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
              { "@type": "ListItem", "position": 5, "name": "أزياء موظفي الدعم", "item": "https://uneom.com/ar/shop/education/staff-uniforms/support-staff/" }
            ]
          }
        }) }}
      />
    </div>
  )
}