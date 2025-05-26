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
  BookOpenIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'أزياء المعلمين | زي تعليمي احترافي | يونيم',
  description: 'أزياء معلمين فاخرة للمدارس في المملكة العربية السعودية. زي مريح واحترافي ومتين مصمم خصيصًا للمعلمين والمعلمات.',
  keywords: 'أزياء معلمين السعودية, ملابس معلمي المدارس, زي تربوي, ملابس تدريس احترافية, يونيفورم هيئة التدريس',
  openGraph: {
    title: 'أزياء المعلمين من يونيم | إلهام الاحترافية في التعليم السعودي',
    description: 'ارتقِ بهيئة التدريس مع أزياء المعلمين المتخصصة من يونيم. جودة وراحة وتصاميم احترافية للمدارس في جميع أنحاء المملكة.',
    images: ['/images/education/teacher-uniforms-og.jpg'], 
    locale: 'ar_SA',
    siteName: 'UNEOM',
  },
  alternates: {
    canonical: '/ar/shop/education/staff-uniforms/teacher-uniform/',
    languages: {
      'ar-SA': '/ar/shop/education/staff-uniforms/teacher-uniform/',
      'en-US': '/shop/education/staff-uniforms/teacher-uniform/',
    },
  },
}

const uniformFeaturesAr = [
  {
    icon: BookOpenIcon,
    title: 'احترافية تعليمية',
    description: '[محتوى عربي فريد: مصمم لإبراز الهيبة والاحترافية مع الحفاظ على سهولة التواصل مع الطلاب.]'
  },
  {
    icon: HeartIcon,
    title: 'الراحة أولاً',
    description: '[محتوى عربي فريد: راحة طوال اليوم بأقمشة تسمح بالتهوية وتصميم مريح لبيئات التدريس النشطة.]'
  },
  {
    icon: ShieldCheckIcon,
    title: 'جودة متينة',
    description: '[محتوى عربي فريد: مصمم ليتحمل الاستخدام اليومي والغسيل المتكرر مع الحفاظ على المظهر الاحترافي.]'
  },
  {
    icon: UserGroupIcon,
    title: 'ملائم للطلاب',
    description: '[محتوى عربي فريد: ألوان وتصاميم تخلق بيئة ترحيبية مع الحفاظ على الحدود المهنية.]'
  }
]

const teacherStylesAr = [
  {
    title: 'معلمو المرحلة الابتدائية',
    description: '[محتوى عربي فريد: أزياء مريحة وقريبة من الأطفال لمعلمي المدرسة الابتدائية.]',
    features: ['أقمشة ناعمة ومريحة', 'مواد سهلة العناية', 'جيوب عملية', 'ألوان صديقة للطفل'],
    image: '/images/education/teacher-elementary.jpg',
    colors: ['أزرق باستيل', 'أخضر فاتح', 'رمادي دافئ', 'كريمي']
  },
  {
    title: 'معلمو المرحلة المتوسطة',
    description: '[محتوى عربي فريد: ملابس احترافية وعملية للتعليم المتوسط.]',
    features: ['تصميم كاجوال أنيق', 'قطع متعددة الاستخدامات', 'مظهر احترافي', 'قصة مريحة'],
    image: '/images/education/teacher-middle-school.jpg',
    colors: ['أزرق داكن', 'خمري', 'أخضر زيتوني', 'فحمي']
  },
  {
    title: 'معلمو المرحلة الثانوية',
    description: '[محتوى عربي فريد: أزياء راقية توحي بالاحترام والسلطة الأكاديمية.]',
    features: ['تصميم احترافي', 'مظهر يوحي بالخبرة', 'مواد عالية الجودة', 'خيارات رسمية'],
    image: '/images/education/teacher-high-school.jpg',
    colors: ['أسود', 'كحلي', 'رمادي غامق', 'أزرق عميق']
  },
  {
    title: 'معلمو المواد المتخصصة',
    description: '[محتوى عربي فريد: أزياء متخصصة لمختلف المواد والأنشطة التعليمية.]',
    features: ['تصميم مناسب للمادة', 'تصميم وظيفي', 'اعتبارات السلامة', 'خاص بالنشاط'],
    image: '/images/education/teacher-specialist.jpg',
    colors: ['ألوان القسم', 'خاص بالمادة', 'ألوان السلامة']
  }
]

const uniformComponentsAr = [
  {
    item: 'البلوزات والقمصان',
    description: '[محتوى عربي فريد: قطع علوية احترافية بأنماط وألوان متنوعة.]',
    options: ['قمصان بأزرار', 'قمصان بولو', 'بلوزات', 'سترات كارديغان']
  },
  {
    item: 'البناطيل والتنانير',
    description: '[محتوى عربي فريد: قطع سفلية مريحة لمظهر احترافي.]',
    options: ['بناطيل رسمية', 'تنانير بقصة A', 'تنانير ضيقة', 'قصات مريحة']
  },
  {
    item: 'الفساتين',
    description: '[محتوى عربي فريد: فساتين احترافية من قطعة واحدة لسهولة التنسيق.]',
    options: ['فساتين شيفت', 'فساتين بقصة A', 'فساتين ملفوفة', 'طول متوسط (ميدي)']
  },
  {
    item: 'الإكسسوارات',
    description: '[محتوى عربي فريد: إكسسوارات احترافية لإكمال المظهر.]',
    options: ['بطاقات الاسم', 'حاملات البطاقات', 'أوشحة', 'أحزمة']
  }
]

const fabricBenefitsAr = [
  'مقاومة للتجعد لجداول العمل المزدحمة',
  'مقاومة للبقع لأنشطة الفصول الدراسية',
  'تسمح بالتهوية لراحة طوال اليوم',
  'سهلة العناية وقابلة للغسل في الغسالة',
  'ألوان ثابتة لمظهر دائم',
  'أقمشة مطاطية لحرية الحركة'
]

export default function TeacherUniformPageAr() {
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
            <li><span className="text-gray-900" aria-current="page">أزياء المعلمين</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/teacher-hero-background.jpg" 
            alt="أزياء معلمين احترافية للمدارس في المملكة العربية السعودية" 
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
            أزياء معلمين احترافية
          </h1>
          <p className="text-xl text-green-200 mb-10 max-w-3xl mx-auto">
            [محتوى عربي فريد: مكّن المعلمين والمعلمات بأزياء احترافية تجمع بين الراحة والمتانة والأناقة. مصممة للمهنيين المتفانين الذين يشكلون مستقبلنا.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=teacher-uniforms"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر
            </Link>
            <Link
              href="/ar/contact/?subject=استفسار عن زي المعلمين"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
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
              مصممة خصيصًا للمعلمين
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: أزياء المعلمين لدينا مصممة خصيصًا لتلبية الاحتياجات الفريدة للمهنيين في قطاع التعليم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeaturesAr.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أزياء لكل مرحلة تعليمية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: تصاميم أزياء متخصصة مصممة لمختلف المراحل التعليمية وبيئات التدريس.]
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teacherStylesAr.map((style) => (
              <div key={style.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={style.image}
                    alt={`أزياء ${style.title} الاحترافية`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{style.title}</h3>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">الميزات:</h4>
                    <ul className="space-y-1">
                      {style.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" /> {/* ml-2 for RTL */}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">الألوان المتوفرة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
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
              مكونات الزي الكاملة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: كل ما تحتاجه لخزانة ملابس تدريس احترافية متكاملة.]
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
                      <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" /> {/* ml-2 for RTL */}
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
              مزايا الأقمشة الفاخرة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: أزياء المعلمين لدينا مصنوعة من أقمشة عالية الجودة مصممة لمتطلبات التعليم.]
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabricBenefitsAr.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" /> {/* ml-3 for RTL */}
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                لماذا تختار أزياء المعلمين من يونيم؟
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" /> {/* ml-3 for RTL */}
                  <div>
                    <h3 className="font-semibold text-gray-900">هيبة مهنية</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: أسس هيبة الفصل الدراسي مع الحفاظ على سهولة التواصل.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">راحة طوال اليوم</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: مصممة لأيام التدريس الطويلة بأقصى درجات الراحة.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">سهولة الصيانة</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: تعليمات عناية بسيطة للمعلمين المشغولين.]</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">هوية المدرسة</h3>
                    <p className="text-gray-600">[محتوى عربي فريد: خيارات مخصصة لدمج ألوان وشعارات المدرسة.]</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/teacher-benefits-showcase.jpg"
                alt="أزياء معلمين من يونيم تظهر مزايا مثل الراحة والاحترافية"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">أصوات من الفصول الدراسية</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: استمع إلى ما يقوله المعلمون في المملكة العربية السعودية عن أزياء المعلمين من يونيم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/authors/avatar-placeholder.jpg" alt={`صورة المؤلف ${i}`} width={48} height={48} className="rounded-full ml-4" /> {/* ml-4 for RTL */}
                  <div>
                    <p className="font-semibold text-gray-900">اسم المعلم {i}</p>
                    <p className="text-sm text-gray-500">اسم المدرسة, المدينة</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"[محتوى عربي فريد: شهادة إيجابية حول راحة واحترافية ومتانة أزياء المعلمين من يونيم. خاصة بالسياق السعودي إذا أمكن.]"</p>
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

      {/* Related Articles Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قراءات إضافية للمعلمين</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: استكشف رؤى ونصائح حول الملابس المهنية في التعليم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "تأثير ملابس المعلم على تصور الطلاب", slug: "teacher-attire-student-perception", image: "/images/blog/placeholder1.jpg" },
              { title: "اختيار الأقمشة المتينة والمريحة للتدريس اليومي", slug: "fabrics-for-teaching", image: "/images/blog/placeholder2.jpg" },
              { title: "الحفاظ على صورة مهنية في المدارس السعودية", slug: "professional-image-saudi-schools", image: "/images/blog/placeholder-corporate1.jpg" },
            ].map((article) => (
              <div key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={`/ar/blog/${article.slug}/`} className="block">
                  <div className="relative h-40">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 hover:text-green-600">{article.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">اقرأ المزيد &larr;</p> {/* larr for RTL */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            مكّن معلميك مع يونيم
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            [محتوى عربي فريد: تواصل مع متخصصي أزياء التعليم لدينا اليوم لمناقشة احتياجات زي المعلمين الخاصة بمدرستك وإنشاء بيئة تعليمية ملهمة واحترافية في المملكة العربية السعودية.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=teacher-uniforms"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر لزي المعلمين
            </Link>
            <Link
              href="/ar/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
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
          "name": "أزياء معلمين احترافية | يونيم المملكة العربية السعودية",
          "description": "استكشف مجموعة يونيم من أزياء المعلمين الاحترافية، المصممة للراحة والمتانة والمظهر المهيب في المدارس السعودية.",
          "url": "https://uneom.com/ar/shop/education/staff-uniforms/teacher-uniform/",
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
              { "@type": "ListItem", "position": 5, "name": "أزياء المعلمين", "item": "https://uneom.com/ar/shop/education/staff-uniforms/teacher-uniform/" }
            ]
          }
        }) }}
      />
    </div>
  )
}