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
  title: 'Retail & Shop Uniforms Saudi Arabia | Store Staff Workwear - UNEOM',
  titleAr: 'زي متاجر التجزئة في السعودية | ملابس موظفي المتاجر - يونيوم',
  description: 'Buy premium retail uniforms in Saudi Arabia. Professional store staff workwear for malls, supermarkets, boutiques & franchises. Custom branding, fast delivery to Riyadh, Jeddah, Dammam. Get free quote!',
  descriptionAr: 'اشتري زي موظفي التجزئة الفاخر في السعودية. ملابس عمل احترافية للمولات والسوبرماركت والمحلات والفروع. تخصيص بالعلامة التجارية. توصيل سريع. احصل على عرض سعر مجاني!',
  keywords: [
    'retail uniforms saudi arabia', 'shop uniforms riyadh', 'store staff uniforms',
    'mall uniforms ksa', 'supermarket uniforms saudi', 'boutique uniforms',
    'franchise uniforms saudi', 'retail workwear jeddah', 'shop employee uniforms',
    'branded retail uniforms', 'custom store uniforms riyadh',
    'beauty salon uniforms', 'cashier uniforms saudi',
  ],
  keywordsAr: [
    'زي متاجر التجزئة السعودية', 'زي موظفي المتاجر الرياض', 'زي موظفي المولات',
    'زي سوبرماركت', 'ملابس عمل محلات', 'زي فروع',
  ],
  locale: 'en',
  pageType: 'product',
  path: '/shop/retail-uniforms',
  image: '/images/industries/retail-shops/retail-shops-background.jpg',
  imageAlt: 'Retail Store Uniforms in Saudi Arabia - UNEOM Professional Workwear',
  aiSummary: 'UNEOM provides premium retail uniforms for stores, malls, supermarkets, and franchises in Saudi Arabia. Product range includes polo shirts, branded aprons, cashier uniforms, name badges, seasonal wear, beauty salon uniforms, and full outfit sets. Custom branding with logo embroidery and Pantone color matching. Serving 300+ retail brands in Riyadh, Jeddah, Dammam. Bulk orders from 25 pieces with volume discounts. 48-hour express delivery.',
  aiSummaryAr: 'توفر يونيوم أزياء التجزئة الفاخرة للمتاجر والمولات والسوبرماركت والفروع في السعودية.',
});

export const dynamic = 'force-static';

const retailFAQs = [
  {
    question: 'What types of retail uniforms does UNEOM offer?',
    questionAr: 'ما أنواع أزياء التجزئة التي تقدمها يونيوم؟',
    answer: 'UNEOM offers a comprehensive range of retail uniforms including: Branded Polo Shirts, Professional Aprons (for supermarkets, cafés, bakeries), Cashier & Checkout Uniforms, Store Manager Attire, Beauty Salon Uniforms, Supermarket Staff Uniforms, Boutique Staff Outfits, and Seasonal Promotional Wear. All items can be customized with your brand logo, colors, and name badges.',
    answerAr: 'تقدم يونيوم مجموعة شاملة من أزياء التجزئة تشمل: قمصان بولو بالعلامة التجارية، أفرولات احترافية، زي الكاشير، ملابس مدير المتجر، زي صالونات التجميل، زي موظفي السوبرماركت، أزياء موظفي البوتيك، وملابس ترويجية موسمية.',
  },
  {
    question: 'Can you match our brand colors exactly?',
    questionAr: 'هل يمكنكم مطابقة ألوان علامتنا التجارية بدقة؟',
    answer: 'Yes! We use Pantone Matching System (PMS) to ensure exact color replication. We provide fabric swatches for approval before production. This is especially important for franchise operations that must maintain brand consistency across all locations in Saudi Arabia.',
    answerAr: 'نعم! نستخدم نظام مطابقة بانتون (PMS) لضمان مطابقة الألوان بدقة. نقدم عينات أقمشة للموافقة قبل الإنتاج.',
  },
  {
    question: 'What is the minimum order for retail uniforms?',
    questionAr: 'ما الحد الأدنى لطلب أزياء التجزئة؟',
    answer: 'Minimum order is 25 pieces per style for custom-branded retail uniforms. For standard designs, minimum is 12 pieces. We offer tiered pricing: 25-49 pieces (standard), 50-99 pieces (10% discount), 100-499 pieces (15% discount), 500+ pieces (20%+ discount). Perfect for franchise rollouts and seasonal updates.',
    answerAr: 'الحد الأدنى 25 قطعة لكل تصميم للأزياء المخصصة. للتصاميم القياسية، الحد الأدنى 12 قطعة. نقدم خصومات تصاعدية على الكميات.',
  },
  {
    question: 'Do you supply uniforms for beauty salons?',
    questionAr: 'هل توفرون أزياء لصالونات التجميل؟',
    answer: 'Yes, UNEOM specializes in beauty salon uniforms including: Stylist tunics, reception desk uniforms, spa therapist outfits, branded aprons, and salon-specific hijabs. Our salon uniforms feature stain-resistant fabrics, stretch materials for comfort, and professional designs that enhance your salon brand image.',
    answerAr: 'نعم، تتخصص يونيوم في أزياء صالونات التجميل تشمل: سترات الستايلست، زي الاستقبال، ملابس معالجي السبا، أفرولات بالعلامة التجارية، وحجاب خاص بالصالونات.',
  },
];

const retailProducts = [
  { name: 'Branded Polo Shirts', icon: '👕', desc: 'Custom-branded polo shirts in your exact brand colors. Breathable, wrinkle-resistant.', price: 'From SAR 89' },
  { name: 'Professional Aprons', icon: '👨‍🍳', desc: 'Durable aprons for supermarkets, bakeries, and food retail. Stain-resistant fabrics.', price: 'From SAR 59' },
  { name: 'Beauty Salon Uniforms', icon: '💇', desc: 'Stylish tunics and outfits for salon staff. Chemical-resistant, easy-care fabrics.', price: 'From SAR 129' },
  { name: 'Cashier Uniforms', icon: '🏪', desc: 'Professional checkout uniforms with name badge integration. Comfortable for long shifts.', price: 'From SAR 149' },
  { name: 'Store Manager Attire', icon: '👔', desc: 'Executive-style uniforms distinguishing management from floor staff. Premium fabrics.', price: 'From SAR 199' },
  { name: 'Seasonal Promo Wear', icon: '🎄', desc: 'Custom promotional uniforms for Ramadan, National Day, and seasonal campaigns.', price: 'From SAR 69' },
];

export default function RetailUniformsPage() {
  return (
    <>
      <SEO2026
        title="Retail & Shop Uniforms Saudi Arabia"
        titleAr="أزياء متاجر التجزئة في السعودية"
        description="UNEOM provides premium retail uniforms for stores, malls, and franchises in Saudi Arabia."
        descriptionAr="توفر يونيوم أزياء التجزئة الفاخرة للمتاجر والمولات والفروع في السعودية."
        locale="en"
        pageType="product"
        mainEntity="Retail Uniforms"
        mainEntityAr="أزياء التجزئة"
        primaryImage="/images/industries/retail-shops/retail-shops-background.jpg"
        primaryImageAlt="Retail Store Uniforms in Saudi Arabia"
        faqs={retailFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
          { name: 'Retail Uniforms', nameAr: 'أزياء التجزئة', url: '/shop/retail-uniforms' },
        ]}
        conversationalKeywords={[
          'where to buy retail uniforms in Riyadh',
          'best store staff uniforms Saudi Arabia',
          'mall employee uniforms supplier',
        ]}
        voiceSearchQueries={[
          'Find retail uniforms near me in Riyadh',
          'Order store staff uniforms online KSA',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={300}
        yearsInBusiness={20}
        industry="Retail"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: 'Retail Uniforms', href: '/shop/retail-uniforms' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-pink-400">🏪</span>
                <span className="text-sm font-medium">Trusted by 300+ Retail Brands in KSA</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Retail & Shop{' '}
                <span className="bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">
                  Uniforms
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-purple-100 leading-relaxed max-w-2xl">
                Professional uniforms for malls, supermarkets, boutiques & franchises across Saudi Arabia. Custom branding with your logo and colors.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🎨 Custom Branding</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">📦 Min 25 Pieces</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 48hr Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">💎 Premium Fabrics</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?category=retail" variant="secondary" size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold border-0">
                  Get Free Retail Quote →
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                  Talk to Retail Expert
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/industries/retail-shops/retail-shops-background.jpg" alt="Retail Store Uniforms in Saudi Arabia" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-purple-600">300+</div>
                <div className="text-sm text-gray-600">Retail Brands Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Products Grid */}
          <section className="mb-20">
            <SectionHeading subtitle="Our Retail Uniform Collection" centered>
              Professional Store Staff Workwear
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {retailProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-purple-600">{product.price}</span>
                    <Link href="/quote?category=retail" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Retail Uniforms FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {retailFAQs.map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Retail Brand Image</h2>
              <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">Join 300+ retail brands across Saudi Arabia that trust UNEOM for their staff uniforms. Free consultation and custom quote.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote?category=retail" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold rounded-xl transition-all">Contact Us</Link>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/shop/retail-uniforms" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
