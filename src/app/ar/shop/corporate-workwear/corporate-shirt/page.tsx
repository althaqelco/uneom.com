import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'قمصان الشركات وملابس الموظفين الرسمية في السعودية | يونيوم',
  titleAr: 'قمصان الشركات وملابس الموظفين الرسمية في السعودية | يونيوم',
  description: 'قمصان عمل رسمية مصممة لموظفي الشركات، البنوك، والاستقبال في السعودية. أقمشة فاخرة، تفصيل مخصص، وخيارات تطريز لشعار الشركة لتعزيز الهوية المؤسسية.',
  descriptionAr: 'قمصان عمل رسمية مصممة لموظفي الشركات، البنوك، والاستقبال في السعودية. أقمشة فاخرة، تفصيل مخصص، وخيارات تطريز لشعار الشركة لتعزيز الهوية المؤسسية.',
  keywords: ['corporate shirts saudi arabia', 'office uniform shirts riyadh', 'company logo shirts ksa', 'professional staff clothing'],
  keywordsAr: ['قمصان الشركات', 'ملابس موظفين رسمية', 'قمصان بشعار الشركة', 'يونيفورم البنوك السعودية', 'ملابس استقبال'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/corporate-workwear/corporate-shirt',
  image: '/images/corporate/office-staff.jpg', 
  imageAlt: 'قمصان الشركات والموظفين الرسمية',
  aiSummary: 'تقدم يونيوم تشكيلة واسعة من قمصان الشركات المصممة خصيصاً للقطاع الإداري والبنكي في السعودية، وتتميز بمقاومة التجاعيد وتوفر خدمة التطريز المباشر لشعارات الشركات.',
  aiSummaryAr: 'تقدم يونيوم تشكيلة واسعة من قمصان الشركات المصممة خصيصاً للقطاع الإداري والبنكي في السعودية، وتتميز بمقاومة التجاعيد وتوفر خدمة التطريز المباشر لشعارات الشركات.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'قميص أعمال قطني فاخر', price: '145 ريال', desc: 'قميص مصنوع من القطن المصري بنسبة 100٪، يوفر راحة وتهوية استثنائية لأيام العمل الطويلة داخل المكتب.' },
  { name: 'قميص مقاوم للتجاعيد (Wrinkle-Free)', price: '165 ريال', desc: 'قميص عملي بتركيبة قماش ذكية تحافظ على مظهرها المكوي والأنيق طوال اليوم دون الحاجة لعناية مكثفة.' },
  { name: 'قميص نصف كم للإداريين', price: '130 ريال', desc: 'تصميم صيفي مريح بأكمام قصيرة، مثالي لبيئات العمل النشطة وموظفي الدعم الفني وخدمة العملاء.' },
  { name: 'قميص تفصيل تنفيذي (Made-to-Measure)', price: '210 ريال', desc: 'قميص مخصص بالكامل للمدراء التنفيذيين، يشمل تفصيل الياقة، وتطريز الأحرف الأولى (Monogramming) على الأكمام.' },
];

const faqs = [
  { question: 'هل توفرون مقاسات نسائية ورجالية لنفس الموديل واللون؟', answer: 'بالتأكيد، جميع قمصان الشركات لدينا تتوفر بقصات رجالية (Classic/Slim Fit) وقصات نسائية محتشمة ومريحة تتوافق مع بيئة العمل السعودية.' },
  { question: 'كيف يمكننا تطريز شعار الشركة على القمصان؟', answer: 'نوفر خدمة التطريز الرقمي المباشر على منطقة الصدر أو الياقة، بالإضافة إلى إمكانية تصنيع أزرار تحمل اسم أو شعار شركتك لطلبات الجملة.' },
  { question: 'ما هو الحد الأدنى لتوريد قمصان موظفي الشركات؟', answer: 'الحد الأدنى لطلبات قمصان الشركات الجاهزة مع التطريز هو 20 قطعة، بينما يتطلب التفصيل بالكامل (أقمشة مخصصة) 100 قطعة كحد أدنى.' },
];

export default function CorporateShirtPageAr() {
  return (
    <>
      <SEO2026 
        title="قمصان الشركات والموظفين" 
        titleAr="قمصان الشركات والموظفين" 
        description="قمصان رسمية أنيقة للشركات والبنوك مع تطريز الشعار." 
        locale="ar" 
        pageType="product" 
        mainEntity="قمصان موظفي الشركات" 
        primaryImage="/images/corporate/office-staff.jpg" 
        primaryImageAlt="قمصان الشركات" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'ملابس الشركات', url: '/ar/shop/corporate-workwear' }, 
          { name: 'قمصان الشركات', url: '/ar/shop/corporate-workwear/corporate-shirt' }
        ]} 
        certifications={['ISO 9001:2015', 'Oeko-Tex Standard 100']} 
        clientCount={85} 
        yearsInBusiness={15} 
        industry="Corporate" 
      />
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'ملابس الشركات', href: '/ar/shop/corporate-workwear' }, 
            { label: 'قمصان الشركات', href: '/ar/shop/corporate-workwear/corporate-shirt' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              قمصان الإدارة <span className="bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text">والشركات</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              أزياء مكتبية مصممة بعناية لموظفي الشركات، البنوك، ومقدمي الخدمات في السعودية، تعكس احترافية علامتك التجارية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تصاميم مريحة لأيام العمل الطويلة" centered>مجموعة القمصان الرسمية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-gray-800 font-bold bg-gray-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=corporate-shirt" className="inline-flex items-center gap-2 mt-6 text-gray-800 font-medium hover:text-black hover:underline">
                  طلب تسعيرة لشركتك <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول قمصان الشركات</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
