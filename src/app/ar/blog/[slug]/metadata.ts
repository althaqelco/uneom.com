import { Metadata } from 'next';
import { getBlogPostBySlug } from '@/lib/blog';

type Props = {
  params: { slug: string }
}

// This is a dynamic metadata generator for Arabic blog posts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug, 'ar');
  
  if (!post) {
    return {
      title: 'المقال غير موجود | يونيوم السعودية',
      description: 'لم يتم العثور على مقال المدونة المطلوب. استكشف رؤى ودلائل صناعة الزي الموحد الأخرى لدينا.',
    };
  }

  const { title, description, imageUrl, publishDate, author, category } = post;
  
  return {
    title: `${title} | مدونة صناعة الزي الموحد يونيوم`,
    description: description || `اقرأ رؤيتنا حول ${title}. خبرة الزي الموحد المهني وملابس العمل من يونيوم، مزود الزي الموحد المتميز في المملكة العربية السعودية.`,
    keywords: `${title.toLowerCase()}, مدونة صناعة الزي الموحد، زي ${category.toLowerCase()}، ملابس العمل المهنية، مدونة يونيوم، زي موحد السعودية، دليل ملابس العمل ${category.toLowerCase()}، رؤى الزي الموحد، مدونة الملابس المهنية، يونيوم السعودية`,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      locale: 'ar',
      publishedTime: publishDate,
      authors: [author.name],
      images: [
        {
          url: imageUrl || '/images/blog/blog-default.jpg',
          width: 1200,
          height: 630,
          alt: `${title} - مدونة صناعة الزي الموحد يونيوم`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl || '/images/blog/blog-default.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://uneom.com/ar/blog/${params.slug}`,
      languages: {
        'en': `https://uneom.com/blog/${params.slug}`,
        'ar': `https://uneom.com/ar/blog/${params.slug}`,
      },
    },
  };
} 