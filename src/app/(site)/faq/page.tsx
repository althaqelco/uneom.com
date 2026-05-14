import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema } from '@/lib/seo/schemas';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'FAQ — UNEOM Saudi Uniform Programmes',
  description: 'Common questions about UNEOM uniform programmes: lead times, customisation, fabric specs, compliance, multi-city operations, and replacement cycles.',
  alternates: {
    canonical: 'https://uneom.com/faq/',
    languages: {
      en: 'https://uneom.com/faq/',
      'ar-SA': 'https://uneom.com/ar/faq/',
      'x-default': 'https://uneom.com/faq/'
    }
  }
};

const FAQS: { q: string; a: string }[] = [
  { q: 'What is the typical lead time for a UNEOM uniform programme?', a: 'Repeat programmes ship in 14–21 days. New designs ship in 21–35 days, including on-site fittings.' },
  { q: 'Does UNEOM serve all Saudi cities?', a: 'Yes. UNEOM operates from Riyadh with operations hubs in Jeddah and Dammam, and ships to all 24 Saudi cities. On-site fittings travel to any region for headcounts above 50.' },
  { q: 'What is the minimum order quantity?', a: 'Programme contracts start at 50 units. We can produce smaller initial samples but our model is built for ongoing programmes, not one-off purchases.' },
  { q: 'Can UNEOM customise designs to our brand?', a: 'Custom design is a core service. Six-step workflow from brand audit to production tech-pack. Average concept-to-sample time is 14 days.' },
  { q: 'Which Saudi compliance frameworks does UNEOM cover?', a: 'ZATCA e-invoicing, MoH textile standards (healthcare), GACA airworthiness (aviation), HCIS PPE regulations (industrial/security), and SASO Quality Mark across all categories.' },
  { q: 'What international certifications does UNEOM hold?', a: 'ISO 9001:2015 (quality management) and OEKO-TEX Standard 100 (textile harmful-substance certification) across the full healthcare line.' },
  { q: 'Does UNEOM provide warranties?', a: 'Standard 12-month warranty on all programmes. Healthcare line carries an 18-month warranty. Manufacturing FR coveralls carry an 18-month structural warranty.' },
  { q: 'What payment methods does UNEOM accept?', a: 'Mada, STC Pay, Apple Pay, SADAD, and bank transfer. ZATCA-compliant e-invoicing on every transaction.' },
  { q: 'Can UNEOM manage joiner kits and replacements?', a: 'Yes — programme management is a dedicated service. New-hire kits dispatched within 48 hours nationwide, exit returns coordinated, scheduled rotations on contract.' },
  { q: 'How do you handle multi-city operations?', a: 'Single contract, single operations manager, distributed delivery. We coordinate fitting visits across cities and consolidate replacement cycles into a unified cadence.' }
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <Breadcrumbs items={[{ name: 'FAQ', path: '/faq/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="FAQ"
          title="Programme questions, answered."
          lead="The questions we hear most from Saudi enterprises evaluating uniform programme partners."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="mx-auto max-w-3xl">
          <dl className="divide-y divide-ink-100 border-t border-ink-100">
            {FAQS.map(f => (
              <div key={f.q} className="py-8">
                <dt className="text-lg font-bold text-navy-900 balance">{f.q}</dt>
                <dd className="mt-3 text-base leading-relaxed text-ink-500 pretty">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="Question not answered here?"
          body="Talk to operations directly. info@uneom.com or +966 56 461 2017."
          primary={{ label: 'Talk to us', href: '/contact/' }}
          secondary={{ label: 'Request a quote', href: '/quote/' }}
        />
      </section>
    </>
  );
}
