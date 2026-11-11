import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { hubServices, hubServiceHref } from "@/data/hubServices";
import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leased Line, SD-WAN & MPLS Services in India | Adapt India",
  description: "Internet Leased Line, SD-WAN, MPLS, business broadband, managed Wi-Fi, SIP trunk and network security for offices in Delhi NCR and across India.",
  path: "/services/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]),
          servicesListSchema(),
        ]}
      />
      {children}
    </>
  );
}

/** The services listed on this page, so search engines see the catalogue as a list. */
function servicesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Enterprise connectivity and IT services",
    numberOfItems: hubServices.length,
    itemListElement: hubServices.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: absoluteUrl(hubServiceHref(s.slug)),
    })),
  };
}
