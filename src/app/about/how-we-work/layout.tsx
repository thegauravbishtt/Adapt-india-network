import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Work | Site Survey to 24/7 Support | Adapt India",
  description: "How we deliver business connectivity in India: requirement mapping, site survey and feasibility, installation, testing, go-live and 24/7 NOC support.",
  path: "/about/how-we-work/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
