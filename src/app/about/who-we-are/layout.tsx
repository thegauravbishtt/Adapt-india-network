import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Who We Are | Delhi-Based Business Network Provider",
  description: "Meet the team behind Adapt India Networks, a Paschim Vihar, New Delhi telecom partner serving offices, warehouses and branches across Delhi NCR and India.",
  path: "/about/who-we-are/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }, { name: "Who We Are", path: "/about/who-we-are/" }]),
        ]}
      />
      {children}
    </>
  );
}
