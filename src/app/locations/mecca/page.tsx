import { redirect } from 'next/navigation';

export default function MeccaRedirectPage() {
  // This page will automatically redirect users to the localized Mecca page
  redirect('/en/locations/mecca/');
} 