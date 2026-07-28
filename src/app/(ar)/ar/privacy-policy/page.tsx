import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية — UNEOM',
  description: 'كيف تجمع UNEOM البيانات الشخصية وتستخدمها وتحميها — متوافقة مع نظام حماية البيانات الشخصية السعودي.',
  alternates: {
    canonical: 'https://uneom.com/ar/privacy-policy/',
    languages: {
      en: 'https://uneom.com/privacy-policy/',
      'ar-SA': 'https://uneom.com/ar/privacy-policy/',
      'x-default': 'https://uneom.com/privacy-policy/'
    }
  }
};

export default function ArPrivacyPolicyPage() {
  const schema = webPageSchema({ path: '/ar/privacy-policy/', name: 'سياسة الخصوصية — UNEOM', description: 'ممارسات حماية البيانات الشخصية المتوافقة مع نظام PDPL السعودي.', dateModified: '2026-05-08' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'سياسة الخصوصية', path: '/ar/privacy-policy/' }]} />
      <article className="container-prose section">
        <header>
          <span className="eyebrow">قانوني</span>
          <h1 className="mt-5 text-display-xl text-navy-900 balance">سياسة الخصوصية</h1>
          <p className="mt-5 text-base text-ink-500">آخر تحديث: 2026-05-08 · الإصدار 1.0</p>
        </header>

        <section className="prose prose-slate mt-12 max-w-none">
          <h2 className="text-display text-navy-900">1. من نحن</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            UNEOM شركة سعودية مسجّلة لتصنيع الزي الموحّد مقرّها الرياض.
            تخضع معالجتنا للبيانات الشخصية لنظام حماية البيانات الشخصية السعودي (PDPL)
            وعند الاقتضاء للائحة الأوروبية العامة لحماية البيانات (GDPR).
          </p>

          <h2 className="mt-12 text-display text-navy-900">2. البيانات التي نجمعها</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink-500">
            <li>· معلومات الاتصال التي تُقدّمها عبر نماذج عروض الأسعار والتواصل (الاسم، البريد الإلكتروني، الهاتف، الشركة، الدور).</li>
            <li>· ملخّصات البرامج ومتطلبات الشراء التي تُرسلها.</li>
            <li>· تحليلات مجمّعة وغير محدِّدة للهوية من مشاهدات الصفحات والتفاعلات (بلا متتبّعات إعلانية من أطراف ثالثة).</li>
          </ul>

          <h2 className="mt-12 text-display text-navy-900">3. كيف نستخدمها</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink-500">
            <li>· الردّ على طلبات عروض الأسعار واستفسارات العمليات.</li>
            <li>· خدمة عقود برامج الزي الموحّد النشطة.</li>
            <li>· إصدار فواتير متوافقة مع ZATCA والامتثال للأنظمة التجارية السعودية.</li>
            <li>· تحليلات الموقع لتحسين جودة المحتوى وإمكانية الوصول.</li>
          </ul>

          <h2 className="mt-12 text-display text-navy-900">4. حقوقك</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            بموجب نظام PDPL، يحقّ لك الوصول إلى البيانات الشخصية التي نحتفظ بها عنك وتصحيحها وحذفها،
            وسحب موافقتك على الاتصالات التسويقية. لممارسة أيٍّ من هذه الحقوق، راسل{' '}
            <a href="mailto:privacy@uneom.com" className="link">privacy@uneom.com</a>.
          </p>

          <h2 className="mt-12 text-display text-navy-900">5. الاحتفاظ بالبيانات</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            نحتفظ بطلبات عروض الأسعار والتواصل لمدة 24 شهراً ما لم يستلزم العقد النشط احتفاظاً أطول.
            تُحتفظ ببيانات عقد البرنامج طوال مدة العقد إضافة 7 سنوات للامتثال لمتطلبات السجلات التجارية السعودية.
          </p>

          <h2 className="mt-12 text-display text-navy-900">6. الأمن</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            تُخزَّن جميع البيانات الشخصية على بنية تحتية مشفّرة مع تقييد الوصول إليها لموظفي عمليات UNEOM
            والمعالجين المتعاقدين الذين وقّعوا اتفاقيات معالجة بيانات متوافقة مع PDPL.
          </p>

          <h2 className="mt-12 text-display text-navy-900">7. التواصل</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            استفسارات الخصوصية: <a href="mailto:privacy@uneom.com" className="link">privacy@uneom.com</a>
            <br />
            التواصل العام: <a href="/ar/contact/" className="link">/ar/contact/</a>
          </p>
        </section>
      </article>
    </>
  );
}
