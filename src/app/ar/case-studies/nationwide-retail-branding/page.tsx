import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'نجاح العلامة التجارية لسلسلة التجزئة الوطنية | دراسة حالة يونيوم',
  description: 'اكتشف كيف حولت يونيوم هوية العلامة التجارية لسلسلة تجزئة وطنية من خلال التصميم الاستراتيجي للزي الموحد، محققة زيادة 40% في التعرف على العلامة التجارية ورضا العملاء.',
  keywords: 'علامة تجارية زي التجزئة، سلسلة التجزئة الوطنية، تحويل العلامة التجارية، دراسة حالة تصميم الزي الموحد، هوية العلامة التجارية للتجزئة، تحسين رضا العملاء',
  openGraph: {
    title: 'نجاح العلامة التجارية لسلسلة التجزئة الوطنية | دراسة حالة يونيوم',
    description: 'تحويل العلامة التجارية الاستراتيجي للزي الموحد محققاً زيادة 40% في التعرف على العلامة التجارية',
    images: ['/images/case-studies/nationwide-retail-branding.jpg'],
    locale: 'ar_SA',
    type: 'article'},
  alternates: {
    canonical: 'https://uneom.com/ar/case-studies/nationwide-retail-branding/',
    languages: {
      'en': 'https://uneom.com/case-studies/nationwide-retail-branding/',
      'ar': 'https://uneom.com/ar/case-studies/nationwide-retail-branding/'}}}

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CaseStudy',
  headline: 'قصة نجاح العلامة التجارية لسلسلة التجزئة الوطنية',
  description: 'تحويل شامل للعلامة التجارية لسلسلة تجزئة كبرى من خلال التصميم والتنفيذ الاستراتيجي للزي الموحد',
  image: [
    'https://uneom.com/images/case-studies/nationwide-retail-branding.jpg',
    'https://uneom.com/images/case-studies/retail-before-after.jpg',
    'https://uneom.com/images/case-studies/retail-team-uniforms.jpg'
  ],
  author: {
    '@type': 'Organization',
    name: 'يونيوم للزي الموحد',
    url: 'https://uneom.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'يونيوم للزي الموحد',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/logos/uneom-logo-ar.png'
    }
  },
  datePublished: '2025-05-26',
  dateModified: '2025-05-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/ar/case-studies/nationwide-retail-branding/'
  },
  about: {
    '@type': 'Thing',
    name: 'علامة تجارية زي التجزئة'
  },
  inLanguage: 'ar-SA'
}

export default function NationwideRetailBrandingCaseStudyAr() {
  return (
    <div dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      
      <article className="min-h-screen bg-gradient-to-bl from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-l from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full backdrop-blur-sm">
                  <BuildingStorefrontIcon className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                سلسلة التجزئة الوطنية
                <span className="text-blue-300 block">تحويل العلامة التجارية</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                كيف حول التصميم الاستراتيجي للزي الموحد هوية العلامة التجارية لسلسلة تجزئة كبرى، محققاً زيادة 40% في التعرف على العلامة التجارية ورضا استثنائي للعملاء
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-blue-600/30 rounded-full backdrop-blur-sm">تحويل العلامة التجارية</span>
                <span className="px-4 py-2 bg-green-600/30 rounded-full backdrop-blur-sm">رضا العملاء</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full backdrop-blur-sm">التنفيذ على المستوى الوطني</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">نظرة عامة على المشروع</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    توجهت سلسلة تجزئة رائدة تضم أكثر من 150 موقعاً عبر المملكة العربية السعودية إلى يونيوم لإعادة تصميم هوية علامتها التجارية بالكامل من خلال التنفيذ الاستراتيجي للزي الموحد. كان التحدي هو إنشاء تجربة علامة تجارية متماسكة تعزز التعرف على العملاء مع الحفاظ على الكفاءة التشغيلية.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <BuildingStorefrontIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">150+</div>
                      <div className="text-sm text-gray-600">موقع متجر</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <UserGroupIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">2,500+</div>
                      <div className="text-sm text-gray-600">عضو فريق</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg"
                    alt="نظرة عامة على سلسلة متاجر التجزئة"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">التحدي</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">مشاكل عدم اتساق العلامة التجارية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        مظهر زي غير متسق عبر المواقع
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        انخفاض التعرف على العلامة التجارية بين العملاء
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        تصميم قديم لا يعكس قيم العلامة التجارية الحديثة
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        رضا ضعيف للموظفين عن الزي الحالي
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">التحديات التشغيلية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        لوجستيات معقدة للتوزيع على المستوى الوطني
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        ظروف مناخية متنوعة عبر المناطق
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        متطلبات دور مختلفة لكل قسم
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        قيود الميزانية للتنفيذ واسع النطاق
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gradient-to-bl from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">نتائج استثنائية</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-700 font-medium">زيادة التعرف على العلامة التجارية</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrophyIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">رضا الموظفين</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                  <div className="text-gray-700 font-medium">خدمة عملاء أسرع</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">التسليم في الوقت المحدد</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">مقاييس النجاح الرئيسية</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">تأثير العلامة التجارية</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 ml-3" />
                        <span className="text-gray-700">زيادة تذكر العملاء للعلامة التجارية بنسبة 40%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 ml-3" />
                        <span className="text-gray-700">تعزيز إدراك الصورة المهنية</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 ml-3" />
                        <span className="text-gray-700">تحسين ثقة العملاء والاطمئنان</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">الفوائد التشغيلية</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 ml-3" />
                        <span className="text-gray-700">تبسيط تحديد هوية الموظفين</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 ml-3" />
                        <span className="text-gray-700">تقليل تكاليف إدارة الزي الموحد</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 ml-3" />
                        <span className="text-gray-700">تعزيز تماسك الفريق والفخر</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-l from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              حول علامتك التجارية بالتصميم الاستراتيجي للزي الموحد
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              هل أنت مستعد لرفع هوية علامتك التجارية وخلق انطباع دائم؟ دع خبراءنا يطورون استراتيجية زي مخصصة لعملك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                ابدأ تحويلك
              </Link>
              <Link
                href="/ar/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                عرض المزيد من دراسات الحالة
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}