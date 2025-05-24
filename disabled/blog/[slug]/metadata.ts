import { Metadata } from 'next';
import { getBlogPostBySlug } from '@/lib/blog';

type Props = {
  params: { slug: string }
}

// This is a dynamic metadata generator for blog posts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch the blog post data
  const post = await getBlogPostBySlug(params.slug);
  
  // If post not found, return default metadata
  if (!post) {
    return {
      title: 'Blog Post Not Found | UNEOM Saudi Arabia',
      description: 'The requested blog post could not be found. Explore our other uniform industry insights and guides.',
    };
  }

  const { title, description, imageUrl, publishDate, author, category } = post;
  
  // Extract categories as keywords
  const keywordString = `${title.toLowerCase()}, uniform industry blog, ${category.toLowerCase()} uniforms, professional workwear, UNEOM blog, Saudi Arabia uniforms, ${category.toLowerCase()} workwear guide, uniform insights, professional attire blog, UNEOM Saudi`;
  
  return {
    title: `${title} | UNEOM Uniform Industry Blog`,
    description: description || `Read our insights about ${title}. Professional uniform and workwear expertise from UNEOM, Saudi Arabia's premium uniform provider.`,
    keywords: keywordString,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      locale: 'en',
      publishedTime: publishDate,
      authors: [author.name],
      images: [
        {
          url: imageUrl || '/images/blog/blog-default.jpg',
          width: 1200,
          height: 630,
          alt: `${title} - UNEOM Uniform Industry Blog`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl || '/images/blog/blog-default.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://uneom.com/blog/${params.slug}`,
      languages: {
        'en': `https://uneom.com/blog/${params.slug}`,
        'ar': `https://uneom.com/ar/blog/${params.slug}`,
      },
    },
  };
}

// Add metadata for the Cultural Identity in Saudi School Uniforms blog post
export const culturalIdentitySaudiSchoolUniformsMetadata = {
  title: 'Cultural Identity in Saudi School Uniforms: Balancing Tradition and Modernity',
  description: 'Explore how thoughtfully designed school uniforms can honor Saudi heritage while embracing contemporary educational environments in line with Vision 2030 goals.',
  keywords: 'Saudi school uniforms, cultural identity, educational uniforms, Saudi Vision 2030, traditional dress, modern education, Islamic dress code, Saudi education system, school uniform design, cultural heritage',
  canonical: 'https://uneom.com/blog/cultural-identity-saudi-school-uniforms',
  ogImage: '/images/education/uniform_educations_3.jpg',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  publishedTime: '2024-02-12T08:00:00+03:00',
  modifiedTime: '2024-02-12T08:00:00+03:00',
  authors: ['Dr. Layla Al-Hamdan'],
  section: 'Education',
  tags: ['Education', 'Cultural Identity', 'School Uniforms', 'Saudi Vision 2030', 'Tradition']
}; 