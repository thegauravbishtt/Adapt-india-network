import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://www.adapt-india.net/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    const html = await res.text();
    
    // Find all img tags and background images
    const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
    const bgMatches = [...html.matchAll(/url\(["']?([^"')]+)["']?\)/gi)].map(m => m[1]);
    const sliderMatches = [...html.matchAll(/(slider|banner|hero)[^"'\s>]*\.(png|jpg|jpeg|webp)/gi)].map(m => m[0]);

    return NextResponse.json({
      imgMatches,
      bgMatches,
      sliderMatches: [...new Set(sliderMatches)],
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
