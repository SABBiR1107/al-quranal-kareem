// ---------------------------------------------------------------------------
// Site configuration — the only file you normally need to edit.
// Plain JavaScript (no JSX) so it can also be read by vite.config.js and the
// build scripts.
// ---------------------------------------------------------------------------

export const APP_NAME = 'Al-Quran Al-Kareem'
export const APP_NAME_ARABIC = 'القرآن الكريم'
export const PACKAGE_NAME = 'com.alquran.alkareembd'
export const APP_CATEGORY = 'Books & Reference / Islamic'

// App icon shown in the header, hero and download section (file in public/).
export const APP_ICON = '/app-icon.svg'

// Replace with the real Google Play listing URL, e.g.
// 'https://play.google.com/store/apps/details?id=com.alquran.alkareembd'
export const GOOGLE_PLAY_URL = 'YOUR_GOOGLE_PLAY_URL'

// Placeholder — replace with the developer's real contact address.
// The "placeholder" notice on the Contact page disappears automatically once
// this value is changed.
export const DEVELOPER_EMAIL = 'developer@example.com'

// Existing privacy policy. Do not change.
export const PRIVACY_POLICY_URL = 'https://sites.google.com/view/al-quranal-kareem/home'

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
    title: 'Al-Quran Al-Kareem — Quran App',
    description: 'Al-Quran Al-Kareem is a simple and accessible Quran application for Android.',
  },
  {
    id: 'about',
    file: 'about/index.html',
    path: '/about',
    title: 'About — Al-Quran Al-Kareem',
    description:
      'What Al-Quran Al-Kareem is and why it exists: a simple, accessible way to read the Holy Quran on Android.',
  },
  {
    id: 'features',
    file: 'features/index.html',
    path: '/features',
    title: 'Features — Al-Quran Al-Kareem',
    description:
      'Quran reading, a clean interface, simple navigation and a mobile-friendly design in the Al-Quran Al-Kareem Android app.',
  },
  {
    id: 'privacy',
    file: 'privacy-policy/index.html',
    path: '/privacy-policy',
    title: 'Privacy Policy — Al-Quran Al-Kareem',
    description: 'Privacy information for the Al-Quran Al-Kareem Android app and this website.',
  },
  {
    id: 'contact',
    file: 'contact/index.html',
    path: '/contact',
    title: 'Contact — Al-Quran Al-Kareem',
    description: 'Get in touch with the developer of the Al-Quran Al-Kareem Android app.',
  },
  {
    id: 'not-found',
    file: '404.html',
    path: null,
    title: 'Page not found — Al-Quran Al-Kareem',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
]

export const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'features', label: 'Features', href: '/features' },
  { id: 'privacy', label: 'Privacy', href: '/privacy-policy' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]
