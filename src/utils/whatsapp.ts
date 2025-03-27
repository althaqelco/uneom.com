/**
 * WhatsApp utility functions for contact redirects
 */

// WhatsApp number for redirects (example Saudi number)
export const WHATSAPP_NUMBER = '+971558164922';

// Generate a WhatsApp URL with template message for product inquiries
export function generateProductWhatsAppUrl(productName: string, variant?: string, quantity?: number) {
  const message = `Hello, I'm interested in the *${productName}*${variant ? ` (${variant})` : ''}${quantity ? ` - Quantity: ${quantity}` : ''}. Please provide more information.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Generate a WhatsApp URL with template message for blog or general inquiries
export function generateGeneralWhatsAppUrl(subject: string) {
  const message = `Hello, I have a question about ${subject}. Can you provide more information?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Generate a WhatsApp URL with template message for quote requests
export function generateQuoteWhatsAppUrl(product: string, details?: string) {
  const message = `Hello, I would like to request a quote for *${product}*${details ? `\n\nDetails: ${details}` : ''}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
} 