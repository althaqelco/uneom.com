'use client';

/**
 * WebMCP — Exposes site tools to AI agents via the browser.
 * Uses the emerging navigator.modelContext API to register
 * discoverable tools that agents can invoke.
 *
 * Implemented as an inline script to ensure tools are registered
 * synchronously on page load (before scanners check).
 *
 * @see https://webmachinelearning.github.io/webmcp/
 * @see https://developer.chrome.com/docs/ai/web-mcp
 */

const WEBMCP_SCRIPT = `
(function() {
  if (typeof navigator === 'undefined' || !navigator.modelContext || !navigator.modelContext.provideContext) return;

  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'browse_products',
        description: 'Browse UNEOM uniform product catalog. Categories: medical-scrubs, corporate-workwear, hospitality-attire, aviation, industrial-uniforms, school-uniforms, chef-uniforms, security-uniforms.',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: 'Product category slug',
              enum: ['medical-scrubs', 'corporate-workwear', 'hospitality-attire', 'aviation', 'industrial-uniforms', 'school-uniforms', 'chef-uniforms', 'security-uniforms']
            }
          }
        },
        execute: function(input) {
          var url = input.category ? 'https://uneom.com/shop/' + input.category + '/' : 'https://uneom.com/shop/';
          return Promise.resolve(JSON.stringify({ action: 'navigate', url: url }));
        }
      },
      {
        name: 'request_quote',
        description: 'Request a bulk uniform quotation from UNEOM Saudi Arabia. Supports custom quantities, fabric specifications, logo embroidery, and delivery scheduling across all 24 Saudi cities.',
        inputSchema: {
          type: 'object',
          properties: {
            industry: { type: 'string', description: 'Industry sector', enum: ['healthcare', 'hospitality', 'aviation', 'industrial', 'education', 'corporate', 'food-service', 'security'] },
            city: { type: 'string', description: 'Saudi city for delivery' }
          }
        },
        execute: function() {
          return Promise.resolve(JSON.stringify({ action: 'navigate', url: 'https://uneom.com/quote/' }));
        }
      },
      {
        name: 'find_industry_solution',
        description: 'Find industry-specific uniform programmes at UNEOM for healthcare, hospitality, aviation, industrial, education, corporate, food-service, or security.',
        inputSchema: {
          type: 'object',
          properties: {
            industry: { type: 'string', description: 'Industry slug', enum: ['healthcare', 'hospitality', 'aviation', 'industrial', 'education', 'corporate', 'food-service', 'security'] }
          },
          required: ['industry']
        },
        execute: function(input) {
          return Promise.resolve(JSON.stringify({ action: 'navigate', url: 'https://uneom.com/industries/' + input.industry + '/' }));
        }
      },
      {
        name: 'check_city_availability',
        description: 'Check UNEOM availability in Saudi cities: riyadh, jeddah, dammam, makkah, madinah, khobar, tabuk, abha, and 16 more.',
        inputSchema: {
          type: 'object',
          properties: {
            city: { type: 'string', description: 'City slug' }
          },
          required: ['city']
        },
        execute: function(input) {
          return Promise.resolve(JSON.stringify({ action: 'navigate', url: 'https://uneom.com/locations/' + input.city + '/' }));
        }
      },
      {
        name: 'contact_uneom',
        description: 'Contact UNEOM Saudi Arabia. Phone: +966 56 461 2017, Email: info@uneom.com, WhatsApp available.',
        inputSchema: {
          type: 'object',
          properties: {
            method: { type: 'string', description: 'Contact method', enum: ['form', 'phone', 'email', 'whatsapp'] }
          }
        },
        execute: function(input) {
          var methods = {
            phone: { action: 'call', url: 'tel:+966564612017' },
            email: { action: 'email', url: 'mailto:info@uneom.com' },
            whatsapp: { action: 'navigate', url: 'https://wa.me/966564612017' },
            form: { action: 'navigate', url: 'https://uneom.com/contact/' }
          };
          return Promise.resolve(JSON.stringify(methods[input.method] || methods.form));
        }
      }
    ]
  });
})();
`;

export function WebMCPProvider() {
  return (
    <script dangerouslySetInnerHTML={{ __html: WEBMCP_SCRIPT }} />
  );
}
