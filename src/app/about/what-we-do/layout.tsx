import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What We Do | Leased Line, SD-WAN, MPLS & Voice",
  description: "Internet Leased Lines, SD-WAN, MPLS VPN, managed Wi-Fi, SIP trunks and cloud telephony for Indian businesses, designed, installed and supported end to end.",
  path: "/about/what-we-do/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }, { name: "What We Do", path: "/about/what-we-do/" }]),
        ]}
      />
      {children}
    </>
  );
}
