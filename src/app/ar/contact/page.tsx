import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { contactPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'تواصل مع UNEOM — فريق العمليات السعودي',
  description: 'تحدّث مباشرة مع فريق عمليات UNEOM. راسلنا على info@uneom.com أو اتصل على +966 56 461 2017. نردّ خلال يوم عمل واحد، كل يوم أسبوع.',
  alternates: { canonical: 'https://uneom.com/ar/contact/' }
};

export default function ArContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema('ar')} />
      <Breadcrumbs items={[{ name: 'تواصل معنا', path: '/ar/contact/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="تحدّث مع العمليات"
          title={<>خط مباشر للفريق الذي <span className="text-accent-700">يُدير برنامجك.</span></>}
          lead="بلا قمع تسويقي. بلا رسائل مُتدرِّجة. أوّل ردّ تتلقّاه يكون من مدير العمليات الذي سيتولّى عقدك."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <a href="mailto:info@uneom.com" className="card-hover p-8 lg:p-10 group">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">البريد الإلكتروني</div>
            <div className="mt-5 text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors break-all">
              info@uneom.com
            </div>
            <p className="mt-3 text-sm text-ink-500">
              لطلبات عروض الأسعار والملخّصات التشغيلية وأسئلة العمليات. ردّ خلال يوم عمل واحد.
            </p>
          </a>
          <a href="tel:+966564612017" className="card-hover p-8 lg:p-10 group">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">الهاتف</div>
            <div className="mt-5 stat-number text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
              +966 56 461 2017
            </div>
            <p className="mt-3 text-sm text-ink-500">
              الأحد – الخميس، 08:00 – 18:00 بتوقيت السعودية. واتساب متاح على هذا الرقم أيضاً.
            </p>
          </a>
          <div className="card p-8 lg:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">المقرّ الرئيسي</div>
            <address className="mt-5 not-italic text-base font-semibold text-navy-900 leading-relaxed">
              UNEOM السعودية<br />
              طريق الملك فهد<br />
              الرياض 11451<br />
              المملكة العربية السعودية
            </address>
            <p className="mt-4 text-sm text-ink-500">
              مراكز عمليات أيضاً في جدة والدمام. الزيارات الميدانية للقياسات تصل إلى جميع الـ 24 مدينة.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight bg-ink-50 border-t border-ink-100">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">المسار الأسرع</span>
            <h2 className="mt-5 text-display-lg text-navy-900 balance">
              تجاوز التراسل. استخدم نموذج عرض السعر.
            </h2>
            <p className="mt-5 text-base text-ink-500 max-w-xl mx-auto pretty">
              أربعة أسئلة. دقيقتان. نعود خلال يوم عمل واحد بعيّنات قماش تُشحَن إلى مكتبك.
            </p>
            <div className="mt-8">
              <a href="/ar/quote/" className="btn-accent">طلب عرض سعر</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
