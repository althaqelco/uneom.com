import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Reusable components
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
          <Link href="/ar/contact?location=riyadh" legacyBehavior>
            <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-6 rounded-md text-lg transition duration-300 inline-block">
              طلب استشارة في الرياض
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
      <span className="text-primary-600 text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IndustryCard = ({ name, image, description, link }) => (
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

export default function RiyadhLocationPageArabic() {
  const router = useRouter();
  const { locale } = router;
  
  const riyadhData = {
    title: "الأزياء المهنية في الرياض",
    subtitle: "المزود الرائد في المملكة العربية السعودية للأزياء الموحدة المخصصة وملابس العمل للشركات الرائدة في الرياض",
    heroImage: "/images/locations/riyadh-skyline.jpg",
    introduction: `
      باعتبارها العاصمة النابضة بالحياة والمركز التجاري للمملكة العربية السعودية، تتطلب الرياض حلول ملابس عمل مهنية تتناسب مع مكانتها كمركز أعمال عالمي. يخدم مكتب يونيوم في الرياض احتياجات الزي الموحد وملابس العمل للصناعات المتنوعة في المدينة، من الرعاية الصحية والضيافة إلى القطاعات المؤسسية والصناعية.

      يتفهم فريق الرياض المتخصص لدينا التحديات والمتطلبات الفريدة للشركات العاملة في منطقة العاصمة، ويقدم حلولًا مخصصة تعكس التقاليد السعودية والمعايير الدولية.
    `,
    services: [
      {
        icon: "⚙️",
        title: "تصنيع أزياء موحدة مخصصة",
        description: "تصميم وإنتاج أزياء موحدة مخصصة مصممة خصيصًا لاحتياجات عملك في الرياض، وهوية علامتك التجارية، وثقافة الشركة."
      },
      {
        icon: "🚚",
        title: "التوصيل والخدمات اللوجستية في الرياض",
        description: "توصيل سريع وموثوق في جميع أنحاء الرياض والمنطقة الوسطى، مع خيارات التوصيل السريع للطلبات العاجلة داخل العاصمة."
      },
      {
        icon: "👕",
        title: "قياس وتجربة للموظفين",
        description: "خدمات قياس احترافية في موقع عملك في الرياض للحصول على قياسات دقيقة ومقاسات مثالية."
      },
      {
        icon: "✂️",
        title: "التعديلات والإصلاحات",
        description: "خدمة تعديلات وإصلاحات سريعة تضمن أن فريق الرياض الخاص بك يظهر دائمًا بمظهر احترافي."
      }
    ],
    industries: [
      {
        name: "أزياء الرعاية الصحية في الرياض",
        image: "/images/industries/healthcare/doctor-uniform.jpg",
        description: "أزياء طبية متخصصة لمستشفيات وعيادات ومرافق الرعاية الصحية الرائدة في الرياض، بما في ذلك مستشفى الملك فيصل التخصصي.",
        link: "/ar/industries/healthcare/medical"
      },
      {
        name: "ملابس مؤسسية لشركات الرياض",
        image: "/images/industries/corporate/business-attire.jpg",
        description: "أزياء موحدة مهنية للمؤسسات المالية والمكاتب الحكومية والشركات متعددة الجنسيات في مناطق الأعمال بالرياض.",
        link: "/ar/industries/corporate"
      },
      {
        name: "أزياء الضيافة في الرياض",
        image: "/images/industries/hospitality/hotel-staff.jpg",
        description: "أزياء فاخرة للفنادق والمطاعم لمؤسسات الضيافة الفاخرة في الرياض، مصممة للراحة في مناخ المملكة العربية السعودية.",
        link: "/ar/industries/hospitality/hotels"
      },
      {
        name: "ملابس العمل الصناعية للرياض",
        image: "/images/industries/industrial/worker-uniform.jpg",
        description: "ملابس عمل صناعية متينة للتصنيع والبناء وعمليات النفط والغاز في الرياض وما حولها.",
        link: "/ar/industries/industrial"
      }
    ],
    riyadhOffice: {
      address: "طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية",
      phone: "+966 11 123 4567",
      email: "riyadh@uneom.com",
      hours: "الأحد - الخميس: 8:30 صباحًا - 5:30 مساءً",
      mapImage: "/images/locations/riyadh-map.jpg",
      mapLink: "https://goo.gl/maps/riyadhOfficeLocation"
    },
    testimonials: [
      {
        text: "كانت يونيوم مزود الأزياء الموحدة الموثوق به لشبكة المستشفيات بأكملها في الرياض. إن فهمهم لمتطلبات الزي الطبي وقدرتهم على تقديم جودة متسقة عبر الطلبات الكبيرة جعلهم لا غنى عنهم لعملياتنا.",
        author: "د. محمد آل سعود",
        position: "مدير العمليات",
        company: "المركز الطبي الوطني، الرياض",
        logo: "/images/clients/national-medical-center-logo.png"
      },
      {
        text: "الأزياء المؤسسية التي صممتها يونيوم لمقر شركتنا الرئيسي في الرياض تمزج بشكل مثالي بين تقاليد الأعمال السعودية والاحترافية الحديثة. لقد أثار اهتمامهم بالتفاصيل والأقمشة عالية الجودة إعجاب عملائنا المحليين والدوليين.",
        author: "سارة الراشد",
        position: "مديرة الموارد البشرية",
        company: "مجموعة المدار المالية، الرياض",
        logo: "/images/clients/al-madar-group-logo.png"
      }
    ],
    keyProjects: [
      {
        name: "مركز الملك عبدالله المالي",
        description: "توفير أزياء موحدة مؤسسية للعديد من المؤسسات المالية في حي الأعمال الرئيسي في الرياض."
      },
      {
        name: "شركة مطارات الرياض",
        description: "توريد أزياء موحدة مخصصة للموظفين الذين يتعاملون مع العملاء في مطار الملك خالد الدولي."
      },
      {
        name: "موسم الرياض",
        description: "تصميم أزياء موحدة لطاقم الفعاليات لأكبر مهرجان ترفيهي في المملكة العربية السعودية في الرياض."
      }
    ],
    ctaTitle: "ارتق بعملك في الرياض مع أزياء مهنية",
    ctaDescription: "تواصل مع فريقنا في الرياض للحصول على استشارة مخصصة لاحتياجات عملك في العاصمة.",
    ctaButtonText: "تواصل مع مكتبنا في الرياض",
    ctaButtonUrl: "/ar/contact?location=riyadh"
  };

  return (
    <>
      <Head>
        <title>{riyadhData.title} | يونيوم</title>
        <meta 
          name="description" 
          content="مورد أزياء مهنية في الرياض، المملكة العربية السعودية. ملابس عمل مخصصة لقطاعات الرعاية الصحية والشركات والضيافة والصناعة في جميع أنحاء منطقة العاصمة." 
        />
        <meta 
          property="og:title" 
          content={riyadhData.title} 
        />
        <meta 
          property="og:description" 
          content="مورد أزياء مهنية في الرياض. ملابس عمل مخصصة للشركات في جميع أنحاء منطقة العاصمة." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/riyadh-uniforms-ar.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/ar/locations/riyadh" 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href="https://uneom.com/locations/riyadh" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="ar" dir="rtl" />
      </Head>

      <main className="rtl">
        {/* Hero Section */}
        <HeroSection 
          title={riyadhData.title}
          subtitle={riyadhData.subtitle}
          image={riyadhData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">يونيوم في الرياض</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{riyadhData.introduction}</p>
                <p className="mt-4">
                  مع موقع مكتبنا المركزي في الرياض، نقدم خدمة مريحة للشركات في جميع أنحاء منطقة العاصمة، من المراكز التجارية المزدحمة إلى المناطق الصناعية المتوسعة في أطراف المدينة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">خدماتنا في الرياض</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riyadhData.services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">القطاعات التي نخدمها في الرياض</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {riyadhData.industries.map((industry, index) => (
                <IndustryCard 
                  key={index}
                  name={industry.name}
                  image={industry.image}
                  description={industry.description}
                  link={industry.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Riyadh Office Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">زيارة مكتبنا في الرياض</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src={riyadhData.riyadhOffice.mapImage} 
                    alt="خريطة مكتب يونيوم في الرياض" 
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
                <a 
                  href={riyadhData.riyadhOffice.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  عرض على خرائط جوجل <span className="mr-1">←</span>
                </a>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">معلومات الاتصال</h3>
                  <p className="mb-2"><strong>العنوان:</strong> {riyadhData.riyadhOffice.address}</p>
                  <p className="mb-2"><strong>الهاتف:</strong> {riyadhData.riyadhOffice.phone}</p>
                  <p className="mb-2"><strong>البريد الإلكتروني:</strong> {riyadhData.riyadhOffice.email}</p>
                  <p className="mb-4"><strong>ساعات العمل:</strong> {riyadhData.riyadhOffice.hours}</p>
                  <div className="mt-6">
                    <Link href={riyadhData.ctaButtonUrl} legacyBehavior>
                      <a className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded inline-flex items-center">
                        اتصل بنا
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects in Riyadh */}
        <section className="py-16 bg-primary-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">مشاريع مميزة في الرياض</h2>
            <div className="max-w-4xl mx-auto">
              {riyadhData.keyProjects.map((project, index) => (
                <div key={index} className="bg-primary-700 p-6 rounded-lg mb-6 last:mb-0">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-primary-100">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">ماذا تقول شركات الرياض عنا</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {riyadhData.testimonials.map((testimonial, index) => (
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
            <h2 className="text-3xl font-bold mb-4">{riyadhData.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{riyadhData.ctaDescription}</p>
            <Link href={riyadhData.ctaButtonUrl} legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                {riyadhData.ctaButtonText}
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 