import { COOKIE_NAME } from '@/lib/constants';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();

  // Remove the auth token from cookies
  cookieStore.delete(COOKIE_NAME);

  // Return a success response
  return NextResponse.json({ success: true });
}
