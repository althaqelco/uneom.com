import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaTools, 
  FaCog, 
  FaIndustry, 
  FaCheckCircle, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  FireIcon,
  EyeIcon,
  HandRaisedIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'دبل ميكانيكي فاخر - ملابس عمل صناعية | يونيوم السعودية',
  description: 'دبل ميكانيكي احترافي وملابس عمل صناعية مصممة خصيصاً للورش والمصانع السعودية. حلول ملابس عمل متينة ومريحة ومطابقة لمعايير السلامة من يونيوم.',
  keywords: [
    'دبل ميكانيكي السعودية',
    'ملابس عمل صناعية',
    'زي موحد للورش',
    'ملابس سلامة مهنية',
    'يونيوم ملابس ميكانيكي',
    'دبل احترافي',
    'زي موحد مصانع',
    'ملابس عمل سيارات',
    'mechanics overalls Saudi Arabia',
    'industrial workwear'
  ],
  openGraph: {
    title: 'دبل ميكانيكي فاخر - ملابس عمل صناعية | يونيوم',
    description: 'دبل ميكانيكي احترافي مصمم للورش السعودية. متين ومريح ومطابق لمعايير السلامة.',
    url: 'https://uneom.com/ar/shop/industrial-uniforms/mechanics-overalls/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/mechanic-1.jpg',
        width: 1200,
        height: 630,
        alt: 'دبل ميكانيكي فاخر - يونيوم السعودية'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/mechanics-overalls/',
    languages: {
      'ar-SA': 'https://uneom.com/ar/shop/industrial-uniforms/mechanics-overalls/',
      'en-US': 'https://uneom.com/shop/industrial-uniforms/mechanics-overalls/'
    }
  }
};

// البيانات المنظمة للمنتج
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "دبل ميكانيكي فاخر",
  "description": "دبل ميكانيكي احترافي مصمم للورش والمنشآت الصناعية السعودية. يتميز بالبناء المتين والجيوب المتعددة والامتثال لمعايير السلامة.",
  "brand": {
    "@type": "Brand",
    "name": "يونيوم"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "شركة يونيوم المتحدة لتصنيع الزي الموحد",
    "url": "https://uneom.com"
  },
  "image": [
    "https://uneom.com/images/products/industrial/mechanic-1.jpg",
    "https://uneom.com/images/products/industrial/mechanic-2.jpg",
    "https://uneom.com/images/products/industrial-coverall.jpg"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "SAR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "يونيوم"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "category": "ملابس عمل صناعية",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "المادة",
      "value": "خليط قطني فائق التحمل"
    },
    {
      "@type": "PropertyValue", 
      "name": "معايير السلامة",
      "value": "مطابق لمواصفات ساسو"
    },
    {
      "@type": "PropertyValue",
      "name": "المنشأ",
      "value": "صنع في السعودية"
    }
  ]
};

export default function MechanicsOverallsPageAR() {
  return (
    <div dir="rtl" lang="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* شريط التنقل */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4 space-x-reverse">
                <li>
                  <Link href="/ar/" className="text-gray-500 hover:text-gray-700">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/ar/shop/" className="text-gray-500 hover:text-gray-700">
                    المتجر
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/ar/shop/industrial-uniforms/" className="text-gray-500 hover:text-gray-700">
                    الزي الموحد الصناعي
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <span className="text-gray-900 font-medium">دبل ميكانيكي</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* القسم الرئيسي */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 space-x-reverse mb-4">
                  <FaTools className="h-6 w-6 text-blue-400" />
                  <span className="text-blue-400 font-semibold">ملابس عمل احترافية</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  دبل ميكانيكي فاخر
                  <span className="block text-blue-400">مصمم للورش السعودية</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  مهندس خصيصاً للظروف الصعبة في البيئات الصناعية السعودية. 
                  يجمع دبل الميكانيكي لدينا بين المتانة والراحة والامتثال لمعايير السلامة 
                  للحفاظ على حماية قوة العمل وإنتاجيتها.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse">
                    <FaPhone className="h-5 w-5" />
                    <span>طلب عرض سعر</span>
                  </button>
                  <Link 
                    href="/ar/contact/"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                  >
                    تواصل مع فريق المبيعات
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/products/industrial/mechanic-1.jpg"
                  alt="دبل ميكانيكي فاخر - يونيوم السعودية"
                  width={600}
                  height={700}
                  className="rounded-xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FaStar className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold">4.8/5</span>
                  </div>
                  <p className="text-sm">+127 تقييم</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم المميزات الرئيسية */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                لماذا تختار دبل الميكانيكي من يونيوم؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مصمم خصيصاً للظروف القاسية في الورش السعودية، 
                يلبي دبلنا معايير السلامة الدولية مع ضمان أقصى درجات الراحة.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">مطابق لمعايير السلامة</h3>
                <p className="text-gray-600">
                  يلبي معايير السلامة المهنية لساسو ومتطلبات السلامة الدولية في أماكن العمل. 
                  تتوفر خيارات مقاومة للحريق للبيئات عالية المخاطر.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">تصميم وظيفي</h3>
                <p className="text-gray-600">
                  جيوب متعددة معززة وحلقات للأدوات وإدراج لواقيات الركبة. 
                  مصمم من قبل ميكانيكيين للميكانيكيين العاملين في الظروف السعودية.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FireIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">مقاوم للحرارة</h3>
                <p className="text-gray-600">
                  معالجة خاصة للقماش لمقاومة الحرارة الشديدة، مثالي 
                  لمناخ السعودية الصعب وبيئات الورش الحارة.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <EyeIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">عالي الوضوح</h3>
                <p className="text-gray-600">
                  شرائط عاكسة وخيارات ألوان عالية الوضوح تضمن سلامة العامل 
                  في البيئات الصناعية ضعيفة الإضاءة.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <HandRaisedIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">مريح الارتداء</h3>
                <p className="text-gray-600">
                  تصميم مريح مع نقاط إجهاد معززة وقماش قابل للتنفس 
                  للراحة طوال اليوم أثناء العمل الميكانيكي المكثف.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">توصيل سريع</h3>
                <p className="text-gray-600">
                  أوقات تسليم سريعة في جميع أنحاء السعودية مع إمكانيات الطلبات الكبيرة 
                  للمنشآت الصناعية والورش الكبيرة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* معرض المنتجات */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                معرض المنتجات
              </h2>
              <p className="text-xl text-gray-600">
                شاهد دبل الميكانيكي لدينا في العمل عبر الورش السعودية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/products/industrial/mechanic-2.jpg"
                  alt="دبل ميكانيكي - منظر جانبي"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">تفاصيل المنظر الجانبي</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/products/industrial-coverall.jpg"
                  alt="دبل صناعي كامل الجسم"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">تغطية كاملة للجسم</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/new-products/heavy_duty_industrial_coverall.png"
                  alt="دبل صناعي فائق التحمل"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">خيار فائق التحمل</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* المواصفات */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  المواصفات التقنية
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">تركيب المادة</h3>
                      <p className="text-gray-600">خليط 65% قطن، 35% بوليستر للمتانة والراحة المثلى</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">الوزن والسماكة</h3>
                      <p className="text-gray-600">وزن القماش 280 جرام، سماكة 0.8 مم للحماية الصناعية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">نطاق المقاسات</h3>
                      <p className="text-gray-600">متوفر بمقاسات من S إلى 5XL، مقاسات مخصصة متاحة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">خيارات الألوان</h3>
                      <p className="text-gray-600">أزرق كحلي، رمادي، كاكي، برتقالي عالي الوضوح، ألوان مخصصة متاحة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">تعليمات العناية</h3>
                      <p className="text-gray-600">قابل للغسيل في الغسالة حتى 60 درجة مئوية، متوافق مع المغاسل الصناعية</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Image
                  src="/images/case-studies/dammam-industrial.jpg"
                  alt="دبل ميكانيكي يونيوم في ورشة سعودية"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="mt-6 bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-3">الامتثال السعودي</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <FaCheckCircle className="h-4 w-4 text-blue-600" />
                      <span>معتمد من ساسو لسلامة أماكن العمل</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <FaCheckCircle className="h-4 w-4 text-blue-600" />
                      <span>موافق عليه من وزارة العمل</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <FaCheckCircle className="h-4 w-4 text-blue-600" />
                      <span>معايير التصنيع لرؤية 2030</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم الدعوة للعمل */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              جاهز لتجهيز ورشتك؟
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              انضم إلى مئات الشركات السعودية التي تثق في يونيوم لاحتياجات ملابس العمل الصناعية. 
              احصل على عرض سعر مخصص لدبل الميكانيكي اليوم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse">
                <FaPhone className="h-5 w-5" />
                <span>اتصل +971 55 816 4922</span>
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse">
                <FaWhatsapp className="h-5 w-5" />
                <span>واتساب للعرض</span>
              </button>
              <Link 
                href="/ar/contact/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <FaEnvelope className="h-5 w-5" />
                <span>راسلنا</span>
              </Link>
            </div>
          </div>
        </section>

        {/* المنتجات ذات الصلة */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              منتجات صناعية ذات صلة
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/ar/shop/industrial-uniforms/" className="group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow">
                  <FaIndustry className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">الزي الموحد الصناعي</h3>
                  <p className="text-gray-600">مجموعة كاملة من حلول ملابس العمل الصناعية</p>
                </div>
              </Link>
              
              <Link href="/ar/shop/industrial-uniforms/safety-vests/" className="group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow">
                  <FaShieldAlt className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">سترات الأمان</h3>
                  <p className="text-gray-600">سترات أمان عالية الوضوح للمواقع الصناعية</p>
                </div>
              </Link>
              
              <Link href="/ar/shop/industrial-uniforms/work-boots/" className="group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow">
                  <FaCog className="h-12 w-12 text-gray-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">أحذية العمل</h3>
                  <p className="text-gray-600">أحذية بمقدمة فولاذية وأحذية أمان</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}