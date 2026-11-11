import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Adapt India Networks",
  description: "How Adapt India Networks collects, uses and protects personal information.",
  path: "/privacy/",
  canonicalPath: "/privacy-policy/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
