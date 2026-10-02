import { ArrowIcon } from '../components/Icons.jsx'
import { PageHeader } from '../components/Sections.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="Page not found">
        The page you were looking for doesn’t exist or may have moved.
      </PageHeader>
      <section className="section">
        <div className="container narrow">
          <a className="link-arrow" href="/">
            Return to the home page <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  )
}
