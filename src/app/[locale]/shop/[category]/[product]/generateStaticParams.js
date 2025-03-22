// Define static parameters for product pages
export function generateStaticParams() {
  const products = [
    { category: 'healthcare', product: 'medical-scrubs' },
    { category: 'healthcare', product: 'lab-coats' },
    { category: 'healthcare', product: 'nurse-uniforms' },
    { category: 'healthcare', product: 'advanced-medical-scrubs' },
    { category: 'medical-scrubs', product: 'premium-scrubs-set' },
    { category: 'medical-scrubs', product: 'antimicrobial-scrubs' },
    { category: 'medical-scrubs', product: 'premium-medical-scrubs' },
    { category: 'medical-scrubs', product: 'executive-medical-uniforms' },
    { category: 'medical-scrubs', product: 'medical-lab-coats' },
    { category: 'medical-scrubs', product: 'nursing-scrubs' },
    { category: 'medical-scrubs', product: 'premium-surgical-gowns' },
    { category: 'medical-scrubs', product: 'surgical-scrubs' },
    { category: 'aviation-uniforms', product: 'airline-crew-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform' },
    { category: 'corporate-workwear', product: 'executive-suit' },
    { category: 'hospitality-attire', product: 'luxury-hotel-uniform' },
    { category: 'hospitality-attire', product: 'premium-hotel-uniforms' },
    { category: 'hospitality-attire', product: 'housekeeping-uniform' },
    { category: 'industrial-uniforms', product: 'industrial-coverall' },
    { category: 'industrial-uniforms', product: 'industrial-coverall-pro' },
    { category: 'security-uniforms', product: 'security-officer-uniform' },
    { category: 'workplace-uniforms', product: 'executive-suits' },
    { category: 'education-uniforms', product: 'premium-school-uniforms' }
  ];

  const locales = ['en', 'ar'];
  
  return locales.flatMap(locale => 
    products.map(({ category, product }) => ({
      locale,
      category,
      product
    }))
  );
} 