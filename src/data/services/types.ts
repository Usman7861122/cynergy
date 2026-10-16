import type { Condition } from '@components/islands/ConditionTabs';
import type { FaqItem } from '@components/islands/Faq';

export type Service = {
  /** URL folder + slug. Local pages are `${dir}/${slug}-${locationId}/` */
  /** URL folder. Empty string means the page sits at the site root, like the live site. */
  dir: 'what-we-treat' | 'injuries' | '';
  /** Which menu group the page belongs to (default: treat) */
  group?: 'treat' | 'offer';
  /** Only these locations get a page. Leave out for all six. */
  locationIds?: string[];
  slug: string;
  /** Short name used in buttons and breadcrumbs, e.g. "Back & Spine" */
  label: string;
  /** Used in "{careName} in Midtown West", e.g. "Back & spine care" */
  careName: string;
  /** Used in the general page title */
  heroTitle: string;
  /** Used in <title>, e.g. "Back Pain Therapy in New York City" */
  seoTitle: string;
  heroText: string;
  /** Sentence with a %LOC% marker not needed: location text is built from heroText */
  image: string;
  imageAlt: string;
  /** Picture used in the "why choose" band */
  /** Picture next to the overview when there is no stat card (optional) */
  overviewImage?: string;
  whyImage: string;
  whyImageAlt: string;
  stat?: { big: string; unit?: string; text: string; extra?: string };
  overview: { eyebrow: string; title: string; text: string };
  causes?: { title?: string; items: string[] };
  approach?: { title?: string; items: string[] };
  benefits?: { eyebrow: string; title: string; text: string; items: { title: string; text: string }[] };
  conditions: { eyebrow: string; title: string; text: string; ariaLabel: string; items: Condition[] };
  faqs?: FaqItem[];
  /** Photos from the live page shown in a small strip (optional) */
  extraImages?: { src: string; alt: string }[];
};

const prefix = (s: Service) => (s.dir ? `/${s.dir}/` : '/');
export const servicePath = (s: Service) => `${prefix(s)}${s.slug}/`;
export const localPath = (s: Service, locId: string) => `${prefix(s)}${s.slug}-${locId}/`;
