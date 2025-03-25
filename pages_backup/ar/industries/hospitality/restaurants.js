import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import components (to be created or reused)
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
          <Link href="/ar/contact?industry=hospitality-restaurants" legacyBehavior>
            <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-6 rounded-md text-lg transition duration-300 inline-block">
              طلب استشارة أزياء المطاعم
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

export default function RestaurantsIndustryPageArabic() {
  const router = useRouter();
  const { locale } = router;
  
  const restaurantIndustryData = {
    title: "أزياء المطاعم وملابس الموظفين في المملكة العربية السعودية",
    subtitle: "ارتق بمستوى مطعمك مع أزياء مهنية ومريحة مصممة خصيصًا لمعايير المطاعم في المملكة العربية السعودية",
    heroImage: "/images/industries/hospitality/restaurant-staff.jpg",
    introduction: `
      في مشهد المطاعم التنافسي بالمملكة العربية السعودية، يُعد مظهر الموظفين عنصرًا حاسمًا في هوية العلامة التجارية لمطعمك.
      توفر يونيوم حلول أزياء متميزة ومخصصة للمطاعم في جميع أنحاء المملكة، من المطاعم العالمية الفاخرة إلى المطاعم المحلية المتخصصة.
      
      تجمع مجموعات أزياء المطاعم لدينا بين الأناقة المهنية والعملية، وهي مصممة خصيصًا لتلبية المتطلبات الفريدة لقطاع الضيافة في المملكة العربية السعودية.
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
        description: "دمج ألوان وشعارات وعناصر تصميم مطعمك لهوية متناسقة عبر جميع الموظفين."
      },
      {
        icon: "✓",
        title: "تقنية مقاومة البقع",
        description: "أقمشة متطورة بخصائص مقاومة للبقع مثالية لبيئة خدمة الطعام."
      }
    ],
    departments: [
      {
        name: "الصالة الأمامية",
        products: [
          {
            name: "أزياء طاقم خدمة الطاولات",
            image: "/images/industries/hospitality/waiter-uniform.jpg",
            description: "أزياء مهنية وموسومة بالعلامة التجارية للنوادل، المضيفين، وموظفي الصالة الأمامية تكمل الجمالية الخاصة بمطعمك.",
            link: "/ar/shop/hospitality/waitstaff-uniforms"
          },
          {
            name: "ملابس المدراء ورؤساء الخدمة",
            image: "/images/industries/hospitality/maitre-d-uniform.jpg",
            description: "ملابس رسمية ومميزة لطاقم الإدارة تنقل السلطة والاحترافية.",
            link: "/ar/shop/hospitality/management-uniforms"
          }
        ]
      },
      {
        name: "المطبخ والخدمات الخلفية",
        products: [
          {
            name: "أزياء الطهاة والطباخين",
            image: "/images/industries/hospitality/chef-uniform.jpg",
            description: "سترات وبناطيل وإكسسوارات طهي احترافية تلبي معايير السلامة والنظافة مع توفير الراحة.",
            link: "/ar/shop/hospitality/chef-uniforms"
          },
          {
            name: "ملابس طاقم دعم المطبخ",
            image: "/images/industries/hospitality/kitchen-staff-uniform.jpg",
            description: "أزياء عملية ومتينة لغسالي الصحون، وطهاة التحضير، ومساعدي المطبخ.",
            link: "/ar/shop/hospitality/kitchen-staff-uniforms"
          }
        ]
      },
      {
        name: "أنواع المطاعم المتخصصة",
        products: [
          {
            name: "أزياء المقاهي والمطاعم العادية",
            image: "/images/industries/hospitality/cafe-uniform.jpg",
            description: "أزياء مريحة ومهنية للمطاعم العادية والمقاهي.",
            link: "/ar/shop/hospitality/cafe-uniforms"
          },
          {
            name: "ملابس طاقم المطاعم الفاخرة",
            image: "/images/industries/hospitality/fine-dining-uniform.jpg",
            description: "أزياء أنيقة وراقية للمطاعم الفاخرة تعزز تجربة تناول الطعام الفاخرة.",
            link: "/ar/shop/hospitality/fine-dining-uniforms"
          }
        ]
      }
    ],
    fabricTechnologies: [
      {
        name: "تقنية StainGuard™",
        description: "معالجة خاصة للأقمشة تصد السوائل وتمنع البقع - مثالية لأزياء خدمة الطعام."
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
        text: "كانت أزياء المطاعم من يونيوم أساسية في رفع مستوى صورة علامتنا التجارية. يحب الموظفون الراحة، ويعلق عملاؤنا باستمرار على مدى احترافية مظهر فريقنا. التصاميم المخصصة للسعودية تتناسب تمامًا مع احتياجاتنا.",
        author: "عبدالله القحطاني",
        position: "المالك",
        company: "مجموعة بيت المندي للمطاعم، الرياض",
        logo: "/images/clients/bayt-al-mandi-logo.png"
      },
      {
        text: "متانة أزياء الطهاة من يونيوم قللت بشكل كبير من دورات الاستبدال لدينا. فهمهم للاحتياجات الخاصة للمطاعم السعودية - من الاعتبارات الثقافية إلى متطلبات المطبخ العملية - يجعلهم المزود الحصري للأزياء الموحدة لدينا.",
        author: "سارة جونسون",
        position: "الشيف التنفيذي",
        company: "المائدة الملكية، جدة",
        logo: "/images/clients/royal-table-logo.png"
      }
    ],
    ctaTitle: "ارتق بمظهر طاقم مطعمك",
    ctaDescription: "تواصل مع متخصصي أزياء المطاعم لدينا للحصول على استشارة مخصصة لمتطلبات مؤسستك المحددة.",
    ctaButtonText: "طلب استشارة أزياء المطاعم",
    ctaButtonUrl: "/ar/contact?industry=hospitality-restaurants"
  };

  return (
    <>
      <Head>
        <title>{restaurantIndustryData.title} | يونيوم</title>
        <meta 
          name="description" 
          content="أزياء مطاعم احترافية مصممة وفق معايير الضيافة في المملكة العربية السعودية. أزياء مخصصة لطاقم خدمة الطاولات، الطهاة، المدراء، وجميع أقسام المطعم." 
        />
        <meta 
          property="og:title" 
          content={restaurantIndustryData.title} 
        />
        <meta 
          property="og:description" 
          content="أزياء مطاعم احترافية مصممة وفق معايير الضيافة في المملكة العربية السعودية. أزياء مخصصة لجميع أدوار موظفي المطعم." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/restaurant-uniforms-saudi-ar.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/ar/industries/hospitality/restaurants" 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href="https://uneom.com/industries/hospitality/restaurants" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="ar" dir="rtl" />
      </Head>

      <main className="rtl">
        {/* Hero Section */}
        <HeroSection 
          title={restaurantIndustryData.title}
          subtitle={restaurantIndustryData.subtitle}
          image={restaurantIndustryData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">التميز في أزياء المطاعم في المملكة العربية السعودية</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{restaurantIndustryData.introduction}</p>
                <p className="mt-4">
                  مع سنوات من الخبرة في خدمة أفضل المطاعم في المملكة العربية السعودية، نتفهم المتطلبات الفريدة لصناعة خدمات الطعام في المملكة، من سلاسل المطاعم العالمية الفاخرة إلى المطاعم المحلية المتخصصة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">مزايا أزياء المطاعم من يونيوم</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {restaurantIndustryData.benefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">أزياء المطاعم حسب القسم</h2>
            
            {restaurantIndustryData.departments.map((department, deptIndex) => (
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
              {restaurantIndustryData.fabricTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">نحظى بثقة أفضل المطاعم في المملكة العربية السعودية</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {restaurantIndustryData.testimonials.map((testimonial, index) => (
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
            <h2 className="text-3xl font-bold mb-4">{restaurantIndustryData.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{restaurantIndustryData.ctaDescription}</p>
            <Link href={restaurantIndustryData.ctaButtonUrl} legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                {restaurantIndustryData.ctaButtonText}
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 