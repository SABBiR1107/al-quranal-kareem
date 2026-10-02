import { useEffect, useState } from 'react'
import { APP_ICON, APP_NAME, APP_NAME_ARABIC, PACKAGE_NAME, PRIVACY_POLICY_URL, navLinks } from '../config.js'
import { MenuIcon } from './Icons.jsx'
import { StarPattern } from './Ornament.jsx'
import PlayButton from './PlayButton.jsx'

function Brand() {
  return (
    <a className="brand" href="/" aria-label={`${APP_NAME} — home`}>
      <img src={APP_ICON} width="36" height="36" alt="" />
      <span className="brand__name">
        Al-Quran <em>Al-Kareem</em>
      </span>
    </a>
  )
}

function Header({ page }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container site-header__inner">
        <Brand />
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} aria-current={link.id === page ? 'page' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <PlayButton size="sm" />
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <StarPattern className="site-footer__pattern" size={72} />
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Brand />
          <p>A simple and accessible Quran application for Android.</p>
          <p className="site-footer__arabic" lang="ar" dir="rtl">
            {APP_NAME_ARABIC}
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="site-footer__heading">Pages</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="site-footer__heading">App</h2>
          <ul>
            <li>
              <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
                Full privacy policy<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href="/#download">Download on Google Play</a>
            </li>
            <li className="site-footer__meta">
              Package <code>{PACKAGE_NAME}</code>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__base">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {APP_NAME}. All rights
          reserved.
        </p>
        <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </div>
    </footer>
  )
}

// Fades sections in as they scroll into view. Content stays visible without
// JavaScript and for visitors who prefer reduced motion (see global.css).
function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Layout({ page, children }) {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header page={page} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
