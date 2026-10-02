/**
 * Single source of truth for site-wide values.
 * Adding a new tab later (e.g. /lab) = add one line to `nav`.
 */
export const site = {
  name: 'Chia Ni Chen',
  tagline: 'Designer and producer working between technology and art.',
  domain: 'https://ninjanini.cc',

  email: 'chianiiiccn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ninjanini',

  nav: [
    { href: '/project', label: 'Project' },
    { href: '/artwork', label: 'Artwork' },
    { href: '/about', label: 'About' },
    // { href: '/lab', label: 'Lab' },  ← uncomment when /lab exists
  ],
} as const;
