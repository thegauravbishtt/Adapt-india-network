import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const rmServices = [
  { url: "https://retailmark.com/assets/services/sales-strategy.webp", name: "rm-sales-strategy.webp" },
  { url: "https://retailmark.com/assets/services/forecasting-analytics.webp", name: "rm-forecasting-analytics.webp" },
  { url: "https://retailmark.com/assets/services/item-creation.webp", name: "rm-item-creation.webp" },
  { url: "https://retailmark.com/assets/services/replenishment-planning.webp", name: "rm-replenishment-planning.webp" },
  { url: "https://retailmark.com/assets/services/supply-chain-planning.webp", name: "rm-supply-chain-planning.webp" },
  { url: "https://retailmark.com/assets/services/reporting.webp", name: "rm-reporting.webp" },
  { url: "https://retailmark.com/assets/services/e-commerce.webp", name: "rm-e-commerce.webp" },
  { url: "https://retailmark.com/assets/services/trend-management.webp", name: "rm-trend-management.webp" },
  { url: "https://retailmark.com/assets/services/pitch-deck-development.webp", name: "rm-pitch-deck-development.webp" },
];

export async function GET() {
  const destDir = path.join(process.cwd(), "public", "retailmark");
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const results: any[] = [];
  for (const item of rmServices) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        results.push({ name: item.name, status: "failed", code: res.status });
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(destDir, item.name), buffer);
      results.push({ name: item.name, status: "saved", size: buffer.length });
    } catch (err: any) {
      results.push({ name: item.name, status: "error", error: err.message });
    }
  }

  return NextResponse.json({ results });
}
