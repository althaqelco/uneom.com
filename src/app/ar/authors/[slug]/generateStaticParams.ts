// This generates all possible static paths during build time for Arabic author pages
export async function generateStaticParams() {
  // Define all possible author slugs - keep the same as English for consistency
  return [
    { slug: 'john-doe' },
    { slug: 'jane-smith' },
    { slug: 'ahmed-abdullah' },
    { slug: 'sarah-johnson' },
    { slug: 'mohammed-al-farsi' },
    { slug: 'fatima-khan' },
    { slug: 'david-wilson' },
    { slug: 'layla-hassan' },
    { slug: 'omar-ibrahim' },
    { slug: 'nora-ahmed' },
  ];
} 