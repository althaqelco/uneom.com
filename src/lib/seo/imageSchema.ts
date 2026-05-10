/**
 * ImageObject JSON-LD generator — produces schema.org ImageObject from
 * the image registry. Called by ResponsiveImage + page-level schemas.
 *
 * Surfaces the legitimate metadata embedded in EXIF/XMP/IPTC:
 *   - creator (UNEOM Organization @id)
 *   - copyrightHolder
 *   - contentLocation (city + country, when set)
 *   - geo coordinates (when set)
 *   - license URL
 *   - dateCreated (from EXIF DateTimeOriginal)
 *   - keywords
 *
 * No fake camera Make/Model claims. All assertions are true.
 */

import type { ImageMetadata } from '@/lib/data/images';

const SITE = 'https://uneom.com';

export function imageObjectSchema(img: ImageMetadata) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${SITE}${img.path}#image`,
    contentUrl: `${SITE}${img.path}`,
    url: `${SITE}${img.path}`,
    name: img.alt,
    description: img.alt,
    width: img.width,
    height: img.height,
    encodingFormat: 'image/avif',
    creator: { '@id': `${SITE}/#organization` },
    copyrightHolder: { '@id': `${SITE}/#organization` },
    copyrightNotice: '© 2026 UNEOM Saudi Arabia. All rights reserved.',
    creditText: 'UNEOM',
    license: `${SITE}/license/`,
    acquireLicensePage: `${SITE}/license/`,
    dateCreated: img.dateOriginal.replace(/^(\d{4}):(\d{2}):(\d{2}) /, '$1-$2-$3T') + '+03:00',
    keywords: img.keywords.join(', '),
    inLanguage: ['en', 'ar-SA']
  };

  if (img.location?.city) {
    schema.contentLocation = {
      '@type': 'Place',
      name: img.location.city,
      address: {
        '@type': 'PostalAddress',
        addressLocality: img.location.city,
        addressRegion: img.location.state,
        addressCountry: img.location.countryCode
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: img.gps.lat,
        longitude: img.gps.lng
      }
    };
  }

  if (img.industry) {
    schema.about = `${SITE}/industries/${img.industry}/#service`;
  }

  return schema;
}
