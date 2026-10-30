import type { Metadata } from "next";

/**
 * Central SEO settings for Adapt India Network.
 * Change business details here and every page, schema block and the
 * sitemap pick them up automatically.
 */
export const SITE_URL = "https://www.adapt-india.net";
export const SITE_NAME = "Adapt India Network";
export const DEFAULT_OG_IMAGE = "/banner-global-telecom.jpg";

export const BUSINESS = {
  name: "Adapt India Network",
  legalName: "Adapt India Network",
  phone: "+91-8287479961",
  phoneDisplay: "+91 82874 79961",
  email: "info@adapt-india.net",
  supportEmail: "support@adapt-india.net",
  street: "Saket District Centre, Saket",
  city: "New Delhi",
  region: "Delhi",
  postalCode: "110062",
  country: "IN",
  logo: "/logo-nobg.png",
  /** Cities and regions shown in schema "areaServed". */
  areaServed: [
    "India",
    "Delhi",
    "New Delhi",
    "Delhi NCR",
    "Gurugram",
    "Noida",
    "Greater Noida",
    "Ghaziabad",
    "Faridabad",
    "Lucknow",
    "Uttar Pradesh",
    "Haryana",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
  ],
};

/** Absolute URL for a site path. Paths always end in "/" (trailingSlash is on). */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  let clean = path.startsWith("/") ? path : `/${path}`;
  if (!clean.endsWith("/") && !clean.split("/").pop()?.includes(".")) clean += "/";
  return `${SITE_URL}${clean === "/" ? "/" : clean}`;
}

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  /** Path of the main version when this page is a duplicate/alias. */
  canonicalPath?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article";
}

/** Builds complete metadata (canonical, Open Graph, Twitter, robots) for a page. */
export function pageMetadata({
  title,
  description,
  path,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  keywords,
  noIndex,
  type = "website",
}: PageSeoInput): Metadata {
  const url = absoluteUrl(canonicalPath ?? path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: { "en-IN": url, "x-default": url },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD)                                           */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(BUSINESS.logo),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      "Pan-India provider of enterprise Internet Leased Line (ILL), SD-WAN, MPLS VPN, enterprise broadband, managed Wi-Fi, SIP trunk and cloud telephony, headquartered in New Delhi.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": name === "India" ? "Country" : "Place",
      name,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        email: BUSINESS.supportEmail,
        contactType: "technical support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    knowsAbout: [
      "Internet Leased Line",
      "SD-WAN",
      "MPLS VPN",
      "Enterprise Broadband",
      "Managed Wi-Fi",
      "SIP Trunk",
      "Cloud Telephony",
      "Network Security",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": ORG_ID },
    areaServed: (input.areaServed ?? ["India"]).map((name) => ({
      "@type": name === "India" ? "Country" : "Place",
      name,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    image: absoluteUrl(input.image || DEFAULT_OG_IMAGE),
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: input.author || BUSINESS.name },
    publisher: { "@id": ORG_ID },
  };
}
