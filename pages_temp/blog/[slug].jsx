import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { format } from 'date-fns';
import { arSA, enUS } from 'date-fns/locale';

// Components
import Layout from '@/components/layout/Layout';
import AuthorCard from '@/components/blog/AuthorCard';
import ShareLinks from '@/components/blog/ShareLinks';
import RelatedPosts from '@/components/blog/RelatedPosts';
import CTAButton from '@/components/ui/CTAButton';

// Dummy function to simulate fetching post data - in production, this would come from a CMS or API
const getPostBySlug = async (slug) => {
  // This is a mock implementation. In a real app, you would fetch from a CMS or API
  // For this example, we're returning the data for our corporate-uniforms-brand-identity post
  return {
    title: "How Corporate Uniforms Strengthen Brand Identity in Saudi Companies",
    titleAr: "كيف تعزز الأزياء الموحدة للشركات هوية العلامة التجارية في الشركات السعودية",
    slug: "corporate-uniforms-brand-identity",
    slugAr: "كيف-تعزز-الأزياء-الموحدة-للشركات-هوية-العلامة-التجارية",
    date: "2025-04-28",
    author: "Khalid Al-Mansour",
    authorAr: "خالد المنصور",
    authorRole: "Corporate Uniform Specialist",
    authorRoleAr: "متخصص في أزياء الشركات",
    authorImage: "/images/blog/author-khalid.jpg",
    category: "Corporate Uniforms",
    categoryAr: "أزياء الشركات",
    categorySlug: "corporate-uniforms",
    tags: ["brand identity", "corporate image", "Saudi businesses", "company culture", "employee engagement"],
    tagsAr: ["هوية العلامة التجارية", "صورة الشركة", "الشركات السعودية", "ثقافة الشركة", "مشاركة الموظفين"],
    excerpt: "Discover how strategically designed corporate uniforms can reinforce your brand values and create a cohesive company identity across all touchpoints in Saudi Arabia's competitive business landscape.",
    excerptAr: "اكتشف كيف يمكن للأزياء الموحدة المصممة استراتيجيًا أن تعزز قيم علامتك التجارية وتخلق هوية شركة متماسكة عبر جميع نقاط الاتصال في بيئة الأعمال التنافسية في المملكة العربية السعودية.",
    featuredImage: "/images/blog/corporate-brand-identity.jpg",
    readTime: 7,
    readTimeAr: "٧",
    contentEn: `
## How Corporate Uniforms Strengthen Brand Identity in Saudi Companies

<div className="estimated-reading-time">Estimated reading time: 7 minutes</div>

In today's competitive Saudi business landscape, a strong brand identity is essential for standing out and creating lasting impressions with customers. While many companies focus heavily on marketing campaigns and digital presence, one powerful yet often underutilized tool for brand reinforcement is corporate uniforms. Well-designed corporate uniforms serve as walking billboards, creating visual consistency and reinforcing brand values in every customer interaction.

### The Psychology Behind Corporate Uniforms and Brand Perception

When employees wear corporate uniforms that align with a company's visual identity, they become living extensions of the brand. This visual consistency triggers important psychological responses from customers and other stakeholders:

- **Immediate Brand Recognition**: Distinctive corporate uniforms with consistent colors, logos, and styling elements create instant visual recognition, even from a distance
- **Perceived Professionalism**: Research shows that 75% of Saudi consumers associate uniformed staff with higher levels of professionalism and expertise
- **Trust Building**: Uniformed employees are perceived as more trustworthy, with studies showing a 32% increase in customer confidence when interacting with uniformed personnel
- **Memory Reinforcement**: The combination of visual cues (uniform) with service experience creates stronger memory connections with the brand

These psychological factors directly influence how customers perceive your company and make decisions about engaging with your services or products.

![Saudi business professionals in matching corporate attire](/images/blog/corporate-uniforms-team.jpg)
*A unified corporate image creates a strong impression in business settings*

### Strategic Color Selection for Saudi Corporate Environments

Color psychology plays a crucial role in how corporate uniforms contribute to brand identity. In the Saudi context, color choices should consider both traditional cultural associations and contemporary brand messaging:

#### Key Color Considerations for Saudi Corporate Uniforms:

1. **Brand Color Alignment**: Primary uniform colors should directly reflect your primary brand palette for maximum recognition
2. **Cultural Context**: Consider Saudi color preferences and cultural associations (green's religious significance, blue's association with trustworthiness)
3. **Industry Positioning**: Financial institutions often leverage navy and charcoal to convey stability, while technology companies may use more contemporary palettes
4. **Environmental Factors**: Choose colors that remain visually effective under Saudi Arabia's bright lighting conditions (both natural daylight and indoor lighting)
5. **Differentiation**: Select color combinations that distinguish your team from competitors in the same physical spaces

At UNEOM, our color consultation process involves analyzing your brand guidelines alongside environmental factors to create uniform color strategies that maximize brand impact while ensuring practical functionality.
    `,
    contentAr: `
## كيف تعزز الأزياء الموحدة للشركات هوية العلامة التجارية في الشركات السعودية

<div className="estimated-reading-time">الوقت المقدر للقراءة: ٧ دقائق</div>

في بيئة الأعمال السعودية التنافسية اليوم، تعتبر هوية العلامة التجارية القوية ضرورية للتميز وخلق انطباعات دائمة لدى العملاء. بينما تركز العديد من الشركات بشكل كبير على حملات التسويق والتواجد الرقمي، تعد الأزياء الموحدة للشركات أداة قوية ولكنها غير مستغلة غالبًا لتعزيز العلامة التجارية. تعمل الأزياء الموحدة المصممة جيدًا كلوحات إعلانية متحركة، مما يخلق اتساقًا بصريًا ويعزز قيم العلامة التجارية في كل تفاعل مع العملاء.

### علم النفس وراء الأزياء الموحدة للشركات وإدراك العلامة التجارية

عندما يرتدي الموظفون أزياء موحدة للشركات تتماشى مع الهوية البصرية للشركة، يصبحون امتدادات حية للعلامة التجارية. يثير هذا الاتساق البصري استجابات نفسية مهمة من العملاء وأصحاب المصلحة الآخرين:

- **التعرف الفوري على العلامة التجارية**: تخلق الأزياء الموحدة المميزة للشركات ذات الألوان والشعارات وعناصر التصميم المتسقة تعرفًا بصريًا فوريًا، حتى من مسافة بعيدة
- **الاحترافية المتصورة**: تظهر الأبحاث أن 75% من المستهلكين السعوديين يربطون الموظفين الذين يرتدون الزي الموحد بمستويات أعلى من الاحترافية والخبرة
- **بناء الثقة**: يُنظر إلى الموظفين الذين يرتدون الزي الموحد على أنهم أكثر جدارة بالثقة، حيث أظهرت الدراسات زيادة بنسبة 32% في ثقة العملاء عند التفاعل مع موظفين يرتدون الزي الموحد
- **تعزيز الذاكرة**: يخلق الجمع بين الإشارات البصرية (الزي الموحد) وتجربة الخدمة روابط ذاكرة أقوى مع العلامة التجارية

تؤثر هذه العوامل النفسية بشكل مباشر على كيفية تصور العملاء لشركتك واتخاذ قرارات بشأن المشاركة في خدماتك أو منتجاتك.

![محترفون سعوديون في مجال الأعمال يرتدون ملابس مؤسسية متطابقة](/images/blog/corporate-uniforms-team.jpg)
*صورة مؤسسية موحدة تخلق انطباعًا قويًا في بيئات الأعمال*

### اختيار الألوان الاستراتيجي للبيئات المؤسسية السعودية

يلعب علم نفس الألوان دورًا حاسمًا في كيفية مساهمة الأزياء الموحدة للشركات في هوية العلامة التجارية. في السياق السعودي، يجب أن تراعي خيارات الألوان كلاً من الارتباطات الثقافية التقليدية ورسائل العلامة التجارية المعاصرة:

#### اعتبارات الألوان الرئيسية للأزياء الموحدة للشركات السعودية:

1. **محاذاة لون العلامة التجارية**: يجب أن تعكس ألوان الزي الموحد الأساسية لوحة الألوان الأساسية لعلامتك التجارية لتحقيق أقصى قدر من التعرف عليها
2. **السياق الثقافي**: مراعاة تفضيلات الألوان السعودية والارتباطات الثقافية (الأهمية الدينية للون الأخضر، ارتباط اللون الأزرق بالجدارة بالثقة)
3. **موقع الصناعة**: غالبًا ما تستفيد المؤسسات المالية من اللون الكحلي والفحمي للدلالة على الاستقرار، بينما قد تستخدم شركات التكنولوجيا مجموعات ألوان أكثر معاصرة
4. **العوامل البيئية**: اختيار الألوان التي تظل فعالة بصريًا في ظروف الإضاءة الساطعة في المملكة العربية السعودية (كل من ضوء النهار الطبيعي والإضاءة الداخلية)
5. **التمايز**: اختيار مجموعات الألوان التي تميز فريقك عن المنافسين في نفس المساحات المادية

في UNEOM، تتضمن عملية استشارة الألوان لدينا تحليل إرشادات علامتك التجارية جنبًا إلى جنب مع العوامل البيئية لإنشاء استراتيجيات ألوان موحدة تزيد من تأثير العلامة التجارية مع ضمان الوظائف العملية.
    `,
    relatedPosts: [
      {
        id: 'corporate-uniform-fabric-guide',
        title: 'The Ultimate Fabric Guide for Corporate Uniforms in Saudi Arabia',
        titleAr: 'الدليل النهائي للأقمشة للأزياء الموحدة للشركات في المملكة العربية السعودية',
        slug: 'corporate-uniform-fabric-guide',
        featuredImage: '/images/blog/corporate-fabric-guide.jpg'
      },
      {
        id: 'uniform-design-employee-engagement',
        title: 'How Uniform Design Influences Employee Engagement and Performance',
        titleAr: 'كيف يؤثر تصميم الزي الموحد على مشاركة الموظفين وأدائهم',
        slug: 'uniform-design-employee-engagement',
        featuredImage: '/images/blog/employee-engagement.jpg'
      }
    ]
  };
};

// Get all possible blog post slugs - in production, this would query a CMS or database
const getAllPostSlugs = async () => {
  // This is a mock implementation. In a real app, you would fetch all slugs from a CMS or API
  return [
    { 
      params: { slug: 'corporate-uniforms-brand-identity' }
    },
    { 
      params: { slug: 'corporate-uniform-fabric-guide' }
    },
    { 
      params: { slug: 'uniform-design-employee-engagement' }
    }
  ];
};

export default function BlogPost({ postData, mdxSourceEn, mdxSourceAr }) {
  const router = useRouter();
  const { locale } = router;
  const isArabic = locale === 'ar';
  
  if (router.isFallback) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="loading-spinner"></div>
          <p className="mt-4">{isArabic ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      </Layout>
    );
  }
  
  const formattedDate = format(
    new Date(postData.date),
    'dd MMMM yyyy',
    { locale: isArabic ? arSA : enUS }
  );
  
  const title = isArabic ? postData.titleAr : postData.title;
  const excerpt = isArabic ? postData.excerptAr : postData.excerpt;
  const category = isArabic ? postData.categoryAr : postData.category;
  const author = isArabic ? postData.authorAr : postData.author;
  const authorRole = isArabic ? postData.authorRoleAr : postData.authorRole;
  const readTime = isArabic ? postData.readTimeAr : postData.readTime;
  const postSlug = isArabic ? postData.slugAr : postData.slug;
  const tags = isArabic ? postData.tagsAr : postData.tags;
  
  return (
    <Layout>
      <NextSeo
        title={`${title} | UNEOM`}
        description={excerpt}
        canonical={`https://uneom.com/${isArabic ? 'ar/' : ''}blog/${postSlug}`}
        openGraph={{
          type: 'article',
          url: `https://uneom.com/${isArabic ? 'ar/' : ''}blog/${postSlug}`,
          title: title,
          description: excerpt,
          images: [
            {
              url: `https://uneom.com${postData.featuredImage}`,
              width: 1200,
              height: 630,
              alt: title,
            }
          ],
          article: {
            publishedTime: postData.date,
            authors: [`https://uneom.com/${isArabic ? 'ar/' : ''}authors/${postData.author.toLowerCase().replace(/\s+/g, '-')}`],
            tags: tags,
          }
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: tags.join(', ')
          }
        ]}
      />
      
      <ArticleJsonLd
        url={`https://uneom.com/${isArabic ? 'ar/' : ''}blog/${postSlug}`}
        title={title}
        images={[`https://uneom.com${postData.featuredImage}`]}
        datePublished={postData.date}
        dateModified={postData.date}
        authorName={author}
        publisherName="UNEOM"
        publisherLogo="https://uneom.com/images/logo.png"
        description={excerpt}
      />
      
      <Head>
        <link 
          rel="alternate" 
          hrefLang="en" 
          href={`https://uneom.com/blog/${postData.slug}`} 
        />
        <link 
          rel="alternate" 
          hrefLang="ar" 
          href={`https://uneom.com/ar/blog/${postData.slugAr || postData.slug}`} 
        />
      </Head>
      
      <main className={`blog-post ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="bg-gray-50 dark:bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="breadcrumbs text-sm mb-0">
              <Link href={`/${isArabic ? 'ar' : ''}`} className="hover:text-primary">
                {isArabic ? 'الرئيسية' : 'Home'}
              </Link>
              {' '}/{' '}
              <Link href={`/${isArabic ? 'ar/blog' : 'blog'}`} className="hover:text-primary">
                {isArabic ? 'المدونة' : 'Blog'}
              </Link>
              {' '}/{' '}
              <Link href={`/${isArabic ? 'ar/blog/category/' : 'blog/category/'}${postData.categorySlug}`} className="hover:text-primary">
                {category}
              </Link>
              {' '}/{' '}
              <span className="font-medium">{title}</span>
            </div>
          </div>
        </div>
        
        {/* Post Header */}
        <header className="post-header py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href={`/${isArabic ? 'ar/blog/category/' : 'blog/category/'}${postData.categorySlug}`}
                className="inline-block px-4 py-1 rounded-full bg-primary-light text-primary font-medium text-sm mb-4"
              >
                {category}
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{excerpt}</p>
              
              <div className="flex items-center flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={postData.authorImage} 
                      alt={author} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link 
                      href={`/${isArabic ? 'ar/' : ''}authors/${postData.author.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-medium hover:text-primary"
                    >
                      {author}
                    </Link>
                    <p className="text-sm text-gray-500">{authorRole}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-2">
                    <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                    {formattedDate}
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    {isArabic ? `${readTime} دقائق للقراءة` : `${readTime} min read`}
                  </span>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-12">
                <Image 
                  src={postData.featuredImage} 
                  alt={title} 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>
        
        {/* Post Content */}
        <section className="post-content py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Social Share Sidebar */}
              <div className="lg:w-16">
                <div className="sticky top-24">
                  <ShareLinks 
                    title={title} 
                    url={`https://uneom.com/${isArabic ? 'ar/' : ''}blog/${postSlug}`}
                    isArabic={isArabic}
                  />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:flex-1 max-w-4xl">
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  <MDXRemote {...(isArabic ? mdxSourceAr : mdxSourceEn)} />
                </article>
                
                {/* Tags */}
                <div className="mt-12 mb-8">
                  <h3 className="text-lg font-bold mb-3">{isArabic ? 'الوسوم:' : 'Tags:'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link 
                        key={index}
                        href={`/${isArabic ? 'ar/' : ''}blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-primary-light hover:text-primary transition"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Author Card */}
                <div className="my-12 border-t border-b border-gray-200 dark:border-gray-700 py-8">
                  <AuthorCard
                    name={author}
                    role={authorRole}
                    image={postData.authorImage}
                    bio={isArabic 
                      ? `${authorRole} في UNEOM مع أكثر من 10 سنوات من الخبرة في صناعة الأزياء الموحدة المؤسسية.`
                      : `${authorRole} at UNEOM with over 10 years of experience in the corporate uniform industry.`
                    }
                    profileUrl={`/${isArabic ? 'ar/' : ''}authors/${postData.author.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        <section className="related-posts bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {isArabic ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
            
            <RelatedPosts 
              posts={postData.relatedPosts.map(post => ({
                ...post,
                title: isArabic ? post.titleAr : post.title
              }))}
              locale={locale}
            />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="cta-section py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isArabic ? 'هل تحتاج إلى حلول أزياء موحدة لعملك؟' : 'Need Uniform Solutions for Your Business?'}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {isArabic
                ? 'اتصل بفريق UNEOM اليوم للحصول على استشارة مجانية حول كيفية تحسين صورة علامتك التجارية وتعزيز هوية شركتك من خلال أزياء موحدة مخصصة.'
                : 'Contact the UNEOM team today for a free consultation on how to enhance your brand image and strengthen your company identity with custom uniform solutions.'}
            </p>
            
            <Link href={`/${isArabic ? 'ar/' : ''}contact?source=blog`}>
              <CTAButton size="large">
                {isArabic ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
              </CTAButton>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];
  const slugs = await getAllPostSlugs();
  
  // Generate paths for each locale
  for (const locale of locales) {
    slugs.forEach(({ params }) => {
      paths.push({
        params: { slug: params.slug },
        locale
      });
    });
  }
  
  return {
    paths,
    fallback: true // Set to 'blocking' or true in production depending on your needs
  };
}

export async function getStaticProps({ params, locale }) {
  try {
    const postData = await getPostBySlug(params.slug);
    
    // Serialize the MDX content
    const mdxSourceEn = await serialize(postData.contentEn);
    const mdxSourceAr = await serialize(postData.contentAr);
    
    return {
      props: {
        postData,
        mdxSourceEn,
        mdxSourceAr
      },
      // Revalidate the page every 24 hours (ISR)
      revalidate: 86400,
    };
  } catch (error) {
    console.error(`Error loading blog post: ${error}`);
    return {
      notFound: true
    };
  }
} 