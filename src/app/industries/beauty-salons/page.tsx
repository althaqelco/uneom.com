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
  title: 'Beauty Salon Uniforms Saudi Arabia | Spa & Wellness Workwear - UNEOM',
  titleAr: 'أزياء صالونات التجميل في السعودية | ملابس عمل السبا والعافية - يونيوم',
  description: 'Buy premium beauty salon uniforms in Saudi Arabia. Stylish workwear for salons, spas & wellness centers. Stain-resistant, comfortable designs for stylists, therapists & reception. Riyadh, Jeddah, Dammam. Get free quote!',
  descriptionAr: 'اشتري أزياء صالونات التجميل الفاخرة في السعودية. ملابس عمل أنيقة للصالونات والسبا ومراكز العافية. تصاميم مقاومة للبقع ومريحة. احصل على عرض سعر مجاني!',
  keywords: [
    'beauty salon uniforms saudi arabia', 'salon workwear riyadh', 'spa uniforms ksa',
    'hairdresser uniforms saudi', 'stylist tunics', 'beauty therapist uniforms',
    'salon aprons', 'wellness center uniforms', 'nail tech uniforms',
    'salon hijab', 'beauty industry workwear jeddah',
  ],
  keywordsAr: [
    'أزياء صالونات التجميل السعودية', 'زي الكوافير', 'ملابس سبا',
    'زي معالجات التجميل', 'أفرولات صالون',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/beauty-salons',
  image: '/images/industries/retail-shops/retail-shops-background.jpg',
  imageAlt: 'Beauty Salon Uniforms in Saudi Arabia',
  aiSummary: 'UNEOM provides specialized uniforms for the beauty and wellness industry in Saudi Arabia. Products include stylist tunics, spa therapist uniforms, reception attire, salon aprons, beauty-specific hijabs, and branded name badges. Features include chemical-resistant fabrics, stretch materials for comfort, stain-resistant treatment, and antimicrobial properties. Serving 200+ salons and spas in Riyadh, Jeddah, Dammam.',
  aiSummaryAr: 'توفر يونيوم أزياء متخصصة لصناعة التجميل والعافية في السعودية.',
});

export const dynamic = 'force-static';

const beautySectors = [
  { name: 'Hair Salons', icon: '💇‍♀️', desc: 'Professional tunics for hair stylists with chemical-resistant fabrics and stretch comfort.' },
  { name: 'Day Spas', icon: '🧖‍♀️', desc: 'Elegant, calming uniforms for massage therapists and spa treatment rooms.' },
  { name: 'Nail Studios', icon: '💅', desc: 'Practical, stylish uniforms for nail technicians with stain-resistant treatment.' },
  { name: 'Medical Aesthetics', icon: '💉', desc: 'Clinical-grade uniforms for medical aesthetic practitioners and dermal therapists.' },
  { name: 'Wellness Centers', icon: '🧘', desc: 'Comfortable, breathable outfits for yoga instructors and wellness coaches.' },
  { name: 'Bridal Studios', icon: '👰', desc: 'Elegant professional attire for bridal consultants and makeup artists.' },
];

const beautyFAQs = [
  {
    question: 'What makes beauty salon uniforms different from regular workwear?',
    answer: 'Beauty salon uniforms are specially designed with: Chemical-resistant fabrics that withstand hair dyes, bleach, and nail chemicals. Stain-repellent treatments for easy cleaning. Stretch materials for comfort during styling movements. Antimicrobial properties for hygiene in close-contact work. Stylish designs that reflect the salon\'s brand aesthetic. And practical features like multiple pockets for styling tools.',
  },
  {
    question: 'Do you offer salon-specific hijabs for Saudi Arabia?',
    answer: 'Yes! Our salon hijab collection features: Quick-dry, antimicrobial fabrics. Secure fit without pins (magnetic or snap closures). Chemical-resistant treatment. Colors that match your salon brand. Comfortable for 8+ hour shifts. These are specifically designed for beauty professionals in Saudi Arabia who need both modesty and practicality.',
  },
  {
    question: 'Can you brand our salon uniforms with our logo?',
    answer: 'Absolutely! We offer full branding services including: Embroidered salon logos, printed brand names, custom color matching (Pantone), branded aprons, name badges, and complete branded uniform packages. Minimum order is 12 pieces for salon branding. We can match your salon\'s exact brand identity.',
  },
];

export default function BeautySalonsIndustryPage() {
  return (
    <>
      <SEO2026
        title="Beauty Salon Uniforms Saudi Arabia"
        titleAr="أزياء صالونات التجميل في السعودية"
        description="Specialized uniforms for beauty salons, spas, and wellness centers in Saudi Arabia."
        locale="en"
        pageType="industry"
        mainEntity="Beauty Salon Uniforms"
        primaryImage="/images/industries/retail-shops/retail-shops-background.jpg"
        primaryImageAlt="Beauty Salon Uniforms"
        faqs={beautyFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Beauty Salons', nameAr: 'صالونات التجميل', url: '/industries/beauty-salons' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={200}
        yearsInBusiness={20}
        industry="Beauty & Wellness"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-900 via-pink-800 to-fuchsia-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Beauty Salons', href: '/industries/beauty-salons' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-pink-400">💇‍♀️</span>
                <span className="text-sm font-medium">Trusted by 200+ Salons & Spas in KSA</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Beauty Salon{' '}
                <span className="bg-gradient-to-r from-pink-300 to-rose-300 text-transparent bg-clip-text">Uniforms</span>
              </h1>
              
              <p className="text-xl mb-8 text-rose-100 leading-relaxed max-w-2xl">
                Stylish, functional workwear designed specifically for beauty professionals. Chemical-resistant fabrics with fashion-forward designs.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🧪 Chemical-Resistant</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">✨ Stain-Repellent</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🧕 Salon Hijabs</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🎨 Custom Branding</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?industry=beauty" variant="secondary" size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold border-0">
                  Get Free Salon Quote →
                </Button>
                <Button href="/shop/retail-uniforms/beauty-salon" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pink-900">
                  Browse Salon Uniforms
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/industries/retail-shops/retail-shops-background.jpg" alt="Beauty Salon Uniforms" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-pink-600">200+</div>
                <div className="text-sm text-gray-600">Salons & Spas Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Sectors */}
          <section className="mb-20">
            <SectionHeading subtitle="Solutions for Every Beauty Business" centered>Beauty Sectors We Serve</SectionHeading>
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
            <SectionHeading subtitle="Common Questions" centered>Beauty Salon Uniforms FAQ</SectionHeading>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Salon Brand</h2>
            <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">Professional uniforms that match your salon's aesthetic. Free consultation and custom design service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?industry=beauty" className="inline-flex items-center px-8 py-4 bg-white text-pink-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-pink-900 font-bold rounded-xl transition-all">Contact Us</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/industries/beauty-salons" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
