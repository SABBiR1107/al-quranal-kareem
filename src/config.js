// ---------------------------------------------------------------------------
// Site configuration — the only file you normally need to edit.
// Plain JavaScript (no JSX) so it can also be read by vite.config.js and the
// build scripts.
// ---------------------------------------------------------------------------

export const APP_NAME = 'Holy Quran'
export const APP_TAGLINE = 'Read & Listen'
export const APP_NAME_ARABIC = 'القرآن'
export const PACKAGE_NAME = 'com.holyquran.readlisten'
export const APP_CATEGORY = 'Books & Reference / Islamic'

// App icon shown in the header, hero and download section (file in public/).
export const APP_ICON = '/app-icon.svg'

// Replace with the real Google Play listing URL once the app is published, e.g.
// 'https://play.google.com/store/apps/details?id=com.holyquran.readlisten'
export const GOOGLE_PLAY_URL = 'YOUR_GOOGLE_PLAY_URL'

// Placeholder — replace with the developer's real contact address.
// The "placeholder" notice on the Contact page disappears automatically once
// this value is changed.
export const DEVELOPER_EMAIL = 'developer@example.com'

// The privacy policy and terms now live on this site itself (below), not on
// an external page — these are relative paths, not a separate canonical URL.
export const PRIVACY_POLICY_URL = '/privacy-policy'
export const TERMS_URL = '/terms'

// ---------------------------------------------------------------------------
// Derived values
// ---------------------------------------------------------------------------

// While GOOGLE_PLAY_URL is still the placeholder, buttons point at the
// standard Play Store URL for the package so they never lead to a dead link.
export const playStoreHref = /^https?:\/\//.test(GOOGLE_PLAY_URL)
  ? GOOGLE_PLAY_URL
  : `https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`

export const emailIsPlaceholder = DEVELOPER_EMAIL === 'developer@example.com'

// Absolute site URL used for canonical links, Open Graph tags and the sitemap.
// On Vercel this is filled in automatically from the production domain.
// Set SITE_URL (e.g. https://example.com) to override.
export function resolveSiteUrl(env = {}) {
  const raw =
    env.SITE_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : '')
  return raw.replace(/\/+$/, '')
}

// ---------------------------------------------------------------------------
// Pages: one static HTML file per route (clean URLs, no SPA rewrites).
// ---------------------------------------------------------------------------

export const pages = [
  {
    id: 'home',
    file: 'index.html',
    path: '/',
    title: 'Holy Quran: Read & Listen — Quran App',
    description:
      'Holy Quran: Read & Listen — read the Mushaf page by page, listen to recitation by well-known reciters, and keep prayer times and Qibla direction close at hand. Free, ad-free, no sign-up.',
  },
  {
    id: 'about',
    file: 'about/index.html',
    path: '/about',
    title: 'About — Holy Quran: Read & Listen',
    description:
      'What Holy Quran: Read & Listen is and why it exists: a calm, ad-free way to read, listen to and learn the Quran on Android.',
  },
  {
    id: 'features',
    file: 'features/index.html',
    path: '/features',
    title: 'Features — Holy Quran: Read & Listen',
    description:
      'Mushaf reading, recitation by well-known reciters, prayer times and Qibla direction, offline downloads, and a calm, ad-free design.',
  },
  {
    id: 'privacy',
    file: 'privacy-policy/index.html',
    path: '/privacy-policy',
    title: 'Privacy Policy — Holy Quran: Read & Listen',
    description: 'Privacy information for the Holy Quran: Read & Listen Android app and this website.',
  },
  {
    id: 'terms',
    file: 'terms/index.html',
    path: '/terms',
    title: 'Terms of Use — Holy Quran: Read & Listen',
    description: 'The terms that apply to using the Holy Quran: Read & Listen Android app and this website.',
  },
  {
    id: 'contact',
    file: 'contact/index.html',
    path: '/contact',
    title: 'Contact — Holy Quran: Read & Listen',
    description: 'Get in touch with the developer of the Holy Quran: Read & Listen Android app.',
  },
  {
    id: 'not-found',
    file: '404.html',
    path: null,
    title: 'Page not found — Holy Quran: Read & Listen',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
]

export const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'features', label: 'Features', href: '/features' },
  { id: 'privacy', label: 'Privacy', href: '/privacy-policy' },
  { id: 'terms', label: 'Terms', href: '/terms' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]
