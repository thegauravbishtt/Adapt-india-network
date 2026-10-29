import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://www.adapt-india.net/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
    });
    const html = await res.text();
    
    // Find slider section
    const sliderIndex = html.indexOf("slider");
    const bannerSlice = html.slice(Math.max(0, sliderIndex - 200), sliderIndex + 2500);

    return new NextResponse(bannerSlice, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
