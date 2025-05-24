# UNEOM SEO Helper Scripts

This directory contains scripts to help resolve SEO issues and optimize the website for search engines. These tools are designed to identify and fix common SEO problems in the Next.js App Router project structure.

## Available Scripts

### 1. SEO Checker
Analyzes pages for SEO issues and generates a detailed report.

```bash
# Run the SEO checker
./src/scripts/check-seo.js
```

This will generate a `seo-report.md` file in the project root with an analysis of:
- Missing or duplicate metadata (titles, descriptions)
- Low word count on pages
- Missing heading structure
- Missing Schema.org structured data
- And more

### 2. Find Client/Server Component Issues
Identifies pages that violate Next.js App Router patterns by having both 'use client' directives and metadata exports.

```bash
# Find problematic pages
./src/scripts/find-client-metadata-pages.js
```

This will create a `seo-fixes-report.md` file listing all pages that need to be migrated to the correct pattern.

### 3. Metadata Migration Helper
Automatically fixes pages with both 'use client' and metadata exports by converting them to proper client/server component architecture.

```bash
# Fix pages interactively
./src/scripts/update-metadata.js
```

This script:
1. Creates a new `client.tsx` with 'use client' directive and UI code
2. Updates the `page.tsx` to only export metadata and render the client component
3. Backs up original files with `.bak` extension

## Recommended Workflow

1. First, run `check-seo.js` to identify all SEO issues
2. Run `find-client-metadata-pages.js` to find architecture issues
3. Use `update-metadata.js` to fix the architecture issues
4. Run `check-seo.js` again to verify improvements

## Additional Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [SEO Best Practices](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/) for structured data

## Notes

- Always back up your work before running migration scripts
- These tools are specific to the UNEOM project architecture
- The scripts expect certain directory structures and code patterns 