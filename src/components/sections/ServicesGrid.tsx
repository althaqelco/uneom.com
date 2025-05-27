"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesGridProps {
  locale?: string;
  items?: ServiceItem[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ locale = 'en', items }) => {
  const content = {
    en: {
      title: "Our Distinguished Services",
      subtitle: "Comprehensive solutions for all your uniform and workwear needs",
      services: [
        {
          id: "custom-design",
          title: "Custom Uniform Design",
          description: "Bespoke uniform design services tailored to your brand identity and specific requirements",
          image: "/images/services/custom-design.jpg",
          link: "/services/custom-design"
        },
        {
          id: "fabric-selection",
          title: "Premium Fabric Selection",
          description: "High-quality fabrics sourced globally to ensure durability, comfort, and professional appearance",
          image: "/images/services/fabric-selection.jpg",
          link: "/services/fabric-selection"
        },
        {
          id: "manufacturing",
          title: "Expert Manufacturing",
          description: "State-of-the-art manufacturing processes ensuring consistent quality and timely delivery",
          image: "/images/services/manufacturing.jpg",
          link: "/services/manufacturing"
        }
      ]
    },
    ar: {
      title: "خدماتنا المميزة",
      subtitle: "حلول شاملة لجميع احتياجاتكم من الزي الموحد وملابس العمل",
      services: [
        {
          id: "custom-design",
          title: "تصميم الزي الموحد المخصص",
          description: "خدمات تصميم الزي الموحد المخصصة وفقاً لهوية علامتكم التجارية ومتطلباتكم الخاصة",
          image: "/images/services/custom-design.jpg",
          link: "/ar/services/custom-design"
        },
        {
          id: "fabric-selection",
          title: "اختيار الأقمشة المميزة",
          description: "أقمشة عالية الجودة مصدرها عالمي لضمان المتانة والراحة والمظهر المهني",
          image: "/images/services/fabric-selection.jpg",
          link: "/ar/services/fabric-selection"
        },
        {
          id: "manufacturing",
          title: "التصنيع المتخصص",
          description: "عمليات تصنيع متطورة تضمن جودة ثابتة وتسليم في الوقت المحدد",
          image: "/images/services/manufacturing.jpg",
          link: "/ar/services/manufacturing"
        }
      ]
    }
  };
  
  const isRTL = locale === 'ar';
  const text = locale === 'en' ? content.en : content.ar;
  const servicesToDisplay = items || text.services;
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-diagonal-pattern"></div>
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
          {servicesToDisplay.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl bg-white h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  {service.image.endsWith('.mp4') ? (
                    <video 
                      src={service.image}
                      className="object-cover w-full h-full group-hover:scale-110 transition duration-700 ease-in-out"
                      autoPlay={false}
                      muted
                      playsInline
                      loop
                    />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition duration-300"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white font-heading drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-neutral-700">{service.description}</p>
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

export default ServicesGrid; 