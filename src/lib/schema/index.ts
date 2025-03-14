/**
 * Unified export for all schema components
 * This makes it easier to import all schema functions from a single location
 */

// Import all schema components
import organizationSchema from './organization';
import productSchema from './product';
import faqSchema from './faq';
import reviewSchema from './review';

// Export all schema components as a unified object
const schema = {
  // Organization schemas
  organization: organizationSchema,
  
  // Product schemas
  product: productSchema.getProductSchema,
  productList: productSchema.getProductListSchema,
  
  // FAQ schemas
  faq: faqSchema.getFAQSchema,
  industryFAQ: faqSchema.getIndustryFAQSchema,
  
  // Review schemas
  review: reviewSchema.getReviewSchema,
  aggregateRating: reviewSchema.getAggregateRatingSchema,
  localBusiness: reviewSchema.getLocalBusinessReviewSchema
};

// Default export for easy importing
export default schema;

// Named exports for more explicit imports
export {
  organizationSchema,
  productSchema,
  faqSchema,
  reviewSchema
}; 