import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "./constants";
import { getJwtSecret } from "./jwt-secret";

export interface DecodedToken {
  name: string;
  email?: string;
}

export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);
  return token?.value ?? null;
}

export async function getDecodedToken(): Promise<DecodedToken | null> {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    return jwt.verify(token, getJwtSecret()) as DecodedToken;
  } catch {
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getDecodedToken();
  return user !== null;
}
