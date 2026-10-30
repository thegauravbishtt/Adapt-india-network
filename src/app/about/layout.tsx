import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Adapt India Network | Enterprise Telecom Partner in Delhi NCR",
  description: "Adapt India Network is a Delhi-based enterprise connectivity partner delivering leased lines, SD-WAN, MPLS and business voice with Tata Tele Business Services and ACT Fibernet.",
  path: "/about/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
