// Define static parameters for blog post pages
export function generateStaticParams() {
  const slugs = [
    'uniform-trends-2023',
    'sustainable-fabrics',
    'healthcare-uniforms-innovation',
    'corporate-uniform-guide',
    'hospitality-uniform-best-practices',
    'security-uniforms-2023',
    'education-uniforms-guide',
    'industrial-workwear-innovations',
    'uniform-maintenance-tips',
    'custom-uniform-design-process',
    'sustainable-retail-uniforms',
    'retail-uniform-impact',
    'evolution-of-retail-uniforms-saudi-arabia',
    'luxury-retail-uniforms',
    'hospital-uniform-safety-standards',
    'airline-uniform-design-cultural-identity',
    'sustainable-uniforms-2024-trends',
    'school-uniforms-academic-performance',
    'sustainable-school-uniforms-saudi'
  ];

  const locales = ['en', 'ar'];
  
  // Filter out any slugs that might look like image paths
  const filteredSlugs = slugs.filter(slug => 
    !slug.includes('.jpg') && 
    !slug.includes('.jpeg') && 
    !slug.includes('.png') && 
    !slug.includes('.svg') && 
    !slug.includes('.webp') &&
    !slug.includes('/images/') &&
    !slug.includes('/icons/')
  );
  
  return locales.flatMap(locale => 
    filteredSlugs.map(slug => ({
      locale,
      slug
    }))
  );
} 