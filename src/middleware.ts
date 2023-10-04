import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request: NextRequestWithAuth) {
    // console.log(request.nextUrl.pathname)
    // console.log(request.nextauth.token);

    if (
      request.nextUrl.pathname.startsWith("/createproduct") &&
      request.nextauth.token?.role !== "user" &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/", request.url));
    }

    // if (request.nextUrl.pathname.startsWith("/admin/createproduct") && request.nextauth.token?.role !== "admin") {
    //   return NextResponse.rewrite(new URL("/", request.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: [
    "/createproduct",
    // , "/admin/createproduct"
  ],
};
