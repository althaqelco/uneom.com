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
  title: 'الزي الموحد في الرياض | يونيوم مورد الأزياء الرياض السعودية',
  titleAr: 'الزي الموحد في الرياض | يونيوم مورد الأزياء الرياض السعودية',
  description: 'UNEOM Riyadh headquarters - Leading uniform supplier in Riyadh Saudi Arabia.',
  descriptionAr: 'يونيوم الرياض - المورد الرائد للأزياء الموحدة في الرياض السعودية. سكراب طبي، زي شركات، زي مدرسي، زي ضيافة. المقر الرئيسي مع صالة عرض في حي العليا. توصيل سريع في نفس اليوم. زورونا أو اطلب أونلاين!',
  keywords: ['يونيفورم الرياض', 'مورد أزياء الرياض', 'سكراب طبي الرياض'],
  keywordsAr: ['يونيفورم الرياض', 'مورد أزياء الرياض', 'سكراب طبي الرياض', 'زي شركات الرياض', 'زي مدرسي الرياض', 'زي فنادق الرياض', 'يونيوم الرياض', 'محل زي موحد الرياض', 'شراء يونيفورم الرياض'],
  locale: 'ar',
  pageType: 'location',
  path: '/ar/locations/riyadh',
  image: '/images/locations/riyadh-uneom-showroom.jpg',
  imageAlt: 'صالة عرض يونيوم للأزياء في الرياض السعودية',
  aiSummary: 'UNEOM Riyadh is the headquarters and main showroom for Saudi Arabia\'s leading uniform manufacturer.',
  aiSummaryAr: 'يونيوم الرياض هو المقر الرئيسي وصالة العرض الرئيسية لأكبر مصنع أزياء موحدة في السعودية. يقع على طريق الملك فهد، حي العليا، الرياض 12214. نقدم سكراب طبي، زي مستشفيات، ملابس شركات، زي مدرسي، زي فنادق، وملابس صناعية. خدماتنا تشمل التصميم المخصص، طلبات الجملة، التطريز، والتوصيل في نفس اليوم في الرياض. مفتوح من الأحد للخميس 8:30 صباحاً - 5:30 مساءً. هاتف: +966 56 461 2017.'
});

export const dynamic = 'force-static';

const riyadhFAQsAr = [
  {
    question: 'أين يقع يونيوم في الرياض؟',
    questionAr: 'أين يقع يونيوم في الرياض؟',
    answer: 'UNEOM Riyadh headquarters is located on King Fahd Road, Olaya District.',
    answerAr: 'يقع المقر الرئيسي ليونيوم وصالة العرض الرئيسية على طريق الملك فهد، حي العليا، الرياض 12214. يمكن الوصول إلينا بسهولة من جميع مناطق الرياض ونوفر موقف سيارات مجاني للزوار. صالة العرض تعرض عينات من جميع مجموعات الأزياء لدينا.'
  },
  {
    question: 'ما أنواع الأزياء المتوفرة في يونيوم الرياض؟',
    questionAr: 'ما أنواع الأزياء المتوفرة في يونيوم الرياض؟',
    answer: 'UNEOM Riyadh offers all uniform types.',
    answerAr: 'يقدم يونيوم الرياض جميع أنواع الأزياء: سكراب طبي وأزياء رعاية صحية، ملابس شركات ومكاتب، زي مدرسي لجميع المراحل، زي فنادق ومطاعم، ملابس صناعية وسلامة، زي حراسة أمنية. صالة عرضنا في الرياض لديها عينات من جميع المنتجات.'
  },
  {
    question: 'هل يوفر يونيوم توصيل في نفس اليوم في الرياض؟',
    questionAr: 'هل يوفر يونيوم توصيل في نفس اليوم في الرياض؟',
    answer: 'Yes, UNEOM offers same-day delivery for stock items within Riyadh.',
    answerAr: 'نعم، يوفر يونيوم توصيل في نفس اليوم للمنتجات المتوفرة داخل مدينة الرياض. الطلبات المقدمة قبل 12 ظهراً يمكن توصيلها في نفس اليوم. للطلبات المخصصة، نقدم خدمة سريعة 48 ساعة في الرياض. جميع التوصيلات داخل الرياض مجانية للطلبات فوق 500 ريال.'
  },
  {
    question: 'ما ساعات عمل صالة عرض يونيوم الرياض؟',
    questionAr: 'ما ساعات عمل صالة عرض يونيوم الرياض؟',
    answer: 'UNEOM Riyadh showroom is open Sunday to Thursday.',
    answerAr: 'صالة عرض يونيوم الرياض مفتوحة من الأحد إلى الخميس، من 8:30 صباحاً إلى 5:30 مساءً. نحن مغلقون أيام الجمعة والسبت. يُنصح بحجز موعد لاستشارات التصميم المخصص. الزيارات بدون موعد مرحب بها لمشاهدة العينات وتقديم الطلبات.'
  },
  {
    question: 'هل يخدم يونيوم الرياض المستشفيات والمراكز الطبية؟',
    questionAr: 'هل يخدم يونيوم الرياض المستشفيات والمراكز الطبية؟',
    answer: 'Yes, UNEOM Riyadh is a trusted supplier for hospitals.',
    answerAr: 'نعم، يونيوم الرياض مورد موثوق للعديد من المستشفيات والمراكز الطبية الكبرى في العاصمة. نخدم مستشفى الملك فيصل التخصصي ومدينة الملك سعود الطبية والعديد من المستشفيات والعيادات الخاصة. نقدم أزياء طبية متخصصة مضادة للميكروبات وطلبات بالجملة للمرافق الصحية.'
  },
];

const locationData = {
  name: 'الرياض',
  address: 'طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية',
  phone: '+966 56 461 2017',
  email: 'riyadh@uneom.com',
  whatsapp: '+966564612017',
  workingHours: 'الأحد - الخميس: 8:30 صباحاً - 5:30 مساءً',
  isHeadquarters: true,
};

const services = [
  { icon: '🏥', title: 'الأزياء الطبية', desc: 'سكراب، معاطف مختبر، زي تمريض لمستشفيات الرياض' },
  { icon: '🏢', title: 'الملابس المؤسسية', desc: 'بدلات رسمية، زي مكاتب لشركات الرياض' },
  { icon: '🎓', title: 'الزي المدرسي', desc: 'زي طلاب لمدارس الرياض' },
  { icon: '🏨', title: 'أزياء الضيافة', desc: 'زي فنادق ومطاعم لضيافة الرياض' },
  { icon: '🏭', title: 'الملابس الصناعية', desc: 'ملابس سلامة لمصانع الرياض' },
  { icon: '🛡️', title: 'أزياء الأمن', desc: 'زي حراسة لشركات أمن الرياض' },
];

export default function RiyadhLocationPageAr() {
  return (
    <div dir="rtl">
      <SEO2026
        title="الزي الموحد في الرياض | يونيوم"
        titleAr="الزي الموحد في الرياض | يونيوم"
        description="UNEOM Riyadh headquarters."
        descriptionAr="مقر يونيوم الرياض - المورد الرائد للأزياء الموحدة في الرياض للقطاعات الطبية والشركات والمدارس والضيافة."
        locale="ar"
        pageType="location"
        mainEntity="UNEOM Riyadh"
        mainEntityAr="متجر يونيوم للأزياء الرياض"
        primaryImage="/images/locations/riyadh-uneom-showroom.jpg"
        primaryImageAlt="صالة عرض يونيوم الرياض"
        faqs={riyadhFAQsAr}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' },
          { name: 'Riyadh', nameAr: 'الرياض', url: '/ar/locations/riyadh' },
        ]}
        location={{
          name: 'يونيوم الرياض',
          address: locationData.address,
          city: 'الرياض',
          region: 'منطقة الرياض',
          country: 'المملكة العربية السعودية',
          postalCode: '12214',
          phone: locationData.phone,
          email: locationData.email,
          latitude: 24.7136,
          longitude: 46.6753,
        }}
        serviceArea={['الرياض', 'المنطقة الوسطى', 'السعودية']}
      />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المواقع', href: '/ar/locations' }, { label: 'الرياض', href: '/ar/locations/riyadh' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400">🏢</span>
                <span className="text-sm font-medium">المقر الرئيسي</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                الأزياء الموحدة في <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">الرياض</span>
              </h1>
              
              <p className="text-xl mb-6 text-blue-100 leading-relaxed max-w-2xl">
                زوروا المقر الرئيسي وصالة العرض الرئيسية ليونيوم في الرياض. 
                شاهدوا مجموعة الأزياء الكاملة واحصلوا على استشارة متخصصة.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3"><span>📍</span><span>{locationData.address}</span></div>
                  <div className="flex items-center gap-3"><span>📞</span><span dir="ltr">{locationData.phone}</span></div>
                  <div className="flex items-center gap-3"><span>📧</span><span>{locationData.email}</span></div>
                  <div className="flex items-center gap-3"><span>🕐</span><span>{locationData.workingHours}</span></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/ar/quote?location=riyadh" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">احصل على عرض سعر ←</Button>
                <Button href="/ar/contact?location=riyadh" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">زيارة صالة العرض</Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/riyadh-cityscape.jpg" alt="مدينة الرياض - موقع يونيوم" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="ما نقدمه في الرياض" centered>خدمات الأزياء المتوفرة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن يونيوم الرياض</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {riyadhFAQsAr.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">زوروا يونيوم الرياض اليوم</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">اختبروا جودة أزياءنا بأنفسكم في صالة عرض الرياض. استشارة متخصصة وخدمة سريعة متوفرة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote?location=riyadh" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر مجاني ←</Link>
              <Link href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`} className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all">واتساب</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in English</p>
          <Link href="/locations/riyadh" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link>
        </div>
      </section>
    </div>
  );
}
