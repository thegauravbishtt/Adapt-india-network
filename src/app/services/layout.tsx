import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leased Line, SD-WAN & MPLS Services in India | Adapt India",
  description: "Internet Leased Line, SD-WAN, MPLS, business broadband, managed Wi-Fi, SIP trunk and network security for offices in Delhi NCR and across India.",
  path: "/services/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
