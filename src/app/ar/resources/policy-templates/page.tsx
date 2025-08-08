import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  DocumentTextIcon, 
  ArrowDownTrayIcon as DownloadIcon, 
  CheckCircleIcon,
  BuildingOfficeIcon,
  HeartIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'قوالب سياسات الأزياء الموحدة | تحميل مجاني | موارد يونيوم',
  description: 'حمل قوالب سياسات الأزياء الموحدة المجانية للرعاية الصحية والشركات والضيافة والقطاعات الصناعية. إرشادات شاملة وقوائم تنفيذ للمؤسسات السعودية.',
  keywords: 'قوالب سياسات الأزياء الموحدة, سياسة الأزياء الطبية, قواعد اللباس الشركات, إرشادات أزياء الضيافة, سياسة الأزياء الصناعية, معايير الأزياء السعودية',
  openGraph: {
    title: 'قوالب سياسات الأزياء الموحدة المجانية | موارد يونيوم',
    description: 'حمل قوالب سياسات الأزياء الموحدة الشاملة لمؤسستك',
    images: ['/images/resources/policy-templates-preview.jpg']}}

const policyTemplates = [
  {
    id: 'healthcare',
    title: 'سياسة الأزياء الطبية',
    description: 'قالب سياسة شامل للمستشفيات والعيادات والمرافق الطبية',
    icon: HeartIcon,
    features: [
      'إرشادات مكافحة العدوى',
      'أنظمة ترميز الألوان',
      'متطلبات مضادة للميكروبات',
      'بروتوكولات الصيانة',
      'معايير الامتثال'
    ],
    fileSize: '2.3 ميجابايت',
    pages: 24,
    downloadUrl: '/downloads/policy-templates/healthcare-uniform-policy-ar.pdf',
    previewImage: '/images/resources/healthcare-policy-preview.jpg'
  },
  {
    id: 'corporate',
    title: 'سياسة المكاتب الشركات',
    description: 'إرشادات قواعد اللباس المهني للبيئات الشركات',
    icon: BuildingOfficeIcon,
    features: [
      'معايير الملابس التجارية',
      'إرشادات موسمية',
      'اعتبارات ثقافية',
      'تمثيل العلامة التجارية',
      'سياسات العمل عن بُعد'
    ],
    fileSize: '1.8 ميجابايت',
    pages: 18,
    downloadUrl: '/downloads/policy-templates/corporate-office-policy-ar.pdf',
    previewImage: '/images/resources/corporate-policy-preview.jpg'
  },
  {
    id: 'hospitality',
    title: 'سياسة أزياء الضيافة',
    description: 'إرشادات للفنادق والمطاعم وصناعات الخدمات',
    icon: UserGroupIcon,
    features: [
      'أزياء خاصة بالأقسام',
      'معايير التفاعل مع الضيوف',
      'متطلبات النظافة',
      'التنوعات الموسمية',
      'اتساق العلامة التجارية'
    ],
    fileSize: '2.1 ميجابايت',
    pages: 20,
    downloadUrl: '/downloads/policy-templates/hospitality-uniform-policy-ar.pdf',
    previewImage: '/images/resources/hospitality-policy-preview.jpg'
  },
  {
    id: 'industrial',
    title: 'سياسة التصنيع الصناعي',
    description: 'سياسات أزياء تركز على السلامة للتصنيع والبيئات الصناعية',
    icon: CogIcon,
    features: [
      'متطلبات السلامة',
      'تكامل معدات الحماية الشخصية',
      'إرشادات خاصة بالمخاطر',
      'جداول الصيانة',
      'تتبع الامتثال'
    ],
    fileSize: '2.7 ميجابايت',
    pages: 28,
    downloadUrl: '/downloads/policy-templates/industrial-manufacturing-policy-ar.pdf',
    previewImage: '/images/resources/industrial-policy-preview.jpg'
  }
]

const implementationResources = [
  {
    title: 'قائمة مراجعة التنفيذ',
    description: 'دليل خطوة بخطوة لتنفيذ سياسات الأزياء الموحدة',
    downloadUrl: '/downloads/policy-templates/uniform-policy-implementation-checklist-ar.pdf',
    fileSize: '1.2 ميجابايت',
    icon: ClipboardDocumentListIcon
  },
  {
    title: 'قالب السياسة العامة',
    description: 'قالب قابل للتخصيص لأي نوع من المؤسسات',
    downloadUrl: '/downloads/policy-templates/general-uniform-policy-template-ar.pdf',
    fileSize: '1.5 ميجابايت',
    icon: DocumentTextIcon
  }
]

const benefits = [
  {
    title: 'الامتثال القانوني',
    description: 'تأكد من أن سياساتك تلبي متطلبات قانون العمل السعودي والمعايير الدولية',
    icon: ShieldCheckIcon
  },
  {
    title: 'المعايير المهنية',
    description: 'حافظ على مظهر مهني متسق عبر مؤسستك',
    icon: CheckCircleIcon
  },
  {
    title: 'إدارة التكاليف',
    description: 'الإرشادات الواضحة تساعد في التحكم في تكاليف الأزياء وجداول الاستبدال',
    icon: CogIcon
  },
  {
    title: 'وضوح الموظفين',
    description: 'القضاء على الالتباس بإرشادات أزياء واضحة وشاملة',
    icon: UserGroupIcon
  }
]

const customizationTips = [
  {
    step: '1',
    title: 'راجع متطلبات صناعتك',
    description: 'اعتبر اللوائح والمعايير المحددة لقطاعك'
  },
  {
    step: '2',
    title: 'تكيف مع الثقافة المحلية',
    description: 'تأكد من أن السياسات تحترم الأعراف والتفضيلات الثقافية السعودية'
  },
  {
    step: '3',
    title: 'أدرج علامتك التجارية',
    description: 'ادمج شعار شركتك وألوانها وإرشادات العلامة التجارية'
  },
  {
    step: '4',
    title: 'حدد عواقب واضحة',
    description: 'عرّف إجراءات الإنفاذ وعواقب عدم الامتثال'
  },
  {
    step: '5',
    title: 'خطط للتحديثات',
    description: 'أنشئ جدولاً للمراجعة للحفاظ على السياسات محدثة'
  }
]

export default function PolicyTemplatesPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              قوالب سياسات الأزياء
              <span className="text-blue-600 block">الموحدة المجانية</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              حمل قوالب سياسات الأزياء الموحدة الشاملة والجاهزة للاستخدام المصممة خصيصاً 
              للمؤسسات السعودية. وفر الوقت وضمن الامتثال بسياسات مهنية وسليمة قانونياً.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#templates"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تصفح القوالب
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                خدمة السياسة المخصصة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تستخدم قوالب السياسات المهنية؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              سياسات الأزياء المصممة جيداً تحمي مؤسستك وتخلق توقعات واضحة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Templates Section */}
      <section id="templates" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قوالب السياسات الخاصة بالصناعات
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر من مجموعتنا من القوالب المصممة مهنياً والمخصصة 
              لصناعات مختلفة واحتياجات تنظيمية متنوعة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {policyTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-4 space-x-reverse mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <template.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {template.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {template.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">الميزات الرئيسية:</p>
                      <ul className="space-y-1">
                        {template.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{template.pages} صفحة</span>
                      <span>{template.fileSize}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={template.downloadUrl}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center flex items-center justify-center"
                    download
                  >
                    <DownloadIcon className="h-5 w-5 ml-2" />
                    تحميل القالب
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              موارد التنفيذ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              موارد إضافية لمساعدتك في تنفيذ سياسات الأزياء الموحدة بنجاح.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {implementationResources.map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.fileSize}</span>
                      <Link
                        href={resource.downloadUrl}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                        download
                      >
                        <DownloadIcon className="h-4 w-4 ml-1" />
                        تحميل
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              كيفية تخصيص سياستك
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اتبع هذه الخطوات لتكييف قوالبنا مع احتياجات مؤسستك المحددة.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {customizationTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {tip.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Arabia Specific Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                اعتبارات خاصة بالمملكة العربية السعودية
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                قوالبنا تتضمن اعتبارات مهمة للعمل في المملكة العربية السعودية.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    الحساسية الثقافية
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      متطلبات اللباس المحتشم
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      إرشادات مناسبة للجنسين
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      اعتبارات الممارسة الدينية
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    اعتبارات المناخ
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      مواد مقاومة للحرارة
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      متطلبات الأقمشة القابلة للتنفس
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      التنوعات الموسمية
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    الامتثال القانوني
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      مواءمة قانون العمل السعودي
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      متطلبات وزارة الصحة
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      لوائح خاصة بالصناعة
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    التوريد المحلي
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      تفضيلات الموردين السعوديين
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      مواءمة رؤية 2030
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      متطلبات المحتوى المحلي
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            تحتاج حلول سياسة مخصصة؟
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            خبراؤنا يمكنهم إنشاء سياسات أزياء مخصصة خاصة بمتطلبات مؤسستك الفريدة 
            ومعايير الصناعة.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              اطلب سياسة مخصصة
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/services/corporate-programs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              الخدمات الشركات
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
                    متطلبات الامتثال الأساسية لسياسات الأزياء الطبية.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/resources/fabric-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <DocumentTextIcon className="h-16 w-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    دليل اختيار الأقمشة
                  </h3>
                  <p className="text-gray-600 text-sm">
                    اختر المواد المناسبة لمتطلبات الأزياء الموحدة الخاصة بك.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/services/corporate-programs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/services/doctor-SBI-300813580.jpg" // Placeholder, to be updated
                    alt="برامج الأزياء الشركات"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    البرامج الشركات
                  </h3>
                  <p className="text-gray-600 text-sm">
                    حلول أزياء شاملة للمؤسسات الشركات.
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