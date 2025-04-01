'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function RetailShopsPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const retailShopsData = {
    title: "Retail & Shopping Center Uniforms in Saudi Arabia",
    subtitle: "Professional, on-brand uniforms for Saudi Arabia's retail sector that enhance customer experience and brand image",
    heroImage: "/images/banner-placeholder.jpg",
    
    introduction: [
      "In Saudi Arabia's competitive retail landscape, staff uniforms play a crucial role in building brand identity, enhancing customer experience, and maintaining a professional environment. UNEOM provides high-quality retail uniforms that combine stylish designs with practical functionality for various retail environments.",
      
      "Our comprehensive retail uniform collection includes attire for mall staff, retail store employees, beauty salon professionals, and customer-facing roles across the shopping sector. Each uniform is designed to reflect your brand identity while providing comfort for staff who spend long hours on their feet serving customers.",
      
      "Understanding the unique requirements of Saudi retail businesses, we offer customization options that balance contemporary fashion with cultural considerations. From luxury boutiques to major shopping centers, our uniforms help establish a cohesive brand presence while creating a distinctive and professional appearance for your retail team."
    ],
    
    benefits: [
      {
        title: "Brand Enhancement",
        description: "Uniforms designed to reflect and reinforce your retail brand identity through customized colors, styling, and logo integration.",
        icon: "/icons/brand.svg"
      },
      {
        title: "Customer Recognition",
        description: "Distinctive uniforms that help customers easily identify staff members, improving service accessibility and shopping experience.",
        icon: "/icons/customer.svg"
      },
      {
        title: "Comfort for Long Shifts",
        description: "Ergonomic designs and breathable fabrics that keep retail staff comfortable during extended periods on the sales floor.",
        icon: "/icons/comfort.svg"
      },
      {
        title: "Professional Appearance",
        description: "Polished, well-designed uniforms that elevate the perception of your retail establishment and staff professionalism.",
        icon: "/icons/professional.svg"
      },
      {
        title: "Practical Functionality",
        description: "Thoughtful features like secure pockets, durable materials, and easy-care fabrics that withstand the demands of retail environments.",
        icon: "/icons/functional.svg"
      }
    ],
    
    products: [
      {
        id: "mall-staff-uniforms",
        name: "Mall Staff Uniforms",
        description: "Professional, comfortable uniforms for reception, customer service, and information desk staff at shopping malls and centers.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/retail-uniforms/mall-staff"
      },
      {
        id: "retail-store-uniforms",
        name: "Retail Store Uniforms",
        description: "Customizable attire for retail stores that combines brand identity with practical comfort for sales associates and floor staff.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/retail-uniforms/store-staff"
      },
      {
        id: "beauty-salon-uniforms",
        name: "Beauty Salon Uniforms",
        description: "Stylish, stain-resistant uniforms for beauty professionals that project sophistication while providing practical functionality.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/retail-uniforms/beauty-salon"
      },
      {
        id: "cashier-uniforms",
        name: "Cashier Uniforms",
        description: "Practical, professional attire for cashiers and point-of-sale staff with comfortable designs for long periods at checkout stations.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/retail-uniforms/cashiers"
      },
      {
        id: "sales-representative-uniforms",
        name: "Sales Representative Uniforms",
        description: "Professional uniforms that combine style with functionality for sales teams, featuring brand integration and comfortable designs.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/retail-uniforms/sales-representatives"
      },
      {
        id: "shopping-center-uniforms",
        name: "Shopping Center Employee Uniforms",
        description: "Coordinated uniform collections for entire shopping center staff, with variations for different roles while maintaining brand consistency.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/retail-uniforms/shopping-centers"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "Stain-Resistant Fabrics",
        description: "Advanced textiles that repel liquids and resist staining, maintaining a professional appearance throughout long retail shifts.",
        icon: "/icons/stain-resistant.svg"
      },
      {
        name: "Stretch Comfort Technology",
        description: "Flexible fabrics that move with the body, providing comfort for retail staff who are constantly in motion serving customers.",
        icon: "/icons/stretch-comfort.svg"
      },
      {
        name: "Easy-Care Materials",
        description: "Low-maintenance fabrics that resist wrinkles, maintain shape, and remain professional-looking even after multiple washes.",
        icon: "/icons/easy-care.svg"
      },
      {
        name: "Breathable Construction",
        description: "Ventilated designs and moisture-wicking properties that keep retail staff cool and comfortable in air-conditioned environments.",
        icon: "/icons/breathable.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Brand Color Integration",
        description: "Incorporate your exact brand colors into uniform designs for perfect brand alignment.",
        icon: "/icons/color-palette.svg"
      },
      {
        name: "Role Differentiation",
        description: "Subtle design variations to distinguish between different staff roles while maintaining overall brand cohesion.",
        icon: "/icons/role-differentiation.svg"
      },
      {
        name: "Logo Application",
        description: "Various options for logo placement, from embroidery to subtle prints, depending on your brand style guide.",
        icon: "/icons/logo-application.svg"
      },
      {
        name: "Seasonal Collections",
        description: "Adaptable uniform programs that can accommodate seasonal themes or promotional periods in retail.",
        icon: "/icons/seasonal.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM helped us create a uniform collection that perfectly represents our brand and has significantly improved our customer service recognition. The quality and design are exceptional.",
        author: "Sarah Al-Otaibi",
        position: "Retail Operations Manager",
        company: "Riyadh Fashion Group"
      },
      {
        id: "testimonial-2",
        quote: "Our mall staff uniforms from UNEOM have received numerous compliments from both visitors and employees. The attention to detail and comfort features make them perfect for our long operating hours.",
        author: "Fahad Al-Saud",
        position: "Customer Experience Director",
        company: "Kingdom Shopping Centers"
      }
    ],
    
    faq: [
      {
        question: "Can you match our specific brand colors exactly?",
        answer: "Yes, we use color-matching technology to precisely match your brand colors in both fabrics and accessories, ensuring perfect alignment with your visual identity guidelines."
      },
      {
        question: "How do you handle different departments in the same retail establishment?",
        answer: "We can create coordinated uniform collections with subtle variations (such as different colored accessories, trims, or styling details) to distinguish between departments while maintaining overall brand cohesion."
      },
      {
        question: "Are your retail uniforms suitable for modest dress requirements?",
        answer: "Absolutely. We design all our retail uniforms with Saudi cultural considerations in mind, offering modest options that comply with local dress expectations while still looking contemporary and professional."
      },
      {
        question: "Do you offer seasonal variations for retail campaigns?",
        answer: "Yes, we can design complementary accessories or uniform variations to accommodate seasonal promotions or special retail campaigns without requiring a complete uniform change."
      }
    ],
    
    cta: {
      title: "Elevate Your Retail Brand with Professional Uniforms",
      description: "Contact our retail uniform specialists to discuss how custom uniforms can enhance your brand presence and improve customer experience in your retail establishment.",
      buttonText: "Request Retail Uniform Consultation",
      buttonUrl: "/contact?industry=retail-shops"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={retailShopsData} skipMainLayout={true} />;
} 