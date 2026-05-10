import type { Metadata } from 'next';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Request a Quote — UNEOM Programme Proposal',
  description: 'Tell us about your uniform programme. UNEOM responds within one business day with sample garments, fabric options, and a programme proposal.',
  alternates: { canonical: 'https://uneom.com/quote/' }
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Request a Quote', path: '/quote/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="Programme brief"
          title={<>Four questions. <span className="text-accent-700">One business day.</span></>}
          lead="Sample garments dispatched, fabric options assembled, and a programme proposal in your inbox before our next sunrise."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="mx-auto max-w-2xl">
          <form action="/api/quote" method="POST" className="card p-8 lg:p-10 space-y-6">
            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-navy-900">Which industry?</label>
              <p className="text-xs text-ink-400 mt-1">We tailor the proposal to your sector's regulators.</p>
              <select id="industry" name="industry" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
                <option value="">Select an industry...</option>
                {INDUSTRIES.map(i => (
                  <option key={i.slug} value={i.slug}>{i.nameEn}</option>
                ))}
              </select>
            </div>

            {/* Headcount */}
            <div>
              <label htmlFor="headcount" className="block text-sm font-semibold text-navy-900">How many employees?</label>
              <p className="text-xs text-ink-400 mt-1">Programme economics shift around 200, 1000, and 5000 employees.</p>
              <select id="headcount" name="headcount" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
                <option value="">Select a band...</option>
                <option value="50-199">50 – 199 employees</option>
                <option value="200-999">200 – 999 employees</option>
                <option value="1000-4999">1,000 – 4,999 employees</option>
                <option value="5000+">5,000+ employees</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-navy-900">Primary city of operations</label>
              <p className="text-xs text-ink-400 mt-1">If multi-city, pick the largest. We'll cover the rest.</p>
              <select id="city" name="city" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
                <option value="">Select a city...</option>
                {SAUDI_CITIES.map(c => (
                  <option key={c.slug} value={c.slug}>{c.nameEn} — {c.region}</option>
                ))}
              </select>
            </div>

            <div className="border-t border-ink-100 pt-6">
              <p className="text-sm font-semibold text-navy-900">Your details</p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-ink-500">Name</label>
                  <input id="name" name="name" type="text" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-ink-500">Company</label>
                  <input id="company" name="company" type="text" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ink-500">Work email</label>
                  <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-ink-500">Phone (optional)</label>
                  <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="notes" className="block text-xs font-medium text-ink-500">Anything specific?</label>
                <textarea id="notes" name="notes" rows={3} placeholder="Existing programme, target launch date, custom designs..." className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-base">
              Send the brief →
            </button>

            <p className="text-xs text-ink-400 text-center">
              We'll respond within one business day. No marketing emails.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
