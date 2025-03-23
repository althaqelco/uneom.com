// This generates all possible static paths during build time for Arabic shop products
export async function generateStaticParams() {
  // Define all possible category and product combinations for the Arabic version
  return [
    { category: 'healthcare', product: 'medical-scrubs' },
    { category: 'healthcare', product: 'lab-coats' },
    { category: 'healthcare', product: 'nurse-uniforms' },
    { category: 'corporate', product: 'business-suits' },
    { category: 'corporate', product: 'office-attire' },
    { category: 'corporate', product: 'executive-wear' },
    { category: 'hospitality', product: 'hotel-staff-uniforms' },
    { category: 'hospitality', product: 'restaurant-uniforms' },
    { category: 'hospitality', product: 'chef-uniforms' },
    { category: 'industrial', product: 'factory-workwear' },
    { category: 'industrial', product: 'safety-uniforms' },
    { category: 'industrial', product: 'construction-uniforms' },
    { category: 'security', product: 'security-guard-uniforms' },
    { category: 'security', product: 'surveillance-uniforms' },
    { category: 'security', product: 'event-security-uniforms' },
    // Aviation category products
    { category: 'aviation-uniforms', product: 'airline-crew-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform-set' },
    { category: 'aviation-uniforms', product: 'ground-crew-uniform' },
  ];
} 