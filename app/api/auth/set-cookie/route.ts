import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { access_token } = await request.json();
    if (!access_token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

    const res = NextResponse.json({ ok: true });
    res.cookies.set({
      name: "sb-access-token",
      value: access_token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
