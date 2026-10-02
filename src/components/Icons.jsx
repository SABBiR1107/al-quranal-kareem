// Small line icons drawn on a 24×24 grid. All decorative (aria-hidden).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const BookIcon = () => (
  <svg {...base}>
    <path d="M12 6.5C10 5 7.2 4.6 4 5v13c3.2-.4 6 0 8 1.5 2-1.5 4.8-1.9 8-1.5V5c-3.2-.4-6 0-8 1.5Z" />
    <path d="M12 6.5v13" />
  </svg>
)

export const LayoutIcon = () => (
  <svg {...base}>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="M8 9h8M8 12.5h8M8 16h5" />
  </svg>
)

export const CompassIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8" />
    <path d="m14.8 9.2-1.6 4-4 1.6 1.6-4 4-1.6Z" />
  </svg>
)

export const PhoneIcon = () => (
  <svg {...base}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M11 17.5h2" />
  </svg>
)

export const DoorIcon = () => (
  <svg {...base}>
    <path d="M6 20V8a6 6 0 0 1 12 0v12" />
    <path d="M4 20h16M12 11v4" />
  </svg>
)

export const ShieldIcon = () => (
  <svg {...base}>
    <path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6l-7-2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const UserIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="8.5" r="3.5" />
    <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
  </svg>
)

export const PinIcon = () => (
  <svg {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
)

export const MegaphoneIcon = () => (
  <svg {...base}>
    <path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5L7 9H5a1 1 0 0 0-1 1Z" />
    <path d="M18.5 9.5a3.5 3.5 0 0 1 0 5M8 15l1.2 4.5" />
  </svg>
)

export const LockIcon = () => (
  <svg {...base}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" />
  </svg>
)

export const MailIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
)

export const ArrowIcon = () => (
  <svg {...base} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ExternalIcon = () => (
  <svg {...base} width={16} height={16}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
)

export const MenuIcon = ({ open }) => (
  <svg {...base}>
    {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

// Google Play mark for the download button.
export const PlayMark = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden="true" focusable="false">
    <path d="M1.1.6C.8.9.6 1.4.6 2v20c0 .6.2 1.1.5 1.4L12.4 12 1.1.6Z" fill="#00c3ff" />
    <path d="M16.2 15.8 12.4 12l3.8-3.8 4.5 2.6c1.3.7 1.3 1.9 0 2.6l-4.5 2.4Z" fill="#ffce00" />
    <path d="M16.2 15.8 12.4 12 1.1 23.4c.4.4 1.1.5 1.9 0l13.2-7.6Z" fill="#ff3a44" />
    <path d="M16.2 8.2 3 .6C2.2.1 1.5.2 1.1.6L12.4 12l3.8-3.8Z" fill="#00e676" />
  </svg>
)
