import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Adapt India Networks",
  description: "Terms and conditions for using the Adapt India Networks website and enquiring about our leased line services.",
  path: "/terms/",
  canonicalPath: "/terms-and-conditions/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
