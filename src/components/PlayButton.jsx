import { APP_NAME, playStoreHref } from '../config.js'
import { PlayMark } from './Icons.jsx'

export default function PlayButton({ size = 'md', className = '' }) {
  return (
    <a
      className={`play-btn play-btn--${size} ${className}`}
      href={playStoreHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get ${APP_NAME} on Google Play (opens in a new tab)`}
    >
      <PlayMark />
      <span className="play-btn__text">
        <small>Get it on</small>
        <strong>Google Play</strong>
      </span>
    </a>
  )
}
