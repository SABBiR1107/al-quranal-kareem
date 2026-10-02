import { useId } from 'react'

// Vertices of an eight-pointed star (two overlapping squares, as in the
// Rub el Hizb), centred on cx/cy with outer radius R.
export function starPoints(cx, cy, R) {
  const r = R * 0.7654
  const pts = []
  for (let i = 0; i < 16; i++) {
    const a = (i * Math.PI) / 8
    const d = i % 2 === 0 ? R : r
    pts.push(`${(cx + d * Math.cos(a)).toFixed(2)},${(cy + d * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

const safeId = (id) => id.replace(/[^a-zA-Z0-9_-]/g, '')

// Tileable lattice of eight-pointed stars joined by straight lines.
export function StarPattern({ size = 64, strokeWidth = 1, className = '' }) {
  const id = `pattern-${safeId(useId())}`
  const c = size / 2
  const R = size * 0.3
  const rc = size * 0.17
  const f = (n) => +n.toFixed(2)
  const a = f(c + R * Math.SQRT1_2) // centre star's diagonal tips
  const b = f(c - R * Math.SQRT1_2)
  const k = f(rc * Math.SQRT1_2) // corner stars' diagonal tips
  const K = f(size - k)
  return (
    <svg className={className} aria-hidden="true" focusable="false" width="100%" height="100%">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
            <polygon points={starPoints(c, c, R)} />
            <polygon points={starPoints(c, c, R * 0.42)} />
            {[
              [0, 0],
              [size, 0],
              [0, size],
              [size, size],
            ].map(([x, y]) => (
              <polygon key={`${x}-${y}`} points={starPoints(x, y, rc)} />
            ))}
            {/* straight links from the centre star to edges and corners */}
            <path
              d={[
                `M${c + R} ${c}H${size}`,
                `M${c - R} ${c}H0`,
                `M${c} ${c + R}V${size}`,
                `M${c} ${c - R}V0`,
                `M${a} ${a}L${K} ${K}`,
                `M${b} ${b}L${k} ${k}`,
                `M${a} ${b}L${K} ${k}`,
                `M${b} ${a}L${k} ${K}`,
              ].join('')}
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

// A single eight-pointed star outline, used as a frame for icons and numerals.
export function StarFrame({ className = '', children }) {
  return (
    <span className={`star-frame ${className}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <polygon points={starPoints(50, 50, 47)} />
      </svg>
      <span className="star-frame__inner">{children}</span>
    </span>
  )
}

// Thin horizontal rule with a star at its centre.
export function Divider({ className = '' }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span className="divider__line" />
      <svg viewBox="0 0 24 24" width="18" height="18">
        <polygon points={starPoints(12, 12, 10)} />
      </svg>
      <span className="divider__line" />
    </div>
  )
}
