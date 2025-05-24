import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostsByYear, getAllPosts, groupPostsByMonth } from '@/lib/posts';
import { getMonthName, getTranslation } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import YearNavigation from '@/components/blog/YearNavigation';
import BlogCardGrid from '@/components/blog/BlogCardGrid';

interface PostPreview {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
    slug: string;
  };
  tags: string[];
}

interface YearPageProps {
  params: {
    year: string;
  };
}

export async function generateStaticParams() {
  // Generate pages for years 2023, 2024, 2025
  return [
    { year: '2023' },
    { year: '2024' },
    { year: '2025' },
  ];
}

export async function generateMetadata({ params }: YearPageProps): Promise<Metadata> {
  const { year } = params;
  const title = `${getTranslation('ar', 'blog.archive.yearTitle')} ${year}`;
  
  return {
    title,
    description: `استعرض جميع مقالات يونيوم لعام ${year} حول الأزياء الموحدة والملابس المهنية للشركات والمؤسسات في مختلف القطاعات`,
    alternates: {
      canonical: `https://uneom.com/ar/blog/${year}`,
      languages: {
        'en': `https://uneom.com/blog/${year}`,
        'ar': `https://uneom.com/ar/blog/${year}`,
      },
    },
    openGraph: {
      title,
      description: `استعرض جميع مقالات يونيوم لعام ${year} حول الأزياء الموحدة والملابس المهنية للشركات والمؤسسات في مختلف القطاعات`,
      url: `https://uneom.com/ar/blog/${year}`,
      locale: 'ar_SA',
      images: [
        {
          url: 'https://uneom.com/images/blog-archive-og.jpg',
          width: 1200,
          height: 630,
          alt: `أرشيف مدونة يونيوم - ${year}`,
        },
      ],
    },
  };
}

export default function YearArchivePage({ params }: YearPageProps) {
  const { year } = params;
  const yearNumber = parseInt(year, 10);
  
  // Validate year
  if (isNaN(yearNumber) || yearNumber < 2000 || yearNumber > 2100) {
    notFound();
  }
  
  // Get posts for this year
  const posts = getPostsByYear('ar', year);
  
  // Group posts by month
  const postsByMonth = groupPostsByMonth(posts);
  
  // Get years with posts for navigation
  const allPosts = getAllPosts('ar');
  const yearsWithPosts = [...new Set(allPosts.map(post => 
    new Date(post.date).getFullYear()
  ))].sort((a, b) => b - a);
  
  if (posts.length === 0) {
    return (
      <Container className="py-16 rtl text-right" dir="rtl">
        <SectionHeading 
          title={`${getTranslation('ar', 'blog.archive.yearTitle')} ${year}`}
          alignment="right"
          className="mb-8"
        />
        
        <YearNavigation 
          currentYear={year} 
          years={yearsWithPosts.map(y => y.toString())} 
          locale="ar"
          className="mb-10"
        />
        
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">
            {getTranslation('ar', 'blog.archive.noArticles')}
          </p>
          <Link 
            href="/ar/blog" 
            className="mt-4 inline-block px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
          >
            {getTranslation('ar', 'blog.archive.browseAll')}
          </Link>
        </div>
      </Container>
    );
  }
  
  return (
    <Container className="py-16 rtl text-right" dir="rtl">
      <SectionHeading 
        title={`${getTranslation('ar', 'blog.archive.yearTitle')} ${year}`}
        alignment="right"
        className="mb-8"
      />
      
      <YearNavigation 
        currentYear={year} 
        years={yearsWithPosts.map(y => y.toString())} 
        locale="ar"
        className="mb-12"
      />
      
      <div className="space-y-16">
        {Object.entries(postsByMonth)
          .sort(([monthA], [monthB]) => parseInt(monthB) - parseInt(monthA))
          .map(([month, monthPosts]) => (
            <div key={month} className="blog-month-section animate-fadeIn">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 pr-2">
                  {getMonthName('ar', parseInt(month))} {year}
                </h2>
                <Link 
                  href={`/ar/blog/${year}/${month}`}
                  className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                >
                  عرض جميع مقالات {getMonthName('ar', parseInt(month))} <span aria-hidden="true">←</span>
                </Link>
              </div>
              
              <BlogCardGrid posts={monthPosts} locale="ar" />
            </div>
          ))}
      </div>
    </Container>
  );
} 