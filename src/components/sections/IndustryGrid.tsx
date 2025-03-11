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
          image: "/images/Healthcare_Uniforms.png",
          link: "/industries/healthcare"
        },
        {
          id: "aviation",
          title: "Aviation Uniforms",
          description: "Professional pilot and flight attendant uniforms for airlines",
          image: "/images/cheerful-flight-attendant-standing-outdoors-at-air-2023-11-27-05-13-43-utc.jpg",
          link: "/industries/aviation"
        },
        {
          id: "hospitality",
          title: "Hospitality Uniforms",
          description: "Elegant hotel staff and restaurant uniforms for all positions",
          image: "/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg",
          link: "/industries/hospitality"
        },
        {
          id: "corporate",
          title: "Corporate Uniforms",
          description: "Professional corporate workwear for office environments",
          image: "/images/Corporate_Uniforms_Business.png",
          link: "/industries/corporate"
        },
        {
          id: "education",
          title: "Education Uniforms",
          description: "School uniforms and staff attire for educational institutions",
          image: "/images/group-of-elementary-school-pupils-wearing-uniform-2024-10-19-12-09-06-utc.jpg",
          link: "/industries/education"
        },
        {
          id: "manufacturing",
          title: "Manufacturing Uniforms",
          description: "Durable industrial uniforms with safety features",
          image: "/images/ Industrial_Manufacturing_Uniforms .png",
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
          image: "/images/Healthcare_Uniforms.png",
          link: "/ar/industries/healthcare"
        },
        {
          id: "aviation",
          title: "أزياء الطيران",
          description: "أزياء مهنية للطيارين ومضيفي الطيران للخطوط الجوية",
          image: "/images/cheerful-flight-attendant-standing-outdoors-at-air-2023-11-27-05-13-43-utc.jpg",
          link: "/ar/industries/aviation"
        },
        {
          id: "hospitality",
          title: "أزياء الضيافة",
          description: "أزياء أنيقة لموظفي الفنادق والمطاعم لجميع المناصب",
          image: "/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg",
          link: "/ar/industries/hospitality"
        },
        {
          id: "corporate",
          title: "أزياء الشركات",
          description: "ملابس عمل احترافية للشركات في بيئات المكاتب",
          image: "/images/Corporate_Uniforms_Business.png",
          link: "/ar/industries/corporate"
        },
        {
          id: "education",
          title: "أزياء التعليم",
          description: "زي مدرسي وملابس للموظفين للمؤسسات التعليمية",
          image: "/images/group-of-elementary-school-pupils-wearing-uniform-2024-10-19-12-09-06-utc.jpg",
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
    <section className="py-20">
      <Container>
        {!items && (
          <SectionHeading
            centered
            subtitle={text.subtitle}
          >
            {text.title}
          </SectionHeading>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {industriesToDisplay.map((industry, index) => (
            <Link 
              href={industry.link} 
              key={index}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl bg-white h-full flex flex-col">
                <div className="relative h-64 w-full">
                  {industry.image.endsWith('.mp4') ? (
                    <video 
                      src={industry.image}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
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
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white font-heading">
                    {industry.title}
                  </h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-neutral-700">{industry.description}</p>
                  <div className={`mt-4 text-primary-600 font-medium flex items-center ${isRTL ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                    <span>{locale === 'en' ? 'Learn More' : 'اقرأ المزيد'}</span>
                    <svg
                      className={`h-5 w-5 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`}
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