/**
 * 404 Checker Script
 * 
 * This script monitors all image and link requests on the page and logs any 404 errors
 * to help developers identify broken links and images during development.
 * 
 * Only runs in development mode.
 */

// 404 Error Checker Script
document.addEventListener('DOMContentLoaded', function() {
  // No ejecutar en producción para evitar sobrecarga de la consola
  const isProduction = window.location.hostname === 'uneom.com';
  if (isProduction) return;
  
  console.log('404 Checker active - Monitoring for failed resources');
  
  // Crear un contenedor para mostrar errores (solo en desarrollo)
  const errorContainer = document.createElement('div');
  errorContainer.id = 'resource-error-container';
  errorContainer.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: rgba(255, 0, 0, 0.8);
    color: white;
    padding: 10px;
    font-family: monospace;
    font-size: 12px;
    max-width: 400px;
    max-height: 300px;
    overflow: auto;
    z-index: 9999;
    border-radius: 5px;
    display: none;
  `;
  document.body.appendChild(errorContainer);
  
  // Colección de errores para evitar duplicados
  const errors = new Set();
  
  // Función para actualizar la visualización de errores
  function updateErrorDisplay() {
    if (errors.size > 0) {
      errorContainer.style.display = 'block';
      errorContainer.innerHTML = '<strong>Recursos 404:</strong><br>' + 
        Array.from(errors).map(url => `- ${url}`).join('<br>');
    } else {
      errorContainer.style.display = 'none';
    }
  }
  
  // Interceptar solicitudes de red para detectar errores 404
  const originalFetch = window.fetch;
  window.fetch = async function(resource, init) {
    try {
      const response = await originalFetch(resource, init);
      
      // Comprobar si es un error 404
      if (response.status === 404) {
        const url = typeof resource === 'string' ? resource : resource.url;
        errors.add(url);
        updateErrorDisplay();
        console.error(`404 Error: ${url}`);
      }
      
      return response;
    } catch (error) {
      console.error('Fetch error:', error);
      return Promise.reject(error);
    }
  };
  
  // Monitorear carga de recursos
  function checkResourceErrors() {
    const failedImages = Array.from(document.querySelectorAll('img')).filter(
      img => img.complete && img.naturalHeight === 0 && img.src && !img.src.startsWith('data:')
    );
    
    failedImages.forEach(img => {
      errors.add(img.src);
      // Asignar placeholder
      img.classList.add('error');
    });
    
    updateErrorDisplay();
  }
  
  // Verificar errores después de cargar la página
  window.addEventListener('load', checkResourceErrors);
  
  // Verificar periódicamente para nuevas imágenes añadidas dinámicamente
  setInterval(checkResourceErrors, 3000);
}); 