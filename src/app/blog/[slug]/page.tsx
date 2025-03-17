import { notFound } from 'next/navigation';
import ClientPage from './ClientPage';

interface PageProps {
  params: {
    slug: string;
  };
}

// This generates all possible static paths during build time for English blog
export async function generateStaticParams() {
  // Define all possible blog post slugs for the English version
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
    { slug: 'corporate-uniform-employee-satisfaction' },
    { slug: 'industrial-protective-clothing-advances' },
    { slug: 'sustainable-uniforms-2024-trends' },
  ];
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  
  // Return the client page with the slug parameter
  return <ClientPage slug={slug} />;
}
