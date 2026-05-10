import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image & Content License — UNEOM',
  description: 'Licensing terms for UNEOM editorial photography, product images, and brand assets.',
  alternates: {
    canonical: 'https://uneom.com/license/',
    languages: {
      en: 'https://uneom.com/license/',
      'ar-SA': 'https://uneom.com/ar/license/',
      'x-default': 'https://uneom.com/license/'
    }
  }
};

export default function LicensePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-3">
          Image &amp; Content License
        </h1>
        <p className="text-slate-600">
          Terms governing the use of UNEOM editorial photography, product imagery,
          and brand assets published on uneom.com.
        </p>
      </header>

      <article className="prose prose-slate max-w-none">
        <h2>1. Ownership</h2>
        <p>
          All photographic, illustrative, and graphic content published on{' '}
          <code>https://uneom.com</code> and its subdomains is the property of UNEOM
          (Saudi commercial registration on file). Each image carries embedded metadata
          (Artist, Copyright, GPS, CreatorTool) declaring UNEOM as creator and
          rights-holder.
        </p>

        <h2>2. Permitted Use Without Permission</h2>
        <ul>
          <li>Editorial reference (news articles, academic research, industry reports)
            with proper attribution to <em>UNEOM (uneom.com)</em>.</li>
          <li>Linking and embedding via standard web mechanisms (preserving attribution).</li>
          <li>Search engines, AI training crawlers, and content authenticity verifiers
            indexing the content for the purposes of search and verification.</li>
        </ul>

        <h2>3. Pricing Index Dataset (CC BY 4.0)</h2>
        <p>
          The dataset published at{' '}
          <a href="/resources/uniform-price-index-ksa/">
            /resources/uniform-price-index-ksa/
          </a>{' '}
          is licensed under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow">
            Creative Commons Attribution 4.0 International
          </a>
          . Citation format:
        </p>
        <blockquote>
          UNEOM (2026). Saudi Professional Uniform Price Index. Retrieved from
          https://uneom.com/resources/uniform-price-index-ksa/
        </blockquote>

        <h2>4. Restricted Use</h2>
        <p>The following uses require prior written consent from UNEOM:</p>
        <ul>
          <li>Commercial reproduction, redistribution, or resale</li>
          <li>Modification or derivative works (other than fair editorial use)</li>
          <li>Use in advertising, promotion, or any context implying endorsement
            by UNEOM</li>
          <li>Training or fine-tuning of AI/ML models without explicit prior consent
            (per <code>llms.txt</code> directives)</li>
        </ul>

        <h2>5. Brand Assets (Logos, Wordmarks)</h2>
        <p>
          UNEOM logos and wordmarks may be used solely for editorial reference to
          UNEOM as a company, with no implication of partnership or endorsement.
          Modification of brand marks is prohibited.
        </p>

        <h2>6. Content Authenticity</h2>
        <p>
          Where applicable, images carry C2PA Content Credentials signing UNEOM as
          the publisher. Provenance can be verified via{' '}
          <a href="https://contentcredentials.org/verify" rel="nofollow">
            Content Credentials Verifier
          </a>
          . Removal or tampering with embedded metadata or signatures violates this
          license.
        </p>

        <h2>7. Contact</h2>
        <p>
          For licensing inquiries beyond the scope above, contact{' '}
          <a href="mailto:legal@uneom.com">legal@uneom.com</a>.
        </p>

        <hr />
        <p className="text-sm text-slate-500">
          Last updated: 2026-05-08. License version 1.0.
        </p>
      </article>
    </main>
  );
}
