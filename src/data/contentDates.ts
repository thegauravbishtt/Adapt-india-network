/**
 * When each page's content last changed, for <lastmod> in sitemap.xml.
 *
 * Google only trusts lastmod when it reflects real changes. Stamping every page with the
 * build time (as before) makes it ignore the date, so pages it should re-crawl get missed.
 *
 * When you meaningfully change a page (text, headings, services, FAQs), set its date here.
 * Blog posts use their own `updatedAt` / `publishedAt` instead.
 */

/** Last change that touched every page (site-wide footer/navigation and linking update). */
export const SITE_WIDE_UPDATE = "2026-11-10";

/** Pages changed after the site-wide update. */
const PAGE_DATES: Record<string, string> = {
  "/services/": "2026-11-11",
  "/locations/": "2026-11-11",
  "/about/": "2026-11-11",
  "/about/who-we-are/": "2026-11-11",
  "/faqs/": "2026-11-11",
  "/terms-and-conditions/": "2026-11-11",
  "/blog/": "2026-11-11",
};

export function lastModifiedFor(path: string): Date {
  return new Date(`${PAGE_DATES[path] ?? SITE_WIDE_UPDATE}T12:00:00+05:30`);
}
