import { COOKIE_NAME } from '@/lib/constants';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Define the shape of the decoded JWT payload if necessary
interface DecodedToken {
  userId?: string; // Adjust the fields based on your JWT structure
  [key: string]: unknown; // For additional fields
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return NextResponse.json(
      {
        message: 'Unauthorized',
      },
      {
        status: 401,
      }
    );
  }

  const { value } = token;
  const secret = process.env.JWT_SECRET || 'abc';

  try {
    const decoded = verify(value, secret) as DecodedToken;

    const response = {
      name: decoded.name,
      email: decoded.email,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      {
        status: 400,
      }
    );
  }
}
