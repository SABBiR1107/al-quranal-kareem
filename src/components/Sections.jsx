import { useId } from 'react'
import { APP_ICON, APP_NAME, APP_NAME_ARABIC, PACKAGE_NAME } from '../config.js'
import { StarPattern, starPoints } from './Ornament.jsx'
import PlayButton from './PlayButton.jsx'

const ARCH_OUTER = 'M0 520V250C0 140 90 70 200 0C310 70 400 140 400 250V520Z'
const ARCH_INNER = 'M20 520V256C20 152 104 90 200 26C296 90 380 152 380 256V520'

// Pointed arch (mihrab) framing the app icon and its Arabic name.
// The icon path is set by APP_ICON in src/config.js.
export function Arch() {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  return (
    <div className="arch">
      <svg className="arch__ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <polygon points={starPoints(50, 50, 48)} />
        <polygon points={starPoints(50, 50, 40)} />
      </svg>
      <svg className="arch__shape" viewBox="0 0 400 520" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={`clip-${uid}`}>
            <path d={ARCH_OUTER} />
          </clipPath>
          <radialGradient id={`glow-${uid}`} cx="50%" cy="38%" r="60%">
            <stop offset="0" stopColor="#1d6b53" />
            <stop offset="1" stopColor="#0a3428" />
          </radialGradient>
        </defs>
        <path d={ARCH_OUTER} fill={`url(#glow-${uid})`} />
        <g clipPath={`url(#clip-${uid})`} className="arch__pattern">
          <StarPattern size={58} strokeWidth={0.9} />
        </g>
        <path d={ARCH_INNER} fill="none" className="arch__line" strokeWidth="1.5" />
        <path d={ARCH_OUTER} fill="none" className="arch__line" strokeWidth="3" />
      </svg>
      <div className="arch__content">
        <img src={APP_ICON} width="120" height="120" alt={`${APP_NAME} app icon`} />
        <p className="arch__arabic" lang="ar" dir="rtl">
          {APP_NAME_ARABIC}
        </p>
        <p className="arch__latin">{APP_NAME}</p>
      </div>
    </div>
  )
}

export function PageHeader({ eyebrow, title, children, meta }) {
  return (
    <section className="page-header">
      <StarPattern className="page-header__pattern" size={64} />
      <div className="container page-header__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="page-header__lede">{children}</p>}
        {meta && <div className="page-header__meta">{meta}</div>}
      </div>
    </section>
  )
}

export function DownloadSection() {
  return (
    <section id="download" className="section download" aria-labelledby="download-title">
      <div className="container">
        <div className="download__card reveal">
          <StarPattern className="download__pattern" size={60} />
          <div className="download__copy">
            <p className="eyebrow eyebrow--light">Download</p>
            <h2 id="download-title">Read the Quran on your Android phone.</h2>
            <p>
              {APP_NAME} is available on Google Play. Install it on your Android device and open the
              Quran whenever you wish to read.
            </p>
            <div className="download__actions">
              <PlayButton />
              <p className="download__meta">
                Package <code>{PACKAGE_NAME}</code>
              </p>
            </div>
          </div>
          <div className="download__art" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <polygon points={starPoints(50, 50, 48)} />
            </svg>
            <img src={APP_ICON} width="104" height="104" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
