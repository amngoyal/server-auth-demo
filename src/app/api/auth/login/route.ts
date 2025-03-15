import { COOKIE_NAME, MAX_AGE } from '@/lib/constants';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  if (email !== 'admin@example.com' || password !== 'password') {
    return NextResponse.json(
      {
        message: 'Unauthorized',
      },
      {
        status: 401,
      }
    );
  }

  try {
    // Always check this
    const secret = process.env.JWT_SECRET || 'abc';

    const token = sign(
      {
        name: 'Aman Goyal',
        email,
      },
      secret,
      {
        expiresIn: MAX_AGE,
      }
    );

    const serialized = serialize(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60,
      path: '/',
    });

    console.log(serialized);

    const response = {
      message: 'Authenticated',
    };

    return new Response(JSON.stringify({ response }), {
      status: 200,
      headers: { 'Set-Cookie': serialized },
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    });
  }
}
