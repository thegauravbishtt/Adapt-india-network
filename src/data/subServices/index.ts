import type { SubService } from "./types";
import { businessComm } from "./businessComm";
import { network } from "./network";
import { collabCloud } from "./collabCloud";
import { securityManaged } from "./securityManaged";
import { bundles } from "./bundles";

export type { SubService };

/** Every individual service page linked from the Services menu. */
export const subServices: SubService[] = [...businessComm, ...network, ...collabCloud, ...securityManaged, ...bundles];

export function getSubService(slug: string): SubService | undefined {
  return subServices.find((s) => s.slug === slug);
}

/** Banner image for a sub-service page (unique per page, all the same size). */
export function subServiceBanner(slug: string): string {
  return `/service-banners/${slug}.jpg`;
}
