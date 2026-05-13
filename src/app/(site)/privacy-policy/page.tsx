import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How UNEOM collects, uses, and protects personal data — aligned to Saudi Arabia\'s Personal Data Protection Law (PDPL).',
  alternates: { canonical: 'https://uneom.com/privacy-policy/' }
};

export default function PrivacyPolicyPage() {
  const schema = webPageSchema({ path: '/privacy-policy/', name: 'Privacy Policy — UNEOM', description: 'UNEOM data privacy practices aligned with Saudi PDPL.', dateModified: '2026-05-08' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy/' }]} />
      <article className="container-prose section">
        <header>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 text-display-xl text-navy-900 balance">Privacy Policy</h1>
          <p className="mt-5 text-base text-ink-500">Last updated: 2026-05-08 · Version 1.0</p>
        </header>

        <section className="prose prose-slate mt-12 max-w-none">
          <h2 className="text-display text-navy-900">1. Who we are</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            UNEOM (&quot;we&quot;, &quot;us&quot;) is a Saudi-registered uniform manufacturer headquartered in Riyadh.
            Our processing of personal data is governed by the Saudi Personal Data Protection Law (PDPL)
            and, where applicable, the EU GDPR.
          </p>

          <h2 className="mt-12 text-display text-navy-900">2. Data we collect</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink-500">
            <li>· Contact information you provide via the quote and contact forms (name, email, phone, company, role).</li>
            <li>· Programme briefs and procurement requirements you submit.</li>
            <li>· Aggregated, non-identifying analytics from page views and interactions (no third-party advertising trackers).</li>
          </ul>

          <h2 className="mt-12 text-display text-navy-900">3. How we use it</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink-500">
            <li>· Responding to quote requests and operations enquiries.</li>
            <li>· Servicing active uniform programme contracts.</li>
            <li>· Issuing ZATCA-compliant invoices and complying with Saudi commercial regulations.</li>
            <li>· Site-wide analytics to improve content quality and accessibility.</li>
          </ul>

          <h2 className="mt-12 text-display text-navy-900">4. Your rights</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            Under PDPL you have the right to access, correct, and delete personal data we hold about you,
            and to withdraw consent for marketing communications. To exercise any of these rights, write to{' '}
            <a href="mailto:privacy@uneom.com" className="link">privacy@uneom.com</a>.
          </p>

          <h2 className="mt-12 text-display text-navy-900">5. Data retention</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            We retain quote and contact submissions for 24 months unless an active contract requires longer retention.
            Programme contract data is retained for the contract duration plus 7 years to comply with Saudi commercial record requirements.
          </p>

          <h2 className="mt-12 text-display text-navy-900">6. Security</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            All personal data is stored on encrypted infrastructure with access restricted to UNEOM operations
            staff and contracted processors who have signed PDPL-compliant data processing agreements.
          </p>

          <h2 className="mt-12 text-display text-navy-900">7. Contact</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            Privacy enquiries: <a href="mailto:privacy@uneom.com" className="link">privacy@uneom.com</a>
            <br />
            General contact: <a href="/contact/" className="link">/contact/</a>
          </p>
        </section>
      </article>
    </>
  );
}
