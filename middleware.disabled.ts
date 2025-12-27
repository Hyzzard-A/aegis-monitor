import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Backup of middleware.ts — renamed to avoid Next.js middleware/proxy conflict.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Next.js internals, static assets and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/public") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Allow auth API endpoints (used to set cookie) and public pages
  if (pathname.startsWith("/api/auth") || pathname === "/" || pathname === "/login") {
    return NextResponse.next();
  }

  // For all other routes, require the sb-access-token cookie
  const token = req.cookies.get("sb-access-token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
