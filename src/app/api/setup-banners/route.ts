import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const candidates = [
  { url: "https://www.adapt-india.net/images/slider2.jpg", name: "adapt-slider2.jpg" },
  { url: "https://www.adapt-india.net/images/background/bg1.jpg", name: "adapt-bg1.jpg" },
  { url: "https://www.adapt-india.net/images/sd-wan.jpg", name: "adapt-sd-wan-clean.jpg" },
  { url: "https://www.adapt-india.net/admin/assets/img/uploads/ChatGPT%20Image%20Apr%2030,%202026,%2004_47_49%20PM.png", name: "adapt-ai-net1.png" },
  { url: "https://www.adapt-india.net/admin/assets/img/uploads/PixVerse_Image_Effect_prompt__Create%20a%20modern%20.jpeg", name: "adapt-pixverse.jpeg" },
  { url: "https://www.adapt-india.net/admin/assets/img/uploads/ChatGPT%20Image%20May%205,%202026,%2003_35_53%20PM.png", name: "adapt-ai-net2.png" },
  { url: "https://www.adapt-india.net/images/resource/news1-1.jpg", name: "adapt-news1.jpg" },
  { url: "https://www.adapt-india.net/images/resource/news1-2.jpg", name: "adapt-news2.jpg" },
  { url: "https://www.adapt-india.net/images/resource/news1-3.jpg", name: "adapt-news3.jpg" },
  // High quality premium dark networking & fiber optics banners (Unsplash direct CDN)
  { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop", name: "banner-datacenter-racks.jpg" },
  { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop", name: "banner-servers-lights.jpg" },
  { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", name: "banner-network-matrix.jpg" },
  { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", name: "banner-global-telecom.jpg" },
];

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const results: any[] = [];

  for (const item of candidates) {
    try {
      const res = await fetch(item.url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      });
      if (!res.ok) {
        results.push({ name: item.name, status: "failed", statusCode: res.status });
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const destPath = path.join(publicDir, item.name);
      fs.writeFileSync(destPath, buffer);
      results.push({ name: item.name, status: "saved", size: buffer.length });
    } catch (e: any) {
      results.push({ name: item.name, status: "error", error: e.message });
    }
  }

  return NextResponse.json({ results });
}
