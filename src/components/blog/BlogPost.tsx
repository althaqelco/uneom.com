'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import Container from '@/components/ui/Container';
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';

interface Author {
  name: string;
  title?: string;
  avatar?: string;
}

interface RelatedPost {
  title: string;
  slug: string;
}

interface BlogPostProps {
  locale: string;
  post: {
    title: string;
    date: string;
    author: Author;
    featuredImage: string;
    excerpt: string;
    content: string;
    tags?: string[];
    relatedPosts?: RelatedPost[];
  };
}

function formatDate(date: string, locale: string) {
  try {
    return format(new Date(date), 'MMMM dd, yyyy', {
      locale: locale === 'ar' ? arSA : undefined
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return date;
  }
}

export default function BlogPost({ locale, post }: BlogPostProps) {
  const {
    title,
    date,
    author,
    featuredImage,
    excerpt,
    content,
    tags = [],
    relatedPosts = []
  } = post;

  const formattedDate = formatDate(date, locale);
  const isArabic = locale === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';

  return (
    <article className={`py-16 ${textAlign}`} dir={dir}>
      <Container>
        {/* Breadcrumbs */}
        <nav className="flex text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href={`/${locale}`} className="text-neutral-600 hover:text-primary-700">
                {isArabic ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-neutral-400">/</span>
              <Link href={`/${locale}/blog`} className="text-neutral-600 hover:text-primary-700">
                {isArabic ? 'المدونة' : 'Blog'}
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-neutral-400">/</span>
              <span className="text-neutral-900">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-sm text-neutral-600 mb-6 gap-6">
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              <time dateTime={date}>{formattedDate}</time>
            </div>
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>{author.name}</span>
              {author.title && (
                <span className="text-neutral-500 ml-1">- {author.title}</span>
              )}
            </div>
          </div>
          {tags.length > 0 && (
            <div className="flex items-center gap-2">
              <FaTags className="text-neutral-600" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${locale}/blog/tags/${tag}`}
                    className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700 hover:bg-neutral-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[2/1] mb-12">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">
              {isArabic ? 'مقالات ذات صلة' : 'Related Posts'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${locale}/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <h3 className="text-xl font-semibold group-hover:text-primary-600">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
} 