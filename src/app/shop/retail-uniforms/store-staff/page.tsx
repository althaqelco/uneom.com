import { Metadata } from 'next';
import ProductDetail from '@/components/product/ProductDetail';
import { getProductById } from '@/lib/data/products';
import SeoSchema from '@/components/seo/SeoSchema';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Store Staff Uniforms | Retail Employee Attire Saudi Arabia | UNEOM',
  description: 'Professional store staff uniforms designed for Saudi retail environments. Comfortable, brand-appropriate attire for retail employees across Riyadh, Jeddah, and KSA. Customizable designs that enhance your brand perception.',
  openGraph: {
    title: 'Store Staff Uniforms | Retail Employee Attire Saudi Arabia | UNEOM',
    description: 'Professional store staff uniforms designed for Saudi retail environments. Comfortable, brand-appropriate attire for retail employees across KSA.',
    images: ['/images/industries/retail-shops/retail-shops-uniform-2.jpg'],
    url: 'https://uneom.com/shop/retail-uniforms/store-staff',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/store-staff',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/store-staff',
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/store-staff',
    },
  },
  keywords: 'store staff uniforms Saudi Arabia, retail employee attire KSA, professional store uniforms Riyadh, retail sales staff clothing, Saudi retail brand uniforms, shop employee uniforms, mall retail staff clothing Jeddah',
};

export default function StoreStaffPage() {
  const product = getProductById('store-staff');
  
  // Enhanced product data for this specific page
  const enhancedProduct = product ? {
    ...product,
    detailedFeatures: [
      {
        title: "Brand-Aligned Styling",
        description: "Our store staff uniforms are designed to be a natural extension of your brand identity, reinforcing your retail presence through consistent visual representation across all customer touchpoints.",
        image: "/images/industries/retail-shops/retail-shops-uniform-2.jpg"
      },
      {
        title: "All-Day Comfort",
        description: "Engineered specifically for the demands of retail sales environments in Saudi Arabia, with breathable fabrics and strategic design elements that ensure comfort during long shifts on the sales floor.",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg"
      },
      {
        title: "Practical Durability",
        description: "Superior fabric selection and construction methods provide outstanding durability and appearance retention, even with daily wear in high-traffic Saudi retail environments.",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop-industery.jpg"
      },
      {
        title: "Cultural Adaptability",
        description: "Store staff uniforms designed with Saudi cultural considerations in mind, featuring modest yet contemporary styling options suitable for diverse retail staff throughout the Kingdom.",
        image: "/images/portrait-of-young-female-arab-with-covered-head-walking-on-street-near-temple-muslim-w-SBI-349947081.jpg"
      }
    ],
    testimonials: [
      {
        quote: "UNEOM's store staff uniforms have become a key component of our brand strategy. The quality, design, and durability perfectly match our retail needs, while the cultural adaptability ensures all our staff feel comfortable and professional.",
        author: "Saleh Al-Qadi",
        position: "Retail Operations Manager",
        company: "National Retail Chain, KSA"
      },
      {
        quote: "The practicality of these uniforms combined with their professional appearance has greatly improved our staff's performance and morale. Our customers now easily identify our team members across all departments.",
        author: "Layla Al-Doussari",
        position: "Store Director",
        company: "Retail Group, Riyadh"
      }
    ],
    certifications: [
      "Retail Comfort Certification",
      "Enhanced Durability Standard",
      "Color Retention Guarantee",
      "Saudi Quality Mark"
    ],
    relatedCaseStudies: [
      {
        title: "Nationwide Retail Branding",
        description: "How a major retail chain unified their visual identity across 45+ locations with UNEOM's store staff uniforms",
        link: "/case-studies/nationwide-retail-branding"
      },
      {
        title: "Retail Brand Transformation",
        description: "Elevating brand perception through professional store staff attire in a competitive retail market",
        link: "/case-studies/retail-brand-transformation"
      }
    ],
    callToAction: {
      primary: {
        text: "Request Custom Quote",
        link: "/contact?product=store-staff"
      },
      secondary: {
        text: "Download Retail Uniform Guide",
        link: "/resources/retail-uniform-guide"
      }
    }
  } : null;

  if (!enhancedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <main className="bg-white pb-24">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Store Staff Uniforms | Retail Employee Attire Saudi Arabia</h1>
      
      <div className="container mx-auto px-4">
        <ProductDetail product={enhancedProduct} />
        <SeoSchema 
          type="Product"
          name="Store Staff Uniforms"
          description="Practical and stylish uniforms for general retail store staff across Saudi Arabia, combining functionality with brand-appropriate styling."
          image="/images/industries/retail-shops/retail-shops-uniform-2.jpg"
          price="299"
          currency="SAR"
          availability="InStock"
          brand="UNEOM"
          reviewCount={38}
          ratingValue={4.6}
        />
      </div>
    </main>
  );
} 