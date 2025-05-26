import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  ArrowLeftIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'ابتكارات النسيج الطبي: مستقبل الأزياء الطبية | مدونة يونيوم',
  description: 'استكشف أحدث الابتكارات في النسيج الطبي التي تحدث ثورة في الأزياء الطبية. من الأقمشة المضادة للميكروبات إلى النسيج الذكي، اكتشف كيف تحول التكنولوجيا الملابس الطبية في المملكة العربية السعودية.',
  keywords: 'ابتكارات النسيج الطبي, الأزياء الطبية, الأقمشة المضادة للميكروبات, النسيج الذكي, التكنولوجيا الطبية, الملابس الطبية, الأزياء الطبية السعودية, تكنولوجيا النسيج',
  openGraph: {
    title: 'ابتكارات النسيج الطبي: مستقبل الأزياء الطبية',
    description: 'اكتشف كيف تحدث ابتكارات النسيج المتطورة ثورة في الأزياء الطبية',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const innovations = [
  {
    icon: ShieldCheckIcon,
    title: 'تقنية مضادة للميكروبات',
    description: 'معالجات متقدمة بجسيمات الفضة النانوية تقضي على 99.9% من البكتيريا والفيروسات',
    benefits: ['مكافحة العدوى', 'منع الروائح', 'إطالة فترة الارتداء', 'سلامة المرضى']
  },
  {
    icon: CpuChipIcon,
    title: 'تكامل النسيج الذكي',
    description: 'أجهزة استشعار مدمجة تراقب العلامات الحيوية والظروف البيئية',
    benefits: ['المراقبة الفورية', 'جمع البيانات', 'تتبع الصحة', 'تحسين الأداء']
  },
  {
    icon: SparklesIcon,
    title: 'الأقمشة ذاتية التنظيف',
    description: 'طلاءات محفزة ضوئياً تكسر البقع والملوثات باستخدام الضوء',
    benefits: ['تقليل الصيانة', 'توفير التكاليف', 'تحسين النظافة', 'الاستدامة']
  },
  {
    icon: BeakerIcon,
    title: 'إدارة الرطوبة',
    description: 'تقنية متقدمة لامتصاص الرطوبة تحافظ على جفاف وراحة العاملين الصحيين',
    benefits: ['تنظيم درجة الحرارة', 'تعزيز الراحة', 'إدارة العرق', 'صحة الجلد']
  }
]

const futureInnovations = [
  {
    title: 'مؤشرات تغيير اللون',
    description: 'أقمشة تغير لونها للإشارة إلى التلوث أو تغيرات درجة الحرارة',
    timeline: '2025-2026'
  },
  {
    title: 'الاتصال المتكامل',
    description: 'أنظمة اتصال مدمجة للتنسيق في المستشفى بدون استخدام اليدين',
    timeline: '2026-2027'
  },
  {
    title: 'المصادقة البيومترية',
    description: 'أزياء مع أجهزة استشعار بيومترية مدمجة للتحكم الآمن في الوصول',
    timeline: '2027-2028'
  },
  {
    title: 'أنظمة الراحة التكيفية',
    description: 'أزياء مكيفة تتكيف تلقائياً مع درجة حرارة الجسم',
    timeline: '2028-2029'
  }
]

const caseStudies = [
  {
    hospital: 'مستشفى الملك فيصل التخصصي',
    challenge: 'معدلات عدوى عالية في العناية المركزة',
    solution: 'تطبيق الأزياء المضادة للميكروبات',
    result: 'انخفاض 40% في العدوى المرتبطة بالرعاية الصحية',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'
  },
  {
    hospital: 'مستشفى الحرس الوطني',
    challenge: 'راحة الموظفين خلال المناوبات الطويلة',
    solution: 'إدخال الأقمشة الذكية الماصة للرطوبة',
    result: 'تحسن 60% في تقييمات راحة الموظفين',
    image: '/images/doctor-SBI-300813580.jpg'
  }
]

export default function MedicalTextileInnovationPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">25 مايو 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">فريق البحث يونيوم</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              ابتكارات النسيج الطبي:
              <span className="text-blue-600 block">مستقبل الرعاية الصحية</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              اكتشف كيف تحدث ابتكارات النسيج المتطورة ثورة في الأزياء الطبية، وتعزز السلامة 
              والراحة والأداء للمهنيين الطبيين في جميع أنحاء المملكة العربية السعودية.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/shop/medical-scrubs"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                استكشف الأزياء الطبية
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  الثورة في النسيج الطبي
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  تشهد صناعة الرعاية الصحية ثورة في النسيج. علوم المواد المتقدمة وتكنولوجيا النانو 
                  تحول طريقة تفكيرنا في الأزياء الطبية، مما يخلق ملابس لا تحمي فقط - بل تساهم 
                  بنشاط في رعاية المرضى ورفاهية الموظفين.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  في قطاع الرعاية الصحية السعودي سريع التطور، هذه الابتكارات مهمة بشكل خاص 
                  حيث تسعى المستشفيات لتلبية المعايير الدولية مع معالجة التحديات الإقليمية الفريدة 
                  مثل المناخ والمتطلبات الثقافية.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="مهني طبي يرتدي زي رعاية صحية مبتكر"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Innovations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الابتكارات النسيجية الحالية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تدمج النسيج الطبي اليوم تقنيات متقدمة كانت تعتبر في يوم من الأيام خيال علمي.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <innovation.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {innovation.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">الفوائد الرئيسية:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {innovation.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              التأثير في العالم الحقيقي
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              شاهد كيف تستفيد المستشفيات السعودية بالفعل من ابتكارات النسيج.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src={study.image}
                    alt={`دراسة حالة في ${study.hospital}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {study.hospital}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-red-600">التحدي:</p>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600">الحل:</p>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-600">النتيجة:</p>
                      <p className="text-gray-700 font-semibold">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مستقبل النسيج الطبي
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              الابتكارات القادمة التي ستحول الأزياء الطبية أكثر.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {futureInnovations.map((innovation, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {innovation.title}
                      </h3>
                      <p className="text-gray-600">
                        {innovation.description}
                      </p>
                    </div>
                    <div className="mr-6 text-left">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {innovation.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Arabia Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                الابتكار في الرعاية الصحية السعودية
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                كيف تتماشى ابتكارات النسيج مع أهداف الرعاية الصحية لرؤية السعودية 2030.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightBulbIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  البحث والتطوير
                </h3>
                <p className="text-gray-600 text-sm">
                  الجامعات السعودية ومراكز البحث تقود تقنيات النسيج الجديدة 
                  خصيصاً لتطبيقات الرعاية الصحية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  معايير الجودة
                </h3>
                <p className="text-gray-600 text-sm">
                  تطبيق معايير الجودة الدولية يضمن أن الأزياء الطبية السعودية 
                  تلبي معايير التميز العالمية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  تكامل التكنولوجيا
                </h3>
                <p className="text-gray-600 text-sm">
                  المستشفيات الذكية تدمج ابتكارات النسيج كجزء من النظم البيئية 
                  الصحية الرقمية الشاملة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            اختبر مستقبل الأزياء الطبية
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            تشارك مع يونيوم لجلب ابتكارات النسيج المتطورة إلى مرفق الرعاية الصحية الخاص بك. 
            عزز السلامة والراحة والأداء مع أزيائنا الطبية المتقدمة.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              احصل على عرض سعر للابتكار
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              عرض المجموعة الطبية
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مقالات ذات صلة
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/ar/blog/healthcare-compliance-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="دليل الامتثال للرعاية الصحية"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    دليل الامتثال للرعاية الصحية
                  </h3>
                  <p className="text-gray-600 text-sm">
                    متطلبات الامتثال الأساسية للأزياء الطبية في المملكة العربية السعودية.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/blog/sustainable-healthcare-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="الأزياء الطبية المستدامة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    الأزياء الطبية المستدامة
                  </h3>
                  <p className="text-gray-600 text-sm">
                    كيف تشكل المواد الصديقة للبيئة مستقبل الملابس الطبية.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/shop/medical-scrubs/antimicrobial-scrubs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="الأزياء الطبية المضادة للميكروبات"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    الأزياء المضادة للميكروبات
                  </h3>
                  <p className="text-gray-600 text-sm">
                    استكشف مجموعتنا من الأزياء الطبية المضادة للميكروبات.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}