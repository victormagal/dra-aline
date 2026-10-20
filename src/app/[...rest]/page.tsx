import { redirect } from 'next/navigation';

// Equivalent of the Angular `{ path: '**', redirectTo: 'inicio' }` fallback.
export default function NotFoundRedirect() {
  redirect('/inicio');
}
