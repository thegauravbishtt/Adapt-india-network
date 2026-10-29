import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const files = [
    "adapt-slider2.jpg",
    "adapt-bg1.jpg",
    "adapt-sd-wan-clean.jpg",
    "adapt-ai-net1.png",
    "adapt-pixverse.jpeg",
    "adapt-ai-net2.png",
    "banner-datacenter-racks.jpg",
    "banner-servers-lights.jpg",
    "banner-network-matrix.jpg",
    "banner-global-telecom.jpg",
  ];

  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>Banner Preview</title><style>body{background:#111;color:#fff;font-family:sans-serif;} .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;padding:20px;} img{width:100%;height:300px;object-fit:cover;border-radius:8px;border:1px solid #333;} .card{background:#222;padding:10px;border-radius:10px;}</style></head>
      <body>
        <h1>Banner Candidates Preview</h1>
        <div class="grid">
          ${files.map(f => {
            const exists = fs.existsSync(path.join(publicDir, f));
            return `<div class="card"><h3>${f} (${exists ? "EXISTS" : "MISSING"})</h3><img src="/${f}" /></div>`;
          }).join("")}
        </div>
      </body>
    </html>
  `;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}
