'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaShare, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function SchoolUniformsAcademicPerformancePage() {
  const router = useRouter();
  const [language, setLanguage] = React.useState<'en' | 'ar'>('en');
  
  const blogPost = {
    en: {
      title: "How School Uniforms Enhance Academic Performance in Saudi Schools",
      date: "April 15, 2024",
      author: "Dr. Abdullah Al-Qahtani",
      category: "Education",
      heroImage: "/images/industries/education/school-uniform-03.webp",
      introduction: "School uniforms have been a cornerstone of educational institutions across Saudi Arabia for decades. Beyond creating a unified identity, research increasingly shows that well-designed uniforms can positively influence students' academic performance and educational outcomes. This article explores the connection between school uniforms and academic achievement in Saudi Arabian educational contexts.",
      sections: [
        {
          title: "The Psychology of Uniform Wearing",
          content: "School uniforms create a psychological framework that supports learning. When students wear professionally designed uniforms, they often experience what psychologists call 'enclothed cognition' - the influence that clothes have on the wearer's psychological processes. Quality uniforms signal to students that they are in an environment dedicated to learning and achievement.\n\nResearch conducted across educational institutions in Saudi Arabia shows that students wearing well-fitted, comfortable uniforms report greater feelings of belonging and school pride. These psychological factors contribute to higher engagement in class activities and stronger academic motivation.",
          image: "/images/industries/education/school-uniform-05.webp",
          imageAlt: "Students in uniform engaged in classroom activities"
        },
        {
          title: "Reducing Distractions and Social Pressure",
          content: "One of the most significant benefits of school uniforms is the reduction of distractions related to clothing and appearance. In Saudi educational environments, uniforms eliminate the social pressures associated with fashion and brand competition, allowing students to focus more intently on their studies.\n\nA study by King Saud University found that schools implementing standardized uniform policies reported fewer disciplinary issues related to appearance and a corresponding increase in classroom attentiveness. Teachers noted that class time previously lost to addressing dress code violations was reclaimed for educational purposes.",
          image: "/images/industries/education/school-uniform-04.webp",
          imageAlt: "Students in standardized uniforms collaborating on a project"
        },
        {
          title: "Climate-Appropriate Design and Physical Comfort",
          content: "The Saudi climate presents unique challenges for school uniform design. Progressive educational institutions are now partnering with uniform manufacturers who prioritize breathable, moisture-wicking fabrics suitable for the region's high temperatures.\n\nPhysical comfort significantly impacts concentration and learning ability. Modern uniform designs that account for both cultural appropriateness and physical comfort create optimal conditions for learning. Students who aren't distracted by discomfort show improved attention spans and better classroom performance.\n\nResearch from the Ministry of Education demonstrates that schools that updated their uniforms with climate-appropriate designs saw measurable improvements in student attendance and participation rates.",
          image: "/images/industries/education/students/school-uniform-students-01.webp",
          imageAlt: "Students wearing modern, climate-appropriate uniforms"
        },
        {
          title: "Identity and Belonging in Educational Communities",
          content: "Saudi Arabian educational philosophy emphasizes the importance of community and shared values. Uniforms play a crucial role in fostering institutional identity and a sense of belonging. When students identify strongly with their educational institution, they're more likely to adopt its academic values and strive to uphold its reputation through their performance.\n\nResearch from international schools in Riyadh and Jeddah indicates that students who reported strong connections to their school community – partly facilitated by uniform wearing – demonstrated higher academic achievement and more consistent study habits.",
          image: "/images/industries/education/students/school-uniform-students-02.webp",
          imageAlt: "Diverse group of students in unified school uniforms"
        },
        {
          title: "Professional Preparation and Future Success",
          content: "In Saudi Arabia's evolving economy, professional preparation is increasingly important. School uniforms introduce students to the concept of appropriate professional attire from an early age. This preparation extends beyond clothing to encompass the professional behaviors and attitudes associated with formal dress.\n\nEducators across the Kingdom report that uniform policies contribute to better classroom discipline, punctuality, and responsibility – all attributes valued in higher education and the professional world. These habits, formed early through uniform-wearing, create a foundation for success in university and career settings.",
          image: "/images/industries/education/teachers/school-uniform-teacher-01.webp",
          imageAlt: "Teacher and students in professional educational attire"
        }
      ],
      conclusion: "The evidence from Saudi Arabian educational institutions strongly suggests that well-designed, comfortable school uniforms contribute positively to academic performance and educational outcomes. Beyond simply creating a unified appearance, thoughtfully designed uniforms reduce distractions, foster institutional identity, and prepare students for professional success.\n\nAs educational administrators and policy makers consider uniform policies, the focus should be on combining traditional values with modern performance features that support student comfort and success. When implemented thoughtfully, school uniform policies can be a valuable tool in enhancing the educational experience and academic achievement of students across the Kingdom.",
      relatedPosts: [
        {
          title: "Sustainable School Uniform Solutions for Modern Saudi Educational Institutions",
          link: "/blog/sustainable-school-uniforms-saudi",
          image: "/images/industries/education/school-uniform-02.webp"
        },
        {
          title: "Cultural Identity in Saudi School Uniforms: Balancing Tradition and Modernity",
          link: "/blog/cultural-identity-saudi-school-uniforms",
          image: "/images/industries/education/school-uniform-01.webp"
        },
        {
          title: "The Evolution of School Uniform Design in the Middle East",
          link: "/blog/school-uniform-design-middle-east",
          image: "/images/industries/education/students/school-uniform-students-03.webp"
        }
      ],
      tags: ["School Uniforms", "Education", "Academic Performance", "Saudi Arabia", "Educational Policy"]
    },
    ar: {
      title: "كيف يعزز الزي المدرسي الأداء الأكاديمي في المدارس السعودية",
      date: "15 أبريل 2024",
      author: "د. عبدالله القحطاني",
      category: "التعليم",
      heroImage: "/images/industries/education/school-uniform-03.webp",
      introduction: "كان الزي المدرسي ركيزة أساسية للمؤسسات التعليمية في جميع أنحاء المملكة العربية السعودية لعقود. وبعيدًا عن خلق هوية موحدة، تُظهر الأبحاث بشكل متزايد أن الزي المدرسي المصمم بشكل جيد يمكن أن يؤثر إيجابًا على الأداء الأكاديمي للطلاب والنتائج التعليمية. يستكشف هذا المقال العلاقة بين الزي المدرسي والتحصيل الأكاديمي في السياقات التعليمية السعودية.",
      sections: [
        {
          title: "سيكولوجية ارتداء الزي الموحد",
          content: "يخلق الزي المدرسي إطارًا نفسيًا يدعم التعلم. عندما يرتدي الطلاب زيًا مصممًا بشكل احترافي، غالبًا ما يختبرون ما يسميه علماء النفس بـ 'الإدراك الملبسي' - وهو تأثير الملابس على العمليات النفسية للشخص الذي يرتديها. يشير الزي ذو الجودة العالية للطلاب أنهم في بيئة مخصصة للتعلم والإنجاز.\n\nتظهر الأبحاث التي أجريت عبر المؤسسات التعليمية في المملكة العربية السعودية أن الطلاب الذين يرتدون زيًا مناسبًا ومريحًا يبلغون عن مشاعر أكبر من الانتماء والفخر المدرسي. تساهم هذه العوامل النفسية في زيادة المشاركة في أنشطة الفصل والتحفيز الأكاديمي القوي.",
          image: "/images/industries/education/school-uniform-05.webp",
          imageAlt: "طلاب يرتدون الزي المدرسي أثناء المشاركة في أنشطة الفصل"
        },
        {
          title: "تقليل التشتت والضغط الاجتماعي",
          content: "إحدى أهم فوائد الزي المدرسي هي تقليل التشتت المتعلق بالملابس والمظهر. في البيئات التعليمية السعودية، يقضي الزي الموحد على الضغوط الاجتماعية المرتبطة بالموضة والمنافسة بين العلامات التجارية، مما يسمح للطلاب بالتركيز بشكل أكبر على دراستهم.\n\nوجدت دراسة أجرتها جامعة الملك سعود أن المدارس التي تطبق سياسات زي موحدة قياسية أبلغت عن مشاكل تأديبية أقل متعلقة بالمظهر وزيادة مقابلة في الانتباه داخل الفصل الدراسي. لاحظ المعلمون أن وقت الفصل الذي كان يُفقد سابقًا لمعالجة انتهاكات قواعد اللباس تم استعادته للأغراض التعليمية.",
          image: "/images/industries/education/school-uniform-04.webp",
          imageAlt: "طلاب بزي موحد يتعاونون في مشروع"
        },
        {
          title: "تصميم مناسب للمناخ وراحة جسدية",
          content: "يقدم المناخ السعودي تحديات فريدة لتصميم الزي المدرسي. تتشارك المؤسسات التعليمية التقدمية الآن مع مصنعي الزي الموحد الذين يعطون الأولوية للأقمشة التي تتنفس وتمتص الرطوبة والمناسبة لدرجات الحرارة المرتفعة في المنطقة.\n\nالراحة الجسدية تؤثر بشكل كبير على التركيز والقدرة على التعلم. تخلق تصميمات الزي الحديثة التي تراعي كلاً من الملاءمة الثقافية والراحة الجسدية ظروفًا مثالية للتعلم. الطلاب الذين لا يشتتهم عدم الراحة يظهرون تحسناً في فترات الانتباه وأداء أفضل في الفصل.\n\nتظهر الأبحاث من وزارة التعليم أن المدارس التي قامت بتحديث أزيائها بتصميمات مناسبة للمناخ شهدت تحسينات ملحوظة في معدلات حضور الطلاب ومشاركتهم.",
          image: "/images/industries/education/students/school-uniform-students-01.webp",
          imageAlt: "طلاب يرتدون أزياء مدرسية حديثة مناسبة للمناخ"
        },
        {
          title: "الهوية والانتماء في المجتمعات التعليمية",
          content: "تؤكد الفلسفة التعليمية السعودية على أهمية المجتمع والقيم المشتركة. يلعب الزي الموحد دورًا حاسمًا في تعزيز الهوية المؤسسية والشعور بالانتماء. عندما يتماهى الطلاب بقوة مع مؤسستهم التعليمية، فمن المرجح أن يتبنوا قيمها الأكاديمية ويسعوا للحفاظ على سمعتها من خلال أدائهم.\n\nتشير الأبحاث من المدارس الدولية في الرياض وجدة إلى أن الطلاب الذين أبلغوا عن وجود روابط قوية مع مجتمعهم المدرسي - بتسهيل جزئي من ارتداء الزي الموحد - أظهروا تحصيلاً أكاديميًا أعلى وعادات دراسية أكثر اتساقًا.",
          image: "/images/industries/education/students/school-uniform-students-02.webp",
          imageAlt: "مجموعة متنوعة من الطلاب بزي مدرسي موحد"
        },
        {
          title: "الإعداد المهني والنجاح المستقبلي",
          content: "في الاقتصاد السعودي المتطور، يكتسب الإعداد المهني أهمية متزايدة. يعرّف الزي المدرسي الطلاب بمفهوم اللباس المهني المناسب من سن مبكرة. يمتد هذا الإعداد إلى ما هو أبعد من الملابس ليشمل السلوكيات والمواقف المهنية المرتبطة باللباس الرسمي.\n\nيفيد المعلمون في جميع أنحاء المملكة أن سياسات الزي الموحد تساهم في انضباط أفضل في الفصل الدراسي، والالتزام بالمواعيد، والمسؤولية - وكلها سمات مقدرة في التعليم العالي والعالم المهني. هذه العادات، التي تتشكل مبكرًا من خلال ارتداء الزي الموحد، تخلق أساسًا للنجاح في الجامعة وبيئات العمل.",
          image: "/images/industries/education/teachers/school-uniform-teacher-01.webp",
          imageAlt: "معلم وطلاب بزي تعليمي مهني"
        }
      ],
      conclusion: "تشير الأدلة من المؤسسات التعليمية السعودية بقوة إلى أن الزي المدرسي المصمم جيدًا والمريح يساهم بشكل إيجابي في الأداء الأكاديمي والنتائج التعليمية. بعيدًا عن مجرد خلق مظهر موحد، فإن الأزياء المصممة بعناية تقلل من التشتت، وتعزز الهوية المؤسسية، وتهيئ الطلاب للنجاح المهني.\n\nبينما ينظر المسؤولون التعليميون وصانعو السياسات في سياسات الزي الموحد، ينبغي أن يكون التركيز على الجمع بين القيم التقليدية وميزات الأداء الحديثة التي تدعم راحة الطلاب ونجاحهم. عند تنفيذها بشكل مدروس، يمكن أن تكون سياسات الزي المدرسي أداة قيمة في تعزيز التجربة التعليمية والتحصيل الأكاديمي للطلاب في جميع أنحاء المملكة.",
      relatedPosts: [
        {
          title: "حلول الزي المدرسي المستدامة للمؤسسات التعليمية السعودية الحديثة",
          link: "/blog/sustainable-school-uniforms-saudi",
          image: "/images/industries/education/school-uniform-02.webp"
        },
        {
          title: "الهوية الثقافية في الزي المدرسي السعودي: التوازن بين التقاليد والحداثة",
          link: "/blog/cultural-identity-saudi-school-uniforms",
          image: "/images/industries/education/school-uniform-01.webp"
        },
        {
          title: "تطور تصميم الزي المدرسي في الشرق الأوسط",
          link: "/blog/school-uniform-design-middle-east",
          image: "/images/industries/education/students/school-uniform-students-03.webp"
        }
      ],
      tags: ["الزي المدرسي", "التعليم", "الأداء الأكاديمي", "المملكة العربية السعودية", "السياسة التعليمية"]
    }
  };

  const content = language === 'en' ? blogPost.en : blogPost.ar;
  
  // Add JSON-LD Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: language === 'en' ? 'How School Uniforms Enhance Academic Performance in Saudi Schools' : 'كيف يعزز الزي المدرسي الأداء الأكاديمي في المدارس السعودية',
    image: 'https://uneom.com/images/industries/education/school-uniform-03.webp',
    datePublished: '2024-04-18T08:00:00+03:00',
    dateModified: '2024-04-18T08:00:00+03:00',
    author: {
      '@type': 'Person',
      name: language === 'en' ? 'Dr. Ahmad Al-Faisal' : 'د. أحمد الفيصل'
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
      ? 'Explore the impact of well-designed school uniforms on academic performance, focus, and educational outcomes in Saudi Arabian schools.'
      : 'استكشف تأثير الزي المدرسي المصمم جيدًا على الأداء الأكاديمي والتركيز والنتائج التعليمية في المدارس السعودية.',
    inLanguage: language === 'en' ? 'en-US' : 'ar-SA',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://uneom.com/blog/school-uniforms-academic-performance'
    },
  };
  
  // Metadata for the current language
  const metaTitle = language === 'en'
    ? 'How School Uniforms Enhance Academic Performance in Saudi Schools | Uneom'
    : 'كيف يعزز الزي المدرسي الأداء الأكاديمي في المدارس السعودية | Uneom';
  
  const metaDescription = language === 'en'
    ? 'Explore the impact of well-designed school uniforms on academic performance, focus, and educational outcomes in Saudi Arabian schools.'
    : 'استكشف تأثير الزي المدرسي المصمم جيدًا على الأداء الأكاديمي والتركيز والنتائج التعليمية في المدارس السعودية.';
  
  const canonicalUrl = language === 'en'
    ? 'https://uneom.com/blog/school-uniforms-academic-performance'
    : 'https://uneom.com/blog/school-uniforms-academic-performance?lang=ar';

  return (
    <>
      {/* Client-side metadata using next/head for dynamic language switching */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Alternate language links */}
        <link rel="alternate" href="https://uneom.com/blog/school-uniforms-academic-performance" hrefLang="en" />
        <link rel="alternate" href="https://uneom.com/blog/school-uniforms-academic-performance?lang=ar" hrefLang="ar" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://uneom.com/images/industries/education/school-uniform-03.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ar_SA'} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/school-uniform-03.webp" />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>
      
      <div className={`bg-white pt-24 pb-16 ${language === 'ar' ? 'rtl text-right' : 'ltr text-left'}`}>
        {/* Update language toggle buttons with aria-labels */}
        <div className="flex justify-end mb-6 container mx-auto">
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
        
        {/* Update breadcrumbs with structured data */}
        <div className="container mx-auto">
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
          
        </div>
        
        <Container>
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
              <div key={index} className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1fr_400px]' : 'lg:grid-cols-[400px_1fr]'} gap-8 items-center`}>
                <div className={`prose max-w-none ${index % 2 === 1 && 'lg:order-2'}`}>
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
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
            ))}
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
                  ? 'Looking for Premium School Uniforms?' 
                  : 'هل تبحث عن زي مدرسي عالي الجودة؟'}
              </h3>
              <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Discover our range of high-quality, comfortable school uniforms designed specifically for Saudi Arabian educational institutions.' 
                  : 'اكتشف مجموعتنا من الأزياء المدرسية عالية الجودة والمريحة المصممة خصيصًا للمؤسسات التعليمية السعودية.'}
              </p>
              <Button 
                variant="primary" 
                size="lg"
                href="/shop/education-uniforms/premium-school-uniform"
              >
                {language === 'en' ? 'Explore School Uniforms' : 'استكشف الأزياء المدرسية'}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 