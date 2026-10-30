import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leased Line, SD-WAN & MPLS FAQs | Adapt India Network",
  description: "Answers on Internet Leased Line, SD-WAN, MPLS and enterprise connectivity for Indian businesses.",
  path: "/faq/",
  canonicalPath: "/faqs/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
