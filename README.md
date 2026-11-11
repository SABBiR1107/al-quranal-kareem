# Holy Quran: Read & Listen — developer website

The official developer website for **Holy Quran: Read & Listen**, an ad-free Quran application for
Android (`com.holyquran.readlisten`).

Built with **React + Vite** and pre-rendered to plain static HTML at build time. There is no backend,
no database and no server to keep running, so it deploys for free on Vercel (or any static host).

## What's inside

| Path | Purpose |
| --- | --- |
| `src/config.js` | **The file you edit**: Google Play URL, contact email, page titles/descriptions |
| `src/content.js` | Feature list, Privacy Policy and Terms of Use text |
| `src/pages/` | Home, About, Features, Privacy Policy, Terms, Contact, 404 |
| `src/components/` | Header, footer, Google Play button, geometric ornaments |
| `src/styles/global.css` | All styles (mobile-first, automatic light/dark) |
| `index.html`, `about/index.html`, … | One HTML entry per page (real files, no SPA routing) |
| `scripts/prerender.mjs` | Renders each page to static HTML and writes `sitemap.xml` |
| `public/` | Favicon, app icon, social-share image, `robots.txt`, web manifest |
| `vercel.json` | Clean URLs, caching and security headers |

### Pages and URLs

| URL | Page |
| --- | --- |
| `/` | Home (hero, introduction, features, Google Play download section at `/#download`) |
| `/about` | About |
| `/features` | Features |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/contact` | Contact |

The app has no ads, no analytics and no advertising SDK, so this site does not carry an `app-ads.txt`
file — that file only matters for apps that sell ad inventory through AdMob.

## Before you deploy: replace the placeholders

Open `src/config.js`:

```js
export const GOOGLE_PLAY_URL = 'YOUR_GOOGLE_PLAY_URL'   // ← your Play Store listing URL
export const DEVELOPER_EMAIL = 'developer@example.com'   // ← your real contact email
```

- **Google Play URL** — while it is still `YOUR_GOOGLE_PLAY_URL`, every Google Play button falls back
  to `https://play.google.com/store/apps/details?id=com.holyquran.readlisten`, so no button is ever a
  dead link. Paste your listing URL to use it instead, once the app is published.
- **Email** — while it is `developer@example.com`, the Contact page shows a clear "Placeholder" badge and
  notice. Both disappear automatically once you set a real address.

The Privacy Policy and Terms of Use are written out in full on this site (`src/content.js`,
`/privacy-policy` and `/terms`) — there is no separate external policy page to keep in sync.

## Run locally

Requires Node.js 20.19 or newer (Vercel uses Node 22 by default).

```bash
npm install
```

```bash
npm run dev
```

Open the printed URL (usually http://localhost:5173). To test the production build:

```bash
npm run build
```

```bash
npm run preview
```

## Deploy to GitHub Pages with a custom .io domain (recommended)

This repo already has everything in place: `.github/workflows/deploy-pages.yml` builds the site and
publishes it on every push to `main`, and `public/CNAME` tells GitHub Pages which custom domain to
serve it on.

### 1. Turn on Pages for this repo (one-time, in the GitHub web UI)

1. Open the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not "Deploy from a branch").
3. That's it — the next push to `main` (or a manual run from the **Actions** tab) builds and deploys.

### 2. Point your .io domain at it

Replace `YOUR-DOMAIN.io` in **`public/CNAME`** with your real domain (just the bare domain, no
`https://`), and also set it as `SITE_URL` so canonical links, Open Graph tags and the sitemap use it:

- Repo → **Settings → Secrets and variables → Actions → Variables** tab → **New repository
  variable** → name `SITE_URL`, value `https://your-domain.io` (with the protocol, here).

Then, at your domain registrar (wherever you bought the `.io`), set up DNS so both the bare domain and
`www` work:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` (or blank/apex) | `185.199.108.153` |
| A | `@` (or blank/apex) | `185.199.109.153` |
| A | `@` (or blank/apex) | `185.199.110.153` |
| A | `@` (or blank/apex) | `185.199.111.153` |
| CNAME | `www` | `SABBiR1107.github.io` |

(Four `A` records, all pointing at the apex/root — add all four. DNS can take anywhere from a few
minutes to a few hours to update.)

### 3. Confirm it in GitHub

Back in **Settings → Pages**, once DNS has propagated, GitHub shows the custom domain as verified and
offers an **Enforce HTTPS** checkbox — turn it on (GitHub issues the certificate automatically, free).

After this one-time setup, every `git push` to `main` rebuilds and redeploys automatically — nothing
else to run by hand.

## Deploy to Vercel (free) — alternative

### Option A — GitHub + Vercel dashboard

1. The code lives at https://github.com/SABBiR1107/al-quranal-kareem (branch `main`).
2. Sign in at [vercel.com](https://vercel.com) with GitHub (the **Hobby** plan is free).
3. Click **Add New… → Project**, choose the repository, and click **Import**.
4. Vercel reads `vercel.json` automatically. The settings should show:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. After about a minute you get a free HTTPS URL such as
   `https://your-project.vercel.app`.

Every later `git push` to `main` redeploys automatically.

### Option B — Vercel CLI

```bash
npx vercel
```

```bash
npx vercel --prod
```

### Custom domain (optional)

In the Vercel project go to **Settings → Domains**, add your domain and follow the DNS instructions.
HTTPS certificates are issued automatically and free. The canonical URL, Open Graph tags and
`sitemap.xml` use your production domain automatically on the next deploy (via Vercel's
`VERCEL_PROJECT_PRODUCTION_URL`). To force a specific URL, add an environment variable
`SITE_URL=https://your-domain.com` in **Settings → Environment Variables** and redeploy.

### Using this site's Privacy Policy page in Google Play Console

Once this site is deployed, its `/privacy-policy` page (e.g.
`https://your-domain.com/privacy-policy`) can be pasted directly into Play Console's
**App content → Privacy policy** field — no separate policy host is needed.

## Checklist

- [x] Static site: no paid backend, database, API or always-on server
- [x] Free HTTPS on Vercel
- [x] Per-page titles, meta descriptions, Open Graph/Twitter tags, canonical URLs, sitemap
- [x] Semantic HTML, skip link, keyboard-accessible navigation, reduced-motion support
- [x] No cookies, analytics, advertising or third-party font requests
- [x] Privacy Policy and Terms of Use published on the site itself
