"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface IndustryGridProps {
  locale?: string;
  items?: IndustryItem[];
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ locale = 'en', items }) => {
  const content = {
    en: {
      title: "Specialized Uniform Solutions for Every Industry",
      subtitle: "Tailored workwear designed to meet the unique needs of your sector",
      industries: [
        {
          id: "healthcare",
          title: "Healthcare Uniforms",
          description: "Medical scrubs and healthcare attire with antimicrobial fabrics",
          image: "/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg",
          link: "/industries/healthcare"
        },
        {
          id: "aviation",
          title: "Aviation Uniforms",
          description: "Professional pilot and flight attendant uniforms for airlines",
          image: "/images/categories/two-beautiful-stewardesses-and-an-airman-staring-a-2024-10-21-02-06-10-utc.jpg",
          link: "/industries/aviation"
        },
        {
          id: "hospitality",
          title: "Hospitality & Culinary Uniforms",
          description: "Elegant chef, hotel staff and restaurant uniforms for all positions",
          image: "/images/categories/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg",
          link: "/industries/hospitality"
        },
        {
          id: "corporate",
          title: "Corporate & Delivery Uniforms",
          description: "Professional corporate workwear and delivery service attire",
          image: "/images/categories/a-delivery-person-dressed-in-a-red-polo-and-cap-shows-approval-with-a-thumbs-up-while--SBI-350024443.jpg",
          link: "/industries/corporate"
        },
        {
          id: "education",
          title: "Education Uniforms",
          description: "School uniforms and staff attire for educational institutions",
          image: "/images/categories/schoolgirl-with-blood-type-sticker-at-school-ukrainian-war-concept-SBI-351317058.jpg",
          link: "/industries/education"
        },
        {
          id: "manufacturing",
          title: "Manufacturing & Industrial Uniforms",
          description: "Durable industrial uniforms with safety features",
          image: "/images/categories/ Industrial_Manufacturing_Uniforms .png",
          link: "/industries/manufacturing"
        }
      ]
    },
    ar: {
      title: "حلول زي موحد متخصصة لكل صناعة",
      subtitle: "ملابس عمل مصممة خصيصًا لتلبية الاحتياجات الفريدة لقطاعك",
      industries: [
        {
          id: "healthcare",
          title: "أزياء الرعاية الصحية",
          description: "ملابس طبية وأزياء رعاية صحية بأقمشة مضادة للميكروبات",
          image: "/images/product-placeholder.jpg",
          link: "/ar/industries/healthcare"
        },
        {
          id: "aviation",
          title: "أزياء الطيران",
          description: "أزياء مهنية للطيارين ومضيفي الطيران للخطوط الجوية",
          image: "/images/default-placeholder.jpg",
          link: "/ar/industries/aviation"
        },
        {
          id: "hospitality",
          title: "أزياء الضيافة",
          description: "أزياء أنيقة لموظفي الفنادق والمطاعم لجميع المناصب",
          image: "/images/default-placeholder.jpg",
          link: "/ar/industries/hospitality"
        },
        {
          id: "corporate",
          title: "أزياء الشركات",
          description: "ملابس عمل احترافية للشركات في بيئات المكاتب",
          image: "/images/product-placeholder.jpg",
          link: "/ar/industries/corporate"
        },
        {
          id: "education",
          title: "أزياء التعليم",
          description: "زي مدرسي وملابس للموظفين للمؤسسات التعليمية",
          image: "/images/product-placeholder.jpg",
          link: "/ar/industries/education"
        },
        {
          id: "manufacturing",
          title: "أزياء التصنيع",
          description: "أزياء صناعية متينة مع ميزات السلامة",
          image: "/images/ Industrial_Manufacturing_Uniforms .png",
          link: "/ar/industries/manufacturing"
        }
      ]
    }
  };
  
  const isRTL = locale === 'ar';
  const text = locale === 'en' ? content.en : content.ar;
  const industriesToDisplay = items || text.industries;
  
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      <Container>
        {!items && (
          <SectionHeading
            centered
            subtitle={text.subtitle}
          >
            {text.title}
          </SectionHeading>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10">
          {industriesToDisplay.map((industry, index) => (
            <Link 
              href={industry.link} 
              key={index}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl bg-white h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  {industry.image.endsWith('.mp4') ? (
                    <video 
                      src={industry.image}
                      className="object-cover w-full h-full group-hover:scale-110 transition duration-700 ease-in-out"
                      autoPlay={false}
                      muted
                      playsInline
                      loop
                    />
                  ) : (
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition duration-300"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white font-heading drop-shadow-md">
                    {industry.title}
                  </h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-neutral-700">{industry.description}</p>
                  <div className={`mt-4 text-primary-600 font-medium flex items-center ${isRTL ? 'justify-start flex-row-reverse' : 'justify-end'} group-hover:text-primary-700 transition-colors duration-300`}>
                    <span>{locale === 'en' ? 'Learn More' : 'اقرأ المزيد'}</span>
                    <svg
                      className={`h-5 w-5 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustryGrid; 