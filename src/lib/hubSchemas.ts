import { absoluteUrl, breadcrumbSchema } from "./seo";
import { hubServices, hubServiceHref } from "../data/hubServices";
import { seedArticles } from "../data/articles";

/*
 * Structured data for hub pages. Rendered inside each hub's page.tsx, not its layout.tsx:
 * a layout also wraps every child route (e.g. /services/layout wraps /services/[slug]),
 * which would repeat this markup on every service page and blog post.
 */

/** Services page: breadcrumb + the services it lists. */
export function servicesHubSchema() {
  return [
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Enterprise connectivity and IT services",
      numberOfItems: hubServices.length,
      itemListElement: hubServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: absoluteUrl(hubServiceHref(s.slug)),
      })),
    },
  ];
}

/** Blog page: breadcrumb + the articles it lists (newest first). */
export function blogHubSchema() {
  const posts = seedArticles.filter((a) => a.status !== "draft");
  return [
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Adapt India Networks blog",
      numberOfItems: posts.length,
      itemListElement: posts.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: absoluteUrl(`/blog/${a.slug}/`),
      })),
    },
  ];
}

/** About page: breadcrumb only. */
export function aboutHubSchema() {
  return [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])];
}
