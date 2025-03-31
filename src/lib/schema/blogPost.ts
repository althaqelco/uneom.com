/**
 * Generate BlogPosting schema for a single blog post
 */
export const generateBlogPostSchema = (post: any, locale: string) => {
  if (!post) return null;

  const baseUrl = 'https://uneom.com';
  const url = locale === 'en' 
    ? `${baseUrl}/blog/${post.slug}` 
    : `${baseUrl}/ar/blog/${post.slug}`;
  
  const author = typeof post.author === 'string' 
    ? { '@type': 'Person', name: post.author } 
    : { '@type': 'Person', name: post.author.name, image: post.author.avatar };

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.featuredImage}`,
    author,
    publisher: {
      '@type': 'Organization',
      name: 'UNEOM',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    keywords: post.tags ? post.tags.join(', ') : ''
  };
}; 