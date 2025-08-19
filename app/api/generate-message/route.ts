import { ErrorResponse } from "@/types/error";
import { NextResponse } from "next/server";

const apiUrl = process.env.NEXT_API_URL || "http://localhost:3000";

export async function POST(req: Request) {
  console.log(apiUrl);
  return req
    .json()
    .then((payload) =>
      fetch(`${apiUrl}/generator/generate-commit-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    )
    .then((res) =>
      res.json().then((data) => NextResponse.json(data, { status: res.status }))
    )
    .catch((error) => {
      const errObj = {
        message: "An unexpected error occurred.",
        error: String(error),
        statusCode: 502,
      } as ErrorResponse;

      return NextResponse.json(errObj, { status: 502 });
    });
}
