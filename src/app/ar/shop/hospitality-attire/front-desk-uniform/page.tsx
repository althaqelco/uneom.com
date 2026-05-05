import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء الاستقبال والمكاتب الأمامية للفنادق | يونيوم',
  titleAr: 'أزياء الاستقبال والمكاتب الأمامية للفنادق | يونيوم',
  description: 'ارتقِ بالانطباع الأول لفندقك مع أزياء الاستقبال الفاخرة من يونيوم. بدلات، فساتين، وسترات مصممة خصيصاً لموظفي الضيافة في السعودية لتوفير الأناقة والراحة.',
  descriptionAr: 'ارتقِ بالانطباع الأول لفندقك مع أزياء الاستقبال الفاخرة من يونيوم. بدلات، فساتين، وسترات مصممة خصيصاً لموظفي الضيافة في السعودية لتوفير الأناقة والراحة.',
  keywords: ['أزياء الاستقبال', 'يونيفورم المكاتب الأمامية', 'بدلات موظفي الفنادق', 'ملابس الضيافة في السعودية', 'زي الفنادق'],
  keywordsAr: ['أزياء الاستقبال', 'يونيفورم المكاتب الأمامية', 'بدلات موظفي الفنادق', 'ملابس الضيافة في السعودية', 'زي الفنادق'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/hospitality-attire/front-desk-uniform'
});

export const dynamic = 'force-static';

export default function FrontDeskUniformPageAr() {
  return (
    <>
      <section className="bg-neutral-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' },
            { label: 'أزياء الاستقبال', href: '/ar/shop/hospitality-attire/front-desk-uniform' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أزياء <span className="text-amber-500">الاستقبال والمكاتب الأمامية</span>
            </h1>
            <p className="text-xl text-neutral-300">
              الانطباع الأول يصنع الفارق. جهز فريق الاستقبال لديك ببدلات وأزياء مصممة باحترافية تدمج بين الفخامة المطلقة والراحة طوال اليوم.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">تصميم الانطباع الأول المثالي</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  في قطاع الضيافة الفاخرة، يمثل موظفو الاستقبال واجهة علامتك التجارية وسفراءها. تم تصميم مجموعة "المكاتب الأمامية" من يونيوم لتلبية متطلبات الفنادق الحديثة في المملكة العربية السعودية.
                </p>
                <p>
                  نستخدم أقمشة متطورة من الصوف المخلوط تتميز بمرونة ميكانيكية ومقاومة للتجعد، لضمان حفاظ فريقك على مظهر احترافي وأنيق حتى في نهاية مناوباتهم الطويلة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">أبرز مميزات المجموعة</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>قصات احترافية:</strong> تصميمات عصرية توفر مظهراً رسمياً حاداً دون تقييد حرية الحركة.</li>
                  <li><strong>أقمشة تتكيف مع المناخ:</strong> بطانات داخلية قابلة للتنفس، مصممة للانتقال بين بهو الفندق المكيف والأجواء الخارجية.</li>
                  <li><strong>تكامل هوية الفندق:</strong> تطريز مخصص ودبابيس سترات (Lapel Pins) فاخرة تحمل شعار الفندق بدقة متناهية.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">طلب تصميم مخصص لفندقك</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">اسم الفندق / المنشأة</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="أدخل اسم الفندق" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">عدد الموظفين</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>1-10 موظفين</option>
                    <option>11-50 موظفاً</option>
                    <option>50+ موظف</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">البريد الإلكتروني</label>
                  <input type="email" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="your@email.com" dir="ltr" />
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  طلب استشارة مجانية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
