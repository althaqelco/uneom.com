import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  SparklesIcon,
  EyeIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'بنطلون دورية أمن تنفيذي - درجة احترافية | يونيوم للزي الموحد',
  description: 'بنطلون دورية أمن تنفيذي فاخر مصمم لرجال الأمن المحترفين. متين ومريح وغني بالمميزات للعمليات الأمنية المتطلبة في المملكة العربية السعودية.',
  keywords: 'بنطلون أمن تنفيذي, زي دورية أمن, ملابس حراس أمن, زي أمن احترافي, معدات أمن تكتيكية السعودية, بنطلون زي أمن',
  openGraph: {
    title: 'بنطلون دورية أمن تنفيذي | يونيوم للأزياء الأمنية الاحترافية',
    description: 'بنطلون دورية تنفيذي احترافي لرجال الأمن بمميزات متقدمة ومتانة فائقة',
    images: ['/images/products/security/executive-patrol-pants-main.svg'],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/executive/',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/security-patrol-pants/executive/',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/executive/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'بنطلون دورية أمن تنفيذي',
  description: 'بنطلون دورية تنفيذي احترافي مصمم لرجال الأمن بمميزات متقدمة وجيوب متعددة ومتانة فائقة للعمليات الأمنية المتطلبة.',
  image: [
    'https://uneom.com/images/products/security/executive-patrol-pants-main.svg',
    'https://uneom.com/images/products/security/executive-patrol-pants-details.svg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'يونيوم'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'يونيوم للزي الموحد',
    url: 'https://uneom.com'
  },
  category: 'الأزياء الأمنية',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    priceRange: '220-380',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم للزي الموحد'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'المادة',
      value: 'مزيج قطني فاخر'
    },
    {
      '@type': 'PropertyValue',
      name: 'المميزات',
      value: 'جيوب تنفيذية متعددة، ركب معززة، خصر قابل للتعديل'
    },
    {
      '@type': 'PropertyValue',
      name: 'الألوان',
      value: 'أسود، أزرق كحلي، كاكي، أخضر زيتوني'
    }
  ],
  inLanguage: 'ar-SA'
}

export default function ExecutiveSecurityPatrolPantsAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-l from-gray-900 via-blue-900 to-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-blue-400 ml-3" />
                  <span className="text-blue-400 font-semibold">معدات أمن احترافية</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  بنطلون دورية أمن
                  <span className="text-blue-400 block">تنفيذي</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  بنطلون دورية تنفيذي احترافي مهندس لرجال الأمن الذين يطلبون أداءً فائقاً ومتانة ووظائف متقدمة في البيئات التحديّة.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-600/30 rounded-full text-sm backdrop-blur-sm">تصميم تنفيذي</span>
                  <span className="px-4 py-2 bg-green-600/30 rounded-full text-sm backdrop-blur-sm">بناء معزز</span>
                  <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm backdrop-blur-sm">نظام جيوب متعدد</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/ar/quote"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center"
                  >
                    <PhoneIcon className="w-5 h-5 ml-2" />
                    طلب عرض سعر
                  </Link>
                  <Link
                    href="/ar/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center"
                  >
                    تواصل مع المبيعات
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/products/security/executive-patrol-pants-main.svg"
                    alt="بنطلون دورية أمن تنفيذي - درجة احترافية"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    متوفر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">مميزات تنفيذية متقدمة</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مهندس بمميزات متطورة لتلبية المتطلبات الصعبة للعمليات الأمنية الاحترافية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">قماش فاخر</h3>
                <p className="text-gray-600 text-sm">
                  مزيج قطني فاخر مقاوم للتمزق يتحمل العمليات التنفيذية المتطلبة
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">جيوب متعددة</h3>
                <p className="text-gray-600 text-sm">
                  توزيع استراتيجي للجيوب للمعدات التنفيذية واللاسلكي والأدوات الأساسية
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ركب معززة</h3>
                <p className="text-gray-600 text-sm">
                  تعزيز مزدوج للركب لمتانة ممتدة وحماية إضافية
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">مقاس قابل للتعديل</h3>
                <p className="text-gray-600 text-sm">
                  خصر وأساور قابلة للتعديل للراحة المثلى والمظهر الاحترافي
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">المواصفات التقنية</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">تركيبة مواد فاخرة</h3>
                      <p className="text-gray-700">65% قطن، 35% بوليستر مزيج مقاوم للتمزق للمتانة والراحة المثلى</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">نظام جيوب متقدم</h3>
                      <p className="text-gray-700">10 جيوب موزعة استراتيجياً تشمل جيوب الشحن والجانبية وجيوب اللاسلكي الآمنة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">خيارات ألوان احترافية</h3>
                      <p className="text-gray-700">متوفر باللون الأسود والأزرق الكحلي والكاكي والأخضر الزيتوني</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">نطاق المقاسات</h3>
                      <p className="text-gray-700">مقاسات شاملة من XS إلى 5XL مع إمكانية التفصيل المخصص</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">تعليمات العناية</h3>
                      <p className="text-gray-700">قابل للغسل في الغسالة، ثابت اللون، ويحافظ على الشكل بعد الغسيل المتكرر</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/products/security/executive-patrol-pants-details.svg"
                  alt="بنطلون دورية أمن تنفيذي - تفاصيل المميزات"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-gradient-to-l from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">التطبيقات المثالية</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مثالي لمختلف العمليات الأمنية والتنفيذية عبر بيئات مختلفة
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الأمن المؤسسي</h3>
                <p className="text-gray-700">
                  مظهر احترافي للمباني المؤسسية والبنوك والمرافق التجارية التي تتطلب حضوراً أمنياً راقياً
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">أمن الفعاليات</h3>
                <p className="text-gray-700">
                  وظائف تنفيذية للفعاليات الكبيرة والحفلات والتجمعات العامة التي تتطلب فرق أمن متنقلة
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الأمن الصناعي</h3>
                <p className="text-gray-700">
                  بناء متين للمرافق الصناعية والموانئ ومصانع التصنيع ذات البيئات المتطلبة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">آراء العملاء</h2>
              <div className="flex justify-center items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="mr-2 text-gray-600">4.9/5 (89 تقييم)</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "جودة ممتازة ومتانة فائقة. الجيوب التنفيذية موضوعة بشكل مثالي لمعداتنا الأمنية. أنصح به بشدة للفرق الأمنية الاحترافية."
                </p>
                <div className="font-semibold text-gray-900">أحمد الراشد</div>
                <div className="text-sm text-gray-600">مشرف أمن، الرياض</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "مقاس مثالي ومظهر احترافي. الركب المعززة أثبتت قيمتها خلال مناوبات الدورية الطويلة. قيمة ممتازة مقابل المال."
                </p>
                <div className="font-semibold text-gray-900">محمد الفهد</div>
                <div className="text-sm text-gray-600">مدير أمن، جدة</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "راحة ووظائف استثنائية. المميزات القابلة للتعديل تضمن مقاساً مثالياً لكامل فريق الأمن لدينا. سنعيد الطلب بالتأكيد."
                </p>
                <div className="font-semibold text-gray-900">خالد المطيري</div>
                <div className="text-sm text-gray-600">مدير العمليات، الدمام</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Information */}
        <section className="py-16 bg-gradient-to-l from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">اطلب بنطلون الأمن التنفيذي اليوم</h2>
              <p className="text-xl mb-8 opacity-90">
                بنطلون دورية تنفيذي احترافي يبدأ من 220 ريال سعودي. خصومات كمية متاحة لشركات الأمن.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TruckIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">توصيل سريع</h3>
                  <p className="text-sm opacity-90">2-5 أيام عمل في جميع أنحاء المملكة</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">ضمان الجودة</h3>
                  <p className="text-sm opacity-90">ضمان الرضا لمدة 30 يوماً</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">دعم خبراء</h3>
                  <p className="text-sm opacity-90">فريق خدمة عملاء متخصص</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ar/quote"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  طلب عرض سعر كمية
                </Link>
                <Link
                  href="/ar/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  تواصل مع فريق المبيعات
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}