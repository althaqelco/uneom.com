/**
 * LocalSEO Component
 * 
 * Implements location-specific SEO optimizations including:
 * - LocalBusiness Schema.org structured data
 * - City-specific meta tags
 * - Geographic targeting
 * 
 * This helps improve rankings for location-based searches in Saudi Arabia.
 */

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import StructuredData from '@/components/seo/StructuredData';
import CustomMetaTags from '@/components/seo/CustomMetaTags';
import { generateLocalBusinessSchema } from '@/lib/seo/schema-generator';

// Location data for major Saudi Arabian cities
const locationData: Record<string, {
  name: {en: string, ar: string},
  region: {en: string, ar: string},
  coordinates: {latitude: number, longitude: number},
  postalCode: string,
  areaServed: {en: string, ar: string}[],
}> = {
  riyadh: {
    name: {en: 'Riyadh', ar: 'الرياض'},
    region: {en: 'Riyadh Province', ar: 'منطقة الرياض'},
    coordinates: {latitude: 24.7136, longitude: 46.6753},
    postalCode: '12214',
    areaServed: [
      {en: 'Riyadh', ar: 'الرياض'},
      {en: 'Diriyah', ar: 'الدرعية'},
      {en: 'Al Kharj', ar: 'الخرج'}
    ]
  },
  jeddah: {
    name: {en: 'Jeddah', ar: 'جدة'},
    region: {en: 'Makkah Province', ar: 'منطقة مكة المكرمة'},
    coordinates: {latitude: 21.4858, longitude: 39.1925},
    postalCode: '23511',
    areaServed: [
      {en: 'Jeddah', ar: 'جدة'},
      {en: 'Makkah', ar: 'مكة المكرمة'},
      {en: 'Taif', ar: 'الطائف'}
    ]
  },
  dammam: {
    name: {en: 'Dammam', ar: 'الدمام'},
    region: {en: 'Eastern Province', ar: 'المنطقة الشرقية'},
    coordinates: {latitude: 26.4207, longitude: 50.0888},
    postalCode: '32241',
    areaServed: [
      {en: 'Dammam', ar: 'الدمام'},
      {en: 'Khobar', ar: 'الخبر'},
      {en: 'Dhahran', ar: 'الظهران'}
    ]
  },
  mecca: {
    name: {en: 'Mecca', ar: 'مكة المكرمة'},
    region: {en: 'Makkah Province', ar: 'منطقة مكة المكرمة'},
    coordinates: {latitude: 21.3891, longitude: 39.8579},
    postalCode: '24231',
    areaServed: [
      {en: 'Mecca', ar: 'مكة المكرمة'},
      {en: 'Taif', ar: 'الطائف'}
    ]
  },
  medina: {
    name: {en: 'Medina', ar: 'المدينة المنورة'},
    region: {en: 'Medina Province', ar: 'منطقة المدينة المنورة'},
    coordinates: {latitude: 24.5247, longitude: 39.5692},
    postalCode: '42311',
    areaServed: [
      {en: 'Medina', ar: 'المدينة المنورة'},
      {en: 'Yanbu', ar: 'ينبع'}
    ]
  }
};

// Business hours for all locations
const businessHours = [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Saturday"],
    "opens": "10:00",
    "closes": "15:00"
  }
];

// Services offered in all locations
const services = {
  en: [
    "Corporate Uniforms",
    "Healthcare Uniforms",
    "Hospitality Uniforms",
    "Industrial Workwear",
    "School Uniforms",
    "Security Uniforms"
  ],
  ar: [
    "أزياء موحدة للشركات",
    "أزياء الرعاية الصحية",
    "أزياء الضيافة",
    "ملابس العمل الصناعية",
    "زي المدارس",
    "زي الأمن"
  ]
};

interface LocalSEOProps {
  location: string;
  title?: string;
  description?: string;
  images?: string[];
  telephone?: string;
  email?: string;
  priceRange?: string;
  showMap?: boolean;
}

const LocalSEO: React.FC<LocalSEOProps> = ({
  location,
  title,
  description,
  images = [],
  telephone = "+966112345678",
  email = "info@uneom.com",
  priceRange = "₪₪-₪₪₪",
  showMap = true
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isArabic = locale === 'ar';
  const baseUrl = 'https://uneom.com';
  
  // Get location data for the specified location
  const locationInfo = locationData[location.toLowerCase()];
  
  if (!locationInfo) {
    console.error(`Location data not found for: ${location}`);
    return null;
  }
  
  // Determine location name based on locale
  const locationName = isArabic ? locationInfo.name.ar : locationInfo.name.en;
  const regionName = isArabic ? locationInfo.region.ar : locationInfo.region.en;
  
  // Default title and description if not provided
  const defaultTitle = isArabic 
    ? `يونيوم ${locationName} - أزياء موحدة وملابس عمل في ${locationName}` 
    : `UNEOM ${locationName} - Uniforms & Workwear in ${locationName}`;
  
  const defaultDescription = isArabic
    ? `يونيوم ${locationName} هي المزود الرائد للأزياء الموحدة وملابس العمل في ${locationName}، ${regionName}. نقدم مجموعة واسعة من الخيارات للشركات والمستشفيات والفنادق والمدارس.`
    : `UNEOM ${locationName} is the leading provider of uniforms and workwear in ${locationName}, ${regionName}. We offer a wide range of options for corporations, hospitals, hotels, and schools.`;
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  
  // Generate area served for schema
  const areaServedSchema = locationInfo.areaServed.map(area => ({
    "@type": "City",
    "name": isArabic ? area.ar : area.en
  }));
  
  // Format business hours for schema generator
  const formattedBusinessHours = [
    { days: "Sunday, Monday, Tuesday, Wednesday, Thursday", hours: "09:00-18:00" },
    { days: "Saturday", hours: "10:00-15:00" }
  ];

  // Prepare image URL
  const imageUrl = images.length > 0 
    ? (images[0].startsWith('http') ? images[0] : `/images/locations/${location.toLowerCase()}/${images[0]}`) 
    : `/images/locations/${location.toLowerCase()}/storefront.jpg`;

  // Generate local business schema using our utility
  const localBusinessSchema = generateLocalBusinessSchema(
    locationInfo.name.en,
    {
      street: isArabic ? "شارع الملك فهد" : "King Fahd Road",
      city: locationInfo.name.en,
      postalCode: locationInfo.postalCode,
      region: locationInfo.region.en,
      country: "Saudi Arabia"
    },
    {
      phone: telephone,
      email: email
    },
    formattedBusinessHours,
    pageDescription,
    imageUrl,
    {
      latitude: locationInfo.coordinates.latitude.toString(),
      longitude: locationInfo.coordinates.longitude.toString()
    },
    [
      "https://www.facebook.com/uneom",
      "https://www.instagram.com/uneom",
      "https://twitter.com/uneom"
    ]
  );
  
  return (
    <>
      {/* Add structured data for LocalBusiness */}
      <StructuredData
        type="LocalBusiness"
        data={localBusinessSchema}
        language={locale}
      />
      
      {/* Use CustomMetaTags component for location-specific meta tags */}
      <CustomMetaTags 
        pageType="location"
        location={locationInfo.name.en}
        geoPosition={{
          latitude: locationInfo.coordinates.latitude.toString(),
          longitude: locationInfo.coordinates.longitude.toString()
        }}
        geoRegion="SA"
        geoPlaceName={locationInfo.name.en}
      />
      
      {/* Add traditional location-specific meta tags for broader compatibility */}
      <Head>
        {/* City-specific keywords */}
        <meta name="city" content={locationInfo.name.en} />
        <meta name="state" content={locationInfo.region.en} />
        
        {/* Business type */}
        <meta name="business:contact_data:street_address" content="King Fahd Road" />
        <meta name="business:contact_data:locality" content={locationInfo.name.en} />
        <meta name="business:contact_data:postal_code" content={locationInfo.postalCode} />
        <meta name="business:contact_data:country_name" content="Saudi Arabia" />
        <meta name="business:contact_data:phone_number" content={telephone} />
        <meta name="business:contact_data:website" content={baseUrl} />
      </Head>
      
      {/* Optionally display a map */}
      {showMap && (
        <div className="local-map my-8">
          <iframe
            title={`UNEOM ${locationName} Map`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${locationInfo.coordinates.latitude},${locationInfo.coordinates.longitude}&language=${isArabic ? 'ar' : 'en'}`}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default LocalSEO;
