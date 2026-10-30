import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Adapt India Network",
  description: "Terms and conditions for the Adapt India Network website.",
  path: "/terms/",
  canonicalPath: "/terms-and-conditions/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
