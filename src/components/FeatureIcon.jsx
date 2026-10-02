import { BookIcon, CompassIcon, DoorIcon, LayoutIcon, PhoneIcon } from './Icons.jsx'
import { StarFrame } from './Ornament.jsx'

const icons = {
  reading: BookIcon,
  interface: LayoutIcon,
  navigation: CompassIcon,
  mobile: PhoneIcon,
  access: DoorIcon,
}

export default function FeatureIcon({ id }) {
  const Icon = icons[id] ?? BookIcon
  return (
    <StarFrame className="feature-icon">
      <Icon />
    </StarFrame>
  )
}
