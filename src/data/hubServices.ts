import { allServices } from "./servicesData";

/*
 * Cards shown on the Services page (and listed in its ItemList schema).
 * Hidden (each URL 301-redirects in public/.htaccess):
 * - leftover digital-agency pages from the original template (web, apps, ads, SEO, etc.),
 *   which redirect back to /services/, so their cards led nowhere;
 * - older duplicates of telecom services that redirect to a card already shown.
 */
const HIDDEN_ON_HUB = new Set([
  "enterprise-software", "web-development", "app-development", "cloud-devops", "it-consulting",
  "ui-ux-design", "seo-services", "google-ads", "meta-ads", "social-media", "content-marketing",
  "local-seo-gmb", "email-marketing", "whatsapp-marketing", "ai-automation",
  "internet-leased-line", "sd-wan", "mpls", "cloud-telephony", "cyber-security", "data-services",
]);

/** Cards whose own URL redirects: link straight to the final page instead. */
const HUB_HREF: Record<string, string> = { "managed-wifi": "/services/managed-campus-wifi/" };

export const hubServices = allServices.filter((s) => !HIDDEN_ON_HUB.has(s.slug));

export function hubServiceHref(slug: string): string {
  return HUB_HREF[slug] ?? `/services/${slug}/`;
}
