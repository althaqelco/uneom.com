const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Set environment variables
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.SKIP_TYPE_CHECK = 'true';
process.env.NPM_CONFIG_PRODUCTION = 'false';

console.log('🚀 Iniciando proceso de build personalizado para Vercel');

// Crear imagen de respaldo SVG si no existe
const createFallbackImage = () => {
  const publicDir = path.join(process.cwd(), 'public');
  const imagesDir = path.join(publicDir, 'images');
  const fallbackSvgPath = path.join(imagesDir, 'default-placeholder.svg');
  const fallbackJpgPath = path.join(imagesDir, 'default-placeholder.jpg');
  
  // Crear directorio de imágenes si no existe
  if (!fs.existsSync(imagesDir)) {
    console.log('📁 Creando directorio de imágenes');
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Crear imagen SVG de respaldo si no existe
  if (!fs.existsSync(fallbackSvgPath)) {
    console.log('🖼️ Creando imagen SVG de respaldo');
    const svgContent = '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="480" fill="#f0f0f0"/><text x="320" y="240" font-family="Arial" font-size="24" text-anchor="middle" fill="#888">Image not available</text></svg>';
    fs.writeFileSync(fallbackSvgPath, svgContent);
  }
  
  // Copiar SVG como JPG si no existe
  if (!fs.existsSync(fallbackJpgPath)) {
    console.log('🖼️ Copiando imagen SVG como JPG');
    fs.copyFileSync(fallbackSvgPath, fallbackJpgPath);
  }
  
  // Crear archivo CSS para estilos de imágenes
  const cssDir = path.join(publicDir, 'css');
  const imageCssPath = path.join(cssDir, 'image-fixes.css');
  
  if (!fs.existsSync(cssDir)) {
    console.log('📁 Creando directorio CSS');
    fs.mkdirSync(cssDir, { recursive: true });
  }
  
  if (!fs.existsSync(imageCssPath)) {
    console.log('📝 Creando archivo CSS para estilos de imágenes');
    const cssContent = `
/* Estilos para corregir problemas de imágenes */
img {
  min-height: 1px;
  min-width: 1px;
}

img.direct-image-error {
  border: 1px dashed #ccc;
  padding: 5px;
  background-color: #f8f8f8;
}

img.direct-image-loading {
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

img.direct-image-loaded {
  opacity: 1;
}
`;
    fs.writeFileSync(imageCssPath, cssContent);
  }
};

// Ejecutar el proceso de build estándar de Next.js
const runNextBuild = () => {
  console.log('🔨 Ejecutando build de Next.js');
  try {
    execSync('next build', { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error('❌ Error en el proceso de build:', error);
    return false;
  }
};

// Función principal
const main = async () => {
  try {
    // Crear imagen de respaldo
    createFallbackImage();
    
    // Ejecutar build de Next.js
    const buildSuccess = runNextBuild();
    
    if (buildSuccess) {
      console.log('✅ Build completado con éxito');
      process.exit(0);
    } else {
      console.error('❌ Build falló');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error en el proceso de build personalizado:', error);
    process.exit(1);
  }
};

// Ejecutar función principal
main();
