import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'نماذج سياسة الزي الموحد للمستشفيات والعيادات الطبية | يونيوم',
  titleAr: 'نماذج سياسة الزي الموحد للمستشفيات والعيادات الطبية | يونيوم',
  description: 'قوالب ونماذج قابلة للتعديل لسياسة الزي الموحد (Uniform Policy Templates) للمستشفيات والمراكز الطبية في السعودية. دليل شامل لتنظيم مظهر الكوادر الصحية والإدارية.',
  descriptionAr: 'قوالب ونماذج قابلة للتعديل لسياسة الزي الموحد (Uniform Policy Templates) للمستشفيات والمراكز الطبية في السعودية. دليل شامل لتنظيم مظهر الكوادر الصحية والإدارية.',
  keywords: ['hospital uniform policy template saudi arabia', 'clinic dress code document', 'healthcare staff appearance guidelines', 'medical scrubs regulation'],
  keywordsAr: ['سياسة الزي الموحد للمستشفيات', 'لائحة مظهر الممارس الصحي', 'نموذج سياسة ملابس العيادات', 'دليل أزياء التمريض', 'قواعد اللباس الطبي'],
  locale: 'ar', 
  pageType: 'article', 
  path: '/ar/resources/policy-templates/hospital'
});

export const dynamic = 'force-static';

export default function HospitalPolicyTemplatePageAr() {
  return (
    <>
      <section className="bg-gradient-to-br from-cyan-900 via-sky-800 to-blue-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'الموارد', href: '/ar/resources' }, 
            { label: 'نماذج السياسات', href: '/ar/resources/policy-templates' }, 
            { label: 'سياسة المستشفيات', href: '/ar/resources/policy-templates/hospital' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              سياسة الزي الموحد <span className="text-sky-300">للمستشفيات</span>
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              إطار عمل منهجي ودليل سياسات (HR Policy Template) لمساعدة إدارات الموارد البشرية في القطاع الصحي السعودي على تنظيم مظهر الكوادر الطبية والإدارية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg prose-sky text-gray-800">
            <p className="lead text-xl text-gray-600 font-medium">
              إن التزام الكوادر الطبية بسياسة زي موحد صارمة ليس فقط مسألة أناقة، بل هو مطلب أساسي لمكافحة العدوى، بناء ثقة المريض، وتسهيل تحديد هوية الممارس الصحي في حالات الطوارئ. إليك إطار العمل الذي ننصح به عند صياغة سياسة الزي لمستشفاك.
            </p>

            <h2 className="text-2xl font-bold text-sky-900 mt-10 mb-4 border-b pb-2">1. الغرض من السياسة (Purpose)</h2>
            <p>
              يجب أن تنص السياسة بوضوح على أن الهدف من توحيد الزي هو:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>الحد من انتشار العدوى المكتسبة (Infection Control).</li>
              <li>ضمان مظهر مهني ومحتشم يعكس قيم المستشفى والمجتمع.</li>
              <li>تسهيل تعرف المرضى والزوار على الكوادر الطبية والتمييز بين تخصصاتهم بسرعة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-sky-900 mt-10 mb-4 border-b pb-2">2. نظام الكود اللوني (Color-Coding System)</h2>
            <p>
              من أفضل الممارسات المتبعة عالمياً وفي المملكة تخصيص ألوان محددة لكل تخصص لتجنب الارتباك، مثل:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li><strong>الكحلي / الأزرق الداكن:</strong> لأطباء الطوارئ والجراحة.</li>
              <li><strong>العنابي / البرغندي:</strong> لأطباء الأسنان والجلدية.</li>
              <li><strong>الأخضر الفاتح / السماوي:</strong> لطواقم التمريض.</li>
              <li><strong>الرمادي / الرصاصي:</strong> لفنيي الأشعة والمختبرات.</li>
              <li><strong>المعطف الأبيض (Lab Coat):</strong> إلزامي للاستشاريين والإدارة الطبية فوق الزي.</li>
            </ul>

            <h2 className="text-2xl font-bold text-sky-900 mt-10 mb-4 border-b pb-2">3. إرشادات النظافة والسلامة (Hygiene & Safety)</h2>
            <p>
              يجب تضمين البنود التالية في لائحة الموارد البشرية:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>يجب غسل الزي الطبي الطبي بعد كل نوبة عمل وعدم ارتدائه خارج أسوار المستشفى إلا لظروف قاهرة.</li>
              <li>يُمنع ارتداء الإكسسوارات المتدلية أو السلاسل الطويلة حرصاً على عدم التقاط العدوى أو التسبب في مخاطر أثناء التعامل مع المرضى.</li>
              <li>يجب أن تكون الأحذية الطبية مغلقة من الأمام، مانعة للانزلاق، وبدون كعب عالٍ لتجنب الإجهاد وتلوث القدم.</li>
            </ul>

            <h2 className="text-2xl font-bold text-sky-900 mt-10 mb-4 border-b pb-2">4. ارتداء البطاقة التعريفية (ID Badges)</h2>
            <p>
              يعتبر ارتداء البطاقة التعريفية التي توضح اسم الممارس وتخصصه بشكل بارز (في منطقة الصدر) جزءاً لا يتجزأ من الزي الرسمي ولا يكتمل دونه، وفقاً لتوجيهات وزارة الصحة.
            </p>

            <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 mt-12">
              <h3 className="text-xl font-bold text-sky-900 mb-3">هل تحتاج مساعدة في صياغة سياسة مستشفاك وتطبيقها؟</h3>
              <p className="text-sky-800 mb-4">
                تساعد يونيوم إدارات المستشفيات في وضع (Color Coding) دقيق وتوفير أطقم تجريبية لجميع الأقسام، مع إدارة منصة طلبات إلكترونية خاصة لتسهيل حصول الموظفين على زيّهم.
              </p>
              <Link href="/ar/contact" className="inline-block bg-sky-800 text-white px-6 py-3 rounded-md font-medium hover:bg-sky-900 transition-colors">
                تواصل مع مستشاري الأزياء الطبية
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
