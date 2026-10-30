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
  /** Filled in from the extras files. */
  outcome?: string;
  prep?: string[];
}

/** Extra per-page content: what changes after switching, what we need to start, more FAQs. */
export interface SubServiceExtra {
  outcome: string;
  prep: string[];
  faqs: Array<{ question: string; answer: string }>;
}
