import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';
import { QuoteFormEN } from '@/components/forms/QuoteFormEN';

export const metadata: Metadata = {
  title: 'Request a Quote — UNEOM Programme Proposal',
  description: 'Tell us about your uniform programme. UNEOM responds within one business day with sample garments, fabric options, and a programme proposal.',
  alternates: {
    canonical: 'https://uneom.com/quote/',
    languages: {
      en: 'https://uneom.com/quote/',
      'ar-SA': 'https://uneom.com/ar/quote/',
      'x-default': 'https://uneom.com/quote/'
    }
  }
};

export default function QuotePage() {
  const schema = webPageSchema({ path: '/quote/', name: 'Request a Quote — UNEOM', description: 'Submit a uniform programme brief. UNEOM responds within one business day.' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Request a Quote', path: '/quote/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow="Programme brief"
          title={<>Four questions. <span className="text-accent-700">One business day.</span></>}
          lead="Sample garments dispatched, fabric options assembled, and a programme proposal in your inbox before our next sunrise."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="mx-auto max-w-2xl">
          <QuoteFormEN />
        </div>
      </section>
    </>
  );
}
