import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Adapt India Network",
  description: "How Adapt India Network collects, uses and protects personal information submitted through this website.",
  path: "/privacy-policy/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }]),
        ]}
      />
      {children}
    </>
  );
}
