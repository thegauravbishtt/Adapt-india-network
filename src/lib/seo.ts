import type { Metadata } from "next";

/**
 * Central SEO settings for Adapt India Networks.
 * Change business details here and every page, schema block and the
 * sitemap pick them up automatically.
 */
export const SITE_URL = "https://www.adapt-india.net";
export const SITE_NAME = "Adapt India Networks";
export const DEFAULT_OG_IMAGE = "/banner-global-telecom.jpg";

export const BUSINESS = {
  name: "Adapt India Networks",
  legalName: "Adapt India Networks",
  phone: "+91-8287479961",
  phoneDisplay: "+91 82874 79961",
  email: "info@adapt-india.net",
  supportEmail: "support@adapt-india.net",
  /** Same address as the Google Business Profile, so listings match everywhere. */
  street: "WZ97B, Ground Floor, Tackchand Complex, Jwala Heri Market, Paschim Vihar",
  city: "New Delhi",
  /** Other names people search for the business by. */
  alternateNames: ["Adapt India Network", "Adapt India"],
  foundingYear: "2015",
  /** Office hours (the NOC itself runs 24/7). */
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "19:00" },
  /** Official profiles elsewhere. Google uses these to link them to this business. */
  sameAs: [
    "https://www.facebook.com/p/Adapt-India-Networks-100063716298776/",
    "https://www.instagram.com/adaptindianetworks/",
    "https://in.linkedin.com/company/adapt-india-networks",
    "https://www.justdial.com/Delhi/Adapt-India-Network-Near-Holi-Park-Paschim-Vihar/011PXX11-XX11-201223162930-K4Q6_BZDET",
    "https://www.indiamart.com/adapt-india-network/profile.html",
    "https://www.sulekha.com/adapt-india-networks-paschim-vihar-delhi-contact-address",
  ],
  region: "Delhi",
  postalCode: "110063",
  country: "IN",
  /** Approximate map position of Paschim Vihar, New Delhi. */
  latitude: 28.6692,
  longitude: 77.0947,
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

/**
 * Adds the brand to a page title only while the whole title still fits in
 * Google's results (~60 characters); otherwise the keyword title is kept alone.
 */
export function seoTitle(base: string, max = 60): string {
  for (const suffix of [" | Adapt India Networks", " | Adapt India"]) {
    if (base.length + suffix.length <= max) return base + suffix;
  }
  return base;
}

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

/** Core services listed in the business schema's offer catalogue. */
const OFFERED_SERVICES: Array<{ name: string; path: string }> = [
  { name: "Internet Leased Line (ILL)", path: "/services/smart-internet-ill/" },
  { name: "Managed SD-WAN", path: "/services/smartflo-sd-wan/" },
  { name: "MPLS VPN", path: "/services/managed-mpls/" },
  { name: "Enterprise Broadband", path: "/services/enterprise-broadband/" },
  { name: "Managed Wi-Fi", path: "/services/managed-campus-wifi/" },
  { name: "SIP Trunk", path: "/services/sip-trunk-services/" },
  { name: "Cloud Telephony", path: "/services/smartflo-ucaas/" },
  { name: "Network Security", path: "/services/cybersecurity-solutions/" },
  { name: "Point-to-Point Leased Line", path: "/services/point-to-point-leased-line/" },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.alternateNames,
    foundingDate: BUSINESS.foundingYear,
    sameAs: BUSINESS.sameAs,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${BUSINESS.latitude},${BUSINESS.longitude}`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.openingHours.days,
      opens: BUSINESS.openingHours.opens,
      closes: BUSINESS.openingHours.closes,
    },
    currenciesAccepted: "INR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Enterprise connectivity services in India",
      itemListElement: OFFERED_SERVICES.map((svc) => ({
        "@type": "Offer",
        priceCurrency: "INR",
        areaServed: { "@type": "Country", name: "India" },
        itemOffered: { "@type": "Service", name: svc.name, url: absoluteUrl(svc.path) },
      })),
    },
    areaServed: BUSINESS.areaServed.map(placeSchema),
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
        telephone: BUSINESS.phone,
        contactType: "technical support",
        areaServed: "IN",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
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
    alternateName: BUSINESS.alternateNames,
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
    areaServed: (input.areaServed ?? ["India"]).map(placeSchema),
  };
}

/** States and multi-city regions; everything else in areaServed lists is a city. */
const REGIONS = new Set([
  "Delhi NCR",
  "Haryana",
  "Uttar Pradesh",
  "Maharashtra",
  "Karnataka",
  "Telangana",
  "Tamil Nadu",
  "West Bengal",
  "Gujarat",
  "Rajasthan",
  "Punjab",
  "Chandigarh Tricity",
]);

/** schema.org place with the most specific type: Country, AdministrativeArea or City. */
export function placeSchema(name: string) {
  const type = name === "India" ? "Country" : REGIONS.has(name) ? "AdministrativeArea" : "City";
  return { "@type": type, name };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    image: absoluteUrl(input.image || DEFAULT_OG_IMAGE),
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    ...(input.keywords ? { keywords: input.keywords } : {}),
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: input.author || BUSINESS.name },
    publisher: { "@id": ORG_ID },
  };
}
