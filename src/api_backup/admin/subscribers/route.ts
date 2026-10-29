import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getSubscribers, saveSubscriber, deleteSubscriber } from "@/lib/db";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscribers = await getSubscribers();
  return NextResponse.json({ subscribers });
}

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const sub = await saveSubscriber(email, source || "Newsletter");
    return NextResponse.json({ success: true, subscriber: sub });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to subscribe" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const success = await deleteSubscriber(id);
    return NextResponse.json({ success });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to delete subscriber" }, { status: 500 });
  }
}
