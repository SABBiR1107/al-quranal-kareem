// Runs after `vite build`. Renders every page to static HTML, writes the
// sitemap, and checks that app-ads.txt made it into the output unchanged.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { pages, resolveSiteUrl } from '../src/config.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const siteUrl = resolveSiteUrl(process.env)

const APP_ADS_LINE = 'google.com, pub-9250366510239722, DIRECT, f08c47fec0942fa0'

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

for (const page of pages) {
  const file = path.join(dist, page.file)
  const html = await fs.readFile(file, 'utf8')
  if (!html.includes('<!--app-html-->')) throw new Error(`Missing <!--app-html--> in ${page.file}`)
  await fs.writeFile(file, html.replace('<!--app-html-->', () => render(page.id)))
  console.log(`  prerendered  ${page.file}`)
}

await fs.rm(ssrDir, { recursive: true, force: true })

// Sitemap + robots.txt (needs an absolute URL, available automatically on Vercel)
if (siteUrl) {
  const urls = pages
    .filter((p) => p.path && !p.noindex)
    .map((p) => `  <url><loc>${siteUrl}${p.path === '/' ? '/' : p.path}</loc></url>`)
  await fs.writeFile(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
  )
  await fs.appendFile(path.join(dist, 'robots.txt'), `\nSitemap: ${siteUrl}/sitemap.xml\n`)
  console.log(`  sitemap.xml  ${siteUrl}`)
} else {
  console.log('  sitemap.xml  skipped (set SITE_URL to generate it locally)')
}

// app-ads.txt must be served verbatim from the site root.
const ads = await fs.readFile(path.join(dist, 'app-ads.txt'), 'utf8').catch(() => null)
if (ads === null) throw new Error('dist/app-ads.txt is missing')
if (ads.replace(/\r?\n$/, '') !== APP_ADS_LINE) {
  throw new Error(`dist/app-ads.txt has unexpected content:\n${ads}`)
}
console.log('  app-ads.txt  verified')
