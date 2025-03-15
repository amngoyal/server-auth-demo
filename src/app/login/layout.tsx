import { getDecodedToken } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getDecodedToken();

  if (user) {
    redirect('/dashboard');
  }

  return <div>{children}</div>;
}
