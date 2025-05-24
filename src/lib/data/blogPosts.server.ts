/**
 * Server-side blog posts data with multilingual support
 * Contains both English and Arabic versions of blog content for static site generation
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  title?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string | Author;
  excerpt: string;
  content: string;
  featuredImage?: string;
  tags?: string[];
  readingTime?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');
const arPostsDirectory = path.join(process.cwd(), 'src/content/blog-ar');

function getFileBasedBlogPosts(locale = 'en'): BlogPost[] {
  // اختيار المجلد المناسب بناءً على اللغة
  const selectedDirectory = locale === 'ar' ? arPostsDirectory : postsDirectory;
  
  // Get file names under the appropriate content directory
  if (!fs.existsSync(selectedDirectory)) {
    console.warn(`Blog directory does not exist: ${selectedDirectory}`);
    return [];
  }
  
  const fileNames = fs.readdirSync(selectedDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".md" or ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx?$/, '');

      // Read markdown file as string
      const fullPath = path.join(selectedDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Calculate reading time (rough estimate)
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt || '',
        content,
        featuredImage: data.featuredImage || null,
        tags: data.tags || [],
        readingTime: `${readingTime} min read`
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string, locale = 'en'): BlogPost | null {
  try {
    // اختيار المجلد المناسب بناءً على اللغة
    const selectedDirectory = locale === 'ar' ? arPostsDirectory : postsDirectory;
    
    const fullPath = path.join(selectedDirectory, `${slug}.md`);
    
    // Try .md extension first
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Calculate reading time
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt || '',
        content,
        featuredImage: data.featuredImage || null,
        tags: data.tags || [],
        readingTime: `${readingTime} min read`
      };
    }
    
    // If .md doesn't exist, try .mdx
    const mdxPath = path.join(selectedDirectory, `${slug}.mdx`);
    if (fs.existsSync(mdxPath)) {
      const fileContents = fs.readFileSync(mdxPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Calculate reading time
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt || '',
        content,
        featuredImage: data.featuredImage || null,
        tags: data.tags || [],
        readingTime: `${readingTime} min read`
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error getting blog post by slug ${slug}:`, error);
    return null;
  }
}

export function getAllBlogTags(locale = 'en'): string[] {
  const posts = getAllBlogPosts(locale);
  const tagsSet = new Set<string>();
  
  posts.forEach((post: BlogPost) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet).sort();
}

export function getRelatedPosts(currentSlug: string, limit = 3, locale = 'en'): BlogPost[] {
  const allPosts = getAllBlogPosts(locale);
  const currentPost = allPosts.find((post: BlogPost) => post.slug === currentSlug);
  
  if (!currentPost || !currentPost.tags || currentPost.tags.length === 0) {
    // If no tags or post not found, return random posts
    return allPosts
      .filter((post: BlogPost) => post.slug !== currentSlug)
      .slice(0, limit);
  }
  
  // Score posts by number of matching tags
  const scoredPosts = allPosts
    .filter((post: BlogPost) => post.slug !== currentSlug)
    .map((post: BlogPost) => {
      let score = 0;
      if (post.tags && currentPost.tags) {
        currentPost.tags.forEach((tag: string) => {
          if (post.tags && post.tags.includes(tag)) {
            score++;
          }
        });
      }
      return { post, score };
    })
    .sort((a: { post: BlogPost, score: number }, b: { post: BlogPost, score: number }) => {
      // Sort by score (descending) and then by date (descending)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });
  
  return scoredPosts.slice(0, limit).map(item => item.post);
}

/**
 * Gets all blog posts for a specific language
 */
export const getAllBlogPosts = (locale = 'en'): BlogPost[] => {
  return getFileBasedBlogPosts(locale);
};

/**
 * Gets the latest blog posts for a specific language
 */
export const getLatestBlogPosts = (locale = 'en', limit = 3): BlogPost[] => {
  const posts = getAllBlogPosts(locale);
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

/**
 * Gets all blog posts with a specific tag
 */
export const getBlogPostsByTag = (tag: string, locale = 'en'): BlogPost[] => {
  const posts = getAllBlogPosts(locale);
  return posts.filter(post => post.tags && post.tags.includes(tag));
};

/**
 * Gets all unique tags from all blog posts
 */
export const getAllTags = (locale: 'en' | 'ar' = 'en'): string[] => {
  const posts = getAllBlogPosts(locale);
  const allTags = posts.flatMap(post => post.tags || []);
  return [...new Set(allTags)];
}; 