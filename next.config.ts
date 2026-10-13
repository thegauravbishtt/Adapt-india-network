import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Ensure newly generated industry photos from artifacts are synced into public/industries
const syncImages = [
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\fintech_banner_1791826591218.jpg",
    dest: path.join(process.cwd(), "public", "industries", "finance-fintech.jpg"),
  },
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\travel_banner_1791826803736.jpg",
    dest: path.join(process.cwd(), "public", "industries", "travel-tourism.jpg"),
  },
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\agri_farm_harvest_1791827782318.jpg",
    dest: path.join(process.cwd(), "public", "industries", "agriculture-agritech.jpg"),
  },
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\fintech_cap_app_1791826847606.jpg",
    dest: path.join(process.cwd(), "public", "industries", "fintech_cap_app.jpg"),
  },
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\travel_cap_resort_1791826864793.jpg",
    dest: path.join(process.cwd(), "public", "industries", "travel_cap_resort.jpg"),
  },
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\agri_farm_mgmt_1791827857002.jpg",
    dest: path.join(process.cwd(), "public", "industries", "agri_cap_smartfarm.jpg"),
  },
  {
    src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\agri_farm_market_1791827816207.jpg",
    dest: path.join(process.cwd(), "public", "industries", "agri_cap_market.jpg"),
  },
];

for (const img of syncImages) {
  try {
    if (fs.existsSync(img.src)) {
      const dir = path.dirname(img.dest);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.copyFileSync(img.src, img.dest);
    }
  } catch {
    // Ignore sync errors
  }
}

const nextConfig: NextConfig = {
  devIndicators: false,
};

export default nextConfig;
