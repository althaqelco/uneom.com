import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'بناطيل مكتبية ورسمية للشركات في السعودية | يونيوم',
  titleAr: 'بناطيل مكتبية ورسمية للشركات في السعودية | يونيوم',
  description: 'بناطيل مكتبية متينة ومريحة مصممة لبيئات العمل والشركات في السعودية. أقمشة مقاومة للتجاعيد بمرونة عالية تضمن مظهراً احترافياً طوال اليوم.',
  descriptionAr: 'بناطيل مكتبية متينة ومريحة مصممة لبيئات العمل والشركات في السعودية. أقمشة مقاومة للتجاعيد بمرونة عالية تضمن مظهراً احترافياً طوال اليوم.',
  keywords: ['office trousers saudi arabia', 'corporate pants riyadh', 'workwear trousers ksa', 'formal office wear'],
  keywordsAr: ['بناطيل مكتبية', 'بناطيل عمل رسمية', 'بناطيل شركات', 'يونيفورم بنطلون', 'ملابس موظفين'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/corporate-workwear/office-trouser',
  image: '/images/corporate/office-trouser.jpg', 
  imageAlt: 'بناطيل مكتبية ورسمية',
  aiSummary: 'بناطيل يونيوم المكتبية توفر التوازن المثالي بين الراحة والمظهر المهني. مصممة من أقمشة تقنية مقاومة للتجاعيد لتتحمل الجلوس لفترات طويلة أو الحركة المستمرة.',
  aiSummaryAr: 'بناطيل يونيوم المكتبية توفر التوازن المثالي بين الراحة والمظهر المهني. مصممة من أقمشة تقنية مقاومة للتجاعيد لتتحمل الجلوس لفترات طويلة أو الحركة المستمرة.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بنطلون مكتبي مقاوم للتجعد', price: '120 ريال', desc: 'بنطلون عملي بقصة كلاسيكية مستقيمة مصنوع من مزيج البوليستر والفيسكوز لتوفير متانة فائقة ومقاومة لتكسر القماش.' },
  { name: 'بنطلون تنفيذي بقصة عصرية (Slim Fit)', price: '145 ريال', desc: 'تصميم أنيق وضيق نسبياً يواكب الموضة الحديثة، مزود بنسبة من الإيلاستين (Spandex) لضمان مرونة الحركة والجلوس براحة.' },
  { name: 'بنطلون قطني مريح (Chino)', price: '135 ريال', desc: 'خيار ممتاز لبيئات العمل شبه الرسمية (Business Casual)، مصنوع من القطن عالي الجودة مع خياطة مقواة.' },
  { name: 'بنطلون نسائي رسمي بقصة واسعة', price: '130 ريال', desc: 'تصميم محتشم ومريح مخصص للموظفات، بقصة أرجل واسعة (Wide-leg) أو مستقيمة تناسب بيئة العمل السعودية.' },
];

const faqs = [
  { question: 'هل أقمشة البناطيل مناسبة لفصل الصيف في السعودية؟', answer: 'نعم، نستخدم تقنيات نسج تسمح بمرور الهواء (Breathable Fabrics) وامتصاص الرطوبة لضمان راحة الموظف طوال فترة الدوام حتى في الأيام الحارة.' },
  { question: 'كيف أضمن تناسق ألوان البناطيل مع قمصان الشركة؟', answer: 'لدينا مكتبة ألوان واسعة. عند طلب التوريد، يقوم خبراؤنا بتقديم توصيات (Color Matching) لضمان أن لون البنطلون يتناسب تماماً مع لون القميص الموحد للشركة أو البنك.' },
  { question: 'هل تتوفر مقاسات كبيرة (Plus Sizes) لموظفينا؟', answer: 'بالتأكيد، نحن نصنع ونوفر البناطيل بجميع المقاسات، وللموظفين الذين يتطلبون مقاسات خاصة جداً، نوفر خدمة التفصيل حسب المقاس دون رسوم إضافية لطلبات الجملة.' },
];

export default function OfficeTrouserPageAr() {
  return (
    <>
      <SEO2026 
        title="البناطيل المكتبية والرسمية" 
        titleAr="البناطيل المكتبية والرسمية" 
        description="بناطيل مكتبية مريحة ومقاومة للتجعد للشركات." 
        locale="ar" 
        pageType="product" 
        mainEntity="بناطيل موظفي الشركات" 
        primaryImage="/images/corporate/office-trouser.jpg" 
        primaryImageAlt="البناطيل المكتبية الرسمية" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'ملابس الشركات', url: '/ar/shop/corporate-workwear' }, 
          { name: 'بناطيل مكتبية', url: '/ar/shop/corporate-workwear/office-trouser' }
        ]} 
        certifications={['ISO 9001:2015', 'Durability Tested']} 
        clientCount={120} 
        yearsInBusiness={15} 
        industry="Corporate" 
      />
      <section className="bg-gradient-to-br from-neutral-800 via-stone-800 to-zinc-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'ملابس الشركات', href: '/ar/shop/corporate-workwear' }, 
            { label: 'البناطيل المكتبية', href: '/ar/shop/corporate-workwear/office-trouser' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              البناطيل <span className="text-zinc-300">المكتبية</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              عملية، مريحة، وأنيقة. بناطيل رسمية مصممة لتحمل ضغط العمل اليومي وتوفير المرونة اللازمة لموظفي الشركات في المملكة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تصاميم مريحة لدوام كامل" centered>تشكيلة البناطيل الرسمية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-stone-200 hover:shadow-lg hover:border-zinc-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-zinc-700 font-bold bg-zinc-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=office-trouser" className="inline-flex items-center gap-2 mt-6 text-zinc-700 font-medium hover:text-black hover:underline">
                  اطلب تسعيرة لتجهيز موظفيك <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="التفاصيل التي تهمك" centered>الأسئلة الشائعة حول البناطيل</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
