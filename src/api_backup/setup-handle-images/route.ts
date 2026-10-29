import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const handleDir = path.join(publicDir, "handle");

  if (!fs.existsSync(handleDir)) {
    fs.mkdirSync(handleDir, { recursive: true });
  }

  const copyList = [
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\sales_strategy_color_1793135521641.jpg",
      dest: "01-sales-strategy.jpg",
    },
    {
      src: path.join(publicDir, "industries", "ecom_cap_analytics.jpg"),
      dest: "02-forecasting-analytics.jpg",
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\item_creation_color_1793135568590.jpg",
      dest: "03-item-creation.jpg",
    },
    {
      src: path.join(publicDir, "industries", "ecom_cap_unboxing.jpg"),
      dest: "04-replenishment-planning.jpg",
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\supply_chain_color_1793135548410.jpg",
      dest: "05-supply-chain-planning.jpg",
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\reporting_color_1793135586864.jpg",
      dest: "06-reporting.jpg",
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\ecommerce_color_1793135606509.jpg",
      dest: "07-ecommerce.jpg",
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\trend_management_color_1793135651455.jpg",
      dest: "08-trend-management.jpg",
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\pitch_deck_color_1793135628612.jpg",
      dest: "09-pitch-deck-development.jpg",
    },
  ];

  const results: any[] = [];

  for (const item of copyList) {
    try {
      if (fs.existsSync(item.src)) {
        const destPath = path.join(handleDir, item.dest);
        fs.copyFileSync(item.src, destPath);
        results.push({ name: item.dest, status: "copied" });
      } else {
        results.push({ name: item.dest, status: "not_found", src: item.src });
      }
    } catch (err: any) {
      results.push({ name: item.dest, status: "error", error: err.message });
    }
  }

  return NextResponse.json({ success: true, results });
}
