'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaShare, FaFacebookF, FaTwitter, FaLinkedinIn, FaRecycle, FaLeaf, FaWater, FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { generateGeneralWhatsAppUrl } from '@/utils/whatsapp';

export default function SustainableSchoolUniformsPage() {
  const router = useRouter();
  const [language, setLanguage] = React.useState<'en' | 'ar'>('en');
  
  const blogPost = {
    en: {
      title: "Sustainable School Uniform Solutions for Modern Saudi Educational Institutions",
      date: "April 22, 2024",
      author: "Eng. Sarah Al-Otaibi",
      category: "Sustainability",
      heroImage: "/images/industries/education/school-uniform-04.webp",
      introduction: "As Saudi Arabia advances its Vision 2030 sustainability goals, educational institutions are increasingly seeking ways to align their operations with environmental responsibility. School uniforms, produced and purchased in large volumes, present a significant opportunity for sustainable practices. This article explores innovative approaches to creating environmentally responsible uniform solutions for Saudi Arabian schools while maintaining quality, durability, and cultural appropriateness.",
      sections: [
        {
          title: "The Environmental Impact of Traditional Uniform Production",
          content: "Traditional school uniform production often relies on resource-intensive processes and non-renewable materials. Polyester, a common fabric in uniform manufacturing, is petroleum-derived and creates significant carbon emissions during production. Cotton, while natural, traditionally requires high water usage and pesticide application.\n\nFor Saudi Arabia, a country addressing water scarcity and working toward carbon reduction goals, these environmental costs are particularly relevant. A typical school uniform set using conventional production methods can generate up to 5.3kg of CO2 and consume over 3,000 liters of water throughout its lifecycle.",
          image: "/images/industries/education/school-uniform-02.webp",
          imageAlt: "Traditional school uniforms displayed on mannequins",
          icon: <FaWater className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "Sustainable Materials for Saudi School Environments",
          content: "Advances in textile technology have created exciting possibilities for sustainable uniform fabrics suitable for Saudi Arabian school environments. Recycled polyester, created from post-consumer plastic bottles, reduces carbon emissions by over 70% compared to virgin polyester while maintaining the durability and easy-care properties valuable for school uniforms.\n\nOrganic cotton, grown without synthetic pesticides and using water-efficient methods, provides a natural fiber option with significantly reduced environmental impact. For the hot Saudi climate, innovative blends of recycled polyester with Tencel™ (a sustainable fiber made from wood pulp) offer excellent breathability, moisture management, and comfort while dramatically reducing the environmental footprint.\n\nThese sustainable materials have been specifically tested for performance in high-temperature environments, making them ideal for Saudi Arabian school settings.",
          image: "/images/industries/education/school-uniform-01.webp",
          imageAlt: "Students wearing uniforms made from sustainable fabrics",
          icon: <FaLeaf className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "Circular Design and Extended Lifecycle",
          content: "Sustainable uniform programs extend beyond materials to address the entire product lifecycle. Circular design principles focus on creating uniforms that can be reused, repaired, and eventually recycled, minimizing waste at every stage.\n\nProgressive Saudi schools are now implementing uniform exchange programs, where outgrown items in good condition are returned and redistributed to other students. This approach reduces waste while making quality uniforms more accessible to all families. Some schools report up to 40% reduction in new uniform purchases through well-managed exchange initiatives.\n\nDurability enhancements—reinforced stitching, adjustable features that accommodate student growth, and modular designs that allow for replacement of only worn components—extend uniform lifespans by 30-50% over conventional designs. These approaches reduce environmental impact while providing better value for educational institutions and families.",
          image: "/images/industries/education/students/school-uniform-students-03.webp",
          imageAlt: "School uniform exchange program in action",
          icon: <FaRecycle className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "Local Production and Economic Benefits",
          content: "Sustainable uniform programs can support Saudi Arabia's economic development goals by prioritizing local manufacturing. Domestic production reduces transportation emissions while creating jobs and developing the textile industry within the Kingdom.\n\nThe Saudi Made initiative has highlighted the potential for local manufacturing to address both sustainability and economic objectives. Schools partnering with local producers can customize sustainable uniform solutions while contributing to community prosperity. This localized approach allows for closer quality control and more responsive supply chains.\n\nBy building relationships with Saudi producers committed to sustainable practices, schools can create uniform programs that align environmental responsibility with support for the national economy. These partnerships often lead to innovative approaches that specifically address the needs of Saudi educational environments.",
          image: "/images/industries/education/students/school-uniform-students-02.webp",
          imageAlt: "Local Saudi factory producing sustainable school uniforms",
          icon: <FaRecycle className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "Educational Integration and Student Engagement",
          content: "Perhaps the most powerful aspect of sustainable uniform programs is their potential for educational integration. When schools implement environmentally responsible uniform solutions, they create tangible, daily connections to sustainability principles.\n\nProgressive Saudi educational institutions use their uniform programs as teaching tools. Students learn about environmental impact through the clothing they wear each day. Some schools incorporate lessons about textile sustainability into science, mathematics, and social studies curricula, making abstract concepts concrete through personal experience.\n\nStudent involvement in sustainable uniform initiatives—from design input to managing exchange programs—builds environmental leadership skills. Young Saudis develop practical approaches to sustainability that they'll carry forward into their educational and professional futures.",
          image: "/images/industries/education/students/school-uniform-students-01.webp",
          imageAlt: "Students participating in sustainability education related to uniforms",
          icon: <FaLeaf className="w-12 h-12 text-primary-600 mb-4" />
        }
      ],
      conclusion: "Saudi Arabian educational institutions have a meaningful opportunity to advance sustainability through thoughtful uniform programs. By embracing eco-friendly materials, circular design principles, local production, and educational integration, schools can reduce environmental impact while maintaining high-quality, culturally appropriate uniforms.\n\nThese approaches align perfectly with Vision 2030 sustainability objectives and prepare students to participate in an increasingly eco-conscious global community. As more Saudi schools adopt sustainable uniform solutions, they create environmental benefits at scale while teaching the next generation through daily example.\n\nThe transition to sustainable uniforms represents more than a practical change—it's a visible commitment to environmental stewardship that resonates throughout educational communities and beyond.",
      relatedPosts: [
        {
          title: "How School Uniforms Enhance Academic Performance in Saudi Schools",
          link: "/blog/school-uniforms-academic-performance",
          image: "/images/industries/education/school-uniform-03.webp"
        },
        {
          title: "Cultural Identity in Saudi School Uniforms: Balancing Tradition and Modernity",
          link: "/blog/cultural-identity-saudi-school-uniforms",
          image: "/images/industries/education/school-uniform-05.webp"
        },
        {
          title: "The Evolution of School Uniform Design in the Middle East",
          link: "/blog/school-uniform-design-middle-east",
          image: "/images/industries/education/teachers/school-uniform-teacher-01.webp"
        }
      ],
      tags: ["Sustainable Fashion", "School Uniforms", "Education", "Saudi Arabia", "Environmental Responsibility", "Vision 2030"]
    },
    ar: {
      title: "حلول الزي المدرسي المستدامة للمؤسسات التعليمية السعودية الحديثة",
      date: "22 أبريل 2024",
      author: "م. سارة العتيبي",
      category: "الاستدامة",
      heroImage: "/images/industries/education/school-uniform-04.webp",
      introduction: "مع تقدم المملكة العربية السعودية في تحقيق أهداف الاستدامة ضمن رؤية 2030، تسعى المؤسسات التعليمية بشكل متزايد إلى مواءمة عملياتها مع المسؤولية البيئية. تمثل الأزياء المدرسية، التي يتم إنتاجها وشراؤها بكميات كبيرة، فرصة كبيرة للممارسات المستدامة. يستكشف هذا المقال المناهج المبتكرة لإنشاء حلول زي مدرسي مسؤولة بيئياً للمدارس السعودية مع الحفاظ على الجودة والمتانة والملاءمة الثقافية.",
      sections: [
        {
          title: "التأثير البيئي لإنتاج الزي التقليدي",
          content: "غالباً ما يعتمد إنتاج الزي المدرسي التقليدي على عمليات كثيفة الاستخدام للموارد ومواد غير متجددة. البوليستر، وهو نسيج شائع في تصنيع الزي الموحد، مشتق من البترول ويخلق انبعاثات كربونية كبيرة أثناء الإنتاج. أما القطن، رغم كونه طبيعياً، فيتطلب تقليدياً استخداماً عالياً للمياه وتطبيق المبيدات.\n\nبالنسبة للمملكة العربية السعودية، وهي دولة تعالج ندرة المياه وتعمل نحو أهداف تخفيض الكربون، فإن هذه التكاليف البيئية ذات صلة خاصة. يمكن أن تولد مجموعة الزي المدرسي النموذجية باستخدام طرق الإنتاج التقليدية ما يصل إلى 5.3 كيلوغرام من ثاني أكسيد الكربون وتستهلك أكثر من 3,000 لتر من الماء طوال دورة حياتها.",
          image: "/images/industries/education/school-uniform-02.webp",
          imageAlt: "الزي المدرسي التقليدي معروض على نماذج العرض",
          icon: <FaWater className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "المواد المستدامة لبيئات المدارس السعودية",
          content: "أدت التطورات في تكنولوجيا النسيج إلى خلق إمكانيات مثيرة لأقمشة الزي المستدامة المناسبة لبيئات المدارس السعودية. البوليستر المعاد تدويره، المصنوع من زجاجات بلاستيكية مستهلكة، يقلل انبعاثات الكربون بأكثر من 70% مقارنة بالبوليستر البكر مع الحفاظ على المتانة وخصائص العناية السهلة القيمة للزي المدرسي.\n\nالقطن العضوي، المزروع بدون مبيدات اصطناعية وباستخدام طرق فعالة في استخدام المياه، يوفر خياراً من الألياف الطبيعية مع تأثير بيئي مخفض بشكل كبير. بالنسبة للمناخ السعودي الحار، توفر المزجات المبتكرة من البوليستر المعاد تدويره مع تنسل™ (وهو ليف مستدام مصنوع من لب الخشب) تنفساً ممتازاً وإدارة للرطوبة وراحة مع تقليل البصمة البيئية بشكل كبير.\n\nتم اختبار هذه المواد المستدامة خصيصاً للأداء في بيئات ذات درجات حرارة عالية، مما يجعلها مثالية لإعدادات المدارس السعودية.",
          image: "/images/industries/education/school-uniform-01.webp",
          imageAlt: "طلاب يرتدون زياً مدرسياً مصنوعاً من أقمشة مستدامة",
          icon: <FaLeaf className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "التصميم الدائري وتمديد دورة الحياة",
          content: "تمتد برامج الزي المستدامة إلى ما هو أبعد من المواد لتشمل دورة حياة المنتج بأكملها. تركز مبادئ التصميم الدائري على إنشاء أزياء يمكن إعادة استخدامها وإصلاحها وفي النهاية إعادة تدويرها، مما يقلل النفايات في كل مرحلة.\n\nتقوم المدارس السعودية التقدمية الآن بتنفيذ برامج تبادل الزي الموحد، حيث يتم إرجاع العناصر التي تم تجاوزها (بسبب النمو) وهي في حالة جيدة وإعادة توزيعها على طلاب آخرين. يقلل هذا النهج من النفايات بينما يجعل الزي الموحد ذو الجودة أكثر سهولة للوصول لجميع الأسر. تشير بعض المدارس إلى انخفاض يصل إلى 40% في شراء الزي الجديد من خلال مبادرات التبادل المدارة بشكل جيد.\n\nتعزيزات المتانة - الخياطة المقواة، والميزات القابلة للتعديل التي تستوعب نمو الطالب، والتصاميم المعيارية التي تسمح باستبدال المكونات البالية فقط - تمدد عمر الزي بنسبة 30-50% مقارنة بالتصاميم التقليدية. تقلل هذه الأساليب من التأثير البيئي مع توفير قيمة أفضل للمؤسسات التعليمية والأسر.",
          image: "/images/industries/education/students/school-uniform-students-03.webp",
          imageAlt: "برنامج تبادل الزي المدرسي قيد التنفيذ",
          icon: <FaRecycle className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "الإنتاج المحلي والفوائد الاقتصادية",
          content: "يمكن لبرامج الزي المستدامة أن تدعم أهداف التنمية الاقتصادية للمملكة العربية السعودية من خلال إعطاء الأولوية للتصنيع المحلي. يقلل الإنتاج المحلي من انبعاثات النقل بينما يخلق وظائف ويطور صناعة النسيج داخل المملكة.\n\nأبرزت مبادرة صنع في السعودية إمكانات التصنيع المحلي لمعالجة كل من أهداف الاستدامة والاقتصاد. يمكن للمدارس التي تتشارك مع المنتجين المحليين تخصيص حلول الزي المستدامة مع المساهمة في ازدهار المجتمع. يسمح هذا النهج المحلي بمراقبة جودة أقرب وسلاسل توريد أكثر استجابة.\n\nمن خلال بناء علاقات مع المنتجين السعوديين الملتزمين بالممارسات المستدامة، يمكن للمدارس إنشاء برامج زي توائم بين المسؤولية البيئية ودعم الاقتصاد الوطني. غالباً ما تؤدي هذه الشراكات إلى نهج مبتكرة تعالج على وجه التحديد احتياجات البيئات التعليمية السعودية.",
          image: "/images/industries/education/students/school-uniform-students-02.webp",
          imageAlt: "مصنع سعودي محلي ينتج زياً مدرسياً مستداماً",
          icon: <FaRecycle className="w-12 h-12 text-primary-600 mb-4" />
        },
        {
          title: "التكامل التعليمي ومشاركة الطلاب",
          content: "ربما يكون الجانب الأكثر قوة في برامج الزي المستدامة هو إمكانياتها للتكامل التعليمي. عندما تنفذ المدارس حلول زي مسؤولة بيئياً، فإنها تخلق روابط ملموسة ويومية مع مبادئ الاستدامة.\n\nتستخدم المؤسسات التعليمية السعودية التقدمية برامج الزي الخاصة بها كأدوات تعليمية. يتعلم الطلاب عن التأثير البيئي من خلال الملابس التي يرتدونها كل يوم. تدمج بعض المدارس دروساً حول استدامة النسيج في مناهج العلوم والرياضيات والدراسات الاجتماعية، مما يجعل المفاهيم المجردة ملموسة من خلال التجربة الشخصية.\n\nمشاركة الطلاب في مبادرات الزي المستدامة - من مدخلات التصميم إلى إدارة برامج التبادل - تبني مهارات القيادة البيئية. يطور السعوديون الشباب نهجاً عملية للاستدامة سيحملونها معهم في مستقبلهم التعليمي والمهني.",
          image: "/images/industries/education/students/school-uniform-students-01.webp",
          imageAlt: "طلاب يشاركون في تعليم الاستدامة المتعلق بالزي المدرسي",
          icon: <FaLeaf className="w-12 h-12 text-primary-600 mb-4" />
        }
      ],
      conclusion: "تمتلك المؤسسات التعليمية السعودية فرصة هادفة لتعزيز الاستدامة من خلال برامج زي مدروسة. من خلال تبني المواد الصديقة للبيئة ومبادئ التصميم الدائري والإنتاج المحلي والتكامل التعليمي، يمكن للمدارس تقليل التأثير البيئي مع الحفاظ على زي موحد عالي الجودة ومناسب ثقافياً.\n\nتتوافق هذه النهج بشكل مثالي مع أهداف الاستدامة في رؤية 2030 وتعد الطلاب للمشاركة في مجتمع عالمي متزايد الوعي البيئي. مع تبني المزيد من المدارس السعودية لحلول الزي المستدامة، فإنها تخلق فوائد بيئية على نطاق واسع بينما تعلم الجيل القادم من خلال المثال اليومي.\n\nيمثل الانتقال إلى الأزياء المستدامة أكثر من مجرد تغيير عملي - إنه التزام مرئي بالإشراف البيئي يتردد صداه في جميع المجتمعات التعليمية وما بعدها.",
      relatedPosts: [
        {
          title: "كيف يعزز الزي المدرسي الأداء الأكاديمي في المدارس السعودية",
          link: "/blog/school-uniforms-academic-performance",
          image: "/images/industries/education/school-uniform-03.webp"
        },
        {
          title: "الهوية الثقافية في الزي المدرسي السعودي: التوازن بين التقاليد والحداثة",
          link: "/blog/cultural-identity-saudi-school-uniforms",
          image: "/images/industries/education/school-uniform-05.webp"
        },
        {
          title: "تطور تصميم الزي المدرسي في الشرق الأوسط",
          link: "/blog/school-uniform-design-middle-east",
          image: "/images/industries/education/teachers/school-uniform-teacher-01.webp"
        }
      ],
      tags: ["الموضة المستدامة", "الزي المدرسي", "التعليم", "المملكة العربية السعودية", "المسؤولية البيئية", "رؤية 2030"]
    }
  };

  const content = language === 'en' ? blogPost.en : blogPost.ar;
  
  // JSON-LD Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    image: `https://uneom.com${content.heroImage}`,
    datePublished: '2024-04-22T08:00:00+03:00',
    dateModified: '2024-04-22T08:00:00+03:00',
    author: {
      '@type': 'Person',
      name: content.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Uneom',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uneom.com/images/logo.png'
      }
    },
    description: language === 'en' 
      ? 'Discover eco-friendly school uniform solutions for Saudi Arabian schools that align with Vision 2030 sustainability goals.'
      : 'اكتشف حلول الزي المدرسي الصديقة للبيئة للمدارس السعودية التي تتماشى مع أهداف الاستدامة لرؤية 2030.',
    inLanguage: language === 'en' ? 'en-US' : 'ar-SA',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://uneom.com/blog/sustainable-school-uniforms-saudi'
    },
  };
  
  // Metadata for the current language
  const metaTitle = language === 'en'
    ? 'Sustainable School Uniform Solutions for Saudi Educational Institutions | Uneom'
    : 'حلول الزي المدرسي المستدامة للمؤسسات التعليمية السعودية | Uneom';
  
  const metaDescription = language === 'en'
    ? 'Discover eco-friendly school uniform solutions for Saudi Arabian schools that align with Vision 2030 sustainability goals while maintaining quality and cultural appropriateness.'
    : 'اكتشف حلول الزي المدرسي الصديقة للبيئة للمدارس السعودية التي تتماشى مع أهداف الاستدامة في رؤية 2030 مع الحفاظ على الجودة والملاءمة الثقافية.';
  
  const canonicalUrl = language === 'en'
    ? 'https://uneom.com/blog/sustainable-school-uniforms-saudi'
    : 'https://uneom.com/blog/sustainable-school-uniforms-saudi?lang=ar';
  
  // Function to handle WhatsApp contact
  const handleWhatsAppContact = (topic?: string) => {
    const subject = language === 'en' 
      ? `Sustainable School Uniforms${topic ? ` - ${topic}` : ''}`
      : `الزي المدرسي المستدام${topic ? ` - ${topic}` : ''}`;
    
    window.open(generateGeneralWhatsAppUrl(subject), '_blank');
  };
  
  return (
    <>
      {/* Client-side metadata using next/head for dynamic language switching */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Alternate language links */}
        <link rel="alternate" href="https://uneom.com/blog/sustainable-school-uniforms-saudi" hrefLang="en" />
        <link rel="alternate" href="https://uneom.com/blog/sustainable-school-uniforms-saudi?lang=ar" hrefLang="ar" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`https://uneom.com${content.heroImage}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ar_SA'} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`https://uneom.com${content.heroImage}`} />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>
      
      <div className={`bg-white pt-24 pb-16 ${language === 'ar' ? 'rtl text-right' : 'ltr text-left'}`}>
        <Container>
          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  language === 'en' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
                aria-label="Switch to English"
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  language === 'ar' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
                aria-label="Switch to Arabic"
              >
                العربية
              </button>
            </div>
          </div>
          
          {/* Breadcrumb with structured data */}
          <nav className="text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-neutral-500 hover:text-primary-600" itemProp="item">
                  <span itemProp="name">{language === 'en' ? 'Home' : 'الرئيسية'}</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li><span className="text-neutral-400 mx-2">/</span></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/blog" className="text-neutral-500 hover:text-primary-600" itemProp="item">
                  <span itemProp="name">{language === 'en' ? 'Blog' : 'المدونة'}</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li><span className="text-neutral-400 mx-2">/</span></li>
              <li className="text-primary-600 font-medium truncate max-w-[200px] sm:max-w-none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{content.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>
          
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {content.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-neutral-600 mb-6 gap-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{content.date}</span>
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{content.author}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2" />
                <span>{content.category}</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-8 relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image 
              src={content.heroImage}
              alt={content.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Introduction */}
          <div className="prose max-w-none mb-10 lg:text-lg">
            <p>{content.introduction}</p>
          </div>
          
          {/* Content Sections */}
          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <div key={index}>
                <div className="text-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1fr_400px]' : 'lg:grid-cols-[400px_1fr]'} gap-8 items-center`}>
                  <div className={`prose max-w-none ${index % 2 === 1 && 'lg:order-2'}`}>
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  <div className={`relative rounded-lg overflow-hidden h-[250px] ${index % 2 === 1 && 'lg:order-1'}`}>
                    <Image 
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sustainability Stats */}
          <div className="mt-12 bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {language === 'en' ? 'Sustainability Impact' : 'تأثير الاستدامة'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-md shadow-sm text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">70%</div>
                <p className="text-neutral-700">
                  {language === 'en' 
                    ? 'Reduction in carbon emissions when using recycled materials' 
                    : 'انخفاض في انبعاثات الكربون عند استخدام المواد المعاد تدويرها'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-sm text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
                <p className="text-neutral-700">
                  {language === 'en' 
                    ? 'Reduction in new uniform purchases through exchange programs' 
                    : 'انخفاض في مشتريات الزي الجديد من خلال برامج التبادل'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-sm text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">3,000+</div>
                <p className="text-neutral-700">
                  {language === 'en' 
                    ? 'Liters of water saved per uniform compared to traditional manufacturing' 
                    : 'لتر من الماء يتم توفيره لكل زي مقارنة بالتصنيع التقليدي'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="mt-12 bg-neutral-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Conclusion' : 'الخلاصة'}</h2>
            <div className="prose max-w-none">
              {content.conclusion.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">{language === 'en' ? 'Tags' : 'الوسوم'}</h3>
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h3 className="text-lg font-medium mb-3">{language === 'en' ? 'Share this article' : 'شارك هذا المقال'}</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">{language === 'en' ? 'Related Articles' : 'مقالات ذات صلة'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.relatedPosts.map((post, index) => (
                <Link href={post.link} key={index} className="group block">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h4 className="font-medium text-neutral-900 group-hover:text-primary-600 transition line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 bg-primary-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                {language === 'en' 
                  ? 'Interested in Sustainable School Uniforms?' 
                  : 'مهتم بالأزياء المدرسية المستدامة؟'}
              </h3>
              <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Contact us to learn more about our sustainable uniform solutions for Saudi educational institutions.' 
                  : 'اتصل بنا لمعرفة المزيد عن حلول الزي المدرسي المستدامة للمؤسسات التعليمية السعودية.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="flex items-center gap-2 justify-center"
                  onClick={() => handleWhatsAppContact('General Inquiry')}
                >
                  <FaWhatsapp />
                  {language === 'en' ? 'Contact Us Now' : 'تواصل معنا الآن'}
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="flex items-center gap-2 justify-center"
                  onClick={() => handleWhatsAppContact('Request Catalog')}
                >
                  <FaWhatsapp />
                  {language === 'en' ? 'Request Sustainable Catalog' : 'اطلب كتالوج المنتجات المستدامة'}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 