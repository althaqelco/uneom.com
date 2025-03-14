/**
 * Utilidades para manejar rutas de imágenes en Vercel
 */

/**
 * Determina si la aplicación está ejecutándose en el entorno de Vercel
 */
export const isVercelEnvironment = (): boolean => {
  if (typeof window === 'undefined') {
    // Entorno de servidor
    return process.env.VERCEL === '1' || 
           process.env.VERCEL_ENV !== undefined ||
           process.env.NEXT_PUBLIC_VERCEL_URL !== undefined;
  }
  
  // Entorno de cliente
  return window.location.hostname.includes('vercel.app') ||
         window.location.hostname === 'uneom.com' ||
         window.location.hostname.endsWith('.uneom.com');
};

/**
 * Convierte cualquier ruta de imagen relativa a una ruta absoluta
 * que funcionará en Vercel
 */
export const getAbsoluteImagePath = (src: string): string => {
  // Si ya es una URL absoluta, devolverla tal cual
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Determinar la URL base
  let baseUrl = '';
  
  if (typeof window !== 'undefined') {
    // En el cliente, usar la URL del navegador
    baseUrl = window.location.origin;
  } else {
    // En el servidor, intentar usar la URL de Vercel
    const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 
                      process.env.VERCEL_URL || 
                      'uneom-com.vercel.app';
    
    baseUrl = vercelUrl.startsWith('http') 
      ? vercelUrl 
      : `https://${vercelUrl}`;
  }
  
  // Normalizar la ruta de origen
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${baseUrl}${normalizedSrc}`;
};

/**
 * Intenta diferentes estrategias para cargar una imagen
 * y devuelve un arreglo de posibles rutas
 */
export const getImagePathAlternatives = (src: string): string[] => {
  const isAbsolutePath = src.startsWith('http://') || src.startsWith('https://');
  
  // Preparar el nombre del archivo (última parte de la ruta)
  const filename = src.split('/').pop() || '';
  
  const alternatives = [
    // Ruta original
    src,
    
    // Ruta absoluta
    isAbsolutePath ? src : getAbsoluteImagePath(src),
    
    // Sin slash inicial
    src.startsWith('/') ? src.substring(1) : `/${src}`,
    
    // Prueba directa en /images/
    `/images/${filename}`,
    
    // Prueba directa en /public/images/
    `/public/images/${filename}`,
    
    // Ruta de respaldo
    '/images/default-placeholder.jpg'
  ];
  
  // Filtrar duplicados usando Array.filter en lugar de Set
  return alternatives.filter((item, index) => alternatives.indexOf(item) === index);
}; 