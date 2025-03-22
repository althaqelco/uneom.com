// Define static parameters for author pages
export function generateStaticParams() {
  const slugs = [
    'john-doe',
    'jane-smith',
    'ahmed-abdullah',
    'fatima-khan',
    'michael-johnson',
    'sarah-wilson',
    'ali-hassan',
    'maria-garcia',
    'david-miller',
    'nora-ahmed'
  ];

  const locales = ['en', 'ar'];
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({
      locale,
      slug
    }))
  );
} 