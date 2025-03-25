import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Industry Blog | Professional Workwear Insights | UNEOM Saudi Arabia',
  description: 'Expert insights, trends, and guides about professional uniforms and workwear in Saudi Arabia. Stay updated with the latest in corporate, healthcare, and industrial attire.',
  keywords: 'uniform blog Saudi Arabia, workwear trends, professional attire insights, uniform industry news, corporate fashion blog, healthcare uniforms guide, industrial workwear tips, Saudi uniform trends, professional dress code, uniform maintenance guide',
  openGraph: {
    title: 'Professional Uniform Industry Insights & Trends | UNEOM Saudi Arabia',
    description: 'Discover expert insights and latest trends in professional uniforms. From healthcare to corporate wear, explore comprehensive guides for Saudi Arabia\'s uniform industry.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/blog/blog-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Professional Uniform Industry Blog',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Industry Blog | UNEOM Saudi Arabia',
    description: 'Expert insights and trends about professional uniforms in Saudi Arabia. Stay informed with our comprehensive guides and industry updates.',
    images: ['/images/blog/blog-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/blog',
    languages: {
      'en': 'https://uneom.com/blog',
      'ar': 'https://uneom.com/ar/blog',
    },
  },
}; 