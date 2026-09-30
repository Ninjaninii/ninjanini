# ninjanini.com

Portfolio site for Chia Ni Chen (陳家妮).
Astro, static output, no backend. Deployed on Vercel.

## Run it

```
npm install     # first time only
npm run dev     # http://localhost:4321
npm run build   # output to dist/
```

## Where things live

| What | Where |
|---|---|
| Site name, email, LinkedIn, nav | `src/site.ts` |
| Shared page shell (head, nav, footer) | `src/layouts/Base.astro` |
| Pages | `src/pages/` |
| Domain for sitemap + canonical URLs | `astro.config.mjs` |

## Adding a new tab later

1. Add a route folder under `src/pages/` (e.g. `src/pages/lab/index.astro`)
2. Uncomment / add the entry in `nav` in `src/site.ts`

The nav renders from that array, so one line updates every page.

## Status

W1 done: project, five routes, sitemap, deploy.
Next — W2: content collections for `project` and `artwork`, wireframe sign-off.
Full plan: the structure spec.
