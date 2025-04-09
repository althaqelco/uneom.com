import React from 'react';
import { Metadata } from 'next';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

// Enhanced SEO Metadata with more detailed keywords and descriptions
export const metadata: Metadata = {
  title: 'Premium Retail & Shopping Mall Uniforms in Saudi Arabia | Uneom',
  description: 'Elevate your brand with custom professional uniforms for shopping malls, retail stores & beauty salons. Enhance customer experience, boost sales & strengthen brand identity with a professional staff appearance in Riyadh, Jeddah & across KSA.',
  keywords: 'Saudi retail uniforms, shopping mall staff uniforms, mall employee uniforms, Riyadh retail uniforms, Jeddah beauty salon uniforms, professional retail appearance, Saudi retail sector uniforms, luxury retail brand uniforms, store staff uniforms, sales team uniform, uniform ROI, retail success in Saudi, retail staff identity solutions, branded workwear for retail, customer engagement uniforms',
  openGraph: {
    title: 'Premium Retail & Shopping Mall Uniforms in Saudi Arabia | Uneom',
    description: 'Elevate your brand with custom professional uniforms for shopping malls, retail stores & beauty salons. Enhance customer experience, boost sales & strengthen brand identity.',
    images: ['/images/industries/retail-shops/retail-shops-uniform-identity.jpg'],
    type: 'website',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Retail Uniforms in Saudi Arabia | Uneom',
    description: 'Elevate your brand with professional staff uniforms that enhance customer engagement, trust, and loyalty',
    images: ['/images/industries/retail-shops/retail-shops-uniform-identity.jpg'],
  },
  alternates: {
    canonical: 'https://uneom.com/industries/retail-shops',
    languages: {
      'ar': 'https://uneom.com/ar/industries/retail-shops',
    }
  }
};

export default function RetailShopsPage() {
  // Use English locale
  const locale = 'en';
  
  // Enhanced content for retail shops industry page with better visual layout and descriptions
  const retailShopsData = {
    title: "Premium Retail & Shopping Mall Uniforms in Saudi Arabia",
    subtitle: "Elevate your brand with professional uniforms that enhance customer engagement and drive sales",
    heroImage: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
    
    introduction: [
      "In Saudi Arabia's competitive retail landscape, your staff's appearance is a crucial element in brand differentiation and customer experience excellence. Uneom provides premium retail uniforms that combine contemporary design with practical functionality, helping your brand create a memorable shopping environment that enhances customer loyalty and sales.",
      
      "Our comprehensive uniform solutions are meticulously tailored for diverse retail environments—from luxury shopping malls and flagship stores to specialized boutiques and beauty centers in Riyadh, Jeddah, and all major Saudi cities. Each uniform is professionally designed to reflect your unique brand identity while ensuring staff comfort during extended customer interaction periods.",
      
      "With our deep understanding of Saudi retail sector requirements and Vision 2030 growth objectives, we offer innovative customization options that perfectly balance modern aesthetics with cultural sensitivity. Transform your retail brand presence with uniforms that embody professionalism, build customer confidence, and contribute to a cohesive shopping experience that drives business success."
    ],
    
    features: [
      {
        title: "Brand-Aligned Premium Design",
        description: "Each uniform is precision-designed to perfectly reflect your brand's visual identity, creating instant recognition and cohesion in your retail space.",
        icon: "/icons/institutional-branding.svg",
        animation: "fade-right",
        color: "bg-gradient-to-r from-indigo-500 to-purple-600"
      },
      {
        title: "Superior Comfort Technology",
        description: "Our retail uniforms incorporate advanced fabric technologies ensuring all-day comfort for staff working extended hours on sales floors, enhancing their performance and morale.",
        icon: "/icons/comfortflex.svg",
        animation: "fade-up",
        color: "bg-gradient-to-r from-blue-500 to-teal-400"
      },
      {
        title: "Cultural Sensitivity Integration",
        description: "Uniforms specifically designed for the Saudi market, balancing contemporary aesthetics with local cultural considerations to ensure appropriateness across all retail environments.",
        icon: "/icons/modest-modifications.svg",
        animation: "fade-left",
        color: "bg-gradient-to-r from-emerald-500 to-green-600"
      },
      {
        title: "Multi-Season Durability",
        description: "Premium materials that maintain their professional appearance through intensive daily use in demanding retail environments, providing excellent long-term return on investment.",
        icon: "/icons/duraseal.svg",
        animation: "fade-right",
        color: "bg-gradient-to-r from-amber-500 to-orange-600"
      }
    ],
    
    benefits: [
      {
        title: "Enhanced Brand Identity",
        description: "Custom-designed uniforms that perfectly align with your brand's visual identity and elevate customer perception of your business, creating an integrated brand experience.",
        icon: "/icons/institutional-branding.svg",
        gradient: "from-blue-500 to-indigo-600"
      },
      {
        title: "Exceptional Customer Experience",
        description: "Professional staff appearance builds instant trust and creates memorable customer service interactions that drive repeat business and positive word-of-mouth.",
        icon: "/icons/role-identification.svg",
        gradient: "from-green-500 to-emerald-600"
      },
      {
        title: "Staff Comfort & Performance",
        description: "Ergonomically designed uniforms with premium breathable fabrics enhance staff comfort and productivity during long retail hours, reducing fatigue and improving service quality.",
        icon: "/icons/comfortflex.svg",
        gradient: "from-purple-500 to-violet-600"
      },
      {
        title: "Instant Brand Recognition",
        description: "Distinctive and attractive uniforms help customers easily identify staff members, improving service accessibility and creating brand consistency across multiple locations or departments.",
        icon: "/icons/role-identification.svg",
        gradient: "from-pink-500 to-rose-600"
      },
      {
        title: "Superior Quality & Durability",
        description: "Premium materials and expert craftsmanship maintain professional appearance through intensive daily use in demanding retail environments, providing excellent cost-efficiency over time.",
        icon: "/icons/duraseal.svg",
        gradient: "from-amber-500 to-orange-600"
      }
    ],
    
    // Convert products to featuredProducts for proper rendering
    featuredProducts: [
      {
        id: "mall-staff-uniforms",
        name: "Luxury Mall Staff Uniforms",
        description: "Professional and distinctive attire for reception staff, customer service representatives, and information desks that enhances the mall's commercial image and creates an atmosphere of luxury and professionalism.",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
        href: "/shop/retail-uniforms/mall-staff",
        features: ["Perfect brand color integration", "All-day comfort design", "Distinctive professional appearance", "Multi-department coordination"],
        badge: "Best Seller",
        price: "From SAR 450"
      },
      {
        id: "retail-store-uniforms",
        name: "Custom Retail Store Uniforms",
        description: "Tailored uniforms that powerfully reflect your store's brand identity while ensuring staff comfort and practical functionality during busy shopping periods.",
        image: "/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg",
        href: "/shop/retail-uniforms/store-staff",
        features: ["Precise brand alignment", "Multiple style variations", "Premium material durability", "Seasonal adaptation options"],
        badge: "Popular Choice",
        price: "From SAR 350"
      },
      {
        id: "beauty-salon-uniforms",
        name: "Elegant Beauty Salon Uniforms",
        description: "Sophisticated yet practical uniforms that perfectly balance professional aesthetics with practical functionality for beauty professionals in Saudi Arabia's growing cosmetic service sector.",
        image: "/images/industries/retail-shops/retail-shops-uniform-2.jpg",
        href: "/shop/retail-uniforms/beauty-salon",
        features: ["Advanced stain-resistant fabric", "Contemporary design elements", "Easy maintenance", "Comfortable stretch materials"],
        badge: "Premium Quality",
        price: "From SAR 400"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "Premium Comfort Technology™",
        description: "A blend of advanced fabrics with moisture-wicking properties that provide unparalleled all-day comfort and breathability for retail staff in temperature-controlled environments.",
        icon: "/icons/comfortflex.svg",
        animation: "fade-right"
      },
      {
        name: "Advanced Stain Protection™",
        description: "Revolutionary fabric treatment that effectively repels liquids, resists stains, and maintains a crisp, professional appearance throughout challenging retail shifts.",
        icon: "/icons/duraseal.svg",
        animation: "fade-up"
      },
      {
        name: "Climate Control Fabric™",
        description: "Specialized fabric construction with adaptive properties that actively regulate temperature in diverse retail environments, from mall concourses to individual stores.",
        icon: "/icons/coolcore.svg",
        animation: "fade-left"
      },
      {
        name: "EcoFlex Sustainable Fabric™",
        description: "Environmentally responsible textiles that combine durability with sustainability, helping retail brands achieve environmental responsibility goals while maintaining a distinguished appearance.",
        icon: "/icons/biocare.svg",
        animation: "fade-up"
      }
    ],
    
    customizationOptions: [
      {
        name: "Precise Brand Integration",
        description: "Perfect Pantone color matching and expert logo application for seamless alignment with overall brand guidelines and marketing materials across all retail touchpoints.",
        icon: "/icons/institutional-branding.svg",
        gradient: "from-blue-400 to-blue-600"
      },
      {
        name: "Department Style Variations",
        description: "Carefully coordinated design options that precisely distinguish between different roles and departments while maintaining perfect brand consistency throughout the retail operation.",
        icon: "/icons/department-colors.svg",
        gradient: "from-purple-400 to-purple-600"
      },
      {
        name: "Strategic Seasonal Collections",
        description: "Forward-planning uniform programs that adapt to different seasons, special promotions, and retail campaigns while maintaining core brand identity elements.",
        icon: "/icons/coolcore.svg",
        gradient: "from-green-400 to-green-600"
      },
      {
        name: "Versatile Accessory Systems",
        description: "Diverse accessory components that can be added to or removed from core uniform pieces to accommodate different seasons, promotions, or retail zones while maintaining brand cohesion.",
        icon: "/icons/modest-modifications.svg",
        gradient: "from-amber-400 to-orange-500"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "Uneom has completely transformed our sales staff's appearance with uniforms that perfectly embody our luxury brand positioning. The quality, attention to detail, and positive impact on customer perception has exceeded our expectations. We've seen a notable increase in positive customer feedback since implementation.",
        author: "Sarah Al-Otaibi",
        position: "Operations Director",
        company: "Riyadh Luxury Mall",
        image: "/images/testimonials/sarah.jpg"
      },
      {
        id: "testimonial-2",
        quote: "The exceptional comfort and remarkable durability of Uneom's retail uniforms has significantly improved our staff's performance, confidence, and satisfaction. Our customers consistently comment on how professional our team looks, and our sales associates report feeling more confident and empowered in their customer interactions.",
        author: "Mohammed Al-Saud",
        position: "Retail Brand Manager",
        company: "Jeddah Premium Outlets",
        image: "/images/testimonials/mohammed.jpg"
      },
      {
        id: "testimonial-3",
        quote: "Working with Uneom allowed us to create distinctive, brand-aligned uniforms for our multiple retail locations. Their understanding of the Saudi retail environment ensures our staff uniforms balance modern aesthetics with cultural sensitivity. The result has been improved brand recognition and a more cohesive customer experience.",
        author: "Layla Al-Harbi",
        position: "Brand Director",
        company: "Fashion House Group",
        image: "/images/testimonials/layla.jpg"
      }
    ],
    
    stats: [
      {
        value: "96%",
        label: "Customer Satisfaction",
        description: "Our retail clients report exceptional satisfaction with both our uniform quality and service excellence."
      },
      {
        value: "+15",
        label: "Years Experience",
        description: "Supplying premium uniforms to the finest retail brands and shopping destinations in Saudi Arabia."
      },
      {
        value: "+250",
        label: "Retail Clients",
        description: "From luxury malls to specialized retailers, serving Saudi Arabia's diverse retail landscape."
      },
      {
        value: "+40,000",
        label: "Uniforms Supplied",
        description: "Annually to retail staff across Saudi Arabia, ensuring consistent brand representation."
      }
    ],
    
    // Convert relatedProducts to work with the component
    relatedContent: [
      {
        title: "The Impact of Professional Uniforms on Retail Success",
        description: "Discover how strategically designed uniforms can significantly boost sales, enhance customer experience, and strengthen brand loyalty in the Saudi retail sector",
        image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
        link: "/blog/retail-uniform-impact"
      },
      {
        title: "Choosing the Right Uniforms for Your Retail Team",
        description: "An expert guide to selecting uniforms that perfectly align with your brand strategy while optimizing staff performance and comfort in retail environments",
        image: "/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg",
        link: "/blog/retail-uniform-selection-guide"
      },
      {
        title: "Sustainable Retail Uniforms: The Future of Fashion",
        description: "How eco-friendly uniform solutions are transforming retail operations while supporting Saudi Vision 2030 sustainability goals",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg",
        link: "/blog/sustainable-retail-uniforms"
      }
    ],
    
    faqItems: [
      {
        question: "How does Uneom ensure perfect brand color accuracy in retail uniforms?",
        answer: "We use advanced Pantone color matching technology and implement rigorous quality control processes to ensure precise alignment with your brand colors across all uniform elements. Our experienced design team works directly with your brand guidelines to achieve perfect consistency, providing color samples for approval before production."
      },
      {
        question: "Can uniforms be customized for different store departments?",
        answer: "Yes, we specialize in creating coordinated uniform collections with strategic variations in design elements, color accents, or styling details to effectively distinguish between different departments while maintaining cohesive brand consistency throughout the retail operation. This enhances customer navigation while preserving overall brand identity."
      },
      {
        question: "What is the minimum order quantity for retail uniform collections?",
        answer: "Our minimum order quantities vary by product type, but we typically accommodate orders starting from 20 pieces per style. For larger retail operations, we offer tiered pricing structures that ensure cost-effectiveness with increasing quantities, with significant advantages for enterprise-level rollouts."
      },
      {
        question: "How long does it take to fulfill a custom retail uniform order?",
        answer: "Standard production time for custom retail uniforms is 4-6 weeks from design approval, with expedition options available for urgent requirements. For large-scale rollouts, we recommend an 8-10 week timeline to allow for comprehensive sampling and quality assurance. We provide detailed project timelines at the beginning of each contract."
      },
      {
        question: "Do you offer design consultation services for retail uniforms?",
        answer: "Absolutely. Our specialized retail uniform design team provides comprehensive consultation services, including brand analysis, retail environment assessment, and custom design development to create uniforms that perfectly align with your brand vision and operational requirements. This collaborative process ensures optimal outcomes for your unique retail context."
      },
      {
        question: "How do your retail uniforms address Saudi Arabian climate conditions?",
        answer: "Our retail uniforms feature fabrics and construction techniques specifically selected and optimized for Saudi Arabia's climate. We utilize breathable, moisture-wicking materials that maintain comfort in air-conditioned environments while providing appropriate coverage and professional appearance aligned with local cultural expectations."
      }
    ],
    
    cta: {
      title: "Elevate Your Brand with Premium Uniform Solutions",
      description: "Transform your retail brand presence with expertly designed and custom-tailored uniforms that enhance brand identity, boost staff confidence, and create exceptional customer experiences that drive sales and loyalty.",
      buttonText: "Request Your Free Consultation",
      buttonUrl: "/contact?industry=retail-shops",
      secondaryButton: {
        text: "Explore Retail Catalog",
        url: "/shop/retail-uniforms"
      },
      background: "bg-gradient-to-r from-indigo-600 to-purple-700"
    },
    
    animation: {
      enabled: true,
      heroFade: "fade-down",
      sectionFade: "fade-up",
      itemStagger: true
    }
  };

  return (
    <IndustryPageLayout 
      locale={locale} 
      industryData={retailShopsData} 
      skipMainLayout={true}
    />
  );
} 