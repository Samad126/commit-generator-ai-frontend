import { NextResponse } from "next/server";

export async function middleware() {
  console.log("ENTER MIDDLEWARE");
  return NextResponse.next();
}

export const config = {
  matcher: "/profile",
};
