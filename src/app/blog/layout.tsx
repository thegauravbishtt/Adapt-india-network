import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise Networking Blog | Adapt India Network",
  description: "Guides on Internet Leased Lines, SD-WAN, MPLS, SIP trunking, enterprise Wi-Fi and network redundancy for businesses in Delhi NCR and across India.",
  path: "/blog/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
