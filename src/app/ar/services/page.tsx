import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'الخدمات — عمليات برامج الزي الموحّد',
  description: 'التصميم المخصّص، الطلبات بالجملة، إدارة البرامج، ضمان الجودة، اختيار الأقمشة، قياسات ميدانية، وأزياء مستدامة. سبع خدمات، فريق عمليات واحد.',
  alternates: { canonical: 'https://uneom.com/ar/services/' }
};

export default function ArServicesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'الخدمات', path: '/ar/services/' }]} />
      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="سبع خدمات. فريق عمليات واحد."
          title={<>من <span className="text-accent-700">التصميم</span> إلى الخياطة، وكل خطوة بينهما.</>}
          lead="UNEOM شريك في البرامج وليس كتالوجاً. هذه الخدمات التشغيلية هي ما يُبقي كل عقد زي موحّد متماسكاً."
          hero
        />
      </section>
      <section className="container-page pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Link key={service.slug} href={`/ar/services/${service.slug}/`} className="group flex flex-col gap-5 bg-white p-10 transition-colors hover:bg-ink-50/60">
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-extrabold text-accent-200 stat-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-ink-300 transition-transform group-hover:-translate-x-1 group-hover:text-accent-500" aria-hidden>←</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
                {service.nameAr}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500 pretty">
                {service.summaryAr}
              </p>
              <div className="mt-auto pt-3">
                <div className="text-xl font-bold text-navy-900 stat-number">{service.outcomeAr.value}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-accent-700">{service.outcomeAr.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-page section">
        <CtaBlock dark heading="تحتاج أكثر من خدمة واحدة؟ كلّها برنامج واحد." body="معظم عملاء UNEOM يدمجون التصميم المخصّص والطلبات بالجملة وإدارة البرامج في عقد واحد متعدد السنوات. مدير عمليات واحد. إيقاع توصيل واحد." primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }} />
      </section>
    </>
  );
}
