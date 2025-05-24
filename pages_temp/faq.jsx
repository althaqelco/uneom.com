import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

// Components
import Layout from '@/components/layout/Layout';
import Accordion from '@/components/ui/Accordion';
import CTAButton from '@/components/ui/CTAButton';

// FAQ data
const faqData = {
  title: {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة'
  },
  description: {
    en: 'Find answers to the most common questions about UNEOM uniform solutions, ordering process, customization options, and delivery services throughout Saudi Arabia.',
    ar: 'احصل على إجابات لأكثر الأسئلة شيوعًا حول حلول الزي الموحد من UNEOM، وعملية الطلب، وخيارات التخصيص، وخدمات التوصيل في جميع أنحاء المملكة العربية السعودية.'
  },
  sections: [
    {
      id: 'ordering',
      title: {
        en: 'Ordering Process',
        ar: 'عملية الطلب'
      },
      questions: [
        {
          id: 'min-order',
          question: {
            en: 'What is the minimum order quantity for corporate uniforms?',
            ar: 'ما هو الحد الأدنى لكمية الطلب للأزياء الموحدة للشركات؟'
          },
          answer: {
            en: 'Our standard minimum order quantity is 10 pieces for any single uniform style. However, for comprehensive corporate programs, we recommend a minimum of 25 pieces to achieve optimal cost efficiency. For larger organizations, we offer scaled pricing with significant discounts at 50+, 100+, and 500+ unit levels.',
            ar: 'الحد الأدنى القياسي لكمية الطلب لدينا هو 10 قطع لأي نمط زي موحد. ومع ذلك، بالنسبة لبرامج الشركات الشاملة، نوصي بحد أدنى 25 قطعة لتحقيق الكفاءة المثلى من حيث التكلفة. بالنسبة للمؤسسات الكبيرة، نقدم أسعارًا متدرجة مع خصومات كبيرة عند مستويات 50+ و100+ و500+ وحدة.'
          }
        },
        {
          id: 'order-process',
          question: {
            en: 'What is the typical ordering process for corporate uniforms?',
            ar: 'ما هي عملية الطلب النموذجية للأزياء الموحدة للشركات؟'
          },
          answer: {
            en: 'Our corporate uniform ordering process typically includes: 1) Initial consultation to understand your requirements, 2) Design proposal and fabric selection, 3) Sampling and prototype development, 4) Sizing and measurement session for your team, 5) Production approval and final order confirmation, 6) Manufacturing (3-5 weeks depending on quantity), 7) Quality control and inspection, 8) Delivery and implementation support.',
            ar: 'عادة ما تتضمن عملية طلب الزي الموحد للشركات لدينا: 1) استشارة أولية لفهم متطلباتك، 2) اقتراح التصميم واختيار النسيج، 3) أخذ العينات وتطوير النموذج الأولي، 4) جلسة القياس والقياس لفريقك، 5) الموافقة على الإنتاج وتأكيد الطلب النهائي، 6) التصنيع (3-5 أسابيع حسب الكمية)، 7) مراقبة الجودة والفحص، 8) دعم التسليم والتنفيذ.'
          }
        },
        {
          id: 'payment-options',
          question: {
            en: 'What payment options are available for corporate orders?',
            ar: 'ما هي خيارات الدفع المتاحة للطلبات المؤسسية؟'
          },
          answer: {
            en: 'We offer flexible payment terms for corporate clients, including: 1) 50% deposit with order confirmation and 50% prior to shipment, 2) 30-day net terms for established clients with approved credit, 3) Phased payment schedules for large, multi-delivery orders, 4) Bank transfers, corporate credit cards, and letters of credit for international clients. All payments are processed securely through our authorized financial partners.',
            ar: 'نقدم شروط دفع مرنة للعملاء من الشركات، بما في ذلك: 1) 50% وديعة مع تأكيد الطلب و 50% قبل الشحن، 2) شروط صافية لمدة 30 يومًا للعملاء الحاليين ذوي الائتمان المعتمد، 3) جداول دفع مرحلية للطلبات الكبيرة متعددة التسليم، 4) التحويلات المصرفية وبطاقات الائتمان للشركات وخطابات الاعتماد للعملاء الدوليين. تتم معالجة جميع المدفوعات بشكل آمن من خلال شركائنا الماليين المعتمدين.'
          }
        }
      ]
    },
    {
      id: 'customization',
      title: {
        en: 'Customization & Branding',
        ar: 'التخصيص والعلامات التجارية'
      },
      questions: [
        {
          id: 'logo-application',
          question: {
            en: 'What logo application methods do you offer?',
            ar: 'ما هي طرق تطبيق الشعار التي تقدمونها؟'
          },
          answer: {
            en: 'We offer several logo application methods depending on your branding requirements: 1) Premium embroidery (most durable, best for corporate attire), 2) Direct-to-garment printing (ideal for complex designs and gradients), 3) Sublimation printing (perfect for all-over patterns and vibrant colors), 4) Heat-transfer vinyl (cost-effective for simple designs), 5) Woven badges (premium look for hospitality uniforms), 6) Metal hardware with engraved logos (luxury option for high-end brands).',
            ar: 'نقدم عدة طرق لتطبيق الشعار اعتمادًا على متطلبات العلامة التجارية الخاصة بك: 1) التطريز الممتاز (الأكثر متانة، الأفضل للملابس المؤسسية)، 2) الطباعة المباشرة على الملابس (مثالية للتصميمات المعقدة والتدرجات)، 3) طباعة التسامي (مثالية للأنماط الشاملة والألوان النابضة بالحياة)، 4) الفينيل المنقول بالحرارة (فعال من حيث التكلفة للتصميمات البسيطة)، 5) الشارات المنسوجة (مظهر متميز لأزياء الضيافة)، 6) أجهزة معدنية مع شعارات محفورة (خيار فاخر للعلامات التجارية الراقية).'
          }
        },
        {
          id: 'color-matching',
          question: {
            en: 'How accurate is your corporate color matching for uniforms?',
            ar: 'ما مدى دقة مطابقة ألوان الشركة للأزياء الموحدة لديكم؟'
          },
          answer: {
            en: 'We achieve precise color matching using the Pantone Matching System (PMS) with a tolerance of +/- 1.0 Delta E for most corporate colors. Our process includes: 1) Digital color analysis of your branding materials, 2) Fabric dye lab tests to determine exact formulations, 3) Sample approvals in actual production fabrics, 4) Consistent color management across production batches, 5) Quality control under standardized lighting conditions. For critical color matching, we can develop custom-dyed fabrics with a minimum order quantity of 500 meters.',
            ar: 'نحقق مطابقة دقيقة للألوان باستخدام نظام مطابقة بانتون (PMS) مع تفاوت +/- 1.0 دلتا E لمعظم ألوان الشركات. تتضمن عمليتنا: 1) تحليل الألوان الرقمي لمواد العلامة التجارية الخاصة بك، 2) اختبارات مختبر صبغ النسيج لتحديد التركيبات الدقيقة، 3) الموافقات على العينات في الأقمشة الإنتاجية الفعلية، 4) إدارة الألوان المتسقة عبر دفعات الإنتاج، 5) مراقبة الجودة في ظل ظروف إضاءة موحدة. للمطابقة الحاسمة للألوان، يمكننا تطوير أقمشة مصبوغة مخصصة بحد أدنى للطلب 500 متر.'
          }
        }
      ]
    },
    {
      id: 'sizing-fitting',
      title: {
        en: 'Sizing & Fitting',
        ar: 'القياسات والتركيب'
      },
      questions: [
        {
          id: 'size-range',
          question: {
            en: 'What size range do your uniforms come in?',
            ar: 'ما هو نطاق المقاسات المتوفرة للأزياء الموحدة لديكم؟'
          },
          answer: {
            en: 'Our standard size range includes XS through 5XL for most uniform styles, with the following specifications: 1) Western sizing standards with Saudi-specific adjustments for local body types, 2) Separate men\'s and women\'s cuts with appropriate cultural considerations, 3) Tall options for garments with sleeve or length variations, 4) Specialized fit categories for different uniform types (slim fit, regular fit, comfort fit), 5) Custom sizing for team members outside standard ranges at minimal additional cost.',
            ar: 'يتضمن نطاق المقاسات القياسي لدينا من XS إلى 5XL لمعظم أنماط الزي الموحد، مع المواصفات التالية: 1) معايير المقاسات الغربية مع تعديلات خاصة بالسعودية لأنواع الجسم المحلية، 2) قصات منفصلة للرجال والنساء مع اعتبارات ثقافية مناسبة، 3) خيارات طويلة للملابس ذات الأكمام أو اختلافات الطول، 4) فئات ملاءمة متخصصة لأنواع مختلفة من الزي الموحد (ملاءمة نحيفة، ملاءمة منتظمة، ملاءمة مريحة)، 5) مقاسات مخصصة لأعضاء الفريق خارج النطاقات القياسية بتكلفة إضافية ضئيلة.'
          }
        },
        {
          id: 'fit-sessions',
          question: {
            en: 'Do you conduct fit sessions for corporate clients?',
            ar: 'هل تجرون جلسات ملاءمة لعملاء الشركات؟'
          },
          answer: {
            en: 'Yes, we provide comprehensive fit sessions for corporate clients with 25+ employees. Our fit session process includes: 1) Pre-session survey to gather initial size information, 2) On-site fitting with sample garments across all size ranges, 3) Professional measurement by our trained fitting specialists, 4) Individual fit cards for each employee, 5) Digital records management for future orders and replacements, 6) Accommodations for staff who require privacy or special sizing assistance.',
            ar: 'نعم، نقدم جلسات ملاءمة شاملة لعملاء الشركات الذين لديهم 25+ موظفًا. تتضمن عملية جلسة الملاءمة لدينا: 1) استبيان ما قبل الجلسة لجمع معلومات الحجم الأولية، 2) تركيب في الموقع مع عينات من الملابس عبر جميع نطاقات الحجم، 3) قياس احترافي من قبل متخصصي التركيب المدربين لدينا، 4) بطاقات ملاءمة فردية لكل موظف، 5) إدارة السجلات الرقمية للطلبات المستقبلية والبدائل، 6) أماكن إقامة للموظفين الذين يحتاجون إلى الخصوصية أو مساعدة خاصة في تحديد الحجم.'
          }
        }
      ]
    },
    {
      id: 'delivery-support',
      title: {
        en: 'Delivery & Support',
        ar: 'التوصيل والدعم'
      },
      questions: [
        {
          id: 'production-time',
          question: {
            en: 'What is the typical production and delivery timeframe?',
            ar: 'ما هو الإطار الزمني النموذجي للإنتاج والتسليم؟'
          },
          answer: {
            en: 'Production and delivery timeframes vary based on order quantity, customization complexity, and destination: 1) Standard orders (25-100 units): 3-4 weeks, 2) Large orders (100-500 units): 4-6 weeks, 3) Very large orders (500+ units): 6-8 weeks, 4) Rush production options available for 15-30% premium, 5) Phased deliveries available for large implementations, 6) Delivery to all major Saudi cities within 2-3 days of production completion, 7) Remote location delivery may require additional 2-5 days.',
            ar: 'تختلف الأطر الزمنية للإنتاج والتسليم بناءً على كمية الطلب وتعقيد التخصيص والوجهة: 1) الطلبات القياسية (25-100 وحدة): 3-4 أسابيع، 2) الطلبات الكبيرة (100-500 وحدة): 4-6 أسابيع، 3) الطلبات الكبيرة جدًا (500+ وحدة): 6-8 أسابيع، 4) خيارات الإنتاج السريع متاحة بعلاوة 15-30%، 5) التسليمات المرحلية متاحة للتنفيذات الكبيرة، 6) التسليم إلى جميع المدن السعودية الرئيسية في غضون 2-3 أيام من اكتمال الإنتاج، 7) قد يتطلب التسليم للمواقع النائية 2-5 أيام إضافية.'
          }
        },
        {
          id: 'warranty',
          question: {
            en: 'What warranty do you provide on uniforms?',
            ar: 'ما هو الضمان الذي تقدمونه على الأزياء الموحدة؟'
          },
          answer: {
            en: 'All UNEOM uniforms come with our comprehensive quality guarantee: 1) Basic warranty: 90 days against manufacturing defects, 2) Premium and Executive collections: 2-year limited warranty on construction and major seams, 3) Embroidery and logo applications: 1-year warranty against significant fading or detachment, 4) Corporate program warranties can be customized based on specific usage environments and requirements, 5) Extended maintenance programs available for large corporate clients including repair and replacement services.',
            ar: 'تأتي جميع الأزياء الموحدة من UNEOM مع ضمان الجودة الشامل: 1) الضمان الأساسي: 90 يومًا ضد عيوب التصنيع، 2) المجموعات المتميزة والتنفيذية: ضمان محدود لمدة عامين على البناء والدرزات الرئيسية، 3) التطريز وتطبيقات الشعار: ضمان لمدة عام ضد التلاشي الكبير أو الانفصال، 4) يمكن تخصيص ضمانات برنامج الشركة بناءً على بيئات الاستخدام والمتطلبات المحددة، 5) برامج صيانة ممتدة متاحة لعملاء الشركات الكبار بما في ذلك خدمات الإصلاح والاستبدال.'
          }
        }
      ]
    },
    {
      id: 'sustainability',
      title: {
        en: 'Sustainability & Ethics',
        ar: 'الاستدامة والأخلاقيات'
      },
      questions: [
        {
          id: 'sustainable-practices',
          question: {
            en: 'What sustainable practices do you implement in uniform production?',
            ar: 'ما هي الممارسات المستدامة التي تطبقونها في إنتاج الزي الموحد؟'
          },
          answer: {
            en: 'UNEOM is committed to sustainable uniform production through: 1) Eco-friendly fabric options including recycled polyester and organic cotton blends, 2) Water-saving dyeing and finishing processes that reduce usage by up to 60%, 3) Energy-efficient manufacturing facilities powered partially by solar energy, 4) Reduction of plastic packaging with biodegradable alternatives, 5) Uniform recycling program for corporate clients refreshing their uniform programs, 6) Digital sampling processes that reduce material waste in development, 7) Locally-sourced materials and production where feasible to reduce carbon footprint.',
            ar: 'تلتزم UNEOM بإنتاج زي موحد مستدام من خلال: 1) خيارات النسيج الصديقة للبيئة بما في ذلك البوليستر المعاد تدويره ومزيج القطن العضوي، 2) عمليات الصباغة والتشطيب الموفرة للمياه التي تقلل الاستخدام بنسبة تصل إلى 60%، 3) مرافق تصنيع موفرة للطاقة تعمل جزئيًا بالطاقة الشمسية، 4) تقليل التعبئة البلاستيكية ببدائل قابلة للتحلل، 5) برنامج إعادة تدوير الزي الموحد لعملاء الشركات الذين يجددون برامج الزي الموحد الخاصة بهم، 6) عمليات أخذ العينات الرقمية التي تقلل من نفايات المواد في التطوير، 7) المواد والإنتاج المصدر محليًا حيثما أمكن لتقليل البصمة الكربونية.'
          }
        },
        {
          id: 'ethical-manufacturing',
          question: {
            en: 'What ethical manufacturing standards do you follow?',
            ar: 'ما هي معايير التصنيع الأخلاقية التي تتبعونها؟'
          },
          answer: {
            en: 'Our ethical manufacturing standards include: 1) Full compliance with Saudi labor laws and international labor standards, 2) Regular third-party audits of all manufacturing facilities, 3) Fair wage practices across our entire supply chain, 4) Safe and healthy working conditions for all production staff, 5) Zero tolerance for child labor or forced labor in any form, 6) Ethical sourcing certification for all primary materials, 7) Transparency in reporting and continuous improvement in ethical practices.',
            ar: 'تشمل معايير التصنيع الأخلاقية لدينا: 1) الامتثال الكامل لقوانين العمل السعودية ومعايير العمل الدولية، 2) عمليات تدقيق منتظمة من طرف ثالث لجميع مرافق التصنيع، 3) ممارسات الأجور العادلة عبر سلسلة التوريد بأكملها، 4) ظروف عمل آمنة وصحية لجميع موظفي الإنتاج، 5) عدم التسامح مطلقًا مع عمالة الأطفال أو العمل القسري بأي شكل، 6) شهادة المصادر الأخلاقية لجميع المواد الأساسية، 7) الشفافية في التقارير والتحسين المستمر في الممارسات الأخلاقية.'
          }
        }
      ]
    }
  ],
  searchPlaceholder: {
    en: 'Search FAQ...',
    ar: 'البحث في الأسئلة الشائعة...'
  },
  contactSection: {
    title: {
      en: 'Still Have Questions?',
      ar: 'هل لا تزال لديك أسئلة؟'
    },
    description: {
      en: 'If you couldn\'t find the answer you were looking for, our customer support team is ready to help.',
      ar: 'إذا لم تتمكن من العثور على الإجابة التي تبحث عنها، فإن فريق دعم العملاء لدينا مستعد للمساعدة.'
    },
    buttonText: {
      en: 'Contact Support',
      ar: 'تواصل مع الدعم'
    }
  },
  seo: {
    title: {
      en: 'Uniform FAQ - Corporate & Professional Workwear Questions | UNEOM',
      ar: 'الأسئلة الشائعة عن الزي الموحد - أسئلة ملابس العمل المؤسسية والمهنية | UNEOM'
    },
    description: {
      en: 'Find answers to frequently asked questions about UNEOM\'s corporate uniforms, ordering process, customization options, and delivery services across Saudi Arabia.',
      ar: 'احصل على إجابات للأسئلة الشائعة حول الأزياء الموحدة للشركات من UNEOM، وعملية الطلب، وخيارات التخصيص، وخدمات التوصيل في جميع أنحاء المملكة العربية السعودية.'
    }
  }
};

export default function FAQPage() {
  const router = useRouter();
  const { locale } = router;
  const isArabic = locale === 'ar';
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter questions based on search query
  const filteredSections = faqData.sections.map(section => {
    const filteredQuestions = section.questions.filter(q => {
      const searchIn = q.question[locale].toLowerCase() + q.answer[locale].toLowerCase();
      return searchQuery === '' || searchIn.includes(searchQuery.toLowerCase());
    });
    
    return {
      ...section,
      questions: filteredQuestions,
      visible: filteredQuestions.length > 0
    };
  }).filter(section => section.visible);
  
  return (
    <Layout>
      <NextSeo
        title={faqData.seo.title[locale]}
        description={faqData.seo.description[locale]}
        canonical={`https://uneom.com/${isArabic ? 'ar/' : ''}faq`}
        openGraph={{
          type: 'website',
          url: `https://uneom.com/${isArabic ? 'ar/' : ''}faq`,
          title: faqData.seo.title[locale],
          description: faqData.seo.description[locale]
        }}
      />
      
      <Head>
        <link 
          rel="alternate" 
          hrefLang="en" 
          href="https://uneom.com/faq" 
        />
        <link 
          rel="alternate" 
          hrefLang="ar" 
          href="https://uneom.com/ar/faq" 
        />
      </Head>
      
      <main className={`faq-page ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="hero bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{faqData.title[locale]}</h1>
            <p className="text-xl max-w-3xl mx-auto">{faqData.description[locale]}</p>
            
            {/* Search */}
            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={faqData.searchPlaceholder[locale]}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 rounded-full text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg 
                    className="h-6 w-6 text-gray-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredSections.length > 0 ? (
              <div className="grid md:grid-cols-5 gap-10">
                {/* Categories Sidebar */}
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <h2 className="text-lg font-bold mb-4 pb-2 border-b">
                      {isArabic ? 'الفئات' : 'Categories'}
                    </h2>
                    <nav>
                      <ul className="space-y-2">
                        {faqData.sections.map(section => (
                          <li key={section.id}>
                            <a 
                              href={`#${section.id}`}
                              className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                              {section.title[locale]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                
                {/* FAQ Accordions */}
                <div className="md:col-span-4">
                  {filteredSections.map(section => (
                    <div 
                      key={section.id} 
                      id={section.id}
                      className="mb-12 scroll-mt-24"
                    >
                      <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                        {section.title[locale]}
                      </h2>
                      
                      <div className="space-y-4">
                        {section.questions.map(question => (
                          <Accordion
                            key={question.id}
                            title={question.question[locale]}
                            content={question.answer[locale]}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {isArabic ? 'لم يتم العثور على نتائج' : 'No results found'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {isArabic ? 'حاول استخدام مصطلحات بحث مختلفة أو تصفح الفئات بدلاً من ذلك.' : 'Try using different search terms or browse categories instead.'}
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="btn btn-primary"
                >
                  {isArabic ? 'مسح البحث' : 'Clear Search'}
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{faqData.contactSection.title[locale]}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{faqData.contactSection.description[locale]}</p>
            
            <Link href={`/${isArabic ? 'ar/' : ''}contact`}>
              <CTAButton size="large">
                {faqData.contactSection.buttonText[locale]}
              </CTAButton>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
    revalidate: 86400, // Revalidate once per day
  };
} 