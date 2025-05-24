import { Metadata } from 'next';
import ProductDetail from '@/components/product/ProductDetail';
import { getProductById } from '@/lib/data/products';
import SeoSchema from '@/components/seo/SeoSchema';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Beauty Salon Uniforms | Professional Salon Attire Saudi Arabia | UNEOM',
  description: 'Stylish and practical beauty salon uniforms designed for Saudi Arabian salons and spas. Fashion-forward designs that project professionalism while offering practical features for salon professionals in Riyadh, Jeddah, and across KSA.',
  openGraph: {
    title: 'Beauty Salon Uniforms | Professional Salon Attire Saudi Arabia | UNEOM',
    description: 'Stylish and practical beauty salon uniforms designed for Saudi Arabian salons and spas. Fashion-forward designs with practical features for salon professionals.',
    images: ['/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg'],
    url: 'https://uneom.com/shop/retail-uniforms/beauty-salon',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/beauty-salon',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/beauty-salon',
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/beauty-salon',
    },
  },
  keywords: 'beauty salon uniforms Saudi Arabia, spa staff attire KSA, professional salon uniforms Riyadh, salon employee clothing, Saudi beauty industry uniforms, spa therapist uniforms, salon stylist attire Jeddah',
};

export default function BeautySalonPage() {
  const product = getProductById('beauty-salon');
  
  // Enhanced product data for this specific page
  const enhancedProduct = product ? {
    ...product,
    detailedFeatures: [
      {
        title: "Fashion-Forward Design",
        description: "Our beauty salon attire combines contemporary fashion trends with professional functionality, creating distinctive uniforms that enhance your salon's brand image in Saudi Arabia's growing beauty industry.",
        image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg"
      },
      {
        title: "Beauty Product Resistance",
        description: "All salon uniforms feature specialized fabric treatments that resist staining from hair dyes, beauty products, and chemicals commonly used in Saudi salon environments, maintaining a professional appearance throughout the day.",
        image: "/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg"
      },
      {
        title: "Comfort Engineering",
        description: "Designed specifically for the physical demands of beauty professionals, our salon uniforms incorporate stretch panels, ergonomic cuts, and breathable fabrics that enhance comfort during long salon shifts.",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop-education.jpg"
      },
      {
        title: "Saudi-Appropriate Styling",
        description: "Our beauty salon uniforms respect Saudi cultural considerations while maintaining fashion-forward design, with modest yet contemporary styling options suitable for diverse salon staff throughout the Kingdom.",
        image: "/images/portrait-of-two-muslim-women-with-covid-mask-in-dubai.jpg"
      }
    ],
    testimonials: [
      {
        quote: "UNEOM's beauty salon uniforms perfectly balance style with practicality. Our stylists appreciate the stain-resistant features and comfortable design, while clients notice the professional, fashion-forward appearance that aligns with our premium salon brand.",
        author: "Huda Al-Farsi",
        position: "Salon Owner",
        company: "Luxury Beauty Salon, Jeddah"
      },
      {
        quote: "After trying multiple uniform suppliers, we've exclusively partnered with UNEOM for all our salon locations. Their understanding of Saudi beauty industry needs is unmatched, creating perfectly adapted uniforms that enhance our brand identity.",
        author: "Mai Al-Otaibi",
        position: "Operations Director",
        company: "Beauty Salon Chain, KSA"
      }
    ],
    certifications: [
      "Beauty Industry Comfort Standard",
      "Advanced Stain Resistance",
      "Color Retention Guarantee",
      "Saudi Quality Mark"
    ],
    relatedCaseStudies: [
      {
        title: "Luxury Salon Brand Evolution",
        description: "How a premium beauty salon enhanced their brand perception through professionally designed staff attire",
        link: "/case-studies/luxury-salon-evolution"
      },
      {
        title: "Beauty Chain Standardization",
        description: "Creating consistent, fashionable staff appearance across 20+ salon locations throughout Saudi Arabia",
        link: "/case-studies/beauty-chain-standardization"
      }
    ],
    callToAction: {
      primary: {
        text: "Request Custom Salon Quote",
        link: "/contact?product=beauty-salon"
      },
      secondary: {
        text: "Download Beauty Salon Guide",
        link: "/resources/beauty-salon-uniform-guide"
      }
    }
  } : null;

  if (!enhancedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <main className="bg-white pb-24">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beauty Salon Uniforms | Professional Salon Attire Saudi Arabia</h1>
      
      <div className="container mx-auto px-4">
        <ProductDetail product={enhancedProduct} />
        <SeoSchema 
          type="Product"
          name="Beauty Salon Attire"
          description="Stylish and practical uniforms for beauty and salon professionals in Saudi Arabia, combining fashion-forward design with functionality."
          image="/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg"
          price="329"
          currency="SAR"
          availability="InStock"
          brand="UNEOM"
          reviewCount={42}
          ratingValue={4.8}
        />
      </div>
    </main>
  );
} 