import { redirect } from 'next/navigation';

export default function LocationsRedirectPage() {
  // This page will automatically redirect users to the localized locations page
  redirect('/en/locations/');
} 