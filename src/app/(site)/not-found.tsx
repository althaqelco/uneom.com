import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="font-display stat-number text-9xl font-extrabold text-accent-500/20">404</div>
      <h1 className="mt-6 text-display-lg text-navy-900 balance">Page not in the operations map.</h1>
      <p className="mt-5 max-w-lg text-base text-ink-500 pretty">
        The page you're looking for doesn't exist or has been moved. Try one of the silos below — chances are what you need is there.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/industries/" className="btn-outline">Browse industries</Link>
        <Link href="/contact/" className="btn-ghost">Talk to us</Link>
      </div>
    </section>
  );
}
