import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'الأسئلة الشائعة عن الأزياء الموحدة | يونيوم السعودية',
  titleAr: 'الأسئلة الشائعة عن الأزياء الموحدة | يونيوم السعودية',
  description: 'Frequently asked questions about uniforms in Saudi Arabia.',
  descriptionAr: 'الأسئلة الشائعة عن الأزياء الموحدة في السعودية. يونيوم تجيب على أسئلة الطلب والأسعار والتخصيص والتوصيل والمقاسات. احصل على إجابات لاستفساراتك!',
  keywords: ['أسئلة شائعة يونيوم', 'أسئلة الأزياء الموحدة'],
  keywordsAr: ['أسئلة شائعة يونيوم', 'أسئلة الأزياء الموحدة', 'أسعار الزي الموحد', 'طلب الأزياء السعودية', 'تخصيص الشعار', 'توصيل الأزياء', 'مقاسات الزي'],
  locale: 'ar',
  pageType: 'faq',
  path: '/ar/faq',
  image: '/images/faq/uneom-faq.jpg',
  imageAlt: 'الأسئلة الشائعة يونيوم',
  aiSummary: 'UNEOM FAQ page answers common questions about uniforms in Saudi Arabia.',
  aiSummaryAr: 'صفحة الأسئلة الشائعة من يونيوم تجيب على الأسئلة الشائعة عن الأزياء الموحدة في السعودية. المواضيع المغطاة: كيفية طلب الأزياء، الأسعار وخصومات الجملة، التخصيص بالشعارات، أوقات التوصيل في السعودية، المقاسات والقياسات، الحد الأدنى للطلب، طرق الدفع، سياسة الإرجاع، خيارات الأقمشة، وإرشادات العناية. تواصل مع يونيوم على +966 56 461 2017 أو info@uneom.com للأسئلة المحددة.'
});

export const dynamic = 'force-static';

const faqCategories = [
  {
    category: 'الطلب والأسعار',
    icon: '💰',
    faqs: [
      { question: 'كيف أطلب الأزياء من يونيوم؟', questionAr: 'كيف أطلب الأزياء من يونيوم؟', answer: 'Multiple ways to order.', answerAr: 'يمكنك الطلب من يونيوم بعدة طرق: 1) طلب عرض سعر على موقعنا، 2) الاتصال بنا على +966 56 461 2017، 3) إيميل sales@uneom.com، 4) زيارة صالات العرض في الرياض أو جدة أو الدمام، 5) واتساب على +966 56 461 2017. سيرشدك فريقنا خلال اختيار المنتج والمقاسات وخيارات التخصيص وتقديم عرض سعر مفصل.' },
      { question: 'ما الحد الأدنى لكمية الطلب؟', questionAr: 'ما الحد الأدنى لكمية الطلب؟', answer: 'Varies by product.', answerAr: 'الحد الأدنى للطلب يختلف حسب المنتج: الأزياء القياسية - حد أدنى 10 قطع. الأزياء المصممة خصيصاً - 25 قطعة. المطرزات - 12 قطعة. للكميات الأصغر، لدينا منتجات جاهزة متوفرة بدون حد أدنى.' },
      { question: 'هل تقدم يونيوم خصومات للطلبات بالجملة؟', questionAr: 'هل تقدم يونيوم خصومات للطلبات بالجملة؟', answer: 'Yes, tiered discounts.', answerAr: 'نعم! تقدم يونيوم خصومات متدرجة بالجملة: طلبات 50-99 قطعة: خصم 10%. طلبات 100-249 قطعة: خصم 15%. طلبات 250-499 قطعة: خصم 20%. طلبات 500+ قطعة: خصم 25%. الحسابات المؤسسية قد تؤهل لخصومات إضافية.' },
      { question: 'ما طرق الدفع التي تقبلها يونيوم؟', questionAr: 'ما طرق الدفع التي تقبلها يونيوم؟', answer: 'Multiple payment methods.', answerAr: 'تقبل يونيوم طرق دفع متعددة: تحويل بنكي (مفضل للطلبات المؤسسية)، بطاقات ائتمان/خصم (فيزا، ماستركارد)، الدفع عند الاستلام (للطلبات أقل من 5000 ريال)، شروط ائتمان للحسابات المؤسسية المعتمدة، وخطط تقسيط للطلبات الكبيرة.' },
    ]
  },
  {
    category: 'التخصيص والتصميم',
    icon: '🎨',
    faqs: [
      { question: 'هل يمكن ليونيوم إضافة شعار شركتي على الأزياء؟', questionAr: 'هل يمكن ليونيوم إضافة شعار شركتي على الأزياء؟', answer: 'Yes, customization is our specialty.', answerAr: 'نعم! تخصيص الشعار هو تخصصنا. نقدم: تطريز احترافي (الأكثر شعبية)، طباعة حريرية للتصاميم الكبيرة، نقل حراري للشعارات المفصلة، ملصقات وشارات منسوجة، طباعة التسامي. يمكننا مطابقة ألوان بانتون بالضبط والحفاظ على اتساق العلامة التجارية عبر جميع قطع الأزياء.' },
      { question: 'هل يمكنني طلب تصميم زي مخصص؟', questionAr: 'هل يمكنني طلب تصميم زي مخصص؟', answer: 'Yes, custom design services available.', answerAr: 'بالتأكيد! تقدم يونيوم خدمات تصميم مخصصة. سيعمل فريق التصميم لدينا معك لإنشاء أزياء فريدة تعكس علامتك التجارية. تتضمن العملية: استشارة لفهم احتياجاتك، تطوير مفهوم التصميم، إنشاء العينات، المراجعات بناءً على الملاحظات، الإنتاج النهائي. التصاميم المخصصة متاحة للطلبات من 25+ قطعة.' },
      { question: 'كم يستغرق تطريز الشعار؟', questionAr: 'كم يستغرق تطريز الشعار؟', answer: '3-5 business days typically.', answerAr: 'تطريز الشعار عادة يضيف 3-5 أيام عمل للطلب. للشعارات الجديدة، نصنع نسخة رقمية أولاً (1-2 يوم). عملية التطريز نفسها تستغرق 2-3 أيام للطلبات القياسية. التطريز السريع متاح للطلبات العاجلة.' },
    ]
  },
  {
    category: 'التوصيل والشحن',
    icon: '🚚',
    faqs: [
      { question: 'كم يستغرق التوصيل؟', questionAr: 'كم يستغرق التوصيل؟', answer: 'Depends on order type.', answerAr: 'أوقات التوصيل تعتمد على نوع الطلب والموقع: المنتجات المتوفرة: 5-7 أيام عمل. الأزياء المخصصة بالعلامة التجارية: 10-15 يوم عمل. الأزياء المصممة خصيصاً: 15-21 يوم عمل. داخل الرياض وجدة والدمام: +0 أيام. مدن سعودية أخرى: +1-2 يوم. الخدمة السريعة متاحة للطلبات العاجلة.' },
      { question: 'هل توصل يونيوم لجميع مدن السعودية؟', questionAr: 'هل توصل يونيوم لجميع مدن السعودية؟', answer: 'Yes, nationwide delivery.', answerAr: 'نعم، توصل يونيوم لجميع مدن السعودية بما فيها الرياض وجدة والدمام ومكة والمدينة والخبر والجبيل وجميع المواقع الأخرى. التوصيل مجاني للطلبات فوق 500 ريال. نوصل أيضاً لدول الخليج عند الطلب.' },
      { question: 'هل يمكنني تتبع طلب الأزياء؟', questionAr: 'هل يمكنني تتبع طلب الأزياء؟', answer: 'Yes, tracking available.', answerAr: 'نعم، بمجرد شحن طلبك، ستتلقى رقم تتبع عبر رسالة نصية وإيميل. يمكنك تتبع طلبك على موقعنا أو من خلال نظام تتبع شركة الشحن. فريق خدمة العملاء يمكنه أيضاً تقديم تحديثات في أي وقت.' },
    ]
  },
  {
    category: 'المقاسات والجودة',
    icon: '📏',
    faqs: [
      { question: 'كيف أحدد مقاسات الزي الصحيحة؟', questionAr: 'كيف أحدد مقاسات الزي الصحيحة؟', answer: 'Comprehensive sizing support.', answerAr: 'تقدم يونيوم دعماً شاملاً للمقاسات: دليل المقاسات متاح على صفحة كل منتج. للطلبات بالجملة، يمكننا توفير عينات مقاسات للقياس. نقدم خدمات قياس مجانية في صالات العرض. المقاسات المخصصة متاحة للموظفين الذين يحتاجون مقاسات غير قياسية. فريقنا يمكنه زيارة موقعك للطلبات الكبيرة.' },
      { question: 'هل يمكنني تبديل المقاسات بعد استلام الطلب؟', questionAr: 'هل يمكنني تبديل المقاسات بعد استلام الطلب؟', answer: 'Yes, within 14 days.', answerAr: 'نعم، تقدم يونيوم تبديل المقاسات خلال 14 يوماً من التوصيل. يجب أن تكون القطع غير ملبوسة وفي حالتها الأصلية مع العلامات مثبتة. للطلبات بالجملة، نسمح بتبديل حتى 10% بدون تكلفة إضافية. القطع المخصصة بالشعارات قد تكون لها خيارات تبديل محدودة.' },
      { question: 'ما شهادات الجودة التي تمتلكها يونيوم؟', questionAr: 'ما شهادات الجودة التي تمتلكها يونيوم؟', answer: 'ISO 9001:2015, OEKO-TEX, SASO.', answerAr: 'تحافظ يونيوم على معايير جودة عالية مع: شهادة ISO 9001:2015 لإدارة الجودة. معيار OEKO-TEX 100 لسلامة الأقمشة. التوافق مع SASO لمتطلبات السوق السعودي. تدقيقات جودة منتظمة من طرف ثالث. جميع المنتجات تمر بفحوصات جودة صارمة قبل الشحن.' },
    ]
  },
];

const allFAQs = faqCategories.flatMap(cat => cat.faqs);

export default function FAQPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الأسئلة الشائعة عن الأزياء | يونيوم" titleAr="الأسئلة الشائعة عن الأزياء | يونيوم" description="UNEOM FAQ." descriptionAr="الأسئلة الشائعة عن أزياء يونيوم في السعودية." locale="ar" pageType="faq" mainEntity="UNEOM FAQ" mainEntityAr="الأسئلة الشائعة يونيوم" primaryImage="/images/faq/uneom-faq.jpg" primaryImageAlt="الأسئلة الشائعة يونيوم" faqs={allFAQs} breadcrumbs={[{ name: 'FAQ', nameAr: 'الأسئلة الشائعة', url: '/ar/faq' }]} />

      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-800 text-white relative overflow-hidden py-20">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الأسئلة الشائعة', href: '/ar/faq' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الأسئلة <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">الشائعة</span></h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">ابحث عن إجابات للأسئلة الشائعة عن أزياء يونيوم والطلب والتخصيص والتوصيل.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {faqCategories.map((category, catIndex) => (
            <section key={catIndex} className="mb-16" itemScope itemType="https://schema.org/FAQPage">
              <div className="flex items-center gap-3 mb-8"><span className="text-3xl">{category.icon}</span><h2 className="text-2xl font-bold text-gray-900">{category.category}</h2></div>
              <div className="space-y-4">{category.faqs.map((faq, faqIndex) => (<div key={faqIndex} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
            </section>
          ))}

          <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">لا تزال لديك أسئلة؟</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-purple-100">فريقنا هنا للمساعدة. تواصل معنا لأي أسئلة عن احتياجات الأزياء.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">تواصل معنا ←</Link>
              <a href="https://wa.me/966564612017" className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all">💬 واتساب</a>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/faq" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
