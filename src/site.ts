/**
 * Single source of truth for site-wide values.
 * Adding a new tab later (e.g. /lab) = add one line to `nav`.
 */
export const site = {
  name: 'Chia Ni Chen',
  nameZh: '陳家妮',
  tagline: 'Designer and producer working between technology and art.',
  domain: 'https://ninjanini.com',

  // TODO: replace both before launch
  email: 'hello@ninjanini.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',

  nav: [
    { href: '/project', label: 'Project' },
    { href: '/artwork', label: 'Artwork' },
    { href: '/about', label: 'About' },
    // { href: '/lab', label: 'Lab' },  ← uncomment when /lab exists
  ],
} as const;
