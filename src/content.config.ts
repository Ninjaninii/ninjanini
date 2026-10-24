import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One shared shape for both tabs. /project and /artwork differ only by folder,
 * so adding a work is: drop a .md file in the right folder. Nothing else.
 */
const work = z.object({
  title: z.string(),
  /** One line of tension, shown large under the title. */
  hook: z.string(),
  /** 40 words or fewer — used on the listing card. */
  summary: z.string(),
  /** Leads the card, before the title. An outcome, not a label. */
  metric: z.string().optional(),
  year: z.string(),
  /** What Chia Ni did, separated from what the team did. */
  role: z.string(),
  team: z.string().optional(),
  /** Where it happened, glossed for a reader outside Taiwan. */
  context: z.string().optional(),
  tools: z.array(z.string()).default([]),
  /** Cross-tab capability tags, so a hiring manager can scan by skill. */
  skills: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  // shown beside the title on the detail page, instead of the wide cover plate
  heroImage: z.string().optional(),
  // reading aids over the first characters of the title, e.g. pinyin over Chinese
  phonetic: z.array(z.string()).optional(),
  // a small image that swims in to sit after the title
  titleMark: z.string().optional(),
  heroAlt: z.string().optional(),
  link: z.string().url().optional(),
  /** Pulled onto the landing page. */
  featured: z.boolean().default(false),
  /** Listing order; lower comes first. Falls back to year. */
  order: z.number().default(100),
  /** Hidden from listings and from the sitemap until ready. */
  draft: z.boolean().default(false),
});

const project = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/project' }),
  schema: work,
});

const artwork = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artwork' }),
  schema: work,
});

export const collections = { project, artwork };
