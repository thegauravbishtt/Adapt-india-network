import React from "react";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { allIndustries, getIndustryBySlug } from "../../../data/industriesData";
import IndustryDetailClient from "./IndustryDetailClient";

function syncIndustryImages() {
  const syncList = [
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\fintech_banner_1791826591218.jpg",
      dest: path.join(process.cwd(), "public", "industries", "finance-fintech.jpg"),
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\05baf393-1e94-4c59-94ea-25df6cf38aa8\\travel_banner_1791826803736.jpg",
      dest: path.join(process.cwd(), "public", "industries", "travel-tourism.jpg"),
    },
    {
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\584a4ad8-3b57-4b20-a262-de8d3308ac8b\\real_farm_landscape_1791879779560.jpg",
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
      src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\584a4ad8-3b57-4b20-a262-de8d3308ac8b\\real_farm_produce_1791879733667.jpg",
      dest: path.join(process.cwd(), "public", "industries", "agri_cap_market.jpg"),
    },
  ];

  for (const item of syncList) {
    try {
      if (fs.existsSync(item.src)) {
        const dir = path.dirname(item.dest);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(item.src, item.dest);
      }
    } catch {
      // Ignore sync errors
    }
  }
}


interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  syncIndustryImages();
  return allIndustries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Owlio Works",
    };
  }

  return {
    title: `${industry.name} Solutions | Owlio Works`,
    description: industry.heroSubtitle,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  syncIndustryImages();
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} />;
}

