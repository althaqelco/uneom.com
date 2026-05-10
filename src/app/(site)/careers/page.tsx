import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { COMPANY_STATS } from '@/lib/data/stats';

export const metadata: Metadata = {
  title: 'Careers — Build Programmes, Not Catalogues',
  description: 'UNEOM is hiring across operations, design, manufacturing, and on-site fitting teams. Saudi-owned, programme-focused, and built for the long term.',
  alternates: { canonical: 'https://uneom.com/careers/' }
};

const ROLES = [
  { title: 'Operations Programme Manager', team: 'Operations', city: 'Riyadh', type: 'Full-time' },
  { title: 'Senior Textile Engineer', team: 'Production', city: 'Riyadh', type: 'Full-time' },
  { title: 'On-site Fitting Lead — Eastern Province', team: 'Operations', city: 'Dammam', type: 'Full-time' },
  { title: 'Programme Sales Lead — Hospitality', team: 'Sales', city: 'Jeddah', type: 'Full-time' },
  { title: 'Quality Assurance Inspector', team: 'Production', city: 'Riyadh', type: 'Full-time' },
  { title: 'Brand Designer', team: 'Design', city: 'Riyadh', type: 'Full-time' }
];

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Careers', path: '/careers/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${COMPANY_STATS.staff}+ team · ${ROLES.length} open roles`}
          title={<>We hire for the <span className="text-accent-700">second contract</span>, not the first sale.</>}
          lead="UNEOM is a Saudi-owned uniform programme operator. We don't sell catalogues — we run multi-year contracts. The roles below are for people who want to build something that survives the second-year audit."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-3xl ring-1 ring-ink-100">
          <table className="w-full text-left">
            <thead className="bg-ink-50">
              <tr>
                <th className="p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500">Role</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 md:table-cell">Team</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 md:table-cell">City</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 lg:table-cell">Type</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 bg-white">
              {ROLES.map((r, i) => (
                <tr key={i} className="hover:bg-ink-50/60 transition-colors">
                  <td className="p-5">
                    <div className="font-bold text-navy-900">{r.title}</div>
                    <div className="text-xs text-ink-500 md:hidden">{r.team} · {r.city} · {r.type}</div>
                  </td>
                  <td className="hidden p-5 text-sm text-ink-500 md:table-cell">{r.team}</td>
                  <td className="hidden p-5 text-sm text-ink-500 md:table-cell">{r.city}</td>
                  <td className="hidden p-5 text-sm text-ink-500 lg:table-cell">{r.type}</td>
                  <td className="p-5 text-right">
                    <a href="mailto:careers@uneom.com" className="text-sm font-semibold text-accent-700 hover:text-accent-600 inline-flex items-center gap-1">
                      Apply <span aria-hidden>→</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="Don't see your role?" body="If you'd build for UNEOM, write to us anyway. careers@uneom.com." primary={{ label: 'Send a CV', href: 'mailto:careers@uneom.com' }} />
      </section>
    </>
  );
}
