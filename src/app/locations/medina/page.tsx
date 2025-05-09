import { redirect } from 'next/navigation';

export default function MedinaRedirectPage() {
  // This page will automatically redirect users to the localized Medina page
  redirect('/en/locations/medina/');
} 