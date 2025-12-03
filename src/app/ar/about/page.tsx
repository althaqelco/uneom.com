import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'عن يونيوم | الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية',
  titleAr: 'عن يونيوم | الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية',
  description: 'UNEOM is Saudi Arabia\'s leading uniform manufacturer since 2004.',
  descriptionAr: 'يونيوم هي الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية منذ 2004. خبرة 20+ سنة، معتمدة ISO 9001:2015، نخدم 500+ عميل. أزياء طبية، شركات، ضيافة، مدارس، صناعية. المقر الرئيسي في الرياض.',
  keywords: ['عن يونيوم', 'مصنع أزياء السعودية'],
  keywordsAr: ['عن يونيوم', 'مصنع أزياء السعودية', 'شركة أزياء الرياض', 'تاريخ يونيوم', 'فريق يونيوم', 'مصنع يونيوم', 'شهادات يونيوم'],
  locale: 'ar',
  pageType: 'about',
  path: '/ar/about',
  image: '/images/about/uneom-factory.jpg',
  imageAlt: 'مصنع يونيوم لتصنيع الأزياء في السعودية',
  aiSummary: 'UNEOM is Saudi Arabia\'s leading uniform manufacturer since 2004.',
  aiSummaryAr: 'يونيوم هي الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية، تأسست في 2004 في الرياض. بخبرة 20+ سنة، نخدم 500+ عميل في قطاعات الرعاية الصحية والشركات والضيافة والتعليم والصناعة. معتمدة ISO 9001:2015، لدينا مرافق تصنيع حديثة تنتج 100,000+ قطعة زي شهرياً. فريقنا من 200+ متخصص يشمل مصممين وخياطين وخبراء صناعة. المقر الرئيسي في الرياض مع صالات عرض في جدة والدمام. نلتزم بالجودة والابتكار ودعم رؤية السعودية 2030.'
});

export const dynamic = 'force-static';

const aboutFAQsAr = [
  { question: 'متى تأسست يونيوم؟', questionAr: 'متى تأسست يونيوم؟', answer: 'UNEOM was established in 2004.', answerAr: 'تأسست يونيوم في عام 2004 في الرياض، السعودية. لدينا أكثر من 20 عاماً من الخبرة في تصنيع الأزياء الموحدة ونمت لتصبح المورد الرائد للأزياء في المملكة.' },
  { question: 'كم عدد العملاء الذين تخدمهم يونيوم؟', questionAr: 'كم عدد العملاء الذين تخدمهم يونيوم؟', answer: 'UNEOM serves 500+ clients.', answerAr: 'تفخر يونيوم بخدمة أكثر من 500 عميل في جميع أنحاء السعودية، بما في ذلك المستشفيات الكبرى والشركات وسلاسل الفنادق والمدارس والمؤسسات الحكومية.' },
  { question: 'هل يونيوم معتمدة ISO؟', questionAr: 'هل يونيوم معتمدة ISO؟', answer: 'Yes, ISO 9001:2015 certified.', answerAr: 'نعم، يونيوم معتمدة ISO 9001:2015، مما يدل على التزامنا بأنظمة إدارة الجودة. نحمل أيضاً شهادة OEKO-TEX Standard 100 لأقمشتنا.' },
  { question: 'أين يقع المقر الرئيسي ليونيوم؟', questionAr: 'أين يقع المقر الرئيسي ليونيوم؟', answer: 'Riyadh, King Fahd Road.', answerAr: 'يقع المقر الرئيسي ليونيوم في الرياض على طريق الملك فهد. لدينا أيضاً صالات عرض ومراكز خدمة في جدة والدمام لخدمة العملاء في جميع أنحاء المملكة.' },
  { question: 'ما الصناعات التي تخدمها يونيوم؟', questionAr: 'ما الصناعات التي تخدمها يونيوم؟', answer: 'Healthcare, corporate, hospitality, education, industrial, security.', answerAr: 'تخدم يونيوم صناعات متعددة تشمل الرعاية الصحية (مستشفيات، عيادات)، الشركات (بنوك، مكاتب)، الضيافة (فنادق، مطاعم)، التعليم (مدارس، جامعات)، الصناعة (مصانع، نفط وغاز)، والأمن.' },
  { question: 'هل يونيوم تصنع محلياً في السعودية؟', questionAr: 'هل يونيوم تصنع محلياً في السعودية؟', answer: 'Yes, local manufacturing supporting Vision 2030.', answerAr: 'نعم، لدى يونيوم مرافق تصنيع حديثة في السعودية، تدعم أهداف التوطين في رؤية السعودية 2030. ننتج أكثر من 100,000 قطعة زي شهرياً مع فريق من 200+ متخصص ماهر.' },
];

const teamMembers = [
  { name: 'عبدالله القحطاني', role: 'الرئيس التنفيذي والمؤسس', image: '/images/about/Team/Abdullah_Al-Qahtani-2.png', bio: 'بخبرة 20+ سنة في صناعة النسيج، أسس عبدالله يونيوم برؤية لإحداث ثورة في الأزياء المهنية في السعودية.' },
  { name: 'سارة الحربي', role: 'رئيسة قسم التصميم', image: '/images/about/Team/Sara_Al-Harbi.png', bio: 'سارة تجلب 15+ سنة من الخبرة في تصميم الأزياء، متخصصة في تصميم الزي الموحد الذي يجمع بين الوظائف والأناقة.' },
  { name: 'محمد العتيبي', role: 'مدير العمليات', image: '/images/about/Team/Mohammed_Al-Otaibi.png', bio: 'محمد يشرف على الإنتاج وسلسلة التوريد، يضمن إنتاج الأزياء بأعلى معايير الجودة.' },
  { name: 'لينا الراشد', role: 'مديرة علاقات العملاء', image: '/images/about/Team/Lina_Al-Rashid.png', bio: 'لينا تقود فريق علاقات العملاء، تضمن حصول كل عميل على اهتمام شخصي.' }
];

const stats = [
  { number: '+20', label: 'سنة خبرة' },
  { number: '+500', label: 'عميل سعيد' },
  { number: '+100K', label: 'قطعة شهرياً' },
  { number: '+200', label: 'فريق العمل' },
];

export default function AboutPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="عن يونيوم | الشركة الرائدة في تصنيع الأزياء السعودية" titleAr="عن يونيوم | الشركة الرائدة في تصنيع الأزياء السعودية" description="UNEOM is Saudi Arabia's leading uniform manufacturer." descriptionAr="يونيوم هي الشركة الرائدة في تصنيع الأزياء في السعودية منذ 2004." locale="ar" pageType="about" mainEntity="UNEOM" mainEntityAr="شركة يونيوم لتصنيع الأزياء" primaryImage="/images/about/uneom-factory.jpg" primaryImageAlt="مصنع يونيوم" faqs={aboutFAQsAr} breadcrumbs={[{ name: 'About', nameAr: 'عنا', url: '/ar/about' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} clientCount={500} yearsInBusiness={20} />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden py-24">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'عنا', href: '/ar/about' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">عن <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">يونيوم</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية منذ 2004. 20+ سنة من التميز في الملابس المهنية.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (<div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"><div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div><div className="text-sm text-blue-100">{stat.label}</div></div>))}
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="قصتنا">بناء صناعة الأزياء الموحدة في السعودية</SectionHeading>
                <p className="text-lg text-gray-600 mb-6">تأسست يونيوم في 2004 في الرياض بمهمة بسيطة: تزويد السعودية بأزياء مهنية عالمية المستوى تجمع بين الجودة والراحة والأناقة.</p>
                <p className="text-gray-600 mb-6">اليوم، نفخر بأن نكون الشركة الرائدة في تصنيع الأزياء في المملكة، نخدم أكثر من 500 عميل في قطاعات الرعاية الصحية والشركات والضيافة والتعليم والصناعة.</p>
                <p className="text-gray-600 mb-8">مع مرافق التصنيع الحديثة وشهادة ISO 9001:2015 وفريق مخصص من 200+ متخصص، نواصل وضع معيار التميز في الأزياء في السعودية ودعم أهداف رؤية 2030.</p>
                <Button href="/ar/contact" variant="primary" size="lg">تواصل معنا ←</Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden"><Image src="/images/about/uneom-factory.jpg" alt="مرفق تصنيع يونيوم" fill className="object-cover" /></div>
            </div>
          </section>

          <section className="mb-20">
            <SectionHeading subtitle="فريق القيادة" centered>تعرف على الفريق خلف يونيوم</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (<div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div className="relative aspect-square"><Image src={member.image} alt={member.name} fill className="object-cover" /></div><div className="p-6"><h3 className="text-xl font-bold text-gray-900">{member.name}</h3><p className="text-blue-600 font-medium mb-3">{member.role}</p><p className="text-gray-600 text-sm">{member.bio}</p></div></div>))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن يونيوم</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">{aboutFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد للعمل مع الأفضل في السعودية؟</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">انضم إلى 500+ عميل راضٍ يثقون في يونيوم لاحتياجات الأزياء.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all">تواصل معنا</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/about" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
