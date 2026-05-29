# ElevateCV — Static SPA Export

Standard Vite + React + React Router SPA. No SSR, no server runtime.
Deploys cleanly to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

- Build command: `npm run build`
- Output directory: `dist`

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo on Vercel — framework auto-detects as Vite.
3. `vercel.json` already rewrites all routes to `index.html` so client-side
   routing works on refresh / deep links.

No environment variables required.
