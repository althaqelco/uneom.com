import type { Metadata } from 'next';
import { INDUSTRIES } from '@/lib/data/industries';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { IndustryCard } from '@/components/ui/IndustryCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'All 8 Industries — Saudi Uniform Programmes',
  description: 'UNEOM serves eight industry silos in Saudi Arabia: healthcare, hospitality, aviation, corporate, education, manufacturing, security, and retail. Each one regulated, each one mastered.',
  alternates: { canonical: 'https://uneom.com/industries/' }
};

export default function IndustriesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Industries', path: '/industries/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${COMPANY_STATS.industries} silos · ${COMPANY_STATS.activeClients}+ clients`}
          title={<>Eight Saudi industries. <span className="text-accent-700">Mastered, not catalogued.</span></>}
          lead="Every silo on this page is a complete programme — pillar pages, products, regulators, case studies, and the city-level operations to deliver. Click any silo to see its full architecture."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(industry => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="Don't see your sector? It's still ours."
          body="Many Saudi enterprises operate across two or three of these silos. Tell us your scope — we'll show you a unified programme that holds every uniform in one operations contract."
          primary={{ label: 'Talk to us', href: '/contact/' }}
          secondary={{ label: 'Request a quote', href: '/quote/' }}
        />
      </section>
    </>
  );
}
