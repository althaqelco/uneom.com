import React from 'react';
import { Metadata } from 'next'
import { QuoteWizard } from '@/components/behavior/QuoteWizard'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'طلب عرض أسعار | الأزياء المهنية وملابس العمل | يونيوم',
  description: 'احصل على عرض أسعار مخصص للأزياء المهنية والسكرابات الطبية والملابس الأمنية وملابس العمل الصناعية. توصيل سريع في جميع أنحاء المملكة العربية السعودية بأسعار تنافسية.',
  keywords: 'عرض أسعار الأزياء، الأزياء المخصصة السعودية، أسعار ملابس العمل المهنية، عرض أسعار السكرابات الطبية، تكلفة الأزياء الأمنية',
  openGraph: {
    title: 'طلب عرض أسعار | الأزياء المهنية | يونيوم',
    description: 'احصل على أسعار تنافسية للأزياء المهنية وملابس العمل. حلول مخصصة لقطاعات الرعاية الصحية والشركات والأمن والصناعة.',
    url: 'https://uneom.com/ar/quote/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og/quote-page-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'طلب عرض أسعار يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'طلب عرض أسعار | الأزياء المهنية | يونيوم',
    description: 'احصل على أسعار تنافسية للأزياء المهنية وملابس العمل في جميع أنحاء المملكة العربية السعودية.',
    images: ['https://uneom.com/images/og/quote-page-ar.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/ar/quote/',
    languages: {
      'ar-SA': 'https://uneom.com/ar/quote/',
      'en-US': 'https://uneom.com/quote/'
    }
  }
}

const benefits = [
  {
    icon: CheckCircleIcon,
    title: 'أسعار تنافسية',
    description: 'أفضل الأسعار للطلبات الكبيرة والعقود طويلة المدى'
  },
  {
    icon: ClockIcon,
    title: 'استجابة سريعة',
    description: 'عرض الأسعار يصلك خلال 24 ساعة'
  },
  {
    icon: ShieldCheckIcon,
    title: 'ضمان الجودة',
    description: 'مواد وتصنيع معتمد من ISO'
  },
  {
    icon: TruckIcon,
    title: 'توصيل مجاني',
    description: 'توصيل مجاني في جميع أنحاء المملكة العربية السعودية'
  }
]

export default function QuotePageAr() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              اطلب عرض الأسعار المخصص
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              احصل على أسعار تنافسية للأزياء المهنية المصممة خصيصاً لاحتياجات عملك
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-xs text-blue-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    أخبرنا عن متطلباتك
                  </h2>
                  <QuoteWizard />
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    لماذا تختار يونيوم؟
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      <span>أكثر من 15 سنة من الخبرة في الأزياء المهنية</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      <span>تصنيع معتمد من ISO 9001:2015</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      <span>خدمات التصميم والعلامة التجارية المخصصة</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      <span>توصيل في جميع أنحاء المملكة العربية السعودية</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                      <span>إدارة حسابات مخصصة</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    معلومات التواصل
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>
                      <p className="font-medium text-gray-900">الهاتف</p>
                      <p>+971 55 816 4922</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">البريد الإلكتروني</p>
                      <p>quotes@uneom.com</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">ساعات العمل</p>
                      <p>الأحد - الخميس: 8:00 ص - 6:00 م</p>
                      <p>السبت: 9:00 ص - 2:00 م</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-blue-50">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    تحتاج مساعدة؟
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    متخصصو الأزياء لدينا مستعدون لمساعدتك في متطلباتك.
                  </p>
                  <a
                    href="/ar/contact/"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    تواصل مع فريقنا
                    <svg className="mr-1 h-4 w-4 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              القطاعات التي نخدمها
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              حلول أزياء متخصصة لمختلف القطاعات في جميع أنحاء المملكة العربية السعودية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'الرعاية الصحية', href: '/ar/industries/healthcare/', icon: '🏥' },
              { name: 'الشركات', href: '/ar/industries/corporate/', icon: '🏢' },
              { name: 'الأمن', href: '/ar/industries/security/', icon: '🛡️' },
              { name: 'التصنيع', href: '/ar/industries/manufacturing/', icon: '🏭' },
              { name: 'التعليم', href: '/ar/industries/education/', icon: '🎓' },
              { name: 'الضيافة', href: '/ar/industries/hospitality/', icon: '🏨' },
              { name: 'الطيران', href: '/ar/industries/aviation/', icon: '✈️' },
              { name: 'التجارة', href: '/ar/industries/retail-shops/', icon: '🛍️' }
            ].map((industry, index) => (
              <a
                key={index}
                href={industry.href}
                className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {industry.name}
                </h3>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}