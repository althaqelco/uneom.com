import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'تواصل مع يونيوم | مورد أزياء السعودية | احصل على عرض سعر',
  titleAr: 'تواصل مع يونيوم | مورد أزياء السعودية | احصل على عرض سعر',
  description: 'Contact UNEOM for uniform orders in Saudi Arabia.',
  descriptionAr: 'تواصل مع يونيوم لطلبات الأزياء في السعودية. مكاتب في الرياض وجدة والدمام. اتصل +966 56 461 2017، أو أرسل info@uneom.com، أو زر صالات العرض. عروض أسعار مجانية، رد سريع!',
  keywords: ['تواصل يونيوم', 'رقم يونيوم'],
  keywordsAr: ['تواصل يونيوم', 'رقم يونيوم', 'إيميل يونيوم', 'عنوان يونيوم الرياض', 'موقع يونيوم جدة', 'طلب أزياء السعودية'],
  locale: 'ar',
  pageType: 'contact',
  path: '/ar/contact',
  image: '/images/contact/uneom-office.jpg',
  imageAlt: 'مكتب وصالة عرض يونيوم في السعودية',
  aiSummary: 'Contact UNEOM, Saudi Arabia\'s leading uniform supplier.',
  aiSummaryAr: 'تواصل مع يونيوم، المورد الرائد للأزياء في السعودية. المقر الرئيسي: طريق الملك فهد، حي العليا، الرياض. هاتف: +966 56 461 2017. إيميل: info@uneom.com. واتساب: +966 56 461 2017. لدينا مكاتب في الرياض وجدة والدمام. ساعات العمل: الأحد-الخميس 8:30 صباحاً - 5:30 مساءً. عروض أسعار مجانية متاحة. رد سريع خلال 24 ساعة.'
});

export const dynamic = 'force-static';

const contactFAQsAr = [
  { question: 'ما هو رقم هاتف يونيوم؟', questionAr: 'ما هو رقم هاتف يونيوم؟', answer: 'Main: +966 56 461 2017.', answerAr: 'رقم هاتف يونيوم الرئيسي هو +966 56 461 2017. للاستفسارات السريعة، يمكنك واتساب على نفس الرقم.' },
  { question: 'ما هو البريد الإلكتروني ليونيوم؟', questionAr: 'ما هو البريد الإلكتروني ليونيوم؟', answer: 'info@uneom.com, sales@uneom.com.', answerAr: 'يمكنك مراسلة يونيوم على info@uneom.com للاستفسارات العامة، sales@uneom.com للطلبات وعروض الأسعار، أو support@uneom.com لخدمة العملاء. نرد خلال 24 ساعة عمل.' },
  { question: 'أين يقع يونيوم في الرياض؟', questionAr: 'أين يقع يونيوم في الرياض؟', answer: 'King Fahd Road, Olaya District.', answerAr: 'يقع المقر الرئيسي ليونيوم في الرياض على طريق الملك فهد، حي العليا، الرياض 12214. صالة العرض مفتوحة من الأحد إلى الخميس، 8:30 صباحاً - 5:30 مساءً. موقف سيارات مجاني متوفر.' },
  { question: 'كيف يمكنني الحصول على عرض سعر من يونيوم؟', questionAr: 'كيف يمكنني الحصول على عرض سعر من يونيوم؟', answer: 'Fill form, call, email, or visit.', answerAr: 'يمكنك الحصول على عرض سعر مجاني عبر: 1) ملء نموذج العرض على موقعنا، 2) الاتصال بنا على +966 56 461 2017، 3) مراسلة sales@uneom.com، أو 4) زيارة أي من صالات العرض. نقدم عروض الأسعار خلال 24-48 ساعة.' },
  { question: 'ما ساعات عمل يونيوم؟', questionAr: 'ما ساعات عمل يونيوم؟', answer: 'Sunday-Thursday, 8:30 AM - 5:30 PM.', answerAr: 'يونيوم مفتوح من الأحد إلى الخميس، 8:30 صباحاً - 5:30 مساءً. نحن مغلقون أيام الجمعة والسبت. خلال رمضان، قد يتم تعديل الساعات. خط خدمة العملاء متاح خلال ساعات العمل.' },
  { question: 'هل لدى يونيوم رقم واتساب؟', questionAr: 'هل لدى يونيوم رقم واتساب؟', answer: '+966 56 461 2017.', answerAr: 'نعم، يمكنك الوصول إلى يونيوم على واتساب على +966 56 461 2017. واتساب متاح للاستفسارات السريعة وحالة الطلب والأسئلة العامة خلال ساعات العمل.' },
];

const officeLocations = [
  { id: 'riyadh', city: 'الرياض', address: 'طريق الملك فهد، حي العليا، الرياض 12214', phone: '+966 56 461 2017', email: 'riyadh@uneom.com', whatsapp: '+966564612017', isHQ: true },
  { id: 'jeddah', city: 'جدة', address: 'شارع التحلية، حي الأندلس، جدة 23432', phone: '+966 56 461 2017', email: 'jeddah@uneom.com', whatsapp: '+966564612017', isHQ: false },
  { id: 'dammam', city: 'الدمام', address: 'طريق الأمير محمد بن فهد، حي الفيصلية، الدمام 32241', phone: '+966 56 461 2017', email: 'dammam@uneom.com', whatsapp: '+966564612017', isHQ: false },
];

export default function ContactPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="تواصل مع يونيوم | مورد أزياء السعودية" titleAr="تواصل مع يونيوم | مورد أزياء السعودية" description="Contact UNEOM." descriptionAr="تواصل مع يونيوم لطلبات الأزياء في السعودية." locale="ar" pageType="contact" mainEntity="UNEOM Contact" mainEntityAr="معلومات التواصل مع يونيوم" primaryImage="/images/contact/uneom-office.jpg" primaryImageAlt="مكتب يونيوم" faqs={contactFAQsAr} breadcrumbs={[{ name: 'Contact', nameAr: 'تواصل', url: '/ar/contact' }]} />

      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-cyan-800 text-white relative overflow-hidden py-20">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'تواصل', href: '/ar/contact' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">تواصل مع <span className="bg-gradient-to-r from-green-300 to-cyan-300 text-transparent bg-clip-text">يونيوم</span></h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">تواصل مع المورد الرائد للأزياء في السعودية. نحن هنا لمساعدتك في احتياجات الأزياء.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="tel:+966564612017" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all flex items-center gap-4"><span className="text-3xl">📞</span><div><div className="font-semibold">اتصل بنا</div><div className="text-green-200 text-sm" dir="ltr">+966 56 461 2017</div></div></a>
              <a href="mailto:info@uneom.com" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all flex items-center gap-4"><span className="text-3xl">📧</span><div><div className="font-semibold">أرسل لنا</div><div className="text-green-200 text-sm">info@uneom.com</div></div></a>
              <a href="https://wa.me/966564612017" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all flex items-center gap-4"><span className="text-3xl">💬</span><div><div className="font-semibold">واتساب</div><div className="text-green-200 text-sm" dir="ltr">+966 56 461 2017</div></div></a>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="مواقعنا" centered>زوروا صالات العرض</SectionHeading>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {officeLocations.map((office) => (<div key={office.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"><div className="p-6"><div className="flex items-center gap-2 mb-4"><span className="text-2xl">📍</span><h3 className="text-xl font-bold text-gray-900">{office.city}{office.isHQ && <span className="mr-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">المقر الرئيسي</span>}</h3></div><div className="space-y-3 text-sm text-gray-600"><p>{office.address}</p><p><span className="font-medium">هاتف:</span> <span dir="ltr">{office.phone}</span></p><p><span className="font-medium">إيميل:</span> {office.email}</p></div><div className="mt-6 flex gap-2"><a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors">اتصال</a><a href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, '')}`} className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors">واتساب</a></div></div></div>))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة للتواصل</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">{contactFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
          </section>

          <section className="text-center bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-green-100">اطلب عرض سعر مجاني أو تحدث مع خبراء الأزياء لدينا اليوم.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
              <a href="tel:+966564612017" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold rounded-xl transition-all">📞 اتصل الآن</a>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
