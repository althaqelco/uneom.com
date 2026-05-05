import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Corporate Attire Saudi Arabia | Business Wear & Executive Suits - UNEOM',
  titleAr: 'الأزياء المؤسسية في السعودية | ملابس أعمال وبدل تنفيذية - يونيوم',
  description: 'Premium corporate attire for Saudi businesses. Executive suits, business shirts, ties, blazers & professional workwear. Custom branding for banks, offices & firms. Riyadh, Jeddah. Free quote!',
  descriptionAr: 'أزياء مؤسسية فاخرة للشركات السعودية. بدل تنفيذية، قمصان رسمية، ربطات عنق، سترات احترافية. تصميم حسب الطلب. عرض سعر مجاني!',
  keywords: ['corporate attire saudi', 'business wear riyadh', 'executive suits ksa', 'office uniforms', 'corporate shirts', 'business blazers saudi', 'company uniforms'],
  keywordsAr: ['أزياء مؤسسية السعودية', 'ملابس أعمال الرياض', 'بدل تنفيذية', 'قمصان رسمية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/corporate-attire',
  image: '/images/industries/corporate/corporate_uniform_background.jpg',
  imageAlt: 'Corporate Attire and Business Wear',
  aiSummary: 'UNEOM corporate attire for Saudi businesses: executive suits, business shirts, silk ties, blazers, corporate dresses, branded polo shirts, and workwear sets. Custom tailoring with company branding. Serving banks, consulting firms, government offices, and corporations across Riyadh, Jeddah, Dammam.',
  aiSummaryAr: 'أزياء مؤسسية من يونيوم: بدل تنفيذية، قمصان رسمية، ربطات عنق، سترات.',
});

export const dynamic = 'force-static';

const corporateFAQs = [
  {
    question: 'What corporate attire does UNEOM offer?',
    answer: 'UNEOM provides: Executive Suits (2-piece, 3-piece), Business Shirts (French cuff, button-down), Silk Ties & Pocket Squares, Corporate Blazers, Professional Dresses & Skirts, Branded Polo Shirts, Executive Thobes, and complete Workwear Sets. All items available with custom company branding, Pantone color matching, and logo embroidery.',
  },
  {
    question: 'Can you outfit an entire corporate office?',
    answer: 'Yes! UNEOM specializes in complete corporate uniform programs. We handle: sizing all employees, design consultation, sample approval, production, delivery, and ongoing reorder management. We serve offices from 10 to 10,000+ employees. Dedicated account manager assigned for companies ordering 100+ pieces.',
  },
  {
    question: 'What fabrics are best for corporate wear in Saudi climate?',
    answer: 'For Saudi Arabia, we recommend: Tropical-weight wool blends (for AC offices), breathable cotton-poly shirts (65/35), wrinkle-resistant finishes for travel, moisture-wicking undershirts for outdoor transitions, and lightweight blazers with natural ventilation. All our corporate fabrics maintain a professional appearance throughout the workday.',
  },
];

const products = [
  { name: 'Executive Suits', icon: '🤵', desc: 'Premium 2-piece and 3-piece suits. Italian fabrics, custom tailoring available.', price: 'From SAR 699' },
  { name: 'Business Shirts', icon: '👔', desc: 'Non-iron French cuff and button-down shirts. 15+ colors, custom embroidery.', price: 'From SAR 129' },
  { name: 'Corporate Blazers', icon: '🧥', desc: 'Professional blazers in navy, charcoal, black. Company logo embroidery included.', price: 'From SAR 349' },
  { name: 'Silk Ties Collection', icon: '👕', desc: 'Premium silk ties and pocket squares. Custom company patterns available.', price: 'From SAR 89' },
  { name: 'Branded Polo Shirts', icon: '👕', desc: 'Business-casual polo shirts with company logo. Premium cotton pique.', price: 'From SAR 99' },
  { name: 'Professional Dresses', icon: '👗', desc: 'Elegant professional dresses for women executives. Modest and modern designs.', price: 'From SAR 249' },
];

export default function CorporateAttirePage() {
  return (
    <>
      <SEO2026 title="Corporate Attire Saudi Arabia" titleAr="الأزياء المؤسسية في السعودية" description="Premium corporate attire for Saudi businesses." locale="en" pageType="product" mainEntity="Corporate Attire" primaryImage="/images/industries/corporate/corporate_uniform_background.jpg" primaryImageAlt="Corporate Attire" faqs={corporateFAQs} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/shop' }, { name: 'Corporate Attire', nameAr: 'أزياء مؤسسية', url: '/shop/corporate-attire' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} clientCount={400} yearsInBusiness={20} industry="Corporate" />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Corporate Attire', href: '/shop/corporate-attire' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="py-16 lg:py-24 relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400">💼</span>
              <span className="text-sm font-medium">Serving 400+ Companies in KSA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Corporate <span className="bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text">Attire</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">Executive suits, business shirts, and professional workwear for Saudi Arabia&apos;s leading corporations. Custom tailoring with company branding.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/quote?category=corporate" variant="secondary" size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold border-0">Get Free Corporate Quote →</Button>
              <Button href="/shop/corporate/executive-shirts/premium" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">Browse Executive Shirts</Button>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Premium Business Wear Collection" centered>Corporate Attire Range</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{p.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-blue-600">{p.price}</span>
                    <Link href="/quote?category=corporate" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">Get Quote</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Corporate Attire FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {corporateFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-800 to-indigo-800 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Corporate Image</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-3xl mx-auto">Professional corporate uniforms that reflect your brand excellence. Free design consultation.</p>
            <Link href="/quote?category=corporate" className="inline-flex items-center px-8 py-4 bg-white text-blue-800 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/shop/corporate-uniforms" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
