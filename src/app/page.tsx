import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <h1 className="font-bold text-2xl">
        Welcome to Server side cookie based authentication demo
      </h1>
      <p className="mt-1">
        You will be redirected to login page if you are not logged in and vice
        versa. It will be checked on server side.
      </p>
      <div className="flex flex-col justify-center items-center gap-6 mt-10">
        <Link href={'/login'}>
          <Button>Login </Button>
        </Link>
        <Link href={'/dashboard'}>
          <Button>Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
