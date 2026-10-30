import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices, getServiceBySlug } from "../../../data/servicesData";
import { telecomServices } from "../../../data/telecomServicesData";
import ServiceDetailClient from "./ServiceDetailClient";
import JsonLd from "../../../components/JsonLd";
import {
  pageMetadata,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  BUSINESS,
} from "../../../lib/seo";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Search-focused titles and descriptions for the core telecom services.
 * Titles stay under ~65 characters and descriptions under ~160 so Google
 * shows them in full.
 */
const SERVICE_SEO: Record<string, { title: string; description: string; serviceType: string }> = {
  "smart-internet-ill": {
    title: "Internet Leased Line (ILL) Provider in Delhi NCR & India",
    description:
      "Dedicated 1:1 symmetrical Internet Leased Line with SLA, static IPs and 24/7 NOC for offices in Delhi, Gurgaon, Noida and pan-India. Get a quote today.",
    serviceType: "Internet Leased Line",
  },
  "smartflo-sd-wan": {
    title: "SD-WAN Service Provider in India | Managed SD-WAN",
    description:
      "Managed SD-WAN for multi-branch businesses in India: link bonding, automatic failover, central policy control and zero-touch branch rollout. Talk to our team.",
    serviceType: "SD-WAN",
  },
  "smartoffice-connect": {
    title: "SmartOffice Connect | Office Internet, Wi-Fi & Voice Bundle",
    description:
      "One bundle for new offices in Delhi NCR and India: leased line or broadband, managed Wi-Fi, firewall and cloud PBX on a single bill with one support desk.",
    serviceType: "Managed Office Connectivity",
  },
  "managed-mpls": {
    title: "MPLS VPN Service Provider in India | Managed MPLS",
    description:
      "Private, secure MPLS VPN connectivity between branches, plants and data centres across India with QoS, managed routers and round-the-clock monitoring.",
    serviceType: "MPLS VPN",
  },
  "business-communications": {
    title: "SIP Trunk & Cloud Telephony Provider in India",
    description:
      "SIP trunking, cloud contact centre, toll-free and virtual numbers, and WhatsApp Business API for Indian businesses. Port numbers and integrate with your CRM.",
    serviceType: "SIP Trunk and Cloud Telephony",
  },
  "network-as-a-service": {
    title: "Network as a Service (NaaS) for Enterprises in India",
    description:
      "Subscribe to a fully managed enterprise network (connectivity, routers, Wi-Fi and security) for a predictable monthly fee instead of large upfront spend.",
    serviceType: "Network as a Service",
  },
  "collaboration-productivity": {
    title: "Business Collaboration & Modern Workplace Solutions India",
    description:
      "Video meetings, unified communications and productivity tools set up and supported for Indian offices and hybrid teams, on a network built to run them.",
    serviceType: "Unified Communications",
  },
  "cloud-infrastructure": {
    title: "Enterprise Cloud Connectivity & Infrastructure in India",
    description:
      "Secure, low-latency connectivity to AWS, Azure, Google Cloud and Indian data centres, plus managed cloud infrastructure for growing businesses.",
    serviceType: "Cloud Connectivity",
  },
  "cybersecurity-solutions": {
    title: "Network Security & Managed Firewall Services in India",
    description:
      "Next-gen firewalls, DDoS protection, secure SD-WAN and managed SOC monitoring for Indian enterprises. Protect every branch from one security policy.",
    serviceType: "Managed Network Security",
  },
  "managed-services": {
    title: "24/7 Managed NOC & Network Support Services India",
    description:
      "Round-the-clock network monitoring, fault management and vendor coordination for your leased lines, SD-WAN and branch networks anywhere in India.",
    serviceType: "Managed Network Operations",
  },
  "bundled-solutions": {
    title: "Bundled Business Internet, Voice & Wi-Fi Plans in India",
    description:
      "Combine leased line, broadband backup, Wi-Fi, SIP trunk and security in one enterprise bundle with a single contract and support desk across India.",
    serviceType: "Bundled Telecom Services",
  },
  "point-to-point-leased-line": {
    title: "Point-to-Point Leased Line (P2P) Provider in India",
    description:
      "Private point-to-point leased circuits linking offices, plants and data centres in Delhi NCR and across India with dedicated, uncontended bandwidth.",
    serviceType: "Point-to-Point Leased Line",
  },
  "enterprise-broadband": {
    title: "Enterprise Broadband & Office Wi-Fi in Delhi NCR & India",
    description:
      "High-speed business broadband and managed campus Wi-Fi for offices, retail stores and warehouses in Delhi, Gurgaon, Noida and pan-India.",
    serviceType: "Enterprise Broadband",
  },
};

const telecomSlugs = new Set(telecomServices.map((s) => s.slug));

/** Short alias URLs that already exist on the live site; they canonicalise to the main page. */
const ALIAS_SLUGS = [
  "internet-leased-line",
  "sd-wan",
  "mpls",
  "managed-wifi",
  "cloud-telephony",
  "cyber-security",
  "data-services",
];

export async function generateStaticParams() {
  const main = allServices.map((service) => service.slug);
  const aliases = ALIAS_SLUGS.filter((a) => !main.includes(a) && getServiceBySlug(a));
  return [...main, ...aliases].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found", robots: { index: false, follow: true } };
  }

  const seo = SERVICE_SEO[service.slug];
  return pageMetadata({
    title: seo ? `${seo.title} | Adapt India` : `${service.name} | Adapt India Network`,
    description: seo?.description ?? service.heroSubtitle,
    path: `/services/${slug}/`,
    // Aliases such as /services/sd-wan/ point Google at the main page.
    canonicalPath: `/services/${service.slug}/`,
    image: service.image,
    // Pages left over from the old website template (web design, SEO, ads...)
    // are not part of the telecom offering, so keep them out of Google.
    noIndex: !telecomSlugs.has(service.slug),
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const seo = SERVICE_SEO[service.slug];
  const isTelecom = telecomSlugs.has(service.slug);
  const path = `/services/${service.slug}/`;

  return (
    <>
      {isTelecom && (
        <JsonLd
          data={[
            serviceSchema({
              name: seo?.title ?? service.name,
              description: seo?.description ?? service.heroSubtitle,
              path,
              serviceType: seo?.serviceType ?? service.name,
              areaServed: BUSINESS.areaServed,
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services/" },
              { name: service.name, path },
            ]),
            ...(service.faqs?.length ? [faqSchema(service.faqs)] : []),
          ]}
        />
      )}
      <ServiceDetailClient service={service} />
    </>
  );
}
