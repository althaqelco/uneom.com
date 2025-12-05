import { NextRequest, NextResponse } from 'next/server';

// تعريف نوع البيانات للتحويلات
interface Redirect {
  source: string;
  destination: string;
  permanent?: boolean;
}

/**
 * قائمة التحويلات من الروابط القديمة إلى الروابط الجديدة
 * تم تنظيمها حسب النوع واللغة للسهولة
 */
const redirectsMap: Redirect[] = [
  // Remove /en prefix since English is the default language
  { source: '/en/:path*', destination: '/:path*', permanent: true },
  
  // English - School & Education
  { source: '/sectors/school-uniforms', destination: '/industries/education' },
  { source: '/sectors/education-uniforms', destination: '/industries/education' },
  
  // English - Corporate & Business
  { source: '/sectors/business-wear-uniform-companies', destination: '/industries/corporate' },
  { source: '/sectors/company-uniforms', destination: '/industries/corporate' },
  { source: '/sectors/corporate-uniforms', destination: '/industries/corporate' },
  { source: '/sectors/professional-uniforms', destination: '/industries' },
  
  // English - Healthcare
  { source: '/sectors/jackets-for-scrubs', destination: '/shop/healthcare-accessories' },
  { source: '/sectors/med-scrubs', destination: '/shop/medical-scrubs' },
  { source: '/sectors/medical-scrubs', destination: '/shop/medical-scrubs' },
  { source: '/sectors/greys-anatomy-scrubs', destination: '/shop/medical-scrubs' },
  { source: '/sectors/scrub-suits', destination: '/shop/medical-scrubs' },
  { source: '/sectors/healthcare-uniforms', destination: '/industries/healthcare' },
  { source: '/sectors/healthcare', destination: '/industries/healthcare' },
  { source: '/sectors/medical-uniforms', destination: '/industries/healthcare' },
  
  // English - Hospitality
  { source: '/sectors/waitress-uniforms', destination: '/industries/hospitality/restaurants' },
  { source: '/sectors/uniforms-for-hotels', destination: '/industries/hospitality/hotels' },
  { source: '/sectors/restaurants', destination: '/industries/hospitality/restaurants' },
  { source: '/sectors/restaurant-uniforms', destination: '/industries/hospitality/restaurants' },
  { source: '/sectors/hospitality-uniforms', destination: '/industries/hospitality' },
  
  // English - Other Industries
  { source: '/sectors/uniform-for-security', destination: '/industries/security' },
  { source: '/sectors/pilot-uniforms', destination: '/industries/aviation' },
  { source: '/sectors/aviation-uniforms', destination: '/industries/aviation' },
  { source: '/sectors/industrial-uniforms', destination: '/industries/factory-industry' },
  { source: '/sectors/workers-uniform', destination: '/industries/factory-industry' },
  { source: '/sectors/uniform-factory', destination: '/industries/manufacturing' },
  
  // English - Blog redirects
  { source: '/blog/the-science-behind-uneoms-heat-resistant-industrial-uniforms', destination: '/blog' },
  { source: '/blog/customizing-your-corporate-identity-uneoms-design-process-revealed', destination: '/blog' },
  { source: '/blog/from-design-to-delivery-inside-uneoms-quality-control-process', destination: '/blog' },
  { source: '/blog/uniform-maintenance-tips-expert-advice-from-uneoms-specialists', destination: '/blog' },
  
  // English - Locations
  { source: '/location/medina', destination: '/locations/medina' },
  { source: '/location/dammam', destination: '/locations/dammam' },
  { source: '/location/riyadh', destination: '/locations/riyadh' },
  { source: '/location/jeddah', destination: '/locations/jeddah' },
  { source: '/sectors/uniform-in-riyadh', destination: '/locations/riyadh' },
  { source: '/sectors/uniform-in-dammam', destination: '/locations/dammam' },
  { source: '/sectors/uniform-in-jeddah', destination: '/locations/jeddah' },
  { source: '/sectors/uniform-in-mecca', destination: '/locations/mecca' },
  { source: '/sectors/uniform-in-medina', destination: '/locations/medina' },
  
  // English - Categories
  { source: '/category/blog', destination: '/blog' },
  { source: '/category/sectors', destination: '/industries' },
  
  // Arabic - Blog
  { source: '/ar/blog/%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d9%8a%d9%88%d9%86%d9%8a%d9%88%d9%85-%d9%85%d8%b9-%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d9%84%d8%a7%d8%ae', destination: '/ar/blog' },
  { source: '/ar/blog/%d8%a3%d9%81%d8%b6%d9%84-%d8%a7%d9%84%d8%a3%d9%82%d9%85%d8%b4%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d9%84%d9%85%d9%86%d8%a7%d8%ae-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a', destination: '/ar/blog' },
  { source: '/ar/blog/%d9%83%d9%8a%d9%81-%d9%8a%d8%ba%d9%8a%d8%b1-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d9%88%d8%ad%d8%af-%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84-%d8%b4%d8%b1%d9%83%d8%aa%d9%83', destination: '/ar/blog' },
  { source: '/ar/blog/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%86%d8%ac%d8%a7%d8%ad-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%b3%d9%8a-%d9%81%d9%8a-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%a3%d8%af%d8%a7%d8%a1-%d8%a7', destination: '/ar/blog' },
  
  // Arabic - Sectors
  { source: '/ar/sectors/healthcare-uniforms', destination: '/ar/industries/healthcare' },
  { source: '/ar/sectors/corporate-uniforms', destination: '/ar/industries/corporate' },
  { source: '/ar/sectors/restaurant-uniforms', destination: '/ar/industries/hospitality/restaurants' },
  { source: '/ar/sectors/uniform-in-riyadh', destination: '/ar/locations/riyadh' },
  { source: '/ar/sectors/uniform-in-dammam', destination: '/ar/locations/dammam' },
  { source: '/ar/sectors/uniform-in-jeddah', destination: '/ar/locations/jeddah' },
  { source: '/ar/sectors/uniform-in-mecca', destination: '/ar/locations/mecca' },
  { source: '/ar/sectors/uniform-in-medina', destination: '/ar/locations/medina' },
  { source: '/ar/sectors/education-uniforms', destination: '/ar/industries/education' },
  { source: '/ar/sectors/industrial-uniforms', destination: '/ar/industries/factory-industry' },
  { source: '/ar/sectors/uniform-factory', destination: '/ar/industries/manufacturing' },
  { source: '/ar/sectors/workers-uniform', destination: '/ar/industries/factory-industry' },
  { source: '/ar/sectors/uniform-factory-2', destination: '/ar/industries/manufacturing' },
  { source: '/ar/sectors/hospitality-uniforms', destination: '/ar/industries/hospitality' },
  
  // Arabic - Pages
  { source: '/ar/contact-us', destination: '/ar/contact' },
  { source: '/ar/request-a-quote', destination: '/ar/quote' },
  { source: '/ar/faqs', destination: '/ar/faq' },
  { source: '/ar/about-us', destination: '/ar/about' },
  
  
  // Arabic - Locations
  { source: '/ar/location/%d8%a7%d9%84%d9%85%d8%af%d9%8a%d9%86%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d9%88%d8%b1%d8%a9', destination: '/ar/locations/medina' },
  { source: '/ar/location/%d8%a7%d9%84%d8%af%d9%85%d8%a7%d9%85', destination: '/ar/locations/dammam' },
  { source: '/ar/location/%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d8%b6', destination: '/ar/locations/riyadh' },
  { source: '/ar/location/%d8%ac%d8%af%d8%a9', destination: '/ar/locations/jeddah' },
  
  // Pattern Redirects (These should be handled last)
  { source: '/sectors/:path*', destination: '/industries/:path*' },
  { source: '/location/:path*', destination: '/locations/:path*' },
  { source: '/category/:path*', destination: '/blog/categories/:path*' },
  { source: '/ar/sectors/:path*', destination: '/ar/industries/:path*' },
  { source: '/ar/location/:path*', destination: '/ar/locations/:path*' },
];

// إزالة الشرطة النهائية من المسار
function removeTrailingSlash(path: string): string {
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

// تطابق المسارات التي تحتوي على معلمات ديناميكية
function matchDynamicPath(path: string, pattern: string): boolean {
  if (!pattern.includes(':')) {
    return false;
  }
  
  const regexStr = '^' + pattern.replace(/:[^/]+\*/g, '(.*)').replace(/:[^/]+/g, '([^/]*)') + '$';
  const regex = new RegExp(regexStr);
  return regex.test(path);
}

// استخراج المعلمات من المسار
function extractAndReplaceParams(path: string, source: string, destination: string): string {
  const sourceSegments = source.split('/');
  const pathSegments = path.split('/');
  let resultDestination = destination;

  // اختلاف عدد الأجزاء يعني عدم تطابق
  if (sourceSegments.length !== pathSegments.length && !source.includes('*')) {
    return destination;
  }

  sourceSegments.forEach((segment, index) => {
    if (segment.startsWith(':')) {
      // معلمة ديناميكية
      const paramName = segment.startsWith(':') ? segment.substring(1) : segment;
      const paramValue = pathSegments[index];
      
      // استبدال المعلمة في المسار الوجهة
      if (paramName.endsWith('*')) {
        const baseName = paramName.slice(0, -1);
        resultDestination = resultDestination.replace(`:${baseName}*`, paramValue);
      } else {
        resultDestination = resultDestination.replace(`:${paramName}`, paramValue);
      }
    }
  });

  return resultDestination;
}

// وظيفة middleware الأساسية
export function middleware(request: NextRequest) {
  // Debug log
  console.log(`Middleware processing: ${request.nextUrl.pathname}`);
  
  // نأخذ المسار من الطلب
  const url = request.nextUrl.clone();
  let path = url.pathname;
  
  
  // Handle /en/* redirects - remove the /en prefix as English is the default language
  if (path.startsWith('/en/')) {
    console.log(`Redirecting from ${path} to ${path.replace(/^\/en\//, '/')}`);
    const redirectUrl = new URL(path.replace(/^\/en\//, '/'), request.url);
    // Copy over all query parameters
    url.searchParams.forEach((value, key) => {
      redirectUrl.searchParams.set(key, value);
    });
    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000',
      }
    });
  }
  
  // نزيل الشرطة النهائية للتوحيد
  const cleanPath = removeTrailingSlash(path);
  
  
  // نبحث عن تطابق في قائمة التحويلات
  for (const { source, destination } of redirectsMap) {
    const cleanSource = removeTrailingSlash(source);
    
    // نتحقق من التطابق المباشر أولاً
    if (cleanPath === cleanSource) {
      // إنشاء عنوان URL للوجهة
      const redirectUrl = new URL(destination, request.url);
      
      // نقل معلمات الاستعلام
      url.searchParams.forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });
      
      // تطبيق التحويل 301
      console.log(`Redirecting from ${cleanPath} to ${redirectUrl.toString()}`);
      return NextResponse.redirect(redirectUrl, {
        status: 301,
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        }
      });
    }
    
    // في حالة المسارات الديناميكية، نتحقق من التطابق ونستخرج المعلمات
    if (cleanSource.includes(':') && matchDynamicPath(cleanPath, cleanSource)) {
      const targetDestination = extractAndReplaceParams(cleanPath, cleanSource, destination);
      const redirectUrl = new URL(targetDestination, request.url);
      
      // نقل معلمات الاستعلام
      url.searchParams.forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });
      
      // تطبيق التحويل 301
      console.log(`Dynamic redirecting from ${cleanPath} to ${redirectUrl.toString()}`);
      return NextResponse.redirect(redirectUrl, {
        status: 301,
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        }
      });
    }
  }
  
  // إذا لم يتم العثور على تطابق، نستمر في المعالجة العادية
  return NextResponse.next();
}

// تكوين المطابقة: فقط المسارات القديمة التي تحتاج إعادة توجيه
export const config = {
  matcher: [
    // Only match old paths that need redirecting - exclude normal pages
    '/en/:path*',
    '/sectors/:path*',
    '/location/:path*',
    '/category/:path*',
    '/ar/sectors/:path*',
    '/ar/location/:path*',
  ],
};
