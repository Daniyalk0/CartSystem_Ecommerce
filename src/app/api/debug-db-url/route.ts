// src/app/api/debug-db-url/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    DATABASE_URL: process.env.DATABASE_URL || "❌ Not set",
  });
}
