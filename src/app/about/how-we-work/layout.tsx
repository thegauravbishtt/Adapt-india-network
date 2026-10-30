import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Work | Site Survey to 24/7 Support | Adapt India Network",
  description: "Our delivery process for enterprise connectivity in India: requirement mapping, site survey and feasibility, installation, testing, go-live and round-the-clock NOC support.",
  path: "/about/how-we-work/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
