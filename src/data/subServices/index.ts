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
