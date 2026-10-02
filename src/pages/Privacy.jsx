import { APP_NAME, PRIVACY_POLICY_URL } from '../config.js'
import { privacyPolicy as policy } from '../content.js'
import { ExternalIcon, LockIcon, MegaphoneIcon, PinIcon, UserIcon } from '../components/Icons.jsx'
import { StarFrame } from '../components/Ornament.jsx'
import { PageHeader } from '../components/Sections.jsx'

const highlightIcons = { account: UserIcon, location: PinIcon, ads: MegaphoneIcon, secure: LockIcon }

const toc = [
  ...policy.sections.map((s, i) => ({ id: s.id, label: `${i + 1}. ${s.title}` })),
  { id: 'this-website', label: 'About this website' },
  { id: 'questions', label: 'Questions' },
]

function Block({ block }) {
  if (block.type === 'h3') return <h3>{block.text}</h3>
  if (block.type === 'list')
    return (
      <ul className="policy__list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  return <p>{block.text}</p>
}

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        meta={
          <>
            <span className="meta-chip">
              Effective date: <time dateTime="2026-09-08">{policy.effectiveDate}</time>
            </span>
            <a className="meta-chip meta-chip--link" href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
              View the original policy <ExternalIcon />
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </>
        }
      >
        How the {APP_NAME} app collects, uses and protects information about you.
      </PageHeader>

      <section className="section policy-highlights" aria-labelledby="highlights-title">
        <div className="container">
          <h2 id="highlights-title" className="visually-hidden">
            Summary
          </h2>
          <ul className="highlight-grid">
            {policy.highlights.map((h) => {
              const Icon = highlightIcons[h.id]
              return (
                <li key={h.id} className="highlight reveal">
                  <StarFrame className="feature-icon">
                    <Icon />
                  </StarFrame>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </li>
              )
            })}
          </ul>
          <p className="highlight-note">
            This summary is for convenience. The full policy below is what applies.
          </p>
        </div>
      </section>

      <section className="section policy-body">
        <div className="container policy">
          <aside className="policy__toc" aria-labelledby="toc-title">
            <h2 id="toc-title">On this page</h2>
            <ol>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="policy__content">
            <p className="policy__intro">{policy.intro}</p>

            {policy.sections.map((section, i) => (
              <section key={section.id} id={section.id} className="policy__section" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>
                  <span className="policy__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </section>
            ))}

            <section id="this-website" className="policy__section policy__section--aside" aria-labelledby="this-website-title">
              <h2 id="this-website-title">About this website</h2>
              <p>
                This website is a static, informational site about the app. It does not set cookies, does
                not use analytics or advertising trackers, and does not collect personal information
                through forms. Fonts are served from this site rather than from a third party.
              </p>
              <p>
                As with any website, the hosting provider may process standard technical information, such
                as IP addresses in server logs, in order to deliver pages securely.
              </p>
            </section>

            <section id="questions" className="policy__section policy__section--aside" aria-labelledby="questions-title">
              <h2 id="questions-title">Questions</h2>
              <p>
                If you have a question about this policy, please use the details on the{' '}
                <a href="/contact">contact page</a>. This policy is also published at{' '}
                <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
                  {PRIVACY_POLICY_URL.replace('https://', '')}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
