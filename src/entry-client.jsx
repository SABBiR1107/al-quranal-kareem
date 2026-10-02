import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/amiri/arabic-400.css'
import '@fontsource/amiri/arabic-700.css'
import '@fontsource/eb-garamond/latin-500.css'
import '@fontsource/eb-garamond/latin-500-italic.css'
import '@fontsource-variable/manrope/wght.css'
import './styles/global.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App page={document.body.dataset.page || 'home'} />
  </StrictMode>
)

// Production pages are pre-rendered at build time, so hydrate them.
// In `vite dev` the container is empty, so render from scratch.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
