export interface SubService {
  slug: string;
  name: string;
  /** Slug of the main service page this belongs to. */
  parent: string;
  /** Menu group, e.g. "Inbound Communications". */
  group: string;
  /** Short line under the H1 in the banner. */
  headline: string;
  /** Meta description (keep under ~158 characters). */
  summary: string;
  intro: string[];
  features: Array<{ title: string; text: string }>;
  goodFor: string[];
  faqs: Array<{ question: string; answer: string }>;
}
