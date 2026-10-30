import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Preferences | Adapt India Network",
  description: "Manage cookie preferences for the Adapt India Network website.",
  path: "/cookies/",
  canonicalPath: "/cookie-preferences/",
  noIndex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
