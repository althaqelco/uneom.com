import { notFound } from 'next/navigation';
import ClientPage from './ClientPage';

interface PageProps {
  params: {
    slug: string;
  };
}

// This generates all possible static paths during build time for author pages
export async function generateStaticParams() {
  // Define all possible author slugs
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

// Mock data for authors
const getAuthorData = (slug: string) => {
  // This would normally come from a database or API
  const authors = {
    'john-doe': {
      id: 'john-doe',
      name: 'John Doe',
      image: '/images/team/john-doe.jpg',
      title: 'Chief Design Officer',
      bio: 'John is a seasoned uniform designer with over 15 years of experience in the industry. He specializes in corporate and hospitality uniforms.',
      fullBio: 'John Doe is a seasoned uniform designer with over 15 years of experience in the industry. He specializes in corporate and hospitality uniforms, with a focus on creating designs that balance aesthetics, functionality, and comfort. Throughout his career, John has worked with numerous high-profile clients across Saudi Arabia and the Gulf region, helping them develop uniform programs that enhance their brand identity while meeting the practical needs of their employees. His approach combines traditional craftsmanship with innovative materials and techniques, resulting in uniforms that stand the test of time both in durability and style.',
      education: [
        'Master of Fashion Design, Royal College of Art, London',
        'Bachelor of Fine Arts, Parsons School of Design, New York',
        'Certificate in Textile Engineering, Saudi Textile Institute'
      ],
      experience: [
        {
          position: 'Chief Design Officer',
          company: 'UNEOM',
          period: '2018 - Present',
          description: 'Leads the design team in creating innovative uniform solutions for clients across various industries.'
        },
        {
          position: 'Senior Designer',
          company: 'Global Uniforms Inc.',
          period: '2012 - 2018',
          description: 'Developed uniform programs for hospitality and corporate clients throughout the Middle East.'
        },
        {
          position: 'Design Consultant',
          company: 'Luxury Hotels Group',
          period: '2008 - 2012',
          description: 'Created bespoke uniform collections for luxury hotels and resorts.'
        }
      ],
      expertise: [
        'Corporate Uniform Design',
        'Hospitality Uniform Programs',
        'Sustainable Textile Selection',
        'Climate-Adaptive Workwear',
        'Brand Identity Integration',
        'Traditional Saudi Elements in Modern Design'
      ],
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        instagram: 'https://instagram.com/johndoe'
      }
    },
    'jane-smith': {
      id: 'jane-smith',
      name: 'Jane Smith',
      image: '/images/team/jane-smith.jpg',
      title: 'Head of Technical Development',
      bio: 'Jane specializes in technical fabrics and performance workwear, with particular expertise in uniforms for extreme environments.',
      expertise: [
        'Technical Fabric Development',
        'Performance Workwear',
        'Heat-Resistant Uniforms',
        'Industrial Safety Standards',
        'Antimicrobial Treatments',
        'Moisture-Wicking Technologies'
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/janesmith'
      }
    }
  };

  return authors[slug as keyof typeof authors] || null;
};

// Mock data for author posts
const getAuthorPosts = (authorId: string) => {
  // This would normally come from a database or API
  return [
    {
      id: 'uniform-trends-2023',
      title: 'Uniform Trends to Watch in 2023',
      excerpt: 'Explore the latest innovations and design trends shaping the uniform industry this year.',
      date: 'June 15, 2023',
      category: 'Industry Trends',
      coverImage: '/images/blog/uniform-trends.jpg',
      readTime: 5
    },
    {
      id: 'sustainable-uniforms',
      title: 'Sustainability in Corporate Uniforms',
      excerpt: 'How companies are embracing eco-friendly materials and ethical manufacturing in their uniform programs.',
      date: 'May 22, 2023',
      category: 'Sustainability',
      coverImage: '/images/blog/sustainable-uniforms.jpg',
      readTime: 7
    },
    {
      id: 'healthcare-uniform-innovation',
      title: 'Innovations in Healthcare Uniforms',
      excerpt: 'New technologies and designs improving comfort and functionality for healthcare professionals.',
      date: 'April 10, 2023',
      category: 'Healthcare',
      coverImage: '/images/blog/healthcare-uniforms.jpg',
      readTime: 6
    }
  ];
};

export default function AuthorPage({ params }: PageProps) {
  const { slug } = params;
  
  // Get author data
  const author = getAuthorData(slug);
  
  // If author not found, return 404
  if (!author) {
    return notFound();
  }
  
  // Get author posts
  const authorPosts = getAuthorPosts(author.id);
  
  return <ClientPage author={author} authorPosts={authorPosts} />;
} 