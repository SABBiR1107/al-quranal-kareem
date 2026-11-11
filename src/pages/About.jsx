import { APP_CATEGORY, APP_NAME, PACKAGE_NAME, playStoreHref } from '../config.js'
import { ArrowIcon } from '../components/Icons.jsx'
import { DownloadSection, PageHeader } from '../components/Sections.jsx'

const sections = [
  {
    id: 'what',
    title: `What ${APP_NAME} is`,
    body: [
      `${APP_NAME}: Read & Listen is an Android application for reading, listening to and learning the Holy Quran — the Mushaf page by page, recitation by well-known reciters, translation and tafsir, prayer times and Qibla direction, all in one app. It is published on Google Play in the Books & Reference category.`,
    ],
  },
  {
    id: 'purpose',
    title: 'Why it was made',
    body: [
      'The purpose of the app is straightforward: to give anyone with an Android phone an easy, unhurried way to keep the Quran close — to read it, to listen to it, and to build a daily habit around it — without an account, without advertising, and without anything in the app trying to hold your attention longer than you meant to give it.',
    ],
  },
  {
    id: 'simple',
    title: 'Calm, accessible by design',
    body: [
      'The app focuses on reading and listening. Its interface is kept plain and its navigation direct, so that nothing stands between you and the text — eight light and dark themes let you choose what is comfortable, including a warm Sepia for long reading sessions and a true-black Midnight for night.',
      'That simplicity is intentional. It makes the app approachable for first-time users and comfortable for those who return to it every day.',
    ],
  },
  {
    id: 'mobile',
    title: 'Made for mobile, and for offline use',
    body: [
      'The app is designed for phones, with a layout suited to reading and listening on a smaller screen. Recitations can be downloaded once and kept for offline listening, so reading feels natural whether you are at home, travelling, or have a few quiet minutes with no signal at all.',
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
