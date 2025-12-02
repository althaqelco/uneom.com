/**
 * Images Library
 * مكتبة الصور
 * 
 * Utilities for intelligent image management:
 * - Industry-specific image mapping
 * - Alt tag generation for SEO and accessibility
 * - Responsive image utilities
 */

// Alt tag generation
export { generateAltTag, generateSpecificAltTag } from './alt-tag-generator';

// Industry image mapping
export {
  HEALTHCARE_IMAGES,
  CORPORATE_IMAGES,
  HOSPITALITY_IMAGES,
  AVIATION_IMAGES,
  INDUSTRIAL_IMAGES,
  EDUCATION_IMAGES,
  SECURITY_IMAGES,
  getIndustryImages,
  getRandomIndustryImage,
  getImageByTag
} from './industry-image-map';

export type { IndustryImage, IndustryImageSet } from './industry-image-map';

export default {
  getIndustryImages,
  getRandomIndustryImage,
  getImageByTag
};

