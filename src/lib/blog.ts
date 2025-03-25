// Blog post interfaces
export interface Author {
  name: string;
  image?: string;
  bio?: string;
  title?: string; // Added to support title in newer posts
}

export interface BlogPostBase {
  slug: string;
  title: string;
  content: string;
}

export interface LegacyBlogPost extends BlogPostBase {
  date: string;
  excerpt?: string;
  coverImage?: string;
  author?: Author;
  categories: string[];
  arabicSlug?: string;
}

export interface ArabicBlogPost extends BlogPostBase {
  date: string;
  excerpt?: string;
  coverImage?: string;
  author?: Author;
  categories: string[];
  englishSlug?: string;
}

// Enhanced blog post interface with additional SEO fields
export interface EnhancedBlogPost extends BlogPostBase {
  description: string;
  imageUrl: string;
  publishDate: string;
  author: {
    name: string;
    image: string;
    title: string;
  };
  category: string;
  tags: string[];
}

// Type alias for current blog post implementation
export type BlogPost = EnhancedBlogPost;

// Mock function to get an English blog post by slug (legacy format)
// In a real implementation, this would fetch from an API or database
export async function getBlogPost(slug: string): Promise<LegacyBlogPost | null> {
  // This is a placeholder - would be replaced with actual API calls
  // Example implementation:
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Placeholder data
  const posts: Record<string, LegacyBlogPost> = {
    'healthcare-uniform-trends-2023': {
      slug: 'healthcare-uniform-trends-2023',
      title: 'Healthcare Uniform Trends for 2023',
      date: '2023-04-15',
      excerpt: 'Discover the latest trends in healthcare uniforms that combine functionality, comfort, and professional appearance.',
      content: '# Healthcare Uniform Trends for 2023\n\nLorem ipsum dolor sit amet...',
      coverImage: '/images/blog/healthcare-trends.jpg',
      author: {
        name: 'Sarah Johnson',
        image: '/images/authors/sarah.jpg',
        bio: 'Healthcare uniform specialist with 10 years of industry experience',
      },
      categories: ['Healthcare', 'Trends', 'Uniform Design'],
      arabicSlug: 'اتجاهات-يونيفورم-الرعاية-الصحية-2023',
    },
    // Additional posts would be defined here
  };
  
  return posts[slug] || null;
}

// Mock function to get an Arabic blog post by slug
export async function getArabicBlogPost(slug: string): Promise<ArabicBlogPost | null> {
  // This is a placeholder - would be replaced with actual API calls
  // Example implementation:
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Placeholder data
  const posts: Record<string, ArabicBlogPost> = {
    'اتجاهات-يونيفورم-الرعاية-الصحية-2023': {
      slug: 'اتجاهات-يونيفورم-الرعاية-الصحية-2023',
      title: 'اتجاهات يونيفورم الرعاية الصحية لعام 2023',
      date: '2023-04-15',
      excerpt: 'اكتشف أحدث اتجاهات يونيفورم الرعاية الصحية التي تجمع بين الوظائف العملية والراحة والمظهر المهني.',
      content: '# اتجاهات يونيفورم الرعاية الصحية لعام 2023\n\nلوريم إيبسوم دولور سيت أميت...',
      coverImage: '/images/blog/healthcare-trends.jpg',
      author: {
        name: 'سارة جونسون',
        image: '/images/authors/sarah.jpg',
        bio: 'متخصصة في يونيفورم الرعاية الصحية مع 10 سنوات من الخبرة في الصناعة',
      },
      categories: ['الرعاية الصحية', 'الاتجاهات', 'تصميم اليونيفورم'],
      englishSlug: 'healthcare-uniform-trends-2023',
    },
    // Additional posts would be defined here
  };
  
  return posts[slug] || null;
}

// Function to get all blog posts for listings (legacy format)
export async function getAllLegacyBlogPosts(): Promise<LegacyBlogPost[]> {
  // In real implementation, fetch from API/database
  // Placeholder data
  return [
    {
      slug: 'healthcare-uniform-trends-2023',
      title: 'Healthcare Uniform Trends for 2023',
      date: '2023-04-15',
      excerpt: 'Discover the latest trends in healthcare uniforms that combine functionality, comfort, and professional appearance.',
      content: '# Healthcare Uniform Trends for 2023\n\nLorem ipsum dolor sit amet...',
      coverImage: '/images/blog/healthcare-trends.jpg',
      author: {
        name: 'Sarah Johnson',
        image: '/images/authors/sarah.jpg',
      },
      categories: ['Healthcare', 'Trends', 'Uniform Design'],
      arabicSlug: 'اتجاهات-يونيفورم-الرعاية-الصحية-2023',
    },
    // Additional sample posts would be defined here
  ];
}

// Function to get all Arabic blog posts for listings
export async function getAllArabicBlogPosts(): Promise<ArabicBlogPost[]> {
  // In real implementation, fetch from API/database
  // Placeholder data
  return [
    {
      slug: 'اتجاهات-يونيفورم-الرعاية-الصحية-2023',
      title: 'اتجاهات يونيفورم الرعاية الصحية لعام 2023',
      date: '2023-04-15',
      excerpt: 'اكتشف أحدث اتجاهات يونيفورم الرعاية الصحية التي تجمع بين الوظائف العملية والراحة والمظهر المهني.',
      content: '# اتجاهات يونيفورم الرعاية الصحية لعام 2023\n\nلوريم إيبسوم دولور سيت أميت...',
      coverImage: '/images/blog/healthcare-trends.jpg',
      author: {
        name: 'سارة جونسون',
        image: '/images/authors/sarah.jpg',
      },
      categories: ['الرعاية الصحية', 'الاتجاهات', 'تصميم اليونيفورم'],
      englishSlug: 'healthcare-uniform-trends-2023',
    },
    // Additional sample posts would be defined here
  ];
}

// Sample blog posts data (in a real application, this would come from a database or CMS)
const blogPostsEN: BlogPost[] = [
  {
    slug: 'sustainable-uniforms-2024-trends',
    title: 'Sustainable Uniforms: Top Eco-Friendly Trends for 2024',
    description: 'Discover the latest sustainable uniform trends for 2024. From recycled fabrics to eco-friendly manufacturing processes, learn how Saudi organizations are embracing green workwear.',
    content: 'Full article content here...',
    imageUrl: '/images/blog/sustainable-uniforms-2024.jpg',
    publishDate: '2024-03-15',
    author: {
      name: 'Sarah Al-Qahtani',
      image: '/images/team/sarah-alqahtani.jpg',
      title: 'Sustainability Lead'
    },
    category: 'Corporate',
    tags: ['sustainability', 'eco-friendly', 'corporate uniforms', 'green initiatives']
  },
  {
    slug: 'healthcare-uniforms-infection-control',
    title: 'Healthcare Uniforms and Infection Control: Best Practices',
    description: 'How modern healthcare uniforms are designed to minimize infection risks in Saudi hospitals and clinics. Evidence-based approaches to medical workwear.',
    content: 'Full article content here...',
    imageUrl: '/images/blog/healthcare-infection-control.jpg',
    publishDate: '2024-02-28',
    author: {
      name: 'Dr. Ahmed Farid',
      image: '/images/team/ahmed-farid.jpg',
      title: 'Healthcare Consultant'
    },
    category: 'Healthcare',
    tags: ['healthcare', 'infection control', 'medical uniforms', 'hospital safety']
  },
  {
    slug: 'industrial-protective-clothing-advances',
    title: 'Advances in Industrial Protective Clothing for Saudi Workplaces',
    description: 'Recent innovations in industrial protective uniforms that enhance safety while improving comfort for workers in Saudi Arabia\'s demanding industrial environments.',
    content: 'Full article content here...',
    imageUrl: '/images/blog/industrial-protective-clothing.jpg',
    publishDate: '2024-01-20',
    author: {
      name: 'Khalid Alomari',
      image: '/images/team/khalid-alomari.jpg',
      title: 'Industrial Safety Specialist'
    },
    category: 'Industrial',
    tags: ['industrial safety', 'protective clothing', 'worker safety', 'manufacturing']
  }
];

// Arabic blog posts data
const blogPostsAR: BlogPost[] = [
  {
    slug: 'sustainable-uniforms-2024-trends',
    title: 'الزي الموحد المستدام: أهم اتجاهات الموضة الصديقة للبيئة لعام 2024',
    description: 'اكتشف أحدث اتجاهات الزي الموحد المستدام لعام 2024. من الأقمشة المعاد تدويرها إلى عمليات التصنيع الصديقة للبيئة، تعرف على كيفية تبني المؤسسات السعودية لملابس العمل الخضراء.',
    content: 'محتوى المقال الكامل هنا...',
    imageUrl: '/images/blog/sustainable-uniforms-2024.jpg',
    publishDate: '2024-03-15',
    author: {
      name: 'سارة القحطاني',
      image: '/images/team/sarah-alqahtani.jpg',
      title: 'مسؤولة الاستدامة'
    },
    category: 'شركات',
    tags: ['الاستدامة', 'صديق للبيئة', 'زي الشركات الموحد', 'المبادرات الخضراء']
  },
  {
    slug: 'healthcare-uniforms-infection-control',
    title: 'زي الرعاية الصحية ومكافحة العدوى: أفضل الممارسات',
    description: 'كيف يتم تصميم زي الرعاية الصحية الحديث لتقليل مخاطر العدوى في المستشفيات والعيادات السعودية. مناهج قائمة على الأدلة لملابس العمل الطبية.',
    content: 'محتوى المقال الكامل هنا...',
    imageUrl: '/images/blog/healthcare-infection-control.jpg',
    publishDate: '2024-02-28',
    author: {
      name: 'د. أحمد فريد',
      image: '/images/team/ahmed-farid.jpg',
      title: 'مستشار الرعاية الصحية'
    },
    category: 'رعاية صحية',
    tags: ['رعاية صحية', 'مكافحة العدوى', 'الزي الطبي الموحد', 'سلامة المستشفيات']
  },
  {
    slug: 'industrial-protective-clothing-advances',
    title: 'التطورات في ملابس الحماية الصناعية لمواقع العمل السعودية',
    description: 'الابتكارات الحديثة في زي الحماية الصناعي التي تعزز السلامة مع تحسين الراحة للعاملين في بيئات العمل الصناعية المتطلبة في المملكة العربية السعودية.',
    content: 'محتوى المقال الكامل هنا...',
    imageUrl: '/images/blog/industrial-protective-clothing.jpg',
    publishDate: '2024-01-20',
    author: {
      name: 'خالد العمري',
      image: '/images/team/khalid-alomari.jpg',
      title: 'متخصص في السلامة الصناعية'
    },
    category: 'صناعي',
    tags: ['السلامة الصناعية', 'ملابس الحماية', 'سلامة العمال', 'التصنيع']
  }
];

/**
 * Get a blog post by its slug - This function is used by the dynamic metadata generation
 * @param slug The blog post slug
 * @param language The language code ('en' or 'ar')
 * @returns The blog post data or null if not found
 */
export async function getBlogPostBySlug(slug: string, language: string = 'en'): Promise<BlogPost | null> {
  // Select the appropriate blog posts array based on language
  const posts = language === 'ar' ? blogPostsAR : blogPostsEN;
  
  // Find the post with the matching slug
  const post = posts.find(post => post.slug === slug);
  
  // Return the post or null if not found
  return post || null;
}

/**
 * Get all blog posts
 * @param language The language code ('en' or 'ar')
 * @returns Array of blog posts
 */
export async function getAllBlogPosts(language: string = 'en'): Promise<BlogPost[]> {
  return language === 'ar' ? blogPostsAR : blogPostsEN;
}

/**
 * Get blog posts by category
 * @param category The category to filter by
 * @param language The language code ('en' or 'ar')
 * @returns Array of filtered blog posts
 */
export async function getBlogPostsByCategory(category: string, language: string = 'en'): Promise<BlogPost[]> {
  const posts = language === 'ar' ? blogPostsAR : blogPostsEN;
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Get blog posts by tag
 * @param tag The tag to filter by
 * @param language The language code ('en' or 'ar')
 * @returns Array of filtered blog posts
 */
export async function getBlogPostsByTag(tag: string, language: string = 'en'): Promise<BlogPost[]> {
  const posts = language === 'ar' ? blogPostsAR : blogPostsEN;
  return posts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
}

/**
 * Get featured blog posts (most recent ones)
 * @param count Number of posts to return
 * @param language The language code ('en' or 'ar')
 * @returns Array of featured blog posts
 */
export async function getFeaturedBlogPosts(count: number = 3, language: string = 'en'): Promise<BlogPost[]> {
  const posts = language === 'ar' ? blogPostsAR : blogPostsEN;
  // Sort by publishDate in descending order and take the first 'count' posts
  return [...posts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
} 