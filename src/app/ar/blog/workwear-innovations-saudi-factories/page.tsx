import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  LightBulbIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  ArrowLeftIcon, // For RTL
  CalendarIcon,
  UserIcon,
  SparklesIcon,
  FireIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'ابتكارات ملابس العمل للمصانع السعودية: تعزيز السلامة والإنتاجية | UNEOM',
  description: 'استكشف أحدث ابتكارات ملابس العمل التي تُحدث تحولاً في المصانع السعودية. تعرف على الأقمشة الذكية، التصاميم المريحة، وتقنيات تعزيز السلامة للزي الصناعي.',
  keywords: 'ابتكارات ملابس العمل, المصانع السعودية, الزي الصناعي, الأقمشة الذكية, ملابس عمل مريحة, سلامة المصانع, الصناعة السعودية, رؤية 2030 التصنيع',
  openGraph: {
    title: 'ابتكارات ملابس العمل للمصانع السعودية | UNEOM',
    description: 'اكتشف كيف تُحدث ملابس العمل المتقدمة ثورة في السلامة والإنتاجية بالمصانع السعودية.',
    images: ['/images/manufacturing/workwear-innovations-saudi-factories.jpg'],
  },
}

const innovations = [
  {
    icon: CpuChipIcon,
    title: 'الأقمشة الذكية والتقنيات القابلة للارتداء',
    description: 'دمج أجهزة الاستشعار وإنترنت الأشياء في ملابس العمل للمراقبة الفورية لصحة العامل، المخاطر البيئية، وتتبع الموقع.',
    benefits: ['تعزيز سلامة العامل', 'الكشف الاستباقي عن المخاطر', 'تحسين الاتصال', 'اتخاذ قرارات مبنية على البيانات'],
    image: '/images/manufacturing/smart-fabric-workwear.jpg',
    color: 'blue'
  },
  {
    icon: ShieldCheckIcon,
    title: 'مواد حماية متقدمة',
    description: 'تطوير مواد جديدة توفر حماية فائقة ضد الحرارة، الحريق، المواد الكيميائية، والمخاطر الميكانيكية مع الحفاظ على خفة الوزن والراحة.',
    benefits: ['مستويات حماية معززة', 'تقليل مخاطر الإصابة', 'تحسين الراحة والحركة', 'عمر أطول للملابس'],
    image: '/images/manufacturing/advanced-protective-materials.jpg',
    color: 'green'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'التصميم المريح والمتمحور حول الإنسان',
    description: 'ملابس عمل مصممة مع التركيز على العوامل البشرية، مما يحسن الراحة، يقلل الإجهاد، ويعزز قدرة العامل على أداء المهام بكفاءة وأمان.',
    benefits: ['تقليل الاضطرابات العضلية الهيكلية', 'زيادة الإنتاجية', 'تحسين معنويات العمال', 'قابلية التكيف مع مختلف أنواع الأجسام'],
    image: '/images/manufacturing/ergonomic-workwear-design.jpg',
    color: 'purple'
  },
  {
    icon: SparklesIcon,
    title: 'ملابس عمل مستدامة وصديقة للبيئة',
    description: 'توجه متزايد نحو استخدام المواد المعاد تدويرها، عمليات التصنيع الصديقة للبيئة، وتصميم ملابس عمل متينة لاقتصاد دائري.',
    benefits: ['تقليل الأثر البيئي', 'التوافق مع أهداف المسؤولية الاجتماعية للشركات', 'توفير التكاليف من خلال المتانة', 'صورة إيجابية للعلامة التجارية'],
    image: '/images/manufacturing/sustainable-workwear-materials.jpg',
    color: 'teal'
  }
]

const saudiContext = [
  {
    title: 'التوافق مع رؤية 2030',
    description: 'تؤكد رؤية المملكة 2030 على التنمية الصناعية ورفاهية العاملين، مما يزيد الطلب على حلول ملابس العمل المتقدمة.',
    icon: BuildingOffice2Icon,
    points: [
      'التركيز على نمو القطاع غير النفطي',
      'التأكيد على التوطين وتنمية المواهب المحلية',
      'تبني أفضل الممارسات الدولية في السلامة'
    ]
  },
  {
    title: 'اعتبارات المناخ',
    description: 'يتطلب المناخ السعودي القاسي ملابس عمل توفر الحماية مع ضمان الراحة الحرارية والتهوية.',
    icon: FireIcon,
    points: [
      'ميزات إدارة الإجهاد الحراري',
      'أقمشة ماصة للرطوبة ومبردة',
      'حماية من الأشعة فوق البنفسجية للعاملين في الهواء الطلق'
    ]
  },
  {
    title: 'احتياجات الصناعات المحددة',
    description: 'الصناعات المتنوعة مثل البتروكيماويات، البناء، والتصنيع لها متطلبات فريدة لملابس العمل.',
    icon: BoltIcon,
    points: [
      'ملابس مقاومة للمواد الكيميائية لقطاع البتروكيماويات',
      'ملابس عالية الوضوح ومتينة للبناء',
      'ملابس مضادة للكهرباء الساكنة وغرف نظيفة للتصنيع المتخصص'
    ]
  }
]

const futureTrends = [
  'تنبؤ بالمخاطر مدعوم بالذكاء الاصطناعي مدمج في الزي الرسمي',
  'ملابس عمل متوافقة مع الهياكل الخارجية لدعم الرفع الثقيل',
  'مستشعرات حيوية لمراقبة الإجهاد والتعب',
  'زي موحد شخصي ومخصص باستخدام المسح ثلاثي الأبعاد',
  'برامج إعادة تدوير مغلقة الحلقة لملابس العمل الصناعية'
]

export default function WorkwearInnovationsSaudiFactoriesPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacturing/factory-background-blur.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-300 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">26 مايو 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">فريق الحلول الصناعية في UNEOM</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              ابتكارات ملابس العمل
              <span className="block text-blue-400">تحول المصانع السعودية</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-10">
              استكشف أحدث التطورات في ملابس العمل الصناعية، التي تعزز السلامة والإنتاجية ورفاهية العاملين في قطاع التصنيع الديناميكي بالمملكة العربية السعودية.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/shop/industrial-uniforms"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                تصفح الزي الصناعي
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 text-lg"
              >
                استشر خبرائنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  المشهد المتطور لملابس العمل الصناعية
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  يشهد قطاع التصنيع في المملكة العربية السعودية تطوراً سريعاً، مدفوعاً برؤية 2030 والالتزام بالتقدم التكنولوجي. لم تعد ملابس العمل تقتصر على الحماية الأساسية؛ بل أصبحت جزءاً لا يتجزأ من نظام بيئي صناعي أكثر ذكاءً وأماناً وإنتاجية.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  تتلاقى الابتكارات في علوم المواد، والتقنيات القابلة للارتداء، والتصميم المريح لإنشاء جيل جديد من الزي الرسمي الذي يساهم بفعالية في أداء العمال ورفاهيتهم.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/manufacturing/workwear-innovations-saudi-factories.jpg"
                    alt="ملابس عمل مبتكرة في مصنع سعودي"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              أبرز ابتكارات ملابس العمل
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اكتشف التقنيات وفلسفات التصميم التي تشكل مستقبل زي المصانع.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {innovations.map((innovation, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-t-4 border-${innovation.color}-500`}>
                <div className="relative h-64 w-full">
                  <Image
                    src={innovation.image}
                    alt={innovation.title}
                    fill
                    className="object-cover"
                  />
                   <div className="absolute top-4 left-4 bg-blue-500 p-3 rounded-full shadow-md"> {/* Changed right to left for RTL */}
                    <innovation.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-800">الفوائد الرئيسية:</p>
                    <ul className="space-y-2">
                      {innovation.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ShieldCheckIcon className={`h-5 w-5 text-${innovation.color}-500 ml-2 flex-shrink-0`} /> {/* Changed mr to ml for RTL */}
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Context Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              الابتكارات في السياق السعودي
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مواجهة التحديات والفرص الفريدة داخل القطاع الصناعي في المملكة.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {saudiContext.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 p-3 rounded-full ml-4"> {/* Changed mr to ml for RTL */}
                     <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                     <li key={idx} className="flex items-start text-gray-600">
                        <ArrowLeftIcon className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" /> {/* Changed mr to ml and ArrowRight to ArrowLeft for RTL */}
                        {point}
                      </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Trends Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              مستقبل ملابس العمل في المصانع
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              لمحة عن الموجة التالية من الابتكارات التي ستعيد تعريف السلامة والأداء الصناعي.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {futureTrends.map((trend, index) => (
                <li key={index} className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center hover:bg-gray-600 transition-colors duration-300">
                  <LightBulbIcon className="h-8 w-8 text-blue-400 ml-4 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                  <span className="text-lg">{trend}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            جهز مصنعك السعودي بملابس عمل مبتكرة
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            شارك مع UNEOM للاستفادة من أحدث ابتكارات ملابس العمل. عزز السلامة، زد الإنتاجية، وتوافق مع أهداف رؤية 2030 لمنشأتك الصناعية في المملكة العربية السعودية.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/ar/quote"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg shadow-md"
            >
              اطلب عرض سعر مخصص
            </Link>
            <Link
              href="/ar/services/custom-design"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              تعرف على الحلول المخصصة
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              قراءات إضافية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              استكشف المزيد من الأفكار حول السلامة الصناعية وملابس العمل.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/ar/blog/safety-standards-saudi-manufacturing" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/manufacturing/saudi-safety-standards.jpg" alt="معايير السلامة السعودية" fill className="object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">معايير السلامة في التصنيع السعودي</h3>
                <p className="text-gray-700 text-sm mb-4">دليل شامل لمتطلبات SASO وأفضل الممارسات.</p>
                <span className="text-blue-600 font-semibold hover:underline">اقرأ المزيد &larr;</span> {/* Changed arrow for RTL */}
              </div>
            </Link>
            <Link href="/ar/blog/industrial-protective-clothing-advances" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/manufacturing/protective-clothing.jpg" alt="تطورات الملابس الواقية الصناعية" fill className="object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">تطورات الملابس الواقية الصناعية</h3>
                <p className="text-gray-700 text-sm mb-4">كيف تعزز المواد والتقنيات الجديدة حماية العاملين.</p>
                <span className="text-blue-600 font-semibold hover:underline">اقرأ المزيد &larr;</span> {/* Changed arrow for RTL */}
              </div>
            </Link>
            <Link href="/ar/shop/industrial-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/industrial/heavy-duty-coverall-featured.jpg"
                    alt="أفرول صناعي شديد التحمل"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">أفرول صناعي شديد التحمل</h3>
                  <p className="text-gray-700 text-sm mb-4">استكشف مجموعتنا من الأفرولات المتينة والواقية للبيئات الصعبة.</p>
                  <span className="text-blue-600 font-semibold hover:underline">عرض المنتج &larr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}