import ClientPage from './ClientPage';

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

// This generates all possible static paths during build time
export async function generateStaticParams() {
  // Define all possible categories and products
  return [
    { category: 'medical-scrubs', product: 'premium-scrubs-set' },
    { category: 'medical-scrubs', product: 'antimicrobial-scrubs' },
    { category: 'medical-scrubs', product: 'premium-medical-scrubs' },
    { category: 'medical-scrubs', product: 'surgical-scrubs' },
    { category: 'medical-scrubs', product: 'nursing-scrubs' },
    { category: 'medical-scrubs', product: 'executive-medical-uniforms' },
    { category: 'medical-scrubs', product: 'medical-lab-coats' },
    { category: 'medical-scrubs', product: 'premium-surgical-gowns' },
    { category: 'medical-scrubs', product: 'executive-medical-uniform' },
    { category: 'medical-scrubs', product: 'medical-lab-coat' },
    { category: 'medical-scrubs', product: 'professional-lab-coat' },
    { category: 'aviation-uniforms', product: 'airline-crew-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform-set' },
    { category: 'aviation-uniforms', product: 'flight-attendant-dress' },
    { category: 'aviation-uniforms', product: 'aviation-blazer' },
    { category: 'aviation-uniforms', product: 'ground-crew-uniform' },
    { category: 'aviation-uniforms', product: 'airline-service-vest' },
    { category: 'hospitality-attire', product: 'luxury-hotel-uniform' },
    { category: 'hospitality-attire', product: 'premium-hotel-uniforms' },
    { category: 'hospitality-attire', product: 'housekeeping-uniform' },
    { category: 'hospitality-attire', product: 'concierge-uniform' },
    { category: 'hospitality-attire', product: 'reception-staff-uniform' },
    { category: 'hospitality-attire', product: 'restaurant-staff-uniform' },
    { category: 'hospitality-attire', product: 'resort-staff-attire' },
    { category: 'industrial-uniforms', product: 'industrial-coverall' },
    { category: 'industrial-uniforms', product: 'industrial-coverall-pro' },
    { category: 'corporate-workwear', product: 'executive-suit' },
    { category: 'security-uniforms', product: 'security-officer-uniform' },
    { category: 'security-uniforms', product: 'tactical-security-uniforms' },
    { category: 'corporate', product: 'executive-office-attire' },
    { category: 'culinary-uniforms', product: 'executive-chef-coat' },
    { category: 'manufacturing-attire', product: 'industrial-protective-uniforms' },
    { category: 'education-uniforms', product: 'premium-school-uniforms' },
    { category: 'workplace-uniforms', product: 'executive-suits' },
  ];
}

export default function ProductDetailPage({ params }: PageProps) {
  return <ClientPage params={params} />;
} 