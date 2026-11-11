import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leased Line, SD-WAN & MPLS FAQs | Adapt India Networks",
  description: "Answers on Internet Leased Line vs broadband, static IPs, last-mile redundancy, SD-WAN vs MPLS, uptime SLAs, repair times and NOC support for Indian businesses.",
  path: "/faqs/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs/" }]),
        ]}
      />
      {children}
    </>
  );
}
