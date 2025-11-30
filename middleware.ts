import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // For other admin pages, check for session token in cookies
  // If no token, redirect to login
  const token = request.cookies.get("next-auth.session-token") || 
                request.cookies.get("__Secure-next-auth.session-token");

  if (!token && pathname.startsWith("/admin/")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
