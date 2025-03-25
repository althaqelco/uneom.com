import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Category Card Component
const CategoryCard = ({ name, description, slug, postCount, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 w-full">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <span className="bg-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
          {postCount} articles
        </span>
        <h3 className="text-xl font-bold mt-2 text-white">{name}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={`/blog/category/${slug}`} legacyBehavior>
        <a className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
          View all posts
          <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </Link>
    </div>
  </div>
);

// Featured Post Component
const FeaturedPost = ({ title, excerpt, slug, date, image, category }) => (
  <div className="flex flex-col md:flex-row gap-6 items-start">
    <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover"
      />
    </div>
    <div className="md:w-2/3">
      <Link href={`/blog/category/${category.slug}`} legacyBehavior>
        <a className="text-sm font-medium text-primary-600 mb-2 block hover:text-primary-700">
          {category.name}
        </a>
      </Link>
      <Link href={`/blog/${slug}`} legacyBehavior>
        <a className="text-xl font-bold mb-2 block text-gray-900 hover:text-primary-700">
          {title}
        </a>
      </Link>
      <p className="text-sm text-gray-500 mb-3">{date}</p>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} legacyBehavior>
        <a className="text-primary-600 font-medium hover:text-primary-700">
          Read more
        </a>
      </Link>
    </div>
  </div>
);

export default function BlogCategoriesPage() {
  const router = useRouter();
  
  // Blog Categories Data
  const categoriesData = {
    title: "Blog Categories",
    subtitle: "Explore articles by topic to find the information most relevant to your needs",
    categories: [
      {
        name: "Industry Insights",
        slug: "industry-insights",
        description: "Expert analysis and trends in the professional uniform industry across different sectors in Saudi Arabia.",
        postCount: 12,
        image: "/images/blog/categories/industry-insights.jpg",
        featuredPosts: [
          {
            title: "How COVID-19 Changed Healthcare Uniforms in Saudi Arabia",
            slug: "covid-19-healthcare-uniforms-saudi-arabia",
            excerpt: "The pandemic has transformed healthcare attire with a focus on safety, comfort, and functionality. Learn how Saudi healthcare providers are adapting their uniforms.",
            date: "September 15, 2023",
            image: "/images/blog/posts/healthcare-covid-uniforms.jpg",
            category: { name: "Industry Insights", slug: "industry-insights" }
          },
          {
            title: "The Evolution of Corporate Wear in Saudi Banks",
            slug: "evolution-corporate-wear-saudi-banks",
            excerpt: "From traditional attire to modern corporate uniforms, Saudi banks have transformed their professional image while respecting cultural values.",
            date: "August 22, 2023",
            image: "/images/blog/posts/corporate-bank-uniforms.jpg",
            category: { name: "Industry Insights", slug: "industry-insights" }
          }
        ]
      },
      {
        name: "Uniform Design",
        slug: "uniform-design",
        description: "Insights into creating effective uniform designs that balance aesthetics, functionality, and cultural considerations.",
        postCount: 15,
        image: "/images/blog/categories/uniform-design.jpg",
        featuredPosts: [
          {
            title: "Balancing Tradition and Modernity in Saudi Hospitality Uniforms",
            slug: "tradition-modernity-saudi-hospitality-uniforms",
            excerpt: "How luxury hotels and restaurants in Saudi Arabia are incorporating traditional elements into contemporary uniform designs.",
            date: "October 2, 2023",
            image: "/images/blog/posts/hospitality-uniform-design.jpg",
            category: { name: "Uniform Design", slug: "uniform-design" }
          },
          {
            title: "Color Psychology in Uniform Design for Saudi Workplaces",
            slug: "color-psychology-uniform-design-saudi",
            excerpt: "Understanding how color choices in professional attire impact brand perception, employee morale, and customer impressions in Saudi culture.",
            date: "July 18, 2023",
            image: "/images/blog/posts/color-psychology-uniforms.jpg",
            category: { name: "Uniform Design", slug: "uniform-design" }
          }
        ]
      },
      {
        name: "Fabric Technology",
        slug: "fabric-technology",
        description: "The latest advancements in fabric technology for professional uniforms, focusing on durability, comfort, and sustainability.",
        postCount: 8,
        image: "/images/blog/categories/fabric-technology.jpg",
        featuredPosts: [
          {
            title: "Climate-Adaptive Fabrics: The Future of Workwear in Saudi Arabia's Heat",
            slug: "climate-adaptive-fabrics-saudi-workwear",
            excerpt: "Innovative textiles helping professionals stay cool and comfortable while maintaining professional appearance in Saudi Arabia's challenging climate.",
            date: "September 30, 2023",
            image: "/images/blog/posts/climate-adaptive-fabrics.jpg",
            category: { name: "Fabric Technology", slug: "fabric-technology" }
          },
          {
            title: "Sustainable Uniform Materials: Environmental Responsibility in Saudi Business",
            slug: "sustainable-uniform-materials-saudi-business",
            excerpt: "How eco-friendly fabric choices for professional uniforms align with Saudi Vision 2030 sustainability goals.",
            date: "August 5, 2023",
            image: "/images/blog/posts/sustainable-uniforms.jpg",
            category: { name: "Fabric Technology", slug: "fabric-technology" }
          }
        ]
      },
      {
        name: "Workplace Culture",
        slug: "workplace-culture",
        description: "How professional attire influences company culture, employee morale, and customer perceptions in Saudi workplaces.",
        postCount: 10,
        image: "/images/blog/categories/workplace-culture.jpg",
        featuredPosts: [
          {
            title: "The Role of Uniforms in Building Team Cohesion in Saudi Companies",
            slug: "uniforms-team-cohesion-saudi-companies",
            excerpt: "Research findings on how consistent professional attire contributes to stronger team identity and collaboration in Saudi workplaces.",
            date: "October 10, 2023",
            image: "/images/blog/posts/team-cohesion-uniforms.jpg",
            category: { name: "Workplace Culture", slug: "workplace-culture" }
          },
          {
            title: "Customer Perception: How Staff Uniforms Impact Service Experience in Saudi Retail",
            slug: "customer-perception-uniforms-saudi-retail",
            excerpt: "A study on how professional staff appearance influences customer trust, engagement, and spending patterns in Saudi retail environments.",
            date: "July 29, 2023",
            image: "/images/blog/posts/retail-uniform-perception.jpg",
            category: { name: "Workplace Culture", slug: "workplace-culture" }
          }
        ]
      },
      {
        name: "Compliance & Regulations",
        slug: "compliance-regulations",
        description: "Understanding the regulatory requirements and standards for professional uniforms across different industries in Saudi Arabia.",
        postCount: 6,
        image: "/images/blog/categories/compliance-regulations.jpg",
        featuredPosts: [
          {
            title: "Saudi Healthcare Uniform Standards: A Comprehensive Guide",
            slug: "saudi-healthcare-uniform-standards-guide",
            excerpt: "Navigating the specific requirements for medical uniforms in Saudi hospitals, clinics, and healthcare facilities to ensure compliance.",
            date: "September 5, 2023",
            image: "/images/blog/posts/healthcare-standards.jpg",
            category: { name: "Compliance & Regulations", slug: "compliance-regulations" }
          },
          {
            title: "Safety Compliance in Industrial Workwear for Saudi Manufacturing",
            slug: "safety-compliance-industrial-workwear-saudi",
            excerpt: "Essential safety standards and certifications required for industrial uniforms in Saudi Arabia's manufacturing and construction sectors.",
            date: "August 12, 2023",
            image: "/images/blog/posts/industrial-safety-compliance.jpg",
            category: { name: "Compliance & Regulations", slug: "compliance-regulations" }
          }
        ]
      },
      {
        name: "Uniform Maintenance",
        slug: "uniform-maintenance",
        description: "Best practices for maintaining, cleaning, and extending the life of professional uniforms in Saudi Arabia's climate.",
        postCount: 7,
        image: "/images/blog/categories/uniform-maintenance.jpg",
        featuredPosts: [
          {
            title: "Extending Uniform Lifespan: Maintenance Tips for Saudi Professional Attire",
            slug: "extending-uniform-lifespan-saudi-maintenance",
            excerpt: "Cost-effective strategies for maintaining the appearance and durability of professional uniforms in Saudi Arabia's challenging environment.",
            date: "October 5, 2023",
            image: "/images/blog/posts/uniform-maintenance.jpg",
            category: { name: "Uniform Maintenance", slug: "uniform-maintenance" }
          },
          {
            title: "Commercial Laundry Solutions for Large-Scale Uniform Management in Saudi Organizations",
            slug: "commercial-laundry-uniform-management-saudi",
            excerpt: "How Saudi hospitals, hotels, and large corporations are optimizing their uniform cleaning and management processes.",
            date: "July 25, 2023",
            image: "/images/blog/posts/commercial-laundry.jpg",
            category: { name: "Uniform Maintenance", slug: "uniform-maintenance" }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{categoriesData.title} | UNEOM</title>
        <meta 
          name="description" 
          content="Explore UNEOM's blog categories covering industry insights, uniform design, fabric technology, workplace culture, compliance, and maintenance for professional attire in Saudi Arabia." 
        />
        <meta 
          property="og:title" 
          content={`${categoriesData.title} | UNEOM`} 
        />
        <meta 
          property="og:description" 
          content="Discover expert articles on professional uniforms across various industries in Saudi Arabia, from healthcare and hospitality to corporate and industrial sectors." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/blog-categories.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/blog/categories" 
        />
        <link 
          rel="alternate" 
          hreflang="ar" 
          href="https://uneom.com/ar/blog/categories" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{categoriesData.title}</h1>
              <p className="text-xl text-gray-600">{categoriesData.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoriesData.categories.map((category, index) => (
                <CategoryCard 
                  key={index}
                  name={category.name}
                  description={category.description}
                  slug={category.slug}
                  postCount={category.postCount}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts by Category */}
        {categoriesData.categories.map((category, index) => (
          <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <Link href={`/blog/category/${category.slug}`} legacyBehavior>
                  <a className="text-primary-600 font-medium hover:text-primary-700 flex items-center mt-4 md:mt-0">
                    View all in this category
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Link>
              </div>
              
              <div className="space-y-12">
                {category.featuredPosts.map((post, postIndex) => (
                  <FeaturedPost 
                    key={postIndex}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    date={post.date}
                    image={post.image}
                    category={post.category}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Subscribe Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Industry Insights</h2>
              <p className="text-xl mb-8 opacity-90">Subscribe to our newsletter to receive the latest articles, tips, and trends in professional uniforms.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md text-gray-800 w-full"
                />
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm mt-4 opacity-80">
                By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Navigation */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Explore Our Blog</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/blog" legacyBehavior>
                  <a className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    Latest Articles
                  </a>
                </Link>
                <Link href="/blog/popular" legacyBehavior>
                  <a className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    Most Popular
                  </a>
                </Link>
                <Link href="/blog/authors" legacyBehavior>
                  <a className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    Our Authors
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 