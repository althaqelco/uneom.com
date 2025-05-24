import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';

// Mock function to get author by slug
const getAuthorBySlug = (slug) => {
  // This would be replaced with an API call or database query in a real application
  const authors = {
    "ahmed-al-sayed": {
      id: 1,
      slug: "ahmed-al-sayed",
      name: "Ahmed Al-Sayed",
      nameAr: "أحمد السيد",
      role: "Corporate Uniform Specialist",
      roleAr: "أخصائي الزي الرسمي للشركات",
      image: "/images/authors/ahmed.jpg",
      bio: "Ahmed Al-Sayed is a corporate uniform specialist with over 15 years of experience in designing and implementing corporate identity programs through strategic uniform solutions. He has worked with major corporations across the GCC region.",
      bioAr: "أحمد السيد هو أخصائي في الزي الرسمي للشركات ولديه أكثر من 15 عامًا من الخبرة في تصميم وتنفيذ برامج هوية الشركات من خلال حلول الزي الرسمي الاستراتيجية. عمل مع كبرى الشركات في منطقة دول مجلس التعاون الخليجي.",
      expertise: ["Corporate Identity", "Uniform Design", "Brand Implementation", "Employee Engagement"],
      expertiseAr: ["هوية الشركات", "تصميم الزي الرسمي", "تنفيذ العلامة التجارية", "إشراك الموظفين"],
      email: "ahmed@uneom.com",
      linkedin: "linkedin.com/ahmedalsayed",
      articles: [
        {
          id: 1,
          title: "Boosting Employee Satisfaction Through Corporate Uniform Programs",
          titleAr: "تعزيز رضا الموظفين من خلال برامج الزي الرسمي للشركات",
          slug: "corporate-uniform-employee-satisfaction",
          excerpt: "Discover how well-designed corporate uniform programs can significantly increase employee satisfaction and company culture.",
          excerptAr: "اكتشف كيف يمكن لبرامج الزي الرسمي المصممة جيدًا أن تزيد بشكل كبير من رضا الموظفين وثقافة الشركة.",
          publishedAt: "2023-07-15",
          coverImage: "/images/blog/corporate-uniforms.jpg"
        }
      ]
    },
    "fatima-al-harbi": {
      id: 2,
      slug: "fatima-al-harbi",
      name: "Fatima Al-Harbi",
      nameAr: "فاطمة الحربي",
      role: "Industrial Safety Expert",
      roleAr: "خبيرة السلامة الصناعية",
      image: "/images/authors/fatima.jpg",
      bio: "Fatima Al-Harbi is a certified industrial safety expert with a background in occupational health and safety management. She specializes in workplace safety standards and compliance for industrial uniform programs.",
      bioAr: "فاطمة الحربي هي خبيرة معتمدة في السلامة الصناعية ولديها خلفية في إدارة الصحة والسلامة المهنية. متخصصة في معايير السلامة في مكان العمل والامتثال لبرامج الزي الرسمي الصناعي.",
      expertise: ["Industrial Safety", "Regulatory Compliance", "PPE Standards", "Risk Assessment"],
      expertiseAr: ["السلامة الصناعية", "الامتثال التنظيمي", "معايير معدات الحماية الشخصية", "تقييم المخاطر"],
      email: "fatima@uneom.com",
      linkedin: "linkedin.com/fatimaalharbi",
      articles: [
        {
          id: 2,
          title: "The Complete Guide to Industrial Uniform Safety Compliance in Saudi Arabia",
          titleAr: "الدليل الشامل للامتثال لسلامة الزي الصناعي في المملكة العربية السعودية",
          slug: "industrial-safety-compliance-guide",
          excerpt: "Navigate the complex requirements of industrial uniform safety regulations with our comprehensive compliance guide.",
          excerptAr: "تنقل من خلال المتطلبات المعقدة للوائح سلامة الزي الصناعي باستخدام دليل الامتثال الشامل.",
          publishedAt: "2023-05-22",
          coverImage: "/images/blog/industrial-safety.jpg"
        }
      ]
    }
  };
  
  return authors[slug] || null;
};

// Format date according to locale
const formatDate = (dateString, locale = 'en') => {
  try {
    const date = new Date(dateString);
    
    return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  } catch (error) {
    return dateString;
  }
};

// Component for author's expertise tags
const ExpertiseTags = ({ tags, isArabic = false }) => (
  <div className={`flex flex-wrap gap-2 ${isArabic ? 'justify-end' : ''}`}>
    {tags.map((tag, index) => (
      <span 
        key={index} 
        className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm"
      >
        {tag}
      </span>
    ))}
  </div>
);

// Component for author's articles
const AuthorArticles = ({ articles, isArabic = false }) => (
  <div>
    <h3 className={`text-xl font-semibold mb-4 ${isArabic ? 'text-right' : ''}`}>
      {isArabic ? 'المقالات' : 'Articles'}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <Link 
          key={article.id} 
          href={isArabic ? `/ar/blog/${article.slug}` : `/blog/${article.slug}`}
          className="group"
        >
          <div className="relative w-full h-48 mb-2 overflow-hidden rounded-lg">
            <Image
              src={article.coverImage || '/images/default-placeholder.jpg'}
              alt={isArabic ? article.titleAr : article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h4 className={`font-medium group-hover:text-blue-600 ${isArabic ? 'text-right' : ''}`}>
            {isArabic ? article.titleAr : article.title}
          </h4>
          <p className={`text-sm text-gray-600 mt-1 ${isArabic ? 'text-right' : ''}`}>
            {formatDate(article.publishedAt, isArabic ? 'ar' : 'en')}
          </p>
        </Link>
      ))}
    </div>
  </div>
);

// Component for breadcrumbs
const Breadcrumbs = ({ items, rtl = false }) => (
  <nav className="flex mb-5 text-sm" aria-label="Breadcrumb">
    <ol className={`inline-flex items-center space-x-1 ${rtl ? 'space-x-reverse' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {index > 0 && (
            <span className={`mx-2 text-gray-500 ${rtl ? 'rotate-180' : ''}`}>
              /
            </span>
          )}
          {index === items.length - 1 ? (
            <span className="text-gray-700">{item.label}</span>
          ) : (
            <Link 
              href={item.href} 
              className="text-blue-600 hover:text-blue-800"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Main author page component
export default function AuthorPage() {
  const router = useRouter();
  const { slug, locale } = router.query;
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isArabic = locale === 'ar';
  
  // Check if the page is Arabic from the path
  useEffect(() => {
    const path = router.asPath;
    const isArabicPath = path.startsWith('/ar/');
    
    if (isArabicPath && locale !== 'ar') {
      router.push(path, path, { locale: 'ar' });
    }
  }, [router]);
  
  // Load author data
  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const authorData = getAuthorBySlug(slug);
      setAuthor(authorData);
      setIsLoading(false);
    }
  }, [slug]);
  
  // Redirect to 404 if author not found
  useEffect(() => {
    if (!isLoading && !author) {
      router.push('/404');
    }
  }, [author, isLoading, router]);
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4">
          <div className="animate-pulse max-w-5xl mx-auto">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="bg-gray-200 rounded-full h-48 w-48 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-1/4 mt-8 mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-8 bg-gray-200 rounded-full w-24"></div>
                  <div className="h-8 bg-gray-200 rounded-full w-36"></div>
                  <div className="h-8 bg-gray-200 rounded-full w-28"></div>
                </div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-1/4 mt-12 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-48 bg-gray-200 rounded"></div>
              <div className="h-48 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!author) return null;
  
  return (
    <Layout>
      <NextSeo
        title={`${isArabic ? author.nameAr : author.name} | UNEOM`}
        description={isArabic ? author.bioAr.substring(0, 160) : author.bio.substring(0, 160)}
        openGraph={{
          title: `${isArabic ? author.nameAr : author.name} | UNEOM`,
          description: isArabic ? author.bioAr.substring(0, 160) : author.bio.substring(0, 160),
          images: [
            {
              url: author.image || '/images/default-placeholder.jpg',
              width: 1200,
              height: 1200,
              alt: isArabic ? author.nameAr : author.name,
            },
          ],
          type: 'profile',
          profile: {
            firstName: isArabic ? author.nameAr.split(' ')[0] : author.name.split(' ')[0],
            lastName: isArabic ? author.nameAr.split(' ').slice(1).join(' ') : author.name.split(' ').slice(1).join(' '),
            username: author.slug,
          },
        }}
      />
      
      <div className={`container mx-auto py-12 px-4 ${isArabic ? 'rtl' : ''}`}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: isArabic ? 'الرئيسية' : 'Home', href: isArabic ? '/ar' : '/' },
            { label: isArabic ? 'المؤلفون' : 'Authors', href: isArabic ? '/ar/authors' : '/authors' },
            { label: isArabic ? author.nameAr : author.name, href: isArabic ? `/ar/authors/${slug}` : `/authors/${slug}` },
          ]}
          rtl={isArabic}
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Author Profile */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Author image and quick info */}
            <div className="w-full md:w-1/3 text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={author.image || '/images/default-user.jpg'}
                  alt={isArabic ? author.nameAr : author.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold">
                {isArabic ? author.nameAr : author.name}
              </h2>
              <p className="text-gray-600">
                {isArabic ? author.roleAr : author.role}
              </p>
              
              {/* Contact information */}
              <div className="mt-4 space-y-2">
                {author.email && (
                  <a 
                    href={`mailto:${author.email}`}
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {author.email}
                  </a>
                )}
                {author.linkedin && (
                  <a 
                    href={`https://${author.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            
            {/* Author bio and expertise */}
            <div className={`w-full md:w-2/3 ${isArabic ? 'text-right' : ''}`}>
              <h1 className="text-3xl font-bold mb-4">
                {isArabic 
                  ? `عن ${author.nameAr}`
                  : `About ${author.name}`
                }
              </h1>
              
              <div className="prose max-w-none">
                <p>{isArabic ? author.bioAr : author.bio}</p>
              </div>
              
              {/* Areas of expertise */}
              {author.expertise && author.expertise.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2">
                    {isArabic ? 'مجالات الخبرة' : 'Areas of Expertise'}
                  </h3>
                  <ExpertiseTags 
                    tags={isArabic ? author.expertiseAr : author.expertise}
                    isArabic={isArabic}
                  />
                </div>
              )}
              
              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className={`p-4 bg-gray-50 rounded-lg ${isArabic ? 'text-right' : ''}`}>
                  <div className="text-3xl font-bold text-blue-600">
                    {author.articles ? author.articles.length : 0}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'المقالات المنشورة' : 'Published Articles'}
                  </div>
                </div>
                <div className={`p-4 bg-gray-50 rounded-lg ${isArabic ? 'text-right' : ''}`}>
                  <div className="text-3xl font-bold text-blue-600">
                    {author.expertise ? author.expertise.length : 0}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'مجالات الخبرة' : 'Areas of Expertise'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Author's Articles */}
          {author.articles && author.articles.length > 0 && (
            <div className="mt-12">
              <AuthorArticles 
                articles={author.articles}
                isArabic={isArabic}
              />
            </div>
          )}
          
          {/* CTA Section */}
          <div className={`mt-16 p-8 bg-blue-50 rounded-lg ${isArabic ? 'text-right' : ''}`}>
            <h3 className="text-xl font-bold mb-2">
              {isArabic 
                ? 'هل ترغب في التواصل مع خبرائنا؟'
                : 'Want to connect with our experts?'
              }
            </h3>
            <p className="mb-4">
              {isArabic 
                ? 'فريقنا من المتخصصين جاهز لمساعدتك في احتياجات الزي الرسمي الخاص بك.'
                : 'Our team of specialists is ready to help you with your uniform needs.'
              }
            </p>
            <Link
              href={isArabic ? '/ar/contact' : '/contact'}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// getStaticPaths for all author pages that need to be pre-rendered
export async function getStaticPaths() {
  // In a real app, you would fetch all author slugs here
  const authors = [
    { slug: "ahmed-al-sayed" },
    { slug: "fatima-al-harbi" }
  ];
  
  const paths = authors.flatMap(author => [
    { params: { slug: author.slug } },
    { params: { slug: author.slug }, locale: 'ar' }
  ]);
  
  return {
    paths,
    fallback: true,
  };
}

// getStaticProps to fetch the author data
export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const author = getAuthorBySlug(slug);
  
  // If the author doesn't exist, return 404
  if (!author) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      author,
      locale: locale || 'en',
    },
    revalidate: 86400, // Regenerate the page once per day
  };
} 