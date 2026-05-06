import React from 'react';
import { industries } from '@/lib/data/industries';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const industry = industries.find(i => i.id === params.slug);
  if (!industry) return { title: 'القطاع غير موجود | UNEOM' };

  return {
    title: `${industry.nameAr} | UNEOM`,
    description: industry.descriptionAr,
    openGraph: {
      title: industry.nameAr,
      description: industry.descriptionAr,
      images: [{ url: industry.heroImage }]
    }
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.id,
  }));
}

export default function IndustryPageAr({ params }: PageProps) {
  const industry = industries.find(i => i.id === params.slug);

  if (!industry) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={industry.heroImage}
            alt={industry.nameAr}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <Container className="relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{industry.nameAr}</h1>
            <p className="text-xl text-gray-200 mb-8">{industry.descriptionAr}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ar/quote/"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                طلب عرض سعر
              </Link>
              <Link
                href="/ar/contact/"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-3 rounded-lg font-bold transition-colors"
              >
                استشارة خبير
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Products & Solutions */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading centered subtitle="حلول متخصصة">
            منتجات {industry.nameAr}
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industry.products.map((product, index) => (
              <Link key={index} href={product.href.startsWith('/shop') ? `/ar${product.href}` : product.href} className="group">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.nameAr}
                  </h3>
                  <div className="flex items-center text-primary-600 font-medium mt-4">
                    عرض المنتج
                    <svg className="mr-2 w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading subtitle="لماذا تختارنا">
                ميزة UNEOM لقطاع {industry.nameAr}
              </SectionHeading>
              <div className="space-y-8 mt-12">
                {industry.benefitsAr.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-2xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">مميزات الأداء الرئيسية</h3>
              <ul className="space-y-4">
                {industry.featuresAr.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
