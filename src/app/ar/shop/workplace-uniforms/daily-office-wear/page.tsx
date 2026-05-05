import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء العمل اليومية | ملابس مكتبية للشركات يونيوم',
  titleAr: 'أزياء العمل اليومية | ملابس مكتبية للشركات يونيوم',
  description: 'أزياء عمل يومية (سمارت كاجوال) للشركات الحديثة في السعودية. قمصان بولو مخصصة بالشعار، بناطيل تشينو، وسترات تجمع بين المظهر الاحترافي والراحة اليومية.',
  descriptionAr: 'أزياء عمل يومية (سمارت كاجوال) للشركات الحديثة في السعودية. قمصان بولو مخصصة بالشعار، بناطيل تشينو، وسترات تجمع بين المظهر الاحترافي والراحة اليومية.',
  keywords: ['أزياء العمل اليومية', 'سمارت كاجوال للشركات', 'بولو شيرت موظفين', 'ملابس مكتبية في السعودية', 'زي موحد كاجوال'],
  keywordsAr: ['أزياء العمل اليومية', 'سمارت كاجوال للشركات', 'بولو شيرت موظفين', 'ملابس مكتبية في السعودية', 'زي موحد كاجوال'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/workplace-uniforms/daily-office-wear'
});

export const dynamic = 'force-static';

export default function DailyOfficeWearPageAr() {
  return (
    <>
      <section className="bg-slate-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء العمل', href: '/ar/shop/workplace-uniforms' },
            { label: 'أزياء العمل اليومية', href: '/ar/shop/workplace-uniforms/daily-office-wear' }
          ]} className="text-slate-300 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أزياء العمل اليومية <span className="text-sky-400">(سمارت كاجوال)</span>
            </h1>
            <p className="text-xl text-slate-200">
              بيئة العمل الحديثة تتطور. جهز فريقك بملابس "سمارت كاجوال" مريحة تعزز ثقافة الشركة المترابطة مع الحفاظ على صورة احترافية وراقية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">الراحة تلتقي بهوية الشركة</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  مع تحول الشركات السعودية نحو بيئات عمل حديثة ومرنة، تتراجع البدلات الرسمية الصارمة لتفسح المجال أمام أزياء العمل اليومية "السمارت كاجوال". هذا التحول يرفع من معنويات الموظفين ويزيد من إنتاجيتهم دون التضحية باحترافية العلامة التجارية.
                </p>
                <p>
                  تم تصميم مجموعة "العمل اليومي" من يونيوم للشركات التقنية الناشئة، الوكالات الإبداعية، والشركات ذات الفكر التقدمي التي ترغب في إبراز صورة علامة تجارية موحدة وودودة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">أبرز ميزات التشكيلة</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>قمصان بولو فاخرة:</strong> مصنوعة من القطن المصري أو أنسجة الأداء العالي. تتميز بياقات مقواة لا تتجعد أو تلتف مع مرور الوقت.</li>
                  <li><strong>بناطيل تشينو عصرية:</strong> بناطيل من القطن المطاطي توفر راحة الجينز مع المظهر الحاد والاحترافي للبناطيل القماشية الرسمية.</li>
                  <li><strong>أساسيات الطبقات (Layering):</strong> سترات خفيفة (Cardigans)، بلوفرات بسحاب نصفي، وجاكيتات (Softshell) مثالية للمكاتب ذات التكييف المركزي البارد.</li>
                  <li><strong>علامة تجارية أنيقة:</strong> تطريز عالي الكثافة أو طباعة سيليكون بارزة تعرض شعار شركتك برقي وحداثة دون مبالغة.</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">حدّث مظهر فريق عملك</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">اسم الشركة / المؤسسة</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">قطاع الشركة</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>تقنية المعلومات والاتصالات</option>
                    <option>وكالة إبداعية وإعلامية</option>
                    <option>لوجستيات وعمليات (إدارة مكتبية)</option>
                    <option>شركة ناشئة / قطاع آخر</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">الاهتمام الرئيسي</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>قمصان بولو بشعار الشركة</option>
                    <option>أطقم سمارت كاجوال كاملة (بولو + بنطلون)</option>
                    <option>سترات وجاكيتات للمكاتب المكيفة</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-sky-600 text-white font-bold py-3 rounded-md hover:bg-sky-700 transition">
                  طلب عينات للاختبار
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
