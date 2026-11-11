import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { seedArticles } from "@/data/articles";
import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise Networking Blog | Adapt India Network",
  description: "Guides on Internet Leased Lines, SD-WAN, MPLS, SIP trunking, enterprise Wi-Fi and network redundancy for businesses in Delhi NCR and across India.",
  path: "/blog/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]),
          blogListSchema(),
        ]}
      />
      {children}
    </>
  );
}

/** Articles on the blog, newest first, as a list for search engines. */
function blogListSchema() {
  const posts = seedArticles.filter((a) => a.status !== "draft");
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Adapt India Network blog",
    numberOfItems: posts.length,
    itemListElement: posts.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: absoluteUrl(`/blog/${a.slug}/`),
    })),
  };
}
