'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div>
        <h1 className="font-bold text-2xl">
          Welcome to Server-Side Cookie-Based Authentication Demo
        </h1>

        <p className="mt-10">
          This demo showcases how authentication is handled using{' '}
          <strong>server-side cookies</strong>.
        </p>
        <ul className="list-disc list-inside">
          <li>
            If you <strong>visit the login page while already logged in</strong>
            , you will be{' '}
            <strong>redirected to the dashboard automatically</strong>.
          </li>
          <li>
            If you{' '}
            <strong>try to access the dashboard without logging in</strong>, you
            will be <strong>redirected to the login page</strong>.
          </li>
          <li>
            Authentication status is <strong>validated on the server</strong>,
            ensuring security.
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center gap-6 mt-10">
          <Link href="/login">
            <Button>Go to Login</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
