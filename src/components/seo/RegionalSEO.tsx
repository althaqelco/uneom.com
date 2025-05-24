/**
 * Regional SEO Component
 * 
 * This component generates specialized structured data with regional targeting
 * for improved local SEO in specific Saudi Arabian cities.
 * 
 * It creates:
 * - Region-specific Schema.org markup
 * - City-specific metadata
 * - Geographic targeting parameters
 */

import React from 'react';
import { useRouter } from 'next/router';

interface RegionalSEOProps {
  industryType: 'healthcare' | 'corporate' | 'hospitality' | 'security';
  regions: string[]; // City codes: 'riyadh', 'jeddah', 'dammam', etc.
  businessName: string;
  description: string;
  serviceArea?: string;
  mainImage?: string;
}

interface RegionData {
  nameEn: string;
  nameAr: string;
  provinceEn: string;
  provinceAr: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const RegionalSEO: React.FC<RegionalSEOProps> = ({
  industryType,
  regions,
  businessName,
  description,
  serviceArea = 'المملكة العربية السعودية',
  mainImage = 'https://www.uneom.com/images/logo.png'
}) => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // Mapping of region codes to full names and data
  const regionData: Record<string, RegionData> = {
    riyadh: {
      nameEn: 'Riyadh',
      nameAr: 'الرياض',
      provinceEn: 'Riyadh Province',
      provinceAr: 'منطقة الرياض',
      coordinates: { lat: 24.7136, lng: 46.6753 }
    },
    jeddah: {
      nameEn: 'Jeddah',
      nameAr: 'جدة',
      provinceEn: 'Makkah Province',
      provinceAr: 'منطقة مكة المكرمة',
      coordinates: { lat: 21.5433, lng: 39.1728 }
    },
    dammam: {
      nameEn: 'Dammam',
      nameAr: 'الدمام',
      provinceEn: 'Eastern Province',
      provinceAr: 'المنطقة الشرقية',
      coordinates: { lat: 26.4207, lng: 50.0888 }
    },
    makkah: {
      nameEn: 'Makkah',
      nameAr: 'مكة المكرمة',
      provinceEn: 'Makkah Province',
      provinceAr: 'منطقة مكة المكرمة',
      coordinates: { lat: 21.3891, lng: 39.8579 }
    },
    madinah: {
      nameEn: 'Madinah',
      nameAr: 'المدينة المنورة',
      provinceEn: 'Madinah Province',
      provinceAr: 'منطقة المدينة المنورة',
      coordinates: { lat: 24.5247, lng: 39.5692 }
    }
  };
  
  // Determine the schema type based on industry
  const getSchemaType = (): string => {
    switch (industryType) {
      case 'healthcare':
        return 'MedicalBusiness';
      case 'hospitality':
        return 'LodgingBusiness';
      case 'security':
        return 'SecurityService';
      case 'corporate':
      default:
        return 'ProfessionalService';
    }
  };
  
  // Generate the regional schemas
  const generateRegionalSchemas = () => {
    return regions.map(region => {
      if (!regionData[region]) return null;
      
      const data = regionData[region];
      const regionName = isArabic ? data.nameAr : data.nameEn;
      const provinceName = isArabic ? data.provinceAr : data.provinceEn;
      
      const schema = {
        '@context': 'https://schema.org',
        '@type': getSchemaType(),
        'name': `${businessName} - ${regionName}`,
        'description': description,
        'image': mainImage,
        'url': `https://www.uneom.com/${isArabic ? 'ar/' : ''}industries/${industryType}/`,
        'areaServed': {
          '@type': 'City',
          'name': regionName,
          'containedInPlace': {
            '@type': 'AdministrativeArea',
            'name': provinceName
          }
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': data.coordinates.lat,
          'longitude': data.coordinates.lng
        },
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': provinceName,
          'addressCountry': isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
        }
      };
      
      return schema;
    }).filter(Boolean);
  };
  
  const schemas = generateRegionalSchemas();
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`regional-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default RegionalSEO;
