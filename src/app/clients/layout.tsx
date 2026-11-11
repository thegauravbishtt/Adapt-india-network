import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Clients | Businesses Connected Across India | Adapt India",
  description: "Brands in retail, logistics, finance, food service and manufacturing rely on Adapt India Networks for leased lines, SD-WAN and managed connectivity across India.",
  path: "/clients/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Clients", path: "/clients/" }]),
        ]}
      />
      {children}
    </>
  );
}
