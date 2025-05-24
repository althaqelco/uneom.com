import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

// Component imports
import Layout from '@/components/layout/Layout';
import ProductGallery from '@/components/product/ProductGallery';
import ColorSelector from '@/components/product/ColorSelector';
import FabricSelector from '@/components/product/FabricSelector';
import AddToQuoteButton from '@/components/product/AddToQuoteButton';
import ProductTabs from '@/components/product/ProductTabs';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import RelatedProducts from '@/components/product/RelatedProducts';

// Mock API functions - in a real app, these would fetch from a CMS or API
const getProductData = async (category, product) => {
  // This is a mock implementation. In a real app, you would fetch from a CMS or API
  // For this example, we're returning the data for the premium-corporate-collection
  
  // In production, we would check the category and product slugs to determine which product to return
  return {
    id: 'premium-corporate-collection',
    slug: 'premium-corporate-collection',
    category: 'corporate',
    categoryName: {
      en: 'Corporate Uniforms',
      ar: 'أزياء الشركات'
    },
    name: {
      en: 'Premium Corporate Collection',
      ar: 'مجموعة الشركات الممتازة'
    },
    shortDescription: {
      en: 'Elevate your brand with our premium corporate uniform collection, designed to project professionalism and reinforce your company\'s visual identity.',
      ar: 'ارتق بعلامتك التجارية مع مجموعة الأزياء الموحدة للشركات الفاخرة لدينا، المصممة لإظهار الاحترافية وتعزيز الهوية البصرية لشركتك.'
    },
    description: {
      en: `UNEOM's Premium Corporate Collection represents the pinnacle of executive uniform design, crafted specifically for Saudi Arabia's leading organizations. This comprehensive uniform program includes a range of coordinated garments designed to enhance your brand's visual identity while ensuring exceptional comfort and functionality in professional environments.

      Every element of this collection has been meticulously designed to project authority, professionalism, and brand consistency across your organization. From executive suites to customer-facing roles, our Premium Corporate Collection creates a unified yet role-appropriate aesthetic that strengthens your corporate identity.

      Our design approach combines contemporary styling with traditional Saudi business sensibilities, creating corporate uniforms that feel both current and culturally appropriate. Advanced fabric technologies ensure comfort in Saudi Arabia's climate while maintaining a crisp, professional appearance throughout the workday.`,
      ar: `تمثل مجموعة الشركات الفاخرة من UNEOM ذروة تصميم الزي الموحد التنفيذي، المصمم خصيصًا للمؤسسات الرائدة في المملكة العربية السعودية. يتضمن برنامج الزي الموحد الشامل هذا مجموعة من الملابس المنسقة المصممة لتعزيز الهوية البصرية لعلامتك التجارية مع ضمان راحة استثنائية ووظائف في البيئات المهنية.

      تم تصميم كل عنصر من عناصر هذه المجموعة بدقة لإظهار السلطة والاحترافية واتساق العلامة التجارية عبر مؤسستك. من الأجنحة التنفيذية إلى الأدوار التي تواجه العملاء، تخلق مجموعة الشركات الفاخرة لدينا جمالية موحدة ومناسبة للدور تعزز هويتك المؤسسية.
      
      يجمع نهج التصميم لدينا بين التصميم المعاصر والحساسيات التجارية السعودية التقليدية، مما يخلق أزياء موحدة للشركات تشعر بأنها حديثة ومناسبة ثقافيًا. تضمن تقنيات النسيج المتقدمة الراحة في مناخ المملكة العربية السعودية مع الحفاظ على مظهر أنيق واحترافي طوال يوم العمل.`
    },
    features: {
      en: [
        "Premium European fabrics with advanced performance technologies",
        "Corporate color matching with brand guideline integration",
        "Multiple style options for different departments and roles",
        "Custom embroidery and logo application services",
        "Exclusive Saudi-inspired design details",
        "Tailored fit options for all body types",
        "Extended size range including specialized sizing"
      ],
      ar: [
        "أقمشة أوروبية فاخرة مع تقنيات أداء متقدمة",
        "مطابقة الألوان المؤسسية مع دمج إرشادات العلامة التجارية",
        "خيارات أنماط متعددة لمختلف الإدارات والأدوار",
        "خدمات التطريز المخصص وتطبيق الشعار",
        "تفاصيل تصميم مستوحاة من السعودية حصريًا",
        "خيارات التناسب المصممة لجميع أنواع الجسم",
        "نطاق حجم موسع بما في ذلك القياسات المتخصصة"
      ]
    },
    images: [
      {
        src: '/images/products/premium-corporate-collection-main.jpg',
        alt: {
          en: 'Premium corporate uniforms for Saudi businesses',
          ar: 'أزياء شركات فاخرة للشركات السعودية'
        }
      },
      {
        src: '/images/products/premium-corporate-male.jpg',
        alt: {
          en: 'Male executive corporate uniform',
          ar: 'الزي الموحد للشركات للتنفيذيين الذكور'
        }
      },
      {
        src: '/images/products/premium-corporate-female.jpg',
        alt: {
          en: 'Female executive corporate uniform',
          ar: 'الزي الموحد للشركات للتنفيذيات'
        }
      },
      {
        src: '/images/products/premium-corporate-details.jpg',
        alt: {
          en: 'Corporate uniform fabric and detail close-up',
          ar: 'نسيج الزي الموحد للشركات وتفاصيل مقربة'
        }
      },
      {
        src: '/images/products/premium-corporate-team.jpg',
        alt: {
          en: 'Corporate team wearing coordinated uniforms',
          ar: 'فريق الشركة يرتدي أزياء موحدة منسقة'
        }
      }
    ],
    colors: [
      { name: { en: 'Corporate Navy', ar: 'كحلي مؤسسي' }, code: '#1A2A57', image: '/images/colors/corporate-navy.jpg' },
      { name: { en: 'Executive Charcoal', ar: 'فحمي تنفيذي' }, code: '#2D3142', image: '/images/colors/executive-charcoal.jpg' },
      { name: { en: 'Professional Grey', ar: 'رمادي احترافي' }, code: '#5D6E89', image: '/images/colors/professional-grey.jpg' },
      { name: { en: 'Royal Blue', ar: 'أزرق ملكي' }, code: '#2B5DAB', image: '/images/colors/royal-blue.jpg' },
      { name: { en: 'Burgundy', ar: 'نبيذي' }, code: '#8C1C2D', image: '/images/colors/burgundy.jpg' }
    ],
    fabrics: [
      { 
        id: 'premium-wool-blend',
        name: { en: 'Premium Wool Blend', ar: 'مزيج الصوف الفاخر' },
        composition: { en: '60% Wool, 38% Polyester, 2% Elastane', ar: '60% صوف، 38% بوليستر، 2% إيلاستين' },
        description: { 
          en: 'Our finest fabric option providing exceptional drape and comfort with natural stretch.',
          ar: 'خيار النسيج الأفضل لدينا يوفر انسدالًا راحة استثنائية مع تمدد طبيعي.'
        }
      },
      { 
        id: 'performance-blend',
        name: { en: 'Performance Blend', ar: 'مزيج الأداء' },
        composition: { en: '65% Polyester, 33% Viscose, 2% Elastane', ar: '65% بوليستر، 33% فسكوز، 2% إيلاستين' },
        description: { 
          en: 'Wrinkle-resistant with enhanced durability and moisture management for all-day comfort.',
          ar: 'مقاوم للتجاعيد مع متانة محسنة وإدارة الرطوبة للراحة طوال اليوم.'
        }
      },
      { 
        id: 'cotton-luxury',
        name: { en: 'Cotton Luxury', ar: 'فخامة القطن' },
        composition: { en: '75% Cotton, 22% Polyester, 3% Elastane', ar: '75% قطن، 22% بوليستر، 3% إيلاستين' },
        description: { 
          en: 'Premium cotton blend offering exceptional breathability ideal for Saudi climate.',
          ar: 'مزيج قطني فاخر يوفر قابلية استثنائية للتنفس مثالية لمناخ المملكة العربية السعودية.'
        }
      }
    ],
    customization: {
      en: {
        title: "Tailoring Your Corporate Identity",
        description: "Our Premium Corporate Collection can be fully customized to align with your brand guidelines. Options include:",
        options: [
          "Corporate color matching and custom fabric development",
          "Logo embroidery, printing, or custom hardware",
          "Department-specific design variations",
          "Custom fabric patterns incorporating brand elements",
          "Named personalization for executive team members",
          "Role identification through design elements"
        ]
      },
      ar: {
        title: "تفصيل هويتك المؤسسية",
        description: "يمكن تخصيص مجموعة الشركات الفاخرة لدينا بالكامل لتتماشى مع إرشادات علامتك التجارية. تشمل الخيارات:",
        options: [
          "مطابقة الألوان المؤسسية وتطوير الأقمشة المخصصة",
          "تطريز الشعار أو الطباعة أو الأجهزة المخصصة",
          "تنويعات التصميم الخاصة بالقسم",
          "أنماط نسيج مخصصة تتضمن عناصر العلامة التجارية",
          "تخصيص مسمى لأعضاء الفريق التنفيذي",
          "تحديد الدور من خلال عناصر التصميم"
        ]
      }
    },
    testimonials: [
      {
        quote: {
          en: "UNEOM's Premium Corporate Collection has transformed our company's professional image. The attention to detail and quality of materials has impressed both our staff and clients alike.",
          ar: "لقد حولت مجموعة الشركات الفاخرة من UNEOM الصورة المهنية لشركتنا. لقد أثار الاهتمام بالتفاصيل وجودة المواد إعجاب موظفينا وعملائنا على حد سواء."
        },
        name: {
          en: "Mohammed Al-Qahtani",
          ar: "محمد القحطاني"
        },
        company: {
          en: "Saudi National Bank",
          ar: "البنك الوطني السعودي"
        },
        role: {
          en: "Head of Corporate Identity",
          ar: "رئيس الهوية المؤسسية"
        }
      },
      {
        quote: {
          en: "The custom program UNEOM created for our firm perfectly balances professionalism with comfort. Their ability to match our corporate colors and incorporate subtle branding elements exceeded our expectations.",
          ar: "يوازن البرنامج المخصص الذي أنشأته UNEOM لشركتنا بشكل مثالي بين الاحترافية والراحة. لقد تجاوزت قدرتهم على مطابقة ألوان شركتنا ودمج عناصر العلامة التجارية الدقيقة توقعاتنا."
        },
        name: {
          en: "Fatima Al-Saud",
          ar: "فاطمة آل سعود"
        },
        company: {
          en: "Riyadh Financial Consultants",
          ar: "مستشارو الرياض الماليون"
        },
        role: {
          en: "Chief Marketing Officer",
          ar: "مدير التسويق التنفيذي"
        }
      }
    ],
    pricing: {
      en: {
        startingAt: "Starting from SAR 1,200 per employee",
        volumeDiscount: "Volume discounts available for orders of 50+ uniforms",
        includes: [
          "Comprehensive sizing and fitting service",
          "2-year quality guarantee",
          "Maintenance and care guidelines",
          "Corporate uniform management program"
        ]
      },
      ar: {
        startingAt: "بدءًا من 1,200 ريال سعودي للموظف الواحد",
        volumeDiscount: "خصومات على الكميات الكبيرة متاحة للطلبات التي تزيد عن 50 زيًا موحدًا",
        includes: [
          "خدمة شاملة للقياس والتركيب",
          "ضمان الجودة لمدة عامين",
          "إرشادات الصيانة والعناية",
          "برنامج إدارة الزي الموحد للشركات"
        ]
      }
    },
    relatedProducts: [
      'standard-corporate-collection',
      'executive-accessories',
      'corporate-outerwear'
    ],
    seo: {
      title: {
        en: 'Premium Corporate Uniforms Saudi Arabia | Executive Business Attire | UNEOM',
        ar: 'أزياء الشركات الفاخرة في المملكة العربية السعودية | ملابس العمل التنفيذية | UNEOM'
      },
      description: {
        en: 'Premium corporate uniforms designed for Saudi Arabian businesses. Elevate your brand image with UNEOM\'s luxury corporate attire featuring custom tailoring and premium fabrics.',
        ar: 'أزياء شركات فاخرة مصممة للشركات السعودية. ارتقِ بصورة علامتك التجارية مع ملابس الشركات الفاخرة من UNEOM التي تتميز بالتفصيل المخصص والأقمشة الفاخرة.'
      },
      keywords: [
        'premium corporate uniforms Saudi Arabia',
        'luxury business attire Riyadh',
        'executive uniform program',
        'custom corporate uniforms',
        'Saudi business wear',
        'professional corporate image'
      ]
    }
  };
};

// Get all product paths for static generation - in a real app, this would query all categories and products
const getAllProductPaths = async () => {
  // This is a mock implementation. In a real app, this would fetch all possible combinations from a CMS or API
  return [
    { params: { category: 'corporate', product: 'premium-corporate-collection' } },
    { params: { category: 'corporate', product: 'standard-corporate-collection' } },
    { params: { category: 'healthcare', product: 'antimicrobial-scrubs' } }
  ];
};

// Schema.org structured data
const ProductSchemaScript = ({ product, locale, baseUrl }) => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name[locale],
    description: product.shortDescription[locale],
    image: product.images.map(img => `${baseUrl}${img.src}`),
    brand: {
      '@type': 'Brand',
      name: 'UNEOM'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/${locale === 'ar' ? 'ar/' : ''}shop/${product.category}/${product.slug}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function ProductPage({ productData }) {
  const router = useRouter();
  const { locale } = router;
  const isArabic = locale === 'ar';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://uneom.com';
  
  // Fallback state for incremental static regeneration
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
  
  // State for product options
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedFabric, setSelectedFabric] = useState(productData.fabrics[0]);
  
  // Translations
  const t = {
    features: {
      en: 'Product Features',
      ar: 'مميزات المنتج'
    },
    colors: {
      en: 'Available Colors',
      ar: 'الألوان المتاحة'
    },
    fabrics: {
      en: 'Select Fabric',
      ar: 'اختر النسيج'
    },
    customization: {
      en: 'Customization Options',
      ar: 'خيارات التخصيص'
    },
    testimonials: {
      en: 'Client Testimonials',
      ar: 'شهادات العملاء'
    },
    pricing: {
      en: 'Pricing Information',
      ar: 'معلومات التسعير'
    },
    includes: {
      en: 'Package Includes',
      ar: 'الحزمة تشمل'
    },
    requestQuote: {
      en: 'Request Corporate Program Quote',
      ar: 'طلب عرض سعر برنامج الشركات'
    },
    consultation: {
      en: 'Book Consultation',
      ar: 'حجز استشارة'
    },
    relatedProducts: {
      en: 'Related Corporate Products',
      ar: 'منتجات الشركات ذات الصلة'
    }
  };

  return (
    <Layout>
      <NextSeo
        title={productData.seo.title[locale]}
        description={productData.seo.description[locale]}
        canonical={`${baseUrl}/${isArabic ? 'ar/' : ''}shop/${productData.category}/${productData.slug}`}
        openGraph={{
          type: 'product',
          url: `${baseUrl}/${isArabic ? 'ar/' : ''}shop/${productData.category}/${productData.slug}`,
          title: productData.seo.title[locale],
          description: productData.seo.description[locale],
          images: [
            {
              url: `${baseUrl}${productData.images[0].src}`,
              width: 1200,
              height: 630,
              alt: productData.images[0].alt[locale],
            }
          ]
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: productData.seo.keywords.join(', ')
          }
        ]}
      />
      
      <Head>
        <link 
          rel="alternate" 
          hrefLang="en" 
          href={`${baseUrl}/shop/${productData.category}/${productData.slug}`} 
        />
        <link 
          rel="alternate" 
          hrefLang="ar" 
          href={`${baseUrl}/ar/shop/${productData.category}/${productData.slug}`} 
        />
      </Head>
      
      <ProductSchemaScript product={productData} locale={locale} baseUrl={baseUrl} />
      
      <main className={`product-page ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="bg-gray-50 dark:bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="breadcrumbs text-sm mb-0">
              <Link href={`/${isArabic ? 'ar' : ''}`} className="hover:text-primary">
                {isArabic ? 'الرئيسية' : 'Home'}
              </Link>
              {' '}/{' '}
              <Link href={`/${isArabic ? 'ar/shop' : 'shop'}`} className="hover:text-primary">
                {isArabic ? 'المتجر' : 'Shop'}
              </Link>
              {' '}/{' '}
              <Link href={`/${isArabic ? 'ar/shop/' : 'shop/'}${productData.category}`} className="hover:text-primary">
                {productData.categoryName[locale]}
              </Link>
              {' '}/{' '}
              <span className="font-medium">{productData.name[locale]}</span>
            </div>
          </div>
        </div>
        
        <section className="product-main py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Gallery */}
              <div className="product-gallery">
                <ProductGallery images={productData.images} locale={locale} />
              </div>
              
              {/* Product Info */}
              <div className="product-info">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name[locale]}</h1>
                
                <p className="text-xl text-primary font-semibold mb-6">{productData.pricing[locale].startingAt}</p>
                
                <div className="mb-8">
                  <p className="text-gray-700 dark:text-gray-300">{productData.shortDescription[locale]}</p>
                </div>
                
                {/* Product Features */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">{t.features[locale]}</h2>
                  <ul className="space-y-2">
                    {productData.features[locale].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Color Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">{t.colors[locale]}</h2>
                  <ColorSelector 
                    colors={productData.colors} 
                    selectedColor={selectedColor} 
                    onSelectColor={setSelectedColor}
                    locale={locale}
                  />
                </div>
                
                {/* Fabric Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">{t.fabrics[locale]}</h2>
                  <FabricSelector 
                    fabrics={productData.fabrics} 
                    selectedFabric={selectedFabric} 
                    onSelectFabric={setSelectedFabric}
                    locale={locale}
                  />
                </div>
                
                {/* Call to Action */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <AddToQuoteButton 
                    text={t.requestQuote[locale]}
                    productId={productData.id}
                    color={selectedColor.name[locale]}
                    fabric={selectedFabric.name[locale]}
                    size="large"
                  />
                  
                  <Link href={`/${isArabic ? 'ar/' : ''}contact?product=${productData.id}`}>
                    <button className="btn btn-outline-primary px-6 py-3 rounded">
                      {t.consultation[locale]}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Details Tabs */}
        <section className="product-details bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <ProductTabs 
              locale={locale}
              tabs={[
                {
                  id: 'description',
                  label: { en: 'Description', ar: 'الوصف' },
                  content: (
                    <div className="prose prose-lg max-w-none">
                      {productData.description[locale].split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )
                },
                {
                  id: 'customization',
                  label: { en: 'Customization', ar: 'التخصيص' },
                  content: (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{productData.customization[locale].title}</h3>
                      <p className="mb-6">{productData.customization[locale].description}</p>
                      
                      <ul className="grid md:grid-cols-2 gap-4">
                        {productData.customization[locale].options.map((option, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                },
                {
                  id: 'pricing',
                  label: { en: 'Pricing', ar: 'التسعير' },
                  content: (
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{productData.pricing[locale].startingAt}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{productData.pricing[locale].volumeDiscount}</p>
                      
                      <h4 className="text-xl font-semibold mb-3">{t.includes[locale]}:</h4>
                      <ul className="space-y-3">
                        {productData.pricing[locale].includes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="testimonials bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.testimonials[locale]}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {productData.testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote[locale]}
                  name={testimonial.name[locale]}
                  company={testimonial.company[locale]}
                  role={testimonial.role[locale]}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Products */}
        <section className="related-products bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.relatedProducts[locale]}</h2>
            
            <RelatedProducts 
              productIds={productData.relatedProducts} 
              locale={locale}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];
  const productPaths = await getAllProductPaths();
  
  // Generate paths for each locale
  for (const locale of locales) {
    productPaths.forEach(({ params }) => {
      paths.push({
        params: { 
          category: params.category,
          product: params.product
        },
        locale
      });
    });
  }
  
  return {
    paths,
    fallback: true // Use fallback for incremental static regeneration
  };
}

export async function getStaticProps({ params, locale }) {
  try {
    const { category, product } = params;
    const productData = await getProductData(category, product);
    
    return {
      props: {
        productData
      },
      // Revalidate the page every 24 hours (ISR)
      revalidate: 86400,
    };
  } catch (error) {
    console.error(`Error loading product: ${error}`);
    return {
      notFound: true
    };
  }
} 