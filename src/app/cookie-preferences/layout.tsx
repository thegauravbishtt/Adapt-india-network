import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Preferences | Adapt India Networks",
  description: "Manage cookie preferences for the Adapt India Networks website.",
  path: "/cookie-preferences/",
  noIndex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
