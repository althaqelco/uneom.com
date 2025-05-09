import { redirect } from 'next/navigation';

export default function DammamRedirectPage() {
  // This page will automatically redirect users to the localized Dammam page
  redirect('/en/locations/dammam/');
} 