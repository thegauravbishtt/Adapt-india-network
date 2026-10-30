import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Adapt India Network | Leased Line Enquiry Delhi NCR",
  description: "Get a leased line, SD-WAN or MPLS quote for your office in Delhi, Gurgaon, Noida or anywhere in India. Call +91 82874 79961 or email info@adapt-india.net.",
  path: "/contact/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
