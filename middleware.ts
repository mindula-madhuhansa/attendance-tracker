import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL("/api/auth/login?post_login_redirect_url=/dashboard", request.url)
    );
  }

  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  return NextResponse.next({ headers });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
