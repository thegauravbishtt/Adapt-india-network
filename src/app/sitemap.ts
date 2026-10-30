import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo";
import { telecomServices } from "../data/telecomServicesData";
import { cityPages } from "../data/locationsData";
import { seedArticles } from "../data/articles";
import { getBlogs } from "../lib/db";

export const dynamic = "force-static";

/** Generated at build time as /sitemap.xml. Lists only pages we want in Google. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
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
    ["/blog/", 0.7, "weekly"],
    ["/articles/", 0.5, "weekly"],
    ["/privacy-policy/", 0.2, "yearly"],
    ["/terms-and-conditions/", 0.2, "yearly"],
  ];

  const stored = (await getBlogs()).filter((b) => b.status !== "draft");
  const blogSlugs = new Set([...stored.map((b) => b.slug || b.id), ...seedArticles.map((a) => a.slug)]);

  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: url(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...cityPages.map((c) => ({
      url: url(`/locations/${c.slug}/`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...telecomServices.map((s) => ({
      url: url(`/services/${s.slug}/`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...Array.from(blogSlugs).map((slug) => ({
      url: url(`/blog/${slug}/`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
