import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
// Import the entire module
import * as blogPostsModule from '../../../../lib/data/blogPosts';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Container from '@/components/ui/Container';

export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate every hour

// Generate static paths for all blog posts
export function generateStaticParams() {
  // Hardcode the slugs we know exist
  return [{ slug: 'industrial-safety-compliance-guide' }];
}

// Format date function
function formatBlogDate(dateString: string) {
  try {
    return format(new Date(dateString), 'dd MMMM yyyy', { locale: arSA });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

// The page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Get the blog post directly using the module reference
  const post = blogPostsModule.getBlogPostBySlug(slug, 'ar');
  
  console.log('Page component: Looking for blog post with slug:', slug);
  console.log('Post found?', post ? 'YES' : 'NO');
  
  if (!slug || !post) {
    console.error('Blog post not found:', slug, 'ar');
    return notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="mb-8 text-right">
            <nav className="flex justify-end text-sm mb-6">
              <ol className="flex items-center space-x-2 space-x-reverse">
                <li>
                  <Link href="/ar" className="text-neutral-600 hover:text-primary-700">
                    الرئيسية
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <Link href="/ar/blog" className="text-neutral-600 hover:text-primary-700">
                    المدونة
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <span className="text-neutral-900">{post.title.substring(0, 20)}...</span>
                </li>
              </ol>
            </nav>

            <div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-end mb-4">
                  {post.tags.slice(0, 3).map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                      className="text-xs uppercase tracking-wide bg-primary-100 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-200 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-end gap-4 text-neutral-600 mb-8">
                <div className="flex items-center">
                  <span className="mr-2">{formatBlogDate(post.date)}</span>
                  <FaCalendar className="text-primary-600" />
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <span className="mr-2">
                    {typeof post.author === 'object' ? post.author.name : post.author}
                  </span>
                  <FaUser className="text-primary-600" />
                </div>
              </div>
              
              <p className="text-xl text-neutral-600 max-w-3xl mr-0 ml-auto">
                {post.excerpt}
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-lg">
            {post.featuredImage && (
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </Container>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 border border-neutral-100">
                <article className="prose prose-lg max-w-none text-right rtl prose-headings:text-right prose-p:text-right prose-ul:text-right prose-ol:text-right">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Tags Bottom */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2 justify-end items-center">
                      <span className="font-bold ml-2">الوسوم:</span>
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:col-span-1 order-1 md:order-2">
              <div className="space-y-6 sticky top-8">
                {/* Author Box */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">كاتب المقال</h3>
                  <div className="flex items-center justify-end">
                    {typeof post.author === 'object' && post.author.avatar && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <Image
                          src={post.author.avatar}
                          alt={typeof post.author === 'object' ? post.author.name : 'المؤلف'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">
                        {typeof post.author === 'object' ? post.author.name : post.author}
                      </h4>
                      <p className="text-sm text-neutral-600">كاتب متخصص في يونيوم</p>
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                    <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">التصنيفات</h3>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 