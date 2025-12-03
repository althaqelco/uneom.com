import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

// ============================================
// SEO 2026 METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform FAQ Saudi Arabia | UNEOM Questions & Answers',
  titleAr: 'الأسئلة الشائعة عن الأزياء الموحدة | يونيوم السعودية',
  description: 'Frequently asked questions about uniforms in Saudi Arabia. UNEOM answers questions about ordering, pricing, customization, delivery, sizing, and more. Get answers to uniform queries!',
  descriptionAr: 'الأسئلة الشائعة عن الأزياء الموحدة في السعودية. يونيوم تجيب على أسئلة الطلب والأسعار والتخصيص والتوصيل والمقاسات. احصل على إجابات!',
  keywords: [
    'uniform FAQ saudi arabia',
    'UNEOM questions',
    'uniform ordering questions',
    'uniform pricing faq',
    'custom uniform questions',
    'bulk uniform orders',
    'uniform delivery saudi',
    'uniform sizing guide',
  ],
  keywordsAr: ['أسئلة شائعة يونيوم', 'أسئلة الأزياء الموحدة', 'أسعار الزي الموحد', 'طلب الأزياء السعودية'],
  locale: 'en',
  pageType: 'faq',
  path: '/faq',
  image: '/images/faq/uneom-faq.jpg',
  imageAlt: 'UNEOM Uniform FAQ - Frequently Asked Questions',
  aiSummary: 'UNEOM FAQ page answers common questions about uniforms in Saudi Arabia. Topics covered: How to order uniforms, pricing and bulk discounts, customization with logos, delivery times across Saudi Arabia, sizing and measurements, minimum order quantities, payment methods, return policy, fabric options, and care instructions. Contact UNEOM at +966 11 234 5678 or info@uneom.com for specific questions.',
  aiSummaryAr: 'صفحة الأسئلة الشائعة من يونيوم تجيب على الأسئلة الشائعة عن الأزياء الموحدة في السعودية. المواضيع المغطاة: كيفية الطلب، الأسعار والخصومات، التخصيص بالشعارات، أوقات التوصيل، المقاسات، الحد الأدنى للطلب.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA - COMPREHENSIVE
// ============================================
const faqCategories = [
  {
    category: 'Ordering & Pricing',
    categoryAr: 'الطلب والأسعار',
    icon: '💰',
    faqs: [
      {
        question: 'How do I order uniforms from UNEOM?',
        questionAr: 'كيف أطلب الأزياء من يونيوم؟',
        answer: 'You can order from UNEOM in several ways: 1) Request a quote on our website, 2) Call us at +966 11 234 5678, 3) Email sales@uneom.com, 4) Visit our showrooms in Riyadh, Jeddah, or Dammam, 5) WhatsApp us at +966 50 123 4567. Our team will guide you through product selection, sizing, customization options, and provide a detailed quote.',
        answerAr: 'يمكنك الطلب من يونيوم بعدة طرق: 1) طلب عرض سعر على موقعنا، 2) الاتصال بنا على +966 11 234 5678، 3) إيميل sales@uneom.com، 4) زيارة صالات العرض في الرياض أو جدة أو الدمام، 5) واتساب على +966 50 123 4567.'
      },
      {
        question: 'What is the minimum order quantity?',
        questionAr: 'ما الحد الأدنى لكمية الطلب؟',
        answer: 'Minimum order quantities vary by product: Standard uniforms - minimum 10 pieces. Custom designed uniforms - minimum 25 pieces. Embroidered items - minimum 12 pieces. For smaller quantities, we have ready-stock items available with no minimum.',
        answerAr: 'الحد الأدنى للطلب يختلف حسب المنتج: الأزياء القياسية - حد أدنى 10 قطع. الأزياء المصممة خصيصاً - 25 قطعة. المطرزات - 12 قطعة. للكميات الأصغر، لدينا منتجات جاهزة بدون حد أدنى.'
      },
      {
        question: 'Does UNEOM offer bulk order discounts?',
        questionAr: 'هل تقدم يونيوم خصومات للطلبات بالجملة؟',
        answer: 'Yes! UNEOM offers tiered bulk discounts: Orders 50-99 pieces: 10% off. Orders 100-249 pieces: 15% off. Orders 250-499 pieces: 20% off. Orders 500+ pieces: 25% off. Corporate accounts may qualify for additional discounts. Contact us for custom pricing.',
        answerAr: 'نعم! تقدم يونيوم خصومات متدرجة بالجملة: طلبات 50-99 قطعة: خصم 10%. طلبات 100-249 قطعة: خصم 15%. طلبات 250-499 قطعة: خصم 20%. طلبات 500+ قطعة: خصم 25%.'
      },
      {
        question: 'What payment methods does UNEOM accept?',
        questionAr: 'ما طرق الدفع التي تقبلها يونيوم؟',
        answer: 'UNEOM accepts multiple payment methods: Bank transfer (preferred for corporate orders), Credit/Debit cards (Visa, MasterCard), Cash on delivery (for orders under SAR 5,000), Credit terms for established corporate accounts, and Installment plans for large orders.',
        answerAr: 'تقبل يونيوم طرق دفع متعددة: تحويل بنكي (مفضل للطلبات المؤسسية)، بطاقات ائتمان/خصم (فيزا، ماستركارد)، الدفع عند الاستلام (للطلبات أقل من 5000 ريال)، شروط ائتمان للحسابات المؤسسية.'
      },
    ]
  },
  {
    category: 'Customization & Design',
    categoryAr: 'التخصيص والتصميم',
    icon: '🎨',
    faqs: [
      {
        question: 'Can UNEOM add my company logo to uniforms?',
        questionAr: 'هل يمكن ليونيوم إضافة شعار شركتي على الأزياء؟',
        answer: 'Yes! Logo customization is our specialty. We offer: Professional embroidery (most popular), Screen printing for large designs, Heat transfer for detailed logos, Woven labels and patches, Sublimation printing. We can match exact Pantone colors and maintain brand consistency across all uniform items.',
        answerAr: 'نعم! تخصيص الشعار هو تخصصنا. نقدم: تطريز احترافي (الأكثر شعبية)، طباعة حريرية للتصاميم الكبيرة، نقل حراري للشعارات المفصلة، ملصقات وشارات منسوجة، طباعة التسامي.'
      },
      {
        question: 'Can I request a custom uniform design?',
        questionAr: 'هل يمكنني طلب تصميم زي مخصص؟',
        answer: 'Absolutely! UNEOM offers custom design services. Our design team will work with you to create unique uniforms that reflect your brand. The process includes: Consultation to understand your needs, Design concept development, Sample creation, Revisions based on feedback, Final production. Custom designs are available for orders of 25+ pieces.',
        answerAr: 'بالتأكيد! تقدم يونيوم خدمات تصميم مخصصة. سيعمل فريق التصميم لدينا معك لإنشاء أزياء فريدة تعكس علامتك التجارية. تتضمن العملية: استشارة لفهم احتياجاتك، تطوير مفهوم التصميم، إنشاء العينات، المراجعات، الإنتاج النهائي.'
      },
      {
        question: 'How long does logo embroidery take?',
        questionAr: 'كم يستغرق تطريز الشعار؟',
        answer: 'Logo embroidery typically adds 3-5 business days to the order. For new logos, we create a digitized version first (1-2 days). The embroidery process itself takes 2-3 days for standard orders. Rush embroidery is available for urgent orders.',
        answerAr: 'تطريز الشعار عادة يضيف 3-5 أيام عمل للطلب. للشعارات الجديدة، نصنع نسخة رقمية أولاً (1-2 يوم). عملية التطريز نفسها تستغرق 2-3 أيام للطلبات القياسية.'
      },
    ]
  },
  {
    category: 'Delivery & Shipping',
    categoryAr: 'التوصيل والشحن',
    icon: '🚚',
    faqs: [
      {
        question: 'How long does delivery take?',
        questionAr: 'كم يستغرق التوصيل؟',
        answer: 'Delivery times depend on order type and location: Stock items: 5-7 business days. Custom branded uniforms: 10-15 business days. Custom designed uniforms: 15-21 business days. Within Riyadh, Jeddah, Dammam: +0 days. Other Saudi cities: +1-2 days. Rush service available for urgent orders.',
        answerAr: 'أوقات التوصيل تعتمد على نوع الطلب والموقع: المنتجات المتوفرة: 5-7 أيام عمل. الأزياء المخصصة بالعلامة التجارية: 10-15 يوم عمل. الأزياء المصممة خصيصاً: 15-21 يوم عمل.'
      },
      {
        question: 'Does UNEOM deliver to all Saudi cities?',
        questionAr: 'هل توصل يونيوم لجميع مدن السعودية؟',
        answer: 'Yes, UNEOM delivers to all cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, Khobar, Jubail, and all other locations. Delivery is free for orders over SAR 500. We also deliver to GCC countries upon request.',
        answerAr: 'نعم، توصل يونيوم لجميع مدن السعودية بما فيها الرياض وجدة والدمام ومكة والمدينة والخبر والجبيل وجميع المواقع الأخرى. التوصيل مجاني للطلبات فوق 500 ريال.'
      },
      {
        question: 'Can I track my uniform order?',
        questionAr: 'هل يمكنني تتبع طلب الأزياء؟',
        answer: 'Yes, once your order ships, you will receive a tracking number via SMS and email. You can track your order on our website or through the courier\'s tracking system. Our customer service team can also provide updates at any time.',
        answerAr: 'نعم، بمجرد شحن طلبك، ستتلقى رقم تتبع عبر رسالة نصية وإيميل. يمكنك تتبع طلبك على موقعنا أو من خلال نظام تتبع شركة الشحن.'
      },
    ]
  },
  {
    category: 'Sizing & Quality',
    categoryAr: 'المقاسات والجودة',
    icon: '📏',
    faqs: [
      {
        question: 'How do I determine the right uniform sizes?',
        questionAr: 'كيف أحدد مقاسات الزي الصحيحة؟',
        answer: 'UNEOM offers comprehensive sizing support: Our size guide is available on each product page. For bulk orders, we can provide sample sizes for fitting. We offer free measurement services at our showrooms. Custom sizing is available for employees who need non-standard sizes. Our team can visit your location for large orders.',
        answerAr: 'تقدم يونيوم دعماً شاملاً للمقاسات: دليل المقاسات متاح على صفحة كل منتج. للطلبات بالجملة، يمكننا توفير عينات للقياس. نقدم خدمات قياس مجانية في صالات العرض. المقاسات المخصصة متاحة للموظفين الذين يحتاجون مقاسات غير قياسية.'
      },
      {
        question: 'Can I exchange sizes after receiving the order?',
        questionAr: 'هل يمكنني تبديل المقاسات بعد استلام الطلب؟',
        answer: 'Yes, UNEOM offers size exchanges within 14 days of delivery. Items must be unworn and in original condition with tags attached. For bulk orders, we allow up to 10% size exchanges at no extra cost. Customized items with logos may have limited exchange options.',
        answerAr: 'نعم، تقدم يونيوم تبديل المقاسات خلال 14 يوماً من التوصيل. يجب أن تكون القطع غير ملبوسة وفي حالتها الأصلية مع العلامات. للطلبات بالجملة، نسمح بتبديل حتى 10% بدون تكلفة إضافية.'
      },
      {
        question: 'What quality certifications does UNEOM have?',
        questionAr: 'ما شهادات الجودة التي تمتلكها يونيوم؟',
        answer: 'UNEOM maintains high quality standards with: ISO 9001:2015 certification for quality management. OEKO-TEX Standard 100 for fabric safety. SASO compliance for Saudi market requirements. Regular third-party quality audits. All products pass rigorous quality checks before shipping.',
        answerAr: 'تحافظ يونيوم على معايير جودة عالية مع: شهادة ISO 9001:2015 لإدارة الجودة. معيار OEKO-TEX 100 لسلامة الأقمشة. التوافق مع SASO لمتطلبات السوق السعودي. تدقيقات جودة منتظمة من طرف ثالث.'
      },
    ]
  },
];

// ============================================
// FAQ PAGE
// ============================================
export default function FAQPage() {
  // Flatten FAQs for SEO2026 component
  const allFAQs = faqCategories.flatMap(cat => cat.faqs);
  
  return (
    <>
      <SEO2026
        title="Uniform FAQ Saudi Arabia | UNEOM"
        titleAr="الأسئلة الشائعة عن الأزياء | يونيوم"
        description="Frequently asked questions about UNEOM uniforms in Saudi Arabia."
        descriptionAr="الأسئلة الشائعة عن أزياء يونيوم في السعودية."
        locale="en"
        pageType="faq"
        mainEntity="UNEOM Uniform FAQ"
        mainEntityAr="الأسئلة الشائعة يونيوم"
        primaryImage="/images/faq/uneom-faq.jpg"
        primaryImageAlt="UNEOM FAQ"
        faqs={allFAQs}
        breadcrumbs={[
          { name: 'FAQ', nameAr: 'الأسئلة الشائعة', url: '/faq' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-800 text-white relative overflow-hidden py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ', href: '/faq' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">Questions</span>
            </h1>
            
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              Find answers to common questions about UNEOM uniforms, 
              ordering, customization, and delivery.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* FAQ Categories */}
          {faqCategories.map((category, catIndex) => (
            <section key={catIndex} className="mb-16" itemScope itemType="https://schema.org/FAQPage">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div 
                    key={faqIndex}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                    itemScope 
                    itemProp="mainEntity" 
                    itemType="https://schema.org/Question"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-purple-100">
              Our team is here to help. Contact us for any questions about your uniform needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg"
              >
                Contact Us →
              </Link>
              <a 
                href="https://wa.me/966501234567"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all"
              >
                💬 WhatsApp
              </a>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href="/ar/faq"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
