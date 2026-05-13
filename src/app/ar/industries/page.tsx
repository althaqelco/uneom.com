import type { Metadata } from 'next';
import { INDUSTRIES } from '@/lib/data/industries';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { IndustryCard } from '@/components/ui/IndustryCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'جميع القطاعات الـ 8 — برامج الزي الموحّد السعودي',
  description: 'UNEOM تخدم ثمانية قطاعات في المملكة العربية السعودية: الرعاية الصحية، الضيافة، الطيران، الشركات، التعليم، التصنيع، الأمن، والتجزئة. كل واحد مُنظَّم ومُتقَن.',
  alternates: { canonical: 'https://uneom.com/ar/industries/' }
};

export default function ArIndustriesHubPage() {
  const schema = collectionPageSchema({ path: '/ar/industries/', name: 'قطاعات يونيوم', description: 'ثمانية برامج زي موحّد في السعودية', items: INDUSTRIES.map(i => ({ name: i.nameAr, url: `/ar/industries/${i.slug}/`, description: i.taglineAr, image: `/images/${i.heroImage}.avif` })) });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'القطاعات', path: '/ar/industries/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${COMPANY_STATS.industries} قطاعات · ${COMPANY_STATS.activeClients}+ عميل`}
          title={<>ثمانية قطاعات سعودية. <span className="text-accent-700">متخصّصون فيها، لا مجرّد كتالوج.</span></>}
          lead="كل قطاع في هذه الصفحة هو برنامج متكامل — صفحات رئيسية، منتجات، جهات تنظيمية، دراسات حالة، وعمليات على مستوى المدينة لتنفيذه. اضغط على أي قطاع لمشاهدة هيكله الكامل."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(industry => (
            <IndustryCard key={industry.slug} industry={industry} lang="ar" />
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="لا ترى قطاعك هنا؟ هو قطاعنا أيضاً."
          body="كثير من المؤسسات السعودية تعمل في اثنين أو ثلاثة من هذه القطاعات. أخبرنا بنطاقك — سنُريك برنامجاً موحّداً يضمّ جميع الأزياء في عقد عمليات واحد."
          primary={{ label: 'تحدّث معنا', href: '/ar/contact/' }}
          secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
        />
      </section>
    </>
  );
}
