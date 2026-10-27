import { NextResponse } from "next/server";
import { addLike, getLikes } from "@/lib/likes";

export const dynamic = "force-dynamic";

const recent = new Map<string, number>();

export async function GET() {
  try {
    return NextResponse.json({ count: await getLikes() });
  } catch {
    return NextResponse.json({ count: null }, { status: 503 });
  }
}

export async function POST(req: Request) {
  // Light abuse guard: one like per IP per minute (per server instance).
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const now = Date.now();
  if (now - (recent.get(ip) ?? 0) < 60_000) {
    return NextResponse.json({ count: await getLikes().catch(() => null) }, { status: 429 });
  }
  recent.set(ip, now);
  try {
    return NextResponse.json({ count: await addLike() });
  } catch {
    return NextResponse.json({ count: null }, { status: 503 });
  }
}
