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
    'custom-uniform-design-process'
  ];

  const locales = ['en', 'ar'];
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({
      locale,
      slug
    }))
  );
} 