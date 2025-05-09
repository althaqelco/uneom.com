import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, defaultLocale } from '@/lib/i18n/config';
import LocationPageLayout from '@/components/layout/LocationPageLayout';

// Define possible locale values for static generation
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

// Define location data
const locationData = {
  slug: 'riyadh',
  name: {
    en: 'Riyadh',
    ar: 'الرياض'
  },
  heroImage: '/images/locations/riyadh-cityscape.jpg',
  mapImage: '/images/locations/riyadh-map.jpg',
  description: {
    en: 'Our headquarters in Riyadh serves as the central hub for UNEOM\'s operations across Saudi Arabia, offering comprehensive uniform solutions for healthcare, corporate, hospitality, and educational institutions.',
    ar: 'مقرنا الرئيسي في الرياض هو المركز المحوري لعمليات يونيوم في جميع أنحاء المملكة العربية السعودية، حيث نقدم حلولاً شاملة للزي الموحد لقطاعات الرعاية الصحية والشركات والضيافة والمؤسسات التعليمية.'
  },
  introduction: {
    en: 'As the capital of Saudi Arabia, Riyadh represents the heart of our operations. Our flagship location houses our design studios, production facilities, and main showroom. From here, we serve the largest concentration of corporate, healthcare, and educational institutions in the Kingdom, providing tailored uniform solutions that meet the specific needs of the Central Region\'s climate and business environment.',
    ar: 'باعتبارها عاصمة المملكة العربية السعودية، تمثل الرياض قلب عملياتنا. يضم موقعنا الرئيسي استوديوهات التصميم ومرافق الإنتاج وصالة العرض الرئيسية. من هنا، نخدم أكبر تجمع للمؤسسات الشركات والرعاية الصحية والتعليمية في المملكة، ونقدم حلولًا مخصصة للزي الموحد تلبي الاحتياجات المحددة لمناخ وبيئة الأعمال في المنطقة الوسطى.'
  },
  address: {
    en: 'King Fahd Road, Al Olaya District, Riyadh 12214, Saudi Arabia',
    ar: 'طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية'
  },
  phone: '+966 11 234 5678',
  email: 'riyadh@uneom.com',
  workingHours: {
    en: 'Sunday to Thursday: 8:30 AM - 5:30 PM',
    ar: 'الأحد إلى الخميس: 8:30 صباحًا - 5:30 مساءً'
  },
  googleMapsUrl: 'https://maps.google.com/?q=24.7136,46.6753',
  
  // Local team information
  team: [
    {
      name: {
        en: 'Ahmed Al-Saud',
        ar: 'أحمد آل سعود'
      },
      position: {
        en: 'Regional Manager',
        ar: 'المدير الإقليمي'
      },
      image: '/images/team/ahmed-al-saud.jpg',
      bio: {
        en: 'Ahmed has over 15 years of experience in the uniform industry, specializing in corporate and healthcare solutions.',
        ar: 'يمتلك أحمد أكثر من 15 عامًا من الخبرة في صناعة الزي الموحد، متخصصًا في حلول الشركات والرعاية الصحية.'
      }
    },
    {
      name: {
        en: 'Fatima Al-Qahtani',
        ar: 'فاطمة القحطاني'
      },
      position: {
        en: 'Senior Design Consultant',
        ar: 'مستشارة التصميم الأولى'
      },
      image: '/images/team/fatima-al-qahtani.jpg',
      bio: {
        en: 'Fatima leads our design team, creating innovative uniform solutions that blend functionality with modern aesthetics.',
        ar: 'تقود فاطمة فريق التصميم لدينا، وتبتكر حلولاً مبتكرة للزي الموحد تجمع بين الوظائف العملية والجماليات الحديثة.'
      }
    }
  ],
  
  // Specialized services for this location
  specializedServices: [
    {
      title: {
        en: 'Corporate Uniform Design',
        ar: 'تصميم الزي الموحد للشركات'
      },
      description: {
        en: 'Tailored uniform solutions for Riyadh\'s corporate sector, including banks, telecommunications, and government institutions.',
        ar: 'حلول مخصصة للزي الموحد لقطاع الشركات في الرياض، بما في ذلك البنوك والاتصالات والمؤسسات الحكومية.'
      },
      icon: '/icons/corporate-design.svg'
    },
    {
      title: {
        en: 'Healthcare Uniform Consultation',
        ar: 'استشارات الزي الموحد للرعاية الصحية'
      },
      description: {
        en: 'Specialized consultation services for hospitals and clinics in Riyadh, focusing on antimicrobial fabrics and comfort-optimized designs.',
        ar: 'خدمات استشارية متخصصة للمستشفيات والعيادات في الرياض، مع التركيز على الأقمشة المضادة للميكروبات والتصاميم المحسنة للراحة.'
      },
      icon: '/icons/healthcare-consultation.svg'
    },
    {
      title: {
        en: 'Educational Institution Programs',
        ar: 'برامج المؤسسات التعليمية'
      },
      description: {
        en: 'Comprehensive uniform programs for Riyadh\'s schools and universities, including design, production, and distribution solutions.',
        ar: 'برامج شاملة للزي الموحد لمدارس وجامعات الرياض، بما في ذلك حلول التصميم والإنتاج والتوزيع.'
      },
      icon: '/icons/education-programs.svg'
    },
    {
      title: {
        en: 'Rush Production Services',
        ar: 'خدمات الإنتاج السريع'
      },
      description: {
        en: 'Fast-track production services available exclusively at our Riyadh headquarters for urgent uniform needs.',
        ar: 'خدمات الإنتاج السريع متاحة حصريًا في مقرنا الرئيسي بالرياض لتلبية احتياجات الزي الموحد العاجلة.'
      },
      icon: '/icons/rush-production.svg'
    }
  ],
  
  // Local case studies
  caseStudies: [
    {
      title: {
        en: 'King Saud Medical City Uniform Redesign',
        ar: 'إعادة تصميم الزي الموحد لمدينة الملك سعود الطبية'
      },
      description: {
        en: 'Complete redesign of medical uniforms for 3,000+ staff, incorporating advanced antimicrobial fabrics and enhanced functionality.',
        ar: 'إعادة تصميم كاملة للزي الطبي لأكثر من 3000 موظف، مع دمج أقمشة متطورة مضادة للميكروبات ووظائف محسنة.'
      },
      image: '/images/case-studies/king-saud-medical.jpg',
      results: {
        en: '98% staff satisfaction, 15% reduction in uniform-related issues.',
        ar: '98٪ رضا الموظفين، انخفاض بنسبة 15٪ في المشكلات المتعلقة بالزي الموحد.'
      }
    },
    {
      title: {
        en: 'Riyadh Bank Corporate Identity Program',
        ar: 'برنامج الهوية المؤسسية لبنك الرياض'
      },
      description: {
        en: 'Development of a unified corporate identity through carefully designed uniforms for 120 branches across the Central Region.',
        ar: 'تطوير هوية مؤسسية موحدة من خلال تصميم الزي الموحد بعناية لـ 120 فرعًا في جميع أنحاء المنطقة الوسطى.'
      },
      image: '/images/case-studies/riyadh-bank.jpg',
      results: {
        en: 'Enhanced brand recognition, 22% increase in customer trust metrics.',
        ar: 'تعزيز التعرف على العلامة التجارية، زيادة بنسبة 22٪ في مقاييس ثقة العملاء.'
      }
    }
  ],
  
  // Local FAQs
  faqs: [
    {
      question: {
        en: 'What is the typical lead time for corporate uniform orders in Riyadh?',
        ar: 'ما هو الوقت النموذجي لتنفيذ طلبات الزي الموحد للشركات في الرياض؟'
      },
      answer: {
        en: 'For standard corporate orders, our lead time is 2-3 weeks from design approval. For rush orders, we offer an expedited service that can deliver within 7-10 business days for an additional fee.',
        ar: 'بالنسبة للطلبات القياسية للشركات، فإن وقت التنفيذ لدينا هو 2-3 أسابيع من الموافقة على التصميم. بالنسبة للطلبات العاجلة، نقدم خدمة مستعجلة يمكن أن تسلم خلال 7-10 أيام عمل مقابل رسوم إضافية.'
      }
    },
    {
      question: {
        en: 'Do you offer on-site measurement services for Riyadh-based companies?',
        ar: 'هل تقدمون خدمات القياس في الموقع للشركات التي تتخذ من الرياض مقراً لها؟'
      },
      answer: {
        en: 'Yes, our Riyadh headquarters offers complimentary on-site measurement services for corporate orders of 50 uniforms or more within the city limits. For smaller orders or locations outside Riyadh, a nominal fee may apply.',
        ar: 'نعم، يقدم مقرنا الرئيسي في الرياض خدمات قياس مجانية في الموقع لطلبات الشركات التي تطلب 50 زيًا موحدًا أو أكثر ضمن حدود المدينة. بالنسبة للطلبات الأصغر أو المواقع خارج الرياض، قد يتم تطبيق رسوم رمزية.'
      }
    },
    {
      question: {
        en: 'Can I visit your Riyadh showroom to see fabric samples and uniform options?',
        ar: 'هل يمكنني زيارة صالة العرض الخاصة بكم في الرياض لرؤية عينات الأقمشة وخيارات الزي الموحد؟'
      },
      answer: {
        en: 'Absolutely! Our Riyadh showroom welcomes visitors during business hours. We recommend scheduling an appointment with our design consultants for a personalized experience tailored to your industry and requirements.',
        ar: 'بالتأكيد! ترحب صالة العرض لدينا في الرياض بالزوار خلال ساعات العمل. نوصي بتحديد موعد مع مستشاري التصميم لدينا للحصول على تجربة مخصصة تناسب مجال عملك ومتطلباتك.'
      }
    },
    {
      question: {
        en: 'What industries do you primarily serve from your Riyadh location?',
        ar: 'ما هي الصناعات التي تخدمونها بشكل أساسي من موقعكم في الرياض؟'
      },
      answer: {
        en: 'Our Riyadh location serves all major industries, with particular expertise in healthcare, banking and finance, government institutions, hospitality, and education. Our design team has specialized knowledge of the requirements and regulations specific to these sectors in the Central Region.',
        ar: 'يخدم موقعنا في الرياض جميع الصناعات الرئيسية، مع خبرة خاصة في الرعاية الصحية والبنوك والتمويل والمؤسسات الحكومية والضيافة والتعليم. يتمتع فريق التصميم لدينا بمعرفة متخصصة بالمتطلبات واللوائح الخاصة بهذه القطاعات في المنطقة الوسطى.'
      }
    }
  ],
  
  // Related industries for this location
  relatedIndustries: ['healthcare', 'corporate', 'education', 'hospitality'] as const
};

// Get metadata for the page
export const generateMetadata = ({ params }: { params: { locale: Locale } }): Metadata => {
  const locale = params.locale || defaultLocale;
  
  return {
    title: locale === 'ar' 
      ? `يونيوم الرياض | حلول الزي الموحد المتخصصة في العاصمة` 
      : `UNEOM Riyadh | Specialized Uniform Solutions in the Capital`,
    description: locale === 'ar'
      ? `استكشف خدمات يونيوم للزي الموحد في الرياض، المقر الرئيسي لعملياتنا في المملكة. نقدم حلولاً مخصصة للزي الموحد للشركات والرعاية الصحية والتعليم والضيافة.`
      : `Explore UNEOM's uniform services in Riyadh, our headquarters for operations in the Kingdom. We provide tailored uniform solutions for corporate, healthcare, education, and hospitality sectors.`,
    alternates: {
      canonical: `https://uneom.com/locations/riyadh/`,
      languages: {
        'en': `https://uneom.com/locations/riyadh/`,
        'ar': `https://uneom.com/ar/locations/riyadh/`
      }
    }
  };
};

export default function RiyadhLocationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || defaultLocale;
  const isArabic = locale === 'ar';
  
  // Translations
  const translations = {
    visitUs: isArabic ? 'زورونا' : 'Visit Us',
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    workingHours: isArabic ? 'ساعات العمل' : 'Working Hours',
    getDirections: isArabic ? 'الحصول على الاتجاهات' : 'Get Directions',
    ourTeam: isArabic ? 'فريقنا في الرياض' : 'Our Riyadh Team',
    teamDescription: isArabic 
      ? 'خبراء متخصصون جاهزون لمساعدتك في تحقيق رؤيتك للزي الموحد. تعرف على فريقنا المتفاني في الرياض.'
      : 'Specialized experts ready to help you achieve your uniform vision. Meet our dedicated team in Riyadh.',
    specializedServices: isArabic ? 'خدمات متخصصة في الرياض' : 'Specialized Services in Riyadh',
    servicesDescription: isArabic
      ? 'نقدم مجموعة من الخدمات المصممة خصيصًا لتلبية الاحتياجات الفريدة للشركات والمؤسسات في الرياض والمنطقة الوسطى.'
      : 'We offer a range of services tailored to meet the unique needs of businesses and institutions in Riyadh and the Central Region.',
    successStories: isArabic ? 'قصص النجاح المحلية' : 'Local Success Stories',
    successDescription: isArabic
      ? 'اكتشف كيف ساعدنا العملاء في الرياض على تحسين هويتهم المؤسسية وتعزيز تجربة الموظفين من خلال حلول الزي الموحد المبتكرة.'
      : 'Discover how we\'ve helped clients in Riyadh enhance their corporate identity and improve employee experience through innovative uniform solutions.',
    results: isArabic ? 'النتائج' : 'Results',
    commonQuestions: isArabic ? 'الأسئلة الشائعة' : 'Common Questions',
    questionsDescription: isArabic
      ? 'إجابات على استفسارات عملائنا في الرياض حول خدماتنا ومنتجاتنا.'
      : 'Answers to common inquiries from our Riyadh clients about our services and products.',
    exploreIndustries: isArabic ? 'استكشف حلول الصناعات المتخصصة في الرياض' : 'Explore Industry Solutions in Riyadh',
    industriesDescription: isArabic
      ? 'نقدم حلولاً متخصصة للزي الموحد مصممة للتحديات والمتطلبات الفريدة لكل قطاع في المنطقة الوسطى.'
      : 'We provide specialized uniform solutions designed for the unique challenges and requirements of each industry in the Central Region.',
    viewIndustry: isArabic ? 'عرض حلول القطاع' : 'View Industry Solutions',
    getQuote: isArabic ? 'طلب عرض سعر' : 'Request a Quote',
    ctaHeading: isArabic 
      ? 'هل أنت جاهز لرفع مستوى زيك الموحد في الرياض؟' 
      : 'Ready to Elevate Your Uniform Experience in Riyadh?',
    ctaDescription: isArabic
      ? 'اتصل بفريقنا في الرياض اليوم لمناقشة متطلبات الزي الموحد الخاصة بك والحصول على حلول مخصصة لمؤسستك.'
      : 'Contact our Riyadh team today to discuss your uniform requirements and get customized solutions for your organization.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    healthcare: {
      name: isArabic ? 'الرعاية الصحية' : 'Healthcare',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    },
    corporate: {
      name: isArabic ? 'الشركات' : 'Corporate',
      image: '/images/industries/corporate/corporate-team.jpg'
    },
    education: {
      name: isArabic ? 'التعليم' : 'Education',
      image: '/images/industries/education/education-uniforms.jpg'
    },
    hospitality: {
      name: isArabic ? 'الضيافة' : 'Hospitality',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    }
  };

  return (
    <LocationPageLayout locale={locale}>
      <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28 pt-36">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src={locationData.heroImage}
              alt={locationData.name[locale]}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isArabic ? `يونيوم ${locationData.name[locale]}` : `UNEOM ${locationData.name[locale]}`}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              {locationData.description[locale]}
            </p>
          </div>
        </section>

        {/* Introduction & Contact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Introduction */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {isArabic ? `مركزنا الرئيسي في ${locationData.name[locale]}` : `Our Headquarters in ${locationData.name[locale]}`}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {locationData.introduction[locale]}
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-1 bg-gray-50 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {translations.visitUs}
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {translations.contactInfo}
                  </h3>
                  <p className="text-gray-700 mb-1">{locationData.address[locale]}</p>
                  <p className="text-gray-700 mb-1">{locationData.phone}</p>
                  <p className="text-gray-700 mb-4">{locationData.email}</p>
                  
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {translations.workingHours}
                  </h3>
                  <p className="text-gray-700 mb-4">{locationData.workingHours[locale]}</p>
                  
                  <a 
                    href={locationData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                  >
                    {translations.getDirections}
                  </a>
                </div>
                
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={locationData.mapImage}
                    alt={`${locationData.name[locale]} ${isArabic ? 'خريطة' : 'map'}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.ourTeam}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.teamDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {locationData.team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={member.image}
                      alt={member.name[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name[locale]}
                    </h3>
                    <p className="text-blue-600 mb-4">{member.position[locale]}</p>
                    <p className="text-gray-600">{member.bio[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.specializedServices}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.servicesDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {locationData.specializedServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-start">
                  <div className="mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0">
                    <Image 
                      src={service.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title[locale]}
                    </h3>
                    <p className="text-gray-600">
                      {service.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.successStories}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.successDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {locationData.caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={study.image}
                      alt={study.title[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {study.title[locale]}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description[locale]}
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-800 uppercase mb-2">
                        {translations.results}
                      </h4>
                      <p className="text-gray-700">{study.results[locale]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {translations.commonQuestions}
                </h2>
                <p className="text-lg text-gray-600">
                  {translations.questionsDescription}
                </p>
              </div>
              
              <div className="space-y-6">
                {locationData.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {faq.question[locale]}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Industries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.exploreIndustries}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.industriesDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {locationData.relatedIndustries.map((industry) => (
                <div key={industry} className="relative rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-64">
                    <Image 
                      src={industryMapping[industry].image}
                      alt={industryMapping[industry].name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {industryMapping[industry].name}
                    </h3>
                    <Link 
                      href={`/${locale}/industries/${industry}`}
                      className="inline-block bg-white/90 hover:bg-white text-blue-700 text-sm font-semibold py-2 px-4 rounded transition-colors duration-200"
                    >
                      {translations.viewIndustry}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {translations.ctaHeading}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {translations.ctaDescription}
            </p>
            <Link 
              href={`/${locale}/quote?location=riyadh`}
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {translations.getQuote}
            </Link>
          </div>
        </section>
      </main>
    </LocationPageLayout>
  );
} 