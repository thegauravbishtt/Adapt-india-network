import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Enterprise Telecom Partner in Delhi NCR | Adapt India",
  description: "Adapt India Network is a New Delhi enterprise connectivity partner for leased lines, SD-WAN, MPLS and business voice, with Tata Tele and ACT.",
  path: "/about/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
