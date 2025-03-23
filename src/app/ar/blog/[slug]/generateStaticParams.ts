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
    { slug: 'evolving-trends-gulf-airline-uniforms' },
    { slug: 'uniforms-airline-brand-identity' },
    { slug: 'islamic-compliant-aviation-attire' }
  ];
} 