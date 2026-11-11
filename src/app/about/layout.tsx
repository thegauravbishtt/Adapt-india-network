import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Adapt India Network | Telecom Partner, Delhi NCR",
  description: "Adapt India Network is a New Delhi enterprise connectivity partner for leased lines, SD-WAN, MPLS and business voice, with Tata Tele and ACT.",
  path: "/about/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
