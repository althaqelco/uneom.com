import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon as LeafIcon, 
  ArrowPathIcon as RecycleIcon, 
  SunIcon,
  BeakerIcon as WaterDropIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  UserIcon,
  ArrowLeftIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الأزياء الطبية المستدامة: الملابس الطبية الصديقة للبيئة | مدونة يونيوم',
  description: 'اكتشف كيف تحول الأزياء الطبية المستدامة صناعة الطب. تعرف على الأقمشة الصديقة للبيئة والتصنيع المستدام والفوائد البيئية في المملكة العربية السعودية.',
  keywords: 'الأزياء الطبية المستدامة, الملابس الطبية الصديقة للبيئة, الرعاية الصحية الخضراء, الأزياء الطبية المستدامة, الرعاية الصحية البيئية, الأزياء الطبية البيئية, الاستدامة السعودية',
  openGraph: {
    title: 'الأزياء الطبية المستدامة: الملابس الطبية الصديقة للبيئة',
    description: 'كيف تشكل المواد الصديقة للبيئة مستقبل الملابس الطبية',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg']}}

const sustainabilityFeatures = [
  {
    icon: LeafIcon,
    title: 'أقمشة القطن العضوي',
    description: 'قطن عضوي معتمد من GOTS يقلل التأثير البيئي بنسبة 91%',
    benefits: ['زراعة خالية من المبيدات', 'مواد قابلة للتحلل', 'الحفاظ على صحة التربة', 'توفير المياه']
  },
  {
    icon: RecycleIcon,
    title: 'البوليستر المعاد تدويره',
    description: 'مصنوع من زجاجات البلاستيك المعاد تدويرها، مما يقلل النفايات واستهلاك الطاقة',
    benefits: ['تقليل النفايات', 'توفير الطاقة', 'تعزيز المتانة', 'فعالية التكلفة']
  },
  {
    icon: WaterDropIcon,
    title: 'الإنتاج الموفر للمياه',
    description: 'عمليات صباغة متقدمة تستخدم مياه أقل بنسبة 70% من الطرق التقليدية',
    benefits: ['توفير المياه', 'تقليل التلوث', 'كفاءة الطاقة', 'تقليل المواد الكيميائية']
  },
  {
    icon: SunIcon,
    title: 'التصنيع بالطاقة الشمسية',
    description: 'مرافق الإنتاج التي تعمل بمصادر الطاقة المتجددة',
    benefits: ['تقليل البصمة الكربونية', 'استخدام الطاقة النظيفة', 'توفير التكاليف', 'حماية البيئة']
  }
]

const environmentalImpact = [
  {
    metric: 'توفير المياه',
    value: '2,700 لتر',
    description: 'لكل زي مقارنة بالإنتاج التقليدي',
    icon: WaterDropIcon
  },
  {
    metric: 'تقليل CO2',
    value: '75%',
    description: 'انبعاثات كربون أقل في التصنيع',
    icon: LeafIcon
  },
  {
    metric: 'تقليل النفايات',
    value: '12 زجاجة',
    description: 'زجاجات بلاستيك معاد تدويرها لكل زي',
    icon: RecycleIcon
  },
  {
    metric: 'توفير الطاقة',
    value: '60%',
    description: 'استهلاك طاقة أقل في الإنتاج',
    icon: SunIcon
  }
]

const sustainableMaterials = [
  {
    name: 'القطن العضوي',
    properties: ['قابل للتنفس', 'مضاد للحساسية', 'قابل للتحلل', 'خالي من المبيدات'],
    applications: ['قمصان الأزياء الطبية', 'معاطف المختبر', 'الملابس الداخلية', 'الإكسسوارات'],
    sustainability: 'معتمد من GOTS، يدعم صحة التربة ورفاهية المزارعين'
  },
  {
    name: 'البوليستر المعاد تدويره',
    properties: ['متين', 'طارد للرطوبة', 'مقاوم للبقع', 'سريع الجفاف'],
    applications: ['بناطيل الأزياء الطبية', 'الجاكيتات', 'الملابس الرياضية', 'الملابس الخارجية'],
    sustainability: 'مصنوع من زجاجات البلاستيك المعاد تدويرها، يقلل نفايات المكبات'
  },
  {
    name: 'ألياف الخيزران',
    properties: ['مضاد للميكروبات', 'مقاوم للأشعة فوق البنفسجية', 'ملمس ناعم', 'منظم لدرجة الحرارة'],
    applications: ['الملابس الداخلية', 'الجوارب', 'الطبقات الأساسية', 'ملابس الراحة'],
    sustainability: 'مورد متجدد سريع النمو، مضاد للميكروبات طبيعياً'
  },
  {
    name: 'خليط القنب',
    properties: ['قوي', 'متين', 'قابل للتنفس', 'مقاوم طبيعياً'],
    applications: ['الأزياء الثقيلة', 'ملابس العمل', 'معدات الحماية', 'الإكسسوارات'],
    sustainability: 'يتطلب مياه قليلة، يحسن جودة التربة'
  }
]

const saudiInitiatives = [
  {
    title: 'أهداف الاستدامة في رؤية 2030',
    description: 'مواءمة استدامة الرعاية الصحية مع الأهداف البيئية الوطنية',
    impact: 'دعم التزام المملكة العربية السعودية بتقليل انبعاثات الكربون بـ 278 مليون طن سنوياً'
  },
  {
    title: 'برنامج الرعاية الصحية الخضراء',
    description: 'مبادرة وزارة الصحة لتعزيز الممارسات المستدامة في المرافق الصحية',
    impact: 'أكثر من 200 مستشفى تشارك في برامج اعتماد الأزياء المستدامة'
  },
  {
    title: 'مبادرة الاقتصاد الدائري',
    description: 'تعزيز إعادة التدوير وتقليل النفايات في سلاسل التوريد للرعاية الصحية',
    impact: 'استهداف تقليل 30% من نفايات النسيج الطبي بحلول 2030'
  }
]

const certifications = [
  {
    name: 'GOTS (المعيار العالمي للنسيج العضوي)',
    description: 'يضمن محتوى الألياف العضوية والمعايير البيئية',
    logo: '/images/certifications/gots-logo.svg'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'يختبر المواد الضارة في النسيج',
    logo: '/images/certifications/oeko-tex-logo.svg'
  },
  {
    name: 'Cradle to Cradle Certified',
    description: 'يقيم المنتجات للسلامة والاستدامة',
    logo: '/images/certifications/c2c-logo.svg'
  },
  {
    name: 'bluesign® approved',
    description: 'يضمن الاستخدام المسؤول للموارد وسلامة العمال',
    logo: '/images/certifications/bluesign-logo.svg'
  }
]

export default function SustainableHealthcareUniformsPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-green-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">25 مايو 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">فريق الاستدامة يونيوم</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              الأزياء الطبية المستدامة:
              <span className="text-green-600 block">المستقبل أخضر</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              اكتشف كيف تحدث المواد الصديقة للبيئة والتصنيع المستدام ثورة في الأزياء الطبية، 
              مما يخلق كوكباً أكثر صحة مع الحفاظ على أعلى معايير الرعاية الطبية في المملكة العربية السعودية.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/shop/medical-scrubs"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                استكشف الأزياء المستدامة
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              التأثير البيئي
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              شاهد الفرق القابل للقياس الذي تحدثه الأزياء الطبية المستدامة لكوكبنا.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {environmentalImpact.map((impact, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {impact.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {impact.metric}
                </h3>
                <p className="text-gray-600 text-sm">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ميزات الابتكار المستدام
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تقنيات متقدمة صديقة للبيئة لا تتنازل عن الجودة أو الأداء.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse mb-6">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">الفوائد الرئيسية:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              دليل المواد المستدامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فهم المواد الصديقة للبيئة التي تحدث ثورة في الأزياء الطبية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sustainableMaterials.map((material, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {material.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">الخصائص:</p>
                    <div className="flex flex-wrap gap-2">
                      {material.properties.map((property, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {property}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">التطبيقات:</p>
                    <div className="flex flex-wrap gap-2">
                      {material.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">الاستدامة:</p>
                    <p className="text-sm text-gray-600">{material.sustainability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Arabia Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              رؤية المملكة العربية السعودية للرعاية الصحية الخضراء
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              كيف تقود المملكة تحول الرعاية الصحية المستدامة في المنطقة.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {saudiInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {initiative.description}
                </p>
                <p className="text-sm text-green-700 font-medium">
                  التأثير: {initiative.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              شهادات الاستدامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              المعايير الدولية التي تضمن أعلى مستويات المسؤولية البيئية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <GlobeAltIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Healthcare Facilities */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              فوائد للمرافق الصحية
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              الأزياء المستدامة تقدم مزايا متعددة تتجاوز الحماية البيئية.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LeafIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  توفير التكاليف
                </h3>
                <p className="text-gray-600 text-sm">
                  المواد المتينة تقلل تكرار الاستبدال، مما يخفض التكاليف طويلة المدى بنسبة تصل إلى 40%.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  رضا الموظفين
                </h3>
                <p className="text-gray-600 text-sm">
                  الأقمشة المريحة والقابلة للتنفس تحسن راحة الموظفين والرضا الوظيفي.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  سمعة العلامة التجارية
                </h3>
                <p className="text-gray-600 text-sm">
                  إظهار المسؤولية البيئية وجذب المرضى والموظفين المهتمين بالبيئة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            انضم إلى ثورة الرعاية الصحية المستدامة
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            تشارك مع يونيوم لتنفيذ حلول الأزياء المستدامة التي تفيد مرفقك وموظفيك والبيئة. 
            اصنع تأثيراً إيجابياً اليوم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              احصل على عرض سعر مستدام
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              عرض المجموعة البيئية
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مقالات ذات صلة
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/ar/blog/medical-textile-innovation" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="ابتكارات النسيج الطبي"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    ابتكارات النسيج الطبي
                  </h3>
                  <p className="text-gray-600 text-sm">
                    استكشف الابتكارات المتطورة في النسيج الطبي والاستدامة.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/blog/healthcare-compliance-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="دليل الامتثال للرعاية الصحية"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    دليل الامتثال للرعاية الصحية
                  </h3>
                  <p className="text-gray-600 text-sm">
                    متطلبات الامتثال الأساسية بما في ذلك معايير الاستدامة.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/resources/sustainability-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <LeafIcon className="h-16 w-16 text-green-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    دليل الاستدامة
                  </h3>
                  <p className="text-gray-600 text-sm">
                    دليل شامل لتنفيذ الممارسات المستدامة في الرعاية الصحية.
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