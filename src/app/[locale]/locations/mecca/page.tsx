import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, defaultLocale } from '@/lib/i18n/config';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define possible locale values for static generation
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

// Define location data
const locationData = {
  slug: 'mecca',
  name: {
    en: 'Mecca',
    ar: 'مكة المكرمة'
  },
  heroImage: '/images/locations/mecca-skyline.jpg',
  mapImage: '/images/locations/mecca-map.jpg',
  description: {
    en: 'Our Mecca branch specializes in religious institution uniforms and hospitality apparel for the city\'s unique service sector, blending tradition with function for this sacred destination.',
    ar: 'يتخصص فرعنا في مكة المكرمة في أزياء المؤسسات الدينية وملابس الضيافة لقطاع الخدمات الفريد في المدينة، مع مزج التقاليد مع الوظيفة لهذه الوجهة المقدسة.'
  },
  introduction: {
    en: 'Located in the holy city of Mecca, our specialized facility offers unique uniform solutions catering to religious institutions, hajj and umrah service providers, and the city\'s extensive hospitality sector. We understand the special requirements of apparel in this sacred city, balancing traditional values with practical comfort for staff serving millions of visitors annually.',
    ar: 'يقع مرفقنا المتخصص في مدينة مكة المكرمة المقدسة، ويقدم حلولاً فريدة للزي الموحد تلبي احتياجات المؤسسات الدينية ومقدمي خدمات الحج والعمرة وقطاع الضيافة الواسع في المدينة. نحن نتفهم المتطلبات الخاصة للملابس في هذه المدينة المقدسة، حيث نوازن بين القيم التقليدية والراحة العملية للموظفين الذين يخدمون ملايين الزوار سنوياً.'
  },
  address: {
    en: 'Ibrahim Al-Khalil Road, Al-Misfalah District, Mecca 24231, Saudi Arabia',
    ar: 'طريق إبراهيم الخليل، حي المسفلة، مكة المكرمة 24231، المملكة العربية السعودية'
  },
  phone: '+966 12 567 8901',
  email: 'mecca@uneom.com',
  workingHours: {
    en: 'Saturday to Thursday: 9:00 AM - 8:00 PM | Friday: 4:00 PM - 8:00 PM',
    ar: 'السبت إلى الخميس: 9:00 صباحًا - 8:00 مساءً | الجمعة: 4:00 مساءً - 8:00 مساءً'
  },
  googleMapsUrl: 'https://maps.google.com/?q=21.4225,39.8262',
  
  // Local team information
  team: [
    {
      name: {
        en: 'Ibrahim Al-Harbi',
        ar: 'إبراهيم الحربي'
      },
      position: {
        en: 'Religious Apparel Specialist',
        ar: 'أخصائي الملابس الدينية'
      },
      image: '/images/team/ibrahim-al-harbi.jpg',
      bio: {
        en: 'Ibrahim has 20 years of experience in designing respectful and functional apparel for religious institutions and sacred environments.',
        ar: 'يتمتع إبراهيم بخبرة 20 عامًا في تصميم ملابس محترمة وعملية للمؤسسات الدينية والبيئات المقدسة.'
      }
    },
    {
      name: {
        en: 'Norah Al-Qahtani',
        ar: 'نورة القحطاني'
      },
      position: {
        en: 'Hospitality Solutions Manager',
        ar: 'مديرة حلول الضيافة'
      },
      image: '/images/team/norah-al-qahtani.jpg',
      bio: {
        en: 'Norah specializes in creating uniform programs for Mecca\'s hospitality sector, with expertise in high-volume, culturally sensitive visitor services.',
        ar: 'تتخصص نورة في إنشاء برامج الزي الموحد لقطاع الضيافة في مكة، مع خبرة في خدمات الزوار ذات الحجم العالي والحساسية الثقافية.'
      }
    }
  ],
  
  // Specialized services for this location
  specializedServices: [
    {
      title: {
        en: 'Religious Institution Uniforms',
        ar: 'أزياء المؤسسات الدينية'
      },
      description: {
        en: 'Dignified, modest uniforms for staff at mosques, religious schools, and sacred sites, designed with respect for Islamic traditions and practical functionality.',
        ar: 'أزياء كريمة ومحتشمة للموظفين في المساجد والمدارس الدينية والمواقع المقدسة، مصممة باحترام للتقاليد الإسلامية والوظائف العملية.'
      },
      icon: '/icons/religious-institution.svg'
    },
    {
      title: {
        en: 'Hajj & Umrah Service Apparel',
        ar: 'ملابس خدمات الحج والعمرة'
      },
      description: {
        en: 'Specialized uniforms for pilgrim guide services, transportation providers, and assistance teams, featuring high visibility, durability, and comfort in crowded conditions.',
        ar: 'أزياء متخصصة لخدمات إرشاد الحجاج ومقدمي خدمات النقل وفرق المساعدة، تتميز برؤية عالية ومتانة وراحة في الظروف المزدحمة.'
      },
      icon: '/icons/hajj-umrah.svg'
    },
    {
      title: {
        en: 'Sacred City Hospitality Wear',
        ar: 'ملابس الضيافة للمدينة المقدسة'
      },
      description: {
        en: 'Hotel, restaurant, and visitor service uniforms designed specifically for Mecca\'s unique environment, combining cultural sensitivity with professional presentation.',
        ar: 'أزياء الفنادق والمطاعم وخدمات الزوار المصممة خصيصًا لبيئة مكة المكرمة الفريدة، تجمع بين الحساسية الثقافية والمظهر المهني.'
      },
      icon: '/icons/hospitality-wear.svg'
    },
    {
      title: {
        en: 'Crowd Management Uniforms',
        ar: 'أزياء إدارة الحشود'
      },
      description: {
        en: 'High-visibility, durable uniforms for security, crowd management, and public safety personnel working during peak pilgrimage seasons.',
        ar: 'أزياء عالية الرؤية ومتينة للأمن وإدارة الحشود وموظفي السلامة العامة العاملين خلال مواسم الحج ذروتها.'
      },
      icon: '/icons/crowd-management.svg'
    }
  ],
  
  // Local case studies
  caseStudies: [
    {
      title: {
        en: 'Grand Mosque Service Staff Program',
        ar: 'برنامج موظفي خدمة المسجد الحرام'
      },
      description: {
        en: 'Development of a comprehensive uniform system for visitor assistance staff at the Grand Mosque, featuring modest, dignified designs with practical features for the busy sacred environment.',
        ar: 'تطوير نظام شامل للزي الموحد لموظفي مساعدة الزوار في المسجد الحرام، يتميز بتصاميم متواضعة وكريمة مع ميزات عملية للبيئة المقدسة المزدحمة.'
      },
      image: '/images/case-studies/grand-mosque-staff.jpg',
      results: {
        en: 'Enhanced visitor recognition of assistance staff, improved staff comfort during 12-hour shifts, 95% positive feedback on appropriateness and functionality.',
        ar: 'تعزيز تعرف الزوار على موظفي المساعدة، تحسين راحة الموظفين خلال المناوبات التي تستغرق 12 ساعة، 95٪ ردود فعل إيجابية على الملاءمة والوظائف.'
      }
    },
    {
      title: {
        en: 'Pilgrim Guide Service Uniforms',
        ar: 'أزياء خدمة مرشدي الحجاج'
      },
      description: {
        en: 'Custom-designed apparel for mutawif (pilgrim guides) services combining traditional elements with modern performance features like moisture management and high visibility in crowds.',
        ar: 'ملابس مصممة خصيصًا لخدمات المطوفين (مرشدي الحجاج) تجمع بين العناصر التقليدية وميزات الأداء الحديثة مثل إدارة الرطوبة والرؤية العالية في الحشود.'
      },
      image: '/images/case-studies/pilgrim-guides.jpg',
      results: {
        en: 'Reduced lost pilgrim incidents by 40%, improved guide identification in crowded conditions, significant improvement in comfort during summer Hajj season.',
        ar: 'خفض حوادث فقدان الحجاج بنسبة 40٪، تحسين تحديد المرشد في الظروف المزدحمة، تحسن كبير في الراحة خلال موسم الحج الصيفي.'
      }
    }
  ],
  
  // Local FAQs
  faqs: [
    {
      question: {
        en: 'Do your uniforms meet the modest dress requirements appropriate for Mecca?',
        ar: 'هل تلبي الأزياء الموحدة متطلبات اللباس المحتشم المناسب لمكة المكرمة؟'
      },
      answer: {
        en: 'Yes, all our uniform designs for Mecca prioritize modesty and respect for Islamic traditions. Our in-house religious apparel specialists consult on every design to ensure appropriate coverage, loose fitting where required, and overall respectful presentation while maintaining functionality for the specific work environment.',
        ar: 'نعم، جميع تصميمات الزي الموحد لدينا لمكة المكرمة تعطي الأولوية للاحتشام واحترام التقاليد الإسلامية. يتشاور أخصائيو الملابس الدينية الداخليون لدينا بشأن كل تصميم لضمان التغطية المناسبة والتناسب الفضفاض حيثما يلزم، والعرض المحترم بشكل عام مع الحفاظ على الوظائف لبيئة العمل المحددة.'
      }
    },
    {
      question: {
        en: 'How do you handle uniform requirements during peak Hajj season?',
        ar: 'كيف تتعاملون مع متطلبات الزي الموحد خلال موسم الحج؟'
      },
      answer: {
        en: 'We maintain increased inventory levels and expanded production capacity specifically for the Hajj season. Our Mecca facility increases staffing by 300% prior to Hajj, allowing us to fulfill large orders with 50% faster turnaround times. We also offer 24/7 emergency replacement services during the Hajj period for clients providing critical services to pilgrims.',
        ar: 'نحافظ على مستويات مخزون متزايدة وقدرة إنتاجية موسعة خصيصًا لموسم الحج. تزيد منشأتنا في مكة المكرمة التوظيف بنسبة 300٪ قبل الحج، مما يسمح لنا بتلبية الطلبات الكبيرة بأوقات تنفيذ أسرع بنسبة 50٪. كما نقدم خدمات استبدال طارئة على مدار الساعة طوال أيام الأسبوع خلال فترة الحج للعملاء الذين يقدمون خدمات حيوية للحجاج.'
      }
    },
    {
      question: {
        en: 'Can you provide heat-adaptive uniforms suitable for staff working outdoors in Mecca?',
        ar: 'هل يمكنكم توفير أزياء موحدة متكيفة مع الحرارة مناسبة للموظفين العاملين في الهواء الطلق في مكة المكرمة؟'
      },
      answer: {
        en: 'Absolutely. Our Mecca-specific uniform designs incorporate advanced heat management fabrics that maintain appropriate appearance while providing superior comfort in extreme heat. We use breathable, quick-drying materials with UV protection for outdoor staff, and our designs feature strategic ventilation that remains visually appropriate while maximizing airflow.',
        ar: 'بالتأكيد. تتضمن تصميمات الزي الموحد الخاصة بمكة المكرمة أقمشة متطورة لإدارة الحرارة تحافظ على المظهر المناسب مع توفير راحة متفوقة في الحرارة الشديدة. نستخدم مواد تسمح بمرور الهواء وسريعة الجفاف مع حماية من الأشعة فوق البنفسجية للموظفين في الهواء الطلق، وتتميز تصميماتنا بتهوية استراتيجية تظل مناسبة بصريًا مع زيادة تدفق الهواء إلى أقصى حد.'
      }
    },
    {
      question: {
        en: 'Do you offer special accommodation for large orders during Umrah season?',
        ar: 'هل تقدمون استيعابًا خاصًا للطلبات الكبيرة خلال موسم العمرة؟'
      },
      answer: {
        en: 'Yes, we offer specialized Umrah season packages for hospitality and service providers. These include priority production scheduling, volume discounts, and phased delivery options to accommodate staffing fluctuations. Our Mecca branch maintains expanded hours during peak Umrah months to provide faster consultations, fittings, and delivery services tailored to the unique seasonal patterns of the holy city.',
        ar: 'نعم، نقدم حزم موسم عمرة متخصصة لمقدمي خدمات الضيافة والخدمات. تشمل هذه جدولة إنتاج ذات أولوية وخصومات على الحجم وخيارات تسليم مرحلية لاستيعاب تقلبات التوظيف. يحافظ فرعنا في مكة المكرمة على ساعات عمل موسعة خلال أشهر العمرة الذروة لتوفير استشارات أسرع وقياسات وخدمات توصيل مصممة خصيصًا للأنماط الموسمية الفريدة للمدينة المقدسة.'
      }
    }
  ],
  
  // Related industries for this location
  relatedIndustries: ['religious', 'hospitality', 'security', 'healthcare'] as const
};

// Get metadata for the page
export const generateMetadata = ({ params }: { params: { locale: Locale } }): Metadata => {
  const locale = params.locale || defaultLocale;
  
  return {
    title: locale === 'ar' 
      ? `يونيوم مكة المكرمة | أزياء المؤسسات الدينية وحلول الضيافة المتخصصة` 
      : `UNEOM Mecca | Religious Institution & Specialized Hospitality Solutions`,
    description: locale === 'ar'
      ? `استكشف خدمات يونيوم للأزياء الموحدة في مكة المكرمة، المتخصصة في أزياء المؤسسات الدينية وحلول الضيافة. نقدم تصاميم تجمع بين التقاليد والوظائف العملية.`
      : `Explore UNEOM's uniform services in Mecca, specializing in religious institution apparel and hospitality solutions. We provide designs that blend tradition with practical function.`,
    alternates: {
      canonical: `https://uneom.com/locations/mecca/`,
      languages: {
        'en': `https://uneom.com/locations/mecca/`,
        'ar': `https://uneom.com/ar/locations/mecca/`
      }
    }
  };
};

export default function MeccaLocationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || defaultLocale;
  const isArabic = locale === 'ar';
  
  // Translations
  const translations = {
    visitUs: isArabic ? 'زورونا' : 'Visit Us',
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    workingHours: isArabic ? 'ساعات العمل' : 'Working Hours',
    getDirections: isArabic ? 'الحصول على الاتجاهات' : 'Get Directions',
    ourTeam: isArabic ? 'فريقنا في مكة المكرمة' : 'Our Mecca Team',
    teamDescription: isArabic 
      ? 'تعرف على خبرائنا المتخصصين في الأزياء الدينية وحلول الضيافة في مكة المكرمة.'
      : 'Meet our specialists in religious apparel and hospitality solutions in Mecca.',
    specializedServices: isArabic ? 'خدمات متخصصة في مكة المكرمة' : 'Specialized Services in Mecca',
    servicesDescription: isArabic
      ? 'نقدم مجموعة من الخدمات المصممة خصيصًا للقطاعات الرئيسية في المدينة المقدسة، مع التركيز على المؤسسات الدينية وخدمات الحج والعمرة والضيافة.'
      : 'We offer a range of services tailored to key sectors in the Holy City, with a focus on religious institutions, Hajj and Umrah services, and hospitality.',
    successStories: isArabic ? 'قصص النجاح المحلية' : 'Local Success Stories',
    successDescription: isArabic
      ? 'اكتشف كيف ساعدنا العملاء في مكة المكرمة على تحسين خدماتهم من خلال حلول الزي الموحد المخصصة التي تحترم تقاليد المدينة المقدسة.'
      : 'Discover how we\'ve helped clients in Mecca enhance their services through custom uniform solutions that respect the traditions of the Holy City.',
    results: isArabic ? 'النتائج' : 'Results',
    commonQuestions: isArabic ? 'الأسئلة الشائعة' : 'Common Questions',
    questionsDescription: isArabic
      ? 'إجابات على استفسارات عملائنا في مكة المكرمة حول خدماتنا المتخصصة المناسبة للمدينة المقدسة.'
      : 'Answers to common inquiries from our Mecca clients about our specialized services appropriate for the Holy City.',
    exploreIndustries: isArabic ? 'استكشف حلول الصناعات المتخصصة في مكة المكرمة' : 'Explore Industry Solutions in Mecca',
    industriesDescription: isArabic
      ? 'نقدم حلولاً متخصصة للزي الموحد مصممة للتحديات والمتطلبات الفريدة لكل قطاع في المدينة المقدسة.'
      : 'We provide specialized uniform solutions designed for the unique challenges and requirements of each industry in the Holy City.',
    viewIndustry: isArabic ? 'عرض حلول القطاع' : 'View Industry Solutions',
    getQuote: isArabic ? 'طلب عرض سعر' : 'Request a Quote',
    ctaHeading: isArabic 
      ? 'هل تحتاج إلى أزياء موحدة تحترم تقاليد مكة المكرمة؟' 
      : 'Need Uniforms That Respect Mecca\'s Traditions?',
    ctaDescription: isArabic
      ? 'اتصل بفريقنا في مكة المكرمة اليوم لمناقشة كيف يمكن لحلولنا المتخصصة أن تلبي المتطلبات الفريدة لعملك في المدينة المقدسة.'
      : 'Contact our Mecca team today to discuss how our specialized solutions can meet your unique requirements in the Holy City.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    religious: {
      name: isArabic ? 'المؤسسات الدينية' : 'Religious Institutions',
      image: '/images/industries/religious/religious-staff.jpg'
    },
    hospitality: {
      name: isArabic ? 'الضيافة' : 'Hospitality',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    },
    security: {
      name: isArabic ? 'الأمن' : 'Security',
      image: '/images/industries/security/security-staff.jpg'
    },
    healthcare: {
      name: isArabic ? 'الرعاية الصحية' : 'Healthcare',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    }
  };

  return (
    <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
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
            {isArabic 
              ? 'يونيوم مكة المكرمة | حلول أزياء متخصصة للمؤسسات الدينية وخدمات الحج والعمرة'
              : 'UNEOM Mecca | Specialized Religious Institution & Hajj Service Uniform Solutions'}
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
                {isArabic ? `فرعنا في ${locationData.name[locale]}` : `Our Branch in ${locationData.name[locale]}`}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {translations.ctaHeading}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {translations.ctaDescription}
          </p>
          <Link 
            href={`/${locale}/quote?location=mecca`}
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>
    </main>
  );
} 