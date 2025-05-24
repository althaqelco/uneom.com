import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, defaultLocale } from '@/lib/i18n/config';
import { generateMetadata as generateSEO } from '@/components/seo/ServerSEO';
import MainLayout from '@/components/layout/MainLayout';
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define possible locale values for static generation
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

// Define metadata for the page
export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  const isArabic = locale === 'ar';

  const title = isArabic 
    ? 'يونيوم الرياض | مقرنا الرئيسي للزي الموحد في المملكة العربية السعودية' 
    : 'UNEOM Riyadh | Our Headquarters for Premium Uniforms in Saudi Arabia';
    
  const description = isArabic
    ? 'زيارة المقر الرئيسي ليونيوم في الرياض. نقدم تصميم وإنتاج وتوريد اليونيفورم عالي الجودة للشركات والمستشفيات والفنادق والمدارس في المنطقة الوسطى.'
    : 'Visit UNEOM headquarters in Riyadh. We provide high-quality uniform design, production, and supply for corporate, healthcare, hospitality, and education sectors across Central Saudi Arabia.';
    
  const keywords = [
    isArabic ? 'يونيوم الرياض' : 'UNEOM Riyadh',
    isArabic ? 'زي موحد الرياض' : 'uniforms Riyadh',
    isArabic ? 'ملابس مهنية' : 'professional clothing',
    isArabic ? 'تصميم يونيفورم' : 'uniform design',
    isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    isArabic ? 'المقر الرئيسي' : 'headquarters'
  ];

  return generateSEO({
    title,
    description,
    keywords,
    path: '/locations/riyadh',
    locale: locale as 'en' | 'ar',
    imageUrl: '/images/locations/riyadh-cityscape.jpg'
  });
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

export default function RiyadhLocationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const isArabic = locale === 'ar';

  // Get the appropriate content based on locale
  const content = {
    name: locationData.name[locale],
    description: locationData.description[locale],
    introduction: locationData.introduction[locale],
    address: locationData.address[locale],
    workingHours: locationData.workingHours[locale]
  };

  // Translation helper for common UI elements
  const ui = {
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    ourTeam: isArabic ? 'فريقنا' : 'Our Team',
    specializedServices: isArabic ? 'خدمات متخصصة' : 'Specialized Services',
    caseStudies: isArabic ? 'دراسات الحالة' : 'Case Studies',
    results: isArabic ? 'النتائج' : 'Results',
    faqs: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    relatedIndustries: isArabic ? 'الصناعات ذات الصلة' : 'Related Industries',
    viewIndustry: isArabic ? 'عرض الصناعة' : 'View Industry',
    getDirections: isArabic ? 'الحصول على الاتجاهات' : 'Get Directions',
    requestConsultation: isArabic ? 'طلب استشارة' : 'Request Consultation'
  };

  // Industry name mapping
  const industryNames: Record<typeof locationData.relatedIndustries[number], { [key in Locale]: string }> = {
    healthcare: {
      en: 'Healthcare',
      ar: 'الرعاية الصحية'
    },
    corporate: {
      en: 'Corporate',
      ar: 'الشركات'
    },
    education: {
      en: 'Education',
      ar: 'التعليم'
    },
    hospitality: {
      en: 'Hospitality',
      ar: 'الضيافة'
    }
  };

  return (
    <MainLayout locale={locale}>
      <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28 pt-36">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src={locationData.heroImage}
              alt={content.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isArabic ? `يونيوم ${content.name}` : `UNEOM ${content.name}`}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>
        </section>

        {/* Introduction & Contact Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Introduction */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">
                  {isArabic ? `عن يونيوم ${content.name}` : `About UNEOM ${content.name}`}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {content.introduction}
                </p>
                <div className="mt-8">
                  <Link 
                    href={`/${locale}/contact?location=riyadh`}
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
                  >
                    {ui.requestConsultation}
                  </Link>
                </div>
              </div>
              
              {/* Contact Info Card */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">{ui.contactInfo}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <HiOutlineMapPin className={`mt-1 flex-shrink-0 ${isArabic ? 'ml-3' : 'mr-3'}`} size={20} />
                    <span>{content.address}</span>
                  </li>
                  <li className="flex items-center">
                    <HiOutlinePhone className={`flex-shrink-0 ${isArabic ? 'ml-3' : 'mr-3'}`} size={20} />
                    <a href={`tel:${locationData.phone}`} className="hover:text-primary-600 transition-colors">
                      {locationData.phone}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <HiOutlineEnvelope className={`flex-shrink-0 ${isArabic ? 'ml-3' : 'mr-3'}`} size={20} />
                    <a href={`mailto:${locationData.email}`} className="hover:text-primary-600 transition-colors">
                      {locationData.email}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <HiOutlineClock className={`flex-shrink-0 ${isArabic ? 'ml-3' : 'mr-3'}`} size={20} />
                    <span>{content.workingHours}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a 
                    href={locationData.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    {ui.getDirections}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the page content... */}
      </main>
    </MainLayout>
  );
} 