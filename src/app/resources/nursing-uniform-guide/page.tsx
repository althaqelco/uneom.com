import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Nursing Uniform Guide Saudi Arabia | Complete Selection Guide - UNEOM',
  titleAr: 'دليل زي التمريض في السعودية | دليل الاختيار الشامل - يونيوم',
  description: 'Expert guide to nursing uniforms in Saudi Arabia. Fit, function, fabric selection, infection prevention, department coding, medical hijabs, and MOH compliance. Free resource for nurse managers.',
  descriptionAr: 'دليل خبير لأزياء التمريض في السعودية. المقاس والوظيفة والأقمشة ومكافحة العدوى.',
  keywords: ['nursing uniform guide saudi', 'nurse scrubs selection', 'nursing wear ksa', 'medical hijab nurses', 'scrub fit guide'],
  keywordsAr: ['دليل زي التمريض', 'اختيار سكراب التمريض', 'حجاب طبي للممرضات'],
  locale: 'en', pageType: 'article', path: '/resources/nursing-uniform-guide',
  image: '/images/healthcare/nursing-hero.jpg', imageAlt: 'Nursing Uniform Guide',
  aiSummary: 'Complete nursing uniform guide for Saudi Arabia: scrub selection criteria, fit guide for different body types, fabric technology comparison, infection prevention features, department color coding, medical hijab options, comfort for 12-hour shifts, and MOH compliance requirements.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'Choosing the Right Nursing Scrubs', content: 'Key factors for nursing scrub selection: Fabric Weight (lightweight for Saudi heat, 150-180 GSM recommended), Stretch (4-way stretch essential for patient handling), Antimicrobial Treatment (silver-ion technology for infection control), Moisture Management (wicking fabrics for 12-hour shifts), Pockets (minimum 5 pockets for instruments, phone, badge), and Fit (modern tailored fit vs. traditional loose). UNEOM offers sizing guides and free sample trials.' },
  { title: 'Fabric Technology Comparison', content: 'Top fabrics for Saudi nursing: Polyester-Rayon-Spandex (65/30/5) — best all-round performance, wrinkle-resistant. Cotton-Poly (60/40) — softest feel, good breathability, more wrinkle-prone. 100% Polyester — most durable, fastest drying, best colorfastness. Antimicrobial treatments: Silver-ion (50+ washes), Zinc-based (30 washes), or Bio-based (25 washes). Recommendation: polyester-rayon-spandex with silver-ion antimicrobial for Saudi hospitals.' },
  { title: 'Fit Guide for Different Body Types', content: 'Proper fit improves comfort and professional appearance: Petite (shortened hem, narrower shoulders, adjusted sleeve length), Regular (standard measurements), Tall (extended hem, longer sleeves, higher back rise), Plus Size (generous cut, reinforced seams, extended size range S-5XL), Maternity (adjustable waist, expandable panels). All UNEOM nursing uniforms available in sizes XS-5XL with free alteration for bulk orders.' },
  { title: 'Medical Hijab Selection', content: 'Saudi nursing hijabs should be: Quick-dry antimicrobial fabric, pin-free design (magnetic or snap closure for infection control), comfortable for 12-hour shifts, compatible with surgical caps, easy to sanitize (machine washable at 60°C+), available in department colors, and non-restrictive for patient care movements. UNEOM offers 8 medical hijab styles designed specifically for healthcare professionals.' },
  { title: 'Infection Prevention Features', content: 'Critical infection prevention features in nursing uniforms: Antimicrobial fabric treatment (kills 99.9% of bacteria), fluid-resistant panels (AATCC 42 certified), minimal seam construction (reduces contamination harboring), smooth buttons and closures (easy to clean), color-coded by department (prevents cross-contamination), and launderable at 71°C (thermal disinfection compatible).' },
];

const faqs = [
  { question: 'How many scrub sets does a nurse need?', answer: 'Recommended: 5-7 scrub sets per nurse (one per shift plus extras for laundry rotation). For high-contamination departments (ER, ICU, OR): 7-10 sets. UNEOM recommends facilities stock 2 additional sets per nurse for emergency replacements. Most hospital programs include 5 sets per year with mid-year replacement for heavily used items.' },
  { question: 'What is the best scrub color for nursing departments?', answer: 'Standard Saudi hospital nursing colors: Teal/Aqua (general nursing), Navy (ICU nursing), Pink (pediatric nursing), Purple (obstetric nursing), Green (surgical nursing), and White (clinical nurse specialists). UNEOM can produce any Pantone color. We recommend choosing colors that are calming for patients and distinguishable from other departments.' },
  { question: 'Should nursing scrubs have antimicrobial treatment?', answer: 'Yes, strongly recommended. Antimicrobial scrubs reduce: bacterial load by 99.9%, odor development during long shifts, cross-contamination risk between patients, laundry contamination in shared facilities, and infection rates in clinical areas. The added cost (SAR 10-20 per garment) is minimal compared to the infection prevention benefits. All UNEOM nursing scrubs include antimicrobial treatment as standard.' },
];

export default function NursingUniformGuidePage() {
  return (
    <>
      <SEO2026 title="Nursing Uniform Guide" titleAr="دليل زي التمريض" description="Expert nursing uniform selection guide for Saudi Arabia." locale="en" pageType="article" mainEntity="Nursing Uniform Guide" primaryImage="/images/healthcare/nursing-hero.jpg" primaryImageAlt="Nursing Uniforms" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Nursing Uniform Guide', url: '/resources/nursing-uniform-guide' }]} certifications={['MOH', 'SASO']} clientCount={200} yearsInBusiness={20} industry="Healthcare" />
      <section className="bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-700 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Nursing Guide', href: '/resources/nursing-uniform-guide' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-emerald-400">👩‍⚕️</span><span className="text-sm font-medium">Expert Resource</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Nursing Uniform <span className="bg-gradient-to-r from-emerald-300 to-teal-300 text-transparent bg-clip-text">Guide</span></h1>
            <p className="text-xl text-teal-100 leading-relaxed">Complete guide to selecting, fitting, and maintaining nursing uniforms in Saudi healthcare facilities.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (
              <article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-emerald-100 text-emerald-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{s.content}</p>
              </article>
            ))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Nursing Uniform FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Order Nursing Uniforms</h2>
            <p className="text-xl mb-8 text-teal-100">Expert-designed nursing scrubs meeting all Saudi healthcare standards.</p>
            <Link href="/shop/medical-scrubs/nursing-scrubs" className="inline-flex items-center px-8 py-4 bg-white text-teal-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Shop Nursing Scrubs →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
