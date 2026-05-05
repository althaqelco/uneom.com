import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'دليل مقاسات الملابس الطبية (سكراب ولاب كوت) | يونيوم',
  titleAr: 'دليل مقاسات الملابس الطبية (سكراب ولاب كوت) | يونيوم',
  description: 'دليل مقاسات تفصيلي للأزياء الطبية (Medical Scrubs & Lab Coats) في السعودية. جداول مقاسات عالمية ومحلية لضمان راحة الكوادر الطبية أثناء نوبات العمل الطويلة.',
  descriptionAr: 'دليل مقاسات تفصيلي للأزياء الطبية (Medical Scrubs & Lab Coats) في السعودية. جداول مقاسات عالمية ومحلية لضمان راحة الكوادر الطبية أثناء نوبات العمل الطويلة.',
  keywords: ['medical scrub size guide saudi arabia', 'lab coat sizing chart', 'nursing uniform sizes', 'healthcare apparel measurements ksa'],
  keywordsAr: ['دليل مقاسات السكراب', 'مقاسات اللاب كوت', 'جدول قياسات الملابس الطبية', 'مقاسات التمريض', 'كيف تختار مقاس السكراب'],
  locale: 'ar', 
  pageType: 'article', 
  path: '/ar/resources/size-guide/medical'
});

export const dynamic = 'force-static';

export default function MedicalSizeGuidePageAr() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'الموارد', href: '/ar/resources' }, 
            { label: 'أدلة المقاسات', href: '/ar/resources/size-guide' }, 
            { label: 'الملابس الطبية', href: '/ar/resources/size-guide/medical' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              دليل مقاسات <span className="text-teal-300">الملابس الطبية</span>
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              راحة الممارس الصحي تبدأ من المقاس الصحيح. جداول قياس دقيقة للسكراب واللاب كوت تضمن حرية الحركة طوال فترة المناوبة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-emerald text-gray-800 mb-12">
              <p className="lead text-xl text-gray-600 font-medium">
                في القطاع الطبي، المقاس الخاطئ قد يعيق الاستجابة السريعة للطوارئ. صممنا هذا الدليل لمساعدة الكوادر الطبية ومسؤولي المشتريات في المستشفيات على اختيار المقاسات الدقيقة لـ (السكراب) و(اللاب كوت).
              </p>

              <h2 className="text-2xl font-bold text-teal-900 mt-10 mb-4 border-b pb-2">كيفية أخذ القياسات الطبية بدقة</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li><strong>محيط الصدر (Chest/Bust):</strong> قم بالقياس تحت الإبطين، حول أعرض جزء من الصدر.</li>
                <li><strong>محيط الخصر (Waist):</strong> قم بالقياس حول محيط الخصر الطبيعي (فوق السرة بقليل). للسكراب، يُفضل ترك مساحة بسيطة للتنفس.</li>
                <li><strong>محيط الحوض (Hips):</strong> قف وضم قدميك، ثم قم بالقياس حول أعرض جزء من الحوض لضمان راحة بنطلون السكراب.</li>
                <li><strong>طول اللاب كوت (Length):</strong> يتم قياسه من نقطة التقاء الكتف بالرقبة نزولاً إلى الطول المطلوب (قصير فوق الركبة، أو طويل منتصف الساق).</li>
              </ul>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">جدول مقاسات السكراب (للجنسين - Unisex Scrubs)</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-right text-gray-700">
                    <thead className="bg-teal-50 text-teal-900">
                      <tr>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">المقاس (Size)</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">الصدر (سم)</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">الخصر (سم)</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">الحوض (سم)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">XS (صغير جداً)</td>
                        <td className="px-6 py-4">81 - 86</td>
                        <td className="px-6 py-4">66 - 71</td>
                        <td className="px-6 py-4">86 - 91</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-white">
                        <td className="px-6 py-4 font-medium">S (صغير)</td>
                        <td className="px-6 py-4">89 - 94</td>
                        <td className="px-6 py-4">74 - 79</td>
                        <td className="px-6 py-4">94 - 99</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">M (وسط)</td>
                        <td className="px-6 py-4">97 - 102</td>
                        <td className="px-6 py-4">81 - 86</td>
                        <td className="px-6 py-4">102 - 107</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-white">
                        <td className="px-6 py-4 font-medium">L (كبير)</td>
                        <td className="px-6 py-4">104 - 109</td>
                        <td className="px-6 py-4">89 - 94</td>
                        <td className="px-6 py-4">109 - 114</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">XL (كبير جداً)</td>
                        <td className="px-6 py-4">112 - 117</td>
                        <td className="px-6 py-4">97 - 102</td>
                        <td className="px-6 py-4">117 - 122</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">جدول مقاسات اللاب كوت (Lab Coats)</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-right text-gray-700">
                    <thead className="bg-teal-50 text-teal-900">
                      <tr>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">المقاس المعياري</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">المقاس الرقمي (EU)</th>
                        <th className="px-6 py-4 font-bold border-b border-gray-200">محيط الصدر للاب كوت (سم)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">S</td>
                        <td className="px-6 py-4">36 / 38</td>
                        <td className="px-6 py-4">100</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-white">
                        <td className="px-6 py-4 font-medium">M</td>
                        <td className="px-6 py-4">40 / 42</td>
                        <td className="px-6 py-4">108</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">L</td>
                        <td className="px-6 py-4">44 / 46</td>
                        <td className="px-6 py-4">116</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-white">
                        <td className="px-6 py-4 font-medium">XL</td>
                        <td className="px-6 py-4">48 / 50</td>
                        <td className="px-6 py-4">124</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500">* ملاحظة: قياسات صدر اللاب كوت عادة تكون أكبر بـ 4-6 سم من محيط الصدر الفعلي للسماح بارتدائه فوق الملابس الشخصية أو السكراب.</p>
              </section>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mt-16 text-center">
              <h3 className="text-xl font-bold text-teal-900 mb-3">خدمة القياس الميداني للمستشفيات</h3>
              <p className="text-teal-800 mb-6 max-w-2xl mx-auto">
                لتجهيز الكوادر الطبية الكبيرة، توفر يونيوم خدمة "صندوق القياس" (Sizing Box) أو إرسال فريق متخصص لأخذ مقاسات طاقم المستشفى بالكامل لضمان دقة لا متناهية وتجنب المرتجعات.
              </p>
              <Link href="/ar/contact" className="inline-block bg-teal-800 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-900 transition-colors">
                طلب خدمة القياس الميداني للعيادات
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
