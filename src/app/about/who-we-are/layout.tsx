import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Who We Are | Delhi-Based Enterprise Network Provider | Adapt India",
  description: "Meet the team behind Adapt India Network: a Saket, New Delhi enterprise telecom partner serving offices, warehouses and branches across Delhi NCR and India.",
  path: "/about/who-we-are/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
