import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Legacy backup of previous middleware logic.
// This file is intentionally NOT exporting `middleware` or `config` to
// prevent Next.js from detecting it during build. Keep as reference only.
function authGuard(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/public") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/auth") || pathname === "/" || pathname === "/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get("sb-access-token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// End of legacy backup.
