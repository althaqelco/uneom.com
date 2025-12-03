import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'خدمات الأزياء الموحدة السعودية | يونيوم تصميم وتصنيع مخصص',
  titleAr: 'خدمات الأزياء الموحدة السعودية | يونيوم تصميم وتصنيع مخصص',
  description: 'UNEOM uniform services in Saudi Arabia.',
  descriptionAr: 'خدمات يونيوم للأزياء في السعودية: تصميم مخصص، تصنيع، تطريز، طلبات بالجملة، إدارة البرامج، وضمان الجودة. معتمدة ISO 9001:2015، نخدم 500+ عميل في جميع أنحاء المملكة. إنتاج 100,000+ قطعة شهرياً.',
  keywords: ['خدمات الأزياء السعودية', 'تصميم زي مخصص'],
  keywordsAr: ['خدمات الأزياء السعودية', 'تصميم زي مخصص', 'تصنيع أزياء السعودية', 'خدمة تطريز الشعار', 'طلبات بالجملة', 'إدارة برنامج الأزياء', 'خدمات القياس', 'ضمان الجودة'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services',
  image: '/images/services/uneom-services-banner.jpg',
  imageAlt: 'خدمات يونيوم للأزياء في السعودية',
  aiSummary: 'UNEOM offers comprehensive uniform services in Saudi Arabia.',
  aiSummaryAr: 'تقدم يونيوم خدمات أزياء شاملة في السعودية: تصميم مخصص - فريق التصميم لدينا ينشئ أزياء فريدة مخصصة لعلامتك التجارية. التصنيع - مرافق معتمدة ISO 9001:2015 تنتج 100,000+ قطعة شهرياً. تطريز/طباعة الشعار - علامة تجارية احترافية تبدأ من 15 ريال للقطعة. الطلبات بالجملة - خصومات حتى 25% للطلبات الكبيرة. إدارة البرامج - إدارة برنامج الأزياء الشاملة للشركات. خدمات القياس - القياس في الموقع للمقاسات الدقيقة. ضمان الجودة - كل منتج يخضع لفحوصات جودة صارمة. التوصيل السريع - توصيل في جميع أنحاء المملكة مع خيارات نفس اليوم في المدن الكبرى.'
});

export const dynamic = 'force-static';

const servicesFAQsAr = [
  { question: 'ما خدمات الأزياء التي تقدمها يونيوم؟', questionAr: 'ما خدمات الأزياء التي تقدمها يونيوم؟', answer: 'UNEOM offers comprehensive services.', answerAr: 'تقدم يونيوم خدمات أزياء شاملة: تصميم واستشارة مخصصة، تصنيع وإنتاج، تطريز وطباعة الشعار، طلبات بالجملة مع خصومات، إدارة برنامج الأزياء، خدمات القياس، ضمان الجودة، وتوصيل في جميع أنحاء المملكة.' },
  { question: 'كيف تعمل خدمة التصميم المخصص؟', questionAr: 'كيف تعمل خدمة التصميم المخصص؟', answer: 'Custom design process.', answerAr: 'عملية التصميم المخصص لدينا: 1) استشارة لفهم احتياجاتك وعلامتك التجارية، 2) تطوير مفهوم التصميم، 3) اختيار القماش واللون، 4) إنشاء العينة والقياس، 5) المراجعات بناءً على الملاحظات، 6) الإنتاج النهائي. الحد الأدنى للطلب 25 قطعة للتصاميم المخصصة.' },
  { question: 'ما الوقت المستغرق لتصنيع الأزياء؟', questionAr: 'ما الوقت المستغرق لتصنيع الأزياء؟', answer: 'Standard: 10-15 days.', answerAr: 'التصنيع القياسي: 10-15 يوم عمل. الأزياء المصممة خصيصاً: 15-21 يوم عمل. الإنتاج السريع متاح للطلبات العاجلة (رسوم إضافية). الطلبات الكبيرة قد تتطلب وقتاً إضافياً.' },
  { question: 'كم تكلفة تطريز الشعار؟', questionAr: 'كم تكلفة تطريز الشعار؟', answer: 'From SAR 15 per piece.', answerAr: 'تطريز الشعار يبدأ من 15 ريال للقطعة للشعارات البسيطة. السعر يعتمد على حجم الشعار وعدد الغرز وعدد الألوان. الشعارات الجديدة تتطلب رسوم رقمنة لمرة واحدة 150-300 ريال. خصومات متاحة للكميات.' },
  { question: 'ما هي إدارة برنامج الأزياء؟', questionAr: 'ما هي إدارة برنامج الأزياء؟', answer: 'End-to-end service for corporations.', answerAr: 'إدارة برنامج الأزياء هي خدمة شاملة للشركات. تشمل: تصميم سياسات الأزياء، إدارة المخزون، تنسيق قياسات الموظفين، التعامل مع إعادة الطلب، تتبع التوزيع، وتقديم تقارير دورية. مثالية للمؤسسات التي لديها 50+ موظف.' },
  { question: 'هل تقدم يونيوم خدمات القياس؟', questionAr: 'هل تقدم يونيوم خدمات القياس؟', answer: 'Yes, professional measurement services.', answerAr: 'نعم، نقدم خدمات قياس احترافية. للطلبات من 50+ قطعة، يمكن لفريقنا زيارة موقعك للقياسات في الموقع. نوفر أيضاً أدلة مقاسات مفصلة وإرشادات للقياس الذاتي.' },
];

const services = [
  { id: 'custom-design', name: 'تصميم الأزياء المخصصة', description: 'تصاميم أزياء مخصصة تتناسب مع هوية علامتك التجارية ومتطلباتك الخاصة.', icon: '🎨', href: '/ar/services/custom-design', features: ['استشارة العلامة التجارية', 'مفاهيم التصميم', 'إنشاء العينات', 'المراجعات مشمولة'] },
  { id: 'manufacturing', name: 'التصنيع', description: 'مرفق تصنيع معتمد ISO ينتج 100,000+ قطعة زي شهرياً.', icon: '🏭', href: '/ar/services/manufacturing', features: ['معتمد ISO 9001:2015', 'مواد عالية الجودة', 'إنتاج قابل للتوسع', 'تسليم سريع'] },
  { id: 'fabric-selection', name: 'اختيار الأقمشة', description: 'إرشادات خبراء في اختيار الأقمشة للراحة والمتانة وملاءمة المناخ.', icon: '🧵', href: '/ar/services/fabric-selection', features: ['+200 خيار قماش', 'مناسبة للمناخ', 'خيارات مضادة للميكروبات', 'مقاومة للحريق (FR)'] },
  { id: 'technical-finishes', name: 'التشطيبات التقنية', description: 'معالجات أقمشة متقدمة لمتطلبات صناعية محددة.', icon: '⚙️', href: '/ar/services/technical-finishes', features: ['مقاومة البقع', 'خالية من التجاعيد', 'حماية UV', 'امتصاص الرطوبة'] },
  { id: 'quality-assurance', name: 'ضمان الجودة', description: 'رقابة جودة صارمة في كل مرحلة من مراحل الإنتاج.', icon: '✅', href: '/ar/services/quality-assurance', features: ['نقاط فحص متعددة', 'اختبار معملي', 'ضمان خالي من العيوب', 'جودة متسقة'] },
  { id: 'corporate-programs', name: 'برامج الشركات', description: 'إدارة شاملة لبرنامج الأزياء للمؤسسات الكبيرة.', icon: '🏢', href: '/ar/services/corporate-programs', features: ['إدارة المخزون', 'تتبع الموظفين', 'أتمتة إعادة الطلب', 'مدير حساب مخصص'] },
  { id: 'bulk-ordering', name: 'الطلبات بالجملة', description: 'خصومات حجم حتى 25% للطلبات الكبيرة من الأزياء.', icon: '📦', href: '/ar/services/bulk-ordering', features: ['خصم حتى 25%', 'كميات مرنة', 'تسليم متدرج', 'شروط ائتمان متاحة'] },
  { id: 'measurement-services', name: 'خدمات القياس', description: 'خدمات قياس في الموقع لمقاسات زي دقيقة.', icon: '📏', href: '/ar/services/measurement-services', features: ['زيارات في الموقع', 'مقيسون محترفون', 'ضمان المقاس', 'مجاني للطلبات +50'] },
];

export default function ServicesPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="خدمات الأزياء الموحدة السعودية | يونيوم" titleAr="خدمات الأزياء الموحدة السعودية | يونيوم" description="Uniform services Saudi Arabia." descriptionAr="خدمات أزياء شاملة في السعودية." locale="ar" pageType="service" mainEntity="UNEOM Services" mainEntityAr="خدمات يونيوم للأزياء" primaryImage="/images/services/uneom-services-banner.jpg" primaryImageAlt="خدمات يونيوم" faqs={servicesFAQsAr} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/ar/services' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} clientCount={500} yearsInBusiness={20} />

      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-800 text-white relative overflow-hidden py-20">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"><span className="bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">خدمات</span> الأزياء</h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">من التصميم المخصص إلى التصنيع والتوصيل، تقدم يونيوم خدمات أزياء شاملة للشركات في جميع أنحاء السعودية.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">+8</div><div className="text-sm text-purple-200">خدمات</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">ISO</div><div className="text-sm text-purple-200">معتمدة</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">+100K</div><div className="text-sm text-purple-200">طاقة شهرية</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">+500</div><div className="text-sm text-purple-200">عميل</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="ما نقدمه" centered>خدمات الأزياء لدينا</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {services.map((service) => (
                <Link key={service.id} href={service.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1">{service.features.map((feature, idx) => (<li key={idx} className="text-xs text-gray-500 flex items-center gap-2"><span className="text-green-500">✓</span> {feature}</li>))}</ul>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة للخدمات</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {servicesFAQsAr.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-purple-100">تواصل مع فريقنا لمناقشة متطلبات الأزياء والحصول على عرض خدمة مخصص.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">اطلب عرض سعر ←</Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold rounded-xl transition-all">تواصل معنا</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/services" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
