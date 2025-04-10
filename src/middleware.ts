import { NextResponse, NextRequest } from "next/server";
import { HEADER_KEYS } from "@/utils/headerKeys";

export default function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(HEADER_KEYS.PATHNAME, request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*.jpg).*)"],
};
