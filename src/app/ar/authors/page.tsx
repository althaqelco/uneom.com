import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFilter, FaSearch } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import { authors } from '@/lib/data/authors';
import AuthorProfile from '@/components/author/AuthorProfile';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Add metadata
export const metadata: Metadata = {
  title: 'خبراء صناعة الأزياء الموحدة | UNEOM',
  description: 'تعرّف على فريق خبرائنا المتخصصين في صناعة الأزياء الموحدة مع معرفة متخصصة في الرعاية الصحية والأمن والضيافة وتصميم ومعايير الأزياء الصناعية.',
  keywords: 'خبراء الأزياء الموحدة، متخصصون في المنسوجات، استشاريو الأزياء الموحدة السعوديين، فريق UNEOM، متخصصو صناعة الأزياء الموحدة',
  metadataBase: new URL('https://uneom.com'),
  openGraph: {
    title: 'خبراء صناعة الأزياء الموحدة | UNEOM',
    description: 'تعرّف على فريق خبرائنا المتخصصين في صناعة الأزياء الموحدة مع معرفة متخصصة عبر قطاعات متعددة.',
    images: [
      {
        url: 'https://uneom.com/images/team/experts-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'خبراء صناعة الأزياء الموحدة لدى UNEOM'}
    ],
    type: 'website'},
  twitter: {
    card: 'summary_large_image',
    title: 'خبراء صناعة الأزياء الموحدة | UNEOM',
    description: 'تعرّف على فريق خبرائنا المتخصصين في صناعة الأزياء الموحدة مع معرفة متخصصة عبر قطاعات متعددة.',
    images: ['https://uneom.com/images/team/experts-banner.jpg']}};

// Industry categories for experts
const industryCategories = [
  { id: 'all', name: 'جميع الخبراء' },
  { id: 'healthcare', name: 'الرعاية الصحية' },
  { id: 'security', name: 'الأمن' },
  { id: 'education', name: 'التعليم' },
  { id: 'hospitality', name: 'الضيافة' },
  { id: 'industrial', name: 'الصناعي' },
];

export default function AuthorsPage() {
  // Sort authors by featured status and then by experience
  const sortedAuthors = [...authors].sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }
    return b.experience - a.experience;
  });

  // Schema.org structured data for the organization and experts
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UNEOM",
    "url": "https://www.uneom.com",
    "logo": "https://www.uneom.com/images/logo.png",
    "description": "المزود الرائد في المملكة العربية السعودية للأزياء الموحدة والمريول المهني للشركات",
    "employee": sortedAuthors.map(author => ({
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.title,
      "description": author.bio,
      "image": author.avatar,
      "sameAs": [
        author.linkedin,
        author.twitter,
      ].filter(Boolean)}))};

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">خبراء صناعة الأزياء الموحدة</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">خبراء صناعة الأزياء الموحدة</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">خبراء صناعة الأزياء الموحدة</h1>
      
        <Container>
          <div className="max-w-4xl mx-auto text-center rtl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              تعرّف على خبراء صناعة الأزياء الموحدة لدينا
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              المتخصصون الرائدون في الأزياء الموحدة في المملكة العربية السعودية مع خبرة واسعة في قطاعات وصناعات متعددة
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {industryCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.id === 'all' ? '/ar/authors' : `/ar/authors?category=${category.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    category.id === 'all'
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-neutral-50 rtl">
        <Container>
          {/* Featured Experts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-neutral-200">
              الخبراء المميزون
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sortedAuthors
                .filter(author => author.featured)
                .slice(0, 4)
                .map((author, index) => (
                  <AuthorProfile key={author.id} author={author} />
                ))}
            </div>
          </div>
          
          {/* All Experts */}
          <div>
            <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-neutral-200">
              جميع متخصصي الأزياء الموحدة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sortedAuthors.map((author) => (
                <Link 
                  key={author.id}
                  href={`/ar/authors/${author.id}`}
                  className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition group"
                >
                  <div className="flex items-center">
                    <div className="ml-4 flex-shrink-0">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {author.name}
                      </h3>
                      <p className="text-neutral-600 text-sm">{author.title}</p>
                      <div className="mt-1 inline-flex items-center text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">
                        <span>خبرة {author.experience}+ سنة</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.slice(0, 2).map((area, index) => (
                        <span 
                          key={index}
                          className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full text-xs"
                        >
                          {area}
                        </span>
                      ))}
                      {author.expertise.length > 2 && (
                        <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full text-xs">
                          +{author.expertise.length - 2} المزيد
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary-50 rtl">
        <Container>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              بحاجة إلى استشارة متخصصة في الأزياء الموحدة؟
            </h2>
            <p className="text-neutral-600 mb-6">
              يمكن لمتخصصينا في الصناعة مساعدتك في تصميم برنامج الأزياء الموحدة المثالي لاحتياجات عملك.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/ar/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                طلب استشارة
              </Link>
              <Link
                href="/ar/quote"
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-6 py-3 rounded-md font-medium transition-colors"
              >
                الحصول على عرض سعر
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 