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

// ============================================
// SEO 2026 METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'Shop Uniforms Online Saudi Arabia | UNEOM Uniform Store',
  titleAr: 'تسوق الأزياء الموحدة أونلاين | متجر يونيوم السعودية',
  description: 'Shop professional uniforms online at UNEOM Saudi Arabia. Medical scrubs, corporate attire, hospitality uniforms, school uniforms, industrial workwear. Best prices, fast delivery nationwide!',
  descriptionAr: 'تسوق الأزياء المهنية أونلاين من يونيوم السعودية. سكراب طبي، ملابس شركات، زي ضيافة، زي مدرسي، ملابس صناعية. أفضل الأسعار، توصيل سريع لجميع أنحاء المملكة!',
  keywords: [
    'shop uniforms saudi arabia',
    'buy uniforms online ksa',
    'uniform store saudi',
    'medical scrubs shop',
    'corporate uniforms online',
    'hospitality uniforms buy',
    'school uniforms saudi',
    'industrial workwear shop',
    'UNEOM shop',
    'uniform prices saudi',
    'bulk uniforms saudi arabia',
  ],
  keywordsAr: ['تسوق أزياء السعودية', 'شراء يونيفورم أونلاين', 'متجر أزياء السعودية', 'سكراب طبي للبيع', 'أسعار الأزياء الموحدة'],
  locale: 'en',
  pageType: 'shop',
  path: '/shop',
  image: '/images/shop/uneom-shop-banner.jpg',
  imageAlt: 'UNEOM Online Uniform Shop Saudi Arabia',
  aiSummary: 'UNEOM online shop offers professional uniforms in Saudi Arabia. Categories include: Medical scrubs and healthcare apparel (from SAR 169), Aviation uniforms (from SAR 899), Hospitality attire (from SAR 329), Corporate workwear (from SAR 799), Culinary uniforms (from SAR 249), Industrial workwear (from SAR 199), Education uniforms (from SAR 149), Security uniforms (from SAR 299). All products available with custom logo embroidery. Free delivery for orders over SAR 500. Bulk discounts available.',
  aiSummaryAr: 'متجر يونيوم أونلاين يقدم الأزياء المهنية في السعودية. الفئات تشمل: سكراب طبي (من 169 ريال)، أزياء طيران (من 899 ريال)، زي ضيافة (من 329 ريال)، ملابس شركات (من 799 ريال)، أزياء طهاة (من 249 ريال)، ملابس صناعية (من 199 ريال)، زي تعليمي (من 149 ريال)، زي أمن (من 299 ريال).'
});

export const dynamic = 'force-static';

// ============================================
// SHOP FAQ DATA
// ============================================
const shopFAQs = [
  {
    question: 'How do I order uniforms from UNEOM shop?',
    questionAr: 'كيف أطلب الأزياء من متجر يونيوم؟',
    answer: 'Browse our categories, select products, choose sizes and quantities, and add to cart. You can also request a custom quote for bulk orders. We accept credit cards, bank transfer, and cash on delivery.',
    answerAr: 'تصفح فئاتنا، اختر المنتجات، حدد المقاسات والكميات، وأضف إلى السلة. يمكنك أيضاً طلب عرض سعر مخصص للطلبات بالجملة.'
  },
  {
    question: 'What is the minimum order quantity?',
    questionAr: 'ما الحد الأدنى لكمية الطلب؟',
    answer: 'No minimum for ready-stock items. For custom logo embroidery, minimum is 12 pieces. Custom designed uniforms require 25+ pieces.',
    answerAr: 'لا يوجد حد أدنى للمنتجات الجاهزة. لتطريز الشعار المخصص، الحد الأدنى 12 قطعة. الأزياء المصممة خصيصاً تتطلب 25+ قطعة.'
  },
  {
    question: 'How fast is delivery in Saudi Arabia?',
    questionAr: 'كم سرعة التوصيل في السعودية؟',
    answer: 'Stock items: 3-5 business days. Custom embroidered: 7-10 days. Express delivery available for urgent orders. Free delivery for orders over SAR 500.',
    answerAr: 'المنتجات الجاهزة: 3-5 أيام عمل. المطرزة: 7-10 أيام. التوصيل السريع متاح للطلبات العاجلة. توصيل مجاني للطلبات فوق 500 ريال.'
  },
  {
    question: 'Can I add my company logo to uniforms?',
    questionAr: 'هل يمكنني إضافة شعار شركتي على الأزياء؟',
    answer: 'Yes! We offer professional embroidery and printing services. Send us your logo and we will digitize it for embroidery. Prices start from SAR 15 per piece.',
    answerAr: 'نعم! نقدم خدمات تطريز وطباعة احترافية. أرسل لنا شعارك وسنحوله للتطريز. الأسعار تبدأ من 15 ريال للقطعة.'
  },
  {
    question: 'Do you offer bulk discounts?',
    questionAr: 'هل تقدمون خصومات للجملة؟',
    answer: 'Yes! 50-99 pieces: 10% off. 100-249 pieces: 15% off. 250-499 pieces: 20% off. 500+ pieces: 25% off. Corporate accounts get additional benefits.',
    answerAr: 'نعم! 50-99 قطعة: خصم 10%. 100-249 قطعة: خصم 15%. 250-499 قطعة: خصم 20%. 500+ قطعة: خصم 25%. الحسابات المؤسسية تحصل على مزايا إضافية.'
  },
  {
    question: 'What payment methods are accepted?',
    questionAr: 'ما طرق الدفع المقبولة؟',
    answer: 'We accept Visa, MasterCard, mada, bank transfer, and cash on delivery (for orders under SAR 5,000). Corporate accounts can apply for credit terms.',
    answerAr: 'نقبل فيزا، ماستركارد، مدى، التحويل البنكي، والدفع عند الاستلام (للطلبات أقل من 5000 ريال). الحسابات المؤسسية يمكنها التقدم لشروط ائتمان.'
  },
];

// ============================================
// PRODUCT CATEGORIES DATA
// ============================================
const categories = [
  { id: 'medical-scrubs', name: 'Healthcare Apparel', nameAr: 'الملابس الصحية', description: 'Medical scrubs, lab coats, nursing uniforms', image: '/images/healthcare/scrubs-collections.jpg', href: '/shop/medical-scrubs', price: 'From SAR 169', popular: true, gradient: 'from-emerald-600 to-teal-600' },
  { id: 'aviation-uniforms', name: 'Aviation Uniforms', nameAr: 'أزياء الطيران', description: 'Pilot, flight attendant, ground crew uniforms', image: '/images/aviation/aviation_uniform_airline.jpg', href: '/shop/aviation-uniforms', price: 'From SAR 899', popular: false, gradient: 'from-blue-600 to-sky-600' },
  { id: 'hospitality-attire', name: 'Hospitality Attire', nameAr: 'أزياء الضيافة', description: 'Hotel, restaurant, concierge uniforms', image: '/images/hospitality/hospitality_uniform_concierge.jpg', href: '/shop/hospitality-attire', price: 'From SAR 329', popular: true, gradient: 'from-orange-600 to-amber-600' },
  { id: 'corporate-workwear', name: 'Corporate Workwear', nameAr: 'ملابس الشركات', description: 'Business suits, office attire, polo shirts', image: '/images/products/corporate-suit-executive.jpg', href: '/shop/corporate-workwear', price: 'From SAR 799', popular: false, gradient: 'from-gray-700 to-blue-800' },
  { id: 'culinary-uniforms', name: 'Culinary Uniforms', nameAr: 'أزياء الطهاة', description: 'Chef coats, kitchen attire, aprons', image: '/images/products/chef-coat-white.jpg', href: '/shop/culinary-uniforms', price: 'From SAR 249', popular: false, gradient: 'from-red-600 to-orange-600' },
  { id: 'industrial-uniforms', name: 'Industrial Workwear', nameAr: 'الملابس الصناعية', description: 'Coveralls, safety wear, FR clothing', image: '/images/products/fr-coverall.jpg', href: '/shop/industrial-uniforms', price: 'From SAR 199', popular: true, gradient: 'from-yellow-600 to-orange-600' },
  { id: 'education-uniforms', name: 'Education Uniforms', nameAr: 'الزي المدرسي', description: 'School uniforms, PE wear, lab coats', image: '/images/products/school-uniform-primary.jpg', href: '/shop/education-uniforms', price: 'From SAR 149', popular: false, gradient: 'from-indigo-600 to-purple-600' },
  { id: 'security-uniforms', name: 'Security Uniforms', nameAr: 'أزياء الأمن', description: 'Guard uniforms, tactical wear', image: '/images/products/security/security-patrol-jacket-main.jpg', href: '/shop/security-uniforms', price: 'From SAR 299', popular: false, gradient: 'from-gray-800 to-gray-900' },
  { id: 'retail-uniforms', name: 'Retail Uniforms', nameAr: 'أزياء التجزئة', description: 'Boutique, showroom, retail staff uniforms', image: '/images/products/retail/luxury-collection.jpg', href: '/shop/retail-uniforms', price: 'From SAR 389', popular: false, gradient: 'from-pink-600 to-rose-600' },
];

// ============================================
// SHOP PAGE
// ============================================
export default function ShopPage() {
  return (
    <>
      <SEO2026
        title="Shop Uniforms Online Saudi Arabia | UNEOM"
        titleAr="تسوق الأزياء الموحدة أونلاين | يونيوم"
        description="Shop professional uniforms online at UNEOM Saudi Arabia."
        descriptionAr="تسوق الأزياء المهنية أونلاين من يونيوم السعودية."
        locale="en"
        pageType="shop"
        mainEntity="UNEOM Online Uniform Shop"
        mainEntityAr="متجر يونيوم للأزياء أونلاين"
        primaryImage="/images/shop/uneom-shop-banner.jpg"
        primaryImageAlt="UNEOM Uniform Shop"
        faqs={shopFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
        ]}
        conversationalKeywords={[
          'buy uniforms in saudi arabia',
          'where to shop for work uniforms',
          'uniform prices in riyadh',
        ]}
        voiceSearchQueries={[
          'Find uniform shop near me',
          'Buy medical scrubs online',
          'Order company uniforms',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={500}
        yearsInBusiness={20}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shop <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">Professional Uniforms</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Browse our complete collection of professional uniforms for every industry. 
              Quality products, competitive prices, fast delivery across Saudi Arabia.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">8+</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-200">Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">Free</div>
                <div className="text-sm text-blue-200">Delivery 500+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">25%</div>
                <div className="text-sm text-blue-200">Bulk Discount</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Categories Grid */}
          <section className="mb-20">
            <SectionHeading subtitle="Browse by Industry" centered>
              Uniform Categories
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {category.popular && (
                    <span className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">{category.price}</span>
                      <span className="text-gray-400 group-hover:text-blue-600 transition-colors">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Shopping Help" centered>
              Frequently Asked Questions
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-4">
              {shopFAQs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">
              For bulk orders, custom designs, or special requirements, 
              our team is ready to help with personalized solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg"
              >
                Get Custom Quote →
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href="/ar/shop"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
