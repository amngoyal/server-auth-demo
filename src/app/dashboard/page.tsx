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

      <p>
        Welcome, <strong>{user?.name || 'User'}</strong>! You are successfully
        logged in.
      </p>

      <p className="mt-4">
        If you try to visit the{' '}
        <Link className="text-blue-600 underline" href="/login">
          login page
        </Link>{' '}
        while authenticated, the server will detect your session and redirect
        you back here.
      </p>

      <Button className="mt-10" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
