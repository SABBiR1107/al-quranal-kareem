# Al-Quran Al-Kareem — developer website

The official developer website for **Al-Quran Al-Kareem**, a Quran application for Android
(`com.alquran.alkareembd`).

Built with **React + Vite** and pre-rendered to plain static HTML at build time. There is no backend,
no database and no server to keep running, so it deploys for free on Vercel (or any static host).

## What's inside

| Path | Purpose |
| --- | --- |
| `public/app-ads.txt` | **AdMob app-ads.txt** — copied verbatim to the site root (`/app-ads.txt`) |
| `src/config.js` | **The file you edit**: Google Play URL, contact email, page titles/descriptions |
| `src/pages/` | Home, About, Features, Privacy Policy, Contact, 404 |
| `src/components/` | Header, footer, Google Play button, geometric ornaments |
| `src/styles/global.css` | All styles (mobile-first, automatic light/dark) |
| `index.html`, `about/index.html`, … | One HTML entry per page (real files, no SPA routing) |
| `scripts/prerender.mjs` | Renders each page to static HTML, writes `sitemap.xml`, and verifies `app-ads.txt` |
| `public/` | Favicon, app icon, social-share image, `robots.txt`, web manifest |
| `vercel.json` | Clean URLs, `text/plain` header for `app-ads.txt`, caching and security headers |

### Pages and URLs

| URL | Page |
| --- | --- |
| `/` | Home (hero, introduction, features, Google Play download section at `/#download`) |
| `/about` | About |
| `/features` | Features |
| `/privacy-policy` | Privacy Policy (links to the existing policy) |
| `/contact` | Contact |
| `/app-ads.txt` | Plain-text AdMob file |

## app-ads.txt

`public/app-ads.txt` contains exactly:

```
google.com, pub-9250366510239722, DIRECT, f08c47fec0942fa0
```

Vite copies everything in `public/` to the root of the build output unchanged, so after deployment the
file is served at `https://YOUR-DOMAIN.com/app-ads.txt` as plain text with HTTP 200.

Why it can't be swallowed by the homepage:

- Every page is its own static HTML file. There are **no rewrites** in `vercel.json` and no SPA
  fallback, so `/app-ads.txt` can only resolve to the real file.
- `vercel.json` also sets `Content-Type: text/plain; charset=utf-8` on that path.
- The build **fails** if `dist/app-ads.txt` is missing or its content differs from the line above.

## Before you deploy: replace the placeholders

Open `src/config.js`:

```js
export const GOOGLE_PLAY_URL = 'YOUR_GOOGLE_PLAY_URL'   // ← your Play Store listing URL
export const DEVELOPER_EMAIL = 'developer@example.com'   // ← your real contact email
```

- **Google Play URL** — while it is still `YOUR_GOOGLE_PLAY_URL`, every Google Play button falls back
  to `https://play.google.com/store/apps/details?id=com.alquran.alkareembd`, so no button is ever a
  dead link. Paste your listing URL to use it instead.
- **Email** — while it is `developer@example.com`, the Contact page shows a clear "Placeholder" badge and
  notice. Both disappear automatically once you set a real address.
- **App icon** — `public/app-icon.svg` is a placeholder emblem. Put your real icon in `public/`
  (e.g. `app-icon.png`) and set `APP_ICON` in `src/config.js` to its path. Optionally regenerate
  `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and
  `og-image.png` (1200×630) to match.

The privacy policy link (`https://sites.google.com/view/al-quranal-kareem/home`) is already set and
should not be changed.

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

Then check http://localhost:4173/app-ads.txt — it should show the single plain-text line.

## Deploy to Vercel (free)

### Option A — GitHub + Vercel dashboard (recommended)

1. The code lives at https://github.com/SABBiR1107/al-quranal-kareem (branch `main`).
2. Sign in at [vercel.com](https://vercel.com) with GitHub (the **Hobby** plan is free).
3. Click **Add New… → Project**, choose the repository, and click **Import**.
4. Vercel reads `vercel.json` automatically. The settings should show:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. After about a minute you get a free HTTPS URL such as
   `https://your-project.vercel.app`.
6. Verify: open `https://your-project.vercel.app/app-ads.txt`. You should see only:
   ```
   google.com, pub-9250366510239722, DIRECT, f08c47fec0942fa0
   ```

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

### Connect it to AdMob

app-ads.txt must live on the **root of the domain listed as the developer website on Google Play**.

1. In the Google Play Console, open the app → **Store presence → Store settings** → set
   **Website** to your deployed domain (e.g. `https://your-domain.com`).
2. Confirm `https://your-domain.com/app-ads.txt` loads the plain-text line.
3. In AdMob, open **Apps → app-ads.txt** and click **Check for updates**. Verification can take up to
   24 hours.

## Checklist

- [x] `public/app-ads.txt` exists and contains exactly the required line
- [x] Served at `https://YOUR-DOMAIN.com/app-ads.txt` as `text/plain`, HTTP 200 — no rewrites
- [x] Static site: no paid backend, database, API or always-on server
- [x] Free HTTPS on Vercel
- [x] Per-page titles, meta descriptions, Open Graph/Twitter tags, canonical URLs, sitemap
- [x] Semantic HTML, skip link, keyboard-accessible navigation, reduced-motion support
- [x] No cookies, analytics or third-party font requests
