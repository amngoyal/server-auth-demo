'use client';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/UserContext';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      router.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto mt-24 max-w-4xl">
      <h1 className="mb-4 font-bold text-2xl">Dashboard</h1>
      <p>Welcome to your dashboard! {user?.name}</p>
      <p>
        Try refreshing or going back to{' '}
        <Link className="text-blue-600 underline" href={'/login'}>
          login
        </Link>
        . It will be redirected to dashboard
      </p>
      <Button className="mt-10" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
