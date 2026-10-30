import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Clients | Enterprises Connected Across India | Adapt India Network",
  description: "Brands in retail, logistics, finance, food service and manufacturing rely on Adapt India Network for leased lines, SD-WAN and managed connectivity across India.",
  path: "/clients/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
