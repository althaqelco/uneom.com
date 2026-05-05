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
  title: 'Education Uniforms Saudi Arabia | School & University Workwear - UNEOM',
  titleAr: 'الزي المدرسي والجامعي في السعودية | زي الأكاديمي - يونيوم',
  description: 'Buy premium school uniforms & academic workwear in Saudi Arabia. Student uniforms, teacher attire, university robes & staff clothing. Custom designs for schools in Riyadh, Jeddah, Dammam. Get free quote!',
  descriptionAr: 'اشتري أفضل الأزياء المدرسية والأكاديمية في السعودية. زي طلاب، ملابس معلمين، أثواب تخرج وزي موظفين. تصاميم مخصصة للمدارس. احصل على عرض سعر مجاني!',
  keywords: [
    'school uniforms saudi arabia', 'education uniforms riyadh', 'student uniforms ksa',
    'teacher uniforms saudi', 'university uniforms', 'school workwear jeddah',
    'academic attire saudi', 'graduation robes ksa', 'staff uniforms education',
    'private school uniforms riyadh', 'international school uniforms saudi',
  ],
  keywordsAr: [
    'زي مدرسي السعودية', 'زي طلاب الرياض', 'زي معلمين', 'زي جامعي',
    'ملابس مدرسية جدة', 'أثواب تخرج',
  ],
  locale: 'en',
  pageType: 'product',
  path: '/shop/education',
  image: '/images/industries/education/education_uniforms_background.jpg',
  imageAlt: 'Education Uniforms - School and University Workwear in Saudi Arabia',
  aiSummary: 'UNEOM provides education uniforms for schools, universities, and training centers in Saudi Arabia. Range includes student uniforms (boys and girls sets), sports uniforms, teacher professional attire, administrative staff clothing, university faculty blazers, graduation attire, and lab coats. All garments feature durable, easy-care fabrics suitable for Saudi climate. Serving 500+ educational institutions. Custom designs with school logos and colors.',
  aiSummaryAr: 'توفر يونيوم أزياء التعليم للمدارس والجامعات ومراكز التدريب في السعودية.',
});

export const dynamic = 'force-static';

const educationFAQs = [
  {
    question: 'What types of education uniforms does UNEOM offer?',
    answer: 'UNEOM offers a complete range of education uniforms including: Boys School Uniforms (shirts, trousers, blazers), Girls School Uniforms (dresses, blouses, skirts, hijabs), Sports Uniforms (PE kits, athletic wear), Teacher Professional Attire (suits, dresses, blazers), Administrative Staff Uniforms, University Faculty Blazers, Graduation Gowns & Caps, and Lab Coats for science departments.',
  },
  {
    question: 'Can you supply uniforms for international schools in Saudi Arabia?',
    answer: 'Yes, UNEOM is a preferred supplier for international schools across Saudi Arabia. We work with British, American, IB, and other international curricula schools. We can replicate existing uniform designs or create new ones. We handle large-scale orders for entire school populations, typically 200-2000+ students.',
  },
  {
    question: 'Do you offer school PE and sports uniforms?',
    answer: 'Yes, our PE and sports uniform range includes moisture-wicking t-shirts, athletic shorts, track pants, sports hijabs, house color variations, and sports bags. All materials are selected for durability and comfort in Saudi Arabia\'s climate. We can produce house-specific colors with school logos.',
  },
  {
    question: 'What is the ordering timeline for school uniforms?',
    answer: 'For new school year orders, we recommend placing orders 8-12 weeks before the academic year starts. Standard production takes 3-4 weeks. Rush orders (2 weeks) available with surcharge. We offer parent portals for individual student sizing and reorders throughout the year.',
  },
];

const educationProducts = [
  { name: 'Boys School Uniforms', icon: '👦', desc: 'Classic and premium sets including shirts, trousers, blazers, and ties.', price: 'From SAR 129', href: '/shop/education/school-uniforms/premium-boys-set' },
  { name: 'Girls School Uniforms', icon: '👧', desc: 'Elegant sets including dresses, blouses, and optional school hijabs.', price: 'From SAR 129', href: '/shop/education/school-uniforms/classic-girls-set' },
  { name: 'Sports & PE Kits', icon: '⚽', desc: 'Athletic wear for PE classes. Moisture-wicking, house colors available.', price: 'From SAR 89', href: '/shop/education/school-uniforms/sports-set' },
  { name: 'Teacher Uniforms', icon: '👩‍🏫', desc: 'Professional attire for teaching staff. Comfortable, polished appearance.', price: 'From SAR 179', href: '/shop/education/staff-uniforms/teacher-uniform' },
  { name: 'University Faculty Blazers', icon: '🎓', desc: 'Premium blazers for university professors and faculty members.', price: 'From SAR 349', href: '/shop/education/university-attire/faculty-blazer' },
  { name: 'Graduation Attire', icon: '🎓', desc: 'Traditional graduation gowns, caps, and hoods for ceremonies.', price: 'From SAR 199', href: '/shop/education/university-attire/graduate-attire' },
];

export default function EducationShopPage() {
  return (
    <>
      <SEO2026
        title="Education Uniforms Saudi Arabia"
        titleAr="الزي المدرسي والجامعي في السعودية"
        description="UNEOM provides education uniforms for schools and universities in Saudi Arabia."
        locale="en"
        pageType="product"
        mainEntity="Education Uniforms"
        primaryImage="/images/industries/education/education_uniforms_background.jpg"
        primaryImageAlt="Education Uniforms in Saudi Arabia"
        faqs={educationFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
          { name: 'Education', nameAr: 'التعليم', url: '/shop/education' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={500}
        yearsInBusiness={20}
        industry="Education"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400">🎓</span>
                <span className="text-sm font-medium">Serving 500+ Schools & Universities in KSA</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Education{' '}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 text-transparent bg-clip-text">Uniforms</span>
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed max-w-2xl">
                Complete uniform solutions for schools, universities, and training centers across Saudi Arabia. From student wear to faculty attire.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏫 500+ Schools</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">👕 Custom Designs</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🌡️ Climate-Ready</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">♻️ Durable Fabrics</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?category=education" variant="secondary" size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold border-0">
                  Get Free Education Quote →
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/industries/education/education_uniforms_background.jpg" alt="Education Uniforms in Saudi Arabia" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Schools & Universities</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Products */}
          <section className="mb-20">
            <SectionHeading subtitle="Complete Academic Uniform Range" centered>Education Uniform Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {educationProducts.map((product, index) => (
                <Link key={index} href={product.href} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-emerald-600">{product.price}</span>
                    <span className="text-emerald-600 font-medium text-sm group-hover:underline">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Education Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {educationFAQs.map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Outfit Your Entire Institution</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">From individual schools to nationwide franchise operations — UNEOM delivers consistent, high-quality education uniforms.</p>
            <Link href="/quote?category=education" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/shop/education" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
