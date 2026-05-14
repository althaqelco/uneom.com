import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of uneom.com and engagement with UNEOM uniform programmes.',
  alternates: {
    canonical: 'https://uneom.com/terms-of-service/',
    languages: {
      en: 'https://uneom.com/terms-of-service/',
      'ar-SA': 'https://uneom.com/ar/terms-of-service/',
      'x-default': 'https://uneom.com/terms-of-service/'
    }
  }
};

export default function TermsPage() {
  const schema = webPageSchema({ path: '/terms-of-service/', name: 'Terms of Service — UNEOM', description: 'Terms governing UNEOM services and uniform programme agreements.', dateModified: '2026-05-08' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Terms of Service', path: '/terms-of-service/' }]} />
      <article className="container-prose section">
        <header>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 text-display-xl text-navy-900 balance">Terms of Service</h1>
          <p className="mt-5 text-base text-ink-500">Last updated: 2026-05-08 · Version 1.0</p>
        </header>

        <section className="prose prose-slate mt-12 max-w-none">
          <h2 className="text-display text-navy-900">1. Scope</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            These terms govern access to and use of <a href="https://uneom.com" className="link">uneom.com</a> and
            engagement with UNEOM uniform programmes. By using the site or submitting a quote request, you accept these terms.
          </p>

          <h2 className="mt-12 text-display text-navy-900">2. Quote requests are not binding</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            Submitting a quote request does not constitute an order or a binding contract. UNEOM responds with
            a programme proposal within one business day; binding contractual terms apply only once a signed
            programme contract is exchanged.
          </p>

          <h2 className="mt-12 text-display text-navy-900">3. Pricing</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            All prices listed on uneom.com are indicative programme prices in Saudi Riyal (SAR), exclusive of VAT
            unless explicitly stated. Final pricing depends on volume, fabric specification, customisation, and
            programme rotation cycle.
          </p>

          <h2 className="mt-12 text-display text-navy-900">4. Intellectual property</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            All content on uneom.com — including editorial articles, photography, fabric specifications, and
            schema markup — is the property of UNEOM. Editorial reference with attribution is permitted.
            Commercial reproduction requires written consent. See <a href="/license/" className="link">/license/</a> for details.
          </p>

          <h2 className="mt-12 text-display text-navy-900">5. Compliance</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            UNEOM operates under Saudi commercial registration and is registered for ZATCA e-invoicing.
            All transactions issue ZATCA-compliant invoices. Compliance certifications referenced on the site
            (ISO 9001, OEKO-TEX) are independently audited and renewed annually.
          </p>

          <h2 className="mt-12 text-display text-navy-900">6. Liability</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            UNEOM provides the site &quot;as is&quot; and is not liable for indirect, consequential, or special damages
            arising from use of the site. Contractual liability is governed exclusively by the signed
            programme contract for each engagement.
          </p>

          <h2 className="mt-12 text-display text-navy-900">7. Governing law</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            These terms are governed by the laws of the Kingdom of Saudi Arabia. Disputes are subject to the
            jurisdiction of Saudi courts.
          </p>

          <h2 className="mt-12 text-display text-navy-900">8. Contact</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            Legal enquiries: <a href="mailto:legal@uneom.com" className="link">legal@uneom.com</a>
          </p>
        </section>
      </article>
    </>
  );
}
