import { resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { APP_NAME, pages, resolveSiteUrl } from './src/config.js'

const root = fileURLToPath(new URL('.', import.meta.url))
const siteUrl = resolveSiteUrl(process.env)

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function headFor(page) {
  const url = page.path ? `${siteUrl}${page.path}` : ''
  const tags = [
    `<title>${escape(page.title)}</title>`,
    `<meta name="description" content="${escape(page.description)}" />`,
    page.noindex ? '<meta name="robots" content="noindex" />' : '',
    url && siteUrl ? `<link rel="canonical" href="${url}" />` : '',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${APP_NAME}" />`,
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.description)}" />`,
    url ? `<meta property="og:url" content="${url}" />` : '',
    `<meta property="og:image" content="${siteUrl}/og-image.png" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${APP_NAME} — a Quran app for Android" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.description)}" />`,
    `<meta name="twitter:image" content="${siteUrl}/og-image.png" />`,
  ]
  return tags.filter(Boolean).join('\n    ')
}

// Fills the <!--head--> marker in every HTML entry with that page's SEO tags.
function pageHead() {
  return {
    name: 'page-head',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const file = relative(root, ctx.filename).split('\\').join('/')
        const page = pages.find((p) => p.file === file)
        if (!page) return html
        return html.replace('<!--head-->', headFor(page)).replace('data-page=""', `data-page="${page.id}"`)
      },
    },
  }
}

// Serves /about, /features … from their index.html in `vite dev` and
// `vite preview`, matching how Vercel serves the built files.
function cleanUrls() {
  const handler = (req, _res, next) => {
    const path = req.url.split('?')[0].replace(/\/+$/, '')
    const page = pages.find((p) => p.path && p.path !== '/' && p.path === path)
    if (page) req.url = `/${page.file}`
    next()
  }
  return {
    name: 'clean-urls',
    configureServer: (server) => void server.middlewares.use(handler),
    configurePreviewServer: (server) => void server.middlewares.use(handler),
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  appType: 'mpa',
  plugins: [react(), pageHead(), cleanUrls()],
  build: isSsrBuild
    ? { emptyOutDir: true }
    : {
        rollupOptions: {
          input: Object.fromEntries(pages.map((p) => [p.id, resolve(root, p.file)])),
        },
      },
}))
