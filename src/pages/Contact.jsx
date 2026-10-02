import { APP_NAME, DEVELOPER_EMAIL, emailIsPlaceholder, playStoreHref } from '../config.js'
import { MailIcon } from '../components/Icons.jsx'
import { StarFrame } from '../components/Ornament.jsx'
import { PageHeader } from '../components/Sections.jsx'

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch">
        Questions, feedback or suggestions about {APP_NAME} are welcome.
      </PageHeader>

      <section className="section">
        <div className="container narrow">
          <div className="contact-card reveal">
            <StarFrame className="feature-icon">
              <MailIcon />
            </StarFrame>
            <div>
              <h2>Email the developer</h2>
              <p>For questions, feedback or support regarding the app, write to:</p>
              <p className="contact-card__email">
                <a href={`mailto:${DEVELOPER_EMAIL}`}>{DEVELOPER_EMAIL}</a>
                {emailIsPlaceholder && <span className="badge">Placeholder</span>}
              </p>
              {emailIsPlaceholder && (
                <p className="contact-card__notice" role="note">
                  This is a placeholder address, not a real inbox. The developer’s contact email will be
                  published here soon.
                </p>
              )}
            </div>
          </div>

          <div className="prose">
            <article className="prose__block reveal" aria-labelledby="contact-play">
              <h2 id="contact-play">Feedback on Google Play</h2>
              <p>
                You can also share feedback by leaving a review on the app’s{' '}
                <a href={playStoreHref} target="_blank" rel="noopener noreferrer">
                  Google Play listing<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
