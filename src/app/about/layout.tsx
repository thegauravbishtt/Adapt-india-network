import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Adapt India Network | Telecom Partner, Delhi NCR",
  description: "Adapt India Network is a New Delhi enterprise connectivity partner for leased lines, SD-WAN, MPLS and business voice, with Tata Tele and ACT.",
  path: "/about/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]),
        ]}
      />
      {children}
    </>
  );
}
