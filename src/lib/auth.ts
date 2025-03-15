import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

export interface DecodedToken {
  name: string;
  // Add other properties as needed
}

export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token');
  return token ? token.value : null;
}

export async function getDecodedToken(): Promise<DecodedToken | null> {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getAccessToken();
  return !!token;
}
