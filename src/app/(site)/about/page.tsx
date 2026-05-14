import type { Metadata } from 'next';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatBlock } from '@/components/ui/StatBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { aboutPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'About UNEOM — Saudi B2B Uniform Manufacturer Since 2013',
  description: 'UNEOM is a Saudi-owned uniform manufacturer with 12 years of experience supplying healthcare, hospitality, aviation, manufacturing, and corporate clients across all 24 cities.',
  alternates: {
    canonical: 'https://uneom.com/about/',
    languages: {
      en: 'https://uneom.com/about/',
      'ar-SA': 'https://uneom.com/ar/about/',
      'x-default': 'https://uneom.com/about/'
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema()} />
      <Breadcrumbs items={[{ name: 'About', path: '/about/' }]} />

      {/* Hero with background image */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <picture>
            <source type="image/avif" srcSet="/images/process/custom-design-workflow.avif" />
            <source type="image/webp" srcSet="/images/process/custom-design-workflow.webp" />
            <img src="/images/process/custom-design-workflow.avif" alt="" role="presentation" className="h-full w-full object-cover opacity-30" loading="eager" width={1920} height={800} />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40" aria-hidden />
        </div>
        <div className="relative container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">{`Saudi-owned · ${COMPANY_STATS.yearsInMarket} years in market`}</span>
            <h1 className="mt-5 text-display-2xl text-white balance">We build the <span className="text-accent-300">uniforms behind</span> the Saudi enterprises that build the kingdom.</h1>
            <p className="mt-6 text-xl leading-relaxed text-white/85 pretty">{`UNEOM is a Saudi-owned uniform manufacturer founded in 2013. We operate one factory, three operations hubs, and a fitting team that travels to every Saudi province. We don't sell catalogues — we run programmes.`}</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <StatBlock value={`${COMPANY_STATS.activeClients}+`} label="Saudi enterprises" context={`Active programme contracts across ${COMPANY_STATS.industries} industries.`} size="lg" />
          <StatBlock value={`${COMPANY_STATS.yearsInMarket}`} label="Years in market" context="Founded in 2013, headquartered in Riyadh." size="lg" />
          <StatBlock value={`${COMPANY_STATS.cities}`} label="Cities served" context="Every Saudi province in the operations map." size="lg" />
          <StatBlock value={`${COMPANY_STATS.repeatClientRate}%`} label="Repeat clients" context="Built for the second contract, not the first sale." size="lg" />
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeader
                eyebrow="Operating principle"
                title="Programme partner. Not a catalogue."
              />
              <div className="mt-8 overflow-hidden rounded-2xl">
                <picture>
                  <source type="image/avif" srcSet="/images/process/quality-assurance.avif" />
                  <source type="image/webp" srcSet="/images/process/quality-assurance.webp" />
                  <img src="/images/process/quality-assurance.avif" alt="UNEOM quality assurance inspection" className="w-full object-cover rounded-2xl" loading="lazy" width={640} height={480} />
                </picture>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink-500 pretty">
              <p>
                Most uniform suppliers in Saudi Arabia are catalogue resellers. They ship a stock product, take payment, and disappear until the next order. The seam fails, the colour fades, the joiner kit doesn't arrive — and the HR team writes another procurement RFP.
              </p>
              <p>
                UNEOM is built differently. Every contract starts with an operations manager assigned to your programme — the same person you'll talk to about joiner kits, replacement cycles, and three-year fabric refreshes. We measure the things that matter to your team: shipping accuracy, fit consistency across body sizes, and the wash-cycle endurance of the fabric we sold you 18 months ago.
              </p>
              <p>
                Our model is built for the second contract, not the first sale. {COMPANY_STATS.repeatClientRate}% of UNEOM revenue comes from clients in their third programme cycle or beyond. That's the only KPI that matters.
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <picture>
                  <source type="image/avif" srcSet="/images/process/measurement-services.avif" />
                  <source type="image/webp" srcSet="/images/process/measurement-services.webp" />
                  <img src="/images/process/measurement-services.avif" alt="On-site measurement services" className="w-full object-cover rounded-2xl" loading="lazy" width={640} height={400} />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="Compliance"
            title="The certifications and registrations that anchor every claim."
            lead="UNEOM is a registered Saudi business, ZATCA e-invoice compliant, and audited annually against international quality and textile standards."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'ISO 9001:2015', body: 'Quality management system audited annually.' },
              { title: 'OEKO-TEX Standard 100', body: 'Textile harmful-substance certification across the full healthcare line.' },
              { title: 'SASO Quality Mark', body: 'Saudi Standards, Metrology, and Quality Organisation registered.' },
              { title: 'Maroof Verified', body: 'Saudi Ministry of Commerce business verification.' }
            ].map(c => (
              <div key={c.title} className="bg-white p-8">
                <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="Want to see the operations brief?" body="Detailed programme economics, fabric specs, and a portfolio of Saudi enterprises we've worked with — request the document and we'll email it within the hour." primary={{ label: 'Talk to us', href: '/contact/' }} />
      </section>
    </>
  );
}
