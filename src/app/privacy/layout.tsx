import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Adapt India Network",
  description: "How Adapt India Network collects, uses and protects personal information.",
  path: "/privacy/",
  canonicalPath: "/privacy-policy/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
