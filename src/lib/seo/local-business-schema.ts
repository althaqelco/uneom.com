/**
 * Local Business Schema Generator
 * 
 * This utility generates Schema.org LocalBusiness structured data for various
 * Saudi Arabian cities. This improves local search visibility and helps
 * customers find UNEOM locations in specific Saudi regions.
 * 
 * The schema includes:
 * - Geographic coordinates for map listings
 * - Business hours
 * - Location-specific services
 * - Contact information
 * - Arabic and English names
 */

interface LocalBusinessData {
  city: string;
  cityAr: string;
  region: string;
  regionAr: string;
  address: string;
  addressAr: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  openingHours: string[];
  services: string[];
  servicesAr: string[];
}

// UNEOM locations data
const locationData: Record<string, LocalBusinessData> = {
  riyadh: {
    city: 'Riyadh',
    cityAr: 'الرياض',
    region: 'Riyadh Province',
    regionAr: 'منطقة الرياض',
    address: 'King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia',
    addressAr: 'طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية',
    phone: '+971558164922',
    email: 'riyadh@uneom.com',
    latitude: 24.7136,
    longitude: 46.6753,
    openingHours: [
      'Sunday 09:00-17:00',
      'Monday 09:00-17:00',
      'Tuesday 09:00-17:00',
      'Wednesday 09:00-17:00',
      'Thursday 09:00-17:00'
    ],
    services: [
      'Corporate Uniforms',
      'Healthcare Uniforms',
      'Hospitality Uniforms',
      'Custom Uniform Design',
      'Uniform Alteration'
    ],
    servicesAr: [
      'زي موحد للشركات',
      'زي موحد للرعاية الصحية',
      'زي موحد للضيافة',
      'تصميم زي موحد مخصص',
      'تعديل الزي الموحد'
    ]
  },
  jeddah: {
    city: 'Jeddah',
    cityAr: 'جدة',
    region: 'Makkah Province',
    regionAr: 'منطقة مكة المكرمة',
    address: 'Prince Mohammed Bin Abdulaziz St, Al Rawdah District, Jeddah 23432, Saudi Arabia',
    addressAr: 'شارع الأمير محمد بن عبد العزيز، حي الروضة، جدة 23432، المملكة العربية السعودية',
    phone: '+971558164922',
    email: 'jeddah@uneom.com',
    latitude: 21.5433,
    longitude: 39.1728,
    openingHours: [
      'Sunday 09:00-17:00',
      'Monday 09:00-17:00',
      'Tuesday 09:00-17:00',
      'Wednesday 09:00-17:00',
      'Thursday 09:00-17:00'
    ],
    services: [
      'Corporate Uniforms',
      'Healthcare Uniforms',
      'Hospitality Uniforms',
      'Security Uniforms',
      'Custom Embroidery'
    ],
    servicesAr: [
      'زي موحد للشركات',
      'زي موحد للرعاية الصحية',
      'زي موحد للضيافة',
      'زي موحد للأمن',
      'تطريز مخصص'
    ]
  },
  dammam: {
    city: 'Dammam',
    cityAr: 'الدمام',
    region: 'Eastern Province',
    regionAr: 'المنطقة الشرقية',
    address: 'King Saud Street, Al Aziziyah District, Dammam 32424, Saudi Arabia',
    addressAr: 'شارع الملك سعود، حي العزيزية، الدمام 32424، المملكة العربية السعودية',
    phone: '+971558164922',
    email: 'dammam@uneom.com',
    latitude: 26.4207,
    longitude: 50.0888,
    openingHours: [
      'Sunday 09:00-17:00',
      'Monday 09:00-17:00',
      'Tuesday 09:00-17:00',
      'Wednesday 09:00-17:00',
      'Thursday 09:00-17:00'
    ],
    services: [
      'Corporate Uniforms',
      'Industrial Uniforms',
      'Oil & Gas Sector Uniforms',
      'Flame-Resistant Workwear',
      'Custom Uniform Design'
    ],
    servicesAr: [
      'زي موحد للشركات',
      'زي موحد للصناعة',
      'زي موحد لقطاع النفط والغاز',
      'ملابس عمل مقاومة للهب',
      'تصميم زي موحد مخصص'
    ]
  }
};

/**
 * Generate LocalBusiness schema for a specific city
 */
export function generateLocalBusinessSchema(
  city: string,
  locale: string = 'en'
): Record<string, any> {
  // Check if we have data for this city
  if (!locationData[city.toLowerCase()]) {
    throw new Error(`No location data available for city: ${city}`);
  }
  
  const data = locationData[city.toLowerCase()];
  const isArabic = locale === 'ar';
  
  // Create schema object
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: isArabic ? `يونيوم - ${data.cityAr}` : `UNEOM - ${data.city}`,
    description: isArabic 
      ? `يونيوم هي الشركة الرائدة في تصميم وتصنيع الزي الموحد في ${data.cityAr}، المملكة العربية السعودية.`
      : `UNEOM is the leading uniform design and manufacturing company in ${data.city}, Saudi Arabia.`,
    url: `https://www.uneom.com/${isArabic ? 'ar/' : ''}locations/${city.toLowerCase()}/`,
    telephone: data.phone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: isArabic ? data.addressAr.split('،')[0] : data.address.split(',')[0],
      addressLocality: isArabic ? data.cityAr : data.city,
      addressRegion: isArabic ? data.regionAr : data.region,
      addressCountry: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.latitude,
      longitude: data.longitude
    },
    openingHoursSpecification: data.openingHours.map(hours => {
      const [day, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: opens,
        closes: closes
      };
    }),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: data.latitude,
        longitude: data.longitude
      },
      geoRadius: '50000'  // 50km radius
    },
    makesOffer: (isArabic ? data.servicesAr : data.services).map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service
      }
    })),
    image: [
      `https://www.uneom.com/images/locations/${city.toLowerCase()}/storefront.jpg`,
      `https://www.uneom.com/images/locations/${city.toLowerCase()}/interior.jpg`
    ],
    priceRange: '$$',
    paymentAccepted: isArabic 
      ? 'بطاقة ائتمان, بطاقة مدين, نقد, تحويل مصرفي' 
      : 'Credit Card, Debit Card, Cash, Bank Transfer',
    currenciesAccepted: 'SAR'
  };
}

/**
 * Generate multiple location sitemaps for all cities
 */
export function generateLocationsSitemap(): string {
  const locations = Object.keys(locationData);
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each location in English and Arabic
  locations.forEach(city => {
    // English version
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://www.uneom.com/locations/${city}/</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
    
    // Arabic version
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://www.uneom.com/ar/locations/${city}/</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });
  
  sitemap += '</urlset>';
  return sitemap;
}

export default {
  generateLocalBusinessSchema,
  generateLocationsSitemap,
  locationData
};
