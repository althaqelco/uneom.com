import { NextRequest, NextResponse } from 'next/server';

// تعريف نوع البيانات للتحويلات
interface Redirect {
  source: string;
  destination: string;
}

// تعريف قائمة بجميع التحويلات من العناوين القديمة إلى الجديدة
const redirects: Redirect[] = [
  // English - Main Sections
  { source: '/sectors/:path*', destination: '/industries/:path*' },
  { source: '/location/:path*', destination: '/locations/:path*' },
  { source: '/category/:path*', destination: '/blog/categories/:path*' },

  // English - Specific Sectors/Products
  { source: '/sectors/healthcare-uniforms', destination: '/industries/healthcare' },
  { source: '/sectors/corporate-uniforms', destination: '/industries/corporate' },
  { source: '/sectors/restaurant-uniforms', destination: '/industries/hospitality/restaurants' },
  { source: '/sectors/uniform-in-riyadh', destination: '/locations/riyadh' },
  { source: '/sectors/uniform-in-dammam', destination: '/locations/dammam' },
  { source: '/sectors/uniform-in-jeddah', destination: '/locations/jeddah' },
  { source: '/sectors/uniform-in-mecca', destination: '/locations/mecca' },
  { source: '/sectors/uniform-in-medina', destination: '/locations/medina' },
  { source: '/sectors/education-uniforms', destination: '/industries/education' },
  { source: '/sectors/industrial-uniforms', destination: '/industries/factory-industry' },
  { source: '/sectors/uniform-factory', destination: '/industries/manufacturing' },
  { source: '/sectors/workers-uniform', destination: '/industries/factory-industry' },
  { source: '/sectors/hospitality-uniforms', destination: '/industries/hospitality' },
  { source: '/sectors/school-uniforms', destination: '/industries/education' },
  { source: '/sectors/business-wear-uniform-companies', destination: '/industries/corporate' },
  { source: '/sectors/jackets-for-scrubs', destination: '/shop/healthcare-accessories' },
  { source: '/sectors/waitress-uniforms', destination: '/industries/hospitality/restaurants' },
  { source: '/sectors/uniform-for-security', destination: '/industries/security' },
  { source: '/sectors/company-uniforms', destination: '/industries/corporate' },
  { source: '/sectors/uniforms-for-hotels', destination: '/industries/hospitality/hotels' },
  { source: '/sectors/pilot-uniforms', destination: '/industries/aviation' },
  { source: '/sectors/professional-uniforms', destination: '/industries' },
  { source: '/sectors/med-scrubs', destination: '/shop/medical-scrubs' },
  { source: '/sectors/greys-anatomy-scrubs', destination: '/shop/medical-scrubs' },
  { source: '/sectors/scrub-suits', destination: '/shop/medical-scrubs' },
  { source: '/sectors/restaurants', destination: '/industries/hospitality/restaurants' },
  { source: '/sectors/aviation-uniforms', destination: '/industries/aviation' },

  // Blog redirects
  { source: '/blog/the-science-behind-uneoms-heat-resistant-industrial-uniforms', destination: '/blog' },
  { source: '/blog/customizing-your-corporate-identity-uneoms-design-process-revealed', destination: '/blog' },
  { source: '/blog/from-design-to-delivery-inside-uneoms-quality-control-process', destination: '/blog' },
  { source: '/blog/uniform-maintenance-tips-expert-advice-from-uneoms-specialists', destination: '/blog' },

  // English - Locations
  { source: '/location/medina', destination: '/locations/medina' },
  { source: '/location/dammam', destination: '/locations/dammam' },
  { source: '/location/riyadh', destination: '/locations/riyadh' },
  { source: '/location/jeddah', destination: '/locations/jeddah' },

  // Arabic - Main Sections
  { source: '/ar/sectors/:path*', destination: '/ar/industries/:path*' },
  { source: '/ar/location/:path*', destination: '/ar/locations/:path*' },

  // Arabic - Specific Sectors
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

  // Arabic - Blog
  { source: '/ar/blog/%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d9%8a%d9%88%d9%86%d9%8a%d9%88%d9%85-%d9%85%d8%b9-%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d9%84%d8%a7%d8%ae', destination: '/ar/blog' },
  { source: '/ar/blog/%d8%a3%d9%81%d8%b6%d9%84-%d8%a7%d9%84%d8%a3%d9%82%d9%85%d8%b4%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d9%84%d9%85%d9%86%d8%a7%d8%ae-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a', destination: '/ar/blog' },
  { source: '/ar/blog/%d9%83%d9%8a%d9%81-%d9%8a%d8%ba%d9%8a%d8%b1-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d9%88%d8%ad%d8%af-%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84-%d8%b4%d8%b1%d9%83%d8%aa%d9%83', destination: '/ar/blog' },
  { source: '/ar/blog/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%86%d8%ac%d8%a7%d8%ad-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%b3%d9%8a-%d9%81%d9%8a-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%a3%d8%af%d8%a7%d8%a1-%d8%a7', destination: '/ar/blog' },

  // Arabic - Pages
  { source: '/ar/contact-us', destination: '/ar/contact' },
  { source: '/ar/request-a-quote', destination: '/ar/quote' },
  { source: '/ar/services', destination: '/ar/services' },
  { source: '/ar/faqs', destination: '/ar/faq' },
  { source: '/ar/about-us', destination: '/ar/about' },

  // Encoded Arabic URLs
  { source: '/ar/location/%d8%a7%d9%84%d9%85%d8%af%d9%8a%d9%86%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d9%88%d8%b1%d8%a9', destination: '/ar/locations/medina' },
  { source: '/ar/location/%d8%a7%d9%84%d8%af%d9%85%d8%a7%d9%85', destination: '/ar/locations/dammam' },
  { source: '/ar/location/%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d8%b6', destination: '/ar/locations/riyadh' },
  { source: '/ar/location/%d8%ac%d8%af%d8%a9', destination: '/ar/locations/jeddah' },

  // Healthcare-specific redirects
  { source: '/sectors/healthcare', destination: '/industries/healthcare' },
  { source: '/sectors/medical-uniforms', destination: '/industries/healthcare' },
  { source: '/sectors/medical-scrubs', destination: '/shop/medical-scrubs' },

  // Category redirects
  { source: '/category/blog', destination: '/blog' },
  { source: '/category/sectors', destination: '/industries' },
];

// تطابق المسارات باستخدام Regex
function matchPathWithPattern(path: string, pattern: string): RegExpMatchArray | null {
  // تحويل نمط التحويل إلى Regex
  const regex = new RegExp(
    '^' + pattern.replace(/:[^/]+\*/g, '(.*)').replace(/:[^/]+/g, '([^/]*)') + '$'
  );
  return path.match(regex);
}

// استخراج المعلمات من المسار
function extractParams(path: string, pattern: string): Record<string, string> | null {
  const paramNames = (pattern.match(/:[^/]+(\*)?/g) || []).map(p => p.substring(1));
  const match = matchPathWithPattern(path, pattern);

  if (!match) return null;

  const params: Record<string, string> = {};
  match.slice(1).forEach((value, index) => {
    if (paramNames[index]) {
      params[paramNames[index].replace('*', '')] = value;
    }
  });

  return params;
}

// استبدال المعلمات في المسار الوجهة
function replaceParams(destination: string, params: Record<string, string> | null): string {
  let result = destination;
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      result = result.replace(`:${key}*`, value).replace(`:${key}`, value);
    });
  }
  
  return result;
}

// إزالة الشرطة النهائية من المسار إذا وجدت
function removeTrailingSlash(path: string): string {
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

// وظيفة middleware الأساسية
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let path = url.pathname;
  
  // إزالة الشرطة النهائية للتوافق مع قواعد التحويل
  path = removeTrailingSlash(path);

  // البحث عن تطابق في قائمة التحويلات
  for (const { source, destination } of redirects) {
    // التحقق مما إذا كان المسار يطابق نمط المصدر
    const sourceWithoutTrailingSlash = removeTrailingSlash(source);
    if (
      path === sourceWithoutTrailingSlash || // تطابق مباشر
      (sourceWithoutTrailingSlash.includes(':') && matchPathWithPattern(path, sourceWithoutTrailingSlash)) // تطابق مع معلمات
    ) {
      // استخراج المعلمات من المسار المصدر
      const params = sourceWithoutTrailingSlash.includes(':') ? extractParams(path, sourceWithoutTrailingSlash) : null;
      
      // استبدال المعلمات في الوجهة إذا كان ذلك ضروريًا
      const targetDestination = replaceParams(destination, params);
      
      // إنشاء عنوان URL للوجهة مع مراعاة URL الأصلي كامل للحفاظ على البروتوكول والمجال
      const redirectUrl = new URL(targetDestination, request.url);
      
      // نقل معلمات الاستعلام إلى عنوان URL الجديد
      url.searchParams.forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });
      
      // تطبيق إعادة التوجيه بكود 301 لتحويل قوة SEO
      return NextResponse.redirect(redirectUrl, { 
        status: 301,
        headers: {
          'Cache-Control': 'public, max-age=31536000',  // تخزين مؤقت لمدة سنة
          'X-Redirect-Source': path  // إضافة رأس لتتبع التحويل للتشخيص (اختياري)
        }
      });
    }
  }
  
  // إذا لم يتم العثور على تطابق، استمر في المعالجة العادية
  return NextResponse.next();
}

// تحديد تكوين المسارات التي سيتم تطبيق الوسيط عليها
export const config = {
  matcher: [
    // تطبيق على جميع المسارات للتأكد من عمل التحويلات
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};
