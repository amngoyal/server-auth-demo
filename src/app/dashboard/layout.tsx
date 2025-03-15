import { getDecodedToken } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getDecodedToken();

  if (!user) {
    redirect('/login');
  }

  return <div>{children}</div>;
}
