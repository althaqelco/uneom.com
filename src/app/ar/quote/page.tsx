import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';
import { QuoteFormAR } from '@/components/forms/QuoteFormAR';

export const metadata: Metadata = {
  title: 'طلب عرض سعر — مقترح برنامج UNEOM',
  description: 'أخبرنا عن برنامج الزي الموحّد الخاص بك. UNEOM يردّ خلال يوم عمل واحد بعيّنات قماش وخيارات تصميم ومقترح برنامج.',
  alternates: {
    canonical: 'https://uneom.com/ar/quote/',
    languages: {
      en: 'https://uneom.com/quote/',
      'ar-SA': 'https://uneom.com/ar/quote/',
      'x-default': 'https://uneom.com/quote/'
    }
  }
};

export default function ArQuotePage() {
  const schema = webPageSchema({ path: '/ar/quote/', name: 'طلب عرض سعر — UNEOM', description: 'أرسل ملخص برنامج الزي الموحّد. UNEOM يردّ خلال يوم عمل واحد.' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'طلب عرض سعر', path: '/ar/quote/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="ملخّص البرنامج"
          title={<>أربعة أسئلة. <span className="text-accent-700">يوم عمل واحد.</span></>}
          lead="عيّنات قماش تُشحَن، خيارات تصميم مُجمَّعة، ومقترح برنامج في صندوق بريدك قبل شروق الشمس التالي."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="mx-auto max-w-2xl">
          <QuoteFormAR />
        </div>
      </section>
    </>
  );
}
