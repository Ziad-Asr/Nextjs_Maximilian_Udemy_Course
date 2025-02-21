import { NextResponse } from "next/server";

export function middleware(request) {
  //   console.log(response);
  return NextResponse.next();
}

// Only apply the middleware on (news) routes
export const config = {
  matcher: "/news",
};
