import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/**
 * EN site layout — wraps every English route with EN header + footer.
 * Group `(site)` doesn't appear in URL: `(site)/page.tsx` → `/`.
 */
export default function EnSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header lang="en" />
      <main id="main" className="flex-1">{children}</main>
      <Footer lang="en" />
    </>
  );
}
