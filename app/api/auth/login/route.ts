import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { COOKIE_NAME, MAX_AGE } from "@/lib/constants";
import { getJwtSecret } from "@/lib/jwt-secret";

export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const { email, password } = body;

  if (email !== "admin@example.com" || password !== "password") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const secret = getJwtSecret();
    const token = jwt.sign(
      { name: "Aman Goyal", email },
      secret,
      { expiresIn: MAX_AGE }
    );

    const response = NextResponse.json({
      response: { message: "Authenticated" },
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal server error" }, {
      status: 500,
    });
  }
}
