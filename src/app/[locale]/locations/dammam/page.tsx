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
    ? 'يونيوم الدمام | خدمات الزي الموحد الصناعي في المنطقة الشرقية' 
    : 'UNEOM Dammam | Industrial Uniform Services in Eastern Saudi Arabia';
    
  const description = isArabic
    ? 'زيارة فرع يونيوم في الدمام. نقدم تصميم وإنتاج وتوريد اليونيفورم الصناعي عالي الجودة للشركات والمنشآت النفطية والمصانع في المنطقة الشرقية من المملكة العربية السعودية.'
    : 'Visit UNEOM branch in Dammam. We provide high-quality industrial uniform design, production, and supply for oil companies, factories, and industrial facilities across Eastern Saudi Arabia.';
    
  const keywords = [
    isArabic ? 'يونيوم الدمام' : 'UNEOM Dammam',
    isArabic ? 'زي موحد صناعي' : 'industrial uniforms',
    isArabic ? 'ملابس مهنية' : 'professional clothing',
    isArabic ? 'يونيفورم شركات النفط' : 'oil company uniforms',
    isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    isArabic ? 'المنطقة الشرقية' : 'Eastern Province'
  ];

  return generateSEO({
    title,
    description,
    keywords,
    path: '/locations/dammam',
    locale: locale as 'en' | 'ar',
    imageUrl: '/images/locations/dammam-cityscape.jpg'
  });
}

// Define location data
const locationData = {
  slug: 'dammam',
  name: {
    en: 'Dammam',
    ar: 'الدمام'
  },
  heroImage: '/images/locations/dammam-corniche.jpg',
  mapImage: '/images/locations/dammam-map.jpg',
  description: {
    en: 'Our Dammam branch serves the industrial and energy sectors across the Eastern Province, offering specialized workwear solutions designed for safety, durability, and professional appearance.',
    ar: 'يخدم فرعنا في الدمام القطاعات الصناعية وقطاعات الطاقة في المنطقة الشرقية، ويقدم حلولًا متخصصة للملابس المهنية مصممة للسلامة والمتانة والمظهر المهني.'
  },
  introduction: {
    en: 'Located in the heart of Saudi Arabia\'s energy sector, our Dammam facility specializes in industrial, petrochemical, and maritime workwear solutions. We understand the unique challenges faced by professionals in these demanding environments and have developed specialized uniform programs that meet the highest safety standards while ensuring comfort and professional aesthetics.',
    ar: 'يقع مرفقنا في الدمام في قلب قطاع الطاقة في المملكة العربية السعودية، ويتخصص في حلول الملابس المهنية الصناعية والبتروكيماوية والبحرية. نحن نتفهم التحديات الفريدة التي يواجهها المحترفون في هذه البيئات الصعبة وقد طورنا برامج زي موحد متخصصة تلبي أعلى معايير السلامة مع ضمان الراحة والجماليات المهنية.'
  },
  address: {
    en: 'King Fahd Road, Al Jawharah District, Dammam 32241, Saudi Arabia',
    ar: 'طريق الملك فهد، حي الجوهرة، الدمام 32241، المملكة العربية السعودية'
  },
  phone: '+966 13 456 7890',
  email: 'dammam@uneom.com',
  workingHours: {
    en: 'Sunday to Thursday: 8:00 AM - 5:00 PM',
    ar: 'الأحد إلى الخميس: 8:00 صباحًا - 5:00 مساءً'
  },
  googleMapsUrl: 'https://maps.google.com/?q=26.4367,50.1037',
  
  // Local team information
  team: [
    {
      name: {
        en: 'Ahmed Al-Otaibi',
        ar: 'أحمد العتيبي'
      },
      position: {
        en: 'Industrial Solutions Manager',
        ar: 'مدير الحلول الصناعية'
      },
      image: '/images/team/ahmed-al-otaibi.jpg',
      bio: {
        en: 'Ahmed has 15 years of experience in industrial workwear design and extensive knowledge of safety regulations across oil, gas, and manufacturing sectors.',
        ar: 'يمتلك أحمد 15 عامًا من الخبرة في تصميم الملابس الصناعية ومعرفة واسعة بأنظمة السلامة في قطاعات النفط والغاز والتصنيع.'
      }
    },
    {
      name: {
        en: 'Fatima Al-Zahrani',
        ar: 'فاطمة الزهراني'
      },
      position: {
        en: 'Safety Standards Specialist',
        ar: 'أخصائية معايير السلامة'
      },
      image: '/images/team/fatima-al-zahrani.jpg',
      bio: {
        en: 'Fatima is certified in international safety standards and specializes in flame-resistant, chemical-protective, and high-visibility workwear solutions.',
        ar: 'فاطمة حاصلة على شهادة في معايير السلامة الدولية ومتخصصة في حلول ملابس العمل المقاومة للهب والواقية من المواد الكيميائية وعالية الرؤية.'
      }
    }
  ],
  
  // Specialized services for this location
  specializedServices: [
    {
      title: {
        en: 'Oil & Gas Workwear',
        ar: 'ملابس العمل للنفط والغاز'
      },
      description: {
        en: 'FR-rated workwear meeting international safety standards for petrochemical facilities, refineries, and offshore platforms across the Eastern Province.',
        ar: 'ملابس عمل مصنفة مقاومة للحريق تلبي معايير السلامة الدولية للمنشآت البتروكيماوية والمصافي والمنصات البحرية في جميع أنحاء المنطقة الشرقية.'
      },
      icon: '/icons/oil-gas-workwear.svg'
    },
    {
      title: {
        en: 'Industrial Manufacturing Uniforms',
        ar: 'أزياء التصنيع الصناعي'
      },
      description: {
        en: 'Durable, functional workwear for manufacturing environments with ergonomic design features that enhance mobility and comfort during long shifts.',
        ar: 'ملابس عمل متينة وعملية لبيئات التصنيع مع ميزات تصميم مريحة تعزز الحركة والراحة أثناء المناوبات الطويلة.'
      },
      icon: '/icons/manufacturing-uniforms.svg'
    },
    {
      title: {
        en: 'Marine & Port Services Attire',
        ar: 'ملابس الخدمات البحرية والموانئ'
      },
      description: {
        en: 'Specialized workwear for maritime professionals operating in Dammam\'s port facilities, featuring water-resistant fabrics and high-visibility elements.',
        ar: 'ملابس عمل متخصصة للمحترفين البحريين العاملين في مرافق ميناء الدمام، تتميز بأقمشة مقاومة للماء وعناصر عالية الرؤية.'
      },
      icon: '/icons/marine-attire.svg'
    },
    {
      title: {
        en: 'Safety Compliant Corporate Wear',
        ar: 'ملابس الشركات المتوافقة مع معايير السلامة'
      },
      description: {
        en: 'Professional office attire designed for energy sector headquarters that meets safety requirements for facility visits while maintaining executive appearance.',
        ar: 'ملابس مكتبية احترافية مصممة لمقرات قطاع الطاقة تلبي متطلبات السلامة لزيارات المنشآت مع الحفاظ على المظهر التنفيذي.'
      },
      icon: '/icons/safety-corporate.svg'
    }
  ],
  
  // Local case studies
  caseStudies: [
    {
      title: {
        en: 'Aramco Contractor Uniform Program',
        ar: 'برنامج الزي الموحد لمقاولي أرامكو'
      },
      description: {
        en: 'Development of a comprehensive uniform solution for contractors working across multiple Aramco facilities, featuring multilevel safety certifications and comfortable performance in extreme heat conditions.',
        ar: 'تطوير حل شامل للزي الموحد للمقاولين العاملين في منشآت أرامكو المتعددة، يتميز بشهادات سلامة متعددة المستويات وأداء مريح في ظروف الحرارة القصوى.'
      },
      image: '/images/case-studies/aramco-contractors.jpg',
      results: {
        en: '35% reduction in heat-related incidents, 100% compliance with safety standards, 40% longer garment lifespan than previous solutions.',
        ar: 'انخفاض بنسبة 35٪ في الحوادث المرتبطة بالحرارة، وامتثال بنسبة 100٪ لمعايير السلامة، وعمر أطول للملابس بنسبة 40٪ من الحلول السابقة.'
      }
    },
    {
      title: {
        en: 'Port of Dammam Operations Team',
        ar: 'فريق عمليات ميناء الدمام'
      },
      description: {
        en: 'Custom-designed uniforms for port operations personnel integrating high-visibility features, weather protection, and durable construction for active roles in loading, logistics, and supervision.',
        ar: 'أزياء مصممة خصيصًا لموظفي عمليات الميناء تدمج ميزات عالية الرؤية والحماية من الطقس والبناء المتين للأدوار النشطة في التحميل والخدمات اللوجستية والإشراف.'
      },
      image: '/images/case-studies/dammam-port.jpg',
      results: {
        en: 'Improved visibility in all conditions, significant reduction in uniform replacement costs, positive feedback on comfort during 12-hour shifts.',
        ar: 'تحسين الرؤية في جميع الظروف، وانخفاض كبير في تكاليف استبدال الزي الموحد، وردود فعل إيجابية على الراحة خلال المناوبات التي تستغرق 12 ساعة.'
      }
    }
  ],
  
  // Local FAQs
  faqs: [
    {
      question: {
        en: 'Do your workwear solutions meet international oil and gas safety standards?',
        ar: 'هل تلبي حلول ملابس العمل الخاصة بكم معايير السلامة الدولية للنفط والغاز؟'
      },
      answer: {
        en: 'Yes, all our industrial workwear for the oil and gas sector meets or exceeds NFPA 2112, NFPA 70E, ASTM F1506, and ISO 11612 standards for flame resistance and arc flash protection. We also comply with specific requirements from Saudi Aramco, SABIC, and other major operators in the region.',
        ar: 'نعم، جميع ملابس العمل الصناعية لدينا لقطاع النفط والغاز تلبي أو تتجاوز معايير NFPA 2112 وNFPA 70E وASTM F1506 وISO 11612 لمقاومة اللهب والحماية من الوميض القوسي. نحن نمتثل أيضًا للمتطلبات المحددة من أرامكو السعودية وسابك وغيرها من الشركات الكبرى في المنطقة.'
      }
    },
    {
      question: {
        en: 'Can you provide uniforms that perform well in Dammam\'s hot and humid conditions?',
        ar: 'هل يمكنكم توفير أزياء موحدة تعمل بشكل جيد في ظروف الدمام الحارة والرطبة؟'
      },
      answer: {
        en: 'Absolutely. Our Dammam facility specializes in workwear designed specifically for the Gulf\'s climate challenges. We use advanced moisture-wicking fabrics with enhanced breathability while maintaining necessary safety ratings. For outdoor workers, we incorporate UV protection and quick-drying properties to maximize comfort during summer months.',
        ar: 'بالتأكيد. تتخصص منشأتنا في الدمام في ملابس العمل المصممة خصيصًا لتحديات مناخ الخليج. نستخدم أقمشة متقدمة لامتصاص الرطوبة مع قابلية محسنة للتنفس مع الحفاظ على تصنيفات السلامة اللازمة. بالنسبة للعاملين في الهواء الطلق، فإننا ندمج الحماية من الأشعة فوق البنفسجية وخصائص التجفيف السريع لتحقيق أقصى قدر من الراحة خلال أشهر الصيف.'
      }
    },
    {
      question: {
        en: 'What is your turnaround time for large industrial uniform orders?',
        ar: 'ما هو وقت التنفيذ لطلبات الزي الصناعي الكبيرة؟'
      },
      answer: {
        en: 'For standard industrial wear, we maintain substantial inventory in our Dammam warehouse allowing us to fulfill orders of up to 500 units within 2-3 weeks. For custom or specialized FR garments, our typical lead time is 4-6 weeks depending on specifications and quantity. For major projects, we recommend engaging our team during the planning phase to establish a production schedule aligned with your rollout timeline.',
        ar: 'بالنسبة للملابس الصناعية القياسية، نحتفظ بمخزون كبير في مستودعنا بالدمام مما يسمح لنا بتلبية الطلبات التي تصل إلى 500 وحدة في غضون 2-3 أسابيع. بالنسبة للملابس المقاومة للهب المخصصة أو المتخصصة، فإن مهلة التسليم النموذجية لدينا هي 4-6 أسابيع اعتمادًا على المواصفات والكمية. بالنسبة للمشاريع الكبرى، نوصي بإشراك فريقنا خلال مرحلة التخطيط لوضع جدول إنتاج يتماشى مع الجدول الزمني للطرح.'
      }
    },
    {
      question: {
        en: 'Do you offer on-site fitting services for industrial clients in the Eastern Province?',
        ar: 'هل تقدمون خدمات القياس في الموقع للعملاء الصناعيين في المنطقة الشرقية؟'
      },
      answer: {
        en: 'Yes, our Dammam branch provides specialized on-site fitting services for industrial clients throughout the Eastern Province. Our mobile fitting team can visit your facility to take measurements for all employees, provide sizing samples, and ensure proper fit for safety-critical garments. This service is complimentary for orders exceeding 100 uniforms and available for a nominal fee for smaller orders.',
        ar: 'نعم، يقدم فرعنا في الدمام خدمات قياس متخصصة في الموقع للعملاء الصناعيين في جميع أنحاء المنطقة الشرقية. يمكن لفريق القياس المتنقل لدينا زيارة منشأتك لأخذ قياسات لجميع الموظفين، وتقديم عينات مقاسات، وضمان الملاءمة المناسبة للملابس الحرجة للسلامة. هذه الخدمة مجانية للطلبات التي تتجاوز 100 زي موحد ومتاحة برسوم رمزية للطلبات الأصغر.'
      }
    }
  ],
  
  // Related industries for this location
  relatedIndustries: ['industrial', 'energy', 'corporate', 'marine'] as const
};

export default function DammamLocationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || defaultLocale;
  const isArabic = locale === 'ar';
  
  // Translations
  const translations = {
    visitUs: isArabic ? 'زورونا' : 'Visit Us',
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    workingHours: isArabic ? 'ساعات العمل' : 'Working Hours',
    getDirections: isArabic ? 'الحصول على الاتجاهات' : 'Get Directions',
    ourTeam: isArabic ? 'فريقنا في الدمام' : 'Our Dammam Team',
    teamDescription: isArabic 
      ? 'تعرف على خبرائنا المتخصصين في حلول ملابس العمل الصناعية في الدمام.'
      : 'Meet our specialists in industrial workwear solutions in Dammam.',
    specializedServices: isArabic ? 'خدمات متخصصة في الدمام' : 'Specialized Services in Dammam',
    servicesDescription: isArabic
      ? 'نقدم مجموعة من الخدمات المصممة خصيصًا للقطاعات الرئيسية في المنطقة الشرقية، مع التركيز على النفط والغاز والتصنيع والقطاع البحري.'
      : 'We offer a range of services tailored to key sectors in the Eastern Province, with a focus on oil & gas, manufacturing, and the marine sector.',
    successStories: isArabic ? 'قصص النجاح المحلية' : 'Local Success Stories',
    successDescription: isArabic
      ? 'اكتشف كيف ساعدنا العملاء في المنطقة الشرقية على تحسين السلامة والأداء من خلال حلول الزي الموحد المتخصصة.'
      : 'Discover how we\'ve helped clients in the Eastern Province enhance safety and performance through specialized uniform solutions.',
    results: isArabic ? 'النتائج' : 'Results',
    commonQuestions: isArabic ? 'الأسئلة الشائعة' : 'Common Questions',
    questionsDescription: isArabic
      ? 'إجابات على استفسارات عملائنا في الدمام حول خدماتنا المتخصصة للقطاعات الصناعية.'
      : 'Answers to common inquiries from our Dammam clients about our specialized services for industrial sectors.',
    exploreIndustries: isArabic ? 'استكشف حلول الصناعات المتخصصة في الدمام' : 'Explore Industry Solutions in Dammam',
    industriesDescription: isArabic
      ? 'نقدم حلولاً متخصصة للزي الموحد مصممة للتحديات والمتطلبات الفريدة لكل قطاع في المنطقة الشرقية.'
      : 'We provide specialized uniform solutions designed for the unique challenges and requirements of each industry in the Eastern Province.',
    viewIndustry: isArabic ? 'عرض حلول القطاع' : 'View Industry Solutions',
    getQuote: isArabic ? 'طلب عرض سعر' : 'Request a Quote',
    ctaHeading: isArabic 
      ? 'هل أنت جاهز لتجربة ملابس عمل تلبي أعلى معايير السلامة والأداء؟' 
      : 'Ready for Workwear That Meets the Highest Safety and Performance Standards?',
    ctaDescription: isArabic
      ? 'اتصل بفريقنا في الدمام اليوم لمناقشة متطلبات الزي الموحد لعملياتك الصناعية أو التجارية.'
      : 'Contact our Dammam team today to discuss the uniform requirements for your industrial or commercial operations.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    industrial: {
      name: isArabic ? 'الصناعي' : 'Industrial',
      image: '/images/industries/industrial/industrial-workers.jpg'
    },
    energy: {
      name: isArabic ? 'الطاقة' : 'Energy',
      image: '/images/industries/energy/energy-workers.jpg'
    },
    corporate: {
      name: isArabic ? 'الشركات' : 'Corporate',
      image: '/images/industries/corporate/corporate-team.jpg'
    },
    marine: {
      name: isArabic ? 'البحري' : 'Marine',
      image: '/images/industries/marine/marine-workers.jpg'
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
              ? 'يونيوم الدمام | حلول الزي الموحد المتخصصة للقطاعات الصناعية والبترولية في المنطقة الشرقية'
              : 'UNEOM Dammam | Industrial & Petroleum Safety Workwear Solutions in Eastern Province'}
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
            href={`/${locale}/quote?location=dammam`}
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>
    </main>
  );
} 