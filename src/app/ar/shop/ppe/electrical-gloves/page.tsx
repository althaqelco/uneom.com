import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'قفازات السلامة الكهربائية | معدات الحماية الشخصية المهنية | يونيم السعودية',
  description: 'توفر يونيم قفازات السلامة الكهربائية عالية الجودة للمهنيين في المملكة العربية السعودية. قفازات مصنفة من الفئة 0 و 1 و 2 تلبي معايير السلامة الدولية. اطلب عرض سعر!',
  keywords: 'قفازات السلامة الكهربائية السعودية, قفازات PPE KSA, قفازات الحماية الكهربائية الرياض, قفازات السلامة المعزولة جدة, قفازات العمل الكهربائي الدمام',
  openGraph: {
    title: 'قفازات السلامة الكهربائية من يونيم | حماية معدات الوقاية الشخصية المهنية',
    description: 'احم عمالك الكهربائيين بقفازات السلامة المعتمدة من يونيم. تلبي المعايير الدولية للحماية الكهربائية في المملكة العربية السعودية.',
    images: ['/images/ppe/electrical-gloves-og.jpg'],
    locale: 'ar_SA',
    siteName: 'UNEOM'},
  alternates: {
    canonical: '/ar/shop/ppe/electrical-gloves/',
    languages: {
      'ar-SA': '/ar/shop/ppe/electrical-gloves/',
      'en-US': '/shop/ppe/electrical-gloves/'}}}

const safetyFeaturesAr = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية معتمدة',
    description: '[محتوى عربي فريد: تلبي معايير ASTM D120 و IEC 60903 الدولية للسلامة والحماية الكهربائية.]'
  },
  {
    icon: BoltIcon,
    title: 'مصنفة حسب الجهد',
    description: '[محتوى عربي فريد: متوفرة بتصنيفات الفئة 0 و 1 و 2 لمستويات حماية جهد مختلفة.]'
  },
  {
    icon: HandRaisedIcon,
    title: 'تصميم مريح',
    description: '[محتوى عربي فريد: ملاءمة مريحة ومرونة للعمل الكهربائي الدقيق والارتداء المطول.]'
  },
  {
    icon: CogIcon,
    title: 'بناء متين',
    description: '[محتوى عربي فريد: مواد مطاطية عالية الجودة مقاومة للأوزون والأحماض والمواد الكيميائية الأخرى.]'
  }
]

const gloveClassesAr = [
  {
    class: 'الفئة 0',
    voltage: 'حتى 1,000 فولت تيار متردد / 1,500 فولت تيار مستمر',
    applications: ['أعمال كهربائية منخفضة الجهد', 'أنظمة كهربائية سكنية', 'صيانة كهربائية أساسية'],
    image: '/images/ppe/electrical-gloves-class0.jpg',
    color: 'أحمر',
    thickness: '0.5 مم كحد أدنى'
  },
  {
    class: 'الفئة 1',
    voltage: 'حتى 7,500 فولت تيار متردد / 11,250 فولت تيار مستمر',
    applications: ['أعمال كهربائية متوسطة الجهد', 'أنظمة كهربائية صناعية', 'أعمال توزيع الطاقة'],
    image: '/images/ppe/electrical-gloves-class1.jpg',
    color: 'أبيض',
    thickness: '1.0 مم كحد أدنى'
  },
  {
    class: 'الفئة 2',
    voltage: 'حتى 17,000 فولت تيار متردد / 25,500 فولت تيار مستمر',
    applications: ['أعمال كهربائية عالية الجهد', 'خطوط الطاقة المرافقية', 'صيانة المحطات الفرعية'],
    image: '/images/ppe/electrical-gloves-class2.jpg',
    color: 'أصفر',
    thickness: '1.5 مم كحد أدنى'
  }
]

const safetyStandardsAr = [
  'ASTM D120 - المواصفة القياسية لقفازات العزل المطاطية',
  'IEC 60903 - العمل المباشر - قفازات من مواد عازلة',
  'OSHA 1910.137 - معدات الحماية الكهربائية',
  'NFPA 70E - معيار السلامة الكهربائية في مكان العمل',
  'معايير الساسو السعودية لمعدات الحماية الشخصية'
]

const inspectionChecklistAr = [
  'فحص بصري للجروح أو الثقوب أو الأجسام الغريبة المدمجة',
  'اختبار نفخ الهواء للتحقق من التسريبات أو النقاط الضعيفة',
  'التحقق من علامة فئة الجهد المناسبة',
  'فحص تاريخ انتهاء الصلاحية وشهادة الاختبار',
  'التأكد من الحفاظ على ظروف التخزين المناسبة'
]

export default function ElectricalGlovesPageAr() {
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
            <li><Link href="/ar/shop/ppe/" className="hover:text-blue-600">معدات الحماية الشخصية</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><span className="text-gray-900" aria-current="page">قفازات السلامة الكهربائية</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-yellow-600 to-orange-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/ppe/electrical-gloves-hero.jpg"
            alt="قفازات السلامة الكهربائية المهنية لحماية مكان العمل في المملكة العربية السعودية"
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
            قفازات السلامة الكهربائية
          </h1>
          <p className="text-xl text-yellow-200 mb-10 max-w-3xl mx-auto">
            [محتوى عربي فريد: قفازات السلامة الكهربائية ذات الجودة المهنية المصممة لحماية العمال من المخاطر الكهربائية. معتمدة وفقًا للمعايير الدولية ومتوفرة في فئات جهد متعددة للحماية الكهربائية الشاملة.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=electrical-safety-gloves"
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              اطلب عرض سعر
            </Link>
            <Link
              href="/ar/contact/?subject=استفسار عن قفازات السلامة الكهربائية"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors text-lg"
            >
              تواصل مع خبير السلامة
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ميزات السلامة المتقدمة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: تتضمن قفازات السلامة الكهربائية لدينا تقنية السلامة المتطورة لتوفير أقصى حماية للعمال الكهربائيين.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeaturesAr.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glove Classes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تصنيفات القفازات الكهربائية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: اختر مستوى الحماية المناسب لبيئة عملك الكهربائية مع مجموعتنا من فئات القفازات المعتمدة.]
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gloveClassesAr.map((glove) => (
              <div key={glove.class} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={glove.image}
                    alt={`قفازات السلامة الكهربائية ${glove.class} للحماية من ${glove.voltage}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{glove.class}</h3>
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {glove.voltage}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">التطبيقات:</h4>
                    <ul className="space-y-1">
                      {glove.applications.map((app, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">اللون:</span>
                      <p className="text-gray-600">{glove.color}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">السماكة:</span>
                      <p className="text-gray-600">{glove.thickness}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                الامتثال لمعايير السلامة الدولية
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                [محتوى عربي فريد: تلبي قفازات السلامة الكهربائية لدينا وتتجاوز أصرم معايير السلامة الدولية، مما يضمن أقصى حماية للعمال الكهربائيين في المملكة العربية السعودية.]
              </p>
              <ul className="space-y-3">
                {safetyStandardsAr.map((standard, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 ml-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ppe/electrical-safety-standards.jpg"
                alt="شهادة معايير السلامة الكهربائية الدولية لقفازات معدات الحماية الشخصية"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Guidelines */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              إرشادات الفحص قبل الاستخدام
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: الفحص المناسب لقفازات السلامة الكهربائية قبل كل استخدام أمر بالغ الأهمية لسلامة العمال والامتثال.]
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 ml-3" />
              <h3 className="text-xl font-semibold text-gray-900">فحوصات السلامة المطلوبة</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inspectionChecklistAr.map((item, index) => (
                <div key={index} className="flex items-start">
                  <ClipboardDocumentListIcon className="h-5 w-5 text-blue-500 ml-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>مهم:</strong> [محتوى عربي فريد: يجب اختبار قفازات السلامة الكهربائية كل 6 أشهر من قبل مختبر اختبار مؤهل. لا تستخدم أبدًا القفازات التي تجاوزت فترة الاختبار أو تظهر أي علامات تلف.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">موثوق به من قبل متخصصي السلامة</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [محتوى عربي فريد: تعرف على سبب ثقة المهنيين الكهربائيين في جميع أنحاء المملكة العربية السعودية في يونيم لاحتياجات معدات السلامة الخاصة بهم.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "المهندس محمد الراشد", company: "شركة الكهرباء السعودية، الرياض", quote: "[محتوى عربي فريد: شهادة حول موثوقية وجودة قفازات السلامة الكهربائية من يونيم في بيئات العمل عالية الجهد.]" },
              { name: "أحمد الزهراني", company: "صيانة سابك الصناعية، الجبيل", quote: "[محتوى عربي فريد: شهادة تركز على راحة ومرونة القفازات أثناء أعمال الصيانة الكهربائية المطولة.]" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/authors/avatar-placeholder.jpg" alt={`شهادة من ${testimonial.name}`} width={48} height={48} className="rounded-full ml-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
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
      <section className="py-16 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            احم عمالك الكهربائيين مع يونيم
          </h2>
          <p className="text-xl text-yellow-200 mb-8 max-w-2xl mx-auto">
            [محتوى عربي فريد: اضمن سلامة مكان العمل مع قفازات السلامة الكهربائية المعتمدة لدينا. تواصل مع متخصصي معدات الحماية الشخصية لدينا للعثور على الحماية المناسبة لبيئة عملك الكهربائية.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=electrical-safety-gloves"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض سعر لمعدات الحماية الشخصية
            </Link>
            <Link
              href="/ar/shop/ppe/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors text-lg"
            >
              تصفح جميع منتجات معدات الحماية الشخصية
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "قفازات السلامة الكهربائية",
          "description": "قفازات السلامة الكهربائية ذات الجودة المهنية المصممة لحماية العمال من المخاطر الكهربائية. متوفرة بتصنيفات جهد الفئة 0 و 1 و 2.",
          "brand": {
            "@type": "Brand",
            "name": "UNEOM"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "UNEOM",
            "url": "https://uneom.com/ar/"
          },
          "category": "معدات الحماية الشخصية",
          "image": "https://uneom.com/images/ppe/electrical-gloves-og.jpg",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "seller": {
              "@type": "Organization",
              "name": "UNEOM"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          },
          "inLanguage": "ar-SA"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://uneom.com/ar/" },
            { "@type": "ListItem", "position": 2, "name": "المتجر", "item": "https://uneom.com/ar/shop/" },
            { "@type": "ListItem", "position": 3, "name": "معدات الحماية الشخصية", "item": "https://uneom.com/ar/shop/ppe/" },
            { "@type": "ListItem", "position": 4, "name": "قفازات السلامة الكهربائية", "item": "https://uneom.com/ar/shop/ppe/electrical-gloves/" }
          ]
        }) }}
      />
    </div>
  )
}