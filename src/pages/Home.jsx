import { APP_NAME, APP_TAGLINE } from '../config.js'
import { features } from '../content.js'
import FeatureIcon from '../components/FeatureIcon.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import { Divider, StarPattern } from '../components/Ornament.jsx'
import PlayButton from '../components/PlayButton.jsx'
import { Arch, DownloadSection } from '../components/Sections.jsx'

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <StarPattern className="hero__pattern" size={72} />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Android app · Books &amp; Reference</p>
            <h1 id="hero-title">
              Holy <span>Quran</span>
            </h1>
            <p className="hero__lede">{APP_TAGLINE} — a calm, ad-free way to read, listen to and learn the Quran.</p>
            <p className="hero__text">
              Read the Mushaf page by page, listen to recitation by well-known reciters, keep track of
              prayer times and Qibla direction, and pick up a daily reading habit — all in one quiet,
              uncluttered app with no sign-up and no ads.
            </p>
            <div className="hero__actions">
              <PlayButton />
              <a className="link-arrow" href="/about">
                About the app <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero__art">
            <Arch />
          </div>
        </div>
      </section>

      <section className="bismillah" aria-label="Bismillah">
        <div className="container">
          <Divider />
          <p lang="ar" dir="rtl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="bismillah__translation">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>
      </section>

      <section className="section intro" aria-labelledby="intro-title">
        <div className="container intro__grid reveal">
          <div>
            <p className="eyebrow">Introduction</p>
            <h2 id="intro-title">Reading, kept simple.</h2>
          </div>
          <div className="intro__body">
            <p>
              {APP_NAME} is an Android application for reading, listening to and learning the Holy
              Quran. It is built around a single idea: opening the Quran on your phone should be easy,
              and using it every day should feel calm and clear, never crowded.
            </p>
            <p>
              The app keeps its interface plain and its navigation straightforward, with no account, no
              advertising and nothing watching how you use it — so that anyone can pick it up and begin
              reading without having to learn how it works first.
            </p>
            <a className="link-arrow" href="/about">
              Read more about the app <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="section features-preview" aria-labelledby="features-title">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Features</p>
            <h2 id="features-title">What the app offers</h2>
          </div>
          <ul className="feature-grid">
            {features.map((feature) => (
              <li key={feature.id} className="feature-card reveal">
                <FeatureIcon id={feature.id} />
                <h3>{feature.title}</h3>
                <p>{feature.summary}</p>
              </li>
            ))}
          </ul>
          <p className="section-more reveal">
            <a className="link-arrow" href="/features">
              See all features in detail <ArrowIcon />
            </a>
          </p>
        </div>
      </section>

      <DownloadSection />
    </>
  )
}
