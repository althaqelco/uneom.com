export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 