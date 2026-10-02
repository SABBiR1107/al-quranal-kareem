import { APP_NAME, playStoreHref } from '../config.js'
import { features } from '../content.js'
import FeatureIcon from '../components/FeatureIcon.jsx'
import { DownloadSection, PageHeader } from '../components/Sections.jsx'

const arabicDigits = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

export default function Features() {
  return (
    <>
      <PageHeader eyebrow="Features" title="Made for reading">
        {APP_NAME} keeps things simple. Here is what you can expect from the app.
      </PageHeader>

      <section className="section">
        <div className="container">
          <ol className="feature-list">
            {features.map((feature, i) => (
              <li key={feature.id} className="feature-row reveal">
                <span className="feature-row__num" lang="ar" aria-hidden="true">
                  {arabicDigits[i]}
                </span>
                <FeatureIcon id={feature.id} />
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="note reveal">
            This page describes the app in general terms. For details of the current version, see the{' '}
            <a href={playStoreHref} target="_blank" rel="noopener noreferrer">
              Google Play listing<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            .
          </p>
        </div>
      </section>

      <DownloadSection />
    </>
  )
}
