import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define location data in Arabic
const locationData = {
  slug: 'riyadh',
  name: 'الرياض',
  heroImage: '/images/locations/riyadh-cityscape.jpg',
  mapImage: '/images/locations/riyadh-map.jpg',
  description: 'مقر يونيوم الرئيسي في الرياض يخدم كمركز أساسي لعملياتنا في جميع أنحاء المملكة العربية السعودية، ويقدم حلول شاملة للزي الموحد للمؤسسات الصحية والشركات وقطاعات الضيافة والتعليم.',
  introduction: 'باعتبارها عاصمة المملكة العربية السعودية، تمثل الرياض قلب عملياتنا. يضم موقعنا الرئيسي استوديوهات التصميم ومرافق الإنتاج وصالة العرض الرئيسية. من هنا، نخدم أكبر تجمع من المؤسسات الشركات والرعاية الصحية والتعليم في المملكة، ونقدم حلول زي موحد مخصصة تلبي الاحتياجات المحددة لمناخ وبيئة أعمال المنطقة الوسطى.',
  address: 'طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية',
  phone: '+966 11 234 5678',
  email: 'riyadh@uneom.com',
  workingHours: 'الأحد إلى الخميس: 8:30 صباحاً - 5:30 مساءً',
  googleMapsUrl: 'https://maps.google.com/?q=24.7136,46.6753',
  team: [
    {
      name: 'أحمد آل سعود',
      position: 'المدير الإقليمي',
      image: '/images/team/ahmed-al-saud.jpg',
      bio: 'أحمد لديه أكثر من 15 عاماً من الخبرة في صناعة الزي الموحد، متخصص في حلول الشركات والرعاية الصحية.'
    },
    {
      name: 'فاطمة القحطاني',
      position: 'مستشارة التصميم الأولى',
      image: '/images/team/fatima-al-qahtani.jpg',
      bio: 'فاطمة تقود فريق التصميم لدينا، وتبتكر حلول زي موحد تمزج بين الوظائف العملية والجماليات الحديثة.'
    }
  ],
  specializedServices: [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'حلول زي موحد مخصصة لقطاع الشركات في الرياض، بما في ذلك البنوك والاتصالات والمؤسسات الحكومية.',
      icon: '/icons/corporate-design.svg'
    },
    {
      title: 'استشارات الزي الطبي',
      description: 'خدمات استشارية متخصصة للمستشفيات والعيادات في الرياض، مع التركيز على الأقمشة المضادة للميكروبات والتصميمات المحسنة للراحة.',
      icon: '/icons/healthcare-consultation.svg'
    },
    {
      title: 'برامج المؤسسات التعليمية',
      description: 'برامج زي موحد شاملة لمدارس وجامعات الرياض، تشمل التصميم والإنتاج وحلول التوزيع.',
      icon: '/icons/education-programs.svg'
    },
    {
      title: 'خدمات الإنتاج السريع',
      description: 'خدمات إنتاج سريعة متاحة حصرياً في مقرنا الرئيسي بالرياض لاحتياجات الزي الموحد العاجلة.',
      icon: '/icons/rush-production.svg'
    }
  ],
  caseStudies: [
    {
      title: 'إعادة تصميم زي مدينة الملك سعود الطبية',
      description: 'إعادة تصميم شاملة للزي الطبي لأكثر من 3000 موظف، مع دمج أقمشة متطورة مضادة للميكروبات ووظائف محسنة.',
      image: '/images/case-studies/king-saud-medical.jpg',
      results: '98% رضا الموظفين، 15% انخفاض في المشاكل المتعلقة بالزي الموحد.'
    },
    {
      title: 'برنامج الهوية المؤسسية لبنك الرياض',
      description: 'تطوير هوية مؤسسية موحدة من خلال زي مصمم بعناية لـ 120 فرع في جميع أنحاء المنطقة الوسطى.',
      image: '/images/case-studies/riyadh-bank.jpg',
      results: 'تعزيز التعرف على العلامة التجارية، 22% زيادة في مقاييس ثقة العملاء.'
    }
  ],
  faqs: [
    {
      question: 'ما هو الوقت المعتاد لطلبات الزي الموحد للشركات في الرياض؟',
      answer: 'بالنسبة لطلبات الشركات القياسية، وقت التسليم لدينا هو 2-3 أسابيع من الموافقة على التصميم. للطلبات العاجلة، نقدم خدمة سريعة يمكنها التسليم خلال 7-10 أيام عمل مقابل رسوم إضافية.'
    },
    {
      question: 'هل تقدمون خدمات القياس في الموقع للشركات في الرياض؟',
      answer: 'نعم، يقدم مقرنا الرئيسي في الرياض خدمات قياس مجانية في الموقع لطلبات الشركات من 50 زي موحد أو أكثر داخل حدود المدينة. للطلبات الأصغر أو المواقع خارج الرياض، قد تطبق رسوم رمزية.'
    },
    {
      question: 'هل يمكنني زيارة صالة العرض في الرياض لرؤية عينات الأقمشة وخيارات الزي الموحد؟',
      answer: 'بالطبع! ترحب صالة العرض في الرياض بالزوار خلال ساعات العمل. نوصي بجدولة موعد مع مستشاري التصميم لدينا للحصول على تجربة شخصية مخصصة لصناعتك ومتطلباتك.'
    },
    {
      question: 'ما هي الصناعات التي تخدمونها بشكل أساسي من موقع الرياض؟',
      answer: 'يخدم موقع الرياض جميع الصناعات الرئيسية، مع خبرة خاصة في الرعاية الصحية والبنوك والتمويل والمؤسسات الحكومية والضيافة والتعليم. فريق التصميم لدينا لديه معرفة متخصصة بالمتطلبات واللوائح الخاصة بهذه القطاعات في المنطقة الوسطى.'
    }
  ],
  relatedIndustries: ['healthcare', 'corporate', 'education', 'hospitality'] as const
};

export const metadata: Metadata = {
  title: 'يونيوم الرياض | تصنيع وتوريد الزي الموحد المتميز في العاصمة',
  description: 'زوروا مقر يونيوم الرئيسي في الرياض للحصول على خدمات تصنيع وتصميم الزي الموحد المتميزة. نقدم زي موحد مخصص للشركات والرعاية الصحية والضيافة والتعليم، مع خدمات متخصصة للمنطقة الوسطى بالمملكة العربية السعودية.',
  keywords: ['زي موحد الرياض', 'موردي الزي الموحد الرياض', 'زي الشركات السعودية', 'زي الرعاية الصحية الرياض', 'زي التعليم', 'زي الضيافة', 'يونيوم الرياض', 'ملابس العمل المهنية السعودية', 'تصنيع الزي الموحد الرياض'],
  alternates: {
    canonical: 'https://uneom.com/ar/locations/riyadh/',
    languages: {
      'en': 'https://uneom.com/locations/riyadh/',
      'ar': 'https://uneom.com/ar/locations/riyadh/'
    }
  },
  openGraph: {
    title: 'يونيوم الرياض | تصنيع وتوريد الزي الموحد المتميز في العاصمة',
    description: 'زوروا مقر يونيوم الرئيسي في الرياض للحصول على خدمات تصنيع وتصميم الزي الموحد المتميزة. نقدم زي موحد مخصص للشركات والرعاية الصحية والضيافة والتعليم، مع خدمات متخصصة للمنطقة الوسطى بالمملكة العربية السعودية.',
    url: 'https://uneom.com/ar/locations/riyadh/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/locations/riyadh-cityscape.jpg',
        width: 1200,
        height: 630,
        alt: 'مقر يونيوم الرئيسي في الرياض'
      }
    ],
    locale: 'ar'
  }
};

export default function RiyadhLocationPageArabic() {
  // Translations (Arabic)
  const translations = {
    visitUs: 'زورونا',
    contactInfo: 'معلومات التواصل',
    workingHours: 'ساعات العمل',
    getDirections: 'احصل على الاتجاهات',
    ourTeam: 'فريقنا في الرياض',
    teamDescription: 'خبراء متخصصون مستعدون لمساعدتك في تحقيق رؤيتك للزي الموحد. تعرف على فريقنا المتفاني في الرياض.',
    specializedServices: 'الخدمات المتخصصة في الرياض',
    servicesDescription: 'نقدم مجموعة من الخدمات المصممة لتلبية الاحتياجات الفريدة للشركات والمؤسسات في الرياض والمنطقة الوسطى.',
    successStories: 'قصص نجاح محلية',
    successDescription: 'اكتشف كيف ساعدنا العملاء في الرياض على تعزيز هويتهم المؤسسية وتحسين تجربة الموظفين من خلال حلول الزي الموحد المبتكرة.',
    results: 'النتائج',
    commonQuestions: 'الأسئلة الشائعة',
    questionsDescription: 'إجابات على الاستفسارات الشائعة من عملائنا في الرياض حول خدماتنا ومنتجاتنا.',
    exploreIndustries: 'استكشف حلول الصناعات في الرياض',
    industriesDescription: 'نقدم حلول زي موحد متخصصة مصممة للتحديات والمتطلبات الفريدة لكل صناعة في المنطقة الوسطى.',
    viewIndustry: 'عرض حلول الصناعة',
    getQuote: 'طلب عرض سعر',
    ctaHeading: 'مستعد لرفع مستوى تجربة الزي الموحد في الرياض؟',
    ctaDescription: 'تواصل مع فريقنا في الرياض اليوم لمناقشة متطلبات الزي الموحد والحصول على حلول مخصصة لمؤسستك.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    healthcare: {
      name: 'الرعاية الصحية',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    },
    corporate: {
      name: 'الشركات',
      image: '/images/industries/corporate/corporate-team.jpg'
    },
    education: {
      name: 'التعليم',
      image: '/images/industries/education/education-uniforms.jpg'
    },
    hospitality: {
      name: 'الضيافة',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    }
  };

  return (
    <main className="min-h-screen rtl text-right">
      {/* Enhanced SEO for Google May 2025 Standards - Arabic */}
      <EnhancedSEO2025
        title="يونيوم الرياض | مصنع ومورد الزي الموحد المتميز في العاصمة"
        description="زوروا مقر يونيوم الرئيسي في الرياض للحصول على خدمات تصنيع وتصميم الزي الموحد المتميز. نقدم زي موحد مخصص للشركات والرعاية الصحية والضيافة والتعليم، مع خدمات متخصصة للمنطقة الوسطى في المملكة العربية السعودية."
        keywords={[
          'زي موحد الرياض',
          'مورد زي موحد الرياض',
          'زي موحد شركات الرياض',
          'زي موحد طبي الرياض',
          'زي موحد ضيافة الرياض',
          'زي موحد تعليمي الرياض',
          'ملابس عمل مهنية الرياض',
          'تصنيع زي موحد الرياض',
          'زي موحد مخصص السعودية',
          'مقر يونيوم الرياض',
          'زي موحد المنطقة الوسطى',
          'صالة عرض زي موحد الرياض'
        ]}
        author="فريق يونيوم الرياض"
        expertise="تصنيع وتصميم الزي الموحد في الرياض"
        contentType="location"
        trustSignals={[
          'المقر الرئيسي في الرياض',
          'نخدم أكثر من 500 شركة في المنطقة الوسطى',
          'خدمات قياس في الموقع',
          'إنتاج سريع متاح',
          'مستشارو تصميم متخصصون'
        ]}
        canonicalUrl="https://uneom.com/ar/locations/riyadh/"
        locale="ar"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src={locationData.heroImage}
            alt={locationData.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            حلول يونيوم المتميزة للزي الموحد في الرياض، المملكة العربية السعودية
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            {locationData.description}
          </p>
        </Container>
      </section>

      {/* Introduction & Contact */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Introduction */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {`مقرنا الرئيسي في ${locationData.name}`}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {locationData.introduction}
              </p>
            </div>
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{translations.visitUs}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">{translations.contactInfo}</h4>
                  <p className="text-gray-600 mb-2">{locationData.address}</p>
                  <p className="text-gray-600 mb-2">هاتف: {locationData.phone}</p>
                  <p className="text-gray-600">{locationData.email}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">{translations.workingHours}</h4>
                  <p className="text-gray-600">{locationData.workingHours}</p>
                </div>
                
                <a 
                  href={locationData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {translations.getDirections}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <Container>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={locationData.mapImage}
              alt={`خريطة موقع ${locationData.name}`}
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">{translations.ourTeam}</SectionHeading>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {translations.teamDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locationData.team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">{translations.specializedServices}</SectionHeading>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {translations.servicesDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locationData.specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {/* Icon placeholder */}
                      <div className="w-6 h-6 bg-primary-600 rounded"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">{translations.successStories}</SectionHeading>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {translations.successDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locationData.caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700">{translations.results}:</p>
                    <p className="text-sm text-primary-600">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">{translations.commonQuestions}</SectionHeading>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {translations.questionsDescription}
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {locationData.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Industries */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">{translations.exploreIndustries}</SectionHeading>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {translations.industriesDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.relatedIndustries.map((industry) => (
              <Link 
                key={industry}
                href={`/ar/industries/${industry}`}
                className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <Image 
                    src={industryMapping[industry].image}
                    alt={industryMapping[industry].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{industryMapping[industry].name}</h3>
                  <p className="text-primary-600 text-sm">{translations.viewIndustry}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.ctaHeading}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{translations.ctaDescription}</p>
          <Button href="/ar/quote" size="lg" variant="secondary">
            {translations.getQuote}
          </Button>
        </Container>
      </section>
    </main>
  );
}