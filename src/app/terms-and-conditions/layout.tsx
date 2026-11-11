import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Adapt India Network",
  description: "Terms and conditions for using the Adapt India Network website and enquiring about our Internet Leased Line, SD-WAN, MPLS and managed network services.",
  path: "/terms-and-conditions/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
