import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });

    // Generate safe unique filename
    const originalName = file.name || "image.png";
    const extension = path.extname(originalName).toLowerCase() || ".png";
    const sanitizedBase = path
      .basename(originalName, extension)
      .replace(/[^a-zA-Z0-9_-]/g, "")
      .substring(0, 30) || "upload";
    
    const uniqueSuffix = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    const filename = `${sanitizedBase}-${uniqueSuffix}${extension}`;
    const filePath = path.join(uploadsDir, filename);

    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: publicUrl, filename });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to upload image" },
      { status: 500 }
    );
  }
}
