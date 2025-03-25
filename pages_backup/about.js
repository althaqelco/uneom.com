import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Team Member Component
const TeamMember = ({ name, title, bio, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="relative h-64 w-full">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-4 text-sm">{title}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  </div>
);

// Value Card Component
const ValueCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border-r-4 border-primary-600">
    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
      <Image 
        src={icon} 
        alt={title} 
        width={24} 
        height={24} 
      />
    </div>
    <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Milestone Component
const Milestone = ({ year, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0 w-20 mr-4 text-center">
      <div className="text-xl font-bold text-primary-600">{year}</div>
      <div className="w-px h-full bg-gray-300 mx-auto mt-2"></div>
    </div>
    <div className="pb-10">
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function ArabicAboutPage() {
  const router = useRouter();
  
  // About Page Data
  const aboutData = {
    title: "نبذة عنا",
    subtitle: "الشركة الرائدة للأزياء المهنية في المملكة العربية السعودية",
    introduction: "يونيوم هي شركة سعودية رائدة متخصصة في تصميم وتصنيع وتوريد الأزياء المهنية والموحدة للشركات والمؤسسات في جميع أنحاء المملكة العربية السعودية ودول مجلس التعاون الخليجي. تأسست في عام 2010 في الرياض، ونمت لتصبح المزود المفضل للأزياء المهنية عالية الجودة في مختلف القطاعات، بما في ذلك الرعاية الصحية والضيافة والشركات والقطاع الصناعي.",
    missionTitle: "رسالتنا",
    mission: "توفير أزياء مهنية عالية الجودة ومخصصة تعزز صورة علامتك التجارية مع ضمان الراحة والأداء الوظيفي لموظفيك، مع الالتزام بالمعايير الثقافية والبيئية السعودية.",
    visionTitle: "رؤيتنا",
    vision: "أن نكون الشريك المفضل للأزياء المهنية في الشرق الأوسط، معروفين بالابتكار والجودة والاستدامة والخدمة الاستثنائية.",
    historyTitle: "قصتنا",
    history: "بدأت يونيوم كشركة صغيرة في الرياض تركز على توفير الزي الموحد للقطاع الطبي. مع مرور السنين، توسعنا لتلبية الطلب المتزايد على الأزياء المهنية عالية الجودة في مختلف القطاعات. اليوم، نمتلك منشآت تصنيع حديثة ومكاتب في جميع المدن الرئيسية في المملكة العربية السعودية، ونخدم أكثر من 500 عميل من الشركات سنويًا.",
    milestones: [
      {
        year: "2010",
        title: "تأسيس يونيوم",
        description: "تأسست الشركة في الرياض كمزود متخصص للزي الموحد الطبي، مع التركيز على الجودة والراحة والامتثال للمعايير السعودية."
      },
      {
        year: "2013",
        title: "توسع المنتجات",
        description: "توسعت يونيوم لتشمل قطاعات جديدة، بما في ذلك الضيافة والأعمال التجارية، مع إضافة خدمات التصميم المخصص."
      },
      {
        year: "2015",
        title: "افتتاح مصنع الرياض",
        description: "افتتاح منشأة تصنيع حديثة في الرياض لزيادة الإنتاج وتحسين الجودة وتقليل أوقات التسليم."
      },
      {
        year: "2017",
        title: "التوسع الإقليمي",
        description: "افتتاح مكاتب في جدة والدمام لخدمة العملاء في جميع أنحاء المملكة بشكل أفضل، مع زيادة القدرة اللوجستية."
      },
      {
        year: "2020",
        title: "إطلاق برنامج الاستدامة",
        description: "بدء مبادرة استدامة شاملة، بما في ذلك استخدام المواد المستدامة وممارسات التصنيع الصديقة للبيئة."
      },
      {
        year: "2022",
        title: "تحديث التكنولوجيا والتجارة الإلكترونية",
        description: "إطلاق منصة التجارة الإلكترونية المتطورة وتطبيق إدارة المخزون لتحسين تجربة العملاء وكفاءة الخدمة."
      }
    ],
    valuesTitle: "قيمنا",
    values: [
      {
        title: "الجودة",
        description: "نلتزم بأعلى معايير الجودة في كل منتج نصنعه، من اختيار المواد إلى التشطيب النهائي.",
        icon: "/images/icons/quality.svg"
      },
      {
        title: "الابتكار",
        description: "نسعى باستمرار لتطوير منتجات وعمليات جديدة تلبي الاحتياجات المتطورة لعملائنا.",
        icon: "/images/icons/innovation.svg"
      },
      {
        title: "الموثوقية",
        description: "نبني علاقات دائمة مع عملائنا من خلال الوفاء بوعودنا وتقديم منتجات وخدمات يمكن الاعتماد عليها.",
        icon: "/images/icons/reliability.svg"
      },
      {
        title: "الاستدامة",
        description: "نلتزم بممارسات الأعمال المسؤولة بيئيًا واجتماعيًا، مع السعي لتقليل تأثيرنا البيئي.",
        icon: "/images/icons/sustainability.svg"
      }
    ],
    teamTitle: "فريقنا القيادي",
    team: [
      {
        name: "فهد العتيبي",
        title: "المؤسس والرئيس التنفيذي",
        bio: "يمتلك فهد أكثر من 20 عامًا من الخبرة في صناعة الأزياء والمنسوجات. تحت قيادته، نمت يونيوم من شركة ناشئة صغيرة إلى شركة رائدة في مجال الأزياء المهنية في المملكة العربية السعودية.",
        image: "/images/team/ceo.jpg"
      },
      {
        name: "نورة الشمري",
        title: "مديرة التصميم",
        bio: "نورة هي مصممة أزياء حائزة على جوائز مع خبرة خاصة في دمج العناصر التقليدية السعودية مع الوظائف المهنية الحديثة. تقود فريقًا من المصممين الموهوبين يبتكرون أزياء موحدة فريدة وعملية.",
        image: "/images/team/design-director.jpg"
      },
      {
        name: "خالد القحطاني",
        title: "مدير العمليات",
        bio: "يشرف خالد على جميع عمليات التصنيع واللوجستيات، مع ضمان الكفاءة وجودة المنتج وتسليمها في الوقت المناسب. خلفيته في إدارة سلسلة التوريد كانت حاسمة في توسع الشركة.",
        image: "/images/team/operations-manager.jpg"
      },
      {
        name: "هند المالكي",
        title: "مديرة خدمة العملاء",
        bio: "تضمن هند أن يتلقى كل عميل خدمة استثنائية من الاستفسار الأولي إلى ما بعد البيع. تحت قيادتها، حققت يونيوم معدلات رضا عملاء مرتفعة باستمرار.",
        image: "/images/team/customer-service-manager.jpg"
      }
    ],
    certifications: [
      "شهادة المعيار السعودي للمنسوجات (SASO)",
      "شهادة ISO 9001:2015 لإدارة الجودة",
      "شهادة ISO 14001:2015 للإدارة البيئية",
      "عضو في غرفة التجارة السعودية",
      "عضو في اتحاد المصنعين السعوديين"
    ],
    ctaTitle: "انضم إلى قائمة عملائنا المتميزين",
    ctaDescription: "تواصل معنا اليوم لاستكشاف كيف يمكن لحلول الأزياء المهنية المخصصة من يونيوم أن تعزز صورة علامتك التجارية وتحسن رضا موظفيك."
  };

  return (
    <>
      <Head>
        <title>{aboutData.title} | يونيوم</title>
        <meta 
          name="description" 
          content="تعرف على يونيوم، الشركة الرائدة في مجال الأزياء المهنية في المملكة العربية السعودية. اكتشف قصتنا، ورسالتنا، وقيمنا، وفريقنا المتخصص." 
        />
        <meta 
          property="og:title" 
          content={`${aboutData.title} | يونيوم`} 
        />
        <meta 
          property="og:description" 
          content="تعرف على يونيوم، الشركة الرائدة في مجال الأزياء المهنية في المملكة العربية السعودية. شركة سعودية متخصصة في تصميم وتصنيع وتوريد الأزياء المهنية عالية الجودة." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/about-page-ar.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/ar/about" 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href="https://uneom.com/about" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="ar" dir="rtl" />
      </Head>

      <main className="rtl">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/about/about-hero-bg.jpg" 
              alt="يونيوم - شركة الأزياء المهنية الرائدة في المملكة العربية السعودية" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60"></div>
          </div>
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{aboutData.title}</h1>
              <p className="text-xl md:text-2xl font-light text-white">{aboutData.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.introduction}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-primary-700">{aboutData.missionTitle}</h2>
                  <p className="text-gray-700">{aboutData.mission}</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-primary-700">{aboutData.visionTitle}</h2>
                  <p className="text-gray-700">{aboutData.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History and Milestones */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{aboutData.historyTitle}</h2>
                <p className="text-lg text-gray-700">
                  {aboutData.history}
                </p>
              </div>
              
              <div className="mt-12">
                {aboutData.milestones.map((milestone, index) => (
                  <Milestone 
                    key={index}
                    year={milestone.year}
                    title={milestone.title}
                    description={milestone.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{aboutData.valuesTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                هذه القيم الأساسية توجه كل قرار نتخذه ونبني عليها علاقات طويلة الأمد مع عملائنا وموردينا وموظفينا.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.values.map((value, index) => (
                <ValueCard 
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{aboutData.teamTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                فريقنا القيادي يجمع بين الخبرة العميقة في صناعة الأزياء المهنية والشغف بتقديم منتجات استثنائية.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.team.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">الشهادات والعضويات</h2>
                <p className="text-lg text-gray-600">
                  نحن فخورون بالالتزام بأعلى معايير الجودة والممارسات الصناعية
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {aboutData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 ml-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">{aboutData.ctaTitle}</h2>
              <p className="text-xl mb-8">{aboutData.ctaDescription}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/ar/contact" legacyBehavior>
                  <a className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300">
                    تواصل معنا
                  </a>
                </Link>
                <Link href="/ar/services" legacyBehavior>
                  <a className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                    استكشف خدماتنا
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 