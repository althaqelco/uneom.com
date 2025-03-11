import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCategoryLayoutProps {
  categoryData: {
    locale: string;
    title: string;
    subtitle: string;
    heroImage: string;
    introduction: {
      title: string;
      content: string;
      image: string;
    };
    categories: Array<{
      id: string;
      name: string;
      description: string;
      image: string;
    }>;
    featuredProducts: Array<{
      id: string;
      name: string;
      shortDescription: string;
      image: string;
      price: string;
      rating: number;
      reviewCount: number;
      link: string;
    }>;
    filters: Array<{
      name: string;
      label: string;
      options: Array<{
        value: string;
        label: string;
      }>;
    }>;
    keyFeatures: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    customizationOptions: {
      title: string;
      description: string;
      options: string[];
      image: string;
      ctaText: string;
      ctaLink: string;
    };
    testimonials: Array<{
      quote: string;
      author: string;
      position: string;
      image: string;
    }>;
    fabricTechnology: {
      title: string;
      description: string;
      technologies: Array<{
        name: string;
        description: string;
      }>;
      image: string;
    };
    ctaText: string;
    ctaButtonText: string;
    ctaButtonLink: string;
    secondaryCtaText: string;
    secondaryCtaButtonText: string;
    secondaryCtaButtonLink: string;
  };
}

const ProductCategoryLayout: NextPage<ProductCategoryLayoutProps> = ({ categoryData }) => {
  const { locale } = categoryData;
  const isRTL = locale === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';
  
  return (
    <div dir={dir} className={`product-category-page ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="hero-section relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={categoryData.heroImage} 
            alt={categoryData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{categoryData.title}</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">{categoryData.subtitle}</p>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''} gap-12 items-center`}>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{categoryData.introduction.title}</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: categoryData.introduction.content }}></div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={categoryData.introduction.image} 
                  alt={categoryData.introduction.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{locale === 'en' ? 'Product Categories' : 'فئات المنتجات'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href={`/products/medical-scrubs/${category.id}`} className={`inline-block text-primary-600 font-medium hover:text-primary-800 ${isRTL ? 'transition-transform duration-300 hover:-translate-x-1' : 'transition-transform duration-300 hover:translate-x-1'}`}>
                    {locale === 'en' ? 'Explore Products' : 'استكشاف المنتجات'} {isRTL ? '←' : '→'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{locale === 'en' ? 'Featured Products' : 'منتجات مميزة'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryData.featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <Link href={product.link}>
                  <div className="h-64 relative">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-primary-600">{product.price}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-gray-500 text-xs ml-2">({product.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Filters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{locale === 'en' ? 'Browse Products' : 'تصفح المنتجات'}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.filters.map((filter) => (
                <div key={filter.name} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">{filter.label}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${filter.name}-${option.value}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`${filter.name}-${option.value}`} className={`ml-2 block text-sm text-gray-700 ${isRTL ? 'mr-2' : 'ml-2'}`}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                {locale === 'en' ? 'Apply Filters' : 'تطبيق الفلاتر'}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{locale === 'en' ? 'Key Features' : 'المميزات الرئيسية'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryData.keyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <span className="text-2xl">
                    {/* Placeholder for icon - in a real app, you'd render specific icons */}
                    {feature.icon === 'antimicrobial' && '🦠'}
                    {feature.icon === 'comfort' && '👕'}
                    {feature.icon === 'durability' && '⚒️'}
                    {feature.icon === 'modest' && '🧕'}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customization Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''} gap-12 items-center`}>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{categoryData.customizationOptions.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{categoryData.customizationOptions.description}</p>
              <ul className="space-y-3 mb-8">
                {categoryData.customizationOptions.options.map((option, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-gray-700 ${isRTL ? 'mr-2' : 'ml-2'}`}>{option}</span>
                  </li>
                ))}
              </ul>
              <Link href={categoryData.customizationOptions.ctaLink} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                {categoryData.customizationOptions.ctaText}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={categoryData.customizationOptions.image} 
                  alt={categoryData.customizationOptions.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{locale === 'en' ? 'Customer Testimonials' : 'آراء العملاء'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categoryData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fabric Technology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''} gap-12 items-center`}>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{categoryData.fabricTechnology.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{categoryData.fabricTechnology.description}</p>
              <div className="space-y-6">
                {categoryData.fabricTechnology.technologies.map((tech, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg text-primary-600 mb-2">{tech.name}</h3>
                    <p className="text-gray-700">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={categoryData.fabricTechnology.image} 
                  alt={categoryData.fabricTechnology.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{categoryData.ctaText}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={categoryData.ctaButtonLink} className="inline-block px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              {categoryData.ctaButtonText}
            </Link>
            <Link href={categoryData.secondaryCtaButtonLink} className="inline-block px-6 py-3 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              {categoryData.secondaryCtaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategoryLayout; 