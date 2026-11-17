import type { SubService } from "./types";
import { businessComm } from "./businessComm";
import { network } from "./network";
import { collabCloud } from "./collabCloud";
import { securityManaged } from "./securityManaged";
import { bundles } from "./bundles";
import { businessCommExtras } from "./extras/businessComm";
import { networkCloudExtras } from "./extras/networkCloud";
import { securityManagedBundleExtras } from "./extras/securityManagedBundles";

export type { SubService };

const extras = { ...businessCommExtras, ...networkCloudExtras, ...securityManagedBundleExtras };

/** Every individual service page linked from the Services menu, with its extra content merged in. */
export const subServices: SubService[] = [...businessComm, ...network, ...collabCloud, ...securityManaged, ...bundles].map(
  (s) => {
    const extra = extras[s.slug];
    return {
      ...s,
      outcome: extra?.outcome,
      prep: extra?.prep,
      faqs: [
        ...s.faqs,
        ...(extra?.faqs ?? []),
        {
          question: `Is ${s.name} available outside Delhi NCR?`,
          answer:
            "Yes. We're based in New Delhi and serve businesses across India, including Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata and Lucknow, through our carrier and technology partners. Availability is confirmed for each location before you sign.",
        },
      ],
    };
  },
);

export function getSubService(slug: string): SubService | undefined {
  return subServices.find((s) => s.slug === slug);
}

/** Banner image for a sub-service page (unique per page, all the same size). */
export function subServiceBanner(slug: string): string {
  return `/service-banners/${slug}.jpg`;
}

/**
 * Smaller add-on and specialist pages that stay on the site for visitors but are kept
 * out of Google (noindex + left out of the sitemap). With ~70 sub-service pages that share
 * one layout, Google was crawling them and choosing not to index them ("Crawled -
 * currently not indexed"), which also slows the crawl of the pages that matter. Keeping
 * them out lets Google spend its time on the main service, city and area pages.
 * To bring one back, remove it from this list.
 */
export const NOINDEX_SUBSERVICES = new Set<string>([
  // Bundles
  "smartoffice-starter-pack",
  "branch-in-a-box",
  "retail-dual-failover-pack",
  "pop-up-event-internet",
  "ill-sd-wan-hybrid-bundle",
  "cloud-interconnect-peering",
  "unified-voice-sip-suite",
  "zero-trust-remote-workforce",
  // Cloud and collaboration add-ons
  "microsoft-copilot",
  "zoom-rooms",
  "international-bridging-service",
  "azure-virtual-desktop",
  "azure-ai-services",
  "cloudmon-performance",
  "adapt-smart-cloud",
  // Security and managed-service add-ons
  "zero-trust-network-access",
  "endpoint-detection-response",
  "cloud-email-security",
  "data-loss-prevention",
  "dns-security-filtering",
  "proactive-fault-detection",
  "bgp-routing-optimization",
  "automated-failover-management",
  "firmware-security-patching",
  "bandwidth-utilization-audits",
  "custom-enterprise-slas",
  // Voice and messaging add-ons
  "microsoft-operator-connect",
  "webex-calling",
  "smartflo-ai",
  "smart-single-number",
  "call-register-services",
  "centrex-systems",
  "1600-series-support",
  "smartflo-enterprise-rcs",
  "smartflo-obd",
  "truecaller-business-verified",
  "pri-dialing",
  "smartflo-email-platform",
  // Network add-ons
  "sd-wan-iflx-edge-gateway",
  "ultra-low-latency",
]);

export function isIndexedSubService(slug: string): boolean {
  return !NOINDEX_SUBSERVICES.has(slug);
}
