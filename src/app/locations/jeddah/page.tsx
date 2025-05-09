import { redirect } from 'next/navigation';

export default function JeddahRedirectPage() {
  // This page will automatically redirect users to the localized Jeddah page
  redirect('/en/locations/jeddah/');
} 