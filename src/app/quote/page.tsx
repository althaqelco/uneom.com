import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Get Uniform Quote Saudi Arabia | Free Pricing | UNEOM',
  titleAr: 'احصل على عرض سعر الأزياء الموحدة السعودية | تسعير مجاني | يونيوم',
  description: 'Get a free uniform quote for your Saudi business. Healthcare, hospitality, corporate, industrial uniforms. Bulk discounts up to 25%. Response within 24 hours!',
  descriptionAr: 'احصل على عرض سعر مجاني للأزياء الموحدة لشركتك السعودية. رعاية صحية، ضيافة، شركات، صناعي. خصومات بالجملة حتى 25%. رد خلال 24 ساعة!',
  keywords: ['uniform quote saudi', 'uniform pricing ksa', 'bulk uniform order', 'corporate uniform quote', 'hospital uniform quote'],
  keywordsAr: ['عرض سعر الأزياء السعودية', 'تسعير الأزياء', 'طلب أزياء بالجملة', 'عرض سعر زي الشركات'],
  locale: 'en',
  pageType: 'service',
  path: '/quote',
  image: '/images/quote-hero.jpg',
  imageAlt: 'Get Uniform Quote',
  aiSummary: 'UNEOM free uniform quote request. Industries served: Healthcare, Hospitality, Corporate, Industrial, Education, Security. Process: 1) Submit form. 2) Receive quote within 24 hours. 3) Sample review. 4) Order confirmation. Bulk discounts: 50-99 pieces 10% off, 100-249 pieces 15% off, 250+ pieces 20-25% off. Free consultation included.',
  aiSummaryAr: 'طلب عرض سعر مجاني من يونيوم. الصناعات: رعاية صحية، ضيافة، شركات، صناعي، تعليم، أمن. العملية: 1) إرسال النموذج. 2) استلام العرض خلال 24 ساعة. 3) مراجعة العينات. 4) تأكيد الطلب.'
});

export const dynamic = 'force-static';

const quoteFAQs = [
  { question: 'How long does it take to receive a quote?', questionAr: 'كم يستغرق استلام عرض السعر؟', answer: 'We respond to all quote requests within 24 business hours. For urgent requests, call us directly for immediate assistance.', answerAr: 'نرد على جميع طلبات عروض الأسعار خلال 24 ساعة عمل. للطلبات العاجلة، اتصل بنا مباشرة للمساعدة الفورية.' },
  { question: 'What information do I need to provide?', questionAr: 'ما المعلومات التي أحتاج لتقديمها؟', answer: 'Provide your industry, quantity needed, preferred styles, customization requirements (logo, colors), and delivery timeline. The more details, the more accurate the quote.', answerAr: 'قدم صناعتك، الكمية المطلوبة، الأنماط المفضلة، متطلبات التخصيص (الشعار، الألوان)، والجدول الزمني للتسليم. كلما زادت التفاصيل، كان العرض أدق.' },
  { question: 'Is the quote free?', questionAr: 'هل عرض السعر مجاني؟', answer: 'Yes, all quotes are completely free with no obligation. We also offer free consultation to help you choose the right uniforms for your needs.', answerAr: 'نعم، جميع عروض الأسعار مجانية تماماً بدون التزام. نقدم أيضاً استشارة مجانية لمساعدتك في اختيار الأزياء المناسبة لاحتياجاتك.' },
  { question: 'Do you offer samples before ordering?', questionAr: 'هل تقدمون عينات قبل الطلب؟', answer: 'Yes, we provide samples for approval before production. Sample costs are typically refunded when you place a bulk order.', answerAr: 'نعم، نقدم عينات للموافقة قبل الإنتاج. تكاليف العينات تُستَرد عادةً عند تقديم طلب بالجملة.' },
];

const industries = [
  { name: 'Healthcare', icon: '🏥', href: '/industries/healthcare' },
  { name: 'Hospitality', icon: '🏨', href: '/industries/hospitality' },
  { name: 'Corporate', icon: '🏢', href: '/industries/corporate' },
  { name: 'Industrial', icon: '🏭', href: '/industries/manufacturing' },
  { name: 'Education', icon: '🎓', href: '/industries/education' },
  { name: 'Security', icon: '🛡️', href: '/industries/security' },
];

export default function QuotePage() {
  return (
    <>
      <SEO2026
        title="Get Uniform Quote | UNEOM"
        titleAr="احصل على عرض سعر | يونيوم"
        description="Free uniform quote for Saudi businesses."
        descriptionAr="عرض سعر مجاني للأزياء للشركات السعودية."
        locale="en"
        pageType="service"
        mainEntity="Uniform Quote Request"
        mainEntityAr="طلب عرض سعر الأزياء"
        primaryImage="/images/quote-hero.jpg"
        primaryImageAlt="Get Quote"
        faqs={quoteFAQs}
        breadcrumbs={[
          { name: 'Quote', nameAr: 'عرض سعر', url: '/quote' },
        ]}
      />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden py-16">
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400">✓</span>
              <span className="text-sm font-medium">Free Quote • 24hr Response</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">Free Quote</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Professional uniforms for any industry. Bulk discounts up to 25%. Response within 24 hours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">24hr</div>
                <div className="text-sm text-blue-200">Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">25%</div>
                <div className="text-sm text-blue-200">Bulk Discount</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">Free</div>
                <div className="text-sm text-blue-200">Consultation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-200">Clients</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Request Quote</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Company name" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+966 5X XXX XXXX" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                    <option value="">Select industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="corporate">Corporate</option>
                    <option value="industrial">Industrial / Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="security">Security</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Needed *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                    <option value="">Select quantity</option>
                    <option value="10-49">10-49 pieces</option>
                    <option value="50-99">50-99 pieces (10% discount)</option>
                    <option value="100-249">100-249 pieces (15% discount)</option>
                    <option value="250-499">250-499 pieces (20% discount)</option>
                    <option value="500+">500+ pieces (25% discount)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe your uniform needs, customization requirements, timeline..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                  Submit Quote Request →
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {industries.map((industry) => (
                  <Link key={industry.name} href={industry.href} className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                    <span className="text-2xl">{industry.icon}</span>
                    <span className="font-medium">{industry.name}</span>
                  </Link>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">Bulk Discounts</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex justify-between"><span>50-99 pieces:</span><span className="font-bold">10% OFF</span></li>
                  <li className="flex justify-between"><span>100-249 pieces:</span><span className="font-bold">15% OFF</span></li>
                  <li className="flex justify-between"><span>250-499 pieces:</span><span className="font-bold">20% OFF</span></li>
                  <li className="flex justify-between"><span>500+ pieces:</span><span className="font-bold">25% OFF</span></li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">Contact Directly</h3>
                <div className="space-y-3 text-blue-700">
                  <p className="flex items-center gap-2"><span>📞</span><a href="tel:+971558164922" className="hover:underline">+971 55 816 4922</a></p>
                  <p className="flex items-center gap-2"><span>📧</span><a href="mailto:info@uneom.com" className="hover:underline">info@uneom.com</a></p>
                  <p className="flex items-center gap-2"><span>💬</span><span>WhatsApp available</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {quoteFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/quote" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
