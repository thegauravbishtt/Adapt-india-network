import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getBlogs, saveBlog, deleteBlog } from "@/lib/db";

export async function GET() {
  const blogs = await getBlogs();
  return NextResponse.json({ blogs });
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const blog = await saveBlog(body);
    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to save blog" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");
    if (!id) {
      try {
        const body = await req.json();
        id = body?.id;
      } catch {}
    }

    if (!id) {
      return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    }

    await deleteBlog(id);
    return NextResponse.json({ success: true, message: "Blog deleted" });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to delete blog" }, { status: 500 });
  }
}
