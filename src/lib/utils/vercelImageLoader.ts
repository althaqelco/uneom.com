/**
 * موجه تحميل الصور لـ Vercel
 * 
 * هذا الملف يتعامل مع تحميل الصور في بيئة Vercel، ويوفر حلولًا للمشاكل الشائعة
 * مثل عدم ظهور الصور أو بطء التحميل
 */

// واجهة لتكوين محمل الصور
export interface VercelImageLoaderConfig {
  domains?: string[];
  basePath?: string;
  forceAbsolutePaths?: boolean;
  defaultQuality?: number;
  fallbackImage?: string;
  debug?: boolean;
}

// واجهة لمعلمات تحميل الصور
export interface VercelImageLoaderParams {
  src: string;
  width?: number;
  quality?: number;
  isVercel?: boolean;
}

// النطاقات الافتراضية المسموح بها
const DEFAULT_DOMAINS = [
  'uneom-com.vercel.app',
  'uneom.com',
  'vercel.app',
  'vercel.com',
  'githubusercontent.com',
  'github.com',
  'googleusercontent.com'
];

// الصورة الاحتياطية الافتراضية
const DEFAULT_FALLBACK_IMAGE = '/images/default-placeholder.jpg';

/**
 * التحقق مما إذا كان التطبيق يعمل على Vercel
 */
export const isVercelEnvironment = (): boolean => {
  if (typeof window === 'undefined') {
    // في وضع التقديم من جانب الخادم، تحقق من متغيرات البيئة
    return process.env.VERCEL === '1' || process.env.VERCEL_ENV !== undefined;
  }
  
  // في وضع العميل، تحقق من نطاق URL
  return window.location.hostname.includes('vercel.app') ||
    window.location.hostname === 'uneom.com' ||
    window.location.hostname.endsWith('.uneom.com');
};

/**
 * إصلاح مسار الصورة للاستخدام في بيئة Vercel
 * @param src - مسار الصورة الأصلي
 * @param config - تكوين محمل الصور
 * @returns مسار الصورة المصحح
 */
export const fixImagePath = (src: string, config?: VercelImageLoaderConfig): string => {
  // إذا كان المسار هو URL كامل، فارجع كما هو
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // إذا كان المسار يبدأ بسلاش أمامي، فهو مسار نسبي
  const isRelativePath = src.startsWith('/');
  
  // استخراج المسار الأساسي من التكوين أو البيئة
  const basePath = config?.basePath || '';
  
  // استخراج اسم النطاق للتطبيق على Vercel
  const vercelDomain = typeof window !== 'undefined' 
    ? window.location.hostname 
    : (process.env.VERCEL_URL || 'uneom-com.vercel.app');
  
  // إذا كنا في بيئة Vercel وتم تمكين المسارات المطلقة
  if (isVercelEnvironment() && (config?.forceAbsolutePaths ?? true)) {
    // بناء المسار المطلق
    return `https://${vercelDomain}${isRelativePath ? '' : '/'}${basePath}${isRelativePath ? src : `/${src}`}`;
  }
  
  // إرجاع المسار النسبي مع إضافة المسار الأساسي إذا لزم الأمر
  return `${basePath}${isRelativePath ? src : `/${src}`}`;
};

/**
 * محمل الصور المخصص لبيئة Vercel
 * @param params - معلمات تحميل الصور
 * @param config - تكوين محمل الصور
 * @returns عنوان URL لتحميل الصورة
 */
export const vercelImageLoader = (
  params: VercelImageLoaderParams,
  config: VercelImageLoaderConfig = {}
): string => {
  try {
    const { 
      src, 
      width = 0, 
      quality = config.defaultQuality || 80, 
      isVercel = isVercelEnvironment() 
    } = params;
    
    // إذا كان المصدر فارغًا، ارجع الصورة الاحتياطية
    if (!src || src.trim() === '') {
      return config.fallbackImage || DEFAULT_FALLBACK_IMAGE;
    }
    
    // بالنسبة للصور ذات المصادر الخارجية، تحقق من أنها من نطاق مسموح به
    if (src.startsWith('http')) {
      try {
        const url = new URL(src);
        const allowedDomains = [...(config.domains || []), ...DEFAULT_DOMAINS];
        
        // تحقق من أن النطاق مسموح به
        const isDomainAllowed = allowedDomains.some(domain => {
          if (domain.startsWith('*.')) {
            const baseDomain = domain.substring(2);
            return url.hostname.endsWith(baseDomain);
          }
          return url.hostname === domain;
        });
        
        // إذا كان النطاق مسموح به، ارجع المصدر كما هو
        if (isDomainAllowed) {
          return src;
        }
        
        // إذا كان النطاق غير مسموح به وتم تمكين تصحيح الأخطاء، اطبع تحذيرًا
        if (config.debug) {
          console.warn(`Domain not allowed: ${url.hostname}. Using fallback image.`);
        }
        
        // ارجع الصورة الاحتياطية
        return config.fallbackImage || DEFAULT_FALLBACK_IMAGE;
      } catch (e) {
        // في حالة حدوث خطأ في تحليل URL، ارجع المصدر كما هو
        if (config.debug) {
          console.error(`Error parsing URL: ${src}`, e);
        }
        return src;
      }
    }
    
    // هنا نتعامل مع الصور المحلية
    // تصحيح مسار الصورة للاستخدام في بيئة Vercel
    const fixedPath = fixImagePath(src, config);
    
    // إذا كانت البيئة هي Vercel وتم تحديد عرض، أضف معلمات تحسين الصورة
    if (isVercel && width > 0) {
      const params = new URLSearchParams();
      params.append('url', fixedPath);
      params.append('w', width.toString());
      params.append('q', quality.toString());
      
      // إذا كانت Vercel تقوم بتحسين الصور، فاستخدم محسن الصور
      // return `/_next/image?${params.toString()}`;
      
      // لكن بما أننا عطلنا تحسين الصور في next.config.mjs، نرجع المسار مباشرة
      return fixedPath;
    }
    
    // إرجاع المسار المصحح
    return fixedPath;
  } catch (error) {
    // في حالة حدوث خطأ، ارجع الصورة الاحتياطية
    if (config.debug) {
      console.error(`Error in vercelImageLoader:`, error);
    }
    return config.fallbackImage || DEFAULT_FALLBACK_IMAGE;
  }
};

/**
 * التحقق من صحة مسار الصورة والتأكد من أنه يعمل
 * @param src - مسار الصورة الأصلي
 * @param config - تكوين محمل الصور
 * @returns وعد بالمسار الصحيح أو الصورة الاحتياطية
 */
export const validateImagePath = async (
  src: string, 
  config: VercelImageLoaderConfig = {}
): Promise<string> => {
  return new Promise((resolve) => {
    // إذا كنا على الخادم، ارجع المسار كما هو (لا يمكن التحقق)
    if (typeof window === 'undefined') {
      resolve(fixImagePath(src, config));
      return;
    }
    
    // إنشاء كائن Image جديد للتحقق من صحة المسار
    const img = new Image();
    let hasResolved = false;
    
    // عند التحميل بنجاح، ارجع المسار
    img.onload = () => {
      if (!hasResolved) {
        hasResolved = true;
        resolve(fixImagePath(src, config));
      }
    };
    
    // عند فشل التحميل، جرب خيارات أخرى
    img.onerror = () => {
      // قائمة المسارات البديلة المحتملة
      const alternativePaths = [
        // الخيار 1: إضافة أو إزالة السلاش الأمامي
        src.startsWith('/') ? src.substring(1) : `/${src}`,
        // الخيار 2: استخدام مسار تجريبي آخر
        isVercelEnvironment() ? `https://uneom-com.vercel.app${src.startsWith('/') ? '' : '/'}${src}` : src,
        // الخيار 3: استخدام اسم الملف فقط
        `/images/${src.split('/').pop()}`,
        // الخيار 4: استخدام الصورة الاحتياطية
        config.fallbackImage || DEFAULT_FALLBACK_IMAGE
      ];
      
      // تجربة كل مسار بديل
      let alternativeIndex = 0;
      
      const tryAlternative = () => {
        if (alternativeIndex >= alternativePaths.length) {
          // إذا فشلت جميع المحاولات، ارجع الصورة الاحتياطية
          if (!hasResolved) {
            hasResolved = true;
            resolve(config.fallbackImage || DEFAULT_FALLBACK_IMAGE);
          }
          return;
        }
        
        const alternative = alternativePaths[alternativeIndex++];
        const altImg = new Image();
        
        altImg.onload = () => {
          if (!hasResolved) {
            hasResolved = true;
            resolve(fixImagePath(alternative, config));
          }
        };
        
        altImg.onerror = tryAlternative;
        altImg.src = alternative;
      };
      
      // ابدأ بتجربة المسارات البديلة
      tryAlternative();
    };
    
    // تحديد المصدر للتحقق منه
    img.src = fixImagePath(src, config);
    
    // للتأكد من عدم الانتظار إلى ما لا نهاية، نضع مهلة
    setTimeout(() => {
      if (!hasResolved) {
        hasResolved = true;
        resolve(config.fallbackImage || DEFAULT_FALLBACK_IMAGE);
      }
 