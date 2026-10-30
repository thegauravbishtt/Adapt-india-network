import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Networking Articles & Guides | Leased Line, SD-WAN, MPLS | Adapt India",
  description: "Practical guides for Indian IT teams on choosing a leased line, moving from MPLS to SD-WAN, SIP trunking, office Wi-Fi and building a failover-ready network.",
  path: "/articles/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
