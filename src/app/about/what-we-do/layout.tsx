import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What We Do | Leased Line, SD-WAN, MPLS & Voice | Adapt India Network",
  description: "From Internet Leased Lines and SD-WAN to MPLS VPN, managed Wi-Fi, SIP trunks and cloud telephony: enterprise connectivity designed, delivered and supported end to end.",
  path: "/about/what-we-do/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
