import { APP_CATEGORY, APP_NAME, PACKAGE_NAME, playStoreHref } from '../config.js'
import { ArrowIcon } from '../components/Icons.jsx'
import { DownloadSection, PageHeader } from '../components/Sections.jsx'

const sections = [
  {
    id: 'what',
    title: `What ${APP_NAME} is`,
    body: [
      `${APP_NAME} — “The Noble Quran” — is an Android application for reading the Holy Quran. It is published on Google Play in the Books & Reference category.`,
    ],
  },
  {
    id: 'purpose',
    title: 'Why it was made',
    body: [
      'The purpose of the app is straightforward: to give anyone with an Android phone an easy way to open and read the Quran, wherever they happen to be.',
    ],
  },
  {
    id: 'simple',
    title: 'Simple, accessible reading',
    body: [
      'The app focuses on reading. Its interface is kept plain and its navigation direct, so that nothing stands between the reader and the text.',
      'That simplicity is intentional. It makes the app approachable for first-time users and comfortable for those who return to it every day.',
    ],
  },
  {
    id: 'mobile',
    title: 'Made for mobile',
    body: [
      'The app is designed for phones. Its layout suits a smaller screen, so reading feels natural whether you are at home, travelling, or have a few quiet minutes in your day.',
    ],
  },
]

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title={`About ${APP_NAME}`}>
        A Quran application for Android, focused on simple and accessible reading.
      </PageHeader>

      <section className="section">
        <div className="container about">
          <div className="prose">
            {sections.map((s) => (
              <article key={s.id} className="prose__block reveal" aria-labelledby={`about-${s.id}`}>
                <h2 id={`about-${s.id}`}>{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </article>
            ))}
            <p className="reveal">
              <a className="link-arrow" href="/features">
                See what the app offers <ArrowIcon />
              </a>
            </p>
          </div>

          <aside className="facts reveal" aria-labelledby="facts-title">
            <h2 id="facts-title">At a glance</h2>
            <dl>
              <div>
                <dt>Name</dt>
                <dd>{APP_NAME}</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Android</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{APP_CATEGORY}</dd>
              </div>
              <div>
                <dt>Package</dt>
                <dd>
                  <code>{PACKAGE_NAME}</code>
                </dd>
              </div>
              <div>
                <dt>Available on</dt>
                <dd>
                  <a href={playStoreHref} target="_blank" rel="noopener noreferrer">
                    Google Play<span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <DownloadSection />
    </>
  )
}
