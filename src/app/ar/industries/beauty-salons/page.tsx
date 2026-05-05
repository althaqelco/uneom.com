import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء صالونات التجميل في السعودية | ملابس عمل السبا والعافية - يونيوم',
  titleAr: 'أزياء صالونات التجميل في السعودية | ملابس عمل السبا والعافية - يونيوم',
  description: 'اشتري أزياء صالونات التجميل الفاخرة في السعودية. ملابس عمل أنيقة للصالونات والسبا ومراكز العافية. تصاميم مقاومة للبقع ومريحة. احصل على عرض سعر مجاني!',
  descriptionAr: 'اشتري أزياء صالونات التجميل الفاخرة في السعودية. ملابس عمل أنيقة للصالونات والسبا ومراكز العافية. تصاميم مقاومة للبقع ومريحة. احصل على عرض سعر مجاني!',
  keywords: [
    'beauty salon uniforms saudi arabia', 'salon workwear riyadh', 'spa uniforms ksa',
    'hairdresser uniforms saudi', 'stylist tunics', 'beauty therapist uniforms',
    'salon aprons', 'wellness center uniforms', 'nail tech uniforms',
    'salon hijab', 'beauty industry workwear jeddah',
  ],
  keywordsAr: [
    'أزياء صالونات التجميل السعودية', 'زي الكوافير', 'ملابس سبا',
    'زي معالجات التجميل', 'أفرولات صالون', 'أزياء مراكز العافية',
    'يونيفورم صالون تجميل', 'ملابس صالونات التجميل الرياض'
  ],
  locale: 'ar',
  pageType: 'industry',
  path: '/ar/industries/beauty-salons',
  image: '/images/industries/retail-shops/retail-shops-background.jpg',
  imageAlt: 'أزياء صالونات التجميل في السعودية',
  aiSummary: 'UNEOM provides specialized uniforms for the beauty and wellness industry in Saudi Arabia. Products include stylist tunics, spa therapist uniforms, reception attire, salon aprons, beauty-specific hijabs, and branded name badges.',
  aiSummaryAr: 'توفر يونيوم أزياء متخصصة لصناعة التجميل والعافية في السعودية. تشمل المنتجات أزياء الكوافير، ملابس معالجات السبا، ملابس الاستقبال، أفرولات الصالون، حجاب مخصص للصالونات، وشارات أسماء بعلامة تجارية.',
});

export const dynamic = 'force-static';

const beautySectors = [
  { name: 'صالونات تصفيف الشعر', icon: '💇‍♀️', desc: 'أزياء احترافية لمصففي الشعر بأقمشة مقاومة للمواد الكيميائية ومريحة ومرنة.' },
  { name: 'منتجعات السبا (Day Spas)', icon: '🧖‍♀️', desc: 'أزياء أنيقة ومريحة لمعالجات التدليك وغرف علاجات السبا.' },
  { name: 'استوديوهات العناية بالأظافر', icon: '💅', desc: 'أزياء عملية وأنيقة لفنيي الأظافر مع معالجة مقاومة للبقع.' },
  { name: 'العيادات التجميلية', icon: '💉', desc: 'أزياء طبية لمعالجات التجميل الطبية والعناية بالبشرة.' },
  { name: 'مراكز العافية', icon: '🧘', desc: 'ملابس مريحة وقابلة للتنفس لمدربي اليوجا ومدربي العافية.' },
  { name: 'استوديوهات العرائس', icon: '👰', desc: 'ملابس احترافية أنيقة لاستشاريي الزفاف وفناني المكياج.' },
];

const beautyFAQs = [
  {
    question: 'ما الذي يميز أزياء صالونات التجميل عن ملابس العمل العادية؟',
    answer: 'تم تصميم أزياء صالونات التجميل خصيصاً بـ: أقمشة مقاومة للمواد الكيميائية تتحمل صبغات الشعر والمبيضات ومواد الأظافر الكيميائية. معالجة طاردة للبقع لسهولة التنظيف. مواد مرنة لتوفير الراحة أثناء حركات التصفيف. خصائص مضادة للميكروبات للنظافة في أعمال الاتصال الوثيق. تصاميم أنيقة تعكس جمالية العلامة التجارية للصالون. وميزات عملية مثل جيوب متعددة لأدوات التصفيف.',
  },
  {
    question: 'هل تقدمون حجاباً خاصاً بالصالونات في السعودية؟',
    answer: 'نعم! تتميز مجموعة حجاب الصالونات لدينا بـ: أقمشة سريعة الجفاف ومضادة للميكروبات. ملاءمة آمنة بدون دبابيس (إغلاق مغناطيسي أو بكباس). معالجة مقاومة للمواد الكيميائية. ألوان تتناسب مع العلامة التجارية لصالونك. مريحة للوردات التي تزيد عن 8 ساعات. تم تصميمها خصيصاً لمحترفي التجميل في السعودية الذين يحتاجون إلى الحشمة والعملية معاً.',
  },
  {
    question: 'هل يمكنكم وضع علامة تجارية على أزياء الصالون بشعارنا؟',
    answer: 'بالتأكيد! نقدم خدمات العلامة التجارية الكاملة بما في ذلك: شعارات الصالون المطرزة، أسماء العلامات التجارية المطبوعة، مطابقة الألوان المخصصة (Pantone)، مآزر تحمل علامة تجارية، شارات الأسماء، وباقات زي كاملة تحمل علامة تجارية. الحد الأدنى للطلب هو 12 قطعة للعلامة التجارية للصالون. يمكننا مطابقة هوية العلامة التجارية الخاصة بصالونك تماماً.',
  },
];

export default function BeautySalonsIndustryPageAr() {
  return (
    <>
      <SEO2026
        title="أزياء صالونات التجميل في السعودية | يونيوم"
        titleAr="أزياء صالونات التجميل في السعودية | يونيوم"
        description="أزياء متخصصة لصالونات التجميل والسبا ومراكز العافية في المملكة العربية السعودية."
        descriptionAr="أزياء متخصصة لصالونات التجميل والسبا ومراكز العافية في المملكة العربية السعودية."
        locale="ar"
        pageType="industry"
        mainEntity="أزياء صالونات التجميل"
        mainEntityAr="أزياء صالونات التجميل"
        primaryImage="/images/industries/retail-shops/retail-shops-background.jpg"
        primaryImageAlt="أزياء صالونات التجميل"
        faqs={beautyFAQs}
        breadcrumbs={[
          { name: 'الصناعات', nameAr: 'الصناعات', url: '/ar/industries' },
          { name: 'صالونات التجميل', nameAr: 'صالونات التجميل', url: '/ar/industries/beauty-salons' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={200}
        yearsInBusiness={20}
        industry="Beauty & Wellness"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-900 via-pink-800 to-fuchsia-700 text-white relative overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الصناعات', href: '/ar/industries' }, { label: 'صالونات التجميل', href: '/ar/industries/beauty-salons' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-pink-400">💇‍♀️</span>
                <span className="text-sm font-medium">موثوق به من قبل أكثر من 200 صالون وسبا في السعودية</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء صالونات{' '}
                <span className="bg-gradient-to-r from-pink-300 to-rose-300 text-transparent bg-clip-text">التجميل</span>
              </h1>
              
              <p className="text-xl mb-8 text-rose-100 leading-relaxed max-w-2xl">
                ملابس عمل أنيقة وعملية مصممة خصيصاً لمحترفي التجميل. أقمشة مقاومة للمواد الكيميائية بتصاميم مواكبة للموضة.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🧪 مقاومة للمواد الكيميائية</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">✨ طاردة للبقع</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🧕 حجاب صالون</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🎨 هوية بصرية مخصصة</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/ar/quote?industry=beauty" variant="secondary" size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold border-0">
                  احصل على عرض سعر للصالون ←
                </Button>
                <Button href="/ar/shop/retail-uniforms/beauty-salon" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pink-900">
                  تصفح أزياء الصالونات
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/industries/retail-shops/retail-shops-background.jpg" alt="أزياء صالونات التجميل" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-pink-600">200+</div>
                <div className="text-sm text-gray-600">صالون وسبا يتم خدمتهم</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          {/* Sectors */}
          <section className="mb-20">
            <SectionHeading subtitle="حلول لكل أعمال التجميل" centered>قطاعات التجميل التي نخدمها</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {beautySectors.map((sector, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{sector.name}</h3>
                  <p className="text-gray-600 text-sm">{sector.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول أزياء صالونات التجميل</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {beautyFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ارتقِ بهوية صالونك</h2>
            <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">أزياء احترافية تتناسب مع جمالية صالونك. استشارة مجانية وخدمة تصميم مخصصة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote?industry=beauty" className="inline-flex items-center px-8 py-4 bg-white text-pink-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر مجاني ←</Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-pink-900 font-bold rounded-xl transition-all">اتصل بنا</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/industries/beauty-salons" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🌐 English</Link>
        </div>
      </section>
    </>
  );
}
