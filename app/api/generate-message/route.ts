// import { ErrorResponse } from "@/types/request";
import { GenerateCommitPayload } from "@/types/form";
import { NextResponse } from "next/server";

const apiUrl = process.env.NEXT_API_URL || "http://localhost:3000";

export async function POST(request: Request) {
  const payload = await request.json();

  try {
    const res = await fetch(`${apiUrl}/generator/generate-commit-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload as GenerateCommitPayload),
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
}
