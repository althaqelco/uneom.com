import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact UNEOM — Saudi Operations Team',
  description: 'Talk to UNEOM operations directly. Email info@uneom.com or call +966 56 461 2017. We respond within one business day, every weekday.',
  alternates: { canonical: 'https://uneom.com/contact/' }
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="Talk to operations"
          title={<>Direct line to the team that <span className="text-accent-700">runs your programme.</span></>}
          lead="No marketing funnel. No drip emails. The first reply you get is from the operations manager who'll handle your contract."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <a href="mailto:info@uneom.com" className="card-hover p-8 lg:p-10 group">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Email</div>
            <div className="mt-5 text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors break-all">
              info@uneom.com
            </div>
            <p className="mt-3 text-sm text-ink-500">
              For quote requests, programme briefs, and operations questions. Response within one business day.
            </p>
          </a>
          <a href="tel:+966564612017" className="card-hover p-8 lg:p-10 group">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Phone</div>
            <div className="mt-5 stat-number text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
              +966 56 461 2017
            </div>
            <p className="mt-3 text-sm text-ink-500">
              Sunday – Thursday, 08:00 – 18:00 AST. WhatsApp also available on this number.
            </p>
          </a>
          <div className="card p-8 lg:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Headquarters</div>
            <address className="mt-5 not-italic text-base font-semibold text-navy-900 leading-relaxed">
              UNEOM Saudi Arabia<br />
              King Fahd Road<br />
              Riyadh 11451<br />
              Kingdom of Saudi Arabia
            </address>
            <p className="mt-4 text-sm text-ink-500">
              Operations hubs also in Jeddah and Dammam. On-site fittings travel to all 24 cities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight bg-ink-50 border-t border-ink-100">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Faster path</span>
            <h2 className="mt-5 text-display-lg text-navy-900 balance">
              Skip the back-and-forth. Use the quote form.
            </h2>
            <p className="mt-5 text-base text-ink-500 max-w-xl mx-auto pretty">
              Four questions. Two minutes. We come back within one business day with sample garments dispatched to your office.
            </p>
            <div className="mt-8">
              <a href="/quote/" className="btn-accent">Request a quote</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
