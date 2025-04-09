// This generates all possible static paths during build time for Arabic blog
export async function generateStaticParams() {
  // Define all possible blog post slugs for the Arabic version
  return [
    { slug: 'uniform-trends-2023' },
    { slug: 'sustainable-fabrics' },
    { slug: 'healthcare-uniforms-innovation' },
    { slug: 'corporate-identity-uniforms' },
    { slug: 'uniform-maintenance-tips' },
    { slug: 'aviation-uniform-design' },
    { slug: 'hotel-staff-uniforms' },
    { slug: 'security-uniform-standards' },
    { slug: 'uniform-customization' },
    { slug: 'medical-scrubs-evolution' },
    // Additional slugs to match the English version
    { slug: 'corporate-uniform-employee-satisfaction' },
    { slug: 'industrial-protective-clothing-advances' },
    { slug: 'sustainable-uniforms-2024-trends' },
    { slug: 'vision-2030-reshaping-dress-codes' },
    { slug: 'sustainable-uniform-solutions' },
    { slug: 'advanced-fabrics-healthcare-uniforms' },
    // Airline-related slugs
    { slug: 'evolving-trends-gulf-airline-uniforms' },
    { slug: 'uniforms-airline-brand-identity' },
    { slug: 'islamic-compliant-aviation-attire' },
    { slug: 'healthcare-uniforms-infection-control' },
    // Hospitality and corporate slugs
    { slug: 'hospitality-uniforms-cultural-identity' },
    { slug: 'corporate-uniform-psychology' },
    { slug: 'sustainable-uniforms' },
    { slug: 'healthcare-uniforms' },
    // School uniform related slugs
    { slug: 'cultural-identity-saudi-school-uniforms' },
    { slug: 'school-uniforms-academic-performance' },
    { slug: 'sustainable-school-uniforms-saudi' },
    // Industrial safety slug - Important!
    { slug: 'industrial-safety-compliance-guide' },
    { slug: 'hospitality-uniform-guide' },
    { slug: 'industrial-uniform-color-coding' },
    { slug: 'industrial-heat-stress-management' },
    { slug: 'industrial-electrostatic-protection' },
    { slug: 'security-uniform-psychology' },
    { slug: 'female-security-uniforms' },
    { slug: 'corporate-security-branding' },
    // Retail uniform related slugs
    { slug: 'retail-uniform-impact' },
    { slug: 'retail-uniform-selection-guide' },
    { slug: 'sustainable-retail-uniforms' },
    { slug: 'luxury-retail-uniforms' },
    { slug: 'evolution-of-retail-uniforms-saudi-arabia' },
    { slug: 'choosing-the-right-retail-uniforms' }
  ];
} 