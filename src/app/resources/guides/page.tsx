import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform & Safety Guides Saudi Arabia | Expert Resources - UNEOM',
  titleAr: 'أدلة الزي الموحد والسلامة في السعودية | موارد الخبراء - يونيوم',
  description: 'Expert guides on uniforms, safety standards, PPE regulations & healthcare workwear in Saudi Arabia. Free downloadable resources for procurement managers, safety officers & HR professionals.',
  descriptionAr: 'أدلة خبراء حول الأزياء الموحدة ومعايير السلامة ولوائح PPE في السعودية. موارد مجانية لمدراء المشتريات.',
  keywords: ['uniform guides saudi', 'safety standards guide ksa', 'PPE regulations saudi arabia', 'workwear guide', 'healthcare uniform standards'],
  keywordsAr: ['أدلة الزي الموحد', 'معايير السلامة السعودية', 'دليل PPE'],
  locale: 'en', pageType: 'article', path: '/resources/guides',
  image: '/images/resources/guides-hero.jpg', imageAlt: 'UNEOM Expert Guides and Resources',
  aiSummary: 'UNEOM resource library: expert guides on healthcare uniform standards, PPE safety regulations, NFPA 70E compliance, cleanroom best practices, security equipment standards, sustainability in workwear, and weather protection. Free resources for Saudi procurement and safety professionals.',
});

export const dynamic = 'force-static';

const guides = [
  { title: 'Healthcare Uniform Standards Guide', slug: '/resources/healthcare-uniform-standards', icon: '🏥', desc: 'MOH compliance, infection control, fabric specifications for Saudi healthcare facilities.', category: 'Healthcare' },
  { title: 'Nursing Uniform Guide', slug: '/resources/nursing-uniform-guide', icon: '👩‍⚕️', desc: 'Complete guide to nursing uniforms: fit, function, infection prevention, and department coding.', category: 'Healthcare' },
  { title: 'Safety Standards Guide', slug: '/resources/safety-standards-guide', icon: '🛡️', desc: 'SASO, ISO, and international safety standards for workplace uniforms and PPE in Saudi Arabia.', category: 'Safety' },
  { title: 'NFPA 70E Compliance Guide', slug: '/resources/nfpa70e-guide', icon: '⚡', desc: 'Arc flash protection, flame-resistant clothing requirements, and electrical safety PPE.', category: 'Safety' },
  { title: 'Electrical Safety PPE Guide', slug: '/resources/electrical-safety-ppe-guide', icon: '🔌', desc: 'Complete guide to PPE for electrical workers: insulated gloves, face shields, FR clothing.', category: 'Safety' },
  { title: 'Cleanroom Best Practices', slug: '/resources/cleanroom-best-practices', icon: '🧪', desc: 'ISO 14644 cleanroom garment standards, gowning procedures, and contamination control.', category: 'Specialized' },
  { title: 'Security Equipment Standards', slug: '/resources/security-equipment-standards', icon: '🔒', desc: 'Standards for security uniforms, tactical gear, body armor certification, and duty equipment.', category: 'Security' },
  { title: 'Professional Security Standards', slug: '/resources/professional-security-standards', icon: '🎖️', desc: 'Executive protection uniform standards and VIP security dress codes.', category: 'Security' },
  { title: 'Tactical Equipment Standards', slug: '/resources/tactical-equipment-standards', icon: '⚔️', desc: 'NIJ standards for body armor, helmet ratings, and tactical gear certification.', category: 'Security' },
  { title: 'Tactical Outerwear Standards', slug: '/resources/tactical-outerwear-standards', icon: '🧥', desc: 'Tactical jacket standards, weather protection ratings, and flame resistance requirements.', category: 'Security' },
  { title: 'Lightweight Tactical Guide', slug: '/resources/lightweight-tactical-guide', icon: '🕶️', desc: 'Guide to covert and plainclothes security uniforms for corporate and event security.', category: 'Security' },
  { title: 'Sustainability Guide', slug: '/resources/sustainability-guide', icon: '🌿', desc: 'Vision 2030 aligned sustainability guide: recycled fabrics, carbon-neutral production, ESG reporting.', category: 'Sustainability' },
  { title: 'Weather Protection Guide', slug: '/resources/weather-protection-guide', icon: '🌡️', desc: 'Guide to climate-adaptive workwear for Saudi heat, rain, cold storage, and UV exposure.', category: 'Specialized' },
];

export default function GuidesPage() {
  const categories = [...new Set(guides.map(g => g.category))];
  return (
    <>
      <SEO2026 title="Expert Guides & Resources" titleAr="أدلة وموارد الخبراء" description="Free expert guides on uniforms and safety standards." locale="en" pageType="article" mainEntity="Uniform & Safety Guides" primaryImage="/images/resources/guides-hero.jpg" primaryImageAlt="UNEOM Guides" breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Guides', url: '/resources/guides' }]} certifications={[]} clientCount={500} yearsInBusiness={20} industry="Workwear" />
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Guides', href: '/resources/guides' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Expert <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">Guides</span></h1>
            <p className="text-xl text-indigo-100 leading-relaxed">Free expert resources on uniforms, safety standards, PPE regulations, and best practices for Saudi Arabia&apos;s industries.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          {categories.map(cat => (
            <section key={cat} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4">{cat}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.filter(g => g.category === cat).map((g, i) => (
                  <Link key={i} href={g.slug} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-6">
                    <div className="text-3xl mb-3">{g.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{g.title}</h3>
                    <p className="text-gray-600 text-sm">{g.desc}</p>
                    <span className="inline-block mt-4 text-indigo-600 font-medium text-sm group-hover:underline">Read Guide →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12 mt-12">
            <h2 className="text-3xl font-bold mb-6">Need Custom Guidance?</h2>
            <p className="text-xl mb-8 text-indigo-100">Our uniform consultants can provide personalized recommendations for your organization.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Contact Our Experts →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
