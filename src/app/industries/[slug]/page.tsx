import React from "react";
import { notFound } from "next/navigation";
import { allIndustries, getIndustryBySlug } from "../../../data/industriesData";
import IndustryDetailClient from "./IndustryDetailClient";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
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
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} />;
}
