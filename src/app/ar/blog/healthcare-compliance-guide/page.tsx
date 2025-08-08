import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  UserIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'دليل الامتثال للرعاية الصحية: معايير الأزياء الطبية في السعودية | يونيوم',
  description: 'دليل شامل للامتثال للرعاية الصحية ومعايير الأزياء الطبية في المملكة العربية السعودية. تعرف على اللوائح ومتطلبات الجودة وأفضل الممارسات للمرافق الصحية.',
  keywords: 'الامتثال للرعاية الصحية, معايير الأزياء الطبية, لوائح الرعاية الصحية السعودية, امتثال الملابس الطبية, معايير جودة الرعاية الصحية, إرشادات الأزياء الطبية',
  openGraph: {
    title: 'دليل الامتثال للرعاية الصحية: معايير الأزياء الطبية في السعودية',
    description: 'متطلبات الامتثال الأساسية للأزياء الطبية في المرافق الصحية السعودية',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg']}}

const complianceAreas = [
  {
    icon: ShieldCheckIcon,
    title: 'معايير مكافحة العدوى',
    description: 'المعالجات المضادة للميكروبات ومواصفات الأقمشة وبروتوكولات منع التلوث',
    requirements: [
      'شهادة معالجة الأقمشة المضادة للميكروبات',
      'مواصفات المواد المقاومة للسوائل',
      'ترميز الألوان للأقسام المختلفة',
      'بروتوكولات الاختبار والتحقق المنتظمة'
    ]
  },
  {
    icon: DocumentCheckIcon,
    title: 'شهادات الجودة',
    description: 'معايير الجودة الدولية والمحلية للنسيج الطبي والتصنيع',
    requirements: [
      'إدارة جودة الأجهزة الطبية ISO 13485',
      'شهادة OEKO-TEX Standard 100',
      'امتثال مؤسسة المواصفات السعودية (SASO)',
      'علامة CE للأجهزة الطبية'
    ]
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'متطلبات التوثيق',
    description: 'التوثيق المناسب وإمكانية التتبع لعمليات تدقيق الامتثال',
    requirements: [
      'شهادات تركيب المواد',
      'توثيق عمليات التصنيع',
      'نتائج اختبارات مراقبة الجودة',
      'سجلات تأهيل الموردين'
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'بروتوكولات السلامة',
    description: 'معايير سلامة العمال وحماية المرضى',
    requirements: [
      'أوراق بيانات السلامة الكيميائية',
      'شهادة المواد الخالية من المواد المسببة للحساسية',
      'مواصفات مقاومة الحريق',
      'التحقق من التصميم المريح'
    ]
  }
]

const regulatoryBodies = [
  {
    name: 'وزارة الصحة',
    role: 'المنظم الأساسي للرعاية الصحية',
    requirements: 'ترخيص المرافق الصحية والمعايير التشغيلية',
    contact: 'www.moh.gov.sa'
  },
  {
    name: 'الهيئة العامة للغذاء والدواء',
    role: 'تنظيم الأجهزة الطبية',
    requirements: 'تصنيف واعتماد النسيج الطبي',
    contact: 'www.sfda.gov.sa'
  },
  {
    name: 'مؤسسة المواصفات والمقاييس السعودية',
    role: 'تطوير المعايير الوطنية',
    requirements: 'معايير الجودة وتقييم المطابقة',
    contact: 'www.saso.gov.sa'
  },
  {
    name: 'المجلس المركزي لاعتماد المؤسسات الصحية',
    role: 'اعتماد الرعاية الصحية',
    requirements: 'معايير الجودة والسلامة للمرافق الصحية',
    contact: 'www.cbahi.gov.sa'
  }
]

const complianceChecklist = [
  {
    category: 'مواصفات المواد',
    items: [
      'شهادة المعالجة المضادة للميكروبات',
      'توثيق تركيب الأقمشة',
      'نتائج اختبار ثبات اللون',
      'اختبار الانكماش والمتانة',
      'امتثال السلامة الكيميائية'
    ]
  },
  {
    category: 'معايير التصنيع',
    items: [
      'شهادة ISO 13485',
      'ممارسات التصنيع الجيدة (GMP)',
      'إجراءات مراقبة الجودة',
      'أنظمة إمكانية التتبع',
      'تأهيل الموردين'
    ]
  },
  {
    category: 'متطلبات التصميم',
    items: [
      'التحقق من التصميم المريح',
      'وضع الجيوب الوظيفية',
      'معايير التغطية المناسبة',
      'امتثال الحساسية الثقافية',
      'كفاية نطاق الأحجام'
    ]
  },
  {
    category: 'الاختبار والتحقق',
    items: [
      'اختبار فعالية مضادات الميكروبات',
      'اختبار مقاومة السوائل',
      'تقييم الراحة وقابلية التنفس',
      'اختبار المتانة والغسيل',
      'التحقق من قبول المستخدم'
    ]
  }
]

const bestPractices = [
  {
    title: 'عمليات التدقيق المنتظمة للامتثال',
    description: 'إجراء مراجعات ربع سنوية للامتثال لضمان الالتزام المستمر بالمعايير',
    implementation: 'جدولة عمليات التدقيق الداخلية المنتظمة وتقييمات الطرف الثالث'
  },
  {
    title: 'برامج تدريب الموظفين',
    description: 'تثقيف موظفي الرعاية الصحية حول الاستخدام السليم للأزياء ومتطلبات الامتثال',
    implementation: 'تطوير وحدات تدريبية شاملة وبرامج شهادات'
  },
  {
    title: 'تأهيل الموردين',
    description: 'الحفاظ على عمليات تأهيل ومراقبة صارمة للموردين',
    implementation: 'إنشاء بطاقات أداء الموردين ومراجعات الأداء المنتظمة'
  },
  {
    title: 'إدارة التوثيق',
    description: 'تنفيذ أنظمة توثيق قوية لتتبع الامتثال',
    implementation: 'استخدام الأنظمة الرقمية للتحكم في الوثائق ومسارات التدقيق'
  }
]

export default function HealthcareComplianceGuidePageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white" dir="rtl">
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
              <span className="text-sm font-medium">فريق الامتثال يونيوم</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              دليل الامتثال للرعاية الصحية:
              <span className="text-green-600 block">معايير الأزياء الطبية</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              تنقل في المشهد المعقد للامتثال للرعاية الصحية في المملكة العربية السعودية. 
              دليلك الشامل لمعايير الأزياء الطبية واللوائح وأفضل الممارسات.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/quote"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                احصل على أزياء متوافقة
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                استشارة الامتثال
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
                  لماذا يهم الامتثال
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  الامتثال للرعاية الصحية ليس فقط حول تلبية اللوائح - إنه حول ضمان سلامة المرضى 
                  وحماية الموظفين والتميز التشغيلي. في المشهد الصحي المتطور في المملكة العربية السعودية، 
                  الامتثال لمعايير الأزياء الطبية أمر بالغ الأهمية للحفاظ على الاعتماد وتقديم رعاية عالية الجودة.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  يغطي هذا الدليل الشامل كل ما يحتاج مديرو الرعاية الصحية لمعرفته حول امتثال الأزياء الطبية، 
                  من المتطلبات التنظيمية إلى أفضل ممارسات التنفيذ.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="مهني رعاية صحية في زي طبي متوافق"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجالات الامتثال الرئيسية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فهم الأركان الأربعة لامتثال الأزياء الطبية في المملكة العربية السعودية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse mb-6">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <area.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">المتطلبات الرئيسية:</p>
                  <ul className="space-y-2">
                    {area.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الجهات التنظيمية الرئيسية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فهم المشهد التنظيمي في قطاع الرعاية الصحية بالمملكة العربية السعودية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {regulatoryBodies.map((body, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {body.name}
                </h3>
                <p className="text-sm text-green-600 font-medium mb-2">
                  {body.role}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {body.requirements}
                </p>
                <p className="text-xs text-blue-600">
                  {body.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قائمة مراجعة الامتثال
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استخدم هذه القائمة الشاملة لضمان أن أزياءك الطبية تلبي جميع المتطلبات.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceChecklist.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <input 
                        type="checkbox" 
                        className="mt-1 ml-3 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أفضل ممارسات التنفيذ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استراتيجيات مثبتة لتنفيذ الامتثال بنجاح.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-r-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {practice.description}
                </p>
                <p className="text-sm text-green-700 font-medium">
                  التنفيذ: {practice.implementation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNEOM Compliance Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              دعم الامتثال من يونيوم
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              نحن نفهم تعقيد امتثال الرعاية الصحية. لهذا السبب تقدم يونيوم دعماً شاملاً 
              لضمان أن أزياءك الطبية تلبي جميع المتطلبات التنظيمية.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentCheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  دعم التوثيق
                </h3>
                <p className="text-gray-600 text-sm">
                  حزم توثيق كاملة تشمل الشهادات ونتائج الاختبارات وتقارير الامتثال.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ضمان الجودة
                </h3>
                <p className="text-gray-600 text-sm">
                  عمليات مراقبة جودة صارمة تضمن أن كل زي يلبي معايير الامتثال.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardDocumentListIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  المراقبة المستمرة
                </h3>
                <p className="text-gray-600 text-sm">
                  مراقبة مستمرة للتغييرات التنظيمية وتحديثات الامتثال الاستباقية.
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
            اضمن امتثالك اليوم
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            لا تخاطر بعدم الامتثال. تشارك مع يونيوم للحصول على أزياء طبية تلبي 
            جميع معايير ولوائح الرعاية الصحية السعودية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              احصل على عرض سعر للامتثال
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              جدولة استشارة
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              موارد ذات صلة
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
                    اكتشف أحدث الابتكارات في النسيج الطبي ومعايير الامتثال.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/resources/policy-templates" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <DocumentCheckIcon className="h-16 w-16 text-green-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    قوالب السياسات
                  </h3>
                  <p className="text-gray-600 text-sm">
                    حمل قوالب سياسات الامتثال الجاهزة للاستخدام لمرفقك.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/shop/medical-scrubs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="الأزياء الطبية المتوافقة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    الأزياء الطبية المتوافقة
                  </h3>
                  <p className="text-gray-600 text-sm">
                    استكشف مجموعتنا من الأزياء الطبية المتوافقة بالكامل.
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