import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo";
import { telecomServices } from "../data/telecomServicesData";
import { cityPages } from "../data/locationsData";
import { areaPages } from "../data/areaPages";
import { seedArticles } from "../data/articles";
import { getBlogs } from "../lib/db";
import { subServices } from "../data/subServices";
import { lastModifiedFor } from "../data/contentDates";

export const dynamic = "force-static";

/** Generated at build time as /sitemap.xml. Lists only pages we want in Google. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => `${SITE_URL}${path}`;

  const staticPages: Array<[string, number, MetadataRoute.Sitemap[number]["changeFrequency"]]> = [
    ["/", 1.0, "weekly"],
    ["/services/", 0.9, "monthly"],
    ["/locations/", 0.9, "monthly"],
    ["/contact/", 0.8, "yearly"],
    ["/about/", 0.6, "yearly"],
    ["/about/who-we-are/", 0.5, "yearly"],
    ["/about/what-we-do/", 0.5, "yearly"],
    ["/about/how-we-work/", 0.5, "yearly"],
    ["/clients/", 0.6, "monthly"],
    ["/faqs/", 0.6, "monthly"],
    ["/articles/", 0.5, "weekly"],
    ["/privacy-policy/", 0.2, "yearly"],
    ["/terms-and-conditions/", 0.2, "yearly"],
  ];

  const stored = (await getBlogs()).filter((b) => b.status !== "draft");
  const blogSlugs = new Set([...stored.map((b) => b.slug || b.id), ...seedArticles.map((a) => a.slug)]);
  /** A post's own update or publish date (not the build time). */
  const postDate = (slug: string): Date => {
    const post = seedArticles.find((a) => a.slug === slug) ?? stored.find((b) => (b.slug || b.id) === slug);
    const d = post?.updatedAt ?? post?.publishedAt;
    return d ? new Date(d) : lastModifiedFor(`/blog/${slug}/`);
  };

  // Old service URLs that public/.htaccess 301-redirects to a main page.
  // A redirecting URL in the sitemap sends Google mixed signals, so keep them out.
  const redirectedServiceSlugs = new Set([
    "internet-leased-line",
    "sd-wan",
    "mpls",
    "managed-wifi",
    "cloud-telephony",
    "cyber-security",
    "data-services",
  ]);
  const notRedirected = (s: { slug: string }) => !redirectedServiceSlugs.has(s.slug);

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: url(path),
      lastModified: lastModifiedFor(path),
      changeFrequency,
      priority,
    })),
    ...cityPages.map((c) => ({
      url: url(`/locations/${c.slug}/`),
      lastModified: lastModifiedFor(`/locations/${c.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...areaPages.map((a) => ({
      url: url(`/locations/${a.citySlug}/${a.slug}/`),
      lastModified: lastModifiedFor(`/locations/${a.citySlug}/${a.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...telecomServices.filter(notRedirected).map((s) => ({
      url: url(`/services/${s.slug}/`),
      lastModified: lastModifiedFor(`/services/${s.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...subServices.filter(notRedirected).map((s) => ({
      url: url(`/services/${s.slug}/`),
      lastModified: lastModifiedFor(`/services/${s.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...Array.from(blogSlugs).map((slug) => ({
      url: url(`/blog/${slug}/`),
      lastModified: postDate(slug),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  // Drop any URL listed twice (a slug can appear in more than one data file)
  const seen = new Set<string>();
  return entries.filter((e) => (seen.has(e.url) ? false : (seen.add(e.url), true)));
}
