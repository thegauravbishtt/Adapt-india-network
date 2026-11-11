import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Adapt India Networks",
  description: "Enterprise connectivity services.",
  path: "/work/",
  canonicalPath: "/services/",
  noIndex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
