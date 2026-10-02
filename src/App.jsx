import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Features from './pages/Features.jsx'
import Privacy from './pages/Privacy.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const views = {
  home: Home,
  about: About,
  features: Features,
  privacy: Privacy,
  contact: Contact,
  'not-found': NotFound,
}

export default function App({ page }) {
  const View = views[page] ?? NotFound
  return (
    <Layout page={page}>
      <View />
    </Layout>
  )
}
