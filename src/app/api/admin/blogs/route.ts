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
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    }

    const success = await deleteBlog(id);
    if (!success) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to delete blog" }, { status: 500 });
  }
}
