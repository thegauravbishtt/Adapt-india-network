import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const src = "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\4805a979-a450-4dd1-b289-a36810755e9a\\wifi_banner_hero_1793130987913.jpg";
    const dest = path.join(process.cwd(), "public", "wifi-banner.jpg");
    
    fs.copyFileSync(src, dest);
    const stat = fs.statSync(dest);

    return NextResponse.json({ success: true, size: stat.size, dest });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
