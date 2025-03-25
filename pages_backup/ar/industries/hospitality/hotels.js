import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import components (to be created)
const HeroSection = ({ title, subtitle, image }) => (
  <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white">
    <div className="absolute inset-0 opacity-30">
      <Image 
        src={image} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        priority 
      />
    </div>
    <div className="relative container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-primary-100">{subtitle}</p>
        <div className="mt-8">
          <Link href="/ar/contact?industry=hospitality-hotels" legacyBehavior>
            <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-6 rounded-md text-lg transition duration-300 inline-block">
              طلب استشارة زي الفندق
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
      <span className="text-primary-600 text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductCard = ({ name, image, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-64">
      <Image 
        src={image} 
        alt={name} 
        layout="fill" 
        objectFit="cover" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} legacyBehavior>
        <a className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
          المزيد <span className="mr-1">←</span>
        </a>
      </Link>
    </div>
  </div>
);

const TestimonialCard = ({ text, author, position, company, logo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4">
      <Image src={logo} alt={company} width={120} height={40} objectFit="contain" />
    </div>
    <p className="text-gray-600 italic mb-4">"{text}"</p>
    <div>
      <p className="font-bold text-gray-800">{author}</p>
      <p className="text-gray-600">{position}، {company}</p>
    </div>
  </div>
);

export default function HotelsIndustryPageArabic() {
  const router = useRouter();
  const { locale } = router;
  
  const hotelIndustryData = {
    title: "أزياء فندقية وملابس موظفين متميزة في المملكة العربية السعودية",
    subtitle: "ارتقِ بصورة فندقك مع أزياء مهنية ومريحة مصممة خصيصًا لمعايير الضيافة السعودية",
    heroImage: "/images/industries/hospitality/hotel-staff.jpg",
    introduction: `
      في مشهد الضيافة التنافسي بالمملكة العربية السعودية، يُعد مظهر الموظفين عنصرًا حاسمًا في هوية العلامة التجارية لفندقك.
      توفر يونيوم حلول أزياء متميزة ومخصصة للفنادق في جميع أنحاء المملكة، من السلاسل العالمية الفاخرة إلى المنشآت المحلية الفريدة.
      
      تجمع مجموعات الأزياء الفندقية لدينا بين الأناقة المهنية والعملية، وهي مصممة خصيصًا لتلبية المتطلبات الفريدة للضيافة السعودية.
    `,
    benefits: [
      {
        icon: "✓",
        title: "تصاميم متوافقة مع المعايير السعودية",
        description: "جميع الأزياء مصممة مع احترام للمعايير الثقافية السعودية ومتطلبات اللباس الإسلامي عند الحاجة."
      },
      {
        icon: "✓",
        title: "أقمشة مناسبة للمناخ",
        description: "مواد مريحة وقابلة للتنفس مناسبة لمناخ المملكة العربية السعودية الحار والبيئات الداخلية المكيفة."
      },
      {
        icon: "✓",
        title: "تصميم مخصص للعلامة التجارية",
        description: "دمج ألوان وشعارات وعناصر تصميم فندقك لهوية متناسقة عبر جميع الموظفين."
      },
      {
        icon: "✓",
        title: "تنسيق بين الأقسام",
        description: "تصاميم منسقة عبر مكتب الاستقبال، التدبير المنزلي، المطاعم، الإدارة، وغيرها من الأقسام."
      }
    ],
    departments: [
      {
        name: "مكتب الاستقبال والاستقبال",
        products: [
          {
            name: "أزياء موظفي الاستقبال",
            image: "/images/industries/hospitality/reception-uniform.jpg",
            description: "أزياء احترافية وموسومة بالعلامة التجارية لموظفي مكتب الاستقبال، الكونسيرج، وعلاقات النزلاء.",
            link: "/ar/shop/hospitality/reception-uniforms"
          },
          {
            name: "أزياء الحمالين وموظفي الباب",
            image: "/images/industries/hospitality/bellhop-uniform.jpg",
            description: "أزياء مميزة وعملية للموظفين الذين يتعاملون مع أمتعة النزلاء وخدمات الباب الأمامي.",
            link: "/ar/shop/hospitality/bellhop-uniforms"
          }
        ]
      },
      {
        name: "الطعام والشراب",
        products: [
          {
            name: "أزياء طاقم المطعم",
            image: "/images/industries/hospitality/waiter-uniform.jpg",
            description: "ملابس أنيقة وعملية لموظفي المطعم، المقهى، وخدمة الغرف.",
            link: "/ar/shop/hospitality/waitstaff-uniforms"
          },
          {
            name: "أزياء الطهاة والمطبخ",
            image: "/images/industries/hospitality/chef-uniform.jpg",
            description: "أزياء طهي احترافية تلبي معايير السلامة والنظافة.",
            link: "/ar/shop/hospitality/chef-uniforms"
          }
        ]
      },
      {
        name: "التدبير المنزلي والصيانة",
        products: [
          {
            name: "أزياء التدبير المنزلي",
            image: "/images/industries/hospitality/housekeeping-uniform.jpg",
            description: "أزياء عملية ومحتشمة لفريق التدبير المنزلي مع راحة مثالية للحركة.",
            link: "/ar/shop/hospitality/housekeeping-uniforms"
          },
          {
            name: "ملابس فريق الصيانة",
            image: "/images/industries/hospitality/maintenance-uniform.jpg",
            description: "ملابس عمل متينة لفريق الصيانة والهندسة مع ميزات عملية.",
            link: "/ar/shop/hospitality/maintenance-uniforms"
          }
        ]
      }
    ],
    fabricTechnologies: [
      {
        name: "تقنية StainGuard™",
        description: "معالجة خاصة للأقمشة تصد السوائل وتمنع البقع - مثالية لأزياء خدمة الطعام والتدبير المنزلي."
      },
      {
        name: "تقنية ComfortWeave™",
        description: "بنية نسيج متقدمة توفر الراحة أثناء المناوبات الطويلة مع تعزيز قابلية التنفس والمرونة."
      },
      {
        name: "تقنية DuraBrand™ للألوان",
        description: "تقنية ثبات الألوان تضمن بقاء ألوان علامتك التجارية نابضة بالحياة عبر عمليات الغسيل الصناعية المتعددة."
      }
    ],
    testimonials: [
      {
        text: "كانت يونيوم المزود الحصري للأزياء الموحدة لنا لأكثر من 5 سنوات. اهتمامهم بالتفاصيل وفهمهم لعلامتنا التجارية أدى إلى أزياء موظفين تمثل تموضعنا الفاخر في السوق السعودي بشكل مثالي.",
        author: "محمد الحربي",
        position: "المدير التنفيذي",
        company: "فندق الواحة الملكي الرياض",
        logo: "/images/clients/royal-oasis-logo.png"
      },
      {
        text: "جودة ومتانة أزياء الفنادق من يونيوم قللت بشكل كبير من دورات الاستبدال لدينا، مما أدى إلى كفاءة تكلفة أفضل. إدارة برنامج الأزياء الموحدة لديهم تخفف العبء عن فريق الموارد البشرية لدينا.",
        author: "سارة الجهني",
        position: "مديرة الموارد البشرية",
        company: "الفندق الدولي الكبير جدة",
        logo: "/images/clients/grand-hotel-logo.png"
      }
    ],
    ctaTitle: "ارتقِ بمستوى أداء موظفي فندقك",
    ctaDescription: "تواصل مع متخصصي الأزياء الفندقية لدينا للحصول على استشارة مخصصة لمتطلبات فندقك المحددة.",
    ctaButtonText: "طلب استشارة أزياء فندقية",
    ctaButtonUrl: "/ar/contact?industry=hospitality-hotels"
  };

  return (
    <>
      <Head>
        <title>{hotelIndustryData.title} | يونيوم</title>
        <meta 
          name="description" 
          content="أزياء فندقية احترافية مصممة وفق معايير الضيافة في المملكة العربية السعودية. أزياء مخصصة لمكتب الاستقبال، التدبير المنزلي، المطاعم، وجميع أقسام الفندق." 
        />
        <meta 
          property="og:title" 
          content={hotelIndustryData.title} 
        />
        <meta 
          property="og:description" 
          content="أزياء فندقية احترافية مصممة وفق معايير الضيافة في المملكة العربية السعودية. أزياء مخصصة لجميع أقسام الفندق." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/hotel-uniforms-saudi-ar.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/ar/industries/hospitality/hotels" 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href="https://uneom.com/industries/hospitality/hotels" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="ar" dir="rtl" />
      </Head>

      <main className="rtl">
        {/* Hero Section */}
        <HeroSection 
          title={hotelIndustryData.title}
          subtitle={hotelIndustryData.subtitle}
          image={hotelIndustryData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">التميز في الأزياء الفندقية في المملكة</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{hotelIndustryData.introduction}</p>
                <p className="mt-4">
                  مع سنوات من الخبرة في خدمة أفضل الفنادق في المملكة العربية السعودية، نتفهم المتطلبات الفريدة لصناعة الضيافة في المملكة، من سلاسل الفنادق العالمية الفاخرة إلى المنشآت المحلية المميزة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">ميزات أزياء الفنادق من يونيوم</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hotelIndustryData.benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Products by Department */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">أزياء الفنادق حسب القسم</h2>
            
            {hotelIndustryData.departments.map((department, deptIndex) => (
              <div key={deptIndex} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 border-r-4 border-primary-500 pr-4">{department.name}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {department.products.map((product, prodIndex) => (
                    <ProductCard 
                      key={prodIndex}
                      name={product.name}
                      image={product.image}
                      description={product.description}
                      link={product.link}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fabric Technology */}
        <section className="py-16 bg-primary-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">تقنيات الأقمشة المتقدمة</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {hotelIndustryData.fabricTechnologies.map((tech, index) => (
                <div key={index} className="bg-primary-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-primary-100">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">نحظى بثقة أفضل الفنادق في المملكة</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {hotelIndustryData.testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  text={testimonial.text}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  logo={testimonial.logo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{hotelIndustryData.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{hotelIndustryData.ctaDescription}</p>
            <Link href={hotelIndustryData.ctaButtonUrl} legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                {hotelIndustryData.ctaButtonText}
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 