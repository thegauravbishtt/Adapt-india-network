import React from "react";
import { notFound } from "next/navigation";
import { allServices, getServiceBySlug } from "../../../data/servicesData";
import ServiceDetailClient from "./ServiceDetailClient";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Adapt India Networks",
    };
  }

  return {
    title: `${service.name} | Adapt India Networks`,
    description: service.heroSubtitle,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
