import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

// Components
import Layout from '@/components/layout/Layout';
import BlogCard from '@/components/blog/BlogCard';
import CTAButton from '@/components/ui/CTAButton';

// Dummy function to simulate fetching author data - in production, this would come from a CMS or API
const getAuthorBySlug = async (slug) => {
  // This is a mock implementation. In a real app, you would fetch from a CMS or API
  // For this example, we're returning data for Khalid Al-Mansour
  return {
    name: "Khalid Al-Mansour",
    nameAr: "خالد المنصور",
    slug: "khalid-al-mansour",
    role: "Corporate Uniform Specialist",
    roleAr: "متخصص في أزياء الشركات",
    image: "/images/blog/author-khalid.jpg",
    bio: {
      en: `Khalid Al-Mansour is a leading expert in corporate uniform design with over 10 years of experience in the Middle Eastern market. Before joining UNEOM, Khalid worked with several major Saudi corporations to develop distinctive corporate identity programs through strategic uniform design.

      With a background in fashion design and corporate branding, Khalid combines aesthetic sensibility with practical insights into how uniforms impact brand perception and employee performance. He holds a master's degree in Fashion Design from London College of Fashion and a bachelor's in Business Administration from King Saud University.
      
      At UNEOM, Khalid leads our corporate uniform consulting division, helping major Saudi organizations develop uniform programs that align with their brand values while maintaining practical functionality and cultural appropriateness.`,
      ar: `خالد المنصور هو خبير رائد في تصميم الأزياء الموحدة للشركات مع أكثر من 10 سنوات من الخبرة في سوق الشرق الأوسط. قبل انضمامه إلى UNEOM، عمل خالد مع العديد من الشركات السعودية الكبرى لتطوير برامج هوية مؤسسية مميزة من خلال تصميم الأزياء الموحدة الاستراتيجية.

      مع خلفية في تصميم الأزياء والعلامات التجارية للشركات، يجمع خالد بين الحساسية الجمالية والرؤى العملية حول كيفية تأثير الأزياء الموحدة على إدراك العلامة التجارية وأداء الموظفين. حصل على درجة الماجستير في تصميم الأزياء من كلية لندن للأزياء وبكالوريوس في إدارة الأعمال من جامعة الملك سعود.
      
      في UNEOM، يقود خالد قسم استشارات الأزياء الموحدة للشركات، ويساعد المؤسسات السعودية الكبرى على تطوير برامج الأزياء الموحدة التي تتماشى مع قيم علامتهم التجارية مع الحفاظ على الوظائف العملية والملاءمة الثقافية.`
    },
    expertise: {
      en: ["Corporate Uniform Design", "Brand Identity Integration", "Cultural Adaptation in Workwear", "Fabric Selection for Saudi Climate", "Executive Uniform Programs"],
      ar: ["تصميم الأزياء الموحدة للشركات", "دمج هوية العلامة التجارية", "التكيف الثقافي في ملابس العمل", "اختيار الأقمشة لمناخ المملكة العربية السعودية", "برامج الأزياء الموحدة التنفيذية"]
    },
    contact: {
      email: "khalid@uneom.com",
      linkedin: "linkedin.com/in/khalid-al-mansour"
    },
    posts: [
      {
        id: 'corporate-uniforms-brand-identity',
        title: {
          en: 'How Corporate Uniforms Strengthen Brand Identity in Saudi Companies',
          ar: 'كيف تعزز الأزياء الموحدة للشركات هوية العلامة التجارية في الشركات السعودية'
        },
        excerpt: {
          en: 'Discover how strategically designed corporate uniforms can reinforce your brand values and create a cohesive company identity across all touchpoints.',
          ar: 'اكتشف كيف يمكن للأزياء الموحدة المصممة استراتيجيًا أن تعزز قيم علامتك التجارية وتخلق هوية شركة متماسكة عبر جميع نقاط الاتصال.'
        },
        featuredImage: '/images/blog/corporate-brand-identity.jpg',
        date: '2025-04-28',
        readTime: {
          en: '7 min read',
          ar: '7 دقائق للقراءة'
        },
        slug: 'corporate-uniforms-brand-identity'
      },
      {
        id: 'corporate-uniform-fabric-guide',
        title: {
          en: 'The Ultimate Fabric Guide for Corporate Uniforms in Saudi Arabia',
          ar: 'الدليل النهائي للأقمشة للأزياء الموحدة للشركات في المملكة العربية السعودية'
        },
        excerpt: {
          en: 'Learn about the best fabrics for corporate uniforms in Saudi Arabia\'s climate, balancing professional appearance with comfort and durability.',
          ar: 'تعرف على أفضل الأقمشة للأزياء الموحدة للشركات في مناخ المملكة العربية السعودية، مع التوازن بين المظهر المهني والراحة والمتانة.'
        },
        featuredImage: '/images/blog/corporate-fabric-guide.jpg',
        date: '2025-04-15',
        readTime: {
          en: '9 min read',
          ar: '9 دقائق للقراءة'
        },
        slug: 'corporate-uniform-fabric-guide'
      }
    ],
    stats: {
      articles: 5,
      experience: "10+ years",
      experienceAr: "+10 سنوات",
      clients: "25+ major corporations",
      clientsAr: "+25 شركة كبرى"
    },
    seo: {
      title: {
        en: 'Khalid Al-Mansour - Corporate Uniform Specialist | UNEOM',
        ar: 'خالد المنصور - متخصص في أزياء الشركات | UNEOM'
      },
      description: {
        en: 'Khalid Al-Mansour is an expert in corporate uniform design for Saudi companies with 10+ years of experience creating brand-aligned workwear solutions.',
        ar: 'خالد المنصور خبير في تصميم الأزياء الموحدة للشركات السعودية مع أكثر من 10 سنوات من الخبرة في إنشاء حلول ملابس العمل المتوافقة مع العلامة التجارية.'
      }
    }
  };
};

// Get all possible author slugs - in production, this would query a CMS or database
const getAllAuthorSlugs = async () => {
  // This is a mock implementation. In a real app, you would fetch all slugs from a CMS or API
  return [
    { 
      params: { slug: 'khalid-al-mansour' }
    },
    { 
      params: { slug: 'sarah-al-otaibi' }
    }
  ];
};

export default function AuthorPage({ authorData }) {
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
  
  const name = isArabic ? authorData.nameAr : authorData.name;
  const role = isArabic ? authorData.roleAr : authorData.role;
  const bio = authorData.bio[isArabic ? 'ar' : 'en'];
  const expertise = authorData.expertise[isArabic ? 'ar' : 'en'];
  const experience = isArabic ? authorData.stats.experienceAr : authorData.stats.experience;
  const clients = isArabic ? authorData.stats.clientsAr : authorData.stats.clients;
  
  return (
    <Layout>
      <NextSeo
        title={authorData.seo.title[locale]}
        description={authorData.seo.description[locale]}
        canonical={`https://uneom.com/${isArabic ? 'ar/' : ''}authors/${authorData.slug}`}
        openGraph={{
          type: 'profile',
          url: `https://uneom.com/${isArabic ? 'ar/' : ''}authors/${authorData.slug}`,
          title: authorData.seo.title[locale],
          description: authorData.seo.description[locale],
          images: [
            {
              url: `https://uneom.com${authorData.image}`,
              width: 800,
              height: 800,
              alt: name,
            }
          ],
          profile: {
            firstName: authorData.name.split(' ')[0],
            lastName: authorData.name.split(' ').slice(1).join(' '),
            username: authorData.slug
          }
        }}
      />
      
      <Head>
        <link 
          rel="alternate" 
          hrefLang="en" 
          href={`https://uneom.com/authors/${authorData.slug}`} 
        />
        <link 
          rel="alternate" 
          hrefLang="ar" 
          href={`https://uneom.com/ar/authors/${authorData.slug}`} 
        />
      </Head>
      
      <main className={`author-page ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
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
              <Link href={`/${isArabic ? 'ar/authors' : 'authors'}`} className="hover:text-primary">
                {isArabic ? 'المؤلفون' : 'Authors'}
              </Link>
              {' '}/{' '}
              <span className="font-medium">{name}</span>
            </div>
          </div>
        </div>
        
        {/* Author Profile */}
        <section className="author-profile py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Author Image and Stats */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 shadow-lg">
                    <Image 
                      src={authorData.image} 
                      alt={name} 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Author Stats */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                    <h3 className="text-lg font-bold mb-4 border-b pb-2">
                      {isArabic ? 'نبذة سريعة' : 'Quick Stats'}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          {isArabic ? 'المقالات:' : 'Articles:'}
                        </span>
                        <span className="font-medium">{authorData.stats.articles}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          {isArabic ? 'الخبرة:' : 'Experience:'}
                        </span>
                        <span className="font-medium">{experience}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          {isArabic ? 'العملاء:' : 'Clients:'}
                        </span>
                        <span className="font-medium">{clients}</span>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-6 pt-4 border-t">
                      <h3 className="text-lg font-bold mb-4">
                        {isArabic ? 'تواصل مع' : 'Contact'} {name.split(' ')[0]}
                      </h3>
                      
                      <div className="space-y-2">
                        <a 
                          href={`mailto:${authorData.contact.email}`} 
                          className="flex items-center hover:text-primary"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                          <span>{authorData.contact.email}</span>
                        </a>
                        
                        <a 
                          href={`https://${authorData.contact.linkedin}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center hover:text-primary"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{name}</h1>
                <p className="text-xl text-primary mb-6">{role}</p>
                
                {/* Bio */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  {bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                
                {/* Areas of Expertise */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">
                    {isArabic ? 'مجالات الخبرة' : 'Areas of Expertise'}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((item, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Author Articles */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {isArabic 
                      ? `مقالات بواسطة ${name.split(' ')[0]}`
                      : `Articles by ${name.split(' ')[0]}`
                    }
                  </h2>
                  
                  <div className="space-y-6">
                    {authorData.posts.map((post) => (
                      <article key={post.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="relative h-48 md:h-full md:col-span-1">
                            <Image
                              src={post.featuredImage}
                              alt={post.title[locale]}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="p-6 md:col-span-2">
                            <div className="flex items-center text-gray-500 text-sm mb-2">
                              <span>{new Date(post.date).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                              <span className="mx-2">•</span>
                              <span>{post.readTime[locale]}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3">
                              <Link href={`/${isArabic ? 'ar/' : ''}blog/${post.slug}`} className="hover:text-primary">
                                {post.title[locale]}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {post.excerpt[locale]}
                            </p>
                            
                            <Link 
                              href={`/${isArabic ? 'ar/' : ''}blog/${post.slug}`}
                              className="text-primary font-medium hover:text-primary-dark inline-flex items-center"
                            >
                              {isArabic ? 'اقرأ المزيد' : 'Read more'}
                              <svg className={`w-4 h-4 ${isArabic ? 'mr-2 rotate-180' : 'ml-2'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  
                  {/* View All Articles */}
                  <div className="mt-8 text-center">
                    <Link href={`/${isArabic ? 'ar/' : ''}blog?author=${authorData.slug}`}>
                      <CTAButton size="medium" variant="outline">
                        {isArabic 
                          ? `عرض جميع مقالات ${name.split(' ')[0]}`
                          : `View all articles by ${name.split(' ')[0]}`
                        }
                      </CTAButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Consultation CTA */}
        <section className="author-cta py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isArabic
                ? `هل تريد استشارة متخصصة من ${name.split(' ')[0]}؟`
                : `Want specialized consultation from ${name.split(' ')[0]}?`
              }
            </h2>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              {isArabic
                ? `بصفته ${role}، يمكن لـ ${name.split(' ')[0]} مساعدة مؤسستك في تطوير برنامج أزياء موحدة يتماشى مع أهداف علامتك التجارية ويعزز صورتك المهنية.`
                : `As a ${role}, ${name.split(' ')[0]} can help your organization develop a uniform program that aligns with your brand objectives and enhances your professional image.`
              }
            </p>
            
            <Link href={`/${isArabic ? 'ar/' : ''}contact?expert=${authorData.slug}`}>
              <CTAButton size="large" variant="light">
                {isArabic ? 'احجز استشارة' : 'Book a Consultation'}
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
  const slugs = await getAllAuthorSlugs();
  
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

export async function getStaticProps({ params }) {
  try {
    const authorData = await getAuthorBySlug(params.slug);
    
    return {
      props: {
        authorData
      },
      // Revalidate the page every 24 hours (ISR)
      revalidate: 86400,
    };
  } catch (error) {
    console.error(`Error loading author: ${error}`);
    return {
      notFound: true
    };
  }
} 