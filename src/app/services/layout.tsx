import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise Connectivity Services in India | ILL, SD-WAN, MPLS | Adapt India",
  description: "Internet Leased Line, SD-WAN, MPLS VPN, enterprise broadband, managed Wi-Fi, SIP trunk, cloud telephony and network security for businesses in Delhi NCR and across India.",
  path: "/services/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
